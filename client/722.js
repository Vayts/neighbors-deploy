(self.webpackChunk=self.webpackChunk||[]).push([[722],{48646:function(r,e,n){"use strict";var t=n(27378),o=n(14935),a=n(60042),i=n.n(a),c=n(88922),l=n(68257),s=n.n(l);e.Z=function(){var r=(0,o.s0)(),e=(0,c.$G)().t;return t.createElement("div",{className:s().BackButtonWrapper,onClick:function(){r(-1)}},t.createElement("div",{className:s().BackButtonContent},t.createElement("span",{className:i()(s().BackButtonIcon,"icon-left")}),t.createElement("span",{className:s().BackButtonText},e("back"))))}},12646:function(r,e,n){"use strict";function t(r,e){return{isAllMembersInvited:r.isAllMembersInvited,name:r.name.trim(),neighborhood_id:r.neighborhood_id,participants:r.isAllMembersInvited?e.map((function(r){return r})):r.participants}}function o(r){return{name:r.name.trim()}}n.d(e,{g:function(){return o},l:function(){return t}})},94722:function(r,e,n){"use strict";n.r(e);var t=n(64649),o=n(65809),a=n(27378),i=n(14935),c=n(65783),l=n(12693),s=n(88922),d=n(31396),p=n(48646),f=n(33047),u=n(26904),m=n(12646),g=n(67981),b=n(99907),A=n(56970),B=n.n(A);function h(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function x(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){(0,t.Z)(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}e.default=function(){var r,e;(0,b.W)();var n=(0,i.UO)().dutyId,A=(0,l.C)((function(r){return r.duties.entities[n]})),h=(0,c.lr)(),C=(0,o.Z)(h,1)[0].get("neighborhood_id"),y=(0,a.useState)({name:A?A.name:"",errors:{}}),$=(0,o.Z)(y,2),v=$[0],k=$[1],E=(0,a.useState)(!1),D=(0,o.Z)(E,2),w=D[0],O=D[1],_=(0,i.s0)(),j=(0,l.T)(),W=(0,s.$G)().t;(0,a.useEffect)((function(){n&&A||_("/duties".concat(C?"?neighborhood_id=".concat(C):""))}),[]);var P=(0,a.useCallback)((function(r){var e=r.target,n=e.name,o=e.value;k((function(r){var e=x(x({},r),{},(0,t.Z)({},n,o));return x(x({},e),{},{errors:(0,d.o)(e)})}))}),[]);return a.createElement("div",{className:B().EditDutyPageWrapper},a.createElement("div",{className:B().EditDutyFormWrapper},a.createElement("div",{className:B().EditDutyTitleWrapper},a.createElement("div",{className:B().EditDutyBack},a.createElement(p.Z,null)),a.createElement("h3",{className:B().EditDutyTitle},W("editDuty"))),a.createElement("form",{className:B().EditDutyForm},a.createElement("div",{className:"mb-16"},a.createElement(f.Z,{onChange:P,value:v.name,name:"name",label:W("dutyName"),placeholder:W("enterName"),error:null===(r=v.errors)||void 0===r?void 0:r.name,isInvalid:Boolean(null===(e=v.errors)||void 0===e?void 0:e.name)})),a.createElement("div",{className:"mb-16"},a.createElement(u.Z,{onClick:function(r){if(r.preventDefault(),!Object.values(v.errors).length){O(!0);var e=(0,m.g)(v);j((0,g.ib)({id:n,values:e})).then((function(){_("/duties".concat(C?"?neighborhood_id=".concat(C):""))})).finally((function(){O(!1)}))}},text:W("edit"),disabled:Boolean(Object.values(v.errors).length)||w})))))}},31396:function(r,e,n){"use strict";n.d(e,{l:function(){return d},o:function(){return p}});var t=n(64649),o=n(30298),a=n(67226);function i(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function c(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){(0,t.Z)(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}var l=n(22501).ZP.t;function s(r){var e={},n=r.trim();return""===n?(e.name=l("requiredField"),e):o.bo.test(n)?n.length<a.g5.minName?(e.name=l("atLeast",{value:a.g5.minName}),e):n.length>a.g5.maxName?(e.name=l("lessThan",{value:a.g5.maxName}),e):e:(e.name=l("incorrectValue"),e)}function d(r){var e=s(r.name),n=function(r){var e={};return""===r.trim()?(e.neighborhood_id=l("requiredField"),e):e}(r.neighborhood_id),t=c(c({},e),n);return r.isAllMembersInvited||Object.assign(t,function(r){var e={};return r.length<a.g5.minParticipantsLength&&(e.participants=l("atLeastOneParticipant")),e}(r.participants)),c({},t)}function p(r){var e=c({},s(r.name));return c({},e)}},17562:function(r,e,n){"use strict";n.r(e);var t=n(20559),o=n.n(t),a=n(93476),i=n.n(a)()(o());i.push([r.id,".BackButtonWrapper_R4lAc{display:inline-block;padding:4px 14px;border-radius:5px;border:2px solid transparent;transition:background-color 0.4s;cursor:pointer}.BackButtonWrapper_R4lAc:hover{border-color:#eeeff3;background-color:#eeeff3}.BackButtonContent_GU74w{display:flex;align-items:center}.BackButtonIcon_AK6MU{margin-right:7px;font-size:12px}.BackButtonText_J_Q29{margin:4px 0;font-weight:700;font-size:14px;line-height:1}\n","",{version:3,sources:["webpack://./components/BackButton/BackButton.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,yBACE,oBAAqB,CACrB,gBAAiB,CACjB,iBAAkB,CAClB,4BAA6B,CAC7B,gCAAiC,CACjC,cAAe,CANjB,+BASI,oBCNoB,CDOpB,wBCPoB,CDQrB,yBAID,YAAa,CACb,kBAAmB,CACpB,sBAGC,gBAAiB,CACjB,cAAe,CAChB,sBAGC,YAAa,CACb,eAAgB,CAChB,cAAe,CACf,aAAc",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.BackButtonWrapper {\r\n  display: inline-block;\r\n  padding: 4px 14px;\r\n  border-radius: 5px;\r\n  border: 2px solid transparent;\r\n  transition: background-color 0.4s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    border-color: $light-bg-color;\r\n    background-color: $light-bg-color;\r\n  }\r\n}\r\n\r\n.BackButtonContent {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.BackButtonIcon {\r\n  margin-right: 7px;\r\n  font-size: 12px;\r\n}\r\n\r\n.BackButtonText {\r\n  margin: 4px 0;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  line-height: 1;\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={BackButtonWrapper:"BackButtonWrapper_R4lAc",BackButtonContent:"BackButtonContent_GU74w",BackButtonIcon:"BackButtonIcon_AK6MU",BackButtonText:"BackButtonText_J_Q29"},e.default=i},71965:function(r,e,n){"use strict";n.r(e);var t=n(20559),o=n.n(t),a=n(93476),i=n.n(a)()(o());i.push([r.id,'.EditDutyPageWrapper_E8YfH{display:flex;justify-content:center}.EditDutyFormWrapper_WpWaO{margin-top:30px;width:100%;max-width:420px}.EditDutyBack_kVjZq{position:absolute;grid-area:link}.EditDutyTitleWrapper_FfSYl{width:100%;display:grid;align-items:center;grid-template-areas:"link title .";grid-template-columns:minmax(100px, 1fr) auto minmax(100px, 1fr);margin-bottom:30px}.EditDutyTitle_zWJ_I{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;text-align:center;align-self:center;font-size:22px;grid-area:title;margin:0;flex-grow:1;color:#485268}.EditDutyForm_xaIah{padding:30px 20px;background-color:#fff;border-radius:5px}\n',"",{version:3,sources:["webpack://./pages/EditDutyPage/EditDutyPage.module.scss","webpack://./styles/_mixins.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,2BACE,YAAa,CACb,sBAAuB,CACxB,2BAGC,eAAgB,CAChB,UAAW,CACX,eAAgB,CACjB,oBAGC,iBAAkB,CAClB,cAAe,CAChB,4BAGC,UAAW,CACX,YAAa,CACb,kBAAmB,CACnB,kCAAmC,CACnC,gEAA+D,CAC/D,kBAAmB,CACpB,qBCJC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aCFwB,CFOxB,iBAAkB,CAClB,iBAAkB,CAClB,cAAe,CACf,eAAgB,CAChB,QAAS,CACT,WAAY,CACZ,aEZ8B,CFa/B,oBAGC,iBAAkB,CAClB,qBEjCoB,CFkCpB,iBEJiB",sourcesContent:['@import "@src/styles/mixins";\n\n.EditDutyPageWrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.EditDutyFormWrapper {\n  margin-top: 30px;\n  width: 100%;\n  max-width: 420px;\n}\n\n.EditDutyBack {\n  position: absolute;\n  grid-area: link;\n}\n\n.EditDutyTitleWrapper {\n  width: 100%;\n  display: grid;\n  align-items: center;\n  grid-template-areas: "link title .";\n  grid-template-columns: minmax(100px,1fr) auto minmax(100px,1fr);\n  margin-bottom: 30px;\n}\n\n.EditDutyTitle {\n  @include title;\n  text-align: center;\n  align-self: center;\n  font-size: 22px;\n  grid-area: title;\n  margin: 0;\n  flex-grow: 1;\n  color: $title-light-text-color;\n}\n\n.EditDutyForm {\n  padding: 30px 20px;\n  background-color: $component-bg;\n  border-radius: $border-radius;\n}\n\n','@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={EditDutyPageWrapper:"EditDutyPageWrapper_E8YfH",EditDutyFormWrapper:"EditDutyFormWrapper_WpWaO",EditDutyBack:"EditDutyBack_kVjZq",EditDutyTitleWrapper:"EditDutyTitleWrapper_FfSYl",EditDutyTitle:"EditDutyTitle_zWJ_I",EditDutyForm:"EditDutyForm_xaIah"},e.default=i},68257:function(r,e,n){var t=n(1892),o=n(95760),a=n(38311),i=n(58192),c=n(38060),l=n(54865),s=n(17562);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=l,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=c,t(s,d),r.exports=s&&s.locals||{}},56970:function(r,e,n){var t=n(1892),o=n(95760),a=n(38311),i=n(58192),c=n(38060),l=n(54865),s=n(71965);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=l,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=c,t(s,d),r.exports=s&&s.locals||{}}}]);
//# sourceMappingURL=722.js.map