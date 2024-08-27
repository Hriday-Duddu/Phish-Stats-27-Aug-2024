/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
/*!
 * Telekom Components v0.0.0 [2021-09-01]
 * Copyright 2014-2021 Deutsche Telekom AG
 */
if(function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=!!a&&"length"in a&&a.length,c=na.type(a);return"function"===c||na.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(na.isFunction(b))return na.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return na.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(xa.test(b))return na.filter(b,a,c);b=na.filter(b,a)}return na.grep(a,function(a){return na.inArray(a,b)>-1!==c})}function e(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}function f(a){var b={};return na.each(a.match(Da)||[],function(a,c){b[c]=!0}),b}function g(){da.addEventListener?(da.removeEventListener("DOMContentLoaded",h),a.removeEventListener("load",h)):(da.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))}function h(){(da.addEventListener||"load"===a.event.type||"complete"===da.readyState)&&(g(),na.ready())}function i(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(Ia,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:Ha.test(c)?na.parseJSON(c):c}catch(e){}na.data(a,b,c)}else c=void 0}return c}function j(a){var b;for(b in a)if(("data"!==b||!na.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function k(a,b,c,d){if(Ga(a)){var e,f,g=na.expando,h=a.nodeType,i=h?na.cache:a,j=h?a[g]:a[g]&&g;if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)return j||(j=h?a[g]=ca.pop()||na.guid++:g),i[j]||(i[j]=h?{}:{toJSON:na.noop}),"object"!=typeof b&&"function"!=typeof b||(d?i[j]=na.extend(i[j],b):i[j].data=na.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[na.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[na.camelCase(b)])):e=f,e}}function l(a,b,c){if(Ga(a)){var d,e,f=a.nodeType,g=f?na.cache:a,h=f?a[na.expando]:na.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){na.isArray(b)?b=b.concat(na.map(b,na.camelCase)):b in d?b=[b]:(b=na.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];if(c?!j(d):!na.isEmptyObject(d))return}(c||(delete g[h].data,j(g[h])))&&(f?na.cleanData([a],!0):la.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}function m(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return na.css(a,b,"")},i=h(),j=c&&c[3]||(na.cssNumber[b]?"":"px"),k=(na.cssNumber[b]||"px"!==j&&+i)&&Ka.exec(na.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,na.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function n(a){var b=Sa.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function o(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||na.nodeName(d,b)?f.push(d):na.merge(f,o(d,b));return void 0===b||b&&na.nodeName(a,b)?na.merge([a],f):f}function p(a,b){for(var c,d=0;null!=(c=a[d]);d++)na._data(c,"globalEval",!b||na._data(b[d],"globalEval"))}function q(a){Oa.test(a.type)&&(a.defaultChecked=a.checked)}function r(a,b,c,d,e){for(var f,g,h,i,j,k,l,m=a.length,r=n(b),s=[],t=0;m>t;t++)if(g=a[t],g||0===g)if("object"===na.type(g))na.merge(s,g.nodeType?[g]:g);else if(Ua.test(g)){for(i=i||r.appendChild(b.createElement("div")),j=(Pa.exec(g)||["",""])[1].toLowerCase(),l=Ta[j]||Ta._default,i.innerHTML=l[1]+na.htmlPrefilter(g)+l[2],f=l[0];f--;)i=i.lastChild;if(!la.leadingWhitespace&&Ra.test(g)&&s.push(b.createTextNode(Ra.exec(g)[0])),!la.tbody)for(g="table"!==j||Va.test(g)?"<table>"!==l[1]||Va.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;f--;)na.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k);for(na.merge(s,i.childNodes),i.textContent="";i.firstChild;)i.removeChild(i.firstChild);i=r.lastChild}else s.push(b.createTextNode(g));for(i&&r.removeChild(i),la.appendChecked||na.grep(o(s,"input"),q),t=0;g=s[t++];)if(d&&na.inArray(g,d)>-1)e&&e.push(g);else if(h=na.contains(g.ownerDocument,g),i=o(r.appendChild(g),"script"),h&&p(i),c)for(f=0;g=i[f++];)Qa.test(g.type||"")&&c.push(g);return i=null,r}function s(){return!0}function t(){return!1}function u(){try{return da.activeElement}catch(a){}}function v(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)v(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=t;else if(!e)return a;return 1===f&&(g=e,e=function(a){return na().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=na.guid++)),a.each(function(){na.event.add(this,b,e,d,c)})}function w(a,b){return na.nodeName(a,"table")&&na.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function x(a){return a.type=(null!==na.find.attr(a,"type"))+"/"+a.type,a}function y(a){var b=eb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function z(a,b){if(1===b.nodeType&&na.hasData(a)){var c,d,e,f=na._data(a),g=na._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)na.event.add(b,c,h[c][d])}g.data&&(g.data=na.extend({},g.data))}}function A(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!la.noCloneEvent&&b[na.expando]){e=na._data(b);for(d in e.events)na.removeEvent(b,d,e.handle);b.removeAttribute(na.expando)}"script"===c&&b.text!==a.text?(x(b).text=a.text,y(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),la.html5Clone&&a.innerHTML&&!na.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Oa.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function B(a,b,c,d){b=fa.apply([],b);var e,f,g,h,i,j,k=0,l=a.length,m=l-1,n=b[0],p=na.isFunction(n);if(p||l>1&&"string"==typeof n&&!la.checkClone&&db.test(n))return a.each(function(e){var f=a.eq(e);p&&(b[0]=n.call(this,e,f.html())),B(f,b,c,d)});if(l&&(j=r(b,a[0].ownerDocument,!1,a,d),e=j.firstChild,1===j.childNodes.length&&(j=e),e||d)){for(h=na.map(o(j,"script"),x),g=h.length;l>k;k++)f=j,k!==m&&(f=na.clone(f,!0,!0),g&&na.merge(h,o(f,"script"))),c.call(a[k],f,k);if(g)for(i=h[h.length-1].ownerDocument,na.map(h,y),k=0;g>k;k++)f=h[k],Qa.test(f.type||"")&&!na._data(f,"globalEval")&&na.contains(i,f)&&(f.src?na._evalUrl&&na._evalUrl(f.src):na.globalEval((f.text||f.textContent||f.innerHTML||"").replace(fb,"")));j=e=null}return a}function C(a,b,c){for(var d,e=b?na.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||na.cleanData(o(d)),d.parentNode&&(c&&na.contains(d.ownerDocument,d)&&p(o(d,"script")),d.parentNode.removeChild(d));return a}function D(a,b){var c=na(b.createElement(a)).appendTo(b.body),d=na.css(c[0],"display");return c.detach(),d}function E(a){var b=da,c=jb[a];return c||(c=D(a,b),"none"!==c&&c||(ib=(ib||na("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(ib[0].contentWindow||ib[0].contentDocument).document,b.write(),b.close(),c=D(a,b),ib.detach()),jb[a]=c),c}function F(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function G(a){if(a in yb)return a;for(var b=a.charAt(0).toUpperCase()+a.slice(1),c=xb.length;c--;)if(a=xb[c]+b,a in yb)return a}function H(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=na._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&Ma(d)&&(f[g]=na._data(d,"olddisplay",E(d.nodeName)))):(e=Ma(d),(c&&"none"!==c||!e)&&na._data(d,"olddisplay",e?c:na.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function I(a,b,c){var d=ub.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function J(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=na.css(a,c+La[f],!0,e)),d?("content"===c&&(g-=na.css(a,"padding"+La[f],!0,e)),"margin"!==c&&(g-=na.css(a,"border"+La[f]+"Width",!0,e))):(g+=na.css(a,"padding"+La[f],!0,e),"padding"!==c&&(g+=na.css(a,"border"+La[f]+"Width",!0,e)));return g}function K(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=ob(a),g=la.boxSizing&&"border-box"===na.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=pb(a,b,f),(0>e||null==e)&&(e=a.style[b]),lb.test(e))return e;d=g&&(la.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+J(a,b,c||(g?"border":"content"),d,f)+"px"}function L(a,b,c,d,e){return new L.prototype.init(a,b,c,d,e)}function M(){return a.setTimeout(function(){zb=void 0}),zb=na.now()}function N(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=La[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function O(a,b,c){for(var d,e=(R.tweeners[b]||[]).concat(R.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function P(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&Ma(a),p=na._data(a,"fxshow");c.queue||(h=na._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,na.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=na.css(a,"display"),k="none"===j?na._data(a,"olddisplay")||E(a.nodeName):j,"inline"===k&&"none"===na.css(a,"float")&&(la.inlineBlockNeedsLayout&&"inline"!==E(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",la.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Bb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||na.style(a,d)}else j=void 0;if(na.isEmptyObject(m))"inline"===("none"===j?E(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=na._data(a,"fxshow",{}),f&&(p.hidden=!o),o?na(a).show():l.done(function(){na(a).hide()}),l.done(function(){var b;na._removeData(a,"fxshow");for(b in m)na.style(a,b,m[b])});for(d in m)g=O(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Q(a,b){var c,d,e,f,g;for(c in a)if(d=na.camelCase(c),e=b[d],f=a[c],na.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=na.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function R(a,b,c){var d,e,f=0,g=R.prefilters.length,h=na.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=zb||M(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:na.extend({},b),opts:na.extend(!0,{specialEasing:{},easing:na.easing._default},c),originalProperties:b,originalOptions:c,startTime:zb||M(),duration:c.duration,tweens:[],createTween:function(b,c){var d=na.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Q(k,j.opts.specialEasing);g>f;f++)if(d=R.prefilters[f].call(j,a,k,j.opts))return na.isFunction(d.stop)&&(na._queueHooks(j.elem,j.opts.queue).stop=na.proxy(d.stop,d)),d;return na.map(k,O,j),na.isFunction(j.opts.start)&&j.opts.start.call(a,j),na.fx.timer(na.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function S(a){return na.attr(a,"class")||""}function T(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Da)||[];if(na.isFunction(c))for(;d=f[e++];)"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function U(a,b,c,d){function e(h){var i;return f[h]=!0,na.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===$b;return e(b.dataTypes[0])||!f["*"]&&e("*")}function V(a,b){var c,d,e=na.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&na.extend(!0,a,c),a}function W(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function X(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function Y(a){return a.style&&a.style.display||na.css(a,"display")}function Z(a){if(!na.contains(a.ownerDocument||da,a))return!0;for(;a&&1===a.nodeType;){if("none"===Y(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}function $(a,b,c,d){var e;if(na.isArray(b))na.each(b,function(b,e){c||dc.test(a)?d(a,e):$(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==na.type(b))d(a,b);else for(e in b)$(a+"["+e+"]",b[e],c,d)}function _(){try{return new a.XMLHttpRequest}catch(b){}}function aa(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ba(a){return na.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}var ca=[],da=a.document,ea=ca.slice,fa=ca.concat,ga=ca.push,ha=ca.indexOf,ia={},ja=ia.toString,ka=ia.hasOwnProperty,la={},ma="1.12.4",na=function(a,b){return new na.fn.init(a,b)},oa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,pa=/^-ms-/,qa=/-([\da-z])/gi,ra=function(a,b){return b.toUpperCase()};na.fn=na.prototype={jquery:ma,constructor:na,selector:"",length:0,toArray:function(){return ea.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:ea.call(this)},pushStack:function(a){var b=na.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return na.each(this,a)},map:function(a){return this.pushStack(na.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(ea.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:ga,sort:ca.sort,splice:ca.splice},na.extend=na.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||na.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(na.isPlainObject(c)||(b=na.isArray(c)))?(b?(b=!1,f=a&&na.isArray(a)?a:[]):f=a&&na.isPlainObject(a)?a:{},g[d]=na.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},na.extend({expando:"jQuery"+(ma+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===na.type(a)},isArray:Array.isArray||function(a){return"array"===na.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!na.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==na.type(a)||a.nodeType||na.isWindow(a))return!1;try{if(a.constructor&&!ka.call(a,"constructor")&&!ka.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!la.ownFirst)for(b in a)return ka.call(a,b);for(b in a);return void 0===b||ka.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?ia[ja.call(a)]||"object":typeof a},globalEval:function(b){b&&na.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(pa,"ms-").replace(qa,ra)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var d,e=0;if(c(a))for(d=a.length;d>e&&b.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(b.call(a[e],e,a[e])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(oa,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?na.merge(d,"string"==typeof a?[a]:a):ga.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if(ha)return ha.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f,g=0,h=[];if(c(a))for(e=a.length;e>g;g++)f=b(a[g],g,d),null!=f&&h.push(f);else for(g in a)f=b(a[g],g,d),null!=f&&h.push(f);return fa.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(e=a[b],b=a,a=e),na.isFunction(a)?(c=ea.call(arguments,2),d=function(){return a.apply(b||this,c.concat(ea.call(arguments)))},d.guid=a.guid=a.guid||na.guid++,d):void 0},now:function(){return+new Date},support:la}),"function"==typeof Symbol&&(na.fn[Symbol.iterator]=ca[Symbol.iterator]),na.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){ia["[object "+b+"]"]=b.toLowerCase()});var sa=/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o=b&&b.ownerDocument,p=b?b.nodeType:9;if(c=c||[],"string"!=typeof a||!a||1!==p&&9!==p&&11!==p)return c;if(!d&&((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,I)){if(11!==p&&(j=ra.exec(a)))if(e=j[1]){if(9===p){if(!(g=b.getElementById(e)))return c;if(g.id===e)return c.push(g),c}else if(o&&(g=o.getElementById(e))&&M(b,g)&&g.id===e)return c.push(g),c}else{if(j[2])return $.apply(c,b.getElementsByTagName(a)),c;if((e=j[3])&&v.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(e)),c}if(v.qsa&&!T[a+" "]&&(!J||!J.test(a))){if(1!==p)o=b,n=a;else if("object"!==b.nodeName.toLowerCase()){for((h=b.getAttribute("id"))?h=h.replace(ta,"\\$&"):b.setAttribute("id",h=N),l=z(a),f=l.length,i=ma.test(h)?"#"+h:"[id='"+h+"']";f--;)l[f]=i+" "+m(l[f]);n=l.join(","),o=sa.test(a)&&k(b.parentNode)||b}if(n)try{return $.apply(c,o.querySelectorAll(n)),c}catch(q){}finally{h===N&&b.removeAttribute("id")}}}return B(a.replace(ha,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=c.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(j=b[N]||(b[N]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===P&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));return b=null,e}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ha,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g===G||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===G||(F(k),h=!I);m=a[l++];)if(m(k,g||G,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));r=q(r)}$.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V=1<<31,W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,aa=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ca="[\\x20\\t\\r\\n\\f]",da="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ea="\\["+ca+"*("+da+")(?:"+ca+"*([*^$|!~]?=)"+ca+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+da+"))|)"+ca+"*\\]",fa=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ea+")*)|.*)\\)|)",ga=new RegExp(ca+"+","g"),ha=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ia=new RegExp("^"+ca+"*,"+ca+"*"),ja=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),ka=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),la=new RegExp(fa),ma=new RegExp("^"+da+"$"),na={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da+"|[*])"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,pa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,ra=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,ta=/'|\\/g,ua=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),va=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},wa=function(){F()};try{$.apply(X=_.call(O.childNodes),O.childNodes),X[O.childNodes.length].nodeType}catch(xa){$={apply:X.length?function(a,b){Z.apply(a,_.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=G.documentElement,I=!y(G),(c=G.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",wa,!1):c.attachEvent&&c.attachEvent("onunload",wa)),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(G.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=qa.test(G.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!G.getElementsByName||!G.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&I){var c=b.getElementById(a);return c?[c]:[]}},w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=qa.test(G.querySelectorAll))&&(e(function(a){H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+ca+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+ca+"*(?:value|"+ba+")"),a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),a.querySelectorAll(":checked").length||J.push(":checked"),a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){var b=G.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+ca+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=qa.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",fa)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=qa.test(H.compareDocumentPosition),M=b||qa.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var c=!a.compareDocumentPosition-!b.compareDocumentPosition;return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===G||a.ownerDocument===O&&M(O,a)?-1:b===G||b.ownerDocument===O&&M(O,b)?1:D?aa(D,a)-aa(D,b):0:4&c?-1:1)}:function(a,b){if(a===b)return E=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===G?-1:b===G?1:e?-1:f?1:D?aa(D,a)-aa(D,b):0;if(e===f)return g(a,b);for(c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);for(;h[d]===i[d];)d++;return d?g(h[d],i[d]):h[d]===O?-1:i[d]===O?1:0},G):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(ka,"='$1']"),v.matchesSelector&&I&&!T[c+" "]&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ua,va),a[3]=(a[3]||a[4]||a[5]||"").replace(ua,va),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return na.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&la.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ua,va).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ga," ")+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(m=q,l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(t=n=0)||o.pop();)if(1===m.nodeType&&++t&&m===b){k[a]=[P,n,t];break}}else if(s&&(m=b,l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n),t===!1)for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(s&&(l=m[N]||(m[N]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[P,t]),m!==b)););return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ha,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ua,va),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return ma.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ua,va).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return pa.test(a.nodeName)},input:function(a){return oa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){d&&!(e=ia.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=ja.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ha," ")}),h=h.slice(d.length));for(g in w.filter)!(e=na[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(ua,va),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=na.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(ua,va),sa.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return $.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,!b||sa.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);na.find=sa,na.expr=sa.selectors,na.expr[":"]=na.expr.pseudos,na.uniqueSort=na.unique=sa.uniqueSort,na.text=sa.getText,na.isXMLDoc=sa.isXML,na.contains=sa.contains;var ta=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&na(a).is(c))break;d.push(a)}return d},ua=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},va=na.expr.match.needsContext,wa=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,xa=/^.[^:#\[\.,]*$/;na.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?na.find.matchesSelector(d,a)?[d]:[]:na.find.matches(a,na.grep(b,function(a){return 1===a.nodeType}))},na.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(na(a).filter(function(){for(b=0;e>b;b++)if(na.contains(d[b],this))return!0}));for(b=0;e>b;b++)na.find(a,d[b],c);return c=this.pushStack(e>1?na.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&va.test(a)?na(a):a||[],!1).length}});var ya,za=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Aa=na.fn.init=function(a,b,c){var d,e;if(!a)return this;if(c=c||ya,"string"==typeof a){if(d="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:za.exec(a),!d||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(d[1]){if(b=b instanceof na?b[0]:b,na.merge(this,na.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:da,!0)),wa.test(d[1])&&na.isPlainObject(b))for(d in b)na.isFunction(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}if(e=da.getElementById(d[2]),e&&e.parentNode){if(e.id!==d[2])return ya.find(a);this.length=1,this[0]=e}return this.context=da,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):na.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(na):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),na.makeArray(a,this))};Aa.prototype=na.fn,ya=na(da);var Ba=/^(?:parents|prev(?:Until|All))/,Ca={children:!0,contents:!0,next:!0,prev:!0};na.fn.extend({has:function(a){var b,c=na(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(na.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=va.test(a)||"string"!=typeof a?na(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&na.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?na.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?na.inArray(this[0],na(a)):na.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(na.uniqueSort(na.merge(this.get(),na(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),na.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ta(a,"parentNode")},parentsUntil:function(a,b,c){return ta(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return ta(a,"nextSibling")},prevAll:function(a){return ta(a,"previousSibling")},nextUntil:function(a,b,c){return ta(a,"nextSibling",c)},prevUntil:function(a,b,c){return ta(a,"previousSibling",c)},siblings:function(a){return ua((a.parentNode||{}).firstChild,a)},children:function(a){return ua(a.firstChild)},contents:function(a){return na.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:na.merge([],a.childNodes)}},function(a,b){na.fn[a]=function(c,d){var e=na.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=na.filter(d,e)),this.length>1&&(Ca[a]||(e=na.uniqueSort(e)),Ba.test(a)&&(e=e.reverse())),this.pushStack(e)}});var Da=/\S+/g;na.Callbacks=function(a){a="string"==typeof a?f(a):na.extend({},a);var b,c,d,e,g=[],h=[],i=-1,j=function(){for(e=a.once,d=b=!0;h.length;i=-1)for(c=h.shift();++i<g.length;)g[i].apply(c[0],c[1])===!1&&a.stopOnFalse&&(i=g.length,c=!1);a.memory||(c=!1),b=!1,e&&(g=c?[]:"")},k={add:function(){return g&&(c&&!b&&(i=g.length-1,h.push(c)),function d(b){na.each(b,function(b,c){na.isFunction(c)?a.unique&&k.has(c)||g.push(c):c&&c.length&&"string"!==na.type(c)&&d(c)})}(arguments),c&&!b&&j()),this},remove:function(){return na.each(arguments,function(a,b){for(var c;(c=na.inArray(b,g,c))>-1;)g.splice(c,1),i>=c&&i--}),this},has:function(a){return a?na.inArray(a,g)>-1:g.length>0},empty:function(){return g&&(g=[]),this},disable:function(){return e=h=[],g=c="",this},disabled:function(){return!g},lock:function(){return e=!0,c||k.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||j()),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},na.extend({Deferred:function(a){var b=[["resolve","done",na.Callbacks("once memory"),"resolved"],["reject","fail",na.Callbacks("once memory"),"rejected"],["notify","progress",na.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return na.Deferred(function(c){na.each(b,function(b,f){var g=na.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&na.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?na.extend(a,d):d}},e={};return d.pipe=d.then,na.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=ea.call(arguments),g=f.length,h=1!==g||a&&na.isFunction(a.promise)?g:0,i=1===h?a:na.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?ea.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&na.isFunction(f[e].promise)?f[e].promise().progress(j(e,c,b)).done(j(e,d,f)).fail(i.reject):--h;return h||i.resolveWith(d,f),i.promise()}});var Ea;na.fn.ready=function(a){return na.ready.promise().done(a),this},na.extend({isReady:!1,readyWait:1,holdReady:function(a){a?na.readyWait++:na.ready(!0)},ready:function(a){(a===!0?--na.readyWait:na.isReady)||(na.isReady=!0,a!==!0&&--na.readyWait>0||(Ea.resolveWith(da,[na]),na.fn.triggerHandler&&(na(da).triggerHandler("ready"),na(da).off("ready"))))}}),na.ready.promise=function(b){if(!Ea)if(Ea=na.Deferred(),"complete"===da.readyState||"loading"!==da.readyState&&!da.documentElement.doScroll)a.setTimeout(na.ready);else if(da.addEventListener)da.addEventListener("DOMContentLoaded",h),a.addEventListener("load",h);else{da.attachEvent("onreadystatechange",h),a.attachEvent("onload",h);var c=!1;try{c=null==a.frameElement&&da.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!na.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(e,50)}g(),na.ready()}}()}return Ea.promise(b)},na.ready.promise();var Fa;for(Fa in na(la))break;la.ownFirst="0"===Fa,la.inlineBlockNeedsLayout=!1,na(function(){var a,b,c,d;c=da.getElementsByTagName("body")[0],c&&c.style&&(b=da.createElement("div"),d=da.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",la.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=da.createElement("div");la.deleteExpando=!0;try{delete a.test}catch(b){la.deleteExpando=!1}a=null}();var Ga=function(a){var b=na.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},Ha=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ia=/([A-Z])/g;na.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?na.cache[a[na.expando]]:a[na.expando],!!a&&!j(a)},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},_data:function(a,b,c){return k(a,b,c,!0)},_removeData:function(a,b){return l(a,b,!0)}}),na.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=na.data(f),1===f.nodeType&&!na._data(f,"parsedAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=na.camelCase(d.slice(5)),i(f,d,e[d])));na._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){na.data(this,a)}):arguments.length>1?this.each(function(){na.data(this,a,b)}):f?i(f,a,na.data(f,a)):void 0},removeData:function(a){return this.each(function(){na.removeData(this,a)})}}),na.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=na._data(a,b),c&&(!d||na.isArray(c)?d=na._data(a,b,na.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=na.queue(a,b),d=c.length,e=c.shift(),f=na._queueHooks(a,b),g=function(){na.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return na._data(a,c)||na._data(a,c,{empty:na.Callbacks("once memory").add(function(){na._removeData(a,b+"queue"),na._removeData(a,c)})})}}),na.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?na.queue(this[0],a):void 0===b?this:this.each(function(){var c=na.queue(this,a,b);na._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&na.dequeue(this,a)})},dequeue:function(a){return this.each(function(){na.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=na.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=na._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;la.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=da.getElementsByTagName("body")[0],c&&c.style?(b=da.createElement("div"),d=da.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(da.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ja=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ka=new RegExp("^(?:([+-])=|)("+Ja+")([a-z%]*)$","i"),La=["Top","Right","Bottom","Left"],Ma=function(a,b){return a=b||a,"none"===na.css(a,"display")||!na.contains(a.ownerDocument,a)},Na=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===na.type(c)){e=!0;for(h in c)Na(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,na.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(na(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Oa=/^(?:checkbox|radio)$/i,Pa=/<([\w:-]+)/,Qa=/^$|\/(?:java|ecma)script/i,Ra=/^\s+/,Sa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var a=da.createElement("div"),b=da.createDocumentFragment(),c=da.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",la.leadingWhitespace=3===a.firstChild.nodeType,la.tbody=!a.getElementsByTagName("tbody").length,la.htmlSerialize=!!a.getElementsByTagName("link").length,la.html5Clone="<:nav></:nav>"!==da.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),la.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",la.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=da.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),la.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,la.noCloneEvent=!!a.addEventListener,a[na.expando]=1,la.attributes=!a.getAttribute(na.expando)}();var Ta={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:la.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};Ta.optgroup=Ta.option,Ta.tbody=Ta.tfoot=Ta.colgroup=Ta.caption=Ta.thead,Ta.th=Ta.td;var Ua=/<|&#?\w+;/,Va=/<tbody/i;!function(){var b,c,d=da.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(la[b]=c in a)||(d.setAttribute(c,"t"),la[b]=d.attributes[c].expando===!1);d=null}();
var Wa=/^(?:input|select|textarea)$/i,Xa=/^key/,Ya=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Za=/^(?:focusinfocus|focusoutblur)$/,$a=/^([^.]*)(?:\.(.+)|)/;na.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=na._data(a);if(q){for(c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=na.guid++),(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){return"undefined"==typeof na||a&&na.event.triggered===a.type?void 0:na.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(Da)||[""],h=b.length;h--;)f=$a.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),n&&(j=na.event.special[n]||{},n=(e?j.delegateType:j.bindType)||n,j=na.event.special[n]||{},l=na.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&na.expr.match.needsContext.test(e),namespace:o.join(".")},i),(m=g[n])||(m=g[n]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,o,k)!==!1||(a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),na.event.global[n]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=na.hasData(a)&&na._data(a);if(q&&(k=q.events)){for(b=(b||"").match(Da)||[""],j=b.length;j--;)if(h=$a.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=na.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||na.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)na.event.remove(a,n+b[j],c,d,!0);na.isEmptyObject(k)&&(delete q.handle,na._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||da],n=ka.call(b,"type")?b.type:b,o=ka.call(b,"namespace")?b.namespace.split("."):[];if(h=k=d=d||da,3!==d.nodeType&&8!==d.nodeType&&!Za.test(n+na.event.triggered)&&(n.indexOf(".")>-1&&(o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,b=b[na.expando]?b:new na.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:na.makeArray(c,[b]),j=na.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){if(!e&&!j.noBubble&&!na.isWindow(d)){for(i=j.delegateType||n,Za.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;k===(d.ownerDocument||da)&&m.push(k.defaultView||k.parentWindow||a)}for(l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,f=(na._data(h,"events")||{})[b.type]&&na._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&Ga(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&Ga(d)&&g&&d[n]&&!na.isWindow(d)){k=d[g],k&&(d[g]=null),na.event.triggered=n;try{d[n]()}catch(p){}na.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){a=na.event.fix(a);var b,c,d,e,f,g=[],h=ea.call(arguments),i=(na._data(this,"events")||{})[a.type]||[],j=na.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=na.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(f.namespace)||(a.handleObj=f,a.data=f.data,d=((na.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?na(e,this).index(i)>-1:na.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[na.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ya.test(e)?this.mouseHooks:Xa.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new na.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||da),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||da,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==u()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===u()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return na.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return na.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=na.extend(new na.Event,c,{type:a,isSimulated:!0});na.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},na.removeEvent=da.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},na.Event=function(a,b){return this instanceof na.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?s:t):this.type=a,b&&na.extend(this,b),this.timeStamp=a&&a.timeStamp||na.now(),void(this[na.expando]=!0)):new na.Event(a,b)},na.Event.prototype={constructor:na.Event,isDefaultPrevented:t,isPropagationStopped:t,isImmediatePropagationStopped:t,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=s,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=s,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=s,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},na.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){na.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||na.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),la.submit||(na.event.special.submit={setup:function(){return na.nodeName(this,"form")?!1:void na.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=na.nodeName(b,"input")||na.nodeName(b,"button")?na.prop(b,"form"):void 0;c&&!na._data(c,"submit")&&(na.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),na._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&na.event.simulate("submit",this.parentNode,a))},teardown:function(){return na.nodeName(this,"form")?!1:void na.event.remove(this,"._submit")}}),la.change||(na.event.special.change={setup:function(){return Wa.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(na.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),na.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),na.event.simulate("change",this,a)})),!1):void na.event.add(this,"beforeactivate._change",function(a){var b=a.target;Wa.test(b.nodeName)&&!na._data(b,"change")&&(na.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||na.event.simulate("change",this.parentNode,a)}),na._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return na.event.remove(this,"._change"),!Wa.test(this.nodeName)}}),la.focusin||na.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){na.event.simulate(b,a.target,na.event.fix(a))};na.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=na._data(d,b);e||d.addEventListener(a,c,!0),na._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=na._data(d,b)-1;e?na._data(d,b,e):(d.removeEventListener(a,c,!0),na._removeData(d,b))}}}),na.fn.extend({on:function(a,b,c,d){return v(this,a,b,c,d)},one:function(a,b,c,d){return v(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,na(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=t),this.each(function(){na.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){na.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?na.event.trigger(a,b,c,!0):void 0}});var _a=/ jQuery\d+="(?:null|\d+)"/g,ab=new RegExp("<(?:"+Sa+")[\\s/>]","i"),bb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,cb=/<script|<style|<link/i,db=/checked\s*(?:[^=]|=\s*.checked.)/i,eb=/^true\/(.*)/,fb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,gb=n(da),hb=gb.appendChild(da.createElement("div"));na.extend({htmlPrefilter:function(a){return a.replace(bb,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=na.contains(a.ownerDocument,a);if(la.html5Clone||na.isXMLDoc(a)||!ab.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(hb.innerHTML=a.outerHTML,hb.removeChild(f=hb.firstChild)),!(la.noCloneEvent&&la.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||na.isXMLDoc(a)))for(d=o(f),h=o(a),g=0;null!=(e=h[g]);++g)d[g]&&A(e,d[g]);if(b)if(c)for(h=h||o(a),d=d||o(f),g=0;null!=(e=h[g]);g++)z(e,d[g]);else z(a,f);return d=o(f,"script"),d.length>0&&p(d,!i&&o(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var c,d,e,f,g=0,h=na.expando,i=na.cache,j=la.attributes,k=na.event.special;null!=(c=a[g]);g++)if((b||Ga(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?na.event.remove(c,d):na.removeEvent(c,d,f.handle);i[e]&&(delete i[e],j||"undefined"==typeof c.removeAttribute?c[h]=void 0:c.removeAttribute(h),ca.push(e))}}}),na.fn.extend({domManip:B,detach:function(a){return C(this,a,!0)},remove:function(a){return C(this,a)},text:function(a){return Na(this,function(a){return void 0===a?na.text(this):this.empty().append((this[0]&&this[0].ownerDocument||da).createTextNode(a))},null,a,arguments.length)},append:function(){return B(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=w(this,a);b.appendChild(a)}})},prepend:function(){return B(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=w(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return B(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return B(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){for(1===a.nodeType&&na.cleanData(o(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&na.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return na.clone(this,a,b)})},html:function(a){return Na(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(_a,""):void 0;if("string"==typeof a&&!cb.test(a)&&(la.htmlSerialize||!ab.test(a))&&(la.leadingWhitespace||!Ra.test(a))&&!Ta[(Pa.exec(a)||["",""])[1].toLowerCase()]){a=na.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(na.cleanData(o(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return B(this,arguments,function(b){var c=this.parentNode;na.inArray(this,a)<0&&(na.cleanData(o(this)),c&&c.replaceChild(b,this))},a)}}),na.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){na.fn[a]=function(a){for(var c,d=0,e=[],f=na(a),g=f.length-1;g>=d;d++)c=d===g?this:this.clone(!0),na(f[d])[b](c),ga.apply(e,c.get());return this.pushStack(e)}});var ib,jb={HTML:"block",BODY:"block"},kb=/^margin/,lb=new RegExp("^("+Ja+")(?!px)[a-z%]+$","i"),mb=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},nb=da.documentElement;!function(){function b(){var b,k,l=da.documentElement;l.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",c=e=h=!1,d=g=!0,a.getComputedStyle&&(k=a.getComputedStyle(j),c="1%"!==(k||{}).top,h="2px"===(k||{}).marginLeft,e="4px"===(k||{width:"4px"}).width,j.style.marginRight="50%",d="4px"===(k||{marginRight:"4px"}).marginRight,b=j.appendChild(da.createElement("div")),b.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",b.style.marginRight=b.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(b)||{}).marginRight),j.removeChild(b)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",b=j.getElementsByTagName("td"),b[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===b[0].offsetHeight,f&&(b[0].style.display="",b[1].style.display="none",f=0===b[0].offsetHeight)),l.removeChild(i)}var c,d,e,f,g,h,i=da.createElement("div"),j=da.createElement("div");j.style&&(j.style.cssText="float:left;opacity:.5",la.opacity="0.5"===j.style.opacity,la.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",la.clearCloneStyle="content-box"===j.style.backgroundClip,i=da.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),la.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,na.extend(la,{reliableHiddenOffsets:function(){return null==c&&b(),f},boxSizingReliable:function(){return null==c&&b(),e},pixelMarginRight:function(){return null==c&&b(),d},pixelPosition:function(){return null==c&&b(),c},reliableMarginRight:function(){return null==c&&b(),g},reliableMarginLeft:function(){return null==c&&b(),h}}))}();var ob,pb,qb=/^(top|right|bottom|left)$/;a.getComputedStyle?(ob=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},pb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ob(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||na.contains(a.ownerDocument,a)||(g=na.style(a,b)),c&&!la.pixelMarginRight()&&lb.test(g)&&kb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):nb.currentStyle&&(ob=function(a){return a.currentStyle},pb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||ob(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),lb.test(g)&&!qb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});var rb=/alpha\([^)]*\)/i,sb=/opacity\s*=\s*([^)]*)/i,tb=/^(none|table(?!-c[ea]).+)/,ub=new RegExp("^("+Ja+")(.*)$","i"),vb={position:"absolute",visibility:"hidden",display:"block"},wb={letterSpacing:"0",fontWeight:"400"},xb=["Webkit","O","Moz","ms"],yb=da.createElement("div").style;na.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=pb(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":la.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=na.camelCase(b),i=a.style;if(b=na.cssProps[h]||(na.cssProps[h]=G(h)||h),g=na.cssHooks[b]||na.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Ka.exec(c))&&e[1]&&(c=m(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(na.cssNumber[h]?"":"px")),la.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=na.camelCase(b);return b=na.cssProps[h]||(na.cssProps[h]=G(h)||h),g=na.cssHooks[b]||na.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=pb(a,b,d)),"normal"===f&&b in wb&&(f=wb[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),na.each(["height","width"],function(a,b){na.cssHooks[b]={get:function(a,c,d){return c?tb.test(na.css(a,"display"))&&0===a.offsetWidth?mb(a,vb,function(){return K(a,b,d)}):K(a,b,d):void 0},set:function(a,c,d){var e=d&&ob(a);return I(a,c,d?J(a,b,d,la.boxSizing&&"border-box"===na.css(a,"boxSizing",!1,e),e):0)}}}),la.opacity||(na.cssHooks.opacity={get:function(a,b){return sb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=na.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===na.trim(f.replace(rb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=rb.test(f)?f.replace(rb,e):f+" "+e)}}),na.cssHooks.marginRight=F(la.reliableMarginRight,function(a,b){return b?mb(a,{display:"inline-block"},pb,[a,"marginRight"]):void 0}),na.cssHooks.marginLeft=F(la.reliableMarginLeft,function(a,b){return b?(parseFloat(pb(a,"marginLeft"))||(na.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-mb(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),na.each({margin:"",padding:"",border:"Width"},function(a,b){na.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+La[d]+b]=f[d]||f[d-2]||f[0];return e}},kb.test(a)||(na.cssHooks[a+b].set=I)}),na.fn.extend({css:function(a,b){return Na(this,function(a,b,c){var d,e,f={},g=0;if(na.isArray(b)){for(d=ob(a),e=b.length;e>g;g++)f[b[g]]=na.css(a,b[g],!1,d);return f}return void 0!==c?na.style(a,b,c):na.css(a,b)},a,b,arguments.length>1)},show:function(){return H(this,!0)},hide:function(){return H(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Ma(this)?na(this).show():na(this).hide()})}}),na.Tween=L,L.prototype={constructor:L,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||na.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(na.cssNumber[c]?"":"px")},cur:function(){var a=L.propHooks[this.prop];return a&&a.get?a.get(this):L.propHooks._default.get(this)},run:function(a){var b,c=L.propHooks[this.prop];return this.options.duration?this.pos=b=na.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):L.propHooks._default.set(this),this}},L.prototype.init.prototype=L.prototype,L.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=na.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){na.fx.step[a.prop]?na.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[na.cssProps[a.prop]]&&!na.cssHooks[a.prop]?a.elem[a.prop]=a.now:na.style(a.elem,a.prop,a.now+a.unit)}}},L.propHooks.scrollTop=L.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},na.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},na.fx=L.prototype.init,na.fx.step={};var zb,Ab,Bb=/^(?:toggle|show|hide)$/,Cb=/queueHooks$/;na.Animation=na.extend(R,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return m(c.elem,a,Ka.exec(b),c),c}]},tweener:function(a,b){na.isFunction(a)?(b=a,a=["*"]):a=a.match(Da);for(var c,d=0,e=a.length;e>d;d++)c=a[d],R.tweeners[c]=R.tweeners[c]||[],R.tweeners[c].unshift(b)},prefilters:[P],prefilter:function(a,b){b?R.prefilters.unshift(a):R.prefilters.push(a)}}),na.speed=function(a,b,c){var d=a&&"object"==typeof a?na.extend({},a):{complete:c||!c&&b||na.isFunction(a)&&a,duration:a,easing:c&&b||b&&!na.isFunction(b)&&b};return d.duration=na.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in na.fx.speeds?na.fx.speeds[d.duration]:na.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){na.isFunction(d.old)&&d.old.call(this),d.queue&&na.dequeue(this,d.queue)},d},na.fn.extend({fadeTo:function(a,b,c,d){return this.filter(Ma).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=na.isEmptyObject(a),f=na.speed(b,c,d),g=function(){var b=R(this,na.extend({},a),f);(e||na._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=na.timers,g=na._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||na.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=na._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=na.timers,g=d?d.length:0;for(c.finish=!0,na.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),na.each(["toggle","show","hide"],function(a,b){var c=na.fn[b];na.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(N(b,!0),a,d,e)}}),na.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){na.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),na.timers=[],na.fx.tick=function(){var a,b=na.timers,c=0;for(zb=na.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||na.fx.stop(),zb=void 0},na.fx.timer=function(a){na.timers.push(a),a()?na.fx.start():na.timers.pop()},na.fx.interval=13,na.fx.start=function(){Ab||(Ab=a.setInterval(na.fx.tick,na.fx.interval))},na.fx.stop=function(){a.clearInterval(Ab),Ab=null},na.fx.speeds={slow:600,fast:200,_default:400},na.fn.delay=function(b,c){return b=na.fx?na.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=da.createElement("input"),c=da.createElement("div"),d=da.createElement("select"),e=d.appendChild(da.createElement("option"));c=da.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",la.getSetAttribute="t"!==c.className,la.style=/top/.test(a.getAttribute("style")),la.hrefNormalized="/a"===a.getAttribute("href"),la.checkOn=!!b.value,la.optSelected=e.selected,la.enctype=!!da.createElement("form").enctype,d.disabled=!0,la.optDisabled=!e.disabled,b=da.createElement("input"),b.setAttribute("value",""),la.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),la.radioValue="t"===b.value}();var Db=/\r/g,Eb=/[\x20\t\r\n\f]+/g;na.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=na.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,na(this).val()):a,null==e?e="":"number"==typeof e?e+="":na.isArray(e)&&(e=na.map(e,function(a){return null==a?"":a+""})),b=na.valHooks[this.type]||na.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=na.valHooks[e.type]||na.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(Db,""):null==c?"":c)}}}),na.extend({valHooks:{option:{get:function(a){var b=na.find.attr(a,"value");return null!=b?b:na.trim(na.text(a)).replace(Eb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(la.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!na.nodeName(c.parentNode,"optgroup"))){if(b=na(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=na.makeArray(b),g=e.length;g--;)if(d=e[g],na.inArray(na.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),na.each(["radio","checkbox"],function(){na.valHooks[this]={set:function(a,b){return na.isArray(b)?a.checked=na.inArray(na(a).val(),b)>-1:void 0}},la.checkOn||(na.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var Fb,Gb,Hb=na.expr.attrHandle,Ib=/^(?:checked|selected)$/i,Jb=la.getSetAttribute,Kb=la.input;na.fn.extend({attr:function(a,b){return Na(this,na.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){na.removeAttr(this,a)})}}),na.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?na.prop(a,b,c):(1===f&&na.isXMLDoc(a)||(b=b.toLowerCase(),e=na.attrHooks[b]||(na.expr.match.bool.test(b)?Gb:Fb)),void 0!==c?null===c?void na.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=na.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!la.radioValue&&"radio"===b&&na.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(Da);if(f&&1===a.nodeType)for(;c=f[e++];)d=na.propFix[c]||c,na.expr.match.bool.test(c)?Kb&&Jb||!Ib.test(c)?a[d]=!1:a[na.camelCase("default-"+c)]=a[d]=!1:na.attr(a,c,""),a.removeAttribute(Jb?c:d)}}),Gb={set:function(a,b,c){return b===!1?na.removeAttr(a,c):Kb&&Jb||!Ib.test(c)?a.setAttribute(!Jb&&na.propFix[c]||c,c):a[na.camelCase("default-"+c)]=a[c]=!0,c}},na.each(na.expr.match.bool.source.match(/\w+/g),function(a,b){var c=Hb[b]||na.find.attr;Kb&&Jb||!Ib.test(b)?Hb[b]=function(a,b,d){var e,f;return d||(f=Hb[b],Hb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,Hb[b]=f),e}:Hb[b]=function(a,b,c){return c?void 0:a[na.camelCase("default-"+b)]?b.toLowerCase():null}}),Kb&&Jb||(na.attrHooks.value={set:function(a,b,c){return na.nodeName(a,"input")?void(a.defaultValue=b):Fb&&Fb.set(a,b,c)}}),Jb||(Fb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},Hb.id=Hb.name=Hb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},na.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:Fb.set},na.attrHooks.contenteditable={set:function(a,b,c){Fb.set(a,""===b?!1:b,c)}},na.each(["width","height"],function(a,b){na.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),la.style||(na.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var Lb=/^(?:input|select|textarea|button|object)$/i,Mb=/^(?:a|area)$/i;na.fn.extend({prop:function(a,b){return Na(this,na.prop,a,b,arguments.length>1)},removeProp:function(a){return a=na.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),na.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&na.isXMLDoc(a)||(b=na.propFix[b]||b,e=na.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=na.find.attr(a,"tabindex");return b?parseInt(b,10):Lb.test(a.nodeName)||Mb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),la.hrefNormalized||na.each(["href","src"],function(a,b){na.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),la.optSelected||(na.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),na.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){na.propFix[this.toLowerCase()]=this}),la.enctype||(na.propFix.enctype="encoding");var Nb=/[\t\r\n\f]/g;na.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(na.isFunction(a))return this.each(function(b){na(this).addClass(a.call(this,b,S(this)))});if("string"==typeof a&&a)for(b=a.match(Da)||[];c=this[i++];)if(e=S(c),d=1===c.nodeType&&(" "+e+" ").replace(Nb," ")){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=na.trim(d),e!==h&&na.attr(c,"class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(na.isFunction(a))return this.each(function(b){na(this).removeClass(a.call(this,b,S(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(Da)||[];c=this[i++];)if(e=S(c),d=1===c.nodeType&&(" "+e+" ").replace(Nb," ")){for(g=0;f=b[g++];)for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");h=na.trim(d),e!==h&&na.attr(c,"class",h)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):na.isFunction(a)?this.each(function(c){na(this).toggleClass(a.call(this,c,S(this),b),b)}):this.each(function(){
var b,d,e,f;if("string"===c)for(d=0,e=na(this),f=a.match(Da)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else void 0!==a&&"boolean"!==c||(b=S(this),b&&na._data(this,"__className__",b),na.attr(this,"class",b||a===!1?"":na._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+S(c)+" ").replace(Nb," ").indexOf(b)>-1)return!0;return!1}}),na.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){na.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),na.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ob=a.location,Pb=na.now(),Qb=/\?/,Rb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;na.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=na.trim(b+"");return e&&!na.trim(e.replace(Rb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():na.error("Invalid JSON: "+b)},na.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||na.error("Invalid XML: "+b),c};var Sb=/#.*$/,Tb=/([?&])_=[^&]*/,Ub=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Vb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wb=/^(?:GET|HEAD)$/,Xb=/^\/\//,Yb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Zb={},$b={},_b="*/".concat("*"),ac=Ob.href,bc=Yb.exec(ac.toLowerCase())||[];na.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ac,type:"GET",isLocal:Vb.test(bc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_b,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":na.parseJSON,"text xml":na.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?V(V(a,na.ajaxSettings),b):V(na.ajaxSettings,a)},ajaxPrefilter:T(Zb),ajaxTransport:T($b),ajax:function(b,c){function d(b,c,d,e){var f,l,s,t,v,x=c;2!==u&&(u=2,i&&a.clearTimeout(i),k=void 0,h=e||"",w.readyState=b>0?4:0,f=b>=200&&300>b||304===b,d&&(t=W(m,w,d)),t=X(m,t,w,f),f?(m.ifModified&&(v=w.getResponseHeader("Last-Modified"),v&&(na.lastModified[g]=v),v=w.getResponseHeader("etag"),v&&(na.etag[g]=v)),204===b||"HEAD"===m.type?x="nocontent":304===b?x="notmodified":(x=t.state,l=t.data,s=t.error,f=!s)):(s=x,!b&&x||(x="error",0>b&&(b=0))),w.status=b,w.statusText=(c||x)+"",f?p.resolveWith(n,[l,x,w]):p.rejectWith(n,[w,x,s]),w.statusCode(r),r=void 0,j&&o.trigger(f?"ajaxSuccess":"ajaxError",[w,m,f?l:s]),q.fireWith(n,[w,x]),j&&(o.trigger("ajaxComplete",[w,m]),--na.active||na.event.trigger("ajaxStop")))}"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=na.ajaxSetup({},c),n=m.context||m,o=m.context&&(n.nodeType||n.jquery)?na(n):na.event,p=na.Deferred(),q=na.Callbacks("once memory"),r=m.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!l)for(l={};b=Ub.exec(h);)l[b[1].toLowerCase()]=b[2];b=l[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?h:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return k&&k.abort(b),d(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,m.url=((b||m.url||ac)+"").replace(Sb,"").replace(Xb,bc[1]+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=na.trim(m.dataType||"*").toLowerCase().match(Da)||[""],null==m.crossDomain&&(e=Yb.exec(m.url.toLowerCase()),m.crossDomain=!(!e||e[1]===bc[1]&&e[2]===bc[2]&&(e[3]||("http:"===e[1]?"80":"443"))===(bc[3]||("http:"===bc[1]?"80":"443")))),m.data&&m.processData&&"string"!=typeof m.data&&(m.data=na.param(m.data,m.traditional)),U(Zb,m,c,w),2===u)return w;j=na.event&&m.global,j&&0===na.active++&&na.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!Wb.test(m.type),g=m.url,m.hasContent||(m.data&&(g=m.url+=(Qb.test(g)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=Tb.test(g)?g.replace(Tb,"$1_="+Pb++):g+(Qb.test(g)?"&":"?")+"_="+Pb++)),m.ifModified&&(na.lastModified[g]&&w.setRequestHeader("If-Modified-Since",na.lastModified[g]),na.etag[g]&&w.setRequestHeader("If-None-Match",na.etag[g])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",m.contentType),w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+_b+"; q=0.01":""):m.accepts["*"]);for(f in m.headers)w.setRequestHeader(f,m.headers[f]);if(m.beforeSend&&(m.beforeSend.call(n,w,m)===!1||2===u))return w.abort();v="abort";for(f in{success:1,error:1,complete:1})w[f](m[f]);if(k=U($b,m,c,w)){if(w.readyState=1,j&&o.trigger("ajaxSend",[w,m]),2===u)return w;m.async&&m.timeout>0&&(i=a.setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,k.send(s,d)}catch(x){if(!(2>u))throw x;d(-1,x)}}else d(-1,"No Transport");return w},getJSON:function(a,b,c){return na.get(a,b,c,"json")},getScript:function(a,b){return na.get(a,void 0,b,"script")}}),na.each(["get","post"],function(a,b){na[b]=function(a,c,d,e){return na.isFunction(c)&&(e=e||d,d=c,c=void 0),na.ajax(na.extend({url:a,type:b,dataType:e,data:c,success:d},na.isPlainObject(a)&&a))}}),na._evalUrl=function(a){return na.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},na.fn.extend({wrapAll:function(a){if(na.isFunction(a))return this.each(function(b){na(this).wrapAll(a.call(this,b))});if(this[0]){var b=na(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return na.isFunction(a)?this.each(function(b){na(this).wrapInner(a.call(this,b))}):this.each(function(){var b=na(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=na.isFunction(a);return this.each(function(c){na(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){na.nodeName(this,"body")||na(this).replaceWith(this.childNodes)}).end()}}),na.expr.filters.hidden=function(a){return la.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Z(a)},na.expr.filters.visible=function(a){return!na.expr.filters.hidden(a)};var cc=/%20/g,dc=/\[\]$/,ec=/\r?\n/g,fc=/^(?:submit|button|image|reset|file)$/i,gc=/^(?:input|select|textarea|keygen)/i;na.param=function(a,b){var c,d=[],e=function(a,b){b=na.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=na.ajaxSettings&&na.ajaxSettings.traditional),na.isArray(a)||a.jquery&&!na.isPlainObject(a))na.each(a,function(){e(this.name,this.value)});else for(c in a)$(c,a[c],b,e);return d.join("&").replace(cc,"+")},na.fn.extend({serialize:function(){return na.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=na.prop(this,"elements");return a?na.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!na(this).is(":disabled")&&gc.test(this.nodeName)&&!fc.test(a)&&(this.checked||!Oa.test(a))}).map(function(a,b){var c=na(this).val();return null==c?null:na.isArray(c)?na.map(c,function(a){return{name:b.name,value:a.replace(ec,"\r\n")}}):{name:b.name,value:c.replace(ec,"\r\n")}}).get()}}),na.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?aa():da.documentMode>8?_():/^(get|post|head|put|delete|options)$/i.test(this.type)&&_()||aa()}:_;var hc=0,ic={},jc=na.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ic)ic[a](void 0,!0)}),la.cors=!!jc&&"withCredentials"in jc,jc=la.ajax=!!jc,jc&&na.ajaxTransport(function(b){if(!b.crossDomain||la.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++hc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ic[h],c=void 0,g.onreadystatechange=na.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ic[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}}),na.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return na.globalEval(a),a}}}),na.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),na.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=da.head||na("head")[0]||da.documentElement;return{send:function(d,e){b=da.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var kc=[],lc=/(=)\?(?=&|$)|\?\?/;na.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=kc.pop()||na.expando+"_"+Pb++;return this[a]=!0,a}}),na.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(lc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&lc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=na.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(lc,"$1"+e):b.jsonp!==!1&&(b.url+=(Qb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||na.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?na(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,kc.push(e)),g&&na.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),na.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||da;var d=wa.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=r([a],b,e),e&&e.length&&na(e).remove(),na.merge([],d.childNodes))};var mc=na.fn.load;na.fn.load=function(a,b,c){if("string"!=typeof a&&mc)return mc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=na.trim(a.slice(h,a.length)),a=a.slice(0,h)),na.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&na.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?na("<div>").append(na.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},na.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){na.fn[b]=function(a){return this.on(b,a)}}),na.expr.filters.animated=function(a){return na.grep(na.timers,function(b){return a===b.elem}).length},na.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=na.css(a,"position"),l=na(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=na.css(a,"top"),i=na.css(a,"left"),j=("absolute"===k||"fixed"===k)&&na.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),na.isFunction(b)&&(b=b.call(a,c,na.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},na.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){na.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,na.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=ba(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===na.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),na.nodeName(a[0],"html")||(c=a.offset()),c.top+=na.css(a[0],"borderTopWidth",!0),c.left+=na.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-na.css(d,"marginTop",!0),left:b.left-c.left-na.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&!na.nodeName(a,"html")&&"static"===na.css(a,"position");)a=a.offsetParent;return a||nb})}}),na.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);na.fn[a]=function(d){return Na(this,function(a,d,e){var f=ba(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?na(f).scrollLeft():e,c?e:na(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),na.each(["top","left"],function(a,b){na.cssHooks[b]=F(la.pixelPosition,function(a,c){return c?(c=pb(a,b),lb.test(c)?na(a).position()[b]+"px":c):void 0})}),na.each({Height:"height",Width:"width"},function(a,b){na.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){na.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Na(this,function(b,c,d){var e;return na.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?na.css(b,c,g):na.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),na.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),na.fn.size=function(){return this.length},na.fn.andSelf=na.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return na});var nc=a.jQuery,oc=a.$;return na.noConflict=function(b){return a.$===na&&(a.$=oc),b&&a.jQuery===na&&(a.jQuery=nc),na},b||(a.jQuery=a.$=na),na}),/*!
 * fullPage 2.7.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(c,a,a.document,a.Math)}):"undefined"!=typeof exports?module.exports=b(require("jquery"),a,a.document,a.Math):b(jQuery,a,a.document,a.Math)}("undefined"!=typeof window?window:this,function(a,b,c,d,e){"use strict";var f,g="fullpage-wrapper",h="."+g,i="fp-scrollable",j="."+i,k=".slimScrollBar",l=".slimScrollRail",m="fp-responsive",n="fp-notransition",o="fp-destroyed",p="fp-enabled",q="fp-viewing",r="active",s="."+r,t=".section",u="fp-section",v="."+u,w=v+s,x=v+":first",y=v+":last",z="fp-tableCell",A="."+z,B="fp-auto-height",C="fp-nav",D="#"+C,E="fp-tooltip",F="fp-show-active",G=".slide",H="fp-slide",I="."+H,J=I+s,K="fp-slides",L="."+K,M="fp-slidesContainer",N="."+M,O="fp-table",P="fp-slidesNav",Q="."+P,R=Q+" a",S="fp-controlArrow",T="."+S,U="fp-prev",V="."+U,W=S+" "+U,X=T+V,Y="fp-next",Z="."+Y,$=S+" "+Y,_=T+Z,aa=a(b),ba=a(c);a.fn.fullpage=function(i){function j(){i.css3&&(i.css3=ab()),i.anchors.length||(i.anchors=a(i.sectionSelector+"[data-anchor]").map(function(){return a(this).data("anchor").toString()}).get()),k(),rb.setAllowScrolling(!0),zb=aa.height(),rb.setAutoScrolling(i.autoScrolling,"internal");var b=a(w).find(J);b.length&&(0!==a(w).index(v)||0===a(w).index(v)&&0!==b.index())&&hb(b),Ga(),_a(),aa.on("load",function(){za()})}function k(){yb.css({height:"100%",position:"relative"}),yb.addClass(g),a("html").addClass(p),yb.removeClass(o),Y(),a(v).each(function(b){var c=a(this),d=c.find(I),e=d.length;S(c,b),V(c,b),e>0?l(c,d,e):i.verticalCentered&&Qa(c)}),i.fixedElements&&i.css3&&a(i.fixedElements).appendTo(qb),i.navigation&&ca(),i.scrollOverflow?("complete"===c.readyState&&da(),aa.on("load",da)):ea()}function l(b,c,d){var e=100*d,f=100/d;c.wrapAll('<div class="'+M+'" />'),c.parent().wrap('<div class="'+K+'" />'),b.find(N).css("width",e+"%"),d>1&&(i.controlArrows&&Z(b),i.slidesNavigation&&Xa(b,d)),c.each(function(b){a(this).css("width",f+"%"),i.verticalCentered&&Qa(a(this))});var g=b.find(J);g.length&&(0!==a(w).index(v)||0===a(w).index(v)&&0!==g.index())?hb(g):c.eq(0).addClass(r)}function S(b,c){c||0!==a(w).length||b.addClass(r),b.css("height",zb+"px"),i.paddingTop&&b.css("padding-top",i.paddingTop),i.paddingBottom&&b.css("padding-bottom",i.paddingBottom),"undefined"!=typeof i.sectionsColor[c]&&b.css("background-color",i.sectionsColor[c]),"undefined"!=typeof i.anchors[c]&&b.attr("data-anchor",i.anchors[c])}function V(b,c){"undefined"!=typeof i.anchors[c]&&b.hasClass(r)&&Ma(i.anchors[c],c),i.menu&&i.css3&&a(i.menu).closest(h).length&&a(i.menu).appendTo(qb)}function Y(){a(i.sectionSelector).each(function(){a(this).addClass(u)}),a(i.slideSelector).each(function(){a(this).addClass(H)})}function Z(a){a.find(L).after('<div class="'+W+'"></div><div class="'+$+'"></div>'),"#fff"!=i.controlArrowColor&&(a.find(_).css("border-color","transparent transparent transparent "+i.controlArrowColor),a.find(X).css("border-color","transparent "+i.controlArrowColor+" transparent transparent")),i.loopHorizontal||a.find(X).hide()}function ca(){qb.append('<div id="'+C+'"><ul></ul></div>');var b=a(D);b.addClass(function(){return i.showActiveTooltip?F+" "+i.navigationPosition:i.navigationPosition});for(var c=0;c<a(v).length;c++){var d="";i.anchors.length&&(d=i.anchors[c]);var e='<li><a href="#'+d+'"><span></span></a>',f=i.navigationTooltips[c];"undefined"!=typeof f&&""!==f&&(e+='<div class="'+E+" "+i.navigationPosition+'">'+f+"</div>"),e+="</li>",b.find("ul").append(e)}a(D).css("margin-top","-"+a(D).height()/2+"px"),a(D).find("li").eq(a(w).index(v)).find("a").addClass(r)}function da(){a(v).each(function(){var b=a(this).find(I);b.length?b.each(function(){Pa(a(this))}):Pa(a(this))}),ea()}function ea(){var b=a(w);i.scrollOverflowHandler.afterRender&&i.scrollOverflowHandler.afterRender(b),va(b),wa(b),a.isFunction(i.afterLoad)&&i.afterLoad.call(b,b.data("anchor"),b.index(v)+1),a.isFunction(i.afterRender)&&i.afterRender.call(yb)}function fa(){var b;if(!i.autoScrolling||i.scrollBar){for(var e=aa.scrollTop(),f=0,g=d.abs(e-c.querySelectorAll(v)[0].offsetTop),h=c.querySelectorAll(v),j=0;j<h.length;++j){var k=h[j],l=d.abs(e-k.offsetTop);g>l&&(f=j,g=l)}if(b=a(h).eq(f),!b.hasClass(r)&&!b.hasClass(B)){Mb=!0;var m=a(w),n=m.index(v)+1,o=Na(b),p=b.data("anchor"),q=b.index(v)+1,s=b.find(J);if(s.length)var t=s.data("anchor"),u=s.index();Cb&&(b.addClass(r).siblings().removeClass(r),a.isFunction(i.onLeave)&&i.onLeave.call(m,n,q,o),a.isFunction(i.afterLoad)&&i.afterLoad.call(b,p,q),va(b),Ma(p,q-1),i.anchors.length&&(sb=p,Ya(u,t,p,q))),clearTimeout(Ib),Ib=setTimeout(function(){Mb=!1},100)}i.fitToSection&&(clearTimeout(Jb),Jb=setTimeout(function(){Cb&&i.fitToSection&&(a(w).is(b)&&requestAnimFrame(function(){Ab=!0}),pa(b),requestAnimFrame(function(){Ab=!1}))},i.fitToSectionDelay))}}function ga(a,b){if(Eb.m[a]){var c,d;if("down"==a?(c="bottom",d=rb.moveSectionDown):(c="top",d=rb.moveSectionUp),b.length>0){if(!i.scrollOverflowHandler.isScrolled(c,b))return!0;d()}else d()}}function ha(c){var e=c.originalEvent;if(!ia(c.target)&&ja(e)){i.autoScrolling&&c.preventDefault();var f=a(w),g=i.scrollOverflowHandler.scrollable(f);if(Cb&&!vb){var h=gb(e);Pb=h.y,Qb=h.x,f.find(L).length&&d.abs(Ob-Qb)>d.abs(Nb-Pb)?d.abs(Ob-Qb)>b.outerWidth/100*i.touchSensitivity&&(Ob>Qb?Eb.m.right&&rb.moveSlideRight():Eb.m.left&&rb.moveSlideLeft()):i.autoScrolling&&d.abs(Nb-Pb)>aa.height()/100*i.touchSensitivity&&(Nb>Pb?ga("down",g):Pb>Nb&&ga("up",g))}}}function ia(b,c){c=c||0;var d=a(b).parent();return c<i.normalScrollElementTouchThreshold&&d.is(i.normalScrollElements)?!0:c==i.normalScrollElementTouchThreshold?!1:ia(d,++c)}function ja(a){return"undefined"==typeof a.pointerType||"mouse"!=a.pointerType}function ka(a){var b=a.originalEvent;if(i.fitToSection&&pb.stop(),ja(b)){var c=gb(b);Nb=c.y,Ob=c.x}}function la(a,b){for(var c=0,e=a.slice(d.max(a.length-b,1)),f=0;f<e.length;f++)c+=e[f];return d.ceil(c/b)}function ma(c){var e=(new Date).getTime();if(i.autoScrolling&&!ub){c=c||b.event;var f=c.wheelDelta||-c.deltaY||-c.detail,g=d.max(-1,d.min(1,f)),h="undefined"!=typeof c.wheelDeltaX||"undefined"!=typeof c.deltaX,j=d.abs(c.wheelDeltaX)<d.abs(c.wheelDelta)||d.abs(c.deltaX)<d.abs(c.deltaY)||!h;Db.length>149&&Db.shift(),Db.push(d.abs(f)),i.scrollBar&&(c.preventDefault?c.preventDefault():c.returnValue=!1);var k=a(w),l=i.scrollOverflowHandler.scrollable(k),m=e-Rb;if(Rb=e,m>200&&(Db=[]),Cb){var n=la(Db,10),o=la(Db,70),p=n>=o;p&&j&&(0>g?ga("down",l):ga("up",l))}return!1}i.fitToSection&&pb.stop()}function na(b,c){var d="undefined"==typeof c?a(w):c,e=d.find(L),f=e.find(I).length;if(!(!e.length||vb||2>f)){var g=e.find(J),h=null;if(h="prev"===b?g.prev(I):g.next(I),!h.length){if(!i.loopHorizontal)return;h="prev"===b?g.siblings(":last"):g.siblings(":first")}vb=!0,Ea(e,h)}}function oa(){a(J).each(function(){hb(a(this),"internal")})}function pa(b,c,d){requestAnimFrame(function(){var e=b.position();if("undefined"!=typeof e){var f=b.hasClass(B)&&e.top?e.top-zb+b.height():e.top,g={element:b,callback:c,isMovementUp:d,dest:e,dtop:f,yMovement:Na(b),anchorLink:b.data("anchor"),sectionIndex:b.index(v),activeSlide:b.find(J),activeSection:a(w),leavingSection:a(w).index(v)+1,localIsResizing:Ab};if(!(g.activeSection.is(b)&&!Ab||i.scrollBar&&aa.scrollTop()===g.dtop&&!b.hasClass(B))){if(g.activeSlide.length)var h=g.activeSlide.data("anchor"),j=g.activeSlide.index();i.autoScrolling&&i.continuousVertical&&"undefined"!=typeof g.isMovementUp&&(!g.isMovementUp&&"up"==g.yMovement||g.isMovementUp&&"down"==g.yMovement)&&(g=sa(g)),a.isFunction(i.onLeave)&&!g.localIsResizing&&i.onLeave.call(g.activeSection,g.leavingSection,g.sectionIndex+1,g.yMovement)===!1||(xa(g.activeSection),b.addClass(r).siblings().removeClass(r),va(b),Cb=!1,Ya(j,h,g.anchorLink,g.sectionIndex),qa(g),sb=g.anchorLink,Ma(g.anchorLink,g.sectionIndex))}}})}function qa(b){if(i.css3&&i.autoScrolling&&!i.scrollBar){var c="translate3d(0px, -"+b.dtop+"px, 0px)";Sa(c,!0),i.scrollingSpeed?Gb=setTimeout(function(){ua(b)},i.scrollingSpeed):ua(b)}else{var d=ra(b);a(d.element).animate(d.options,i.scrollingSpeed,i.easing).promise().done(function(){ua(b)})}}function ra(a){var b={};return i.autoScrolling&&!i.scrollBar?(b.options={top:-a.dtop},b.element=h):(b.options={scrollTop:a.dtop},b.element="html, body"),b}function sa(b){return b.isMovementUp?a(w).before(b.activeSection.nextAll(v)):a(w).after(b.activeSection.prevAll(v).get().reverse()),ib(a(w).position().top),oa(),b.wrapAroundElements=b.activeSection,b.dest=b.element.position(),b.dtop=b.dest.top,b.yMovement=Na(b.element),b}function ta(b){b.wrapAroundElements&&b.wrapAroundElements.length&&(b.isMovementUp?a(x).before(b.wrapAroundElements):a(y).after(b.wrapAroundElements),ib(a(w).position().top),oa())}function ua(b){ta(b),b.element.find(".fp-scrollable").mouseover(),a.isFunction(i.afterLoad)&&!b.localIsResizing&&i.afterLoad.call(b.element,b.anchorLink,b.sectionIndex+1),wa(b.element),Cb=!0,a.isFunction(b.callback)&&b.callback.call(this)}function va(b){var b=ya(b);b.find("img[data-src], source[data-src], audio[data-src]").each(function(){a(this).attr("src",a(this).data("src")),a(this).removeAttr("data-src"),a(this).is("source")&&a(this).closest("video").get(0).load()})}function wa(b){var b=ya(b);b.find("video, audio").each(function(){var b=a(this).get(0);b.hasAttribute("autoplay")&&"function"==typeof b.play&&b.play()})}function xa(b){var b=ya(b);b.find("video, audio").each(function(){var b=a(this).get(0);b.hasAttribute("data-ignore")||"function"!=typeof b.pause||b.pause()})}function ya(b){var c=b.find(J);return c.length&&(b=a(c)),b}function za(){var a=b.location.hash.replace("#","").split("/"),c=a[0],d=a[1];c&&(i.animateAnchor?Va(c,d):rb.silentMoveTo(c,d))}function Aa(){if(!Mb&&!i.lockAnchors){var a=b.location.hash.replace("#","").split("/"),c=a[0],d=a[1],e="undefined"==typeof sb,f="undefined"==typeof sb&&"undefined"==typeof d&&!vb;c.length&&(c&&c!==sb&&!e||f||!vb&&tb!=d)&&Va(c,d)}}function Ba(b){clearTimeout(Kb);var c=a(":focus");if(!c.is("textarea")&&!c.is("input")&&!c.is("select")&&i.keyboardScrolling&&i.autoScrolling){var d=b.which,e=[40,38,32,33,34];a.inArray(d,e)>-1&&b.preventDefault(),ub=b.ctrlKey,Kb=setTimeout(function(){Ca(b)},150)}}function Ca(b){var c=b.shiftKey;switch(b.which){case 38:case 33:Eb.k.up&&rb.moveSectionUp();break;case 32:if(c&&Eb.k.up){rb.moveSectionUp();break}case 40:case 34:Eb.k.down&&rb.moveSectionDown();break;case 36:Eb.k.up&&rb.moveTo(1);break;case 35:Eb.k.down&&rb.moveTo(a(v).length);break;case 37:Eb.k.left&&rb.moveSlideLeft();break;case 39:Eb.k.right&&rb.moveSlideRight();break;default:return}}function Da(a){Cb&&(a.pageY<Sb?rb.moveSectionUp():a.pageY>Sb&&rb.moveSectionDown()),Sb=a.pageY}function Ea(b,c){var e=c.position(),f=c.index(),g=b.closest(v),h=g.index(v),j=g.data("anchor"),k=g.find(Q),l=$a(c),m=g.find(J),n=Ab;if(i.onSlideLeave){var o=m.index(),p=Oa(o,f);if(!n&&"none"!==p&&a.isFunction(i.onSlideLeave)&&i.onSlideLeave.call(m,j,h+1,o,p,f)===!1)return void(vb=!1)}xa(m),c.addClass(r).siblings().removeClass(r),n||va(c),!i.loopHorizontal&&i.controlArrows&&(g.find(X).toggle(0!==f),g.find(_).toggle(!c.is(":last-child"))),g.hasClass(r)&&Ya(f,l,j,h);var q=function(){n||a.isFunction(i.afterSlideLoad)&&i.afterSlideLoad.call(c,j,h+1,l,f),wa(c),vb=!1};if(i.css3){var t="translate3d(-"+d.round(e.left)+"px, 0px, 0px)";Ha(b.find(N),i.scrollingSpeed>0).css(jb(t)),Hb=setTimeout(function(){q()},i.scrollingSpeed,i.easing)}else b.animate({scrollLeft:d.round(e.left)},i.scrollingSpeed,i.easing,function(){q()});k.find(s).removeClass(r),k.find("li").eq(f).find("a").addClass(r)}function Fa(){if(Ga(),wb){var b=a(c.activeElement);if(!b.is("textarea")&&!b.is("input")&&!b.is("select")){var e=aa.height();d.abs(e-Tb)>20*d.max(Tb,e)/100&&(rb.reBuild(!0),Tb=e)}}else clearTimeout(Fb),Fb=setTimeout(function(){rb.reBuild(!0)},350)}function Ga(){var a=i.responsive||i.responsiveWidth,c=i.responsiveHeight,d=a&&b.outerWidth<a,e=c&&aa.height()<c;a&&c?rb.setResponsive(d||e):a?rb.setResponsive(d):c&&rb.setResponsive(e)}function Ha(a){var b="all "+i.scrollingSpeed+"ms "+i.easingcss3;return a.removeClass(n),a.css({"-webkit-transition":b,transition:b})}function Ia(a){return a.addClass(n)}function Ja(a,b){var c=825,e=900;if(c>a||e>b){var f=100*a/c,g=100*b/e,h=d.min(f,g),i=h.toFixed(2);qb.css("font-size",i+"%")}else qb.css("font-size","100%")}function Ka(b,c){i.navigation&&(a(D).find(s).removeClass(r),b?a(D).find('a[href="#'+b+'"]').addClass(r):a(D).find("li").eq(c).find("a").addClass(r))}function La(b){i.menu&&(a(i.menu).find(s).removeClass(r),a(i.menu).find('[data-menuanchor="'+b+'"]').addClass(r))}function Ma(a,b){La(a),Ka(a,b)}function Na(b){var c=a(w).index(v),d=b.index(v);return c==d?"none":c>d?"up":"down"}function Oa(a,b){return a==b?"none":a>b?"left":"right"}function Pa(a){a.css("overflow","hidden");var b,c=i.scrollOverflowHandler,d=c.wrapContent(),e=a.closest(v),f=c.scrollable(a);f.length?b=c.scrollHeight(a):(b=a.get(0).scrollHeight,i.verticalCentered&&(b=a.find(A).get(0).scrollHeight));var g=zb-parseInt(e.css("padding-bottom"))-parseInt(e.css("padding-top"));b>g?f.length?c.update(a,g):(i.verticalCentered?a.find(A).wrapInner(d):a.wrapInner(d),c.create(a,g)):c.remove(a),a.css("overflow","")}function Qa(a){a.addClass(O).wrapInner('<div class="'+z+'" style="height:'+Ra(a)+'px;" />')}function Ra(a){var b=zb;if(i.paddingTop||i.paddingBottom){var c=a;c.hasClass(u)||(c=a.closest(v));var d=parseInt(c.css("padding-top"))+parseInt(c.css("padding-bottom"));b=zb-d}return b}function Sa(a,b){b?Ha(yb):Ia(yb),yb.css(jb(a)),setTimeout(function(){yb.removeClass(n)},10)}function Ta(b){var c=yb.find(v+'[data-anchor="'+b+'"]');return c.length||(c=a(v).eq(b-1)),c}function Ua(a,b){var c=b.find(L),d=c.find(I+'[data-anchor="'+a+'"]');return d.length||(d=c.find(I).eq(a)),d}function Va(a,b){var c=Ta(a);"undefined"==typeof b&&(b=0),a===sb||c.hasClass(r)?Wa(c,b):pa(c,function(){Wa(c,b)})}function Wa(a,b){if("undefined"!=typeof b){var c=a.find(L),d=Ua(b,a);d.length&&Ea(c,d)}}function Xa(a,b){a.append('<div class="'+P+'"><ul></ul></div>');var c=a.find(Q);c.addClass(i.slidesNavPosition);for(var d=0;b>d;d++)c.find("ul").append('<li><a href="#"><span></span></a></li>');c.css("margin-left","-"+c.width()/2+"px"),c.find("li").first().find("a").addClass(r)}function Ya(a,b,c,d){var e="";i.anchors.length&&!i.lockAnchors&&(a?("undefined"!=typeof c&&(e=c),"undefined"==typeof b&&(b=a),tb=b,Za(e+"/"+b)):"undefined"!=typeof a?(tb=b,Za(c)):Za(c)),_a()}function Za(a){if(i.recordHistory)location.hash=a;else if(wb||xb)history.replaceState(e,e,"#"+a);else{var c=b.location.href.split("#")[0];b.location.replace(c+"#"+a)}}function $a(a){var b=a.data("anchor"),c=a.index();return"undefined"==typeof b&&(b=c),b}function _a(){var b=a(w),c=b.find(J),d=$a(b),e=$a(c),f=(b.index(v),String(d));c.length&&(f=f+"-"+e),f=f.replace("/","-").replace("#","");var g=new RegExp("\\b\\s?"+q+"-[^\\s]+\\b","g");qb[0].className=qb[0].className.replace(g,""),qb.addClass(q+"-"+f)}function ab(){var a,d=c.createElement("p"),f={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};c.body.insertBefore(d,null);for(var g in f)d.style[g]!==e&&(d.style[g]="translate3d(1px,1px,1px)",a=b.getComputedStyle(d).getPropertyValue(f[g]));return c.body.removeChild(d),a!==e&&a.length>0&&"none"!==a}function bb(){c.addEventListener?(c.removeEventListener("mousewheel",ma,!1),c.removeEventListener("wheel",ma,!1),c.removeEventListener("MozMousePixelScroll",ma,!1)):c.detachEvent("onmousewheel",ma)}function cb(){var a,d="";b.addEventListener?a="addEventListener":(a="attachEvent",d="on");var f="onwheel"in c.createElement("div")?"wheel":c.onmousewheel!==e?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==f?c[a](d+"MozMousePixelScroll",ma,!1):c[a](d+f,ma,!1)}function db(){if(wb||xb){var b=fb();a(h).off("touchstart "+b.down).on("touchstart "+b.down,ka),a(h).off("touchmove "+b.move).on("touchmove "+b.move,ha)}}function eb(){if(wb||xb){var b=fb();a(h).off("touchstart "+b.down),a(h).off("touchmove "+b.move)}}function fb(){var a;return a=b.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function gb(a){var b=[];return b.y="undefined"!=typeof a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY,b.x="undefined"!=typeof a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX,xb&&ja(a)&&i.scrollBar&&(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX),b}function hb(a,b){rb.setScrollingSpeed(0,"internal"),"undefined"!=typeof b&&(Ab=!0),Ea(a.closest(L),a),"undefined"!=typeof b&&(Ab=!1),rb.setScrollingSpeed(Lb.scrollingSpeed,"internal")}function ib(a){if(i.scrollBar)yb.scrollTop(a);else if(i.css3){var b="translate3d(0px, -"+a+"px, 0px)";Sa(b,!1)}else yb.css("top",-a)}function jb(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function kb(a,b,c){switch(b){case"up":Eb[c].up=a;break;case"down":Eb[c].down=a;break;case"left":Eb[c].left=a;break;case"right":Eb[c].right=a;break;case"all":"m"==c?rb.setAllowScrolling(a):rb.setKeyboardScrolling(a)}}function lb(){ib(0),a(D+", "+Q+", "+T).remove(),a(v).css({height:"","background-color":"",padding:""}),a(I).css({width:""}),yb.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),pb.css({overflow:"",height:""}),a("html").removeClass(p),a.each(qb.get(0).className.split(/\s+/),function(a,b){0===b.indexOf(q)&&qb.removeClass(b)}),a(v+", "+I).each(function(){i.scrollOverflowHandler.remove(a(this)),a(this).removeClass(O+" "+r)}),Ia(yb),yb.find(A+", "+N+", "+L).each(function(){a(this).replaceWith(this.childNodes)}),pb.scrollTop(0);var b=[u,H,M];a.each(b,function(b,c){a("."+c).removeClass(c)})}function mb(a,b,c){i[a]=b,"internal"!==c&&(Lb[a]=b)}function nb(){i.continuousVertical&&(i.loopTop||i.loopBottom)&&(i.continuousVertical=!1,ob("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),i.scrollBar&&i.scrollOverflow&&ob("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),i.continuousVertical&&i.scrollBar&&(i.continuousVertical=!1,ob("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),a.each(i.anchors,function(b,c){(a("#"+c).length||a('[name="'+c+'"]').length)&&ob("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}function ob(a,b){console&&console[a]&&console[a]("fullPage: "+b)}var pb=a("html, body"),qb=a("body"),rb=a.fn.fullpage;i=a.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:f,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:t,slideSelector:G,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},i),nb(),a.extend(a.easing,{easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c}}),a.extend(a.easing,{easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c}}),rb.setAutoScrolling=function(b,c){mb("autoScrolling",b,c);var d=a(w);i.autoScrolling&&!i.scrollBar?(pb.css({overflow:"hidden",height:"100%"}),rb.setRecordHistory(Lb.recordHistory,"internal"),yb.css({"-ms-touch-action":"none","touch-action":"none"}),d.length&&ib(d.position().top)):(pb.css({overflow:"visible",height:"initial"}),rb.setRecordHistory(!1,"internal"),yb.css({"-ms-touch-action":"","touch-action":""}),ib(0),d.length&&pb.scrollTop(d.position().top))},rb.setRecordHistory=function(a,b){mb("recordHistory",a,b)},rb.setScrollingSpeed=function(a,b){mb("scrollingSpeed",a,b)},rb.setFitToSection=function(a,b){mb("fitToSection",a,b)},rb.setLockAnchors=function(a){i.lockAnchors=a},rb.setMouseWheelScrolling=function(a){a?cb():bb()},rb.setAllowScrolling=function(b,c){"undefined"!=typeof c?(c=c.replace(/ /g,"").split(","),a.each(c,function(a,c){kb(b,c,"m")})):b?(rb.setMouseWheelScrolling(!0),db()):(rb.setMouseWheelScrolling(!1),eb())},rb.setKeyboardScrolling=function(b,c){"undefined"!=typeof c?(c=c.replace(/ /g,"").split(","),a.each(c,function(a,c){kb(b,c,"k")})):i.keyboardScrolling=b},rb.moveSectionUp=function(){var b=a(w).prev(v);b.length||!i.loopTop&&!i.continuousVertical||(b=a(v).last()),b.length&&pa(b,null,!0)},rb.moveSectionDown=function(){var b=a(w).next(v);b.length||!i.loopBottom&&!i.continuousVertical||(b=a(v).first()),b.length&&pa(b,null,!1)},rb.silentMoveTo=function(a,b){requestAnimFrame(function(){rb.setScrollingSpeed(0,"internal")}),rb.moveTo(a,b),requestAnimFrame(function(){rb.setScrollingSpeed(Lb.scrollingSpeed,"internal")})},rb.moveTo=function(a,b){var c=Ta(a);"undefined"!=typeof b?Va(a,b):c.length>0&&pa(c)},rb.moveSlideRight=function(a){na("next",a)},rb.moveSlideLeft=function(a){na("prev",a)},rb.reBuild=function(c){if(!yb.hasClass(o)){Ab=!0,requestAnimFrame(function(){Ab=!0});var d=b.outerWidth;zb=aa.height(),i.resize&&Ja(zb,d),a(v).each(function(){var b=a(this).find(L),c=a(this).find(I);i.verticalCentered&&a(this).find(A).css("height",Ra(a(this))+"px"),a(this).css("height",zb+"px"),i.scrollOverflow&&(c.length?c.each(function(){Pa(a(this))}):Pa(a(this))),c.length>1&&Ea(b,b.find(J))});var e=a(w),f=e.index(v);f&&rb.silentMoveTo(f+1),Ab=!1,requestAnimFrame(function(){Ab=!1}),a.isFunction(i.afterResize)&&c&&i.afterResize.call(yb),a.isFunction(i.afterReBuild)&&!c&&i.afterReBuild.call(yb)}},rb.setResponsive=function(b){var c=qb.hasClass(m);b?c||(rb.setAutoScrolling(!1,"internal"),rb.setFitToSection(!1,"internal"),a(D).hide(),qb.addClass(m)):c&&(rb.setAutoScrolling(Lb.autoScrolling,"internal"),rb.setFitToSection(Lb.autoScrolling,"internal"),a(D).show(),qb.removeClass(m))};var sb,tb,ub,vb=!1,wb=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),xb="ontouchstart"in b||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,yb=a(this),zb=aa.height(),Ab=!1,Bb=!0,Cb=!0,Db=[],Eb={};Eb.m={up:!0,down:!0,left:!0,right:!0},Eb.k=a.extend(!0,{},Eb.m);var Fb,Gb,Hb,Ib,Jb,Kb,Lb=a.extend(!0,{},i);a(this).length&&j();var Mb=!1;aa.on("scroll",fa);var Nb=0,Ob=0,Pb=0,Qb=0,Rb=(new Date).getTime();b.requestAnimFrame=function(){return b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a){a()}}(),aa.on("hashchange",Aa),ba.keydown(Ba),ba.keyup(function(a){Bb&&(ub=a.ctrlKey)}),a(b).blur(function(){Bb=!1,ub=!1});var Kb;yb.mousedown(function(a){2==a.which&&(Sb=a.pageY,yb.on("mousemove",Da))}),yb.mouseup(function(a){2==a.which&&yb.off("mousemove")});var Sb=0;ba.on("click touchstart",D+" a",function(b){b.preventDefault();var c=a(this).parent().index();pa(a(v).eq(c))}),ba.on("click touchstart",R,function(b){b.preventDefault();var c=a(this).closest(v).find(L),d=c.find(I).eq(a(this).closest("li").index());Ea(c,d)}),i.normalScrollElements&&(ba.on("mouseenter",i.normalScrollElements,function(){rb.setMouseWheelScrolling(!1)}),ba.on("mouseleave",i.normalScrollElements,function(){rb.setMouseWheelScrolling(!0)})),a(v).on("click touchstart",T,function(){var b=a(this).closest(v);a(this).hasClass(U)?Eb.m.left&&rb.moveSlideLeft(b):Eb.m.right&&rb.moveSlideRight(b)}),aa.resize(Fa);var Tb=zb;rb.destroy=function(b){rb.setAutoScrolling(!1,"internal"),rb.setAllowScrolling(!1),rb.setKeyboardScrolling(!1),yb.addClass(o),clearTimeout(Hb),clearTimeout(Gb),clearTimeout(Fb),clearTimeout(Ib),clearTimeout(Jb),aa.off("scroll",fa).off("hashchange",Aa).off("resize",Fa),ba.off("click",D+" a").off("mouseenter",D+" li").off("mouseleave",D+" li").off("click",R).off("mouseover",i.normalScrollElements).off("mouseout",i.normalScrollElements),a(v).off("click",T),clearTimeout(Hb),clearTimeout(Gb),b&&lb()}};var ca={afterRender:function(a){var b=a.find(K),c=a.find(j);b.length&&(c=b.find(J)),c.mouseover()},create:function(a,b){a.find(j).slimScroll({allowPageScroll:!0,height:b+"px",size:"10px",alwaysVisible:!0})},isScrolled:function(a,b){return"top"===a?!b.scrollTop():"bottom"===a?b.scrollTop()+1+b.innerHeight()>=b[0].scrollHeight:void 0},scrollable:function(a){return a.find(L).length?a.find(J).find(j):a.find(j)},scrollHeight:function(a){return a.find(j).get(0).scrollHeight},remove:function(a){a.find(j).children().first().unwrap().unwrap(),a.find(k).remove(),a.find(l).remove()},update:function(a,b){a.find(j).css("height",b+"px").parent().css("height",b+"px")},wrapContent:function(){return'<div class="'+i+'"></div>'}};f=ca}),/*! jQuery UI - v1.9.2 - 2014-03-21
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
jQuery.effects||function(a,b){var c=a.uiBackCompat!==!1,d="ui-effects-";a.effects={effect:{}},function(b,c){function d(a,b,c){var d=m[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:a>d.max?d.max:a)}function e(a){var d=k(),e=d._rgba=[];return a=a.toLowerCase(),p(j,function(b,f){var g,h=f.re.exec(a),i=h&&f.parse(h),j=f.space||"rgba";return i?(g=d[j](i),d[l[j].cache]=g[l[j].cache],e=d._rgba=g._rgba,!1):c}),e.length?("0,0,0,0"===e.join()&&b.extend(e,g.transparent),d):g[a]}function f(a,b,c){return c=(c+1)%1,1>6*c?a+6*(b-a)*c:1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}var g,h="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),i=/^([\-+])=\s*(\d+\.?\d*)/,j=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],k=b.Color=function(a,c,d,e){return new b.Color.fn.parse(a,c,d,e)},l={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},m={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},n=k.support={},o=b("<p>")[0],p=b.each;o.style.cssText="background-color:rgba(1,1,1,.5)",n.rgba=o.style.backgroundColor.indexOf("rgba")>-1,p(l,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),k.fn=b.extend(k.prototype,{parse:function(f,h,i,j){if(f===c)return this._rgba=[null,null,null,null],this;(f.jquery||f.nodeType)&&(f=b(f).css(h),h=c);var m=this,n=b.type(f),o=this._rgba=[];return h!==c&&(f=[f,h,i,j],n="array"),"string"===n?this.parse(e(f)||g._default):"array"===n?(p(l.rgba.props,function(a,b){o[b.idx]=d(f[b.idx],b)}),this):"object"===n?(f instanceof k?p(l,function(a,b){f[b.cache]&&(m[b.cache]=f[b.cache].slice())}):p(l,function(b,c){var e=c.cache;p(c.props,function(a,b){if(!m[e]&&c.to){if("alpha"===a||null==f[a])return;m[e]=c.to(m._rgba)}m[e][b.idx]=d(f[a],b,!0)}),m[e]&&0>a.inArray(null,m[e].slice(0,3))&&(m[e][3]=1,c.from&&(m._rgba=c.from(m[e])))}),this):c},is:function(a){var b=k(a),d=!0,e=this;return p(l,function(a,f){var g,h=b[f.cache];return h&&(g=e[f.cache]||f.to&&f.to(e._rgba)||[],p(f.props,function(a,b){return null!=h[b.idx]?d=h[b.idx]===g[b.idx]:c})),d}),d},_space:function(){var a=[],b=this;return p(l,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=k(a),e=c._space(),f=l[e],g=0===this.alpha()?k("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return c=c[f.cache],p(f.props,function(a,e){var f=e.idx,g=h[f],j=c[f],k=m[e.type]||{};null!==j&&(null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=d((j-g)*b+g,e)))}),this[e](i)},blend:function(a){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=k(a)._rgba;return k(b.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var a="rgba(",c=b.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),a="rgb("),a+c.join()+")"},toHslaString:function(){var a="hsla(",c=b.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&3>b&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),a="hsl("),a+c.join()+")"},toHexString:function(a){var c=this._rgba.slice(),d=c.pop();return a&&c.push(~~(255*d)),"#"+b.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),k.fn.parse.prototype=k.fn,l.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===l||1===l?l:.5>=l?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},l.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],g=.5>=d?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*f(h,g,b+1/3)),Math.round(255*f(h,g,b)),Math.round(255*f(h,g,b-1/3)),e]},p(l,function(a,e){var f=e.props,g=e.cache,h=e.to,j=e.from;k.fn[a]=function(a){if(h&&!this[g]&&(this[g]=h(this._rgba)),a===c)return this[g].slice();var e,i=b.type(a),l="array"===i||"object"===i?a:arguments,m=this[g].slice();return p(f,function(a,b){var c=l["object"===i?a:b.idx];null==c&&(c=m[b.idx]),m[b.idx]=d(c,b)}),j?(e=k(j(m)),e[g]=m,e):k(m)},p(f,function(c,d){k.fn[c]||(k.fn[c]=function(e){var f,g=b.type(e),h="alpha"===c?this._hsla?"hsla":"rgba":a,j=this[h](),k=j[d.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=b.type(e)),null==e&&d.empty?this:("string"===g&&(f=i.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[d.idx]=e,this[h](j)))})})}),p(h,function(a,c){b.cssHooks[c]={set:function(a,d){var f,g,h="";if("string"!==b.type(d)||(f=e(d))){if(d=k(f||d),!n.rgba&&1!==d._rgba[3]){for(g="backgroundColor"===c?a.parentNode:a;(""===h||"transparent"===h)&&g&&g.style;)try{h=b.css(g,"backgroundColor"),g=g.parentNode}catch(i){}d=d.blend(h&&"transparent"!==h?h:"_default")}d=d.toRgbaString()}try{a.style[c]=d}catch(j){}}},b.fx.step[c]=function(a){a.colorInit||(a.start=k(a.elem,c),a.end=k(a.end),a.colorInit=!0),b.cssHooks[c].set(a.elem,a.start.transition(a.end,a.pos))}}),b.cssHooks.borderColor={expand:function(a){var b={};return p(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},g=b.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function c(){var b,c,d=this.ownerDocument.defaultView?this.ownerDocument.defaultView.getComputedStyle(this,null):this.currentStyle,e={};if(d&&d.length&&d[0]&&d[d[0]])for(c=d.length;c--;)b=d[c],"string"==typeof d[b]&&(e[a.camelCase(b)]=d[b]);else for(b in d)"string"==typeof d[b]&&(e[b]=d[b]);return e}function d(b,c){var d,e,g={};for(d in c)e=c[d],b[d]!==e&&(f[d]||(a.fx.step[d]||!isNaN(parseFloat(e)))&&(g[d]=e));return g}var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,c){a.fx.step[c]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(jQuery.style(a.elem,c,a.end),a.setAttr=!0)}}),a.effects.animateClass=function(b,f,g,h){var i=a.speed(f,g,h);return this.queue(function(){var f,g=a(this),h=g.attr("class")||"",j=i.children?g.find("*").andSelf():g;j=j.map(function(){var b=a(this);return{el:b,start:c.call(this)}}),f=function(){a.each(e,function(a,c){b[c]&&g[c+"Class"](b[c])})},f(),j=j.map(function(){return this.end=c.call(this.el[0]),this.diff=d(this.start,this.end),this}),g.attr("class",h),j=j.map(function(){var b=this,c=a.Deferred(),d=jQuery.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){f(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),i.complete.call(g[0])})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.call(this,{add:b},c,d,e):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.call(this,{remove:b},c,d,e):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return"boolean"==typeof d||d===b?e?a.effects.animateClass.call(this,d?{add:c}:{remove:c},e,f,g):this._toggleClass(c,d):a.effects.animateClass.call(this,{toggle:c},d,e,f)},switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),function(){function e(b,c,d,e){return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function f(b){return!b||"number"==typeof b||a.fx.speeds[b]?!0:"string"!=typeof b||a.effects.effect[b]?!1:!c||!a.effects[b]}a.extend(a.effects,{version:"1.9.2",save:function(a,b){for(var c=0;b.length>c;c++)null!==b[c]&&a.data(d+b[c],a[0].style[b[c]])},restore:function(a,c){var e,f;for(f=0;c.length>f;f++)null!==c[f]&&(e=a.data(d+c[f]),e===b&&(e=""),a.css(c[f],e))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(g){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function b(b){function c(){a.isFunction(f)&&f.call(e[0]),a.isFunction(b)&&b()}var e=a(this),f=d.complete,g=d.mode;(e.is(":hidden")?"hide"===g:"show"===g)?c():h.call(e[0],d,c)}var d=e.apply(this,arguments),f=d.mode,g=d.queue,h=a.effects.effect[d.effect],i=!h&&c&&a.effects[d.effect];return a.fx.off||!h&&!i?f?this[f](d.duration,d.complete):this.each(function(){d.complete&&d.complete.call(this)}):h?g===!1?this.each(b):this.queue(g||"fx",b):i.call(this,{options:d,duration:d.duration,callback:d.complete,mode:d.mode})},_show:a.fn.show,show:function(a){if(f(a))return this._show.apply(this,arguments);var b=e.apply(this,arguments);return b.mode="show",this.effect.call(this,b)},_hide:a.fn.hide,hide:function(a){if(f(a))return this._hide.apply(this,arguments);var b=e.apply(this,arguments);return b.mode="hide",this.effect.call(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(f(b)||"boolean"==typeof b||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=e.apply(this,arguments);return c.mode="toggle",this.effect.call(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;((b=Math.pow(2,--c))-1)/11>a;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return.5>a?c(2*a)/2:1-c(-2*a+2)/2}})}()}(jQuery),/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2 (modified for fullpage.js ) (v 1.1)
 *
 */
function(a){jQuery.fn.extend({slimScroll:function(b){var c=a.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},b);return this.each(function(){function d(b){if(k){b=b||window.event;var d=0;b.wheelDelta&&(d=-b.wheelDelta/120),b.detail&&(d=b.detail/3),a(b.target||b.srcTarget||b.srcElement).closest("."+c.wrapperClass).is(u.parent())&&e(d,!0),b.preventDefault&&!s&&b.preventDefault(),s||(b.returnValue=!1)}}function e(a,b,d){s=!1;var e=a,f=u.outerHeight()-w.outerHeight();b&&(e=parseInt(w.css("top"))+a*parseInt(c.wheelStep)/100*w.outerHeight(),e=Math.min(Math.max(e,0),f),e=a>0?Math.ceil(e):Math.floor(e),w.css({top:e+"px"})),q=parseInt(w.css("top"))/(u.outerHeight()-w.outerHeight()),e=q*(u[0].scrollHeight-u.outerHeight()),d&&(e=a,a=e/u[0].scrollHeight*u.outerHeight(),a=Math.min(Math.max(a,0),f),w.css({top:a+"px"})),u.scrollTop(e),u.trigger("slimscrolling",~~e),i(),j()}function f(){window.addEventListener?(this.addEventListener("DOMMouseScroll",d,!1),this.addEventListener("mousewheel",d,!1)):document.attachEvent("onmousewheel",d)}function g(){window.removeEventListener?(this.removeEventListener("DOMMouseScroll",d),this.removeEventListener("mousewheel",d)):document.detachEvent("onmousewheel",d)}function h(){p=Math.max(u.outerHeight()/u[0].scrollHeight*u.outerHeight(),30),w.css({height:p+"px"});var a=p==u.outerHeight()?"none":"block";w.css({display:a})}function i(){h(),clearTimeout(n),q==~~q?(s=c.allowPageScroll,r!=q&&u.trigger("slimscroll",0==~~q?"top":"bottom")):s=!1,r=q,p>=u.outerHeight()?s=!0:(w.stop(!0,!0).fadeIn("fast"),c.railVisible&&x.stop(!0,!0).fadeIn("fast"))}function j(){c.alwaysVisible||(n=setTimeout(function(){c.disableFadeOut&&k||l||m||(w.fadeOut("slow"),x.fadeOut("slow"))},1e3))}var k,l,m,n,o,p,q,r,s=!1,u=a(this);if(u.parent().hasClass(c.wrapperClass)){var v=u.scrollTop(),w=u.parent().find("."+c.barClass),x=u.parent().find("."+c.railClass);if(h(),a.isPlainObject(b)){if("height"in b&&"auto"==b.height){u.parent().css("height","auto"),u.css("height","auto");var y=u.parent().parent().height();u.parent().css("height",y),u.css("height",y)}if("scrollTo"in b)v=parseInt(c.scrollTo);else if("scrollBy"in b)v+=parseInt(c.scrollBy);else if("destroy"in b)return g(),w.remove(),x.remove(),void u.unwrap();e(v,!1,!0)}}else{c.height="auto"==b.height?u.parent().height():b.height,v=a("<div></div>").addClass(c.wrapperClass).css({position:"relative",overflow:"hidden",width:c.width,height:c.height}),u.css({overflow:"hidden",width:c.width,height:c.height});var x=a("<div></div>").addClass(c.railClass).css({width:c.size,height:"100%",position:"absolute",top:0,display:c.alwaysVisible&&c.railVisible?"block":"none","border-radius":c.railBorderRadius,background:c.railColor,opacity:c.railOpacity,zIndex:90}),w=a("<div></div>").addClass(c.barClass).css({background:c.color,width:c.size,position:"absolute",top:0,opacity:c.opacity,display:c.alwaysVisible?"block":"none","border-radius":c.borderRadius,BorderRadius:c.borderRadius,MozBorderRadius:c.borderRadius,WebkitBorderRadius:c.borderRadius,zIndex:99}),y="right"==c.position?{right:c.distance}:{left:c.distance};x.css(y),w.css(y),u.wrap(v),u.parent().append(w),u.parent().append(x),c.railDraggable&&w.bind("mousedown",function(b){var c=a(document);return m=!0,t=parseFloat(w.css("top")),pageY=b.pageY,c.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY,w.css("top",currTop),e(0,w.position().top,!1)}),c.bind("mouseup.slimscroll",function(a){m=!1,j(),c.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(a){return a.stopPropagation(),a.preventDefault(),!1}),x.hover(function(){i()},function(){j()}),w.hover(function(){l=!0},function(){l=!1}),u.hover(function(){k=!0,i(),j()},function(){k=!1,j()}),u.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(o=a.originalEvent.touches[0].pageY)}),u.bind("touchmove",function(a){s||a.originalEvent.preventDefault(),a.originalEvent.touches.length&&(e((o-a.originalEvent.touches[0].pageY)/c.touchScrollStep,!0),o=a.originalEvent.touches[0].pageY)}),h(),"bottom"===c.start?(w.css({top:u.outerHeight()-w.outerHeight()}),e(0,!0)):"top"!==c.start&&(e(a(c.start).position().top,null,!0),c.alwaysVisible||w.hide()),f()}}),this}}),jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})}(jQuery),/*! Lazy Load XT v1.0.5 2014-06-05
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */
function(a,b,c,d){function e(a,b){return a[b]===d?t[b]:a[b]}function f(){var a=b.pageYOffset;return a===d?r.scrollTop:a}function g(a,b){var c=t["on"+a];c&&(w(c)?c.call(b[0]):(c.addClass&&b.addClass(c.addClass),c.removeClass&&b.removeClass(c.removeClass))),b.trigger("lazy"+a,[b]),k()}function h(b){g(b.type,a(this).off(p,h))}function i(c){if(A.length){c=c||t.forceLoad,B=1/0;var d,e,i=f(),j=b.innerHeight||r.clientHeight,k=b.innerWidth||r.clientWidth;for(d=0,e=A.length;e>d;d++){var l,m=A[d],o=m[0],q=m[n],s=!1,u=c;if(z(r,o)){if(c||!q.visibleOnly||o.offsetWidth||o.offsetHeight){if(!u){var v=o.getBoundingClientRect(),x=q.edgeX,y=q.edgeY;l=v.top+i-y-j,u=i>=l&&v.bottom>-y&&v.left<=k+x&&v.right>-x}if(u){g("show",m);var C=q.srcAttr,D=w(C)?C(m):o.getAttribute(C);D&&(m.on(p,h),o.src=D),s=!0}else B>l&&(B=l)}}else s=!0;s&&(A.splice(d--,1),e--)}e||g("complete",a(r))}}function j(){C>1?(C=1,i(),setTimeout(j,t.throttle)):C=0}function k(a){A.length&&(a&&"scroll"===a.type&&a.currentTarget===b&&B>=f()||(C||setTimeout(j,0),C=2))}function l(){v.lazyLoadXT()}function m(){i(!0)}var n="lazyLoadXT",o="lazied",p="load error",q="lazy-hidden",r=c.documentElement||c.body,s=b.onscroll===d||!!b.operamini||!r.getBoundingClientRect,t={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:s,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:q},onload:{removeClass:q,addClass:"lazy-loaded"},onerror:{removeClass:q},checkDuplicates:!0},u={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},v=a(b),w=a.isFunction,x=a.extend,y=a.data||function(b,c){return a(b).data(c)},z=a.contains||function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},A=[],B=0,C=0;a[n]=x(t,u,a[n]),a.fn[n]=function(c){c=c||{};var d,f=e(c,"blankImage"),h=e(c,"checkDuplicates"),i=e(c,"scrollContainer"),j={};a(i).on("scroll",k);for(d in u)j[d]=e(c,d);return this.each(function(d,e){if(e===b)a(t.selector).lazyLoadXT(c);else{if(h&&y(e,o))return;var i=a(e).data(o,1);f&&"IMG"===e.tagName&&!e.src&&(e.src=f),i[n]=x({},j),g("init",i),A.push(i)}})},a(c).ready(function(){g("start",v),v.on(t.loadEvent,l).on(t.updateEvent,k).on(t.forceEvent,m),a(c).on(t.updateEvent,k),t.autoInit&&l()})}(window.jQuery||window.Zepto||window.$,window,document),/*! Lazy Load XT v1.0.5 2014-06-05
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */
function(a,b,c,d){function e(a,b){return a[b]===d?t[b]:a[b]}function f(){var a=b.pageYOffset;return a===d?r.scrollTop:a}function g(a,b){var c=t["on"+a];c&&(w(c)?c.call(b[0]):(c.addClass&&b.addClass(c.addClass),c.removeClass&&b.removeClass(c.removeClass))),b.trigger("lazy"+a,[b]),k()}function h(b){g(b.type,a(this).off(p,h))}function i(c){if(A.length){c=c||t.forceLoad,B=1/0;var d,e,i=f(),j=b.innerHeight||r.clientHeight,k=b.innerWidth||r.clientWidth;for(d=0,e=A.length;e>d;d++){var l,m=A[d],o=m[0],q=m[n],s=!1,u=c;if(z(r,o)){if(c||!q.visibleOnly||o.offsetWidth||o.offsetHeight){if(!u){var v=o.getBoundingClientRect(),x=q.edgeX,y=q.edgeY;l=v.top+i-y-j,u=i>=l&&v.bottom>-y&&v.left<=k+x&&v.right>-x}if(u){g("show",m);var C=q.srcAttr,D=w(C)?C(m):o.getAttribute(C);D&&(m.on(p,h),o.src=D),s=!0}else B>l&&(B=l)}}else s=!0;s&&(A.splice(d--,1),e--)}e||g("complete",a(r))}}function j(){C>1?(C=1,i(),setTimeout(j,t.throttle)):C=0}function k(a){A.length&&(a&&"scroll"===a.type&&a.currentTarget===b&&B>=f()||(C||setTimeout(j,0),C=2))}function l(){v.lazyLoadXT()}function m(){i(!0)}var n="lazyLoadXT",o="lazied",p="load error",q="lazy-hidden",r=c.documentElement||c.body,s=b.onscroll===d||!!b.operamini||!r.getBoundingClientRect,t={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:s,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:q},onload:{removeClass:q,addClass:"lazy-loaded"},onerror:{removeClass:q},checkDuplicates:!0},u={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},v=a(b),w=a.isFunction,x=a.extend,y=a.data||function(b,c){return a(b).data(c)},z=a.contains||function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1},A=[],B=0,C=0;a[n]=x(t,u,a[n]),a.fn[n]=function(c){c=c||{};var d,f=e(c,"blankImage"),h=e(c,"checkDuplicates"),i=e(c,"scrollContainer"),j={};a(i).on("scroll",k);for(d in u)j[d]=e(c,d);return this.each(function(d,e){if(e===b)a(t.selector).lazyLoadXT(c);else{if(h&&y(e,o))return;var i=a(e).data(o,1);f&&"IMG"===e.tagName&&!e.src&&(e.src=f),i[n]=x({},j),g("init",i),A.push(i)}})},a(c).ready(function(){g("start",v),v.on(t.loadEvent,l).on(t.updateEvent,k).on(t.forceEvent,m),a(c).on(t.updateEvent,k),t.autoInit&&l()})}(window.jQuery||window.Zepto||window.$,window,document),function(a){var b=a.lazyLoadXT;b.selector+=",video,iframe[data-src]",b.videoPoster="data-poster",a(document).on("lazyshow","video",function(c,d){var e=d.lazyLoadXT.srcAttr,f=a.isFunction(e);d.attr("poster",d.attr(b.videoPoster)).children("source,track").each(function(b,c){var d=a(c);d.attr("src",f?e(d):d.attr(e))}),this.load()})}(window.jQuery||window.Zepto||window.$),/*!
 * parallax.js v1.3.1 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2015 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(a,b,c,d){function e(b,c){var f=this;"object"==typeof c&&(delete c.refresh,delete c.render,a.extend(this,c)),this.$element=a(b),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var g=(this.position+"").toLowerCase().match(/\S+/g)||[];return g.length<1&&g.push("center"),1==g.length&&g.push(g[0]),("top"==g[0]||"bottom"==g[0]||"left"==g[1]||"right"==g[1])&&(g=[g[1],g[0]]),this.positionX!=d&&(g[0]=this.positionX.toLowerCase()),this.positionY!=d&&(g[1]=this.positionY.toLowerCase()),f.positionX=g[0],f.positionY=g[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)?(this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):navigator.userAgent.match(/(Android)/)?(this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):(this.$mirror=a("<div />").prependTo("body"),this.$slider=a("<img />").prependTo(this.$mirror),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){f.naturalHeight&&f.naturalWidth||(f.naturalHeight=this.naturalHeight||this.height||1,f.naturalWidth=this.naturalWidth||this.width||1),f.aspectRatio=f.naturalWidth/f.naturalHeight,e.isSetup||e.setup(),e.sliders.push(f),e.isFresh=!1,e.requestRender()}),this.$slider[0].src=this.imageSrc,void((this.naturalHeight&&this.naturalWidth||this.$slider[0].complete)&&this.$slider.trigger("load")))}function f(d){return this.each(function(){var f=a(this),g="object"==typeof d&&d;this==b||this==c||f.is("body")?e.configure(g):f.data("px.parallax")||(g=a.extend({},f.data(),g),f.data("px.parallax",new e(this,g))),"string"==typeof d&&e[d]()})}!function(){for(var a=0,c=["ms","moz","webkit","o"],d=0;d<c.length&&!b.requestAnimationFrame;++d)b.requestAnimationFrame=b[c[d]+"RequestAnimationFrame"],b.cancelAnimationFrame=b[c[d]+"CancelAnimationFrame"]||b[c[d]+"CancelRequestAnimationFrame"];b.requestAnimationFrame||(b.requestAnimationFrame=function(c){var d=(new Date).getTime(),e=Math.max(0,16-(d-a)),f=b.setTimeout(function(){c(d+e)},e);return a=d+e,f}),b.cancelAnimationFrame||(b.cancelAnimationFrame=function(a){clearTimeout(a)})}(),a.extend(e.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var a=e.winHeight,b=e.docHeight,c=Math.min(this.boxOffsetTop,b-a),d=Math.max(this.boxOffsetTop+this.boxHeight-a,0),f=this.boxHeight+(c-d)*(1-this.speed)|0,g=(this.boxOffsetTop-c)*(1-this.speed)|0;if(f*this.aspectRatio>=this.boxWidth){this.imageWidth=f*this.aspectRatio|0,this.imageHeight=f,this.offsetBaseTop=g;var h=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-h:isNaN(this.positionX)?-h/2|0:Math.max(this.positionX,-h)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var h=this.imageHeight-f;this.offsetBaseTop="top"==this.positionY?g:"bottom"==this.positionY?g-h:isNaN(this.positionY)?g-h/2|0:g+Math.max(this.positionY,-h)}},render:function(){var a=e.scrollTop,b=e.scrollLeft,c=this.overScrollFix?e.overScroll:0,d=a+e.winHeight;this.visibility=this.boxOffsetBottom>a&&this.boxOffsetTop<d?"visible":"hidden",this.mirrorTop=this.boxOffsetTop-a,this.mirrorLeft=this.boxOffsetLeft-b,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed),this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-c,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),a.extend(e,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var d=a(c),f=a(b);f.on("resize.px.parallax load.px.parallax",function(){e.winHeight=f.height(),e.winWidth=f.width(),e.docHeight=d.height(),e.docWidth=d.width(),e.isFresh=!1,e.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){var a=e.docHeight-e.winHeight,b=e.docWidth-e.winWidth;e.scrollTop=Math.max(0,Math.min(a,f.scrollTop())),e.scrollLeft=Math.max(0,Math.min(b,f.scrollLeft())),e.overScroll=Math.max(f.scrollTop()-a,Math.min(f.scrollTop(),0)),e.requestRender()}),this.isReady=!0}},configure:function(b){"object"==typeof b&&(delete b.refresh,delete b.render,a.extend(this.prototype,b))},refresh:function(){a.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),a.each(this.sliders,function(){this.render()})},requestRender:function(){var a=this;this.isBusy||(this.isBusy=!0,b.requestAnimationFrame(function(){a.render(),a.isBusy=!1}))}});var g=a.fn.parallax;a.fn.parallax=f,a.fn.parallax.Constructor=e,a.fn.parallax.noConflict=function(){return a.fn.parallax=g,this},a(c).on("ready.px.parallax.data-api",function(){a('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),function(a){!function(){if(!a.requestAnimationFrame){if(a.webkitRequestAnimationFrame)return a.requestAnimationFrame=a.webkitRequestAnimationFrame,void(a.cancelAnimationFrame=a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame);var b=0;a.requestAnimationFrame=function(c){var d=(new Date).getTime(),e=Math.max(0,16-(d-b)),f=a.setTimeout(function(){c(d+e)},e);return b=d+e,f},a.cancelAnimationFrame=function(a){clearTimeout(a)}}}(),"function"==typeof define&&define(function(){return a.requestAnimationFrame})}(window),"undefined"==typeof jQuery)throw new Error("jQuery is required");+function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,c){var d=(new Date).getTime(),e=Math.max(0,16-(d-a)),f=window.setTimeout(function(){b(d+e)},e);return a=d+e,f}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}(window.jQuery),+function(a){"use strict";var b=navigator.userAgent||navigator.vendor||window.opera,c=/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(b);a(function(){a.support.mobile=c})}(window.jQuery),+function(a){"use strict";function b(){var a=document.createElement("telekomcomponents"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("tcTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.tcTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("tc.radio"),f="object"==typeof b&&b;e||c.data("tc.radio",e=new d(this,f)),"string"==typeof b&&e[b]()})}var c=".form-radio-set",d=function(a,b){this.options=this.$element=null,this.init(a,b)};d.DEFAULTS={template:'<div tabindex="-1" class="form-radio-js" role="radio" autocomplete="off" hidefocus="true">&nbsp;<span class="border"></span><span class="check"></span></div>'},d.prototype.init=function(b,d){var e=this.$element=a(b);this.options=this.getOptions(d);var f=this.radio(),g=e.attr("name");if(e.before(f),e.addClass("hidden"),e.on("change.tc.radio",function(b){g&&a('input[name="'+g+'"]:radio:enabled').not(e).trigger("deselect.tc.radio"),f.addClass("checked").attr("aria-checked","true").attr("tabindex","0")}),e.on("deselect.tc.radio",function(a){f.removeClass("checked").attr("aria-checked","false").attr("tabindex","-1")}),f.parents(c).on("click.tc.radio",function(b){f.is(".disabled, :disabled")||a(b.target).hasClass("form-radio hidden")||e.trigger("click")}),f.on("keyup.tc.radio",function(a){f.is(":focus")&&f.addClass("focus")}),f.on("keydown.tc.radio",function(b){if(!g)return!0;if(b.altkey)return!0;var c=a('input[name="'+g+'"]:radio:enabled').index(e);switch(b.keyCode){case 37:case 38:return b.shiftKey?!0:(a('input[name="'+g+'"]:radio:enabled:eq('+(c-1)+")").trigger("click").prev().focus(),b.preventDefault(),b.stopPropagation(),!1);case 39:case 40:return b.shiftKey?!0:(a('input[name="'+g+'"]:radio:enabled:eq('+(c+1)+")").trigger("click").prev().focus(),b.preventDefault(),b.stopPropagation(),!1)}return!0}),f.on("keypress.tc.radio",function(a){return a.altkey?!0:37===a.keyCode||38===a.keyCode||39===a.keyCode||40===a.keyCode?(a.stopPropagation(),!1):!0}),f.on("blur.tc.radio",function(a){f.removeClass("focus")}),e.is(":checked")&&f.addClass("checked").attr("aria-checked","true").attr("tabindex","0"),(e.is(":disabled")||e.parents("fieldset").is(":disabled"))&&this.disable(),g){var h=a('input[name="'+g+'"]:radio:enabled'),i=h.filter(":checked");i.length<1&&(i=h.first()),h.each(function(b,c){var d=a(c),e=d.data("tc.radio");if(e){var f=e.radio();f.attr("tabindex",i[0]==c?"0":"-1")}})}},d.prototype.disable=function(){var a=this.$element,b=this.radio();b.attr("aria-disabled",!0).addClass("disabled"),a.parents(c).addClass("disabled")},d.prototype.enable=function(){var a=this.$element,b=this.radio();b.attr("aria-disabled",!1).removeClass("disabled"),a.parents(c).removeClass("disabled")},d.prototype.getDefaults=function(){return d.DEFAULTS},d.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b)},d.prototype.radio=function(){return this.$radio=this.$radio||a(this.options.template)};var e=a.fn.radio;a.fn.radio=b,a.fn.radio.Constructor=d,a.fn.radio.noConflict=function(){return a.fn.radio=e,this}}(window.jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("tc.checkbox"),f="object"==typeof b&&b;e||c.data("tc.checkbox",e=new d(this,f)),"string"==typeof b&&e[b]()})}var c=".form-checkbox-set",d=function(a,b){this.options=this.$element=null,this.init(a,b)};d.DEFAULTS={template:'<div tabindex="0" role="checkbox" class="form-checkbox-js" autocomplete="off" hidefocus="true">&nbsp;<span class="border"></span><span class="check" role="presentation"></span></div>'},d.prototype.init=function(b,d){var e=this.$element=a(b);this.options=this.getOptions(d);var f=this.checkbox();e.before(f),e.addClass("hidden"),e.on("change.tc.checkbox",function(a){e.is(":checked")?f.addClass("checked").attr("aria-checked","true"):f.removeClass("checked").attr("aria-checked","false")}),f.parents(c).on("click.tc.checkbox",function(b){return a(b.target).is("label")||f[0]===a(b.target).closest(".form-checkbox-js")[0]?(e.trigger("click"),!1):!f.is(".disabled, :disabled")}),f.on("keyup.tc.checkbox",function(a){f.is(":focus")&&f.addClass("focus")}),f.on("keydown.tc.checkbox",function(a){return a.altkey||a.ctrlKey||a.shiftKey?!0:32==a.which?(f.trigger("click"),a.stopPropagation(),!1):!0}),f.on("keypress.tc.checkbox",function(a){return a.altkey||a.ctrlKey||a.shiftKey?!0:32==a.which?(a.stopPropagation(),!1):!0}),f.on("blur.tc.checkbox",function(a){f.removeClass("focus")}),e.is(":checked")&&f.addClass("checked").attr("aria-checked","true"),e.attr("tabindex")&&f.attr("tabindex",e.attr("tabindex")),(e.is(":disabled")||e.parents("fieldset").is(":disabled"))&&this.disable()},d.prototype.disable=function(){var a=this.$element,b=this.checkbox();b.attr("aria-disabled",!0).attr("tabindex","-1").addClass("disabled"),a.parents(c).addClass("disabled")},d.prototype.enable=function(){var a=this.$element,b=this.checkbox(),d="0";a.attr("tabindex")&&(d=a.attr("tabindex")),b.attr("aria-disabled",!1).attr("tabindex",d).removeClass("disabled"),a.parents(c).removeClass("disabled")},d.prototype.getDefaults=function(){return d.DEFAULTS},d.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b)},d.prototype.checkbox=function(){return this.$checkbox=this.$checkbox||a(this.options.template)};var e=a.fn.checkbox;a.fn.checkbox=b,a.fn.checkbox.Constructor=d,a.fn.checkbox.noConflict=function(){return a.fn.checkbox=e,this}}(window.jQuery),+function(a,b){"use strict";function c(b){return this.each(function(){var c=a(this),d=c.data("tc.selectbox"),f="object"==typeof b&&b;d||c.data("tc.selectbox",d=new e(this,f)),"string"==typeof b&&d[b]()})}var d=".form-radio-set",e=function(a,b){this.options=this.$element=null,this.init(a,b)};e.DEFAULTS={template:'<div class="form-select-js" tabindex="-1"><input type="hidden" class="form-select-js-choice-input" /><button type="button" class="form-select-js-choice" aria-haspopup="listbox" tabindex="0" aria-expanded="false"></button><div class="form-select-js-option-scroll-wrapper" tabindex="-1"><ul class="form-select-js-options" role="listbox"></ul></div></div>',optionTemplate:"<li></li>",idPrefix:"select-",maxItems:25,appendToBody:!0},e.prototype.init=function(c,d){var e=this.$element=a(c);this.options=this.getOptions(d);var f=this.select(),g=this.scrollwrapper(),h=this.textinput(),i=this.choice(),j=a(document),k=this;if(e.is("select")&&!(e.is("[multiple]")||e.is("[size]")&&parseInt(e.attr("size"))>1)){if(this.setIds(),this.createOptions(),e.before(f),this.sync(),e.on("change",a.proxy(function(a){this.sync()},this)),e.is(":disabled")&&(f.attr("aria-disabled",!0),h.prop("disabled",!0)),a.support.mobile)return this.applyNativeBehaviour();e.addClass("hidden");var l=e.attr("id");if(l){var m=a('[for="'+l+'"]');m&&(m.attr("id")||m.attr("id",this.getId()+"-label"),h.attr("aria-labelledby",m.attr("id")))}var n=function(b){var c=a(b.target).parents(".form-select-js"),d=a(b.target).parents(".form-select-js-option-scroll-wrapper");if(c[0]!==f[0]&&d[0]!==g[0])return k.hide(!1);var e=a(b.target).parent();if(e.hasClass("form-select-js-options")){var h=e.parent(),i=h.scrollTop(),j=b.originalEvent.wheelDelta?-1*b.originalEvent.wheelDelta:b.originalEvent.delta,l=(b.originalEvent.deltaY||-1*b.originalEvent.wheelDelta)>0?1:-1,m=e.height()-h.height();if(j){var n=Math.max(0,Math.min(i+j,m));h.scrollTop(n),b.stopImmediatePropagation(),b.preventDefault()}(0>=i&&-1===l||i>=m&&1===l)&&(b.stopImmediatePropagation(),b.preventDefault())}};j.on("click touchstart mousewheel wheel scroll",n),i.parents().on("mousewheel wheel scroll",n),a(b).on("resize mousewheel wheel scroll",n),i.on("click",a.proxy(this.toggle,this))}},e.prototype.setIds=function(){var a=this.getId();this.select().attr("id",a),this.optionlist().attr("id",a+"-list"),this.textinput().attr("aria-owns",a+"-list").attr("aria-labelledby",a+"-label")},e.prototype.applyNativeBehaviour=function(){var b=this.select(),c=this.choice(),d=b.position(),e={width:b.width(),height:b.height()};c.on("click",a.proxy(this.openNative,this)),this.$element.css({display:"block",visibility:"visible",position:"absolute",top:d.top,left:d.left,width:e.width,height:e.height,opacity:0,"z-index":99999,"-webkit-appearance":"menulist-button"})},e.prototype.openNative=function(){var a=this.$element;if(document.createEvent){var c=document.createEvent("MouseEvents");c.initMouseEvent("mousedown",!0,!0,b,0,0,0,0,0,!1,!1,!1,!1,0,null),a[0].dispatchEvent(c)}else a[0].fireEvent&&a[0].fireEvent("onmousedown")},e.prototype.sync=function(){var a=this.choice(),b=this.optionlist();a.text(this.$element.find("option:selected").text());var c=b.find(".selected").attr("id");b.attr("aria-activedescendant",c)},e.prototype.hoverOption=function(a){"true"!==a.attr("aria-disabled")&&(a.siblings().removeClass("hover"),a.addClass("hover"))},e.prototype.selectOption=function(a){"true"!==a.attr("aria-disabled")&&(a.siblings().removeClass("selected"),a.addClass("selected"))},e.suppressMouseInteractionAfterViewUpdate=!1,e.prototype.setSelectedOption=function(a,b){var c=this.$element,d=this.optionlist(),f=d.children(),g=f.filter(".selected");(a!==g||b)&&(this.hoverOption(a),this.selectOption(a),c[0].selectedIndex=f.index(a),c.trigger("change"),this.updateScrollView(),e.suppressMouseInteractionAfterViewUpdate=!0)},e.prototype.hasOriginalOptions=function(){return this.getOriginalOptions().length>0},e.prototype.getOriginalOptions=function(){return this.$element.children()},e.prototype.createOptions=function(){var b=this,c=this.optionlist(),d=this.getOriginalOptions(),f=(this.textinput(),this.getId()),g=0;c.empty(),d.each(function(){var d=a(this),e=[],h=d.is(":disabled");d.is(":selected")&&e.push("selected"),c.append(a(b.options.optionTemplate,{html:d.html(),"data-value":d.val(),"class":e.join(" "),role:"option",tabindex:"-1",id:f+"-option-"+ ++g,"aria-disabled":h}))});var h=c.find(".selected").attr("id");c.attr("aria-activedescendant",h),c.children().on("mouseenter.tc.selectbox.option.data-api",a.proxy(function(b){return b.preventDefault(),e.suppressMouseInteractionAfterViewUpdate?e.suppressMouseInteractionAfterViewUpdate=!1:void this.hoverOption(a(b.currentTarget))},this)).on("click.tc.selectbox.option.data-api",a.proxy(function(b){b.preventDefault(),a(b.currentTarget).is('[aria-disabled="true"]')||(this.setSelectedOption(a(b.currentTarget),!0),this.hide())},this))},e.prototype.getVisibleItemsNum=function(){var c=this.select(),d=this.scrollwrapper(),e=this.measureRowHeight(),f=Math.min(this.options.maxItems,d.find("li").length),g=Math.min(.5*(a(b).height()-c.outerHeight()),f*e),h=Math.floor(g/e);return Math.max(1,h)},e.prototype.measureRowHeight=function(){var a=this.scrollwrapper();return a.find("li:first").outerHeight()},e.prototype.measureScrollwrapperDimensions=function(){var a=this.choice(),b=this.optionlist(),c=this.measureRowHeight(),d=Math.max(c,Math.min(b.height(),this.getVisibleItemsNum()*c)),e=b.parent();return{"min-width":a.outerWidth(),height:d+Number(e.css("border-top-width").replace(/px/,""))+Number(e.css("border-bottom-width").replace(/px/,""))}},e.prototype.getCalculatedScrollwrapperOffset=function(){var c=this.choice(),d=this.measureScrollwrapperDimensions(),e={left:c.offset().left};return c.offset().top+c.outerHeight()-a(b).scrollTop()+d.height>a(b).height()?e.top=c.offset().top-a(b).scrollTop()-d.height-(c.outerHeight()-c.height()):e.top=c.offset().top+c.outerHeight()-a(b).scrollTop(),e},e.prototype.show=function(){var b=this.select(),c=this.scrollwrapper(),d=this.optionlist(),e=this.choice();if(!this.isDisabled()&&this.hasOriginalOptions()){this.createOptions(),b.addClass("in"),d.attr("aria-expanded","true"),e.attr("aria-expanded","true");var f=this.measureScrollwrapperDimensions(),g=this.getCalculatedScrollwrapperOffset();this.options.appendToBody&&a("body").append(c),c.css(f).css(g).css("display","block"),this.updateScrollView()}},e.prototype.isOpened=function(){return this.select().hasClass("in")},e.prototype.hide=function(a){var b=this.select(),c=this.scrollwrapper(),d=this.choice();if(!this.isDisabled()){b.hasClass("in")&&b.removeClass("in"),c.css("display",""),this.options.appendToBody&&b.append(c);var e=this.optionlist();e.attr("aria-expanded","false"),d.attr("aria-expanded","false")}},e.prototype.isDisabled=function(){return"true"===this.select().attr("aria-disabled")},e.prototype.disable=function(){var a=this.$element,b=this.select(),c=this.choice();a.attr("aria-disabled",!0),b.attr("aria-disabled",!0),c.addClass("disabled"),a.parents(d).addClass("disabled")},e.prototype.enable=function(){var a=this.$element,b=this.select(),c=this.choice();a.attr("aria-disabled",!1),b.attr("aria-disabled",!1),c.removeClass("disabled"),a.parents(d).removeClass("disabled")},e.prototype.toggle=function(){this.isDisabled()||(this.isOpened()?this.hide():this.show())},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b)},e.instanceCounter=0,e.prototype.getId=function(){return this.id=this.id||this.options.idPrefix+ ++e.instanceCounter},e.prototype.scrollwrapper=function(){return this.$scrollwrapper=this.$scrollwrapper||this.select().find(".form-select-js-option-scroll-wrapper")},e.prototype.optionlist=function(){return this.$optionlist=this.$optionlist||this.select().find(".form-select-js-options")},e.prototype.choice=function(){return this.$choice=this.$choice||this.select().find(".form-select-js-choice")},e.prototype.textinput=function(){return this.$textinput=this.$textinput||this.select().find(".form-select-js-choice-input")},e.prototype.select=function(){return this.$select=this.$select||a(this.options.template)},e.prototype.keyboardHandler=function(b){var c=a(this),d=c.next(),f=d.data("tc.selectbox"),g=f.textinput(),h=f.scrollwrapper(),i=c.hasClass("in"),j=[13,27,33,34,35,36,37,38,39,40];if(9===b.keyCode)return f.hide();if(!f.isDisabled()){if(b.keyCode<32&&g.val(""),32===b.keyCode&&""===g.val())return b.preventDefault(),b.stopPropagation(),f.toggle();if(new RegExp("^("+j.join("|")+")$").test(b.keyCode)){if(b.preventDefault(),b.stopPropagation(),e.suppressMouseInteractionAfterViewUpdate=!0,13===b.keyCode||b.altKey&&(38===b.keyCode||40===b.keyCode))return f.toggle();if(27===b.keyCode)return f.hide();var k='li:not([aria-disabled="true"])',l=h.find(k);if(l.length){var m=l.index(l.filter(".selected"));if(-1===m){for(var n=h.find("li"),o=n.index(n.filter(".selected"));-1===m&&--o>=0;)m=l.index(n.eq(o));if(-1===m){o=n.index(n.filter(".selected"));for(var p=n.length;-1===m&&++o<p;)m=l.index(n.eq(o));m-=.5}else m+=.5}if(33===b.keyCode||34===b.keyCode)if(f.isOpened()){for(var q=h.scrollTop(),r=q+h.height(),s=f.getVisibleItemsNum(),t=0;t<l.length&&q>l[t].offsetTop;)t++;for(var u=t;u<l.length&&l[u].offsetTop+l[u].offsetHeight<r;)u++;m=33===b.keyCode?Math.ceil(m!==t?t:m-s):m!==u?u:m+s}else m+=3*(33===b.keyCode?-1:1);var v=m;38===b.keyCode&&(m-=1),40===b.keyCode&&(m+=1),37!==b.keyCode||i||(m-=1),39!==b.keyCode||i||(m+=1),36===b.keyCode&&(m=0),35===b.keyCode&&(m=l.length-1),m=Math.max(0,Math.min(m,l.length-1)),~m||(m=0),m%1&&(m>v&&--m,m=Math.round(m)),f.setSelectedOption(l.eq(m))}}}},e.prototype.textInputChangeHandler=function(b){var c=a(this),d=c.next(),e=d.data("tc.selectbox"),f=e.textinput();clearTimeout(a.data(this,"tiClearTimer")),a.data(this,"tiClearTimer",setTimeout(function(){this.previousSearchText="",f.val("")},1e3));var g=String.fromCharCode(b.keyCode),h=(f.val().toString()+(g!==this.previousSearchText?g:"")).toLowerCase();if(""!==h){var i='li:not([aria-disabled="true"])',j=c.find(i);if(j.length){var k=j.index(j.filter(".selected")),l=-1;return h.length>1&&(l=e.findNextOptionByText(j,h,k-1)),-1!==l?e.setSelectedOption(j.eq(l)):g&&""!==g&&(l=e.findNextOptionByText(j,g,k),-1!==l)?e.setSelectedOption(j.eq(l)):void(this.previousSearchText=h)}}},e.prototype.findNextOptionByText=function(b,c,d){var e=c.toLowerCase();if(""===e)return-1;var f=-1,g=-1;return b.each(function(b){return 0===a(this).text().toLowerCase().indexOf(e)&&(-1===f&&(f=b),-1===g&&b>d)?g=b:void 0}),Math.max(f,g)},e.prototype.focusHandler=function(b){var c=a(this).parent();"focusin"===b.type?c.addClass("focus"):c.removeClass("focus")},e.prototype.updateScrollView=function(){var a=this.optionlist(),b=a.find(".selected");if(b[0]){var c=this.scrollwrapper(),d=c.scrollTop(),e=this.measureScrollwrapperDimensions(),f=b[0].offsetTop,g=b[0].offsetHeight;d>f?c.scrollTop(f):d+e.height<f+g&&c.scrollTop(f+g-e.height)}};var f=a.fn.selectbox;a.fn.selectbox=c,a.fn.selectbox.Constructor=e,a.fn.selectbox.noConflict=function(){return a.fn.selectbox=f,this},a(document).on("keydown.tc.selectbox.data-api",".form-select-js",e.prototype.keyboardHandler).on("keypress.tc.selectbox.data-api",".form-select-js",e.prototype.textInputChangeHandler).on("focusin.tc.selectbox.data-api",".form-select-js-choice-input",e.prototype.focusHandler).on("focusout.tc.selectbox.data-api",".form-select-js-choice-input",e.prototype.focusHandler)}(window.jQuery,window),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("tc.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);if(void 0===e.attr("tabindex")&&e.attr("tabindex",-1),!f&&g.template&&0===e.find(".modal-content").length){var h=e.html();e.html(g.template).find(".modal-content").append(h)}f||e.data("tc.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.tc.modal")},this))};c.VERSION="1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0,template:'<div class="modal-dialog"><div class="modal-content"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">x</span><span class="sr-only">Close</span></button></div></div>'},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.tc.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.tc.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.tc.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("tcTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.tc.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.tc.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.tc.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("tcTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.tc.modal").on("focusin.tc.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.tc.modal",a.proxy(function(b){8==b.which&&"TEXTAREA"!=a(b.target||b.srcElement).prop("tagName")&&"INPUT"!=a(b.target||b.srcElement).prop("tagName")&&(b.preventDefault(),b.stopImmediatePropagation()),27==b.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.tc.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.tc.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.tc.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.tc.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.tc.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("tcTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("tcTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.tc.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("tc.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.tc.modal",function(a){a.isDefaultPrevented()||f.one("hidden.tc.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("tc.notification");e||c.data("tc.notification",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="notification"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="1.0.0",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.tc.notification").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".notification")),g.trigger(b=a.Event("close.tc.notification")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("tcTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.notification;a.fn.notification=b,a.fn.notification.Constructor=d,a.fn.notification.noConflict=function(){return a.fn.notification=e,
this},a(document).on("click.tc.notification.data-api",c,d.prototype.close)}(window.jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("tc.brandnavhead");e||d.data("tc.brandnavhead",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("show.tc.brandnav",a.proxy(this.update,this)).on("hide.tc.brandnav",a.proxy(this.update,this)),this.$element=a(b),this.$label=this.$element.find(".brandnav-label"),this.$controlUp=this.$element.find(".brandnav-control-up"),this.storeLabel()};c.VERSION="1.0.0",c.TRANSITION_DURATION=300,c.DEFAULTS={target:window},c.prototype.storeLabel=function(a){this.$label.data("root-label",this.$label.text())},c.prototype.update=function(a){this.updateLabel(a),this.updateControls(a)},c.prototype.updateLabel=function(a){var b=a.target.siblings('[data-open="brandnav"]').text();this.$label.text(b||this.$label.data("root-label"))},c.prototype.updateControls=function(a){this.$controlUp.toggleClass("in",!!a.target.parents(".brandnav").length)};var d=a.fn.brandnavhead;a.fn.brandnavhead=b,a.fn.brandnavhead.Constructor=c,a.fn.brandnavhead.noConflict=function(){return a.fn.brandnavhead=d,this},a(document).on("click.tc.brandnavhead.data-api",'[data-spy="brandnav"]',function(a){a.preventDefault()}),a(window).on("load.tc.brandnavhead.data-api",function(){a('[data-spy="brandnav"]').each(function(){var c=a(this);b.call(c,c.data())})})}(window.jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.siblings(".brandnav")}function c(a){return a.closest(".brandnav-lvl-1").last()}function d(a){return a.find(".active > .brandnav").last()}function e(b){return this.each(function(){var c=a(this),d=c.data("tc.brandnav");d||c.data("tc.brandnav",d=new j(this)),"string"==typeof b&&d[b]()})}function f(d){d&&3===d.which||a(g).each(function(){var e=a(this),f=b(e),g=c(f),h=g.parent();h.hasClass("active")&&(d&&"click"==d.type&&a.contains(g[0],d.target)||d.isDefaultPrevented()||h.find(".brandnav").each(function(){var b=a(this);b.removeClass("has-active"),b.parent().removeClass("active")}))})}var g='[data-open="brandnav"]',h='[data-close="brandnav"]',i='[data-cancel="brandnav"]',j=function(b){this.$element=a(b),this.$parent=this.$element.parent(),this.$parentnav=this.$element.parents(".brandnav").first(),this.$main=c(this.$element),this.$body=a("body")};j.VERSION="1.0.0",j.TRANSITION_DURATION=300,j.prototype.show=function(){var b=this,c=a.Event("show.tc.brandnav",{target:this.$element,relatedTarget:this.$parentnav});if(this.$main.trigger(c),!c.isDefaultPrevented()){this.$body.css("overflow-x","hidden"),this.$parent.siblings().removeClass("active"),this.$parent.addClass("active"),this.$parentnav.addClass("has-active"),this.$element.parents(".brandnav").each(function(){a(this).parent().addClass("active")});var d=a.Event("shown.tc.brandnav",{target:this.$element,relatedTarget:this.$parentnav});a.support.transition?this.$parentnav.one("tcTransitionEnd",function(){setTimeout(function(){b.$main.trigger(d),b.$body.css("overflow-x","")})}).emulateTransitionEnd(j.TRANSITION_DURATION):b.$body.css("overflow-x","")}},j.prototype.hide=function(){var b=this,c=a.Event("hide.tc.brandnav",{target:this.$parentnav,relatedTarget:this.$element});if(this.$main.trigger(c),!c.isDefaultPrevented()){this.$body.css("overflow-x","hidden"),this.$parentnav.removeClass("has-active");var d=a.Event("hidden.tc.brandnav",{target:this.$parentnav,relatedTarget:this.$element});a.support.transition?this.$parentnav.one("tcTransitionEnd",function(){b.$parent.removeClass("active"),b.$body.css("overflow-x",""),setTimeout(function(){b.$main.trigger(d)})}).emulateTransitionEnd(j.TRANSITION_DURATION):(this.$parent.removeClass("active"),b.$body.css("overflow-x",""))}};var k=a.fn.brandnav;a.fn.brandnav=e,a.fn.brandnav.Constructor=j,a.fn.brandnav.noConflict=function(){return a.fn.brandnav=k,this};var l=function(c){c.preventDefault();var f=b(a(this)),g=d(f);e.call(g,"hide")},m=function(c){c.preventDefault();var d=b(a(this));e.call(d,"show")};a(document).on("click.tc.brandnav.data-api",f).on("click.tc.brandnav.data-api",g,m).on("click.tc.brandnav.data-api",h,l).on("click.tc.brandnav.data-api",i,f)}(window.jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("tc.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("tc.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("tc.collapse"),b&&b.transitioning))){var f=a.Event("show.tc.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("tc.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.tc.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("tcTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.tc.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.tc.collapse")};return a.support.transition?void this.$element[c](0).one("tcTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.tc.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("tc.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("tc.search"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("tc.search",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="search"][href="#'+b.id+'"],[data-toggle="search"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.toggle&&this.toggle()};d.DEFAULTS={toggle:!0,keyboard:!0,onBlur:!1},d.TRANSITION_DURATION=250,d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.tc.search");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.$element.removeClass("search").attr("aria-expanded",!0),this.$trigger.attr("aria-expanded",!0).blur(),this.transitioning=1;var c=function(){this.$element.addClass("search in"),this.transitioning=0,this.enforceFocus(),this.escape(),this.$element.trigger("shown.tc.search"),"dismiss"===this.options.onBlur&&this.$element.on("blur.dismiss.tc.search","input",a.proxy(this.hide,this))};return a.support.transition?void this.$element.one("tcTransitionEnd",a.proxy(c,this)).emulateTransitionEnd(d.TRANSITION_DURATION):c.call(this)}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.tc.search");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.$element.removeClass("search in").attr("aria-expanded",!1),this.$trigger.attr("aria-expanded",!1),this.transitioning=1;var c=function(){this.transitioning=0,this.$element.addClass("search").trigger("hidden.tc.search"),this.$element.off("blur.dismiss.tc.search","input")};return a.support.transition?void this.$element.one("tcTransitionEnd",a.proxy(c,this)).emulateTransitionEnd(d.TRANSITION_DURATION):c.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.enforceFocus=function(){this.$element.find("input").trigger("focus")},d.prototype.escape=function(){this.$element.hasClass("in")&&this.options.keyboard?this.$element.on("keydown.dismiss.tc.search",a.proxy(function(a){27==a.which&&this.hide()},this)):this.$element.hasClass("in")||this.$element.off("keydown.dismiss.tc.search")};var e=a.fn.search;a.fn.search=c,a.fn.search.Constructor=d,a.fn.search.noConflict=function(){return a.fn.search=e,this},a(document).on("click.tc.search.data-api",'[data-toggle="search"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("tc.search"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),function(a,b,c){!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.qtip&&a(jQuery)}(function(d){"use strict";function e(a,b,c,e){this.id=c,this.target=a,this.tooltip=D,this.elements={target:a},this._id=P+"-"+c,this.timers={img:{}},this.options=b,this.plugins={},this.cache={event:{},target:d(),disabled:C,attr:e,onTooltip:C,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=C}function f(a){return a===D||"object"!==d.type(a)}function g(a){return!(d.isFunction(a)||a&&a.attr||a.length||"object"===d.type(a)&&(a.jquery||a.then))}function h(a){var b,c,e,h;return f(a)?C:(f(a.metadata)&&(a.metadata={type:a.metadata}),"content"in a&&(b=a.content,f(b)||b.jquery||b.done?b=a.content={text:c=g(b)?C:b}:c=b.text,"ajax"in b&&(e=b.ajax,h=e&&e.once!==C,delete b.ajax,b.text=function(a,b){var f=c||d(this).attr(b.options.content.attr)||"Loading...",g=d.ajax(d.extend({},e,{context:b})).then(e.success,D,e.error).then(function(a){return a&&h&&b.set("content.text",a),a},function(a,c,d){b.destroyed||0===a.status||b.set("content.text",c+": "+d)});return h?f:(b.set("content.text",f),g)}),"title"in b&&(d.isPlainObject(b.title)&&(b.button=b.title.button,b.title=b.title.text),g(b.title||C)&&(b.title=C))),"position"in a&&f(a.position)&&(a.position={my:a.position,at:a.position}),"show"in a&&f(a.show)&&(a.show=a.show.jquery?{target:a.show}:a.show===B?{ready:B}:{event:a.show}),"hide"in a&&f(a.hide)&&(a.hide=a.hide.jquery?{target:a.hide}:{event:a.hide}),"style"in a&&f(a.style)&&(a.style={classes:a.style}),d.each(O,function(){this.sanitize&&this.sanitize(a)}),a)}function i(a,b){for(var c,d=0,e=a,f=b.split(".");e=e[f[d++]];)d<f.length&&(c=e);return[c||a,f.pop()]}function j(a,b){var c,d,e;for(c in this.checks)for(d in this.checks[c])(e=new RegExp(d,"i").exec(a))&&(b.push(e),("builtin"===c||this.plugins[c])&&this.checks[c][d].apply(this.plugins[c]||this,b))}function k(a){return S.concat("").join(a?"-"+a+" ":" ")}function l(a,b){return b>0?setTimeout(d.proxy(a,this),b):void a.call(this)}function m(a){this.tooltip.hasClass(Z)||(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=l.call(this,function(){this.toggle(B,a)},this.options.show.delay))}function n(a){if(!this.tooltip.hasClass(Z)&&!this.destroyed){var b=d(a.relatedTarget),c=b.closest(T)[0]===this.tooltip[0],e=b[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==b[0]&&"mouse"===this.options.position.target&&c||this.options.hide.fixed&&/mouse(out|leave|move)/.test(a.type)&&(c||e))try{a.preventDefault(),a.stopImmediatePropagation()}catch(f){}else this.timers.hide=l.call(this,function(){this.toggle(C,a)},this.options.hide.delay,this)}}function o(a){!this.tooltip.hasClass(Z)&&this.options.hide.inactive&&(clearTimeout(this.timers.inactive),this.timers.inactive=l.call(this,function(){this.hide(a)},this.options.hide.inactive))}function p(a){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(a)}function q(a,c,e){d(b.body).delegate(a,(c.split?c:c.join("."+P+" "))+"."+P,function(){var a=w.api[d.attr(this,R)];a&&!a.disabled&&e.apply(a,arguments)})}function r(a,c,f){var g,i,j,k,l,m=d(b.body),n=a[0]===b?m:a,o=a.metadata?a.metadata(f.metadata):D,p="html5"===f.metadata.type&&o?o[f.metadata.name]:D,q=a.data(f.metadata.name||"qtipopts");try{q="string"==typeof q?d.parseJSON(q):q}catch(r){}if(k=d.extend(B,{},w.defaults,f,"object"==typeof q?h(q):D,h(p||o)),i=k.position,k.id=c,"boolean"==typeof k.content.text){if(j=a.attr(k.content.attr),k.content.attr===C||!j)return C;k.content.text=j}if(i.container.length||(i.container=m),i.target===C&&(i.target=n),k.show.target===C&&(k.show.target=n),k.show.solo===B&&(k.show.solo=i.container.closest("body")),k.hide.target===C&&(k.hide.target=n),k.position.viewport===B&&(k.position.viewport=i.container),i.container=i.container.eq(0),i.at=new y(i.at,B),i.my=new y(i.my),a.data(P))if(k.overwrite)a.qtip("destroy",!0);else if(k.overwrite===C)return C;return a.attr(Q,c),k.suppress&&(l=a.attr("title"))&&a.removeAttr("title").attr(_,l).attr("title",""),g=new e(a,k,c,!!j),a.data(P,g),g}function s(a){return a.charAt(0).toUpperCase()+a.slice(1)}function t(a,b){var d,e,f=b.charAt(0).toUpperCase()+b.slice(1),g=(b+" "+oa.join(f+" ")+f).split(" "),h=0;if(na[b])return a.css(na[b]);for(;d=g[h++];)if((e=a.css(d))!==c)return na[b]=d,e}function u(a,b){return Math.ceil(parseFloat(t(a,b)))}function v(a,b){this._ns="tip",this.options=b,this.offset=b.offset,this.size=[b.width,b.height],this.init(this.qtip=a)}var w,x,y,z,A,B=!0,C=!1,D=null,E="x",F="y",G="width",H="height",I="top",J="left",K="bottom",L="right",M="center",N="shift",O={},P="qtip",Q="data-hasqtip",R="data-qtip-id",S=["ui-widget","ui-tooltip"],T="."+P,U="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),V=P+"-fixed",W=P+"-default",X=P+"-focus",Y=P+"-hover",Z=P+"-disabled",$="_replacedByqTip",_="oldtitle",aa={ie:function(){for(var a=4,c=b.createElement("div");(c.innerHTML="<!--[if gt IE "+a+"]><i></i><![endif]-->")&&c.getElementsByTagName("i")[0];a+=1);return a>4?a:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||C};x=e.prototype,x._when=function(a){return d.when.apply(d,a)},x.render=function(a){if(this.rendered||this.destroyed)return this;var b,c=this,e=this.options,f=this.cache,g=this.elements,h=e.content.text,i=e.content.title,j=e.content.button,k=e.position,l=("."+this._id+" ",[]);return d.attr(this.target[0],"aria-describedby",this._id),f.posClass=this._createPosClass((this.position={my:k.my,at:k.at}).my),this.tooltip=g.tooltip=b=d("<div/>",{id:this._id,"class":[P,W,e.style.classes,f.posClass].join(" "),width:e.style.width||"",height:e.style.height||"",tracking:"mouse"===k.target&&k.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":C,"aria-describedby":this._id+"-content","aria-hidden":B}).toggleClass(Z,this.disabled).attr(R,this.id).data(P,this).appendTo(k.container).append(g.content=d("<div />",{"class":P+"-content",id:this._id+"-content","aria-atomic":B})),this.rendered=-1,this.positioning=B,i&&(this._createTitle(),d.isFunction(i)||l.push(this._updateTitle(i,C))),j&&this._createButton(),d.isFunction(h)||l.push(this._updateContent(h,C)),this.rendered=B,this._setWidget(),d.each(O,function(a){var b;"render"===this.initialize&&(b=this(c))&&(c.plugins[a]=b)}),this._unassignEvents(),this._assignEvents(),this._when(l).then(function(){c._trigger("render"),c.positioning=C,c.hiddenDuringWait||!e.show.ready&&!a||c.toggle(B,f.event,C),c.hiddenDuringWait=C}),w.api[this.id]=this,this},x.destroy=function(a){function b(){if(!this.destroyed){this.destroyed=B;var a,b=this.target,c=b.attr(_);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),d.each(this.plugins,function(a){this.destroy&&this.destroy()});for(a in this.timers)clearTimeout(this.timers[a]);b.removeData(P).removeAttr(R).removeAttr(Q).removeAttr("aria-describedby"),this.options.suppress&&c&&b.attr("title",c).removeAttr(_),this._unassignEvents(),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=D,delete w.api[this.id]}}return this.destroyed?this.target:(a===B&&"hide"!==this.triggering||!this.rendered?b.call(this):(this.tooltip.one("tooltiphidden",d.proxy(b,this)),!this.triggering&&this.hide()),this.target)},z=x.checks={builtin:{"^id$":function(a,b,c,e){var f=c===B?w.nextid:c,g=P+"-"+f;f!==C&&f.length>0&&!d("#"+g).length?(this._id=g,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):a[b]=e},"^prerender":function(a,b,c){c&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(a,b,c){this._updateContent(c)},"^content.attr$":function(a,b,c,d){this.options.content.text===this.target.attr(d)&&this._updateContent(this.target.attr(c))},"^content.title$":function(a,b,c){return c?(c&&!this.elements.title&&this._createTitle(),void this._updateTitle(c)):this._removeTitle()},"^content.button$":function(a,b,c){this._updateButton(c)},"^content.title.(text|button)$":function(a,b,c){this.set("content."+b,c)},"^position.(my|at)$":function(a,b,c){"string"==typeof c&&(this.position[b]=a[b]=new y(c,"at"===b))},"^position.container$":function(a,b,c){this.rendered&&this.tooltip.appendTo(c)},"^show.ready$":function(a,b,c){c&&(!this.rendered&&this.render(B)||this.toggle(B))},"^style.classes$":function(a,b,c,d){this.rendered&&this.tooltip.removeClass(d).addClass(c)},"^style.(width|height)":function(a,b,c){this.rendered&&this.tooltip.css(b,c)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(a,b,c){this.rendered&&this.tooltip.toggleClass(W,!!c)},"^events.(render|show|move|hide|focus|blur)$":function(a,b,c){this.rendered&&this.tooltip[(d.isFunction(c)?"":"un")+"bind"]("tooltip"+b,c)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var a=this.options.position;this.tooltip.attr("tracking","mouse"===a.target&&a.adjust.mouse),this._unassignEvents(),this._assignEvents()}}}},x.get=function(a){if(this.destroyed)return this;var b=i(this.options,a.toLowerCase()),c=b[0][b[1]];return c.precedance?c.string():c};var ba=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,ca=/^prerender|show\.ready/i;x.set=function(a,b){if(this.destroyed)return this;var c,e=this.rendered,f=C,g=this.options;this.checks;return"string"==typeof a?(c=a,a={},a[c]=b):a=d.extend({},a),d.each(a,function(b,c){if(e&&ca.test(b))return void delete a[b];var h,j=i(g,b.toLowerCase());h=j[0][j[1]],j[0][j[1]]=c&&c.nodeType?d(c):c,f=ba.test(b)||f,a[b]=[j[0],j[1],c,h]}),h(g),this.positioning=B,d.each(a,d.proxy(j,this)),this.positioning=C,this.rendered&&this.tooltip[0].offsetWidth>0&&f&&this.reposition("mouse"===g.position.target?D:this.cache.event),this},x._update=function(a,b,c){var e=this,f=this.cache;return this.rendered&&a?(d.isFunction(a)&&(a=a.call(this.elements.target,f.event,this)||""),d.isFunction(a.then)?(f.waiting=B,a.then(function(a){return f.waiting=C,e._update(a,b)},D,function(a){return e._update(a,b)})):a===C||!a&&""!==a?C:(a.jquery&&a.length>0?b.empty().append(a.css({display:"block",visibility:"visible"})):b.html(a),this._waitForContent(b).then(function(a){e.rendered&&e.tooltip[0].offsetWidth>0&&e.reposition(f.event,!a.length)}))):C},x._waitForContent=function(a){var b=this.cache;return b.waiting=B,(d.fn.imagesLoaded?a.imagesLoaded():d.Deferred().resolve([])).done(function(){b.waiting=C}).promise()},x._updateContent=function(a,b){this._update(a,this.elements.content,b)},x._updateTitle=function(a,b){this._update(a,this.elements.title,b)===C&&this._removeTitle(C)},x._createTitle=function(){var a=this.elements,b=this._id+"-title";a.titlebar&&this._removeTitle(),a.titlebar=d("<div />",{"class":P+"-titlebar "+(this.options.style.widget?k("header"):"")}).append(a.title=d("<div />",{id:b,"class":P+"-title","aria-atomic":B})).insertBefore(a.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(a){d(this).toggleClass("ui-state-active ui-state-focus","down"===a.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(a){d(this).toggleClass("ui-state-hover","mouseover"===a.type)}),this.options.content.button&&this._createButton()},x._removeTitle=function(a){var b=this.elements;b.title&&(b.titlebar.remove(),b.titlebar=b.title=b.button=D,a!==C&&this.reposition())},x._createPosClass=function(a){return P+"-pos-"+(a||this.options.position.my).abbrev()},x.reposition=function(c,e){if(!this.rendered||this.positioning||this.destroyed)return this;this.positioning=B;var f,g,h,i,j=this.cache,k=this.tooltip,l=this.options.position,m=l.target,n=l.my,o=l.at,p=l.viewport,q=l.container,r=l.adjust,s=r.method.split(" "),t=k.outerWidth(C),u=k.outerHeight(C),v=0,w=0,x=k.css("position"),y={left:0,top:0},z=k[0].offsetWidth>0,A=c&&"scroll"===c.type,D=d(a),E=q[0].ownerDocument,F=this.mouse;if(d.isArray(m)&&2===m.length)o={x:J,y:I},y={left:m[0],top:m[1]};else if("mouse"===m)o={x:J,y:I},(!r.mouse||this.options.hide.distance)&&j.origin&&j.origin.pageX?c=j.origin:!c||c&&("resize"===c.type||"scroll"===c.type)?c=j.event:F&&F.pageX&&(c=F),"static"!==x&&(y=q.offset()),E.body.offsetWidth!==(a.innerWidth||E.documentElement.clientWidth)&&(g=d(b.body).offset()),y={left:c.pageX-y.left+(g&&g.left||0),top:c.pageY-y.top+(g&&g.top||0)},r.mouse&&A&&F&&(y.left-=(F.scrollX||0)-D.scrollLeft(),y.top-=(F.scrollY||0)-D.scrollTop());else{if("event"===m?c&&c.target&&"scroll"!==c.type&&"resize"!==c.type?j.target=d(c.target):c.target||(j.target=this.elements.target):"event"!==m&&(j.target=d(m.jquery?m:this.elements.target)),m=j.target,m=d(m).eq(0),0===m.length)return this;m[0]===b||m[0]===a?(v=aa.iOS?a.innerWidth:m.width(),w=aa.iOS?a.innerHeight:m.height(),m[0]===a&&(y={top:(p||m).scrollTop(),left:(p||m).scrollLeft()})):O.imagemap&&m.is("area")?f=O.imagemap(this,m,o,O.viewport?s:C):O.svg&&m&&m[0].ownerSVGElement?f=O.svg(this,m,o,O.viewport?s:C):(v=m.outerWidth(C),w=m.outerHeight(C),y=m.offset()),f&&(v=f.width,w=f.height,g=f.offset,y=f.position),y=this.reposition.offset(m,y,q),(aa.iOS>3.1&&aa.iOS<4.1||aa.iOS>=4.3&&aa.iOS<4.33||!aa.iOS&&"fixed"===x)&&(y.left-=D.scrollLeft(),y.top-=D.scrollTop()),(!f||f&&f.adjustable!==C)&&(y.left+=o.x===L?v:o.x===M?v/2:0,y.top+=o.y===K?w:o.y===M?w/2:0)}return y.left+=r.x+(n.x===L?-t:n.x===M?-t/2:0),y.top+=r.y+(n.y===K?-u:n.y===M?-u/2:0),O.viewport?(h=y.adjusted=O.viewport(this,y,l,v,w,t,u),g&&h.left&&(y.left+=g.left),g&&h.top&&(y.top+=g.top),h.my&&(this.position.my=h.my)):y.adjusted={left:0,top:0},j.posClass!==(i=this._createPosClass(this.position.my))&&k.removeClass(j.posClass).addClass(j.posClass=i),this._trigger("move",[y,p.elem||p],c)?(delete y.adjusted,e===C||!z||isNaN(y.left)||isNaN(y.top)||"mouse"===m||!d.isFunction(l.effect)?k.css(y):d.isFunction(l.effect)&&(l.effect.call(k,this,d.extend({},y)),k.queue(function(a){d(this).css({opacity:"",height:""}),aa.ie&&this.style.removeAttribute("filter"),a()})),this.positioning=C,this):this},x.reposition.offset=function(a,c,e){function f(a,b){c.left+=b*a.scrollLeft(),c.top+=b*a.scrollTop()}if(!e[0])return c;var g,h,i,j,k=d(a[0].ownerDocument),l=!!aa.ie&&"CSS1Compat"!==b.compatMode,m=e[0];do"static"!==(h=d.css(m,"position"))&&("fixed"===h?(i=m.getBoundingClientRect(),f(k,-1)):(i=d(m).position(),i.left+=parseFloat(d.css(m,"borderLeftWidth"))||0,i.top+=parseFloat(d.css(m,"borderTopWidth"))||0),c.left-=i.left+(parseFloat(d.css(m,"marginLeft"))||0),c.top-=i.top+(parseFloat(d.css(m,"marginTop"))||0),g||"hidden"===(j=d.css(m,"overflow"))||"visible"===j||(g=d(m)));while(m=m.offsetParent);return g&&(g[0]!==k[0]||l)&&f(g,1),c};var da=(y=x.reposition.Corner=function(a,b){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,M).toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!b;var c=a.charAt(0);this.precedance="t"===c||"b"===c?F:E}).prototype;da.invert=function(a,b){this[a]=this[a]===J?L:this[a]===L?J:b||this[a]},da.string=function(a){var b=this.x,c=this.y,d=b!==c?"center"===b||"center"!==c&&(this.precedance===F||this.forceY)?[c,b]:[b,c]:[b];return a!==!1?d.join(" "):d},da.abbrev=function(){var a=this.string(!1);return a[0].charAt(0)+(a[1]&&a[1].charAt(0)||"")},da.clone=function(){return new y(this.string(),this.forceY)},x.toggle=function(a,c){var e=this.cache,f=this.options,g=this.tooltip;if(c){if(/over|enter/.test(c.type)&&e.event&&/out|leave/.test(e.event.type)&&f.show.target.add(c.target).length===f.show.target.length&&g.has(c.relatedTarget).length)return this;e.event=d.event.fix(c)}if(this.waiting&&!a&&(this.hiddenDuringWait=B),!this.rendered)return a?this.render(1):this;if(this.destroyed||this.disabled)return this;var h,i,j,k=a?"show":"hide",l=this.options[k],m=(this.options[a?"hide":"show"],this.options.position),n=this.options.content,o=this.tooltip.css("width"),p=this.tooltip.is(":visible"),q=a||1===l.target.length,r=!c||l.target.length<2||e.target[0]===c.target;return(typeof a).search("boolean|number")&&(a=!p),h=!g.is(":animated")&&p===a&&r,i=h?D:!!this._trigger(k,[90]),this.destroyed?this:(i!==C&&a&&this.focus(c),!i||h?this:(d.attr(g[0],"aria-hidden",!a),a?(this.mouse&&(e.origin=d.event.fix(this.mouse)),d.isFunction(n.text)&&this._updateContent(n.text,C),d.isFunction(n.title)&&this._updateTitle(n.title,C),!A&&"mouse"===m.target&&m.adjust.mouse&&(d(b).bind("mousemove."+P,this._storeMouse),A=B),o||g.css("width",g.outerWidth(C)),this.reposition(c,arguments[2]),o||g.css("width",""),l.solo&&("string"==typeof l.solo?d(l.solo):d(T,l.solo)).not(g).not(l.target).qtip("hide",d.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete e.origin,A&&!d(T+'[tracking="true"]:visible',l.solo).not(g).length&&(d(b).unbind("mousemove."+P),A=C),this.blur(c)),j=d.proxy(function(){a?(aa.ie&&g[0].style.removeAttribute("filter"),g.css("overflow",""),"string"==typeof l.autofocus&&d(this.options.show.autofocus,g).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):g.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(a?"visible":"hidden")},this),l.effect===C||q===C?(g[k](),j()):d.isFunction(l.effect)?(g.stop(1,1),l.effect.call(g,this),g.queue("fx",function(a){j(),a()})):g.fadeTo(90,a?1:0,j),a&&l.target.trigger("qtip-"+this.id+"-inactive"),this))},x.show=function(a){return this.toggle(B,a)},x.hide=function(a){return this.toggle(C,a)},x.focus=function(a){if(!this.rendered||this.destroyed)return this;var b=d(T),c=this.tooltip,e=parseInt(c[0].style.zIndex,10),f=w.zindex+b.length;return c.hasClass(X)||this._trigger("focus",[f],a)&&(e!==f&&(b.each(function(){this.style.zIndex>e&&(this.style.zIndex=this.style.zIndex-1)}),b.filter("."+X).qtip("blur",a)),c.addClass(X)[0].style.zIndex=f),this},x.blur=function(a){return!this.rendered||this.destroyed?this:(this.tooltip.removeClass(X),this._trigger("blur",[this.tooltip.css("zIndex")],a),this)},x.disable=function(a){return this.destroyed?this:("toggle"===a?a=!(this.rendered?this.tooltip.hasClass(Z):this.disabled):"boolean"!=typeof a&&(a=B),this.rendered&&this.tooltip.toggleClass(Z,a).attr("aria-disabled",a),this.disabled=!!a,this)},x.enable=function(){return this.disable(C)},x._createButton=function(){var a=this,b=this.elements,c=b.tooltip,e=this.options.content.button,f="string"==typeof e,g=f?e:"Close tooltip";b.button&&b.button.remove(),e.jquery?b.button=e:b.button=d("<a />",{"class":"qtip-close "+(this.options.style.widget?"":P+"-icon"),title:g,"aria-label":g}).prepend(d("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),b.button.appendTo(b.titlebar||c).attr("role","button").click(function(b){return c.hasClass(Z)||a.hide(b),C})},x._updateButton=function(a){if(!this.rendered)return C;var b=this.elements.button;a?this._createButton():b.remove()},x._setWidget=function(){var a=this.options.style.widget,b=this.elements,c=b.tooltip,d=c.hasClass(Z);c.removeClass(Z),Z=a?"ui-state-disabled":"qtip-disabled",c.toggleClass(Z,d),c.toggleClass("ui-helper-reset "+k(),a).toggleClass(W,this.options.style.def&&!a),b.content&&b.content.toggleClass(k("content"),a),b.titlebar&&b.titlebar.toggleClass(k("header"),a),b.button&&b.button.toggleClass(P+"-icon",!a)},x._storeMouse=function(a){return(this.mouse=d.event.fix(a)).type="mousemove",this},x._bind=function(a,b,c,e,f){if(a&&c&&b.length){var g="."+this._id+(e?"-"+e:"");return d(a).bind((b.split?b:b.join(g+" "))+g,d.proxy(c,f||this)),this}},x._unbind=function(a,b){return a&&d(a).unbind("."+this._id+(b?"-"+b:"")),this},x._trigger=function(a,b,c){var e=d.Event("tooltip"+a);return e.originalEvent=c&&d.extend({},c)||this.cache.event||D,this.triggering=a,this.tooltip.trigger(e,[this].concat(b||[])),this.triggering=C,!e.isDefaultPrevented()},x._bindEvents=function(a,b,c,e,f,g){var h=c.filter(e).add(e.filter(c)),i=[];h.length&&(d.each(b,function(b,c){var e=d.inArray(c,a);e>-1&&i.push(a.splice(e,1)[0])}),i.length&&(this._bind(h,i,function(a){var b=this.rendered?this.tooltip[0].offsetWidth>0:!1;(b?g:f).call(this,a)}),c=c.not(h),e=e.not(h))),this._bind(c,a,f),this._bind(e,b,g)},x._assignInitialEvents=function(a){function b(a){return this.disabled||this.destroyed?C:(this.cache.event=a&&d.event.fix(a),this.cache.target=a&&d(a.target),clearTimeout(this.timers.show),void(this.timers.show=l.call(this,function(){this.render("object"==typeof a||c.show.ready)},c.prerender?0:c.show.delay)))}var c=this.options,e=c.show.target,f=c.hide.target,g=c.show.event?d.trim(""+c.show.event).split(" "):[],h=c.hide.event?d.trim(""+c.hide.event).split(" "):[];this._bind(this.elements.target,["remove","removeqtip"],function(a){this.destroy(!0)},"destroy"),/mouse(over|enter)/i.test(c.show.event)&&!/mouse(out|leave)/i.test(c.hide.event)&&h.push("mouseleave"),this._bind(e,"mousemove",function(a){this._storeMouse(a),this.cache.onTarget=B}),this._bindEvents(g,h,e,f,b,function(){return this.timers?void clearTimeout(this.timers.show):C}),(c.show.ready||c.prerender)&&b.call(this,a)},x._assignEvents=function(){var c=this,e=this.options,f=e.position,g=this.tooltip,h=e.show.target,i=e.hide.target,j=f.container,k=f.viewport,l=d(b),q=(d(b.body),d(a)),r=e.show.event?d.trim(""+e.show.event).split(" "):[],s=e.hide.event?d.trim(""+e.hide.event).split(" "):[];
d.each(e.events,function(a,b){c._bind(g,"toggle"===a?["tooltipshow","tooltiphide"]:["tooltip"+a],b,null,g)}),/mouse(out|leave)/i.test(e.hide.event)&&"window"===e.hide.leave&&this._bind(l,["mouseout","blur"],function(a){/select|option/.test(a.target.nodeName)||a.relatedTarget||this.hide(a)}),e.hide.fixed?i=i.add(g.addClass(V)):/mouse(over|enter)/i.test(e.show.event)&&this._bind(i,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+e.hide.event).indexOf("unfocus")>-1&&this._bind(j.closest("html"),["mousedown","touchstart"],function(a){var b=d(a.target),c=this.rendered&&!this.tooltip.hasClass(Z)&&this.tooltip[0].offsetWidth>0,e=b.parents(T).filter(this.tooltip[0]).length>0;b[0]===this.target[0]||b[0]===this.tooltip[0]||e||this.target.has(b[0]).length||!c||this.hide(a)}),"number"==typeof e.hide.inactive&&(this._bind(h,"qtip-"+this.id+"-inactive",o,"inactive"),this._bind(i.add(g),w.inactiveEvents,o)),this._bindEvents(r,s,h,i,m,n),this._bind(h.add(g),"mousemove",function(a){if("number"==typeof e.hide.distance){var b=this.cache.origin||{},c=this.options.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&this.hide(a)}this._storeMouse(a)}),"mouse"===f.target&&f.adjust.mouse&&(e.hide.event&&this._bind(h,["mouseenter","mouseleave"],function(a){return this.cache?void(this.cache.onTarget="mouseenter"===a.type):C}),this._bind(l,"mousemove",function(a){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(Z)&&this.tooltip[0].offsetWidth>0&&this.reposition(a)})),(f.adjust.resize||k.length)&&this._bind(d.event.special.resize?k:q,"resize",p),f.adjust.scroll&&this._bind(q.add(f.container),"scroll",p)},x._unassignEvents=function(){var c=this.options,e=c.show.target,f=c.hide.target,g=d.grep([this.elements.target[0],this.rendered&&this.tooltip[0],c.position.container[0],c.position.viewport[0],c.position.container.closest("html")[0],a,b],function(a){return"object"==typeof a});e&&e.toArray&&(g=g.concat(e.toArray())),f&&f.toArray&&(g=g.concat(f.toArray())),this._unbind(g)._unbind(g,"destroy")._unbind(g,"inactive")},d(function(){q(T,["mouseenter","mouseleave"],function(a){var b="mouseenter"===a.type,c=d(a.currentTarget),e=d(a.relatedTarget||a.target),f=this.options;b?(this.focus(a),c.hasClass(V)&&!c.hasClass(Z)&&clearTimeout(this.timers.hide)):"mouse"===f.position.target&&f.position.adjust.mouse&&f.hide.event&&f.show.target&&!e.closest(f.show.target[0]).length&&this.hide(a),c.toggleClass(Y,b)}),q("["+R+"]",U,o)}),w=d.fn.qtip=function(a,b,e){var f=(""+a).toLowerCase(),g=D,i=d.makeArray(arguments).slice(1),j=i[i.length-1],k=this[0]?d.data(this[0],P):D;return!arguments.length&&k||"api"===f?k:"string"==typeof a?(this.each(function(){var a=d.data(this,P);if(!a)return B;if(j&&j.timeStamp&&(a.cache.event=j),!b||"option"!==f&&"options"!==f)a[f]&&a[f].apply(a,i);else{if(e===c&&!d.isPlainObject(b))return g=a.get(b),C;a.set(b,e)}}),g!==D?g:this):"object"!=typeof a&&arguments.length?void 0:(k=h(d.extend(B,{},a)),this.each(function(a){var b,c;return c=d.isArray(k.id)?k.id[a]:k.id,c=!c||c===C||c.length<1||w.api[c]?w.nextid++:c,b=r(d(this),c,k),b===C?B:(w.api[c]=b,d.each(O,function(){"initialize"===this.initialize&&this(b)}),void b._assignInitialEvents(j))}))},d.qtip=e,w.api={},d.each({attr:function(a,b){if(this.length){var c=this[0],e="title",f=d.data(c,"qtip");if(a===e&&f&&"object"==typeof f&&f.options.suppress)return arguments.length<2?d.attr(c,_):(f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",b),this.attr(_,b))}return d.fn["attr"+$].apply(this,arguments)},clone:function(a){var b=(d([]),d.fn["clone"+$].apply(this,arguments));return a||b.filter("["+_+"]").attr("title",function(){return d.attr(this,_)}).removeAttr(_),b}},function(a,b){if(!b||d.fn[a+$])return B;var c=d.fn[a+$]=d.fn[a];d.fn[a]=function(){return b.apply(this,arguments)||c.apply(this,arguments)}}),d.ui||(d["cleanData"+$]=d.cleanData,d.cleanData=function(a){for(var b,c=0;(b=d(a[c])).length;c++)if(b.attr(Q))try{b.triggerHandler("removeqtip")}catch(e){}d["cleanData"+$].apply(this,arguments)}),w.version="2.2.1",w.nextid=0,w.inactiveEvents=U,w.zindex=15e3,w.defaults={prerender:C,id:C,overwrite:B,suppress:B,content:{text:B,attr:"title",title:C,button:C},position:{my:"top left",at:"bottom right",target:C,container:C,viewport:C,adjust:{x:0,y:0,mouse:B,scroll:B,resize:B,method:"flipinvert flipinvert"},effect:function(a,b,c){d(this).animate(b,{duration:200,queue:C})}},show:{target:C,event:"mouseenter",effect:B,delay:90,solo:C,ready:C,autofocus:C},hide:{target:C,event:"mouseleave",effect:B,delay:0,fixed:C,inactive:C,leave:"window",distance:C},style:{classes:"",widget:C,width:C,height:C,def:B},events:{render:D,move:D,show:D,hide:D,toggle:D,visible:D,hidden:D,focus:D,blur:D}};var ea,fa="margin",ga="border",ha="color",ia="background-color",ja="transparent",ka=" !important",la=!!b.createElement("canvas").getContext,ma=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,na={},oa=["Webkit","O","Moz","ms"];if(la)var pa=a.devicePixelRatio||1,qa=function(){var a=b.createElement("canvas").getContext("2d");return a.backingStorePixelRatio||a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||1}(),ra=pa/qa;else var sa=function(a,b,c){return"<qtipvml:"+a+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(b||"")+' style="behavior: url(#default#VML); '+(c||"")+'" />'};d.extend(v.prototype,{init:function(a){var b,c;c=this.element=a.elements.tip=d("<div />",{"class":P+"-tip"}).prependTo(a.tooltip),la?(b=d("<canvas />").appendTo(this.element)[0].getContext("2d"),b.lineJoin="miter",b.miterLimit=1e5,b.save()):(b=sa("shape",'coordorigin="0,0"',"position:absolute;"),this.element.html(b+b),a._bind(d("*",c).add(c),["click","mousedown"],function(a){a.stopPropagation()},this._ns)),a._bind(a.tooltip,"tooltipmove",this.reposition,this._ns,this),this.create()},_swapDimensions:function(){this.size[0]=this.options.height,this.size[1]=this.options.width},_resetDimensions:function(){this.size[0]=this.options.width,this.size[1]=this.options.height},_useTitle:function(a){var b=this.qtip.elements.titlebar;return b&&(a.y===I||a.y===M&&this.element.position().top+this.size[1]/2+this.options.offset<b.outerHeight(B))},_parseCorner:function(a){var b=this.qtip.options.position.my;return a===C||b===C?a=C:a===B?a=new y(b.string()):a.string||(a=new y(a),a.fixed=B),a},_parseWidth:function(a,b,c){var d=this.qtip.elements,e=ga+s(b)+"Width";return(c?u(c,e):u(d.content,e)||u(this._useTitle(a)&&d.titlebar||d.content,e)||u(d.tooltip,e))||0},_parseRadius:function(a){var b=this.qtip.elements,c=ga+s(a.y)+s(a.x)+"Radius";return aa.ie<9?0:u(this._useTitle(a)&&b.titlebar||b.content,c)||u(b.tooltip,c)||0},_invalidColour:function(a,b,c){var d=a.css(b);return!d||c&&d===a.css(c)||ma.test(d)?C:d},_parseColours:function(a){var b=this.qtip.elements,c=this.element.css("cssText",""),e=ga+s(a[a.precedance])+s(ha),f=this._useTitle(a)&&b.titlebar||b.content,g=this._invalidColour,h=[];return h[0]=g(c,ia)||g(f,ia)||g(b.content,ia)||g(b.tooltip,ia)||c.css(ia),h[1]=g(c,e,ha)||g(f,e,ha)||g(b.content,e,ha)||g(b.tooltip,e,ha)||b.tooltip.css(e),d("*",c).add(c).css("cssText",ia+":"+ja+ka+";"+ga+":0"+ka+";"),h},_calculateSize:function(a){var b,c,d,e=a.precedance===F,f=this.options.width,g=this.options.height,h="c"===a.abbrev(),i=(e?f:g)*(h?.5:1),j=Math.pow,k=Math.round,l=Math.sqrt(j(i,2)+j(g,2)),m=[this.border/i*l,this.border/g*l];return m[2]=Math.sqrt(j(m[0],2)-j(this.border,2)),m[3]=Math.sqrt(j(m[1],2)-j(this.border,2)),b=l+m[2]+m[3]+(h?0:m[0]),c=b/l,d=[k(c*f),k(c*g)],e?d:d.reverse()},_calculateTip:function(a,b,c){c=c||1,b=b||this.size;var d=b[0]*c,e=b[1]*c,f=Math.ceil(d/2),g=Math.ceil(e/2),h={br:[0,0,d,e,d,0],bl:[0,0,d,0,0,e],tr:[0,e,d,0,d,e],tl:[0,0,0,e,d,e],tc:[0,e,f,0,d,e],bc:[0,0,d,0,f,e],rc:[0,0,d,g,0,e],lc:[d,0,d,e,0,g]};return h.lt=h.br,h.rt=h.bl,h.lb=h.tr,h.rb=h.tl,h[a.abbrev()]},_drawCoords:function(a,b){a.beginPath(),a.moveTo(b[0],b[1]),a.lineTo(b[2],b[3]),a.lineTo(b[4],b[5]),a.closePath()},create:function(){var a=this.corner=(la||aa.ie)&&this._parseCorner(this.options.corner);return(this.enabled=!!this.corner&&"c"!==this.corner.abbrev())&&(this.qtip.cache.corner=a.clone(),this.update()),this.element.toggle(this.enabled),this.corner},update:function(b,c){if(!this.enabled)return this;var e,f,g,h,i,j,k,l,m=this.qtip.elements,n=this.element,o=n.children(),p=this.options,q=this.size,r=p.mimic,s=Math.round;b||(b=this.qtip.cache.corner||this.corner),r===C?r=b:(r=new y(r),r.precedance=b.precedance,"inherit"===r.x?r.x=b.x:"inherit"===r.y?r.y=b.y:r.x===r.y&&(r[b.precedance]=b[b.precedance])),f=r.precedance,b.precedance===E?this._swapDimensions():this._resetDimensions(),e=this.color=this._parseColours(b),e[1]!==ja?(l=this.border=this._parseWidth(b,b[b.precedance]),p.border&&1>l&&!ma.test(e[1])&&(e[0]=e[1]),this.border=l=p.border!==B?p.border:l):this.border=l=0,k=this.size=this._calculateSize(b),n.css({width:k[0],height:k[1],lineHeight:k[1]+"px"}),j=b.precedance===F?[s(r.x===J?l:r.x===L?k[0]-q[0]-l:(k[0]-q[0])/2),s(r.y===I?k[1]-q[1]:0)]:[s(r.x===J?k[0]-q[0]:0),s(r.y===I?l:r.y===K?k[1]-q[1]-l:(k[1]-q[1])/2)],la?(g=o[0].getContext("2d"),g.restore(),g.save(),g.clearRect(0,0,6e3,6e3),h=this._calculateTip(r,q,ra),i=this._calculateTip(r,this.size,ra),o.attr(G,k[0]*ra).attr(H,k[1]*ra),o.css(G,k[0]).css(H,k[1]),this._drawCoords(g,i),g.fillStyle=e[1],g.fill(),g.translate(j[0]*ra,j[1]*ra),this._drawCoords(g,h),g.fillStyle=e[0],g.fill()):(h=this._calculateTip(r),h="m"+h[0]+","+h[1]+" l"+h[2]+","+h[3]+" "+h[4]+","+h[5]+" xe",j[2]=l&&/^(r|b)/i.test(b.string())?8===aa.ie?2:1:0,o.css({coordsize:k[0]+l+" "+(k[1]+l),antialias:""+(r.string().indexOf(M)>-1),left:j[0]-j[2]*Number(f===E),top:j[1]-j[2]*Number(f===F),width:k[0]+l,height:k[1]+l}).each(function(a){var b=d(this);b[b.prop?"prop":"attr"]({coordsize:k[0]+l+" "+(k[1]+l),path:h,fillcolor:e[0],filled:!!a,stroked:!a}).toggle(!(!l&&!a)),!a&&b.html(sa("stroke",'weight="'+2*l+'px" color="'+e[1]+'" miterlimit="1000" joinstyle="miter"'))})),a.opera&&setTimeout(function(){m.tip.css({display:"inline-block",visibility:"visible"})},1),c!==C&&this.calculate(b,k)},calculate:function(a,b){if(!this.enabled)return C;var c,e,f=this,g=this.qtip.elements,h=this.element,i=this.options.offset,j=(g.tooltip.hasClass("ui-widget"),{});return a=a||this.corner,c=a.precedance,b=b||this._calculateSize(a),e=[a.x,a.y],c===E&&e.reverse(),d.each(e,function(d,e){var h,k,l;e===M?(h=c===F?J:I,j[h]="50%",j[fa+"-"+h]=-Math.round(b[c===F?0:1]/2)+i):(h=f._parseWidth(a,e,g.tooltip),k=f._parseWidth(a,e,g.content),l=f._parseRadius(a),j[e]=Math.max(-f.border,d?k:i+(l>h?l:-h)))}),j[a[c]]-=b[c===E?0:1],h.css({margin:"",top:"",bottom:"",left:"",right:""}).css(j),j},reposition:function(a,b,d,e){function f(a,b,c,d,e){a===N&&k.precedance===b&&l[d]&&k[c]!==M?k.precedance=k.precedance===E?F:E:a!==N&&l[d]&&(k[b]=k[b]===M?l[d]>0?d:e:k[b]===d?e:d)}function g(a,b,e){k[a]===M?q[fa+"-"+b]=p[a]=h[fa+"-"+b]-l[b]:(i=h[e]!==c?[l[b],-h[b]]:[-l[b],h[b]],(p[a]=Math.max(i[0],i[1]))>i[0]&&(d[b]-=l[b],p[b]=C),q[h[e]!==c?e:b]=p[a])}if(this.enabled){var h,i,j=b.cache,k=this.corner.clone(),l=d.adjusted,m=b.options.position.adjust.method.split(" "),n=m[0],o=m[1]||m[0],p={left:C,top:C,x:0,y:0},q={};this.corner.fixed!==B&&(f(n,E,F,J,L),f(o,F,E,I,K),k.string()===j.corner.string()&&j.cornerTop===l.top&&j.cornerLeft===l.left||this.update(k,C)),h=this.calculate(k),h.right!==c&&(h.left=-h.right),h.bottom!==c&&(h.top=-h.bottom),h.user=this.offset,(p.left=n===N&&!!l.left)&&g(E,J,L),(p.top=o===N&&!!l.top)&&g(F,I,K),this.element.css(q).toggle(!(p.x&&p.y||k.x===M&&p.y||k.y===M&&p.x)),d.left-=h.left.charAt?h.user:n!==N||p.top||!p.left&&!p.top?h.left+this.border:0,d.top-=h.top.charAt?h.user:o!==N||p.left||!p.left&&!p.top?h.top+this.border:0,j.cornerLeft=l.left,j.cornerTop=l.top,j.corner=k.clone()}},destroy:function(){this.qtip._unbind(this.qtip.tooltip,this._ns),this.qtip.elements.tip&&this.qtip.elements.tip.find("*").remove().end().remove()}}),ea=O.tip=function(a){return new v(a,a.options.style.tip)},ea.initialize="render",ea.sanitize=function(a){if(a.style&&"tip"in a.style){var b=a.style.tip;"object"!=typeof b&&(b=a.style.tip={corner:b}),/string|boolean/i.test(typeof b.corner)||(b.corner=B)}},z.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){this.create(),this.qtip.reposition()},"^style.tip.(height|width)$":function(a){this.size=[a.width,a.height],this.update(),this.qtip.reposition()},"^content.title|style.(classes|widget)$":function(){this.update()}},d.extend(B,w.defaults,{style:{tip:{corner:B,mimic:C,width:6,height:6,border:B,offset:0}}})})}(window,document),+function(a){"use strict";a.fn.qtip&&(a.fn.qtip.defaults.position.my="bottom center",a.fn.qtip.defaults.position.at="top center")}(window.jQuery),+function(a){"use strict";function b(b){var c=a(this),d=c.data("tc.totop"),e="object"==typeof b&&b;d||c.data("tc.totop",d=new f(this,e)),"string"==typeof b&&d[b].call(c)}var c,d=!1,e=!1,f=function(a,b){this.options=this.$element=null,this.init(a,b)};f.DEFAULTS={buttonText:{de:"Nach Oben",en:"To Top"},language:"auto",smallButton:!1,buttonOpacity:.92,scrollOffset:50,scrollTimeMax:800,scrollTimeMin:250,pixelPerSecond:4e3,mobileBreakpoint:639,dynamicVisibility:!0,dynamicVisibilityTime:2e3,theme:"",containerType:"container-fixed"},f.prototype.init=function(b,c){this.$element=a(b);this.options=this.mergeOptions(c),this.options.language&&"auto"!==this.options.language||(this.options.language=this.getDocumentLanguage());var f=this;a.support.mobile===!0&&(e=!0,this.options.dynamicVisibility=!1),e===!0||this.options.smallButton===!0||a(window).width()<this.options.mobileBreakpoint?this.generateButton(!0,!1):this.generateButton(!1,!1),this.showHideButton(),a(window).scroll(function(){f.showHideButton()}),a(window).resize(function(){var b=a(window).width();639>b?f.generateButton(!0,!0):b>640&&f.generateButton(!1,!0)}),a("body").mousemove(function(){d===!1&&(f.toggleButtonVisibility(!0),f.dynamicVisibility())})},f.prototype.mergeOptions=function(a){a=a.option;var b,c={},d=this.getDefaults();for(b in d)c[b]=d[b];for(b in a)c[b]=a[b];return c},f.prototype.showHideButton=function(){a(window).scrollTop()>this.options.scrollOffset&&d===!1?(d=!0,a(".totop").css({bottom:"0px",opacity:this.options.buttonOpacity}),this.dynamicVisibility()):a(window).scrollTop()<this.options.scrollOffset&&d===!0&&(d=!1,a(".totop").css({bottom:"-70px",opacity:0}))},f.prototype.toggleButtonVisibility=function(b){b===!0?(d=!0,a(".totop").css({opacity:this.options.buttonOpacity})):b===!1&&(d=!1,a(".totop").css({opacity:0}))},f.prototype.generateButton=function(b,d){var e=this,f=this.options,g="",h=this.options.buttonText[this.options.language],i='<button type="button" id="totopButton" class="btn btn-default btn-minimal"><i class="icon icon-export" aria-hidden="true"></i>'+h+"</button>";b===!0&&(i='<button type="button" id="totopButton" class="btn btn-default btn-icon mobile" title="'+h+'"><i class="icon icon-export" aria-hidden="true"></i></button>'),d===!0?(g=i,a("#totopButton").detach(),a("#button-wrap").append(g)):d===!1&&(g='<div class="totop"><div class="'+f.containerType+'"><div class="row"><div id="button-wrap">'+i+"</div></div></div></div>",a("body").append(g)),f.theme&&a("#totopButton").addClass(f.theme),a("#totopButton").click(function(b){b.preventDefault();var d=a(window).scrollTop(),e=Math.round(1e3*(d/f.pixelPerSecond));e=Math.min(e,f.scrollTimeMax),e=Math.max(e,f.scrollTimeMin),a("html, body").stop(!0,!0).animate({scrollTop:0},e),clearTimeout(c)}),a("#totopButton").mouseenter(function(a){clearTimeout(c)}),a("#totopButton").mouseleave(function(a){e.dynamicVisibility()})},f.prototype.dynamicVisibility=function(){var a=this;this.options.dynamicVisibility===!0&&(clearTimeout(c),c=setTimeout(function(){a.toggleButtonVisibility(!1),clearTimeout(c)},a.options.dynamicVisibilityTime))},f.prototype.getDocumentLanguage=function(){return a("html").attr("lang")},f.prototype.getDefaults=function(){return f.DEFAULTS};var g=a.fn.totop;a.fn.totop=b,a.fn.totop.Constructor=f,a.fn.totop.noConflict=function(){return a.fn.totop=g,this}}(window.jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("tc.fixation"),f="object"==typeof b&&b;e||d.data("tc.fixation",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.tc.fixation.data-api",a.proxy(this.checkPosition,this)),this.$element=a(b),this.checkPosition()};c.DEFAULTS={offsetTop:0,target:window},c.prototype.checkPosition=function(){var a=this.$target.scrollTop(),b=this.$element.offset(),c=this.options.offsetTop;"function"==typeof c&&(c=c(this.$element)),this.$element.toggleClass("fixed",a>b.top-c)};var d=a.fn.fixation;a.fn.fixation=b,a.fn.fixation.Constructor=c,a.fn.fixation.noConflict=function(){return a.fn.fixation=d,this},a(window).on("load",function(){a('[data-spy="fixation"]').each(function(){var c=a(this),d=c.data();b.call(c,d)})})}(window.jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("tc.button"),f="object"==typeof b&&b;e||d.data("tc.button",e=new c(this,f)),"toggleActiveState"==b&&e.setActiveState(),"toggleActiveStateRadioGroup"==b&&e.setActiveStateRadioGroup(!1),"toggleActiveStateGroup"==b&&e.setActiveStateGroup(),"forwardPressState"==b?e.callFunction(void 0,"press"):b&&e.setNewState(b)})}var c=function(a,b){this.options=this.$element=null,this.buttonGroup=!1,this.init(a,b)};c.DEFAULTS={},c.prototype.init=function(b,c){var d=this.$element=a(b);d.hasClass("active")===!0&&this.$element.attr("aria-pressed",!0)},c.prototype.setActiveStateGroup=function(){this.buttonGroup=!0,this.setActiveState()},c.prototype.setActiveStateRadioGroup=function(b){this.buttonGroup=!0;var c=this.$element,d=c.parent(),e=a(c).index(),f=this;d.children("button").each(function(b){var c=a(this);b!=e&&!c.prop("disabled")&&c.hasClass("active")&&f.setActiveState(c,!0)}),c.hasClass("active")||this.setActiveState(c,!1)},c.prototype.setNewState=function(a){var b=this.$element;switch(a){case"default":this.setActiveState(b,!0),this.setDisableState(b,!0);break;case"active":this.setActiveState(b,!1);break;case"enable":this.setDisableState(b,!0);break;case"disable":this.setDisableState(b,!1);break;case"toggledisable":this.setDisableState();break;case"toggleactive":this.setActiveState()}},c.prototype.setDisableState=function(a,b){void 0===a&&(a=this.$element),void 0===b&&(b=a.prop("disabled")),b===!1?(a.prop("disabled",!0),this.setActiveState(a,!0),this.callFunction(a,"d")):b===!0&&(a.prop("disabled",!1),this.callFunction(a,"e"))},c.prototype.setActiveState=function(a,b){void 0===a&&(a=this.$element),void 0===b&&(b=a.hasClass("active")),this.$element.attr("aria-pressed",!b),b===!1?(a.addClass("active"),this.callFunction(a,"active")):b===!0&&(a.removeClass("active"),a.blur(),this.callFunction(a,"inactive"))},c.prototype.callFunction=function(a,b){var c="",d="data-callback",e="data-callback-states";void 0===a&&(a=this.$element);var f=a.attr(d);c=this.buttonGroup===!0?a.parent().attr(e):a.attr(e),void 0!==f&&("press"===b?window[f](a,b):"all"===c&&window[f](a,b))};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a(document).on("click.tc.button.data-api",'[data-toggle="button"]',function(c){var d=a(c.target);b.call(d,"toggleActiveState"),b.call(d,"forwardPressState")}),a(document).on("click.tc.button.data-api",'[data-toggle="buttongroup-radio"]',function(c){var d=a(c.target);b.call(d,"toggleActiveStateRadioGroup"),b.call(d,"forwardPressState")}),a(document).on("click.tc.button.data-api",'[data-toggle="buttongroup"]',function(c){var d=a(c.target);b.call(d,"toggleActiveStateGroup"),b.call(d,"forwardPressState")}),a.fn.button.noConflict=function(){return a.fn.button=d,this}}(window.jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("tc.expandable"),f="object"==typeof b&&b;e?"string"==typeof b&&e[b].call(c):c.data("tc.expandable",e=new d(this,f))})}var c=0,d=function(b,c){this.options=this.$element=a(b),this.init(b,c)};d.DEFAULTS={speed:400,syncToSize:!1,state:!0,height:0,group:void 0,id:""},d.prototype.init=function(b,d){var e=this.$element=a(b);this.options=this.mergeOptions(d);var f=this.options;f.group?f.id=f.group+"-"+c:f.id=c,c++,e.hasClass("expandable-hidden")===!0?(a(e).wrap('<div id="'+f.id+'" class="expanable-container expandable-hidden"></div>'),a(e).parent().css({height:0,opacity:0}),a(e).removeClass("expandable-hidden"),f.state=!1):(a(e).wrap('<div id="'+f.id+'" class="expanable-container"></div>'),f.state=!0),this.calculateHeight()},d.prototype.calculateHeight=function(){var b=this.$element,c=this.options,d=a(b).clone().attr("id",!1).css({display:"inline-block",position:"absolute",left:"-10000px",width:a(b).parent().innerWidth()});a("body").append(d),c.height=d.outerHeight(!0),d.remove()},d.prototype.visible=function(){var a=this.data("tc.expandable");a.options;a.setVisibility(this,!1)},d.prototype.hidden=function(){var a=this.data("tc.expandable");a.options;a.setVisibility(this,!0)},d.prototype.toggleVisibility=function(){var b=this.data("tc.expandable"),c=b.options;a(c.group).index();void 0!==c.group?(a("."+c.group).each(function(d){c.id!=a(this).data("tc.expandable").options.id&&b.setVisibility(a(this),!0)}),b.setVisibility(this,!1)):b.setVisibility(this)},d.prototype.setVisibility=function(b,c){var d=b.data("tc.expandable"),e=d.options,f=0,g=a(b).parent();f=e.syncToSize===!0?1e3/e.speed*e.height:e.speed,void 0===c&&(c=e.state),c===!0?(g.stop(!0,!1).animate({height:0,opacity:0},f,function(){g.addClass("expandable-hidden")}),e.state=!1):c===!1&&(g.removeClass("expandable-hidden"),g.stop(!0,!1).animate({height:e.height+"px",opacity:1},f),e.state=!0)},d.prototype.getDefaults=function(){return d.DEFAULTS},d.prototype.mergeOptions=function(a){a=a.option;var b,c={},d=this.getDefaults();for(b in d)c[b]=d[b];for(b in a)c[b]=a[b];return c};var e=a.fn.expandable;a.fn.expandable=b,a.fn.expandable.Constructor=d,a.fn.expandable.noConflict=function(){return a.fn.expandable=e,this}}(window.jQuery),/*!
 * typeahead.js 0.11.1
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
 */
function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return a.Bloodhound=b(c)}):"object"==typeof exports?module.exports=b(require("jquery")):a.Bloodhound=b(jQuery)}(this,function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},isElement:function(a){return!(!a||1!==a.nodeType)},isJQuery:function(b){return b instanceof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,identity:function(a){return a},clone:function(b){return a.extend(!0,{},b)},getIdGenerator:function(){var a=0;return function(){return a++}},templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},stringify:function(a){return b.isString(a)?a:JSON.stringify(a)},noop:function(){}}}(),c="0.11.1",d=function(){"use strict";function a(a){return a=b.toStr(a),a?a.split(/\s+/):[]}function c(a){return a=b.toStr(a),a?a.split(/\W+/):[]}function d(a){return function(c){return c=b.isArray(c)?c:[].slice.call(arguments,0),function(d){var e=[];return b.each(c,function(c){e=e.concat(a(b.toStr(d[c])))}),e}}}return{nonword:c,whitespace:a,obj:{nonword:d(c),whitespace:d(a)}}}(),e=function(){"use strict";function c(c){this.maxSize=b.isNumber(c)?c:100,this.reset(),this.maxSize<=0&&(this.set=this.get=a.noop)}function d(){this.head=this.tail=null}function e(a,b){this.key=a,this.val=b,this.prev=this.next=null}return b.mixin(c.prototype,{set:function(a,b){var c,d=this.list.tail;this.size>=this.maxSize&&(this.list.remove(d),delete this.hash[d.key],this.size--),(c=this.hash[a])?(c.val=b,this.list.moveToFront(c)):(c=new e(a,b),this.list.add(c),this.hash[a]=c,this.size++)},get:function(a){var b=this.hash[a];return b?(this.list.moveToFront(b),b.val):void 0},reset:function(){this.size=0,this.hash={},this.list=new d}}),b.mixin(d.prototype,{add:function(a){this.head&&(a.next=this.head,this.head.prev=a),this.head=a,this.tail=this.tail||a},remove:function(a){a.prev?a.prev.next=a.next:this.head=a.next,a.next?a.next.prev=a.prev:this.tail=a.prev},moveToFront:function(a){this.remove(a),this.add(a)}}),c}(),f=function(){"use strict";function c(a,c){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+b.escapeRegExChars(this.prefix)),this.ls=c||h,!this.ls&&this._noop()}function d(){return(new Date).getTime()}function e(a){return JSON.stringify(b.isUndefined(a)?null:a)}function f(b){return a.parseJSON(b)}function g(a){var b,c,d=[],e=h.length;for(b=0;e>b;b++)(c=h.key(b)).match(a)&&d.push(c.replace(a,""));return d}var h;try{h=window.localStorage,h.setItem("~~~","!"),h.removeItem("~~~")}catch(i){h=null}return b.mixin(c.prototype,{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},_noop:function(){this.get=this.set=this.remove=this.clear=this.isExpired=b.noop},_safeSet:function(a,b){try{this.ls.setItem(a,b)}catch(c){"QuotaExceededError"===c.name&&(this.clear(),this._noop())}},get:function(a){return this.isExpired(a)&&this.remove(a),f(this.ls.getItem(this._prefix(a)))},set:function(a,c,f){return b.isNumber(f)?this._safeSet(this._ttlKey(a),e(d()+f)):this.ls.removeItem(this._ttlKey(a)),this._safeSet(this._prefix(a),e(c))},remove:function(a){return this.ls.removeItem(this._ttlKey(a)),this.ls.removeItem(this._prefix(a)),this},clear:function(){var a,b=g(this.keyMatcher);for(a=b.length;a--;)this.remove(b[a]);return this},isExpired:function(a){var c=f(this.ls.getItem(this._ttlKey(a)));return!!(b.isNumber(c)&&d()>c)}}),c}(),g=function(){"use strict";function c(a){a=a||{},this.cancelled=!1,this.lastReq=null,this._send=a.transport,this._get=a.limiter?a.limiter(this._get):this._get,this._cache=a.cache===!1?new e(0):h}var d=0,f={},g=6,h=new e(10);return c.setMaxPendingRequests=function(a){g=a},c.resetCache=function(){h.reset()},b.mixin(c.prototype,{_fingerprint:function(b){return b=b||{},b.url+b.type+a.param(b.data||{})},_get:function(a,b){function c(a){b(null,a),k._cache.set(i,a)}function e(){b(!0)}function h(){d--,delete f[i],k.onDeckRequestArgs&&(k._get.apply(k,k.onDeckRequestArgs),k.onDeckRequestArgs=null)}var i,j,k=this;i=this._fingerprint(a),this.cancelled||i!==this.lastReq||((j=f[i])?j.done(c).fail(e):g>d?(d++,f[i]=this._send(a).done(c).fail(e).always(h)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(c,d){var e,f;d=d||a.noop,c=b.isString(c)?{url:c}:c||{},f=this._fingerprint(c),this.cancelled=!1,this.lastReq=f,(e=this._cache.get(f))?d(null,e):this._get(c,d)},cancel:function(){this.cancelled=!0}}),c}(),h=window.SearchIndex=function(){"use strict";function c(c){c=c||{},c.datumTokenizer&&c.queryTokenizer||a.error("datumTokenizer and queryTokenizer are both required"),this.identify=c.identify||b.stringify,this.datumTokenizer=c.datumTokenizer,this.queryTokenizer=c.queryTokenizer,this.matchAnyQueryToken=c.matchAnyQueryToken,this.reset()}function d(a){return a=b.filter(a,function(a){return!!a}),a=b.map(a,function(a){return a.toLowerCase()})}function e(){var a={};return a[i]=[],a[h]={},a}function f(a){for(var b={},c=[],d=0,e=a.length;e>d;d++)b[a[d]]||(b[a[d]]=!0,c.push(a[d]));return c}function g(a,b){var c=0,d=0,e=[];a=a.sort(),b=b.sort();for(var f=a.length,g=b.length;f>c&&g>d;)a[c]<b[d]?c++:a[c]>b[d]?d++:(e.push(a[c]),c++,d++);return e}var h="c",i="i";return b.mixin(c.prototype,{bootstrap:function(a){this.datums=a.datums,this.trie=a.trie},add:function(a){var c=this;a=b.isArray(a)?a:[a],b.each(a,function(a){var f,g;c.datums[f=c.identify(a)]=a,g=d(c.datumTokenizer(a)),b.each(g,function(a){var b,d,g;for(b=c.trie,d=a.split("");g=d.shift();)b=b[h][g]||(b[h][g]=e()),b[i].push(f)})})},get:function(a){var c=this;return b.map(a,function(a){return c.datums[a]})},search:function(a){var c,e,j=this;return c=d(this.queryTokenizer(a)),b.each(c,function(a){var b,c,d,f;if(e&&0===e.length&&!j.matchAnyQueryToken)return!1;for(b=j.trie,c=a.split("");b&&(d=c.shift());)b=b[h][d];if(b&&0===c.length)f=b[i].slice(0),e=e?g(e,f):f;else if(!j.matchAnyQueryToken)return e=[],!1}),e?b.map(f(e),function(a){return j.datums[a]}):[]},all:function(){var a=[];for(var b in this.datums)a.push(this.datums[b]);return a},reset:function(){this.datums={},this.trie=e()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),c}(),i=function(){"use strict";function a(a){this.url=a.url,this.ttl=a.ttl,this.cache=a.cache,this.prepare=a.prepare,this.transform=a.transform,this.transport=a.transport,this.thumbprint=a.thumbprint,this.storage=new f(a.cacheKey)}var c;return c={data:"data",protocol:"protocol",thumbprint:"thumbprint"},b.mixin(a.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},store:function(a){this.cache&&(this.storage.set(c.data,a,this.ttl),this.storage.set(c.protocol,location.protocol,this.ttl),this.storage.set(c.thumbprint,this.thumbprint,this.ttl))},fromCache:function(){var a,b={};return this.cache?(b.data=this.storage.get(c.data),b.protocol=this.storage.get(c.protocol),b.thumbprint=this.storage.get(c.thumbprint),a=b.thumbprint!==this.thumbprint||b.protocol!==location.protocol,b.data&&!a?b.data:null):null},fromNetwork:function(a){function b(){a(!0)}function c(b){a(null,e.transform(b))}var d,e=this;a&&(d=this.prepare(this._settings()),this.transport(d).fail(b).done(c))},clear:function(){return this.storage.clear(),this}}),a}(),j=function(){"use strict";function a(a){this.url=a.url,this.prepare=a.prepare,this.transform=a.transform,this.indexResponse=a.indexResponse,this.transport=new g({cache:a.cache,limiter:a.limiter,transport:a.transport})}return b.mixin(a.prototype,{_settings:function(){return{url:this.url,type:"GET",dataType:"json"}},get:function(a,b){function c(a,c){b(a?[]:e.transform(c))}var d,e=this;if(b)return a=a||"",d=this.prepare(a,this._settings()),this.transport.get(d,c)},cancelLastRequest:function(){this.transport.cancel()}}),a}(),k=function(){"use strict";function d(d){var e;return d?(e={url:null,ttl:864e5,cache:!0,cacheKey:null,thumbprint:"",prepare:b.identity,transform:b.identity,transport:null},d=b.isString(d)?{url:d}:d,d=b.mixin(e,d),!d.url&&a.error("prefetch requires url to be set"),d.transform=d.filter||d.transform,d.cacheKey=d.cacheKey||d.url,d.thumbprint=c+d.thumbprint,d.transport=d.transport?h(d.transport):a.ajax,d):null}function e(c){var d;if(c)return d={url:null,cache:!0,prepare:null,replace:null,wildcard:null,limiter:null,rateLimitBy:"debounce",rateLimitWait:300,transform:b.identity,transport:null},c=b.isString(c)?{url:c}:c,c=b.mixin(d,c),!c.url&&a.error("remote requires url to be set"),c.transform=c.filter||c.transform,c.prepare=f(c),c.limiter=g(c),c.transport=c.transport?h(c.transport):a.ajax,delete c.replace,delete c.wildcard,delete c.rateLimitBy,delete c.rateLimitWait,c}function f(a){function b(a,b){return b.url=f(b.url,a),b}function c(a,b){return b.url=b.url.replace(g,encodeURIComponent(a)),b}function d(a,b){return b}var e,f,g;return e=a.prepare,f=a.replace,g=a.wildcard,e?e:e=f?b:a.wildcard?c:d}function g(a){function c(a){return function(c){return b.debounce(c,a)}}function d(a){return function(c){return b.throttle(c,a)}}var e,f,g;return e=a.limiter,f=a.rateLimitBy,g=a.rateLimitWait,e||(e=/^throttle$/i.test(f)?d(g):c(g)),e}function h(c){return function(d){function e(a){b.defer(function(){g.resolve(a)})}function f(a){b.defer(function(){g.reject(a)})}var g=a.Deferred();return c(d,e,f),g}}return function(c){var f,g;return f={initialize:!0,identify:b.stringify,datumTokenizer:null,queryTokenizer:null,matchAnyQueryToken:!1,sufficient:5,indexRemote:!1,sorter:null,local:[],prefetch:null,remote:null},c=b.mixin(f,c||{}),!c.datumTokenizer&&a.error("datumTokenizer is required"),!c.queryTokenizer&&a.error("queryTokenizer is required"),g=c.sorter,c.sorter=g?function(a){return a.sort(g)}:b.identity,c.local=b.isFunction(c.local)?c.local():c.local,c.prefetch=d(c.prefetch),c.remote=e(c.remote),c}}(),l=function(){"use strict";function c(a){a=k(a),this.sorter=a.sorter,this.identify=a.identify,this.sufficient=a.sufficient,this.indexRemote=a.indexRemote,this.local=a.local,this.remote=a.remote?new j(a.remote):null,this.prefetch=a.prefetch?new i(a.prefetch):null,this.index=new h({identify:this.identify,datumTokenizer:a.datumTokenizer,queryTokenizer:a.queryTokenizer}),a.initialize!==!1&&this.initialize()}var e;return e=window&&window.Bloodhound,c.noConflict=function(){return window&&(window.Bloodhound=e),c},c.tokenizers=d,b.mixin(c.prototype,{__ttAdapter:function(){function a(a,b,d){return c.search(a,b,d)}function b(a,b){return c.search(a,b)}var c=this;return this.remote?a:b},_loadPrefetch:function(){function b(a,b){return a?c.reject():(e.add(b),e.prefetch.store(e.index.serialize()),void c.resolve())}var c,d,e=this;return c=a.Deferred(),this.prefetch?(d=this.prefetch.fromCache())?(this.index.bootstrap(d),c.resolve()):this.prefetch.fromNetwork(b):c.resolve(),c.promise()},_initialize:function(){function a(){b.add(b.local)}var b=this;return this.clear(),(this.initPromise=this._loadPrefetch()).done(a),this.initPromise},initialize:function(a){return!this.initPromise||a?this._initialize():this.initPromise},add:function(a){return this.index.add(a),this},get:function(a){return a=b.isArray(a)?a:[].slice.call(arguments),this.index.get(a)},search:function(a,c,d){function e(a){var c=[];b.each(a,function(a){!b.some(f,function(b){return g.identify(a)===g.identify(b)})&&c.push(a)}),g.indexRemote&&g.add(c),d(c)}var f,g=this;return c=c||b.noop,d=d||b.noop,f=this.sorter(this.index.search(a)),c(this.remote?f.slice():f),this.remote&&f.length<this.sufficient?this.remote.get(a,e):this.remote&&this.remote.cancelLastRequest(),this},all:function(){return this.index.all()},clear:function(){return this.index.reset(),this},clearPrefetchCache:function(){return this.prefetch&&this.prefetch.clear(),this},clearRemoteCache:function(){return g.resetCache(),this},ttAdapter:function(){return this.__ttAdapter()}}),c}();return l}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},isElement:function(a){return!(!a||1!==a.nodeType)},isJQuery:function(b){return b instanceof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,identity:function(a){return a},clone:function(b){return a.extend(!0,{},b)},getIdGenerator:function(){var a=0;return function(){return a++}},templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},stringify:function(a){return b.isString(a)?a:JSON.stringify(a)},noop:function(){}}}(),c=function(){"use strict";function a(a){var g,h;return h=b.mixin({},f,a),g={css:e(),classes:h,html:c(h),selectors:d(h)},{css:g.css,html:g.html,classes:g.classes,selectors:g.selectors,mixin:function(a){b.mixin(a,g)}}}function c(a){return{wrapper:'<span class="'+a.wrapper+'"></span>',menu:'<div class="'+a.menu+'"></div>'}}function d(a){var c={};return b.each(a,function(a,b){c[b]="."+a}),c}function e(){var a={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return b.isMsie()&&b.mixin(a.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),a}var f={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};return a}(),d=function(){"use strict";function c(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d,e;return d="typeahead:",e={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"},b.mixin(c.prototype,{_trigger:function(b,c){var e;return e=a.Event(d+b),(c=c||[]).unshift(e),this.$el.trigger.apply(this.$el,c),e},before:function(a){var b,c;return b=[].slice.call(arguments,1),c=this._trigger("before"+a,b),c.isDefaultPrevented()},trigger:function(a){var b;this._trigger(a,[].slice.call(arguments,1)),(b=e[a])&&this._trigger(b,[].slice.call(arguments,1))}}),c}(),e=function(){"use strict";function a(a,b,c,d){var e;if(!c)return this;for(b=b.split(i),c=d?h(c,d):c,this._callbacks=this._callbacks||{};e=b.shift();)this._callbacks[e]=this._callbacks[e]||{sync:[],async:[]},this._callbacks[e][a].push(c);return this}function b(b,c,d){return a.call(this,"async",b,c,d)}function c(b,c,d){return a.call(this,"sync",b,c,d)}function d(a){var b;if(!this._callbacks)return this;for(a=a.split(i);b=a.shift();)delete this._callbacks[b];return this}function e(a){var b,c,d,e,g;if(!this._callbacks)return this;for(a=a.split(i),d=[].slice.call(arguments,1);(b=a.shift())&&(c=this._callbacks[b]);)e=f(c.sync,this,[b].concat(d)),g=f(c.async,this,[b].concat(d)),e()&&j(g);return this}function f(a,b,c){function d(){for(var d,e=0,f=a.length;!d&&f>e;e+=1)d=a[e].apply(b,c)===!1;return!d}return d}function g(){var a;return a=window.setImmediate?function(a){setImmediate(function(){a()})}:function(a){setTimeout(function(){a()},0)}}function h(a,b){return a.bind?a.bind(b):function(){a.apply(b,[].slice.call(arguments,0))}}var i=/\s+/,j=g();return{onSync:c,onAsync:b,off:d,trigger:e}}(),f=function(a){"use strict";function c(a,c,d){for(var e,f=[],g=0,h=a.length;h>g;g++)f.push(b.escapeRegExChars(a[g]));return e=d?"\\b("+f.join("|")+")\\b":"("+f.join("|")+")",c?new RegExp(e):new RegExp(e,"i")}var d={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(e){function f(b){var c,d,f;return(c=h.exec(b.data))&&(f=a.createElement(e.tagName),e.className&&(f.className=e.className),d=b.splitText(c.index),d.splitText(c[0].length),f.appendChild(d.cloneNode(!0)),b.parentNode.replaceChild(f,d)),!!c}function g(a,b){for(var c,d=3,e=0;e<a.childNodes.length;e++)c=a.childNodes[e],c.nodeType===d?e+=b(c)?1:0:g(c,b)}var h;e=b.mixin({},d,e),e.node&&e.pattern&&(e.pattern=b.isArray(e.pattern)?e.pattern:[e.pattern],h=c(e.pattern,e.caseSensitive,e.wordsOnly),g(e.node,f))}}(window.document),g=function(){"use strict";function c(c,e){c=c||{},c.input||a.error("input is missing"),e.mixin(this),this.$hint=a(c.hint),this.$input=a(c.input),this.query=this.$input.val(),this.queryWhenFocused=this.hasFocus()?this.query:null,this.$overflowHelper=d(this.$input),this._checkLanguageDirection(),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=b.noop)}function d(b){return a('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function f(a,b){return c.normalizeQuery(a)===c.normalizeQuery(b)}function g(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey}var h;return h={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},c.normalizeQuery=function(a){return b.toStr(a).replace(/^\s*/g,"").replace(/\s{2,}/g," ")},b.mixin(c.prototype,e,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.queryWhenFocused=this.query,this.trigger("focused")},_onKeydown:function(a){var b=h[a.which||a.keyCode];this._managePreventDefault(b,a),b&&this._shouldTrigger(b,a)&&this.trigger(b+"Keyed",a)},_onInput:function(){this._setQuery(this.getInputValue()),this.clearHintIfInvalid(),this._checkLanguageDirection()},_managePreventDefault:function(a,b){var c;switch(a){case"up":case"down":c=!g(b);break;default:c=!1}c&&b.preventDefault()},_shouldTrigger:function(a,b){var c;switch(a){case"tab":c=!g(b);break;default:c=!0}return c},_checkLanguageDirection:function(){var a=(this.$input.css("direction")||"ltr").toLowerCase();this.dir!==a&&(this.dir=a,this.$hint.attr("dir",a),this.trigger("langDirChanged",a))},_setQuery:function(a,b){var c,d;c=f(a,this.query),d=c?this.query.length!==a.length:!1,this.query=a,b||c?!b&&d&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},bind:function(){var a,c,d,e,f=this;return a=b.bind(this._onBlur,this),c=b.bind(this._onFocus,this),d=b.bind(this._onKeydown,this),e=b.bind(this._onInput,this),this.$input.on("blur.tt",a).on("focus.tt",c).on("keydown.tt",d),!b.isMsie()||b.isMsie()>9?this.$input.on("input.tt",e):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){h[a.which||a.keyCode]||b.defer(b.bind(f._onInput,f,a))}),this},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getLangDir:function(){return this.dir},getQuery:function(){return this.query||""},setQuery:function(a,b){this.setInputValue(a),this._setQuery(a,b)},hasQueryChangedSinceLastFocus:function(){return this.query!==this.queryWhenFocused},getInputValue:function(){return this.$input.val()},setInputValue:function(a){this.$input.val(a),this.clearHintIfInvalid(),this._checkLanguageDirection()},resetInputValue:function(){this.setInputValue(this.query)},getHint:function(){return this.$hint.val()},setHint:function(a){this.$hint.val(a)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var a,b,c,d;a=this.getInputValue(),b=this.getHint(),c=a!==b&&0===b.indexOf(a),d=""!==a&&c&&!this.hasOverflow(),!d&&this.clearHint()},hasFocus:function(){return this.$input.is(":focus")},hasOverflow:function(){var a=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=a},isCursorAtEnd:function(){var a,c,d;return a=this.$input.val().length,c=this.$input[0].selectionStart,b.isNumber(c)?c===a:document.selection?(d=document.selection.createRange(),d.moveStart("character",-a),a===d.text.length):!0},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$overflowHelper.remove(),this.$hint=this.$input=this.$overflowHelper=a("<div>")}}),c}(),h=function(){"use strict";function c(c,e){c=c||{},c.templates=c.templates||{},c.templates.notFound=c.templates.notFound||c.templates.empty,c.source||a.error("missing source"),c.node||a.error("missing node"),c.name&&!h(c.name)&&a.error("invalid dataset name: "+c.name),e.mixin(this),this.highlight=!!c.highlight,this.name=c.name||j(),this.limit=c.limit||5,this.displayFn=d(c.display||c.displayKey),this.templates=g(c.templates,this.displayFn),this.source=c.source.__ttAdapter?c.source.__ttAdapter():c.source,this.async=b.isUndefined(c.async)?this.source.length>2:!!c.async,this._resetLastSuggestion(),this.$el=a(c.node).addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)}function d(a){function c(b){return b[a]}return a=a||b.stringify,b.isFunction(a)?a:c}function g(c,d){function e(b){return a("<div>").text(d(b))}return{notFound:c.notFound&&b.templatify(c.notFound),pending:c.pending&&b.templatify(c.pending),header:c.header&&b.templatify(c.header),footer:c.footer&&b.templatify(c.footer),suggestion:c.suggestion||e}}function h(a){return/^[_a-zA-Z0-9-]+$/.test(a)}var i,j;return i={val:"tt-selectable-display",obj:"tt-selectable-object"},j=b.getIdGenerator(),c.extractData=function(b){var c=a(b);return c.data(i.obj)?{val:c.data(i.val)||"",obj:c.data(i.obj)||null}:null},b.mixin(c.prototype,e,{_overwrite:function(a,b){b=b||[],b.length?this._renderSuggestions(a,b):this.async&&this.templates.pending?this._renderPending(a):!this.async&&this.templates.notFound?this._renderNotFound(a):this._empty(),this.trigger("rendered",this.name,b,!1)},_append:function(a,b){b=b||[],b.length&&this.$lastSuggestion.length?this._appendSuggestions(a,b):b.length?this._renderSuggestions(a,b):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(a),this.trigger("rendered",this.name,b,!0)},_renderSuggestions:function(a,b){var c;c=this._getSuggestionsFragment(a,b),this.$lastSuggestion=c.children().last(),this.$el.html(c).prepend(this._getHeader(a,b)).append(this._getFooter(a,b))},_appendSuggestions:function(a,b){var c,d;c=this._getSuggestionsFragment(a,b),d=c.children().last(),this.$lastSuggestion.after(c),this.$lastSuggestion=d},_renderPending:function(a){var b=this.templates.pending;this._resetLastSuggestion(),b&&this.$el.html(b({query:a,dataset:this.name}))},_renderNotFound:function(a){var b=this.templates.notFound;this._resetLastSuggestion(),b&&this.$el.html(b({query:a,dataset:this.name}))},_empty:function(){this.$el.empty(),this._resetLastSuggestion()},_getSuggestionsFragment:function(c,d){var e,g=this;return e=document.createDocumentFragment(),b.each(d,function(b){var d,f;f=g._injectQuery(c,b),d=a(g.templates.suggestion(f)).data(i.obj,b).data(i.val,g.displayFn(b)).addClass(g.classes.suggestion+" "+g.classes.selectable),e.appendChild(d[0])}),this.highlight&&f({className:this.classes.highlight,node:e,pattern:c}),a(e)},_getFooter:function(a,b){return this.templates.footer?this.templates.footer({query:a,suggestions:b,dataset:this.name}):null},_getHeader:function(a,b){return this.templates.header?this.templates.header({query:a,suggestions:b,dataset:this.name}):null},_resetLastSuggestion:function(){this.$lastSuggestion=a()},_injectQuery:function(a,c){return b.isObject(c)?b.mixin({_query:a},c):c},update:function(b){function c(a){g||(g=!0,a=(a||[]).slice(0,e.limit),h=a.length,e._overwrite(b,a),h<e.limit&&e.async&&e.trigger("asyncRequested",b))}function d(c){c=c||[],!f&&h<e.limit&&(e.cancel=a.noop,e._append(b,c.slice(0,e.limit-h)),h+=c.length,e.async&&e.trigger("asyncReceived",b))}var e=this,f=!1,g=!1,h=0;this.cancel(),this.cancel=function(){f=!0,e.cancel=a.noop,e.async&&e.trigger("asyncCanceled",b)},this.source(b,c,d),!g&&c([])},cancel:a.noop,clear:function(){this._empty(),this.cancel(),this.trigger("cleared")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=a("<div>")}}),c}(),i=function(){"use strict";function c(c,d){function e(b){var c=f.$node.find(b.node).first();return b.node=c.length?c:a("<div>").appendTo(f.$node),new h(b,d)}var f=this;c=c||{},c.node||a.error("node is required"),d.mixin(this),this.$node=a(c.node),this.query=null,this.datasets=b.map(c.datasets,e)}return b.mixin(c.prototype,e,{_onSelectableClick:function(b){this.trigger("selectableClicked",a(b.currentTarget))},_onRendered:function(a,b,c,d){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetRendered",b,c,d)},_onCleared:function(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetCleared")},_propagate:function(){this.trigger.apply(this,arguments)},_allDatasetsEmpty:function(){function a(a){return a.isEmpty()}return b.every(this.datasets,a)},_getSelectables:function(){return this.$node.find(this.selectors.selectable)},_removeCursor:function(){var a=this.getActiveSelectable();a&&a.removeClass(this.classes.cursor)},_ensureVisible:function(a){var b,c,d,e;b=a.position().top,c=b+a.outerHeight(!0),d=this.$node.scrollTop(),e=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10),0>b?this.$node.scrollTop(d+b):c>e&&this.$node.scrollTop(d+(c-e))},bind:function(){var a,c=this;return a=b.bind(this._onSelectableClick,this),this.$node.on("click.tt",this.selectors.selectable,a),b.each(this.datasets,function(a){a.onSync("asyncRequested",c._propagate,c).onSync("asyncCanceled",c._propagate,c).onSync("asyncReceived",c._propagate,c).onSync("rendered",c._onRendered,c).onSync("cleared",c._onCleared,c)}),this},isOpen:function(){return this.$node.hasClass(this.classes.open)},open:function(){this.$node.scrollTop(0),this.$node.addClass(this.classes.open)},close:function(){this.$node.removeClass(this.classes.open),this._removeCursor()},setLanguageDirection:function(a){this.$node.attr("dir",a)},selectableRelativeToCursor:function(a){var b,c,d,e;return c=this.getActiveSelectable(),b=this._getSelectables(),d=c?b.index(c):-1,e=d+a,e=(e+1)%(b.length+1)-1,e=-1>e?b.length-1:e,-1===e?null:b.eq(e)},setCursor:function(a){this._removeCursor(),(a=a&&a.first())&&(a.addClass(this.classes.cursor),this._ensureVisible(a))},getSelectableData:function(a){return a&&a.length?h.extractData(a):null},getActiveSelectable:function(){var a=this._getSelectables().filter(this.selectors.cursor).first();return a.length?a:null},getTopSelectable:function(){var a=this._getSelectables().first();return a.length?a:null},update:function(a){function c(b){b.update(a)}var d=a!==this.query;return d&&(this.query=a,b.each(this.datasets,c)),d},empty:function(){function a(a){a.clear()}b.each(this.datasets,a),this.query=null,this.$node.addClass(this.classes.empty)},destroy:function(){function c(a){a.destroy()}this.$node.off(".tt"),this.$node=a("<div>"),b.each(this.datasets,c)}}),c}(),j=function(){"use strict";function a(){i.apply(this,[].slice.call(arguments,0))}var c=i.prototype;return b.mixin(a.prototype,i.prototype,{open:function(){return!this._allDatasetsEmpty()&&this._show(),c.open.apply(this,[].slice.call(arguments,0))},close:function(){return this._hide(),c.close.apply(this,[].slice.call(arguments,0))},_onRendered:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),c._onRendered.apply(this,[].slice.call(arguments,0))},_onCleared:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),c._onCleared.apply(this,[].slice.call(arguments,0))},setLanguageDirection:function(a){return this.$node.css("ltr"===a?this.css.ltr:this.css.rtl),c.setLanguageDirection.apply(this,[].slice.call(arguments,0))},_hide:function(){this.$node.hide()},_show:function(){this.$node.css("display","block")}}),a}(),k=function(){"use strict";function c(c,e){var f,g,h,i,j,k,l,m,n,o,p;c=c||{},c.input||a.error("missing input"),c.menu||a.error("missing menu"),c.eventBus||a.error("missing event bus"),e.mixin(this),this.eventBus=c.eventBus,this.minLength=b.isNumber(c.minLength)?c.minLength:1,this.input=c.input,this.menu=c.menu,this.enabled=!0,this.active=!1,this.input.hasFocus()&&this.activate(),this.dir=this.input.getLangDir(),this._hacks(),this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this),f=d(this,"activate","open","_onFocused"),g=d(this,"deactivate","_onBlurred"),h=d(this,"isActive","isOpen","_onEnterKeyed"),i=d(this,"isActive","isOpen","_onTabKeyed"),j=d(this,"isActive","_onEscKeyed"),k=d(this,"isActive","open","_onUpKeyed"),l=d(this,"isActive","open","_onDownKeyed"),m=d(this,"isActive","isOpen","_onLeftKeyed"),n=d(this,"isActive","isOpen","_onRightKeyed"),o=d(this,"_openIfActive","_onQueryChanged"),p=d(this,"_openIfActive","_onWhitespaceChanged"),this.input.bind().onSync("focused",f,this).onSync("blurred",g,this).onSync("enterKeyed",h,this).onSync("tabKeyed",i,this).onSync("escKeyed",j,this).onSync("upKeyed",k,this).onSync("downKeyed",l,this).onSync("leftKeyed",m,this).onSync("rightKeyed",n,this).onSync("queryChanged",o,this).onSync("whitespaceChanged",p,this).onSync("langDirChanged",this._onLangDirChanged,this);
}function d(a){var c=[].slice.call(arguments,1);return function(){var d=[].slice.call(arguments);b.each(c,function(b){return a[b].apply(a,d)})}}return b.mixin(c.prototype,{_hacks:function(){var c,d;c=this.input.$input||a("<div>"),d=this.menu.$node||a("<div>"),c.on("blur.tt",function(a){var e,f,g;e=document.activeElement,f=d.is(e),g=d.has(e).length>0,b.isMsie()&&(f||g)&&(a.preventDefault(),a.stopImmediatePropagation(),b.defer(function(){c.focus()}))}),d.on("mousedown.tt",function(a){a.preventDefault()})},_onSelectableClicked:function(a,b){this.select(b)},_onDatasetCleared:function(){this._updateHint()},_onDatasetRendered:function(a,b,c,d){this._updateHint(),this.eventBus.trigger("render",c,d,b)},_onAsyncRequested:function(a,b,c){this.eventBus.trigger("asyncrequest",c,b)},_onAsyncCanceled:function(a,b,c){this.eventBus.trigger("asynccancel",c,b)},_onAsyncReceived:function(a,b,c){this.eventBus.trigger("asyncreceive",c,b)},_onFocused:function(){this._minLengthMet()&&this.menu.update(this.input.getQuery())},_onBlurred:function(){this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change",this.input.getQuery())},_onEnterKeyed:function(a,b){var c;(c=this.menu.getActiveSelectable())&&this.select(c)&&b.preventDefault()},_onTabKeyed:function(a,b){var c;(c=this.menu.getActiveSelectable())?this.select(c)&&b.preventDefault():(c=this.menu.getTopSelectable())&&this.autocomplete(c)&&b.preventDefault()},_onEscKeyed:function(){this.close()},_onUpKeyed:function(){this.moveCursor(-1)},_onDownKeyed:function(){this.moveCursor(1)},_onLeftKeyed:function(){"rtl"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onRightKeyed:function(){"ltr"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getTopSelectable())},_onQueryChanged:function(a,b){this._minLengthMet(b)?this.menu.update(b):this.menu.empty()},_onWhitespaceChanged:function(){this._updateHint()},_onLangDirChanged:function(a,b){this.dir!==b&&(this.dir=b,this.menu.setLanguageDirection(b))},_openIfActive:function(){this.isActive()&&this.open()},_minLengthMet:function(a){return a=b.isString(a)?a:this.input.getQuery()||"",a.length>=this.minLength},_updateHint:function(){var a,c,d,e,f,h,i;a=this.menu.getTopSelectable(),c=this.menu.getSelectableData(a),d=this.input.getInputValue(),!c||b.isBlankString(d)||this.input.hasOverflow()?this.input.clearHint():(e=g.normalizeQuery(d),f=b.escapeRegExChars(e),h=new RegExp("^(?:"+f+")(.+$)","i"),i=h.exec(c.val),i&&this.input.setHint(d+i[1]))},isEnabled:function(){return this.enabled},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},isActive:function(){return this.active},activate:function(){return this.isActive()?!0:!this.isEnabled()||this.eventBus.before("active")?!1:(this.active=!0,this.eventBus.trigger("active"),!0)},deactivate:function(){return this.isActive()?this.eventBus.before("idle")?!1:(this.active=!1,this.close(),this.eventBus.trigger("idle"),!0):!0},isOpen:function(){return this.menu.isOpen()},open:function(){return this.isOpen()||this.eventBus.before("open")||(this.menu.open(),this._updateHint(),this.eventBus.trigger("open")),this.isOpen()},close:function(){return this.isOpen()&&!this.eventBus.before("close")&&(this.menu.close(),this.input.clearHint(),this.input.resetInputValue(),this.eventBus.trigger("close")),!this.isOpen()},setVal:function(a){this.input.setQuery(b.toStr(a))},getVal:function(){return this.input.getQuery()},select:function(a){var b=this.menu.getSelectableData(a);return b&&!this.eventBus.before("select",b.obj)?(this.input.setQuery(b.val,!0),this.eventBus.trigger("select",b.obj),this.close(),!0):!1},autocomplete:function(a){var b,c,d;return b=this.input.getQuery(),c=this.menu.getSelectableData(a),d=c&&b!==c.val,d&&!this.eventBus.before("autocomplete",c.obj)?(this.input.setQuery(c.val),this.eventBus.trigger("autocomplete",c.obj),!0):!1},moveCursor:function(a){var b,c,d,e,f;return b=this.input.getQuery(),c=this.menu.selectableRelativeToCursor(a),d=this.menu.getSelectableData(c),e=d?d.obj:null,f=this._minLengthMet()&&this.menu.update(b),f||this.eventBus.before("cursorchange",e)?!1:(this.menu.setCursor(c),d?this.input.setInputValue(d.val):(this.input.resetInputValue(),this._updateHint()),this.eventBus.trigger("cursorchange",e),!0)},destroy:function(){this.input.destroy(),this.menu.destroy()}}),c}();!function(){"use strict";function e(b,c){b.each(function(){var b,d=a(this);(b=d.data(p.typeahead))&&c(b,d)})}function f(a,b){return a.clone().addClass(b.classes.hint).removeData().css(b.css.hint).css(l(a)).prop("readonly",!0).removeAttr("id name placeholder required").attr({autocomplete:"off",spellcheck:"false",tabindex:-1})}function h(a,b){a.data(p.attrs,{dir:a.attr("dir"),autocomplete:a.attr("autocomplete"),spellcheck:a.attr("spellcheck"),style:a.attr("style")}),a.addClass(b.classes.input).attr({autocomplete:"off",spellcheck:!1});try{!a.attr("dir")&&a.attr("dir","auto")}catch(c){}return a}function l(a){return{backgroundAttachment:a.css("background-attachment"),backgroundClip:a.css("background-clip"),backgroundColor:a.css("background-color"),backgroundImage:a.css("background-image"),backgroundOrigin:a.css("background-origin"),backgroundPosition:a.css("background-position"),backgroundRepeat:a.css("background-repeat"),backgroundSize:a.css("background-size")}}function m(a){var c,d;c=a.data(p.www),d=a.parent().filter(c.selectors.wrapper),b.each(a.data(p.attrs),function(c,d){b.isUndefined(c)?a.removeAttr(d):a.attr(d,c)}),a.removeData(p.typeahead).removeData(p.www).removeData(p.attr).removeClass(c.classes.input),d.length&&(a.detach().insertAfter(d),d.remove())}function n(c){var d,e;return d=b.isJQuery(c)||b.isElement(c),e=d?a(c).first():[],e.length?e:null}var o,p,q;o=a.fn.typeahead,p={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"},q={initialize:function(e,l){function m(){var c,m,q,r,s,t,u,v,w,x,y;b.each(l,function(a){a.highlight=!!e.highlight}),c=a(this),m=a(o.html.wrapper),q=n(e.hint),r=n(e.menu),s=e.hint!==!1&&!q,t=e.menu!==!1&&!r,s&&(q=f(c,o)),t&&(r=a(o.html.menu).css(o.css.menu)),q&&q.val(""),c=h(c,o),(s||t)&&(m.css(o.css.wrapper),c.css(s?o.css.input:o.css.inputWithNoHint),c.wrap(m).parent().prepend(s?q:null).append(t?r:null)),y=t?j:i,u=new d({el:c}),v=new g({hint:q,input:c},o),w=new y({node:r,datasets:l},o),x=new k({input:v,menu:w,eventBus:u,minLength:e.minLength},o),c.data(p.www,o),c.data(p.typeahead,x)}var o;return l=b.isArray(l)?l:[].slice.call(arguments,1),e=e||{},o=c(e.classNames),this.each(m)},isEnabled:function(){var a;return e(this.first(),function(b){a=b.isEnabled()}),a},enable:function(){return e(this,function(a){a.enable()}),this},disable:function(){return e(this,function(a){a.disable()}),this},isActive:function(){var a;return e(this.first(),function(b){a=b.isActive()}),a},activate:function(){return e(this,function(a){a.activate()}),this},deactivate:function(){return e(this,function(a){a.deactivate()}),this},isOpen:function(){var a;return e(this.first(),function(b){a=b.isOpen()}),a},open:function(){return e(this,function(a){a.open()}),this},close:function(){return e(this,function(a){a.close()}),this},select:function(b){var c=!1,d=a(b);return e(this.first(),function(a){c=a.select(d)}),c},autocomplete:function(b){var c=!1,d=a(b);return e(this.first(),function(a){c=a.autocomplete(d)}),c},moveCursor:function(a){var b=!1;return e(this.first(),function(c){b=c.moveCursor(a)}),b},val:function(a){var c;return arguments.length?(e(this,function(c){c.setVal(b.toStr(a))}),this):(e(this.first(),function(a){c=a.getVal()}),c)},destroy:function(){return e(this,function(a,b){m(b),a.destroy()}),this}},a.fn.typeahead=function(a){return q[a]?q[a].apply(this,[].slice.call(arguments,1)):q.initialize.apply(this,arguments)},a.fn.typeahead.noConflict=function(){return a.fn.typeahead=o,this}}()}),function(a,b,c,d){function e(b,c){var f=this;"object"==typeof c&&(delete c.refresh,delete c.render,a.extend(this,c)),this.$element=a(b),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var g=(this.position+"").toLowerCase().match(/\S+/g)||[];return g.length<1&&g.push("center"),1==g.length&&g.push(g[0]),"top"!=g[0]&&"bottom"!=g[0]&&"left"!=g[1]&&"right"!=g[1]||(g=[g[1],g[0]]),this.positionX!=d&&(g[0]=this.positionX.toLowerCase()),this.positionY!=d&&(g[1]=this.positionY.toLowerCase()),f.positionX=g[0],f.positionY=g[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/)?(this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):navigator.userAgent.match(/(Android)/)?(this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this):(this.$mirror=a("<div />").prependTo("body"),this.$slider=a("<img />").prependTo(this.$mirror),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){f.naturalHeight&&f.naturalWidth||(f.naturalHeight=this.naturalHeight||this.height||1,f.naturalWidth=this.naturalWidth||this.width||1),f.aspectRatio=f.naturalWidth/f.naturalHeight,e.isSetup||e.setup(),e.sliders.push(f),e.isFresh=!1,e.requestRender()}),this.$slider[0].src=this.imageSrc,void((this.naturalHeight&&this.naturalWidth||this.$slider[0].complete)&&this.$slider.trigger("load")))}function f(d){return this.each(function(){var f=a(this),g="object"==typeof d&&d;this==b||this==c||f.is("body")?e.configure(g):f.data("px.parallax")||(g=a.extend({},f.data(),g),f.data("px.parallax",new e(this,g))),"string"==typeof d&&e[d]()})}!function(){for(var a=0,c=["ms","moz","webkit","o"],d=0;d<c.length&&!b.requestAnimationFrame;++d)b.requestAnimationFrame=b[c[d]+"RequestAnimationFrame"],b.cancelAnimationFrame=b[c[d]+"CancelAnimationFrame"]||b[c[d]+"CancelRequestAnimationFrame"];b.requestAnimationFrame||(b.requestAnimationFrame=function(c){var d=(new Date).getTime(),e=Math.max(0,16-(d-a)),f=b.setTimeout(function(){c(d+e)},e);return a=d+e,f}),b.cancelAnimationFrame||(b.cancelAnimationFrame=function(a){clearTimeout(a)})}(),a.extend(e.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var a=e.winHeight,b=e.docHeight,c=Math.min(this.boxOffsetTop,b-a),d=Math.max(this.boxOffsetTop+this.boxHeight-a,0),f=this.boxHeight+(c-d)*(1-this.speed)|0,g=(this.boxOffsetTop-c)*(1-this.speed)|0;if(f*this.aspectRatio>=this.boxWidth){this.imageWidth=f*this.aspectRatio|0,this.imageHeight=f,this.offsetBaseTop=g;var h=this.imageWidth-this.boxWidth;"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-h:isNaN(this.positionX)?this.offsetLeft=-h/2|0:this.offsetLeft=Math.max(this.positionX,-h)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var h=this.imageHeight-f;"top"==this.positionY?this.offsetBaseTop=g:"bottom"==this.positionY?this.offsetBaseTop=g-h:isNaN(this.positionY)?this.offsetBaseTop=g-h/2|0:this.offsetBaseTop=g+Math.max(this.positionY,-h)}},render:function(){var a=e.scrollTop,b=e.scrollLeft,c=this.overScrollFix?e.overScroll:0,d=a+e.winHeight;this.boxOffsetBottom>a&&this.boxOffsetTop<d?this.visibility="visible":this.visibility="hidden",this.mirrorTop=this.boxOffsetTop-a,this.mirrorLeft=this.boxOffsetLeft-b,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed),this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-c,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),a.extend(e,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var d=a(c),f=a(b);f.on("resize.px.parallax load.px.parallax",function(){e.winHeight=f.height(),e.winWidth=f.width(),e.docHeight=d.height(),e.docWidth=d.width(),e.isFresh=!1,e.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){var a=e.docHeight-e.winHeight,b=e.docWidth-e.winWidth;e.scrollTop=Math.max(0,Math.min(a,f.scrollTop())),e.scrollLeft=Math.max(0,Math.min(b,f.scrollLeft())),e.overScroll=Math.max(f.scrollTop()-a,Math.min(f.scrollTop(),0)),e.requestRender()}),this.isReady=!0}},configure:function(b){"object"==typeof b&&(delete b.refresh,delete b.render,a.extend(this.prototype,b))},refresh:function(){a.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),a.each(this.sliders,function(){this.render()})},requestRender:function(){var a=this;this.isBusy||(this.isBusy=!0,b.requestAnimationFrame(function(){a.render(),a.isBusy=!1}))}});var g=a.fn.parallax;a.fn.parallax=f,a.fn.parallax.Constructor=e,a.fn.parallax.noConflict=function(){return a.fn.parallax=g,this},a(c).on("ready.px.parallax.data-api",function(){a('[data-parallax="scroll"]').parallax()})}(jQuery,window,document),/*! Lazy Load XT v1.0.5 2014-06-05
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */
function(a,b,c){function d(b){var c=b.lazyLoadXT.srcAttrS,d=a.isFunction(c),e=b.children("img"),g=d?c(e):e.attr(c);return f&&b.children("br").each(function(b,e){var h=a(e),i=d?c(h):h.attr(c),j=h.attr("media");!i||j&&!f(j).matches||(g=i)}),e.attr("src",g),g}var e=a.lazyLoadXT,f=b.matchMedia;e.selector+=",picture",a(c).on("lazyinit","img",function(a,b){b.parent("picture").length&&(b.lazyLoadXT.srcAttr="")}).on("lazyinit","picture",function(b,c){if(c[0].firstChild){var d=c.children("img");d.length||(d=a("<img>").appendTo(c)),d.attr("width",c.attr("width")),d.attr("height",c.attr("height"))}}).on("lazyshow","picture",function(a,b){if(b[0].firstChild){var c=b.lazyLoadXT;c.srcAttrS=c.srcAttr,c.srcAttr=d}})}(window.jQuery||window.Zepto||window.$,window,document),/*! Lazy Load XT v1.0.5 2014-06-05
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */
function(a,b,c,d){function e(b,c){return Math[c].apply(null,a.map(b,function(a){return a[i]}))}function f(a){return a[i]>=t[i]||a[i]===j}function g(a){return a[i]===j}function h(d){var h=d.attr(k.srcsetAttr);if(!h)return!1;var l=h.split(",").map(function(a){return{url:m.exec(a)[1],w:parseFloat((n.exec(a)||q)[1]),h:parseFloat((o.exec(a)||q)[1]),x:parseFloat((p.exec(a)||r)[1])}});if(!l.length)return!1;var s,u,v=c.documentElement;t={w:b.innerWidth||v.clientWidth,h:b.innerHeight||v.clientHeight,x:b.devicePixelRatio||1};for(s in t)i=s,j=e(l,"max"),l=a.grep(l,f);for(s in t)i=s,j=e(l,"min"),l=a.grep(l,g);return u=l[0].url,k.srcsetExtended&&(u=(d.attr(k.srcsetBaseAttr)||"")+u+(d.attr(k.srcsetExtAttr)||"")),u}var i,j,k=a.lazyLoadXT,l=function(){return"srcset"in new Image}(),m=/^\s*(\S*)/,n=/\S\s+(\d+)w/,o=/\S\s+(\d+)h/,p=/\S\s+([\d\.]+)x/,q=[0,1/0],r=[0,1],s={srcsetAttr:"data-srcset",srcsetExtended:!0,srcsetBaseAttr:"data-srcset-base",srcsetExtAttr:"data-srcset-ext"},t={w:0,h:0,x:0};for(i in s)k[i]===d&&(k[i]=s[i]);k.selector+=",img["+k.srcsetAttr+"]",a(c).on("lazyshow","img",function(a,b){var c=b.attr(k.srcsetAttr);c&&(!k.srcsetExtended&&l?b.attr("srcset",c):b.lazyLoadXT.srcAttr=h)})}(window.jQuery||window.Zepto||window.$,window,document);
/*!
 * Telekom Toolbox Template v0.0.0 (https://www.design.telekom.com)
 * Copyright 2021 
 */

+function(a){"use strict";function b(a){return a.getAttribute&&a.getAttribute("class")||""}var c=/\S+/g,d=/[\t\r\n\f]/g;a.fn.addClass=function(e){var f,g,h,i,j,k,l,m=0;if(a.isFunction(e))return this.each(function(c){a(this).addClass(e.call(this,c,b(this)))});if("string"==typeof e&&e)for(f=e.match(c)||[];g=this[m++];)if(i=b(g),h=1===g.nodeType&&(" "+i+" ").replace(d," ")){for(k=0;j=f[k++];)h.indexOf(" "+j+" ")<0&&(h+=j+" ");l=a.trim(h),i!==l&&g.setAttribute("class",l)}return this},a.fn.removeClass=function(e){var f,g,h,i,j,k,l,m=0;if(a.isFunction(e))return this.each(function(c){a(this).removeClass(e.call(this,c,b(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(f=e.match(c)||[];g=this[m++];)if(i=b(g),h=1===g.nodeType&&(" "+i+" ").replace(d," ")){for(k=0;j=f[k++];)for(;h.indexOf(" "+j+" ")>-1;)h=h.replace(" "+j+" "," ");l=a.trim(h),i!==l&&g.setAttribute("class",l)}return this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),d=c.data("tc.inputclear");d||c.data("tc.inputclear",d=new e(this)),"string"==typeof b&&d[b]()})}var c=".input-clearable",d='[data-clear="input"]',e=function(b){a(b).on("click",d,this.clear)};e.prototype.clear=function(b){var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.closest(c).find(".form-input")),f.trigger(b=a.Event("clear.tc.inputclear")),b.isDefaultPrevented()||(a.fn.typeahead?f.typeahead("val",""):f.val(""),f.closest(c).removeClass("in"),f.trigger("focus"),f.trigger("cleared.tc.inputclear"))};var f=a.fn.inputclear;a.fn.inputclear=b,a.fn.inputclear.Constructor=e,a.fn.inputclear.noConflict=function(){return a.fn.inputclear=f,this},a(document).on("keyup.tc.inputclear.data-api keydown.tc.inputclear.data-api",c+" .form-input",function(b){a(b.target).closest(c).toggleClass("in",a(b.target).val().length>0)}).on("click.tc.inputclear.data-api",d,e.prototype.clear)}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("tc.search"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("tc.search",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="search"][href="#'+b.id+'"],[data-toggle="search"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.toggle&&this.toggle()};d.DEFAULTS={toggle:!0,keyboard:!0},d.TRANSITION_DURATION=250,d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.tc.search");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.$element.removeClass("search").attr("aria-expanded",!0),this.$trigger.attr("aria-expanded",!0).blur(),this.transitioning=1;var c=function(){this.$element.addClass("search in"),this.transitioning=0,this.enforceFocus(),this.escape(),this.$element.trigger("shown.tc.search"),this.$element.on("blur.dismiss.tc.search","input",a.proxy(this.hide,this))};return a.support.transition?void this.$element.one("tcTransitionEnd",a.proxy(c,this)).emulateTransitionEnd(d.TRANSITION_DURATION):c.call(this)}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.tc.search");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.$element.removeClass("search in").attr("aria-expanded",!1),this.$trigger.attr("aria-expanded",!1),this.transitioning=1;var c=function(){this.transitioning=0,this.$element.addClass("search").trigger("hidden.tc.search"),this.$element.off("blur.dismiss.tc.search","input")};return a.support.transition?void this.$element.one("tcTransitionEnd",a.proxy(c,this)).emulateTransitionEnd(d.TRANSITION_DURATION):c.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.enforceFocus=function(){this.$element.find("input").trigger("focus")},d.prototype.escape=function(){this.$element.hasClass("in")&&this.options.keyboard?this.$element.on("keydown.dismiss.tc.search",a.proxy(function(a){27==a.which&&this.hide()},this)):this.$element.hasClass("in")||this.$element.off("keydown.dismiss.tc.search")};var e=a.fn.search;a.fn.search=c,a.fn.search.Constructor=d,a.fn.search.noConflict=function(){return a.fn.search=e,this},a(document).on("click.tc.search.data-api",'[data-toggle="search"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("tc.search"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.tc.tab",{relatedTarget:b[0]}),g=a.Event("show.tc.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.tc.tab",relatedTarget:b[0]}),b.trigger({type:"shown.tc.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.tc.tab.data-api",'[data-toggle="tab"]',e).on("click.tc.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("tc."+b.ride),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&/destroy|hide/.test(b)||(e||d.data("tc."+b.ride,e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("sequencer",a,b),this.initUI(),this.initListeners()};c.DEFAULTS={keyboard:!1,autoplay:!0,loop:!0,interval:5e3,animationDuration:500},c.prototype.init=function(b,c,d){this.type=b,this.$element=a(c),this.$items=this.$element.find("li"),this.$items.length<2||(this.options={},a.extend(this.options,this.DEFAULTS,d),this.timer=null,this.$paginator=null,this.metaDeltaPosition=0,this.metaPosition=0,this.metaWidth=1,this.metaItemWidth=1,this.metaIdx=0,this.id="",this.$element.attr("id")?this.id=this.$element.attr("id"):this.$element.attr("id",this.id="tc-"+this.type+"_"+Math.round(4294967295*Math.random()).toString(36)+"-"+(new Date).valueOf().toString(36)))},c.prototype.initListeners=function(){this.resizeHandler(),this.options.loop&&this.startTimer(),a(window).on("resize.tc."+this.type,a.proxy(this.resizeHandler,this)),a(document).on("click.tc."+this.type+".data-api","[data-slide]",c.prototype.clickHandler).on("click.tc."+this.type+".data-api","[data-slide-to]",c.prototype.clickHandler)},c.prototype.clickHandler=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("ride");if(f.hasClass(g)){var h=a.extend({},f.data(),e.data()),i=e.attr("data-slide-to");b.call(f,h),i&&(c.stopImmediatePropagation(),c.preventDefault(),f.data("tc."+g).paginationClickHandler(c,parseInt(i,10))),"prev"===e.attr("data-slide")?(c.stopImmediatePropagation(),c.preventDefault(),f.data("tc."+g).prev()):"next"===e.attr("data-slide")&&(c.stopImmediatePropagation(),c.preventDefault(),f.data("tc."+g).next())}},c.prototype.initUI=function(){var b=this;b.$element.addClass("js"),b.options.keyboard&&a(document).on("keydown.tc."+this.type,a.proxy(b.keydown,b)),b.$element.find(">.sequencer-items>.sequencer-item>.item-label").each(function(c,d){var e=a(d);e.attr("data-slide-to")||e.attr("data-slide-to",c),e.attr("data-target")||e.attr("data-target","#"+b.id)}),b.$mockElement=a('<div id="'+b.id+'_mock"></div>')},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.paginationClickHandler=function(a,b){a.preventDefault(),this.setMetaIdx(b)},c.prototype.setMetaIdx=function(a){this.options.loop||(a=Math.max(0,Math.min(a,this.$items.length-1))),this.metaIdx===a&&this.animating||(this.metaIdx=a,this.animateMeta(-this.metaIdx*this.metaItemWidth))},c.prototype.animating=!1,c.prototype.animateMeta=function(a){var b=this,c=b.metaPosition;b.stopAnimationAndTimer(),c!==a&&(b.animating=!0,b.$mockElement.css("left",0).animate({left:1},{duration:b.options.animationDuration,step:function(d){b.setMetaPosition((1-d)*c+d*a),b.updateItems()},complete:function(){b.stopAnimationAndTimer(),b.metaIdx=b.normalizedMetaIdx(),b.metaPosition=(b.metaPosition-b.metaWidth)%b.metaWidth,b.setMetaPosition(b.metaPosition),b.updateItems(),b.options.loop&&b.startTimer()},always:function(){b.animating=!1}}))},c.prototype.startTimer=function(){this.stopAnimationAndTimer(),this.options.autoplay&&(this.timer=window.setTimeout(a.proxy(this.next,this),this.options.interval))},c.prototype.currentPositionMetaIdx=function(){this.metaDeltaPosition=this.metaPosition/this.metaWidth;var a=Math.round(this.$items.length-this.metaDeltaPosition*this.$items.length)%this.$items.length;return a=(a+this.$items.length)%this.$items.length},c.prototype.normalizedMetaIdx=function(){return(this.metaIdx+this.$items.length)%this.$items.length},c.prototype.setMetaPosition=function(a){this.options.loop?this.metaPosition=a:this.metaPosition=Math.max(-this.metaWidth+this.metaItemWidth,Math.min(a,0))},c.prototype.translateMetaPosition=function(a){a||(a=0),this.setMetaPosition(this.metaPosition+a),this.updateItems()},c.prototype.updateItems=function(){var b=this;a.each(b.$items,function(c,d){var e=a(d),f=(c*b.metaItemWidth+b.metaWidth+b.metaPosition%b.metaWidth+.5*b.metaWidth)%b.metaWidth-.5*b.metaWidth,g=f/b.metaItemWidth,h=1-Math.abs(g);h=Math.max(0,Math.min(h,1));var i=e.find(".item-image");i.css({opacity:h})});var c=this.$items.eq(this.normalizedMetaIdx()).addClass("active");this.$items.not(c).removeClass("active")},c.prototype.stopAnimationAndTimer=function(a){this.$mockElement.stop(!0,a),this.timer&&(window.clearTimeout(this.timer),this.timer=null)},c.prototype.prev=function(){this.setMetaIdx(this.metaIdx-1)},c.prototype.next=function(){this.setMetaIdx(this.metaIdx+1)},c.prototype.resizeHandler=function(){this.stopAnimationAndTimer(!0);var b=this.$items.find(".item-label"),c=this.$items.find(".item-image"),d=0,e=0;b.each(function(b,c){var e=a(c);e.css({top:d}),d+=e.innerHeight()}),c.each(function(b,c){e=Math.max(e,a(c).outerHeight())});var f=this.$element.find("."+this.type+"-items"),g=Math.max(e,d),h=f.width();f.height(g),c.each(function(c,d){var e=a(d);e.css({top:.5*(g-e.outerHeight()),left:.5*(h-b.first().outerWidth()-e.outerWidth())})}),this.currentPositionMetaIdx(),this.metaItemWidth=this.$element.width(),this.metaWidth=this.metaItemWidth*this.$items.length,this.metaPosition=this.metaDeltaPosition*this.metaWidth,this.updateItems(),this.startTimer()},c.prototype.destroy=function(){this.stopAnimationAndTimer(!0)};var d=a.fn.sequencer;a.fn.sequencer=b,a.fn.sequencer.Constructor=c,a.fn.sequencer.noConflict=function(){return a.fn.sequencer=d,this},a(window).on("load",function(){a('[data-ride="sequencer"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),function(a){"use strict";function b(c){var d=c.currentTarget,e=a(d),f=e.attr("data-value"),g=d.contentDocument.getElementsByTagName("svg")[0];e.before(g).remove(),a(g).attr("data-value",f),d.addEventListener?d.removeEventListener("load",b):d.detachEvent("onload",b)}a.fn.SVGIcon=function(){var a=this;a.each(function(a,c){c.contentDocument&&c.contentDocument.getElementsByTagName("svg")[0]?b({currentTarget:c}):c.addEventListener?c.addEventListener("load",b):c.attachEvent("onload",b)})},a(document).ready(function(){a(".svg-icon").SVGIcon()})}(jQuery),+function(a){"use strict";function b(a){return a.type.match(/^mouse/)&&(a.originalEvent.touches=a.originalEvent.changedTouches=[{pageX:a.pageX,pageY:a.pageY}]),a}function c(b){return this.each(function(){var c=a(this),e=c.data("tc."+b.ride),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||c.data("tc.slider",e=new d(this,f)),"string"==typeof b&&e[b]())})}var d=function(a,b){this.initSuper("slider",a,b),this.init("slider",a,b),this.initUISuper(),this.initUI(),this.initListeners()};if(!a.fn.sequencer)throw new Error("Slider requires sequencer.js");d.DEFAULTS=a.extend({},a.fn.sequencer.Constructor.DEFAULTS,{paginator:!1,prevNext:!1,touchTolerance:50}),d.prototype=a.extend({},a.fn.sequencer.Constructor.prototype),d.prototype.constructor=d,d.prototype.getDefaults=function(){return d.DEFAULTS},d.prototype.initSuper=a.fn.sequencer.Constructor.prototype.init,d.prototype.initUISuper=a.fn.sequencer.Constructor.prototype.initUI,d.prototype.init=function(b,c,e){a.extend(this.options,d.DEFAULTS,e),this.touchStart=null,this.touchLast=null,this.metaIdxTouchStart=0},d.prototype.localize=function(a,b){var c;if("object"!=typeof TYPO3)return a;"object"==typeof TYPO3.lang[a]?c=TYPO3.lang[a]:"string"==typeof b&&(c=TYPO3.lang[b+"."+a]);for(var d in c)return c[d].target;return a},d.prototype.initUI=function(){var b=this;if(b.options.prevNext){var c=b.findPrevNext("prev");c.add(b.findPrevNext("next")),0===c.length&&b.$element.append(a('<div class="'+b.type+'-ui container-fixed">  <button class="btn btn-clean btn-icon '+b.type+'-handle-left" data-target="#'+b.id+'" data-slide="prev">    <span class="sr-only">'+this.localize("prev","bdcontentprovider_block_slider")+'</span>    <span class="icon icon-navigation-left" aria-hidden="true"></span>  </button>   <button class="btn btn-clean btn-icon '+b.type+'-handle-right" data-target="#'+b.id+'" data-slide="next">    <span class="sr-only">'+this.localize("next","bdcontentprovider_block_slider")+'</span>    <span class="icon icon-navigation-right" aria-hidden="true"></span>  </button>  </div>')),c.each(function(c,d){var e=a(d);e.attr("data-target")||e.attr("data-target","#"+b.id)})}b.options.paginator&&(b.$paginator=a('<ul class="pagination"></ul>'),b.$element.append(b.$paginator),a.each(b.$items,function(c,d){var e=a(d),f=a('<li><a href="#" data-target="#'+b.id+'" data-slide-to="'+c+'"><span class="sr-only">'+e.attr("title")+"</span></a></li>");b.$paginator.append(f)})),b.$element.bind("touchstart, mousedown",a.proxy(b.uiTouchStartHandler,b))},d.prototype.uiTouchStartHandler=function(c){var d=a(c.target).closest('[data-target], [href="'+this.id+'"]');d.length||(c=b(c),this.touchStart=this.touchLast={pageX:c.originalEvent.touches[0].pageX,pageY:c.originalEvent.touches[0].pageY},this.metaIdxTouchStart=this.currentPositionMetaIdx(),a(window).on("touchmove.tc."+this.type,a.proxy(this.uiTouchMoveHandler,this)),a(window).on("touchend.tc."+this.type,a.proxy(this.uiTouchEndHandler,this)),a(window).on("mousemove.tc."+this.type,a.proxy(this.uiTouchMoveHandler,this)),a(window).on("mouseup.tc."+this.type,a.proxy(this.uiTouchEndHandler,this)))},d.prototype.uiTouchMoveHandler=function(c){c=b(c),c.preventDefault(),a.proxy(this.stopAnimationAndTimer(),this);var d=c.originalEvent.touches[0];this.translateMetaPosition(d.pageX-this.touchLast.pageX),a(window).scrollTop(a(window).scrollTop()+this.touchStart.pageY-d.pageY),this.touchLast=d},d.prototype.uiTouchEndHandler=function(c){c=b(c),a(window).off("touchmove.tc."+this.type),a(window).off("touchend.tc."+this.type),a(window).off("mousemove.tc."+this.type),a(window).off("mouseup.tc."+this.type);var d=c.originalEvent.changedTouches[0],e=d.pageX-this.touchStart.pageX,f=0>e?1:-1;Math.abs(e)>this.options.touchTolerance?f>0?this.next():this.prev():this.setMetaIdx(this.metaIdxTouchStart),this.touchStart=null,this.touchLast=null},d.prototype.updateItems=function(){var b=this;a.each(b.$items,function(c,d){var e=a(d),f=(c*b.metaItemWidth+b.metaWidth+b.metaPosition%b.metaWidth+.5*b.metaWidth)%b.metaWidth-.5*b.metaWidth,g=f/b.metaItemWidth,h=2,i=1-Math.abs(g*h);i=Math.max(0,Math.min(i*h,1));var j=e.find(".item-image");j.css({left:f+.5*(b.metaItemWidth-j.width()),opacity:i}),e.find(".item-label").css({opacity:i,zIndex:i?1:-1})}),b.updatePaginator(),b.updatePrevNext()},d.prototype.resizeHandler=function(){var b=0;this.stopAnimationAndTimer(!0),this.$items.css("height",""),this.$items.each(function(c,d){b=Math.max(b,a(d).height()),b=Math.max(b,a(d).find("img").height())}),this.$items.css("height",b),this.$element.find("."+this.type+"-items").height(b),this.metaItemWidth=this.$element.width(),this.metaWidth=this.metaItemWidth*this.$items.length,this.metaPosition=this.metaDeltaPosition*this.metaWidth,this.updateItems(),this.startTimer()},d.prototype.updatePaginator=function(){if(this.$paginator&&this.$paginator.length){var a=this.$paginator.find("li").eq(this.normalizedMetaIdx()).addClass("active");this.$paginator.find("li").not(a).removeClass("active")}},d.prototype.findPrevNext=function(b){return a('[data-target="#'+this.$element.attr("id")+'"][data-slide="'+b+'"], [href="#'+this.$element.attr("id")+'"][data-slide="'+b+'"]')},d.prototype.updatePrevNextState=function(a,b){var c=this.findPrevNext(a);this.normalizedMetaIdx()===b?c.addClass("disabled").attr("disabled","disabled"):c.removeClass("disabled").removeAttr("disabled")},d.prototype.updatePrevNext=function(){this.options.loop||(this.updatePrevNextState("prev",0),this.updatePrevNextState("next",this.$items.length-1))};var e=a.fn.slider;a.fn.slider=c,a.fn.slider.Constructor=d,a.fn.slider.noConflict=function(){return a.fn.slider=e,this},a(window).on("load",function(){a('[data-ride="slider"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("tc.lightbox"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);if(void 0===e.attr("tabindex")&&e.attr("tabindex",-1),!f){if(g.template&&0===e.find(".lightbox-content").length){var h=e.html();e.html(g.template).find(".lightbox-content").append(h)}if(0===e.find('[data-slide="prev"]').length){var i=a('<button class="btn btn-clean btn-icon lightbox-nav lightbox-nav-prev" aria-hidden="true" data-slide="prev"><span class="icon icon-navigation-left"></span></button>');e.find(".lightbox-content").append(i)}if(0===e.find('[data-slide="next"]').length){var j=a('<button class="btn btn-clean btn-icon lightbox-nav lightbox-nav-next" aria-hidden="true" data-slide="next"><span class="icon icon-navigation-right"></span></button>');e.find(".lightbox-content").append(j)}0===e.find(".lightbox-container").length&&e.find(".lightbox-content").append(a('<div class="lightbox-container"></div>'));var k="image";if("image"===k&&0===e.find(".lightbox-image").length){var l=a('<img src="" alt="" class="lightbox-image">');e.find(".lightbox-container").append(l)}}f?f.init("lightbox",this,g):e.data("tc.lightbox",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(a,b){this.init("lightbox",a,b)};c.VERSION="1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS=a.extend({},a.fn.modal.Constructor.DEFAULTS,{keyboard:!0,backdrop:!0,show:!0,loop:!1,type:"image",gallery:"",template:'<div class="modal-dialog lightbox-dialog"><div class="modal-content lightbox-content"></div></div>'}),c.prototype=a.extend({},a.fn.modal.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.init=function(b,c,d){this.options=d,this.$element=a(c),this.$body=a(document.body),this.$backdrop=null,this.isShown=null,this.currentIndex=0,this.$items=null},c.prototype.show=function(b){var d=this,e=a.Event("show.tc.lightbox",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.$body.addClass("lightbox-open"),this.escape(),this.resize(),this.initContent(),this.showCurrentItem(),this.updateCaption(),this.updateControls(),this.$element.on("click.dismiss.tc.lightbox",'[data-dismiss="lightbox"]',a.proxy(this.hide,this)),(this.hasNext()||this.hasPrev())&&(this.$element.off("click.next.tc.modal",'[data-slide="next"]'),this.$element.off("click.next.tc.modal",'[data-slide="next"]'),this.$element.on("click.next.tc.modal",'[data-slide="next"]',a.proxy(this.next,this)),this.$element.on("click.prev.tc.modal",'[data-slide="prev"]',a.proxy(this.prev,this))),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(document.body),d.$element.show(),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.tc.lightbox",{relatedTarget:b});e?d.$element.find(".lightbox-dialog").one("tcTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.tc.lightbox"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.tc.lightbox"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.tc.lightbox"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("tcTransitionEnd",a.proxy(this.hideLightbox,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideLightbox())},c.prototype.hideLightbox=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("lightbox-open"),a.$element.trigger("hidden.tc.lightbox")})},c.prototype.next=function(a){a&&a.preventDefault(),this.hasNext()?this.currentIndex++:this.options.loop&&(this.currentIndex=0),this.showCurrentItem(),this.updateCaption(),this.updateControls()},c.prototype.prev=function(a){a&&a.preventDefault(),this.hasPrev()?this.currentIndex--:this.options.loop&&(this.currentIndex=this.$items.length-1),this.showCurrentItem(),this.updateCaption(),this.updateControls()},c.prototype.hasNext=function(){return this.$items.length>1&&this.currentIndex<this.$items.length-1},c.prototype.hasPrev=function(){return this.$items.length>1&&this.currentIndex>0},c.prototype.getCurrentItem=function(){var b=this.$items[this.currentIndex];return a(b)},c.prototype.showCurrentItem=function(){var a=this.getCurrentItem(),b=a.attr("href"),c="image";"image"===c&&this.$element.find(".lightbox-image").attr("src",b);var d=this.$items.eq(this.currentIndex).addClass("active");this.$items.not(d).removeClass("active")},c.prototype.updateCaption=function(){var a=this.getCurrentItem(),b=a.data("caption");b&&0!==b.length?(this.$element.find(".lightbox-caption").html(b).show(),this.$element.find(".lightbox-image").attr("alt",b)):this.$element.find(".lightbox-caption").attr("alt","").hide()},c.prototype.updateControls=function(){this.$element.find('[data-slide="next"]').toggle(this.hasNext()),this.$element.find('[data-slide="prev"]').toggle(this.hasPrev())},c.prototype.initContent=function(){if(this.currentIndex=0,this.options.gallery&&this.options.gallery.length>0){var b=this;b.$items=a('[data-gallery="'+this.options.gallery+'"]'),a.each(b.$items,function(c,d){var e=a(d);e.attr("href")===b.options.href&&(b.currentIndex=c)})}else this.$items=a('[data-toggle="lightbox"][href="'+this.options.href+'"]').not("[data-gallery]")},c.prototype.resetContent=function(){this.$element.find(".lightbox-image").attr("src",""),this.$element.find(".lightbox-image").attr("alt",""),this.$items.removeClass("active"),this.$items=null,this.currentIndex=0};var d=a.fn.lightbox;a.fn.lightbox=b,a.fn.lightbox.Constructor=c,a.fn.lightbox.noConflict=function(){return a.fn.lightbox=d,this},a(document).on("click.tc.lightbox.data-api",'[data-toggle="lightbox"]',function(b){var c=a(this),d=a(c.attr("data-target")),e=a.extend({gallery:""},d.data(),c.data(),{href:c.attr("href")});c.is("a")&&b.preventDefault(),d.lightbox(e,this).one("hide",function(){c.is(":visible")&&c.focus()})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("tc.affix"),f="object"==typeof b&&b;e||d.data("tc.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.tc.affix.data-api",a.proxy(this.checkPosition,this)).on("click.tc.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".tc.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".tc.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("tc.comparatorCommon"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);e||c.data("tc.comparatorCommon",e=new d(this,f)),"string"==typeof b&&e[b]()})}var c='"use strict";var root = arguments[0];var $svg = function(selector){  var type = selector.substr(0,1);  var name = selector.substr(1);  if(type==="#") return $(root.getElementById(name));  else if(type===".") return $(root.getElementsByClassName(name));  else return $(root.getElementsByNodeName(name))};',d=function(b,c){this.$element=a(b),this.$actions=this.$element.find(".showcase-actions"),this.$object=this.$element.find(".common-comparator").eq(0),this.$inputGroups=this.$element.find(".comparator-ui-group"),this.options=c,this.$svg=null,this.accessibilityMarkers=[],this.svgLoadedLoop()};d.DEFAULTS={accessibilityMarkerTemplate:'<span class="sr-only">active</span>'},d.prototype.svgLoadedLoop=function(){var b=this.$object,c=this;b[0].addEventListener("load",function(){c.svgLoadedLoop()}),a(b[0].contentDocument).ready(function(){var a=b[0].contentDocument;a.rootElement&&c.init(a.rootElement)})},d.prototype.init=function(b){this.$svg=a(b),this.applyInputGroupValuesAsync(),this.$actions.removeClass("hidden")},d.prototype.applyInputGroupValuesAsync=function(){var a=this.$inputGroups.find("input, .active > a");setTimeout(function(){a.each(function(a,b){f.apply(b)})})},d.prototype.classes=function(b,c){var d=this.$svg;if(d&&b.match(/^{.*}$/)){var e=this.execute(b,c);a.each(e,function(a,b){d.toggleClass(a,!!b)})}},d.prototype.execute=function(b,d){var e=this.$svg,f=new Function(c+"return "+b).apply(d[0],[e]),g=a.Event("execute.tc.comparator",{relatedTarget:d});return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(this.updateInputGroupByTarget(d),f)},d.prototype.getInputGroupIndex=function(a){return this.$inputGroups=this.$element.find(".comparator-ui-group"),this.$inputGroups.index(a)},d.prototype.createAccessibilityMarker=function(){return a(this.options.accessibilityMarkerTemplate)},d.prototype.getAccessibilityMarker=function(a){var b=this.getInputGroupIndex(a);return this.accessibilityMarkers[b]||(this.accessibilityMarkers[b]=this.createAccessibilityMarker()),this.accessibilityMarkers[b]},d.prototype.updateInputGroupByTarget=function(a){var b=a.closest(".comparator-ui-group");if(b){var c=this.getAccessibilityMarker(b);b.find(".active").removeClass("active"),c.remove(),a.closest("li").addClass("active").append(c)}};var e=a.fn.comparatorCommon;a.fn.comparatorCommon=b,a.fn.comparatorCommon.Constructor=d,a.fn.comparatorCommon.noConflict=function(){return a.fn.comparatorCommon=e,this};var f=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("comparator-common")){var g=a.extend({},f.data(),e.data());b.call(f,g);var h=e.attr("data-comparator-ui-item-class");h&&f.data("tc.comparatorCommon").classes(h,e);var i=e.attr("data-comparator-ui-item-click");i&&f.data("tc.comparatorCommon").execure(i,e),c&&e.attr("href")&&c.preventDefault()}};a(document).on("click.tc.comparator.data-api","[data-comparator-ui-item-class]",f).on("click.tc.comparator.data-api","[data-comparator-ui-item-click]",f),a(window).on("load",function(){a(".comparator-common").each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a,b){"use strict";function c(b){return this.each(function(){var c=a(this),e=c.data("tc.viewheight"),f="object"==typeof b&&b;e||c.data("tc.viewheight",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(c,e){this.options=a.extend({},d.DEFAULTS,e),this.$element=a(c),this.windowHeight=0,a(b).on("resize.tc.viewheight",a.proxy(this.handleUpdate,this)),this.refresh(),this.process()};d.VERSION="1.0.0",d.DEFAULTS={offset:0},d.prototype.calculateHeight=function(){var a=this.options.height,b=this.options.offset,c=this.windowHeight;return a&&(c*=a),b.top&&(c-=b.top),b.bottom&&(c-=b.bottom),c},d.prototype.handleUpdate=function(){this.refresh(),this.process()},d.prototype.refresh=function(){this.windowHeight=a(b).height()},d.prototype.process=function(){this.$element.css({height:this.calculateHeight()})};var e=a.fn.viewheight;a.fn.viewheight=c,a.fn.viewheight.Constructor=d,a.fn.viewheight.noConflict=function(){return a.fn.viewheight=e,this},a(document).ready(function(){a('[data-spy="viewheight"]').each(function(){var b=a(this),d=b.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),c.call(b,d)})})}(jQuery,window),+function(a,b){"use strict";function c(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");
return a(d)}function d(b){return this.each(function(){var c=a(this),d=c.data("tc.smoothscroll");d||c.data("tc.smoothscroll",d=new e(this)),"string"==typeof b&&d[b].call(c)})}var e=function(b){a(b).on("click",'[data-scroll="smoothscroll"]',this.scroll)};e.VERSION="1.0.0",e.prototype.scroll=function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=c(e);if(f.trigger(d=a.Event("scroll.tc.smoothscroll")),!d.isDefaultPrevented()){var g=a(b).height(),h=(g-f.height())/2,i=f.offset().top-Math.max(0,h);a("html,body").stop().animate({scrollTop:i},{duration:500,easing:"swing"})}};var f=a.fn.smoothscroll;a.fn.smoothscroll=d,a.fn.smoothscroll.Constructor=e,a.fn.smoothscroll.noConflict=function(){return a.fn.smoothscroll=f,this},a(document).on("click.tc.smoothscroll.data-api",'[data-scroll="smoothscroll"]',e.prototype.scroll)}(jQuery,window),/*! <object> extension
 * for Lazy Load XT v1.0.5 2014-06-05
 * http://ressio.github.io/lazy-load-xt
 * Licensed under MIT */
function(a,b,c){"use strict";function d(b){var c=b.lazyLoadXT.srcAttrS,d=a.isFunction(c),f=d?c(b):b.attr(c);if(f&&!b.attr("data")){b.attr("data",f);var g=b[0];g.contentDocument&&g.contentDocument.getElementsByTagName("svg")[0]?e({target:g}):g.addEventListener?g.addEventListener("load",e):g.attachEvent("load",e)}return f}function e(b){var c=b.target,d=a(c);d.addClass(f.onload.addClass),d.removeClass("lazy-preloading"),c.removeEventListener?c.removeEventListener("load",e):c.detachEvent&&c.detachEvent("load",e),d.trigger("lazyupdate")}var f=a.lazyLoadXT;f.selector+=",object[data-src]",a(c).on("lazyshow","object",function(a,b){if(b.removeClass(f.onload.removeClass),!b.hasClass(f.onload.addClass)){var c=b.lazyLoadXT;c.srcAttrS=c.srcAttr,c.srcAttr=d,b.addClass("lazy-preloading")}}).on("lazyinit","img",function(a,b){b.parent("object").length&&(b.lazyLoadXT.srcAttr="")}).on("lazyinit","object",function(a,b){b[0].firstChild&&b.children().removeClass(f.oninit.removeClass)})}(window.jQuery||window.Zepto||window.$,window,document),+function(a,b,c){"use strict";a(c).ready(function(){a(".form-checkbox").checkbox(),a(".form-radio").radio(),a(".form-select").selectbox(),a(".no-js").removeClass("no-js"),setTimeout(function(){a(".footer-space-dummy").css("height",a(".footer").height())},100)}),a(b).on("load",function(){a("body").addClass("loaded")})}(jQuery,window,document);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*!
Waypoints Sticky Element Shortcut - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(s){this.options=e.extend({},i.defaults,t.defaults,s),this.element=this.options.element,this.$element=e(this.element),this.createWrapper(),this.createWaypoint()}var e=window.jQuery,i=window.Waypoint;t.prototype.createWaypoint=function(){var t=this.options.handler;this.waypoint=new i(e.extend({},this.options,{element:this.wrapper,handler:e.proxy(function(e){var i=this.options.direction.indexOf(e)>-1,s=i?this.$element.outerHeight(!0):"";this.$wrapper.height(s),this.$element.toggleClass(this.options.stuckClass,i),t&&t.call(this,e)},this)}))},t.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},t.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},t.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},i.Sticky=t}();
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
/**!
 * trunk8 v1.3.3
 * https://github.com/rviscomi/trunk8
 * 
 * Copyright 2012 Rick Viscomi
 * Released under the MIT License.
 * 
 * Date: September 26, 2012
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        factory(root.jQuery);
    }
}(this, function ($) {
	var methods,
		utils,
		SIDES = {
			/* cen...ter */
			center: 'center',
			/* ...left */
			left: 'left',
			/* right... */
			right: 'right'
		},
		WIDTH = {
			auto: 'auto'
		};
	
	function trunk8(element) {
		this.$element = $(element);
		this.original_text = $.trim(this.$element.html());
		this.settings = $.extend({}, $.fn.trunk8.defaults);
	}
	
	trunk8.prototype.updateSettings = function (options) {
		this.settings = $.extend(this.settings, options);
	};

	function stripHTML(html) {
		var tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		
		if (typeof tmp.textContent != 'undefined') {
			return tmp.textContent;
		}

		return tmp.innerText
	}

	function getHtmlArr(str) {
		/* Builds an array of strings and designated */
		/* HTML tags around them. */
		if (stripHTML(str) === str) {
			return str.split(/\s/g);
		}
		var allResults = [],
			reg = /<([a-z]+)([^<]*)(?:>(.*?(?!<\1>))<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/ig,
			outArr = reg.exec(str),
			lastI,
			ind;
		while (outArr && lastI !== reg.lastIndex) {
			lastI = reg.lastIndex;
			if (outArr[5]) {
				allResults.push(outArr[5]);
			} else if (outArr[1]) {
				allResults.push({
					tag: outArr[1],
					attribs: outArr[2],
					content: outArr[3],
					after: outArr[4]
				});
			}
			outArr = reg.exec(str);
		}
		for (ind = 0; ind < allResults.length; ind++) {
			if (typeof allResults[ind] !== 'string' &&
					allResults[ind].content) {
				allResults[ind].content = getHtmlArr(allResults[ind].content);
			}
		}
		return allResults;
	}

	function rebuildHtmlFromBite(bite, htmlObject, fill) {
		// Take the processed bite after binary-search
		// truncated and re-build the original HTML
		// tags around the processed string.
		bite = bite.replace(fill, '');

		var biteHelper = function(contentArr, tagInfo) {
				var retStr = '',
					content,
					biteContent,
					biteLength,
					nextWord,
					i;
				for (i = 0; i < contentArr.length; i++) {
					content = contentArr[i];
					biteLength = $.trim(bite).split(' ').length;
					if ($.trim(bite).length) {
						if (typeof content === 'string') {
							if (!/<br\s*\/?>/i.test(content)) {
								if (biteLength === 1 && $.trim(bite).length <= content.length) {
									content = bite;
									// We want the fill to go inside of the last HTML
									// element if the element is a container.
									if (tagInfo === 'p' || tagInfo === 'div') {
										content += fill;
									}
									bite = '';
								} else {
									bite = bite.replace(content, '');
								}
							}
							retStr += $.trim(content) + ((i === contentArr.length-1 || biteLength <= 1) ? '' : ' ');
						} else {
							biteContent = biteHelper(content.content, content.tag);
							if (content.after) bite = bite.replace(content.after, '');
							if (biteContent) {
								if (!content.after) content.after = ' ';
								retStr += '<'+content.tag+content.attribs+'>'+biteContent+'</'+content.tag+'>' + content.after;
							}
						}
					}
				}
				return retStr;
			},
			htmlResults = biteHelper(htmlObject);

		// Add fill if doesn't exist. This will place it outside the HTML elements.
		if (htmlResults.slice(htmlResults.length - fill.length) === fill) {
			htmlResults += fill;
		}

		return htmlResults;
	}

	function truncate() {
		var data = this.data('trunk8'),
			settings = data.settings,
			width = settings.width,
			side = settings.side,
			fill = settings.fill,
			parseHTML = settings.parseHTML,
			line_height = utils.getLineHeight(this) * settings.lines,
			str = data.original_text,
			length = str.length,
			max_bite = '',
			lower, upper,
			bite_size,
			bite,
			text,
			htmlObject;
		
		/* Reset the field to the original string. */
		this.html(str);
		text = this.text();

		/* If string has HTML and parse HTML is set, build */
		/* the data struct to house the tags */
		if (parseHTML && stripHTML(str) !== str) {
			htmlObject = getHtmlArr(str);
			str = stripHTML(str);
			length = str.length;
		}

		if (width === WIDTH.auto) {
			/* Assuming there is no "overflow: hidden". */
			if (this.height() <= line_height) {
				/* Text is already at the optimal trunkage. */
				return;
			}

			/* Binary search technique for finding the optimal trunkage. */
			/* Find the maximum bite without overflowing. */
			lower = 0;
			upper = length - 1;

			while (lower <= upper) {
				bite_size = lower + ((upper - lower) >> 1);
				
				bite = utils.eatStr(str, side, length - bite_size, fill);

				if (parseHTML && htmlObject) {
					bite = rebuildHtmlFromBite(bite, htmlObject, fill);
				}
				
				this.html(bite);

				/* Check for overflow. */
				if (this.height() > line_height) {
					upper = bite_size - 1;
				}
				else {
					lower = bite_size + 1;

					/* Save the bigger bite. */
					max_bite = (max_bite.length > bite.length) ? max_bite : bite;
				}
			}

			/* Reset the content to eliminate possible existing scroll bars. */
			this.html('');
			
			/* Display the biggest bite. */
			this.html(max_bite);
			
			if (settings.tooltip) {
				this.attr('title', text);
			}
		}
		else if (!isNaN(width)) {
			bite_size = length - width;

			bite = utils.eatStr(str, side, bite_size, fill);

			this.html(bite);
			
			if (settings.tooltip) {
				this.attr('title', str);
			}
		}
		else {
			$.error('Invalid width "' + width + '".');
			return;
		}
		settings.onTruncate();
	}

	methods = {
		init: function (options) {
			return this.each(function () {
				var $this = $(this),
					data = $this.data('trunk8');
				
				if (!data) {
					$this.data('trunk8', (data = new trunk8(this)));
				}
				
				data.updateSettings(options);
				
				truncate.call($this);
			});
		},

		/** Updates the text value of the elements while maintaining truncation. */
		update: function (new_string) {
			return this.each(function () {
				var $this = $(this);
				
				/* Update text. */
				if (new_string) {
					$this.data('trunk8').original_text = new_string;
				}

				/* Truncate accordingly. */
				truncate.call($this);
			});
		},
		
		revert: function () {
			return this.each(function () {
				/* Get original text. */
				var text = $(this).data('trunk8').original_text;
				
				/* Revert element to original text. */
				$(this).html(text);
			});
		},

		/** Returns this instance's settings object. NOT CHAINABLE. */
		getSettings: function () {
			return $(this.get(0)).data('trunk8').settings;
		}
	};

	utils = {
		/** Replaces [bite_size] [side]-most chars in [str] with [fill]. */
		eatStr: function (str, side, bite_size, fill) {
			var length = str.length,
				key = utils.eatStr.generateKey.apply(null, arguments),
				half_length,
				half_bite_size;

			/* If the result is already in the cache, return it. */
			if (utils.eatStr.cache[key]) {
				return utils.eatStr.cache[key];
			}
			
			/* Common error handling. */
			if ((typeof str !== 'string') || (length === 0)) {
				$.error('Invalid source string "' + str + '".');
			}
			if ((bite_size < 0) || (bite_size > length)) {
				$.error('Invalid bite size "' + bite_size + '".');
			}
			else if (bite_size === 0) {
				/* No bite should show no truncation. */
				return str;
			}
			if (typeof (fill + '') !== 'string') {
				$.error('Fill unable to be converted to a string.');
			}

			/* Compute the result, store it in the cache, and return it. */
			switch (side) {
				case SIDES.right:
					/* str... */
					return utils.eatStr.cache[key] =
							$.trim(str.substr(0, length - bite_size)) + fill;
					
				case SIDES.left:
					/* ...str */
					return utils.eatStr.cache[key] =
							fill + $.trim(str.substr(bite_size));
					
				case SIDES.center:
					/* Bit-shift to the right by one === Math.floor(x / 2) */
					half_length = length >> 1; // halve the length
					half_bite_size = bite_size >> 1; // halve the bite_size

					/* st...r */
					return utils.eatStr.cache[key] =
							$.trim(utils.eatStr(str.substr(0, length - half_length), SIDES.right, bite_size - half_bite_size, '')) +
							fill +
							$.trim(utils.eatStr(str.substr(length - half_length), SIDES.left, half_bite_size, ''));
					
				default:
					$.error('Invalid side "' + side + '".');
			}
		},
		
		getLineHeight: function (elem) {
				var floats = $(elem).css('float');
				if (floats !== 'none') {
					$(elem).css('float', 'none');
				}
				var pos = $(elem).css('position');
				if (pos === 'absolute') {
					$(elem).css('position', 'static');
				}
	
				var html = $(elem).html(),
				wrapper_id = 'line-height-test',
				line_height;
	
				/* Set the content to a small single character and wrap. */
				$(elem).html('i').wrap('<div id="' + wrapper_id + '" />');
	
				/* Calculate the line height by measuring the wrapper.*/
				line_height = $('#' + wrapper_id).innerHeight();
	
				/* Remove the wrapper and reset the content. */
				$(elem).html(html).css({ 'float': floats, 'position': pos }).unwrap();
	
				return line_height;
			}
	};

	utils.eatStr.cache = {};
	utils.eatStr.generateKey = function () {
		return Array.prototype.join.call(arguments, '');
	};
	
	$.fn.trunk8 = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}
		else {
			$.error('Method ' + method + ' does not exist on jQuery.trunk8');
		}
	};
	
	/* Default trunk8 settings. */
	$.fn.trunk8.defaults = {
		fill: '&hellip;',
		lines: 1,
		side: SIDES.right,
		tooltip: true,
		width: WIDTH.auto,
		parseHTML: false,
		onTruncate: function () {}
	};
}));

/*! npm.im/object-fit-images 3.2.3 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!m&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=l.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);p.call(e,"src")!==n&&b.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[a];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&g&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=p.call(t,"data-ofi-srcset")||t.srcset,o.img.src=p.call(t,"data-ofi-src")||t.src,b.call(t,"data-ofi-src",t.src),t.srcset&&b.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[a].img[e||"src"]},set:function(e,i){return t[a].img[i||"src"]=e,b.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(t,e){var i=!h&&!t;if(e=e||{},t=t||"img",f&&!e.skipTest||!d)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][a]=t[r][a]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&o(t.target,{skipTest:e.skipTest})},!0),h=!0,t="img"),e.watchMQ&&window.addEventListener("resize",o.bind(null,t,{skipTest:e.skipTest}))}var a="bfred-it:object-fit-images",l=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,u="undefined"==typeof Image?{style:{"object-position":1}}:new Image,g="object-fit"in u.style,f="object-position"in u.style,d="background-size"in u.style,m="string"==typeof u.currentSrc,p=u.getAttribute,b=u.setAttribute,h=!1;return o.supportsObjectFit=g,o.supportsObjectPosition=f,function(){function t(t,e){return t[a]&&t[a].img&&("src"===e||"srcset"===e)?t[a].img:t}f||(HTMLImageElement.prototype.getAttribute=function(e){return p.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return b.call(t(this,e),e,String(i))})}(),o}();

// Generated by CoffeeScript 1.7.1
(function() {
  var XMLHttpFactories, ajax, applyStyleTest, browserSupportsUnitsNatively, clearStyleTests, createXMLHTTPObject, getViewportSize, initLayoutEngine, testElementStyle, testVHSupport, testVMinSupport, testVWSupport;

  XMLHttpFactories = [
    function() {
      return new XMLHttpRequest();
    }, function() {
      return new ActiveXObject("Msxml2.XMLHTTP");
    }, function() {
      return new ActiveXObject("Msxml3.XMLHTTP");
    }, function() {
      return new ActiveXObject("Microsoft.XMLHTTP");
    }
  ];

  createXMLHTTPObject = function() {
    var e, i, xmlhttp;
    xmlhttp = false;
    i = 0;
    while (i < XMLHttpFactories.length) {
      try {
        xmlhttp = XMLHttpFactories[i++]();
      } catch (_error) {
        e = _error;
        continue;
      }
      break;
    }
    return xmlhttp;
  };

  ajax = function(url, onload) {
    var e, xmlhttp;
    xmlhttp = createXMLHTTPObject();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState !== 4) {
        return;
      }
      if (!(xmlhttp.status === 200 || url.match(/^file:\/\/\//))) {
        throw "Error!";
      }
      console.log("INFO: processing " + url);
      onload(xmlhttp.responseText);
    };
    try {
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    } catch (_error) {
      e = _error;
      console.log("ERROR: " + e.message + " (" + e.type + ") when accessing " + url);
    }
  };

  getViewportSize = function() {
    var x, y;
    x = 0;
    y = 0;
    if (window.innerHeight) {
      x = window.innerWidth;
      y = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) {
      x = document.documentElement.clientWidth;
      y = document.documentElement.clientHeight;
    } else if (document.body) {
      x = document.body.clientWidth;
      y = document.body.clientHeight;
    }
    return {
      width: x,
      height: y
    };
  };

  browserSupportsUnitsNatively = function() {
    var body, head, style_block, test_element, test_results;
    test_element = document.createElement('div');
    test_element.id = "vminpolyTests";
    body = document.getElementsByTagName('body')[0];
    body.appendChild(test_element);
    style_block = document.createElement('style');
    head = document.getElementsByTagName('head')[0];
    head.appendChild(style_block);
    test_results = testVWSupport(test_element, style_block) && testVWSupport(test_element, style_block) && testVMinSupport(test_element, style_block);
    body.removeChild(test_element);
    head.removeChild(style_block);
    return test_results;
  };

  testElementStyle = function(element) {
    if (window.getComputedStyle) {
      return getComputedStyle(element, null);
    } else {
      return element.currentStyle;
    }
  };

  applyStyleTest = function(style_block, style) {
    var new_style, test_style;
    new_style = "#vminpolyTests { " + style + "; }";
    if (style_block.styleSheet) {
      return style_block.styleSheet.cssText = new_style;
    } else {
      test_style = document.createTextNode(new_style);
      return style_block.appendChild(test_style);
    }
  };

  clearStyleTests = function(style_block) {
    if (style_block.styleSheet) {
      return style_block.styleSheet.cssText = '';
    } else {
      return style_block.innerHTML = '';
    }
  };

  testVHSupport = function(element, style_block) {
    var comp_style, height;
    applyStyleTest(style_block, 'height: 50vh');
    height = parseInt(window.innerHeight / 2, 10);
    comp_style = parseInt(testElementStyle(element).height, 10);
    clearStyleTests(style_block);
    return comp_style === height;
  };

  testVWSupport = function(element, style_block) {
    var comp_style, width;
    applyStyleTest(style_block, 'width: 50vw');
    width = parseInt(window.innerWidth / 2, 10);
    comp_style = parseInt(testElementStyle(element).width, 10);
    clearStyleTests(style_block);
    return comp_style === width;
  };

  testVMinSupport = function(element, style_block) {
    var actual_vmin, comp_width, docElement, one_vh, one_vw;
    applyStyleTest(style_block, 'width: 50vmin');
    docElement = document.documentElement;
    one_vw = docElement.clientWidth / 100;
    one_vh = docElement.clientHeight / 100;
    actual_vmin = parseInt(Math.min(one_vw, one_vh) * 50, 10);
    comp_width = parseInt(testElementStyle(element).width, 10);
    clearStyleTests(style_block);
    return actual_vmin === comp_width;
  };

  initLayoutEngine = function() {
    var analyzeStyleRule, analyzeStylesheet, head, innerSheetCount, links, onresize, outerSheetCount, sheets, styleElement, _i, _len;
    analyzeStyleRule = function(rule) {
      var declaration, declarations, hasDimension, token, _i, _j, _len, _len1, _ref, _ref1;
      declarations = [];
      _ref = rule.value;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        declaration = _ref[_i];
        hasDimension = false;
        _ref1 = declaration.value;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          token = _ref1[_j];
          if (token.tokenType === 'DIMENSION' && (token.unit === 'vmin' || token.unit === 'vh' || token.unit === 'vw')) {
            hasDimension = true;
          }
        }
        if (hasDimension) {
          declarations.push(declaration);
        }
      }
      rule.value = declarations;
      return declarations;
    };
    analyzeStylesheet = function(sheet) {
      var atRules, decs, rule, rules, _i, _len, _ref;
      rules = [];
      _ref = sheet.value;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        rule = _ref[_i];
        switch (rule.type) {
          case 'STYLE-RULE':
            decs = analyzeStyleRule(rule);
            if (decs.length !== 0) {
              rules.push(rule);
            }
            break;
          case 'AT-RULE':
            atRules = analyzeStylesheet(rule);
            if (atRules.length !== 0) {
              rules.push(rule);
            }
        }
      }
      sheet.value = rules;
      return rules;
    };
    onresize = function() {
      var css, dims, generateRuleCode, generateSheetCode, map, sheet, url, vpAspectRatio, vpDims;
      vpDims = getViewportSize();
      dims = {
        vh: vpDims.height / 100,
        vw: vpDims.width / 100
      };
      dims.vmin = Math.min(dims.vh, dims.vw);
      vpAspectRatio = vpDims.width / vpDims.height;
      map = function(a, f) {
        var a1, e, _i, _len;
        if (a.map != null) {
          return a.map(f);
        } else {
          a1 = [];
          for (_i = 0, _len = a.length; _i < _len; _i++) {
            e = a[_i];
            a1.push(f(e));
          }
          return a1;
        }
      };
      generateRuleCode = function(rule) {
        var declaration, declarations, ruleCss, token, _i, _j, _len, _len1, _ref, _ref1;
        declarations = [];
        ruleCss = (map(rule.selector, function(o) {
          if (o.toSourceString != null) {
            return o.toSourceString();
          } else {
            return '';
          }
        })).join('');
        ruleCss += "{";
        _ref = rule.value;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          declaration = _ref[_i];
          ruleCss += declaration.name;
          ruleCss += ":";
          _ref1 = declaration.value;
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            token = _ref1[_j];
            if (token.tokenType === 'DIMENSION' && (token.unit === 'vmin' || token.unit === 'vh' || token.unit === 'vw')) {
              ruleCss += "" + (Math.floor(token.num * dims[token.unit])) + "px";
            } else {
              ruleCss += token.toSourceString();
            }
          }
          ruleCss += ";";
        }
        ruleCss += "}\r";
        return ruleCss;
      };
      generateSheetCode = function(sheet) {
        var mar, nums, prelude, rule, sheetCss, source, t, t1, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref, _ref1, _ref2, _ref3;
        sheetCss = '';
        _ref = sheet.value;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          rule = _ref[_i];
          switch (rule.type) {
            case 'STYLE-RULE':
              sheetCss += generateRuleCode(rule);
              break;
            case 'AT-RULE':
              if (rule.name === 'media') {
                prelude = '';
                mar = false;
                nums = [];
                _ref1 = rule.prelude;
                for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                  t = _ref1[_j];
                  if (t.name === '(') {
                    prelude += '(';
                    _ref2 = t.value;
                    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                      t1 = _ref2[_k];
                      source = t1.toSourceString != null ? t1.toSourceString() : '';
                      if (t1.tokenType === 'IDENT' && source === 'max-aspect-ratio') {
                        mar = true;
                      }
                      if (t1.tokenType === 'NUMBER') {
                        nums.push(parseInt(source));
                      }
                      prelude += source;
                    }
                    prelude += ')';
                  } else {
                    prelude += t.toSourceString();
                  }
                }
                if (vpAspectRatio < nums[0] / nums[1]) {
                  sheetCss += generateSheetCode(rule);
                }
              } else {
                prelude = '';
                _ref3 = rule.prelude;
                for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
                  t = _ref3[_l];
                  if (t.name === '(') {
                    prelude += '(';
                    prelude += (map(t.value, function(o) {
                      if (o.toSourceString != null) {
                        return o.toSourceString();
                      } else {
                        return '';
                      }
                    })).join('');
                    prelude += ')';
                  } else {
                    prelude += t.toSourceString();
                  }
                }
                sheetCss += "@" + rule.name + " " + prelude + " {";
                sheetCss += generateSheetCode(rule);
                sheetCss += '}\n';
              }
          }
        }
        return sheetCss;
      };
      css = '';
      for (url in sheets) {
        sheet = sheets[url];
        css += generateSheetCode(sheet);
      }
      if (styleElement.styleSheet != null) {
        return styleElement.styleSheet.cssText = css;
      } else {
        return styleElement.innerHTML = css;
      }
    };
    sheets = {};
    styleElement = document.createElement('style');
    head = document.getElementsByTagName('head')[0];
    head.appendChild(styleElement);
    links = document.getElementsByTagName('link');
    innerSheetCount = 0;
    outerSheetCount = 0;
    for (_i = 0, _len = links.length; _i < _len; _i++) {
      (function () {
        var i = links[_i];
        if (i.rel !== 'stylesheet') {
          return;
        }
        innerSheetCount++;
        ajax(i.href, function (cssText) {
          var sheet, tokenlist;
          tokenlist = tokenize(cssText);
          sheet = parse(tokenlist);
          analyzeStylesheet(sheet);
          sheets[i.href] = sheet;
          outerSheetCount++;
          if (outerSheetCount === innerSheetCount) {
            window.onresize();
          }
        });
      }());
    }
    window.onresize = onresize;
  };

  console.log('About to do the engine unless...', browserSupportsUnitsNatively());

  if (!browserSupportsUnitsNatively()) {
    initLayoutEngine();
  }

}).call(this);

(function (root, factory) {
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // Rhino, and plain browser loading.
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory(root);
    }
}(this, function (exports) {

function parse(tokens) {
	var mode = 'top-level';
	var i = -1;
	var token;

	var stylesheet = new Stylesheet;
	var stack = [stylesheet];
	var rule = stack[0];

	var consume = function(advance) {
		if(advance === undefined) advance = 1;
		i += advance;
		if(i < tokens.length)
			token = tokens[i];
		else
			token = new EOFToken;
		return true;
	};
	var reprocess = function() {
		i--;
		return true;
	}
	var next = function() {
		return tokens[i+1];
	};
	var switchto = function(newmode) {
		if(newmode === undefined) {
			if(rule.fillType !== '')
				mode = rule.fillType;
			else if(rule.type == 'STYLESHEET')
				mode = 'top-level'
			else { console.log("Unknown rule-type while switching to current rule's content mode: ",rule); mode = ''; }
		} else {
			mode = newmode;
		}
		return true;
	}
	var push = function(newRule) {
		rule = newRule;
		stack.push(rule);
		return true;
	}
	var parseerror = function(msg) {
		console.log("Parse error at token " + i + ": " + token + ".\n" + msg);
		return true;
	}
	var pop = function() {
		var oldrule = stack.pop();
		rule = stack[stack.length - 1];
		rule.append(oldrule);
		return true;
	}
	var discard = function() {
		stack.pop();
		rule = stack[stack.length - 1];
		return true;
	}
	var finish = function() {
		while(stack.length > 1) {
			pop();
		}
	}

	for(;;) {
		consume();

		if (token.tokenType === 'DELIM' && token.value === '\r')
			continue;

		switch(mode) {
		case "top-level":
			switch(token.tokenType) {
			case "CDO":
			case "CDC":
			case "WHITESPACE": break;
			case "AT-KEYWORD": push(new AtRule(token.value)) && switchto('at-rule'); break;
			case "{": parseerror("Attempt to open a curly-block at top-level.") && consumeAPrimitive(); break;
			case "EOF": finish(); return stylesheet;
			default: push(new StyleRule) && switchto('selector') && reprocess();
			}
			break;

		case "at-rule":
			switch(token.tokenType) {
			case ";": pop() && switchto(); break;
			case "{":
				if(rule.fillType !== '') switchto(rule.fillType);
				else parseerror("Attempt to open a curly-block in a statement-type at-rule.") && discard() && switchto('next-block') && reprocess();
				break;
			case "EOF": finish(); return stylesheet;
			default: rule.appendPrelude(consumeAPrimitive());
			}
			break;

		case "rule":
			switch(token.tokenType) {
			case "WHITESPACE": break;
			case "}": pop() && switchto(); break;
			case "AT-KEYWORD": push(new AtRule(token.value)) && switchto('at-rule'); break;
			case "EOF": finish(); return stylesheet;
			default: push(new StyleRule) && switchto('selector') && reprocess();
			}
			break;

		case "selector":
			switch(token.tokenType) {
			case "{": switchto('declaration'); break;
			case "EOF": discard() && finish(); return stylesheet;
			default: rule.appendSelector(consumeAPrimitive()); 
			}
			break;

		case "declaration":
			switch(token.tokenType) {
			case "WHITESPACE":
			case ";": break;
			case "}": pop() && switchto(); break;
			case "AT-RULE": push(new AtRule(token.value)) && switchto('at-rule'); break;
			case "IDENT": push(new Declaration(token.value)) && switchto('after-declaration-name'); break;
			case "EOF": finish(); return stylesheet;
			default: parseerror() && discard() && switchto('next-declaration');
			}
			break;

		case "after-declaration-name":
			switch(token.tokenType) {
			case "WHITESPACE": break;
			case ":": switchto('declaration-value'); break;
			case ";": parseerror("Incomplete declaration - semicolon after property name.") && discard() && switchto(); break;
			case "EOF": discard() && finish(); return stylesheet;
			default: parseerror("Invalid declaration - additional token after property name") && discard() && switchto('next-declaration');
			}
			break;

		case "declaration-value":
			switch(token.tokenType) {
			case "DELIM":
				if(token.value == "!" && next().tokenType == 'IDENTIFIER' && next().value.toLowerCase() == "important") {
					consume();
					rule.important = true;
					switchto('declaration-end');
				} else {
					rule.append(token);
				}
				break;
			case ";": pop() && switchto(); break;
			case "}": pop() && pop() && switchto(); break;
			case "EOF": finish(); return stylesheet;
			default: rule.append(consumeAPrimitive());
			}
			break;

		case "declaration-end":
			switch(token.tokenType) {
			case "WHITESPACE": break;
			case ";": pop() && switchto(); break;
			case "}": pop() && pop() && switchto(); break;
			case "EOF": finish(); return stylesheet;
			default: parseerror("Invalid declaration - additional token after !important.") && discard() && switchto('next-declaration');
			}
			break;

		case "next-block":
			switch(token.tokenType) {
			case "{": consumeAPrimitive() && switchto(); break;
			case "EOF": finish(); return stylesheet;
			default: consumeAPrimitive(); break;
			}
			break;

		case "next-declaration":
			switch(token.tokenType) {
			case ";": switchto('declaration'); break;
			case "}": switchto('declaration') && reprocess(); break;
			case "EOF": finish(); return stylesheet;
			default: consumeAPrimitive(); break;
			}
			break;

		default:
			// If you hit this, it's because one of the switchto() calls is typo'd.
			console.log('Unknown parsing mode: ' + mode);
			return;
		}
	}

	function consumeAPrimitive() {
		switch(token.tokenType) {
		case "(":
		case "[":
		case "{": return consumeASimpleBlock();
		case "FUNCTION": return consumeAFunc();
		default: return token;
		}
	}

	function consumeASimpleBlock() {
		var endingTokenType = {"(":")", "[":"]", "{":"}"}[token.tokenType];
		var block = new SimpleBlock(token.tokenType);

		for(;;) {
			consume();
			switch(token.tokenType) {
			case "EOF":
			case endingTokenType: return block;
			default: block.append(consumeAPrimitive());
			}
		}
	}

	function consumeAFunc() {
		var func = new Func(token.value);
		var arg = new FuncArg();

		for(;;) {
			consume();
			switch(token.tokenType) {
			case "EOF":
			case ")": func.append(arg); return func;
			case "DELIM":
				if(token.value == ",") {
					func.append(arg);
					arg = new FuncArg();
				} else {
					arg.append(token);
				}
				break;
			default: arg.append(consumeAPrimitive());
			}
		}
	}
}

function CSSParserRule() { return this; }
CSSParserRule.prototype.fillType = '';
CSSParserRule.prototype.toString = function(indent) {
	return JSON.stringify(this.toJSON(),null,indent);
}
CSSParserRule.prototype.append = function(val) {
	this.value.push(val);
	return this;
}

function Stylesheet() {
	this.value = [];
	return this;
}
Stylesheet.prototype = new CSSParserRule;
Stylesheet.prototype.type = "STYLESHEET";
Stylesheet.prototype.toJSON = function() {
	return {type:'stylesheet', value: this.value.map(function(e){return e.toJSON();})};
}

function AtRule(name) {
	this.name = name;
	this.prelude = [];
	this.value = [];
	if(name in AtRule.registry)
		this.fillType = AtRule.registry[name];
	return this;
}
AtRule.prototype = new CSSParserRule;
AtRule.prototype.type = "AT-RULE";
AtRule.prototype.appendPrelude = function(val) {
	this.prelude.push(val);
	return this;
}
AtRule.prototype.toJSON = function() {
	return {type:'at', name:this.name, prelude:this.prelude.map(function(e){return e.toJSON();}), value:this.value.map(function(e){return e.toJSON();})};
}
AtRule.registry = {
	'import': '',
	'media': 'rule',
	'font-face': 'declaration',
	'page': 'declaration',
	'keyframes': 'rule',
	'namespace': '',
	'counter-style': 'declaration',
	'supports': 'rule',
	'document': 'rule',
	'font-feature-values': 'declaration',
	'viewport': '',
	'region-style': 'rule'
};

function StyleRule() {
	this.selector = [];
	this.value = [];
	return this;
}
StyleRule.prototype = new CSSParserRule;
StyleRule.prototype.type = "STYLE-RULE";
StyleRule.prototype.fillType = 'declaration';
StyleRule.prototype.appendSelector = function(val) {
	this.selector.push(val);
	return this;
}
StyleRule.prototype.toJSON = function() {
	return {type:'selector', selector:this.selector.map(function(e){return e.toJSON();}), value:this.value.map(function(e){return e.toJSON();})};
}

function Declaration(name) {
	this.name = name;
	this.value = [];
	return this;
}
Declaration.prototype = new CSSParserRule;
Declaration.prototype.type = "DECLARATION";
Declaration.prototype.toJSON = function() {
	return {type:'declaration', name:this.name, value:this.value.map(function(e){return e.toJSON();})};
}

function SimpleBlock(type) {
	this.name = type;
	this.value = [];
	return this;
}
SimpleBlock.prototype = new CSSParserRule;
SimpleBlock.prototype.type = "BLOCK";
SimpleBlock.prototype.toJSON = function() {
	return {type:'block', name:this.name, value:this.value.map(function(e){return e.toJSON();})};
}

function Func(name) {
	this.name = name;
	this.value = [];
	return this;
}
Func.prototype = new CSSParserRule;
Func.prototype.type = "FUNCTION";
Func.prototype.toJSON = function() {
	return {type:'func', name:this.name, value:this.value.map(function(e){return e.toJSON();})};
}

function FuncArg() {
	this.value = [];
	return this;
}
FuncArg.prototype = new CSSParserRule;
FuncArg.prototype.type = "FUNCTION-ARG";
FuncArg.prototype.toJSON = function() {
	return this.value.map(function(e){return e.toJSON();});
}

// Exportation.
// TODO: also export the various rule objects?
exports.parse = parse;

}));

(function (root, factory) {
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
    // Rhino, and plain browser loading.
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory(root);
    }
}(this, function (exports) {

var between = function (num, first, last) { return num >= first && num <= last; }
function digit(code) { return between(code, 0x30,0x39); }
function hexdigit(code) { return digit(code) || between(code, 0x41,0x46) || between(code, 0x61,0x66); }
function uppercaseletter(code) { return between(code, 0x41,0x5a); }
function lowercaseletter(code) { return between(code, 0x61,0x7a); }
function letter(code) { return uppercaseletter(code) || lowercaseletter(code); }
function nonascii(code) { return code >= 0xa0; }
function namestartchar(code) { return letter(code) || nonascii(code) || code == 0x5f; }
function namechar(code) { return namestartchar(code) || digit(code) || code == 0x2d; }
function nonprintable(code) { return between(code, 0,8) || between(code, 0xe,0x1f) || between(code, 0x7f,0x9f); }
function newline(code) { return code == 0xa || code == 0xc; }
function whitespace(code) { return newline(code) || code == 9 || code == 0x20; }
function badescape(code) { return newline(code) || isNaN(code); }

// Note: I'm not yet acting smart enough to actually handle astral characters.
var maximumallowedcodepoint = 0x10ffff;

function tokenize(str, options) {
	if(options == undefined) options = {transformFunctionWhitespace:false, scientificNotation:false};
	var i = -1;
	var tokens = [];
	var state = "data";
	var code;
	var currtoken;

	// Line number information.
	var line = 0;
	var column = 0;
	// The only use of lastLineLength is in reconsume().
	var lastLineLength = 0;
	var incrLineno = function() {
		line += 1;
		lastLineLength = column;
		column = 0;
	};
	var locStart = {line:line, column:column};

	var next = function(num) { if(num === undefined) num = 1; return str.charCodeAt(i+num); };
	var consume = function(num) {
		if(num === undefined)
			num = 1;
		i += num;
		code = str.charCodeAt(i);
		if (newline(code)) incrLineno();
		else column += num;
		//console.log('Consume '+i+' '+String.fromCharCode(code) + ' 0x' + code.toString(16));
		return true;
	};
	var reconsume = function() {
		i -= 1;
		if (newline(code)) {
			line -= 1;
			column = lastLineLength;
		} else {
			column -= 1;
		}
		locStart.line = line;
		locStart.column = column;
		return true;
	};
	var eof = function() { return i >= str.length; };
	var donothing = function() {};
	var emit = function(token) {
		if(token) {
			token.finish();
		} else {
			token = currtoken.finish();
		}
		if (options.loc === true) {
			token.loc = {};
			token.loc.start = {line:locStart.line, column:locStart.column};
			locStart = {line: line, column: column};
			token.loc.end = locStart;
		}
		tokens.push(token);
		//console.log('Emitting ' + token);
		currtoken = undefined;
		return true;
	};
	var create = function(token) { currtoken = token; return true; };
	var parseerror = function() { console.log("Parse error at index " + i + ", processing codepoint 0x" + code.toString(16) + " in state " + state + ".");return true; };
	var catchfire = function(msg) { console.log("MAJOR SPEC ERROR: " + msg); return true;}
	var switchto = function(newstate) {
		state = newstate;
		//console.log('Switching to ' + state);
		return true;
	};
	var consumeEscape = function() {
		// Assume the the current character is the \
		consume();
		if(hexdigit(code)) {
			// Consume 1-6 hex digits
			var digits = [];
			for(var total = 0; total < 6; total++) {
				if(hexdigit(code)) {
					digits.push(code);
					consume();
				} else { break; }
			}
			if(digits.map != null) {
				var value = parseInt(digits.map(String.fromCharCode).join(''), 16);
			} else {
				d1 = [];
				_len = digits.length;
				for (_i = 0; _i < _len; _i++) { d1.push(String.fromCharCode(digits[_i])); }
				var value = parseInt(d1.join(''), 16);
			}
			if( value > maximumallowedcodepoint ) value = 0xfffd;
			// If the current char is whitespace, cool, we'll just eat it.
			// Otherwise, put it back.
			if(!whitespace(code)) reconsume();
			return value;
		} else {
			return code;
		}
	};

	for(;;) {
		if(i > str.length*2) return "I'm infinite-looping!";
		consume();
		switch(state) {
		case "data":
			if(whitespace(code)) {
				emit(new WhitespaceToken);
				while(whitespace(next())) consume();
			}
			else if(code == 0x22) switchto("double-quote-string");
			else if(code == 0x23) switchto("hash");
			else if(code == 0x27) switchto("single-quote-string");
			else if(code == 0x28) emit(new OpenParenToken);
			else if(code == 0x29) emit(new CloseParenToken);
			else if(code == 0x2b) {
				if(digit(next()) || (next() == 0x2e && digit(next(2)))) switchto("number") && reconsume();
				else emit(new DelimToken(code));
			}
			else if(code == 0x2d) {
				if(next(1) == 0x2d && next(2) == 0x3e) consume(2) && emit(new CDCToken);
				else if(digit(next()) || (next(1) == 0x2e && digit(next(2)))) switchto("number") && reconsume();
				else switchto('ident') && reconsume();
			}
			else if(code == 0x2e) {
				if(digit(next())) switchto("number") && reconsume();
				else emit(new DelimToken(code));
			}
			else if(code == 0x2f) {
				if(next() == 0x2a) consume() && switchto("comment");
				else emit(new DelimToken(code));
			}
			else if(code == 0x3a) emit(new ColonToken);
			else if(code == 0x3b) emit(new SemicolonToken);
			else if(code == 0x3c) {
				if(next(1) == 0x21 && next(2) == 0x2d && next(3) == 0x2d) consume(3) && emit(new CDOToken);
				else emit(new DelimToken(code));
			}
			else if(code == 0x40) switchto("at-keyword");
			else if(code == 0x5b) emit(new OpenSquareToken);
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit(new DelimToken(code));
				else switchto('ident') && reconsume();
			}
			else if(code == 0x5d) emit(new CloseSquareToken);
			else if(code == 0x7b) emit(new OpenCurlyToken);
			else if(code == 0x7d) emit(new CloseCurlyToken);
			else if(digit(code)) switchto("number") && reconsume();
			else if(code == 0x55 || code == 0x75) {
				if(next(1) == 0x2b && hexdigit(next(2))) consume() && switchto("unicode-range");
				else switchto('ident') && reconsume();
			}
			else if(namestartchar(code)) switchto('ident') && reconsume();
			else if(eof()) { emit(new EOFToken); return tokens; }
			else emit(new DelimToken(code));
			break;

		case "double-quote-string":
			if(currtoken == undefined) create(new StringToken);

			if(code == 0x22) emit() && switchto("data");
			else if(eof()) parseerror() && emit() && switchto("data") && reconsume();
			else if(newline(code)) parseerror() && emit(new BadStringToken) && switchto("data") && reconsume();
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit(new BadStringToken) && switchto("data");
				else if(newline(next())) consume();
				else currtoken.append(consumeEscape());
			}
			else currtoken.append(code);
			break;

		case "single-quote-string":
			if(currtoken == undefined) create(new StringToken);

			if(code == 0x27) emit() && switchto("data");
			else if(eof()) parseerror() && emit() && switchto("data");
			else if(newline(code)) parseerror() && emit(new BadStringToken) && switchto("data") && reconsume();
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit(new BadStringToken) && switchto("data");
				else if(newline(next())) consume();
				else currtoken.append(consumeEscape());
			}
			else currtoken.append(code);
			break;

		case "hash":
			if(namechar(code)) create(new HashToken(code)) && switchto("hash-rest");
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit(new DelimToken(0x23)) && switchto("data") && reconsume();
				else create(new HashToken(consumeEscape())) && switchto('hash-rest');
			}
			else emit(new DelimToken(0x23)) && switchto('data') && reconsume();
			break;

		case "hash-rest":
			if(namechar(code)) currtoken.append(code);
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit() && switchto("data") && reconsume();
				else currtoken.append(consumeEscape());
			}
			else emit() && switchto('data') && reconsume();
			break;

		case "comment":
			if(code == 0x2a) {
				if(next() == 0x2f) consume() && switchto('data');
				else donothing();
			}
			else if(eof()) parseerror() && switchto('data') && reconsume();
			else donothing();
			break;

		case "at-keyword":
			if(code == 0x2d) {
				if(namestartchar(next())) create(new AtKeywordToken(0x2d)) && switchto('at-keyword-rest');
				else if(next(1) == 0x5c && !badescape(next(2))) create(new AtKeywordtoken(0x2d)) && switchto('at-keyword-rest');
				else parseerror() && emit(new DelimToken(0x40)) && switchto('data') && reconsume();
			}
			else if(namestartchar(code)) create(new AtKeywordToken(code)) && switchto('at-keyword-rest');
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit(new DelimToken(0x23)) && switchto("data") && reconsume();
				else create(new AtKeywordToken(consumeEscape())) && switchto('at-keyword-rest');
			}
			else emit(new DelimToken(0x40)) && switchto('data') && reconsume();
			break;

		case "at-keyword-rest":
			if(namechar(code)) currtoken.append(code);
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit() && switchto("data") && reconsume();
				else currtoken.append(consumeEscape());
			}
			else emit() && switchto('data') && reconsume();
			break;

		case "ident":
			if(code == 0x2d) {
				if(namestartchar(next())) create(new IdentifierToken(code)) && switchto('ident-rest');
				else if(next(1) == 0x5c && !badescape(next(2))) create(new IdentifierToken(code)) && switchto('ident-rest');
				else emit(new DelimToken(0x2d)) && switchto('data');
			}
			else if(namestartchar(code)) create(new IdentifierToken(code)) && switchto('ident-rest');
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && switchto("data") && reconsume();
				else create(new IdentifierToken(consumeEscape())) && switchto('ident-rest');
			}
			else catchfire("Hit the generic 'else' clause in ident state.") && switchto('data') && reconsume();
			break;

		case "ident-rest":
			if(namechar(code)) currtoken.append(code);
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit() && switchto("data") && reconsume();
				else currtoken.append(consumeEscape());
			}
			else if(code == 0x28) {
				if(currtoken.ASCIImatch('url')) switchto('url');
				else emit(new FunctionToken(currtoken)) && switchto('data');
			} 
			else if(whitespace(code) && options.transformFunctionWhitespace) switchto('transform-function-whitespace') && reconsume();
			else emit() && switchto('data') && reconsume();
			break;

		case "transform-function-whitespace":
			if(whitespace(next())) donothing();
			else if(code == 0x28) emit(new FunctionToken(currtoken)) && switchto('data');
			else emit() && switchto('data') && reconsume();
			break;

		case "number":
			create(new NumberToken());

			if(code == 0x2d) {
				if(digit(next())) consume() && currtoken.append([0x2d,code]) && switchto('number-rest');
				else if(next(1) == 0x2e && digit(next(2))) consume(2) && currtoken.append([0x2d,0x2e,code]) && switchto('number-fraction');
				else switchto('data') && reconsume();
			}
			else if(code == 0x2b) {
				if(digit(next())) consume() && currtoken.append([0x2b,code]) && switchto('number-rest');
				else if(next(1) == 0x2e && digit(next(2))) consume(2) && currtoken.append([0x2b,0x2e,code]) && switchto('number-fraction');
				else switchto('data') && reconsume();
			}
			else if(digit(code)) currtoken.append(code) && switchto('number-rest');
			else if(code == 0x2e) {
				if(digit(next())) consume() && currtoken.append([0x2e,code]) && switchto('number-fraction');
				else switchto('data') && reconsume();
			}
			else switchto('data') && reconsume();
			break;

		case "number-rest":
			if(digit(code)) currtoken.append(code);
			else if(code == 0x2e) {
				if(digit(next())) consume() && currtoken.append([0x2e,code]) && switchto('number-fraction');
				else emit() && switchto('data') && reconsume();
			}
			else if(code == 0x25) emit(new PercentageToken(currtoken)) && switchto('data');
			else if(code == 0x45 || code == 0x65) {
				if(digit(next())) consume() && currtoken.append([0x25,code]) && switchto('sci-notation');
				else if((next(1) == 0x2b || next(1) == 0x2d) && digit(next(2))) currtoken.append([0x25,next(1),next(2)]) && consume(2) && switchto('sci-notation');
				else create(new DimensionToken(currtoken,code)) && switchto('dimension');
			}
			else if(code == 0x2d) {
				if(namestartchar(next())) consume() && create(new DimensionToken(currtoken,[0x2d,code])) && switchto('dimension');
				else if(next(1) == 0x5c && badescape(next(2))) parseerror() && emit() && switchto('data') && reconsume();
				else if(next(1) == 0x5c) consume() && create(new DimensionToken(currtoken, [0x2d,consumeEscape()])) && switchto('dimension');
				else emit() && switchto('data') && reconsume();
			}
			else if(namestartchar(code)) create(new DimensionToken(currtoken, code)) && switchto('dimension');
			else if(code == 0x5c) {
				if(badescape(next)) parseerror() && emit() && switchto('data') && reconsume();
				else create(new DimensionToken(currtoken,consumeEscape)) && switchto('dimension');
			}
			else emit() && switchto('data') && reconsume();
			break;

		case "number-fraction":
			currtoken.type = "number";

			if(digit(code)) currtoken.append(code);
			else if(code == 0x25) emit(new PercentageToken(currtoken)) && switchto('data');
			else if(code == 0x45 || code == 0x65) {
				if(digit(next())) consume() && currtoken.append([0x65,code]) && switchto('sci-notation');
				else if((next(1) == 0x2b || next(1) == 0x2d) && digit(next(2))) currtoken.append([0x65,next(1),next(2)]) && consume(2) && switchto('sci-notation');
				else create(new DimensionToken(currtoken,code)) && switchto('dimension');
			}
			else if(code == 0x2d) {
				if(namestartchar(next())) consume() && create(new DimensionToken(currtoken,[0x2d,code])) && switchto('dimension');
				else if(next(1) == 0x5c && badescape(next(2))) parseerror() && emit() && switchto('data') && reconsume();
				else if(next(1) == 0x5c) consume() && create(new DimensionToken(currtoken, [0x2d,consumeEscape()])) && switchto('dimension');
				else emit() && switchto('data') && reconsume();
			}
			else if(namestartchar(code)) create(new DimensionToken(currtoken, code)) && switchto('dimension');
			else if(code == 0x5c) {
				if(badescape(next)) parseerror() && emit() && switchto('data') && reconsume();
				else create(new DimensionToken(currtoken,consumeEscape())) && switchto('dimension');
			}
			else emit() && switchto('data') && reconsume();
			break;

		case "dimension":
			if(namechar(code)) currtoken.append(code);
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && emit() && switchto('data') && reconsume();
				else currtoken.append(consumeEscape());
			}
			else emit() && switchto('data') && reconsume();
			break;

		case "sci-notation":
			currtoken.type = "number";

			if(digit(code)) currtoken.append(code);
			else emit() && switchto('data') && reconsume();
			break;

		case "url":
			if(eof()) parseerror() && emit(new BadURLToken) && switchto('data');
			else if(code == 0x22) switchto('url-double-quote');
			else if(code == 0x27) switchto('url-single-quote');
			else if(code == 0x29) emit(new URLToken) && switchto('data');
			else if(whitespace(code)) donothing();
			else switchto('url-unquoted') && reconsume();
			break;

		case "url-double-quote":
			if(! (currtoken instanceof URLToken)) create(new URLToken);

			if(eof()) parseerror() && emit(new BadURLToken) && switchto('data');
			else if(code == 0x22) switchto('url-end');
			else if(newline(code)) parseerror() && switchto('bad-url');
			else if(code == 0x5c) {
				if(newline(next())) consume();
				else if(badescape(next())) parseerror() && emit(new BadURLToken) && switchto('data') && reconsume();
				else currtoken.append(consumeEscape());
			}
			else currtoken.append(code);
			break;

		case "url-single-quote":
			if(! (currtoken instanceof URLToken)) create(new URLToken);

			if(eof()) parseerror() && emit(new BadURLToken) && switchto('data');
			else if(code == 0x27) switchto('url-end');
			else if(newline(code)) parseerror() && switchto('bad-url');
			else if(code == 0x5c) {
				if(newline(next())) consume();
				else if(badescape(next())) parseerror() && emit(new BadURLToken) && switchto('data') && reconsume();
				else currtoken.append(consumeEscape());
			}
			else currtoken.append(code);
			break;

		case "url-end":
			if(eof()) parseerror() && emit(new BadURLToken) && switchto('data');
			else if(whitespace(code)) donothing();
			else if(code == 0x29) emit() && switchto('data');
			else parseerror() && switchto('bad-url') && reconsume();
			break;

		case "url-unquoted":
			if(! (currtoken instanceof URLToken)) create(new URLToken);

			if(eof()) parseerror() && emit(new BadURLToken) && switchto('data');
			else if(whitespace(code)) switchto('url-end');
			else if(code == 0x29) emit() && switchto('data');
			else if(code == 0x22 || code == 0x27 || code == 0x28 || nonprintable(code)) parseerror() && switchto('bad-url');
			else if(code == 0x5c) {
				if(badescape(next())) parseerror() && switchto('bad-url');
				else currtoken.append(consumeEscape());
			}
			else currtoken.append(code);
			break;

		case "bad-url":
			if(eof()) parseerror() && emit(new BadURLToken) && switchto('data');
			else if(code == 0x29) emit(new BadURLToken) && switchto('data');
			else if(code == 0x5c) {
				if(badescape(next())) donothing();
				else consumeEscape();
			}
			else donothing();
			break;

		case "unicode-range":
			// We already know that the current code is a hexdigit.

			var start = [code], end = [code];

			for(var total = 1; total < 6; total++) {
				if(hexdigit(next())) {
					consume();
					start.push(code);
					end.push(code);
				}
				else break;
			}

			if(next() == 0x3f) {
				for(;total < 6; total++) {
					if(next() == 0x3f) {
						consume();
						start.push("0".charCodeAt(0));
						end.push("f".charCodeAt(0));
					}
					else break;
				}
				emit(new UnicodeRangeToken(start,end)) && switchto('data');
			}
			else if(next(1) == 0x2d && hexdigit(next(2))) {
				consume();
				consume();
				end = [code];
				for(var total = 1; total < 6; total++) {
					if(hexdigit(next())) {
						consume();
						end.push(code);
					}
					else break;
				}
				emit(new UnicodeRangeToken(start,end)) && switchto('data');
			}
			else emit(new UnicodeRangeToken(start)) && switchto('data');
			break;

		default:
			catchfire("Unknown state '" + state + "'");
		}
	}
}

function stringFromCodeArray(arr) {
	return String.fromCharCode.apply(null,arr.filter(function(e){return e;}));
}

function CSSParserToken(options) { return this; }
CSSParserToken.prototype.finish = function() { return this; }
CSSParserToken.prototype.toString = function() { return this.tokenType; }
CSSParserToken.prototype.toSourceString = CSSParserToken.prototype.toString;
CSSParserToken.prototype.toJSON = function() { return this.toString(); }

function BadStringToken() { return this; }
BadStringToken.prototype = new CSSParserToken;
BadStringToken.prototype.tokenType = "BADSTRING";

function BadURLToken() { return this; }
BadURLToken.prototype = new CSSParserToken;
BadURLToken.prototype.tokenType = "BADURL";

function WhitespaceToken() { return this; }
WhitespaceToken.prototype = new CSSParserToken;
WhitespaceToken.prototype.tokenType = "WHITESPACE";
WhitespaceToken.prototype.toString = function() { return "WS"; }
WhitespaceToken.prototype.toSourceString = function() { return " "; }

function CDOToken() { return this; }
CDOToken.prototype = new CSSParserToken;
CDOToken.prototype.tokenType = "CDO";

function CDCToken() { return this; }
CDCToken.prototype = new CSSParserToken;
CDCToken.prototype.tokenType = "CDC";

function ColonToken() { return this; }
ColonToken.prototype = new CSSParserToken;
ColonToken.prototype.tokenType = ":";

function SemicolonToken() { return this; }
SemicolonToken.prototype = new CSSParserToken;
SemicolonToken.prototype.tokenType = ";";

function OpenCurlyToken() { return this; }
OpenCurlyToken.prototype = new CSSParserToken;
OpenCurlyToken.prototype.tokenType = "{";

function CloseCurlyToken() { return this; }
CloseCurlyToken.prototype = new CSSParserToken;
CloseCurlyToken.prototype.tokenType = "}";

function OpenSquareToken() { return this; }
OpenSquareToken.prototype = new CSSParserToken;
OpenSquareToken.prototype.tokenType = "[";

function CloseSquareToken() { return this; }
CloseSquareToken.prototype = new CSSParserToken;
CloseSquareToken.prototype.tokenType = "]";

function OpenParenToken() { return this; }
OpenParenToken.prototype = new CSSParserToken;
OpenParenToken.prototype.tokenType = "(";

function CloseParenToken() { return this; }
CloseParenToken.prototype = new CSSParserToken;
CloseParenToken.prototype.tokenType = ")";

function EOFToken() { return this; }
EOFToken.prototype = new CSSParserToken;
EOFToken.prototype.tokenType = "EOF";

function DelimToken(code) {
	this.value = String.fromCharCode(code);
	return this;
}
DelimToken.prototype = new CSSParserToken;
DelimToken.prototype.tokenType = "DELIM";
DelimToken.prototype.toString = function() { return "DELIM("+this.value+")"; }
DelimToken.prototype.toSourceString = function() { return this.value; }

function StringValuedToken() { return this; }
StringValuedToken.prototype = new CSSParserToken;
StringValuedToken.prototype.append = function(val) {
	if(val instanceof Array) {
		for(var i = 0; i < val.length; i++) {
			this.value.push(val[i]);
		}
	} else {
		this.value.push(val);
	}
	return true;
}
StringValuedToken.prototype.finish = function() {
	this.value = this.valueAsString();
	return this;
}
StringValuedToken.prototype.ASCIImatch = function(str) {
	return this.valueAsString().toLowerCase() == str.toLowerCase();
}
StringValuedToken.prototype.valueAsString = function() {
	if(typeof this.value == 'string') return this.value;
	return stringFromCodeArray(this.value);
}
StringValuedToken.prototype.valueAsCodes = function() {
	if(typeof this.value == 'string') {
		var ret = [];
		for(var i = 0; i < this.value.length; i++)
			ret.push(this.value.charCodeAt(i));
		return ret;
	}
	return this.value.filter(function(e){return e;});
}

function IdentifierToken(val) {
	this.value = [];
	this.append(val);
}
IdentifierToken.prototype = new StringValuedToken;
IdentifierToken.prototype.tokenType = "IDENT";
IdentifierToken.prototype.toString = function() { return "IDENT("+this.value+")"; }
IdentifierToken.prototype.toSourceString = function() { return this.value; }

function FunctionToken(val) {
	// These are always constructed by passing an IdentifierToken
	this.value = val.finish().value;
}
FunctionToken.prototype = new StringValuedToken;
FunctionToken.prototype.tokenType = "FUNCTION";
FunctionToken.prototype.toString = function() { return "FUNCTION("+this.value+")"; }
FunctionToken.prototype.toSourceString = function() { return this.value; }

function AtKeywordToken(val) {
	this.value = [];
	this.append(val);
}
AtKeywordToken.prototype = new StringValuedToken;
AtKeywordToken.prototype.tokenType = "AT-KEYWORD";
AtKeywordToken.prototype.toString = function() { return "AT("+this.value+")"; }
AtKeywordToken.prototype.toSourceString = function() { return "@"+this.value; }

function HashToken(val) {
	this.value = [];
	this.append(val);
}
HashToken.prototype = new StringValuedToken;
HashToken.prototype.tokenType = "HASH";
HashToken.prototype.toString = function() { return "HASH("+this.value+")"; }
HashToken.prototype.toSourceString = function() { return "#"+this.value; }

function StringToken(val) {
	this.value = [];
	this.append(val);
}
StringToken.prototype = new StringValuedToken;
StringToken.prototype.tokenType = "STRING";
StringToken.prototype.toString = function() { return "\""+this.value+"\""; }
StringToken.prototype.toSourceString = StringToken.prototype.toString;

function URLToken(val) {
	this.value = [];
	this.append(val);
}
URLToken.prototype = new StringValuedToken;
URLToken.prototype.tokenType = "URL";
URLToken.prototype.toString = function() { return "URL("+this.value+")"; }
URLToken.prototype.toSourceString = function() { return "url('"+this.value+"')"; }

function NumberToken(val) {
	this.value = [];
	this.append(val);
	this.type = "integer";
}
NumberToken.prototype = new StringValuedToken;
NumberToken.prototype.tokenType = "NUMBER";
NumberToken.prototype.toString = function() {
	if(this.type == "integer")
		return "INT("+this.value+")";
	return "NUMBER("+this.value+")";
}
NumberToken.prototype.toSourceString = function() {
 	if(this.type == "integer")
		return this.value;
	return this.value;
}
NumberToken.prototype.finish = function() {
	this.repr = this.valueAsString();
	this.value = this.repr * 1;
	if(Math.abs(this.value) % 1 != 0) this.type = "number";
	return this;
}

function PercentageToken(val) {
	// These are always created by passing a NumberToken as val
	val.finish();
	this.value = val.value;
	this.repr = val.repr;
}
PercentageToken.prototype = new CSSParserToken;
PercentageToken.prototype.tokenType = "PERCENTAGE";
PercentageToken.prototype.toString = function() { return "PERCENTAGE("+this.value+")"; }
PercentageToken.prototype.toSourceString = function() { return this.value+'%'; }

function DimensionToken(val,unit) {
	// These are always created by passing a NumberToken as the val
	val.finish();
	this.num = val.value;
	this.unit = [];
	this.repr = val.repr;
	this.append(unit);
}
DimensionToken.prototype = new CSSParserToken;
DimensionToken.prototype.tokenType = "DIMENSION";
DimensionToken.prototype.toString = function() { return "DIM("+this.num+","+this.unit+")"; }
DimensionToken.prototype.toSourceString = function() { return this.num+this.unit; }
DimensionToken.prototype.append = function(val) {
	if(val instanceof Array) {
		for(var i = 0; i < val.length; i++) {
			this.unit.push(val[i]);
		}
	} else {
		this.unit.push(val);
	}
	return true;
}
DimensionToken.prototype.finish = function() {
	this.unit = stringFromCodeArray(this.unit);
	this.repr += this.unit;
	return this;
}

function UnicodeRangeToken(start,end) {
	// start and end are array of char codes, completely finished
	start = parseInt(stringFromCodeArray(start),16);
	if(end === undefined) end = start + 1;
	else end = parseInt(stringFromCodeArray(end),16);

	if(start > maximumallowedcodepoint) end = start;
	if(end < start) end = start;
	if(end > maximumallowedcodepoint) end = maximumallowedcodepoint;

	this.start = start;
	this.end = end;
	return this;
}
UnicodeRangeToken.prototype = new CSSParserToken;
UnicodeRangeToken.prototype.tokenType = "UNICODE-RANGE";
UnicodeRangeToken.prototype.toString = function() {
	if(this.start+1 == this.end)
		return "UNICODE-RANGE("+this.start.toString(16).toUpperCase()+")";
	if(this.start < this.end)
		return "UNICODE-RANGE("+this.start.toString(16).toUpperCase()+"-"+this.end.toString(16).toUpperCase()+")";
	return "UNICODE-RANGE()";
}
UnicodeRangeToken.prototype.toSourceString = function() {
	if(this.start+1 == this.end)
		return "UNICODE-RANGE("+this.start.toString(16).toUpperCase()+")";
	if(this.start < this.end)
		return "UNICODE-RANGE("+this.start.toString(16).toUpperCase()+"-"+this.end.toString(16).toUpperCase()+")";
	return "UNICODE-RANGE()";
}
UnicodeRangeToken.prototype.contains = function(code) {
	return code >= this.start && code < this.end;
}


// Exportation.
// TODO: also export the various tokens objects?
exports.tokenize = tokenize;

}));

/*! JsRender v0.9.90 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function(e,t){var n=t.jQuery;"object"==typeof exports?module.exports=n?e(t,n):function(n){if(n&&!n.fn)throw"Provide jQuery or null";return e(t,n)}:"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t,!1)}(function(e,t){"use strict";function n(e,t){return function(){var n,r=this,i=r.base;return r.base=e,n=t.apply(r,arguments),r.base=i,n}}function r(e,t){return ne(t)&&(t=n(e?e._d?e:n(a,e):a,t),t._d=1),t}function i(e,t){var n,i=t.props;for(n in i)!Ee.test(n)||e[n]&&e[n].fix||(e[n]="convert"!==n?r(e.constructor.prototype[n],i[n]):i[n])}function o(e){return e}function a(){return""}function s(e){try{throw console.log("JsRender dbg breakpoint: "+e),"dbg breakpoint"}catch(t){}return this.base?this.baseApply(arguments):e}function d(e){this.name=(t.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function l(e,t){if(e){for(var n in t)e[n]=t[n];return e}}function u(e,t,n){return e?re(e)?u.apply(ee,e):(le.delimiters=[e,t,he=n?n.charAt(0):he],ce=e.charAt(0),fe=e.charAt(1),ge=t.charAt(0),ve=t.charAt(1),e="\\"+ce+"(\\"+he+")?\\"+fe,t="\\"+ge+"\\"+ve,X="(?:(\\w+(?=[\\/\\s\\"+ge+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+ge+"]|\\"+ge+"(?!\\"+ve+"))*?)",de.rTag="(?:"+X+")",X=new RegExp("(?:"+e+X+"(\\/)?|\\"+ce+"(\\"+he+")?\\"+fe+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+t,"g"),de.rTmpl=new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|"+e+".*"+t),pe):le.delimiters}function p(e,t){t||e===!0||(t=e,e=void 0);var n,r,i,o,a=this,s=!t||"root"===t;if(e){if(o=t&&a.type===t&&a,!o)if(n=a.views,a._.useKey){for(r in n)if(o=t?n[r].get(e,t):n[r])break}else for(r=0,i=n.length;!o&&r<i;r++)o=t?n[r].get(e,t):n[r]}else if(s)o=a.root;else for(;a&&!o;)o=a.type===t?a:void 0,a=a.parent;return o}function c(){var e=this.get("item");return e?e.index:void 0}function f(){return this.index}function g(t,n,r){var i,o,a,s,d=this,u=!we&&void 0!==n,p=d.ctx;if(t in p||t in(p=ae)){if(a=p&&p[t],"tag"===t||"root"===t||"parentTags"===t||d._.it===t)return a}else p=void 0;if((!a||!ne(a)&&d.linked||d.tagCtx)&&(a&&a._cxp||(p!==ae&&(d=d.tagCtx?d:(d=d.scope||d,!d.isTop&&d.ctx.tag||d),p=d._ocps,a=p&&p[t]||a),a&&a._cxp||!r&&!u||(a=de._crcp(t,a,d,p))),s=a&&a._cxp)){if(u)return de._ucp(t,n,d,s);if(r)return o=a[1]?de._ceo(a[1].deps):[_e],o.unshift(a[0]),o._cxp=s,o;a=a[1]?s.tag&&s.tag.cvtArgs?s.tag.cvtArgs(!0,s.tagElse)[s.ind]:a[1](a[0].data,a[0],de):a[0]._ocp}return a&&ne(a)&&(i=function(){return a.apply(this&&this!==e?this:d,arguments)},l(i,a),i._vw=d),i||a}function v(e){return e&&(e.fn?e:this.getRsc("templates",e)||ie(e))}function h(e,t,n,r){var o,a,s,d,u="number"==typeof n&&t.tmpl.bnds[n-1],p=t.linkCtx;if(void 0===r&&u&&u._lr&&(r=""),void 0!==r?n=r={props:{},args:[r]}:u&&(n=u(t.data,t,de)),u=u._bd&&u,a=n.args[0],e||u){if(o=p&&p.tag,n.view=t,!o){if(o=l(new de._tg,{_:{bnd:u,unlinked:!0},inline:!p,tagName:":",convert:e,flow:!0,tagCtx:n}),s=n.args.length,s>1)for(d=o.bindTo=[];s--;)d.unshift(s);p&&(p.tag=o,o.linkCtx=p),n.ctx=Q(n.ctx,(p?p.view:t).ctx),i(o,n)}o._er=r&&a,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,a=o.cvtArgs()[0]}return a=u&&t._.onRender?t._.onRender(a,t,o):a,void 0!=a?a:""}function m(e,t){var n,r,i,o,a,s,d,l=this;if(l.tagName?(s=l,l=s.tagCtxs?s.tagCtxs[t||0]:s.tagCtx):s=l.tag,a=s.bindTo,o=l.args,(d=s.convert)&&""+d===d&&(d="true"===d?void 0:l.view.getRsc("converters",d)||I("Unknown converter: '"+d+"'")),e&&e.length)o=e;else if(d&&!e&&(o=o.slice()),a){for(i=[],n=a.length;n--;)r=a[n],i.unshift(w(l,r));e&&(o=i)}if(d)if(a=a||[0],n=a.length,d=d.apply(s,i||o),re(d)&&d.length===n||(d=[d],a=[0],n=1),e)o=d;else for(;n--;)r=a[n],+r===r&&(o[r]=d[n]);return o}function w(e,t){return e=e[+t===t?"args":"props"],e&&e[t]}function x(e){return this.cvtArgs(!0,e)}function _(e,t){var n,r,i=this;if(""+t===t){for(;void 0===n&&i;)r=i.tmpl&&i.tmpl[e],n=r&&r[t],i=i.parent;return n||ee[e][t]}}function b(e,t,n,r,o,a){function s(e){var t;(t=d[e])&&(d[e]=t=re(t)?t:[t],E!==t.length&&I(e+" length not same as bindTo "))}t=t||Y;var d,l,u,p,c,f,g,v,h,m,x,_,b,y,k,C,T,j,A,R,V,$,E,M=0,N="",P=t.linkCtx||0,O=t.ctx,U=n||t.tmpl,q="number"==typeof r&&t.tmpl.bnds[r-1];for("tag"===e._is?(d=e,e=d.tagName,r=d.tagCtxs,u=d.template):(l=t.getRsc("tags",e)||I("Unknown tag: {{"+e+"}} "),u=l.template),void 0===a&&q&&(q._lr=(l.lateRender||q._lr)&&"false"!==q._lr)&&(a=""),void 0!==a?(N+=a,r=a=[{props:{},args:[],params:{}}]):q&&(r=q(t.data,t,de)),g=r.length;M<g;M++)m=r[M],y=m.tmpl,(!P||!P.tag||M&&!P.tag.inline||d._er||y&&+y===y)&&(y&&U.tmpls&&(m.tmpl=m.content=U.tmpls[y-1]),m.index=M,m.render=S,m.view=t,m.ctx=Q(m.ctx,O)),(n=m.props.tmpl)&&(m.tmpl=t.getTmpl(n),m.content=m.content||m.tmpl),d||(d=new l._ctr,k=!!d.init,d.parent=f=O&&O.tag,d.tagCtxs=r,R=d.dataMap,P&&(d.inline=!1,P.tag=d,d.linkCtx=P),(d._.bnd=q||P.fn)?d._.arrVws={}:d.dataBoundOnly&&I(e+" must be data-bound:\n{^{"+e+"}}")),r=d.tagCtxs,R=d.dataMap,m.tag=d,R&&r&&(m.map=r[M].map),d.flow||(x=m.ctx=m.ctx||{},p=d.parents=x.parentTags=O&&Q(x.parentTags,O.parentTags)||{},f&&(p[f.tagName]=f),p[d.tagName]=x.tag=d);if(!(d._er=a)){for(i(d,r[0]),d.rendering={},M=0;M<g;M++){if(m=d.tagCtx=r[M],A=m.props,d.ctx=m.ctx,!M){if(k&&(d.init(m,P,d.ctx),k=void 0),m.args.length||d.argDefault===!1||(m.args=j=[m.view.data],m.params.args=["#data"]),b=d.bindTo,void 0!==b)for(b=d.bindTo=re(b)?b:[b],v=b.length;v--;)$=b[v],isNaN(parseInt($))||($=parseInt($)),b[v]=$;b=d.bindTo||[0],E=b.length,d._.bnd&&(s("linkedElement"),s("linkedCtxParam")),P&&(P.attr=d.attr=P.attr||d.attr),c=d.attr,d._.noVws=c&&c!==Pe}if(j=d.cvtArgs(void 0,M),d.linkedCtxParam)for(v=E;v--;)(_=d.linkedCtxParam[v])&&($=b[v],m.ctx[_]=de._cp(w(m,$),w(m.params,$),m.view,d._.bnd&&{tag:d,ind:v,tagElse:M}));(C=A.dataMap||R)&&(j.length||A.dataMap)&&(T=m.map,T&&T.src===j[0]&&!o||(T&&T.src&&T.unmap(),T=m.map=C.map(j[0],A,void 0,!d._.bnd)),j=[T.tgt]),h=void 0,d.render&&(h=d.render.apply(d,j),t.linked&&h&&!Me.test(h)&&(n={links:[]},n.render=n.fn=function(){return h},h=F(n,t.data,void 0,!0,t,void 0,void 0,d))),j.length||(j=[t]),void 0===h&&(V=j[0],d.contentCtx&&(V=d.contentCtx===!0?t:d.contentCtx(V)),h=m.render(V,!0)||(o?void 0:"")),N=N?N+(h||""):h}d.rendering=void 0}return d.tagCtx=r[0],d.ctx=d.tagCtx.ctx,d._.noVws&&d.inline&&(N="text"===c?oe.html(N):""),q&&t._.onRender?t._.onRender(N,t,d):N}function y(e,t,n,r,i,o,a,s){var d,l,u,p=this,f="array"===t;p.content=s,p.views=f?[]:{},p.data=r,p.tmpl=i,u=p._={key:0,useKey:f?0:1,id:""+Se++,onRender:a,bnds:{}},p.linked=!!a,p.type=t||"top",(p.parent=n)?(p.root=n.root||p,d=n.views,l=n._,p.isTop=l.scp,p.scope=(!e.tag||e.tag===n.ctx.tag)&&!p.isTop&&n.scope||p,l.useKey?(d[u.key="_"+l.useKey++]=p,p.index=qe,p.getIndex=c):d.length===(u.key=p.index=o)?d.push(p):d.splice(o,0,p),p.ctx=e||n.ctx):p.ctx=e||{}}function k(e){var t,n,r;for(t in Le)n=t+"s",e[n]&&(r=e[n],e[n]={},ee[n](r,e))}function C(e,t,n){function i(){var t=this;t._={unlinked:!0},t.inline=!0,t.tagName=e}var o,a,s,d=(t.bindTo,new de._tg);if(ne(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t}),a=t.baseTag){t.flow=!!t.flow,t.baseTag=a=""+a===a?n&&n.tags[a]||se[a]:a,d=l(d,a);for(s in t)d[s]=r(a[s],t[s])}else d=l(d,t);return void 0!==(o=d.template)&&(d.template=""+o===o?ie[o]||ie(o):o),(i.prototype=d).constructor=d._ctr=i,n&&(d._parentTmpl=n),d}function T(e){return this.base.apply(this,e)}function j(e,n,r,i){function o(n){var o,s;if(""+n===n||n.nodeType>0&&(a=n)){if(!a)if(/^\.\/[^\\:*?"<>]*$/.test(n))(s=ie[e=e||n])?n=s:a=document.getElementById(n);else if(t.fn&&!de.rTmpl.test(n))try{a=t(n,document)[0]}catch(d){}a&&(i?n=a.innerHTML:(o=a.getAttribute(Oe),o&&(o!==Ue?(n=ie[o],delete ie[o]):t.fn&&(n=t.data(a)[Ue])),o&&n||(e=e||(t.fn?Ue:n),n=j(e,a.innerHTML,r,i)),n.tmplName=e=e||o,e!==Ue&&(ie[e]=n),a.setAttribute(Oe,e),t.fn&&t.data(a,Ue,n))),a=void 0}else n.fn||(n=void 0);return n}var a,s,d=n=n||"";if(de._html=oe.html,0===i&&(i=void 0,d=o(d)),i=i||(n.markup?n:{}),i.tmplName=e,r&&(i._parentTmpl=r),!d&&n.markup&&(d=o(n.markup))&&d.fn&&(d=d.markup),void 0!==d)return d.fn||n.fn?d.fn&&(s=d):(n=$(d,i),U(d.replace(Te,"\\$&"),n)),s||(s=l(function(){return s.render.apply(s,arguments)},n),k(s)),s}function A(e,t){return ne(e)?e.call(t):e}function R(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n].unmap());return t}function V(e,n){function r(e){u.apply(this,e)}function i(){return new r(arguments)}function o(e,t){for(var n,r,i,o,a=0;a<w;a++)i=c[a],n=void 0,i+""!==i&&(n=i,i=n.getter),void 0===(o=e[i])&&n&&void 0!==(r=n.defaultVal)&&(o=A(r,e)),t(o,n&&p[n.type],i)}function a(t){t=t+""===t?JSON.parse(t):t;var n,r,i=0,a=t,l=[];if(re(t)){for(t=t||[],n=t.length;i<n;i++)l.push(this.map(t[i]));return l._is=e,l.unmap=d,l.merge=s,l}if(t){o(t,function(e,t){t&&(e=t.map(e)),l.push(e)}),a=this.apply(this,l);for(r in t)r===te||_[r]||(a[r]=t[r])}return a}function s(e){e=e+""===e?JSON.parse(e):e;var t,n,r,a,s,d,l,u,p,c=0,f=this;if(re(f)){for(l={},p=[],n=e.length,r=f.length;c<n;c++){for(u=e[c],d=!1,t=0;t<r&&!d;t++)l[t]||(s=f[t],g&&(l[t]=d=g+""===g?u[g]&&(_[g]?s[g]():s[g])===u[g]:g(s,u)));d?(s.merge(u),p.push(s)):p.push(i.map(u))}return void(x?x(f).refresh(p,!0):f.splice.apply(f,[0,f.length].concat(p)))}o(e,function(e,t,n){t?f[n]().merge(e):f[n](e)});for(a in e)a===te||_[a]||(f[a]=e[a])}function d(){var e,t,n,r,i=0,o=this;if(re(o))return R(o);for(e={};i<w;i++)t=c[i],n=void 0,t+""!==t&&(n=t,t=n.getter),r=o[t](),e[t]=n&&r&&p[n.type]?re(r)?R(r):r.unmap():r;for(t in o)"_is"===t||_[t]||t===te||"_"===t.charAt(0)&&_[t.slice(1)]||ne(o[t])||(e[t]=o[t]);return e}var l,u,p=this,c=n.getters,f=n.extend,g=n.id,v=t.extend({_is:e||"unnamed",unmap:d,merge:s},f),h="",m="",w=c?c.length:0,x=t.observable,_={};for(r.prototype=v,l=0;l<w;l++)!function(e){e=e.getter||e,_[e]=l+1;var t="_"+e;h+=(h?",":"")+e,m+="this."+t+" = "+e+";\n",v[e]=v[e]||function(n){return arguments.length?void(x?x(this).setProperty(e,n):this[t]=n):this[t]},x&&(v[e].set=v[e].set||function(e){this[t]=e})}(c[l]);return u=new Function(h,m.slice(0,-1)),u.prototype=v,v.constructor=u,i.map=a,i.getters=c,i.extend=f,i.id=g,i}function $(e,n){var r,i=ue._wm||{},o=l({tmpls:[],links:{},bnds:[],_is:"template",render:S},n);return o.markup=e,n.htmlTag||(r=Re.exec(e),o.htmlTag=r?r[1].toLowerCase():""),r=i[o.htmlTag],r&&r!==i.div&&(o.markup=t.trim(o.markup)),o}function E(e,t){function n(i,o,a){var s,d,l,u=de.onStore[e];if(i&&typeof i===Ie&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===e&&i.getters||i.extend)){for(d in i)n(d,i[d],o);return o||ee}return void 0===o&&(o=i,i=void 0),i&&""+i!==i&&(a=o,o=i,i=void 0),l=a?"viewModel"===e?a:a[r]=a[r]||{}:n,s=t.compile,null===o?i&&delete l[i]:(s&&(o=s.call(l,i,o,a,0)||{},o._is=e),i&&(l[i]=o)),u&&u(i,o,a,s),o}var r=e+"s";ee[r]=n}function M(e){pe[e]=function(t){return arguments.length?(le[e]=t,pe):le[e]}}function N(e){function t(t,n){this.tgt=e.getTgt(t,n)}return ne(e)&&(e={getTgt:e}),e.baseMap&&(e=l(l({},e.baseMap),e)),e.map=function(e,n){return new t(e,n)},e}function S(e,t,n,r,i,o){var a,s,d,l,u,p,c,f,g=r,v="";if(t===!0?(n=t,t=void 0):typeof t!==Ie&&(t=void 0),(d=this.tag)?(u=this,g=g||u.view,l=g.getTmpl(d.template||u.tmpl),arguments.length||(e=g)):l=this,l){if(!r&&e&&"view"===e._is&&(g=e),g&&e===g&&(e=g.data),p=!g,we=we||p,g||((t=t||{}).root=e),!we||ue.useViews||l.useViews||g&&g!==Y)v=F(l,e,t,n,g,i,o,d);else{if(g?(c=g.data,f=g.index,g.index=qe):(g=Y,c=g.data,g.data=e,g.ctx=t),re(e)&&!n)for(a=0,s=e.length;a<s;a++)g.index=a,g.data=e[a],v+=l.fn(e[a],g,de);else g.data=e,v+=l.fn(e,g,de);g.data=c,g.index=f}p&&(we=void 0)}return v}function F(e,t,n,r,i,o,a,s){function d(e){_=l({},n),_[x]=e}var u,p,c,f,g,v,h,m,w,x,_,b,k="";if(s&&(w=s.tagName,b=s.tagCtx,n=n?Q(n,s.ctx):s.ctx,e===i.content?h=e!==i.ctx._wrp?i.ctx._wrp:void 0:e!==b.content?e===s.template?(h=b.tmpl,n._wrp=b.content):h=b.content||i.content:h=i.content,b.props.link===!1&&(n=n||{},n.link=!1),(x=b.props.itemVar)&&("~"!==x.charAt(0)&&O("Use itemVar='~myItem'"),x=x.slice(1))),i&&(a=a||i._.onRender,n=Q(n,i.ctx)),o===!0&&(v=!0,o=0),a&&(n&&n.link===!1||s&&s._.noVws)&&(a=void 0),m=a,a===!0&&(m=void 0,a=i._.onRender),n=e.helpers?Q(e.helpers,n):n,_=n,re(t)&&!r)for(c=v?i:void 0!==o&&i||new y(n,"array",i,t,e,o,a,h),i&&i._.useKey&&(c._.bnd=!s||s._.bnd&&s),u=0,p=t.length;u<p;u++)x&&d(t[u]),f=new y(_,"item",c,t[u],e,(o||0)+u,a,c.content),f._.it=x,g=e.fn(t[u],f,de),k+=c._.onRender?c._.onRender(g,f):g;else x&&d(t),c=v?i:new y(_,w||"data",i,t,e,o,a,h),c._.it=x,k+=e.fn(t,c,de);return s&&(c.tag=s,c.tagElse=b.index,b.contentView=c),m?m(k,c):k}function P(e,t,n){var r=void 0!==n?ne(n)?n.call(t.data,e,t):n||"":"{Error: "+(e.message||e)+"}";return le.onError&&void 0!==(n=le.onError.call(t.data,e,n&&r,t))&&(r=n),t&&!t.linkCtx?oe.html(r):r}function I(e){throw new de.Err(e)}function O(e){I("Syntax error\n"+e)}function U(e,t,n,r,i){function o(t){t-=v,t&&m.push(e.substr(v,t).replace(ke,"\\n"))}function a(t,n){t&&(t+="}}",O((n?"{{"+n+"}} block has {{/"+t+" without {{"+t:"Unmatched or missing {{/"+t)+", in template:\n"+e))}function s(s,d,l,c,g,x,_,b,y,k,C,T){(_&&d||y&&!l||b&&":"===b.slice(-1)||k)&&O(s),x&&(g=":",c=Pe),y=y||n&&!i;var j,A=(d||n)&&[[]],R="",V="",$="",E="",M="",N="",S="",F="",P=!y&&!g;l=l||(b=b||"#data",g),o(T),v=T+s.length,_?f&&m.push(["*","\n"+b.replace(/^:/,"ret+= ").replace(Ce,"$1")+";\n"]):l?("else"===l&&(Ae.test(b)&&O('for "{{else if expr}}" use "{{else expr}}"'),A=w[8]&&[[]],w[9]=e.substring(w[9],T),w=h.pop(),m=w[2],P=!0),b&&B(b.replace(ke," "),A,t).replace(je,function(e,t,n,r,i,o,a,s){return r="'"+i+"':",a?(V+=o+",",E+="'"+s+"',"):n?($+=r+"j._cp("+o+',"'+s+'",view),',N+=r+"'"+s+"',"):t?S+=o:("trigger"===i&&(F+=o),"lateRender"===i&&(j=s),R+=r+o+",",M+=r+"'"+s+"',",p=p||Ee.test(i)),""}).slice(0,-1),A&&A[0]&&A.pop(),u=[l,c||!!r||p||"",P&&[],J(E||(":"===l?"'#data',":""),M,N),J(V||(":"===l?"data,":""),R,$),S,F,j,A||0],m.push(u),P&&(h.push(w),w=u,w[9]=v)):C&&(a(C!==w[0]&&"else"!==w[0]&&C,w[0]),w[9]=e.substring(w[9],T),w=h.pop()),a(!w&&C),m=w[2]}var d,l,u,p,c,f=le.allowCode||t&&t.allowCode||pe.allowCode===!0,g=[],v=0,h=[],m=g,w=[,,g];if(f&&t._is&&(t.allowCode=f),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+ge),e=ce+e+ve),a(h[0]&&h[0][2].pop()[0]),e.replace(X,s),o(e.length),(v=g[g.length-1])&&a(""+v!==v&&+v[9]===v[9]&&v[0]),n){for(l=L(g,e,n),c=[],d=g.length;d--;)c.unshift(g[d][8]);q(l,c)}else l=L(g,t);return l}function q(e,t){var n,r,i=0,o=t.length;for(e.deps=[],e.paths=[];i<o;i++){e.paths.push(r=t[i]);for(n in r)"_jsvto"!==n&&r.hasOwnProperty(n)&&r[n].length&&!r[n].skp&&(e.deps=e.deps.concat(r[n]))}}function J(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function K(e,t){return"\n\t"+(t?t+":{":"")+"args:["+e[0]+"]"+(e[1]||!t?",\n\tprops:{"+e[1]+"}":"")+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function B(e,t,n){function r(r,m,w,x,_,b,y,k,C,T,j,A,R,V,$,E,M,N,S,F){function P(e,n,r,a,s,d,p,c){var f="."===r;if(r&&(_=_.slice(n.length),/^\.?constructor$/.test(c||_)&&O(e),f||(e=(a?'view.ctxPrm("'+a+'")':s?"view":"data")+(c?(d?"."+d:a?"":s?"":"."+r)+(p||""):(c=a?"":s?d||"":r,"")),e+=c?"."+c:"",e=n+("view.data"===e.slice(0,9)?e.slice(5):e)),l)){if(J="linkTo"===i?o=t._jsvto=t._jsvto||[]:u.bd,K=f&&J[J.length-1]){if(K._cpfn){for(;K.sb;)K=K.sb;K.bnd&&(_="^"+_.slice(1)),K.sb=_,K.bnd=K.bnd||"^"===_.charAt(0)}}else J.push(_);h[g]=S+(f?1:0)}return e}x&&!k&&(_=x+_),b=b||"",w=w||m||A,_=_||C,T=T||M||"";var I,q,J,K,B,L=")";if("["===T&&(T="[j._sq(",L=")]"),!y||d||s){if(l&&E&&!d&&!s&&(!i||a||o)&&(I=h[g-1],F.length-1>S-(I||0))){if(I=F.slice(I,S+r.length),q!==!0)if(J=o||p[g-1].bd,K=J[J.length-1],K&&K.prm){for(;K.sb&&K.sb.prm;)K=K.sb;B=K.sb={path:K.sb,bnd:K.bnd}}else J.push(B={path:J.pop()});E=fe+":"+I+" onerror=''"+ge,q=f[E],q||(f[E]=!0,f[E]=q=U(E,n,!0)),q!==!0&&B&&(B._cpfn=q,B.prm=u.bd,B.bnd=B.bnd||B.path&&B.path.indexOf("^")>=0)}return d?(d=!R,d?r:A+'"'):s?(s=!V,s?r:A+'"'):(w?(h[g]=S++,u=p[++g]={bd:[]},w):"")+(N?g?"":(c=F.slice(c,S),(i?(i=a=o=!1,"\b"):"\b,")+c+(c=S+r.length,l&&t.push(u.bd=[]),"\b")):k?(g&&O(e),l&&t.pop(),i=_,a=x,c=S+r.length,l&&(l=u.bd=t[i]=[],l.skp=!x),_+":"):_?_.split("^").join(".").replace(be,P)+(T?(u=p[++g]={bd:[]},v[g]=L,T):b):b?b:$?($=v[g]||$,v[g]=!1,u=p[--g],$+(T?(u=p[++g],v[g]=L,T):"")):j?(v[g]||O(e),","):m?"":(d=R,s=V,'"'))}O(e)}var i,o,a,s,d,l=t&&t[0],u={bd:l},p={0:u},c=0,f=(n?n.links:l&&(l.links=l.links||{}))||Y.tmpl.links,g=0,v={},h={},m=(e+(n?" ":"")).replace(ye,r);return!g&&m||O(e)}function L(e,t,n){var r,i,o,a,s,d,l,u,p,c,f,g,v,h,m,w,x,_,b,y,k,C,T,j,A,R,V,E,M,N,S,F=0,P=ue.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,I="",U={},J=e.length;for(""+t===t?(_=n?'data-link="'+t.replace(ke," ").slice(1,-1)+'"':t,t=0):(_=t.tmplName||"unnamed",t.allowCode&&(U.allowCode=!0),t.debug&&(U.debug=!0),f=t.bnds,x=t.tmpls),r=0;r<J;r++)if(i=e[r],""+i===i)I+='\n+"'+i+'"';else if(o=i[0],"*"===o)I+=";\n"+i[1]+"\nret=ret";else{if(a=i[1],k=!n&&i[2],s=K(i[3],"params")+"},"+K(v=i[4]),N=i[6],S=i[7],C=i[9]&&i[9].replace(Ce,"$1"),(A="else"===o)?g&&g.push(i[8]):(E=i[5]||le.debugMode!==!1&&"undefined",f&&(g=i[8])&&(g=[g],F=f.push(1))),P=P||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(R=":"===o)?a&&(o=a===Pe?">":a+o):(k&&(b=$(C,U),b.tmplName=_+"/"+o,b.useViews=b.useViews||P,L(k,b),P=b.useViews,x.push(b)),A||(y=o,P=P||o&&(!se[o]||!se[o].flow),j=I,I=""),T=e[r+1],T=T&&"else"===T[0]),M=E?";\ntry{\nret+=":"\n+",h="",m="",R&&(g||N||a&&a!==Pe||S)){if(V=new Function("data,view,j,u","// "+_+" "+ ++F+" "+o+"\nreturn {"+s+"};"),V._er=E,V._tag=o,V._bd=!!g,V._lr=S,n)return V;q(V,g),w='c("'+a+'",view,',c=!0,h=w+F+",",m=")"}if(I+=R?(n?(E?"try{\n":"")+"return ":M)+(c?(c=void 0,P=p=!0,w+(V?(f[F-1]=V,F):"{"+s+"}")+")"):">"===o?(l=!0,"h("+v[0]+")"):(u=!0,"((v="+v[0]+")!=null?v:"+(n?"null)":'"")'))):(d=!0,"\n{view:view,tmpl:"+(k?x.length:"0")+","+s+"},"),y&&!T){if(I="["+I.slice(0,-1)+"]",w='t("'+y+'",view,this,',n||g){if(I=new Function("data,view,j,u"," // "+_+" "+F+" "+y+"\nreturn "+I+";"),I._er=E,I._tag=y,g&&q(f[F-1]=I,g),I._lr=S,n)return I;h=w+F+",undefined,",m=")"}I=j+M+w+(I.deps&&F||I)+")",g=0,y=0}E&&!T&&(P=!0,I+=";\n}catch(e){ret"+(n?"urn ":"+=")+h+"j._err(e,view,"+E+")"+m+";}"+(n?"":"ret=ret"))}I="// "+_+"\nvar v"+(d?",t=j._tag":"")+(p?",c=j._cnvt":"")+(l?",h=j._html":"")+(n?";\n":',ret=""\n')+(U.debug?"debugger;":"")+I+(n?"\n":";\nreturn ret;");try{I=new Function("data,view,j,u",I)}catch(B){O("Compiled template code:\n\n"+I+'\n: "'+(B.message||B)+'"')}return t&&(t.fn=I,t.useViews=!!P),I}function Q(e,t){return e&&e!==t?t?l(l({},t),e):e:t&&l({},t)}function H(e){return Fe[e]||(Fe[e]="&#"+e.charCodeAt(0)+";")}function D(e){var t,n,r=[];if(typeof e===Ie)for(t in e)n=e[t],t!==te&&e.hasOwnProperty(t)&&!ne(n)&&r.push({key:t,prop:n});return r}function Z(e,n,r){var i=this.jquery&&(this[0]||I("Unknown template")),o=i.getAttribute(Oe);return S.call(o&&t.data(i)[Ue]||ie(i),e,n,r)}function z(e){return void 0!=e?$e.test(e)&&(""+e).replace(Ne,H)||e:""}var G=t===!1;t=t&&t.fn?t:e.jQuery;var W,X,Y,ee,te,ne,re,ie,oe,ae,se,de,le,ue,pe,ce,fe,ge,ve,he,me,we,xe="v0.9.90",_e="_ocp",be=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,ye=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,ke=/[ \t]*(\r\n|\n|\r)/g,Ce=/\\(['"])/g,Te=/['"\\]/g,je=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,Ae=/^if\s/,Re=/<(\w+)[>\s]/,Ve=/[\x00`><"'&=]/g,$e=/[\x00`><\"'&=]/,Ee=/^on[A-Z]|^convert(Back)?$/,Me=/^\#\d+_`[\s\S]*\/\d+_`$/,Ne=Ve,Se=0,Fe={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},Pe="html",Ie="object",Oe="data-jsv-tmpl",Ue="jsvTmpl",qe="For #index in nested block use #getIndex().",Je={},Ke=e.jsrender,Be=Ke&&t&&!t.render,Le={template:{compile:j},tag:{compile:C},viewModel:{compile:V},helper:{},converter:{}};if(ee={jsviews:xe,sub:{View:y,Err:d,tmplFn:U,parse:B,extend:l,extendCtx:Q,syntaxErr:O,onStore:{template:function(e,t){null===t?delete Je[e]:Je[e]=t}},addSetting:M,settings:{allowCode:!1},advSet:a,_ths:i,_gm:r,_tg:function(){},_cnvt:h,_tag:b,_er:I,_err:P,_cp:o,_sq:function(e){return"constructor"===e&&O(""),e}},settings:{delimiters:u,advanced:function(e){return e?(l(ue,e),de.advSet(),pe):ue}},map:N},(d.prototype=new Error).constructor=d,c.depends=function(){return[this.get("item"),"index"]},f.depends="index",y.prototype={get:p,getIndex:f,getRsc:_,getTmpl:v,ctxPrm:g,_is:"view"},de=ee.sub,pe=ee.settings,!(Ke||t&&t.render)){for(W in Le)E(W,Le[W]);oe=ee.converters,ae=ee.helpers,se=ee.tags,de._tg.prototype={baseApply:T,cvtArgs:m,bndArgs:x,ctxPrm:g},Y=de.topView=new y,t?(t.fn.render=Z,te=t.expando,t.observable&&(l(de,t.views.sub),ee.map=t.views.map)):(t={},G&&(e.jsrender=t),t.renderFile=t.__express=t.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},t.isFunction=function(e){return"function"==typeof e},t.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},de._jq=function(e){e!==t&&(l(e,t),t=e,t.fn.render=Z,delete t.jsrender,te=t.expando)},t.jsrender=xe),le=de.settings,le.allowCode=!1,ne=t.isFunction,t.render=Je,t.views=ee,t.templates=ie=ee.templates;for(me in le)M(me);(pe.debugMode=function(e){return void 0===e?le.debugMode:(le.debugMode=e,le.onError=e+""===e?new Function("","return '"+e+"';"):ne(e)?e:void 0,pe)})(!1),ue=le.advanced={useViews:!1,_jsv:!1},se({"if":{render:function(e){var t=this,n=t.tagCtx,r=t.rendering.done||!e&&(arguments.length||!n.index)?"":(t.rendering.done=!0,void(t.selected=n.index));return r},contentCtx:!0,flow:!0},"for":{render:function(e){var t,n=!arguments.length,r=this,i=r.tagCtx,o="",a=0;return r.rendering.done||(t=n?i.view.data:e,void 0!==t&&(o+=i.render(t,n),a+=re(t)?t.length:1),(r.rendering.done=a)&&(r.selected=i.index)),o},flow:!0},props:{baseTag:"for",dataMap:N(D),flow:!0},include:{flow:!0},"*":{render:o,flow:!0},":*":{render:o,flow:!0},dbg:ae.dbg=oe.dbg=s}),oe({html:z,attr:z,url:function(e){return void 0!=e?encodeURI(""+e):null===e?e:""}})}return le=de.settings,re=(t||Ke).isArray,pe.delimiters("{{","}}","^"),Be&&Ke.views.sub._jq(t),t||Ke},window);
//# sourceMappingURL=jsrender.min.js.map

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

'use strict';
(function ($) {
    var SlickLightbox, defaults;
    SlickLightbox = function () {
        /*
  The core class.
   */
        function SlickLightbox(element, options1) {
            var slickLightbox;
            this.options = options1;
            /* Binds the plugin. */
            this.$element = $(element);
            this.didInit = false;
            slickLightbox = this;
            this.$element.on('click.slickLightbox', this.options.itemSelector, function (e) {
                var $clickedItem, $items;
                e.preventDefault();
                $clickedItem = $(this);
                $clickedItem.blur();
                if (typeof slickLightbox.options.shouldOpen === 'function') {
                    if (!slickLightbox.options.shouldOpen(slickLightbox, $clickedItem, e)) {
                        return;
                    }
                }
                $items = slickLightbox.$element.find(slickLightbox.options.itemSelector);
                if (slickLightbox.elementIsSlick()) {
                    $items = slickLightbox.filterOutSlickClones($items);
                    $clickedItem = slickLightbox.handlePossibleCloneClick($clickedItem, $items);
                }
                return slickLightbox.init($items.index($clickedItem));
            });
        }
        SlickLightbox.prototype.init = function (index) {
            /* Creates the lightbox, opens it, binds events and calls `slick`. Accepts `index` of the element, that triggered it (so that we know, on which slide to start slick). */
            this.didInit = true;
            this.detectIE();
            this.createModal();
            this.bindEvents();
            this.initSlick(index);
            return this.open();
        };
        SlickLightbox.prototype.createModalItems = function () {
            /* Creates individual slides to be used with slick. If `options.images` array is specified, it uses it's contents, otherwise loops through elements' `options.itemSelector`. */
            var $items, createItem, itemTemplate, lazyPlaceholder, length, links;
            lazyPlaceholder = this.options.lazyPlaceholder || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
            itemTemplate = function (source, caption, lazy) {
                var imgSourceParams;
                if (lazy === true) {
                    imgSourceParams = ' data-lazy="' + source + '" src="' + lazyPlaceholder + '" ';
                } else {
                    imgSourceParams = ' src="' + source + '" ';
                }
                return '<div class="slick-lightbox-slick-item">\n  <div class="slick-lightbox-slick-item-inner">\n    <img class="slick-lightbox-slick-img" ' + imgSourceParams + ' />\n    ' + caption + '\n  </div>\n</div>';
            };
            if (this.options.images) {
                links = $.map(this.options.images, function (_this) {
                    return function (img) {
                        return itemTemplate(img, _this.options.lazy);
                    };
                }(this));
            } else {
                $items = this.filterOutSlickClones(this.$element.find(this.options.itemSelector));
                length = $items.length;
                createItem = function (_this) {
                    return function (el, index) {
                        var caption, info, src;
                        info = {
                            index: index,
                            length: length
                        };
                        caption = _this.getElementCaption(el, info);
                        src = _this.getElementSrc(el);
                        return itemTemplate(src, caption, _this.options.lazy);
                    };
                }(this);
                links = $.map($items, createItem);
            }
            return links;
        };
        SlickLightbox.prototype.createModal = function () {
            /* Creates a `slick`-friendly modal. */
            var html, links;
            links = this.createModalItems();
            html = '<div class="slick-lightbox slick-lightbox-hide-init' + (this.isIE ? ' slick-lightbox-ie' : '') + '" style="background: ' + this.options.background + ';">\n  <div class="slick-lightbox-inner">\n    <div class="slick-lightbox-slick slick-caption-' + this.options.captionPosition + '">' + links.join('') + '</div>\n  <div>\n<div>';
            this.$modalElement = $(html);
            this.$parts = {};
            this.$parts['closeButton'] = $(this.options.layouts.closeButton);
            this.$modalElement.find('.slick-lightbox-inner').append(this.$parts['closeButton']);
            return $('body').append(this.$modalElement);
        };
        SlickLightbox.prototype.initSlick = function (index) {
            /* Runs slick by default, using `options.slick` if provided. If `options.slick` is a function, it gets fired instead of us initializing slick. Merges in initialSlide option. */
            var additional;
            additional = { initialSlide: index };
            if (this.options.lazy) {
                additional.lazyLoad = 'ondemand';
            }
            if (this.options.slick != null) {
                if (typeof this.options.slick === 'function') {
                    this.slick = this.options.slick(this.$modalElement);
                } else {
                    this.slick = this.$modalElement.find('.slick-lightbox-slick').slick($.extend({}, this.options.slick, additional));
                }
            } else {
                this.slick = this.$modalElement.find('.slick-lightbox-slick').slick(additional);
            }
            return this.$modalElement.trigger('init.slickLightbox');
        };
        SlickLightbox.prototype.open = function () {
            /* Opens the lightbox. */
            if (this.options.useHistoryApi) {
                this.writeHistory();
            }
            this.$element.trigger('show.slickLightbox');
            setTimeout(function (_this) {
                return function () {
                    return _this.$element.trigger('shown.slickLightbox');
                };
            }(this), this.getTransitionDuration());
            return this.$modalElement.removeClass('slick-lightbox-hide-init');
        };
        SlickLightbox.prototype.close = function () {
            /* Closes the lightbox and destroys it, maintaining the original element bindings. */
            this.$element.trigger('hide.slickLightbox');
            setTimeout(function (_this) {
                return function () {
                    return _this.$element.trigger('hidden.slickLightbox');
                };
            }(this), this.getTransitionDuration());
            this.$modalElement.addClass('slick-lightbox-hide');
            return this.destroy();
        };
        SlickLightbox.prototype.bindEvents = function () {
            /* Binds global events. */
            var resizeSlides;
            resizeSlides = function (_this) {
                return function () {
                    var h;
                    h = _this.$modalElement.find('.slick-lightbox-inner').height();
                    _this.$modalElement.find('.slick-lightbox-slick-item').height(h);
                    return _this.$modalElement.find('.slick-lightbox-slick-img, .slick-lightbox-slick-item-inner').css('max-height', Math.round(_this.options.imageMaxHeight * h));
                };
            }(this);
            $(window).on('orientationchange.slickLightbox resize.slickLightbox', resizeSlides);
            if (this.options.useHistoryApi) {
                $(window).on('popstate.slickLightbox', function (_this) {
                    return function () {
                        return _this.close();
                    };
                }(this));
            }
            this.$modalElement.on('init.slickLightbox', resizeSlides);
            this.$modalElement.on('destroy.slickLightbox', function (_this) {
                return function () {
                    return _this.destroy();
                };
            }(this));
            this.$element.on('destroy.slickLightbox', function (_this) {
                return function () {
                    return _this.destroy(true);
                };
            }(this));
            this.$parts['closeButton'].on('click.slickLightbox touchstart.slickLightbox', function (_this) {
                return function (e) {
                    e.preventDefault();
                    return _this.close();
                };
            }(this));
            if (this.options.closeOnEscape || this.options.navigateByKeyboard) {
                $(document).on('keydown.slickLightbox', function (_this) {
                    return function (e) {
                        var code;
                        code = e.keyCode ? e.keyCode : e.which;
                        if (_this.options.navigateByKeyboard) {
                            if (code === 37) {
                                _this.slideSlick('left');
                            } else if (code === 39) {
                                _this.slideSlick('right');
                            }
                        }
                        if (_this.options.closeOnEscape) {
                            if (code === 27) {
                                return _this.close();
                            }
                        }
                    };
                }(this));
            }
            if (this.options.closeOnBackdropClick) {
                this.$modalElement.on('click.slickLightbox touchstart.slickLightbox', '.slick-lightbox-slick-img', function (e) {
                    return e.stopPropagation();
                });
                return this.$modalElement.on('click.slickLightbox', '.slick-lightbox-slick-item', function (_this) {
                    return function (e) {
                        e.preventDefault();
                        return _this.close();
                    };
                }(this));
            }
        };
        SlickLightbox.prototype.slideSlick = function (direction) {
            /* Moves the slick prev or next. */
            if (direction === 'left') {
                return this.slick.slick('slickPrev');
            } else {
                return this.slick.slick('slickNext');
            }
        };
        SlickLightbox.prototype.detectIE = function () {
            /* Detects usage of IE8 and lower. */
            var ieversion;
            this.isIE = false;
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                ieversion = new Number(RegExp.$1);
                if (ieversion < 9) {
                    return this.isIE = true;
                }
            }
        };
        SlickLightbox.prototype.getElementCaption = function (el, info) {
            /* Returns caption for each slide based on the type of `options.caption`. */
            var c;
            if (!this.options.caption) {
                return '';
            }
            c = function () {
                switch (typeof this.options.caption) {
                case 'function':
                    return this.options.caption(el, info);
                case 'string':
                    return $(el).data(this.options.caption);
                }
            }.call(this);
            return '<span class="slick-lightbox-slick-caption">' + c + '</span>';
        };
        SlickLightbox.prototype.getElementSrc = function (el) {
            /* Returns src for each slide image based on the type of `options.src`. */
            switch (typeof this.options.src) {
            case 'function':
                return this.options.src(el);
            case 'string':
                return $(el).attr(this.options.src);
            default:
                return el.href;
            }
        };
        SlickLightbox.prototype.unbindEvents = function () {
            /* Unbinds global events. */
            $(window).off('.slickLightbox');
            $(document).off('.slickLightbox');
            return this.$modalElement.off('.slickLightbox');
        };
        SlickLightbox.prototype.destroy = function (unbindAnchors) {
            if (unbindAnchors == null) {
                unbindAnchors = false;
            }
            /* Destroys the lightbox and unbinds global events. If `true` is passed as an argument, unbinds the original element as well. */
            if (this.didInit) {
                this.unbindEvents();
                setTimeout(function (_this) {
                    return function () {
                        return _this.$modalElement.remove();
                    };
                }(this), this.options.destroyTimeout);
            }
            if (unbindAnchors) {
                this.$element.off('.slickLightbox');
                return this.$element.off('.slickLightbox', this.options.itemSelector);
            }
        };
        SlickLightbox.prototype.destroyPrevious = function () {
            /* Destroys lightboxes currently in DOM. */
            return $('body').children('.slick-lightbox').trigger('destroy.slickLightbox');
        };
        SlickLightbox.prototype.getTransitionDuration = function () {
            /* Detects the transition duration to know when to remove stuff from DOM etc. */
            var duration;
            if (this.transitionDuration) {
                return this.transitionDuration;
            }
            duration = this.$modalElement.css('transition-duration');
            if (typeof duration === 'undefined') {
                return this.transitionDuration = 500;
            } else {
                return this.transitionDuration = duration.indexOf('ms') > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;
            }
        };
        SlickLightbox.prototype.writeHistory = function () {
            /* Writes an empty state to the history API if supported. */
            return typeof history !== 'undefined' && history !== null ? typeof history.pushState === 'function' ? history.pushState(null, null, '') : void 0 : void 0;
        };
        SlickLightbox.prototype.filterOutSlickClones = function ($items) {
            /* Removes all slick clones from the set of elements. Only does so, if the target element is a slick slider. */
            if (!this.elementIsSlick()) {
                return $items;
            }
            return $items = $items.filter(function () {
                var $item;
                $item = $(this);
                return !$item.hasClass('slick-cloned') && $item.parents('.slick-cloned').length === 0;
            });
        };
        SlickLightbox.prototype.handlePossibleCloneClick = function ($clickedItem, $items) {
            var href;
            if (!this.elementIsSlick()) {
                return $clickedItem;
            }
            if (!$clickedItem.closest('.slick-slide').hasClass('slick-cloned')) {
                return $clickedItem;
            }
            href = $clickedItem.attr('href');
            return $items.filter(function () {
                return $(this).attr('href') === href;
            }).first();
        };
        SlickLightbox.prototype.elementIsSlick = function () {
            return this.$element.hasClass('slick-slider');
        };
        return SlickLightbox;
    }();
    defaults = {
        background: 'rgba(0,0,0,.8)',
        closeOnEscape: true,
        closeOnBackdropClick: true,
        destroyTimeout: 500,
        itemSelector: 'a',
        navigateByKeyboard: true,
        src: false,
        caption: false,
        captionPosition: 'dynamic',
        images: false,
        slick: {},
        useHistoryApi: false,
        layouts: { closeButton: '<button type="button" class="slick-lightbox-close"></button>' },
        shouldOpen: null,
        imageMaxHeight: 0.9,
        lazy: false
    };
    $.fn.slickLightbox = function (options) {
        /* Fires the plugin. */
        options = $.extend({}, defaults, options);
        $(this).each(function () {
            return this.slickLightbox = new SlickLightbox(this, options);
        });
        return this;
    };
    $.fn.unslickLightbox = function () {
        /* Removes everything. */
        return $(this).trigger('destroy.slickLightbox').each(function () {
            return this.slickLightbox = null;
        });
    };
}(jQuery));
/**
 * @license
 * Video.js 7.0.3 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.videojs=e()}(this,function(){var d="7.0.3",t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var i,g="undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{},r={},n=Object.freeze({default:r}),s=n&&r||n,a="undefined"!=typeof t?t:"undefined"!=typeof window?window:{};"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=s);var p=i,o=void 0,u="info",l=[],c=function(t,e){var i=o.levels[u],r=new RegExp("^("+i+")$");if("log"!==t&&e.unshift(t.toUpperCase()+":"),l&&l.push([].concat(e)),e.unshift("VIDEOJS:"),g.console){var n=g.console[t];n||"debug"!==t||(n=g.console.info||g.console.log),n&&i&&r.test(t)&&n[Array.isArray(e)?"apply":"call"](g.console,e)}};(o=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];c("log",e)}).levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:u},o.level=function(t){if("string"==typeof t){if(!o.levels.hasOwnProperty(t))throw new Error('"'+t+'" in not a valid log level');u=t}return u},o.history=function(){return l?[].concat(l):[]},o.history.clear=function(){l&&(l.length=0)},o.history.disable=function(){null!==l&&(l.length=0,l=null)},o.history.enable=function(){null===l&&(l=[])},o.error=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("error",e)},o.warn=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("warn",e)},o.debug=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("debug",e)};var f=o;var m=function(t){for(var e="",i=0;i<arguments.length;i++)e+=t[i].replace(/\n\r?\s*/g,"")+(arguments[i+1]||"");return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t,e){return t.raw=e,t},T=Object.prototype.toString,S=function(t){return E(t)?Object.keys(t):[]};function k(e,i){S(e).forEach(function(t){return i(e[t],t)})}function C(i){for(var t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return Object.assign?Object.assign.apply(Object,[i].concat(e)):(e.forEach(function(t){t&&k(t,function(t,e){i[e]=t})}),i)}function E(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))}function w(t){return E(t)&&"[object Object]"===T.call(t)&&t.constructor===Object}function A(t,e){if(!t||!e)return"";if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(t);return i?i[e]:""}return""}var L=h(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);function P(t){return"string"==typeof t&&/\S/.test(t)}function O(t){if(/\s/.test(t))throw new Error("class has illegal whitespace characters")}function x(){return p===g.document}function I(t){return E(t)&&1===t.nodeType}function D(){try{return g.parent!==g.self}catch(t){return!0}}function R(r){return function(t,e){if(!P(t))return p[r](null);P(e)&&(e=p.querySelector(e));var i=I(e)?e:p;return i[r]&&i[r](t)}}function M(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],n=p.createElement(t);return Object.getOwnPropertyNames(i).forEach(function(t){var e=i[t];-1!==t.indexOf("aria-")||"role"===t||"type"===t?(f.warn(m(L,t,e)),n.setAttribute(t,e)):"textContent"===t?U(n,e):n[t]=e}),Object.getOwnPropertyNames(e).forEach(function(t){n.setAttribute(t,e[t])}),r&&et(n,r),n}function U(t,e){return"undefined"==typeof t.textContent?t.innerText=e:t.textContent=e,t}function N(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}function B(t,e){return O(e),t.classList?t.classList.contains(e):(i=e,new RegExp("(^|\\s)"+i+"($|\\s)")).test(t.className);var i}function j(t,e){return t.classList?t.classList.add(e):B(t,e)||(t.className=(t.className+" "+e).trim()),t}function F(t,e){return t.classList?t.classList.remove(e):(O(e),t.className=t.className.split(/\s+/).filter(function(t){return t!==e}).join(" ")),t}function H(t,e,i){var r=B(t,e);if("function"==typeof i&&(i=i(t,e)),"boolean"!=typeof i&&(i=!r),i!==r)return i?j(t,e):F(t,e),t}function V(i,r){Object.getOwnPropertyNames(r).forEach(function(t){var e=r[t];null===e||"undefined"==typeof e||!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})}function q(t){var e={},i=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";if(t&&t.attributes&&0<t.attributes.length)for(var r=t.attributes,n=r.length-1;0<=n;n--){var s=r[n].name,a=r[n].value;"boolean"!=typeof t[s]&&-1===i.indexOf(","+s+",")||(a=null!==a),e[s]=a}return e}function W(t,e){return t.getAttribute(e)}function z(t,e,i){t.setAttribute(e,i)}function G(t,e){t.removeAttribute(e)}function X(){p.body.focus(),p.onselectstart=function(){return!1}}function Y(){p.onselectstart=function(){return!0}}function $(t){if(t&&t.getBoundingClientRect&&t.parentNode){var e=t.getBoundingClientRect(),i={};return["bottom","height","left","right","top","width"].forEach(function(t){void 0!==e[t]&&(i[t]=e[t])}),i.height||(i.height=parseFloat(A(t,"height"))),i.width||(i.width=parseFloat(A(t,"width"))),i}}function K(t){var e=void 0;if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0};var i=p.documentElement,r=p.body,n=i.clientLeft||r.clientLeft||0,s=g.pageXOffset||r.scrollLeft,a=e.left+s-n,o=i.clientTop||r.clientTop||0,u=g.pageYOffset||r.scrollTop,l=e.top+u-o;return{left:Math.round(a),top:Math.round(l)}}function Q(t,e){var i={},r=K(t),n=t.offsetWidth,s=t.offsetHeight,a=r.top,o=r.left,u=e.pageY,l=e.pageX;return e.changedTouches&&(l=e.changedTouches[0].pageX,u=e.changedTouches[0].pageY),i.y=Math.max(0,Math.min(1,(a-u+s)/s)),i.x=Math.max(0,Math.min(1,(l-o)/n)),i}function J(t){return E(t)&&3===t.nodeType}function Z(t){for(;t.firstChild;)t.removeChild(t.firstChild);return t}function tt(t){return"function"==typeof t&&(t=t()),(Array.isArray(t)?t:[t]).map(function(t){return"function"==typeof t&&(t=t()),I(t)||J(t)?t:"string"==typeof t&&/\S/.test(t)?p.createTextNode(t):void 0}).filter(function(t){return t})}function et(e,t){return tt(t).forEach(function(t){return e.appendChild(t)}),e}function it(t,e){return et(Z(t),e)}function rt(t){return void 0===t.button&&void 0===t.buttons||(0===t.button&&void 0===t.buttons||0===t.button&&1===t.buttons)}var nt=R("querySelector"),st=R("querySelectorAll"),at=Object.freeze({isReal:x,isEl:I,isInFrame:D,createEl:M,textContent:U,prependTo:N,hasClass:B,addClass:j,removeClass:F,toggleClass:H,setAttributes:V,getAttributes:q,getAttribute:W,setAttribute:z,removeAttribute:G,blockTextSelection:X,unblockTextSelection:Y,getBoundingClientRect:$,findPosition:K,getPointerPosition:Q,isTextNode:J,emptyEl:Z,normalizeContent:tt,appendContent:et,insertContent:it,isSingleLeftClick:rt,$:nt,$$:st}),ot=1;function ut(){return ot++}var lt={},ct="vdata"+(new Date).getTime();function ht(t){var e=t[ct];return e||(e=t[ct]=ut()),lt[e]||(lt[e]={}),lt[e]}function dt(t){var e=t[ct];return!!e&&!!Object.getOwnPropertyNames(lt[e]).length}function pt(e){var t=e[ct];if(t){delete lt[t];try{delete e[ct]}catch(t){e.removeAttribute?e.removeAttribute(ct):e[ct]=null}}}function ft(t,e){var i=ht(t);0===i.handlers[e].length&&(delete i.handlers[e],t.removeEventListener?t.removeEventListener(e,i.dispatcher,!1):t.detachEvent&&t.detachEvent("on"+e,i.dispatcher)),Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers,delete i.dispatcher,delete i.disabled),0===Object.getOwnPropertyNames(i).length&&pt(t)}function mt(e,i,t,r){t.forEach(function(t){e(i,t,r)})}function gt(t){function e(){return!0}function i(){return!1}if(!t||!t.isPropagationStopped){var r=t||g.event;for(var n in t={},r)"layerX"!==n&&"layerY"!==n&&"keyLocation"!==n&&"webkitMovementX"!==n&&"webkitMovementY"!==n&&("returnValue"===n&&r.preventDefault||(t[n]=r[n]));if(t.target||(t.target=t.srcElement||p),t.relatedTarget||(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t.preventDefault=function(){r.preventDefault&&r.preventDefault(),t.returnValue=!1,r.returnValue=!1,t.defaultPrevented=!0},t.defaultPrevented=!1,t.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),t.cancelBubble=!0,r.cancelBubble=!0,t.isPropagationStopped=e},t.isPropagationStopped=i,t.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,t.stopPropagation()},t.isImmediatePropagationStopped=i,null!==t.clientX&&void 0!==t.clientX){var s=p.documentElement,a=p.body;t.pageX=t.clientX+(s&&s.scrollLeft||a&&a.scrollLeft||0)-(s&&s.clientLeft||a&&a.clientLeft||0),t.pageY=t.clientY+(s&&s.scrollTop||a&&a.scrollTop||0)-(s&&s.clientTop||a&&a.clientTop||0)}t.which=t.charCode||t.keyCode,null!==t.button&&void 0!==t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0)}return t}var yt=!1;!function(){try{var t=Object.defineProperty({},"passive",{get:function(){yt=!0}});g.addEventListener("test",null,t),g.removeEventListener("test",null,t)}catch(t){}}();var vt=["touchstart","touchmove"];function _t(a,t,e){if(Array.isArray(t))return mt(_t,a,t,e);var o=ht(a);if(o.handlers||(o.handlers={}),o.handlers[t]||(o.handlers[t]=[]),e.guid||(e.guid=ut()),o.handlers[t].push(e),o.dispatcher||(o.disabled=!1,o.dispatcher=function(t,e){if(!o.disabled){t=gt(t);var i=o.handlers[t.type];if(i)for(var r=i.slice(0),n=0,s=r.length;n<s&&!t.isImmediatePropagationStopped();n++)try{r[n].call(a,t,e)}catch(t){f.error(t)}}}),1===o.handlers[t].length)if(a.addEventListener){var i=!1;yt&&-1<vt.indexOf(t)&&(i={passive:!0}),a.addEventListener(t,o.dispatcher,i)}else a.attachEvent&&a.attachEvent("on"+t,o.dispatcher)}function bt(t,e,i){if(dt(t)){var r=ht(t);if(r.handlers){if(Array.isArray(e))return mt(bt,t,e,i);var n=function(t,e){r.handlers[e]=[],ft(t,e)};if(void 0!==e){var s=r.handlers[e];if(s)if(i){if(i.guid)for(var a=0;a<s.length;a++)s[a].guid===i.guid&&s.splice(a--,1);ft(t,e)}else n(t,e)}else for(var o in r.handlers)Object.prototype.hasOwnProperty.call(r.handlers||{},o)&&n(t,o)}}}function Tt(t,e,i){var r=dt(t)?ht(t):{},n=t.parentNode||t.ownerDocument;if("string"==typeof e?e={type:e,target:t}:e.target||(e.target=t),e=gt(e),r.dispatcher&&r.dispatcher.call(t,e,i),n&&!e.isPropagationStopped()&&!0===e.bubbles)Tt.call(null,n,e,i);else if(!n&&!e.defaultPrevented){var s=ht(e.target);e.target[e.type]&&(s.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),s.disabled=!1)}return!e.defaultPrevented}function St(e,i,r){if(Array.isArray(i))return mt(St,e,i,r);var t=function t(){bt(e,i,t),r.apply(this,arguments)};t.guid=r.guid=r.guid||ut(),_t(e,i,t)}var kt=Object.freeze({fixEvent:gt,on:_t,off:bt,trigger:Tt,one:St}),Ct=!1,Et=void 0,wt=function(){if(x()&&!1!==Et.options.autoSetup){var t=Array.prototype.slice.call(p.getElementsByTagName("video")),e=Array.prototype.slice.call(p.getElementsByTagName("audio")),i=Array.prototype.slice.call(p.getElementsByTagName("video-js")),r=t.concat(e,i);if(r&&0<r.length)for(var n=0,s=r.length;n<s;n++){var a=r[n];if(!a||!a.getAttribute){At(1);break}void 0===a.player&&null!==a.getAttribute("data-setup")&&Et(a)}else Ct||At(1)}};function At(t,e){e&&(Et=e),g.setTimeout(wt,t)}x()&&"complete"===p.readyState?Ct=!0:St(g,"load",function(){Ct=!0});var Lt=function(t){var e=p.createElement("style");return e.className=t,e},Pt=function(t,e){t.styleSheet?t.styleSheet.cssText=e:t.textContent=e},Ot=function(t,e,i){e.guid||(e.guid=ut());var r=function(){return e.apply(t,arguments)};return r.guid=i?i+"_"+e.guid:e.guid,r},xt=function(e,i){var r=Date.now();return function(){var t=Date.now();i<=t-r&&(e.apply(void 0,arguments),r=t)}},It=function(r,n,s){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:g,o=void 0;return function(){var t=this,e=arguments,i=function(){i=o=null,s||r.apply(t,e)};!o&&s&&r.apply(t,e),a.clearTimeout(o),o=a.setTimeout(i,n)}},Dt=function(){};Dt.prototype.allowedEvents_={},Dt.prototype.addEventListener=Dt.prototype.on=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},_t(this,t,e),this.addEventListener=i},Dt.prototype.removeEventListener=Dt.prototype.off=function(t,e){bt(this,t,e)},Dt.prototype.one=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},St(this,t,e),this.addEventListener=i},Dt.prototype.dispatchEvent=Dt.prototype.trigger=function(t){var e=t.type||t;"string"==typeof t&&(t={type:e}),t=gt(t),this.allowedEvents_[e]&&this["on"+e]&&this["on"+e](t),Tt(this,t)};var Rt=function(e){return e instanceof Dt||!!e.eventBusEl_&&["on","one","off","trigger"].every(function(t){return"function"==typeof e[t]})},Mt=function(t){return"string"==typeof t&&/\S/.test(t)||Array.isArray(t)&&!!t.length},Ut=function(t){if(!t.nodeName&&!Rt(t))throw new Error("Invalid target; must be a DOM node or evented object.")},Nt=function(t){if(!Mt(t))throw new Error("Invalid event type; must be a non-empty string or array.")},Bt=function(t){if("function"!=typeof t)throw new Error("Invalid listener; must be a function.")},jt=function(t,e){var i=e.length<3||e[0]===t||e[0]===t.eventBusEl_,r=void 0,n=void 0,s=void 0;return i?(r=t.eventBusEl_,3<=e.length&&e.shift(),n=e[0],s=e[1]):(r=e[0],n=e[1],s=e[2]),Ut(r),Nt(n),Bt(s),{isTargetingSelf:i,target:r,type:n,listener:s=Ot(t,s)}},Ft=function(t,e,i,r){Ut(t),t.nodeName?kt[e](t,i,r):t[e](i,r)},Ht={on:function(){for(var t=this,e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var n=jt(this,i),s=n.isTargetingSelf,a=n.target,o=n.type,u=n.listener;if(Ft(a,"on",o,u),!s){var l=function(){return t.off(a,o,u)};l.guid=u.guid;var c=function(){return t.off("dispose",l)};c.guid=u.guid,Ft(this,"on","dispose",l),Ft(a,"on","dispose",c)}},one:function(){for(var n=this,t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=jt(this,e),s=r.isTargetingSelf,a=r.target,o=r.type,u=r.listener;if(s)Ft(a,"one",o,u);else{var l=function t(){for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];n.off(a,o,t),u.apply(null,i)};l.guid=u.guid,Ft(a,"one",o,l)}},off:function(t,e,i){if(!t||Mt(t))bt(this.eventBusEl_,t,e);else{var r=t,n=e;Ut(r),Nt(n),Bt(i),i=Ot(this,i),this.off("dispose",i),r.nodeName?(bt(r,n,i),bt(r,"dispose",i)):Rt(r)&&(r.off(n,i),r.off("dispose",i))}},trigger:function(t,e){return Tt(this.eventBusEl_,t,e)}};function Vt(t){var e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).eventBusKey;if(e){if(!t[e].nodeName)throw new Error('The eventBusKey "'+e+'" does not refer to an element.');t.eventBusEl_=t[e]}else t.eventBusEl_=M("span",{className:"vjs-event-bus"});return C(t,Ht),t.on("dispose",function(){t.off(),g.setTimeout(function(){t.eventBusEl_=null},0)}),t}var qt={state:{},setState:function(t){var i=this;"function"==typeof t&&(t=t());var r=void 0;return k(t,function(t,e){i.state[e]!==t&&((r=r||{})[e]={from:i.state[e],to:t}),i.state[e]=t}),r&&Rt(this)&&this.trigger({changes:r,type:"statechanged"}),r}};function Wt(t,e){return C(t,qt),t.state=C({},t.state,e),"function"==typeof t.handleStateChanged&&Rt(t)&&t.on("statechanged",t.handleStateChanged),t}function zt(t){return"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function Gt(){for(var i={},t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.forEach(function(t){t&&k(t,function(t,e){w(t)?(w(i[e])||(i[e]={}),i[e]=Gt(i[e],t)):i[e]=t})}),i}var Xt=function(){function l(t,e,i){if(y(this,l),!t&&this.play?this.player_=t=this:this.player_=t,this.options_=Gt({},this.options_),e=this.options_=Gt(this.options_,e),this.id_=e.id||e.el&&e.el.id,!this.id_){var r=t&&t.id&&t.id()||"no_player";this.id_=r+"_component_"+ut()}this.name_=e.name||null,e.el?this.el_=e.el:!1!==e.createEl&&(this.el_=this.createEl()),!1!==e.evented&&Vt(this,{eventBusKey:this.el_?"el_":null}),Wt(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},!(this.childNameIndex_={})!==e.initChildren&&this.initChildren(),this.ready(i),!1!==e.reportTouchActivity&&this.enableTouchActivity()}return l.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var t=this.children_.length-1;0<=t;t--)this.children_[t].dispose&&this.children_[t].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),pt(this.el_),this.el_=null),this.player_=null},l.prototype.player=function(){return this.player_},l.prototype.options=function(t){return f.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),t&&(this.options_=Gt(this.options_,t)),this.options_},l.prototype.el=function(){return this.el_},l.prototype.createEl=function(t,e,i){return M(t,e,i)},l.prototype.localize=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:t,i=this.player_.language&&this.player_.language(),r=this.player_.languages&&this.player_.languages(),s=r&&r[i],a=i&&i.split("-")[0],o=r&&r[a],u=e;return s&&s[t]?u=s[t]:o&&o[t]&&(u=o[t]),n&&(u=u.replace(/\{(\d+)\}/g,function(t,e){var i=n[e-1],r=i;return"undefined"==typeof i&&(r=t),r})),u},l.prototype.contentEl=function(){return this.contentEl_||this.el_},l.prototype.id=function(){return this.id_},l.prototype.name=function(){return this.name_},l.prototype.children=function(){return this.children_},l.prototype.getChildById=function(t){return this.childIndex_[t]},l.prototype.getChild=function(t){if(t)return t=zt(t),this.childNameIndex_[t]},l.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.children_.length,r=void 0,n=void 0;if("string"==typeof t){n=zt(t);var s=e.componentClass||n;e.name=n;var a=l.getComponent(s);if(!a)throw new Error("Component "+s+" does not exist");if("function"!=typeof a)return null;r=new a(this.player_||this,e)}else r=t;if(this.children_.splice(i,0,r),"function"==typeof r.id&&(this.childIndex_[r.id()]=r),(n=n||r.name&&zt(r.name()))&&(this.childNameIndex_[n]=r),"function"==typeof r.el&&r.el()){var o=this.contentEl().children[i]||null;this.contentEl().insertBefore(r.el(),o)}return r},l.prototype.removeChild=function(t){if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){for(var e=!1,i=this.children_.length-1;0<=i;i--)if(this.children_[i]===t){e=!0,this.children_.splice(i,1);break}if(e){this.childIndex_[t.id()]=null,this.childNameIndex_[t.name()]=null;var r=t.el();r&&r.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el())}}},l.prototype.initChildren=function(){var n=this,r=this.options_.children;if(r){var s=this.options_,t=void 0,i=l.getComponent("Tech");(t=Array.isArray(r)?r:Object.keys(r)).concat(Object.keys(this.options_).filter(function(e){return!t.some(function(t){return"string"==typeof t?e===t:e===t.name})})).map(function(t){var e=void 0,i=void 0;return"string"==typeof t?i=r[e=t]||n.options_[e]||{}:(e=t.name,i=t),{name:e,opts:i}}).filter(function(t){var e=l.getComponent(t.opts.componentClass||zt(t.name));return e&&!i.isTech(e)}).forEach(function(t){var e=t.name,i=t.opts;if(void 0!==s[e]&&(i=s[e]),!1!==i){!0===i&&(i={}),i.playerOptions=n.options_.playerOptions;var r=n.addChild(e,i);r&&(n[e]=r)}})}},l.prototype.buildCSSClass=function(){return""},l.prototype.ready=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(t)return this.isReady_?void(e?t.call(this):this.setTimeout(t,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(t))},l.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var t=this.readyQueue_;this.readyQueue_=[],t&&0<t.length&&t.forEach(function(t){t.call(this)},this),this.trigger("ready")},1)},l.prototype.$=function(t,e){return nt(t,e||this.contentEl())},l.prototype.$$=function(t,e){return st(t,e||this.contentEl())},l.prototype.hasClass=function(t){return B(this.el_,t)},l.prototype.addClass=function(t){j(this.el_,t)},l.prototype.removeClass=function(t){F(this.el_,t)},l.prototype.toggleClass=function(t,e){H(this.el_,t,e)},l.prototype.show=function(){this.removeClass("vjs-hidden")},l.prototype.hide=function(){this.addClass("vjs-hidden")},l.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},l.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},l.prototype.getAttribute=function(t){return W(this.el_,t)},l.prototype.setAttribute=function(t,e){z(this.el_,t,e)},l.prototype.removeAttribute=function(t){G(this.el_,t)},l.prototype.width=function(t,e){return this.dimension("width",t,e)},l.prototype.height=function(t,e){return this.dimension("height",t,e)},l.prototype.dimensions=function(t,e){this.width(t,!0),this.height(e)},l.prototype.dimension=function(t,e,i){if(void 0!==e)return null!==e&&e==e||(e=0),-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?this.el_.style[t]=e:this.el_.style[t]="auto"===e?"":e+"px",void(i||this.trigger("componentresize"));if(!this.el_)return 0;var r=this.el_.style[t],n=r.indexOf("px");return-1!==n?parseInt(r.slice(0,n),10):parseInt(this.el_["offset"+zt(t)],10)},l.prototype.currentDimension=function(t){var e=0;if("width"!==t&&"height"!==t)throw new Error("currentDimension only accepts width or height value");if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(this.el_);e=i.getPropertyValue(t)||i[t]}if(0===(e=parseFloat(e))){var r="offset"+zt(t);e=this.el_[r]}return e},l.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},l.prototype.currentWidth=function(){return this.currentDimension("width")},l.prototype.currentHeight=function(){return this.currentDimension("height")},l.prototype.focus=function(){this.el_.focus()},l.prototype.blur=function(){this.el_.blur()},l.prototype.emitTapEvents=function(){var e=0,r=null,n=void 0;this.on("touchstart",function(t){1===t.touches.length&&(r={pageX:t.touches[0].pageX,pageY:t.touches[0].pageY},e=(new Date).getTime(),n=!0)}),this.on("touchmove",function(t){if(1<t.touches.length)n=!1;else if(r){var e=t.touches[0].pageX-r.pageX,i=t.touches[0].pageY-r.pageY;10<Math.sqrt(e*e+i*i)&&(n=!1)}});var t=function(){n=!1};this.on("touchleave",t),this.on("touchcancel",t),this.on("touchend",function(t){!(r=null)===n&&((new Date).getTime()-e<200&&(t.preventDefault(),this.trigger("tap")))})},l.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var e=Ot(this.player(),this.player().reportUserActivity),i=void 0;this.on("touchstart",function(){e(),this.clearInterval(i),i=this.setInterval(e,250)});var t=function(t){e(),this.clearInterval(i)};this.on("touchmove",e),this.on("touchend",t),this.on("touchcancel",t)}},l.prototype.setTimeout=function(t,e){var i=this;t=Ot(this,t);var r=g.setTimeout(t,e),n=function(){return i.clearTimeout(r)};return n.guid="vjs-timeout-"+r,this.on("dispose",n),r},l.prototype.clearTimeout=function(t){g.clearTimeout(t);var e=function(){};return e.guid="vjs-timeout-"+t,this.off("dispose",e),t},l.prototype.setInterval=function(t,e){var i=this;t=Ot(this,t);var r=g.setInterval(t,e),n=function(){return i.clearInterval(r)};return n.guid="vjs-interval-"+r,this.on("dispose",n),r},l.prototype.clearInterval=function(t){g.clearInterval(t);var e=function(){};return e.guid="vjs-interval-"+t,this.off("dispose",e),t},l.prototype.requestAnimationFrame=function(t){var e=this;if(this.supportsRaf_){t=Ot(this,t);var i=g.requestAnimationFrame(t),r=function(){return e.cancelAnimationFrame(i)};return r.guid="vjs-raf-"+i,this.on("dispose",r),i}return this.setTimeout(t,1e3/60)},l.prototype.cancelAnimationFrame=function(t){if(this.supportsRaf_){g.cancelAnimationFrame(t);var e=function(){};return e.guid="vjs-raf-"+t,this.off("dispose",e),t}return this.clearTimeout(t)},l.registerComponent=function(t,e){if("string"!=typeof t||!t)throw new Error('Illegal component name, "'+t+'"; must be a non-empty string.');var i=l.getComponent("Tech"),r=i&&i.isTech(e),n=l===e||l.prototype.isPrototypeOf(e.prototype);if(r||!n){var s=void 0;throw s=r?"techs must be registered using Tech.registerTech()":"must be a Component subclass",new Error('Illegal component, "'+t+'"; '+s+".")}t=zt(t),l.components_||(l.components_={});var a=l.getComponent("Player");if("Player"===t&&a&&a.players){var o=a.players,u=Object.keys(o);if(o&&0<u.length&&u.map(function(t){return o[t]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return l.components_[t]=e},l.getComponent=function(t){if(t)return t=zt(t),l.components_&&l.components_[t]?l.components_[t]:void 0},l}();Xt.prototype.supportsRaf_="function"==typeof g.requestAnimationFrame&&"function"==typeof g.cancelAnimationFrame,Xt.registerComponent("Component",Xt);var Yt,$t,Kt,Qt,Jt=g.navigator&&g.navigator.userAgent||"",Zt=/AppleWebKit\/([\d.]+)/i.exec(Jt),te=Zt?parseFloat(Zt.pop()):null,ee=/iPad/i.test(Jt),ie=/iPhone/i.test(Jt)&&!ee,re=/iPod/i.test(Jt),ne=ie||ee||re,se=(Yt=Jt.match(/OS (\d+)_/i))&&Yt[1]?Yt[1]:null,ae=/Android/i.test(Jt),oe=function(){var t=Jt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!t)return null;var e=t[1]&&parseFloat(t[1]),i=t[2]&&parseFloat(t[2]);return e&&i?parseFloat(t[1]+"."+t[2]):e||null}(),ue=ae&&oe<5&&te<537,le=/Firefox/i.test(Jt),ce=/Edge/i.test(Jt),he=!ce&&/Chrome/i.test(Jt),de=($t=Jt.match(/Chrome\/(\d+)/))&&$t[1]?parseFloat($t[1]):null,pe=(Kt=/MSIE\s(\d+)\.\d/.exec(Jt),!(Qt=Kt&&parseFloat(Kt[1]))&&/Trident\/7.0/i.test(Jt)&&/rv:11.0/.test(Jt)&&(Qt=11),Qt),fe=/Safari/i.test(Jt)&&!he&&!ae&&!ce,me=fe||ne,ge=x()&&("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch),ye=Object.freeze({IS_IPAD:ee,IS_IPHONE:ie,IS_IPOD:re,IS_IOS:ne,IOS_VERSION:se,IS_ANDROID:ae,ANDROID_VERSION:oe,IS_NATIVE_ANDROID:ue,IS_FIREFOX:le,IS_EDGE:ce,IS_CHROME:he,CHROME_VERSION:de,IE_VERSION:pe,IS_SAFARI:fe,IS_ANY_SAFARI:me,TOUCH_ENABLED:ge});function ve(t,e,i,r){return function(t,e,i){if("number"!=typeof e||e<0||i<e)throw new Error("Failed to execute '"+t+"' on 'TimeRanges': The index provided ("+e+") is non-numeric or out of bounds (0-"+i+").")}(t,r,i.length-1),i[r][e]}function _e(t){return void 0===t||0===t.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:t.length,start:ve.bind(null,"start",0,t),end:ve.bind(null,"end",1,t)}}function be(t,e){return Array.isArray(t)?_e(t):void 0===t||void 0===e?_e():_e([[t,e]])}function Te(t,e){var i=0,r=void 0,n=void 0;if(!e)return 0;t&&t.length||(t=be(0,0));for(var s=0;s<t.length;s++)r=t.start(s),e<(n=t.end(s))&&(n=e),i+=n-r;return i/e}for(var Se={},ke=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ce=ke[0],Ee=void 0,we=0;we<ke.length;we++)if(ke[we][1]in p){Ee=ke[we];break}if(Ee)for(var Ae=0;Ae<Ee.length;Ae++)Se[Ce[Ae]]=Ee[Ae];function Le(t){if(t instanceof Le)return t;"number"==typeof t?this.code=t:"string"==typeof t?this.message=t:E(t)&&("number"==typeof t.code&&(this.code=t.code),C(this,t)),this.message||(this.message=Le.defaultMessages[this.code]||"")}Le.prototype.code=0,Le.prototype.message="",Le.prototype.status=null,Le.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],Le.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Pe=0;Pe<Le.errorTypes.length;Pe++)Le[Le.errorTypes[Pe]]=Pe,Le.prototype[Le.errorTypes[Pe]]=Pe;var Oe=function(t,e){var i,r=null;try{i=JSON.parse(t,e)}catch(t){r=t}return[r,i]};function xe(t){return null!=t&&"function"==typeof t.then}function Ie(t){xe(t)&&t.then(null,function(t){})}var De=function(r){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(t,e,i){return r[e]&&(t[e]=r[e]),t},{cues:r.cues&&Array.prototype.map.call(r.cues,function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}})})},Re=function(t){var e=t.$$("track"),i=Array.prototype.map.call(e,function(t){return t.track});return Array.prototype.map.call(e,function(t){var e=De(t.track);return t.src&&(e.src=t.src),e}).concat(Array.prototype.filter.call(t.textTracks(),function(t){return-1===i.indexOf(t)}).map(De))},Me=function(t,i){return t.forEach(function(t){var e=i.addRemoteTextTrack(t).track;!t.src&&t.cues&&t.cues.forEach(function(t){return e.addCue(t)})}),i.textTracks()},Ue="vjs-modal-dialog",Ne=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.opened_=i.hasBeenOpened_=i.hasBeenFilled_=!1,i.closeable(!i.options_.uncloseable),i.content(i.options_.content),i.contentEl_=M("div",{className:Ue+"-content"},{role:"document"}),i.descEl_=M("p",{className:Ue+"-description vjs-control-text",id:i.el().getAttribute("aria-describedby")}),U(i.descEl_,i.description()),i.el_.appendChild(i.descEl_),i.el_.appendChild(i.contentEl_),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},n.prototype.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return Ue+" vjs-hidden "+r.prototype.buildCSSClass.call(this)},n.prototype.handleKeyPress=function(t){27===t.which&&this.closeable()&&this.close()},n.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},n.prototype.description=function(){var t=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(t+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),t},n.prototype.open=function(){if(!this.opened_){var t=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!t.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&t.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_=t.controls(),t.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},n.prototype.opened=function(t){return"boolean"==typeof t&&this[t?"open":"close"](),this.opened_},n.prototype.close=function(){if(this.opened_){var t=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&t.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_&&t.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},n.prototype.closeable=function(t){if("boolean"==typeof t){var e=this.closeable_=!!t,i=this.getChild("closeButton");if(e&&!i){var r=this.contentEl_;this.contentEl_=this.el_,i=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=r,this.on(i,"close",this.close)}!e&&i&&(this.off(i,"close",this.close),this.removeChild(i),i.dispose())}return this.closeable_},n.prototype.fill=function(){this.fillWith(this.content())},n.prototype.fillWith=function(t){var e=this.contentEl(),i=e.parentNode,r=e.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,i.removeChild(e),this.empty(),it(e,t),this.trigger("modalfill"),r?i.insertBefore(e,r):i.appendChild(e);var n=this.getChild("closeButton");n&&i.appendChild(n.el_)},n.prototype.empty=function(){this.trigger("beforemodalempty"),Z(this.contentEl()),this.trigger("modalempty")},n.prototype.content=function(t){return"undefined"!=typeof t&&(this.content_=t),this.content_},n.prototype.conditionalFocus_=function(){var t=p.activeElement,e=this.player_.el_;this.previouslyActiveEl_=null,(e.contains(t)||e===t)&&(this.previouslyActiveEl_=t,this.focus(),this.on(p,"keydown",this.handleKeyDown))},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(p,"keydown",this.handleKeyDown)},n.prototype.handleKeyDown=function(t){if(9===t.which){for(var e=this.focusableEls_(),i=this.el_.querySelector(":focus"),r=void 0,n=0;n<e.length;n++)if(i===e[n]){r=n;break}p.activeElement===this.el_&&(r=0),t.shiftKey&&0===r?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||r!==e.length-1||(e[0].focus(),t.preventDefault())}},n.prototype.focusableEls_=function(){var t=this.el_.querySelectorAll("*");return Array.prototype.filter.call(t,function(t){return(t instanceof g.HTMLAnchorElement||t instanceof g.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof g.HTMLInputElement||t instanceof g.HTMLSelectElement||t instanceof g.HTMLTextAreaElement||t instanceof g.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof g.HTMLIFrameElement||t instanceof g.HTMLObjectElement||t instanceof g.HTMLEmbedElement||t.hasAttribute("tabindex")&&-1!==t.getAttribute("tabindex")||t.hasAttribute("contenteditable")})},n}(Xt);Ne.prototype.options_={pauseOnOpen:!0,temporary:!0},Xt.registerComponent("ModalDialog",Ne);var Be=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);var e=b(this,r.call(this));e.tracks_=[],Object.defineProperty(e,"length",{get:function(){return this.tracks_.length}});for(var i=0;i<t.length;i++)e.addTrack(t[i]);return e}return _(n,r),n.prototype.addTrack=function(t){var e=this.tracks_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.tracks_[e]}}),-1===this.tracks_.indexOf(t)&&(this.tracks_.push(t),this.trigger({track:t,type:"addtrack"}))},n.prototype.removeTrack=function(t){for(var e=void 0,i=0,r=this.length;i<r;i++)if(this[i]===t){(e=this[i]).off&&e.off(),this.tracks_.splice(i,1);break}e&&this.trigger({track:e,type:"removetrack"})},n.prototype.getTrackById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},n}(Dt);for(var je in Be.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"},Be.prototype.allowedEvents_)Be.prototype["on"+je]=null;var Fe=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].enabled=!1)},He=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].enabled){Fe(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.enabled&&Fe(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("enabledchange",function(){e.changing_||(e.changing_=!0,Fe(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),Ve=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].selected=!1)},qe=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].selected){Ve(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,Object.defineProperty(i,"selectedIndex",{get:function(){for(var t=0;t<this.length;t++)if(this[t].selected)return t;return-1},set:function(){}}),i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.selected&&Ve(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("selectedchange",function(){e.changing_||(e.changing_=!0,Ve(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),We=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.addTrack=function(t){e.prototype.addTrack.call(this,t),t.addEventListener("modechange",Ot(this,function(){this.trigger("change")}));-1===["metadata","chapters"].indexOf(t.kind)&&t.addEventListener("modechange",Ot(this,function(){this.trigger("selectedlanguagechange")}))},t}(Be),ze=function(){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,r),this.trackElements_=[],Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}});for(var e=0,i=t.length;e<i;e++)this.addTrackElement_(t[e])}return r.prototype.addTrackElement_=function(t){var e=this.trackElements_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),-1===this.trackElements_.indexOf(t)&&this.trackElements_.push(t)},r.prototype.getTrackElementByTrack_=function(t){for(var e=void 0,i=0,r=this.trackElements_.length;i<r;i++)if(t===this.trackElements_[i].track){e=this.trackElements_[i];break}return e},r.prototype.removeTrackElement_=function(t){for(var e=0,i=this.trackElements_.length;e<i;e++)if(t===this.trackElements_[e]){this.trackElements_.splice(e,1);break}},r}(),Ge=function(){function e(t){y(this,e),e.prototype.setCues_.call(this,t),Object.defineProperty(this,"length",{get:function(){return this.length_}})}return e.prototype.setCues_=function(t){var e=this.length||0,i=0,r=t.length;this.cues_=t,this.length_=t.length;var n=function(t){""+t in this||Object.defineProperty(this,""+t,{get:function(){return this.cues_[t]}})};if(e<r)for(i=e;i<r;i++)n.call(this,i)},e.prototype.getCueById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},e}(),Xe={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},Ye={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},$e={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Ke={disabled:"disabled",hidden:"hidden",showing:"showing"},Qe=function(s){function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,a);var e=b(this,s.call(this)),i={id:t.id||"vjs_track_"+ut(),kind:t.kind||"",label:t.label||"",language:t.language||""},r=function(t){Object.defineProperty(e,t,{get:function(){return i[t]},set:function(){}})};for(var n in i)r(n);return e}return _(a,s),a}(Dt),Je=function(t){var e=["protocol","hostname","port","pathname","search","hash","host"],i=p.createElement("a");i.href=t;var r=""===i.host&&"file:"!==i.protocol,n=void 0;r&&((n=p.createElement("div")).innerHTML='<a href="'+t+'"></a>',i=n.firstChild,n.setAttribute("style","display:none; position:absolute;"),p.body.appendChild(n));for(var s={},a=0;a<e.length;a++)s[e[a]]=i[e[a]];return"http:"===s.protocol&&(s.host=s.host.replace(/:80$/,"")),"https:"===s.protocol&&(s.host=s.host.replace(/:443$/,"")),s.protocol||(s.protocol=g.location.protocol),r&&p.body.removeChild(n),s},Ze=function(t){if(!t.match(/^https?:\/\//)){var e=p.createElement("div");e.innerHTML='<a href="'+t+'">x</a>',t=e.firstChild.href}return t},ti=function(t){if("string"==typeof t){var e=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t);if(e)return e.pop().toLowerCase()}return""},ei=function(t){var e=g.location,i=Je(t);return(":"===i.protocol?e.protocol:i.protocol)+i.host!==e.protocol+e.host},ii=Object.freeze({parseUrl:Je,getAbsoluteURL:Ze,getFileExtension:ti,isCrossOrigin:ei}),ri=function(t){var e=ni.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)},ni=Object.prototype.toString;var si=Object.freeze({default:ri,__moduleExports:ri}),ai=e(function(t,e){(e=t.exports=function(t){return t.replace(/^\s*|\s*$/g,"")}).left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}}),oi=ai.left,ui=ai.right,li=Object.freeze({default:ai,__moduleExports:ai,left:oi,right:ui}),ci=si&&ri||si,hi=function(t,e,i){if(!ci(e))throw new TypeError("iterator must be a function");arguments.length<3&&(i=this);"[object Array]"===di.call(t)?function(t,e,i){for(var r=0,n=t.length;r<n;r++)pi.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i):"string"==typeof t?function(t,e,i){for(var r=0,n=t.length;r<n;r++)e.call(i,t.charAt(r),r,t)}(t,e,i):function(t,e,i){for(var r in t)pi.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i)},di=Object.prototype.toString,pi=Object.prototype.hasOwnProperty;var fi=Object.freeze({default:hi,__moduleExports:hi}),mi=li&&ai||li,gi=fi&&hi||fi,yi=function(t){if(!t)return{};var s={};return gi(mi(t).split("\n"),function(t){var e,i=t.indexOf(":"),r=mi(t.slice(0,i)).toLowerCase(),n=mi(t.slice(i+1));"undefined"==typeof s[r]?s[r]=n:(e=s[r],"[object Array]"===Object.prototype.toString.call(e)?s[r].push(n):s[r]=[s[r],n])}),s},vi=Object.freeze({default:yi,__moduleExports:yi}),_i=function(){for(var t={},e=0;e<arguments.length;e++){var i=arguments[e];for(var r in i)bi.call(i,r)&&(t[r]=i[r])}return t},bi=Object.prototype.hasOwnProperty;var Ti=Object.freeze({default:_i,__moduleExports:_i}),Si=vi&&yi||vi,ki=Ti&&_i||Ti,Ci=wi;function Ei(t,e,i){var r=t;return ci(e)?(i=e,"string"==typeof t&&(r={uri:t})):r=ki(e,{uri:t}),r.callback=i,r}function wi(t,e,i){return Ai(e=Ei(t,e,i))}function Ai(r){if("undefined"==typeof r.callback)throw new Error("callback argument missing");var n=!1,s=function(t,e,i){n||(n=!0,r.callback(t,e,i))};function e(t){return clearTimeout(u),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,s(t,m)}function t(){if(!a){var t;clearTimeout(u),t=r.useXDR&&void 0===o.status?200:1223===o.status?204:o.status;var e=m,i=null;return 0!==t?(e={body:function(){var t=void 0;if(t=o.response?o.response:o.responseText||function(t){if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;return""!==t.responseType||e?null:t.responseXML}(o),f)try{t=JSON.parse(t)}catch(t){}return t}(),statusCode:t,method:c,headers:{},url:l,rawRequest:o},o.getAllResponseHeaders&&(e.headers=Si(o.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),s(i,e,e.body)}}var i,a,o=r.xhr||null;o||(o=r.cors||r.useXDR?new wi.XDomainRequest:new wi.XMLHttpRequest);var u,l=o.url=r.uri||r.url,c=o.method=r.method||"GET",h=r.body||r.data,d=o.headers=r.headers||{},p=!!r.sync,f=!1,m={body:void 0,headers:{},statusCode:0,method:c,url:l,rawRequest:o};if("json"in r&&!1!==r.json&&(f=!0,d.accept||d.Accept||(d.Accept="application/json"),"GET"!==c&&"HEAD"!==c&&(d["content-type"]||d["Content-Type"]||(d["Content-Type"]="application/json"),h=JSON.stringify(!0===r.json?h:r.json))),o.onreadystatechange=function(){4===o.readyState&&setTimeout(t,0)},o.onload=t,o.onerror=e,o.onprogress=function(){},o.onabort=function(){a=!0},o.ontimeout=e,o.open(c,l,!p,r.username,r.password),p||(o.withCredentials=!!r.withCredentials),!p&&0<r.timeout&&(u=setTimeout(function(){if(!a){a=!0,o.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",e(t)}},r.timeout)),o.setRequestHeader)for(i in d)d.hasOwnProperty(i)&&o.setRequestHeader(i,d[i]);else if(r.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(r.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in r&&(o.responseType=r.responseType),"beforeSend"in r&&"function"==typeof r.beforeSend&&r.beforeSend(o),o.send(h||null),o}wi.XMLHttpRequest=g.XMLHttpRequest||function(){},wi.XDomainRequest="withCredentials"in new wi.XMLHttpRequest?wi.XMLHttpRequest:g.XDomainRequest,function(t,e){for(var i=0;i<t.length;i++)e(t[i])}(["get","put","post","patch","head","delete"],function(r){wi["delete"===r?"del":r]=function(t,e,i){return(e=Ei(t,e,i)).method=r.toUpperCase(),Ai(e)}});var Li=function(t,e){var i=new g.WebVTT.Parser(g,g.vttjs,g.WebVTT.StringDecoder()),r=[];i.oncue=function(t){e.addCue(t)},i.onparsingerror=function(t){r.push(t)},i.onflush=function(){e.trigger({type:"loadeddata",target:e})},i.parse(t),0<r.length&&(g.console&&g.console.groupCollapsed&&g.console.groupCollapsed("Text Track parsing errors for "+e.src),r.forEach(function(t){return f.error(t)}),g.console&&g.console.groupEnd&&g.console.groupEnd()),i.flush()},Pi=function(t,n){var e={uri:t},i=ei(t);i&&(e.cors=i),Ci(e,Ot(this,function(t,e,i){if(t)return f.error(t,e);if(n.loaded_=!0,"function"!=typeof g.WebVTT){if(n.tech_){var r=function(){return Li(i,n)};n.tech_.on("vttjsloaded",r),n.tech_.on("vttjserror",function(){f.error("vttjs failed to load, stopping trying to process "+n.src),n.tech_.off("vttjsloaded",r)})}}else Li(i,n)}))},Oi=function(l){function c(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(y(this,c),!t.tech)throw new Error("A tech was not provided.");var e=Gt(t,{kind:$e[t.kind]||"subtitles",language:t.language||t.srclang||""}),i=Ke[e.mode]||"disabled",r=e.default;"metadata"!==e.kind&&"chapters"!==e.kind||(i="hidden");var n=b(this,l.call(this,e));n.tech_=e.tech,n.cues_=[],n.activeCues_=[];var s=new Ge(n.cues_),a=new Ge(n.activeCues_),o=!1,u=Ot(n,function(){this.activeCues,o&&(this.trigger("cuechange"),o=!1)});return"disabled"!==i&&n.tech_.ready(function(){n.tech_.on("timeupdate",u)},!0),Object.defineProperties(n,{default:{get:function(){return r},set:function(){}},mode:{get:function(){return i},set:function(t){var e=this;Ke[t]&&("showing"===(i=t)&&this.tech_.ready(function(){e.tech_.on("timeupdate",u)},!0),this.trigger("modechange"))}},cues:{get:function(){return this.loaded_?s:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return a;for(var t=this.tech_.currentTime(),e=[],i=0,r=this.cues.length;i<r;i++){var n=this.cues[i];n.startTime<=t&&n.endTime>=t?e.push(n):n.startTime===n.endTime&&n.startTime<=t&&n.startTime+.5>=t&&e.push(n)}if(o=!1,e.length!==this.activeCues_.length)o=!0;else for(var s=0;s<e.length;s++)-1===this.activeCues_.indexOf(e[s])&&(o=!0);return this.activeCues_=e,a.setCues_(this.activeCues_),a},set:function(){}}}),e.src?(n.src=e.src,Pi(e.src,n)):n.loaded_=!0,n}return _(c,l),c.prototype.addCue=function(t){var e=t;if(g.vttjs&&!(t instanceof g.vttjs.VTTCue)){for(var i in e=new g.vttjs.VTTCue(t.startTime,t.endTime,t.text),t)i in e||(e[i]=t[i]);e.id=t.id,e.originalCue_=t}for(var r=this.tech_.textTracks(),n=0;n<r.length;n++)r[n]!==this&&r[n].removeCue(e);this.cues_.push(e),this.cues.setCues_(this.cues_)},c.prototype.removeCue=function(t){for(var e=this.cues_.length;e--;){var i=this.cues_[e];if(i===t||i.originalCue_&&i.originalCue_===t){this.cues_.splice(e,1),this.cues.setCues_(this.cues_);break}}},c}(Qe);Oi.prototype.allowedEvents_={cuechange:"cuechange"};var xi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Ye[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"enabled",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("enabledchange"))}}),e.enabled&&(i.enabled=e.enabled),i.loaded_=!0,i}return _(s,n),s}(Qe),Ii=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Xe[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"selected",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("selectedchange"))}}),e.selected&&(i.selected=e.selected),i}return _(s,n),s}(Qe),Di=0,Ri=2,Mi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=b(this,n.call(this)),i=void 0,r=new Oi(t);return e.kind=r.kind,e.src=r.src,e.srclang=r.language,e.label=r.label,e.default=r.default,Object.defineProperties(e,{readyState:{get:function(){return i}},track:{get:function(){return r}}}),i=Di,r.addEventListener("loadeddata",function(){i=Ri,e.trigger({type:"load",target:e})}),e}return _(s,n),s}(Dt);Mi.prototype.allowedEvents_={load:"load"},Mi.NONE=Di,Mi.LOADING=1,Mi.LOADED=Ri,Mi.ERROR=3;var Ui={audio:{ListClass:He,TrackClass:xi,capitalName:"Audio"},video:{ListClass:qe,TrackClass:Ii,capitalName:"Video"},text:{ListClass:We,TrackClass:Oi,capitalName:"Text"}};Object.keys(Ui).forEach(function(t){Ui[t].getterName=t+"Tracks",Ui[t].privateName=t+"Tracks_"});var Ni={remoteText:{ListClass:We,TrackClass:Oi,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:ze,TrackClass:Mi,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Bi=Gt(Ui,Ni);Ni.names=Object.keys(Ni),Ui.names=Object.keys(Ui),Bi.names=[].concat(Ni.names).concat(Ui.names);var ji=Object.create||function(){function e(){}return function(t){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function Fi(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function Hi(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):59<i[1]?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}function Vi(){this.values=ji(null)}function qi(t,e,i,r){var n=r?t.split(r):[t];for(var s in n)if("string"==typeof n[s]){var a=n[s].split(i);if(2===a.length)e(a[0],a[1])}}function Wi(e,t,s){var i,r,a,n=e;function o(){var t=Hi(e);if(null===t)throw new Fi(Fi.Errors.BadTimeStamp,"Malformed timestamp: "+n);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function u(){e=e.replace(/^\s+/,"")}if(u(),t.startTime=o(),u(),"--\x3e"!==e.substr(0,3))throw new Fi(Fi.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+n);e=e.substr(3),u(),t.endTime=o(),u(),i=e,r=t,a=new Vi,qi(i,function(t,e){switch(t){case"region":for(var i=s.length-1;0<=i;i--)if(s[i].id===e){a.set(t,s[i].region);break}break;case"vertical":a.alt(t,e,["rl","lr"]);break;case"line":var r=e.split(","),n=r[0];a.integer(t,n),a.percent(t,n)&&a.set("snapToLines",!1),a.alt(t,n,["auto"]),2===r.length&&a.alt("lineAlign",r[1],["start","middle","end"]);break;case"position":r=e.split(","),a.percent(t,r[0]),2===r.length&&a.alt("positionAlign",r[1],["start","middle","end"]);break;case"size":a.percent(t,e);break;case"align":a.alt(t,e,["start","middle","end","left","right"])}},/:/,/\s/),r.region=a.get("region",null),r.vertical=a.get("vertical",""),r.line=a.get("line","auto"),r.lineAlign=a.get("lineAlign","start"),r.snapToLines=a.get("snapToLines",!0),r.size=a.get("size",100),r.align=a.get("align","middle"),r.position=a.get("position",{start:0,left:0,middle:50,end:100,right:100},r.align),r.positionAlign=a.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},r.align)}((Fi.prototype=ji(Error.prototype)).constructor=Fi).Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},Vi.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,i){for(var r=0;r<i.length;++r)if(e===i[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&0<=(e=parseFloat(e))&&e<=100)&&(this.set(t,e),!0)}};var zi={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},Gi={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Xi={v:"title",lang:"lang"},Yi={rt:"ruby"};function $i(s,i){function t(){if(!i)return null;var t,e=i.match(/^([^<]*)(<[^>]*>?)?/);return t=e[1]?e[1]:e[2],i=i.substr(t.length),t}function e(t){return zi[t]}function r(t){for(;f=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(f[0],e);return t}function n(t,e){var i=Gi[t];if(!i)return null;var r=s.document.createElement(i);r.localName=i;var n=Xi[t];return n&&e&&(r[n]=e.trim()),r}for(var a,o,u,l=s.document.createElement("div"),c=l,h=[];null!==(a=t());)if("<"!==a[0])c.appendChild(s.document.createTextNode(r(a)));else{if("/"===a[1]){h.length&&h[h.length-1]===a.substr(2).replace(">","")&&(h.pop(),c=c.parentNode);continue}var d,p=Hi(a.substr(1,a.length-2));if(p){d=s.document.createProcessingInstruction("timestamp",p),c.appendChild(d);continue}var f=a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!f)continue;if(!(d=n(f[1],f[3])))continue;if(o=c,Yi[(u=d).localName]&&Yi[u.localName]!==o.localName)continue;f[2]&&(d.className=f[2].substr(1).replace("."," ")),h.push(f[1]),c.appendChild(d),c=d}return l}var Ki=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Qi(t){for(var e=0;e<Ki.length;e++){var i=Ki[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function Ji(){}function Zi(t,e,i){Ji.call(this),this.cue=e,this.cueDiv=$i(t,e.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=t.document.createElement("div"),r={direction:function(t){var e=[],i="";if(!t||!t.childNodes)return"ltr";function n(t,e){for(var i=e.childNodes.length-1;0<=i;i--)t.push(e.childNodes[i])}function s(t){if(!t||!t.length)return null;var e=t.pop(),i=e.textContent||e.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?r[t.length=0]:i}return"ruby"===e.tagName?s(t):e.childNodes?(n(t,e),s(t)):void 0}for(n(e,t);i=s(e);)for(var r=0;r<i.length;r++)if(Qi(i.charCodeAt(r)))return"rtl";return"ltr"}(this.cueDiv),writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===e.align?"center":e.align,font:i.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var n=0;switch(e.positionAlign){case"start":n=e.position;break;case"middle":n=e.position-e.size/2;break;case"end":n=e.position-e.size}""===e.vertical?this.applyStyles({left:this.formatStyle(n,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(n,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function tr(t){var e,i,r,n;if(t.div){i=t.div.offsetHeight,r=t.div.offsetWidth,n=t.div.offsetTop;var s=(s=t.div.childNodes)&&(s=s[0])&&s.getClientRects&&s.getClientRects();t=t.div.getBoundingClientRect(),e=s?Math.max(s[0]&&s[0].height||0,t.height/s.length):0}this.left=t.left,this.right=t.right,this.top=t.top||n,this.height=t.height||i,this.bottom=t.bottom||n+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight}function er(t,e,o,u){var i=new tr(e),r=e.cue,n=function(t){if("number"==typeof t.line&&(t.snapToLines||0<=t.line&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,n=0;n<i.length&&i[n]!==e;n++)"showing"===i[n].mode&&r++;return-1*++r}(r),s=[];if(r.snapToLines){var a;switch(r.vertical){case"":s=["+y","-y"],a="height";break;case"rl":s=["+x","-x"],a="width";break;case"lr":s=["-x","+x"],a="width"}var l=i.lineHeight,c=l*Math.round(n),h=o[a]+l,d=s[0];Math.abs(c)>h&&(c=c<0?-1:1,c*=Math.ceil(h/l)*l),n<0&&(c+=""===r.vertical?o.height:o.width,s=s.reverse()),i.move(d,c)}else{var p=i.lineHeight/o.height*100;switch(r.lineAlign){case"middle":n-=p/2;break;case"end":n-=p}switch(r.vertical){case"":e.applyStyles({top:e.formatStyle(n,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(n,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(n,"%")})}s=["+y","-x","+x","-y"],i=new tr(e)}var f=function(t,e){for(var i,r=new tr(t),n=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(o,e[s])||t.within(o)&&t.overlapsAny(u);)t.move(e[s]);if(t.within(o))return t;var a=t.intersectPercentage(o);a<n&&(i=new tr(t),n=a),t=new tr(r)}return i||r}(i,s);e.move(f.toCSSCompatValues(o))}function ir(){}Ji.prototype.applyStyles=function(t,e){for(var i in e=e||this.div,t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},Ji.prototype.formatStyle=function(t,e){return 0===t?0:t+e},(Zi.prototype=ji(Ji.prototype)).constructor=Zi,tr.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},tr.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},tr.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},tr.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},tr.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},tr.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},tr.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},tr.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return{left:(t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t).left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i}},ir.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},ir.convertCueToDOMTree=function(t,e){return t&&e?$i(t,e):null};ir.processCues=function(r,n,t){if(!r||!n||!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);var s=r.document.createElement("div");if(s.style.position="absolute",s.style.left="0",s.style.right="0",s.style.top="0",s.style.bottom="0",s.style.margin="1.5%",t.appendChild(s),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(n)){var a=[],o=tr.getSimpleBoxPosition(s),u={font:Math.round(.05*o.height*100)/100+"px sans-serif"};!function(){for(var t,e,i=0;i<n.length;i++)e=n[i],t=new Zi(r,e,u),s.appendChild(t.div),er(0,t,o,a),e.displayState=t.div,a.push(tr.getSimpleBoxPosition(t))}()}else for(var e=0;e<n.length;e++)s.appendChild(n[e].displayState)},(ir.Parser=function(t,e,i){i||(i=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=i||new TextDecoder("utf8"),this.regionList=[]}).prototype={reportOrThrowError:function(t){if(!(t instanceof Fi))throw t;this.onparsingerror&&this.onparsingerror(t)},parse:function(t){var s=this;function e(){for(var t=s.buffer,e=0;e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var i=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,s.buffer=t.substr(e),i}function i(t){t.match(/X-TIMESTAMP-MAP/)?qi(t,function(t,e){switch(t){case"X-TIMESTAMP-MAP":i=e,r=new Vi,qi(i,function(t,e){switch(t){case"MPEGT":r.integer(t+"S",e);break;case"LOCA":r.set(t+"L",Hi(e))}},/[^\d]:/,/,/),s.ontimestampmap&&s.ontimestampmap({MPEGTS:r.get("MPEGTS"),LOCAL:r.get("LOCAL")})}var i,r},/=/):qi(t,function(t,e){switch(t){case"Region":!function(t){var n=new Vi;if(qi(t,function(t,e){switch(t){case"id":n.set(t,e);break;case"width":n.percent(t,e);break;case"lines":n.integer(t,e);break;case"regionanchor":case"viewportanchor":var i=e.split(",");if(2!==i.length)break;var r=new Vi;if(r.percent("x",i[0]),r.percent("y",i[1]),!r.has("x")||!r.has("y"))break;n.set(t+"X",r.get("x")),n.set(t+"Y",r.get("y"));break;case"scroll":n.alt(t,e,["up"])}},/=/,/\s/),n.has("id")){var e=new(s.vttjs.VTTRegion||s.window.VTTRegion);e.width=n.get("width",100),e.lines=n.get("lines",3),e.regionAnchorX=n.get("regionanchorX",0),e.regionAnchorY=n.get("regionanchorY",100),e.viewportAnchorX=n.get("viewportanchorX",0),e.viewportAnchorY=n.get("viewportanchorY",100),e.scroll=n.get("scroll",""),s.onregion&&s.onregion(e),s.regionList.push({id:n.get("id"),region:e})}}(e)}},/:/)}t&&(s.buffer+=s.decoder.decode(t,{stream:!0}));try{var r;if("INITIAL"===s.state){if(!/\r\n|\n/.test(s.buffer))return this;var n=(r=e()).match(/^WEBVTT([ \t].*)?$/);if(!n||!n[0])throw new Fi(Fi.Errors.BadSignature);s.state="HEADER"}for(var a=!1;s.buffer;){if(!/\r\n|\n/.test(s.buffer))return this;switch(a?a=!1:r=e(),s.state){case"HEADER":/:/.test(r)?i(r):r||(s.state="ID");continue;case"NOTE":r||(s.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){s.state="NOTE";break}if(!r)continue;if(s.cue=new(s.vttjs.VTTCue||s.window.VTTCue)(0,0,""),s.state="CUE",-1===r.indexOf("--\x3e")){s.cue.id=r;continue}case"CUE":try{Wi(r,s.cue,s.regionList)}catch(t){s.reportOrThrowError(t),s.cue=null,s.state="BADCUE";continue}s.state="CUETEXT";continue;case"CUETEXT":var o=-1!==r.indexOf("--\x3e");if(!r||o&&(a=!0)){s.oncue&&s.oncue(s.cue),s.cue=null,s.state="ID";continue}s.cue.text&&(s.cue.text+="\n"),s.cue.text+=r;continue;case"BADCUE":r||(s.state="ID");continue}}}catch(t){s.reportOrThrowError(t),"CUETEXT"===s.state&&s.cue&&s.oncue&&s.oncue(s.cue),s.cue=null,s.state="INITIAL"===s.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse()),"INITIAL"===e.state)throw new Fi(Fi.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var rr=ir,nr=Object.freeze({default:rr,__moduleExports:rr}),sr="auto",ar={"":1,lr:1,rl:1},or={start:1,middle:1,end:1,left:1,right:1};function ur(t){return"string"==typeof t&&(!!or[t.toLowerCase()]&&t.toLowerCase())}function lr(t,e,i){this.hasBeenReset=!1;var r="",n=!1,s=t,a=e,o=i,u=null,l="",c=!0,h="auto",d="start",p=50,f="middle",m=50,g="middle";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(t){r=""+t}},pauseOnExit:{enumerable:!0,get:function(){return n},set:function(t){n=!!t}},startTime:{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");s=t,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");a=t,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return o},set:function(t){o=""+t,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return u},set:function(t){u=t,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return l},set:function(t){var e,i="string"==typeof(e=t)&&!!ar[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");l=i,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return c},set:function(t){c=!!t,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return h},set:function(t){if("number"!=typeof t&&t!==sr)throw new SyntaxError("An invalid number or illegal string was specified.");h=t,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return d},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");d=e,this.hasBeenReset=!0}},position:{enumerable:!0,get:function(){return p},set:function(t){if(t<0||100<t)throw new Error("Position must be between 0 and 100.");p=t,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return f},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");f=e,this.hasBeenReset=!0}},size:{enumerable:!0,get:function(){return m},set:function(t){if(t<0||100<t)throw new Error("Size must be between 0 and 100.");m=t,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return g},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");g=e,this.hasBeenReset=!0}}}),this.displayState=void 0}lr.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var cr=lr,hr=Object.freeze({default:cr,__moduleExports:cr}),dr={"":!0,up:!0};function pr(t){return"number"==typeof t&&0<=t&&t<=100}var fr=function(){var e=100,i=3,r=0,n=100,s=0,a=100,o="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(t){if(!pr(t))throw new Error("Width must be between 0 and 100.");e=t}},lines:{enumerable:!0,get:function(){return i},set:function(t){if("number"!=typeof t)throw new TypeError("Lines must be set to a number.");i=t}},regionAnchorY:{enumerable:!0,get:function(){return n},set:function(t){if(!pr(t))throw new Error("RegionAnchorX must be between 0 and 100.");n=t}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(t){if(!pr(t))throw new Error("RegionAnchorY must be between 0 and 100.");r=t}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(t){if(!pr(t))throw new Error("ViewportAnchorY must be between 0 and 100.");a=t}},viewportAnchorX:{enumerable:!0,get:function(){return s},set:function(t){if(!pr(t))throw new Error("ViewportAnchorX must be between 0 and 100.");s=t}},scroll:{enumerable:!0,get:function(){return o},set:function(t){var e,i="string"==typeof(e=t)&&!!dr[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");o=i}}})},mr=Object.freeze({default:fr,__moduleExports:fr}),gr=nr&&rr||nr,yr=hr&&cr||hr,vr=mr&&fr||mr,_r=e(function(t){var e=t.exports={WebVTT:gr,VTTCue:yr,VTTRegion:vr};g.vttjs=e,g.WebVTT=e.WebVTT;var i=e.VTTCue,r=e.VTTRegion,n=g.VTTCue,s=g.VTTRegion;e.shim=function(){g.VTTCue=i,g.VTTRegion=r},e.restore=function(){g.VTTCue=n,g.VTTRegion=s},g.VTTCue||e.shim()});_r.WebVTT,_r.VTTCue,_r.VTTRegion;var br=function(e){function n(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};y(this,n),i.reportTouchActivity=!1;var r=b(this,e.call(this,null,i,t));return r.hasStarted_=!1,r.on("playing",function(){this.hasStarted_=!0}),r.on("loadstart",function(){this.hasStarted_=!1}),Bi.names.forEach(function(t){var e=Bi[t];i&&i[e.getterName]&&(r[e.privateName]=i[e.getterName])}),r.featuresProgressEvents||r.manualProgressOn(),r.featuresTimeupdateEvents||r.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(t){!1===i["native"+t+"Tracks"]&&(r["featuresNative"+t+"Tracks"]=!1)}),!1===i.nativeCaptions||!1===i.nativeTextTracks?r.featuresNativeTextTracks=!1:!0!==i.nativeCaptions&&!0!==i.nativeTextTracks||(r.featuresNativeTextTracks=!0),r.featuresNativeTextTracks||r.emulateTextTracks(),r.autoRemoteTextTracks_=new Bi.text.ListClass,r.initTrackListeners(),i.nativeControlsForTouch||r.emitTapEvents(),r.constructor&&(r.name_=r.constructor.name||"Unknown Tech"),r}return _(n,e),n.prototype.triggerSourceset=function(t){var e=this;this.isReady_||this.one("ready",function(){return e.setTimeout(function(){return e.triggerSourceset(t)},1)}),this.trigger({src:t,type:"sourceset"})},n.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},n.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},n.prototype.trackProgress=function(t){this.stopTrackingProgress(),this.progressInterval=this.setInterval(Ot(this,function(){var t=this.bufferedPercent();this.bufferedPercent_!==t&&this.trigger("progress"),1===(this.bufferedPercent_=t)&&this.stopTrackingProgress()}),500)},n.prototype.onDurationChange=function(t){this.duration_=this.duration()},n.prototype.buffered=function(){return be(0,0)},n.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration_)},n.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},n.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},n.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},n.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},n.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.dispose=function(){this.clearTracks(Ui.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),e.prototype.dispose.call(this)},n.prototype.clearTracks=function(t){var n=this;(t=[].concat(t)).forEach(function(t){for(var e=n[t+"Tracks"]()||[],i=e.length;i--;){var r=e[i];"text"===t&&n.removeRemoteTextTrack(r),e.removeTrack(r)}})},n.prototype.cleanupAutoTextTracks=function(){for(var t=this.autoRemoteTextTracks_||[],e=t.length;e--;){var i=t[e];this.removeRemoteTextTrack(i)}},n.prototype.reset=function(){},n.prototype.error=function(t){return void 0!==t&&(this.error_=new Le(t),this.trigger("error")),this.error_},n.prototype.played=function(){return this.hasStarted_?be(0,0):be()},n.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.initTrackListeners=function(){var n=this;Ui.names.forEach(function(t){var e=Ui[t],i=function(){n.trigger(t+"trackchange")},r=n[e.getterName]();r.addEventListener("removetrack",i),r.addEventListener("addtrack",i),n.on("dispose",function(){r.removeEventListener("removetrack",i),r.removeEventListener("addtrack",i)})})},n.prototype.addWebVttScript_=function(){var t=this;if(!g.WebVTT)if(p.body.contains(this.el())){if(!this.options_["vtt.js"]&&w(_r)&&0<Object.keys(_r).length)return void this.trigger("vttjsloaded");var e=p.createElement("script");e.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",e.onload=function(){t.trigger("vttjsloaded")},e.onerror=function(){t.trigger("vttjserror")},this.on("dispose",function(){e.onload=null,e.onerror=null}),g.WebVTT=!0,this.el().parentNode.appendChild(e)}else this.ready(this.addWebVttScript_)},n.prototype.emulateTextTracks=function(){var t=this,i=this.textTracks(),e=this.remoteTextTracks(),r=function(t){return i.addTrack(t.track)},n=function(t){return i.removeTrack(t.track)};e.on("addtrack",r),e.on("removetrack",n),this.addWebVttScript_();var s=function(){return t.trigger("texttrackchange")},a=function(){s();for(var t=0;t<i.length;t++){var e=i[t];e.removeEventListener("cuechange",s),"showing"===e.mode&&e.addEventListener("cuechange",s)}};a(),i.addEventListener("change",a),i.addEventListener("addtrack",a),i.addEventListener("removetrack",a),this.on("dispose",function(){e.off("addtrack",r),e.off("removetrack",n),i.removeEventListener("change",a),i.removeEventListener("addtrack",a),i.removeEventListener("removetrack",a);for(var t=0;t<i.length;t++){i[t].removeEventListener("cuechange",s)}})},n.prototype.addTextTrack=function(t,e,i){if(!t)throw new Error("TextTrack kind is required but was not provided");return function(t,e,i,r){var n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},s=t.textTracks();n.kind=e,i&&(n.label=i),r&&(n.language=r),n.tech=t;var a=new Bi.text.TrackClass(n);return s.addTrack(a),a}(this,t,e,i)},n.prototype.createRemoteTextTrack=function(t){var e=Gt(t,{tech:this});return new Ni.remoteTextEl.TrackClass(e)},n.prototype.addRemoteTextTrack=function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=this.createRemoteTextTrack(e);return!0!==i&&!1!==i&&(f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),i=!0),this.remoteTextTrackEls().addTrackElement_(r),this.remoteTextTracks().addTrack(r.track),!0!==i&&this.ready(function(){return t.autoRemoteTextTracks_.addTrack(r.track)}),r},n.prototype.removeRemoteTextTrack=function(t){var e=this.remoteTextTrackEls().getTrackElementByTrack_(t);this.remoteTextTrackEls().removeTrackElement_(e),this.remoteTextTracks().removeTrack(t),this.autoRemoteTextTracks_.removeTrack(t)},n.prototype.getVideoPlaybackQuality=function(){return{}},n.prototype.setPoster=function(){},n.prototype.playsinline=function(){},n.prototype.setPlaysinline=function(){},n.prototype.overrideNativeAudioTracks=function(){},n.prototype.overrideNativeVideoTracks=function(){},n.prototype.canPlayType=function(){return""},n.canPlayType=function(){return""},n.canPlaySource=function(t,e){return n.canPlayType(t.type)},n.isTech=function(t){return t.prototype instanceof n||t instanceof n||t===n},n.registerTech=function(t,e){if(n.techs_||(n.techs_={}),!n.isTech(e))throw new Error("Tech "+t+" must be a Tech");if(!n.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!n.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return t=zt(t),n.techs_[t]=e,"Tech"!==t&&n.defaultTechOrder_.push(t),e},n.getTech=function(t){if(t)return t=zt(t),n.techs_&&n.techs_[t]?n.techs_[t]:g&&g.videojs&&g.videojs[t]?(f.warn("The "+t+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),g.videojs[t]):void 0},n}(Xt);Bi.names.forEach(function(t){var e=Bi[t];br.prototype[e.getterName]=function(){return this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName]}}),br.prototype.featuresVolumeControl=!0,br.prototype.featuresFullscreenResize=!1,br.prototype.featuresPlaybackRate=!1,br.prototype.featuresProgressEvents=!1,br.prototype.featuresSourceset=!1,br.prototype.featuresTimeupdateEvents=!1,br.prototype.featuresNativeTextTracks=!1,br.withSourceHandlers=function(n){n.registerSourceHandler=function(t,e){var i=n.sourceHandlers;i||(i=n.sourceHandlers=[]),void 0===e&&(e=i.length),i.splice(e,0,t)},n.canPlayType=function(t){for(var e=n.sourceHandlers||[],i=void 0,r=0;r<e.length;r++)if(i=e[r].canPlayType(t))return i;return""},n.selectSourceHandler=function(t,e){for(var i=n.sourceHandlers||[],r=0;r<i.length;r++)if(i[r].canHandleSource(t,e))return i[r];return null},n.canPlaySource=function(t,e){var i=n.selectSourceHandler(t,e);return i?i.canHandleSource(t,e):""};["seekable","seeking","duration"].forEach(function(t){var e=this[t];"function"==typeof e&&(this[t]=function(){return this.sourceHandler_&&this.sourceHandler_[t]?this.sourceHandler_[t].apply(this.sourceHandler_,arguments):e.apply(this,arguments)})},n.prototype),n.prototype.setSource=function(t){var e=n.selectSourceHandler(t,this.options_);e||(n.nativeSourceHandler?e=n.nativeSourceHandler:f.error("No source handler found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),e!==n.nativeSourceHandler&&(this.currentSource_=t),this.sourceHandler_=e.handleSource(t,this,this.options_),this.on("dispose",this.disposeSourceHandler)},n.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},Xt.registerComponent("Tech",br),br.registerTech("Tech",br),br.defaultTechOrder_=[];var Tr={},Sr={},kr={};function Cr(t,e,i){t.setTimeout(function(){return function i(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];var n=arguments[2];var s=arguments[3];var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];var o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];var e=t[0],u=t.slice(1);if("string"==typeof e)i(r,Tr[e],n,s,a,o);else if(e){var l=function(t,e){var i=Sr[t.id()],r=null;if(null==i)return r=e(t),Sr[t.id()]=[[e,r]],r;for(var n=0;n<i.length;n++){var s=i[n],a=s[0],o=s[1];a===e&&(r=o)}null===r&&(r=e(t),i.push([e,r]));return r}(s,e);l.setSource(C({},r),function(t,e){if(t)return i(r,u,n,s,a,o);a.push(l),i(e,r.type===e.type?u:Tr[e.type],n,s,a,o)})}else u.length?i(r,u,n,s,a,o):o?n(r,a):i(r,Tr["*"],n,s,a,!0)}(e,Tr[e.type],i,t)},1)}function Er(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,n="call"+zt(i),s=t.reduce(Pr(n),r),a=s===kr,o=a?null:e[i](s);return function(t,e,i,r){for(var n=t.length-1;0<=n;n--){var s=t[n];s[e]&&s[e](r,i)}}(t,i,o,a),o}var wr={buffered:1,currentTime:1,duration:1,seekable:1,played:1,paused:1},Ar={setCurrentTime:1},Lr={play:1,pause:1};function Pr(i){return function(t,e){return t===kr?kr:e[i]?e[i](t):t}}var Or={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",mp3:"audio/mpeg",aac:"audio/aac",oga:"audio/ogg",m3u8:"application/x-mpegURL"},xr=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=ti(t);return Or[e.toLowerCase()]||""};function Ir(t){var e=xr(t.src);return!t.type&&e&&(t.type=e),t}var Dr=function(l){function c(t,e,i){y(this,c);var r=Gt({createEl:!1},e),n=b(this,l.call(this,t,r,i));if(e.playerOptions.sources&&0!==e.playerOptions.sources.length)t.src(e.playerOptions.sources);else for(var s=0,a=e.playerOptions.techOrder;s<a.length;s++){var o=zt(a[s]),u=br.getTech(o);if(o||(u=Xt.getComponent(o)),u&&u.isSupported()){t.loadTech_(o);break}}return n}return _(c,l),c}(Xt);Xt.registerComponent("MediaLoader",Dr);var Rr=function(n){function r(t,e){y(this,r);var i=b(this,n.call(this,t,e));return i.emitTapEvents(),i.enable(),i}return _(r,n),r.prototype.createEl=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},e),"button"===t&&f.error("Creating a ClickableComponent with an HTML element of "+t+" is not supported; use a Button instead."),i=C({role:"button"},i),this.tabIndex_=e.tabIndex;var r=n.prototype.createEl.call(this,t,e,i);return this.createControlTextEl(r),r},r.prototype.dispose=function(){this.controlTextEl_=null,n.prototype.dispose.call(this)},r.prototype.createControlTextEl=function(t){return this.controlTextEl_=M("span",{className:"vjs-control-text"},{"aria-live":"polite"}),t&&t.appendChild(this.controlTextEl_),this.controlText(this.controlText_,t),this.controlTextEl_},r.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.el();if(void 0===t)return this.controlText_||"Need Text";var i=this.localize(t);this.controlText_=t,U(this.controlTextEl_,i),this.nonIconControl||e.setAttribute("title",i)},r.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+n.prototype.buildCSSClass.call(this)},r.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),"undefined"!=typeof this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},r.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),"undefined"!=typeof this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},r.prototype.handleClick=function(t){},r.prototype.handleFocus=function(t){_t(p,"keydown",Ot(this,this.handleKeyPress))},r.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.trigger("click")):n.prototype.handleKeyPress&&n.prototype.handleKeyPress.call(this,t)},r.prototype.handleBlur=function(t){bt(p,"keydown",Ot(this,this.handleKeyPress))},r}(Xt);Xt.registerComponent("ClickableComponent",Rr);var Mr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update(),t.on("posterchange",Ot(i,i.update)),i}return _(n,r),n.prototype.dispose=function(){this.player().off("posterchange",this.update),r.prototype.dispose.call(this)},n.prototype.createEl=function(){return M("div",{className:"vjs-poster",tabIndex:-1})},n.prototype.update=function(t){var e=this.player().poster();this.setSrc(e),e?this.show():this.hide()},n.prototype.setSrc=function(t){var e="";t&&(e='url("'+t+'")'),this.el_.style.backgroundImage=e},n.prototype.handleClick=function(t){this.player_.controls()&&(this.player_.paused()?this.player_.play():this.player_.pause())},n}(Rr);Xt.registerComponent("PosterImage",Mr);var Ur="#222",Nr={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'};function Br(t,e){return"rgba("+parseInt(t[1]+t[1],16)+","+parseInt(t[2]+t[2],16)+","+parseInt(t[3]+t[3],16)+","+e+")"}function jr(t,e,i){try{t.style[e]=i}catch(t){return}}var Fr=function(n){function s(i,t,e){y(this,s);var r=b(this,n.call(this,i,t,e));return i.on("loadstart",Ot(r,r.toggleDisplay)),i.on("texttrackchange",Ot(r,r.updateDisplay)),i.on("loadstart",Ot(r,r.preselectTrack)),i.ready(Ot(r,function(){if(i.tech_&&i.tech_.featuresNativeTextTracks)this.hide();else{i.on("fullscreenchange",Ot(this,this.updateDisplay));for(var t=this.options_.playerOptions.tracks||[],e=0;e<t.length;e++)this.player_.addRemoteTextTrack(t[e],!0);this.preselectTrack()}})),r}return _(s,n),s.prototype.preselectTrack=function(){for(var t={captions:1,subtitles:1},e=this.player_.textTracks(),i=this.player_.cache_.selectedLanguage,r=void 0,n=void 0,s=void 0,a=0;a<e.length;a++){var o=e[a];i&&i.enabled&&i.language===o.language?o.kind===i.kind?s=o:s||(s=o):i&&!i.enabled?n=r=s=null:o.default&&("descriptions"!==o.kind||r?o.kind in t&&!n&&(n=o):r=o)}s?s.mode="showing":n?n.mode="showing":r&&(r.mode="showing")},s.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},s.prototype.clearDisplay=function(){"function"==typeof g.WebVTT&&g.WebVTT.processCues(g,[],this.el_)},s.prototype.updateDisplay=function(){var t=this.player_.textTracks();this.clearDisplay();for(var e=null,i=null,r=t.length;r--;){var n=t[r];"showing"===n.mode&&("descriptions"===n.kind?e=n:i=n)}i?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(i)):e&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(e))},s.prototype.updateForTrack=function(t){if("function"==typeof g.WebVTT&&t.activeCues){for(var e=[],i=0;i<t.activeCues.length;i++)e.push(t.activeCues[i]);if(g.WebVTT.processCues(g,e,this.el_),this.player_.textTrackSettings)for(var r=this.player_.textTrackSettings.getValues(),n=e.length;n--;){var s=e[n];if(s){var a=s.displayState;if(r.color&&(a.firstChild.style.color=r.color),r.textOpacity&&jr(a.firstChild,"color",Br(r.color||"#fff",r.textOpacity)),r.backgroundColor&&(a.firstChild.style.backgroundColor=r.backgroundColor),r.backgroundOpacity&&jr(a.firstChild,"backgroundColor",Br(r.backgroundColor||"#000",r.backgroundOpacity)),r.windowColor&&(r.windowOpacity?jr(a,"backgroundColor",Br(r.windowColor,r.windowOpacity)):a.style.backgroundColor=r.windowColor),r.edgeStyle&&("dropshadow"===r.edgeStyle?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px "+Ur:"raised"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px "+Ur:"depressed"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px "+Ur:"uniform"===r.edgeStyle&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px "+Ur)),r.fontPercent&&1!==r.fontPercent){var o=g.parseFloat(a.style.fontSize);a.style.fontSize=o*r.fontPercent+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px"}r.fontFamily&&"default"!==r.fontFamily&&("small-caps"===r.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Nr[r.fontFamily])}}}},s}(Xt);Xt.registerComponent("TextTrackDisplay",Fr);var Hr=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(){var t=this.player_.isAudio(),e=this.localize(t?"Audio Player":"Video Player"),i=M("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[e])}),r=n.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"});return r.appendChild(i),r},t}(Xt);Xt.registerComponent("LoadingSpinner",Hr);var Vr=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},e),i=C({type:"button"},i);var r=Xt.prototype.createEl.call(this,"button",e,i);return this.createControlTextEl(r),r},t.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=this.constructor.name;return f.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."),Xt.prototype.addChild.call(this,t,e)},t.prototype.enable=function(){e.prototype.enable.call(this),this.el_.removeAttribute("disabled")},t.prototype.disable=function(){e.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},t.prototype.handleKeyPress=function(t){32!==t.which&&13!==t.which&&e.prototype.handleKeyPress.call(this,t)},t}(Rr);Xt.registerComponent("Button",Vr);var qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.mouseused_=!1,i.on("mousedown",i.handleMouseDown),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-big-play-button"},n.prototype.handleClick=function(t){var e=this.player_.play();if(!(this.mouseused_&&t.clientX&&t.clientY)){var i=this.player_.getChild("controlBar"),r=i&&i.getChild("playToggle");if(r){var n=function(){return r.focus()};xe(e)?e.then(n,function(){}):this.setTimeout(n,1)}else this.player_.focus()}},n.prototype.handleKeyPress=function(t){this.mouseused_=!1,r.prototype.handleKeyPress.call(this,t)},n.prototype.handleMouseDown=function(t){this.mouseused_=!0},n}(Vr);qr.prototype.controlText_="Play Video",Xt.registerComponent("BigPlayButton",qr);var Wr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.controlText(e&&e.controlText||i.localize("Close")),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-close-button "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.trigger({type:"close",bubbles:!1})},n}(Vr);Xt.registerComponent("CloseButton",Wr);var zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"play",i.handlePlay),i.on(t,"pause",i.handlePause),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-play-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleSeeked=function(t){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(t):this.handlePlay(t)},n.prototype.handlePlay=function(t){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},n.prototype.handlePause=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},n.prototype.handleEnded=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},n}(Vr);zr.prototype.controlText_="Play",Xt.registerComponent("PlayToggle",zr);var Gr=function(t,e){t=t<0?0:t;var i=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600),s=Math.floor(e/60%60),a=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=i="-"),(n=0<n||0<a?n+":":"")+(r=((n||10<=s)&&r<10?"0"+r:r)+":")+(i=i<10?"0"+i:i)},Xr=Gr;function Yr(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t;return Xr(t,e)}var $r=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.throttledUpdateContent=xt(Ot(i,i.updateContent),25),i.on(t,"timeupdate",i.throttledUpdateContent),i}return _(n,r),n.prototype.createEl=function(t){var e=this.buildCSSClass(),i=r.prototype.createEl.call(this,"div",{className:e+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text">'+this.localize(this.labelText_)+" </span>"});return this.contentEl_=M("span",{className:e+"-display"},{"aria-live":"off"}),this.updateTextNode_(),i.appendChild(this.contentEl_),i},n.prototype.dispose=function(){this.contentEl_=null,this.textNode_=null,r.prototype.dispose.call(this)},n.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild);this.textNode_=p.createTextNode(this.formattedTime_||this.formatTime_(0)),this.contentEl_.appendChild(this.textNode_)}},n.prototype.formatTime_=function(t){return Yr(t)},n.prototype.updateFormattedTime_=function(t){var e=this.formatTime_(t);e!==this.formattedTime_&&(this.formattedTime_=e,this.requestAnimationFrame(this.updateTextNode_))},n.prototype.updateContent=function(t){},n}(Xt);$r.prototype.labelText_="Time",$r.prototype.controlText_="Time",Xt.registerComponent("TimeDisplay",$r);var Kr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-current-time"},n.prototype.updateContent=function(t){var e=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.updateFormattedTime_(e)},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},n}($r);Kr.prototype.labelText_="Current Time",Kr.prototype.controlText_="Current Time",Xt.registerComponent("CurrentTimeDisplay",Kr);var Qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.updateContent),i.on(t,"loadedmetadata",i.throttledUpdateContent),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-duration"},n.prototype.updateContent=function(t){var e=this.player_.duration();e&&this.duration_!==e&&(this.duration_=e,this.updateFormattedTime_(e))},n}($r);Qr.prototype.labelText_="Duration",Qr.prototype.controlText_="Duration",Xt.registerComponent("DurationDisplay",Qr);var Jr=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},e}(Xt);Xt.registerComponent("TimeDivider",Jr);var Zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.throttledUpdateContent),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-remaining-time"},n.prototype.formatTime_=function(t){return"-"+r.prototype.formatTime_.call(this,t)},n.prototype.updateContent=function(t){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(0)},n}($r);Zr.prototype.labelText_="Remaining Time",Zr.prototype.controlText_="Remaining Time",Xt.registerComponent("RemainingTimeDisplay",Zr);var tn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateShowing(),i.on(i.player(),"durationchange",i.updateShowing),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=M("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+" </span>"+this.localize("LIVE")},{"aria-live":"off"}),t.appendChild(this.contentEl_),t},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.updateShowing=function(t){this.player().duration()===1/0?this.show():this.hide()},n}(Xt);Xt.registerComponent("LiveDisplay",tn);var en=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.bar=i.getChild(i.options_.barName),i.vertical(!!i.options_.vertical),i.enable(),i}return _(n,r),n.prototype.enabled=function(){return this.enabled_},n.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},n.prototype.disable=function(){if(this.enabled()){var t=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},n.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return e.className=e.className+" vjs-slider",e=C({tabIndex:0},e),i=C({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},i),r.prototype.createEl.call(this,t,e,i)},n.prototype.handleMouseDown=function(t){var e=this.bar.el_.ownerDocument;t.preventDefault(),X(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(e,"mousemove",this.handleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchmove",this.handleMouseMove),this.on(e,"touchend",this.handleMouseUp),this.handleMouseMove(t)},n.prototype.handleMouseMove=function(t){},n.prototype.handleMouseUp=function(){var t=this.bar.el_.ownerDocument;Y(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.update()},n.prototype.update=function(){if(this.el_){var t=this.getPercent(),e=this.bar;if(e){("number"!=typeof t||t!=t||t<0||t===1/0)&&(t=0);var i=(100*t).toFixed(2)+"%",r=e.el().style;return this.vertical()?r.height=i:r.width=i,t}}},n.prototype.calculateDistance=function(t){var e=Q(this.el_,t);return this.vertical()?e.y:e.x},n.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepBack()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepForward())},n.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleClick=function(t){t.stopImmediatePropagation(),t.preventDefault()},n.prototype.vertical=function(t){if(void 0===t)return this.vertical_||!1;this.vertical_=!!t,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},n}(Xt);Xt.registerComponent("Slider",en);var rn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.partEls_=[],i.on(t,"progress",i.update),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},n.prototype.dispose=function(){this.partEls_=null,r.prototype.dispose.call(this)},n.prototype.update=function(t){var e=this.player_.buffered(),i=this.player_.duration(),r=this.player_.bufferedEnd(),n=this.partEls_,s=function(t,e){var i=t/e||0;return 100*(1<=i?1:i)+"%"};this.el_.style.width=s(r,i);for(var a=0;a<e.length;a++){var o=e.start(a),u=e.end(a),l=n[a];l||(l=this.el_.appendChild(M()),n[a]=l),l.style.left=s(o,r),l.style.width=s(u-o,r)}for(var c=n.length;c>e.length;c--)this.el_.removeChild(n[c-1]);n.length=e.length},n}(Xt);Xt.registerComponent("LoadProgressBar",rn);var nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},e.prototype.update=function(t,e,i){var r=$(this.el_),n=$(this.player_.el()),s=t.width*e;if(n&&r){var a=t.left-n.left+s,o=t.width-s+(n.right-t.right),u=r.width/2;a<u?u+=u-a:o<u&&(u=o),u<0?u=0:u>r.width&&(u=r.width),this.el_.style.right="-"+u+"px",U(this.el_,i)}},e}(Xt);Xt.registerComponent("TimeTooltip",nn);var sn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},e.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=Yr(n.player_.scrubbing()?n.player_.getCache().currentTime:n.player_.currentTime(),n.player_.duration()),e=n.getChild("timeTooltip");e&&e.update(i,r,t)})},e}(Xt);sn.prototype.options_={children:[]},ne||ae||sn.prototype.options_.children.push("timeTooltip"),Xt.registerComponent("PlayProgressBar",sn);var an=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update=xt(Ot(i,i.update),25),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},n.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=n.player_.duration(),e=Yr(r*t,t);n.el_.style.left=i.width*r+"px",n.getChild("timeTooltip").update(i,r,e)})},n}(Xt);an.prototype.options_={children:["timeTooltip"]},Xt.registerComponent("MouseTimeDisplay",an);var on=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.setEventHandlers_(),i}return _(n,r),n.prototype.setEventHandlers_=function(){var t=this;this.update=xt(Ot(this,this.update),30),this.on(this.player_,"timeupdate",this.update),this.on(this.player_,"ended",this.handleEnded),this.updateInterval=null,this.on(this.player_,["playing"],function(){t.clearInterval(t.updateInterval),t.updateInterval=t.setInterval(function(){t.requestAnimationFrame(function(){t.update()})},30)}),this.on(this.player_,["ended","pause","waiting"],function(){t.clearInterval(t.updateInterval)}),this.on(this.player_,["timeupdate","ended"],this.update)},n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},n.prototype.update_=function(t,e){var i=this.player_.duration();this.el_.setAttribute("aria-valuenow",(100*e).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[Yr(t,i),Yr(i,i)],"{1} of {2}")),this.bar.update($(this.el_),e)},n.prototype.update=function(t){var e=r.prototype.update.call(this);return this.update_(this.getCurrentTime_(),e),e},n.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},n.prototype.handleEnded=function(t){this.update_(this.player_.duration(),1)},n.prototype.getPercent=function(){var t=this.getCurrentTime_()/this.player_.duration();return 1<=t?1:t||0},n.prototype.handleMouseDown=function(t){rt(t)&&(t.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),r.prototype.handleMouseDown.call(this,t))},n.prototype.handleMouseMove=function(t){if(rt(t)){var e=this.calculateDistance(t)*this.player_.duration();e===this.player_.duration()&&(e-=.1),this.player_.currentTime(e)}},n.prototype.enable=function(){r.prototype.enable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.show()},n.prototype.disable=function(){r.prototype.disable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.hide()},n.prototype.handleMouseUp=function(t){r.prototype.handleMouseUp.call(this,t),t&&t.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying&&Ie(this.player_.play())},n.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},n.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},n.prototype.handleAction=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.handleAction(t)):r.prototype.handleKeyPress&&r.prototype.handleKeyPress.call(this,t)},n}(en);on.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},ne||ae||on.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),on.prototype.playerEvent="timeupdate",Xt.registerComponent("SeekBar",on);var un=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.handleMouseMove=xt(Ot(i,i.handleMouseMove),25),i.throttledHandleMouseSeek=xt(Ot(i,i.handleMouseSeek),25),i.enable(),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},n.prototype.handleMouseMove=function(t){var e=this.getChild("seekBar");if(e){var i=e.getChild("mouseTimeDisplay"),r=e.el(),n=$(r),s=Q(r,t).x;1<s?s=1:s<0&&(s=0),i&&i.update(n,s)}},n.prototype.handleMouseSeek=function(t){var e=this.getChild("seekBar");e&&e.handleMouseMove(t)},n.prototype.enabled=function(){return this.enabled_},n.prototype.disable=function(){this.children().forEach(function(t){return t.disable&&t.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},n.prototype.enable=function(){this.children().forEach(function(t){return t.enable&&t.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseDown(t),this.on(e,"mousemove",this.throttledHandleMouseSeek),this.on(e,"touchmove",this.throttledHandleMouseSeek),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseUp(t),this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n}(Xt);un.prototype.options_={children:["seekBar"]},Xt.registerComponent("ProgressControl",un);var ln=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"fullscreenchange",i.handleFullscreenChange),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleFullscreenChange=function(t){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},n.prototype.handleClick=function(t){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},n}(Vr);ln.prototype.controlText_="Fullscreen",Xt.registerComponent("FullscreenToggle",ln);var cn=function(t,e){e.tech_&&!e.tech_.featuresVolumeControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresVolumeControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},hn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},e}(Xt);Xt.registerComponent("VolumeLevel",hn);var dn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on("slideractive",i.updateLastVolume_),i.on(t,"volumechange",i.updateARIAAttributes),t.ready(function(){return i.updateARIAAttributes()}),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},n.prototype.handleMouseDown=function(t){rt(t)&&r.prototype.handleMouseDown.call(this,t)},n.prototype.handleMouseMove=function(t){rt(t)&&(this.checkMuted(),this.player_.volume(this.calculateDistance(t)))},n.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},n.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},n.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},n.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},n.prototype.updateARIAAttributes=function(t){var e=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",e),this.el_.setAttribute("aria-valuetext",e+"%")},n.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},n.prototype.updateLastVolume_=function(){var t=this,e=this.player_.volume();this.one("sliderinactive",function(){0===t.player_.volume()&&t.player_.lastVolume_(e)})},n}(en);dn.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},dn.prototype.playerEvent="volumechange",Xt.registerComponent("VolumeBar",dn);var pn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),e.vertical=e.vertical||!1,("undefined"==typeof e.volumeBar||w(e.volumeBar))&&(e.volumeBar=e.volumeBar||{},e.volumeBar.vertical=e.vertical);var i=b(this,r.call(this,t,e));return cn(i,t),i.throttledHandleMouseMove=xt(Ot(i,i.handleMouseMove),25),i.on("mousedown",i.handleMouseDown),i.on("touchstart",i.handleMouseDown),i.on(i.volumeBar,["focus","slideractive"],function(){i.volumeBar.addClass("vjs-slider-active"),i.addClass("vjs-slider-active"),i.trigger("slideractive")}),i.on(i.volumeBar,["blur","sliderinactive"],function(){i.volumeBar.removeClass("vjs-slider-active"),i.removeClass("vjs-slider-active"),i.trigger("sliderinactive")}),i}return _(n,r),n.prototype.createEl=function(){var t="vjs-volume-horizontal";return this.options_.vertical&&(t="vjs-volume-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+t})},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument;this.on(e,"mousemove",this.throttledHandleMouseMove),this.on(e,"touchmove",this.throttledHandleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseMove),this.off(e,"touchmove",this.throttledHandleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseMove=function(t){this.volumeBar.handleMouseMove(t)},n}(Xt);pn.prototype.options_={children:["volumeBar"]},Xt.registerComponent("VolumeControl",pn);var fn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return cn(i,t),i.on(t,["loadstart","volumechange"],i.update),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-mute-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){var e=this.player_.volume(),i=this.player_.lastVolume_();if(0===e){var r=i<.1?.1:i;this.player_.volume(r),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},n.prototype.update=function(t){this.updateIcon_(),this.updateControlText_()},n.prototype.updateIcon_=function(){var t=this.player_.volume(),e=3;0===t||this.player_.muted()?e=0:t<.33?e=1:t<.67&&(e=2);for(var i=0;i<4;i++)F(this.el_,"vjs-vol-"+i);j(this.el_,"vjs-vol-"+e)},n.prototype.updateControlText_=function(){var t=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute";this.controlText()!==t&&this.controlText(t)},n}(Vr);fn.prototype.controlText_="Mute",Xt.registerComponent("MuteToggle",fn);var mn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),"undefined"!=typeof e.inline?e.inline=e.inline:e.inline=!0,("undefined"==typeof e.volumeControl||w(e.volumeControl))&&(e.volumeControl=e.volumeControl||{},e.volumeControl.vertical=!e.inline);var i=b(this,r.call(this,t,e));return cn(i,t),i.on(i.volumeControl,["slideractive"],i.sliderActive_),i.on(i.volumeControl,["sliderinactive"],i.sliderInactive_),i}return _(n,r),n.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},n.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},n.prototype.createEl=function(){var t="vjs-volume-panel-horizontal";return this.options_.inline||(t="vjs-volume-panel-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+t})},n}(Xt);mn.prototype.options_={children:["muteToggle","volumeControl"]},Xt.registerComponent("VolumePanel",mn);var gn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return e&&(i.menuButton_=e.menuButton),i.focusedChild_=-1,i.on("keydown",i.handleKeyPress),i}return _(n,r),n.prototype.addItem=function(e){this.addChild(e),e.on("click",Ot(this,function(t){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==e.name()&&this.menuButton_.focus())}))},n.prototype.createEl=function(){var t=this.options_.contentElType||"ul";this.contentEl_=M(t,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var e=r.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return e.appendChild(this.contentEl_),_t(e,"click",function(t){t.preventDefault(),t.stopImmediatePropagation()}),e},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepForward()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepBack())},n.prototype.stepForward=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_+1),this.focus(t)},n.prototype.stepBack=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_-1),this.focus(t)},n.prototype.focus=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=this.children().slice();e.length&&e[0].className&&/vjs-menu-title/.test(e[0].className)&&e.shift(),0<e.length&&(t<0?t=0:t>=e.length&&(t=e.length-1),e[this.focusedChild_=t].el_.focus())},n}(Xt);Xt.registerComponent("Menu",gn);var yn=function(n){function s(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,s);var i=b(this,n.call(this,t,e));i.menuButton_=new Vr(t,e),i.menuButton_.controlText(i.controlText_),i.menuButton_.el_.setAttribute("aria-haspopup","true");var r=Vr.prototype.buildCSSClass();return i.menuButton_.el_.className=i.buildCSSClass()+" "+r,i.menuButton_.removeClass("vjs-control"),i.addChild(i.menuButton_),i.update(),i.enabled_=!0,i.on(i.menuButton_,"tap",i.handleClick),i.on(i.menuButton_,"click",i.handleClick),i.on(i.menuButton_,"focus",i.handleFocus),i.on(i.menuButton_,"blur",i.handleBlur),i.on("keydown",i.handleSubmenuKeyPress),i}return _(s,n),s.prototype.update=function(){var t=this.createMenu();this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=t,this.addChild(t),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},s.prototype.createMenu=function(){var t=new gn(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var e=M("li",{className:"vjs-menu-title",innerHTML:zt(this.options_.title),tabIndex:-1});this.hideThreshold_+=1,t.children_.unshift(e),N(e,t.contentEl())}if(this.items=this.createItems(),this.items)for(var i=0;i<this.items.length;i++)t.addItem(this.items[i]);return t},s.prototype.createItems=function(){},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},s.prototype.buildWrapperCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+Vr.prototype.buildCSSClass()+" "+n.prototype.buildCSSClass.call(this)},s.prototype.buildCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+n.prototype.buildCSSClass.call(this)},s.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el();return this.menuButton_.controlText(t,e)},s.prototype.handleClick=function(t){this.one(this.menu.contentEl(),"mouseleave",Ot(this,function(t){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},s.prototype.focus=function(){this.menuButton_.focus()},s.prototype.blur=function(){this.menuButton_.blur()},s.prototype.handleFocus=function(){_t(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleBlur=function(){bt(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleKeyPress=function(t){27===t.which||9===t.which?(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus())):38!==t.which&&40!==t.which||this.buttonPressed_||(this.pressButton(),t.preventDefault())},s.prototype.handleSubmenuKeyPress=function(t){27!==t.which&&9!==t.which||(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus()))},s.prototype.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),ne&&D())return;this.menu.focus()}},s.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},s.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},s.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},s}(Xt);Xt.registerComponent("MenuButton",yn);var vn=function(s){function a(t,e){y(this,a);var i=e.tracks,r=b(this,s.call(this,t,e));if(r.items.length<=1&&r.hide(),!i)return b(r);var n=Ot(r,r.update);return i.addEventListener("removetrack",n),i.addEventListener("addtrack",n),r.player_.on("ready",n),r.player_.on("dispose",function(){i.removeEventListener("removetrack",n),i.removeEventListener("addtrack",n)}),r}return _(a,s),a}(yn);Xt.registerComponent("TrackButton",vn);var _n=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.selectable=e.selectable,i.isSelected_=e.selected||!1,i.selected(i.isSelected_),i.selectable?i.el_.setAttribute("role","menuitemcheckbox"):i.el_.setAttribute("role","menuitem"),i}return _(n,r),n.prototype.createEl=function(t,e,i){return this.nonIconControl=!0,r.prototype.createEl.call(this,"li",C({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},e),i)},n.prototype.handleClick=function(t){this.selected(!0)},n.prototype.selected=function(t){this.selectable&&(t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},n}(Rr);Xt.registerComponent("MenuItem",_n);var bn=function(u){function l(t,e){y(this,l);var i=e.track,r=t.textTracks();e.label=i.label||i.language||"Unknown",e.selected="showing"===i.mode;var n=b(this,u.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)},a=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleSelectedLanguageChange.apply(n,e)};if(t.on(["loadstart","texttrackchange"],s),r.addEventListener("change",s),r.addEventListener("selectedlanguagechange",a),n.on("dispose",function(){t.off(["loadstart","texttrackchange"],s),r.removeEventListener("change",s),r.removeEventListener("selectedlanguagechange",a)}),void 0===r.onchange){var o=void 0;n.on(["tap","click"],function(){if("object"!==v(g.Event))try{o=new g.Event("change")}catch(t){}o||(o=p.createEvent("Event")).initEvent("change",!0,!0),r.dispatchEvent(o)})}return n.handleTracksChange(),n}return _(l,u),l.prototype.handleClick=function(t){var e=this.track.kind,i=this.track.kinds,r=this.player_.textTracks();if(i||(i=[e]),u.prototype.handleClick.call(this,t),r)for(var n=0;n<r.length;n++){var s=r[n];s===this.track&&-1<i.indexOf(s.kind)?"showing"!==s.mode&&(s.mode="showing"):"disabled"!==s.mode&&(s.mode="disabled")}},l.prototype.handleTracksChange=function(t){var e="showing"===this.track.mode;e!==this.isSelected_&&this.selected(e)},l.prototype.handleSelectedLanguageChange=function(t){if("showing"===this.track.mode){var e=this.player_.cache_.selectedLanguage;if(e&&e.enabled&&e.language===this.track.language&&e.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},l.prototype.dispose=function(){this.track=null,u.prototype.dispose.call(this)},l}(_n);Xt.registerComponent("TextTrackMenuItem",bn);var Tn=function(i){function r(t,e){return y(this,r),e.track={player:t,kind:e.kind,kinds:e.kinds,default:!1,mode:"disabled"},e.kinds||(e.kinds=[e.kind]),e.label?e.track.label=e.label:e.track.label=e.kinds.join(" and ")+" off",e.selectable=!0,b(this,i.call(this,t,e))}return _(r,i),r.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<this.options_.kinds.indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i!==this.isSelected_&&this.selected(i)},r.prototype.handleSelectedLanguageChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<["captions","descriptions","subtitles"].indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i&&(this.player_.cache_.selectedLanguage={enabled:!1})},r}(bn);Xt.registerComponent("OffTextTrackMenuItem",Tn);var Sn=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.textTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:bn,i=void 0;this.label_&&(i=this.label_+" off"),t.push(new Tn(this.player_,{kinds:this.kinds_,kind:this.kind_,label:i})),this.hideThreshold_+=1;var r=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var n=0;n<r.length;n++){var s=r[n];if(-1<this.kinds_.indexOf(s.kind)){var a=new e(this.player_,{track:s,selectable:!0});a.addClass("vjs-"+s.kind+"-menu-item"),t.push(a)}}return t},r}(vn);Xt.registerComponent("TextTrackButton",Sn);var kn=function(a){function o(t,e){y(this,o);var i=e.track,r=e.cue,n=t.currentTime();e.selectable=!0,e.label=r.text,e.selected=r.startTime<=n&&n<r.endTime;var s=b(this,a.call(this,t,e));return s.track=i,s.cue=r,i.addEventListener("cuechange",Ot(s,s.update)),s}return _(o,a),o.prototype.handleClick=function(t){a.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},o.prototype.update=function(t){var e=this.cue,i=this.player_.currentTime();this.selected(e.startTime<=i&&i<e.endTime)},o}(_n);Xt.registerComponent("ChaptersTrackMenuItem",kn);var Cn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.update=function(t){this.track_&&(!t||"addtrack"!==t.type&&"removetrack"!==t.type)||this.setTrack(this.findChaptersTrack()),r.prototype.update.call(this)},n.prototype.setTrack=function(t){if(this.track_!==t){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var e=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);e&&e.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=t,this.track_){this.track_.mode="hidden";var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);i&&i.addEventListener("load",this.updateHandler_)}}},n.prototype.findChaptersTrack=function(){for(var t=this.player_.textTracks()||[],e=t.length-1;0<=e;e--){var i=t[e];if(i.kind===this.kind_)return i}},n.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(zt(this.kind_))},n.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),r.prototype.createMenu.call(this)},n.prototype.createItems=function(){var t=[];if(!this.track_)return t;var e=this.track_.cues;if(!e)return t;for(var i=0,r=e.length;i<r;i++){var n=e[i],s=new kn(this.player_,{track:this.track_,cue:n});t.push(s)}return t},n}(Sn);Cn.prototype.kind_="chapters",Cn.prototype.controlText_="Chapters",Xt.registerComponent("ChaptersButton",Cn);var En=function(a){function o(t,e,i){y(this,o);var r=b(this,a.call(this,t,e,i)),n=t.textTracks(),s=Ot(r,r.handleTracksChange);return n.addEventListener("change",s),r.on("dispose",function(){n.removeEventListener("change",s)}),r}return _(o,a),o.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!1,r=0,n=e.length;r<n;r++){var s=e[r];if(s.kind!==this.kind_&&"showing"===s.mode){i=!0;break}}i?this.disable():this.enable()},o.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildCSSClass.call(this)},o.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildWrapperCSSClass.call(this)},o}(Sn);En.prototype.kind_="descriptions",En.prototype.controlText_="Descriptions",Xt.registerComponent("DescriptionsButton",En);var wn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildWrapperCSSClass.call(this)},n}(Sn);wn.prototype.kind_="subtitles",wn.prototype.controlText_="Subtitles",Xt.registerComponent("SubtitlesButton",wn);var An=function(r){function n(t,e){y(this,n),e.track={player:t,kind:e.kind,label:e.kind+" settings",selectable:!1,default:!1,mode:"disabled"},e.selectable=!1,e.name="CaptionSettingsMenuItem";var i=b(this,r.call(this,t,e));return i.addClass("vjs-texttrack-settings"),i.controlText(", opens "+e.kind+" settings dialog"),i}return _(n,r),n.prototype.handleClick=function(t){this.player().getChild("textTrackSettings").open()},n}(bn);Xt.registerComponent("CaptionSettingsMenuItem",An);var Ln=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-captions-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new An(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),r.prototype.createItems.call(this,t)},n}(Sn);Ln.prototype.kind_="captions",Ln.prototype.controlText_="Captions",Xt.registerComponent("CaptionsButton",Ln);var Pn=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(t,e,i){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"captions"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),r+="</span>",n.prototype.createEl.call(this,t,C({innerHTML:r},e),i)},t}(bn);Xt.registerComponent("SubsCapsMenuItem",Pn);var On=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.label_="subtitles",-1<["en","en-us","en-ca","fr-ca"].indexOf(i.player_.language_)&&(i.label_="captions"),i.menuButton_.controlText(zt(i.label_)),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new An(this.player_,{kind:this.label_})),this.hideThreshold_+=1),t=r.prototype.createItems.call(this,t,Pn)},n}(Sn);On.prototype.kinds_=["captions","subtitles"],On.prototype.controlText_="Subtitles",Xt.registerComponent("SubsCapsButton",On);var xn=function(a){function o(t,e){y(this,o);var i=e.track,r=t.audioTracks();e.label=i.label||i.language||"Unknown",e.selected=i.enabled;var n=b(this,a.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)};return r.addEventListener("change",s),n.on("dispose",function(){r.removeEventListener("change",s)}),n}return _(o,a),o.prototype.handleClick=function(t){var e=this.player_.audioTracks();a.prototype.handleClick.call(this,t);for(var i=0;i<e.length;i++){var r=e[i];r.enabled=r===this.track}},o.prototype.handleTracksChange=function(t){this.selected(this.track.enabled)},o}(_n);Xt.registerComponent("AudioTrackMenuItem",xn);var In=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.audioTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.buildCSSClass=function(){return"vjs-audio-button "+i.prototype.buildCSSClass.call(this)},r.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+i.prototype.buildWrapperCSSClass.call(this)},r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];this.hideThreshold_=1;for(var e=this.player_.audioTracks(),i=0;i<e.length;i++){var r=e[i];t.push(new xn(this.player_,{track:r,selectable:!0}))}return t},r}(vn);In.prototype.controlText_="Audio Track",Xt.registerComponent("AudioTrackButton",In);var Dn=function(s){function a(t,e){y(this,a);var i=e.rate,r=parseFloat(i,10);e.label=i,e.selected=1===r,e.selectable=!0;var n=b(this,s.call(this,t,e));return n.label=i,n.rate=r,n.on(t,"ratechange",n.update),n}return _(a,s),a.prototype.handleClick=function(t){s.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},a.prototype.update=function(t){this.selected(this.player().playbackRate()===this.rate)},a}(_n);Dn.prototype.contentElType="button",Xt.registerComponent("PlaybackRateMenuItem",Dn);var Rn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateVisibility(),i.updateLabel(),i.on(t,"loadstart",i.updateVisibility),i.on(t,"ratechange",i.updateLabel),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this);return this.labelEl_=M("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),t.appendChild(this.labelEl_),t},n.prototype.dispose=function(){this.labelEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createMenu=function(){var t=new gn(this.player()),e=this.playbackRates();if(e)for(var i=e.length-1;0<=i;i--)t.addChild(new Dn(this.player(),{rate:e[i]+"x"}));return t},n.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},n.prototype.handleClick=function(t){for(var e=this.player().playbackRate(),i=this.playbackRates(),r=i[0],n=0;n<i.length;n++)if(i[n]>e){r=i[n];break}this.player().playbackRate(r)},n.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},n.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&0<this.playbackRates().length},n.prototype.updateVisibility=function(t){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},n.prototype.updateLabel=function(t){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},n}(yn);Rn.prototype.controlText_="Playback Rate",Xt.registerComponent("PlaybackRateMenuButton",Rn);var Mn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.buildCSSClass=function(){return"vjs-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},e}(Xt);Xt.registerComponent("Spacer",Mn);var Un=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+e.prototype.buildCSSClass.call(this)},t.prototype.createEl=function(){var t=e.prototype.createEl.call(this,{className:this.buildCSSClass()});return t.innerHTML=" ",t},t}(Mn);Xt.registerComponent("CustomControlSpacer",Un);var Nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},e}(Xt);Nn.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},Xt.registerComponent("ControlBar",Nn);var Bn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"error",i.open),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-error-display "+r.prototype.buildCSSClass.call(this)},n.prototype.content=function(){var t=this.player().error();return t?this.localize(t.message):""},n}(Ne);Bn.prototype.options_=Gt(Ne.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),Xt.registerComponent("ErrorDisplay",Bn);var jn="vjs-text-track-settings",Fn=["#000","Black"],Hn=["#00F","Blue"],Vn=["#0FF","Cyan"],qn=["#0F0","Green"],Wn=["#F0F","Magenta"],zn=["#F00","Red"],Gn=["#FFF","White"],Xn=["#FF0","Yellow"],Yn=["1","Opaque"],$n=["0.5","Semi-Transparent"],Kn=["0","Transparent"],Qn={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Fn,Gn,zn,qn,Hn,Xn,Wn,Vn]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[Yn,$n,Kn]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Gn,Fn,zn,qn,Hn,Xn,Wn,Vn]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(t){return"1.00"===t?null:Number(t)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[Yn,$n]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[Kn,$n,Yn]}};function Jn(t,e){if(e&&(t=e(t)),t&&"none"!==t)return t}Qn.windowColor.options=Qn.backgroundColor.options;var Zn=function(r){function n(t,e){y(this,n),e.temporary=!1;var i=b(this,r.call(this,t,e));return i.updateDisplay=Ot(i,i.updateDisplay),i.fill(),i.hasBeenOpened_=i.hasBeenFilled_=!0,i.endDialog=M("p",{className:"vjs-control-text",textContent:i.localize("End of dialog window.")}),i.el().appendChild(i.endDialog),i.setDefaults(),void 0===e.persistTextTrackSettings&&(i.options_.persistTextTrackSettings=i.options_.playerOptions.persistTextTrackSettings),i.on(i.$(".vjs-done-button"),"click",function(){i.saveSettings(),i.close()}),i.on(i.$(".vjs-default-button"),"click",function(){i.setDefaults(),i.updateDisplay()}),k(Qn,function(t){i.on(i.$(t.selector),"change",i.updateDisplay)}),i.options_.persistTextTrackSettings&&i.restoreSettings(),i}return _(n,r),n.prototype.dispose=function(){this.endDialog=null,r.prototype.dispose.call(this)},n.prototype.createElSelect_=function(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"label",n=Qn[t],s=n.id.replace("%s",this.id_),a=[e,s].join(" ").trim();return["<"+r+' id="'+s+'" class="'+("label"===r?"vjs-label":"")+'">',this.localize(n.label),"</"+r+">",'<select aria-labelledby="'+a+'">'].concat(n.options.map(function(t){var e=s+"-"+t[1].replace(/\W+/g,"");return['<option id="'+e+'" value="'+t[0]+'" ','aria-labelledby="'+a+" "+e+'">',i.localize(t[1]),"</option>"].join("")})).concat("</select>").join("")},n.prototype.createElFgColor_=function(){var t="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",t),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElBgColor_=function(){var t="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",t),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElWinColor_=function(){var t="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",t),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElColors_=function(){return M("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},n.prototype.createElFont_=function(){return M("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},n.prototype.createElControls_=function(){var t=this.localize("restore all settings to the default values");return M("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+t+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+t+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},n.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},n.prototype.label=function(){return this.localize("Caption Settings Dialog")},n.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},n.prototype.buildCSSClass=function(){return r.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},n.prototype.getValues=function(){var a=this;return function(i,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return S(i).reduce(function(t,e){return r(t,i[e],e)},t)}(Qn,function(t,e,i){var r,n,s=(r=a.$(e.selector),n=e.parser,Jn(r.options[r.options.selectedIndex].value,n));return void 0!==s&&(t[i]=s),t},{})},n.prototype.setValues=function(i){var r=this;k(Qn,function(t,e){!function(t,e,i){if(e)for(var r=0;r<t.options.length;r++)if(Jn(t.options[r].value,i)===e){t.selectedIndex=r;break}}(r.$(t.selector),i[e],t.parser)})},n.prototype.setDefaults=function(){var i=this;k(Qn,function(t){var e=t.hasOwnProperty("default")?t.default:0;i.$(t.selector).selectedIndex=e})},n.prototype.restoreSettings=function(){var t=void 0;try{t=JSON.parse(g.localStorage.getItem(jn))}catch(t){f.warn(t)}t&&this.setValues(t)},n.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var t=this.getValues();try{Object.keys(t).length?g.localStorage.setItem(jn,JSON.stringify(t)):g.localStorage.removeItem(jn)}catch(t){f.warn(t)}}},n.prototype.updateDisplay=function(){var t=this.player_.getChild("textTrackDisplay");t&&t.updateDisplay()},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(p,"keydown",this.handleKeyDown);var t=this.player_.controlBar,e=t&&t.subsCapsButton,i=t&&t.captionsButton;e?e.focus():i&&i.focus()},n}(Ne);Xt.registerComponent("TextTrackSettings",Zn);var ts=function(s){function a(t,e){y(this,a);var i=e.ResizeObserver||g.ResizeObserver;null===e.ResizeObserver&&(i=!1);var r=Gt({createEl:!i},e),n=b(this,s.call(this,t,r));return n.ResizeObserver=e.ResizeObserver||g.ResizeObserver,n.loadListener_=null,n.resizeObserver_=null,n.debouncedHandler_=It(function(){n.resizeHandler()},100,!1,t),i?(n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_),n.resizeObserver_.observe(t.el())):(n.loadListener_=function(){n.el_.contentWindow&&_t(n.el_.contentWindow,"resize",n.debouncedHandler_),n.off("load",n.loadListener_)},n.on("load",n.loadListener_)),n}return _(a,s),a.prototype.createEl=function(){return s.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager"})},a.prototype.resizeHandler=function(){this.player_.trigger("playerresize")},a.prototype.dispose=function(){this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.el_&&this.el_.contentWindow&&bt(this.el_.contentWindow,"resize",this.debouncedHandler_),this.loadListener_&&this.off("load",this.loadListener_),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null},a}(Xt);Xt.registerComponent("ResizeManager",ts);var es=function(t){var e=t.el();if(e.hasAttribute("src"))return t.triggerSourceset(e.src),!0;var i=t.$$("source"),r=[],n="";if(!i.length)return!1;for(var s=0;s<i.length;s++){var a=i[s].src;a&&-1===r.indexOf(a)&&r.push(a)}return!!r.length&&(1===r.length&&(n=r[0]),t.triggerSourceset(n),!0)},is=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(t){var e=p.createElement(this.nodeName.toLowerCase());e.innerHTML=t;for(var i=p.createDocumentFragment();e.childNodes.length;)i.appendChild(e.childNodes[0]);return this.innerText="",g.Element.prototype.appendChild.call(this,i),this.innerHTML}}),rs=function(t,e){for(var i={},r=0;r<t.length&&!((i=Object.getOwnPropertyDescriptor(t[r],e))&&i.set&&i.get);r++);return i.enumerable=!0,i.configurable=!0,i},ns=function(s){var a=s.el();if(!a.resetSourceWatch_){var e={},t=rs([s.el(),g.HTMLMediaElement.prototype,g.Element.prototype,is],"innerHTML"),i=function(n){return function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=n.apply(a,e);return es(s),r}};["append","appendChild","insertAdjacentHTML"].forEach(function(t){a[t]&&(e[t]=a[t],a[t]=i(e[t]))}),Object.defineProperty(a,"innerHTML",Gt(t,{set:i(t.set)})),a.resetSourceWatch_=function(){a.resetSourceWatch_=null,Object.keys(e).forEach(function(t){a[t]=e[t]}),Object.defineProperty(a,"innerHTML",t)},s.one("sourceset",a.resetSourceWatch_)}},ss=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?Ze(g.Element.prototype.getAttribute.call(this,"src")):""},set:function(t){return g.Element.prototype.setAttribute.call(this,"src",t),t}}),as=function(r){if(r.featuresSourceset){var n=r.el();if(!n.resetSourceset_){var i=rs([r.el(),g.HTMLMediaElement.prototype,ss],"src"),s=n.setAttribute,e=n.load;Object.defineProperty(n,"src",Gt(i,{set:function(t){var e=i.set.call(n,t);return r.triggerSourceset(n.src),e}})),n.setAttribute=function(t,e){var i=s.call(n,t,e);return/src/i.test(t)&&r.triggerSourceset(n.src),i},n.load=function(){var t=e.call(n);return es(r)||(r.triggerSourceset(""),ns(r)),t},n.currentSrc?r.triggerSourceset(n.currentSrc):es(r)||ns(r),n.resetSourceset_=function(){n.resetSourceset_=null,n.load=e,n.setAttribute=s,Object.defineProperty(n,"src",i),n.resetSourceWatch_&&n.resetSourceWatch_()}}}},os=h(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),us=function(c){function h(t,e){y(this,h);var i=b(this,c.call(this,t,e)),r=t.source,n=!1;if(r&&(i.el_.currentSrc!==r.src||t.tag&&3===t.tag.initNetworkState_)?i.setSource(r):i.handleLateInit_(i.el_),t.enableSourceset&&i.setupSourcesetHandling_(),i.el_.hasChildNodes()){for(var s=i.el_.childNodes,a=s.length,o=[];a--;){var u=s[a];"track"===u.nodeName.toLowerCase()&&(i.featuresNativeTextTracks?(i.remoteTextTrackEls().addTrackElement_(u),i.remoteTextTracks().addTrack(u.track),i.textTracks().addTrack(u.track),n||i.el_.hasAttribute("crossorigin")||!ei(u.src)||(n=!0)):o.push(u))}for(var l=0;l<o.length;l++)i.el_.removeChild(o[l])}return i.proxyNativeTracks_(),i.featuresNativeTextTracks&&n&&f.warn(m(os)),i.restoreMetadataTracksInIOSNativePlayer_(),(ge||ie||ue)&&!0===t.nativeControlsForTouch&&i.setControls(!0),i.proxyWebkitFullscreen_(),i.triggerReady(),i}return _(h,c),h.prototype.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),h.disposeMediaElement(this.el_),this.options_=null,c.prototype.dispose.call(this)},h.prototype.setupSourcesetHandling_=function(){as(this)},h.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var r=this.textTracks(),n=void 0,t=function(){n=[];for(var t=0;t<r.length;t++){var e=r[t];"metadata"===e.kind&&n.push({track:e,storedMode:e.mode})}};t(),r.addEventListener("change",t),this.on("dispose",function(){return r.removeEventListener("change",t)});var e=function t(){for(var e=0;e<n.length;e++){var i=n[e];"disabled"===i.track.mode&&i.track.mode!==i.storedMode&&(i.track.mode=i.storedMode)}r.removeEventListener("change",t)};this.on("webkitbeginfullscreen",function(){r.removeEventListener("change",t),r.removeEventListener("change",e),r.addEventListener("change",e)}),this.on("webkitendfullscreen",function(){r.removeEventListener("change",t),r.addEventListener("change",t),r.removeEventListener("change",e)})},h.prototype.overrideNative_=function(t,e){var i=this;if(e===this["featuresNative"+t+"Tracks"]){var r=t.toLowerCase();this[r+"TracksListeners_"]&&Object.keys(this[r+"TracksListeners_"]).forEach(function(t){i.el()[r+"Tracks"].removeEventListener(t,i[r+"TracksListeners_"][t])}),this["featuresNative"+t+"Tracks"]=!e,this[r+"TracksListeners_"]=null,this.proxyNativeTracksForType_(r)}},h.prototype.overrideNativeAudioTracks=function(t){this.overrideNative_("Audio",t)},h.prototype.overrideNativeVideoTracks=function(t){this.overrideNative_("Video",t)},h.prototype.proxyNativeTracksForType_=function(t){var r=this,e=Ui[t],n=this.el()[e.getterName],s=this[e.getterName]();if(this["featuresNative"+e.capitalName+"Tracks"]&&n&&n.addEventListener){var a={change:function(t){s.trigger({type:"change",target:s,currentTarget:s,srcElement:s})},addtrack:function(t){s.addTrack(t.track)},removetrack:function(t){s.removeTrack(t.track)}},i=function(){for(var t=[],e=0;e<s.length;e++){for(var i=!1,r=0;r<n.length;r++)if(n[r]===s[e]){i=!0;break}i||t.push(s[e])}for(;t.length;)s.removeTrack(t.shift())};this[e.getterName+"Listeners_"]=a,Object.keys(a).forEach(function(e){var i=a[e];n.addEventListener(e,i),r.on("dispose",function(t){return n.removeEventListener(e,i)})}),this.on("loadstart",i),this.on("dispose",function(t){return r.off("loadstart",i)})}},h.prototype.proxyNativeTracks_=function(){var e=this;Ui.names.forEach(function(t){e.proxyNativeTracksForType_(t)})},h.prototype.createEl=function(){var t=this.options_.tag;if(!t||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(t){var e=t.cloneNode(!0);t.parentNode&&t.parentNode.insertBefore(e,t),h.disposeMediaElement(t),t=e}else{t=p.createElement("video");var i=Gt({},this.options_.tag&&q(this.options_.tag));ge&&!0===this.options_.nativeControlsForTouch||delete i.controls,V(t,C(i,{id:this.options_.techId,class:"vjs-tech"}))}t.playerId=this.options_.playerId}"undefined"!=typeof this.options_.preload&&z(t,"preload",this.options_.preload);for(var r=["loop","muted","playsinline","autoplay"],n=0;n<r.length;n++){var s=r[n],a=this.options_[s];"undefined"!=typeof a&&(a?z(t,s,s):G(t,s),t[s]=a)}return t},h.prototype.handleLateInit_=function(t){if(0!==t.networkState&&3!==t.networkState){if(0===t.readyState){var e=!1,i=function(){e=!0};this.on("loadstart",i);var r=function(){e||this.trigger("loadstart")};return this.on("loadedmetadata",r),void this.ready(function(){this.off("loadstart",i),this.off("loadedmetadata",r),e||this.trigger("loadstart")})}var n=["loadstart"];n.push("loadedmetadata"),2<=t.readyState&&n.push("loadeddata"),3<=t.readyState&&n.push("canplay"),4<=t.readyState&&n.push("canplaythrough"),this.ready(function(){n.forEach(function(t){this.trigger(t)},this)})}},h.prototype.setCurrentTime=function(t){try{this.el_.currentTime=t}catch(t){f(t,"Video is not ready. (Video.js)")}},h.prototype.duration=function(){var e=this;if(this.el_.duration===1/0&&ae&&he&&0===this.el_.currentTime){return this.on("timeupdate",function t(){0<e.el_.currentTime&&(e.el_.duration===1/0&&e.trigger("durationchange"),e.off("timeupdate",t))}),NaN}return this.el_.duration||NaN},h.prototype.width=function(){return this.el_.offsetWidth},h.prototype.height=function(){return this.el_.offsetHeight},h.prototype.proxyWebkitFullscreen_=function(){var t=this;if("webkitDisplayingFullscreen"in this.el_){var e=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},i=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",e),this.trigger("fullscreenchange",{isFullscreen:!0}))};this.on("webkitbeginfullscreen",i),this.on("dispose",function(){t.off("webkitbeginfullscreen",i),t.off("webkitendfullscreen",e)})}},h.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var t=g.navigator&&g.navigator.userAgent||"";if(/Android/.test(t)||!/Chrome|Mac OS X 10.5/.test(t))return!0}return!1},h.prototype.enterFullScreen=function(){var t=this.el_;t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){t.pause(),t.webkitEnterFullScreen()},0)):t.webkitEnterFullScreen()},h.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},h.prototype.src=function(t){if(void 0===t)return this.el_.src;this.setSrc(t)},h.prototype.reset=function(){h.resetMediaElement(this.el_)},h.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},h.prototype.setControls=function(t){this.el_.controls=!!t},h.prototype.addTextTrack=function(t,e,i){return this.featuresNativeTextTracks?this.el_.addTextTrack(t,e,i):c.prototype.addTextTrack.call(this,t,e,i)},h.prototype.createRemoteTextTrack=function(t){if(!this.featuresNativeTextTracks)return c.prototype.createRemoteTextTrack.call(this,t);var e=p.createElement("track");return t.kind&&(e.kind=t.kind),t.label&&(e.label=t.label),(t.language||t.srclang)&&(e.srclang=t.language||t.srclang),t.default&&(e.default=t.default),t.id&&(e.id=t.id),t.src&&(e.src=t.src),e},h.prototype.addRemoteTextTrack=function(t,e){var i=c.prototype.addRemoteTextTrack.call(this,t,e);return this.featuresNativeTextTracks&&this.el().appendChild(i),i},h.prototype.removeRemoteTextTrack=function(t){if(c.prototype.removeRemoteTextTrack.call(this,t),this.featuresNativeTextTracks)for(var e=this.$$("track"),i=e.length;i--;)t!==e[i]&&t!==e[i].track||this.el().removeChild(e[i])},h.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();var t={};return"undefined"!=typeof this.el().webkitDroppedFrameCount&&"undefined"!=typeof this.el().webkitDecodedFrameCount&&(t.droppedVideoFrames=this.el().webkitDroppedFrameCount,t.totalVideoFrames=this.el().webkitDecodedFrameCount),g.performance&&"function"==typeof g.performance.now?t.creationTime=g.performance.now():g.performance&&g.performance.timing&&"number"==typeof g.performance.timing.navigationStart&&(t.creationTime=g.Date.now()-g.performance.timing.navigationStart),t},h}(br);if(x()){us.TEST_VID=p.createElement("video");var ls=p.createElement("track");ls.kind="captions",ls.srclang="en",ls.label="English",us.TEST_VID.appendChild(ls)}us.isSupported=function(){try{us.TEST_VID.volume=.5}catch(t){return!1}return!(!us.TEST_VID||!us.TEST_VID.canPlayType)},us.canPlayType=function(t){return us.TEST_VID.canPlayType(t)},us.canPlaySource=function(t,e){return us.canPlayType(t.type)},us.canControlVolume=function(){try{var t=us.TEST_VID.volume;return us.TEST_VID.volume=t/2+.1,t!==us.TEST_VID.volume}catch(t){return!1}},us.canControlPlaybackRate=function(){if(ae&&he&&de<58)return!1;try{var t=us.TEST_VID.playbackRate;return us.TEST_VID.playbackRate=t/2+.1,t!==us.TEST_VID.playbackRate}catch(t){return!1}},us.canOverrideAttributes=function(){try{var t=function(){};Object.defineProperty(p.createElement("video"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("video"),"innerHTML",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"innerHTML",{get:t,set:t})}catch(t){return!1}return!0},us.supportsNativeTextTracks=function(){return me},us.supportsNativeVideoTracks=function(){return!(!us.TEST_VID||!us.TEST_VID.videoTracks)},us.supportsNativeAudioTracks=function(){return!(!us.TEST_VID||!us.TEST_VID.audioTracks)},us.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],us.prototype.featuresVolumeControl=us.canControlVolume(),us.prototype.featuresPlaybackRate=us.canControlPlaybackRate(),us.prototype.featuresSourceset=us.canOverrideAttributes(),us.prototype.movingMediaElementInDOM=!ne,us.prototype.featuresFullscreenResize=!0,us.prototype.featuresProgressEvents=!0,us.prototype.featuresTimeupdateEvents=!0,us.prototype.featuresNativeTextTracks=us.supportsNativeTextTracks(),us.prototype.featuresNativeVideoTracks=us.supportsNativeVideoTracks(),us.prototype.featuresNativeAudioTracks=us.supportsNativeAudioTracks();var cs=us.TEST_VID&&us.TEST_VID.constructor.prototype.canPlayType,hs=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;us.patchCanPlayType=function(){4<=oe&&!le&&!he&&(us.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&hs.test(t)?"maybe":cs.call(this,t)})},us.unpatchCanPlayType=function(){var t=us.TEST_VID.constructor.prototype.canPlayType;return us.TEST_VID.constructor.prototype.canPlayType=cs,t},us.patchCanPlayType(),us.disposeMediaElement=function(t){if(t){for(t.parentNode&&t.parentNode.removeChild(t);t.hasChildNodes();)t.removeChild(t.firstChild);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},us.resetMediaElement=function(t){if(t){for(var e=t.querySelectorAll("source"),i=e.length;i--;)t.removeChild(e[i]);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]||this.el_.hasAttribute(t)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(e){us.prototype["set"+zt(e)]=function(t){(this.el_[e]=t)?this.el_.setAttribute(e,e):this.el_.removeAttribute(e)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(e){us.prototype["set"+zt(e)]=function(t){this.el_[e]=t}}),["pause","load","play"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]()}}),br.withSourceHandlers(us),us.nativeSourceHandler={},us.nativeSourceHandler.canPlayType=function(t){try{return us.TEST_VID.canPlayType(t)}catch(t){return""}},us.nativeSourceHandler.canHandleSource=function(t,e){if(t.type)return us.nativeSourceHandler.canPlayType(t.type);if(t.src){var i=ti(t.src);return us.nativeSourceHandler.canPlayType("video/"+i)}return""},us.nativeSourceHandler.handleSource=function(t,e,i){e.setSrc(t.src)},us.nativeSourceHandler.dispose=function(){},us.registerSourceHandler(us.nativeSourceHandler),br.registerTech("Html5",us);var ds=h(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),ps=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],fs={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},ms=function(c){function h(t,e,i){if(y(this,h),t.id=t.id||e.id||"vjs_video_"+ut(),(e=C(h.getTagSettings(t),e)).initChildren=!1,e.createEl=!1,e.evented=!1,e.reportTouchActivity=!1,!e.language)if("function"==typeof t.closest){var r=t.closest("[lang]");r&&r.getAttribute&&(e.language=r.getAttribute("lang"))}else for(var n=t;n&&1===n.nodeType;){if(q(n).hasOwnProperty("lang")){e.language=n.getAttribute("lang");break}n=n.parentNode}var s=b(this,c.call(this,null,e,i));if(s.isPosterFromTech_=!1,s.queuedCallbacks_=[],s.isReady_=!1,s.hasStarted_=!1,s.userActive_=!1,!s.options_||!s.options_.techOrder||!s.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(s.tag=t,s.tagAttributes=t&&q(t),s.language(s.options_.language),e.languages){var a={};Object.getOwnPropertyNames(e.languages).forEach(function(t){a[t.toLowerCase()]=e.languages[t]}),s.languages_=a}else s.languages_=h.prototype.options_.languages;s.cache_={},s.poster_=e.poster||"",s.controls_=!!e.controls,s.cache_.lastVolume=1,t.controls=!1,t.removeAttribute("controls"),s.scrubbing_=!1,s.el_=s.createEl(),s.cache_.lastPlaybackRate=s.defaultPlaybackRate(),Vt(s,{eventBusKey:"el_"});var o=Gt(s.options_);if(e.plugins){var u=e.plugins;Object.keys(u).forEach(function(t){if("function"!=typeof this[t])throw new Error('plugin "'+t+'" does not exist');this[t](u[t])},s)}s.options_.playerOptions=o,s.middleware_=[],s.initChildren(),s.isAudio("audio"===t.nodeName.toLowerCase()),s.controls()?s.addClass("vjs-controls-enabled"):s.addClass("vjs-controls-disabled"),s.el_.setAttribute("role","region"),s.isAudio()?s.el_.setAttribute("aria-label",s.localize("Audio Player")):s.el_.setAttribute("aria-label",s.localize("Video Player")),s.isAudio()&&s.addClass("vjs-audio"),s.flexNotSupported_()&&s.addClass("vjs-no-flex"),ne||s.addClass("vjs-workinghover"),h.players[s.id_]=s;var l=d.split(".")[0];return s.addClass("vjs-v"+l),s.userActive(!0),s.reportUserActivity(),s.one("play",s.listenForUserActivity_),s.on("fullscreenchange",s.handleFullscreenChange_),s.on("stageclick",s.handleStageClick_),s.changingSrc_=!1,s.playWaitingForReady_=!1,s.playOnLoadstart_=null,s}return _(h,c),h.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),h.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),Sr[this.id()]=null,c.prototype.dispose.call(this)},h.prototype.createEl=function(){var e=this.tag,i=void 0,t=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player"),r="video-js"===this.tag.tagName.toLowerCase();t?i=this.el_=e.parentNode:r||(i=this.el_=c.prototype.createEl.call(this,"div"));var n=q(e);if(r){for(i=this.el_=e,e=this.tag=p.createElement("video");i.children.length;)e.appendChild(i.firstChild);B(i,"video-js")||j(i,"video-js"),i.appendChild(e),t=this.playerElIngest_=i,Object.keys(i).forEach(function(t){e[t]=i[t]})}if(e.setAttribute("tabindex","-1"),e.removeAttribute("width"),e.removeAttribute("height"),Object.getOwnPropertyNames(n).forEach(function(t){r&&"class"===t||i.setAttribute(t,n[t]),r&&e.setAttribute(t,n[t])}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=i.player=this,this.addClass("vjs-paused"),!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=Lt("vjs-styles-dimensions");var s=nt(".vjs-styles-defaults"),a=nt("head");a.insertBefore(this.styleEl_,s?s.nextSibling:a.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var o=e.getElementsByTagName("a"),u=0;u<o.length;u++){var l=o.item(u);j(l,"vjs-hidden"),l.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!t&&e.parentNode.insertBefore(i,e),N(e,i),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=i},h.prototype.width=function(t){return this.dimension("width",t)},h.prototype.height=function(t){return this.dimension("height",t)},h.prototype.dimension=function(t,e){var i=t+"_";if(void 0===e)return this[i]||0;if(""===e)return this[i]=void 0,void this.updateStyleEl_();var r=parseFloat(e);isNaN(r)?f.error('Improper value "'+e+'" supplied for for '+t):(this[i]=r,this.updateStyleEl_())},h.prototype.fluid=function(t){if(void 0===t)return!!this.fluid_;this.fluid_=!!t,t?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},h.prototype.aspectRatio=function(t){if(void 0===t)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(t))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=t,this.fluid(!0),this.updateStyleEl_()},h.prototype.updateStyleEl_=function(){if(!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){var t=void 0,e=void 0,i=void 0,r=(void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:0<this.videoWidth()?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),n=r[1]/r[0];t=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/n:this.videoWidth()||300,e=void 0!==this.height_?this.height_:t*n,i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(i),Pt(this.styleEl_,"\n      ."+i+" {\n        width: "+t+"px;\n        height: "+e+"px;\n      }\n\n      ."+i+".vjs-fluid {\n        padding-top: "+100*n+"%;\n      }\n    ")}else{var s="number"==typeof this.width_?this.width_:this.options_.width,a="number"==typeof this.height_?this.height_:this.options_.height,o=this.tech_&&this.tech_.el();o&&(0<=s&&(o.width=s),0<=a&&(o.height=a))}},h.prototype.loadTech_=function(t,e){var i=this;this.tech_&&this.unloadTech_();var r=zt(t),n=t.charAt(0).toLowerCase()+t.slice(1);"Html5"!==r&&this.tag&&(br.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=r,this.isReady_=!1;var s={source:e,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+r+"_api",autoplay:this.options_.autoplay,playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset};Bi.names.forEach(function(t){var e=Bi[t];s[e.getterName]=i[e.privateName]}),C(s,this.options_[r]),C(s,this.options_[n]),C(s,this.options_[t.toLowerCase()]),this.tag&&(s.tag=this.tag),e&&e.src===this.cache_.src&&0<this.cache_.currentTime&&(s.startTime=this.cache_.currentTime);var a=br.getTech(t);if(!a)throw new Error("No Tech named '"+r+"' exists! '"+r+"' should be registered using videojs.registerTech()'");this.tech_=new a(s),this.tech_.ready(Ot(this,this.handleTechReady_),!0),Me(this.textTracksJson_||[],this.tech_),ps.forEach(function(t){i.on(i.tech_,t,i["handleTech"+zt(t)+"_"])}),Object.keys(fs).forEach(function(e){i.on(i.tech_,e,function(t){0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push({callback:i["handleTech"+fs[e]+"_"].bind(i),event:t}):i["handleTech"+fs[e]+"_"](t)})}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"sourceset",this.handleTechSourceset_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.on(this.tech_,"ratechange",this.handleTechRateChange_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===r&&this.tag||N(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},h.prototype.unloadTech_=function(){var i=this;Bi.names.forEach(function(t){var e=Bi[t];i[e.privateName]=i[e.getterName]()}),this.textTracksJson_=Re(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},h.prototype.tech=function(t){return void 0===t&&f.warn(m(ds)),this.tech_},h.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},h.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},h.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused())try{delete this.tag.poster}catch(t){f("deleting tag.poster throws in some browsers",t)}},h.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},h.prototype.updateSourceCaches_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=t,i="";"string"!=typeof e&&(e=t.src,i=t.type),this.cache_.source=this.cache_.source||{},this.cache_.sources=this.cache_.sources||[],e&&!i&&(i=function(t,e){if(!e)return"";if(t.cache_.source.src===e&&t.cache_.source.type)return t.cache_.source.type;var i=t.cache_.sources.filter(function(t){return t.src===e});if(i.length)return i[0].type;for(var r=t.$$("source"),n=0;n<r.length;n++){var s=r[n];if(s.type&&s.src&&s.src===e)return s.type}return xr(e)}(this,e)),this.cache_.source={src:e,type:i};for(var r=this.cache_.sources.filter(function(t){return t.src&&t.src===e}),n=[],s=this.$$("source"),a=[],o=0;o<s.length;o++){var u=q(s[o]);n.push(u),u.src&&u.src===e&&a.push(u.src)}a.length&&!r.length?this.cache_.sources=n:r.length||(this.cache_.sources=[this.cache_.source]),this.cache_.src=e},h.prototype.handleTechSourceset_=function(t){var i=this;if(!this.changingSrc_&&(this.updateSourceCaches_(t.src),!t.src)){this.tech_.one(["sourceset","loadstart"],function t(e){"sourceset"!==e.type&&i.updateSourceCaches_(i.techGet_("currentSrc")),i.tech_.off(["sourceset","loadstart"],t)})}this.trigger({src:t.src,type:"sourceset"})},h.prototype.hasStarted=function(t){if(void 0===t)return this.hasStarted_;t!==this.hasStarted_&&(this.hasStarted_=t,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},h.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},h.prototype.handleTechRateChange_=function(){0<this.tech_.playbackRate()&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach(function(t){return t.callback(t.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},h.prototype.handleTechWaiting_=function(){var t=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return t.removeClass("vjs-waiting")})},h.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},h.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},h.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},h.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},h.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},h.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(f.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},h.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},h.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},h.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},h.prototype.handleTechClick_=function(t){rt(t)&&this.controls_&&(this.paused()?this.play():this.pause())},h.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},h.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},h.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},h.prototype.handleTechTouchEnd_=function(t){t.preventDefault()},h.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},h.prototype.handleStageClick_=function(){this.reportUserActivity()},h.prototype.handleTechFullscreenChange_=function(t,e){e&&this.isFullscreen(e.isFullscreen),this.trigger("fullscreenchange")},h.prototype.handleTechError_=function(){var t=this.tech_.error();this.error(t)},h.prototype.handleTechTextData_=function(){var t=null;1<arguments.length&&(t=arguments[1]),this.trigger("textdata",t)},h.prototype.getCache=function(){return this.cache_},h.prototype.techCall_=function(n,s){this.ready(function(){if(n in Ar)return t=this.middleware_,e=this.tech_,r=s,e[i=n](t.reduce(Pr(i),r));if(n in Lr)return Er(this.middleware_,this.tech_,n,s);var t,e,i,r;try{this.tech_&&this.tech_[n](s)}catch(t){throw f(t),t}},!0)},h.prototype.techGet_=function(e){if(this.tech_&&this.tech_.isReady_){if(e in wr)return t=this.middleware_,i=this.tech_,r=e,t.reduceRight(Pr(r),i[r]());if(e in Lr)return Er(this.middleware_,this.tech_,e);var t,i,r;try{return this.tech_[e]()}catch(t){if(void 0===this.tech_[e])throw f("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.",t),t;if("TypeError"===t.name)throw f("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.",t),this.tech_.isReady_=!1,t;throw f(t),t}}},h.prototype.play=function(){var t=this;if(this.playOnLoadstart_&&this.off("loadstart",this.playOnLoadstart_),this.isReady_){if(!this.changingSrc_&&(this.src()||this.currentSrc()))return this.techGet_("play");this.playOnLoadstart_=function(){t.playOnLoadstart_=null,Ie(t.play())},this.one("loadstart",this.playOnLoadstart_)}else{if(this.playWaitingForReady_)return;this.playWaitingForReady_=!0,this.ready(function(){t.playWaitingForReady_=!1,Ie(t.play())})}},h.prototype.pause=function(){this.techCall_("pause")},h.prototype.paused=function(){return!1!==this.techGet_("paused")},h.prototype.played=function(){return this.techGet_("played")||be(0,0)},h.prototype.scrubbing=function(t){if("undefined"==typeof t)return this.scrubbing_;this.scrubbing_=!!t,t?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},h.prototype.currentTime=function(t){return"undefined"!=typeof t?(t<0&&(t=0),void this.techCall_("setCurrentTime",t)):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},h.prototype.duration=function(t){if(void 0===t)return void 0!==this.cache_.duration?this.cache_.duration:NaN;(t=parseFloat(t))<0&&(t=1/0),t!==this.cache_.duration&&((this.cache_.duration=t)===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},h.prototype.remainingTime=function(){return this.duration()-this.currentTime()},h.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},h.prototype.buffered=function(){var t=this.techGet_("buffered");return t&&t.length||(t=be(0,0)),t},h.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration())},h.prototype.bufferedEnd=function(){var t=this.buffered(),e=this.duration(),i=t.end(t.length-1);return e<i&&(i=e),i},h.prototype.volume=function(t){var e=void 0;return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,this.techCall_("setVolume",e),void(0<e&&this.lastVolume_(e))):(e=parseFloat(this.techGet_("volume")),isNaN(e)?1:e)},h.prototype.muted=function(t){if(void 0===t)return this.techGet_("muted")||!1;this.techCall_("setMuted",t)},h.prototype.defaultMuted=function(t){return void 0!==t?this.techCall_("setDefaultMuted",t):this.techGet_("defaultMuted")||!1},h.prototype.lastVolume_=function(t){if(void 0===t||0===t)return this.cache_.lastVolume;this.cache_.lastVolume=t},h.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},h.prototype.isFullscreen=function(t){if(void 0===t)return!!this.isFullscreen_;this.isFullscreen_=!!t},h.prototype.requestFullscreen=function(){var i=Se;this.isFullscreen(!0),i.requestFullscreen?(_t(p,i.fullscreenchange,Ot(this,function t(e){this.isFullscreen(p[i.fullscreenElement]),!1===this.isFullscreen()&&bt(p,i.fullscreenchange,t),this.trigger("fullscreenchange")})),this.el_[i.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},h.prototype.exitFullscreen=function(){var t=Se;this.isFullscreen(!1),t.requestFullscreen?p[t.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},h.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=p.documentElement.style.overflow,_t(p,"keydown",Ot(this,this.fullWindowOnEscKey)),p.documentElement.style.overflow="hidden",j(p.body,"vjs-full-window"),this.trigger("enterFullWindow")},h.prototype.fullWindowOnEscKey=function(t){27===t.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},h.prototype.exitFullWindow=function(){this.isFullWindow=!1,bt(p,"keydown",this.fullWindowOnEscKey),p.documentElement.style.overflow=this.docOrigOverflow,F(p.body,"vjs-full-window"),this.trigger("exitFullWindow")},h.prototype.canPlayType=function(t){for(var e=void 0,i=0,r=this.options_.techOrder;i<r.length;i++){var n=r[i],s=br.getTech(n);if(s||(s=Xt.getComponent(n)),s){if(s.isSupported()&&(e=s.canPlayType(t)))return e}else f.error('The "'+n+'" tech is undefined. Skipped browser support check for that tech.')}return""},h.prototype.selectSource=function(t){var i,r=this,e=this.options_.techOrder.map(function(t){return[t,br.getTech(t)]}).filter(function(t){var e=t[0],i=t[1];return i?i.isSupported():(f.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),n=function(t,i,r){var n=void 0;return t.some(function(e){return i.some(function(t){if(n=r(e,t))return!0})}),n},s=function(t,e){var i=t[0];if(t[1].canPlaySource(e,r.options_[i.toLowerCase()]))return{source:e,tech:i}};return(this.options_.sourceOrder?n(t,e,(i=s,function(t,e){return i(e,t)})):n(e,t,s))||!1},h.prototype.src=function(t){var n=this;if("undefined"==typeof t)return this.cache_.src||"";var s=function e(t){if(Array.isArray(t)){var i=[];t.forEach(function(t){t=e(t),Array.isArray(t)?i=i.concat(t):E(t)&&i.push(t)}),t=i}else t="string"==typeof t&&t.trim()?[Ir({src:t})]:E(t)&&"string"==typeof t.src&&t.src&&t.src.trim()?[Ir(t)]:[];return t}(t);s.length?(this.changingSrc_=!0,this.cache_.sources=s,this.updateSourceCaches_(s[0]),Cr(this,s[0],function(t,e){var i,r;if(n.middleware_=e,n.cache_.sources=s,n.updateSourceCaches_(t),n.src_(t))return 1<s.length?n.src(s.slice(1)):(n.changingSrc_=!1,n.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void n.triggerReady());i=e,r=n.tech_,i.forEach(function(t){return t.setTech&&t.setTech(r)})})):this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0)},h.prototype.src_=function(t){var e,i,r=this,n=this.selectSource([t]);return!n||(e=n.tech,i=this.techName_,zt(e)!==zt(i)?(this.changingSrc_=!0,this.loadTech_(n.tech,n.source),this.tech_.ready(function(){r.changingSrc_=!1})):this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",t):this.techCall_("src",t.src),this.changingSrc_=!1},!0),!1)},h.prototype.load=function(){this.techCall_("load")},h.prototype.reset=function(){this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},h.prototype.currentSources=function(){var t=this.currentSource(),e=[];return 0!==Object.keys(t).length&&e.push(t),this.cache_.sources||e},h.prototype.currentSource=function(){return this.cache_.source||{}},h.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},h.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},h.prototype.preload=function(t){return void 0!==t?(this.techCall_("setPreload",t),void(this.options_.preload=t)):this.techGet_("preload")},h.prototype.autoplay=function(t){return void 0!==t?(this.techCall_("setAutoplay",t),void(this.options_.autoplay=t)):this.techGet_("autoplay",t)},h.prototype.playsinline=function(t){return void 0!==t?(this.techCall_("setPlaysinline",t),this.options_.playsinline=t,this):this.techGet_("playsinline")},h.prototype.loop=function(t){return void 0!==t?(this.techCall_("setLoop",t),void(this.options_.loop=t)):this.techGet_("loop")},h.prototype.poster=function(t){if(void 0===t)return this.poster_;t||(t=""),t!==this.poster_&&(this.poster_=t,this.techCall_("setPoster",t),this.isPosterFromTech_=!1,this.trigger("posterchange"))},h.prototype.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var t=this.tech_.poster()||"";t!==this.poster_&&(this.poster_=t,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},h.prototype.controls=function(t){if(void 0===t)return!!this.controls_;t=!!t,this.controls_!==t&&(this.controls_=t,this.usingNativeControls()&&this.techCall_("setControls",t),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},h.prototype.usingNativeControls=function(t){if(void 0===t)return!!this.usingNativeControls_;t=!!t,this.usingNativeControls_!==t&&(this.usingNativeControls_=t,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},h.prototype.error=function(t){return void 0===t?this.error_||null:null===t?(this.error_=t,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new Le(t),this.addClass("vjs-error"),f.error("(CODE:"+this.error_.code+" "+Le.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},h.prototype.reportUserActivity=function(t){this.userActivity_=!0},h.prototype.userActive=function(t){if(void 0===t)return this.userActive_;if((t=!!t)!==this.userActive_){if(this.userActive_=t,this.userActive_)return this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),void this.trigger("useractive");this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},h.prototype.listenForUserActivity_=function(){var e=void 0,i=void 0,r=void 0,n=Ot(this,this.reportUserActivity);this.on("mousedown",function(){n(),this.clearInterval(e),e=this.setInterval(n,250)}),this.on("mousemove",function(t){t.screenX===i&&t.screenY===r||(i=t.screenX,r=t.screenY,n())}),this.on("mouseup",function(t){n(),this.clearInterval(e)}),this.on("keydown",n),this.on("keyup",n);var s=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(s);var t=this.options_.inactivityTimeout;t<=0||(s=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},t))}},250)},h.prototype.playbackRate=function(t){if(void 0===t)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1;this.techCall_("setPlaybackRate",t)},h.prototype.defaultPlaybackRate=function(t){return void 0!==t?this.techCall_("setDefaultPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},h.prototype.isAudio=function(t){if(void 0===t)return!!this.isAudio_;this.isAudio_=!!t},h.prototype.addTextTrack=function(t,e,i){if(this.tech_)return this.tech_.addTextTrack(t,e,i)},h.prototype.addRemoteTextTrack=function(t,e){if(this.tech_)return this.tech_.addRemoteTextTrack(t,e)},h.prototype.removeRemoteTextTrack=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).track,e=void 0===t?arguments[0]:t;if(this.tech_)return this.tech_.removeRemoteTextTrack(e)},h.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},h.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},h.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},h.prototype.language=function(t){if(void 0===t)return this.language_;this.language_=String(t).toLowerCase()},h.prototype.languages=function(){return Gt(h.prototype.options_.languages,this.languages_)},h.prototype.toJSON=function(){var t=Gt(this.options_),e=t.tracks;t.tracks=[];for(var i=0;i<e.length;i++){var r=e[i];(r=Gt(r)).player=void 0,t.tracks[i]=r}return t},h.prototype.createModal=function(t,e){var i=this;(e=e||{}).content=t||"";var r=new Ne(this,e);return this.addChild(r),r.on("dispose",function(){i.removeChild(r)}),r.open(),r},h.getTagSettings=function(t){var e={sources:[],tracks:[]},i=q(t),r=i["data-setup"];if(B(t,"vjs-fluid")&&(i.fluid=!0),null!==r){var n=Oe(r||"{}"),s=n[0],a=n[1];s&&f.error(s),C(i,a)}if(C(e,i),t.hasChildNodes())for(var o=t.childNodes,u=0,l=o.length;u<l;u++){var c=o[u],h=c.nodeName.toLowerCase();"source"===h?e.sources.push(q(c)):"track"===h&&e.tracks.push(q(c))}return e},h.prototype.flexNotSupported_=function(){var t=p.createElement("i");return!("flexBasis"in t.style||"webkitFlexBasis"in t.style||"mozFlexBasis"in t.style||"msFlexBasis"in t.style||"msFlexOrder"in t.style)},h}(Xt);Bi.names.forEach(function(t){var e=Bi[t];ms.prototype[e.getterName]=function(){return this.tech_?this.tech_[e.getterName]():(this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName])}}),ms.players={};var gs=g.navigator;ms.prototype.options_={techOrder:br.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:gs&&(gs.languages&&gs.languages[0]||gs.userLanguage||gs.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(t){ms.prototype[t]=function(){return this.techGet_(t)}}),ps.forEach(function(t){ms.prototype["handleTech"+zt(t)+"_"]=function(){return this.trigger(t)}}),Xt.registerComponent("Player",ms);var ys="plugin",vs="activePlugins_",_s={},bs=function(t){return _s.hasOwnProperty(t)},Ts=function(t){return bs(t)?_s[t]:void 0},Ss=function(t,e){t[vs]=t[vs]||{},t[vs][e]=!0},ks=function(t,e,i){var r=(i?"before":"")+"pluginsetup";t.trigger(r,e),t.trigger(r+":"+e.name,e)},Cs=function(n,s){return s.prototype.name=n,function(){ks(this,{name:n,plugin:s,instance:null},!0);for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=new(Function.prototype.bind.apply(s,[null].concat([this].concat(e))));return this[n]=function(){return r},ks(this,r.getEventHash()),r}},Es=function(){function s(t){if(y(this,s),this.constructor===s)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=t,Vt(this),delete this.trigger,Wt(this,this.constructor.defaultState),Ss(t,this.name),this.dispose=Ot(this,this.dispose),t.on("dispose",this.dispose)}return s.prototype.version=function(){return this.constructor.VERSION},s.prototype.getEventHash=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t.name=this.name,t.plugin=this.constructor,t.instance=this,t},s.prototype.trigger=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Tt(this.eventBusEl_,t,this.getEventHash(e))},s.prototype.handleStateChanged=function(t){},s.prototype.dispose=function(){var t=this.name,e=this.player;this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e[vs][t]=!1,this.player=this.state=null,e[t]=Cs(t,_s[t])},s.isBasic=function(t){var e="string"==typeof t?Ts(t):t;return"function"==typeof e&&!s.prototype.isPrototypeOf(e.prototype)},s.registerPlugin=function(t,e){if("string"!=typeof t)throw new Error('Illegal plugin name, "'+t+'", must be a string, was '+("undefined"==typeof t?"undefined":v(t))+".");if(bs(t))f.warn('A plugin named "'+t+'" already exists. You may want to avoid re-registering plugins!');else if(ms.prototype.hasOwnProperty(t))throw new Error('Illegal plugin name, "'+t+'", cannot share a name with an existing player method!');if("function"!=typeof e)throw new Error('Illegal plugin for "'+t+'", must be a function, was '+("undefined"==typeof e?"undefined":v(e))+".");var i,r,n;return _s[t]=e,t!==ys&&(s.isBasic(e)?ms.prototype[t]=(i=t,r=e,n=function(){ks(this,{name:i,plugin:r,instance:null},!0);var t=r.apply(this,arguments);return Ss(this,i),ks(this,{name:i,plugin:r,instance:t}),t},Object.keys(r).forEach(function(t){n[t]=r[t]}),n):ms.prototype[t]=Cs(t,e)),e},s.deregisterPlugin=function(t){if(t===ys)throw new Error("Cannot de-register base plugin.");bs(t)&&(delete _s[t],delete ms.prototype[t])},s.getPlugins=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Object.keys(_s),i=void 0;return t.forEach(function(t){var e=Ts(t);e&&((i=i||{})[t]=e)}),i},s.getPluginVersion=function(t){var e=Ts(t);return e&&e.VERSION||""},s}();Es.getPlugin=Ts,Es.BASE_PLUGIN_NAME=ys,Es.registerPlugin(ys,Es),ms.prototype.usingPlugin=function(t){return!!this[vs]&&!0===this[vs][t]},ms.prototype.hasPlugin=function(t){return!!bs(t)};var ws=function(t){return 0===t.indexOf("#")?t.slice(1):t};function As(t,i,e){var r=As.getPlayer(t);if(r)return i&&f.warn('Player "'+t+'" is already initialised. Options will not be applied.'),e&&r.ready(e),r;var n="string"==typeof t?nt("#"+ws(t)):t;if(!I(n))throw new TypeError("The element or ID supplied is not valid. (videojs)");p.body.contains(n)||f.warn("The element supplied is not included in the DOM"),i=i||{},As.hooks("beforesetup").forEach(function(t){var e=t(n,Gt(i));E(e)&&!Array.isArray(e)?i=Gt(i,e):f.error("please return an object in beforesetup hooks")});var s=Xt.getComponent("Player");return r=new s(n,i,e),As.hooks("setup").forEach(function(t){return t(r)}),r}if(As.hooks_={},As.hooks=function(t,e){return As.hooks_[t]=As.hooks_[t]||[],e&&(As.hooks_[t]=As.hooks_[t].concat(e)),As.hooks_[t]},As.hook=function(t,e){As.hooks(t,e)},As.hookOnce=function(i,t){As.hooks(i,[].concat(t).map(function(e){return function t(){return As.removeHook(i,t),e.apply(void 0,arguments)}}))},As.removeHook=function(t,e){var i=As.hooks(t).indexOf(e);return!(i<=-1)&&(As.hooks_[t]=As.hooks_[t].slice(),As.hooks_[t].splice(i,1),!0)},!0!==g.VIDEOJS_NO_DYNAMIC_STYLE&&x()){var Ls=nt(".vjs-styles-defaults");if(!Ls){Ls=Lt("vjs-styles-defaults");var Ps=nt("head");Ps&&Ps.insertBefore(Ls,Ps.firstChild),Pt(Ls,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}At(1,As),As.VERSION=d,As.options=ms.prototype.options_,As.getPlayers=function(){return ms.players},As.getPlayer=function(t){var e=ms.players,i=void 0;if("string"==typeof t){var r=ws(t),n=e[r];if(n)return n;i=nt("#"+r)}else i=t;if(I(i)){var s=i,a=s.player,o=s.playerId;if(a||e[o])return a||e[o]}},As.getAllPlayers=function(){return Object.keys(ms.players).map(function(t){return ms.players[t]}).filter(Boolean)},As.players=ms.players,As.getComponent=Xt.getComponent,As.registerComponent=function(t,e){br.isTech(e)&&f.warn("The "+t+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),Xt.registerComponent.call(Xt,t,e)},As.getTech=br.getTech,As.registerTech=br.registerTech,As.use=function(t,e){Tr[t]=Tr[t]||[],Tr[t].push(e)},Object.defineProperty(As,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(As.middleware,"TERMINATOR",{value:kr,writeable:!1,enumerable:!0}),As.browser=ye,As.TOUCH_ENABLED=ge,As.extend=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=function(){t.apply(this,arguments)},r={};for(var n in"object"===("undefined"==typeof e?"undefined":v(e))?(e.constructor!==Object.prototype.constructor&&(i=e.constructor),r=e):"function"==typeof e&&(i=e),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.super_=e)}(i,t),r)r.hasOwnProperty(n)&&(i.prototype[n]=r[n]);return i},As.mergeOptions=Gt,As.bind=Ot,As.registerPlugin=Es.registerPlugin,As.plugin=function(t,e){return f.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),Es.registerPlugin(t,e)},As.getPlugins=Es.getPlugins,As.getPlugin=Es.getPlugin,As.getPluginVersion=Es.getPluginVersion,As.addLanguage=function(t,e){var i;return t=(""+t).toLowerCase(),As.options.languages=Gt(As.options.languages,((i={})[t]=e,i)),As.options.languages[t]},As.log=f,As.createTimeRange=As.createTimeRanges=be,As.formatTime=Yr,As.setFormatTime=function(t){Xr=t},As.resetFormatTime=function(){Xr=Gr},As.parseUrl=Je,As.isCrossOrigin=ei,As.EventTarget=Dt,As.on=_t,As.one=St,As.off=bt,As.trigger=Tt,As.xhr=Ci,As.TextTrack=Oi,As.AudioTrack=xi,As.VideoTrack=Ii,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(t){As[t]=function(){return f.warn("videojs."+t+"() is deprecated; use videojs.dom."+t+"() instead"),at[t].apply(null,arguments)}}),As.computedStyle=A,As.dom=at,As.url=ii;var Os=e(function(t,e){var i,c,r,n,h;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,c=/^([^\/;?#]*)(.*)$/,r=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,h={buildAbsoluteURL:function(t,e,i){if(i=i||{},t=t.trim(),!(e=e.trim())){if(!i.alwaysNormalize)return t;var r=h.parseURL(t);if(!r)throw new Error("Error trying to parse base URL.");return r.path=h.normalizePath(r.path),h.buildURLFromParts(r)}var n=h.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return i.alwaysNormalize?(n.path=h.normalizePath(n.path),h.buildURLFromParts(n)):e;var s=h.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var a=c.exec(s.path);s.netLoc=a[1],s.path=a[2]}s.netLoc&&!s.path&&(s.path="/");var o={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(o.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,l=u.substring(0,u.lastIndexOf("/")+1)+n.path;o.path=h.normalizePath(l)}else o.path=s.path,n.params||(o.params=s.params,n.query||(o.query=s.query));return null===o.path&&(o.path=i.alwaysNormalize?h.normalizePath(n.path):n.path),h.buildURLFromParts(o)},parseURL:function(t){var e=i.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(r,"");t.length!==(t=t.replace(n,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=h}),xs=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Is=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Ds=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Rs=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},Ms=function(){function t(){xs(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t],i=void 0,r=void 0,n=void 0;if(e)if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else for(n=Array.prototype.slice.call(arguments,1),r=e.length,i=0;i<r;++i)e[i].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Us=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));return t.buffer="",t}return Ds(i,e),i.prototype.push=function(t){var e=void 0;for(this.buffer+=t,e=this.buffer.indexOf("\n");-1<e;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)},i}(Ms),Ns=function(t){for(var e=t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),i={},r=e.length,n=void 0;r--;)""!==e[r]&&((n=/([^=]*)=(.*)/.exec(e[r]).slice(1))[0]=n[0].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^['"](.*)['"]$/g,"$1"),i[n[0]]=n[1]);return i},Bs=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));return t.customParsers=[],t}return Ds(i,e),i.prototype.push=function(t){var e=void 0,i=void 0;if(0!==(t=t.replace(/^[\u0000\s]+|[\u0000\s]+$/g,"")).length)if("#"===t[0]){for(var r=0;r<this.customParsers.length;r++)if(this.customParsers[r].call(this,t))return;if(0===t.indexOf("#EXT"))if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))this.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void this.trigger("data",i);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"totalduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void this.trigger("data",i);if(e=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"byterange"},e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),void this.trigger("data",i);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-MAP:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"map"},e[1]){var n=Ns(e[1]);if(n.URI&&(i.uri=n.URI),n.BYTERANGE){var s=n.BYTERANGE.split("@"),a=s[0],o=s[1];i.byterange={},a&&(i.byterange.length=parseInt(a,10)),o&&(i.byterange.offset=parseInt(o,10))}}this.trigger("data",i)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=Ns(e[1]),i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION.split("x"),l={};u[0]&&(l.width=parseInt(u[0],10)),u[1]&&(l.height=parseInt(u[1],10)),i.attributes.RESOLUTION=l}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}this.trigger("data",i)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(t))return i={type:"tag",tagType:"media"},e[1]&&(i.attributes=Ns(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-ENDLIST/.exec(t))this.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(t))this.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))return i={type:"tag",tagType:"program-date-time"},e[1]&&(i.dateTimeString=e[1],i.dateTimeObject=new Date(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-KEY:?(.*)$/.exec(t))return i={type:"tag",tagType:"key"},e[1]&&(i.attributes=Ns(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i);if(e=/^#EXT-X-START:?(.*)$/.exec(t))return i={type:"tag",tagType:"start"},e[1]&&(i.attributes=Ns(e[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out-cont"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-in"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);this.trigger("data",{type:"tag",data:t.slice(4)})}}}else this.trigger("data",{type:"comment",text:t.slice(1)})}else this.trigger("data",{type:"uri",uri:t})},i.prototype.addParser=function(t){var e=this,i=t.expression,r=t.customType,n=t.dataParser,s=t.segment;"function"!=typeof n&&(n=function(t){return t}),this.customParsers.push(function(t){if(i.exec(t))return e.trigger("data",{type:"custom",data:n(t),customType:r,segment:s}),!0})},i}(Ms),js=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));t.lineStream=new Us,t.parseStream=new Bs,t.lineStream.pipe(t.parseStream);var n=t,s=[],a={},o=void 0,u=void 0,l={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},c=0;return t.manifest={allowCache:!0,discontinuityStarts:[],segments:[]},t.parseStream.on("data",function(e){var i=void 0,r=void 0;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=e.allowed,"allowed"in e||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var t={};"length"in e&&((a.byterange=t).length=e.length,"offset"in e||(this.trigger("info",{message:"defaulting offset to zero"}),e.offset=0)),"offset"in e&&((a.byterange=t).offset=e.offset)},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),0<e.duration&&(a.duration=e.duration),0===e.duration&&(a.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=s},key:function(){e.attributes?"NONE"!==e.attributes.METHOD?e.attributes.URI?(e.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),u={method:e.attributes.METHOD||"AES-128",uri:e.attributes.URI},"undefined"!=typeof e.attributes.IV&&(u.iv=e.attributes.IV)):this.trigger("warn",{message:"ignoring key declaration without URI"}):u=null:this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(e.number)?this.manifest.mediaSequence=e.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+e.number})},"discontinuity-sequence":function(){isFinite(e.number)?(this.manifest.discontinuitySequence=e.number,c=e.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+e.number})},"playlist-type":function(){/VOD|EVENT/.test(e.playlistType)?this.manifest.playlistType=e.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+e.playlist})},map:function(){o={},e.uri&&(o.uri=e.uri),e.byterange&&(o.byterange=e.byterange)},"stream-inf":function(){this.manifest.playlists=s,this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes?(a.attributes||(a.attributes={}),Is(a.attributes,e.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes&&e.attributes.TYPE&&e.attributes["GROUP-ID"]&&e.attributes.NAME){var t=this.manifest.mediaGroups[e.attributes.TYPE];t[e.attributes["GROUP-ID"]]=t[e.attributes["GROUP-ID"]]||{},i=t[e.attributes["GROUP-ID"]],(r={default:/yes/i.test(e.attributes.DEFAULT)}).default?r.autoselect=!0:r.autoselect=/yes/i.test(e.attributes.AUTOSELECT),e.attributes.LANGUAGE&&(r.language=e.attributes.LANGUAGE),e.attributes.URI&&(r.uri=e.attributes.URI),e.attributes["INSTREAM-ID"]&&(r.instreamId=e.attributes["INSTREAM-ID"]),e.attributes.CHARACTERISTICS&&(r.characteristics=e.attributes.CHARACTERISTICS),e.attributes.FORCED&&(r.forced=/yes/i.test(e.attributes.FORCED)),i[e.attributes.NAME]=r}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){c+=1,a.discontinuity=!0,this.manifest.discontinuityStarts.push(s.length)},"program-date-time":function(){"undefined"==typeof this.manifest.dateTimeString&&(this.manifest.dateTimeString=e.dateTimeString,this.manifest.dateTimeObject=e.dateTimeObject),a.dateTimeString=e.dateTimeString,a.dateTimeObject=e.dateTimeObject},targetduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+e.duration}):this.manifest.targetDuration=e.duration},totalduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+e.duration}):this.manifest.totalDuration=e.duration},start:function(){e.attributes&&!isNaN(e.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:e.attributes["TIME-OFFSET"],precise:e.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){a.cueOut=e.data},"cue-out-cont":function(){a.cueOutCont=e.data},"cue-in":function(){a.cueIn=e.data}}[e.tagType]||function(){}).call(n)},uri:function(){a.uri=e.uri,s.push(a),!this.manifest.targetDuration||"duration"in a||(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),a.duration=this.manifest.targetDuration),u&&(a.key=u),a.timeline=c,o&&(a.map=o),a={}},comment:function(){},custom:function(){e.segment?(a.custom=a.custom||{},a.custom[e.customType]=e.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[e.customType]=e.data)}})[e.type].call(n)}),t}return Ds(i,e),i.prototype.push=function(t){this.lineStream.push(t)},i.prototype.end=function(){this.lineStream.push("\n")},i.prototype.addParser=function(t){this.parseStream.addParser(t)},i}(Ms),Fs=function(t){var e,i=t.attributes,r=t.segments,n={attributes:(e={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},e["PROGRAM-ID"]=1,e),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:r,mediaSequence:r.length?r[0].number:1};return i.contentProtection&&(n.contentProtection=i.contentProtection),n},Hs=function(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))},Vs=function r(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.reduce(function(e,i){return Object.keys(i).forEach(function(t){Array.isArray(e[t])&&Array.isArray(i[t])?e[t]=e[t].concat(i[t]):Hs(e[t])&&Hs(i[t])?e[t]=r(e[t],i[t]):e[t]=i[t]}),e},{})},qs=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Os.buildAbsoluteURL(g.location.href,t)),Os.buildAbsoluteURL(t,e))},Ws=function(t){var e=t.baseUrl,i=void 0===e?"":e,r=t.source,n=void 0===r?"":r,s=t.range,a=void 0===s?"":s,o={uri:n,resolvedUri:qs(i||"",n)};if(a){var u=a.split("-"),l=parseInt(u[0],10),c=parseInt(u[1],10);o.byterange={length:c-l,offset:l}}return o},zs=function(t,e){for(var i,r,n,s,a,o,u,l,c,h,d,p,f=t.type,m=void 0===f?"static":f,g=t.minimumUpdatePeriod,y=void 0===g?0:g,v=t.media,_=void 0===v?"":v,b=t.sourceDuration,T=t.timescale,S=void 0===T?1:T,k=t.startNumber,C=void 0===k?1:k,E=t.periodIndex,w=[],A=-1,L=0;L<e.length;L++){var P=e[L],O=P.d,x=P.r||0,I=P.t||0;A<0&&(A=I),I&&A<I&&(A=I);var D=void 0;if(x<0){var R=L+1;R===e.length?"dynamic"===m&&0<y&&0<_.indexOf("$Number$")?(r=A,n=O,void 0,s=(i=t).NOW,a=i.clientOffset,o=i.availabilityStartTime,u=i.timescale,l=void 0===u?1:u,c=i.start,h=void 0===c?0:c,d=i.minimumUpdatePeriod,p=(s+a)/1e3+(void 0===d?0:d)-(o+h),D=Math.ceil((p*l-r)/n)):D=(b*S-A)/O:D=(e[R].t-A)/O}else D=x+1;for(var M=C+w.length+D,U=C+w.length;U<M;)w.push({number:U,duration:O/S,time:A,timeline:E}),A+=O,U++}return w},Gs=function(t){return t.reduce(function(t,e){return t.concat(e)},[])},Xs=function(t){if(!t.length)return[];for(var e=[],i=0;i<t.length;i++)e.push(t[i]);return e},Ys={static:function(t){var e=t.duration,i=t.timescale,r=void 0===i?1:i,n=t.sourceDuration;return{start:0,end:Math.ceil(n/(e/r))}},dynamic:function(t){var e=t.NOW,i=t.clientOffset,r=t.availabilityStartTime,n=t.timescale,s=void 0===n?1:n,a=t.duration,o=t.start,u=void 0===o?0:o,l=t.minimumUpdatePeriod,c=void 0===l?0:l,h=t.timeShiftBufferDepth,d=void 0===h?1/0:h,p=(e+i)/1e3,f=r+u,m=p+c-f,g=Math.ceil(m*s/a),y=Math.floor((p-f-d)*s/a),v=Math.floor((p-f)*s/a);return{start:Math.max(0,y),end:Math.min(g,v)}}},$s=function(t){var o,e=t.type,i=void 0===e?"static":e,r=t.duration,n=t.timescale,s=void 0===n?1:n,a=t.sourceDuration,u=Ys[i](t),l=function(t,e){for(var i=[],r=t;r<e;r++)i.push(r);return i}(u.start,u.end).map((o=t,function(t,e){var i=o.duration,r=o.timescale,n=void 0===r?1:r,s=o.periodIndex,a=o.startNumber;return{number:(void 0===a?1:a)+t,duration:i/n,timeline:s,time:e*i}}));if("static"===i){var c=l.length-1;l[c].duration=a-r/s*c}return l},Ks=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,Qs=function(t,e){return t.replace(Ks,(s=e,function(t,e,i,r){if("$$"===t)return"$";if("undefined"==typeof s[e])return t;var n=""+s[e];return"RepresentationID"===e?n:(r=i?parseInt(r,10):1)<=n.length?n:""+new Array(r-n.length+1).join("0")+n}));var s},Js=function(i,t){var e,r,n={RepresentationID:i.id,Bandwidth:i.bandwidth||0},s=i.initialization,a=void 0===s?{sourceURL:"",range:""}:s,o=Ws({baseUrl:i.baseUrl,source:Qs(a.sourceURL,n),range:a.range});return(r=t,(e=i).duration||r?e.duration?$s(e):zs(e,r):[{number:e.startNumber||1,duration:e.sourceDuration,time:0,timeline:e.periodIndex}]).map(function(t){n.Number=t.number,n.Time=t.time;var e=Qs(i.media||"",n);return{uri:e,timeline:t.timeline,duration:t.duration,resolvedUri:qs(i.baseUrl||"",e),map:o,number:t.number}})},Zs="INVALID_NUMBER_OF_PERIOD",ta="DASH_EMPTY_MANIFEST",ea="DASH_INVALID_XML",ia="NO_BASE_URL",ra="SEGMENT_TIME_UNSPECIFIED",na="UNSUPPORTED_UTC_TIMING_SCHEME",sa=function(u,t){var e=u.duration,i=u.segmentUrls,r=void 0===i?[]:i;if(!e&&!t||e&&t)throw new Error(ra);var n=r.map(function(t){return i=t,r=(e=u).baseUrl,n=e.initialization,a=Ws({baseUrl:r,source:(s=void 0===n?{}:n).sourceURL,range:s.range}),(o=Ws({baseUrl:r,source:i.media,range:i.mediaRange})).map=a,o;var e,i,r,n,s,a,o}),s=void 0;return e&&(s=$s(u)),t&&(s=zs(u,t)),s.map(function(t,e){if(n[e]){var i=n[e];return i.timeline=t.timeline,i.duration=t.duration,i.number=t.number,i}}).filter(function(t){return t})},aa=function(t){var e=t.baseUrl,i=t.initialization,r=void 0===i?{}:i,n=t.sourceDuration,s=t.timescale,a=void 0===s?1:s,o=t.indexRange,u=void 0===o?"":o,l=t.duration;if(!e)throw new Error(ia);var c=Ws({baseUrl:e,source:r.sourceURL,range:r.range}),h=Ws({baseUrl:e,source:e,range:u});if(h.map=c,l){var d=$s(t);d.length&&(h.duration=d[0].duration,h.timeline=d[0].timeline)}else n&&(h.duration=n/a,h.timeline=0);return h.number=0,[h]},oa=function(t){var e=t.attributes,i=t.segmentInfo,r=void 0,n=void 0;if(i.template?(n=Js,r=Vs(e,i.template)):i.base?(n=aa,r=Vs(e,i.base)):i.list&&(n=sa,r=Vs(e,i.list)),!n)return{attributes:e};var s=n(r,i.timeline);if(r.duration){var a=r,o=a.duration,u=a.timescale,l=void 0===u?1:u;r.duration=o/l}else s.length?r.duration=s.reduce(function(t,e){return Math.max(t,Math.ceil(e.duration))},0):r.duration=0;return{attributes:r,segments:s}},ua=function(t,e){return Xs(t.childNodes).filter(function(t){return t.tagName===e})},la=function(t){return t.textContent.trim()},ca=function(t){var e=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);if(!e)return 0;var i=e.slice(1),r=i[0],n=i[1],s=i[2],a=i[3],o=i[4],u=i[5];return 31536e3*parseFloat(r||0)+2592e3*parseFloat(n||0)+86400*parseFloat(s||0)+3600*parseFloat(a||0)+60*parseFloat(o||0)+parseFloat(u||0)},ha={mediaPresentationDuration:function(t){return ca(t)},availabilityStartTime:function(t){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e=t)&&(e+="Z"),Date.parse(e)/1e3;var e},minimumUpdatePeriod:function(t){return ca(t)},timeShiftBufferDepth:function(t){return ca(t)},start:function(t){return ca(t)},width:function(t){return parseInt(t,10)},height:function(t){return parseInt(t,10)},bandwidth:function(t){return parseInt(t,10)},startNumber:function(t){return parseInt(t,10)},timescale:function(t){return parseInt(t,10)},duration:function(t){var e=parseInt(t,10);return isNaN(e)?ca(t):e},d:function(t){return parseInt(t,10)},t:function(t){return parseInt(t,10)},r:function(t){return parseInt(t,10)},DEFAULT:function(t){return t}},da=function(t){return t&&t.attributes?Xs(t.attributes).reduce(function(t,e){var i=ha[e.name]||ha.DEFAULT;return t[e.name]=i(e.value),t},{}):{}};var pa,fa,ma={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},ga=function(t,i){return i.length?Gs(t.map(function(e){return i.map(function(t){return qs(e,la(t))})})):t},ya=function(t){var e=ua(t,"SegmentTemplate")[0],i=ua(t,"SegmentList")[0],r=i&&ua(i,"SegmentURL").map(function(t){return Vs({tag:"SegmentURL"},da(t))}),n=ua(t,"SegmentBase")[0],s=i||e,a=s&&ua(s,"SegmentTimeline")[0],o=i||n||e,u=o&&ua(o,"Initialization")[0],l=e&&da(e);l&&u?l.initialization=u&&da(u):l&&l.initialization&&(l.initialization={sourceURL:l.initialization});var c={template:l,timeline:a&&ua(a,"S").map(function(t){return da(t)}),list:i&&Vs(da(i),{segmentUrls:r,initialization:da(u)}),base:n&&Vs(da(n),{initialization:da(u)})};return Object.keys(c).forEach(function(t){c[t]||delete c[t]}),c},va=function(t){return t.reduce(function(t,e){var i=da(e),r=ma[i.schemeIdUri];if(r){t[r]={attributes:i};var n=ua(e,"cenc:pssh")[0];if(n){var s=la(n),a=s&&function(t){for(var e=g.atob(t),i=new Uint8Array(e.length),r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(s);t[r].pssh=a}}return t},{})},_a=function(p,f,m){return function(t){var e=da(t),i=ga(f,ua(t,"BaseURL")),r=ua(t,"Role")[0],n={role:da(r)},s=Vs(p,e,n),a=va(ua(t,"ContentProtection"));Object.keys(a).length&&(s=Vs(s,{contentProtection:a}));var o,u,l,c=ya(t),h=ua(t,"Representation"),d=Vs(m,c);return Gs(h.map((o=s,u=i,l=d,function(t){var e=ua(t,"BaseURL"),i=ga(u,e),r=Vs(o,da(t)),n=ya(t);return i.map(function(t){return{segmentInfo:Vs(l,n),attributes:Vs(r,{baseUrl:t})}})})))}},ba=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=e.manifestUri,r=void 0===i?"":i,n=e.NOW,s=void 0===n?Date.now():n,a=e.clientOffset,o=void 0===a?0:a,u=ua(t,"Period");if(1!==u.length)throw new Error(Zs);var l,c,h=da(t),d=ga([r],ua(t,"BaseURL"));return h.sourceDuration=h.mediaPresentationDuration||0,h.NOW=s,h.clientOffset=o,Gs(u.map((l=h,c=d,function(t,e){var i=ga(c,ua(t,"BaseURL")),r=da(t),n=Vs(l,r,{periodIndex:e}),s=ua(t,"AdaptationSet"),a=ya(t);return Gs(s.map(_a(n,i,a)))})))},Ta=function(t){if(""===t)throw new Error(ta);var e=(new g.DOMParser).parseFromString(t,"application/xml"),i=e&&"MPD"===e.documentElement.tagName?e.documentElement:null;if(!i||i&&0<i.getElementsByTagName("parsererror").length)throw new Error(ea);return i},Sa=function(t,e){return function(t){var e;if(!t.length)return{};var i=t[0].attributes,r=i.sourceDuration,n=i.minimumUpdatePeriod,s=void 0===n?0:n,a=t.filter(function(t){var e=t.attributes;return"video/mp4"===e.mimeType||"video"===e.contentType}).map(Fs),o=t.filter(function(t){var e=t.attributes;return"audio/mp4"===e.mimeType||"audio"===e.contentType}),u=t.filter(function(t){var e=t.attributes;return"text/vtt"===e.mimeType||"text"===e.contentType}),l={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(e={AUDIO:{},VIDEO:{}},e["CLOSED-CAPTIONS"]={},e.SUBTITLES={},e),uri:"",duration:r,playlists:a,minimumUpdatePeriod:1e3*s};return o.length&&(l.mediaGroups.AUDIO.audio=o.reduce(function(t,e){var i,r,n,s,a,o=e.attributes.role&&e.attributes.role.value||"main",u=e.attributes.lang||"",l="main";return u&&(l=e.attributes.lang+" ("+o+")"),t[l]&&t[l].playlists[0].attributes.BANDWIDTH>e.attributes.bandwidth||(t[l]={language:u,autoselect:!0,default:"main"===o,playlists:[(i=e,n=i.attributes,s=i.segments,a={attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth,CODECS:n.codecs},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1},n.contentProtection&&(a.contentProtection=n.contentProtection),a)],uri:""}),t},{})),u.length&&(l.mediaGroups.SUBTITLES.subs=u.reduce(function(t,e){var i,r,n,s,a=e.attributes.lang||"text";return t[a]||(t[a]={language:a,default:!1,autoselect:!1,playlists:[(i=e,n=i.attributes,s=i.segments,"undefined"==typeof s&&(s=[{uri:n.baseUrl,timeline:n.periodIndex,resolvedUri:n.baseUrl||"",duration:n.sourceDuration,number:0}],n.duration=n.sourceDuration),{attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:n.baseUrl||"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1})],uri:""}),t},{})),l}(ba(Ta(t),e).map(oa))},ka=function(t){return function(t){var e=ua(t,"UTCTiming")[0];if(!e)return null;var i=da(e);switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD";break;case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET";break;case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT",i.value=Date.parse(i.value);break;case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error(na)}return i}(Ta(t))},Ca={toUnsigned:function(t){return t>>>0}},Ea=Ca.toUnsigned,wa=Object.freeze({default:Ca,__moduleExports:Ca,toUnsigned:Ea}),Aa=(wa&&Ca||wa).toUnsigned;pa=function(t,e){var i,r,n,s,a,o=[];if(!e.length)return null;for(i=0;i<t.byteLength;)r=Aa(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3]),n=fa(t.subarray(i+4,i+8)),s=1<r?i+r:t.byteLength,n===e[0]&&(1===e.length?o.push(t.subarray(i+8,s)):(a=pa(t.subarray(i+8,s),e.slice(1))).length&&(o=o.concat(a))),i=s;return o};fa=function(t){var e="";return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),e+=String.fromCharCode(t[2]),e+=String.fromCharCode(t[3])};var La=function(t){return pa(t,["moov","trak"]).reduce(function(t,e){var i,r,n,s,a;return(i=pa(e,["tkhd"])[0])?(r=i[0],s=Aa(i[n=0===r?12:20]<<24|i[n+1]<<16|i[n+2]<<8|i[n+3]),(a=pa(e,["mdia","mdhd"])[0])?(n=0===(r=a[0])?12:20,t[s]=Aa(a[n]<<24|a[n+1]<<16|a[n+2]<<8|a[n+3]),t):null):null},{})},Pa=function(n,t){var e,i,r;return e=pa(t,["moof","traf"]),i=[].concat.apply([],e.map(function(r){return pa(r,["tfhd"]).map(function(t){var e,i;return e=Aa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),i=n[e]||9e4,(pa(r,["tfdt"]).map(function(t){var e,i;return e=t[0],i=Aa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),1===e&&(i*=Math.pow(2,32),i+=Aa(t[8]<<24|t[9]<<16|t[10]<<8|t[11])),i})[0]||1/0)/i})})),r=Math.min.apply(null,i),isFinite(r)?r:0},Oa={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},xa=Oa.H264_STREAM_TYPE,Ia=Oa.ADTS_STREAM_TYPE,Da=Oa.METADATA_STREAM_TYPE,Ra=Object.freeze({default:Oa,__moduleExports:Oa,H264_STREAM_TYPE:xa,ADTS_STREAM_TYPE:Ia,METADATA_STREAM_TYPE:Da}),Ma=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};Ma.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},Ma.prototype.push=function(t){this.trigger("data",t)},Ma.prototype.flush=function(t){this.trigger("done",t)};var Ua=Ma,Na=Object.freeze({default:Ua,__moduleExports:Ua}),Ba=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},ja=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=Ba(t.dts,r),t.pts=Ba(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};ja.prototype=new(Na&&Ua||Na);var Fa={TimestampRolloverStream:ja,handleRollover:Ba},Ha=Fa.TimestampRolloverStream,Va=Fa.handleRollover,qa=Object.freeze({default:Fa,__moduleExports:Fa,TimestampRolloverStream:Ha,handleRollover:Va}),Wa=Ra&&Oa||Ra,za=function(t){var e=31&t[1];return e<<=8,e|=t[2]},Ga=function(t){return!!(64&t[1])},Xa=function(t){var e=0;return 1<(48&t[3])>>>4&&(e+=t[4]+1),e},Ya=function(t){switch(t){case 5:return"slice_layer_without_partitioning_rbsp_idr";case 6:return"sei_rbsp";case 7:return"seq_parameter_set_rbsp";case 8:return"pic_parameter_set_rbsp";case 9:return"access_unit_delimiter_rbsp";default:return null}},$a={parseType:function(t,e){var i=za(t);return 0===i?"pat":i===e?"pmt":e?"pes":null},parsePat:function(t){var e=Ga(t),i=4+Xa(t);return e&&(i+=t[i]+1),(31&t[i+10])<<8|t[i+11]},parsePmt:function(t){var e={},i=Ga(t),r=4+Xa(t);if(i&&(r+=t[r]+1),1&t[r+5]){var n;n=3+((15&t[r+1])<<8|t[r+2])-4;for(var s=12+((15&t[r+10])<<8|t[r+11]);s<n;){var a=r+s;e[(31&t[a+1])<<8|t[a+2]]=t[a],s+=5+((15&t[a+3])<<8|t[a+4])}return e}},parsePayloadUnitStartIndicator:Ga,parsePesType:function(t,e){switch(e[za(t)]){case Wa.H264_STREAM_TYPE:return"video";case Wa.ADTS_STREAM_TYPE:return"audio";case Wa.METADATA_STREAM_TYPE:return"timed-metadata";default:return null}},parsePesTime:function(t){if(!Ga(t))return null;var e=4+Xa(t);if(e>=t.byteLength)return null;var i,r=null;return 192&(i=t[e+7])&&((r={}).pts=(14&t[e+9])<<27|(255&t[e+10])<<20|(254&t[e+11])<<12|(255&t[e+12])<<5|(254&t[e+13])>>>3,r.pts*=4,r.pts+=(6&t[e+13])>>>1,r.dts=r.pts,64&i&&(r.dts=(14&t[e+14])<<27|(255&t[e+15])<<20|(254&t[e+16])<<12|(255&t[e+17])<<5|(254&t[e+18])>>>3,r.dts*=4,r.dts+=(6&t[e+18])>>>1)),r},videoPacketContainsKeyFrame:function(t){for(var e=4+Xa(t),i=t.subarray(e),r=0,n=0,s=!1;n<i.byteLength-3;n++)if(1===i[n+2]){r=n+5;break}for(;r<i.byteLength;)switch(i[r]){case 0:if(0!==i[r-1]){r+=2;break}if(0!==i[r-2]){r++;break}for(n+3!==r-2&&"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0);1!==i[++r]&&r<i.length;);n=r-2,r+=3;break;case 1:if(0!==i[r-1]||0!==i[r-2]){r+=3;break}"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0),n=r-2,r+=3;break;default:r+=3}return i=i.subarray(n),r-=n,n=0,i&&3<i.byteLength&&"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0),s}},Ka=$a.parseType,Qa=$a.parsePat,Ja=$a.parsePmt,Za=$a.parsePayloadUnitStartIndicator,to=$a.parsePesType,eo=$a.parsePesTime,io=$a.videoPacketContainsKeyFrame,ro=Object.freeze({default:$a,__moduleExports:$a,parseType:Ka,parsePat:Qa,parsePmt:Ja,parsePayloadUnitStartIndicator:Za,parsePesType:to,parsePesTime:eo,videoPacketContainsKeyFrame:io}),no=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],so=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ao={parseId3TagSize:function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},parseAdtsSize:function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},parseType:function(t,e){return t[e]==="I".charCodeAt(0)&&t[e+1]==="D".charCodeAt(0)&&t[e+2]==="3".charCodeAt(0)?"timed-metadata":!0&t[e]&&240==(240&t[e+1])?"audio":null},parseSampleRate:function(t){for(var e=0;e+5<t.length;){if(255===t[e]&&240==(246&t[e+1]))return no[(60&t[e+2])>>>2];e++}return null},parseAacTimestamp:function(t){var e,i,r;e=10,64&t[5]&&(e+=4,e+=so(t.subarray(10,14)));do{if((i=so(t.subarray(e+4,e+8)))<1)return null;if("PRIV"===String.fromCharCode(t[e],t[e+1],t[e+2],t[e+3])){r=t.subarray(e+10,e+i+10);for(var n=0;n<r.byteLength;n++)if(0===r[n]){if("com.apple.streaming.transportStreamTimestamp"===unescape(function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n}(r,0,n))){var s=r.subarray(n+1),a=(1&s[3])<<30|s[4]<<22|s[5]<<14|s[6]<<6|s[7]>>>2;return a*=4,a+=3&s[7]}break}}e+=10,e+=i}while(e<t.byteLength);return null}},oo=ao.parseId3TagSize,uo=ao.parseAdtsSize,lo=ao.parseType,co=ao.parseSampleRate,ho=ao.parseAacTimestamp,po=Object.freeze({default:ao,__moduleExports:ao,parseId3TagSize:oo,parseAdtsSize:uo,parseType:lo,parseSampleRate:co,parseAacTimestamp:ho}),fo=ro&&$a||ro,mo=po&&ao||po,go=(qa&&Fa||qa).handleRollover,yo={};yo.ts=fo,yo.aac=mo;var vo=188,_o=function(t,e,i){for(var r,n,s,a,o=0,u=vo,l=!1;u<t.byteLength;)if(71!==t[o]||71!==t[u])o++,u++;else{switch(r=t.subarray(o,u),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o+=vo,u+=vo}for(o=(u=t.byteLength)-vo,l=!1;0<=o;)if(71!==t[o]||71!==t[u])o--,u--;else{switch(r=t.subarray(o,u),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o-=vo,u-=vo}},bo=function(t,e,i){for(var r,n,s,a,o,u,l,c=0,h=vo,d=!1,p={data:[],size:0};h<t.byteLength;)if(71!==t[c]||71!==t[h])c++,h++;else{switch(r=t.subarray(c,h),yo.ts.parseType(r,e.pid)){case"pes":if(n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"video"===n&&(s&&!d&&(a=yo.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0),!i.firstKeyFrame)){if(s&&0!==p.size){for(o=new Uint8Array(p.size),u=0;p.data.length;)l=p.data.shift(),o.set(l,u),u+=l.byteLength;yo.ts.videoPacketContainsKeyFrame(o)&&(i.firstKeyFrame=yo.ts.parsePesTime(o),i.firstKeyFrame.type="video"),p.size=0}p.data.push(r),p.size+=r.byteLength}}if(d&&i.firstKeyFrame)break;c+=vo,h+=vo}for(c=(h=t.byteLength)-vo,d=!1;0<=c;)if(71!==t[c]||71!==t[h])c--,h--;else{switch(r=t.subarray(c,h),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"video"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0)}if(d)break;c-=vo,h-=vo}},To=function(t){var e={pid:null,table:null},i={};for(var r in function(t,e){for(var i,r=0,n=vo;n<t.byteLength;)if(71!==t[r]||71!==t[n])r++,n++;else{switch(i=t.subarray(r,n),yo.ts.parseType(i,e.pid)){case"pat":e.pid||(e.pid=yo.ts.parsePat(i));break;case"pmt":e.table||(e.table=yo.ts.parsePmt(i))}if(e.pid&&e.table)return;r+=vo,n+=vo}}(t,e),e.table){if(e.table.hasOwnProperty(r))switch(e.table[r]){case Wa.H264_STREAM_TYPE:i.video=[],bo(t,e,i),0===i.video.length&&delete i.video;break;case Wa.ADTS_STREAM_TYPE:i.audio=[],_o(t,e,i),0===i.audio.length&&delete i.audio}}return i},So=function(t,e){var i,r;return(r=(i=t)[0]==="I".charCodeAt(0)&&i[1]==="D".charCodeAt(0)&&i[2]==="3".charCodeAt(0)?function(t){for(var e,i=!1,r=0,n=null,s=null,a=0,o=0;3<=t.length-o;){switch(yo.aac.parseType(t,o)){case"timed-metadata":if(t.length-o<10){i=!0;break}if((a=yo.aac.parseId3TagSize(t,o))>t.length){i=!0;break}null===s&&(e=t.subarray(o,o+a),s=yo.aac.parseAacTimestamp(e)),o+=a;break;case"audio":if(t.length-o<7){i=!0;break}if((a=yo.aac.parseAdtsSize(t,o))>t.length){i=!0;break}null===n&&(e=t.subarray(o,o+a),n=yo.aac.parseSampleRate(e)),r++,o+=a;break;default:o++}if(i)return null}if(null===n||null===s)return null;var u=9e4/n;return{audio:[{type:"audio",dts:s,pts:s},{type:"audio",dts:s+1024*r*u,pts:s+1024*r*u}]}}(t):To(t))&&(r.audio||r.video)?(function(t,e){if(t.audio&&t.audio.length){var i=e;"undefined"==typeof i&&(i=t.audio[0].dts),t.audio.forEach(function(t){t.dts=go(t.dts,i),t.pts=go(t.pts,i),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4})}if(t.video&&t.video.length){var r=e;if("undefined"==typeof r&&(r=t.video[0].dts),t.video.forEach(function(t){t.dts=go(t.dts,r),t.pts=go(t.pts,r),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4}),t.firstKeyFrame){var n=t.firstKeyFrame;n.dts=go(n.dts,r),n.pts=go(n.pts,r),n.dtsTime=n.dts/9e4,n.ptsTime=n.dts/9e4}}}(r,e),r):null};var ko=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Co=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),Eo=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},wo=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},Ao=null,Lo=function(){function c(t){ko(this,c),Ao||(Ao=wo()),this._tables=[[Ao[0][0].slice(),Ao[0][1].slice(),Ao[0][2].slice(),Ao[0][3].slice(),Ao[0][4].slice()],[Ao[1][0].slice(),Ao[1][1].slice(),Ao[1][2].slice(),Ao[1][3].slice(),Ao[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),Po=function(){function t(){ko(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Oo=function(e){function i(){ko(this,i);var t=Eo(this,e.call(this,Po));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(Po),xo=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},Io=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new Lo(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=xo(r[m]),d=xo(r[m+1]),p=xo(r[m+2]),f=xo(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=xo(a[m]^o),a[m+1]=xo(a[m+1]^u),a[m+2]=xo(a[m+2]^l),a[m+3]=xo(a[m+3]^c),o=h,u=d,l=p,c=f;return s},Do=function(){function u(t,e,i,r){ko(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new Oo,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([xo(s[o-4]),xo(s[o-3]),xo(s[o-2]),xo(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=Io(e,i,r);n.set(t,e.byteOffset)}},Co(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),Ro=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Os.buildAbsoluteURL(g.location.href,t)),Os.buildAbsoluteURL(t,e))},Mo=As.mergeOptions,Uo=As.log,No=function(n,s){["AUDIO","SUBTITLES"].forEach(function(t){for(var e in n.mediaGroups[t])for(var i in n.mediaGroups[t][e]){var r=n.mediaGroups[t][e][i];s(r,t,e,i)}})},Bo=function(t,e){var i=Mo(t,{}),r=i.playlists[e.uri];if(!r)return null;if(r.segments&&e.segments&&r.segments.length===e.segments.length&&r.mediaSequence===e.mediaSequence)return null;var n=Mo(r,e);r.segments&&(n.segments=function(t,e,i){var r=e.slice();i=i||0;for(var n=Math.min(t.length,e.length+i),s=i;s<n;s++)r[s-i]=Mo(t[s],r[s-i]);return r}(r.segments,e.segments,e.mediaSequence-r.mediaSequence)),n.segments.forEach(function(t){var e,i;e=t,i=n.resolvedUri,e.resolvedUri||(e.resolvedUri=Ro(i,e.uri)),e.key&&!e.key.resolvedUri&&(e.key.resolvedUri=Ro(i,e.key.uri)),e.map&&!e.map.resolvedUri&&(e.map.resolvedUri=Ro(i,e.map.uri))});for(var s=0;s<i.playlists.length;s++)i.playlists[s].uri===e.uri&&(i.playlists[s]=n);return i.playlists[e.uri]=n,i},jo=function(t){for(var e=t.playlists.length;e--;){var i=t.playlists[e];(t.playlists[i.uri]=i).resolvedUri=Ro(t.uri,i.uri),i.id=e,i.attributes||(i.attributes={},Uo.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))}},Fo=function(e){No(e,function(t){t.uri&&(t.resolvedUri=Ro(e.uri,t.uri))})},Ho=function(t,e){var i=t.segments[t.segments.length-1];return e&&i&&i.duration?1e3*i.duration:500*(t.targetDuration||10)},Vo=function(n){function s(t,e,i){y(this,s);var r=b(this,n.call(this));if(r.srcUrl=t,r.hls_=e,r.withCredentials=i,!r.srcUrl)throw new Error("A non-empty playlist URL is required");return r.state="HAVE_NOTHING",r.on("mediaupdatetimeout",function(){"HAVE_METADATA"===r.state&&(r.state="HAVE_CURRENT_METADATA",r.request=r.hls_.xhr({uri:Ro(r.master.uri,r.media().uri),withCredentials:r.withCredentials},function(t,e){if(r.request)return t?r.playlistRequestError(r.request,r.media().uri,"HAVE_METADATA"):void r.haveMetadata(r.request,r.media().uri)}))}),r}return _(s,n),s.prototype.playlistRequestError=function(t,e,i){this.request=null,i&&(this.state=i),this.error={playlist:this.master.playlists[e],status:t.status,message:"HLS playlist request error at URL: "+e,responseText:t.responseText,code:500<=t.status?4:2},this.trigger("error")},s.prototype.haveMetadata=function(t,e){var i=this;this.request=null,this.state="HAVE_METADATA";var r=new js;r.push(t.responseText),r.end(),r.manifest.uri=e,r.manifest.attributes=r.manifest.attributes||{};var n=Bo(this.master,r.manifest);this.targetDuration=r.manifest.targetDuration,n?(this.master=n,this.media_=this.master.playlists[r.manifest.uri]):this.trigger("playlistunchanged"),this.media().endList||(g.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=g.setTimeout(function(){i.trigger("mediaupdatetimeout")},Ho(this.media(),!!n))),this.trigger("loadedplaylist")},s.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},s.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},s.prototype.media=function(i){var r=this;if(!i)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var n=this.state;if("string"==typeof i){if(!this.master.playlists[i])throw new Error("Unknown playlist URI: "+i);i=this.master.playlists[i]}var t=!this.media_||i.uri!==this.media_.uri;if(this.master.playlists[i.uri].endList)return this.request&&(this.request.onreadystatechange=null,this.request.abort(),this.request=null),this.state="HAVE_METADATA",this.media_=i,void(t&&(this.trigger("mediachanging"),this.trigger("mediachange")));if(t){if(this.state="SWITCHING_MEDIA",this.request){if(Ro(this.master.uri,i.uri)===this.request.url)return;this.request.onreadystatechange=null,this.request.abort(),this.request=null}this.media_&&this.trigger("mediachanging"),this.request=this.hls_.xhr({uri:Ro(this.master.uri,i.uri),withCredentials:this.withCredentials},function(t,e){if(r.request){if(t)return r.playlistRequestError(r.request,i.uri,n);r.haveMetadata(e,i.uri),"HAVE_MASTER"===n?r.trigger("loadedmetadata"):r.trigger("mediachange")}})}},s.prototype.pause=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout),"HAVE_NOTHING"===this.state&&(this.started=!1),"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")},s.prototype.load=function(t){var e=this;g.clearTimeout(this.mediaUpdateTimeout);var i=this.media();if(t){var r=i?i.targetDuration/2*1e3:5e3;this.mediaUpdateTimeout=g.setTimeout(function(){return e.load()},r)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()},s.prototype.start=function(){var r=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"HLS playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");var i=new js;return i.push(e.responseText),i.end(),r.state="HAVE_MASTER",i.manifest.uri=r.srcUrl,i.manifest.playlists?(r.master=i.manifest,jo(r.master),Fo(r.master),r.trigger("loadedplaylist"),void(r.request||r.media(i.manifest.playlists[0]))):(r.master={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:g.location.href,playlists:[{uri:r.srcUrl,id:0}]},r.master.playlists[r.srcUrl]=r.master.playlists[0],r.master.playlists[0].resolvedUri=r.srcUrl,r.master.playlists[0].attributes=r.master.playlists[0].attributes||{},r.haveMetadata(e,r.srcUrl),r.trigger("loadedmetadata"))}})},s}(As.EventTarget),qo=As.createTimeRange,Wo=function(t,e,i){var r,n;return"undefined"==typeof e&&(e=t.mediaSequence+t.segments.length),e<t.mediaSequence?0:(r=function(t,e){var i=0,r=e-t.mediaSequence,n=t.segments[r];if(n){if("undefined"!=typeof n.start)return{result:n.start,precise:!0};if("undefined"!=typeof n.end)return{result:n.end-n.duration,precise:!0}}for(;r--;){if("undefined"!=typeof(n=t.segments[r]).end)return{result:i+n.end,precise:!0};if(i+=n.duration,"undefined"!=typeof n.start)return{result:i+n.start,precise:!0}}return{result:i,precise:!1}}(t,e)).precise?r.result:(n=function(t,e){for(var i=0,r=void 0,n=e-t.mediaSequence;n<t.segments.length;n++){if("undefined"!=typeof(r=t.segments[n]).start)return{result:r.start-i,precise:!0};if(i+=r.duration,"undefined"!=typeof r.end)return{result:r.end-i,precise:!0}}return{result:-1,precise:!1}}(t,e)).precise?n.result:r.result+i},zo=function(t,e,i){if(!t)return 0;if("number"!=typeof i&&(i=0),"undefined"==typeof e){if(t.totalDuration)return t.totalDuration;if(!t.endList)return g.Infinity}return Wo(t,e,i)},Go=function(t,e,i){var r=0;if(i<e){var n=[i,e];e=n[0],i=n[1]}if(e<0){for(var s=e;s<Math.min(0,i);s++)r+=t.targetDuration;e=0}for(var a=e;a<i;a++)r+=t.segments[a].duration;return r},Xo=function(t){if(!t.segments.length)return 0;for(var e=t.segments.length-1,i=t.segments[e].duration||t.targetDuration,r=i+2*t.targetDuration;e--&&!(r<=(i+=t.segments[e].duration)););return Math.max(0,e)},Yo=function(t,e,i){if(!t||!t.segments)return null;if(t.endList)return zo(t);if(null===e)return null;e=e||0;var r=i?Xo(t):t.segments.length;return Wo(t,t.mediaSequence+r,e)},$o=function(t){return t-Math.floor(t)==0},Ko=function(t,e){if($o(e))return e+.1*t;for(var i=e.toString().split(".")[1].length,r=1;r<=i;r++){var n=Math.pow(10,r),s=e*n;if($o(s)||r===i)return(s+t)/n}},Qo=Ko.bind(null,1),Jo=Ko.bind(null,-1),Zo=function(t){return t.excludeUntil&&t.excludeUntil>Date.now()},tu=function(t){return t.excludeUntil&&t.excludeUntil===1/0},eu=function(t){var e=Zo(t);return!t.disabled&&!e},iu=function(t,e){return e.attributes&&e.attributes[t]},ru=function(t,e){if(1===t.playlists.length)return!0;var i=e.attributes.BANDWIDTH||Number.MAX_VALUE;return 0===t.playlists.filter(function(t){return!!eu(t)&&(t.attributes.BANDWIDTH||0)<i}).length},nu={duration:zo,seekable:function(t,e){var i=e||0,r=Yo(t,e,!0);return null===r?qo():qo(i,r)},safeLiveIndex:Xo,getMediaInfoForTime:function(t,e,i,r){var n=void 0,s=void 0,a=t.segments.length,o=e-r;if(o<0){if(0<i)for(n=i-1;0<=n;n--)if(s=t.segments[n],0<(o+=Jo(s.duration)))return{mediaIndex:n,startTime:r-Go(t,i,n)};return{mediaIndex:0,startTime:e}}if(i<0){for(n=i;n<0;n++)if((o-=t.targetDuration)<0)return{mediaIndex:0,startTime:e};i=0}for(n=i;n<a;n++)if(s=t.segments[n],(o-=Qo(s.duration))<0)return{mediaIndex:n,startTime:r+Go(t,i,n)};return{mediaIndex:a-1,startTime:e}},isEnabled:eu,isDisabled:function(t){return t.disabled},isBlacklisted:Zo,isIncompatible:tu,playlistEnd:Yo,isAes:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].key)return!0;return!1},isFmp4:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].map)return!0;return!1},hasAttribute:iu,estimateSegmentRequestTime:function(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;return iu("BANDWIDTH",i)?(t*i.attributes.BANDWIDTH-8*r)/e:NaN},isLowestEnabledRendition:ru},su=As.xhr,au=As.mergeOptions,ou=function(){return function t(e,r){e=au({timeout:45e3},e);var i=t.beforeRequest||As.Hls.xhr.beforeRequest;if(i&&"function"==typeof i){var n=i(e);n&&(e=n)}var s=su(e,function(t,e){var i=s.response;!t&&i&&(s.responseTime=Date.now(),s.roundTripTime=s.responseTime-s.requestTime,s.bytesReceived=i.byteLength||i.length,s.bandwidth||(s.bandwidth=Math.floor(s.bytesReceived/s.roundTripTime*8*1e3))),e.headers&&(s.responseHeaders=e.headers),t&&"ETIMEDOUT"===t.code&&(s.timedout=!0),t||s.aborted||200===e.statusCode||206===e.statusCode||0===e.statusCode||(t=new Error("XHR Failed with a response of: "+(s&&(i||s.responseText)))),r(t,s)}),a=s.abort;return s.abort=function(){return s.aborted=!0,a.apply(s,arguments)},s.uri=e.uri,s.requestTime=Date.now(),s}},uu=function(t,e){var i=t.toString(16);return"00".substring(0,2-i.length)+i+(e%2?" ":"")},lu=function(t){return 32<=t&&t<126?String.fromCharCode(t):"."},cu=function(i){var r={};return Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r},hu=function(t){var e=t.byterange||{length:1/0,offset:0};return[e.length,e.offset,t.resolvedUri].join(",")},du=function(t){for(var e=Array.prototype.slice.call(t),i="",r=0;r<e.length/16;r++)i+=e.slice(16*r,16*r+16).map(uu).join("")+" "+e.slice(16*r,16*r+16).map(lu).join("")+"\n";return i},pu=Object.freeze({createTransferableMessage:cu,initSegmentId:hu,hexDump:du,tagDump:function(t){var e=t.bytes;return du(e)},textRanges:function(t){var e,i,r="",n=void 0;for(n=0;n<t.length;n++)r+=(i=n,(e=t).start(i)+"-"+e.end(i)+" ");return r}}),fu=1/30,mu=function(t,e){var i=[],r=void 0;if(t&&t.length)for(r=0;r<t.length;r++)e(t.start(r),t.end(r))&&i.push([t.start(r),t.end(r)]);return As.createTimeRanges(i)},gu=function(t,i){return mu(t,function(t,e){return t-fu<=i&&i<=e+fu})},yu=function(t,e){return mu(t,function(t){return e<=t-fu})},vu=function(t){var e=[];if(!t||!t.length)return"";for(var i=0;i<t.length;i++)e.push(t.start(i)+" => "+t.end(i));return e.join(", ")},_u=function(t){for(var e=[],i=0;i<t.length;i++)e.push({start:t.start(i),end:t.end(i)});return e},bu=function(t,e,i){var r=void 0,n=void 0;if(i&&i.cues)for(r=i.cues.length;r--;)(n=i.cues[r]).startTime<=e&&n.endTime>=t&&i.removeCue(n)},Tu=function(t){return isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE:t},Su=function(t,e,i){var n=g.WebKitDataCue||g.VTTCue;if(e&&e.forEach(function(t){var e=t.stream;this.inbandTextTracks_[e].addCue(new n(t.startTime+this.timestampOffset,t.endTime+this.timestampOffset,t.text))},t),i){var s=Tu(t.mediaSource_.duration);if(i.forEach(function(t){var r=t.cueTime+this.timestampOffset;t.frames.forEach(function(t){var e,i=new n(r,r,t.value||t.url||t.data||"");i.frame=t,i.value=t,e=i,Object.defineProperties(e.frame,{id:{get:function(){return As.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),e.value.key}},value:{get:function(){return As.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),e.value.data}},privateData:{get:function(){return As.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),e.value.data}}}),this.metadataTrack_.addCue(i)},this)},t),t.metadataTrack_&&t.metadataTrack_.cues&&t.metadataTrack_.cues.length){for(var r=t.metadataTrack_.cues,a=[],o=0;o<r.length;o++)r[o]&&a.push(r[o]);var u=a.reduce(function(t,e){var i=t[e.startTime]||[];return i.push(e),t[e.startTime]=i,t},{}),l=Object.keys(u).sort(function(t,e){return Number(t)-Number(e)});l.forEach(function(t,e){var i=u[t],r=Number(l[e+1])||s;i.forEach(function(t){t.endTime=r})})}}},ku="undefined"!=typeof window?window:{},Cu="undefined"==typeof Symbol?"__target":Symbol(),Eu="application/javascript",wu=ku.BlobBuilder||ku.WebKitBlobBuilder||ku.MozBlobBuilder||ku.MSBlobBuilder,Au=ku.URL||ku.webkitURL||Au&&Au.msURL,Lu=ku.Worker;function Pu(n,s){return function(t){var e=this;if(!s)return new Lu(n);if(Lu&&!t){var i=Du(s.toString().replace(/^function.+?{/,"").slice(0,-1));return this[Cu]=new Lu(i),function(t,e){if(!t||!e)return;var i=t.terminate;t.objURL=e,t.terminate=function(){t.objURL&&Au.revokeObjectURL(t.objURL),i.call(t)}}(this[Cu],i),this[Cu]}var r={postMessage:function(t){e.onmessage&&setTimeout(function(){e.onmessage({data:t,target:r})})}};s.call(r),this.postMessage=function(t){setTimeout(function(){r.onmessage({data:t,target:e})})},this.isThisThread=!0}}if(Lu){var Ou,xu=Du("self.onmessage = function () {}"),Iu=new Uint8Array(1);try{(Ou=new Lu(xu)).postMessage(Iu,[Iu.buffer])}catch(t){Lu=null}finally{Au.revokeObjectURL(xu),Ou&&Ou.terminate()}}function Du(e){try{return Au.createObjectURL(new Blob([e],{type:Eu}))}catch(t){var i=new wu;return i.append(e),Au.createObjectURL(i.getBlob(type))}}var Ru=new Pu("./transmuxer-worker.worker.js",function(ie,t){var re=this;!function(){var o,e,i,n,s,r,t,a,u,l,c,h,d,p,f,m,g,y,v,_,b,T,S,k,C,E,w,A,L,P,O,x,I,D,R,M,U,N,B,j,F="undefined"!=typeof ie?ie:"undefined"!=typeof global?global:"undefined"!=typeof re?re:{},H="undefined"!=typeof ie?ie:"undefined"!=typeof F?F:"undefined"!=typeof re?re:{},V=Math.pow(2,32)-1;!function(){var t;if(T={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(t in T)T.hasOwnProperty(t)&&(T[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);S=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),C=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),k=new Uint8Array([0,0,0,1]),E=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),w=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),A={video:E,audio:w},O=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),P=new Uint8Array([0,0,0,0,0,0,0,0]),x=new Uint8Array([0,0,0,0,0,0,0,0]),I=x,D=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),R=x,L=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),o=function(t){var e,i,r=[],n=0;for(e=1;e<arguments.length;e++)r.push(arguments[e]);for(e=r.length;e--;)n+=r[e].byteLength;for(i=new Uint8Array(n+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(t,4),e=0,n=8;e<r.length;e++)i.set(r[e],n),n+=r[e].byteLength;return i},e=function(){return o(T.dinf,o(T.dref,O))},i=function(t){return o(T.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,t.audioobjecttype<<3|t.samplingfrequencyindex>>>1,t.samplingfrequencyindex<<7|t.channelcount<<3,6,1,2]))},f=function(t){return o(T.hdlr,A[t])},p=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,t.duration>>>24&255,t.duration>>>16&255,t.duration>>>8&255,255&t.duration,85,196,0,0]);return t.samplerate&&(e[12]=t.samplerate>>>24&255,e[13]=t.samplerate>>>16&255,e[14]=t.samplerate>>>8&255,e[15]=255&t.samplerate),o(T.mdhd,e)},d=function(t){return o(T.mdia,p(t),f(t.type),r(t))},s=function(t){return o(T.mfhd,new Uint8Array([0,0,0,0,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t]))},r=function(t){return o(T.minf,"video"===t.type?o(T.vmhd,L):o(T.smhd,P),e(),g(t))},t=function(t,e){for(var i=[],r=e.length;r--;)i[r]=v(e[r]);return o.apply(null,[T.moof,s(t)].concat(i))},a=function(t){for(var e=t.length,i=[];e--;)i[e]=c(t[e]);return o.apply(null,[T.moov,l(4294967295)].concat(i).concat(u(t)))},u=function(t){for(var e=t.length,i=[];e--;)i[e]=_(t[e]);return o.apply(null,[T.mvex].concat(i))},l=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return o(T.mvhd,e)},m=function(t){var e,i,r=t.samples||[],n=new Uint8Array(4+r.length);for(i=0;i<r.length;i++)e=r[i].flags,n[i+4]=e.dependsOn<<4|e.isDependedOn<<2|e.hasRedundancy;return o(T.sdtp,n)},g=function(t){return o(T.stbl,y(t),o(T.stts,R),o(T.stsc,I),o(T.stsz,D),o(T.stco,x))},y=function(t){return o(T.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===t.type?M(t):U(t))},M=function(t){var e,i=t.sps||[],r=t.pps||[],n=[],s=[];for(e=0;e<i.length;e++)n.push((65280&i[e].byteLength)>>>8),n.push(255&i[e].byteLength),n=n.concat(Array.prototype.slice.call(i[e]));for(e=0;e<r.length;e++)s.push((65280&r[e].byteLength)>>>8),s.push(255&r[e].byteLength),s=s.concat(Array.prototype.slice.call(r[e]));return o(T.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&t.width)>>8,255&t.width,(65280&t.height)>>8,255&t.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o(T.avcC,new Uint8Array([1,t.profileIdc,t.profileCompatibility,t.levelIdc,255].concat([i.length]).concat(n).concat([r.length]).concat(s))),o(T.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},U=function(t){return o(T.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&t.channelcount)>>8,255&t.channelcount,(65280&t.samplesize)>>8,255&t.samplesize,0,0,0,0,(65280&t.samplerate)>>8,255&t.samplerate,0,0]),i(t))},h=function(t){var e=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,0,(4278190080&t.duration)>>24,(16711680&t.duration)>>16,(65280&t.duration)>>8,255&t.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&t.width)>>8,255&t.width,0,0,(65280&t.height)>>8,255&t.height,0,0]);return o(T.tkhd,e)},v=function(t){var e,i,r,n,s,a;return e=o(T.tfhd,new Uint8Array([0,0,0,58,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(t.baseMediaDecodeTime/(V+1)),a=Math.floor(t.baseMediaDecodeTime%(V+1)),i=o(T.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,a>>>24&255,a>>>16&255,a>>>8&255,255&a])),92,"audio"===t.type?(r=b(t,92),o(T.traf,e,i,r)):(n=m(t),r=b(t,n.length+92),o(T.traf,e,i,r,n))},c=function(t){return t.duration=t.duration||4294967295,o(T.trak,h(t),d(t))},_=function(t){var e=new Uint8Array([0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==t.type&&(e[e.length-1]=0),o(T.trex,e)},j=function(t,e){var i=0,r=0,n=0,s=0;return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(r=2),void 0!==t[0].flags&&(n=4),void 0!==t[0].compositionTimeOffset&&(s=8)),[0,0,i|r|n|s,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},B=function(t,e){var i,r,n,s;for(e+=20+16*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size,n.flags.isLeading<<2|n.flags.dependsOn,n.flags.isDependedOn<<6|n.flags.hasRedundancy<<4|n.flags.paddingValue<<1|n.flags.isNonSyncSample,61440&n.flags.degradationPriority,15&n.flags.degradationPriority,(4278190080&n.compositionTimeOffset)>>>24,(16711680&n.compositionTimeOffset)>>>16,(65280&n.compositionTimeOffset)>>>8,255&n.compositionTimeOffset]);return o(T.trun,new Uint8Array(i))},N=function(t,e){var i,r,n,s;for(e+=20+8*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size]);return o(T.trun,new Uint8Array(i))},b=function(t,e){return"audio"===t.type?N(t,e):B(t,e)};var q={ftyp:n=function(){return o(T.ftyp,S,k,S,C)},mdat:function(t){return o(T.mdat,t)},moof:t,moov:a,initSegment:function(t){var e,i=n(),r=a(t);return(e=new Uint8Array(i.byteLength+r.byteLength)).set(i),e.set(r,i.byteLength),e}},W=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};W.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},W.prototype.push=function(t){this.trigger("data",t)},W.prototype.flush=function(t){this.trigger("done",t)};var z=W,G=function t(){t.prototype.init.call(this),this.captionPackets_=[],this.ccStreams_=[new Q(0,0),new Q(0,1),new Q(1,0),new Q(1,1)],this.reset(),this.ccStreams_.forEach(function(t){t.on("data",this.trigger.bind(this,"data")),t.on("done",this.trigger.bind(this,"done"))},this)};(G.prototype=new z).push=function(t){var e,i,r;if("sei_rbsp"===t.nalUnitType&&(4===(e=function(t){for(var e=0,i={payloadType:-1,payloadSize:0},r=0,n=0;e<t.byteLength&&128!==t[e];){for(;255===t[e];)r+=255,e++;for(r+=t[e++];255===t[e];)n+=255,e++;if(n+=t[e++],!i.payload&&4===r){i.payloadType=r,i.payloadSize=n,i.payload=t.subarray(e,e+n);break}e+=n,n=r=0}return i}(t.escapedRBSP)).payloadType&&(i=181!==(r=e).payload[0]?null:49!=(r.payload[1]<<8|r.payload[2])?null:"GA94"!==String.fromCharCode(r.payload[3],r.payload[4],r.payload[5],r.payload[6])?null:3!==r.payload[7]?null:r.payload.subarray(8,r.payload.length-1))))if(t.dts<this.latestDts_)this.ignoreNextEqualDts_=!0;else{if(t.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1));this.captionPackets_=this.captionPackets_.concat(function(t,e){var i,r,n,s,a=[];if(!(64&e[0]))return a;for(r=31&e[0],i=0;i<r;i++)s={type:3&e[2+(n=3*i)],pts:t},4&e[n+2]&&(s.ccData=e[n+3]<<8|e[n+4],a.push(s));return a}(t.pts,i)),this.latestDts_!==t.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=t.dts}},G.prototype.flush=function(){this.captionPackets_.length?(this.captionPackets_.forEach(function(t,e){t.presortIndex=e}),this.captionPackets_.sort(function(t,e){return t.pts===e.pts?t.presortIndex-e.presortIndex:t.pts-e.pts}),this.captionPackets_.forEach(function(t){t.type<2&&this.dispatchCea608Packet(t)},this),this.captionPackets_.length=0,this.ccStreams_.forEach(function(t){t.flush()},this)):this.ccStreams_.forEach(function(t){t.flush()},this)},G.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach(function(t){t.reset()})},G.prototype.dispatchCea608Packet=function(t){this.setsChannel1Active(t)?this.activeCea608Channel_[t.type]=0:this.setsChannel2Active(t)&&(this.activeCea608Channel_[t.type]=1),null!==this.activeCea608Channel_[t.type]&&this.ccStreams_[(t.type<<1)+this.activeCea608Channel_[t.type]].push(t)},G.prototype.setsChannel1Active=function(t){return 4096==(30720&t.ccData)},G.prototype.setsChannel2Active=function(t){return 6144==(30720&t.ccData)};var X={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Y=function(t){return null===t?"":(t=X[t]||t,String.fromCharCode(t))},$=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],K=function(){for(var t=[],e=15;e--;)t.push("");return t},Q=function t(e,i){t.prototype.init.call(this),this.field_=e||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(t){var e,i,r,n,s;if((e=32639&t.ccData)!==this.lastControlCode_){if(4096==(61440&e)?this.lastControlCode_=e:e!==this.PADDING_&&(this.lastControlCode_=null),r=e>>>8,n=255&e,e!==this.PADDING_)if(e===this.RESUME_CAPTION_LOADING_)this.mode_="popOn";else if(e===this.END_OF_CAPTION_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts;else if(e===this.ROLL_UP_2_ROWS_)this.topRow_=13,this.mode_="rollUp";else if(e===this.ROLL_UP_3_ROWS_)this.topRow_=12,this.mode_="rollUp";else if(e===this.ROLL_UP_4_ROWS_)this.topRow_=11,this.mode_="rollUp";else if(e===this.CARRIAGE_RETURN_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts;else if(e===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[14]=this.nonDisplayed_[14].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1);else if(e===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(t.pts),this.displayed_=K();else if(e===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=K();else if(e===this.RESUME_DIRECT_CAPTIONING_)this.mode_="paintOn";else if(this.isSpecialCharacter(r,n))s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isExtCharacter(r,n))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1),s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isMidRowCode(r,n))this.clearFormatting(t.pts),this[this.mode_](t.pts," "),this.column_++,14==(14&n)&&this.addFormatting(t.pts,["i"]),1==(1&n)&&this.addFormatting(t.pts,["u"]);else if(this.isOffsetControlCode(r,n))this.column_+=3&n;else if(this.isPAC(r,n)){var a=$.indexOf(7968&e);a!==this.row_&&(this.clearFormatting(t.pts),this.row_=a),1&n&&-1===this.formatting_.indexOf("u")&&this.addFormatting(t.pts,["u"]),16==(16&e)&&(this.column_=4*((14&e)>>1)),this.isColorPAC(n)&&14==(14&n)&&this.addFormatting(t.pts,["i"])}else this.isNormalChar(r)&&(0===n&&(n=null),s=Y(r),s+=Y(n),this[this.mode_](t.pts,s),this.column_+=s.length)}else this.lastControlCode_=null}};Q.prototype=new z,Q.prototype.flushDisplayed=function(t){var e=this.displayed_.map(function(t){return t.trim()}).join("\n").replace(/^\n+|\n+$/g,"");e.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,text:e,stream:this.name_})},Q.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=K(),this.nonDisplayed_=K(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.formatting_=[]},Q.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},Q.prototype.isSpecialCharacter=function(t,e){return t===this.EXT_&&48<=e&&e<=63},Q.prototype.isExtCharacter=function(t,e){return(t===this.EXT_+1||t===this.EXT_+2)&&32<=e&&e<=63},Q.prototype.isMidRowCode=function(t,e){return t===this.EXT_&&32<=e&&e<=47},Q.prototype.isOffsetControlCode=function(t,e){return t===this.OFFSET_&&33<=e&&e<=35},Q.prototype.isPAC=function(t,e){return t>=this.BASE_&&t<this.BASE_+8&&64<=e&&e<=127},Q.prototype.isColorPAC=function(t){return 64<=t&&t<=79||96<=t&&t<=127},Q.prototype.isNormalChar=function(t){return 32<=t&&t<=127},Q.prototype.addFormatting=function(t,e){this.formatting_=this.formatting_.concat(e);var i=e.reduce(function(t,e){return t+"<"+e+">"},"");this[this.mode_](t,i)},Q.prototype.clearFormatting=function(t){if(this.formatting_.length){var e=this.formatting_.reverse().reduce(function(t,e){return t+"</"+e+">"},"");this.formatting_=[],this[this.mode_](t,e)}},Q.prototype.popOn=function(t,e){var i=this.nonDisplayed_[this.row_];i+=e,this.nonDisplayed_[this.row_]=i},Q.prototype.rollUp=function(t,e){var i=this.displayed_[14];i+=e,this.displayed_[14]=i},Q.prototype.shiftRowsUp_=function(){var t;for(t=0;t<this.topRow_;t++)this.displayed_[t]="";for(t=this.topRow_;t<14;t++)this.displayed_[t]=this.displayed_[t+1];this.displayed_[14]=""},Q.prototype.paintOn=function(){};var J={CaptionStream:G,Cea608Stream:Q},Z={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},tt=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},et=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=tt(t.dts,r),t.pts=tt(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};et.prototype=new z;var it,rt=et,nt=function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n},st=function(t,e,i){return decodeURIComponent(nt(t,e,i))},at=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ot={TXXX:function(t){var e;if(3===t.data[0]){for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.value=st(t.data,e+1,t.data.length).replace(/\0*$/,"");break}t.data=t.value}},WXXX:function(t){var e;if(3===t.data[0])for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.url=st(t.data,e+1,t.data.length);break}},PRIV:function(t){var e,i;for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=(i=t.data,unescape(nt(i,0,e)));break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}};(it=function(t){var e,u={debug:!(!t||!t.debug),descriptor:t&&t.descriptor},l=0,c=[],h=0;if(it.prototype.init.call(this),this.dispatchType=Z.METADATA_STREAM_TYPE.toString(16),u.descriptor)for(e=0;e<u.descriptor.length;e++)this.dispatchType+=("00"+u.descriptor[e].toString(16)).slice(-2);this.push=function(t){var e,i,r,n,s;if("timed-metadata"===t.type)if(t.dataAlignmentIndicator&&(h=0,c.length=0),0===c.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))u.debug;else if(c.push(t),h+=t.data.byteLength,1===c.length&&(l=at(t.data.subarray(6,10)),l+=10),!(h<l)){for(e={data:new Uint8Array(l),frames:[],pts:c[0].pts,dts:c[0].dts},s=0;s<l;)e.data.set(c[0].data.subarray(0,l-s),s),s+=c[0].data.byteLength,h-=c[0].data.byteLength,c.shift();i=10,64&e.data[5]&&(i+=4,i+=at(e.data.subarray(10,14)),l-=at(e.data.subarray(16,20)));do{if((r=at(e.data.subarray(i+4,i+8)))<1)return;if((n={id:String.fromCharCode(e.data[i],e.data[i+1],e.data[i+2],e.data[i+3]),data:e.data.subarray(i+10,i+r+10)}).key=n.id,ot[n.id]&&(ot[n.id](n),"com.apple.streaming.transportStreamTimestamp"===n.owner)){var a=n.data,o=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2;o*=4,o+=3&a[7],n.timeStamp=o,void 0===e.pts&&void 0===e.dts&&(e.pts=n.timeStamp,e.dts=n.timeStamp),this.trigger("timestamp",n)}e.frames.push(n),i+=10,i+=r}while(i<l);this.trigger("data",e)}}}).prototype=new z;var ut,lt,ct,ht=it,dt=rt;(ut=function(){var n=new Uint8Array(188),s=0;ut.prototype.init.call(this),this.push=function(t){var e,i=0,r=188;for(s?((e=new Uint8Array(t.byteLength+s)).set(n.subarray(0,s)),e.set(t,s),s=0):e=t;r<e.byteLength;)71!==e[i]||71!==e[r]?(i++,r++):(this.trigger("data",e.subarray(i,r)),i+=188,r+=188);i<e.byteLength&&(n.set(e.subarray(i),0),s=e.byteLength-i)},this.flush=function(){188===s&&71===n[0]&&(this.trigger("data",n),s=0),this.trigger("done")}}).prototype=new z,(lt=function(){var r,n,s,a;lt.prototype.init.call(this),(a=this).packetsWaitingForPmt=[],this.programMapTable=void 0,r=function(t,e){var i=0;e.payloadUnitStartIndicator&&(i+=t[i]+1),"pat"===e.type?n(t.subarray(i),e):s(t.subarray(i),e)},n=function(t,e){e.section_number=t[7],e.last_section_number=t[8],a.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=a.pmtPid},s=function(t,e){var i,r;if(1&t[5]){for(a.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&t[1])<<8|t[2])-4,r=12+((15&t[10])<<8|t[11]);r<i;){var n=t[r],s=(31&t[r+1])<<8|t[r+2];n===Z.H264_STREAM_TYPE&&null===a.programMapTable.video?a.programMapTable.video=s:n===Z.ADTS_STREAM_TYPE&&null===a.programMapTable.audio?a.programMapTable.audio=s:n===Z.METADATA_STREAM_TYPE&&(a.programMapTable["timed-metadata"][s]=n),r+=5+((15&t[r+3])<<8|t[r+4])}e.programMapTable=a.programMapTable}},this.push=function(t){var e={},i=4;if(e.payloadUnitStartIndicator=!!(64&t[1]),e.pid=31&t[1],e.pid<<=8,e.pid|=t[2],1<(48&t[3])>>>4&&(i+=t[i]+1),0===e.pid)e.type="pat",r(t.subarray(i),e),this.trigger("data",e);else if(e.pid===this.pmtPid)for(e.type="pmt",r(t.subarray(i),e),this.trigger("data",e);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift());else void 0===this.programMapTable?this.packetsWaitingForPmt.push([t,i,e]):this.processPes_(t,i,e)},this.processPes_=function(t,e,i){i.pid===this.programMapTable.video?i.streamType=Z.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Z.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}}).prototype=new z,lt.STREAM_TYPES={h264:27,adts:15},(ct=function(){var d=this,r={data:[],size:0},n={data:[],size:0},s={data:[],size:0},a=function(t,e,i){var r,n,s=new Uint8Array(t.size),a={type:e},o=0,u=0;if(t.data.length&&!(t.size<9)){for(a.trackId=t.data[0].pid,o=0;o<t.data.length;o++)n=t.data[o],s.set(n.data,u),u+=n.data.byteLength;var l,c,h;l=s,(c=a).packetLength=6+(l[4]<<8|l[5]),c.dataAlignmentIndicator=0!=(4&l[6]),192&(h=l[7])&&(c.pts=(14&l[9])<<27|(255&l[10])<<20|(254&l[11])<<12|(255&l[12])<<5|(254&l[13])>>>3,c.pts*=4,c.pts+=(6&l[13])>>>1,c.dts=c.pts,64&h&&(c.dts=(14&l[14])<<27|(255&l[15])<<20|(254&l[16])<<12|(255&l[17])<<5|(254&l[18])>>>3,c.dts*=4,c.dts+=(6&l[18])>>>1)),c.data=l.subarray(9+l[8]),r="video"===e||a.packetLength<=t.size,(i||r)&&(t.size=0,t.data.length=0),r&&d.trigger("data",a)}};ct.prototype.init.call(this),this.push=function(i){({pat:function(){},pes:function(){var t,e;switch(i.streamType){case Z.H264_STREAM_TYPE:case Z.H264_STREAM_TYPE:t=r,e="video";break;case Z.ADTS_STREAM_TYPE:t=n,e="audio";break;case Z.METADATA_STREAM_TYPE:t=s,e="timed-metadata";break;default:return}i.payloadUnitStartIndicator&&a(t,e,!0),t.data.push(i),t.size+=i.data.byteLength},pmt:function(){var t={type:"metadata",tracks:[]},e=i.programMapTable;null!==e.video&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.video,codec:"avc",type:"video"}),null!==e.audio&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.audio,codec:"adts",type:"audio"}),d.trigger("data",t)}})[i.type]()},this.flush=function(){a(r,"video"),a(n,"audio"),a(s,"timed-metadata"),this.trigger("done")}}).prototype=new z;var pt={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:ut,TransportParseStream:lt,ElementaryStream:ct,TimestampRolloverStream:dt,CaptionStream:J.CaptionStream,Cea608Stream:J.Cea608Stream,MetadataStream:ht};for(var ft in Z)Z.hasOwnProperty(ft)&&(pt[ft]=Z[ft]);var mt,gt=pt,yt=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(mt=function(){var l;mt.prototype.init.call(this),this.push=function(t){var e,i,r,n,s,a,o=0,u=0;if("audio"===t.type)for(l?(n=l,(l=new Uint8Array(n.byteLength+t.data.byteLength)).set(n),l.set(t.data,n.byteLength)):l=t.data;o+5<l.length;)if(255===l[o]&&240==(246&l[o+1])){if(i=2*(1&~l[o+1]),e=(3&l[o+3])<<11|l[o+4]<<3|(224&l[o+5])>>5,a=9e4*(s=1024*(1+(3&l[o+6])))/yt[(60&l[o+2])>>>2],r=o+e,l.byteLength<r)return;if(this.trigger("data",{pts:t.pts+u*a,dts:t.dts+u*a,sampleCount:s,audioobjecttype:1+(l[o+2]>>>6&3),channelcount:(1&l[o+2])<<2|(192&l[o+3])>>>6,samplerate:yt[(60&l[o+2])>>>2],samplingfrequencyindex:(60&l[o+2])>>>2,samplesize:16,data:l.subarray(o+7+i,r)}),l.byteLength===r)return void(l=void 0);u++,l=l.subarray(r)}else o++},this.flush=function(){this.trigger("done")}}).prototype=new z;var vt,_t,bt,Tt=mt,St=function(r){var n=r.byteLength,s=0,a=0;this.length=function(){return 8*n},this.bitsAvailable=function(){return 8*n+a},this.loadWord=function(){var t=r.byteLength-n,e=new Uint8Array(4),i=Math.min(4,n);if(0===i)throw new Error("no bytes available");e.set(r.subarray(t,t+i)),s=new DataView(e.buffer).getUint32(0),a=8*i,n-=i},this.skipBits=function(t){var e;t<a||(t-=a,t-=8*(e=Math.floor(t/8)),n-=e,this.loadWord()),s<<=t,a-=t},this.readBits=function(t){var e=Math.min(a,t),i=s>>>32-e;return 0<(a-=e)?s<<=e:0<n&&this.loadWord(),0<(e=t-e)?i<<e|this.readBits(e):i},this.skipLeadingZeros=function(){var t;for(t=0;t<a;++t)if(0!=(s&2147483648>>>t))return s<<=t,a-=t,t;return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros();return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb();return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};(_t=function(){var i,r,n=0;_t.prototype.init.call(this),this.push=function(t){var e;for(r?((e=new Uint8Array(r.byteLength+t.data.byteLength)).set(r),e.set(t.data,r.byteLength),r=e):r=t.data;n<r.byteLength-3;n++)if(1===r[n+2]){i=n+5;break}for(;i<r.byteLength;)switch(r[i]){case 0:if(0!==r[i-1]){i+=2;break}if(0!==r[i-2]){i++;break}for(n+3!==i-2&&this.trigger("data",r.subarray(n+3,i-2));1!==r[++i]&&i<r.length;);n=i-2,i+=3;break;case 1:if(0!==r[i-1]||0!==r[i-2]){i+=3;break}this.trigger("data",r.subarray(n+3,i-2)),n=i-2,i+=3;break;default:i+=3}r=r.subarray(n),i-=n,n=0},this.flush=function(){r&&3<r.byteLength&&this.trigger("data",r.subarray(n+3)),r=null,n=0,this.trigger("done")}}).prototype=new z,bt={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(vt=function(){var i,r,n,s,a,o,_,e=new _t;vt.prototype.init.call(this),(i=this).push=function(t){"video"===t.type&&(r=t.trackId,n=t.pts,s=t.dts,e.push(t))},e.on("data",function(t){var e={trackId:r,pts:n,dts:s,data:t};switch(31&t[0]){case 5:e.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:e.nalUnitType="sei_rbsp",e.escapedRBSP=a(t.subarray(1));break;case 7:e.nalUnitType="seq_parameter_set_rbsp",e.escapedRBSP=a(t.subarray(1)),e.config=o(e.escapedRBSP);break;case 8:e.nalUnitType="pic_parameter_set_rbsp";break;case 9:e.nalUnitType="access_unit_delimiter_rbsp"}i.trigger("data",e)}),e.on("done",function(){i.trigger("done")}),this.flush=function(){e.flush()},_=function(t,e){var i,r=8,n=8;for(i=0;i<t;i++)0!==n&&(n=(r+e.readExpGolomb()+256)%256),r=0===n?r:n},a=function(t){for(var e,i,r=t.byteLength,n=[],s=1;s<r-2;)0===t[s]&&0===t[s+1]&&3===t[s+2]?(n.push(s+2),s+=2):s++;if(0===n.length)return t;e=r-n.length,i=new Uint8Array(e);var a=0;for(s=0;s<e;a++,s++)a===n[0]&&(a++,n.shift()),i[s]=t[a];return i},o=function(t){var e,i,r,n,s,a,o,u,l,c,h,d,p,f=0,m=0,g=0,y=0,v=1;if(i=(e=new St(t)).readUnsignedByte(),n=e.readUnsignedByte(),r=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),bt[i]&&(3===(s=e.readUnsignedExpGolomb())&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(h=3!==s?8:12,p=0;p<h;p++)e.readBoolean()&&_(p<6?16:64,e);if(e.skipUnsignedExpGolomb(),0===(a=e.readUnsignedExpGolomb()))e.readUnsignedExpGolomb();else if(1===a)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),o=e.readUnsignedExpGolomb(),p=0;p<o;p++)e.skipExpGolomb();if(e.skipUnsignedExpGolomb(),e.skipBits(1),u=e.readUnsignedExpGolomb(),l=e.readUnsignedExpGolomb(),0===(c=e.readBits(1))&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(f=e.readUnsignedExpGolomb(),m=e.readUnsignedExpGolomb(),g=e.readUnsignedExpGolomb(),y=e.readUnsignedExpGolomb()),e.readBoolean()&&e.readBoolean()){switch(e.readUnsignedByte()){case 1:d=[1,1];break;case 2:d=[12,11];break;case 3:d=[10,11];break;case 4:d=[16,11];break;case 5:d=[40,33];break;case 6:d=[24,11];break;case 7:d=[20,11];break;case 8:d=[32,11];break;case 9:d=[80,33];break;case 10:d=[18,11];break;case 11:d=[15,11];break;case 12:d=[64,33];break;case 13:d=[160,99];break;case 14:d=[4,3];break;case 15:d=[3,2];break;case 16:d=[2,1];break;case 255:d=[e.readUnsignedByte()<<8|e.readUnsignedByte(),e.readUnsignedByte()<<8|e.readUnsignedByte()]}d&&(v=d[0]/d[1])}return{profileIdc:i,levelIdc:r,profileCompatibility:n,width:Math.ceil((16*(u+1)-2*f-2*m)*v),height:(2-c)*(l+1)*16-2*g-2*y}}}).prototype=new z;var kt,Ct={H264Stream:vt,NalByteStream:_t};(kt=function(){var o=new Uint8Array,u=0;kt.prototype.init.call(this),this.setTimestamp=function(t){u=t},this.parseId3TagSize=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},this.parseAdtsSize=function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},this.push=function(t){var e,i,r,n,s=0,a=0;for(o.length?(n=o.length,(o=new Uint8Array(t.byteLength+n)).set(o.subarray(0,n)),o.set(t,n)):o=t;3<=o.length-a;)if(o[a]!=="I".charCodeAt(0)||o[a+1]!=="D".charCodeAt(0)||o[a+2]!=="3".charCodeAt(0))if(!0&o[a]&&240==(240&o[a+1])){if(o.length-a<7)break;if((s=this.parseAdtsSize(o,a))>o.length)break;r={type:"audio",data:o.subarray(a,a+s),pts:u,dts:u},this.trigger("data",r),a+=s}else a++;else{if(o.length-a<10)break;if((s=this.parseId3TagSize(o,a))>o.length)break;i={type:"timed-metadata",data:o.subarray(a,a+s)},this.trigger("data",i),a+=s}e=o.length-a,o=0<e?o.subarray(a):new Uint8Array}}).prototype=new z;var Et,wt,At,Lt,Pt,Ot,xt,It,Dt,Rt,Mt,Ut,Nt,Bt,jt,Ft=kt,Ht=[33,16,5,32,164,27],Vt=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],qt=function(t){for(var e=[];t--;)e.push(0);return e},Wt={96000:[Ht,[227,64],qt(154),[56]],88200:[Ht,[231],qt(170),[56]],64000:[Ht,[248,192],qt(240),[56]],48000:[Ht,[255,192],qt(268),[55,148,128],qt(54),[112]],44100:[Ht,[255,192],qt(268),[55,163,128],qt(84),[112]],32000:[Ht,[255,192],qt(268),[55,234],qt(226),[112]],24000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,112],qt(126),[224]],16000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,255],qt(269),[223,108],qt(195),[1,192]],12000:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,253,128],qt(259),[56]],11025:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,255,192],qt(268),[55,175,128],qt(108),[112]],8000:[Vt,qt(268),[3,121,16],qt(47),[7]]},zt=(Et=Wt,Object.keys(Et).reduce(function(t,e){return t[e]=new Uint8Array(Et[e].reduce(function(t,e){return t.concat(e)},[])),t},{})),Gt=(wt=function(t){return 9e4*t},At=function(t,e){return t*e},Lt=function(t){return t/9e4},Pt=function(t,e){return t/e},function(t,e){return wt(Pt(t,e))}),Xt=function(t,e){return At(Lt(t),e)},Yt=Ct.H264Stream,$t=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],Kt=["width","height","profileIdc","levelIdc","profileCompatibility"];Rt=function(t){return t[0]==="I".charCodeAt(0)&&t[1]==="D".charCodeAt(0)&&t[2]==="3".charCodeAt(0)},Bt=function(t,e){var i;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0},jt=function(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e].data.byteLength;return i},(xt=function(n,s){var a=[],o=0,e=0,l=0,c=1/0;s=s||{},xt.prototype.init.call(this),this.push=function(e){Mt(n,e),n&&$t.forEach(function(t){n[t]=e[t]}),a.push(e)},this.setEarliestDts=function(t){e=t-n.timelineStartInfo.baseMediaDecodeTime},this.setVideoBaseMediaDecodeTime=function(t){c=t},this.setAudioAppendStart=function(t){l=t},this.flush=function(){var t,e,i,r;0!==a.length&&(t=this.trimAdtsFramesByEarliestDts_(a),n.baseMediaDecodeTime=Nt(n,s.keepOriginalTimestamps),this.prefixWithSilence_(n,t),n.samples=this.generateSampleTable_(t),i=q.mdat(this.concatenateFrameData_(t)),a=[],e=q.moof(o,[n]),r=new Uint8Array(e.byteLength+i.byteLength),o++,r.set(e),r.set(i,e.byteLength),Ut(n),this.trigger("data",{track:n,boxes:r})),this.trigger("done","AudioSegmentStream")},this.prefixWithSilence_=function(t,e){var i,r,n,s,a=0,o=0,u=0;if(e.length&&(i=Gt(t.baseMediaDecodeTime,t.samplerate),r=Math.ceil(9e4/(t.samplerate/1024)),l&&c&&(a=i-Math.max(l,c),u=(o=Math.floor(a/r))*r),!(o<1||45e3<u))){for((n=zt[t.samplerate])||(n=e[0].data),s=0;s<o;s++)e.splice(s,0,{data:n});t.baseMediaDecodeTime-=Math.floor(Xt(u,t.samplerate))}},this.trimAdtsFramesByEarliestDts_=function(t){return n.minSegmentDts>=e?t:(n.minSegmentDts=1/0,t.filter(function(t){return t.dts>=e&&(n.minSegmentDts=Math.min(n.minSegmentDts,t.dts),n.minSegmentPts=n.minSegmentDts,!0)}))},this.generateSampleTable_=function(t){var e,i,r=[];for(e=0;e<t.length;e++)i=t[e],r.push({size:i.data.byteLength,duration:1024});return r},this.concatenateFrameData_=function(t){var e,i,r=0,n=new Uint8Array(jt(t));for(e=0;e<t.length;e++)i=t[e],n.set(i.data,r),r+=i.data.byteLength;return n}}).prototype=new z,(Ot=function(o,u){var e,i,l=0,c=[],h=[];u=u||{},Ot.prototype.init.call(this),delete o.minPTS,this.gopCache_=[],this.push=function(t){Mt(o,t),"seq_parameter_set_rbsp"!==t.nalUnitType||e||(e=t.config,o.sps=[t.data],Kt.forEach(function(t){o[t]=e[t]},this)),"pic_parameter_set_rbsp"!==t.nalUnitType||i||(i=t.data,o.pps=[t.data]),c.push(t)},this.flush=function(){for(var t,e,i,r,n,s;c.length&&"access_unit_delimiter_rbsp"!==c[0].nalUnitType;)c.shift();if(0===c.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream");if(t=this.groupNalsIntoFrames_(c),(i=this.groupFramesIntoGops_(t))[0][0].keyFrame||((e=this.getGopForFusion_(c[0],o))?(i.unshift(e),i.byteLength+=e.byteLength,i.nalCount+=e.nalCount,i.pts=e.pts,i.dts=e.dts,i.duration+=e.duration):i=this.extendFirstKeyFrame_(i)),h.length){var a;if(!(a=u.alignGopsAtEnd?this.alignGopsAtEnd_(i):this.alignGopsAtStart_(i)))return this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream");Ut(o),i=a}Mt(o,i),o.samples=this.generateSampleTable_(i),n=q.mdat(this.concatenateNalData_(i)),o.baseMediaDecodeTime=Nt(o,u.keepOriginalTimestamps),this.trigger("processedGopsInfo",i.map(function(t){return{pts:t.pts,dts:t.dts,byteLength:t.byteLength}})),this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.trigger("baseMediaDecodeTime",o.baseMediaDecodeTime),this.trigger("timelineStartInfo",o.timelineStartInfo),r=q.moof(l,[o]),s=new Uint8Array(r.byteLength+n.byteLength),l++,s.set(r),s.set(n,r.byteLength),this.trigger("data",{track:o,boxes:s}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.resetStream_=function(){Ut(o),i=e=void 0},this.getGopForFusion_=function(t){var e,i,r,n,s,a=1/0;for(s=0;s<this.gopCache_.length;s++)r=(n=this.gopCache_[s]).gop,o.pps&&Bt(o.pps[0],n.pps[0])&&o.sps&&Bt(o.sps[0],n.sps[0])&&(r.dts<o.timelineStartInfo.dts||-1e4<=(e=t.dts-r.dts-r.duration)&&e<=45e3&&(!i||e<a)&&(i=n,a=e));return i?i.gop:null},this.extendFirstKeyFrame_=function(t){var e;return!t[0][0].keyFrame&&1<t.length&&(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t},this.groupNalsIntoFrames_=function(t){var e,i,r=[],n=[];for(e=r.byteLength=0;e<t.length;e++)"access_unit_delimiter_rbsp"===(i=t[e]).nalUnitType?(r.length&&(r.duration=i.dts-r.dts,n.push(r)),(r=[i]).byteLength=i.data.byteLength,r.pts=i.pts,r.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(r.keyFrame=!0),r.duration=i.dts-r.dts,r.byteLength+=i.data.byteLength,r.push(i));return n.length&&(!r.duration||r.duration<=0)&&(r.duration=n[n.length-1].duration),n.push(r),n},this.groupFramesIntoGops_=function(t){var e,i,r=[],n=[];for(r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=t[0].pts,r.dts=t[0].dts,n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,e=0;e<t.length;e++)(i=t[e]).keyFrame?(r.length&&(n.push(r),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration),(r=[i]).nalCount=i.length,r.byteLength=i.byteLength,r.pts=i.pts,r.dts=i.dts,r.duration=i.duration):(r.duration+=i.duration,r.nalCount+=i.length,r.byteLength+=i.byteLength,r.push(i));return n.length&&r.duration<=0&&(r.duration=n[n.length-1].duration),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration,n.push(r),n},this.generateSampleTable_=function(t,e){var i,r,n,s,a,o=e||0,u=[];for(i=0;i<t.length;i++)for(s=t[i],r=0;r<s.length;r++)a=s[r],(n={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0}}).dataOffset=o,n.compositionTimeOffset=a.pts-a.dts,n.duration=a.duration,n.size=4*a.length,n.size+=a.byteLength,a.keyFrame&&(n.flags.dependsOn=2),o+=n.size,u.push(n);return u},this.concatenateNalData_=function(t){var e,i,r,n,s,a,o=0,u=t.byteLength,l=t.nalCount,c=new Uint8Array(u+4*l),h=new DataView(c.buffer);for(e=0;e<t.length;e++)for(n=t[e],i=0;i<n.length;i++)for(s=n[i],r=0;r<s.length;r++)a=s[r],h.setUint32(o,a.data.byteLength),o+=4,c.set(a.data,o),o+=a.data.byteLength;return c},this.alignGopsAtStart_=function(t){var e,i,r,n,s,a,o,u;for(s=t.byteLength,a=t.nalCount,o=t.duration,e=i=0;e<h.length&&i<t.length&&(r=h[e],n=t[i],r.pts!==n.pts);)n.pts>r.pts?e++:(i++,s-=n.byteLength,a-=n.nalCount,o-=n.duration);return 0===i?t:i===t.length?null:((u=t.slice(i)).byteLength=s,u.duration=o,u.nalCount=a,u.pts=u[0].pts,u.dts=u[0].dts,u)},this.alignGopsAtEnd_=function(t){var e,i,r,n,s,a,o;for(e=h.length-1,i=t.length-1,s=null,a=!1;0<=e&&0<=i;){if(r=h[e],n=t[i],r.pts===n.pts){a=!0;break}r.pts>n.pts?e--:(e===h.length-1&&(s=i),i--)}if(!a&&null===s)return null;if(0===(o=a?i:s))return t;var u=t.slice(o),l=u.reduce(function(t,e){return t.byteLength+=e.byteLength,t.duration+=e.duration,t.nalCount+=e.nalCount,t},{byteLength:0,duration:0,nalCount:0});return u.byteLength=l.byteLength,u.duration=l.duration,u.nalCount=l.nalCount,u.pts=u[0].pts,u.dts=u[0].dts,u},this.alignGopsWith=function(t){h=t}}).prototype=new z,Mt=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))},Ut=function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},Nt=function(t,e){var i,r=t.minSegmentDts;return e||(r-=t.timelineStartInfo.dts),i=t.timelineStartInfo.baseMediaDecodeTime,i+=r,i=Math.max(0,i),"audio"===t.type&&(i*=t.samplerate/9e4,i=Math.floor(i)),i},(Dt=function(t,e){this.numberOfTracks=0,this.metadataStream=e,"undefined"!=typeof t.remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,Dt.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBoxes.push(t.boxes),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track),void("audio"===t.track.type&&(this.audioTrack=t.track)))}}).prototype=new z,Dt.prototype.flush=function(t){var e,i,r,n,s=0,a={captions:[],captionStreams:{},metadata:[],info:{}},o=0;if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==t&&"AudioSegmentStream"!==t)return;if(this.remuxTracks)return;if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}for(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,Kt.forEach(function(t){a.info[t]=this.videoTrack[t]},this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,$t.forEach(function(t){a.info[t]=this.audioTrack[t]},this)),1===this.pendingTracks.length?a.type=this.pendingTracks[0].type:a.type="combined",this.emittedTracks+=this.pendingTracks.length,r=q.initSegment(this.pendingTracks),a.initSegment=new Uint8Array(r.byteLength),a.initSegment.set(r),a.data=new Uint8Array(this.pendingBytes),n=0;n<this.pendingBoxes.length;n++)a.data.set(this.pendingBoxes[n],s),s+=this.pendingBoxes[n].byteLength;for(n=0;n<this.pendingCaptions.length;n++)(e=this.pendingCaptions[n]).startTime=e.startPts-o,e.startTime/=9e4,e.endTime=e.endPts-o,e.endTime/=9e4,a.captionStreams[e.stream]=!0,a.captions.push(e);for(n=0;n<this.pendingMetadata.length;n++)(i=this.pendingMetadata[n]).cueTime=i.pts-o,i.cueTime/=9e4,a.metadata.push(i);a.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",a),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},(It=function(r){var n,s,a=this,i=!0;It.prototype.init.call(this),r=r||{},this.baseMediaDecodeTime=r.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var e={};(this.transmuxPipeline_=e).type="aac",e.metadataStream=new gt.MetadataStream,e.aacStream=new Ft,e.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),e.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),e.adtsStream=new Tt,e.coalesceStream=new Dt(r,e.metadataStream),e.headOfPipeline=e.aacStream,e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream),e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream),e.metadataStream.on("timestamp",function(t){e.aacStream.setTimestamp(t.timeStamp)}),e.aacStream.on("data",function(t){"timed-metadata"!==t.type||e.audioSegmentStream||(s=s||{timelineStartInfo:{baseMediaDecodeTime:a.baseMediaDecodeTime},codec:"adts",type:"audio"},e.coalesceStream.numberOfTracks++,e.audioSegmentStream=new xt(s,r),e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))}),e.coalesceStream.on("data",this.trigger.bind(this,"data")),e.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setupTsPipeline=function(){var i={};(this.transmuxPipeline_=i).type="ts",i.metadataStream=new gt.MetadataStream,i.packetStream=new gt.TransportPacketStream,i.parseStream=new gt.TransportParseStream,i.elementaryStream=new gt.ElementaryStream,i.videoTimestampRolloverStream=new gt.TimestampRolloverStream("video"),i.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),i.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),i.adtsStream=new Tt,i.h264Stream=new Yt,i.captionStream=new gt.CaptionStream,i.coalesceStream=new Dt(r,i.metadataStream),i.headOfPipeline=i.packetStream,i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream),i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream),i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream),i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream),i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream),i.elementaryStream.on("data",function(t){var e;if("metadata"===t.type){for(e=t.tracks.length;e--;)n||"video"!==t.tracks[e].type?s||"audio"!==t.tracks[e].type||((s=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime):(n=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime;n&&!i.videoSegmentStream&&(i.coalesceStream.numberOfTracks++,i.videoSegmentStream=new Ot(n,r),i.videoSegmentStream.on("timelineStartInfo",function(t){s&&(s.timelineStartInfo=t,i.audioSegmentStream.setEarliestDts(t.dts))}),i.videoSegmentStream.on("processedGopsInfo",a.trigger.bind(a,"gopInfo")),i.videoSegmentStream.on("baseMediaDecodeTime",function(t){s&&i.audioSegmentStream.setVideoBaseMediaDecodeTime(t)}),i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)),s&&!i.audioSegmentStream&&(i.coalesceStream.numberOfTracks++,i.audioSegmentStream=new xt(s,r),i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))}}),i.coalesceStream.on("data",this.trigger.bind(this,"data")),i.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setBaseMediaDecodeTime=function(t){var e=this.transmuxPipeline_;this.baseMediaDecodeTime=t,s&&(s.timelineStartInfo.dts=void 0,s.timelineStartInfo.pts=void 0,Ut(s),s.timelineStartInfo.baseMediaDecodeTime=t,e.audioTimestampRolloverStream&&e.audioTimestampRolloverStream.discontinuity()),n&&(e.videoSegmentStream&&(e.videoSegmentStream.gopCache_=[],e.videoTimestampRolloverStream.discontinuity()),n.timelineStartInfo.dts=void 0,n.timelineStartInfo.pts=void 0,Ut(n),e.captionStream.reset(),n.timelineStartInfo.baseMediaDecodeTime=t),e.timedMetadataTimestampRolloverStream&&e.timedMetadataTimestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(t){s&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)},this.alignGopsWith=function(t){n&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)},this.push=function(t){if(i){var e=Rt(t);e&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():e||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),i=!1}this.transmuxPipeline_.headOfPipeline.push(t)},this.flush=function(){i=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new z;var Qt={Transmuxer:It,VideoSegmentStream:Ot,AudioSegmentStream:xt,AUDIO_PROPERTIES:$t,VIDEO_PROPERTIES:Kt},Jt={generator:q,Transmuxer:Qt.Transmuxer,AudioSegmentStream:Qt.AudioSegmentStream,VideoSegmentStream:Qt.VideoSegmentStream},Zt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},te=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),ee=function(){function e(t){Zt(this,e),this.options=t||{},this.init()}return te(e,[{key:"init",value:function(){var t;this.transmuxer&&this.transmuxer.dispose(),this.transmuxer=new Jt.Transmuxer(this.options),(t=this.transmuxer).on("data",function(t){var e=t.initSegment;t.initSegment={data:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength};var i=t.data;t.data=i.buffer,H.postMessage({action:"data",segment:t,byteOffset:i.byteOffset,byteLength:i.byteLength},[t.data])}),t.captionStream&&t.captionStream.on("data",function(t){H.postMessage({action:"caption",data:t})}),t.on("done",function(t){H.postMessage({action:"done"})}),t.on("gopInfo",function(t){H.postMessage({action:"gopInfo",gopInfo:t})})}},{key:"push",value:function(t){var e=new Uint8Array(t.data,t.byteOffset,t.byteLength);this.transmuxer.push(e)}},{key:"reset",value:function(){this.init()}},{key:"setTimestampOffset",value:function(t){var e=t.timestampOffset||0;this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4*e))}},{key:"setAudioAppendStart",value:function(t){this.transmuxer.setAudioAppendStart(Math.ceil(9e4*t.appendStart))}},{key:"flush",value:function(t){this.transmuxer.flush()}},{key:"resetCaptions",value:function(){this.transmuxer.resetCaptions()}},{key:"alignGopsWith",value:function(t){this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())}}]),e}();new function(t){t.onmessage=function(t){"init"===t.data.action&&t.data.options?this.messageHandlers=new ee(t.data.options):(this.messageHandlers||(this.messageHandlers=new ee),t.data&&t.data.action&&"init"!==t.data.action&&this.messageHandlers[t.data.action]&&this.messageHandlers[t.data.action](t.data))}}(re)}()}),Mu=function(t){return/mp4a\.\d+.\d+/i.test(t)},Uu=function(t){return/avc1\.[\da-f]+/i.test(t)},Nu=function(t){return t.map(function(t){return t.replace(/avc1\.(\d+)\.(\d+)/i,function(t,e,i){return"avc1."+("00"+Number(e).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})})},Bu=function(n){function s(t,e){y(this,s);var i=b(this,n.call(this,As.EventTarget));i.timestampOffset_=0,i.pendingBuffers_=[],i.bufferUpdating_=!1,i.mediaSource_=t,i.codecs_=e,i.audioCodec_=null,i.videoCodec_=null,i.audioDisabled_=!1,i.appendAudioInitSegment_=!0,i.gopBuffer_=[],i.timeMapping_=0,i.safeAppend_=11<=As.browser.IE_VERSION;var r={remux:!1,alignGopsAtEnd:i.safeAppend_};return i.codecs_.forEach(function(t){Mu(t)?i.audioCodec_=t:Uu(t)&&(i.videoCodec_=t)}),i.transmuxer_=new Ru,i.transmuxer_.postMessage({action:"init",options:r}),i.transmuxer_.onmessage=function(t){return"data"===t.data.action?i.data_(t):"done"===t.data.action?i.done_(t):"gopInfo"===t.data.action?i.appendGopInfo_(t):void 0},Object.defineProperty(i,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(t){"number"==typeof t&&0<=t&&(this.timestampOffset_=t,this.appendAudioInitSegment_=!0,this.gopBuffer_.length=0,this.timeMapping_=0,this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:t}))}}),Object.defineProperty(i,"appendWindowStart",{get:function(){return(this.videoBuffer_||this.audioBuffer_).appendWindowStart},set:function(t){this.videoBuffer_&&(this.videoBuffer_.appendWindowStart=t),this.audioBuffer_&&(this.audioBuffer_.appendWindowStart=t)}}),Object.defineProperty(i,"updating",{get:function(){return!!(this.bufferUpdating_||!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.updating||this.videoBuffer_&&this.videoBuffer_.updating)}}),Object.defineProperty(i,"buffered",{get:function(){var t=null,e=null,i=0,r=[],n=[];if(!this.videoBuffer_&&!this.audioBuffer_)return As.createTimeRange();if(!this.videoBuffer_)return this.audioBuffer_.buffered;if(!this.audioBuffer_)return this.videoBuffer_.buffered;if(this.audioDisabled_)return this.videoBuffer_.buffered;if(0===this.videoBuffer_.buffered.length&&0===this.audioBuffer_.buffered.length)return As.createTimeRange();for(var s=this.videoBuffer_.buffered,a=this.audioBuffer_.buffered,o=s.length;o--;)r.push({time:s.start(o),type:"start"}),r.push({time:s.end(o),type:"end"});for(o=a.length;o--;)r.push({time:a.start(o),type:"start"}),r.push({time:a.end(o),type:"end"});for(r.sort(function(t,e){return t.time-e.time}),o=0;o<r.length;o++)"start"===r[o].type?2===++i&&(t=r[o].time):"end"===r[o].type&&1===--i&&(e=r[o].time),null!==t&&null!==e&&(n.push([t,e]),e=t=null);return As.createTimeRanges(n)}}),i}return _(s,n),s.prototype.data_=function(t){var e=t.data.segment;e.data=new Uint8Array(e.data,t.data.byteOffset,t.data.byteLength),e.initSegment=new Uint8Array(e.initSegment.data,e.initSegment.byteOffset,e.initSegment.byteLength),function(t,e,i){var r=e.player_;if(i.captions&&i.captions.length)for(var n in t.inbandTextTracks_||(t.inbandTextTracks_={}),i.captionStreams)if(!t.inbandTextTracks_[n]){r.tech_.trigger({type:"usage",name:"hls-608"});var s=r.textTracks().getTrackById(n);t.inbandTextTracks_[n]=s||r.addRemoteTextTrack({kind:"captions",id:n,label:n},!1).track}i.metadata&&i.metadata.length&&!t.metadataTrack_&&(t.metadataTrack_=r.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track,t.metadataTrack_.inBandMetadataTrackDispatchType=i.metadata.dispatchType)}(this,this.mediaSource_,e),this.pendingBuffers_.push(e)},s.prototype.done_=function(t){"closed"!==this.mediaSource_.readyState?this.processPendingSegments_():this.pendingBuffers_.length=0},s.prototype.createRealSourceBuffers_=function(){var r=this,n=["audio","video"];n.forEach(function(e){if(r[e+"Codec_"]&&!r[e+"Buffer_"]){var i=null;if(r.mediaSource_[e+"Buffer_"])(i=r.mediaSource_[e+"Buffer_"]).updating=!1;else{var t=e+'/mp4;codecs="'+r[e+"Codec_"]+'"';i=function(t,e){var i=t.addSourceBuffer(e),r=Object.create(null);r.updating=!1,r.realBuffer_=i;var n=function(e){"function"==typeof i[e]?r[e]=function(){return i[e].apply(i,arguments)}:"undefined"==typeof r[e]&&Object.defineProperty(r,e,{get:function(){return i[e]},set:function(t){return i[e]=t}})};for(var s in i)n(s);return r}(r.mediaSource_.nativeMediaSource_,t),r.mediaSource_[e+"Buffer_"]=i}r[e+"Buffer_"]=i,["update","updatestart","updateend"].forEach(function(t){i.addEventListener(t,function(){if("audio"!==e||!r.audioDisabled_)return"updateend"===t&&(r[e+"Buffer_"].updating=!1),n.every(function(t){return!("audio"!==t||!r.audioDisabled_)||(e===t||!r[t+"Buffer_"]||!r[t+"Buffer_"].updating)})?r.trigger(t):void 0})})}})},s.prototype.appendBuffer=function(t){if(this.bufferUpdating_=!0,this.audioBuffer_&&this.audioBuffer_.buffered.length){var e=this.audioBuffer_.buffered;this.transmuxer_.postMessage({action:"setAudioAppendStart",appendStart:e.end(e.length-1)})}this.videoBuffer_&&this.transmuxer_.postMessage({action:"alignGopsWith",gopsToAlignWith:function(t,e,i){if(!e||!t.length)return[];var r=Math.ceil(9e4*(e.currentTime()-i+3)),n=void 0;for(n=0;n<t.length&&!(t[n].pts>r);n++);return t.slice(n)}(this.gopBuffer_,this.mediaSource_.player_,this.timeMapping_)}),this.transmuxer_.postMessage({action:"push",data:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength},[t.buffer]),this.transmuxer_.postMessage({action:"flush"})},s.prototype.appendGopInfo_=function(t){this.gopBuffer_=function(t,e,i){if(!e.length)return t;if(i)return e.slice();for(var r=e[0].pts,n=0;n<t.length&&!(t[n].pts>=r);n++);return t.slice(0,n).concat(e)}(this.gopBuffer_,t.data.gopInfo,this.safeAppend_)},s.prototype.remove=function(t,e){if(this.videoBuffer_&&(this.videoBuffer_.updating=!0,this.videoBuffer_.remove(t,e),this.gopBuffer_=function(t,e,i,r){for(var n=Math.ceil(9e4*(e-r)),s=Math.ceil(9e4*(i-r)),a=t.slice(),o=t.length;o--&&!(t[o].pts<=s););if(-1===o)return a;for(var u=o+1;u--&&!(t[u].pts<=n););return u=Math.max(u,0),a.splice(u,o-u+1),a}(this.gopBuffer_,t,e,this.timeMapping_)),!this.audioDisabled_&&this.audioBuffer_&&(this.audioBuffer_.updating=!0,this.audioBuffer_.remove(t,e)),bu(t,e,this.metadataTrack_),this.inbandTextTracks_)for(var i in this.inbandTextTracks_)bu(t,e,this.inbandTextTracks_[i])},s.prototype.processPendingSegments_=function(){var t={video:{segments:[],bytes:0},audio:{segments:[],bytes:0},captions:[],metadata:[]};t=this.pendingBuffers_.reduce(function(t,e){var i=e.type,r=e.data,n=e.initSegment;return t[i].segments.push(r),t[i].bytes+=r.byteLength,t[i].initSegment=n,e.captions&&(t.captions=t.captions.concat(e.captions)),e.info&&(t[i].info=e.info),e.metadata&&(t.metadata=t.metadata.concat(e.metadata)),t},t),this.videoBuffer_||this.audioBuffer_||(0===t.video.bytes&&(this.videoCodec_=null),0===t.audio.bytes&&(this.audioCodec_=null),this.createRealSourceBuffers_()),t.audio.info&&this.mediaSource_.trigger({type:"audioinfo",info:t.audio.info}),t.video.info&&this.mediaSource_.trigger({type:"videoinfo",info:t.video.info}),this.appendAudioInitSegment_&&(!this.audioDisabled_&&this.audioBuffer_&&(t.audio.segments.unshift(t.audio.initSegment),t.audio.bytes+=t.audio.initSegment.byteLength),this.appendAudioInitSegment_=!1);var e=!1;this.videoBuffer_&&t.video.bytes?(t.video.segments.unshift(t.video.initSegment),t.video.bytes+=t.video.initSegment.byteLength,this.concatAndAppendSegments_(t.video,this.videoBuffer_),Su(this,t.captions,t.metadata)):!this.videoBuffer_||!this.audioDisabled_&&this.audioBuffer_||(e=!0),!this.audioDisabled_&&this.audioBuffer_&&this.concatAndAppendSegments_(t.audio,this.audioBuffer_),this.pendingBuffers_.length=0,e&&this.trigger("updateend"),this.bufferUpdating_=!1},s.prototype.concatAndAppendSegments_=function(t,e){var i=0,r=void 0;if(t.bytes){r=new Uint8Array(t.bytes),t.segments.forEach(function(t){r.set(t,i),i+=t.byteLength});try{e.updating=!0,e.appendBuffer(r)}catch(t){this.mediaSource_.player_&&this.mediaSource_.player_.error({code:-3,type:"APPEND_BUFFER_ERR",message:t.message,originalError:t})}}},s.prototype.abort=function(){this.videoBuffer_&&this.videoBuffer_.abort(),!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"reset"}),this.pendingBuffers_.length=0,this.bufferUpdating_=!1},s}(As.EventTarget),ju=function(e){function i(){y(this,i);var s=b(this,e.call(this)),t=void 0;for(t in s.nativeMediaSource_=new g.MediaSource,s.nativeMediaSource_)t in i.prototype||"function"!=typeof s.nativeMediaSource_[t]||(s[t]=s.nativeMediaSource_[t].bind(s.nativeMediaSource_));return s.duration_=NaN,Object.defineProperty(s,"duration",{get:function(){return this.duration_===1/0?this.duration_:this.nativeMediaSource_.duration},set:function(t){(this.duration_=t)===1/0||(this.nativeMediaSource_.duration=t)}}),Object.defineProperty(s,"seekable",{get:function(){return this.duration_===1/0?As.createTimeRanges([[0,this.nativeMediaSource_.duration]]):this.nativeMediaSource_.seekable}}),Object.defineProperty(s,"readyState",{get:function(){return this.nativeMediaSource_.readyState}}),Object.defineProperty(s,"activeSourceBuffers",{get:function(){return this.activeSourceBuffers_}}),s.sourceBuffers=[],s.activeSourceBuffers_=[],s.updateActiveSourceBuffers_=function(){if(s.activeSourceBuffers_.length=0,1===s.sourceBuffers.length){var t=s.sourceBuffers[0];return t.appendAudioInitSegment_=!0,t.audioDisabled_=!t.audioCodec_,void s.activeSourceBuffers_.push(t)}for(var i=!1,r=!0,e=0;e<s.player_.audioTracks().length;e++){var n=s.player_.audioTracks()[e];if(n.enabled&&"main"!==n.kind){r=!(i=!0);break}}s.sourceBuffers.forEach(function(t,e){if(t.appendAudioInitSegment_=!0,t.videoCodec_&&t.audioCodec_)t.audioDisabled_=i;else if(t.videoCodec_&&!t.audioCodec_)t.audioDisabled_=!0,r=!1;else if(!t.videoCodec_&&t.audioCodec_&&(t.audioDisabled_=e?r:!r,t.audioDisabled_))return;s.activeSourceBuffers_.push(t)})},s.onPlayerMediachange_=function(){s.sourceBuffers.forEach(function(t){t.appendAudioInitSegment_=!0})},s.onHlsReset_=function(){s.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.postMessage({action:"resetCaptions"})})},s.onHlsSegmentTimeMapping_=function(e){s.sourceBuffers.forEach(function(t){return t.timeMapping_=e.mapping})},["sourceopen","sourceclose","sourceended"].forEach(function(t){this.nativeMediaSource_.addEventListener(t,this.trigger.bind(this))},s),s.on("sourceopen",function(t){var e=p.querySelector('[src="'+s.url_+'"]');e&&(s.player_=As(e.parentNode),s.player_.tech_.on("hls-reset",s.onHlsReset_),s.player_.tech_.on("hls-segment-time-mapping",s.onHlsSegmentTimeMapping_),s.player_.audioTracks&&s.player_.audioTracks()&&(s.player_.audioTracks().on("change",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("addtrack",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("removetrack",s.updateActiveSourceBuffers_)),s.player_.on("mediachange",s.onPlayerMediachange_))}),s.on("sourceended",function(t){for(var e=Tu(s.duration),i=0;i<s.sourceBuffers.length;i++){var r=s.sourceBuffers[i],n=r.metadataTrack_&&r.metadataTrack_.cues;n&&n.length&&(n[n.length-1].endTime=e)}}),s.on("sourceclose",function(t){this.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.terminate()}),this.sourceBuffers.length=0,this.player_&&(this.player_.audioTracks&&this.player_.audioTracks()&&(this.player_.audioTracks().off("change",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("addtrack",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("removetrack",this.updateActiveSourceBuffers_)),this.player_.el_&&(this.player_.off("mediachange",this.onPlayerMediachange_),this.player_.tech_.off("hls-reset",this.onHlsReset_),this.player_.tech_.off("hls-segment-time-mapping",this.onHlsSegmentTimeMapping_)))}),s}return _(i,e),i.prototype.addSeekableRange_=function(t,e){var i=void 0;if(this.duration!==1/0)throw(i=new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name="InvalidStateError",i.code=11,i;(e>this.nativeMediaSource_.duration||isNaN(this.nativeMediaSource_.duration))&&(this.nativeMediaSource_.duration=e)},i.prototype.addSourceBuffer=function(t){var n,e,i=void 0,r=(n={type:"",parameters:{}},e=t.trim().split(";"),n.type=e.shift().trim(),e.forEach(function(t){var e=t.trim().split("=");if(1<e.length){var i=e[0].replace(/"/g,"").trim(),r=e[1].replace(/"/g,"").trim();n.parameters[i]=r}}),n);if(/^(video|audio)\/mp2t$/i.test(r.type)){var s=[];r.parameters&&r.parameters.codecs&&(s=r.parameters.codecs.split(","),s=(s=Nu(s)).filter(function(t){return Mu(t)||Uu(t)})),0===s.length&&(s=["avc1.4d400d","mp4a.40.2"]),i=new Bu(this,s),0!==this.sourceBuffers.length&&(this.sourceBuffers[0].createRealSourceBuffers_(),i.createRealSourceBuffers_(),this.sourceBuffers[0].audioDisabled_=!0)}else i=this.nativeMediaSource_.addSourceBuffer(t);return this.sourceBuffers.push(i),i},i}(As.EventTarget),Fu=0;As.mediaSources={};var Hu=function(t,e){var i=As.mediaSources[t];if(!i)throw new Error("Media Source not found (Video.js)");i.trigger({type:"sourceopen",swfId:e})},Vu=function(){return!!g.MediaSource&&!!g.MediaSource.isTypeSupported&&g.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')},qu=function(){if(this.MediaSource={open:Hu,supportsNativeMediaSources:Vu},Vu())return new ju;throw new Error("Cannot use create a virtual MediaSource for this video")};qu.open=Hu,qu.supportsNativeMediaSources=Vu;var Wu={createObjectURL:function(t){var e=void 0;return t instanceof ju?(e=g.URL.createObjectURL(t.nativeMediaSource_),t.url_=e):t instanceof ju?(e="blob:vjs-media-source/"+Fu,Fu++,As.mediaSources[e]=t,e):(e=g.URL.createObjectURL(t),t.url_=e)}};As.MediaSource=qu,As.URL=Wu;var zu=As.mergeOptions,Gu=function(t,e){for(var a=zu(t,{duration:e.duration,minimumUpdatePeriod:e.minimumUpdatePeriod}),i=0;i<e.playlists.length;i++){var r=Bo(a,e.playlists[i]);r&&(a=r)}return No(e,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n=t.playlists[0].uri,s=Bo(a,t.playlists[0]);s&&((a=s).mediaGroups[e][i][r].playlists[0]=a.playlists[n])}}),a},Xu=function(s){function a(t,e,i,r){y(this,a);var n=b(this,s.call(this));if(n.hls_=e,n.withCredentials=i,!t)throw new Error("A non-empty playlist URL or playlist is required");return n.on("minimumUpdatePeriod",function(){n.refreshXml_()}),n.on("mediaupdatetimeout",function(){n.refreshMedia_()}),"string"==typeof t?(n.srcUrl=t,n.state="HAVE_NOTHING",b(n)):(n.masterPlaylistLoader_=r,n.state="HAVE_METADATA",n.started=!0,n.media(t),g.setTimeout(function(){n.trigger("loadedmetadata")},0),n)}return _(a,s),a.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},a.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},a.prototype.media=function(t){if(!t)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var e=this.state;if("string"==typeof t){if(!this.master.playlists[t])throw new Error("Unknown playlist URI: "+t);t=this.master.playlists[t]}var i=!this.media_||t.uri!==this.media_.uri;this.state="HAVE_METADATA",i&&(this.media_&&this.trigger("mediachanging"),this.media_=t,this.refreshMedia_(),"HAVE_MASTER"!==e&&this.trigger("mediachange"))},a.prototype.pause=function(){this.stopRequest(),"HAVE_NOTHING"===this.state&&(this.started=!1)},a.prototype.load=function(){this.started?this.trigger("loadedplaylist"):this.start()},a.prototype.parseMasterXml=function(){var s=Sa(this.masterXml_,{manifestUri:this.srcUrl,clientOffset:this.clientOffset_});s.uri=this.srcUrl;for(var t=0;t<s.playlists.length;t++){var e="placeholder-uri-"+t;s.playlists[t].uri=e,s.playlists[e]=s.playlists[t]}return No(s,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n="placeholder-uri-"+e+"-"+i+"-"+r;t.playlists[0].uri=n,s.playlists[n]=t.playlists[0]}}),jo(s),Fo(s),s},a.prototype.start=function(){var i=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(i.request){if(i.request=null,t)return i.error={status:e.status,message:"DASH playlist request error at URL: "+i.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===i.state&&(i.started=!1),i.trigger("error");i.masterXml_=e.responseText,e.responseHeaders&&e.responseHeaders.date?i.masterLoaded_=Date.parse(e.responseHeaders.date):i.masterLoaded_=Date.now(),i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))}})},a.prototype.syncClientServerClock_=function(r){var n=this,s=ka(this.masterXml_);return null===s?(this.clientOffset_=this.masterLoaded_-Date.now(),r()):"DIRECT"===s.method?(this.clientOffset_=s.value-Date.now(),r()):void(this.request=this.hls_.xhr({uri:Ro(this.srcUrl,s.value),method:s.method,withCredentials:this.withCredentials},function(t,e){if(n.request){if(t)return n.clientOffset_=n.masterLoaded_-Date.now(),r();var i=void 0;i="HEAD"===s.method?e.responseHeaders&&e.responseHeaders.date?Date.parse(e.responseHeaders.date):n.masterLoaded_:Date.parse(e.responseText),n.clientOffset_=i-Date.now(),r()}}))},a.prototype.onClientServerClockSync_=function(){var t=this;this.master=this.parseMasterXml(),this.state="HAVE_MASTER",this.trigger("loadedplaylist"),this.media_||this.media(this.master.playlists[0]),g.setTimeout(function(){t.trigger("loadedmetadata")},0),this.master.minimumUpdatePeriod&&g.setTimeout(function(){t.trigger("minimumUpdatePeriod")},this.master.minimumUpdatePeriod)},a.prototype.refreshXml_=function(){var r=this;this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"DASH playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");r.masterXml_=e.responseText;var i=r.parseMasterXml();r.master=Gu(r.master,i),g.setTimeout(function(){r.trigger("minimumUpdatePeriod")},r.master.minimumUpdatePeriod)}})},a.prototype.refreshMedia_=function(){var t=this,e=void 0,i=void 0;this.masterPlaylistLoader_?(e=this.masterPlaylistLoader_.master,i=this.masterPlaylistLoader_.parseMasterXml()):(e=this.master,i=this.parseMasterXml());var r=Gu(e,i);r?(this.masterPlaylistLoader_?this.masterPlaylistLoader_.master=r:this.master=r,this.media_=r.playlists[this.media_.uri]):this.trigger("playlistunchanged"),this.media().endList||(this.mediaUpdateTimeout=g.setTimeout(function(){t.trigger("mediaupdatetimeout")},Ho(this.media(),!!r))),this.trigger("loadedplaylist")},a}(As.EventTarget),Yu=function(t){return As.log.debug?As.log.debug.bind(As,"VHS:",t+" >"):function(){}};function $u(){}var Ku=function(){function n(t,e,i,r){y(this,n),this.callbacks_=[],this.pendingCallback_=null,this.timestampOffset_=0,this.mediaSource=t,this.processedAppend_=!1,this.type_=i,this.mimeType_=e,this.logger_=Yu("SourceUpdater["+i+"]["+e+"]"),"closed"===t.readyState?t.addEventListener("sourceopen",this.createSourceBuffer_.bind(this,e,r)):this.createSourceBuffer_(e,r)}return n.prototype.createSourceBuffer_=function(t,e){var i=this;this.sourceBuffer_=this.mediaSource.addSourceBuffer(t),this.logger_("created SourceBuffer"),e&&(e.trigger("sourcebufferadded"),this.mediaSource.sourceBuffers.length<2)?e.on("sourcebufferadded",function(){i.start_()}):this.start_()},n.prototype.start_=function(){var e=this;this.started_=!0,this.onUpdateendCallback_=function(){var t=e.pendingCallback_;e.pendingCallback_=null,e.logger_("buffered ["+vu(e.buffered())+"]"),t&&t(),e.runCallback_()},this.sourceBuffer_.addEventListener("updateend",this.onUpdateendCallback_),this.runCallback_()},n.prototype.abort=function(t){var e=this;this.processedAppend_&&this.queueCallback_(function(){e.sourceBuffer_.abort()},t)},n.prototype.appendBuffer=function(t,e){var i=this;this.processedAppend_=!0,this.queueCallback_(function(){i.sourceBuffer_.appendBuffer(t)},e)},n.prototype.buffered=function(){return this.sourceBuffer_?this.sourceBuffer_.buffered:As.createTimeRanges()},n.prototype.remove=function(t,e){var i=this;this.processedAppend_&&this.queueCallback_(function(){i.logger_("remove ["+t+" => "+e+"]"),i.sourceBuffer_.remove(t,e)},$u)},n.prototype.updating=function(){return!this.sourceBuffer_||this.sourceBuffer_.updating||this.pendingCallback_},n.prototype.timestampOffset=function(t){var e=this;return"undefined"!=typeof t&&(this.queueCallback_(function(){e.sourceBuffer_.timestampOffset=t}),this.timestampOffset_=t),this.timestampOffset_},n.prototype.queueCallback_=function(t,e){this.callbacks_.push([t.bind(this),e]),this.runCallback_()},n.prototype.runCallback_=function(){var t=void 0;!this.updating()&&this.callbacks_.length&&this.started_&&(t=this.callbacks_.shift(),this.pendingCallback_=t[1],t[0]())},n.prototype.dispose=function(){this.sourceBuffer_.removeEventListener("updateend",this.onUpdateendCallback_),this.sourceBuffer_&&"open"===this.mediaSource.readyState&&this.sourceBuffer_.abort()},n}(),Qu={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,GOAL_BUFFER_LENGTH_RATE:1,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,BUFFER_LOW_WATER_LINE_RATE:1},Ju=2,Zu=-101,tl=-102,el=function(t){var e,i,r={};return t.byterange&&(r.Range=(e=t.byterange,i=e.offset+e.length-1,"bytes="+e.offset+"-"+i)),r},il=function(t){t.forEach(function(t){t.abort()})},rl=function(t,e){return e.timedout?{status:e.status,message:"HLS request timed-out at URL: "+e.uri,code:Zu,xhr:e}:e.aborted?{status:e.status,message:"HLS request aborted at URL: "+e.uri,code:tl,xhr:e}:t?{status:e.status,message:"HLS request errored at URL: "+e.uri,code:Ju,xhr:e}:null},nl=function(a,o,u){var l=[],c=0;return function(t,e){if(t&&(il(a),l.push(t)),(c+=1)===a.length){if(e.endOfAllRequests=Date.now(),0<l.length){var i=l.reduce(function(t,e){return e.code>t.code?e:t});return u(i,e)}return e.encryptedBytes?(n=e,s=u,(r=o).addEventListener("message",function t(e){if(e.data.source===n.requestId){r.removeEventListener("message",t);var i=e.data.decrypted;return n.bytes=new Uint8Array(i.bytes,i.byteOffset,i.byteLength),s(null,n)}}),void r.postMessage(cu({source:n.requestId,encrypted:n.encryptedBytes,key:n.key.bytes,iv:n.key.iv}),[n.encryptedBytes.buffer,n.key.bytes.buffer])):u(null,e)}var r,n,s}},sl=function(n,s){return function(t){var e,i,r;return n.stats=As.mergeOptions(n.stats,(i=(e=t).target,(r={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-i.requestTime||0}).bytesReceived=e.loaded,r.bandwidth=Math.floor(r.bytesReceived/r.roundTripTime*8*1e3),r)),!n.stats.firstBytesReceivedAt&&n.stats.bytesReceived&&(n.stats.firstBytesReceivedAt=Date.now()),s(t,n)}},al=function(t,e,i,r,n,s){var a,o,u,l,c=[],h=nl(c,i,s);if(r.key){var d=t(As.mergeOptions(e,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),(a=r,o=h,function(t,e){var i=e.response,r=rl(t,e);if(r)return o(r,a);if(16!==i.byteLength)return o({status:e.status,message:"Invalid HLS key at URL: "+e.uri,code:Ju,xhr:e},a);var n=new DataView(i);return a.key.bytes=new Uint32Array([n.getUint32(0),n.getUint32(4),n.getUint32(8),n.getUint32(12)]),o(null,a)}));c.push(d)}if(r.map&&!r.map.bytes){var p=t(As.mergeOptions(e,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:el(r.map)}),(u=r,l=h,function(t,e){var i=e.response,r=rl(t,e);return r?l(r,u):0===i.byteLength?l({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Ju,xhr:e},u):(u.map.bytes=new Uint8Array(e.response),l(null,u))}));c.push(p)}var f,m,g=t(As.mergeOptions(e,{uri:r.resolvedUri,responseType:"arraybuffer",headers:el(r)}),(f=r,m=h,function(t,e){var i,r=e.response,n=rl(t,e);return n?m(n,f):0===r.byteLength?m({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Ju,xhr:e},f):(f.stats={bandwidth:(i=e).bandwidth,bytesReceived:i.bytesReceived||0,roundTripTime:i.roundTripTime||0},f.key?f.encryptedBytes=new Uint8Array(e.response):f.bytes=new Uint8Array(e.response),m(null,f))}));return g.addEventListener("progress",sl(r,n)),c.push(g),function(){return il(c)}},ol={videoCodec:"avc1",videoObjectTypeIndicator:".4d400d",audioProfile:"2"},ul=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i={codecCount:0};return i.codecCount=e.split(",").length,i.codecCount=i.codecCount||2,(t=/(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e))&&(i.videoCodec=t[2],i.videoObjectTypeIndicator=t[3]),i.audioProfile=/(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e),i.audioProfile=i.audioProfile&&i.audioProfile[2],i},ll=function(t,e,i){return t+"/"+e+'; codecs="'+i.filter(function(t){return!!t}).join(", ")+'"'},cl=function(t,e){var i,r,n=(i=e).segments&&i.segments.length&&i.segments[0].map?"mp4":"mp2t",s=(r=e.attributes||{}).CODECS?ul(r.CODECS):ol,a=e.attributes||{},o=!0,u=!1;if(!e)return[];if(t.mediaGroups.AUDIO&&a.AUDIO){var l=t.mediaGroups.AUDIO[a.AUDIO];if(l)for(var c in o=!(u=!0),l)if(!l[c].uri&&!l[c].playlists){o=!0;break}}u&&!s.audioProfile&&(o||(s.audioProfile=function(t,e){if(!t.mediaGroups.AUDIO||!e)return null;var i=t.mediaGroups.AUDIO[e];if(!i)return null;for(var r in i){var n=i[r];if(n.default&&n.playlists)return ul(n.playlists[0].attributes.CODECS).audioProfile}return null}(t,a.AUDIO)),s.audioProfile||(As.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),s.audioProfile=ol.audioProfile));var h={};s.videoCodec&&(h.video=""+s.videoCodec+s.videoObjectTypeIndicator),s.audioProfile&&(h.audio="mp4a.40."+s.audioProfile);var d=ll("audio",n,[h.audio]),p=ll("video",n,[h.video]),f=ll("video",n,[h.video,h.audio]);return u?!o&&h.video?[p,d]:o||h.video?[f,d]:[d,d]:h.video?[f]:[d]},hl=function(t,e){var i;return t&&(i=g.getComputedStyle(t))?i[e]:""},dl=function(t,r){var n=t.slice();t.sort(function(t,e){var i=r(t,e);return 0===i?n.indexOf(t)-n.indexOf(e):i})},pl=function(t,e){var i=void 0,r=void 0;return t.attributes.BANDWIDTH&&(i=t.attributes.BANDWIDTH),i=i||g.Number.MAX_VALUE,e.attributes.BANDWIDTH&&(r=e.attributes.BANDWIDTH),i-(r=r||g.Number.MAX_VALUE)},fl=function(t,e,i){if(!t||!e)return!1;var r=i===t.segments.length;return t.endList&&"open"===e.readyState&&r},ml=function(t){return"number"==typeof t&&isFinite(t)},gl=function(i){function r(t){y(this,r);var e=b(this,i.call(this));if(!t)throw new TypeError("Initialization settings are required");if("function"!=typeof t.currentTime)throw new TypeError("No currentTime getter specified");if(!t.mediaSource)throw new TypeError("No MediaSource specified");return e.bandwidth=t.bandwidth,e.throughput={rate:0,count:0},e.roundTrip=NaN,e.resetStats_(),e.mediaIndex=null,e.hasPlayed_=t.hasPlayed,e.currentTime_=t.currentTime,e.seekable_=t.seekable,e.seeking_=t.seeking,e.duration_=t.duration,e.mediaSource_=t.mediaSource,e.hls_=t.hls,e.loaderType_=t.loaderType,e.startingMedia_=void 0,e.segmentMetadataTrack_=t.segmentMetadataTrack,e.goalBufferLength_=t.goalBufferLength,e.sourceType_=t.sourceType,e.state_="INIT",e.checkBufferTimeout_=null,e.error_=void 0,e.currentTimeline_=-1,e.pendingSegment_=null,e.mimeType_=null,e.sourceUpdater_=null,e.xhrOptions_=null,e.activeInitSegmentId_=null,e.initSegments_={},e.decrypter_=t.decrypter,e.syncController_=t.syncController,e.syncPoint_={segmentIndex:0,time:0},e.syncController_.on("syncinfoupdate",function(){return e.trigger("syncinfoupdate")}),e.mediaSource_.addEventListener("sourceopen",function(){return e.ended_=!1}),e.fetchAtBuffer_=!1,e.logger_=Yu("SegmentLoader["+e.loaderType_+"]"),Object.defineProperty(e,"state",{get:function(){return this.state_},set:function(t){t!==this.state_&&(this.logger_(this.state_+" -> "+t),this.state_=t)}}),e}return _(r,i),r.prototype.resetStats_=function(){this.mediaBytesTransferred=0,this.mediaRequests=0,this.mediaRequestsAborted=0,this.mediaRequestsTimedout=0,this.mediaRequestsErrored=0,this.mediaTransferDuration=0,this.mediaSecondsLoaded=0},r.prototype.dispose=function(){this.state="DISPOSED",this.pause(),this.abort_(),this.sourceUpdater_&&this.sourceUpdater_.dispose(),this.resetStats_()},r.prototype.abort=function(){"WAITING"===this.state?(this.abort_(),this.state="READY",this.paused()||this.monitorBuffer_()):this.pendingSegment_&&(this.pendingSegment_=null)},r.prototype.abort_=function(){this.pendingSegment_&&this.pendingSegment_.abortRequests(),this.pendingSegment_=null},r.prototype.error=function(t){return"undefined"!=typeof t&&(this.error_=t),this.pendingSegment_=null,this.error_},r.prototype.endOfStream=function(){this.ended_=!0,this.pause(),this.trigger("ended")},r.prototype.buffered_=function(){return this.sourceUpdater_?this.sourceUpdater_.buffered():As.createTimeRanges()},r.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=hu(t),r=this.initSegments_[i];return e&&!r&&t.bytes&&(this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:t.bytes}),r||t},r.prototype.couldBeginLoading_=function(){return this.playlist_&&(this.sourceUpdater_||this.mimeType_&&"INIT"===this.state)&&!this.paused()},r.prototype.load=function(){if(this.monitorBuffer_(),this.playlist_){if(this.syncController_.setDateTimeMapping(this.playlist_),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY")}},r.prototype.init_=function(){return this.state="READY",this.sourceUpdater_=new Ku(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),this.resetEverything(),this.monitorBuffer_()},r.prototype.playlist=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(t){var i=this.playlist_,r=this.pendingSegment_;this.playlist_=t,this.xhrOptions_=e,this.hasPlayed_()||(t.syncInfo={mediaSequence:t.mediaSequence,time:0});var n=i?i.id:null;if(this.logger_("playlist update ["+n+" => "+t.id+"]"),this.trigger("syncinfoupdate"),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();if(i&&i.uri===t.uri){var s=t.mediaSequence-i.mediaSequence;this.logger_("live window shift ["+s+"]"),null!==this.mediaIndex&&(this.mediaIndex-=s),r&&(r.mediaIndex-=s,0<=r.mediaIndex&&(r.segment=t.segments[r.mediaIndex])),this.syncController_.saveExpiredSegmentInfo(i,t)}else null!==this.mediaIndex&&this.resyncLoader()}},r.prototype.pause=function(){this.checkBufferTimeout_&&(g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)},r.prototype.paused=function(){return null===this.checkBufferTimeout_},r.prototype.mimeType=function(t,e){this.mimeType_||(this.mimeType_=t,this.sourceBufferEmitter_=e,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_())},r.prototype.resetEverything=function(){this.ended_=!1,this.resetLoader(),this.remove(0,this.duration_()),this.trigger("reseteverything")},r.prototype.resetLoader=function(){this.fetchAtBuffer_=!1,this.resyncLoader()},r.prototype.resyncLoader=function(){this.mediaIndex=null,this.syncPoint_=null,this.abort()},r.prototype.remove=function(t,e){this.sourceUpdater_&&this.sourceUpdater_.remove(t,e),bu(t,e,this.segmentMetadataTrack_)},r.prototype.monitorBuffer_=function(){this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),1)},r.prototype.monitorBufferTick_=function(){"READY"===this.state&&this.fillBuffer_(),this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),500)},r.prototype.fillBuffer_=function(){if(!this.sourceUpdater_.updating()){this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var t=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(t)fl(this.playlist_,this.mediaSource_,t.mediaIndex)?this.endOfStream():(t.mediaIndex!==this.playlist_.segments.length-1||"ended"!==this.mediaSource_.readyState||this.seeking_())&&((t.timeline!==this.currentTimeline_||null!==t.startOfSegment&&t.startOfSegment<this.sourceUpdater_.timestampOffset())&&(this.syncController_.reset(),t.timestampOffset=t.startOfSegment),this.loadSegment_(t))}},r.prototype.checkBuffer_=function(t,e,i,r,n,s){var a=0,o=void 0;t.length&&(a=t.end(t.length-1));var u=Math.max(0,a-n);if(!e.segments.length)return null;if(u>=this.goalBufferLength_())return null;if(!r&&1<=u)return null;if(null===s)return i=this.getSyncSegmentCandidate_(e),this.generateSegmentInfo_(e,i,null,!0);if(null!==i){var l=e.segments[i];return o=l&&l.end?l.end:a,this.generateSegmentInfo_(e,i+1,o,!1)}if(this.fetchAtBuffer_){var c=nu.getMediaInfoForTime(e,a,s.segmentIndex,s.time);i=c.mediaIndex,o=c.startTime}else{var h=nu.getMediaInfoForTime(e,n,s.segmentIndex,s.time);i=h.mediaIndex,o=h.startTime}return this.generateSegmentInfo_(e,i,o,!1)},r.prototype.getSyncSegmentCandidate_=function(t){var e=this;if(-1===this.currentTimeline_)return 0;var i=t.segments.map(function(t,e){return{timeline:t.timeline,segmentIndex:e}}).filter(function(t){return t.timeline===e.currentTimeline_});return i.length?i[Math.min(i.length-1,1)].segmentIndex:Math.max(t.segments.length-1,0)},r.prototype.generateSegmentInfo_=function(t,e,i,r){if(e<0||e>=t.segments.length)return null;var n=t.segments[e];return{requestId:"segment-loader-"+Math.random(),uri:n.resolvedUri,mediaIndex:e,isSyncRequest:r,startOfSegment:i,playlist:t,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:n.timeline,duration:n.duration,segment:n}},r.prototype.abortRequestEarly_=function(t){if(this.hls_.tech_.paused()||!this.xhrOptions_.timeout||!this.playlist_.attributes.BANDWIDTH)return!1;if(Date.now()-(t.firstBytesReceivedAt||Date.now())<1e3)return!1;var e=this.currentTime_(),i=t.bandwidth,r=this.pendingSegment_.duration,n=nu.estimateSegmentRequestTime(r,i,this.playlist_,t.bytesReceived),s=function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return((t.length?t.end(t.length-1):0)-e)/i}(this.buffered_(),e,this.hls_.tech_.playbackRate())-1;if(n<=s)return!1;var a=function(t){var e=t.master,i=t.currentTime,r=t.bandwidth,n=t.duration,s=t.segmentDuration,a=t.timeUntilRebuffer,o=t.currentTimeline,u=t.syncController,l=e.playlists.filter(function(t){return!nu.isIncompatible(t)}),c=l.filter(nu.isEnabled);c.length||(c=l.filter(function(t){return!nu.isDisabled(t)}));var h=c.filter(nu.hasAttribute.bind(null,"BANDWIDTH")).map(function(t){var e=u.getSyncPoint(t,n,o,i)?1:2;return{playlist:t,rebufferingImpact:nu.estimateSegmentRequestTime(s,r,t)*e-a}}),d=h.filter(function(t){return t.rebufferingImpact<=0});return dl(d,function(t,e){return pl(e.playlist,t.playlist)}),d.length?d[0]:(dl(h,function(t,e){return t.rebufferingImpact-e.rebufferingImpact}),h[0]||null)}({master:this.hls_.playlists.master,currentTime:e,bandwidth:i,duration:this.duration_(),segmentDuration:r,timeUntilRebuffer:s,currentTimeline:this.currentTimeline_,syncController:this.syncController_});if(a){var o=n-s-a.rebufferingImpact,u=.5;return s<=fu&&(u=1),!a.playlist||a.playlist.uri===this.playlist_.uri||o<u?!1:(this.bandwidth=a.playlist.attributes.BANDWIDTH*Qu.BANDWIDTH_VARIANCE+1,this.abort(),this.trigger("earlyabort"),!0)}},r.prototype.handleProgress_=function(t,e){this.pendingSegment_&&e.requestId===this.pendingSegment_.requestId&&!this.abortRequestEarly_(e.stats)&&this.trigger("progress")},r.prototype.loadSegment_=function(t){this.state="WAITING",this.pendingSegment_=t,this.trimBackBuffer_(t),t.abortRequests=al(this.hls_.xhr,this.xhrOptions_,this.decrypter_,this.createSimplifiedSegmentObj_(t),this.handleProgress_.bind(this),this.segmentRequestFinished_.bind(this))},r.prototype.trimBackBuffer_=function(t){var e,i,r,n,s=(e=this.seekable_(),i=this.currentTime_(),r=this.playlist_.targetDuration||10,n=void 0,n=e.length&&0<e.start(0)&&e.start(0)<i?e.start(0):i-30,Math.min(n,i-r));0<s&&this.remove(0,s)},r.prototype.createSimplifiedSegmentObj_=function(t){var e=t.segment,i={resolvedUri:e.resolvedUri,byterange:e.byterange,requestId:t.requestId};if(e.key){var r=e.key.iv||new Uint32Array([0,0,0,t.mediaIndex+t.playlist.mediaSequence]);i.key={resolvedUri:e.key.resolvedUri,iv:r}}return e.map&&(i.map=this.initSegment(e.map)),i},r.prototype.segmentRequestFinished_=function(t,e){if(this.mediaRequests+=1,e.stats&&(this.mediaBytesTransferred+=e.stats.bytesReceived,this.mediaTransferDuration+=e.stats.roundTripTime),this.pendingSegment_){if(e.requestId===this.pendingSegment_.requestId){if(t)return this.pendingSegment_=null,this.state="READY",t.code===tl?void(this.mediaRequestsAborted+=1):(this.pause(),t.code===Zu?(this.mediaRequestsTimedout+=1,this.bandwidth=1,this.roundTrip=NaN,void this.trigger("bandwidthupdate")):(this.mediaRequestsErrored+=1,this.error(t),void this.trigger("error")));this.bandwidth=e.stats.bandwidth,this.roundTrip=e.stats.roundTripTime,e.map&&(e.map=this.initSegment(e.map,!0)),this.processSegmentResponse_(e)}}else this.mediaRequestsAborted+=1},r.prototype.processSegmentResponse_=function(t){var e=this.pendingSegment_;e.bytes=t.bytes,t.map&&(e.segment.map.bytes=t.map.bytes),e.endOfAllRequests=t.endOfAllRequests,this.handleSegment_()},r.prototype.handleSegment_=function(){var t=this;if(this.pendingSegment_){var e=this.pendingSegment_,i=e.segment,r=this.syncController_.probeSegmentInfo(e);"undefined"==typeof this.startingMedia_&&r&&(r.containsAudio||r.containsVideo)&&(this.startingMedia_={containsAudio:r.containsAudio,containsVideo:r.containsVideo});var n,s,a,o=(n=this.loaderType_,s=this.startingMedia_,a=r,"main"===n&&s&&a?a.containsAudio||a.containsVideo?s.containsVideo&&!a.containsVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!s.containsVideo&&a.containsVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null);if(o)return this.error({message:o,blacklistDuration:1/0}),void this.trigger("error");if(e.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");null!==e.timestampOffset&&e.timestampOffset!==this.sourceUpdater_.timestampOffset()&&(this.sourceUpdater_.timestampOffset(e.timestampOffset),this.trigger("timestampoffset"));var u,l,c,h,d,p,f,m,g,y,v,_=this.syncController_.mappingForTimeline(e.timeline);if(null!==_&&this.trigger({type:"segmenttimemapping",mapping:_}),this.state="APPENDING",i.map){var b=hu(i.map);if(!this.activeInitSegmentId_||this.activeInitSegmentId_!==b){var T=this.initSegment(i.map);this.sourceUpdater_.appendBuffer(T.bytes,function(){t.activeInitSegmentId_=b})}}e.byteLength=e.bytes.byteLength,"number"==typeof i.start&&"number"==typeof i.end?this.mediaSecondsLoaded+=i.end-i.start:this.mediaSecondsLoaded+=i.duration,this.logger_((l=(u=e).segment,c=l.start,h=l.end,d=u.playlist,p=d.mediaSequence,f=d.id,m=d.segments,g=void 0===m?[]:m,y=u.mediaIndex,v=u.timeline,["appending ["+y+"] of ["+p+", "+(p+g.length)+"] from playlist ["+f+"]","["+c+" => "+h+"] in timeline ["+v+"]"].join(" "))),this.sourceUpdater_.appendBuffer(e.bytes,this.handleUpdateEnd_.bind(this))}else this.state="READY"},r.prototype.handleUpdateEnd_=function(){if(!this.pendingSegment_)return this.state="READY",void(this.paused()||this.monitorBuffer_());var t=this.pendingSegment_,e=t.segment,i=null!==this.mediaIndex;(this.pendingSegment_=null,this.recordThroughput_(t),this.addSegmentMetadataCue_(t),this.state="READY",this.mediaIndex=t.mediaIndex,this.fetchAtBuffer_=!0,this.currentTimeline_=t.timeline,this.trigger("syncinfoupdate"),e.end&&this.currentTime_()-e.end>3*t.playlist.targetDuration)?this.resetEverything():(i&&this.trigger("bandwidthupdate"),this.trigger("progress"),fl(t.playlist,this.mediaSource_,t.mediaIndex+1)&&this.endOfStream(),this.paused()||this.monitorBuffer_())},r.prototype.recordThroughput_=function(t){var e=this.throughput.rate,i=Date.now()-t.endOfAllRequests+1,r=Math.floor(t.byteLength/i*8*1e3);this.throughput.rate+=(r-e)/++this.throughput.count},r.prototype.addSegmentMetadataCue_=function(t){if(this.segmentMetadataTrack_){var e=t.segment,i=e.start,r=e.end;if(ml(i)&&ml(r)){bu(i,r,this.segmentMetadataTrack_);var n=g.WebKitDataCue||g.VTTCue,s={bandwidth:t.playlist.attributes.BANDWIDTH,resolution:t.playlist.attributes.RESOLUTION,codecs:t.playlist.attributes.CODECS,byteLength:t.byteLength,uri:t.uri,timeline:t.timeline,playlist:t.playlist.uri,start:i,end:r},a=new n(i,r,JSON.stringify(s));a.value=s,this.segmentMetadataTrack_.addCue(a)}}},r}(As.EventTarget),yl=new Uint8Array("\n\n".split("").map(function(t){return t.charCodeAt(0)})),vl=function(t){return String.fromCharCode.apply(null,t)},_l=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.mediaSource_=null,i.subtitlesTrack_=null,i}return _(n,r),n.prototype.buffered_=function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues.length)return As.createTimeRanges();var t=this.subtitlesTrack_.cues,e=t[0].startTime,i=t[t.length-1].startTime;return As.createTimeRanges([[e,i]])},n.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=hu(t),r=this.initSegments_[i];if(e&&!r&&t.bytes){var n=yl.byteLength+t.bytes.byteLength,s=new Uint8Array(n);s.set(t.bytes),s.set(yl,t.bytes.byteLength),this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:s}}return r||t},n.prototype.couldBeginLoading_=function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()},n.prototype.init_=function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()},n.prototype.track=function(t){return"undefined"==typeof t||(this.subtitlesTrack_=t,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_()),this.subtitlesTrack_},n.prototype.remove=function(t,e){bu(t,e,this.subtitlesTrack_)},n.prototype.fillBuffer_=function(){var t=this;this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var e=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(e=this.skipEmptySegments_(e)){if(null===this.syncController_.timestampOffsetForTimeline(e.timeline)){return this.syncController_.one("timestampoffset",function(){t.state="READY",t.paused()||t.monitorBuffer_()}),void(this.state="WAITING_ON_TIMELINE")}this.loadSegment_(e)}},n.prototype.skipEmptySegments_=function(t){for(;t&&t.segment.empty;)t=this.generateSegmentInfo_(t.playlist,t.mediaIndex+1,t.startOfSegment+t.duration,t.isSyncRequest);return t},n.prototype.handleSegment_=function(){var e=this;if(this.pendingSegment_&&this.subtitlesTrack_){this.state="APPENDING";var t=this.pendingSegment_,i=t.segment;if("function"!=typeof g.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var r=function(){e.handleSegment_()};return this.state="WAITING_ON_VTTJS",this.subtitlesTrack_.tech_.one("vttjsloaded",r),void this.subtitlesTrack_.tech_.one("vttjserror",function(){e.subtitlesTrack_.tech_.off("vttjsloaded",r),e.error({message:"Error loading vtt.js"}),e.state="READY",e.pause(),e.trigger("error")})}i.requested=!0;try{this.parseVTTCues_(t)}catch(t){return this.error({message:t.message}),this.state="READY",this.pause(),this.trigger("error")}if(this.updateTimeMapping_(t,this.syncController_.timelines[t.timeline],this.playlist_),t.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");t.byteLength=t.bytes.byteLength,this.mediaSecondsLoaded+=i.duration,t.cues.length&&this.remove(t.cues[0].endTime,t.cues[t.cues.length-1].endTime),t.cues.forEach(function(t){e.subtitlesTrack_.addCue(t)}),this.handleUpdateEnd_()}else this.state="READY"},n.prototype.parseVTTCues_=function(e){var t=void 0,i=!1;"function"==typeof g.TextDecoder?t=new g.TextDecoder("utf8"):(t=g.WebVTT.StringDecoder(),i=!0);var r=new g.WebVTT.Parser(g,g.vttjs,t);if(e.cues=[],e.timestampmap={MPEGTS:0,LOCAL:0},r.oncue=e.cues.push.bind(e.cues),r.ontimestampmap=function(t){return e.timestampmap=t},r.onparsingerror=function(t){As.log.warn("Error encountered when parsing cues: "+t.message)},e.segment.map){var n=e.segment.map.bytes;i&&(n=vl(n)),r.parse(n)}var s=e.bytes;i&&(s=vl(s)),r.parse(s),r.flush()},n.prototype.updateTimeMapping_=function(t,e,i){var r=t.segment;if(e)if(t.cues.length){var n=t.timestampmap,s=n.MPEGTS/9e4-n.LOCAL+e.mapping;if(t.cues.forEach(function(t){t.startTime+=s,t.endTime+=s}),!i.syncInfo){var a=t.cues[0].startTime,o=t.cues[t.cues.length-1].startTime;i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:Math.min(a,o-r.duration)}}}else r.empty=!0},n}(gl),bl=function(t,e){for(var i=t.cues,r=0;r<i.length;r++){var n=i[r];if(e>=n.adStartTime&&e<=n.adEndTime)return n}return null},Tl=So,Sl=[{name:"VOD",run:function(t,e,i,r,n){if(i!==1/0){return{time:0,segmentIndex:0}}return null}},{name:"ProgramDateTime",run:function(t,e,i,r,n){if(!t.datetimeToDisplayTime)return null;var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.dateTimeObject){var c=l.dateTimeObject.getTime()/1e3+t.datetimeToDisplayTime,h=Math.abs(n-c);if(null!==o&&o<h)break;o=h,a={time:c,segmentIndex:u}}}return a}},{name:"Segment",run:function(t,e,i,r,n){var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.timeline===r&&"undefined"!=typeof l.start){var c=Math.abs(n-l.start);if(null!==o&&o<c)break;(!a||null===o||c<=o)&&(o=c,a={time:l.start,segmentIndex:u})}}return a}},{name:"Discontinuity",run:function(t,e,i,r,n){var s=null;if(n=n||0,e.discontinuityStarts&&e.discontinuityStarts.length)for(var a=null,o=0;o<e.discontinuityStarts.length;o++){var u=e.discontinuityStarts[o],l=e.discontinuitySequence+o+1,c=t.discontinuities[l];if(c){var h=Math.abs(n-c.time);if(null!==a&&a<h)break;(!s||null===a||h<=a)&&(a=h,s={time:c.time,segmentIndex:u})}}return s}},{name:"Playlist",run:function(t,e,i,r,n){return e.syncInfo?{time:e.syncInfo.time,segmentIndex:e.syncInfo.mediaSequence-e.mediaSequence}:null}}],kl=function(e){function i(){y(this,i);var t=b(this,e.call(this));return t.inspectCache_=void 0,t.timelines=[],t.discontinuities=[],t.datetimeToDisplayTime=null,t.logger_=Yu("SyncController"),t}return _(i,e),i.prototype.getSyncPoint=function(t,e,i,r){var n=this.runStrategies_(t,e,i,r);return n.length?this.selectSyncPoint_(n,{key:"time",value:r}):null},i.prototype.getExpiredTime=function(t,e){if(!t||!t.segments)return null;var i=this.runStrategies_(t,e,t.discontinuitySequence,0);if(!i.length)return null;var r=this.selectSyncPoint_(i,{key:"segmentIndex",value:0});return 0<r.segmentIndex&&(r.time*=-1),Math.abs(r.time+Go(t,r.segmentIndex,0))},i.prototype.runStrategies_=function(t,e,i,r){for(var n=[],s=0;s<Sl.length;s++){var a=Sl[s],o=a.run(this,t,e,i,r);o&&(o.strategy=a.name,n.push({strategy:a.name,syncPoint:o}))}return n},i.prototype.selectSyncPoint_=function(t,e){for(var i=t[0].syncPoint,r=Math.abs(t[0].syncPoint[e.key]-e.value),n=t[0].strategy,s=1;s<t.length;s++){var a=Math.abs(t[s].syncPoint[e.key]-e.value);a<r&&(r=a,i=t[s].syncPoint,n=t[s].strategy)}return this.logger_("syncPoint for ["+e.key+": "+e.value+"] chosen with strategy ["+n+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+"]"),i},i.prototype.saveExpiredSegmentInfo=function(t,e){for(var i=e.mediaSequence-t.mediaSequence-1;0<=i;i--){var r=t.segments[i];if(r&&"undefined"!=typeof r.start){e.syncInfo={mediaSequence:t.mediaSequence+i,time:r.start},this.logger_("playlist refresh sync: [time:"+e.syncInfo.time+", mediaSequence: "+e.syncInfo.mediaSequence+"]"),this.trigger("syncinfoupdate");break}}},i.prototype.setDateTimeMapping=function(t){if(!this.datetimeToDisplayTime&&t.segments&&t.segments.length&&t.segments[0].dateTimeObject){var e=t.segments[0].dateTimeObject.getTime()/1e3;this.datetimeToDisplayTime=-e}},i.prototype.reset=function(){this.inspectCache_=void 0},i.prototype.probeSegmentInfo=function(t){var e=t.segment,i=t.playlist,r=void 0;return(r=e.map?this.probeMp4Segment_(t):this.probeTsSegment_(t))&&this.calculateSegmentTimeMapping_(t,r)&&(this.saveDiscontinuitySyncInfo_(t),i.syncInfo||(i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:e.start})),r},i.prototype.probeMp4Segment_=function(t){var e=t.segment,i=La(e.map.bytes),r=Pa(i,t.bytes);return null!==t.timestampOffset&&(t.timestampOffset-=r),{start:r,end:r+e.duration}},i.prototype.probeTsSegment_=function(t){var e=Tl(t.bytes,this.inspectCache_),i=void 0,r=void 0;return e?(e.video&&2===e.video.length?(this.inspectCache_=e.video[1].dts,i=e.video[0].dtsTime,r=e.video[1].dtsTime):e.audio&&2===e.audio.length&&(this.inspectCache_=e.audio[1].dts,i=e.audio[0].dtsTime,r=e.audio[1].dtsTime),{start:i,end:r,containsVideo:e.video&&2===e.video.length,containsAudio:e.audio&&2===e.audio.length}):null},i.prototype.timestampOffsetForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].time},i.prototype.mappingForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].mapping},i.prototype.calculateSegmentTimeMapping_=function(t,e){var i=t.segment,r=this.timelines[t.timeline];if(null!==t.timestampOffset)r={time:t.startOfSegment,mapping:t.startOfSegment-e.start},this.timelines[t.timeline]=r,this.trigger("timestampoffset"),this.logger_("time mapping for timeline "+t.timeline+": [time: "+r.time+"] [mapping: "+r.mapping+"]"),i.start=t.startOfSegment,i.end=e.end+r.mapping;else{if(!r)return!1;i.start=e.start+r.mapping,i.end=e.end+r.mapping}return!0},i.prototype.saveDiscontinuitySyncInfo_=function(t){var e=t.playlist,i=t.segment;if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0};else if(e.discontinuityStarts&&e.discontinuityStarts.length)for(var r=0;r<e.discontinuityStarts.length;r++){var n=e.discontinuityStarts[r],s=e.discontinuitySequence+r+1,a=n-t.mediaIndex,o=Math.abs(a);if(!this.discontinuities[s]||this.discontinuities[s].accuracy>o){var u=void 0;u=a<0?i.start-Go(e,t.mediaIndex,n):i.end+Go(e,t.mediaIndex+1,n),this.discontinuities[s]={time:u,accuracy:o}}}},i}(As.EventTarget),Cl=new Pu("./decrypter-worker.worker.js",function(t,e){var i,s,h,r,n,d,p,g,a,l,y,o,u=this;i="undefined"!=typeof t?t:"undefined"!=typeof global?global:"undefined"!=typeof u?u:{},s="undefined"!=typeof t?t:"undefined"!=typeof i?i:"undefined"!=typeof u?u:{},h=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},d=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},p=null,g=function(){function c(t){h(this,c),p||(p=d()),this._tables=[[p[0][0].slice(),p[0][1].slice(),p[0][2].slice(),p[0][3].slice(),p[0][4].slice()],[p[1][0].slice(),p[1][1].slice(),p[1][2].slice(),p[1][3].slice(),p[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),a=function(){function t(){h(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),l=function(e){function i(){h(this,i);var t=n(this,e.call(this,a));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(a),y=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},o=function(){function u(t,e,i,r){h(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new l,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([y(s[o-4]),y(s[o-3]),y(s[o-2]),y(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new g(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=y(r[m]),d=y(r[m+1]),p=y(r[m+2]),f=y(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=y(a[m]^o),a[m+1]=y(a[m+1]^u),a[m+2]=y(a[m+2]^l),a[m+3]=y(a[m+3]^c),o=h,u=d,l=p,c=f;return s}(e,i,r);n.set(t,e.byteOffset)}},r(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),new function(t){t.onmessage=function(t){var n=t.data,e=new Uint8Array(n.encrypted.bytes,n.encrypted.byteOffset,n.encrypted.byteLength),i=new Uint32Array(n.key.bytes,n.key.byteOffset,n.key.byteLength/4),r=new Uint32Array(n.iv.bytes,n.iv.byteOffset,n.iv.byteLength/4);new o(e,i,r,function(t,e){var i,r;s.postMessage((i={source:n.source,decrypted:e},r={},Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r),[e.buffer])})}}(u)}),El=function(t,e){t.abort(),t.pause(),e&&e.activePlaylistLoader&&(e.activePlaylistLoader.pause(),e.activePlaylistLoader=null)},wl=function(t,e){(e.activePlaylistLoader=t).load()},Al={AUDIO:function(u,l){return function(){var t=l.segmentLoaders[u],e=l.mediaTypes[u],i=l.blacklistCurrentPlaylist;El(t,e);var r=e.activeTrack(),n=e.activeGroup(),s=(n.filter(function(t){return t.default})[0]||n[0]).id,a=e.tracks[s];if(r!==a){for(var o in As.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),e.tracks)e.tracks[o].enabled=e.tracks[o]===a;e.onTrackChanged()}else i({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(r,n){return function(){var t=n.segmentLoaders[r],e=n.mediaTypes[r];As.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),El(t,e);var i=e.activeTrack();i&&(i.mode="disabled"),e.onTrackChanged()}}},Ll={AUDIO:function(t,e,i){if(e){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Al[t](t,i))}},SUBTITLES:function(t,e,i){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t],a=i.mediaTypes[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),s.track(a.activeTrack()),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Al[t](t,i))}},Pl=function(e,i){return function(t){return t.attributes[e]===i}},Ol=function(e){return function(t){return t.resolvedUri===e}},xl={AUDIO:function(t,e){var i,r,n=e.hls,s=e.sourceType,a=e.segmentLoaders[t],o=e.requestOptions.withCredentials,u=e.master,l=u.mediaGroups,c=u.playlists,h=e.mediaTypes[t],d=h.groups,p=h.tracks,f=e.masterPlaylistLoader;for(var m in l[t]&&0!==Object.keys(l[t]).length||(l[t]={main:{default:{default:!0}}}),l[t]){d[m]||(d[m]=[]);var g=c.filter(Pl(t,m));for(var y in l[t][m]){var v=l[t][m][y];g.filter(Ol(v.resolvedUri)).length&&delete v.resolvedUri;var _=void 0;if(_=v.resolvedUri?new Vo(v.resolvedUri,n,o):v.playlists&&"dash"===s?new Xu(v.playlists[0],n,o,f):null,v=As.mergeOptions({id:y,playlistLoader:_},v),Ll[t](t,v.playlistLoader,e),d[m].push(v),"undefined"==typeof p[y]){var b=new As.AudioTrack({id:y,kind:(i=v,r=void 0,r=i.default?"main":"alternative",i.characteristics&&0<=i.characteristics.indexOf("public.accessibility.describes-video")&&(r="main-desc"),r),enabled:!1,language:v.language,default:v.default,label:y});p[y]=b}}}a.on("error",Al[t](t,e))},SUBTITLES:function(t,e){var i=e.tech,r=e.hls,n=e.sourceType,s=e.segmentLoaders[t],a=e.requestOptions.withCredentials,o=e.master.mediaGroups,u=e.mediaTypes[t],l=u.groups,c=u.tracks,h=e.masterPlaylistLoader;for(var d in o[t])for(var p in l[d]||(l[d]=[]),o[t][d])if(!o[t][d][p].forced){var f=o[t][d][p],m=void 0;if("hls"===n?m=new Vo(f.resolvedUri,r,a):"dash"===n&&(m=new Xu(f.playlists[0],r,a,h)),f=As.mergeOptions({id:p,playlistLoader:m},f),Ll[t](t,f.playlistLoader,e),l[d].push(f),"undefined"==typeof c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",enabled:!1,language:f.language,label:p},!1).track;c[p]=g}}s.on("error",Al[t](t,e))},"CLOSED-CAPTIONS":function(t,e){var i=e.tech,r=e.master.mediaGroups,n=e.mediaTypes[t],s=n.groups,a=n.tracks;for(var o in r[t])for(var u in s[o]||(s[o]=[]),r[t][o]){var l=r[t][o][u];if(l.instreamId.match(/CC\d/)&&(s[o].push(As.mergeOptions({id:u},l)),"undefined"==typeof a[u])){var c=i.addRemoteTextTrack({id:l.instreamId,kind:"captions",enabled:!1,language:l.language,label:u},!1).track;a[u]=c}}}},Il={AUDIO:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if(t[e].enabled)return t[e];return null}},SUBTITLES:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if("showing"===t[e].mode)return t[e];return null}}},Dl=function(e){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){xl[t](t,e)});var i=e.mediaTypes,t=e.masterPlaylistLoader,r=e.tech,n=e.hls;["AUDIO","SUBTITLES"].forEach(function(t){var s,a,o,u,l,c;i[t].activeGroup=(s=t,a=e,function(e){var t=a.masterPlaylistLoader,i=a.mediaTypes[s].groups,r=t.media();if(!r)return null;var n=null;return r.attributes[s]&&(n=i[r.attributes[s]]),n=n||i.main,"undefined"==typeof e?n:null===e?null:n.filter(function(t){return t.id===e.id})[0]||null}),i[t].activeTrack=Il[t](t,e),i[t].onGroupChanged=(o=t,u=e,function(){var t=u.segmentLoaders,e=t[o],i=t.main,r=u.mediaTypes[o],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;El(e,r),s&&(s.playlistLoader?(e.resyncLoader(),wl(s.playlistLoader,r)):a&&i.resetEverything())}),i[t].onTrackChanged=(l=t,c=e,function(){var t=c.segmentLoaders,e=t[l],i=t.main,r=c.mediaTypes[l],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;El(e,r),s&&(s.playlistLoader?(a!==s.playlistLoader&&(e.track&&e.track(n),e.resetEverything()),wl(s.playlistLoader,r)):i.resetEverything())})});var s=i.AUDIO.activeGroup(),a=(s.filter(function(t){return t.default})[0]||s[0]).id;i.AUDIO.tracks[a].enabled=!0,i.AUDIO.onTrackChanged(),t.on("mediachange",function(){["AUDIO","SUBTITLES"].forEach(function(t){return i[t].onGroupChanged()})});var o=function(){i.AUDIO.onTrackChanged(),r.trigger({type:"usage",name:"hls-audio-change"})};for(var u in r.audioTracks().addEventListener("change",o),r.remoteTextTracks().addEventListener("change",i.SUBTITLES.onTrackChanged),n.on("dispose",function(){r.audioTracks().removeEventListener("change",o),r.remoteTextTracks().removeEventListener("change",i.SUBTITLES.onTrackChanged)}),r.clearTracks("audio"),i.AUDIO.tracks)r.audioTracks().addTrack(i.AUDIO.tracks[u])},Rl=function(){var e={};return["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){e[t]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:$u,activeTrack:$u,onGroupChanged:$u,onTrackChanged:$u}}),e},Ml=void 0,Ul=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred"],Nl=function(t){return this.audioSegmentLoader_[t]+this.mainSegmentLoader_[t]},Bl=function(d){function p(t){y(this,p);var e=b(this,d.call(this)),i=t.url,r=t.withCredentials,n=t.tech,s=t.bandwidth,a=t.externHls,o=t.useCueTags,u=t.blacklistDuration,l=t.enableLowInitialPlaylist,c=t.sourceType;if(!i)throw new Error("A non-empty playlist URL is required");Ml=a,e.withCredentials=r,e.tech_=n,e.hls_=n.hls,e.sourceType_=c,e.useCueTags_=o,e.blacklistDuration=u,e.enableLowInitialPlaylist=l,e.useCueTags_&&(e.cueTagsTrack_=e.tech_.addTextTrack("metadata","ad-cues"),e.cueTagsTrack_.inBandMetadataTrackDispatchType=""),e.requestOptions_={withCredentials:e.withCredentials,timeout:null},e.mediaTypes_=Rl(),e.mediaSource=new As.MediaSource,e.mediaSource.addEventListener("sourceopen",e.handleSourceOpen_.bind(e)),e.seekable_=As.createTimeRanges(),e.hasPlayed_=function(){return!1},e.syncController_=new kl(t),e.segmentMetadataTrack_=n.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track,e.decrypter_=new Cl;var h={hls:e.hls_,mediaSource:e.mediaSource,currentTime:e.tech_.currentTime.bind(e.tech_),seekable:function(){return e.seekable()},seeking:function(){return e.tech_.seeking()},duration:function(){return e.mediaSource.duration},hasPlayed:function(){return e.hasPlayed_()},goalBufferLength:function(){return e.goalBufferLength()},bandwidth:s,syncController:e.syncController_,decrypter:e.decrypter_,sourceType:e.sourceType_};return e.masterPlaylistLoader_="dash"===e.sourceType_?new Xu(i,e.hls_,e.withCredentials):new Vo(i,e.hls_,e.withCredentials),e.setupMasterPlaylistLoaderListeners_(),e.mainSegmentLoader_=new gl(As.mergeOptions(h,{segmentMetadataTrack:e.segmentMetadataTrack_,loaderType:"main"}),t),e.audioSegmentLoader_=new gl(As.mergeOptions(h,{loaderType:"audio"}),t),e.subtitleSegmentLoader_=new _l(As.mergeOptions(h,{loaderType:"vtt"}),t),e.setupSegmentLoaderListeners_(),Ul.forEach(function(t){e[t+"_"]=Nl.bind(e,t)}),e.logger_=Yu("MPC"),e.masterPlaylistLoader_.load(),e}return _(p,d),p.prototype.setupMasterPlaylistLoaderListeners_=function(){var r=this;this.masterPlaylistLoader_.on("loadedmetadata",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;ru(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,t.endList&&"none"!==r.tech_.preload()&&(r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load()),Dl({sourceType:r.sourceType_,segmentLoaders:{AUDIO:r.audioSegmentLoader_,SUBTITLES:r.subtitleSegmentLoader_,main:r.mainSegmentLoader_},tech:r.tech_,requestOptions:r.requestOptions_,masterPlaylistLoader:r.masterPlaylistLoader_,hls:r.hls_,master:r.master(),mediaTypes:r.mediaTypes_,blacklistCurrentPlaylist:r.blacklistCurrentPlaylist.bind(r)}),r.triggerPresenceUsage_(r.master(),t);try{r.setupSourceBuffers_()}catch(t){return As.log.warn("Failed to create SourceBuffers",t),r.mediaSource.endOfStream("decode")}r.setupFirstPlay(),r.trigger("selectedinitialmedia")}),this.masterPlaylistLoader_.on("loadedplaylist",function(){var t=r.masterPlaylistLoader_.media();if(!t){r.excludeUnsupportedVariants_();var e=void 0;return r.enableLowInitialPlaylist&&(e=r.selectInitialPlaylist()),e||(e=r.selectPlaylist()),r.initialMedia_=e,void r.masterPlaylistLoader_.media(r.initialMedia_)}if(r.useCueTags_&&r.updateAdCues_(t),r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.updateDuration(),r.tech_.paused()||r.mainSegmentLoader_.load(),!t.endList){var i=function(){var t=r.seekable();0!==t.length&&r.mediaSource.addSeekableRange_(t.start(0),t.end(0))};if(r.duration()!==1/0){r.tech_.one("durationchange",function t(){r.duration()===1/0?i():r.tech_.one("durationchange",t)})}else i()}}),this.masterPlaylistLoader_.on("error",function(){r.blacklistCurrentPlaylist(r.masterPlaylistLoader_.error)}),this.masterPlaylistLoader_.on("mediachanging",function(){r.mainSegmentLoader_.abort(),r.mainSegmentLoader_.pause()}),this.masterPlaylistLoader_.on("mediachange",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;ru(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load(),r.tech_.trigger({type:"mediachange",bubbles:!0})}),this.masterPlaylistLoader_.on("playlistunchanged",function(){var t=r.masterPlaylistLoader_.media();r.stuckAtPlaylistEnd_(t)&&(r.blacklistCurrentPlaylist({message:"Playlist no longer updating."}),r.tech_.trigger("playliststuck"))}),this.masterPlaylistLoader_.on("renditiondisabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})}),this.masterPlaylistLoader_.on("renditionenabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})})},p.prototype.triggerPresenceUsage_=function(t,e){var i=t.mediaGroups||{},r=!0,n=Object.keys(i.AUDIO);for(var s in i.AUDIO)for(var a in i.AUDIO[s]){i.AUDIO[s][a].uri||(r=!1)}r&&this.tech_.trigger({type:"usage",name:"hls-demuxed"}),Object.keys(i.SUBTITLES).length&&this.tech_.trigger({type:"usage",name:"hls-webvtt"}),Ml.Playlist.isAes(e)&&this.tech_.trigger({type:"usage",name:"hls-aes"}),Ml.Playlist.isFmp4(e)&&this.tech_.trigger({type:"usage",name:"hls-fmp4"}),n.length&&1<Object.keys(i.AUDIO[n[0]]).length&&this.tech_.trigger({type:"usage",name:"hls-alternate-audio"}),this.useCueTags_&&this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"})},p.prototype.setupSegmentLoaderListeners_=function(){var s=this;this.mainSegmentLoader_.on("bandwidthupdate",function(){var t=s.selectPlaylist(),e=s.masterPlaylistLoader_.media(),i=s.tech_.buffered(),r=i.length?i.end(i.length-1)-s.tech_.currentTime():0,n=s.bufferLowWaterLine();(!e.endList||s.duration()<Qu.MAX_BUFFER_LOW_WATER_LINE||t.attributes.BANDWIDTH<e.attributes.BANDWIDTH||n<=r)&&s.masterPlaylistLoader_.media(t),s.tech_.trigger("bandwidthupdate")}),this.mainSegmentLoader_.on("progress",function(){s.trigger("progress")}),this.mainSegmentLoader_.on("error",function(){s.blacklistCurrentPlaylist(s.mainSegmentLoader_.error())}),this.mainSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("timestampoffset",function(){s.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})}),this.audioSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("ended",function(){s.onEndOfStream()}),this.mainSegmentLoader_.on("earlyabort",function(){s.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120)}),this.mainSegmentLoader_.on("reseteverything",function(){s.tech_.trigger("hls-reset")}),this.mainSegmentLoader_.on("segmenttimemapping",function(t){s.tech_.trigger({type:"hls-segment-time-mapping",mapping:t.mapping})}),this.audioSegmentLoader_.on("ended",function(){s.onEndOfStream()})},p.prototype.mediaSecondsLoaded_=function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)},p.prototype.load=function(){this.mainSegmentLoader_.load(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()},p.prototype.fastQualityChange_=function(){var t=this.selectPlaylist();t!==this.masterPlaylistLoader_.media()&&(this.masterPlaylistLoader_.media(t),this.mainSegmentLoader_.resetLoader())},p.prototype.play=function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.tech_.setCurrentTime(0),this.hasPlayed_()&&this.load();var t=this.tech_.seekable();return this.tech_.duration()===1/0&&this.tech_.currentTime()<t.start(0)?this.tech_.setCurrentTime(t.end(t.length-1)):void 0}},p.prototype.setupFirstPlay=function(){var t=this,e=this.masterPlaylistLoader_.media();if(!e||this.tech_.paused()||this.hasPlayed_())return!1;if(!e.endList){var i=this.seekable();if(!i.length)return!1;if(As.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata",function(){t.trigger("firstplay"),t.tech_.setCurrentTime(i.end(0)),t.hasPlayed_=function(){return!0}}),!1;this.trigger("firstplay"),this.tech_.setCurrentTime(i.end(0))}return this.hasPlayed_=function(){return!0},this.load(),!0},p.prototype.handleSourceOpen_=function(){try{this.setupSourceBuffers_()}catch(t){return As.log.warn("Failed to create Source Buffers",t),this.mediaSource.endOfStream("decode")}if(this.tech_.autoplay()){var t=this.tech_.play();"undefined"!=typeof t&&"function"==typeof t.then&&t.then(null,function(t){})}this.trigger("sourceopen")},p.prototype.onEndOfStream=function(){var t=this.mainSegmentLoader_.ended_;this.mediaTypes_.AUDIO.activePlaylistLoader&&(t=!this.mainSegmentLoader_.startingMedia_||this.mainSegmentLoader_.startingMedia_.containsVideo?t&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_),t&&this.mediaSource.endOfStream()},p.prototype.stuckAtPlaylistEnd_=function(t){if(!this.seekable().length)return!1;var e=this.syncController_.getExpiredTime(t,this.mediaSource.duration);if(null===e)return!1;var i=Ml.Playlist.playlistEnd(t,e),r=this.tech_.currentTime(),n=this.tech_.buffered();if(!n.length)return i-r<=.1;var s=n.end(n.length-1);return s-r<=.1&&i-s<=.1},p.prototype.blacklistCurrentPlaylist=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=void 0;if(r=e.playlist||this.masterPlaylistLoader_.media(),i=i||e.blacklistDuration||this.blacklistDuration,!r){this.error=e;try{return this.mediaSource.endOfStream("network")}catch(t){return this.trigger("error")}}var n=1===this.masterPlaylistLoader_.master.playlists.filter(eu).length;return n?(As.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),this.tech_.trigger("retryplaylist"),this.masterPlaylistLoader_.load(n)):(r.excludeUntil=Date.now()+1e3*i,this.tech_.trigger("blacklistplaylist"),this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"}),t=this.selectPlaylist(),As.log.warn("Problem encountered with the current HLS playlist."+(e.message?" "+e.message:"")+" Switching to another playlist."),this.masterPlaylistLoader_.media(t))},p.prototype.pauseLoading=function(){this.mainSegmentLoader_.pause(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.pause(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.pause()},p.prototype.setCurrentTime=function(t){var e=gu(this.tech_.buffered(),t);return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?e&&e.length?t:(this.mainSegmentLoader_.resetEverything(),this.mainSegmentLoader_.abort(),this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(),this.audioSegmentLoader_.abort()),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(),this.subtitleSegmentLoader_.abort()),void this.load()):0},p.prototype.duration=function(){return this.masterPlaylistLoader_?this.mediaSource?this.mediaSource.duration:Ml.Playlist.duration(this.masterPlaylistLoader_.media()):0},p.prototype.seekable=function(){return this.seekable_},p.prototype.onSyncInfoUpdate_=function(){var t=void 0,e=void 0;if(this.masterPlaylistLoader_){var i=this.masterPlaylistLoader_.media();if(i){var r=this.syncController_.getExpiredTime(i,this.mediaSource.duration);if(null!==r&&0!==(t=Ml.Playlist.seekable(i,r)).length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){if(i=this.mediaTypes_.AUDIO.activePlaylistLoader.media(),null===(r=this.syncController_.getExpiredTime(i,this.mediaSource.duration)))return;if(0===(e=Ml.Playlist.seekable(i,r)).length)return}e?e.start(0)>t.end(0)||t.start(0)>e.end(0)?this.seekable_=t:this.seekable_=As.createTimeRanges([[e.start(0)>t.start(0)?e.start(0):t.start(0),e.end(0)<t.end(0)?e.end(0):t.end(0)]]):this.seekable_=t,this.logger_("seekable updated ["+vu(this.seekable_)+"]"),this.tech_.trigger("seekablechanged")}}}},p.prototype.updateDuration=function(){var e=this,t=this.mediaSource.duration,i=Ml.Playlist.duration(this.masterPlaylistLoader_.media()),r=this.tech_.buffered(),n=function t(){e.mediaSource.duration=i,e.tech_.trigger("durationchange"),e.mediaSource.removeEventListener("sourceopen",t)};0<r.length&&(i=Math.max(i,r.end(r.length-1))),t!==i&&("open"!==this.mediaSource.readyState?this.mediaSource.addEventListener("sourceopen",n):n())},p.prototype.dispose=function(){var r=this;this.decrypter_.terminate(),this.masterPlaylistLoader_.dispose(),this.mainSegmentLoader_.dispose(),["AUDIO","SUBTITLES"].forEach(function(t){var e=r.mediaTypes_[t].groups;for(var i in e)e[i].forEach(function(t){t.playlistLoader&&t.playlistLoader.dispose()})}),this.audioSegmentLoader_.dispose(),this.subtitleSegmentLoader_.dispose()},p.prototype.master=function(){return this.masterPlaylistLoader_.master},p.prototype.media=function(){return this.masterPlaylistLoader_.media()||this.initialMedia_},p.prototype.setupSourceBuffers_=function(){var t,e=this.masterPlaylistLoader_.media();if(e&&"open"===this.mediaSource.readyState){if((t=cl(this.masterPlaylistLoader_.master,e)).length<1)return this.error="No compatible SourceBuffer configuration for the variant stream:"+e.resolvedUri,this.mediaSource.endOfStream("decode");this.configureLoaderMimeTypes_(t),this.excludeIncompatibleVariants_(e)}},p.prototype.configureLoaderMimeTypes_=function(t){var e=1<t.length&&-1===t[0].indexOf(",")&&t[0]!==t[1]?new As.EventTarget:null;this.mainSegmentLoader_.mimeType(t[0],e),t[1]&&this.audioSegmentLoader_.mimeType(t[1],e)},p.prototype.excludeUnsupportedVariants_=function(){this.master().playlists.forEach(function(t){t.attributes.CODECS&&g.MediaSource&&g.MediaSource.isTypeSupported&&!g.MediaSource.isTypeSupported('video/mp4; codecs="'+t.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i,function(t){return Nu([t])[0]})+'"')&&(t.excludeUntil=1/0)})},p.prototype.excludeIncompatibleVariants_=function(t){var i=2,r=null,e=void 0;t.attributes.CODECS&&(e=ul(t.attributes.CODECS),r=e.videoCodec,i=e.codecCount),this.master().playlists.forEach(function(t){var e={codecCount:2,videoCodec:null};t.attributes.CODECS&&(e=ul(t.attributes.CODECS)),e.codecCount!==i&&(t.excludeUntil=1/0),e.videoCodec!==r&&(t.excludeUntil=1/0)})},p.prototype.updateAdCues_=function(t){var e=0,i=this.seekable();i.length&&(e=i.start(0)),function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;if(t.segments)for(var r=i,n=void 0,s=0;s<t.segments.length;s++){var a=t.segments[s];if(n||(n=bl(e,r+a.duration/2)),n){if("cueIn"in a){n.endTime=r,n.adEndTime=r,r+=a.duration,n=null;continue}if(r<n.endTime){r+=a.duration;continue}n.endTime+=a.duration}else if("cueOut"in a&&((n=new g.VTTCue(r,r+a.duration,a.cueOut)).adStartTime=r,n.adEndTime=r+parseFloat(a.cueOut),e.addCue(n)),"cueOutCont"in a){var o,u,l=a.cueOutCont.split("/").map(parseFloat);o=l[0],u=l[1],(n=new g.VTTCue(r,r+a.duration,"")).adStartTime=r-o,n.adEndTime=n.adStartTime+u,e.addCue(n)}r+=a.duration}}(t,this.cueTagsTrack_,e)},p.prototype.goalBufferLength=function(){var t=this.tech_.currentTime(),e=Qu.GOAL_BUFFER_LENGTH,i=Qu.GOAL_BUFFER_LENGTH_RATE,r=Math.max(e,Qu.MAX_GOAL_BUFFER_LENGTH);return Math.min(e+t*i,r)},p.prototype.bufferLowWaterLine=function(){var t=this.tech_.currentTime(),e=Qu.BUFFER_LOW_WATER_LINE,i=Qu.BUFFER_LOW_WATER_LINE_RATE,r=Math.max(e,Qu.MAX_BUFFER_LOW_WATER_LINE);return Math.min(e+t*i,r)},p}(As.EventTarget),jl=function t(e,i,r){y(this,t);var n,s,a,o=e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);if(i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION;this.width=u.width,this.height=u.height}this.bandwidth=i.attributes.BANDWIDTH,this.id=r,this.enabled=(n=e.playlists,s=i.uri,a=o,function(t){var e=n.master.playlists[s],i=tu(e),r=eu(e);return"undefined"==typeof t?r:(t?delete e.disabled:e.disabled=!0,t===r||i||(a(),t?n.trigger("renditionenabled"):n.trigger("renditiondisabled")),t)})},Fl=["seeking","seeked","pause","playing","error"],Hl=function(){function a(t){var e=this;y(this,a),this.tech_=t.tech,this.seekable=t.seekable,this.consecutiveUpdates=0,this.lastRecordedTime=null,this.timer_=null,this.checkCurrentTimeTimeout_=null,this.logger_=Yu("PlaybackWatcher"),this.logger_("initialize");var i=function(){return e.monitorCurrentTime_()},r=function(){return e.techWaiting_()},n=function(){return e.cancelTimer_()},s=function(){return e.fixesBadSeeks_()};this.tech_.on("seekablechanged",s),this.tech_.on("waiting",r),this.tech_.on(Fl,n),this.tech_.on("canplay",i),this.dispose=function(){e.logger_("dispose"),e.tech_.off("seekablechanged",s),e.tech_.off("waiting",r),e.tech_.off(Fl,n),e.tech_.off("canplay",i),e.checkCurrentTimeTimeout_&&g.clearTimeout(e.checkCurrentTimeTimeout_),e.cancelTimer_()}}return a.prototype.monitorCurrentTime_=function(){this.checkCurrentTime_(),this.checkCurrentTimeTimeout_&&g.clearTimeout(this.checkCurrentTimeTimeout_),this.checkCurrentTimeTimeout_=g.setTimeout(this.monitorCurrentTime_.bind(this),250)},a.prototype.checkCurrentTime_=function(){if(this.tech_.seeking()&&this.fixesBadSeeks_())return this.consecutiveUpdates=0,void(this.lastRecordedTime=this.tech_.currentTime());if(!this.tech_.paused()&&!this.tech_.seeking()){var t=this.tech_.currentTime(),e=this.tech_.buffered();if(this.lastRecordedTime===t&&(!e.length||t+.1>=e.end(e.length-1)))return this.techWaiting_();5<=this.consecutiveUpdates&&t===this.lastRecordedTime?(this.consecutiveUpdates++,this.waiting_()):t===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0,this.lastRecordedTime=t)}},a.prototype.cancelTimer_=function(){this.consecutiveUpdates=0,this.timer_&&(this.logger_("cancelTimer_"),clearTimeout(this.timer_)),this.timer_=null},a.prototype.fixesBadSeeks_=function(){var t=this.tech_.seeking(),e=this.seekable(),i=this.tech_.currentTime(),r=void 0;t&&this.afterSeekableWindow_(e,i)&&(r=e.end(e.length-1));t&&this.beforeSeekableWindow_(e,i)&&(r=e.start(0)+.1);return"undefined"!=typeof r&&(this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+vu(e)+". Seeking to "+r+"."),this.tech_.setCurrentTime(r),!0)},a.prototype.waiting_=function(){if(!this.techWaiting_()){var t=this.tech_.currentTime(),e=this.tech_.buffered(),i=gu(e,t);return i.length&&t+3<=i.end(0)?(this.cancelTimer_(),this.tech_.setCurrentTime(t),this.logger_("Stopped at "+t+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."),void this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})):void 0}},a.prototype.techWaiting_=function(){var t=this.seekable(),e=this.tech_.currentTime();if(this.tech_.seeking()&&this.fixesBadSeeks_())return!0;if(this.tech_.seeking()||null!==this.timer_)return!0;if(this.beforeSeekableWindow_(t,e)){var i=t.end(t.length-1);return this.logger_("Fell out of live window at time "+e+". Seeking to live point (seekable end) "+i),this.cancelTimer_(),this.tech_.setCurrentTime(i),this.tech_.trigger({type:"usage",name:"hls-live-resync"}),!0}var r=this.tech_.buffered(),n=yu(r,e);if(this.videoUnderflow_(n,r,e))return this.cancelTimer_(),this.tech_.setCurrentTime(e),this.tech_.trigger({type:"usage",name:"hls-video-underflow"}),!0;if(0<n.length){var s=n.start(0)-e;return this.logger_("Stopped at "+e+", setting timer for "+s+", seeking to "+n.start(0)),this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*s,e),!0}return!1},a.prototype.afterSeekableWindow_=function(t,e){return!!t.length&&e>t.end(t.length-1)+.1},a.prototype.beforeSeekableWindow_=function(t,e){return!!(t.length&&0<t.start(0)&&e<t.start(0)-.1)},a.prototype.videoUnderflow_=function(t,e,i){if(0===t.length){var r=this.gapFromVideoUnderflow_(e,i);if(r)return this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+i),!0}return!1},a.prototype.skipTheGap_=function(t){var e=this.tech_.buffered(),i=this.tech_.currentTime(),r=yu(e,i);this.cancelTimer_(),0!==r.length&&i===t&&(this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",t,"nextRange start:",r.start(0)),this.tech_.setCurrentTime(r.start(0)+fu),this.tech_.trigger({type:"usage",name:"hls-gap-skip"}))},a.prototype.gapFromVideoUnderflow_=function(t,e){for(var i=function(t){if(t.length<2)return As.createTimeRanges();for(var e=[],i=1;i<t.length;i++){var r=t.end(i-1),n=t.start(i);e.push([r,n])}return As.createTimeRanges(e)}(t),r=0;r<i.length;r++){var n=i.start(r),s=i.end(r);if(e-n<4&&2<e-n)return{start:n,end:s}}return null},a}(),Vl={errorInterval:30,getSource:function(t){return t(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_)}},ql=function(t){!function e(i,t){var r=0,n=0,s=As.mergeOptions(Vl,t);i.ready(function(){i.trigger({type:"usage",name:"hls-error-reload-initialized"})});var a=function(){n&&i.currentTime(n)},o=function(t){null!=t&&(n=i.duration()!==1/0&&i.currentTime()||0,i.one("loadedmetadata",a),i.src(t),i.trigger({type:"usage",name:"hls-error-reload"}),i.play())},u=function(){if(Date.now()-r<1e3*s.errorInterval)i.trigger({type:"usage",name:"hls-error-reload-canceled"});else{if(s.getSource&&"function"==typeof s.getSource)return r=Date.now(),s.getSource.call(i,o);As.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")}},l=function t(){i.off("loadedmetadata",a),i.off("error",u),i.off("dispose",t)};i.on("error",u),i.on("dispose",l),i.reloadSourceOnError=function(t){l(),e(i,t)}}(this,t)},Wl={PlaylistLoader:Vo,Playlist:nu,Decrypter:Do,AsyncStream:Oo,decrypt:Io,utils:pu,STANDARD_PLAYLIST_SELECTOR:function(){return function(t,e,i,r){var n=t.playlists.map(function(t){var e,i;return e=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width,i=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.height,{bandwidth:t.attributes.BANDWIDTH||g.Number.MAX_VALUE,width:e,height:i,playlist:t}});dl(n,function(t,e){return t.bandwidth-e.bandwidth});var s=(n=n.filter(function(t){return!nu.isIncompatible(t.playlist)})).filter(function(t){return nu.isEnabled(t.playlist)});s.length||(s=n.filter(function(t){return!nu.isDisabled(t.playlist)}));var a=s.filter(function(t){return t.bandwidth*Qu.BANDWIDTH_VARIANCE<e}),o=a[a.length-1],u=a.filter(function(t){return t.bandwidth===o.bandwidth})[0],l=a.filter(function(t){return t.width&&t.height});dl(l,function(t,e){return t.width-e.width});var c=l.filter(function(t){return t.width===i&&t.height===r});o=c[c.length-1];var h=c.filter(function(t){return t.bandwidth===o.bandwidth})[0],d=void 0,p=void 0,f=void 0;h||(p=(d=l.filter(function(t){return t.width>i||t.height>r})).filter(function(t){return t.width===d[0].width&&t.height===d[0].height}),o=p[p.length-1],f=p.filter(function(t){return t.bandwidth===o.bandwidth})[0]);var m=f||h||u||s[0]||n[0];return m?m.playlist:null}(this.playlists.master,this.systemBandwidth,parseInt(hl(this.tech_.el(),"width"),10),parseInt(hl(this.tech_.el(),"height"),10))},INITIAL_PLAYLIST_SELECTOR:function(){var t=this.playlists.master.playlists.filter(nu.isEnabled);return dl(t,function(t,e){return pl(t,e)}),t.filter(function(t){return ul(t.attributes.CODECS).videoCodec})[0]||null},comparePlaylistBandwidth:pl,comparePlaylistResolution:function(t,e){var i=void 0,r=void 0;return t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(i=t.attributes.RESOLUTION.width),i=i||g.Number.MAX_VALUE,e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(r=e.attributes.RESOLUTION.width),i===(r=r||g.Number.MAX_VALUE)&&t.attributes.BANDWIDTH&&e.attributes.BANDWIDTH?t.attributes.BANDWIDTH-e.attributes.BANDWIDTH:i-r},xhr:ou()};["GOAL_BUFFER_LENGTH","MAX_GOAL_BUFFER_LENGTH","GOAL_BUFFER_LENGTH_RATE","BUFFER_LOW_WATER_LINE","MAX_BUFFER_LOW_WATER_LINE","BUFFER_LOW_WATER_LINE_RATE","BANDWIDTH_VARIANCE"].forEach(function(e){Object.defineProperty(Wl,e,{get:function(){return As.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),Qu[e]},set:function(t){As.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),"number"!=typeof t||t<0?As.log.warn("value of Hls."+e+" must be greater than or equal to 0"):Qu[e]=t}})});var zl=function(t){if(/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(t))return"hls";return/^application\/dash\+xml/i.test(t)?"dash":null},Gl=function(t,e){for(var i=e.media(),r=-1,n=0;n<t.length;n++)if(t[n].id===i.uri){r=n;break}t.selectedIndex_=r,t.trigger({selectedIndex:r,type:"change"})};Wl.canPlaySource=function(){return As.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Xl=function(t){if("dash"===t.options_.sourceType){var e=As.players[t.tech_.options_.playerId];if(e.eme){var i=function(t,e,i){if(!t)return t;var r={};for(var n in t)r[n]={audioContentType:'audio/mp4; codecs="'+i.attributes.CODECS+'"',videoContentType:'video/mp4; codecs="'+e.attributes.CODECS+'"'},e.contentProtection&&e.contentProtection[n]&&e.contentProtection[n].pssh&&(r[n].pssh=e.contentProtection[n].pssh),"string"==typeof t[n]&&(r[n].url=t[n]);return As.mergeOptions(t,r)}(t.source_.keySystems,t.playlists.media(),t.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());i&&(e.currentSource().keySystems=i)}}};Wl.supportsNativeHls=function(){var e=p.createElement("video");if(!As.getTech("Html5").isSupported())return!1;return["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(t){return/maybe|probably/i.test(e.canPlayType(t))})}(),Wl.supportsNativeDash=!!As.getTech("Html5").isSupported()&&/maybe|probably/i.test(p.createElement("video").canPlayType("application/dash+xml")),Wl.supportsTypeNatively=function(t){return"hls"===t?Wl.supportsNativeHls:"dash"===t&&Wl.supportsNativeDash},Wl.isSupported=function(){return As.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Yl=function(s){function a(t,e,i){y(this,a);var r=b(this,s.call(this,e,i.hls));if(e.options_&&e.options_.playerId){var n=As(e.options_.playerId);n.hasOwnProperty("hls")||Object.defineProperty(n,"hls",{get:function(){return As.log.warn("player.hls is deprecated. Use player.tech_.hls instead."),e.trigger({type:"usage",name:"hls-player-access"}),r}}),n.vhs=r,n.dash=r}if(r.tech_=e,r.source_=t,r.stats={},r.ignoreNextSeekingEvent_=!1,r.setOptions_(),r.options_.overrideNative&&(e.featuresNativeVideoTracks||e.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");return r.on(p,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(t){var e=p.fullscreenElement||p.webkitFullscreenElement||p.mozFullScreenElement||p.msFullscreenElement;e&&e.contains(r.tech_.el())&&r.masterPlaylistController_.fastQualityChange_()}),r.on(r.tech_,"seeking",function(){this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_=!1:this.setCurrentTime(this.tech_.currentTime())}),r.on(r.tech_,"error",function(){this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()}),r.on(r.tech_,"play",r.play),r}return _(a,s),a.prototype.setOptions_=function(){var e=this;this.options_.withCredentials=this.options_.withCredentials||!1,"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300),"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=4194304),this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&4194304===this.options_.bandwidth,["withCredentials","bandwidth"].forEach(function(t){"undefined"!=typeof e.source_[t]&&(e.options_[t]=e.source_[t])}),this.bandwidth=this.options_.bandwidth},a.prototype.src=function(t,e){var r=this;t&&(this.setOptions_(),this.options_.url=this.source_.src,this.options_.tech=this.tech_,this.options_.externHls=Wl,this.options_.sourceType=zl(e),this.masterPlaylistController_=new Bl(this.options_),this.playbackWatcher_=new Hl(As.mergeOptions(this.options_,{seekable:function(){return r.seekable()}})),this.masterPlaylistController_.on("error",function(){As.players[r.tech_.options_.playerId].error(r.masterPlaylistController_.error)}),this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):Wl.STANDARD_PLAYLIST_SELECTOR.bind(this),this.masterPlaylistController_.selectInitialPlaylist=Wl.INITIAL_PLAYLIST_SELECTOR.bind(this),this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,this.mediaSource=this.masterPlaylistController_.mediaSource,Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(t){this.masterPlaylistController_.selectPlaylist=t.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=t,this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.bandwidth},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=t,this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var t=1/(this.bandwidth||1),e=void 0;return e=0<this.throughput?1/this.throughput:0,Math.floor(1/(t+e))},set:function(){As.log.error('The "systemBandwidth" property is read-only')}}}),Object.defineProperties(this.stats,{bandwidth:{get:function(){return r.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return r.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return r.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return r.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return r.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return r.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return r.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return r.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},buffered:{get:function(){return _u(r.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return r.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return r.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return r.tech_.name_},enumerable:!0},duration:{get:function(){return r.tech_.duration()},enumerable:!0},master:{get:function(){return r.playlists.master},enumerable:!0},playerDimensions:{get:function(){return r.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return _u(r.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return r.tech_.getVideoPlaybackQuality()},enumerable:!0}}),this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),this.masterPlaylistController_.on("selectedinitialmedia",function(){var i,t;t=(i=r).playlists,i.representations=function(){return t.master.playlists.filter(function(t){return!tu(t)}).map(function(t,e){return new jl(i,t,t.uri)})},Xl(r)}),this.on(this.masterPlaylistController_,"progress",function(){this.tech_.trigger("progress")}),this.on(this.masterPlaylistController_,"firstplay",function(){this.ignoreNextSeekingEvent_=!0}),this.tech_.ready(function(){return r.setupQualityLevels_()}),this.tech_.el()&&this.tech_.src(As.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))},a.prototype.setupQualityLevels_=function(){var i=this,t=As.players[this.tech_.options_.playerId];t&&t.qualityLevels&&(this.qualityLevels_=t.qualityLevels(),this.masterPlaylistController_.on("selectedinitialmedia",function(){var e,t;e=i.qualityLevels_,(t=i).representations().forEach(function(t){e.addQualityLevel(t)}),Gl(e,t.playlists)}),this.playlists.on("mediachange",function(){Gl(i.qualityLevels_,i.playlists)}))},a.prototype.play=function(){this.masterPlaylistController_.play()},a.prototype.setCurrentTime=function(t){this.masterPlaylistController_.setCurrentTime(t)},a.prototype.duration=function(){return this.masterPlaylistController_.duration()},a.prototype.seekable=function(){return this.masterPlaylistController_.seekable()},a.prototype.dispose=function(){this.playbackWatcher_&&this.playbackWatcher_.dispose(),this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),this.qualityLevels_&&this.qualityLevels_.dispose(),s.prototype.dispose.call(this)},a}(As.getComponent("Component")),$l={name:"videojs-http-streaming",VERSION:"1.0.0",canHandleSource:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=As.mergeOptions(As.options,e);return $l.canPlayType(t.type,i)},handleSource:function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=As.mergeOptions(As.options,i);return e.hls=new Yl(t,e,r),e.hls.xhr=ou(),e.hls.src(t.src,t.type),e.hls},canPlayType:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=As.mergeOptions(As.options,e).hls.overrideNative,r=zl(t);return r&&(!Wl.supportsTypeNatively(r)||i)?"maybe":""}};return"undefined"!=typeof As.MediaSource&&"undefined"!=typeof As.URL||(As.MediaSource=qu,As.URL=Wu),qu.supportsNativeMediaSources()&&As.getTech("Html5").registerSourceHandler($l,0),As.HlsHandler=Yl,As.HlsSourceHandler=$l,As.Hls=Wl,As.use||As.registerComponent("Hls",Wl),As.options.hls=As.options.hls||{},As.registerPlugin?As.registerPlugin("reloadSourceOnError",ql):As.plugin("reloadSourceOnError",ql),As});