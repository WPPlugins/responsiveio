/**
 * responsive.io v0.7.0
 * Copyright 2014, 14 Islands AB (14islands.com)
 */
!function(t,e,i){"use strict";function s(e,i,a){e.attachEvent?(e["e"+i+a]=a,e[i+a]=function(){e["e"+i+a](t.event)},e.attachEvent("on"+i,e[i+a])):e.addEventListener(i,a,!1)}function r(t,e,i){t.detachEvent?(t.detachEvent("on"+e,t[e+i]),t[e+i]=null):t.removeEventListener(e,i,!1)}function n(){i.debug&&t.console&&console.log("responsive.io",Array.prototype.slice.call(arguments))}function o(t,e){var i;t&&t.dispatchEvent&&document.createEvent&&(i=document.createEvent("HTMLEvents"),i.initEvent(e,!0,!1),t.dispatchEvent(i))}function h(t,e){var i=!1,a=!0,s=t.document,r=s.documentElement,n=s.addEventListener?"addEventListener":"attachEvent",o=s.addEventListener?"removeEventListener":"detachEvent",h=s.addEventListener?"":"on",l=function(a){("readystatechange"!=a.type||"complete"==s.readyState)&&(("load"==a.type?t:s)[o](h+a.type,l,!1),!i&&(i=!0)&&e.call(t,a.type||a))},d=function(){try{r.doScroll("left")}catch(t){return void setTimeout(d,50)}l("poll")};if("complete"==s.readyState)e.call(t,"lazy");else{if(s.createEventObject&&r.doScroll){try{a=!t.frameElement}catch(c){}a&&d()}s[n](h+"DOMContentLoaded",l,!1),s[n](h+"readystatechange",l,!1),t[n](h+"load",l,!1)}}function l(){var e=t.devicePixelRatio;return e?e:1}function d(t,e){var i=parseFloat(c(t,e));return isNaN(i)||0===i?!1:i}function c(t,e){return t.getPropertyValue(e)}function u(t,e){return t.getAttribute(e)}function g(t){var e;if(t)return 0===t.indexOf("http")?t:0===t.indexOf("//")?ee.protocol+t:0===t.indexOf("/")?ee.protocol+"//"+ee.host+t:(e=ee.pathname.slice(0,ee.pathname.lastIndexOf("/")),ee.protocol+"//"+ee.host+e+"/"+t)}function p(){return K++,Math.floor(K/U)%C}function f(t,e,a){var s,r,o=Z,h="string"==typeof e._webp&&X?"false"!==e._webp:i.webp,d="string"==typeof e._r?"false"!==e._r:i.retina,c=l(),u=parseInt(e._q,10)?e._q:i.quality,g="",f="",m=-1;if(t.indexOf("://localhost")>-1&&n("WARN","responsive.io cannot load images from your localhost ("+t+")"),i.bypass)return t;if(i.onError&&"function"==typeof i.onError&&(s=t.indexOf("?")>-1?"&":"?",f+=s+"redirect_on_fail=false"),a){var v=a.match(/\/\/src(\d).responsive.io/);v&&v.length>1&&(m=v[1])}-1===m&&(m=p()),o=o.replace("[protocol]",ee.protocol),o=o.replace("[hostname]",D),o=o.replace("[shard]",m),o=o.replace("[webp]",h?"webp/":""),o=o.replace("[query]",f),d&&c>1&&(e.pr=c),parseInt(u,10)<100&&(e.q=u),e.orient="string"==typeof e._orient?e._orient:i.imageOrientation;for(r in e)e.hasOwnProperty(r)&&0!==r.indexOf("_")&&(g+=e[r]?r+"="+e[r]+"/":"");return o=o.replace("[opts]",g),o=o.replace("[url]",t),encodeURI(o)}function m(t,e,a){t.el.setAttribute("data-rio-width",e),t.removeDataSrc(),t.isLoaded=!0,i.debug&&(te[u(t.el,"data-test-id")]=a)}function v(t){return i.bypass?!1:t.hasAttribute("data-rio-img")||t.hasAttribute("data-rio-bg")}function w(t){this._init(t)}function y(t,e){this.scale=1,this.width=null,this.pos=null,this.x=null,this.y=null,this.baseFocus=e,t&&this.parseString(t)}function b(t,e,i){this.interpolateOn=i,this.baseFocus=e,this.zoomLevels=[],this.parseString(t)}function z(t){this._init(t)}function A(t){var a,s=t||e.querySelectorAll("img[data-rio-img]"),r=s.length,o=0,h=!0;if(!i.bypass)for(n("Resizing",s.length,"images",s),o;r>o;o++)a=new w(s[o]),!a.isResizedSmaller()||a.hasChanged?(a.calculateFinalWidth(h),n("detected resized image size",a.width),(a.hasChanged||a.isResizedLarger())&&(n("fetching new image",a),a.load())):n("resize was smaller and no attribute changed",a)}function S(t){var a,s,r=t||e.querySelectorAll("img[data-src]"),o=r.length,h=0;for(n("Found",r.length,"new images",r),h;o>h;h++)s=new w(r[h]),i.bypass?(s.load(),n("INFO","ResponsiveIO in bypass mode")):(a=s.originUrl,s.isValid()?(s.calculateFinalWidth(),n("detected image size",s.width),s.load()):n("WARN","empty data-src - ignoring",s.el))}function L(t){var i=t||e.querySelectorAll("[data-bg-src]"),a=i.length,s=0;for(n("Found",i.length,"new background images",i),s;a>s;s++)new z(i[s]).load()}function W(t){var i=t||e.querySelectorAll("[data-rio-bg]"),a=i.length,s=0;for(n("Resizing",i.length,"background images",i),s;a>s;s++)new z(i[s]).load()}function E(e,i){Y[e]=i+"",t.name=Y.join(",")}function x(t){return Y[t]}function O(){return Y=t.name?t.name.split(","):[],x(T)===N}function F(){var t=e.querySelectorAll("[data-rio-bg]"),i=t.length,a=0;for(a;i>a;a++)new z(t[a]).onResizeStart()}function I(){A(),W()}function P(){S(),L()}function R(){I(),P()}function _(t,e,i){v(t)?i([t]):e([t])}function B(t){t?("object"==typeof t&&t.length&&(t=t[0]),"IMG"===t.nodeName?_(t,S,A):_(t,L,W)):R()}function q(t){i.debug=t.debug||!1,i.onError=t.onError||null,i.bypass=J?!0:t.bypass||!1,i.webp="undefined"!=typeof t.webp?t.webp:!0,i.retina="undefined"!=typeof t.retina?t.retina:!0,i.quality=t.quality||100,i.imageOrientation=t.imageOrientation,i.debug&&(i.images=te)}function k(t){if(O())t("true"===x(j));else{E(T,N);var e=new Image;e.onload=e.onerror=function(){var i=2===e.height;E(j,i),t(i)},e.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}}function M(){return q(i),i.refresh=B,k(function(e){X=e,e||(i.webp=!1),h(t,P)}),s(t,"resize",ie(I,Q)),s(t,"resize",ie(F,Q,!0)),i}var N="responsive.io",C=4,U=4,D="src[shard].responsive.io",Z="[protocol]//[hostname]/[webp][opts][url][query]",T=0,j=1,Q=500,V=50,$="320px 120%, 767px 100%",G=10,H=t.getComputedStyle,J="undefined"==typeof H,X=!1,Y=[],K=0,te={},ee=t.location;"undefined"==typeof e.querySelectorAll&&!function(t){t=e,a=t.styleSheets[0]||t.createStyleSheet(),t.querySelectorAll=function(e){a.addRule(e,"f:b");for(var i=t.all,s=0,r=[],n=i.length;n>s;s++)i[s].currentStyle.f&&r.push(i[s]);return a.removeRule(0),r}}(),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var ie=function(t,e,i){var a;return function(){function s(){i||t.apply(r,n),a=null}var r=this,n=arguments;a?clearTimeout(a):i&&t.apply(r,n),a=setTimeout(s,e||100)}};w.prototype={_init:function(t){this.el=t,this.dataSrc=u(this.el,"data-src"),this.dataRetina=u(this.el,"data-retina"),this.dataQuality=u(this.el,"data-quality"),this.dataWEBP=u(this.el,"data-webp"),this.dataOrientation=u(this.el,"data-image-orientation"),this.imgAlt=u(this.el,"alt"),this.isLoaded=v(this.el),this.isLoaded&&(this.src=u(this.el,"src"),this.dataSrc||(this.dataSrc=u(this.el,"data-rio-img"))),this.originUrl=g(this.dataSrc),this.updateInitialWidth(),this.hasChanged=this.hasAttributeChange()},updateInitialWidth:function(){return this.imgAlt&&!this.isLoaded&&(this.imgOriginalDisplay=this.el.style.display,this.el.style.display="none",this.el.removeAttribute("alt"),this.el.offsetWidth,this.el.style.display=this.imgOriginalDisplay),this.width=this.el.offsetWidth,this.oldWidth=u(this.el,"data-rio-width"),this},isValid:function(){return this.originUrl&&this.originUrl.trim().length>0},isResizedSmaller:function(){return"false"===this.oldWidth?!0:(this.oldWidth=parseInt(this.oldWidth,10),isFinite(this.oldWidth)?this.width<this.oldWidth-1:!1)},isResizedLarger:function(){return"false"===this.oldWidth?!1:(this.oldWidth=parseInt(this.oldWidth,10),isFinite(this.oldWidth)?this.width>this.oldWidth:!0)},hasAttributeChange:function(){if(this.isLoaded){var t=this.opts();t.w=this.oldWidth;var e=f(this.originUrl,t,this.src);return this.src!==e}return!1},opts:function(){return{w:this.width,_q:this.dataQuality,_r:this.dataRetina,_orient:this.dataOrientation,_webp:this.dataWEBP}},load:function(){function t(){r(l.el,"load",t),l.el.style.visibility=""}function e(){r(l.el,"error",e),"function"==typeof i.onError?(l.el.setAttribute("data-src",l.dataSrc),i.onError(l.el),n("img load error - using custom callback")):(a||(l.el.style.visibility="hidden"),s(l.el,"load",t),l.el.setAttribute("src",l.dataSrc),n("img load error - reverting to origin src")),i.debug&&(te[u(l.el,"data-test-id")].error=!0)}var a=!1,o=this.opts(),h=f(this.originUrl,o,this.src),l=this;if(l.isLoaded){a=!0;var d=new Image;d.onload=function(){l.el.setAttribute("src",h)},d.onerror=e,d.src=h}else i.bypass||s(l.el,"error",e),l.el.setAttribute("src",h);this.imgAlt&&this.el.setAttribute("alt",this.imgAlt),m(this,this.width,o)},getParentDimensions:function(t,e){var i=t.parentNode,a=H(i,null),s=d(a,"padding-left"),r=d(a,"padding-right"),n={width:Math.max(0,i.clientWidth-Math.ceil(s+r))},o=e?Math.max(e,V):V;if(n.width<=o&&i.parentNode){var h=this.getParentDimensions(i,s+r),l=d(a,"margin-left"),c=d(a,"margin-right");return h.width=h.width-s-r-l-c,h}return n},widthoutBordersAndPadding:function(t,e,i){var a=d(e,"border-left-width")+d(e,"border-right-width"),s=d(e,"padding-left")+d(e,"padding-right");if(a>0||s>0){var r=c(e,"box-sizing")||c(e,"-webkit-box-sizing")||c(e,"-moz-box-sizing");if("border-box"===r||i)return t-a-s}return t},getWidthBasedOnParent:function(t,e,i){var a=this.getParentDimensions(this.el),s=this.width;if(e.indexOf("px")>-1)s=a.width<i?a.width:i,s=this.widthoutBordersAndPadding(s,t);else if(e.indexOf("%")>-1){var r=Math.round(a.width*i*.01);s=this.widthoutBordersAndPadding(r,t)}else s&&(s=this.widthoutBordersAndPadding(s,t,!0));return s},calculateFinalWidth:function(t){var e=H(this.el,null),i=c(e,"max-width"),a=d(e,"max-width");!this.isLoaded&&this.widthoutBordersAndPadding(this.width,e,!0)<V&&(this.width=!1),this.width=!this.width&&c(e,"width").indexOf("%")>-1?this.getWidthBasedOnParent(e,c(e,"width"),d(e,"width")):!this.width||t?this.getWidthBasedOnParent(e,i,a):this.widthoutBordersAndPadding(this.width,e,!0),i.indexOf("px")>-1&&a<this.width&&(this.width=this.widthoutBordersAndPadding(a,e,!0)),this.width&&(this.width=Math.ceil(this.width))},removeDataSrc:function(){this.el.removeAttribute("data-src"),this.el.setAttribute("data-rio-img",this.dataSrc),i.bypass&&(this.el.className=this.el.className)}},y.prototype={roundPercentage:function(t){return t.match(/\d+%$/)?Math.round(parseFloat(t))+"%":t},compareTo:function(t){return this.width<t.width?-1:1},parseFocus:function(t){t||(t="50% 50%");var e=t.trim().split(/\s+/);if(e.length<2&&e.push("50%"),e[0].match(/top/i)||e[0].match(/bottom/i)||e[1].match(/left/i)||e[1].match(/right/i)){var i=e[0];e[0]=e[1],e[1]=i}return e[0]=this.roundPercentage(e[0]),e[1]=this.roundPercentage(e[1]),t=e.join(" ").replace(/top/gi,"0%").replace(/left/gi,"0%").replace(/center/gi,"50%").replace(/right/gi,"100%").replace(/bottom/gi,"100%"),e=t.split(" "),{pos:t,x:e[0],y:e[1]}},setFocus:function(t){var e=this.parseFocus(t);this.pos=e.pos,this.x=e.x,this.y=e.y},setScale:function(t){var e;e="string"==typeof t&&t.match(/\d+%$/)?parseFloat(t):100*t,this.scale=Math.round(e)/100},setWidth:function(t){this.width=parseFloat(t)},parseString:function(t){var e=t.trim().split(/\s+/);this.setWidth(e[0]),this.setScale(e[1]);var i=2,a=e.length,s="";for(i;a>i;i++)s+=e[i]+" ";this.setFocus(s||this.baseFocus)}},b.prototype={interpolate:function(t,e,i){var a=parseFloat(e)-parseFloat(t);return parseFloat(t)+i*a},interpolateZoom:function(t,e,i){var a=Math.min(1,Math.max(0,(i-t.width)/(e.width-t.width))),s=this.interpolate(t.scale,e.scale,a),r=this.interpolate(t.x,e.x,a)+"%",n=this.interpolate(t.y,e.y,a)+"%",o=r+" "+n,h=new y;return h.setWidth(i),h.setScale(s),h.setFocus(o),h},getActiveZoomLevel:function(t){if(this.zoomLevels&&this.zoomLevels.length)for(var e=0;e<this.zoomLevels.length;e++)if(t<=this.zoomLevels[e].width)return this.interpolateOn&&this.zoomLevels.length>=2&&e>0?this.interpolateZoom(this.zoomLevels[e],this.zoomLevels[e-1],t):this.zoomLevels[e];var i=new y;return i.setWidth(t),i.setFocus(this.baseFocus),i},parseString:function(t){if(null!==t){0===t.trim().length&&(t=$);var e=t.split(","),i=e.length,a=0;for(a;i>a;a++)this.zoomLevels.push(new y(e[a],this.baseFocus));this.zoomLevels.sort(function(t,e){return t.compareTo(e)})}}},z.prototype={_init:function(t){this.el=t,this.dataSrc=u(this.el,"data-bg-src"),this.dataRetina=u(this.el,"data-retina"),this.dataQuality=u(this.el,"data-quality"),this.dataWEBP=u(this.el,"data-webp"),this.dataOrientation=u(this.el,"data-image-orientation"),this.dataFocus=u(this.el,"data-crop-focus"),this.dataZoom=u(this.el,"data-zoom"),this.dataInterpolate=u(this.el,"data-zoom-interpolate"),this.isLoaded=v(this.el),this.isLoaded&&(this.src=this.el.style.backgroundImage.slice(4,-1),this.dataSrc||(this.dataSrc=u(this.el,"data-rio-bg"))),this.originUrl=g(this.dataSrc),this.interpolateZoom=!(this.dataInterpolate&&"false"===this.dataInterpolate),this.zoomList=new b(this.dataZoom,this.dataFocus,this.interpolateZoom)},setBg:function(t,e,a,s){if(t!==this.src&&(this.el.style.backgroundImage="url("+t+")"),this.el.style.backgroundPosition=this.size.zoom.pos,this.el.style.backgroundRepeat="no-repeat",i.bypass||s)if(this.size.zoom&&this.size.zoom.scale>1&&e>-1&&a>-1){var r=e/a,n=this.size.width/this.size.height,o=Math.max(1,r/n);this.el.style.backgroundSize=100*this.size.zoom.scale*o+"%"}else this.el.style.backgroundSize="cover";else this.el.style.backgroundSize=e<this.size.width||a<this.size.height?"cover":this.size.width+"px"},calculateSize:function(){var t=this.el.clientWidth;if(J)t+=1;else{var e=H(this.el,null),i=d(e,"width");i%1>0&&.5>i%1&&(t+=1)}var a=Math.ceil(t/G)*G,s=Math.round(a*(this.el.clientHeight/this.el.clientWidth));return{width:a,height:s,zoom:this.zoomList.getActiveZoomLevel(t)}},load:function(){function t(){if("function"==typeof i.onError)a.el.setAttribute("data-bg-src",a.dataSrc),i.onError(a.el),n("bg img load error - using custom callback");else{var t=new Image;t.onload=function(){a.setBg(a.dataSrc,t.width,t.height,!0),o(a.el,"load")},t.onerror=function(){o(a.el,"error")},t.src=a.dataSrc,a.setBg(a.dataSrc,-1,-1,!0),n("bg load error - reverting to origin src")}}var e,a=this;a.size=a.calculateSize();var s={w:a.size.width,h:a.size.height,zoom:a.size.zoom.scale,focus:a.size.zoom.pos.replace(" ",","),_q:this.dataQuality,_r:a.dataRetina,_orient:this.dataOrientation,_webp:this.dataWEBP};if(e=f(a.originUrl,s,a.src),a.src===e)return n("new bg image same as loaded - ignore load");var r=new Image;return r.onload=function(){a.setBg(e,r.width,r.height),o(a.el,"load")},r.onerror=t,r.src=e,a.isLoaded||a.setBg(e),m(a,a.size.width,s),this},onResizeStart:function(){i.bypass||(this.el.style.backgroundSize="cover")},removeDataSrc:function(){this.el.removeAttribute("data-bg-src"),this.el.setAttribute("data-rio-bg",this.dataSrc),i.bypass&&(this.el.className=this.el.className)}},t.ResponsiveIO=M()}(window,document,window.ResponsiveIO||{});