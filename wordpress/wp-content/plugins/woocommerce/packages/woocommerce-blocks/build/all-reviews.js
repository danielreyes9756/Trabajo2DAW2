this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["all-reviews"]=function(e){function t(t){for(var n,i,a=t[0],s=t[1],l=t[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={7:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;return c.push([829,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},119:function(e,t){},13:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p}));var n=r(0),o=r(1),c=r(152),i=r(4),a=r(22),s=r(3),l=r(6),u=r(70),b=function(e,t){return Object(n.createElement)(a.BlockControls,null,Object(n.createElement)(i.ToolbarGroup,{controls:[{icon:"edit",title:Object(o.__)("Edit",'woocommerce'),onClick:function(){return t({editMode:!e})},isActive:e}]}))},d=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Product rating",'woocommerce'),checked:e.showReviewRating,onChange:function(){return t({showReviewRating:!e.showReviewRating})}}),e.showReviewRating&&!l.I&&Object(n.createElement)(i.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(c.a)(Object(o.__)("Product rating is disabled in your <a>store settings</a>.",'woocommerce'),{a:Object(n.createElement)("a",{href:Object(s.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Reviewer name",'woocommerce'),checked:e.showReviewerName,onChange:function(){return t({showReviewerName:!e.showReviewerName})}}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Image",'woocommerce'),checked:e.showReviewImage,onChange:function(){return t({showReviewImage:!e.showReviewImage})}}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Review date",'woocommerce'),checked:e.showReviewDate,onChange:function(){return t({showReviewDate:!e.showReviewDate})}}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Review content",'woocommerce'),checked:e.showReviewContent,onChange:function(){return t({showReviewContent:!e.showReviewContent})}}),e.showReviewImage&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.a,{label:Object(o.__)("Review image",'woocommerce'),value:e.imageType,options:[{label:Object(o.__)("Reviewer photo",'woocommerce'),value:"reviewer"},{label:Object(o.__)("Product",'woocommerce'),value:"product"}],onChange:function(e){return t({imageType:e})}}),"reviewer"===e.imageType&&!l.P&&Object(n.createElement)(i.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(c.a)(Object(o.__)("Reviewer photo is disabled in your <a>site settings</a>.",'woocommerce'),{a:Object(n.createElement)("a",{href:Object(s.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))},p=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Order by",'woocommerce'),checked:e.showOrderby,onChange:function(){return t({showOrderby:!e.showOrderby})}}),Object(n.createElement)(i.SelectControl,{label:Object(o.__)("Order Product Reviews by",'woocommerce'),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:function(e){return t({orderby:e})}}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Starting Number of Reviews",'woocommerce'),value:e.reviewsOnPageLoad,onChange:function(e){return t({reviewsOnPageLoad:e})},max:20,min:1}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Load more",'woocommerce'),checked:e.showLoadMore,onChange:function(){return t({showLoadMore:!e.showLoadMore})}}),e.showLoadMore&&Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Load More Reviews",'woocommerce'),value:e.reviewsOnLoadMore,onChange:function(e){return t({reviewsOnLoadMore:e})},max:20,min:1}))}},140:function(e,t,r){"use strict";var n=r(0),o=r(31),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=c},143:function(e,t){},144:function(e,t,r){"use strict";var n=r(0),o=(r(2),r(8)),c=r.n(o),i=r(40),a=r(185);r(195);t.a=Object(a.a)((function(e){var t=e.className,r=e.instanceId,o=e.defaultValue,a=e.label,s=e.onChange,l=e.options,u=e.screenReaderLabel,b=e.readOnly,d=e.value,p="wc-block-components-sort-select__select-".concat(r);return Object(n.createElement)("div",{className:c()("wc-block-sort-select","wc-block-components-sort-select",t)},Object(n.createElement)(i.a,{label:a,screenReaderLabel:u,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:p}}),Object(n.createElement)("select",{id:p,className:"wc-block-sort-select__select wc-block-components-sort-select__select",defaultValue:o,onChange:s,readOnly:b,value:d},l.map((function(e){return Object(n.createElement)("option",{key:e.key,value:e.key},e.label)}))))}))},151:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(1),o=r(6),c={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:Object(n.__)("July 15, 2019",'woocommerce'),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:Object(n.__)("WordPress Pennant",'woocommerce'),product_permalink:"#",reviewer:Object(n.__)("Alice",'woocommerce'),review:"<p>".concat(Object(n.__)("I bought this product last week and I'm very happy with it.",'woocommerce'),"</p>\n"),reviewer_avatar_urls:{48:o.T+"img/avatar.jpg",96:o.T+"img/avatar.jpg"},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:Object(n.__)("July 12, 2019",'woocommerce'),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:Object(n.__)("WordPress Pennant",'woocommerce'),product_permalink:"#",reviewer:Object(n.__)("Bob",'woocommerce'),review:"<p>".concat(Object(n.__)("This product is awesome, I love it!",'woocommerce'),"</p>\n"),reviewer_avatar_urls:{48:o.T+"img/avatar.jpg",96:o.T+"img/avatar.jpg"},rating:null,verified:!1}]}}},178:function(e,t,r){"use strict";t.a={editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null}}},179:function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(0),i=(r(194),r(67));t.a=function(e){var t=e.attributes;return Object(c.createElement)("div",o()({className:Object(i.a)(t)},Object(i.b)(t)))}},183:function(e,t,r){"use strict";var n=r(15),o=r.n(n),c=r(16),i=r.n(c),a=r(17),s=r.n(a),l=r(18),u=r.n(l),b=r(10),d=r.n(b),p=r(0),w=r(1),g=r(9),f=(r(2),r(7)),m=r(4),v=r(6),h=r(94),O=r(40),j=(r(245),function(e){var t=e.onClick,r=e.label,n=e.screenReaderLabel;return Object(p.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},Object(p.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(p.createElement)(O.a,{label:r,screenReaderLabel:n})))});j.defaultProps={label:Object(w.__)("Load more",'woocommerce')};var y=j,_=r(144),k=(r(242),function(e){var t=e.defaultValue,r=e.onChange,n=e.readOnly,o=e.value;return Object(p.createElement)(_.a,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",defaultValue:t,label:Object(w.__)("Order by",'woocommerce'),onChange:r,options:[{key:"most-recent",label:Object(w.__)("Most recent",'woocommerce')},{key:"highest-rating",label:Object(w.__)("Highest rating",'woocommerce')},{key:"lowest-rating",label:Object(w.__)("Lowest rating",'woocommerce')}],readOnly:n,screenReaderLabel:Object(w.__)("Order reviews by",'woocommerce'),value:o})}),R=r(5),E=r.n(R),P=r(8),S=r.n(P),C=r(12),N=r.n(C),x=r(215),T=r.n(x),L=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=T()(e,{suffix:r,limit:t});return n.html},I=function(e,t,r,n){var o=D(e,t,r);return L(e,o-n.length,n)},D=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=L(e,n.middle),n=M(n,t.clientHeight,r);return n.middle},M=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e};function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u()(this,r)}}var A=function(e){s()(r,e);var t=B(r);function r(e){var n;return o()(this,r),(n=t.apply(this,arguments)).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},n.reviewSummary=Object(g.createRef)(),n.reviewContent=Object(g.createRef)(),n.getButton=n.getButton.bind(N()(n)),n.onClick=n.onClick.bind(N()(n)),n}return i()(r,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:I(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,n=t.lessText,o=t.moreText,c=e?n:o;if(c)return Object(p.createElement)("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},c)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,n=t.summary,o=t.clampEnabled,c=t.isExpanded;return r?!1===o?Object(p.createElement)("div",{className:e},Object(p.createElement)("div",{ref:this.reviewContent},r)):Object(p.createElement)("div",{className:e},(!c||null===o)&&Object(p.createElement)("div",{ref:this.reviewSummary,"aria-hidden":c,dangerouslySetInnerHTML:{__html:n}}),(c||null===o)&&Object(p.createElement)("div",{ref:this.reviewContent,"aria-hidden":!c},r),this.getButton()):null}}]),r}(g.Component);A.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(w.__)("Read more",'woocommerce'),lessText:Object(w.__)("Read less",'woocommerce'),className:"read-more-content"};var H=A;r(244);var V=function(e){var t=e.attributes,r=e.review,n=void 0===r?{}:r,o=t.imageType,c=t.showReviewDate,i=t.showReviewerName,a=t.showReviewImage,s=t.showReviewRating,l=t.showReviewContent,u=t.showProductName,b=n.rating,d=!Object.keys(n).length>0,g=Number.isFinite(b)&&s;return Object(p.createElement)("li",{className:S()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":d}),"aria-hidden":d},(u||c||i||a||g)&&Object(p.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},a&&function(e,t,r){var n,o;return r||!e?Object(p.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image",width:"48",height:"48"}):Object(p.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?Object(p.createElement)("img",{"aria-hidden":"true",alt:(null===(n=e.product_image)||void 0===n?void 0:n.alt)||"",src:(null===(o=e.product_image)||void 0===o?void 0:o.thumbnail)||""}):Object(p.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[48]||"",srcSet:e.reviewer_avatar_urls[96]+" 2x"}),e.verified&&Object(p.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:Object(w.__)("Verified buyer",'woocommerce')},Object(w.__)("Verified buyer",'woocommerce')))}(n,o,d),(u||i||g||c)&&Object(p.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},g&&function(e){var t=e.rating,r={width:t/5*100+"%"},n=Object(w.sprintf)(Object(w.__)("Rated %f out of 5",'woocommerce'),t);return Object(p.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},Object(p.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":n},Object(p.createElement)("span",{style:r},n)))}(n),u&&function(e){return Object(p.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},Object(p.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(n),i&&function(e){var t=e.reviewer,r=void 0===t?"":t;return Object(p.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},r)}(n),c&&function(e){var t=e.date_created,r=e.formatted_date_created;return Object(p.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(n))),l&&function(e){return Object(p.createElement)(H,{maxLines:10,moreText:Object(w.__)("Read full review",'woocommerce'),lessText:Object(w.__)("Hide full review",'woocommerce'),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},Object(p.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(n))};r(243);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){E()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G=function(e){var t=e.attributes,r=e.reviews,n=(v.P||"product"===t.imageType)&&t.showReviewImage,o=v.I&&t.showReviewRating,c=z(z({},t),{},{showReviewImage:n,showReviewRating:o});return Object(p.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===r.length?Object(p.createElement)(V,{attributes:c}):r.map((function(e,t){return Object(p.createElement)(V,{key:e.id||t,attributes:c,review:e})})))},U=r(11),W=r.n(U),J=r(28),q=r.n(J),Y=r(13),K=r.n(Y),Q=r(33),X=r.n(Q),Z=r(67),$=r(37);function ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u()(this,r)}}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u()(this,r)}}var re=function(e){var t=function(t){s()(n,t);var r=ee(n);function n(){var e;o()(this,n);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return e=r.call.apply(r,[this].concat(c)),E()(N()(e),"isPreview",!!e.props.attributes.previewReviews),E()(N()(e),"delayedAppendReviews",e.props.delayFunction(e.appendReviews)),E()(N()(e),"state",{error:null,loading:!0,reviews:e.isPreview?e.props.attributes.previewReviews:[],totalReviews:e.isPreview?e.props.attributes.previewReviews.length:0}),E()(N()(e),"setError",function(){var t=q()(K.a.mark((function t(r){var n,o;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.onReviewsLoadError,t.next=3,Object($.a)(r);case 3:o=t.sent,e.setState({reviews:[],loading:!1,error:o}),n(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}return i()(n,[{key:"componentDidMount",value:function(){this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!X()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnMount",value:function(){this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,c=t.productId,i={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(i.category_id=Array.isArray(r)?r.join(","):r),c&&(i.product_id=c),i}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),Object(Z.c)(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,n=r.error,o=r.loading,c=r.reviews,i=r.totalReviews;return Object(p.createElement)(e,W()({},this.props,{error:n,isLoading:o,reviews:c.slice(0,t),totalReviews:i}))}}]),n}(g.Component);E()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,n=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(n," )"),t}(function(e){s()(r,e);var t=te(r);function r(){return o()(this,r),t.apply(this,arguments)}return i()(r,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.error,n=e.isLoading,o=e.noReviewsPlaceholder,c=e.reviews,i=e.totalReviews;return r?Object(p.createElement)(h.a,{className:"wc-block-featured-product-error",error:r,isLoading:n}):0!==c.length||n?Object(p.createElement)(m.Disabled,null,t.showOrderby&&v.I&&Object(p.createElement)(k,{readOnly:!0,value:t.orderby}),Object(p.createElement)(G,{attributes:t,reviews:c}),t.showLoadMore&&i>c.length&&Object(p.createElement)(y,{screenReaderLabel:Object(w.__)("Load more reviews",'woocommerce')})):Object(p.createElement)(o,{attributes:t})}}]),r}(g.Component));function ne(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var o=d()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u()(this,r)}}var oe=function(e){s()(r,e);var t=ne(r);function r(){return o()(this,r),t.apply(this,arguments)}return i()(r,[{key:"renderHiddenContentPlaceholder",value:function(){var e=this.props,t=e.icon,r=e.name;return Object(p.createElement)(m.Placeholder,{icon:t,label:r},Object(w.__)("The content for this block is hidden due to block settings.",'woocommerce'))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.noReviewsPlaceholder,n=t.categoryIds,o=t.productId,c=t.reviewsOnPageLoad,i=t.showProductName,a=t.showReviewDate,s=t.showReviewerName,l=t.showReviewContent,u=t.showReviewImage,b=t.showReviewRating,d=Object(Z.d)(t.orderby),w=d.order,g=d.orderby;return!(l||b||a||s||u||i)?this.renderHiddenContentPlaceholder():Object(p.createElement)("div",{className:Object(Z.a)(t)},Object(p.createElement)(re,{attributes:t,categoryIds:n,delayFunction:function(e){return Object(f.debounce)(e,400)},noReviewsPlaceholder:r,orderby:g,order:w,productId:o,reviewsToDisplay:c}))}}]),r}(g.Component);t.a=oe},19:function(e,t){!function(){e.exports=this.wp.apiFetch}()},194:function(e,t){},195:function(e,t){},22:function(e,t){!function(){e.exports=this.wp.blockEditor}()},23:function(e,t){!function(){e.exports=this.wp.blocks}()},242:function(e,t){},243:function(e,t){},244:function(e,t){},245:function(e,t){},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},31:function(e,t){!function(){e.exports=this.wp.primitives}()},33:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l}));var n=r(28),o=r.n(n),c=r(13),i=r.n(c),a=r(1),s=function(){var e=o()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(a.__)("Something went wrong. Please contact us to get assistance.",'woocommerce')}},4:function(e,t){!function(){e.exports=this.wp.components}()},40:function(e,t,r){"use strict";var n=r(5),o=r.n(n),c=r(0),i=r(8),a=r.n(i);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,i=e.wrapperProps,s=void 0===i?{}:i,u=null!=r,b=null!=n;return!u&&b?(t=o||"span",s=l(l({},s),{},{className:a()(s.className,"screen-reader-text")}),Object(c.createElement)(t,s,n)):(t=o||c.Fragment,u&&b&&r!==n?Object(c.createElement)(t,s,Object(c.createElement)("span",{"aria-hidden":"true"},r),Object(c.createElement)("span",{className:"screen-reader-text"},n)):Object(c.createElement)(t,s,r))}},42:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},43:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(42));t.a=function(e){var t,r,i,a=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=a).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')))}},56:function(e,t,r){"use strict";var n=r(5),o=r.n(n),c=r(25),i=r.n(c),a=r(0);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,["srcElement","size"]);return Object(a.isValidElement)(t)?Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c)):null}},6:function(e,t,r){"use strict";r.d(t,"l",(function(){return o})),r.d(t,"I",(function(){return c})),r.d(t,"P",(function(){return i})),r.d(t,"y",(function(){return a})),r.d(t,"A",(function(){return s})),r.d(t,"m",(function(){return l})),r.d(t,"z",(function(){return u})),r.d(t,"C",(function(){return b})),r.d(t,"o",(function(){return d})),r.d(t,"B",(function(){return p})),r.d(t,"n",(function(){return w})),r.d(t,"E",(function(){return g})),r.d(t,"u",(function(){return f})),r.d(t,"w",(function(){return m})),r.d(t,"r",(function(){return v})),r.d(t,"s",(function(){return h})),r.d(t,"t",(function(){return O})),r.d(t,"k",(function(){return j})),r.d(t,"L",(function(){return y})),r.d(t,"Q",(function(){return _})),r.d(t,"q",(function(){return k})),r.d(t,"p",(function(){return R})),r.d(t,"H",(function(){return E})),r.d(t,"c",(function(){return P})),r.d(t,"v",(function(){return S})),r.d(t,"J",(function(){return C})),r.d(t,"T",(function(){return x})),r.d(t,"U",(function(){return T})),r.d(t,"K",(function(){return L})),r.d(t,"a",(function(){return I})),r.d(t,"N",(function(){return D})),r.d(t,"b",(function(){return M})),r.d(t,"M",(function(){return B})),r.d(t,"D",(function(){return A})),r.d(t,"i",(function(){return H})),r.d(t,"O",(function(){return z})),r.d(t,"h",(function(){return G})),r.d(t,"j",(function(){return U})),r.d(t,"G",(function(){return W})),r.d(t,"F",(function(){return J})),r.d(t,"S",(function(){return q})),r.d(t,"R",(function(){return Y})),r.d(t,"d",(function(){return K})),r.d(t,"e",(function(){return Q})),r.d(t,"f",(function(){return X})),r.d(t,"g",(function(){return Z})),r.d(t,"x",(function(){return $})),r.d(t,"X",(function(){return te})),r.d(t,"Y",(function(){return re})),r.d(t,"V",(function(){return ne})),r.d(t,"W",(function(){return oe}));var n=r(3),o=Object(n.getSetting)("currentUserIsAdmin",!1),c=Object(n.getSetting)("reviewRatingsEnabled",!0),i=Object(n.getSetting)("showAvatars",!0),a=Object(n.getSetting)("max_columns",6),s=Object(n.getSetting)("min_columns",1),l=Object(n.getSetting)("default_columns",3),u=Object(n.getSetting)("max_rows",6),b=Object(n.getSetting)("min_rows",1),d=Object(n.getSetting)("default_rows",3),p=Object(n.getSetting)("min_height",500),w=Object(n.getSetting)("default_height",500),g=Object(n.getSetting)("placeholderImgSrc",""),f=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),m=Object(n.getSetting)("limitTags"),v=Object(n.getSetting)("hasProducts",!0),h=Object(n.getSetting)("hasTags",!0),O=Object(n.getSetting)("homeUrl",""),j=Object(n.getSetting)("couponsEnabled",!0),y=Object(n.getSetting)("shippingEnabled",!0),_=Object(n.getSetting)("taxesEnabled",!0),k=(Object(n.getSetting)("displayItemizedTaxes",!1),Object(n.getSetting)("hasDarkEditorStyleSupport",!1)),R=(Object(n.getSetting)("displayShopPricesIncludingTax",!1),Object(n.getSetting)("displayCartPricesIncludingTax",!1)),E=Object(n.getSetting)("productCount",0),P=Object(n.getSetting)("attributes",[]),S=Object(n.getSetting)("isShippingCalculatorEnabled",!0),C=Object(n.getSetting)("shippingCostRequiresAddress",!1),N=(Object(n.getSetting)("isShippingCostHidden",!1),Object(n.getSetting)("woocommerceBlocksPhase",1)),x=Object(n.getSetting)("wcBlocksAssetUrl",""),T=Object(n.getSetting)("wcBlocksBuildUrl",""),L=Object(n.getSetting)("shippingCountries",{}),I=Object(n.getSetting)("allowedCountries",{}),D=Object(n.getSetting)("shippingStates",{}),M=Object(n.getSetting)("allowedStates",{}),B=Object(n.getSetting)("shippingMethodsExist",!1),A=Object(n.getSetting)("paymentGatewaySortOrder",[]),H=Object(n.getSetting)("checkoutShowLoginReminder",!0),V={id:0,title:"",permalink:""},F=Object(n.getSetting)("storePages",{myaccount:V,shop:V,cart:V,checkout:V,privacy:V,terms:V}),z=F.shop.permalink,G=F.checkout.id,U=F.checkout.permalink,W=F.privacy.permalink,J=F.privacy.title,q=F.terms.permalink,Y=F.terms.title,K=F.cart.id,Q=F.cart.permalink,X=Object(n.getSetting)("checkoutAllowsGuest",!1),Z=Object(n.getSetting)("checkoutAllowsSignup",!1),$=F.myaccount.permalink?F.myaccount.permalink:Object(n.getSetting)("loginUrl","/wp-login.php"),ee=r(23),te=function(e,t){if(N>2)return Object(ee.registerBlockType)(e,t)},re=function(e,t){if(N>1)return Object(ee.registerBlockType)(e,t)},ne=function(){return N>2},oe=function(){return N>1}},67:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(19),o=r.n(n),c=r(8),i=r.n(c),a=r(6),s=function(e){if(a.I){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}},l=function(e){return o()({path:"/wc/store/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))},u=function(e){var t=e.className,r=e.categoryIds,n=e.productId,o=e.showReviewDate,c=e.showReviewerName,a=e.showReviewContent,s=e.showProductName,l=e.showReviewImage,u=e.showReviewRating,b="wc-block-all-reviews";return n&&(b="wc-block-reviews-by-product"),Array.isArray(r)&&(b="wc-block-reviews-by-category"),i()(b,t,{"has-image":l,"has-name":c,"has-date":o,"has-rating":u,"has-content":a,"has-product-name":s})},b=function(e){var t=e.categoryIds,r=e.imageType,n=e.orderby,o=e.productId,c={"data-image-type":r,"data-orderby":n,"data-reviews-on-page-load":e.reviewsOnPageLoad,"data-reviews-on-load-more":e.reviewsOnLoadMore,"data-show-load-more":e.showLoadMore,"data-show-orderby":e.showOrderby};return o&&(c["data-product-id"]=o),Array.isArray(t)&&(c["data-category-ids"]=t.join(",")),c}},7:function(e,t){!function(){e.exports=this.lodash}()},70:function(e,t,r){"use strict";var n=r(11),o=r.n(n),c=r(15),i=r.n(c),a=r(16),s=r.n(a),l=r(12),u=r.n(l),b=r(17),d=r.n(b),p=r(18),w=r.n(p),g=r(10),f=r.n(g),m=r(0),v=r(7),h=r(8),O=r.n(h),j=r(4),y=r(186);r(119);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f()(e);if(t){var o=f()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return w()(this,r)}}var k=function(e){d()(r,e);var t=_(r);function r(){var e;return i()(this,r),(e=t.apply(this,arguments)).onClick=e.onClick.bind(u()(e)),e}return s()(r,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.label,c=r.checked,i=r.instanceId,a=r.className,s=r.help,l=r.options,u=r.value,b="inspector-toggle-button-control-".concat(i);return s&&(e=Object(v.isFunction)(s)?s(c):s),Object(m.createElement)(j.BaseControl,{id:b,help:e,className:O()("components-toggle-button-control",a)},Object(m.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},n),Object(m.createElement)(j.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,r){var c={};return u===e.value?(c.isPrimary=!0,c["aria-pressed"]=!0):(c.isSecondary=!0,c["aria-pressed"]=!1),Object(m.createElement)(j.Button,o()({key:"".concat(e.label,"-").concat(e.value,"-").concat(r),value:e.value,onClick:t.onClick,"aria-label":n+": "+e.label},c),e.label)}))))}}]),r}(m.Component);t.a=Object(y.a)(k)},829:function(e,t,r){e.exports=r(906)},9:function(e,t){!function(){e.exports=this.React}()},906:function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n),c=r(0),i=r(1),a=r(23),s=r(56),l=r(31),u=Object(c.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(c.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(c.createElement)("path",{d:"M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"})),b=(r(194),r(22)),d=r(4),p=(r(2),r(183)),w=function(){return Object(c.createElement)(d.Placeholder,{className:"wc-block-all-reviews",icon:Object(c.createElement)(s.a,{srcElement:u,className:"block-editor-block-icon"}),label:Object(i.__)("All Reviews",'woocommerce')},Object(i.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.",'woocommerce'))},g=r(130),f=function(e){var t=e.attributes,r=e.setAttributes;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(b.InspectorControls,{key:"inspector"},Object(c.createElement)(d.PanelBody,{title:Object(i.__)("Content",'woocommerce')},Object(c.createElement)(d.ToggleControl,{label:Object(i.__)("Product name",'woocommerce'),checked:t.showProductName,onChange:function(){return r({showProductName:!t.showProductName})}}),Object(g.b)(t,r)),Object(c.createElement)(d.PanelBody,{title:Object(i.__)("List Settings",'woocommerce')},Object(g.c)(t,r))),Object(c.createElement)(p.a,{attributes:t,icon:Object(c.createElement)(s.a,{icon:u,className:"block-editor-block-icon"}),name:Object(i.__)("All Reviews",'woocommerce'),noReviewsPlaceholder:w}))},m=r(178),v=r(179),h=r(151);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(a.registerBlockType)("woocommerce/all-reviews",{title:Object(i.__)("All Reviews",'woocommerce'),icon:{src:Object(c.createElement)(s.a,{srcElement:u}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce",'woocommerce')],description:Object(i.__)("Show a list of all product reviews.",'woocommerce'),supports:{html:!1},example:j(j({},h.a),{},{attributes:j(j({},h.a.attributes),{},{showProductName:!0})}),attributes:j(j({},m.a),{},{showProductName:{type:"boolean",default:!0}}),edit:function(e){return Object(c.createElement)(f,e)},save:v.a})},94:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(56)),i=r(140),a=r(8),s=r.n(a),l=r(4),u=r(43);r(143);t.a=function(e){var t=e.className,r=e.error,a=e.isLoading,b=e.onRetry;return Object(n.createElement)(l.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:i.a}),label:Object(o.__)("Sorry, an error occurred",'woocommerce'),className:s()("wc-block-api-error",t)},Object(n.createElement)(u.a,{error:r}),b&&Object(n.createElement)(n.Fragment,null,a?Object(n.createElement)(l.Spinner,null):Object(n.createElement)(l.Button,{isSecondary:!0,onClick:b},Object(o.__)("Retry",'woocommerce'))))}}});