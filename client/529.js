(self.webpackChunk=self.webpackChunk||[]).push([[529],{34529:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return H}});var t=r(65809),o=r(27378),a=r(88922),i=r(12693),s=r(18835).UJ.getSelectors((function(e){return e.chats})).selectAll,l=r(60042),c=r.n(l),d=r(74776),C=r.n(d),p=function(e){var n=e.setSelectedRoom,r=e.selectedRoom,t=(0,i.C)(s),l=(0,a.$G)().t;return o.createElement("div",{className:C().ChatListWrapper},o.createElement("h3",{className:C().ChatListTitle},l("chats")),o.createElement("div",{className:C().ChatListContent},o.createElement("ul",{className:C().ChatList},t.map((function(e){return o.createElement("li",{className:c()(C().ChatItem,r===e._id&&C().ChatItemSelected),key:e._id,onClick:function(){return r=e._id,void n(r);var r}},!e.avatar&&o.createElement("div",{className:C().NeighborhoodAvatarFiller},o.createElement("span",{className:"icon-neighborhoods"})),o.createElement("p",null,e.name))})))))},A=(0,o.memo)(p),f=r(44825),h=r(32226),g=r.n(h),u=function(e){var n=e.onSubmit,r=(0,o.useState)(""),i=(0,t.Z)(r,2),s=i[0],l=i[1],d=(0,o.useRef)(null),C=(0,o.useState)(!1),p=(0,t.Z)(C,2),A=p[0],h=p[1],u=(0,a.$G)().t;(0,o.useEffect)((function(){var e;(e=d.current).style.height="22px",e.style.height="".concat(e.scrollHeight,"px")}),[s]);var b=function(){s&&(n(s),l(""))};return o.createElement("div",{onKeyDown:function(e){"Enter"!==e.key||e.ctrlKey||(e.preventDefault(),b()),"Enter"===e.key&&e.ctrlKey&&l((function(e){return"".concat(e,"\r\n")}))},className:c()(g().ChatFormWrapper,A&&g().ChatFormWrapperFocused)},o.createElement("div",{className:g().ChatInputWrapper},o.createElement("textarea",{value:s,onChange:function(e){l(e.target.value)},className:g().ChatInput,onFocus:function(){h(!0)},onBlur:function(){h(!1)},placeholder:u("enterMessage"),ref:d})),o.createElement("div",{className:g().ChatBottomContent},o.createElement("button",{"aria-label":"send",className:c()("icon-send",g().ChatButton),"data-tooltip-id":"chat-button",type:"submit",id:"xz",onClick:b})),o.createElement(f.u,{style:{whiteSpace:"pre-line",textAlign:"center"},id:"chat-button",place:"bottom",content:"".concat(u("sendAction"))}))},b=r(43793),m=(Object.defineProperty,new Map),B=new WeakMap,x=0;function v(e,n,r={},t=undefined){if(void 0===window.IntersectionObserver&&void 0!==t){const o=e.getBoundingClientRect();return n(t,{isIntersecting:t,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:a,elements:i}=function(e){let n=function(e){return Object.keys(e).sort().filter((n=>void 0!==e[n])).map((n=>{return`${n}_${"root"===n?(r=e.root,r?(B.has(r)||(x+=1,B.set(r,x.toString())),B.get(r)):"0"):e[n]}`;var r})).toString()}(e),r=m.get(n);if(!r){const t=new Map;let o;const a=new IntersectionObserver((n=>{n.forEach((n=>{var r;const a=n.isIntersecting&&o.some((e=>n.intersectionRatio>=e));e.trackVisibility&&void 0===n.isVisible&&(n.isVisible=a),null==(r=t.get(n.target))||r.forEach((e=>{e(a,n)}))}))}),e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:a,elements:t},m.set(n,r)}return r}(r);let s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(n),a.observe(e),function(){s.splice(s.indexOf(n),1),0===s.length&&(i.delete(e),a.unobserve(e)),0===i.size&&(a.disconnect(),m.delete(o))}}o.Component;var w=r(7338),$=r(81507),k=r(24004),y=r.n(k),_=function(e){var n=e.message,r=n.text,a=n.sentAt,s=n.seenBy,l=(0,i.C)((function(e){return e.auth.user})),d=(0,i.C)((function(e){return e.members.entities[n.author]})),C=s.includes(null==l?void 0:l._id),p=function({threshold:e,delay:n,trackVisibility:r,rootMargin:t,root:a,triggerOnce:i,skip:s,initialInView:l,fallbackInView:c,onChange:d}={}){var C;const[p,A]=o.useState(null),f=o.useRef(),[h,g]=o.useState({inView:!!l,entry:void 0});f.current=d,o.useEffect((()=>{if(s||!p)return;let o;return o=v(p,((e,n)=>{g({inView:e,entry:n}),f.current&&f.current(e,n),n.isIntersecting&&i&&o&&(o(),o=void 0)}),{root:a,rootMargin:t,threshold:e,trackVisibility:r,delay:n},c),()=>{o&&o()}}),[Array.isArray(e)?e.toString():e,p,a,t,i,s,r,c,n]);const u=null==(C=h.entry)?void 0:C.target,b=o.useRef();p||!u||i||s||b.current===u||(b.current=u,g({inView:!!l,entry:void 0}));const m=[A,h.inView,h.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}({threshold:.9,initialInView:C,delay:500,triggerOnce:!0,skip:C}),A=(0,t.Z)(p,2),f=A[0],h=A[1],g=(null==l?void 0:l._id)===d._id,u=(0,i.T)();return(0,o.useEffect)((function(){h&&!C&&u((0,$._W)({messageId:n._id,userId:null==l?void 0:l._id}))}),[h]),o.createElement("li",{className:c()(y().MessageWrapper,g&&y().MessageWrapperUser,!C&&y().MessageWrapperUnseen),ref:C?null:f},o.createElement("div",{className:y().MessageContent},o.createElement("img",{className:c()(y().MessageAvatar,g&&y().MessageAvatarUser),src:"".concat(w.B3,"/").concat(d.avatar),alt:"".concat(d.avatar," avatar")}),o.createElement("div",{className:y().MessageDialogue},o.createElement("div",{className:y().MessageTitleWrapper},o.createElement("h4",{className:y().MessageAuthorFullName},d.fullName),o.createElement("span",{className:y().MessageDate},(0,b.default)(new Date(a),"HH:mm, dd.MM.yyyy"))),r)))},M=(0,o.memo)(_),W=(0,r(61166).P1)([function(e){return e.messages},function(e,n){return n}],(function(e,n){return n.map((function(n){return e.entities[n]}))})),I=r(83732),D=r(42903),E=r(16908),T=r.n(E),F=function(e){var n=e.selectedRoom,r=(0,i.C)((function(e){return e.chats.entities[n]})),a=(0,i.C)((function(e){return W(e,e.chats.entities[n].messages)})),s=(0,i.C)((function(e){return e.messages.isLoading})),l=(0,o.useState)(!0),c=(0,t.Z)(l,2),d=c[0],C=c[1],p=(0,i.C)(I.d),A=(0,o.useRef)(null),f=(0,i.T)();return(0,o.useEffect)((function(){if(A.current&&a.length&&!d){var e=a[a.length-1],n=A.current.children[a.length-1],r=A.current.scrollTop,t=A.current.scrollHeight-r-A.current.clientHeight;n&&e.author!==(null==p?void 0:p._id)&&t<200&&n.scrollIntoView({behavior:"smooth",block:"end"}),n&&e.author===(null==p?void 0:p._id)&&n.scrollIntoView({behavior:t>w.z9?"auto":"smooth",block:"end"})}}),[a[a.length-1]]),(0,o.useEffect)((function(){if(A.current&&a.length){var e=a.length-1,n=a.findIndex((function(e){return!e.seenBy.includes(null==p?void 0:p._id)})),r=A.current.children[n>=0?n:e];r&&r.scrollIntoView({behavior:"auto",block:"end"})}return C(!1),function(){f((0,D.q)())}}),[n]),o.createElement("ul",{ref:A,className:T().MessageList,onScroll:function(){if(A.current&&r.hasMoreMessages&&0===A.current.scrollTop&&!s){var e=A.current.scrollHeight-A.current.scrollTop-A.current.clientHeight;f((0,D.h)(n)).then((function(){A.current.scrollTop=A.current.scrollHeight-A.current.clientHeight-e}))}}},a.map((function(e){return o.createElement(M,{key:e._id,message:e})})))},z=(0,o.memo)(F),j=r(95647),N=(0,j.PH)("chats/init"),L=(0,j.PH)("chats/disconnect"),G=((0,j.PH)("chats/getRooms"),(0,j.PH)("chats/sendMessage",(function(e,n){return{payload:{message:e,roomId:n}}}))),S=r(50726),Y=r.n(S),Z=function(e){var n=e.roomId,r=(0,i.C)((function(e){return e.chats.entities[n]})),t=(0,i.T)();return o.createElement("div",{className:Y().ChatWindowWrapper},o.createElement("h3",{className:Y().ChatWindowTitle},r.name||"Chat"),o.createElement("div",{className:Y().ChatWindowContent},o.createElement(z,{selectedRoom:n}),o.createElement(u,{onSubmit:function(e){t(G(e,n))}})))},P=r(7163),R=r.n(P),V=function(){var e=(0,o.useState)(null),n=(0,t.Z)(e,2),r=n[0],a=n[1],s=(0,i.T)();return(0,o.useEffect)((function(){return s(N()),function(){s(L())}}),[]),o.createElement("div",{className:R().ChatWrapper},o.createElement(A,{setSelectedRoom:a,selectedRoom:r}),r&&o.createElement(Z,{roomId:r}))},H=(0,o.memo)(V)},31763:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".ChatListWrapper_pg6L3{height:calc(100vh - var(--header-height));width:340px;min-width:340px;border-right:1px solid #dee2ed;background-color:#fff}.ChatListTitle_oeGm6{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;margin:0;padding:16px;border-bottom:1px solid #dee2ed;font-size:20px}.ChatListContent_aqV7A{padding:5px 15px 0}.ChatList_bn9Ms{list-style:none;margin:0;padding:0}.ChatItem_Koj0Z{display:flex;align-items:center;gap:20px;padding:10px 15px;margin:0 -15px;cursor:pointer;transition:all 0.2s}.ChatItem_Koj0Z:first-child{border-top:1px solid #fbfbfb}.ChatItem_Koj0Z:not(:last-child){border-bottom:1px solid #fbfbfb}.ChatItem_Koj0Z p{font-weight:500;margin:0}.ChatItem_Koj0Z:hover{background-color:#f7f8fb}.ChatItem--selected_vtTvf{background-color:#eeeff3}.ChatItem--selected_vtTvf:hover{background-color:#e9eaef}.ChatItem--selected_vtTvf p{color:#0f0f10}.ChatItem--selected_vtTvf .NeighborhoodAvatarFiller_bsfKh{transition:all 0.2s}.ChatItem--selected_vtTvf .NeighborhoodAvatarFiller_bsfKh span{color:#0f0f10}.NeighborhoodAvatarFiller_bsfKh span{font-size:16px;color:#bfc5d1}\n","",{version:3,sources:["webpack://./pages/ChatsPage/ChatList/ChatList.module.scss","webpack://./styles/_variables.scss","webpack://./styles/_mixins.scss"],names:[],mappings:"AAGA,uBACE,yCAA0C,CAC1C,WAAY,CACZ,eAAgB,CAChB,8BCQoB,CDPpB,qBCDoB,CDErB,qBEYC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aDFwB,CDTxB,QAAS,CACT,YAAa,CACb,+BCAoB,CDCpB,cAAe,CAChB,uBAGC,kBAAmB,CACpB,gBAIC,eAAgB,CAChB,QAAS,CACT,SAAU,CACX,gBAGC,YAAa,CACb,kBAAmB,CACnB,QAAS,CACT,iBAAkB,CAClB,cAAe,CACf,cAAe,CACf,mBAAoB,CAPtB,4BAUI,4BCtCyB,CD4B7B,iCAcI,+BC1CyB,CD4B7B,kBAkBI,eAAgB,CAChB,QAAS,CAnBb,sBAuBI,wBCjDuB,CDkDxB,0BAGC,wBCpDoB,CDmDrB,gCAIG,wBCtDuB,CDkD1B,4BAQG,aC1CoB,CDkCvB,0DAYG,mBAAoB,CAZvB,+DAcK,aChDkB,CDiDnB,qCAOH,cAAe,CACf,aC5DsB",sourcesContent:['@import "@src/styles/variables";\n@import "@src/styles/mixins";\n\n.ChatListWrapper {\n  height: calc(100vh - var(--header-height));\n  width: 340px;\n  min-width: 340px;\n  border-right: 1px solid $border-color;\n  background-color: $component-bg;\n}\n\n.ChatListTitle {\n  @include title;\n  margin: 0;\n  padding: 16px;\n  border-bottom: 1px solid $border-color;\n  font-size: 20px;\n}\n\n.ChatListContent {\n  padding: 5px 15px 0;\n}\n\n\n.ChatList {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.ChatItem {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 10px 15px;\n  margin: 0 -15px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:first-child {\n    border-top: 1px solid $content-color-hover;\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px solid $content-color-hover;\n  }\n\n  p {\n    font-weight: 500;\n    margin: 0;\n  }\n\n  &:hover {\n    background-color: $light-field-hover;\n  }\n\n  &--selected {\n    background-color: $light-bg-color;\n\n    &:hover {\n      background-color: $disabled-text-field;\n    }\n\n    p {\n      color: $title-text-color;\n    }\n\n    .NeighborhoodAvatarFiller {\n      transition: all 0.2s;\n      span {\n        color: $title-text-color;\n      }\n    }\n  }\n}\n\n.NeighborhoodAvatarFiller {\n  span {\n    font-size: 16px;\n    color: $light-text-color;\n  }\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n",'@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n'],sourceRoot:""}]),i.locals={ChatListWrapper:"ChatListWrapper_pg6L3",ChatListTitle:"ChatListTitle_oeGm6",ChatListContent:"ChatListContent_aqV7A",ChatList:"ChatList_bn9Ms",ChatItem:"ChatItem_Koj0Z","ChatItem--selected":"ChatItem--selected_vtTvf",ChatItemSelected:"ChatItem--selected_vtTvf",NeighborhoodAvatarFiller:"NeighborhoodAvatarFiller_bsfKh"},n.default=i},66056:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".ChatWindowTitle_wQHn7{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;margin:0;padding:16px;border-bottom:1px solid #dee2ed;font-size:20px}.ChatWindowWrapper_PqGJw{width:100%;height:calc(100vh - var(--header-height));max-height:calc(100vh - var(--header-height));background-color:#fff;display:flex;flex-direction:column;overflow:hidden}.ChatWindowContent_DBMpl{-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;overflow-x:hidden;position:relative}\n","",{version:3,sources:["webpack://./pages/ChatsPage/ChatWindow/ChatWindow.module.scss","webpack://./styles/_mixins.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAGA,uBCkBE,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aCFwB,CFjBxB,QAAS,CACT,YAAa,CACb,+BEQoB,CFPpB,cAAe,CAChB,yBAGC,UAAW,CACX,yCAA0C,CAC1C,6CAA8C,CAC9C,qBERoB,CFSpB,YAAa,CACb,qBAAsB,CACtB,eAAgB,CACjB,yBAGC,mBAAoB,CACpB,eAAgB,CAChB,mBAAoB,CACpB,WAAY,CACZ,oBAAqB,CACrB,gBAAiB,CACjB,mBAAoB,CACpB,YAAa,CACb,6BAA8B,CAC9B,wBAAyB,CACzB,yBAA0B,CAC1B,yBAA0B,CAC1B,qBAAsB,CACtB,aAAc,CACd,iBAAkB,CAClB,iBAAkB",sourcesContent:['@import "@src/styles/mixins";\n@import "@src/styles/variables";\n\n.ChatWindowTitle {\n  @include title;\n  margin: 0;\n  padding: 16px;\n  border-bottom: 1px solid $border-color;\n  font-size: 20px;\n}\n\n.ChatWindowWrapper {\n  width: 100%;\n  height: calc(100vh - var(--header-height));\n  max-height: calc(100vh - var(--header-height));\n  background-color: $component-bg;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.ChatWindowContent {\n  -webkit-flex-grow: 1;\n  -moz-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.ChatListWrapper {\n  //flex-grow: 1;\n\n  //overflow-y: auto;\n}\n\n//.ChatContent {\n//  padding: 0 20px 20px;\n//}\n','@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={ChatWindowTitle:"ChatWindowTitle_wQHn7",ChatWindowWrapper:"ChatWindowWrapper_PqGJw",ChatWindowContent:"ChatWindowContent_DBMpl"},n.default=i},38655:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".MessageList_v4FwJ{flex-grow:1;display:flex;flex-direction:column;overflow:auto;overflow-x:hidden;padding:0;margin:0 0 0;position:relative;list-style:none;transition:all 0.2s}.MessageList_v4FwJ::-webkit-scrollbar{width:5px}.MessageList_v4FwJ::-webkit-scrollbar-track{background:transparent}.MessageList_v4FwJ::-webkit-scrollbar-thumb{background:transparent}.MessageList_v4FwJ::-webkit-scrollbar-thumb:hover{background:transparent}.MessageList_v4FwJ:hover::-webkit-scrollbar-track{background:#f8f8f8}.MessageList_v4FwJ:hover::-webkit-scrollbar-thumb{background:#a9a9a9}.MessageList_v4FwJ:hover::-webkit-scrollbar-thumb:hover{background:#646464}\n","",{version:3,sources:["webpack://./pages/ChatsPage/ChatWindow/MessageList/MessageList.module.scss"],names:[],mappings:"AAAA,mBACE,WAAY,CACZ,YAAa,CACb,qBAAsB,CACtB,aAAc,CACd,iBAAkB,CAClB,SAAU,CACV,YAAa,CACb,iBAAkB,CAClB,eAAgB,CAChB,mBAAoB,CAVtB,sCAaI,SAAU,CAbd,4CAiBI,sBAAuB,CAjB3B,4CAsBI,sBAAuB,CAtB3B,kDA2BI,sBAAuB,CA3B3B,kDAiCM,kBAAmB,CAjCzB,kDAsCM,kBAAmB,CAtCzB,wDA2CM,kBAAmB",sourcesContent:[".MessageList {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  overflow-x: hidden;\n  padding: 0;\n  margin: 0 0 0;\n  position: relative;\n  list-style: none;\n  transition: all 0.2s;\n\n  &::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: transparent;\n  }\n\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n\n  &:hover {\n\n    &::-webkit-scrollbar-track {\n      background: #f8f8f8;\n    }\n\n    /* Handle */\n    &::-webkit-scrollbar-thumb {\n      background: #a9a9a9;\n    }\n\n    /* Handle on hover */\n    &::-webkit-scrollbar-thumb:hover {\n      background: #646464;\n    }\n  }\n}\n"],sourceRoot:""}]),i.locals={MessageList:"MessageList_v4FwJ"},n.default=i},19310:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".MessageWrapper_Vf6by{width:100%;padding:10px 20px;margin:0;transition:background-color 0.7s}.MessageWrapper--unseen_zWPN2{background-color:#eeeff3}.MessageContent_z_fko{margin:0;display:flex;word-break:break-all;width:100%;flex-grow:1;transition:all 0.5s}.MessageContent--user_kjtGx{justify-content:flex-end}.MessageContent--user_kjtGx img{order:2;margin-right:0;margin-left:15px}.MessageContent--user_kjtGx>div{order:1}@media screen and (min-width: 744px){.MessageContent_z_fko{justify-content:unset}.MessageContent_z_fko img{order:unset;margin-right:15px;margin-left:unset}.MessageContent_z_fko>div{order:unset}}.MessageAvatar_OgZGA{width:48px;height:48px;max-width:48px;max-height:48px;margin-right:15px;border:2px solid transparent;background-color:#fff;border-radius:50%}.MessageAvatar--user_bKGz0{border-color:#2C9E95;background-color:#2C9E95}.MessageDialogue_NQ3bz{background-color:#fafbfd;padding:8px 12px;border-radius:5px;border:1px solid #dee2ed;white-space:pre-wrap;max-width:550px}.MessageTitleWrapper_lG2s4{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.MessageAuthorFullName_tle4j{font-size:32px;font-weight:700;line-height:24px;color:#0f0f10;font-weight:700;font-size:14px;margin:0 20px 0 0}.MessageDate_Gmcx9{font-size:12px;color:#8b93a6}\n","",{version:3,sources:["webpack://./pages/ChatsPage/ChatWindow/MessageList/Message/Message.module.scss","webpack://./styles/_variables.scss","webpack://./styles/_mixins.scss"],names:[],mappings:"AAGA,sBACE,UAAW,CACX,iBAAkB,CAClB,QAAS,CACT,gCAAiC,CAEjC,8BACE,wBCLoB,CDMrB,sBAID,QAAS,CACT,YAAa,CACb,oBAAqB,CACrB,UAAW,CACX,WAAY,CACZ,mBAAoB,CAEpB,4BACE,wBAAyB,CAD1B,gCAIG,OAAQ,CACR,cAAe,CACf,gBAAiB,CANpB,gCAUG,OAAQ,CACT,qCAnBL,sBAuBI,qBAAsB,CAvB1B,0BA0BM,WAAY,CACZ,iBAAkB,CAClB,iBAAkB,CA5BxB,0BAgCM,WAAY,CACb,CAIL,qBACE,UAAW,CACX,WAAY,CACZ,cAAe,CACf,eAAgB,CAChB,iBAAkB,CAClB,4BAA6B,CAC7B,qBCnDoB,CDoDpB,iBAAkB,CAElB,2BACE,oBCrDmB,CDsDnB,wBCtDmB,CDuDpB,uBAID,wBC5De,CD6Df,gBAAiB,CACjB,iBCjCiB,CDkCjB,wBCxDoB,CDyDpB,oBAAqB,CACrB,eAAgB,CACjB,2BAGC,YAAa,CACb,6BAA8B,CAC9B,kBAAmB,CACnB,kBAAmB,CACpB,6BE5DC,cAAe,CACf,eAAgB,CAChB,gBAAiB,CACjB,aDFwB,CD+DxB,eAAgB,CAChB,cAAe,CACf,iBAAkB,CACnB,mBAGC,cAAe,CACf,aC3E2B",sourcesContent:['@import "@src/styles/variables";\n@import "@src/styles/mixins";\n\n.MessageWrapper {\n  width: 100%;\n  padding: 10px 20px;\n  margin: 0;\n  transition: background-color 0.7s;\n\n  &--unseen {\n    background-color: $light-bg-color;\n  }\n}\n\n.MessageContent {\n  margin: 0;\n  display: flex;\n  word-break: break-all;\n  width: 100%;\n  flex-grow: 1;\n  transition: all 0.5s;\n\n  &--user {\n    justify-content: flex-end;\n\n    img {\n      order: 2;\n      margin-right: 0;\n      margin-left: 15px;\n    }\n\n    & > div {\n      order: 1;\n    }\n  }\n\n  @include for-tablet {\n    justify-content: unset;\n\n    img {\n      order: unset;\n      margin-right: 15px;\n      margin-left: unset;\n    }\n\n    & > div {\n      order: unset;\n    }\n  }\n}\n\n.MessageAvatar {\n  width: 48px;\n  height: 48px;\n  max-width: 48px;\n  max-height: 48px;\n  margin-right: 15px;\n  border: 2px solid transparent;\n  background-color: $component-bg;\n  border-radius: 50%;\n\n  &--user {\n    border-color: $primary-color;\n    background-color: $primary-color;\n  }\n}\n\n.MessageDialogue {\n  background-color: $chat-bg;\n  padding: 8px 12px;\n  border-radius: $border-radius;\n  border: 1px solid $border-color;\n  white-space: pre-wrap;\n  max-width: 550px;\n}\n\n.MessageTitleWrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.MessageAuthorFullName {\n  @include title;\n  font-weight: 700;\n  font-size: 14px;\n  margin: 0 20px 0 0;\n}\n\n.MessageDate {\n  font-size: 12px;\n  color: $border-color-active;\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n",'@import "variables";\r\n\r\n@mixin for-tablet {\r\n  @media screen and (min-width: 744px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-laptop {\r\n  @media screen and (min-width: 1044px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin for-desktop {\r\n  @media screen and (min-width: 1260px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin title {\r\n  font-size: 32px;\r\n  font-weight: 700;\r\n  line-height: 24px;\r\n  color: $title-text-color;\r\n}\r\n\r\n@mixin container {\r\n  max-width: 1220px;\r\n  margin: 0 auto;\r\n  padding: 0 10px;\r\n}\r\n'],sourceRoot:""}]),i.locals={MessageWrapper:"MessageWrapper_Vf6by","MessageWrapper--unseen":"MessageWrapper--unseen_zWPN2",MessageWrapperUnseen:"MessageWrapper--unseen_zWPN2",MessageContent:"MessageContent_z_fko","MessageContent--user":"MessageContent--user_kjtGx",MessageContentUser:"MessageContent--user_kjtGx",MessageAvatar:"MessageAvatar_OgZGA","MessageAvatar--user":"MessageAvatar--user_bKGz0",MessageAvatarUser:"MessageAvatar--user_bKGz0",MessageDialogue:"MessageDialogue_NQ3bz",MessageTitleWrapper:"MessageTitleWrapper_lG2s4",MessageAuthorFullName:"MessageAuthorFullName_tle4j",MessageDate:"MessageDate_Gmcx9"},n.default=i},29957:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,'.ChatFormWrapper_SIUTR{display:flex;align-items:center;flex-direction:column;border-radius:10px;background-color:#fafbfd;border:1px solid transparent;transition:all 0.2s;margin:0 5px 20px}.ChatFormWrapper--focused_TExIQ{border-color:#8b93a6}.ChatInputWrapper_JogZv{padding:16px 24px 16px;width:100%;border-bottom:1px solid #dee2ed}.ChatInput_f5jTm{width:100%;border:none;background-color:transparent;outline:none;font-size:16px;resize:none;max-height:250px;height:22px;font-family:"Manrope",sans-serif}.ChatInput_f5jTm::-webkit-scrollbar{width:0}.ChatInput_f5jTm::-webkit-scrollbar-track{background:transparent}.ChatInput_f5jTm::-webkit-scrollbar-thumb{background:transparent}.ChatInput_f5jTm::-webkit-scrollbar-thumb:hover{background:transparent}.ChatInput_f5jTm::placeholder{color:#bfc5d1;font-size:16px;font-family:"Manrope",sans-serif}.ChatBottomContent_UlZTX{padding:12px;width:100%;display:flex;justify-content:flex-end}.ChatButton_FFVE5{background-color:transparent;outline:none;font-size:24px;color:#8b93a6;padding:0 8px 0 20px;border:none;border-left:1px solid #dee2ed;cursor:pointer;transition:all 0.2s}.ChatButton_FFVE5:focus{color:#333a4a}.ChatButton_FFVE5:hover{color:#333a4a}\n',"",{version:3,sources:["webpack://./pages/ChatsPage/ChatWindow/СhatForm/ChatForm.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,uBACE,YAAa,CACb,kBAAmB,CACnB,qBAAsB,CACtB,kBAAmB,CACnB,wBCCe,CDAf,4BAA6B,CAC7B,mBAAoB,CACpB,iBAAkB,CAElB,gCACE,oBCIyB,CDH1B,wBAID,sBAAuB,CACvB,UAAW,CAEX,+BCNoB,CDOrB,iBAGC,UAAW,CACX,WAAY,CACZ,4BAA6B,CAC7B,YAAa,CACb,cAAe,CACf,WAAY,CACZ,gBAAiB,CACjB,WAAY,CACZ,gCCDiC,CDRnC,oCAYI,OAAQ,CAZZ,0CAiBI,sBAAuB,CAjB3B,0CAsBI,sBAAuB,CAtB3B,gDA2BI,sBAAuB,CA3B3B,8BAgCI,aCrCsB,CDsCtB,cAAe,CACf,gCC1B+B,CD2BhC,yBAID,YAAa,CACb,UAAW,CACX,YAAa,CACb,wBAAyB,CAC1B,kBAGC,4BAA6B,CAC7B,YAAa,CACb,cAAe,CACf,aCxD2B,CDyD3B,oBAAqB,CACrB,WAAY,CACZ,6BC7DoB,CD8DpB,cAAe,CACf,mBAAoB,CATtB,wBAYI,aC7DgB,CDiDpB,wBAgBI,aCjEgB",sourcesContent:['@import "@src/styles/variables";\n\n.ChatFormWrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 10px;\n  background-color: $chat-bg;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n  margin: 0 5px 20px;\n\n  &--focused {\n    border-color: $border-color-active;\n  }\n}\n\n.ChatInputWrapper {\n  padding: 16px 24px 16px;\n  width: 100%;\n\n  border-bottom: 1px solid $border-color;\n}\n\n.ChatInput {\n  width: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  font-size: 16px;\n  resize: none;\n  max-height: 250px;\n  height: 22px;\n  font-family: $font-family;\n\n  &::-webkit-scrollbar {\n    width: 0;\n  }\n\n  /* Track */\n  &::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: transparent;\n  }\n\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: transparent;\n  }\n\n\n  &::placeholder {\n    color: $light-text-color;\n    font-size: 16px;\n    font-family: $font-family;\n  }\n}\n\n.ChatBottomContent {\n  padding: 12px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.ChatButton {\n  background-color: transparent;\n  outline: none;\n  font-size: 24px;\n  color: $border-color-active;\n  padding: 0 8px 0 20px;\n  border: none;\n  border-left: 1px solid $border-color;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:focus {\n    color: $text-color;\n  }\n\n  &:hover {\n    color: $text-color;\n  }\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #bfc5d1;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),i.locals={ChatFormWrapper:"ChatFormWrapper_SIUTR","ChatFormWrapper--focused":"ChatFormWrapper--focused_TExIQ",ChatFormWrapperFocused:"ChatFormWrapper--focused_TExIQ",ChatInputWrapper:"ChatInputWrapper_JogZv",ChatInput:"ChatInput_f5jTm",ChatBottomContent:"ChatBottomContent_UlZTX",ChatButton:"ChatButton_FFVE5"},n.default=i},40939:function(e,n,r){"use strict";r.r(n);var t=r(20559),o=r.n(t),a=r(93476),i=r.n(a)()(o());i.push([e.id,".ChatWrapper_gvOQ_{display:flex}\n","",{version:3,sources:["webpack://./pages/ChatsPage/ChatsPage.module.scss"],names:[],mappings:"AAAA,mBACE,YAAa",sourcesContent:[".ChatWrapper {\n  display: flex;\n}\n"],sourceRoot:""}]),i.locals={ChatWrapper:"ChatWrapper_gvOQ_"},n.default=i},74776:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),s=r(38060),l=r(54865),c=r(31763);c=c.__esModule?c.default:c;var d={};d.styleTagTransform=l,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=s,t(c,d),e.exports=c&&c.locals||{}},50726:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),s=r(38060),l=r(54865),c=r(66056);c=c.__esModule?c.default:c;var d={};d.styleTagTransform=l,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=s,t(c,d),e.exports=c&&c.locals||{}},16908:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),s=r(38060),l=r(54865),c=r(38655);c=c.__esModule?c.default:c;var d={};d.styleTagTransform=l,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=s,t(c,d),e.exports=c&&c.locals||{}},24004:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),s=r(38060),l=r(54865),c=r(19310);c=c.__esModule?c.default:c;var d={};d.styleTagTransform=l,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=s,t(c,d),e.exports=c&&c.locals||{}},32226:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),s=r(38060),l=r(54865),c=r(29957);c=c.__esModule?c.default:c;var d={};d.styleTagTransform=l,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=s,t(c,d),e.exports=c&&c.locals||{}},7163:function(e,n,r){var t=r(1892),o=r(95760),a=r(38311),i=r(58192),s=r(38060),l=r(54865),c=r(40939);c=c.__esModule?c.default:c;var d={};d.styleTagTransform=l,d.setAttributes=i,d.insert=a.bind(null,"head"),d.domAPI=o,d.insertStyleElement=s,t(c,d),e.exports=c&&c.locals||{}}}]);
//# sourceMappingURL=529.js.map