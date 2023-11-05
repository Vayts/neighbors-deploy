(self.webpackChunk=self.webpackChunk||[]).push([[555],{73100:function(e,r,n){"use strict";function t(e,r){return{name:e.name.trim(),description:e.description.trim(),eventDate:e.eventDate?new Date(e.eventDate).toISOString():null,isPaymentRequired:e.isPaymentRequired,isTasksListRequired:e.isTasksListRequired,neighborhood_id:e.neighborhood_id,participants:e.isAllMembersInvited?r.map((function(e){return e})):e.participants,paymentAmount:e.isPaymentRequired?e.paymentAmount.trim():null,tasksList:e.isTasksListRequired?e.tasksList.map((function(e){return e.text})):null}}function a(e,r,n,t){var a,o=null===(a=n.find((function(e){return e.participant_id===t})))||void 0===a?void 0:a.payment,i=r-o;return[Math.round(i/e*100),Math.round(o/e*100),o]}function o(e){return{description:e.description.trim(),name:e.name.trim(),paymentAmount:e.paymentAmount.trim()?e.paymentAmount:null,eventDate:e.eventDate?new Date(e.eventDate).toISOString():null}}n.d(r,{aA:function(){return o},h3:function(){return t},o7:function(){return a}})},10555:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return J}});var t,a=n(30126),o=n(64649),i=n(65809),l=n(27378),s=n(48646),c=n(58728),p=n(12284),d=n(88922),m=n(12693),u=n(93218),f=n(36907),b=n(26904),g=n(91665),A=n(33047),C=n(14935),v=n(40284),h=n(78608),x=new Uint8Array(16);function B(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(x)}for(var k=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,P=[],y=0;y<256;++y)P.push((y+256).toString(16).substr(1));var $=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(P[e[r+0]]+P[e[r+1]]+P[e[r+2]]+P[e[r+3]]+"-"+P[e[r+4]]+P[e[r+5]]+"-"+P[e[r+6]]+P[e[r+7]]+"-"+P[e[r+8]]+P[e[r+9]]+"-"+P[e[r+10]]+P[e[r+11]]+P[e[r+12]]+P[e[r+13]]+P[e[r+14]]+P[e[r+15]]).toLowerCase();if(!function(e){return"string"==typeof e&&k.test(e)}(n))throw TypeError("Stringified UUID is invalid");return n},T=function(e,r,n){var t=(e=e||{}).random||(e.rng||B)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,r){n=n||0;for(var a=0;a<16;++a)r[n+a]=t[a];return r}return $(t)},E=n(41694),_=n(60042),w=n.n(_),W=n(23597),D=n.n(W),O=function(e){var r=e.onDeleteTask,n=e.tasks,t=e.onAddTask,a=(0,l.useState)(""),o=(0,i.Z)(a,2),s=o[0],c=o[1],p=(0,l.useState)(""),m=(0,i.Z)(p,2),u=m[0],f=m[1],g=(0,l.useState)(!1),C=(0,i.Z)(g,2),v=C[0],x=C[1],B=(0,d.$G)().t;(0,l.useEffect)((function(){f((0,h.kR)(s))}),[]);var k=function(e){var n=e.target.dataset.id;r(n)};return l.createElement(l.Fragment,null,l.createElement("div",{className:w()(D().PlanTasksWrapper,u&&D().PlanTasksWrapperInvalid,!n.length&&D().PlanTasksWrapper)},l.createElement("p",{className:D().PlanTaskLabel},B("additionalTasks")),l.createElement("ol",{className:D().PlanTaskList},n.map((function(e){return l.createElement("li",{key:e.id,className:D().PlanTaskItem},l.createElement("p",null,e.text),l.createElement("span",{className:"icon-cross","data-id":e.id,onClick:k}))}))),l.createElement(A.Z,{onChange:function(e){c(e.target.value),f((0,h.kR)(e.target.value)),x(!0)},value:s,name:"text",placeholder:B("enterText"),error:u,isInvalid:Boolean(u)}),l.createElement("div",{className:D().PlanButtonWrapper},l.createElement(b.Z,{disabled:Boolean(u)||!v,onClick:function(e){e.preventDefault(),t({text:s.trim(),id:T()}),c(""),f(""),x(!1)},text:B("add")}))),Boolean(!n.length)&&l.createElement(E.Z,{text:B("atLeastOneTask")}))},N=n(73100),I=n(36593),L=n(83732),q=n(95468),j=n(13187),R=n(25394),M=n(99907),Z=n(28597),S=n.n(Z);function F(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Q(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?F(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var z={neighborhood_id:"",description:"",name:"",eventDate:null,participants:[],paymentAmount:"",isPaymentRequired:!1,tasksList:[],isTasksListRequired:!1,isAllMembersInvited:!0,errors:{}},J=function(){var e,r,n,t,x,B,k,P,y,$;(0,M.W)();var T=l.useRef(!0),E=(0,C.UO)().id,_=(0,l.useState)(Q(Q({},z),{},{neighborhood_id:E||"",errors:(0,h.rM)(z)})),w=(0,i.Z)(_,2),W=w[0],D=w[1],Z=(0,l.useState)(!1),F=(0,i.Z)(Z,2),J=F[0],X=F[1],Y=(0,m.C)(I.k),U=(0,m.C)((function(e){return e.userNeighborhoods.entities[W.neighborhood_id]})),G=(0,m.C)(L.d),V=(0,l.useMemo)((function(){return(0,u.Xy)(Y)}),[Y]),K=(0,l.useMemo)((function(){return(0,u.T$)(U,null==G?void 0:G._id)}),[U]),H=(0,C.s0)(),ee=(0,m.T)(),re=(0,d.$G)().t;(0,l.useEffect)((function(){T.current?T.current=!1:D((function(e){return Q(Q({},e),{},{debtor_id:"",participants:[],isAllMembersInvited:!0,errors:(0,h.rM)(e)})}))}),[W.neighborhood_id]);var ne=(0,l.useCallback)((function(e){var r=e.target,n=r.name,t=r.value;D((function(e){var r=Q(Q({},e),{},(0,o.Z)({},n,t));return Q(Q({},r),{},{errors:(0,h.rM)(r)})}))}),[]),te=(0,l.useCallback)((function(e,r){D((function(n){var t=Q(Q({},n),{},(0,o.Z)({},e,r));return Q(Q({},t),{},{errors:(0,h.rM)(t)})}))}),[]),ae=(0,l.useCallback)((function(e){D((function(r){var n=Q({},r);return r.participants.includes(e)?n.participants=r.participants.filter((function(r){return r!==e})):n.participants=[].concat((0,a.Z)(r.participants),[e]),Q(Q({},n),{},{errors:(0,h.rM)(n)})}))}),[]);return l.createElement("div",{className:S().CreatePlanPageWrapper},l.createElement("div",{className:S().CreatePlanFormWrapper},l.createElement("div",{className:S().CreatePlanTitleWrapper},l.createElement("div",{className:S().CreatePlanBack},l.createElement(s.Z,null)),l.createElement("h3",{className:S().CreatePlanTitle},re("createPlan"))),l.createElement("form",{className:S().CreatePlanForm},l.createElement("div",{className:S().CreateSelectWrapper},l.createElement(c.Z,{value:W.neighborhood_id,onChange:ne,name:"neighborhood_id",label:re("neighborhood"),placeholder:re("selectNeighborhood"),valuesArr:V,isInvalid:Boolean(null===(e=W.errors)||void 0===e?void 0:e.neighborhood_id),error:null===(r=W.errors)||void 0===r?void 0:r.neighborhood_id})),l.createElement("div",{className:"mb-16"},l.createElement(g.Z,{label:"".concat(re("dateOfEvent")," (").concat(re("optionalSmall"),")"),value:W.eventDate,onChange:ne,name:"eventDate",isInvalid:Boolean(null===(n=W.errors)||void 0===n?void 0:n.eventDate),error:null===(t=W.errors)||void 0===t?void 0:t.eventDate,placeholder:re("selectDate")})),l.createElement("div",{className:"mb-16"},l.createElement(A.Z,{onChange:ne,value:W.name,name:"name",label:re("planName"),placeholder:re("enterName"),error:null===(x=W.errors)||void 0===x?void 0:x.name,isInvalid:Boolean(null===(B=W.errors)||void 0===B?void 0:B.name)})),l.createElement("div",{className:"mb-16"},l.createElement(p.Z,{onChange:ne,value:W.description,name:"description",label:re("description"),placeholder:re("enterDescription"),error:null===(k=W.errors)||void 0===k?void 0:k.description,isInvalid:Boolean(null===(P=W.errors)||void 0===P?void 0:P.description)})),l.createElement("div",{className:"mb-16"},l.createElement(v.Z,{checked:W.isAllMembersInvited,onChange:te,name:"isAllMembersInvited",label:re("allNeighborsInvited")})),!W.isAllMembersInvited&&l.createElement("div",{className:"mb-16"},l.createElement(j.Z,{members:K,checkedArr:W.participants,onMemberSelect:ae})),l.createElement("div",{className:"mb-16"},l.createElement(v.Z,{checked:W.isPaymentRequired,onChange:te,name:"isPaymentRequired",label:re("needToRaiseMoney")}),W.isPaymentRequired&&l.createElement("div",{className:"mt-16"},l.createElement(A.Z,{onChange:ne,value:W.paymentAmount,name:"paymentAmount",label:re("requiredAmount"),placeholder:re("enterAmount"),error:null===(y=W.errors)||void 0===y?void 0:y.paymentAmount,isInvalid:Boolean(null===($=W.errors)||void 0===$?void 0:$.paymentAmount)}))),l.createElement("div",{className:"mb-32"},l.createElement(v.Z,{checked:W.isTasksListRequired,onChange:te,name:"isTasksListRequired",label:re("additionalTasksRequired")}),W.isTasksListRequired&&l.createElement("div",{className:"mt-16"},l.createElement(O,{onAddTask:function(e){D((function(r){var n=Q(Q({},r),{},{tasksList:[].concat((0,a.Z)(r.tasksList),[e])});return Q(Q({},n),{},{errors:(0,h.rM)(n)})}))},onDeleteTask:function(e){D((function(r){var n=Q(Q({},r),{},{tasksList:r.tasksList.filter((function(r){return r.id!==e}))});return Q(Q({},n),{},{errors:(0,h.rM)(n)})}))},tasks:W.tasksList}))),l.createElement("div",{className:"mb-16"},l.createElement(b.Z,{onClick:function(e){if(e.preventDefault(),X(!0),!Object.values(W.errors).length){var r=(0,N.h3)(W,K);ee((0,q.he)(r)).unwrap().then((function(){H("/plans".concat(E?"/".concat(E):""))})).catch((function(e){var r,n;(0,R.D)(null==e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message,f.X1.plan)})).finally((function(){X(!1)}))}},text:re("create"),disabled:Boolean(Object.values(W.errors).length)||J})))))}},78608:function(e,r,n){"use strict";n.d(r,{kR:function(){return u},rM:function(){return f},tR:function(){return b}});var t=n(64649),a=n(22501),o=n(67226),i=n(30298);function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var c=a.ZP.t;function p(e){var r={},n=e.trim();return""===n?(r.name=c("requiredField"),r):i.bo.test(n)?n.length<o.n.minName?(r.name=c("atLeast",{value:o.n.minName}),r):n.length>o.n.maxName?(r.name=c("lessThan",{value:o.n.maxName}),r):r:(r.name=c("incorrectValue"),r)}function d(e){var r={},n=e.trim();return""===n?(r.description=c("requiredField"),r):i.bo.test(n)?n.length<o.n.minDescription?(r.description=c("atLeast",{value:o.n.minDescription}),r):n.length>o.n.maxDescription?(r.description=c("lessThan",{value:o.n.maxDescription}),r):r:(r.description=c("incorrectValue"),r)}function m(e){var r={};if(e){var n=new Date;if(n.setFullYear(n.getFullYear()+1),e>n)return r.eventDate=c("maxPlanPeriod"),r}return r}function u(e){var r="",n=e.trim();return n.length<o.n.minTask?r=c("atLeast",{value:o.n.minTask}):n.length>o.n.maxTask?r=c("lessThan",{value:o.n.maxTask}):r}function f(e){var r=p(e.name),n=d(e.description),t=m(e.eventDate),a=function(e){var r={};return""===e.trim()?(r.neighborhood_id=c("requiredField"),r):r}(e.neighborhood_id),l=s(s(s(s({},r),n),t),a);return e.isAllMembersInvited||Object.assign(l,function(e){var r={};return e.length<o.n.minParticipantsLength&&(r.participants=c("atLeastOneParticipant")),r}(e.participants)),e.isPaymentRequired&&Object.assign(l,function(e){var r={};if(!e)return r.paymentAmount=c("requiredField"),r;var n=parseFloat(e);return i.AK.test(e)?n>o.n.maxAmount?(r.paymentAmount=c("lessThanNumber",{value:o.n.maxAmount}),r):n<o.n.minAmount?(r.paymentAmount=c("atLeastNumber",{value:o.n.minAmount}),r):r:(r.paymentAmount=c("onlyNumbers"),r)}(e.paymentAmount)),e.isTasksListRequired&&Object.assign(l,function(e){var r={};return e.length<o.n.minTasksLength&&(r.tasksList=c("atLeastOneTask")),r}(e.tasksList)),s({},l)}function b(e,r){var n=p(e.name),t=d(e.description),a=m(e.eventDate),l=s(s(s({},n),t),a);return r.isPaymentRequired&&Object.assign(l,function(e,r){var n={};if(!e)return n.paymentAmount=c("requiredField"),n;var t=parseFloat(e);return i.AK.test(e)?(t<r&&(n.paymentAmount=c("newPlanAmountSmallerError")),t>o.n.maxAmount?(n.paymentAmount=c("lessThanNumber",{value:o.n.maxAmount}),n):t<o.n.minAmount?(n.paymentAmount=c("atLeastNumber",{value:o.n.minAmount}),n):n):(n.paymentAmount=c("onlyNumbers"),n)}(e.paymentAmount,r.currentPayment)),s({},l)}},63385:function(e,r,n){"use strict";n.r(r);var t=n(20559),a=n.n(t),o=n(93476),i=n.n(o)()(a());i.push([e.id,'.CreatePlanPageWrapper_eUmEq{display:flex;justify-content:center}@media screen and (min-width: 744px){.CreatePlanPageWrapper_eUmEq{width:100vw}}.CreatePlanFormWrapper_JjPJ4{margin-top:30px}@media screen and (min-width: 744px){.CreatePlanFormWrapper_JjPJ4{width:100%;max-width:490px}}.CreatePlanBack_zlfQZ{position:absolute;grid-area:link}.CreatePlanTitleWrapper_BMJWg{width:100%;display:grid;align-items:center;grid-template-areas:"link title .";grid-template-columns:minmax(100px, 1fr) auto minmax(100px, 1fr);margin-bottom:30px;text-align:center}.CreatePlanTitle_lW_u3{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;align-self:center;font-size:22px;grid-area:title;margin:0;flex-grow:1;color:#485268}.CreatePlanForm_LIBDJ{padding:30px 20px;background-color:#fff;border-radius:5px}.CreateSelectWrapper_c5P1H{margin-bottom:16px;border-bottom:1px solid #dee2ed;padding-bottom:20px}\n',"",{version:3,sources:["webpack://./pages/CreatePlanPage/CreatePlanPage.module.scss","webpack://./styles/_mixins.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,6BACE,YAAa,CACb,sBAAuB,CAKxB,qCAPD,6BAKI,WAAY,CAEf,CAED,6BACE,eAAgB,CAMjB,qCAPD,6BAII,UAAW,CACX,eAAgB,CAEnB,CAED,sBACE,iBAAkB,CAClB,cAAe,CAChB,8BAGC,UAAW,CACX,YAAa,CACb,kBAAmB,CACnB,kCAAmC,CACnC,gEAA+D,CAC/D,kBAAmB,CACnB,iBAAkB,CACnB,uBCZC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aCFwB,CFexB,iBAAkB,CAClB,cAAe,CACf,eAAgB,CAChB,QAAS,CACT,WAAY,CACZ,aEnB8B,CFoB/B,sBAGC,iBAAkB,CAClB,qBExCoB,CFyCpB,iBEXiB,CFYlB,2BAGC,kBAAmB,CACnB,+BEtCoB,CFuCpB,mBAAoB",sourcesContent:['@import "@src/styles/mixins";\r\n\r\n.CreatePlanPageWrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  @include for-tablet() {\r\n    width: 100vw;\r\n  }\r\n}\r\n\r\n.CreatePlanFormWrapper {\r\n  margin-top: 30px;\r\n\r\n  @include for-tablet {\r\n    width: 100%;\r\n    max-width: 490px;\r\n  }\r\n}\r\n\r\n.CreatePlanBack {\r\n  position: absolute;\r\n  grid-area: link;\r\n}\r\n\r\n.CreatePlanTitleWrapper {\r\n  width: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n  grid-template-areas: "link title .";\r\n  grid-template-columns: minmax(100px,1fr) auto minmax(100px,1fr);\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n\r\n.CreatePlanTitle {\r\n  @include title;\r\n  align-self: center;\r\n  font-size: 22px;\r\n  grid-area: title;\r\n  margin: 0;\r\n  flex-grow: 1;\r\n  color: $title-light-text-color;\r\n}\r\n\r\n.CreatePlanForm {\r\n  padding: 30px 20px;\r\n  background-color: $component-bg;\r\n  border-radius: $border-radius;\r\n}\r\n\r\n.CreateSelectWrapper {\r\n  margin-bottom: 16px;\r\n  border-bottom: 1px solid $border-color;\r\n  padding-bottom: 20px;\r\n}\r\n','@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={CreatePlanPageWrapper:"CreatePlanPageWrapper_eUmEq",CreatePlanFormWrapper:"CreatePlanFormWrapper_JjPJ4",CreatePlanBack:"CreatePlanBack_zlfQZ",CreatePlanTitleWrapper:"CreatePlanTitleWrapper_BMJWg",CreatePlanTitle:"CreatePlanTitle_lW_u3",CreatePlanForm:"CreatePlanForm_LIBDJ",CreateSelectWrapper:"CreateSelectWrapper_c5P1H"},r.default=i},17020:function(e,r,n){"use strict";n.r(r);var t=n(20559),a=n.n(t),o=n(93476),i=n.n(o)()(a());i.push([e.id,".PlanTasksWrapper_kyONt{border:2px dotted #dee2ed;padding:15px}.PlanTasksWrapper--invalid_Q9tzt{border-color:#2C9E95}.PlanTasksWrapper_kyONt input{height:38px}.PlanButtonWrapper_qMoJo{margin-top:16px}.PlanButtonWrapper_qMoJo button{height:38px}.PlanTaskLabel_rIt6W{margin:0 0 8px;font-weight:700;display:inline-block;color:#18181a;font-size:14px}.PlanTaskList_q8RK9{margin:0 0 15px;padding:0}.PlanTaskItem_Q_BXN{padding-bottom:5px;margin-bottom:5px;display:flex;justify-content:space-between;align-items:center}.PlanTaskItem_Q_BXN:not(:last-child){border-bottom:1px solid #dee2ed}.PlanTaskItem_Q_BXN p{margin:0}.PlanTaskItem_Q_BXN span{font-size:12px;color:#a2a5b0;cursor:pointer}.PlanTaskItem_Q_BXN span:hover{color:#333a4a}\n","",{version:3,sources:["webpack://./pages/CreatePlanPage/PlanTaskList/PlanTaskList.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,wBACE,yBCYoB,CDXpB,YAAa,CAEb,iCACE,oBCEmB,CDPvB,8BASI,WAAY,CACb,yBAID,eAAgB,CADlB,gCAII,WAAY,CACb,qBAID,cAAe,CACf,eAAgB,CAChB,oBAAqB,CACrB,aCNuB,CDOvB,cAAe,CAChB,oBAGC,eAAgB,CAChB,SAAU,CACX,oBAGC,kBAAmB,CACnB,iBAAkB,CAClB,YAAa,CACb,6BAA8B,CAC9B,kBAAmB,CALrB,qCAQI,+BC7BkB,CDqBtB,sBAYI,QAAS,CAZb,yBAgBI,cAAe,CACf,aClCsB,CDmCtB,cAAe,CAlBnB,+BAqBM,aCrCc",sourcesContent:['@import "@src/styles/variables";\n\n.PlanTasksWrapper {\n  border: 2px dotted $border-color;\n  padding: 15px;\n\n  &--invalid {\n    border-color: $primary-color;\n  }\n\n  input {\n    height: 38px;\n  }\n}\n\n.PlanButtonWrapper {\n  margin-top: 16px;\n\n  button {\n    height: 38px;\n  }\n}\n\n.PlanTaskLabel {\n  margin: 0 0 8px;\n  font-weight: 700;\n  display: inline-block;\n  color: $dark-text-color;\n  font-size: 14px;\n}\n\n.PlanTaskList {\n  margin: 0 0 15px;\n  padding: 0;\n}\n\n.PlanTaskItem {\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  &:not(:last-child) {\n    border-bottom: 1px solid $border-color;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  span {\n    font-size: 12px;\n    color: $light-text-color;\n    cursor: pointer;\n\n    &:hover {\n      color: $text-color;\n    }\n  }\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={PlanTasksWrapper:"PlanTasksWrapper_kyONt","PlanTasksWrapper--invalid":"PlanTasksWrapper--invalid_Q9tzt",PlanTasksWrapperInvalid:"PlanTasksWrapper--invalid_Q9tzt",PlanButtonWrapper:"PlanButtonWrapper_qMoJo",PlanTaskLabel:"PlanTaskLabel_rIt6W",PlanTaskList:"PlanTaskList_q8RK9",PlanTaskItem:"PlanTaskItem_Q_BXN"},r.default=i},28597:function(e,r,n){var t=n(1892),a=n(95760),o=n(38311),i=n(58192),l=n(38060),s=n(54865),c=n(63385);c=c.__esModule?c.default:c;var p={};p.styleTagTransform=s,p.setAttributes=i,p.insert=o.bind(null,"head"),p.domAPI=a,p.insertStyleElement=l,t(c,p),e.exports=c&&c.locals||{}},23597:function(e,r,n){var t=n(1892),a=n(95760),o=n(38311),i=n(58192),l=n(38060),s=n(54865),c=n(17020);c=c.__esModule?c.default:c;var p={};p.styleTagTransform=s,p.setAttributes=i,p.insert=o.bind(null,"head"),p.domAPI=a,p.insertStyleElement=l,t(c,p),e.exports=c&&c.locals||{}}}]);
//# sourceMappingURL=555.js.map