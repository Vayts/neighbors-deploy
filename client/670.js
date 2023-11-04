(self.webpackChunk=self.webpackChunk||[]).push([[670],{48646:function(e,r,n){"use strict";var t=n(27378),o=n(14935),a=n(60042),i=n.n(a),c=n(88922),l=n(68257),s=n.n(l);r.Z=function(){var e=(0,o.s0)(),r=(0,c.$G)().t;return t.createElement("div",{className:s().BackButtonWrapper,onClick:function(){e(-1)}},t.createElement("div",{className:s().BackButtonContent},t.createElement("span",{className:i()(s().BackButtonIcon,"icon-left")}),t.createElement("span",{className:s().BackButtonText},r("back"))))}},12646:function(e,r,n){"use strict";function t(e,r){return{isAllMembersInvited:e.isAllMembersInvited,name:e.name.trim(),neighborhood_id:e.neighborhood_id,participants:e.isAllMembersInvited?r.map((function(e){return e})):e.participants}}function o(e){return{name:e.name.trim()}}n.d(r,{g:function(){return o},l:function(){return t}})},99670:function(e,r,n){"use strict";n.r(r);var t=n(30126),o=n(64649),a=n(65809),i=n(27378),c=n(48646),l=n(58728),s=n(33047),p=n(26904),d=n(36907),u=n(88922),f=n(12693),m=n(83732),b=n(93218),g=n(36593),C=n(13187),A=n(40284),h=n(31396),B=n(14935),x=n(67981),v=n(25394),y=n(12646),$=n(1059),k=n.n($);function w(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function D(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?w(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var _={neighborhood_id:"",name:"",participants:[],isAllMembersInvited:!0,errors:{}};r.default=function(){var e,r,n,$,w=(0,B.UO)().id,O=(0,i.useState)(!1),E=(0,a.Z)(O,2),P=E[0],j=E[1],W=(0,i.useState)(D(D({},_),{},{neighborhood_id:w||"",errors:(0,h.l)(_)})),N=(0,a.Z)(W,2),T=N[0],F=N[1],I=(0,f.C)(g.k),M=(0,f.C)((function(e){return e.userNeighborhoods.entities[T.neighborhood_id]})),S=(0,f.C)(m.d),Z=(0,i.useMemo)((function(){return(0,b.Xy)(I)}),[I]),U=(0,i.useMemo)((function(){return(0,b.T$)(M,null==S?void 0:S._id)}),[M]),G=(0,B.s0)(),Y=(0,f.T)(),z=(0,u.$G)().t,H=(0,i.useCallback)((function(e,r){F((function(n){var t=D(D({},n),{},(0,o.Z)({},e,r));return D(D({},t),{},{errors:(0,h.l)(t)})}))}),[]),J=(0,i.useCallback)((function(e){var r=e.target,n=r.name,t=r.value;F((function(e){var r=D(D({},e),{},(0,o.Z)({},n,t));return D(D({},r),{},{errors:(0,h.l)(r)})}))}),[]),R=(0,i.useCallback)((function(e){F((function(r){var n=D({},r);return r.participants.includes(e)?n.participants=r.participants.filter((function(r){return r!==e})):n.participants=[].concat((0,t.Z)(r.participants),[e]),D(D({},n),{},{errors:(0,h.l)(n)})}))}),[]);return i.createElement("div",{className:k().CreateDutyPageWrapper},i.createElement("div",{className:k().CreateDutyFormWrapper},i.createElement("div",{className:k().CreateDutyTitleWrapper},i.createElement("div",{className:k().CreateDutyBack},i.createElement(c.Z,null)),i.createElement("h3",{className:k().CreateDutyTitle},z("createDuty"))),i.createElement("form",{className:k().CreateDutyForm},i.createElement("div",{className:k().CreateSelectWrapper},i.createElement(l.Z,{value:T.neighborhood_id,onChange:J,name:"neighborhood_id",label:z("neighborhood"),placeholder:z("selectNeighborhood"),valuesArr:Z,isInvalid:Boolean(null===(e=T.errors)||void 0===e?void 0:e.neighborhood_id),error:null===(r=T.errors)||void 0===r?void 0:r.neighborhood_id})),i.createElement("div",{className:"mb-16"},i.createElement(s.Z,{onChange:J,value:T.name,name:"name",label:z("dutyName"),placeholder:z("enterName"),error:null===(n=T.errors)||void 0===n?void 0:n.name,isInvalid:Boolean(null===($=T.errors)||void 0===$?void 0:$.name)})),i.createElement("div",{className:"mb-16"},i.createElement(A.Z,{checked:T.isAllMembersInvited,onChange:H,name:"isAllMembersInvited",label:z("allNeighborsInvited")})),!T.isAllMembersInvited&&i.createElement("div",{className:"mb-32"},i.createElement(C.Z,{members:U,checkedArr:T.participants,onMemberSelect:R})),i.createElement("div",{className:"mb-16"},i.createElement(p.Z,{onClick:function(e){if(e.preventDefault(),j(!0),!Object.values(T.errors).length){var r=(0,y.l)(T,U);Y((0,x.W6)(r)).unwrap().then((function(){G("/duties".concat(w?"/".concat(w):""))})).catch((function(e){var r,n;(0,v.D)(null==e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message,d.X1.plan)})).finally((function(){j(!1)}))}},text:z("create"),disabled:Boolean(Object.values(T.errors).length)||P})))))}},31396:function(e,r,n){"use strict";n.d(r,{l:function(){return p},o:function(){return d}});var t=n(64649),o=n(30298),a=n(67226);function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var l=n(22501).ZP.t;function s(e){var r={},n=e.trim();return""===n?(r.name=l("requiredField"),r):o.bo.test(n)?n.length<a.g5.minName?(r.name=l("atLeast",{value:a.g5.minName}),r):n.length>a.g5.maxName?(r.name=l("lessThan",{value:a.g5.maxName}),r):r:(r.name=l("incorrectValue"),r)}function p(e){var r=s(e.name),n=function(e){var r={};return""===e.trim()?(r.neighborhood_id=l("requiredField"),r):r}(e.neighborhood_id),t=c(c({},r),n);return e.isAllMembersInvited||Object.assign(t,function(e){var r={};return e.length<a.g5.minParticipantsLength&&(r.participants=l("atLeastOneParticipant")),r}(e.participants)),c({},t)}function d(e){var r=c({},s(e.name));return c({},r)}},17562:function(e,r,n){"use strict";n.r(r);var t=n(20559),o=n.n(t),a=n(93476),i=n.n(a)()(o());i.push([e.id,".BackButtonWrapper_R4lAc{display:inline-block;padding:4px 14px;border-radius:5px;border:2px solid transparent;transition:background-color 0.4s;cursor:pointer}.BackButtonWrapper_R4lAc:hover{border-color:#eeeff3;background-color:#eeeff3}.BackButtonContent_GU74w{display:flex;align-items:center}.BackButtonIcon_AK6MU{margin-right:7px;font-size:12px}.BackButtonText_J_Q29{margin:4px 0;font-weight:700;font-size:14px;line-height:1}\n","",{version:3,sources:["webpack://./components/BackButton/BackButton.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,yBACE,oBAAqB,CACrB,gBAAiB,CACjB,iBAAkB,CAClB,4BAA6B,CAC7B,gCAAiC,CACjC,cAAe,CANjB,+BASI,oBCNoB,CDOpB,wBCPoB,CDQrB,yBAID,YAAa,CACb,kBAAmB,CACpB,sBAGC,gBAAiB,CACjB,cAAe,CAChB,sBAGC,YAAa,CACb,eAAgB,CAChB,cAAe,CACf,aAAc",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.BackButtonWrapper {\r\n  display: inline-block;\r\n  padding: 4px 14px;\r\n  border-radius: 5px;\r\n  border: 2px solid transparent;\r\n  transition: background-color 0.4s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    border-color: $light-bg-color;\r\n    background-color: $light-bg-color;\r\n  }\r\n}\r\n\r\n.BackButtonContent {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.BackButtonIcon {\r\n  margin-right: 7px;\r\n  font-size: 12px;\r\n}\r\n\r\n.BackButtonText {\r\n  margin: 4px 0;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  line-height: 1;\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={BackButtonWrapper:"BackButtonWrapper_R4lAc",BackButtonContent:"BackButtonContent_GU74w",BackButtonIcon:"BackButtonIcon_AK6MU",BackButtonText:"BackButtonText_J_Q29"},r.default=i},90403:function(e,r,n){"use strict";n.r(r);var t=n(20559),o=n.n(t),a=n(93476),i=n.n(a)()(o());i.push([e.id,'.CreateDutyPageWrapper_fwYk1{display:flex;justify-content:center}.CreateDutyFormWrapper_h0J11{margin-top:30px;width:100%;max-width:420px}.CreateDutyBack_POA5F{position:absolute;grid-area:link}.CreateDutyTitleWrapper_FfPUH{width:100%;display:grid;align-items:center;grid-template-areas:"link title .";grid-template-columns:minmax(100px, 1fr) auto minmax(100px, 1fr);margin-bottom:30px}.CreateDutyTitle_d93rU{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;align-self:center;font-size:22px;grid-area:title;margin:0;flex-grow:1;color:#485268}.CreateDutyForm_Uc5P0{padding:30px 20px;background-color:#fff;border-radius:5px}.CreateSelectWrapper_xY4pH{margin-bottom:16px;border-bottom:1px solid #dee2ed;padding-bottom:20px}\n',"",{version:3,sources:["webpack://./pages/CreateDutyPage/CreateDutyPage.module.scss","webpack://./styles/_mixins.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,6BACE,YAAa,CACb,sBAAuB,CACxB,6BAGC,eAAgB,CAChB,UAAW,CACX,eAAgB,CACjB,sBAGC,iBAAkB,CAClB,cAAe,CAChB,8BAGC,UAAW,CACX,YAAa,CACb,kBAAmB,CACnB,kCAAmC,CACnC,gEAA+D,CAC/D,kBAAmB,CACpB,uBCJC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aCFwB,CFOxB,iBAAkB,CAClB,cAAe,CACf,eAAgB,CAChB,QAAS,CACT,WAAY,CACZ,aEX8B,CFY/B,sBAGC,iBAAkB,CAClB,qBEhCoB,CFiCpB,iBEHiB,CFIlB,2BAGC,kBAAmB,CACnB,+BE9BoB,CF+BpB,mBAAoB",sourcesContent:['@import "@src/styles/mixins";\n\n.CreateDutyPageWrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.CreateDutyFormWrapper {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 420px;\n}\n\n.CreateDutyBack {\n  position: absolute;\n  grid-area: link;\n}\n\n.CreateDutyTitleWrapper {\n  width: 100%;\n  display: grid;\n  align-items: center;\n  grid-template-areas: "link title .";\n  grid-template-columns: minmax(100px,1fr) auto minmax(100px,1fr);\n  margin-bottom: 30px;\n}\n\n.CreateDutyTitle {\n  @include title;\n  align-self: center;\n  font-size: 22px;\n  grid-area: title;\n  margin: 0;\n  flex-grow: 1;\n  color: $title-light-text-color;\n}\n\n.CreateDutyForm {\n  padding: 30px 20px;\n  background-color: $component-bg;\n  border-radius: $border-radius;\n}\n\n.CreateSelectWrapper {\n  margin-bottom: 16px;\n  border-bottom: 1px solid $border-color;\n  padding-bottom: 20px;\n}\n','@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={CreateDutyPageWrapper:"CreateDutyPageWrapper_fwYk1",CreateDutyFormWrapper:"CreateDutyFormWrapper_h0J11",CreateDutyBack:"CreateDutyBack_POA5F",CreateDutyTitleWrapper:"CreateDutyTitleWrapper_FfPUH",CreateDutyTitle:"CreateDutyTitle_d93rU",CreateDutyForm:"CreateDutyForm_Uc5P0",CreateSelectWrapper:"CreateSelectWrapper_xY4pH"},r.default=i},68257:function(e,r,n){var t=n(1892),o=n(95760),a=n(38311),i=n(58192),c=n(38060),l=n(54865),s=n(17562);s=s.__esModule?s.default:s;var p={};p.styleTagTransform=l,p.setAttributes=i,p.insert=a.bind(null,"head"),p.domAPI=o,p.insertStyleElement=c,t(s,p),e.exports=s&&s.locals||{}},1059:function(e,r,n){var t=n(1892),o=n(95760),a=n(38311),i=n(58192),c=n(38060),l=n(54865),s=n(90403);s=s.__esModule?s.default:s;var p={};p.styleTagTransform=l,p.setAttributes=i,p.insert=a.bind(null,"head"),p.domAPI=o,p.insertStyleElement=c,t(s,p),e.exports=s&&s.locals||{}}}]);
//# sourceMappingURL=670.js.map