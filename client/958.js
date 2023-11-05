(self.webpackChunk=self.webpackChunk||[]).push([[958],{40284:function(e,r,n){"use strict";var o=n(27378),t=n(60042),c=n.n(t),l=n(59932),a=n.n(l),i=function(e){var r=e.label,n=e.name,t=e.onChange,l=e.checked,i=e.disabled,s=(0,o.useId)();return o.createElement("div",{className:a().CheckboxWrapper},o.createElement("label",{htmlFor:s,className:c()(a().CheckboxLabel,i&&l&&a().CheckboxLabelDisabledChecked,i&&a().CheckboxLabelDisabled)},o.createElement("div",{className:c()(a().CheckboxCustom,l&&a().CheckboxCustomChecked)},o.createElement("span",{className:"icon-check"})),o.createElement("p",{className:a().CheckboxText},r)),o.createElement("input",{type:"checkbox",name:n,id:s,className:a().CheckboxInput,onChange:function(){i||t(n,!l)},checked:l}))};r.Z=(0,o.memo)(i)},13187:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var o=n(27378),t=n(88922),c=n(41694),l=n(60042),a=n.n(l),i=n(12693),s=n(67926),d=n(7338),b=n(23088),C=n.n(b),f=function(e){var r=e.onClick,n=e.member,t=e.checked;return o.createElement("div",{className:C().MemberLabel,onClick:function(){r(n._id)}},o.createElement("div",{className:a()(C().MemberCustomCheckbox,t&&C().MemberCustomCheckboxChecked)},o.createElement("span",{className:"icon-check"})),o.createElement("div",{className:C().MemberContent},o.createElement("img",{className:C().MemberAvatar,src:"".concat(d.B3,"/").concat(n.avatar),alt:"".concat(n.fullName," avatar")}),o.createElement("p",{className:C().MemberName},n.fullName)))},p=n(67920),A=n.n(p),h=function(e){var r=e.members,n=e.checkedArr,l=e.onMemberSelect,d=(0,i.C)((function(e){return(0,s.$)(e,r)})),b=(0,t.$G)().t;return o.createElement(o.Fragment,null,o.createElement("div",{className:a()(A().MembersWrapper,!n.length&&A().MembersWrapperInvalid)},o.createElement("div",{className:A().MemberNotification},Boolean(!r.length)&&o.createElement(c.Z,{text:b("selectNeighborhoodWithMembers")})),d.map((function(e){return o.createElement(f,{key:e._id,member:e,onClick:l,checked:n.includes(e._id)})}))),Boolean(!n.length)&&Boolean(r.length)&&o.createElement(c.Z,{text:b("atLeastOneParticipant")}))},m=(0,o.memo)(h)},58728:function(e,r,n){"use strict";n.d(r,{Z:function(){return h}});var o=n(33940),t=n(65809),c=n(27378),l=n(60042),a=n.n(l),i=n(97534),s=n(61678),d=n.n(s),b=(0,c.forwardRef)((function(e,r){var n=e.onClose,t=e.valuesArr,l=e.value,s=e.onClick;return(0,i.O)(r,n),c.createElement("ul",{className:d().SelectDropdown},t.map((function(e){return c.createElement("li",{key:"object"===(0,o.Z)(e)?e.value:e,"data-value":"object"===(0,o.Z)(e)?e.value:e,onClick:s,className:a()(d().SelectItem,l===(null==e?void 0:e.value)&&d().SelectItemSelected,l===e&&d().SelectItemSelected)},"object"===(0,o.Z)(e)?e.text:e)})))})),C=n(41694),f=n(44687),p=n.n(f),A=function(e){var r=e.name,n=e.value,l=e.isInvalid,i=e.label,s=e.onChange,d=e.placeholder,f=e.valuesArr,A=e.error,h=e.clearable,m=e.disabled,B=(0,c.useRef)(null),u=(0,c.useState)(""),x=(0,t.Z)(u,2),g=x[0],$=x[1],k=(0,c.useState)(!1),v=(0,t.Z)(k,2),S=v[0],y=v[1],_=(0,c.useState)(!1),w=(0,t.Z)(_,2),I=w[0],E=w[1],M=A&&I;(0,c.useEffect)((function(){var e="object"===(0,o.Z)(f[0])?f.find((function(e){return e.value===n})):f.find((function(e){return e===n}));$(e||"")}),[n,f]);var D=function(){y(!1),I||E(!0)};return c.createElement("div",{className:p().SelectWrapper,ref:B},i&&c.createElement("p",{className:p().SelectLabel},i),c.createElement("div",{className:a()(p().Select,l&&I&&!m?p().SelectInvalid:"",S&&p().SelectFocused,m&&p().SelectDisabled),onClick:function(){if(S)return D(),!1;m||y(!0)}},g&&c.createElement(c.Fragment,null,c.createElement("div",{className:p().SelectSelected},"object"===(0,o.Z)(g)?g.text:g)),c.createElement("div",{className:p().SelectIcons},g&&h&&c.createElement(c.Fragment,null,c.createElement("span",{className:a()(p().SelectRemoveIcon,"icon-cross"),onClick:function(e){e.stopPropagation(),s({target:{name:r,value:""}}),E(!0),y(!1)}}),c.createElement("span",{className:p().SelectIconDivider})),c.createElement("span",{className:a()(p().SelectIcon,!S&&"icon-down",S&&"icon-up")})),!g&&c.createElement("div",{className:p().SelectPlaceholder},d),S&&c.createElement(b,{value:n,onClose:D,onClick:function(e){var n=e.target.dataset.value;s({target:{name:r,value:n}}),E(!0),y(!1)},valuesArr:f,ref:B})),M&&!m&&c.createElement(C.Z,{text:A}))},h=(0,c.memo)(A)},93218:function(e,r,n){"use strict";function o(e){return e.map((function(e){return{text:e.name,value:e._id}}))}function t(e,r){return e.filter((function(e){return e.isFavorite||e._id===r})).sort((function(e,r){return e.isFavorite&&!r.isFavorite?-1:!e.isFavorite&&r.isFavorite?1:0}))}function c(e,r){return e?e.members.filter((function(e){return e!==r})):[]}n.d(r,{T$:function(){return c},Xy:function(){return o},mG:function(){return t}})},67926:function(e,r,n){"use strict";n.d(r,{$:function(){return o}});var o=(0,n(61166).P1)([function(e){return e.members},function(e,r){return r}],(function(e,r){return r.map((function(r){return e.entities[r]}))}))},36593:function(e,r,n){"use strict";n.d(r,{k:function(){return o}});var o=n(32725).Gb.getSelectors((function(e){return e.userNeighborhoods})).selectAll},18614:function(e,r,n){"use strict";n.r(r);var o=n(20559),t=n.n(o),c=n(93476),l=n.n(c)()(t());l.push([e.id,".CheckboxWrapper_qOZfo{user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none}.CheckboxLabel_zd_IK{display:flex;align-items:center;cursor:pointer}.CheckboxLabel--disabled-checked_SqR0z{cursor:default}.CheckboxLabel--disabled-checked_SqR0z .CheckboxCustom_YrGAg{background-color:#74a9a5;border-color:#74a9a5}.CheckboxLabel--disabled-checked_SqR0z .CheckboxCustom_YrGAg span{opacity:1;color:#fff}.CheckboxLabel--disabled_Ygnbw{cursor:default}.CheckboxLabel_zd_IK:hover .CheckboxCustom_YrGAg:not(.CheckboxCustom--checked_IX6tj){background-color:#ecfffe}.CheckboxLabel_zd_IK:hover .CheckboxCustom_YrGAg:not(.CheckboxCustom--checked_IX6tj) span{opacity:1}.CheckboxText_vUUcn{margin:0}.CheckboxInput_rbS3A{display:none}.CheckboxCustom_YrGAg{width:20px;height:20px;min-width:20px;min-height:20px;border:1px solid #dee2ed;border-radius:4px;margin-right:10px;display:flex;justify-content:center;align-items:center;transition:all 0.2s;user-select:none}.CheckboxCustom_YrGAg span{transition:all 0.2s;opacity:0;font-size:12px;color:#fff}.CheckboxCustom--checked_IX6tj{background-color:#2C9E95;border-color:#2C9E95}.CheckboxCustom--checked_IX6tj span{opacity:1;color:#fff}\n","",{version:3,sources:["webpack://./components/UI/Checkbox/Checkbox.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,uBACE,gBAAiB,CACjB,qBAAsB,CACtB,oBAAqB,CACrB,wBAAyB,CAC1B,qBAGC,YAAa,CACb,kBAAmB,CACnB,cAAe,CAEf,uCACE,cAAe,CADhB,6DAIG,wBCR0B,CDS1B,oBCT0B,CDI7B,kEAQK,SAAU,CACV,UCCiB,CDAlB,+BAKH,cAAe,CApBnB,qFA0BQ,wBCtBqB,CDJ7B,0FA6BU,SAAU,CACX,oBAOP,QAAS,CACV,qBAGC,YAAa,CACd,sBAGC,UAAW,CACX,WAAY,CACZ,cAAe,CACf,eAAgB,CAChB,wBC3CoB,CD4CpB,iBAAkB,CAClB,iBAAkB,CAClB,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CACnB,mBAAoB,CACpB,gBAAiB,CAZnB,2BAgBI,mBAAoB,CACpB,SAAU,CACV,cAAe,CACf,UChDqB,CDiDtB,+BAGC,wBCnEmB,CDoEnB,oBCpEmB,CDkEpB,oCAKG,SAAU,CACV,UCzDmB",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.CheckboxWrapper {\r\n  user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -webkit-user-select: none;\r\n}\r\n\r\n.CheckboxLabel {\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n\r\n  &--disabled-checked {\r\n    cursor: default;\r\n\r\n    .CheckboxCustom {\r\n      background-color: $primary-color-disabled;\r\n      border-color: $primary-color-disabled;\r\n\r\n      span {\r\n        opacity: 1;\r\n        color: $reverse-text-color;\r\n      }\r\n    }\r\n  }\r\n\r\n  &--disabled {\r\n    cursor: default;\r\n  }\r\n\r\n  &:hover {\r\n    .CheckboxCustom {\r\n      &:not(.CheckboxCustom--checked) {\r\n        background-color: $primary-color-light;\r\n\r\n        span {\r\n          opacity: 1;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.CheckboxText {\r\n  margin: 0;\r\n}\r\n\r\n.CheckboxInput {\r\n  display: none;\r\n}\r\n\r\n.CheckboxCustom {\r\n  width: 20px;\r\n  height: 20px;\r\n  min-width: 20px;\r\n  min-height: 20px;\r\n  border: 1px solid $border-color;\r\n  border-radius: 4px;\r\n  margin-right: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.2s;\r\n  user-select: none;\r\n\r\n\r\n  span {\r\n    transition: all 0.2s;\r\n    opacity: 0;\r\n    font-size: 12px;\r\n    color: $reverse-text-color;\r\n  }\r\n\r\n  &--checked {\r\n    background-color: $primary-color;\r\n    border-color: $primary-color;\r\n\r\n    span {\r\n      opacity: 1;\r\n      color: $reverse-text-color;\r\n    }\r\n  }\r\n\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),l.locals={CheckboxWrapper:"CheckboxWrapper_qOZfo",CheckboxLabel:"CheckboxLabel_zd_IK","CheckboxLabel--disabled-checked":"CheckboxLabel--disabled-checked_SqR0z",CheckboxLabelDisabledChecked:"CheckboxLabel--disabled-checked_SqR0z",CheckboxCustom:"CheckboxCustom_YrGAg","CheckboxLabel--disabled":"CheckboxLabel--disabled_Ygnbw",CheckboxLabelDisabled:"CheckboxLabel--disabled_Ygnbw","CheckboxCustom--checked":"CheckboxCustom--checked_IX6tj",CheckboxCustomChecked:"CheckboxCustom--checked_IX6tj",CheckboxText:"CheckboxText_vUUcn",CheckboxInput:"CheckboxInput_rbS3A"},r.default=l},71324:function(e,r,n){"use strict";n.r(r);var o=n(20559),t=n.n(o),c=n(93476),l=n.n(c)()(t());l.push([e.id,".MemberLabel__F4CP{display:flex;align-items:center;padding:10px 15px;cursor:pointer;transition:all 0.2s}.MemberLabel__F4CP:hover{background-color:#fbfbfb}.MemberAvatar_xD8pz{width:30px;height:30px;min-width:30px;min-height:30px;margin-right:10px}.MemberName_WMMSE{font-weight:500;margin:0}.MemberCustomCheckbox_KV1ft{width:17px;height:17px;min-width:17px;min-height:17px;border:1px solid #dee2ed;border-radius:4px;margin-right:10px;display:flex;justify-content:center;align-items:center;transition:all 0.2s;user-select:none}.MemberCustomCheckbox_KV1ft span{transition:all 0.2s;opacity:0;font-size:12px;color:#fff}.MemberCustomCheckbox--checked_pkc8X{background-color:#2C9E95;border-color:#2C9E95}.MemberCustomCheckbox--checked_pkc8X span{opacity:1;color:#fff}.MemberContent_mDNur{display:flex;align-items:center}\n","",{version:3,sources:["webpack://./components/UI/MembersCheckboxList/MemberCheckboxItem/MemberCheckboxItem.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,mBACE,YAAa,CACb,kBAAmB,CACnB,iBAAkB,CAClB,cAAe,CACf,mBAAoB,CALtB,yBAQI,wBCRyB,CDS1B,oBAID,UAAW,CACX,WAAY,CACZ,cAAe,CACf,eAAgB,CAChB,iBAAkB,CACnB,kBAGC,eAAgB,CAChB,QAAS,CACV,4BAGC,UAAW,CACX,WAAY,CACZ,cAAe,CACf,eAAgB,CAChB,wBCjBoB,CDkBpB,iBAAkB,CAClB,iBAAkB,CAClB,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CACnB,mBAAoB,CACpB,gBAAiB,CAZnB,iCAeI,mBAAoB,CACpB,SAAU,CACV,cAAe,CACf,UCrBqB,CDsBtB,qCAGC,wBCxCmB,CDyCnB,oBCzCmB,CDuCpB,0CAKG,SAAU,CACV,UC9BmB,CD+BpB,qBAMH,YAAa,CACb,kBAAmB",sourcesContent:['@import "@src/styles/variables";\n\n.MemberLabel {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  cursor: pointer;\n  transition: all 0.2s;\n\n  &:hover {\n    background-color: $content-color-hover;\n  }\n}\n\n.MemberAvatar {\n  width: 30px;\n  height: 30px;\n  min-width: 30px;\n  min-height: 30px;\n  margin-right: 10px;\n}\n\n.MemberName {\n  font-weight: 500;\n  margin: 0;\n}\n\n.MemberCustomCheckbox {\n  width: 17px;\n  height: 17px;\n  min-width: 17px;\n  min-height: 17px;\n  border: 1px solid $border-color;\n  border-radius: 4px;\n  margin-right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s;\n  user-select: none;\n\n  span {\n    transition: all 0.2s;\n    opacity: 0;\n    font-size: 12px;\n    color: $reverse-text-color;\n  }\n\n  &--checked {\n    background-color: $primary-color;\n    border-color: $primary-color;\n\n    span {\n      opacity: 1;\n      color: $reverse-text-color;\n    }\n  }\n}\n\n\n.MemberContent {\n  display: flex;\n  align-items: center;\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),l.locals={MemberLabel:"MemberLabel__F4CP",MemberAvatar:"MemberAvatar_xD8pz",MemberName:"MemberName_WMMSE",MemberCustomCheckbox:"MemberCustomCheckbox_KV1ft","MemberCustomCheckbox--checked":"MemberCustomCheckbox--checked_pkc8X",MemberCustomCheckboxChecked:"MemberCustomCheckbox--checked_pkc8X",MemberContent:"MemberContent_mDNur"},r.default=l},29954:function(e,r,n){"use strict";n.r(r);var o=n(20559),t=n.n(o),c=n(93476),l=n.n(c)()(t());l.push([e.id,".MembersWrapper_dX3iR{border:2px dotted #dee2ed}.MembersWrapper--invalid_XvJ1M{border-color:#2C9E95}.MemberNotification_s0aYO{padding-left:15px}\n","",{version:3,sources:["webpack://./components/UI/MembersCheckboxList/MembersCheckboxList.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,sBACE,yBCYoB,CDVpB,+BACE,oBCGmB,CDFpB,0BAID,iBAAkB",sourcesContent:['@import "@src/styles/variables";\n\n.MembersWrapper {\n  border: 2px dotted $border-color;\n\n  &--invalid {\n    border-color: $primary-color;\n  }\n}\n\n.MemberNotification {\n  padding-left: 15px;\n}\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),l.locals={MembersWrapper:"MembersWrapper_dX3iR","MembersWrapper--invalid":"MembersWrapper--invalid_XvJ1M",MembersWrapperInvalid:"MembersWrapper--invalid_XvJ1M",MemberNotification:"MemberNotification_s0aYO"},r.default=l},43414:function(e,r,n){"use strict";n.r(r);var o=n(20559),t=n.n(o),c=n(93476),l=n.n(c)()(t());l.push([e.id,".SelectWrapper_lWvif{width:100%;position:relative}.Select_G7aCn{height:48px;width:100%;background-color:#f5f6fa;border:1px solid transparent;user-select:none;border-radius:5px;position:relative;padding-right:30px;display:flex;align-items:center;transition:all 0.2s}.Select_G7aCn:hover{border-color:#dee2ed;cursor:pointer}.Select--focused_isN0A{border-color:#8b93a6}.Select--focused_isN0A:hover{border-color:#8b93a6}.Select--invalid_iAHry{border-color:#2C9E95;background-color:#ecfffe}.Select--invalid_iAHry:hover{border-color:#2C9E95}.Select--invalid_iAHry:focus{outline:none;border-color:#2C9E95}.Select--invalid_iAHry::placeholder{color:#2C9E95;font-size:16px}.Select--invalid_iAHry .SelectPlaceholder_SzVJ8{color:#2C9E95}.Select--disabled_NTvGh{background-color:#e9eaef;transition:all 0.2s}.Select--disabled_NTvGh:hover{cursor:default;border-color:#e9eaef}.SelectSelected_gMBfk{padding:0 50px 0 15px;width:100%;display:flex;align-items:center;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis;line-height:1;word-wrap:break-word}.SelectIcon__g5XK{font-size:14px;padding-left:10px}.SelectRemoveIcon_LdT7z{padding-right:10px;font-size:12px;color:#dee2ed;transition:all 0.2s}.SelectRemoveIcon_LdT7z:hover{color:#333a4a}.SelectIcons_dCoeU{height:40px;position:absolute;display:flex;justify-content:space-between;align-items:center;right:15px}.SelectIconDivider_SyRg8{height:50%;width:1px;background-color:#dee2ed}.SelectPlaceholder_SzVJ8{padding:0 30px 0 15px;color:#a2a5b0;font-size:16px}.SelectLabel_loZpN{margin:0 0 8px;font-weight:700;display:inline-block;color:#18181a;font-size:14px}\n","",{version:3,sources:["webpack://./components/UI/Select/Select.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,qBACE,UAAW,CACX,iBAAkB,CACnB,cAGC,WAAY,CACZ,UAAW,CACX,wBCTqB,CDUrB,4BAA6B,CAC7B,gBAAiB,CACjB,iBCwBiB,CDvBjB,iBAAkB,CAClB,kBAAmB,CACnB,YAAa,CACb,kBAAmB,CACnB,mBAAoB,CAXtB,oBAcI,oBCLwB,CDMxB,cAAe,CAChB,uBAGC,oBCTyB,CDQ1B,6BAIG,oBCZuB,CDaxB,uBAID,oBCzBmB,CD0BnB,wBCtByB,CDoB1B,6BAKG,oBC7BiB,CDwBpB,6BASG,YAAa,CACb,oBClCiB,CDwBpB,oCAcG,aCtCiB,CDuCjB,cAAe,CAflB,gDAmBG,aC3CiB,CD4ClB,wBAID,wBCnDyB,CDoDzB,mBAAoB,CAFrB,8BAKG,cAAe,CACf,oBCxDuB,CDyDxB,sBAKH,qBAAsB,CACtB,UAAW,CACX,YAAa,CACb,kBAAmB,CACnB,mBAAoB,CACpB,2BAA4B,CAC5B,oBAAqB,CACrB,eAAgB,CAChB,sBAAuB,CACvB,aAAc,CACd,oBAAqB,CACtB,kBAIC,cAAe,CACf,iBAAkB,CACnB,wBAIC,kBAAmB,CACnB,cAAe,CACf,aC5EoB,CD6EpB,mBAAoB,CAJtB,8BAOI,aC3EgB,CD4EjB,mBAID,WAAY,CACZ,iBAAkB,CAClB,YAAa,CACb,6BAA8B,CAC9B,kBAAmB,CACnB,UAAW,CACZ,yBAGC,UAAW,CACX,SAAU,CACV,wBChGoB,CDiGrB,yBAGC,qBAAsB,CACtB,aCjGwB,CDkGxB,cAAe,CAChB,mBAGC,cAAe,CACf,eAAgB,CAChB,oBAAqB,CACrB,aCvGuB,CDwGvB,cAAe",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.SelectWrapper {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.Select {\r\n  height: 48px;\r\n  width: 100%;\r\n  background-color: $content-color;\r\n  border: 1px solid transparent;\r\n  user-select: none;\r\n  border-radius: $border-radius;\r\n  position: relative;\r\n  padding-right: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  transition: all 0.2s;\r\n\r\n  &:hover {\r\n    border-color: $border-color-hover;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &--focused {\r\n    border-color: $border-color-active;\r\n\r\n    &:hover {\r\n      border-color: $border-color-active;\r\n    }\r\n  }\r\n\r\n  &--invalid {\r\n    border-color: $primary-color;\r\n    background-color: $primary-color-light;\r\n\r\n    &:hover {\r\n      border-color: $primary-color;\r\n    }\r\n\r\n    &:focus {\r\n      outline: none;\r\n      border-color: $primary-color;\r\n    }\r\n\r\n    &::placeholder {\r\n      color: $primary-color;\r\n      font-size: 16px;\r\n    }\r\n\r\n    & .SelectPlaceholder {\r\n      color: $primary-color;\r\n    }\r\n  }\r\n\r\n  &--disabled {\r\n    background-color: $disabled-text-field;\r\n    transition: all 0.2s;\r\n\r\n    &:hover {\r\n      cursor: default;\r\n      border-color: $disabled-text-field;\r\n    }\r\n  }\r\n}\r\n\r\n.SelectSelected {\r\n  padding: 0 50px 0 15px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 1;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 1;\r\n  word-wrap: break-word;\r\n}\r\n\r\n\r\n.SelectIcon {\r\n  font-size: 14px;\r\n  padding-left: 10px;\r\n}\r\n\r\n\r\n.SelectRemoveIcon {\r\n  padding-right: 10px;\r\n  font-size: 12px;\r\n  color: $border-color;\r\n  transition: all 0.2s;\r\n\r\n  &:hover {\r\n    color: $text-color;\r\n  }\r\n}\r\n\r\n.SelectIcons {\r\n  height: 40px;\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  right: 15px;\r\n}\r\n\r\n.SelectIconDivider {\r\n  height: 50%;\r\n  width: 1px;\r\n  background-color: $border-color;\r\n}\r\n\r\n.SelectPlaceholder {\r\n  padding: 0 30px 0 15px;\r\n  color: $light-text-color;\r\n  font-size: 16px;\r\n}\r\n\r\n.SelectLabel {\r\n  margin: 0 0 8px;\r\n  font-weight: 700;\r\n  display: inline-block;\r\n  color: $dark-text-color;\r\n  font-size: 14px;\r\n}\r\n\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),l.locals={SelectWrapper:"SelectWrapper_lWvif",Select:"Select_G7aCn","Select--focused":"Select--focused_isN0A",SelectFocused:"Select--focused_isN0A","Select--invalid":"Select--invalid_iAHry",SelectInvalid:"Select--invalid_iAHry",SelectPlaceholder:"SelectPlaceholder_SzVJ8","Select--disabled":"Select--disabled_NTvGh",SelectDisabled:"Select--disabled_NTvGh",SelectSelected:"SelectSelected_gMBfk",SelectIcon:"SelectIcon__g5XK",SelectRemoveIcon:"SelectRemoveIcon_LdT7z",SelectIcons:"SelectIcons_dCoeU",SelectIconDivider:"SelectIconDivider_SyRg8",SelectLabel:"SelectLabel_loZpN"},r.default=l},30038:function(e,r,n){"use strict";n.r(r);var o=n(20559),t=n.n(o),c=n(93476),l=n.n(c)()(t());l.push([e.id,".SelectDropdown_zqKd9{width:100%;position:absolute;top:100%;background-color:#fff;box-shadow:0 0 5px rgba(0,0,0,0.15);z-index:10;border-radius:5px;padding:0;list-style:none;margin:15px 0 0}.SelectItem_ui8au{padding:12px 10px;transition:all 0.3s}.SelectItem_ui8au:hover{cursor:pointer;background-color:#f7f8fb}.SelectItem--selected_S5zNw{background-color:#fbfbfb;color:#485268;font-weight:600}\n","",{version:3,sources:["webpack://./components/UI/Select/SelectDropdown/SelectDropdown.module.scss","webpack://./styles/_variables.scss"],names:[],mappings:"AAEA,sBACE,UAAW,CACX,iBAAkB,CAClB,QAAS,CACT,qBCCoB,CDApB,mCC4B4C,CD3B5C,UAAW,CACX,iBC4BiB,CD3BjB,SAAU,CACV,eAAgB,CAChB,eAAgB,CACjB,kBAGC,iBAAkB,CAClB,mBAAoB,CAFtB,wBAKI,cAAe,CACf,wBCjBuB,CDkBxB,4BAGC,wBCvByB,CDwBzB,aCH4B,CDI5B,eAAgB",sourcesContent:['@import "@src/styles/variables";\r\n\r\n.SelectDropdown {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 100%;\r\n  background-color: $component-bg;\r\n  box-shadow: $light-box-shadow;\r\n  z-index: 10;\r\n  border-radius: $border-radius;\r\n  padding: 0;\r\n  list-style: none;\r\n  margin: 15px 0 0;\r\n}\r\n\r\n.SelectItem {\r\n  padding: 12px 10px;\r\n  transition: all 0.3s;\r\n\r\n  &:hover {\r\n    cursor: pointer;\r\n    background-color: $light-field-hover;\r\n  }\r\n\r\n  &--selected {\r\n    background-color: $content-color-hover;\r\n    color: $title-light-text-color;\r\n    font-weight: 600;\r\n  }\r\n}\r\n',"$body-color: #fff;\r\n$content-color: #f5f6fa;\r\n$content-color-hover: #fbfbfb;\r\n$background-color-text-field: #e8f0fe;\r\n$light-field-hover: #f7f8fb;\r\n$light-bg-color: #eeeff3;\r\n$disabled-text-field: #e9eaef;\r\n$component-bg: #ffffff;\r\n$chat-bg: #fafbfd;\r\n$primary-color: #2C9E95;\r\n$primary-color-disabled: #74a9a5;\r\n$primary-color-active: #45a29a;\r\n$primary-color-hover: #278981;\r\n$primary-color-light: #ecfffe;\r\n$primary-color-light-hover: #c5fffd;\r\n$border-color: #dee2ed;\r\n$border-color-hover: #dee2ed;\r\n$border-color-active: #8b93a6;\r\n$bright-text-color: #626264;\r\n$light-text-color: #a2a5b0;\r\n$text-color: #333a4a;\r\n$dark-text-color: #18181a;\r\n$title-text-color: #0f0f10;\r\n$title-light-text-color: #485268;\r\n$reverse-text-color: #fff;\r\n$danger-color: #f14f4f;\r\n$danger-color-hover: #d74242;\r\n$danger-color-transparent: rgba(241, 79, 79, 0.25);\r\n$success-color: #72b274;\r\n$success-color-transparent: rgba(114, 178, 116, 0.25);\r\n$info-color: #ea9f40;\r\n$info-color-transparent: rgba(234, 159, 64, 0.25);\r\n$font-family: 'Manrope', sans-serif;\r\n$modal-bg: rgba(72,82,104,.6);\r\n$box-shadow: rgba(0, 0, 0, 0.10) 0px 20px 40px 0px;\r\n$light-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);\r\n\r\n$border-radius: 5px;\r\n\r\n$header-height: 60px;\r\n$sidebar-width: 80px;\r\n$page-controls-height: 72px;\r\n"],sourceRoot:""}]),l.locals={SelectDropdown:"SelectDropdown_zqKd9",SelectItem:"SelectItem_ui8au","SelectItem--selected":"SelectItem--selected_S5zNw",SelectItemSelected:"SelectItem--selected_S5zNw"},r.default=l},59932:function(e,r,n){var o=n(1892),t=n(95760),c=n(38311),l=n(58192),a=n(38060),i=n(54865),s=n(18614);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=l,d.insert=c.bind(null,"head"),d.domAPI=t,d.insertStyleElement=a,o(s,d),e.exports=s&&s.locals||{}},23088:function(e,r,n){var o=n(1892),t=n(95760),c=n(38311),l=n(58192),a=n(38060),i=n(54865),s=n(71324);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=l,d.insert=c.bind(null,"head"),d.domAPI=t,d.insertStyleElement=a,o(s,d),e.exports=s&&s.locals||{}},67920:function(e,r,n){var o=n(1892),t=n(95760),c=n(38311),l=n(58192),a=n(38060),i=n(54865),s=n(29954);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=l,d.insert=c.bind(null,"head"),d.domAPI=t,d.insertStyleElement=a,o(s,d),e.exports=s&&s.locals||{}},44687:function(e,r,n){var o=n(1892),t=n(95760),c=n(38311),l=n(58192),a=n(38060),i=n(54865),s=n(43414);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=l,d.insert=c.bind(null,"head"),d.domAPI=t,d.insertStyleElement=a,o(s,d),e.exports=s&&s.locals||{}},61678:function(e,r,n){var o=n(1892),t=n(95760),c=n(38311),l=n(58192),a=n(38060),i=n(54865),s=n(30038);s=s.__esModule?s.default:s;var d={};d.styleTagTransform=i,d.setAttributes=l,d.insert=c.bind(null,"head"),d.domAPI=t,d.insertStyleElement=a,o(s,d),e.exports=s&&s.locals||{}}}]);
//# sourceMappingURL=958.js.map