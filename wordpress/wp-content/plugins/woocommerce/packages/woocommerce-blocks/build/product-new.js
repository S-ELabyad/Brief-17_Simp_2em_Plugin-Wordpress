this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-new"]=function(t){function e(e){for(var r,i,u=e[0],s=e[1],a=e[2],p=0,b=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);b.length;)b.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={30:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=s;return c.push([816,0]),n()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},106:function(t,e){},107:function(t,e){},108:function(t,e){},109:function(t,e){},110:function(t,e){},111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},126:function(t,e){},13:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},174:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),o=n(6),c=Object(r.createElement)("img",{src:o.T+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},19:function(t,e){!function(){t.exports=this.wp.apiFetch}()},20:function(t,e){!function(){t.exports=this.wp.url}()},21:function(t,e){!function(){t.exports=this.wp.data}()},22:function(t,e){!function(){t.exports=this.wp.blockEditor}()},23:function(t,e){!function(){t.exports=this.wp.blocks}()},26:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},27:function(t,e){!function(){t.exports=this.moment}()},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},31:function(t,e){!function(){t.exports=this.wp.primitives}()},34:function(t,e){!function(){t.exports=this.wp.dataControls}()},35:function(t,e,n){"use strict";n.d(e,"h",(function(){return b})),n.d(e,"e",(function(){return g})),n.d(e,"b",(function(){return d})),n.d(e,"i",(function(){return f})),n.d(e,"f",(function(){return O})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return j})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return w}));var r=n(5),o=n.n(r),c=n(20),i=n(19),u=n.n(i),s=n(7),a=n(6);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=void 0===r?"":r,i=t.queryArgs,l=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=void 0===r?"":r,i=t.queryArgs,u=void 0===i?[]:i,s={per_page:a.u?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",p(p({},s),u))];return a.u&&n.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:n})),l}({selected:n,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id").map((function(t){return p(p({},t),{},{parent:0})}))})).catch((function(t){throw t}))},g=function(t){return u()({path:"/wc/store/products/".concat(t)})},d=function(){return u()({path:"wc/store/products/attributes"})},f=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},O=function(t){var e=t.selected,n=function(t){var e=t.selected,n=void 0===e?[]:e,r=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:a.w?100:0,orderby:a.w?"count":"name",order:a.w?"desc":"asc",search:r})];return a.w&&n.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:n})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(n.map((function(t){return u()({path:t})}))).then((function(t){return Object(s.uniqBy)(Object(s.flatten)(t),"id")}))},h=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",p({per_page:0},t))})},j=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},m=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})},w=function(t,e){if(!t.title.raw)return t.slug;var n=1===e.filter((function(e){return e.title.raw===t.title.raw})).length;return t.title.raw+(n?"":" - ".concat(t.slug))}},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var r=n(28),o=n.n(r),c=n(13),i=n.n(c),u=n(1),s=function(){var t=o()(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return n=t.sent,t.abrupt("return",{message:n.message,type:n.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),a=function(t){if(t.data&&"rest_invalid_param"===t.code){var e=Object.values(t.data.params);if(e[0])return e[0]}return(null==t?void 0:t.message)||Object(u.__)("Something went wrong. Please contact us to get assistance.",'woocommerce')}},4:function(t,e){!function(){t.exports=this.wp.components}()},42:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},43:function(t,e,n){"use strict";var r=n(0),o=n(1),c=(n(2),n(42));e.a=function(t){var e,n,i,u=t.error;return Object(r.createElement)("div",{className:"wc-block-error-message"},(n=(e=u).message,i=e.type,n?"general"===i?Object(r.createElement)("span",null,Object(o.__)("The following error was returned",'woocommerce'),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):"api"===i?Object(r.createElement)("span",null,Object(o.__)("The following error was returned from the API",'woocommerce'),Object(r.createElement)("br",null),Object(r.createElement)("code",null,Object(c.escapeHTML)(n))):n:Object(o.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')))}},48:function(t,e){!function(){t.exports=this.wp.keycodes}()},54:function(t,e){!function(){t.exports=this.wp.hooks}()},56:function(t,e,n){"use strict";var r=n(5),o=n.n(r),c=n(25),i=n.n(c),u=n(0);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.a=function(t){var e=t.srcElement,n=t.size,r=void 0===n?24:n,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)?Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({width:r,height:r},c)):null}},6:function(t,e,n){"use strict";n.d(e,"l",(function(){return o})),n.d(e,"I",(function(){return c})),n.d(e,"P",(function(){return i})),n.d(e,"y",(function(){return u})),n.d(e,"A",(function(){return s})),n.d(e,"m",(function(){return a})),n.d(e,"z",(function(){return l})),n.d(e,"C",(function(){return p})),n.d(e,"o",(function(){return b})),n.d(e,"B",(function(){return g})),n.d(e,"n",(function(){return d})),n.d(e,"E",(function(){return f})),n.d(e,"u",(function(){return O})),n.d(e,"w",(function(){return h})),n.d(e,"r",(function(){return j})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return w})),n.d(e,"k",(function(){return y})),n.d(e,"L",(function(){return v})),n.d(e,"Q",(function(){return _})),n.d(e,"q",(function(){return k})),n.d(e,"p",(function(){return S})),n.d(e,"H",(function(){return P})),n.d(e,"c",(function(){return E})),n.d(e,"v",(function(){return C})),n.d(e,"J",(function(){return x})),n.d(e,"T",(function(){return B})),n.d(e,"U",(function(){return R})),n.d(e,"K",(function(){return D})),n.d(e,"a",(function(){return T})),n.d(e,"N",(function(){return L})),n.d(e,"b",(function(){return M})),n.d(e,"M",(function(){return N})),n.d(e,"D",(function(){return z})),n.d(e,"i",(function(){return I})),n.d(e,"O",(function(){return q})),n.d(e,"h",(function(){return F})),n.d(e,"j",(function(){return H})),n.d(e,"G",(function(){return Q})),n.d(e,"F",(function(){return G})),n.d(e,"S",(function(){return U})),n.d(e,"R",(function(){return W})),n.d(e,"d",(function(){return J})),n.d(e,"e",(function(){return Y})),n.d(e,"f",(function(){return K})),n.d(e,"g",(function(){return X})),n.d(e,"x",(function(){return Z})),n.d(e,"X",(function(){return et})),n.d(e,"Y",(function(){return nt})),n.d(e,"V",(function(){return rt})),n.d(e,"W",(function(){return ot}));var r=n(3),o=Object(r.getSetting)("currentUserIsAdmin",!1),c=Object(r.getSetting)("reviewRatingsEnabled",!0),i=Object(r.getSetting)("showAvatars",!0),u=Object(r.getSetting)("max_columns",6),s=Object(r.getSetting)("min_columns",1),a=Object(r.getSetting)("default_columns",3),l=Object(r.getSetting)("max_rows",6),p=Object(r.getSetting)("min_rows",1),b=Object(r.getSetting)("default_rows",3),g=Object(r.getSetting)("min_height",500),d=Object(r.getSetting)("default_height",500),f=Object(r.getSetting)("placeholderImgSrc",""),O=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),h=Object(r.getSetting)("limitTags"),j=Object(r.getSetting)("hasProducts",!0),m=Object(r.getSetting)("hasTags",!0),w=Object(r.getSetting)("homeUrl",""),y=Object(r.getSetting)("couponsEnabled",!0),v=Object(r.getSetting)("shippingEnabled",!0),_=Object(r.getSetting)("taxesEnabled",!0),k=(Object(r.getSetting)("displayItemizedTaxes",!1),Object(r.getSetting)("hasDarkEditorStyleSupport",!1)),S=(Object(r.getSetting)("displayShopPricesIncludingTax",!1),Object(r.getSetting)("displayCartPricesIncludingTax",!1)),P=Object(r.getSetting)("productCount",0),E=Object(r.getSetting)("attributes",[]),C=Object(r.getSetting)("isShippingCalculatorEnabled",!0),x=Object(r.getSetting)("shippingCostRequiresAddress",!1),A=(Object(r.getSetting)("isShippingCostHidden",!1),Object(r.getSetting)("woocommerceBlocksPhase",1)),B=Object(r.getSetting)("wcBlocksAssetUrl",""),R=Object(r.getSetting)("wcBlocksBuildUrl",""),D=Object(r.getSetting)("shippingCountries",{}),T=Object(r.getSetting)("allowedCountries",{}),L=Object(r.getSetting)("shippingStates",{}),M=Object(r.getSetting)("allowedStates",{}),N=Object(r.getSetting)("shippingMethodsExist",!1),z=Object(r.getSetting)("paymentGatewaySortOrder",[]),I=Object(r.getSetting)("checkoutShowLoginReminder",!0),V={id:0,title:"",permalink:""},$=Object(r.getSetting)("storePages",{myaccount:V,shop:V,cart:V,checkout:V,privacy:V,terms:V}),q=$.shop.permalink,F=$.checkout.id,H=$.checkout.permalink,Q=$.privacy.permalink,G=$.privacy.title,U=$.terms.permalink,W=$.terms.title,J=$.cart.id,Y=$.cart.permalink,K=Object(r.getSetting)("checkoutAllowsGuest",!1),X=Object(r.getSetting)("checkoutAllowsSignup",!1),Z=$.myaccount.permalink?$.myaccount.permalink:Object(r.getSetting)("loginUrl","/wp-login.php"),tt=n(23),et=function(t,e){if(A>2)return Object(tt.registerBlockType)(t,e)},nt=function(t,e){if(A>1)return Object(tt.registerBlockType)(t,e)},rt=function(){return A>2},ot=function(){return A>1}},65:function(t,e){!function(){t.exports=this.wp.serverSideRender}()},69:function(t,e){!function(){t.exports=this.wp.dom}()},7:function(t,e){!function(){t.exports=this.lodash}()},74:function(t,e){!function(){t.exports=this.wp.deprecated}()},78:function(t,e){!function(){t.exports=this.ReactDOM}()},79:function(t,e,n){"use strict";var r=n(5),o=n.n(r),c=n(0),i=n(1),u=(n(2),n(4));function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=t.onChange,n=t.settings,r=n.button,o=n.price,s=n.rating,l=n.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title",'woocommerce'),help:l?Object(i.__)("Product title is visible.",'woocommerce'):Object(i.__)("Product title is hidden.",'woocommerce'),checked:l,onChange:function(){return e(a(a({},n),{},{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price",'woocommerce'),help:o?Object(i.__)("Product price is visible.",'woocommerce'):Object(i.__)("Product price is hidden.",'woocommerce'),checked:o,onChange:function(){return e(a(a({},n),{},{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating",'woocommerce'),help:s?Object(i.__)("Product rating is visible.",'woocommerce'):Object(i.__)("Product rating is hidden.",'woocommerce'),checked:s,onChange:function(){return e(a(a({},n),{},{rating:!s}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button",'woocommerce'),help:r?Object(i.__)("Add to Cart button is visible.",'woocommerce'):Object(i.__)("Add to Cart button is hidden.",'woocommerce'),checked:r,onChange:function(){return e(a(a({},n),{},{button:!r}))}}))}},80:function(t,e,n){"use strict";var r=n(0),o=n(1),c=n(7),i=(n(2),n(4)),u=n(6);e.a=function(t){var e=t.columns,n=t.rows,s=t.setAttributes,a=t.alignButtons;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.RangeControl,{label:Object(o.__)("Columns",'woocommerce'),value:e,onChange:function(t){var e=Object(c.clamp)(t,u.A,u.y);s({columns:Number.isNaN(e)?"":e})},min:u.A,max:u.y}),Object(r.createElement)(i.RangeControl,{label:Object(o.__)("Rows",'woocommerce'),value:n,onChange:function(t){var e=Object(c.clamp)(t,u.C,u.z);s({rows:Number.isNaN(e)?"":e})},min:u.C,max:u.z}),Object(r.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block",'woocommerce'),help:a?Object(o.__)("The last inner block will be aligned vertically.",'woocommerce'):Object(o.__)("The last inner block will follow other content.",'woocommerce'),checked:a,onChange:function(){return s({alignButtons:!a})}}))}},816:function(t,e,n){t.exports=n(912)},83:function(t,e){!function(){t.exports=this.wp.viewport}()},84:function(t,e){!function(){t.exports=this.wp.date}()},86:function(t,e,n){"use strict";var r=n(11),o=n.n(r),c=n(0),i=n(1),u=n(7),s=(n(2),n(45)),a=n(4),l=n(28),p=n.n(l),b=n(15),g=n.n(b),d=n(16),f=n.n(d),O=n(12),h=n.n(O),j=n(17),m=n.n(j),w=n(18),y=n.n(w),v=n(10),_=n.n(v),k=n(13),S=n.n(k),P=n(141),E=n(35),C=n(37);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=_()(t);if(e){var o=_()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y()(this,n)}}var A=Object(P.a)((function(t){return function(e){m()(r,e);var n=x(r);function r(){var t;return g()(this,r),(t=n.apply(this,arguments)).state={error:null,loading:!1,categories:null},t.loadCategories=t.loadCategories.bind(h()(t)),t}return f()(r,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var t=this;this.setState({loading:!0}),Object(E.c)().then((function(e){t.setState({categories:e,loading:!1,error:null})})).catch(function(){var e=p()(S.a.mark((function e(n){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)(n);case 2:r=e.sent,t.setState({categories:null,loading:!1,error:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state,n=e.error,r=e.loading,i=e.categories;return Object(c.createElement)(t,o()({},this.props,{error:n,isLoading:r,categories:i}))}}]),r}(c.Component)}),"withCategories"),B=n(43),R=(n(126),function(t){var e=t.categories,n=t.error,r=t.isLoading,l=t.onChange,p=t.onOperatorChange,b=t.operator,g=t.selected,d=t.isSingle,f=t.showReviewCount,O={clear:Object(i.__)("Clear all product categories",'woocommerce'),list:Object(i.__)("Product Categories",'woocommerce'),noItems:Object(i.__)("Your store doesn't have any product categories.",'woocommerce'),search:Object(i.__)("Search for product categories",'woocommerce'),selected:function(t){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",t,'woocommerce'),t)},updated:Object(i.__)("Category search results updated.",'woocommerce')};return n?Object(c.createElement)(B.a,{error:n}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(s.a,{className:"woocommerce-product-categories",list:e,isLoading:r,selected:g.map((function(t){return Object(u.find)(e,{id:t})})).filter(Boolean),onChange:l,renderItem:function(t){var e=t.item,n=t.search,r=t.depth,u=void 0===r?0:r,a=["woocommerce-product-categories__item"];n.length&&a.push("is-searching"),0===u&&0!==e.parent&&a.push("is-skip-level");var l=e.breadcrumbs.length?"".concat(e.breadcrumbs.join(", "),", ").concat(e.name):e.name,p=f?Object(i.sprintf)(Object(i._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",e.review_count,'woocommerce'),l,e.review_count):Object(i.sprintf)(Object(i._n)("%1$s, has %2$d product","%1$s, has %2$d products",e.count,'woocommerce'),l,e.count),b=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",e.review_count,'woocommerce'),e.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",e.count,'woocommerce'),e.count);return Object(c.createElement)(s.b,o()({className:a.join(" ")},t,{showCount:!0,countLabel:b,"aria-label":p}))},messages:O,isHierarchical:!0,isSingle:d}),!!p&&Object(c.createElement)("div",{className:g.length<2?"screen-reader-text":""},Object(c.createElement)(a.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching",'woocommerce'),help:Object(i.__)("Pick at least two categories to use this setting.",'woocommerce'),value:b,onChange:p,options:[{label:Object(i.__)("Any selected categories",'woocommerce'),value:"any"},{label:Object(i.__)("All selected categories",'woocommerce'),value:"all"}]})))});R.defaultProps={operator:"any",isSingle:!1};e.a=A(R)},9:function(t,e){!function(){t.exports=this.React}()},912:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),c=n(0),i=n(1),u=n(23),s=n(7),a=n(56),l=n(31),p=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-4.51 2.11l.26 2.79-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z"})),b=n(15),g=n.n(b),d=n(16),f=n.n(d),O=n(17),h=n.n(O),j=n(18),m=n.n(j),w=n(10),y=n.n(w),v=n(4),_=n(22),k=n(65),S=n.n(k),P=(n(2),n(79)),E=n(80),C=n(86),x=n(174);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y()(t);if(e){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var B=function(t){h()(n,t);var e=A(n);function n(){return g()(this,n),e.apply(this,arguments)}return f()(n,[{key:"getInspectorControls",value:function(){var t=this.props,e=t.attributes,n=t.setAttributes,r=e.categories,o=e.catOperator,u=e.columns,s=e.contentVisibility,a=e.rows,l=e.alignButtons;return Object(c.createElement)(_.InspectorControls,{key:"inspector"},Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Layout",'woocommerce'),initialOpen:!0},Object(c.createElement)(E.a,{columns:u,rows:a,alignButtons:l,setAttributes:n})),Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Content",'woocommerce'),initialOpen:!0},Object(c.createElement)(P.a,{settings:s,onChange:function(t){return n({contentVisibility:t})}})),Object(c.createElement)(v.PanelBody,{title:Object(i.__)("Filter by Product Category",'woocommerce'),initialOpen:!1},Object(c.createElement)(C.a,{selected:r,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return t.id}));n({categories:e})},operator:o,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return n({catOperator:t})}})))}},{key:"render",value:function(){var t=this.props,e=t.attributes,n=t.name;return e.isPreview?x.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(v.Disabled,null,Object(c.createElement)(S.a,{block:n,attributes:e})))}}]),n}(c.Component),R=n(95);function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}Object(u.registerBlockType)("woocommerce/product-new",{title:Object(i.__)("Newest Products",'woocommerce'),icon:{src:Object(c.createElement)(a.a,{srcElement:p}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce",'woocommerce')],description:Object(i.__)("Display a grid of your newest products.",'woocommerce'),supports:{align:["wide","full"],html:!1},attributes:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},R.a),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(s.without)(R.b,"woocommerce/product-new"),transform:function(t){return Object(u.createBlock)("woocommerce/product-new",t)}}]},edit:function(t){return Object(c.createElement)(B,t)},save:function(){return null}})},95:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var r=n(6),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];e.a={columns:{type:"number",default:r.m},rows:{type:"number",default:r.o},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}}});