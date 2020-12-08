(window.webpackJsonpCheckout=window.webpackJsonpCheckout||[]).push([[1],{1501:function(e,t,n){"use strict";var a=n(3),o=n(43),r=n.n(o),s=n(0),i=n.n(s),c=n(437),l=n(438),d=Object(s.forwardRef)((function(e,t){var n=e.additionalClassName,o=e.label,s=e.id,d=Object(a.__rest)(e,["additionalClassName","label","id"]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,Object(a.__assign)({},d,{className:r()("form-checkbox","optimizedCheckout-form-checkbox",n),id:s,ref:t,type:"checkbox"})),i.a.createElement(l.a,{htmlFor:s},o))}));t.a=d},1533:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),o=n(15);function r(e,t){return!(!e||!t)&&Object(o.isEqual)(s(e),s(t))}function s(e){return Object(o.omit)(Object(a.__assign)(Object(a.__assign)({},e),{customFields:(e.customFields||[]).filter((function(e){return!!e.fieldValue}))}),["id","shouldSaveAddress","stateOrProvinceCode","type","email"])}},1536:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a={address1:"addressLine1",address2:"addressLine2",postalCode:"postCode",stateOrProvince:"province",stateOrProvinceCode:"provinceCode"};function o(e){return""+(a[e]||e)}function r(e){return o(e)+"Input"}},1585:function(e,t,n){"use strict";var a=n(3),o=n(15),r=n(0),s=n.n(r),i=n(441),c=n(1501),l=n(443);t.a=Object(r.memo)((function(e){var t=e.additionalClassName,n=e.disabled,d=void 0!==n&&n,u=e.labelContent,m=e.onChange,p=e.name,h=e.id,f=Object(r.useCallback)((function(e){var t=e.field;return s.a.createElement(r.Fragment,null,s.a.createElement(c.a,Object(a.__assign)({},t,{checked:!!t.value,disabled:d,id:h||t.name,label:u})),s.a.createElement(l.a,{name:p,testId:Object(o.kebabCase)(p)+"-field-error-message"}))}),[d,h,u,p]);return s.a.createElement(i.a,{additionalClassName:t,name:p,onChange:m,render:f})}))},1586:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(651);function o(e){return Object(a.a)(e.lineItems.physicalItems.filter((function(e){return!e.addedByPromotion})))}},1604:function(e,t,n){},1605:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o),s=n(1512),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={shouldShow:!1},t.handleClick=function(e){t.state.shouldShow?t.handleClose(e.nativeEvent):t.handleOpen(e.nativeEvent)},t.handleOpen=function(){t.state.shouldShow||t.setState({shouldShow:!0},(function(){document.addEventListener("click",t.handleClose)}))},t.handleClose=function(){t.state.shouldShow&&t.setState({shouldShow:!1},(function(){document.removeEventListener("click",t.handleClose)}))},t}return Object(a.__extends)(t,e),t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.handleClose)},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.placement,i=t.dropdown,c=this.state.shouldShow;return r.a.createElement(s.Manager,null,r.a.createElement(s.Reference,null,(function(t){var a=t.ref;return r.a.createElement("div",{className:"dropdownTrigger",onClick:e.handleClick,ref:a},n)})),r.a.createElement(s.Popper,{modifiers:{hide:{enabled:!1},flip:{enabled:!1},preventOverflow:{enabled:!1}},placement:o},(function(e){var t=e.ref,n=e.style;return c?r.a.createElement("div",{className:"dropdownMenu",ref:t,style:Object(a.__assign)(Object(a.__assign)({},n),{width:"100%",zIndex:1})},i):null})))},t.defaultProps={placement:"bottom-start"},t}(o.Component);t.a=i},1610:function(e,t,n){},1611:function(e,t,n){},1614:function(e,t,n){},1615:function(e,t,n){},1621:function(e,t,n){"use strict";var a=n(3),o=n(43),r=n.n(o),s=n(0),i=n.n(s),c=Object(s.forwardRef)((function(e,t){var n=e.additionalClassName,o=e.testId,s=e.className,c=Object(a.__rest)(e,["additionalClassName","testId","className"]);return i.a.createElement("textarea",Object(a.__assign)({},c,{className:s||r()("form-input","optimizedCheckout-form-input",n),"data-test":o,ref:t}))}));t.a=c},1622:function(e,t,n){},1630:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(3),s=n(434),i=n(438),c=n(1479),l=n(1536),d=n(115),u=n(15),m=n(672),p=n(443),h=n(154),f=n(1616),g=n.n(f),v=n(673),b=n(182),_=Object(v.a)(b.a,{displayNamePrefix:"withDate",pickProps:function(e,t){return"date"===t&&!!e}}),C=n(43),O=n.n(C),y=n(437),E=Object(a.forwardRef)((function(e,t){var n=e.additionalClassName,a=e.label,s=e.value,c=e.checked,l=e.id,d=Object(r.__rest)(e,["additionalClassName","label","value","checked","id"]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,Object(r.__assign)({},d,{checked:c,className:O()("form-radio","optimizedCheckout-form-radio",n),id:l,ref:t,type:"radio",value:s})),o.a.createElement(i.a,{htmlFor:l},a))})),j=n(1501),k=n(1621),S=n(1478),w=Object(a.memo)(_((function(e){e.additionalClassName;var t=e.date,n=e.fieldType,s=e.id,i=e.name,c=e.onChange,l=void 0===c?u.noop:c,d=e.options,m=e.placeholder,p=e.value,f=Object(r.__rest)(e,["additionalClassName","date","fieldType","id","name","onChange","options","placeholder","value"]),v=t.inputFormat,b=Object(a.useCallback)((function(e,t){return l(Object(r.__assign)(Object(r.__assign)({},t),{target:{name:i,value:e}}))}),[l,i]);switch(n){case h.a.dropdown:return o.a.createElement("select",Object(r.__assign)({},f,{className:"form-select optimizedCheckout-form-select","data-test":s+"-select",id:s,name:i,onChange:l,value:null===p?"":p}),m&&o.a.createElement("option",{value:""},m),d&&d.map((function(e){var t=e.label,n=e.value;return o.a.createElement("option",{key:n,value:n},t)})));case h.a.radio:return d&&d.length?o.a.createElement(o.a.Fragment,null,d.map((function(e){var t=e.label,n=e.value;return o.a.createElement(E,Object(r.__assign)({},f,{checked:n===p,id:s+"-"+n,key:n,label:t,name:i,onChange:l,testId:s+"-"+n+"-radio",value:n}))}))):null;case h.a.checkbox:return d&&d.length?o.a.createElement(o.a.Fragment,null,d.map((function(e){var t=e.label,n=e.value;return o.a.createElement(j.a,Object(r.__assign)({},f,{checked:!!Array.isArray(p)&&p.includes(n),id:s+"-"+n,key:n,label:t,name:i,onChange:l,testId:s+"-"+n+"-checkbox",value:n}))}))):null;case h.a.date:return o.a.createElement(g.a,Object(r.__assign)({},f,{autoComplete:"off",calendarClassName:"optimizedCheckout-contentPrimary",className:"form-input optimizedCheckout-form-input",dateFormat:v,maxDate:f.max?new Date(f.max+"T00:00:00Z"):void 0,minDate:f.min?new Date(f.min+"T00:00:00Z"):void 0,name:i,onChange:b,placeholderText:v.toUpperCase(),popperClassName:"optimizedCheckout-contentPrimary",selected:Object(u.isDate)(p)?p:void 0}));case h.a.multiline:return o.a.createElement(k.a,Object(r.__assign)({},f,{id:s,name:i,onChange:l,testId:s+"-text",type:n,value:p}));default:return o.a.createElement(S.a,Object(r.__assign)({},f,{id:s,name:i,onChange:l,testId:s+"-"+(n===h.a.password?"password":"text"),type:n,value:p}))}}))),N=(n(1622),Object(a.memo)((function(e){var t=e.testId,n=e.onSelectedAll,r=e.onSelectedNone,i=Object(a.useCallback)((function(e){e.preventDefault(),n()}),[n]),c=Object(a.useCallback)((function(e){e.preventDefault(),r()}),[r]);return o.a.createElement("ul",{className:"multiCheckbox--controls"},o.a.createElement("li",{className:"multiCheckbox--control"},o.a.createElement(s.a,{id:"address.select"})),o.a.createElement("li",{className:"multiCheckbox--control"},o.a.createElement("a",{"data-test":t+"Checkbox-all-button",href:"#",onClick:i},o.a.createElement(s.a,{id:"address.select_all"}))),o.a.createElement("li",{className:"multiCheckbox--control"},o.a.createElement("a",{"data-test":t+"Checkbox-none-button",href:"#",onClick:c},o.a.createElement(s.a,{id:"address.select_none"}))))}))),A=function(e){var t=e.form,n=t.values,r=t.errors,s=e.id,i=e.label,c=e.name,l=e.onChange,f=void 0===l?u.noop:l,g=e.options,v=e.pop,b=e.push,_=e.remove,C=Object(a.useCallback)((function(){var e=Object(d.getIn)(n,c)||[];Object(u.difference)(g.map((function(e){return e.value})),e).forEach((function(e){return b(e)})),f(Object(d.getIn)(n,c))}),[c,f,g,b,n]),O=Object(a.useCallback)((function(){(Object(d.getIn)(n,c)||[]).forEach((function(){return v()})),f(Object(d.getIn)(n,c))}),[c,f,v,n]),y=Object(a.useCallback)((function(e){var t=Object(d.getIn)(n,c)||[],a=e.target,o=a.value;a.checked?b(o):_(t.indexOf(o)),f(Object(d.getIn)(n,c))}),[c,f,b,_,n]);return o.a.createElement(m.a,{hasError:Object(d.getIn)(r,c)&&Object(d.getIn)(r,c).length},i,o.a.createElement(N,{onSelectedAll:C,onSelectedNone:O,testId:s}),o.a.createElement(w,{fieldType:h.a.checkbox,id:s,name:c,onChange:y,options:g,value:Object(d.getIn)(n,c)||[]}),o.a.createElement(p.a,{name:c,testId:Object(u.kebabCase)(c)+"-field-error-message"}))},x=Object(a.memo)((function(e){var t=e.id,n=e.label,s=e.name,i=e.onChange,c=e.options,l=Object(a.useCallback)((function(e){return o.a.createElement(A,Object(r.__assign)({id:t,label:n,name:s,onChange:i,options:c},Object(u.pick)(e,["form","pop","push","remove"])))}),[t,n,s,i,c]);return o.a.createElement(d.FieldArray,{name:s,render:l})})),I={address1:"address.address_line_1_label",address2:"address.address_line_2_label",city:"address.city_label",company:"address.company_name_label",countryCode:"address.country_label",firstName:"address.first_name_label",lastName:"address.last_name_label",phone:"address.phone_number_label",postalCode:"address.postal_code_label",stateOrProvince:"address.state_label",stateOrProvinceCode:"address.state_label"},P={address1:"address-line1",address2:"address-line2",city:"address-level2",company:"organization",countryCode:"country",firstName:"given-name",lastName:"family-name",phone:"tel",postalCode:"postal-code",stateOrProvince:"address-level1",stateOrProvinceCode:"address-level1"},F=Object(a.memo)((function(e){var t=e.field,n=t.name,d=t.label,u=t.custom,m=t.required,p=t.options,f=t.max,g=t.min,v=t.maxLength,b=e.fieldType,_=e.parentFieldName,C=e.onChange,O=e.placeholder,y=n,E=Object(l.a)(y),j=_?_+"."+n:n,k=I[n],S=Object(a.useMemo)((function(){return o.a.createElement(i.a,{htmlFor:E},u?d:k&&o.a.createElement(s.a,{id:k}),!m&&o.a.createElement(o.a.Fragment,null,"",o.a.createElement("small",{className:"optimizedCheckout-contentSecondary"},o.a.createElement(s.a,{id:"common.optional_text"}))))}),[u,E,d,m,k]),N=Object(a.useCallback)((function(e){var t=e.field;return o.a.createElement(w,Object(r.__assign)({},t,{autoComplete:P[y],fieldType:b,id:E,max:f,maxLength:v||void 0,min:g,options:p&&p.items,placeholder:O||p&&p.helperLabel,rows:p&&p.rows}))}),[y,E,b,f,v,g,p,O]);return o.a.createElement("div",{className:"dynamic-form-field dynamic-form-field--"+Object(l.b)(y)},b===h.a.checkbox?o.a.createElement(x,{id:E,label:S,name:j,onChange:C,options:p&&p.items||[]}):o.a.createElement(c.a,{input:N,label:S,name:j,onChange:C}))}));function T(e){var t=e.fieldType,n=e.type,a=e.secret;return"text"===t?"integer"===n?h.a.number:a?h.a.password:h.a.text:t}t.a=function(e){var t=e.field,n=e.parentFieldName,a=e.placeholder,r=e.onChange;return o.a.createElement(F,{field:t,fieldType:T(t),onChange:r,parentFieldName:n,placeholder:a})}},1637:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),o=n(15);function r(e){var t=e.customFields,n=Object(a.__rest)(e,["customFields"]),r=e.shouldSaveAddress,s=[];return Object(o.forIn)(t,(function(e,t){var n;if(Object(o.isDate)(e)){var a=Object(o.padStart)((e.getMonth()+1).toString(),2,"0"),r=Object(o.padStart)(e.getDate().toString(),2,"0");n=e.getFullYear()+"-"+a+"-"+r}else n=e;s.push({fieldId:t,fieldValue:n})})),Object(a.__assign)(Object(a.__assign)({},n),{shouldSaveAddress:r,customFields:s})}},1638:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(15),o=n(1533),r=n(613);function s(e,t,n){return!(!e||!Object(r.a)(e,n))&&Object(a.some)(t,(function(t){return Object(o.a)(t,e)}))}},1639:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o),s=n(1444),i=n(434),c=n(1605),l=n(1533),d=(n(1604),n(1441)),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSelectAddress=function(e){var n=t.props,a=n.onSelectAddress,o=n.selectedAddress;Object(l.a)(o,e)||a(e)},t.handleUseNewAddress=function(){var e=t.props,n=e.selectedAddress;(0,e.onUseNewAddress)(n)},t}return Object(a.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.addresses,n=e.selectedAddress;return r.a.createElement("div",{className:"form-field"},r.a.createElement("div",{className:"dropdown--select",role:"combobox"},r.a.createElement(c.a,{dropdown:r.a.createElement(m,{addresses:t,onSelectAddress:this.handleSelectAddress,onUseNewAddress:this.handleUseNewAddress,selectedAddress:n})},r.a.createElement(p,{addresses:t,selectedAddress:n}))))},t}(o.PureComponent),m=function(e){var t=e.addresses,n=e.onSelectAddress,a=e.onUseNewAddress,o=e.selectedAddress;return r.a.createElement("ul",{className:"dropdown-menu instrumentSelect-dropdownMenu",id:"addressDropdown"},r.a.createElement("li",{className:"dropdown-menu-item dropdown-menu-item--select"},r.a.createElement("a",{href:"#",onClick:Object(s.a)((function(){return a(o)}))},r.a.createElement(i.a,{id:"address.enter_address_action"}))),t.map((function(e){return r.a.createElement("li",{className:"dropdown-menu-item dropdown-menu-item--select",key:e.id},r.a.createElement("a",{href:"#",onClick:Object(s.a)((function(){return n(e)}))},r.a.createElement(d.a,{address:e})))})))},p=function(e){var t=e.selectedAddress;return r.a.createElement("a",{className:"button dropdown-button dropdown-toggle--select",href:"#",id:"addressToggle",onClick:Object(s.a)()},t?r.a.createElement(d.a,{address:t}):r.a.createElement(i.a,{id:"address.enter_address_action"}))};t.a=Object(o.memo)(u)},1640:function(e,t,n){"use strict";var a=n(3),o=n(0),r=n.n(o),s=n(434),i=n(438),c=n(1478),l=n(1477),d=n(1476),u=n(1479);t.a=function(){var e=Object(o.useCallback)((function(e){return r.a.createElement(i.a,{hidden:!0,htmlFor:e},r.a.createElement(s.a,{id:"shipping.order_comment_label"}))}),[]),t=Object(o.useCallback)((function(e){var t=e.field;return r.a.createElement(c.a,Object(a.__assign)({},t,{autoComplete:"off",maxLength:2e3}))}),[]),n=Object(o.useMemo)((function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{id:"shipping.order_comment_label"}))}),[]);return r.a.createElement(d.a,{legend:n,testId:"checkout-shipping-comments"},r.a.createElement(u.a,{input:t,label:e,name:"orderComment"}))}},1641:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(671),o=n(1474);function r(e){return(e&&e.payments?e.payments:[]).find((function(e){return!Object(a.a)(e)&&!Object(o.a)(e)&&!!e.providerId}))}},1647:function(e,t,n){"use strict";var a=n(3),o=n(75),r=n(15),s=n(0),i=n.n(s),c=n(434),l=n(315),d=n(1476),u=n(1585),m=function(){function e(e){var t=e.address_components,n=e.name;this._name=n,this._address=t}return e.prototype.getState=function(){return this._get("administrative_area_level_1","short_name")},e.prototype.getStreet=function(){return this._name},e.prototype.getStreet2=function(){return""},e.prototype.getCity=function(){return this._get("postal_town","long_name")||this._get("locality","long_name")||this._get("neighborhood","short_name")},e.prototype.getCountry=function(){return this._get("country","short_name")},e.prototype.getPostCode=function(){return this._get("postal_code","short_name")},e.prototype._get=function(e,t){var n=this._address&&this._address.find((function(t){return-1!==t.types.indexOf(e)}));return n?n[t]:""},e}(),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.__extends)(t,e),t.prototype.getState=function(){return this._get("administrative_area_level_2","long_name")},t.prototype.getStreet2=function(){return this._get("locality","long_name")},t}(m),h=function(){function e(){}return e.create=function(e){var t=new m(e);switch(t.getCountry()){case"GB":return new p(e)}return t},e}();var f=n(1479),g=n(1536),v=n(1612),b=n.n(v),_=(n(1614),function(e){var t=e.children;return i.a.createElement("div",{className:"popover"},t)});n(1615);function C(e,t){var n=["popoverList-item"];return e===t&&n.push("is-active"),n.join(" ")}var O,y=Object(s.memo)((function(e){var t=e.highlightedIndex,n=void 0===t?-1:t,o=e.testId,r=e.getItemProps,s=void 0===r?function(e){return e}:r,c=e.menuProps,l=void 0===c?{}:c,d=e.items;return d&&d.length?i.a.createElement("ul",Object(a.__assign)({className:"popoverList","data-test":o},l),d.map((function(e,t){return i.a.createElement("li",Object(a.__assign)({className:C(n,t),"data-test":o&&o+"-item"},s({key:e.id,index:t,item:e}),{key:t}),e.content)}))):null})),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.stateReducer=function(e,n){var o=t.props.onChange;switch(n.type){case b.a.stateChangeTypes.blurInput:case b.a.stateChangeTypes.blurButton:case b.a.stateChangeTypes.mouseUp:case b.a.stateChangeTypes.touchEnd:return Object(a.__assign)(Object(a.__assign)({},n),{inputValue:e.inputValue});case b.a.stateChangeTypes.changeInput:return n.inputValue!==e.inputValue&&o&&o(n.inputValue||"",e.isOpen),n;case b.a.stateChangeTypes.keyDownEnter:default:return n}},t.handleStateChange=function(e){var n=e.isOpen,a=e.inputValue,o=t.props.onToggleOpen,s=void 0===o?r.noop:o;void 0!==n&&s({isOpen:n,inputValue:a||""})},t}return Object(a.__extends)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.inputProps,o=t.initialValue,s=t.initialHighlightedIndex,c=t.items,l=t.children,d=t.onSelect,u=t.listTestId;return i.a.createElement(b.a,{defaultHighlightedIndex:0,initialHighlightedIndex:s,initialInputValue:o,itemToString:this.itemToString,onChange:d,onStateChange:this.handleStateChange,stateReducer:this.stateReducer},(function(t){var o=t.isOpen,s=t.getInputProps,d=t.getMenuProps,m=t.getItemProps,p=t.highlightedIndex;return i.a.createElement("div",null,i.a.createElement("input",Object(a.__assign)({},s(),n)),o&&!!c.length&&i.a.createElement(_,null,i.a.createElement(y,{getItemProps:m,highlightedIndex:Object(r.isNumber)(p)?p:-1,items:c.map((function(t){return e.toPopoverItem(t)})),menuProps:d(),testId:u}),l))}))},t.prototype.toPopoverItem=function(e){return Object(a.__assign)(Object(a.__assign)({},e),{content:this.highlightItem(e)})},t.prototype.highlightItem=function(e){if(!e.highlightedSlices||!e.highlightedSlices.length)return e.label;var t=0,n=0;return e.highlightedSlices.reduce((function(a,o,r){var c=e.label,l=o.offset,d=o.length,u=l-t;return u&&(a.push(i.a.createElement(s.Fragment,{key:n},c.substr(t,u))),n+=1),t=l+d,a.push(i.a.createElement("strong",{key:n},c.substr(l,d))),n+=1,r===(e.highlightedSlices||[]).length-1&&(a.push(i.a.createElement(s.Fragment,{key:n},c.substr(t))),n+=1),a}),[])},t.prototype.itemToString=function(e){return e&&e.value||""},t}(s.PureComponent),j=(n(1611),n(684)),k=function(){function e(){this._scriptLoader=Object(j.getScriptLoader)()}return e.prototype.loadMapsSdk=function(e){var t=this;return this._googleAutoComplete?this._googleAutoComplete:(this._googleAutoComplete=new Promise((function(n,a){var o=["language=en","key="+e,"libraries=places","callback=initAutoComplete"].join("&");window.initAutoComplete=function(){(function(e){var t=e;return Boolean(t.google&&t.google.maps&&t.google.maps.places)})(window)&&n(window.google.maps),a()},t._scriptLoader.loadScript("//maps.googleapis.com/maps/api/js?"+o).catch((function(e){throw t._googleAutoComplete=void 0,e}))})),this._googleAutoComplete)},e}();var S=function(){function e(e,t){void 0===t&&(O||(O=new k),t=O),this._apiKey=e,this._scriptLoader=t}return e.prototype.getAutocompleteService=function(){return this._autocompletePromise||(this._autocompletePromise=this._scriptLoader.loadMapsSdk(this._apiKey).then((function(e){if(!e.places.AutocompleteService)throw new Error("`AutocompleteService` is undefined");return new e.places.AutocompleteService}))),this._autocompletePromise},e.prototype.getPlacesServices=function(){var e=document.createElement("div");return this._placesPromise||(this._placesPromise=this._scriptLoader.loadMapsSdk(this._apiKey).then((function(t){if(!t.places.PlacesService)throw new Error("`PlacesService` is undefined");return new t.places.PlacesService(e)}))),this._placesPromise},e}(),w=function(e){function t(t){var n=e.call(this,t)||this;return n.onSelect=function(e){var t=n.props,a=t.fields,o=t.onSelect,s=void 0===o?r.noop:o,i=t.nextElement;n.googleAutocompleteService.getPlacesServices().then((function(t){t.getDetails({placeId:e.id,fields:a||["address_components","name"]},(function(t){i&&i.focus(),s(t,e)}))}))},n.onChange=function(e){var t=n.props,a=t.isAutocompleteEnabled,o=t.onChange;if((void 0===o?r.noop:o)(e,!1),!a)return n.resetAutocomplete();n.setAutocomplete(e),n.setItems(e)},n.googleAutocompleteService=new S(t.apiKey),n.state={items:[],autoComplete:"off"},n}return Object(a.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.initialValue,n=e.onToggleOpen,o=void 0===n?r.noop:n,s=e.inputProps,c=void 0===s?{}:s,l=this.state,d=l.autoComplete,u=l.items;return i.a.createElement(E,{initialHighlightedIndex:0,initialValue:t,inputProps:Object(a.__assign)(Object(a.__assign)({},c),{autoComplete:d}),items:u,listTestId:"address-autocomplete-suggestions",onChange:this.onChange,onSelect:this.onSelect,onToggleOpen:o},i.a.createElement("div",{className:"co-googleAutocomplete-footer"}))},t.prototype.setItems=function(e){var t=this;if(e){var n=this.props,a=n.componentRestrictions,o=n.types;this.googleAutocompleteService.getAutocompleteService().then((function(n){n.getPlacePredictions({input:e,types:o||["geocode"],componentRestrictions:a},(function(e){return t.setState({items:t.toAutocompleteItems(e)})}))}))}else this.setState({items:[]})},t.prototype.resetAutocomplete=function(){this.setState({items:[],autoComplete:"off"})},t.prototype.setAutocomplete=function(e){this.setState(Object(a.__assign)(Object(a.__assign)({},this.state),{autoComplete:e&&e.length?"nope":"off"}))},t.prototype.toAutocompleteItems=function(e){return(e||[]).map((function(e){return{label:e.description,value:e.structured_formatting.main_text,highlightedSlices:e.matched_substrings,id:e.place_id}}))},t}(s.PureComponent),N=Object(s.memo)((function(e){var t=e.field.name,n=e.countryCode,a=e.supportedCountries,o=e.parentFieldName,r=e.nextElement,l=e.apiKey,d=e.onSelect,u=e.onChange,m=e.onToggleOpen,p=o?o+"."+t:t,h=Object(s.useMemo)((function(){return i.a.createElement(c.a,{id:"address.address_line_1_label"})}),[]),v=Object(s.useMemo)((function(){return{className:"form-input optimizedCheckout-form-input",id:Object(g.a)(t)}}),[t]),b=Object(s.useCallback)((function(e){var t=e.field;return i.a.createElement(w,{apiKey:l,componentRestrictions:n?{country:n}:void 0,initialValue:t.value,inputProps:v,isAutocompleteEnabled:!!n&&a.indexOf(n)>-1,nextElement:r,onChange:u,onSelect:d,onToggleOpen:m})}),[l,n,v,r,u,d,m,a]);return i.a.createElement("div",{className:"dynamic-form-field dynamic-form-field--addressLineAutocomplete"},i.a.createElement(f.a,{input:b,labelContent:h,name:p}))})),A=(n(1610),n(1630)),x=n(154),I={countryCode:"address.select_country_action",stateOrProvince:"address.select_state_action",stateOrProvinceCode:"address.select_state_action"},P="address1",F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.containerRef=Object(s.createRef)(),t.handleDynamicFormFieldChange=Object(o.memoize)((function(e){return function(n){t.syncNonFormikValue(e,n)}})),t.handleAutocompleteChange=function(e,n){n||t.syncNonFormikValue(P,e)},t.handleAutocompleteSelect=function(e,n){var o=n.value,s=t.props,i=s.countries,c=s.setFieldValue,l=void 0===c?r.noop:c,d=s.onChange,u=void 0===d?r.noop:d,m=function(e,t){if(void 0===t&&(t=[]),!e||!e.address_components)return{};var n=h.create(e),o=n.getState(),r=n.getCountry(),s=t&&t.find((function(e){return r===e.code})),i=n.getStreet2();return Object(a.__assign)({address2:i,city:n.getCity(),countryCode:r,postalCode:n.getPostCode()},o?function(e,t){void 0===t&&(t=[]);var n=t.find((function(t){var n=t.code,a=t.name;return n===e||a===e}));if(!n)return{stateOrProvince:t.length?"":e,stateOrProvinceCode:""};return{stateOrProvince:n.name,stateOrProvinceCode:n.code}}(o,s&&s.subdivisions):{})}(e,i);Object(r.forIn)(m,(function(e,t){l(t,e),u(t,e)})),o&&t.syncNonFormikValue(P,o)},t.syncNonFormikValue=function(e,n){var a=t.props,o=a.formFields,s=a.setFieldValue,i=void 0===s?r.noop:s,c=a.onChange,l=void 0===c?r.noop:c,d=o.filter((function(e){return e.custom&&e.fieldType===x.a.date})).map((function(e){return e.name}));(e===P||d.indexOf(e)>-1)&&i(e,n),l(e,n)},t}return Object(a.__extends)(t,e),t.prototype.componentDidMount=function(){var e=this.containerRef.current;e&&(this.nextElement=e.querySelector('[autocomplete="address-line2"]'))},t.prototype.render=function(){var e=this,t=this.props,n=t.formFields,a=t.fieldName,o=t.language,r=t.countriesWithAutocomplete,s=t.countryCode,l=t.googleMapsApiKey,m=t.onAutocompleteToggle,p=t.shouldShowSaveAddress;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement("div",{className:"checkout-address",ref:this.containerRef},n.map((function(t){var n=t.name,c=I[n];return"address1"===n&&l&&r?i.a.createElement(N,{apiKey:l,countryCode:s,field:t,key:t.id,nextElement:e.nextElement||void 0,onChange:e.handleAutocompleteChange,onSelect:e.handleAutocompleteSelect,onToggleOpen:m,parentFieldName:a,supportedCountries:r}):i.a.createElement(A.a,{field:t,key:t.id+"-"+t.name,onChange:e.handleDynamicFormFieldChange(n),parentFieldName:t.custom?a?a+".customFields":"customFields":a,placeholder:c&&o.translate(c)})})))),p&&i.a.createElement(u.a,{labelContent:i.a.createElement(c.a,{id:"address.save_in_addressbook"}),name:a?a+".shouldSaveAddress":"shouldSaveAddress"}))},t}(s.Component);t.a=Object(l.a)(F)}}]);
//# sourceMappingURL=billing~shipping-efdfae46.js.map