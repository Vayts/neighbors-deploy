(self.webpackChunk=self.webpackChunk||[]).push([[93],{48646:function(r,e,n){"use strict";var o=n(27378),t=n(14935),l=n(60042),a=n.n(l),c=n(88922),i=n(68257),s=n.n(i);e.Z=function(){var r=(0,t.s0)(),e=(0,c.$G)().t;return o.createElement("div",{className:s().BackButtonWrapper,onClick:function(){r(-1)}},o.createElement("div",{className:s().BackButtonContent},o.createElement("span",{className:a()(s().BackButtonIcon,"icon-left")}),o.createElement("span",{className:s().BackButtonText},e("back"))))}},58728:function(r,e,n){"use strict";n.d(e,{Z:function(){return b}});var o=n(33940),t=n(65809),l=n(27378),a=n(60042),c=n.n(a),i=n(97534),s=n(61678),d=n.n(s),f=(0,l.forwardRef)((function(r,e){var n=r.onClose,t=r.valuesArr,a=r.value,s=r.onClick;return(0,i.O)(e,n),l.createElement("ul",{className:d().SelectDropdown},t.map((function(r){return l.createElement("li",{key:"object"===(0,o.Z)(r)?r.value:r,"data-value":"object"===(0,o.Z)(r)?r.value:r,onClick:s,className:c()(d().SelectItem,a===(null==r?void 0:r.value)&&d().SelectItemSelected,a===r&&d().SelectItemSelected)},"object"===(0,o.Z)(r)?r.text:r)})))})),p=n(41694),A=n(44687),B=n.n(A),C=function(r){var e=r.name,n=r.value,a=r.isInvalid,i=r.label,s=r.onChange,d=r.placeholder,A=r.valuesArr,C=r.error,b=r.clearable,u=r.disabled,g=(0,l.useRef)(null),x=(0,l.useState)(""),h=(0,t.Z)(x,2),m=h[0],$=h[1],v=(0,l.useState)(!1),S=(0,t.Z)(v,2),y=S[0],k=S[1],w=(0,l.useState)(!1),_=(0,t.Z)(w,2),D=_[0],E=_[1],I=C&&D;(0,l.useEffect)((function(){var r="object"===(0,o.Z)(A[0])?A.find((function(r){return r.value===n})):A.find((function(r){return r===n}));$(r||"")}),[n,A]);var T=function(){k(!1),D||E(!0)};return l.createElement("div",{className:B().SelectWrapper,ref:g},i&&l.createElement("p",{className:B().SelectLabel},i),l.createElement("div",{className:c()(B().Select,a&&D&&!u?B().SelectInvalid:"",y&&B().SelectFocused,u&&B().SelectDisabled),onClick:function(){if(y)return T(),!1;u||k(!0)}},m&&l.createElement(l.Fragment,null,l.createElement("div",{className:B().SelectSelected},"object"===(0,o.Z)(m)?m.text:m)),l.createElement("div",{className:B().SelectIcons},m&&b&&l.createElement(l.Fragment,null,l.createElement("span",{className:c()(B().SelectRemoveIcon,"icon-cross"),onClick:function(r){r.stopPropagation(),s({target:{name:e,value:""}}),E(!0),k(!1)}}),l.createElement("span",{className:B().SelectIconDivider})),l.createElement("span",{className:c()(B().SelectIcon,!y&&"icon-down",y&&"icon-up")})),!m&&l.createElement("div",{className:B().SelectPlaceholder},d),y&&l.createElement(f,{value:n,onClose:T,onClick:function(r){var n=r.target.dataset.value;s({target:{name:e,value:n}}),E(!0),k(!1)},valuesArr:A,ref:g})),I&&!u&&l.createElement(p.Z,{text:C}))},b=(0,l.memo)(C)},12284:function(r,e,n){"use strict";var o=n(65809),t=n(27378),l=n(60042),a=n.n(l),c=n(88922),i=n(41694),s=n(45829),d=n.n(s),f=function(r){var e=r.label,n=r.name,l=r.onChange,s=r.placeholder,f=r.value,p=r.refValue,A=r.error,B=r.isInvalid,C=(0,t.useState)(!1),b=(0,o.Z)(C,2),u=b[0],g=b[1],x=A&&u,h=(0,t.useId)(),m=(0,c.$G)().t,$=(0,t.useCallback)((function(){g(!0)}),[]),v=(0,t.useCallback)((function(r){l(r),g(!0)}),[]);return t.createElement("div",{className:d().TextAreaWrapper},e&&t.createElement("label",{htmlFor:h,className:d().TextAreaLabel},e),t.createElement("div",{className:d().TextAreaHolder},t.createElement("textarea",{id:h,ref:p||null,name:n,className:a()(d().TextAreaElem,B&&u?d().TextAreaElemInvalid:""),value:f,onChange:v,onBlur:$,placeholder:s||m("enterSomething")})),x&&t.createElement(i.Z,{text:A}))};e.Z=(0,t.memo)(f)},30384:function(r,e,n){"use strict";n.d(e,{r:function(){return f}});var o=n(64649),t=n(36907),l=n(30298),a=n(22501),c=n(67226);function i(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,o)}return n}function s(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){(0,o.Z)(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}var d=a.ZP.t;function f(r){var e,n,o=(e={},""===(n=r.name.trim())?(e.name=d("requiredField"),e):l.bo.test(n)?n.length<c.Bn.minName?(e.name=d("atLeast",{value:c.Bn.minName}),e):n.length>c.Bn.maxName?(e.name=d("lessThan",{value:c.Bn.maxName}),e):e:(e.name=d("incorrectValue"),e)),a=function(r){var e={},n=r.trim();return""===n?(e.description=d("requiredField"),e):l.bo.test(n)?n.length<c.Bn.minDescription?(e.description=d("atLeast",{value:c.Bn.minDescription}),e):n.length>c.Bn.maxDescription?(e.description=d("lessThan",{value:c.Bn.maxDescription}),e):e:(e.description=d("incorrectValue"),e)}(r.description),i=function(r){var e={};return""===r.trim()?(e.currency=d("requiredField"),e):(Object.values(t.Tl).includes(r)||(e.currency=d("currencyNotSupported")),e)}(r.currency);return s(s(s({},o),a),i)}},17562:function(r,e,n){"use strict";n.r(e);var o=n(20559),t=n.n(o),l=n(93476),a=n.n(l)()(t());a.push([r.id,".BackButtonWrapper_R4lAc{display:inline-block;padding:4px 14px;border-radius:5px;border:2px solid transparent;transition:background-color 0.4s;cursor:pointer}.BackButtonWrapper_R4lAc:hover{border-color:#eeeff3;background-color:#eeeff3}.BackButtonContent_GU74w{display:flex;align-items:center}.BackButtonIcon_AK6MU{margin-right:7px;font-size:12px}.BackButtonText_J_Q29{margin:4px 0;font-weight:700;font-size:14px;line-height:1}\n","",{version:3,sources:["webpack://./components/BackButton/BackButton.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,yBACE,oBAAqB,CACrB,gBAAiB,CACjB,iBAAkB,CAClB,4BAA6B,CAC7B,gCAAiC,CACjC,cAAe,CANjB,+BASI,oBCNoB,CDOpB,wBCPoB,CDQrB,yBAID,YAAa,CACb,kBAAmB,CACpB,sBAGC,gBAAiB,CACjB,cAAe,CAChB,sBAGC,YAAa,CACb,eAAgB,CAChB,cAAe,CACf,aAAc",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.BackButtonWrapper {\r\n  display: inline-block;\r\n  padding: 4px 14px;\r\n  border-radius: 5px;\r\n  border: 2px solid transparent;\r\n  transition: background-color 0.4s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    border-color: $light-bg-color;\r\n    background-color: $light-bg-color;\r\n  }\r\n}\r\n\r\n.BackButtonContent {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.BackButtonIcon {\r\n  margin-right: 7px;\r\n  font-size: 12px;\r\n}\r\n\r\n.BackButtonText {\r\n  margin: 4px 0;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  line-height: 1;\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),a.locals={BackButtonWrapper:"BackButtonWrapper_R4lAc",BackButtonContent:"BackButtonContent_GU74w",BackButtonIcon:"BackButtonIcon_AK6MU",BackButtonText:"BackButtonText_J_Q29"},e.default=a},43414:function(r,e,n){"use strict";n.r(e);var o=n(20559),t=n.n(o),l=n(93476),a=n.n(l)()(t());a.push([r.id,".SelectWrapper_lWvif{width:100%;position:relative}.Select_G7aCn{height:48px;width:100%;background-color:#f5f6fa;border:1px solid transparent;user-select:none;border-radius:5px;position:relative;padding-right:30px;display:flex;align-items:center;transition:all 0.2s}.Select_G7aCn:hover{border-color:#dee2ed;cursor:pointer}.Select--focused_isN0A{border-color:#8b93a6}.Select--focused_isN0A:hover{border-color:#8b93a6}.Select--invalid_iAHry{border-color:#2C9E95;background-color:#ecfffe}.Select--invalid_iAHry:hover{border-color:#2C9E95}.Select--invalid_iAHry:focus{outline:none;border-color:#2C9E95}.Select--invalid_iAHry::placeholder{color:#2C9E95;font-size:16px}.Select--invalid_iAHry .SelectPlaceholder_SzVJ8{color:#2C9E95}.Select--disabled_NTvGh{background-color:#e9eaef;transition:all 0.2s}.Select--disabled_NTvGh:hover{cursor:default;border-color:#e9eaef}.SelectSelected_gMBfk{padding:0 50px 0 15px;width:100%;display:flex;align-items:center;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;line-height:1;word-wrap:break-word}.SelectIcon__g5XK{font-size:14px;padding-left:10px}.SelectRemoveIcon_LdT7z{padding-right:10px;font-size:12px;color:#dee2ed;transition:all 0.2s}.SelectRemoveIcon_LdT7z:hover{color:#333a4a}.SelectIcons_dCoeU{height:40px;position:absolute;display:flex;justify-content:space-between;align-items:center;right:15px}.SelectIconDivider_SyRg8{height:50%;width:1px;background-color:#dee2ed}.SelectPlaceholder_SzVJ8{padding:0 30px 0 15px;color:#a2a5b0;font-size:16px}.SelectLabel_loZpN{margin:0 0 8px;font-weight:700;display:inline-block;color:#18181a;font-size:14px}\n","",{version:3,sources:["webpack://./components/UI/Select/Select.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,qBACE,UAAW,CACX,iBAAkB,CACnB,cAGC,WAAY,CACZ,UAAW,CACX,wBCTqB,CDUrB,4BAA6B,CAC7B,gBAAiB,CACjB,iBCwBiB,CDvBjB,iBAAkB,CAClB,kBAAmB,CACnB,YAAa,CACb,kBAAmB,CACnB,mBAAoB,CAXtB,oBAcI,oBCLwB,CDMxB,cAAe,CAChB,uBAGC,oBCTyB,CDQ1B,6BAIG,oBCZuB,CDaxB,uBAID,oBCzBmB,CD0BnB,wBCtByB,CDoB1B,6BAKG,oBC7BiB,CDwBpB,6BASG,YAAa,CACb,oBClCiB,CDwBpB,oCAcG,aCtCiB,CDuCjB,cAAe,CAflB,gDAmBG,aC3CiB,CD4ClB,wBAID,wBCnDyB,CDoDzB,mBAAoB,CAFrB,8BAKG,cAAe,CACf,oBCxDuB,CDyDxB,sBAKH,qBAAsB,CACtB,UAAW,CACX,YAAa,CACb,kBAAmB,CACnB,mBAAoB,CACpB,2BAA4B,CAC5B,oBAAqB,CACrB,eAAgB,CAChB,sBAAuB,CACvB,aAAc,CACd,oBAAqB,CACtB,kBAIC,cAAe,CACf,iBAAkB,CACnB,wBAIC,kBAAmB,CACnB,cAAe,CACf,aC5EoB,CD6EpB,mBAAoB,CAJtB,8BAOI,aC3EgB,CD4EjB,mBAID,WAAY,CACZ,iBAAkB,CAClB,YAAa,CACb,6BAA8B,CAC9B,kBAAmB,CACnB,UAAW,CACZ,yBAGC,UAAW,CACX,SAAU,CACV,wBChGoB,CDiGrB,yBAGC,qBAAsB,CACtB,aCjGwB,CDkGxB,cAAe,CAChB,mBAGC,cAAe,CACf,eAAgB,CAChB,oBAAqB,CACrB,aCvGuB,CDwGvB,cAAe",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.SelectWrapper {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.Select {\r\n  height: 48px;\r\n  width: 100%;\r\n  background-color: $content-color;\r\n  border: 1px solid transparent;\r\n  user-select: none;\r\n  border-radius: $border-radius;\r\n  position: relative;\r\n  padding-right: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  transition: all 0.2s;\r\n\r\n  &:hover {\r\n    border-color: $border-color-hover;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &--focused {\r\n    border-color: $border-color-active;\r\n\r\n    &:hover {\r\n      border-color: $border-color-active;\r\n    }\r\n  }\r\n\r\n  &--invalid {\r\n    border-color: $primary-color;\r\n    background-color: $primary-color-light;\r\n\r\n    &:hover {\r\n      border-color: $primary-color;\r\n    }\r\n\r\n    &:focus {\r\n      outline: none;\r\n      border-color: $primary-color;\r\n    }\r\n\r\n    &::placeholder {\r\n      color: $primary-color;\r\n      font-size: 16px;\r\n    }\r\n\r\n    & .SelectPlaceholder {\r\n      color: $primary-color;\r\n    }\r\n  }\r\n\r\n  &--disabled {\r\n    background-color: $disabled-text-field;\r\n    transition: all 0.2s;\r\n\r\n    &:hover {\r\n      cursor: default;\r\n      border-color: $disabled-text-field;\r\n    }\r\n  }\r\n}\r\n\r\n.SelectSelected {\r\n  padding: 0 50px 0 15px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 1;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 1;\r\n  word-wrap: break-word;\r\n}\r\n\r\n\r\n.SelectIcon {\r\n  font-size: 14px;\r\n  padding-left: 10px;\r\n}\r\n\r\n\r\n.SelectRemoveIcon {\r\n  padding-right: 10px;\r\n  font-size: 12px;\r\n  color: $border-color;\r\n  transition: all 0.2s;\r\n\r\n  &:hover {\r\n    color: $text-color;\r\n  }\r\n}\r\n\r\n.SelectIcons {\r\n  height: 40px;\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  right: 15px;\r\n}\r\n\r\n.SelectIconDivider {\r\n  height: 50%;\r\n  width: 1px;\r\n  background-color: $border-color;\r\n}\r\n\r\n.SelectPlaceholder {\r\n  padding: 0 30px 0 15px;\r\n  color: $light-text-color;\r\n  font-size: 16px;\r\n}\r\n\r\n.SelectLabel {\r\n  margin: 0 0 8px;\r\n  font-weight: 700;\r\n  display: inline-block;\r\n  color: $dark-text-color;\r\n  font-size: 14px;\r\n}\r\n\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),a.locals={SelectWrapper:"SelectWrapper_lWvif",Select:"Select_G7aCn","Select--focused":"Select--focused_isN0A",SelectFocused:"Select--focused_isN0A","Select--invalid":"Select--invalid_iAHry",SelectInvalid:"Select--invalid_iAHry",SelectPlaceholder:"SelectPlaceholder_SzVJ8","Select--disabled":"Select--disabled_NTvGh",SelectDisabled:"Select--disabled_NTvGh",SelectSelected:"SelectSelected_gMBfk",SelectIcon:"SelectIcon__g5XK",SelectRemoveIcon:"SelectRemoveIcon_LdT7z",SelectIcons:"SelectIcons_dCoeU",SelectIconDivider:"SelectIconDivider_SyRg8",SelectLabel:"SelectLabel_loZpN"},e.default=a},30038:function(r,e,n){"use strict";n.r(e);var o=n(20559),t=n.n(o),l=n(93476),a=n.n(l)()(t());a.push([r.id,".SelectDropdown_zqKd9{width:100%;position:absolute;top:100%;background-color:#fff;box-shadow:0 0 5px rgba(0,0,0,0.15);z-index:10;border-radius:5px;padding:0;list-style:none;margin:15px 0 0}.SelectItem_ui8au{padding:12px 10px;transition:all 0.3s}.SelectItem_ui8au:hover{cursor:pointer;background-color:#f7f8fb}.SelectItem--selected_S5zNw{background-color:#fbfbfb;color:#485268;font-weight:600}\n","",{version:3,sources:["webpack://./components/UI/Select/SelectDropdown/SelectDropdown.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,sBACE,UAAW,CACX,iBAAkB,CAClB,QAAS,CACT,qBCCoB,CDApB,mCC4B4C,CD3B5C,UAAW,CACX,iBC4BiB,CD3BjB,SAAU,CACV,eAAgB,CAChB,eAAgB,CACjB,kBAGC,iBAAkB,CAClB,mBAAoB,CAFtB,wBAKI,cAAe,CACf,wBCjBuB,CDkBxB,4BAGC,wBCvByB,CDwBzB,aCH4B,CDI5B,eAAgB",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.SelectDropdown {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 100%;\r\n  background-color: $component-bg;\r\n  box-shadow: $light-box-shadow;\r\n  z-index: 10;\r\n  border-radius: $border-radius;\r\n  padding: 0;\r\n  list-style: none;\r\n  margin: 15px 0 0;\r\n}\r\n\r\n.SelectItem {\r\n  padding: 12px 10px;\r\n  transition: all 0.3s;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n    background-color: $light-field-hover;\r\n  }\r\n\r\n  &--selected {\r\n    background-color: $content-color-hover;\r\n    color: $title-light-text-color;\r\n    font-weight: 600;\r\n  }\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),a.locals={SelectDropdown:"SelectDropdown_zqKd9",SelectItem:"SelectItem_ui8au","SelectItem--selected":"SelectItem--selected_S5zNw",SelectItemSelected:"SelectItem--selected_S5zNw"},e.default=a},11623:function(r,e,n){"use strict";n.r(e);var o=n(20559),t=n.n(o),l=n(93476),a=n.n(l)()(t());a.push([r.id,'.TextAreaWrapper_GLBWX{width:100%}.TextAreaLabel_OROat{margin-bottom:8px;font-weight:700;display:inline-block;color:#18181a;font-size:14px}.TextAreaHolder_fono3{height:150px;width:100%;position:relative}.TextAreaElem_ugpeP{width:100%;background-color:#f5f6fa;border:1px solid transparent;transition:all 0.3s;padding:10px 15px;font-size:16px;resize:none;height:100%;border-radius:5px;font-family:"Manrope",sans-serif}.TextAreaElem_ugpeP:hover{border-color:#dee2ed}.TextAreaElem_ugpeP:focus{outline:none;border-color:#8b93a6}.TextAreaElem_ugpeP::placeholder{color:#a2a5b0;font-size:16px;font-family:"Manrope",sans-serif}.TextAreaElem--invalid_wBRae{border-color:#2C9E95;background-color:#ecfffe}.TextAreaElem--invalid_wBRae:hover{border-color:#2C9E95}.TextAreaElem--invalid_wBRae:focus{outline:none;border-color:#2C9E95}.TextAreaElem--invalid_wBRae::placeholder{color:#2C9E95;font-size:16px}\n',"",{version:3,sources:["webpack://./components/UI/TextArea/TextArea.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,uBACE,UAAW,CACZ,qBAGC,iBAAkB,CAClB,eAAgB,CAChB,oBAAqB,CACrB,aCWuB,CDVvB,cAAe,CAChB,sBAIC,YAAa,CACb,UAAW,CACX,iBAAkB,CACnB,oBAGC,UAAW,CACX,wBCtBqB,CDuBrB,4BAA6B,CAC7B,mBAAoB,CACpB,iBAAkB,CAClB,cAAe,CACf,WAAY,CACZ,WAAY,CACZ,iBCOiB,CDNjB,gCCCiC,CDXnC,0BAaI,oBClBwB,CDK5B,0BAiBI,YAAa,CACb,oBCtByB,CDI7B,iCAsBI,aCxBsB,CDyBtB,cAAe,CACf,gCCb+B,CDchC,6BAGC,oBCxCmB,CDyCnB,wBCrCyB,CDmC1B,mCAKG,oBC5CiB,CDuCpB,mCASG,YAAa,CACb,oBCjDiB,CDuCpB,0CAcG,aCrDiB,CDsDjB,cAAe",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.TextAreaWrapper {\r\n  width: 100%;\r\n}\r\n\r\n.TextAreaLabel {\r\n  margin-bottom: 8px;\r\n  font-weight: 700;\r\n  display: inline-block;\r\n  color: $dark-text-color;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.TextAreaHolder {\r\n  height: 150px;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.TextAreaElem {\r\n  width: 100%;\r\n  background-color: $content-color;\r\n  border: 1px solid transparent;\r\n  transition: all 0.3s;\r\n  padding: 10px 15px;\r\n  font-size: 16px;\r\n  resize: none;\r\n  height: 100%;\r\n  border-radius: $border-radius;\r\n  font-family: $font-family;\r\n\r\n  &:hover {\r\n    border-color: $border-color-hover;\r\n  }\r\n\r\n  &:focus {\r\n    outline: none;\r\n    border-color: $border-color-active;\r\n  }\r\n\r\n  &::placeholder {\r\n    color: $light-text-color;\r\n    font-size: 16px;\r\n    font-family: $font-family;\r\n  }\r\n\r\n  &--invalid {\r\n    border-color: $primary-color;\r\n    background-color: $primary-color-light;\r\n\r\n    &:hover {\r\n      border-color: $primary-color;\r\n    }\r\n\r\n    &:focus {\r\n      outline: none;\r\n      border-color: $primary-color;\r\n    }\r\n\r\n    &::placeholder {\r\n      color: $primary-color;\r\n      font-size: 16px;\r\n    }\r\n  }\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),a.locals={TextAreaWrapper:"TextAreaWrapper_GLBWX",TextAreaLabel:"TextAreaLabel_OROat",TextAreaHolder:"TextAreaHolder_fono3",TextAreaElem:"TextAreaElem_ugpeP","TextAreaElem--invalid":"TextAreaElem--invalid_wBRae",TextAreaElemInvalid:"TextAreaElem--invalid_wBRae"},e.default=a},68257:function(r,e,n){var o=n(1892),t=n(95760),l=n(38311),a=n(58192),c=n(38060),i=n(54865),s=n(17562);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=a,d.insert=l.bind(null,"head"),d.domAPI=t,d.insertStyleElement=c,o(s,d),r.exports=s&&s.locals||{}},44687:function(r,e,n){var o=n(1892),t=n(95760),l=n(38311),a=n(58192),c=n(38060),i=n(54865),s=n(43414);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=a,d.insert=l.bind(null,"head"),d.domAPI=t,d.insertStyleElement=c,o(s,d),r.exports=s&&s.locals||{}},61678:function(r,e,n){var o=n(1892),t=n(95760),l=n(38311),a=n(58192),c=n(38060),i=n(54865),s=n(30038);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=a,d.insert=l.bind(null,"head"),d.domAPI=t,d.insertStyleElement=c,o(s,d),r.exports=s&&s.locals||{}},45829:function(r,e,n){var o=n(1892),t=n(95760),l=n(38311),a=n(58192),c=n(38060),i=n(54865),s=n(11623);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=a,d.insert=l.bind(null,"head"),d.domAPI=t,d.insertStyleElement=c,o(s,d),r.exports=s&&s.locals||{}}}]);
//# sourceMappingURL=93.js.map