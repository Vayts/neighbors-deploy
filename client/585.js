(self.webpackChunk=self.webpackChunk||[]).push([[585],{46585:function(r,e,o){"use strict";o.r(e);var n=o(64649),t=o(65809),a=o(27378),i=o(48646),l=o(88922),c=o(33047),d=o(30384),s=o(12284),p=o(26904),h=o(12693),g=o(14935),m=o(58728),b=o(83679),C=o(7338),f=o(99907),u=o(17106),A=o.n(u);function x(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.push.apply(o,n)}return o}function B(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?x(Object(o),!0).forEach((function(e){(0,n.Z)(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}var v={name:"",currency:"",description:"",errors:{}};e.default=function(){var r,e,o,u,x,$;(0,f.W)();var N=(0,a.useState)(B(B({},v),{},{errors:(0,d.r)(v)})),y=(0,t.Z)(N,2),w=y[0],k=y[1],E=(0,a.useState)(!1),W=(0,t.Z)(E,2),O=W[0],F=W[1],_=(0,g.s0)(),j=(0,h.T)(),P=(0,l.$G)().t,T=(0,a.useCallback)((function(r){var e=r.target,o=e.name,t=e.value;k((function(r){var e=B(B({},r),{},(0,n.Z)({},o,t));return B(B({},e),{},{errors:(0,d.r)(e)})}))}),[]);return a.createElement("div",{className:A().CreateNeighborhoodPageWrapper},a.createElement("div",{className:A().CreateNeighborhoodFormWrapper},a.createElement("div",{className:A().CreateNeighborhoodTitleWrapper},a.createElement("div",{className:A().CreateNeighborhoodBack},a.createElement(i.Z,null)),a.createElement("h3",{className:A().CreateNeighborhoodTitle},P("createNeighborhoods"))),a.createElement("form",{className:A().CreateNeighborhoodForm},a.createElement("div",{className:A().CreateSelectWrapper},a.createElement(m.Z,{value:w.currency,onChange:T,name:"currency",label:P("currency"),placeholder:P("selectCurrency"),valuesArr:C.tL,isInvalid:Boolean(null===(r=w.errors)||void 0===r?void 0:r.currency),error:null===(e=w.errors)||void 0===e?void 0:e.currency})),a.createElement("div",{className:"mb-16"},a.createElement(c.Z,{onChange:T,value:w.name,name:"name",label:P("neighborhoodName"),placeholder:P("enterName"),error:null===(o=w.errors)||void 0===o?void 0:o.name,isInvalid:Boolean(null===(u=w.errors)||void 0===u?void 0:u.name)})),a.createElement("div",{className:"mb-32"},a.createElement(s.Z,{onChange:T,value:w.description,name:"description",label:P("neighborhoodDescription"),placeholder:P("enterDescription"),error:null===(x=w.errors)||void 0===x?void 0:x.description,isInvalid:Boolean(null===($=w.errors)||void 0===$?void 0:$.description)})),a.createElement("div",{className:"mb-16"},a.createElement(p.Z,{onClick:function(){Object.values(w.errors).length||(F(!0),j((0,b.OI)(w)).unwrap().then((function(){_("/neighborhoods")})).catch((function(r){return r})).finally((function(){F(!0)})))},text:P("create"),disabled:Boolean(Object.values(w.errors).length)||O})))))}},85027:function(r,e,o){"use strict";o.r(e);var n=o(20559),t=o.n(n),a=o(93476),i=o.n(a)()(t());i.push([r.id,'.CreateNeighborhoodPageWrapper_n0BLc{display:flex;justify-content:center}.CreateNeighborhoodFormWrapper_LRDhm{margin-top:30px;width:100%;max-width:420px}.CreateNeighborhoodBack_lwfX7{position:absolute;grid-area:link}.CreateNeighborhoodTitleWrapper_fi0lJ{width:100%;display:grid;align-items:center;grid-template-areas:"link title .";grid-template-columns:minmax(100px, 1fr) auto minmax(100px, 1fr);margin-bottom:30px}.CreateNeighborhoodTitle_hxrFL{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;align-self:center;font-size:22px;grid-area:title;margin:0;flex-grow:1;color:#485268}.CreateNeighborhoodForm_e533A{padding:30px 20px;background-color:#fff;border-radius:5px}.CreateSelectWrapper_q2cy4{margin-bottom:16px;border-bottom:1px solid #dee2ed;padding-bottom:15px}\n',"",{version:3,sources:["webpack://./pages/CreateNeighborhoodPage/CreateNeighborhoodPage.module.scss","webpack://./styles/_mixins.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,qCACE,YAAa,CACb,sBAAuB,CACxB,qCAGC,eAAgB,CAChB,UAAW,CACX,eAAgB,CACjB,8BAGC,iBAAkB,CAClB,cAAe,CAChB,sCAGC,UAAW,CACX,YAAa,CACb,kBAAmB,CACnB,kCAAmC,CACnC,gEAA+D,CAC/D,kBAAmB,CACpB,+BCJC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aCFwB,CFOxB,iBAAkB,CAClB,cAAe,CACf,eAAgB,CAChB,QAAS,CACT,WAAY,CACZ,aEX8B,CFY/B,8BAGC,iBAAkB,CAClB,qBEhCoB,CFiCpB,iBEHiB,CFIlB,2BAGC,kBAAmB,CACnB,+BE9BoB,CF+BpB,mBAAoB",sourcesContent:['@import "@src/styles/mixins";\r\n\r\n.CreateNeighborhoodPageWrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.CreateNeighborhoodFormWrapper {\r\n  margin-top: 30px;\r\n  width: 100%;\r\n  max-width: 420px;\r\n}\r\n\r\n.CreateNeighborhoodBack {\r\n  position: absolute;\r\n  grid-area: link;\r\n}\r\n\r\n.CreateNeighborhoodTitleWrapper {\r\n  width: 100%;\r\n  display: grid;\r\n  align-items: center;\r\n  grid-template-areas: "link title .";\r\n  grid-template-columns: minmax(100px,1fr) auto minmax(100px,1fr);\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.CreateNeighborhoodTitle {\r\n  @include title;\r\n  align-self: center;\r\n  font-size: 22px;\r\n  grid-area: title;\r\n  margin: 0;\r\n  flex-grow: 1;\r\n  color: $title-light-text-color;\r\n}\r\n\r\n.CreateNeighborhoodForm {\r\n  padding: 30px 20px;\r\n  background-color: $component-bg;\r\n  border-radius: $border-radius;\r\n}\r\n\r\n.CreateSelectWrapper {\r\n  margin-bottom: 16px;\r\n  border-bottom: 1px solid $border-color;\r\n  padding-bottom: 15px;\r\n}\r\n','@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={CreateNeighborhoodPageWrapper:"CreateNeighborhoodPageWrapper_n0BLc",CreateNeighborhoodFormWrapper:"CreateNeighborhoodFormWrapper_LRDhm",CreateNeighborhoodBack:"CreateNeighborhoodBack_lwfX7",CreateNeighborhoodTitleWrapper:"CreateNeighborhoodTitleWrapper_fi0lJ",CreateNeighborhoodTitle:"CreateNeighborhoodTitle_hxrFL",CreateNeighborhoodForm:"CreateNeighborhoodForm_e533A",CreateSelectWrapper:"CreateSelectWrapper_q2cy4"},e.default=i},17106:function(r,e,o){var n=o(1892),t=o(95760),a=o(38311),i=o(58192),l=o(38060),c=o(54865),d=o(85027);d=d.__esModule?d.default:d;var s={};s.styleTagTransform=c,s.setAttributes=i,s.insert=a.bind(null,"head"),s.domAPI=t,s.insertStyleElement=l,n(d,s),r.exports=d&&d.locals||{}}}]);
//# sourceMappingURL=585.js.map