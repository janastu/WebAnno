

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsBy)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
/*
** Annotator v1.2.10
** https://github.com/okfn/annotator/
**
** Copyright 2015, the Annotator project contributors.
** Dual licensed under the MIT and GPLv3 licenses.
** https://github.com/okfn/annotator/blob/master/LICENSE
**
** Built at: 2015-02-26 03:26:47Z
 
*/


!function(){var $,Annotator,Delegator,LinkParser,Range,Util,base64Decode,base64UrlDecode,createDateFromISO8601,findChild,fn,functions,g,getNodeName,getNodePosition,gettext,parseToken,simpleXPathJQuery,simpleXPathPure,_Annotator,_gettext,_i,_j,_len,_len1,_ref,_ref1,_ref2,_ref3,_ref4,_t,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};simpleXPathJQuery=function(relativeRoot){var jq;jq=this.map(function(){var elem,idx,path,tagName;path="";elem=this;while((elem!=null?elem.nodeType:void 0)===Node.ELEMENT_NODE&&elem!==relativeRoot){tagName=elem.tagName.replace(":","\\:");idx=$(elem.parentNode).children(tagName).index(elem)+1;idx="["+idx+"]";path="/"+elem.tagName.toLowerCase()+idx+path;elem=elem.parentNode}return path});return jq.get()};simpleXPathPure=function(relativeRoot){var getPathSegment,getPathTo,jq,rootNode;getPathSegment=function(node){var name,pos;name=getNodeName(node);pos=getNodePosition(node);return""+name+"["+pos+"]"};rootNode=relativeRoot;getPathTo=function(node){var xpath;xpath="";while(node!==rootNode){if(node==null){throw new Error("Called getPathTo on a node which was not a descendant of @rootNode. "+rootNode)}xpath=getPathSegment(node)+"/"+xpath;node=node.parentNode}xpath="/"+xpath;xpath=xpath.replace(/\/$/,"");return xpath};jq=this.map(function(){var path;path=getPathTo(this);return path});return jq.get()};findChild=function(node,type,index){var child,children,found,name,_i,_len;if(!node.hasChildNodes()){throw new Error("XPath error: node has no children!")}children=node.childNodes;found=0;for(_i=0,_len=children.length;_i<_len;_i++){child=children[_i];name=getNodeName(child);if(name===type){found+=1;if(found===index){return child}}}throw new Error("XPath error: wanted child not found.")};getNodeName=function(node){var nodeName;nodeName=node.nodeName.toLowerCase();switch(nodeName){case"#text":return"text()";case"#comment":return"comment()";case"#cdata-section":return"cdata-section()";default:return nodeName}};getNodePosition=function(node){var pos,tmp;pos=0;tmp=node;while(tmp){if(tmp.nodeName===node.nodeName){pos++}tmp=tmp.previousSibling}return pos};gettext=null;if(typeof Gettext!=="undefined"&&Gettext!==null){_gettext=new Gettext({domain:"annotator"});gettext=function(msgid){return _gettext.gettext(msgid)}}else{gettext=function(msgid){return msgid}}_t=function(msgid){return gettext(msgid)};if(!(typeof jQuery!=="undefined"&&jQuery!==null?(_ref=jQuery.fn)!=null?_ref.jquery:void 0:void 0)){console.error(_t("Annotator requires jQuery: have you included lib/vendor/jquery.js?"))}if(!(JSON&&JSON.parse&&JSON.stringify)){console.error(_t("Annotator requires a JSON implementation: have you included lib/vendor/json2.js?"))}$=jQuery;Util={};Util.flatten=function(array){var flatten;flatten=function(ary){var el,flat,_i,_len;flat=[];for(_i=0,_len=ary.length;_i<_len;_i++){el=ary[_i];flat=flat.concat(el&&$.isArray(el)?flatten(el):el)}return flat};return flatten(array)};Util.contains=function(parent,child){var node;node=child;while(node!=null){if(node===parent){return true}node=node.parentNode}return false};Util.getTextNodes=function(jq){var getTextNodes;getTextNodes=function(node){var nodes;if(node&&node.nodeType!==Node.TEXT_NODE){nodes=[];if(node.nodeType!==Node.COMMENT_NODE){node=node.lastChild;while(node){nodes.push(getTextNodes(node));node=node.previousSibling}}return nodes.reverse()}else{return node}};return jq.map(function(){return Util.flatten(getTextNodes(this))})};Util.getLastTextNodeUpTo=function(n){var result;switch(n.nodeType){case Node.TEXT_NODE:return n;case Node.ELEMENT_NODE:if(n.lastChild!=null){result=Util.getLastTextNodeUpTo(n.lastChild);if(result!=null){return result}}break}n=n.previousSibling;if(n!=null){return Util.getLastTextNodeUpTo(n)}else{return null}};Util.getFirstTextNodeNotBefore=function(n){var result;switch(n.nodeType){case Node.TEXT_NODE:return n;case Node.ELEMENT_NODE:if(n.firstChild!=null){result=Util.getFirstTextNodeNotBefore(n.firstChild);if(result!=null){return result}}break}n=n.nextSibling;if(n!=null){return Util.getFirstTextNodeNotBefore(n)}else{return null}};Util.readRangeViaSelection=function(range){var sel;sel=Util.getGlobal().getSelection();sel.removeAllRanges();sel.addRange(range.toRange());return sel.toString()};Util.xpathFromNode=function(el,relativeRoot){var exception,result;try{result=simpleXPathJQuery.call(el,relativeRoot)}catch(_error){exception=_error;console.log("jQuery-based XPath construction failed! Falling back to manual.");result=simpleXPathPure.call(el,relativeRoot)}return result};Util.nodeFromXPath=function(xp,root){var idx,name,node,step,steps,_i,_len,_ref1;steps=xp.substring(1).split("/");node=root;for(_i=0,_len=steps.length;_i<_len;_i++){step=steps[_i];_ref1=step.split("["),name=_ref1[0],idx=_ref1[1];idx=idx!=null?parseInt((idx!=null?idx.split("]"):void 0)[0]):1;node=findChild(node,name.toLowerCase(),idx)}return node};Util.escape=function(html){return html.replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};Util.uuid=function(){var counter;counter=0;return function(){return counter++}}();Util.getGlobal=function(){return function(){return this}()};Util.maxZIndex=function($elements){var all,el;all=function(){var _i,_len,_results;_results=[];for(_i=0,_len=$elements.length;_i<_len;_i++){el=$elements[_i];if($(el).css("position")==="static"){_results.push(-1)}else{_results.push(parseFloat($(el).css("z-index"))||-1)}}return _results}();return Math.max.apply(Math,all)};Util.mousePosition=function(e,offsetEl){var offset,_ref1;if((_ref1=$(offsetEl).css("position"))!=="absolute"&&_ref1!=="fixed"&&_ref1!=="relative"){offsetEl=$(offsetEl).offsetParent()[0]}offset=$(offsetEl).offset();return{top:e.pageY-offset.top,left:e.pageX-offset.left}};Util.preventEventDefault=function(event){return event!=null?typeof event.preventDefault==="function"?event.preventDefault():void 0:void 0};functions=["log","debug","info","warn","exception","assert","dir","dirxml","trace","group","groupEnd","groupCollapsed","time","timeEnd","profile","profileEnd","count","clear","table","error","notifyFirebug","firebug","userObjects"];if(typeof console!=="undefined"&&console!==null){if(console.group==null){console.group=function(name){return console.log("GROUP: ",name)}}if(console.groupCollapsed==null){console.groupCollapsed=console.group}for(_i=0,_len=functions.length;_i<_len;_i++){fn=functions[_i];if(console[fn]==null){console[fn]=function(){return console.log(_t("Not implemented:")+(" console."+name))}}}}else{this.console={};for(_j=0,_len1=functions.length;_j<_len1;_j++){fn=functions[_j];this.console[fn]=function(){}}this.console["error"]=function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];return alert("ERROR: "+args.join(", "))};this.console["warn"]=function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];return alert("WARNING: "+args.join(", "))}}Delegator=function(){Delegator.prototype.events={};Delegator.prototype.options={};Delegator.prototype.element=null;function Delegator(element,options){this.options=$.extend(true,{},this.options,options);this.element=$(element);this._closures={};this.on=this.subscribe;this.addEvents()}Delegator.prototype.destroy=function(){return this.removeEvents()};Delegator.prototype.addEvents=function(){var event,_k,_len2,_ref1,_results;_ref1=Delegator._parseEvents(this.events);_results=[];for(_k=0,_len2=_ref1.length;_k<_len2;_k++){event=_ref1[_k];_results.push(this._addEvent(event.selector,event.event,event.functionName))}return _results};Delegator.prototype.removeEvents=function(){var event,_k,_len2,_ref1,_results;_ref1=Delegator._parseEvents(this.events);_results=[];for(_k=0,_len2=_ref1.length;_k<_len2;_k++){event=_ref1[_k];_results.push(this._removeEvent(event.selector,event.event,event.functionName))}return _results};Delegator.prototype._addEvent=function(selector,event,functionName){var closure,_this=this;closure=function(){return _this[functionName].apply(_this,arguments)};if(selector===""&&Delegator._isCustomEvent(event)){this.subscribe(event,closure)}else{this.element.delegate(selector,event,closure)}this._closures[""+selector+"/"+event+"/"+functionName]=closure;return this};Delegator.prototype._removeEvent=function(selector,event,functionName){var closure;closure=this._closures[""+selector+"/"+event+"/"+functionName];if(selector===""&&Delegator._isCustomEvent(event)){this.unsubscribe(event,closure)}else{this.element.undelegate(selector,event,closure)}delete this._closures[""+selector+"/"+event+"/"+functionName];return this};Delegator.prototype.publish=function(){this.element.triggerHandler.apply(this.element,arguments);return this};Delegator.prototype.subscribe=function(event,callback){var closure;closure=function(){return callback.apply(this,[].slice.call(arguments,1))};closure.guid=callback.guid=$.guid+=1;this.element.bind(event,closure);return this};Delegator.prototype.unsubscribe=function(){this.element.unbind.apply(this.element,arguments);return this};return Delegator}();Delegator._parseEvents=function(eventsObj){var event,events,functionName,sel,selector,_k,_ref1;events=[];for(sel in eventsObj){functionName=eventsObj[sel];_ref1=sel.split(" "),selector=2<=_ref1.length?__slice.call(_ref1,0,_k=_ref1.length-1):(_k=0,[]),event=_ref1[_k++];events.push({selector:selector.join(" "),event:event,functionName:functionName})}return events};Delegator.natives=function(){var key,specials,val;specials=function(){var _ref1,_results;_ref1=jQuery.event.special;_results=[];for(key in _ref1){if(!__hasProp.call(_ref1,key))continue;val=_ref1[key];_results.push(key)}return _results}();return"blur focus focusin focusout load resize scroll unload click dblclick\nmousedown mouseup mousemove mouseover mouseout mouseenter mouseleave\nchange select submit keydown keypress keyup error".split(/[^a-z]+/).concat(specials)}();Delegator._isCustomEvent=function(event){event=event.split(".")[0];return $.inArray(event,Delegator.natives)===-1};Range={};Range.sniff=function(r){if(r.commonAncestorContainer!=null){return new Range.BrowserRange(r)}else if(typeof r.start==="string"){return new Range.SerializedRange(r)}else if(r.start&&typeof r.start==="object"){return new Range.NormalizedRange(r)}else{console.error(_t("Could not sniff range type"));return false}};Range.nodeFromXPath=function(xpath,root){var customResolver,evaluateXPath,namespace,node,segment;if(root==null){root=document}evaluateXPath=function(xp,nsResolver){var exception;if(nsResolver==null){nsResolver=null}try{return document.evaluate("."+xp,root,nsResolver,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}catch(_error){exception=_error;console.log("XPath evaluation failed.");console.log("Trying fallback...");return Util.nodeFromXPath(xp,root)}};if(!$.isXMLDoc(document.documentElement)){return evaluateXPath(xpath)}else{customResolver=document.createNSResolver(document.ownerDocument===null?document.documentElement:document.ownerDocument.documentElement);node=evaluateXPath(xpath,customResolver);if(!node){xpath=function(){var _k,_len2,_ref1,_results;_ref1=xpath.split("/");_results=[];for(_k=0,_len2=_ref1.length;_k<_len2;_k++){segment=_ref1[_k];if(segment&&segment.indexOf(":")===-1){_results.push(segment.replace(/^([a-z]+)/,"xhtml:$1"))}else{_results.push(segment)}}return _results}().join("/");namespace=document.lookupNamespaceURI(null);customResolver=function(ns){if(ns==="xhtml"){return namespace}else{return document.documentElement.getAttribute("xmlns:"+ns)}};node=evaluateXPath(xpath,customResolver)}return node}};Range.RangeError=function(_super){__extends(RangeError,_super);function RangeError(type,message,parent){this.type=type;this.message=message;this.parent=parent!=null?parent:null;RangeError.__super__.constructor.call(this,this.message)}return RangeError}(Error);Range.BrowserRange=function(){function BrowserRange(obj){this.commonAncestorContainer=obj.commonAncestorContainer;this.startContainer=obj.startContainer;this.startOffset=obj.startOffset;this.endContainer=obj.endContainer;this.endOffset=obj.endOffset}BrowserRange.prototype.normalize=function(root){var n,node,nr,r;if(this.tainted){console.error(_t("You may only call normalize() once on a BrowserRange!"));return false}else{this.tainted=true}r={};if(this.startContainer.nodeType===Node.ELEMENT_NODE){r.start=Util.getFirstTextNodeNotBefore(this.startContainer.childNodes[this.startOffset]);r.startOffset=0}else{r.start=this.startContainer;r.startOffset=this.startOffset}if(this.endContainer.nodeType===Node.ELEMENT_NODE){node=this.endContainer.childNodes[this.endOffset];if(node!=null){n=node;while(n!=null&&n.nodeType!==Node.TEXT_NODE){n=n.firstChild}if(n!=null){r.end=n;r.endOffset=0}}if(r.end==null){node=this.endContainer.childNodes[this.endOffset-1];r.end=Util.getLastTextNodeUpTo(node);r.endOffset=r.end.nodeValue.length}}else{r.end=this.endContainer;r.endOffset=this.endOffset}nr={};if(r.startOffset>0){if(r.start.nodeValue.length>r.startOffset){nr.start=r.start.splitText(r.startOffset)}else{nr.start=r.start.nextSibling}}else{nr.start=r.start}if(r.start===r.end){if(nr.start.nodeValue.length>r.endOffset-r.startOffset){nr.start.splitText(r.endOffset-r.startOffset)}nr.end=nr.start}else{if(r.end.nodeValue.length>r.endOffset){r.end.splitText(r.endOffset)}nr.end=r.end}nr.commonAncestor=this.commonAncestorContainer;while(nr.commonAncestor.nodeType!==Node.ELEMENT_NODE){nr.commonAncestor=nr.commonAncestor.parentNode}return new Range.NormalizedRange(nr)};BrowserRange.prototype.serialize=function(root,ignoreSelector){return this.normalize(root).serialize(root,ignoreSelector)};return BrowserRange}();Range.NormalizedRange=function(){function NormalizedRange(obj){this.commonAncestor=obj.commonAncestor;this.start=obj.start;this.end=obj.end}NormalizedRange.prototype.normalize=function(root){return this};NormalizedRange.prototype.limit=function(bounds){var nodes,parent,startParents,_k,_len2,_ref1;nodes=$.grep(this.textNodes(),function(node){return node.parentNode===bounds||$.contains(bounds,node.parentNode)});if(!nodes.length){return null}this.start=nodes[0];this.end=nodes[nodes.length-1];startParents=$(this.start).parents();_ref1=$(this.end).parents();for(_k=0,_len2=_ref1.length;_k<_len2;_k++){parent=_ref1[_k];if(startParents.index(parent)!==-1){this.commonAncestor=parent;break}}return this};NormalizedRange.prototype.serialize=function(root,ignoreSelector){var end,serialization,start;serialization=function(node,isEnd){var n,nodes,offset,origParent,textNodes,xpath,_k,_len2;if(ignoreSelector){origParent=$(node).parents(":not("+ignoreSelector+")").eq(0)}else{origParent=$(node).parent()}xpath=Util.xpathFromNode(origParent,root)[0];textNodes=Util.getTextNodes(origParent);nodes=textNodes.slice(0,textNodes.index(node));offset=0;for(_k=0,_len2=nodes.length;_k<_len2;_k++){n=nodes[_k];offset+=n.nodeValue.length}if(isEnd){return[xpath,offset+node.nodeValue.length]}else{return[xpath,offset]}};start=serialization(this.start);end=serialization(this.end,true);return new Range.SerializedRange({start:start[0],end:end[0],startOffset:start[1],endOffset:end[1]})};NormalizedRange.prototype.text=function(){var node;return function(){var _k,_len2,_ref1,_results;_ref1=this.textNodes();_results=[];for(_k=0,_len2=_ref1.length;_k<_len2;_k++){node=_ref1[_k];_results.push(node.nodeValue)}return _results}.call(this).join("")};NormalizedRange.prototype.textNodes=function(){var end,start,textNodes,_ref1;textNodes=Util.getTextNodes($(this.commonAncestor));_ref1=[textNodes.index(this.start),textNodes.index(this.end)],start=_ref1[0],end=_ref1[1];return $.makeArray(textNodes.slice(start,+end+1||9e9))};NormalizedRange.prototype.toRange=function(){var range;range=document.createRange();range.setStartBefore(this.start);range.setEndAfter(this.end);return range};return NormalizedRange}();Range.SerializedRange=function(){function SerializedRange(obj){this.start=obj.start;this.startOffset=obj.startOffset;this.end=obj.end;this.endOffset=obj.endOffset}SerializedRange.prototype.normalize=function(root){var contains,e,length,node,p,range,targetOffset,tn,_k,_l,_len2,_len3,_ref1,_ref2;range={};_ref1=["start","end"];for(_k=0,_len2=_ref1.length;_k<_len2;_k++){p=_ref1[_k];try{node=Range.nodeFromXPath(this[p],root)}catch(_error){e=_error;throw new Range.RangeError(p,"Error while finding "+p+" node: "+this[p]+": "+e,e)}if(!node){throw new Range.RangeError(p,"Couldn't find "+p+" node: "+this[p])}length=0;targetOffset=this[p+"Offset"];if(p==="end"){targetOffset--}_ref2=Util.getTextNodes($(node));for(_l=0,_len3=_ref2.length;_l<_len3;_l++){tn=_ref2[_l];if(length+tn.nodeValue.length>targetOffset){range[p+"Container"]=tn;range[p+"Offset"]=this[p+"Offset"]-length;break}else{length+=tn.nodeValue.length}}if(range[p+"Offset"]==null){throw new Range.RangeError(""+p+"offset","Couldn't find offset "+this[p+"Offset"]+" in element "+this[p])}}contains=document.compareDocumentPosition==null?function(a,b){return a.contains(b)}:function(a,b){return a.compareDocumentPosition(b)&16};$(range.startContainer).parents().each(function(){if(contains(this,range.endContainer)){range.commonAncestorContainer=this;return false}});return new Range.BrowserRange(range).normalize(root)};SerializedRange.prototype.serialize=function(root,ignoreSelector){return this.normalize(root).serialize(root,ignoreSelector)};SerializedRange.prototype.toObject=function(){return{start:this.start,startOffset:this.startOffset,end:this.end,endOffset:this.endOffset}};return SerializedRange}();_Annotator=this.Annotator;Annotator=function(_super){__extends(Annotator,_super);Annotator.prototype.events={".annotator-adder button click":"onAdderClick",".annotator-adder button mousedown":"onAdderMousedown",".annotator-hl mouseover":"onHighlightMouseover",".annotator-hl mouseout":"startViewerHideTimer"};Annotator.prototype.html={adder:'<div class="annotator-adder"><button>'+_t("Annotate")+"</button></div>",wrapper:'<div class="annotator-wrapper"></div>'};Annotator.prototype.options={readOnly:false};Annotator.prototype.plugins={};Annotator.prototype.editor=null;Annotator.prototype.viewer=null;Annotator.prototype.selectedRanges=null;Annotator.prototype.mouseIsDown=false;Annotator.prototype.ignoreMouseup=false;Annotator.prototype.viewerHideTimer=null;function Annotator(element,options){this.onDeleteAnnotation=__bind(this.onDeleteAnnotation,this);this.onEditAnnotation=__bind(this.onEditAnnotation,this);this.onAdderClick=__bind(this.onAdderClick,this);this.onAdderMousedown=__bind(this.onAdderMousedown,this);this.onHighlightMouseover=__bind(this.onHighlightMouseover,this);this.checkForEndSelection=__bind(this.checkForEndSelection,this);this.checkForStartSelection=__bind(this.checkForStartSelection,this);this.clearViewerHideTimer=__bind(this.clearViewerHideTimer,this);this.startViewerHideTimer=__bind(this.startViewerHideTimer,this);this.showViewer=__bind(this.showViewer,this);this.onEditorSubmit=__bind(this.onEditorSubmit,this);this.onEditorHide=__bind(this.onEditorHide,this);this.showEditor=__bind(this.showEditor,this);Annotator.__super__.constructor.apply(this,arguments);this.plugins={};if(!Annotator.supported()){return this}if(!this.options.readOnly){this._setupDocumentEvents()}this._setupWrapper()._setupViewer()._setupEditor();this._setupDynamicStyle();this.adder=$(this.html.adder).appendTo(this.wrapper).hide();Annotator._instances.push(this)}Annotator.prototype._setupWrapper=function(){this.wrapper=$(this.html.wrapper);this.element.find("script").remove();this.element.wrapInner(this.wrapper);this.wrapper=this.element.find(".annotator-wrapper");return this};Annotator.prototype._setupViewer=function(){var _this=this;this.viewer=new Annotator.Viewer({readOnly:this.options.readOnly});this.viewer.hide().on("edit",this.onEditAnnotation).on("delete",this.onDeleteAnnotation).addField({load:function(field,annotation){if(annotation.text){$(field).html(Util.escape(annotation.text))}else{$(field).html("<i>"+_t("No Comment")+"</i>")}return _this.publish("annotationViewerTextField",[field,annotation])}}).element.appendTo(this.wrapper).bind({mouseover:this.clearViewerHideTimer,mouseout:this.startViewerHideTimer});return this};Annotator.prototype._setupEditor=function(){this.editor=new Annotator.Editor;this.editor.hide().on("hide",this.onEditorHide).on("save",this.onEditorSubmit).addField({type:"textarea",label:_t("Comments")+"…",load:function(field,annotation){return $(field).find("textarea").val(annotation.text||"")},submit:function(field,annotation){return annotation.text=$(field).find("textarea").val()}});this.editor.element.appendTo(this.wrapper);return this};Annotator.prototype._setupDocumentEvents=function(){$(document).bind({mouseup:this.checkForEndSelection,mousedown:this.checkForStartSelection});return this};Annotator.prototype._setupDynamicStyle=function(){var max,sel,style,x;style=$("#annotator-dynamic-style");if(!style.length){style=$('<style id="annotator-dynamic-style"></style>').appendTo(document.head)}sel="*"+function(){var _k,_len2,_ref1,_results;_ref1=["adder","outer","notice","filter"];_results=[];for(_k=0,_len2=_ref1.length;_k<_len2;_k++){x=_ref1[_k];_results.push(":not(.annotator-"+x+")")}return _results}().join("");max=Util.maxZIndex($(document.body).find(sel));max=Math.max(max,1e3);style.text([".annotator-adder, .annotator-outer, .annotator-notice {","  z-index: "+(max+20)+";","}",".annotator-filter {","  z-index: "+(max+10)+";","}"].join("\n"));return this};Annotator.prototype.destroy=function(){var idx,name,plugin,_base,_ref1;Annotator.__super__.destroy.apply(this,arguments);$(document).unbind({mouseup:this.checkForEndSelection,mousedown:this.checkForStartSelection});$("#annotator-dynamic-style").remove();this.adder.remove();this.viewer.destroy();this.editor.destroy();this.wrapper.find(".annotator-hl").each(function(){$(this).contents().insertBefore(this);return $(this).remove()});this.wrapper.contents().insertBefore(this.wrapper);this.wrapper.remove();this.element.data("annotator",null);_ref1=this.plugins;for(name in _ref1){plugin=_ref1[name];if(typeof(_base=this.plugins[name]).destroy==="function"){_base.destroy()}}idx=Annotator._instances.indexOf(this);if(idx!==-1){return Annotator._instances.splice(idx,1)}};Annotator.prototype.getSelectedRanges=function(){var browserRange,i,normedRange,r,ranges,rangesToIgnore,selection,_k,_len2;selection=Util.getGlobal().getSelection();ranges=[];rangesToIgnore=[];if(!selection.isCollapsed){ranges=function(){var _k,_ref1,_results;_results=[];for(i=_k=0,_ref1=selection.rangeCount;0<=_ref1?_k<_ref1:_k>_ref1;i=0<=_ref1?++_k:--_k){r=selection.getRangeAt(i);browserRange=new Range.BrowserRange(r);normedRange=browserRange.normalize().limit(this.wrapper[0]);if(normedRange===null){rangesToIgnore.push(r)}_results.push(normedRange)}return _results}.call(this);selection.removeAllRanges()}for(_k=0,_len2=rangesToIgnore.length;_k<_len2;_k++){r=rangesToIgnore[_k];selection.addRange(r)}return $.grep(ranges,function(range){if(range){selection.addRange(range.toRange())}return range})};Annotator.prototype.createAnnotation=function(){var annotation;annotation={};this.publish("beforeAnnotationCreated",[annotation]);return annotation};Annotator.prototype.setupAnnotation=function(annotation){var e,normed,normedRanges,r,root,_k,_l,_len2,_len3,_ref1;root=this.wrapper[0];annotation.ranges||(annotation.ranges=this.selectedRanges);normedRanges=[];_ref1=annotation.ranges;for(_k=0,_len2=_ref1.length;_k<_len2;_k++){r=_ref1[_k];try{normedRanges.push(Range.sniff(r).normalize(root))}catch(_error){e=_error;if(e instanceof Range.RangeError){this.publish("rangeNormalizeFail",[annotation,r,e])}else{throw e}}}annotation.quote=[];annotation.ranges=[];annotation.highlights=[];for(_l=0,_len3=normedRanges.length;_l<_len3;_l++){normed=normedRanges[_l];annotation.quote.push($.trim(normed.text()));annotation.ranges.push(normed.serialize(this.wrapper[0],".annotator-hl"));$.merge(annotation.highlights,this.highlightRange(normed))}annotation.quote=annotation.quote.join(" / ");$(annotation.highlights).data("annotation",annotation);$(annotation.highlights).attr("data-annotation-id",annotation.id);return annotation};Annotator.prototype.updateAnnotation=function(annotation){this.publish("beforeAnnotationUpdated",[annotation]);$(annotation.highlights).attr("data-annotation-id",annotation.id);this.publish("annotationUpdated",[annotation]);return annotation};Annotator.prototype.deleteAnnotation=function(annotation){var child,h,_k,_len2,_ref1;if(annotation.highlights!=null){_ref1=annotation.highlights;for(_k=0,_len2=_ref1.length;_k<_len2;_k++){h=_ref1[_k];if(!(h.parentNode!=null)){continue}child=h.childNodes[0];$(h).replaceWith(h.childNodes)}}this.publish("annotationDeleted",[annotation]);return annotation};Annotator.prototype.loadAnnotations=function(annotations){var clone,loader,_this=this;if(annotations==null){annotations=[]}loader=function(annList){var n,now,_k,_len2;if(annList==null){annList=[]}now=annList.splice(0,10);for(_k=0,_len2=now.length;_k<_len2;_k++){n=now[_k];_this.setupAnnotation(n)}if(annList.length>0){return setTimeout(function(){return loader(annList)},10)}else{return _this.publish("annotationsLoaded",[clone])}};clone=annotations.slice();loader(annotations);return this};Annotator.prototype.dumpAnnotations=function(){if(this.plugins["Store"]){return this.plugins["Store"].dumpAnnotations()}else{console.warn(_t("Can't dump annotations without Store plugin."));return false}};Annotator.prototype.highlightRange=function(normedRange,cssClass){var hl,node,white,_k,_len2,_ref1,_results;if(cssClass==null){cssClass="annotator-hl"}white=/^\s*$/;hl=$("<span class='"+cssClass+"'></span>");_ref1=normedRange.textNodes();_results=[];for(_k=0,_len2=_ref1.length;_k<_len2;_k++){node=_ref1[_k];if(!white.test(node.nodeValue)){_results.push($(node).wrapAll(hl).parent().show()[0])}}return _results};Annotator.prototype.highlightRanges=function(normedRanges,cssClass){var highlights,r,_k,_len2;if(cssClass==null){cssClass="annotator-hl"}highlights=[];for(_k=0,_len2=normedRanges.length;_k<_len2;_k++){r=normedRanges[_k];$.merge(highlights,this.highlightRange(r,cssClass))}return highlights};Annotator.prototype.addPlugin=function(name,options){var klass,_base;if(this.plugins[name]){console.error(_t("You cannot have more than one instance of any plugin."))}else{klass=Annotator.Plugin[name];if(typeof klass==="function"){this.plugins[name]=new klass(this.element[0],options);this.plugins[name].annotator=this;if(typeof(_base=this.plugins[name]).pluginInit==="function"){_base.pluginInit()}}else{console.error(_t("Could not load ")+name+_t(" plugin. Have you included the appropriate <script> tag?"))}}return this};Annotator.prototype.showEditor=function(annotation,location){this.editor.element.css(location);this.editor.load(annotation);this.publish("annotationEditorShown",[this.editor,annotation]);return this};Annotator.prototype.onEditorHide=function(){this.publish("annotationEditorHidden",[this.editor]);return this.ignoreMouseup=false};Annotator.prototype.onEditorSubmit=function(annotation){return this.publish("annotationEditorSubmit",[this.editor,annotation])};Annotator.prototype.showViewer=function(annotations,location){this.viewer.element.css(location);this.viewer.load(annotations);return this.publish("annotationViewerShown",[this.viewer,annotations])};Annotator.prototype.startViewerHideTimer=function(){if(!this.viewerHideTimer){return this.viewerHideTimer=setTimeout(this.viewer.hide,250)}};Annotator.prototype.clearViewerHideTimer=function(){clearTimeout(this.viewerHideTimer);return this.viewerHideTimer=false};Annotator.prototype.checkForStartSelection=function(event){if(!(event&&this.isAnnotator(event.target))){this.startViewerHideTimer()}return this.mouseIsDown=true};Annotator.prototype.checkForEndSelection=function(event){var container,range,_k,_len2,_ref1;this.mouseIsDown=false;if(this.ignoreMouseup){return}this.selectedRanges=this.getSelectedRanges();_ref1=this.selectedRanges;for(_k=0,_len2=_ref1.length;_k<_len2;_k++){range=_ref1[_k];container=range.commonAncestor;if(this.isAnnotator(container)){return}}if(event&&this.selectedRanges.length){return this.adder.css(Util.mousePosition(event,this.wrapper[0])).show()}else{return this.adder.hide()}};Annotator.prototype.isAnnotator=function(element){return!!$(element).parents().addBack().filter("[class^=annotator-]").not("[class=annotator-hl]").not(this.wrapper).length};Annotator.prototype.onHighlightMouseover=function(event){var annotations;this.clearViewerHideTimer();if(this.mouseIsDown){return false}if(this.viewer.isShown()){this.viewer.hide()}annotations=$(event.target).parents(".annotator-hl").addBack().map(function(){return $(this).data("annotation")}).toArray();return this.showViewer(annotations,Util.mousePosition(event,this.wrapper[0]))};Annotator.prototype.onAdderMousedown=function(event){if(event!=null){event.preventDefault()}return this.ignoreMouseup=true};Annotator.prototype.onAdderClick=function(event){var annotation,cancel,cleanup,position,save,_this=this;if(event!=null){event.preventDefault()}position=this.adder.position();this.adder.hide();annotation=this.setupAnnotation(this.createAnnotation());$(annotation.highlights).addClass("annotator-hl-temporary");save=function(){cleanup();$(annotation.highlights).removeClass("annotator-hl-temporary");return _this.publish("annotationCreated",[annotation])};cancel=function(){cleanup();return _this.deleteAnnotation(annotation)};cleanup=function(){_this.unsubscribe("annotationEditorHidden",cancel);return _this.unsubscribe("annotationEditorSubmit",save)};this.subscribe("annotationEditorHidden",cancel);this.subscribe("annotationEditorSubmit",save);return this.showEditor(annotation,position)};Annotator.prototype.onEditAnnotation=function(annotation){var cleanup,offset,update,_this=this;offset=this.viewer.element.position();update=function(){cleanup();return _this.updateAnnotation(annotation)};cleanup=function(){_this.unsubscribe("annotationEditorHidden",cleanup);return _this.unsubscribe("annotationEditorSubmit",update)};this.subscribe("annotationEditorHidden",cleanup);this.subscribe("annotationEditorSubmit",update);this.viewer.hide();return this.showEditor(annotation,offset)};Annotator.prototype.onDeleteAnnotation=function(annotation){this.viewer.hide();return this.deleteAnnotation(annotation)};return Annotator}(Delegator);Annotator.Plugin=function(_super){__extends(Plugin,_super);function Plugin(element,options){Plugin.__super__.constructor.apply(this,arguments)}Plugin.prototype.pluginInit=function(){};return Plugin}(Delegator);g=Util.getGlobal();if(((_ref1=g.document)!=null?_ref1.evaluate:void 0)==null){$.getScript("http://assets.annotateit.org/vendor/xpath.min.js")}if(g.getSelection==null){$.getScript("http://assets.annotateit.org/vendor/ierange.min.js")}if(g.JSON==null){$.getScript("http://assets.annotateit.org/vendor/json2.min.js")}if(g.Node==null){g.Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12}}Annotator.$=$;Annotator.Delegator=Delegator;Annotator.Range=Range;Annotator.Util=Util;Annotator._instances=[];Annotator._t=_t;Annotator.supported=function(){return function(){return!!this.getSelection}()};Annotator.noConflict=function(){Util.getGlobal().Annotator=_Annotator;return this};$.fn.annotator=function(options){var args;args=Array.prototype.slice.call(arguments,1);return this.each(function(){var instance;instance=$.data(this,"annotator");if(options==="destroy"){$.removeData(this,"annotator");return instance!=null?instance.destroy(args):void 0
}else if(instance){return options&&instance[options].apply(instance,args)}else{instance=new Annotator(this,options);return $.data(this,"annotator",instance)}})};this.Annotator=Annotator;Annotator.Widget=function(_super){__extends(Widget,_super);Widget.prototype.classes={hide:"annotator-hide",invert:{x:"annotator-invert-x",y:"annotator-invert-y"}};function Widget(element,options){Widget.__super__.constructor.apply(this,arguments);this.classes=$.extend({},Annotator.Widget.prototype.classes,this.classes)}Widget.prototype.destroy=function(){this.removeEvents();return this.element.remove()};Widget.prototype.checkOrientation=function(){var current,offset,viewport,widget,window;this.resetOrientation();window=$(Annotator.Util.getGlobal());widget=this.element.children(":first");offset=widget.offset();viewport={top:window.scrollTop(),right:window.width()+window.scrollLeft()};current={top:offset.top,right:offset.left+widget.width()};if(current.top-viewport.top<0){this.invertY()}if(current.right-viewport.right>0){this.invertX()}return this};Widget.prototype.resetOrientation=function(){this.element.removeClass(this.classes.invert.x).removeClass(this.classes.invert.y);return this};Widget.prototype.invertX=function(){this.element.addClass(this.classes.invert.x);return this};Widget.prototype.invertY=function(){this.element.addClass(this.classes.invert.y);return this};Widget.prototype.isInvertedY=function(){return this.element.hasClass(this.classes.invert.y)};Widget.prototype.isInvertedX=function(){return this.element.hasClass(this.classes.invert.x)};return Widget}(Delegator);Annotator.Editor=function(_super){__extends(Editor,_super);Editor.prototype.events={"form submit":"submit",".annotator-save click":"submit",".annotator-cancel click":"hide",".annotator-cancel mouseover":"onCancelButtonMouseover","textarea keydown":"processKeypress"};Editor.prototype.classes={hide:"annotator-hide",focus:"annotator-focus"};Editor.prototype.html='<div class="annotator-outer annotator-editor">\n  <form class="annotator-widget">\n    <ul class="annotator-listing"></ul>\n    <div class="annotator-controls">\n      <a href="#cancel" class="annotator-cancel">'+_t("Cancel")+'</a>\n<a href="#save" class="annotator-save annotator-focus">'+_t("Save")+"</a>\n    </div>\n  </form>\n</div>";Editor.prototype.options={};function Editor(options){this.onCancelButtonMouseover=__bind(this.onCancelButtonMouseover,this);this.processKeypress=__bind(this.processKeypress,this);this.submit=__bind(this.submit,this);this.load=__bind(this.load,this);this.hide=__bind(this.hide,this);this.show=__bind(this.show,this);Editor.__super__.constructor.call(this,$(this.html)[0],options);this.fields=[];this.annotation={}}Editor.prototype.show=function(event){Annotator.Util.preventEventDefault(event);this.element.removeClass(this.classes.hide);this.element.find(".annotator-save").addClass(this.classes.focus);this.checkOrientation();this.element.find(":input:first").focus();this.setupDraggables();return this.publish("show")};Editor.prototype.hide=function(event){Annotator.Util.preventEventDefault(event);this.element.addClass(this.classes.hide);return this.publish("hide")};Editor.prototype.load=function(annotation){var field,_k,_len2,_ref2;this.annotation=annotation;this.publish("load",[this.annotation]);_ref2=this.fields;for(_k=0,_len2=_ref2.length;_k<_len2;_k++){field=_ref2[_k];field.load(field.element,this.annotation)}return this.show()};Editor.prototype.submit=function(event){var field,_k,_len2,_ref2;Annotator.Util.preventEventDefault(event);_ref2=this.fields;for(_k=0,_len2=_ref2.length;_k<_len2;_k++){field=_ref2[_k];field.submit(field.element,this.annotation)}this.publish("save",[this.annotation]);return this.hide()};Editor.prototype.addField=function(options){var element,field,input;field=$.extend({id:"annotator-field-"+Annotator.Util.uuid(),type:"input",label:"",load:function(){},submit:function(){}},options);input=null;element=$('<li class="annotator-item" />');field.element=element[0];switch(field.type){case"textarea":input=$("<textarea />");break;case"input":case"checkbox":input=$("<input />");break;case"select":input=$("<select />")}element.append(input);input.attr({id:field.id,placeholder:field.label});if(field.type==="checkbox"){input[0].type="checkbox";element.addClass("annotator-checkbox");element.append($("<label />",{"for":field.id,html:field.label}))}this.element.find("ul:first").append(element);this.fields.push(field);return field.element};Editor.prototype.checkOrientation=function(){var controls,list;Editor.__super__.checkOrientation.apply(this,arguments);list=this.element.find("ul");controls=this.element.find(".annotator-controls");if(this.element.hasClass(this.classes.invert.y)){controls.insertBefore(list)}else if(controls.is(":first-child")){controls.insertAfter(list)}return this};Editor.prototype.processKeypress=function(event){if(event.keyCode===27){return this.hide()}else if(event.keyCode===13&&!event.shiftKey){return this.submit()}};Editor.prototype.onCancelButtonMouseover=function(){return this.element.find("."+this.classes.focus).removeClass(this.classes.focus)};Editor.prototype.setupDraggables=function(){var classes,controls,cornerItem,editor,mousedown,onMousedown,onMousemove,onMouseup,resize,textarea,throttle,_this=this;this.element.find(".annotator-resize").remove();if(this.element.hasClass(this.classes.invert.y)){cornerItem=this.element.find(".annotator-item:last")}else{cornerItem=this.element.find(".annotator-item:first")}if(cornerItem){$('<span class="annotator-resize"></span>').appendTo(cornerItem)}mousedown=null;classes=this.classes;editor=this.element;textarea=null;resize=editor.find(".annotator-resize");controls=editor.find(".annotator-controls");throttle=false;onMousedown=function(event){if(event.target===this){mousedown={element:this,top:event.pageY,left:event.pageX};textarea=editor.find("textarea:first");$(window).bind({"mouseup.annotator-editor-resize":onMouseup,"mousemove.annotator-editor-resize":onMousemove});return event.preventDefault()}};onMouseup=function(){mousedown=null;return $(window).unbind(".annotator-editor-resize")};onMousemove=function(event){var diff,directionX,directionY,height,width;if(mousedown&&throttle===false){diff={top:event.pageY-mousedown.top,left:event.pageX-mousedown.left};if(mousedown.element===resize[0]){height=textarea.outerHeight();width=textarea.outerWidth();directionX=editor.hasClass(classes.invert.x)?-1:1;directionY=editor.hasClass(classes.invert.y)?1:-1;textarea.height(height+diff.top*directionY);textarea.width(width+diff.left*directionX);if(textarea.outerHeight()!==height){mousedown.top=event.pageY}if(textarea.outerWidth()!==width){mousedown.left=event.pageX}}else if(mousedown.element===controls[0]){editor.css({top:parseInt(editor.css("top"),10)+diff.top,left:parseInt(editor.css("left"),10)+diff.left});mousedown.top=event.pageY;mousedown.left=event.pageX}throttle=true;return setTimeout(function(){return throttle=false},1e3/60)}};resize.bind("mousedown",onMousedown);return controls.bind("mousedown",onMousedown)};return Editor}(Annotator.Widget);Annotator.Viewer=function(_super){__extends(Viewer,_super);Viewer.prototype.events={".annotator-edit click":"onEditClick",".annotator-delete click":"onDeleteClick"};Viewer.prototype.classes={hide:"annotator-hide",showControls:"annotator-visible"};Viewer.prototype.html={element:'<div class="annotator-outer annotator-viewer">\n  <ul class="annotator-widget annotator-listing"></ul>\n</div>',item:'<li class="annotator-annotation annotator-item">\n  <span class="annotator-controls">\n    <a href="#" title="View as webpage" class="annotator-link">View as webpage</a>\n    <button title="Edit" class="annotator-edit">Edit</button>\n    <button title="Delete" class="annotator-delete">Delete</button>\n  </span>\n</li>'};Viewer.prototype.options={readOnly:false};function Viewer(options){this.onDeleteClick=__bind(this.onDeleteClick,this);this.onEditClick=__bind(this.onEditClick,this);this.load=__bind(this.load,this);this.hide=__bind(this.hide,this);this.show=__bind(this.show,this);Viewer.__super__.constructor.call(this,$(this.html.element)[0],options);this.item=$(this.html.item)[0];this.fields=[];this.annotations=[]}Viewer.prototype.show=function(event){var controls,_this=this;Annotator.Util.preventEventDefault(event);controls=this.element.find(".annotator-controls").addClass(this.classes.showControls);setTimeout(function(){return controls.removeClass(_this.classes.showControls)},500);this.element.removeClass(this.classes.hide);return this.checkOrientation().publish("show")};Viewer.prototype.isShown=function(){return!this.element.hasClass(this.classes.hide)};Viewer.prototype.hide=function(event){Annotator.Util.preventEventDefault(event);this.element.addClass(this.classes.hide);return this.publish("hide")};Viewer.prototype.load=function(annotations){var annotation,controller,controls,del,edit,element,field,item,link,links,list,_k,_l,_len2,_len3,_ref2,_ref3;this.annotations=annotations||[];list=this.element.find("ul:first").empty();_ref2=this.annotations;for(_k=0,_len2=_ref2.length;_k<_len2;_k++){annotation=_ref2[_k];item=$(this.item).clone().appendTo(list).data("annotation",annotation);controls=item.find(".annotator-controls");link=controls.find(".annotator-link");edit=controls.find(".annotator-edit");del=controls.find(".annotator-delete");links=new LinkParser(annotation.links||[]).get("alternate",{type:"text/html"});if(links.length===0||links[0].href==null){link.remove()}else{link.attr("href",links[0].href)}if(this.options.readOnly){edit.remove();del.remove()}else{controller={showEdit:function(){return edit.removeAttr("disabled")},hideEdit:function(){return edit.attr("disabled","disabled")},showDelete:function(){return del.removeAttr("disabled")},hideDelete:function(){return del.attr("disabled","disabled")}}}_ref3=this.fields;for(_l=0,_len3=_ref3.length;_l<_len3;_l++){field=_ref3[_l];element=$(field.element).clone().appendTo(item)[0];field.load(element,annotation,controller)}}this.publish("load",[this.annotations]);return this.show()};Viewer.prototype.addField=function(options){var field;field=$.extend({load:function(){}},options);field.element=$("<div />")[0];this.fields.push(field);field.element;return this};Viewer.prototype.onEditClick=function(event){return this.onButtonClick(event,"edit")};Viewer.prototype.onDeleteClick=function(event){return this.onButtonClick(event,"delete")};Viewer.prototype.onButtonClick=function(event,type){var item;item=$(event.target).parents(".annotator-annotation");return this.publish(type,[item.data("annotation")])};return Viewer}(Annotator.Widget);LinkParser=function(){function LinkParser(data){this.data=data}LinkParser.prototype.get=function(rel,cond){var d,k,keys,match,v,_k,_len2,_ref2,_results;if(cond==null){cond={}}cond=$.extend({},cond,{rel:rel});keys=function(){var _results;_results=[];for(k in cond){if(!__hasProp.call(cond,k))continue;v=cond[k];_results.push(k)}return _results}();_ref2=this.data;_results=[];for(_k=0,_len2=_ref2.length;_k<_len2;_k++){d=_ref2[_k];match=keys.reduce(function(m,k){return m&&d[k]===cond[k]},true);if(match){_results.push(d)}else{continue}}return _results};return LinkParser}();Annotator=Annotator||{};Annotator.Notification=function(_super){__extends(Notification,_super);Notification.prototype.events={click:"hide"};Notification.prototype.options={html:"<div class='annotator-notice'></div>",classes:{show:"annotator-notice-show",info:"annotator-notice-info",success:"annotator-notice-success",error:"annotator-notice-error"}};function Notification(options){this.hide=__bind(this.hide,this);this.show=__bind(this.show,this);Notification.__super__.constructor.call(this,$(this.options.html).appendTo(document.body)[0],options)}Notification.prototype.show=function(message,status){if(status==null){status=Annotator.Notification.INFO}this.currentStatus=status;$(this.element).addClass(this.options.classes.show).addClass(this.options.classes[this.currentStatus]).html(Util.escape(message||""));setTimeout(this.hide,5e3);return this};Notification.prototype.hide=function(){if(this.currentStatus==null){this.currentStatus=Annotator.Notification.INFO}$(this.element).removeClass(this.options.classes.show).removeClass(this.options.classes[this.currentStatus]);return this};return Notification}(Delegator);Annotator.Notification.INFO="info";Annotator.Notification.SUCCESS="success";Annotator.Notification.ERROR="error";$(function(){var notification;notification=new Annotator.Notification;Annotator.showNotification=notification.show;return Annotator.hideNotification=notification.hide});Annotator.Plugin.Unsupported=function(_super){__extends(Unsupported,_super);function Unsupported(){_ref2=Unsupported.__super__.constructor.apply(this,arguments);return _ref2}Unsupported.prototype.options={message:Annotator._t("Sorry your current browser does not support the Annotator")};Unsupported.prototype.pluginInit=function(){var _this=this;if(!Annotator.supported()){return $(function(){Annotator.showNotification(_this.options.message);if(window.XMLHttpRequest===void 0&&ActiveXObject!==void 0){return $("html").addClass("ie6")}})}};return Unsupported}(Annotator.Plugin);createDateFromISO8601=function(string){var d,date,offset,regexp,time,_ref3;regexp="([0-9]{4})(-([0-9]{2})(-([0-9]{2})"+"(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?"+"(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";d=string.match(new RegExp(regexp));offset=0;date=new Date(d[1],0,1);if(d[3]){date.setMonth(d[3]-1)}if(d[5]){date.setDate(d[5])}if(d[7]){date.setHours(d[7])}if(d[8]){date.setMinutes(d[8])}if(d[10]){date.setSeconds(d[10])}if(d[12]){date.setMilliseconds(Number("0."+d[12])*1e3)}if(d[14]){offset=Number(d[16])*60+Number(d[17]);offset*=(_ref3=d[15]==="-")!=null?_ref3:{1:-1}}offset-=date.getTimezoneOffset();time=Number(date)+offset*60*1e3;date.setTime(Number(time));return date};base64Decode=function(data){var ac,b64,bits,dec,h1,h2,h3,h4,i,o1,o2,o3,tmp_arr;if(typeof atob!=="undefined"&&atob!==null){return atob(data)}else{b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i=0;ac=0;dec="";tmp_arr=[];if(!data){return data}data+="";while(i<data.length){h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&255;o2=bits>>8&255;o3=bits&255;if(h3===64){tmp_arr[ac++]=String.fromCharCode(o1)}else if(h4===64){tmp_arr[ac++]=String.fromCharCode(o1,o2)}else{tmp_arr[ac++]=String.fromCharCode(o1,o2,o3)}}return tmp_arr.join("")}};base64UrlDecode=function(data){var i,m,_k,_ref3;m=data.length%4;if(m!==0){for(i=_k=0,_ref3=4-m;0<=_ref3?_k<_ref3:_k>_ref3;i=0<=_ref3?++_k:--_k){data+="="}}data=data.replace(/-/g,"+");data=data.replace(/_/g,"/");return base64Decode(data)};parseToken=function(token){var head,payload,sig,_ref3;_ref3=token.split("."),head=_ref3[0],payload=_ref3[1],sig=_ref3[2];return JSON.parse(base64UrlDecode(payload))};Annotator.Plugin.Auth=function(_super){__extends(Auth,_super);Auth.prototype.options={token:null,tokenUrl:"/auth/token",autoFetch:true};function Auth(element,options){Auth.__super__.constructor.apply(this,arguments);this.waitingForToken=[];if(this.options.token){this.setToken(this.options.token)}else{this.requestToken()}}Auth.prototype.requestToken=function(){var _this=this;this.requestInProgress=true;return $.ajax({url:this.options.tokenUrl,dataType:"text",xhrFields:{withCredentials:true}}).done(function(data,status,xhr){return _this.setToken(data)}).fail(function(xhr,status,err){var msg;msg=Annotator._t("Couldn't get auth token:");console.error(""+msg+" "+err,xhr);return Annotator.showNotification(""+msg+" "+xhr.responseText,Annotator.Notification.ERROR)}).always(function(){return _this.requestInProgress=false})};Auth.prototype.setToken=function(token){var _results,_this=this;this.token=token;this._unsafeToken=parseToken(token);if(this.haveValidToken()){if(this.options.autoFetch){this.refreshTimeout=setTimeout(function(){return _this.requestToken()},(this.timeToExpiry()-2)*1e3)}this.updateHeaders();_results=[];while(this.waitingForToken.length>0){_results.push(this.waitingForToken.pop()(this._unsafeToken))}return _results}else{console.warn(Annotator._t("Didn't get a valid token."));if(this.options.autoFetch){console.warn(Annotator._t("Getting a new token in 10s."));return setTimeout(function(){return _this.requestToken()},10*1e3)}}};Auth.prototype.haveValidToken=function(){var allFields;allFields=this._unsafeToken&&this._unsafeToken.issuedAt&&this._unsafeToken.ttl&&this._unsafeToken.consumerKey;if(allFields&&this.timeToExpiry()>0){return true}else{return false}};Auth.prototype.timeToExpiry=function(){var expiry,issue,now,timeToExpiry;now=(new Date).getTime()/1e3;issue=createDateFromISO8601(this._unsafeToken.issuedAt).getTime()/1e3;expiry=issue+this._unsafeToken.ttl;timeToExpiry=expiry-now;if(timeToExpiry>0){return timeToExpiry}else{return 0}};Auth.prototype.updateHeaders=function(){var current;current=this.element.data("annotator:headers");return this.element.data("annotator:headers",$.extend(current,{"x-annotator-auth-token":this.token}))};Auth.prototype.withToken=function(callback){if(callback==null){return}if(this.haveValidToken()){return callback(this._unsafeToken)}else{this.waitingForToken.push(callback);if(!this.requestInProgress){return this.requestToken()}}};return Auth}(Annotator.Plugin);Annotator.Plugin.Store=function(_super){__extends(Store,_super);Store.prototype.events={annotationCreated:"annotationCreated",annotationDeleted:"annotationDeleted",annotationUpdated:"annotationUpdated"};Store.prototype.options={annotationData:{},emulateHTTP:false,loadFromSearch:false,prefix:"/store",urls:{create:"/annotations",read:"/annotations/:id",update:"/annotations/:id",destroy:"/annotations/:id",search:"/search"}};function Store(element,options){this._onError=__bind(this._onError,this);this._onLoadAnnotationsFromSearch=__bind(this._onLoadAnnotationsFromSearch,this);this._onLoadAnnotations=__bind(this._onLoadAnnotations,this);this._getAnnotations=__bind(this._getAnnotations,this);Store.__super__.constructor.apply(this,arguments);this.annotations=[]}Store.prototype.pluginInit=function(){if(!Annotator.supported()){return}if(this.annotator.plugins.Auth){return this.annotator.plugins.Auth.withToken(this._getAnnotations)}else{return this._getAnnotations()}};Store.prototype._getAnnotations=function(){if(this.options.loadFromSearch){return this.loadAnnotationsFromSearch(this.options.loadFromSearch)}else{return this.loadAnnotations()}};Store.prototype.annotationCreated=function(annotation){var _this=this;if(__indexOf.call(this.annotations,annotation)<0){this.registerAnnotation(annotation);return this._apiRequest("create",annotation,function(data){if(data.id==null){console.warn(Annotator._t("Warning: No ID returned from server for annotation "),annotation)}return _this.updateAnnotation(annotation,data)})}else{return this.updateAnnotation(annotation,{})}};Store.prototype.annotationUpdated=function(annotation){var _this=this;if(__indexOf.call(this.annotations,annotation)>=0){return this._apiRequest("update",annotation,function(data){return _this.updateAnnotation(annotation,data)})}};Store.prototype.annotationDeleted=function(annotation){var _this=this;if(__indexOf.call(this.annotations,annotation)>=0){return this._apiRequest("destroy",annotation,function(){return _this.unregisterAnnotation(annotation)})}};Store.prototype.registerAnnotation=function(annotation){return this.annotations.push(annotation)};Store.prototype.unregisterAnnotation=function(annotation){return this.annotations.splice(this.annotations.indexOf(annotation),1)};Store.prototype.updateAnnotation=function(annotation,data){if(__indexOf.call(this.annotations,annotation)<0){console.error(Annotator._t("Trying to update unregistered annotation!"))}else{$.extend(annotation,data)}return $(annotation.highlights).data("annotation",annotation)};Store.prototype.loadAnnotations=function(){return this._apiRequest("read",null,this._onLoadAnnotations)};Store.prototype._onLoadAnnotations=function(data){var a,annotation,annotationMap,newData,_k,_l,_len2,_len3,_ref3;if(data==null){data=[]}annotationMap={};_ref3=this.annotations;for(_k=0,_len2=_ref3.length;_k<_len2;_k++){a=_ref3[_k];annotationMap[a.id]=a}newData=[];for(_l=0,_len3=data.length;_l<_len3;_l++){a=data[_l];if(annotationMap[a.id]){annotation=annotationMap[a.id];this.updateAnnotation(annotation,a)}else{newData.push(a)}}this.annotations=this.annotations.concat(newData);return this.annotator.loadAnnotations(newData.slice())};Store.prototype.loadAnnotationsFromSearch=function(searchOptions){return this._apiRequest("search",searchOptions,this._onLoadAnnotationsFromSearch)};Store.prototype._onLoadAnnotationsFromSearch=function(data){if(data==null){data={}}return this._onLoadAnnotations(data.rows||[])};Store.prototype.dumpAnnotations=function(){var ann,_k,_len2,_ref3,_results;_ref3=this.annotations;_results=[];for(_k=0,_len2=_ref3.length;_k<_len2;_k++){ann=_ref3[_k];_results.push(JSON.parse(this._dataFor(ann)))}return _results};Store.prototype._apiRequest=function(action,obj,onSuccess){var id,options,request,url;id=obj&&obj.id;url=this._urlFor(action,id);options=this._apiRequestOptions(action,obj,onSuccess);request=$.ajax(url,options);request._id=id;request._action=action;return request};Store.prototype._apiRequestOptions=function(action,obj,onSuccess){var data,method,opts;method=this._methodFor(action);opts={type:method,headers:this.element.data("annotator:headers"),dataType:"json",success:onSuccess||function(){},error:this._onError};if(this.options.emulateHTTP&&(method==="PUT"||method==="DELETE")){opts.headers=$.extend(opts.headers,{"X-HTTP-Method-Override":method});opts.type="POST"}if(action==="search"){opts=$.extend(opts,{data:obj});return opts}data=obj&&this._dataFor(obj);if(this.options.emulateJSON){opts.data={json:data};if(this.options.emulateHTTP){opts.data._method=method}return opts}opts=$.extend(opts,{data:data,contentType:"application/json; charset=utf-8"});return opts};Store.prototype._urlFor=function(action,id){var url;url=this.options.prefix!=null?this.options.prefix:"";url+=this.options.urls[action];url=url.replace(/\/:id/,id!=null?"/"+id:"");url=url.replace(/:id/,id!=null?id:"");return url};Store.prototype._methodFor=function(action){var table;table={create:"POST",read:"GET",update:"PUT",destroy:"DELETE",search:"GET"};return table[action]};Store.prototype._dataFor=function(annotation){var data,highlights;highlights=annotation.highlights;delete annotation.highlights;$.extend(annotation,this.options.annotationData);data=JSON.stringify(annotation);if(highlights){annotation.highlights=highlights}return data};Store.prototype._onError=function(xhr){var action,message;action=xhr._action;message=Annotator._t("Sorry we could not ")+action+Annotator._t(" this annotation");if(xhr._action==="search"){message=Annotator._t("Sorry we could not search the store for annotations")}else if(xhr._action==="read"&&!xhr._id){message=Annotator._t("Sorry we could not ")+action+Annotator._t(" the annotations from the store")}switch(xhr.status){case 401:message=Annotator._t("Sorry you are not allowed to ")+action+Annotator._t(" this annotation");break;case 404:message=Annotator._t("Sorry we could not connect to the annotations store");break;case 500:message=Annotator._t("Sorry something went wrong with the annotation store")}Annotator.showNotification(message,Annotator.Notification.ERROR);return console.error(Annotator._t("API request failed:")+(" '"+xhr.status+"'"))};return Store}(Annotator.Plugin);Annotator.Plugin.Permissions=function(_super){__extends(Permissions,_super);Permissions.prototype.events={beforeAnnotationCreated:"addFieldsToAnnotation"};Permissions.prototype.options={showViewPermissionsCheckbox:true,showEditPermissionsCheckbox:true,userId:function(user){return user},userString:function(user){return user},userAuthorize:function(action,annotation,user){var token,tokens,_k,_len2;if(annotation.permissions){tokens=annotation.permissions[action]||[];if(tokens.length===0){return true}for(_k=0,_len2=tokens.length;_k<_len2;_k++){token=tokens[_k];if(this.userId(user)===token){return true}}return false}else if(annotation.user){if(user){return this.userId(user)===this.userId(annotation.user)}else{return false}}return true},user:"",permissions:{read:[],update:[],"delete":[],admin:[]}};function Permissions(element,options){this._setAuthFromToken=__bind(this._setAuthFromToken,this);this.updateViewer=__bind(this.updateViewer,this);this.updateAnnotationPermissions=__bind(this.updateAnnotationPermissions,this);this.updatePermissionsField=__bind(this.updatePermissionsField,this);this.addFieldsToAnnotation=__bind(this.addFieldsToAnnotation,this);Permissions.__super__.constructor.apply(this,arguments);if(this.options.user){this.setUser(this.options.user);delete this.options.user}}Permissions.prototype.pluginInit=function(){var createCallback,self,_this=this;if(!Annotator.supported()){return}self=this;createCallback=function(method,type){return function(field,annotation){return self[method].call(self,type,field,annotation)}};if(!this.user&&this.annotator.plugins.Auth){this.annotator.plugins.Auth.withToken(this._setAuthFromToken)}if(this.options.showViewPermissionsCheckbox===true){this.annotator.editor.addField({type:"checkbox",label:Annotator._t("Allow anyone to <strong>view</strong> this annotation"),load:createCallback("updatePermissionsField","read"),submit:createCallback("updateAnnotationPermissions","read")})}if(this.options.showEditPermissionsCheckbox===true){this.annotator.editor.addField({type:"checkbox",label:Annotator._t("Allow anyone to <strong>edit</strong> this annotation"),load:createCallback("updatePermissionsField","update"),submit:createCallback("updateAnnotationPermissions","update")})}this.annotator.viewer.addField({load:this.updateViewer});if(this.annotator.plugins.Filter){return this.annotator.plugins.Filter.addFilter({label:Annotator._t("User"),property:"user",isFiltered:function(input,user){var keyword,_k,_len2,_ref3;user=_this.options.userString(user);if(!(input&&user)){return false}_ref3=input.split(/\s*/);for(_k=0,_len2=_ref3.length;_k<_len2;_k++){keyword=_ref3[_k];if(user.indexOf(keyword)===-1){return false}}return true}})}};Permissions.prototype.setUser=function(user){return this.user=user};Permissions.prototype.addFieldsToAnnotation=function(annotation){if(annotation){annotation.permissions=$.extend(true,{},this.options.permissions);if(this.user){return annotation.user=this.user}}};Permissions.prototype.authorize=function(action,annotation,user){if(user===void 0){user=this.user}if(this.options.userAuthorize){return this.options.userAuthorize.call(this.options,action,annotation,user)}else{return true}};Permissions.prototype.updatePermissionsField=function(action,field,annotation){var input;field=$(field).show();input=field.find("input").removeAttr("disabled");if(!this.authorize("admin",annotation)){field.hide()}if(this.authorize(action,annotation||{},null)){return input.attr("checked","checked")}else{return input.removeAttr("checked")}};Permissions.prototype.updateAnnotationPermissions=function(type,field,annotation){var dataKey;if(!annotation.permissions){annotation.permissions=$.extend(true,{},this.options.permissions)}dataKey=type+"-permissions";if($(field).find("input").is(":checked")){return annotation.permissions[type]=[]}else{return annotation.permissions[type]=[this.options.userId(this.user)]}};Permissions.prototype.updateViewer=function(field,annotation,controls){var user,username;field=$(field);username=this.options.userString(annotation.user);if(annotation.user&&username&&typeof username==="string"){user=Annotator.Util.escape(this.options.userString(annotation.user));field.html(user).addClass("annotator-user")}else{field.remove()}if(controls){if(!this.authorize("update",annotation)){controls.hideEdit()}if(!this.authorize("delete",annotation)){return controls.hideDelete()}}};Permissions.prototype._setAuthFromToken=function(token){return this.setUser(token.userId)};return Permissions}(Annotator.Plugin);Annotator.Plugin.AnnotateItPermissions=function(_super){__extends(AnnotateItPermissions,_super);function AnnotateItPermissions(){this._setAuthFromToken=__bind(this._setAuthFromToken,this);this.updateAnnotationPermissions=__bind(this.updateAnnotationPermissions,this);this.updatePermissionsField=__bind(this.updatePermissionsField,this);this.addFieldsToAnnotation=__bind(this.addFieldsToAnnotation,this);_ref3=AnnotateItPermissions.__super__.constructor.apply(this,arguments);return _ref3}AnnotateItPermissions.prototype.options={showViewPermissionsCheckbox:true,showEditPermissionsCheckbox:true,groups:{world:"group:__world__",authenticated:"group:__authenticated__",consumer:"group:__consumer__"},userId:function(user){return user.userId},userString:function(user){return user.userId},userAuthorize:function(action,annotation,user){var action_field,permissions,_ref4,_ref5,_ref6,_ref7;permissions=annotation.permissions||{};action_field=permissions[action]||[];if(_ref4=this.groups.world,__indexOf.call(action_field,_ref4)>=0){return true}else if(user!=null&&user.userId!=null&&user.consumerKey!=null){if(user.userId===annotation.user&&user.consumerKey===annotation.consumer){return true}else if(_ref5=this.groups.authenticated,__indexOf.call(action_field,_ref5)>=0){return true}else if(user.consumerKey===annotation.consumer&&(_ref6=this.groups.consumer,__indexOf.call(action_field,_ref6)>=0)){return true}else if(user.consumerKey===annotation.consumer&&(_ref7=user.userId,__indexOf.call(action_field,_ref7)>=0)){return true}else if(user.consumerKey===annotation.consumer&&user.admin){return true}else{return false}}else{return false}},permissions:{read:["group:__world__"],update:[],"delete":[],admin:[]}};AnnotateItPermissions.prototype.addFieldsToAnnotation=function(annotation){if(annotation){annotation.permissions=this.options.permissions;if(this.user){annotation.user=this.user.userId;return annotation.consumer=this.user.consumerKey}}};AnnotateItPermissions.prototype.updatePermissionsField=function(action,field,annotation){var input;field=$(field).show();input=field.find("input").removeAttr("disabled");if(!this.authorize("admin",annotation)){field.hide()}if(this.user&&this.authorize(action,annotation||{},{userId:"__nonexistentuser__",consumerKey:this.user.consumerKey})){return input.attr("checked","checked")}else{return input.removeAttr("checked")}};AnnotateItPermissions.prototype.updateAnnotationPermissions=function(type,field,annotation){var dataKey;if(!annotation.permissions){annotation.permissions=this.options.permissions}dataKey=type+"-permissions";if($(field).find("input").is(":checked")){return annotation.permissions[type]=[type==="read"?this.options.groups.world:this.options.groups.consumer]}else{return annotation.permissions[type]=[]}};AnnotateItPermissions.prototype._setAuthFromToken=function(token){return this.setUser(token)};return AnnotateItPermissions}(Annotator.Plugin.Permissions);Annotator.Plugin.Filter=function(_super){__extends(Filter,_super);Filter.prototype.events={".annotator-filter-property input focus":"_onFilterFocus",".annotator-filter-property input blur":"_onFilterBlur",".annotator-filter-property input keyup":"_onFilterKeyup",".annotator-filter-previous click":"_onPreviousClick",".annotator-filter-next click":"_onNextClick",".annotator-filter-clear click":"_onClearClick"};Filter.prototype.classes={active:"annotator-filter-active",hl:{hide:"annotator-hl-filtered",active:"annotator-hl-active"}};Filter.prototype.html={element:'<div class="annotator-filter">\n  <strong>'+Annotator._t("Navigate:")+'</strong>\n<span class="annotator-filter-navigation">\n  <button class="annotator-filter-previous">'+Annotator._t("Previous")+'</button>\n<button class="annotator-filter-next">'+Annotator._t("Next")+"</button>\n</span>\n<strong>"+Annotator._t("Filter by:")+"</strong>\n</div>",filter:'<span class="annotator-filter-property">\n  <label></label>\n  <input/>\n  <button class="annotator-filter-clear">'+Annotator._t("Clear")+"</button>\n</span>"};
Filter.prototype.options={appendTo:"body",filters:[],addAnnotationFilter:true,isFiltered:function(input,property){var keyword,_k,_len2,_ref4;if(!(input&&property)){return false}_ref4=input.split(/\s+/);for(_k=0,_len2=_ref4.length;_k<_len2;_k++){keyword=_ref4[_k];if(property.indexOf(keyword)===-1){return false}}return true}};function Filter(element,options){this._onPreviousClick=__bind(this._onPreviousClick,this);this._onNextClick=__bind(this._onNextClick,this);this._onFilterKeyup=__bind(this._onFilterKeyup,this);this._onFilterBlur=__bind(this._onFilterBlur,this);this._onFilterFocus=__bind(this._onFilterFocus,this);this.updateHighlights=__bind(this.updateHighlights,this);var _base;element=$(this.html.element).appendTo((options!=null?options.appendTo:void 0)||this.options.appendTo);Filter.__super__.constructor.call(this,element,options);(_base=this.options).filters||(_base.filters=[]);this.filter=$(this.html.filter);this.filters=[];this.current=0}Filter.prototype.pluginInit=function(){var filter,_k,_len2,_ref4;_ref4=this.options.filters;for(_k=0,_len2=_ref4.length;_k<_len2;_k++){filter=_ref4[_k];this.addFilter(filter)}this.updateHighlights();this._setupListeners()._insertSpacer();if(this.options.addAnnotationFilter===true){return this.addFilter({label:Annotator._t("Annotation"),property:"text"})}};Filter.prototype.destroy=function(){var currentMargin,html;Filter.__super__.destroy.apply(this,arguments);html=$("html");currentMargin=parseInt(html.css("padding-top"),10)||0;html.css("padding-top",currentMargin-this.element.outerHeight());return this.element.remove()};Filter.prototype._insertSpacer=function(){var currentMargin,html;html=$("html");currentMargin=parseInt(html.css("padding-top"),10)||0;html.css("padding-top",currentMargin+this.element.outerHeight());return this};Filter.prototype._setupListeners=function(){var event,events,_k,_len2;events=["annotationsLoaded","annotationCreated","annotationUpdated","annotationDeleted"];for(_k=0,_len2=events.length;_k<_len2;_k++){event=events[_k];this.annotator.subscribe(event,this.updateHighlights)}return this};Filter.prototype.addFilter=function(options){var f,filter;filter=$.extend({label:"",property:"",isFiltered:this.options.isFiltered},options);if(!function(){var _k,_len2,_ref4,_results;_ref4=this.filters;_results=[];for(_k=0,_len2=_ref4.length;_k<_len2;_k++){f=_ref4[_k];if(f.property===filter.property){_results.push(f)}}return _results}.call(this).length){filter.id="annotator-filter-"+filter.property;filter.annotations=[];filter.element=this.filter.clone().appendTo(this.element);filter.element.find("label").html(filter.label).attr("for",filter.id);filter.element.find("input").attr({id:filter.id,placeholder:Annotator._t("Filter by ")+filter.label+"…"});filter.element.find("button").hide();filter.element.data("filter",filter);this.filters.push(filter)}return this};Filter.prototype.updateFilter=function(filter){var annotation,annotations,input,property,_k,_len2,_ref4;filter.annotations=[];this.updateHighlights();this.resetHighlights();input=$.trim(filter.element.find("input").val());if(input){annotations=this.highlights.map(function(){return $(this).data("annotation")});_ref4=$.makeArray(annotations);for(_k=0,_len2=_ref4.length;_k<_len2;_k++){annotation=_ref4[_k];property=annotation[filter.property];if(filter.isFiltered(input,property)){filter.annotations.push(annotation)}}return this.filterHighlights()}};Filter.prototype.updateHighlights=function(){this.highlights=this.annotator.element.find(".annotator-hl:visible");return this.filtered=this.highlights.not(this.classes.hl.hide)};Filter.prototype.filterHighlights=function(){var activeFilters,annotation,annotations,filtered,highlights,index,uniques,_k,_len2,_ref4;activeFilters=$.grep(this.filters,function(filter){return!!filter.annotations.length});filtered=((_ref4=activeFilters[0])!=null?_ref4.annotations:void 0)||[];if(activeFilters.length>1){annotations=[];$.each(activeFilters,function(){return $.merge(annotations,this.annotations)});uniques=[];filtered=[];$.each(annotations,function(){if($.inArray(this,uniques)===-1){return uniques.push(this)}else{return filtered.push(this)}})}highlights=this.highlights;for(index=_k=0,_len2=filtered.length;_k<_len2;index=++_k){annotation=filtered[index];highlights=highlights.not(annotation.highlights)}highlights.addClass(this.classes.hl.hide);this.filtered=this.highlights.not(this.classes.hl.hide);return this};Filter.prototype.resetHighlights=function(){this.highlights.removeClass(this.classes.hl.hide);this.filtered=this.highlights;return this};Filter.prototype._onFilterFocus=function(event){var input;input=$(event.target);input.parent().addClass(this.classes.active);return input.next("button").show()};Filter.prototype._onFilterBlur=function(event){var input;if(!event.target.value){input=$(event.target);input.parent().removeClass(this.classes.active);return input.next("button").hide()}};Filter.prototype._onFilterKeyup=function(event){var filter;filter=$(event.target).parent().data("filter");if(filter){return this.updateFilter(filter)}};Filter.prototype._findNextHighlight=function(previous){var active,annotation,current,index,next,offset,operator,resetOffset;if(!this.highlights.length){return this}offset=previous?0:-1;resetOffset=previous?-1:0;operator=previous?"lt":"gt";active=this.highlights.not("."+this.classes.hl.hide);current=active.filter("."+this.classes.hl.active);if(!current.length){current=active.eq(offset)}annotation=current.data("annotation");index=active.index(current[0]);next=active.filter(":"+operator+"("+index+")").not(annotation.highlights).eq(resetOffset);if(!next.length){next=active.eq(resetOffset)}return this._scrollToHighlight(next.data("annotation").highlights)};Filter.prototype._onNextClick=function(event){return this._findNextHighlight()};Filter.prototype._onPreviousClick=function(event){return this._findNextHighlight(true)};Filter.prototype._scrollToHighlight=function(highlight){highlight=$(highlight);this.highlights.removeClass(this.classes.hl.active);highlight.addClass(this.classes.hl.active);return $("html, body").animate({scrollTop:highlight.offset().top-(this.element.height()+20)},150)};Filter.prototype._onClearClick=function(event){return $(event.target).prev("input").val("").keyup().blur()};return Filter}(Annotator.Plugin);Annotator.Plugin.Markdown=function(_super){__extends(Markdown,_super);Markdown.prototype.events={annotationViewerTextField:"updateTextField"};function Markdown(element,options){this.updateTextField=__bind(this.updateTextField,this);if((typeof Showdown!=="undefined"&&Showdown!==null?Showdown.converter:void 0)!=null){Markdown.__super__.constructor.apply(this,arguments);this.converter=new Showdown.converter}else{console.error(Annotator._t("To use the Markdown plugin, you must include Showdown into the page first."))}}Markdown.prototype.updateTextField=function(field,annotation){var text;text=Annotator.Util.escape(annotation.text||"");return $(field).html(this.convert(text))};Markdown.prototype.convert=function(text){return this.converter.makeHtml(text)};return Markdown}(Annotator.Plugin);Annotator.Plugin.Tags=function(_super){__extends(Tags,_super);function Tags(){this.setAnnotationTags=__bind(this.setAnnotationTags,this);this.updateField=__bind(this.updateField,this);_ref4=Tags.__super__.constructor.apply(this,arguments);return _ref4}Tags.prototype.options={parseTags:function(string){var tags;string=$.trim(string);tags=[];if(string){tags=string.split(/\s+/)}return tags},stringifyTags:function(array){return array.join(" ")}};Tags.prototype.field=null;Tags.prototype.input=null;Tags.prototype.pluginInit=function(){if(!Annotator.supported()){return}this.field=this.annotator.editor.addField({label:Annotator._t("Add some tags here")+"…",load:this.updateField,submit:this.setAnnotationTags});this.annotator.viewer.addField({load:this.updateViewer});if(this.annotator.plugins.Filter){this.annotator.plugins.Filter.addFilter({label:Annotator._t("Tag"),property:"tags",isFiltered:Annotator.Plugin.Tags.filterCallback})}return this.input=$(this.field).find(":input")};Tags.prototype.parseTags=function(string){return this.options.parseTags(string)};Tags.prototype.stringifyTags=function(array){return this.options.stringifyTags(array)};Tags.prototype.updateField=function(field,annotation){var value;value="";if(annotation.tags){value=this.stringifyTags(annotation.tags)}return this.input.val(value)};Tags.prototype.setAnnotationTags=function(field,annotation){return annotation.tags=this.parseTags(this.input.val())};Tags.prototype.updateViewer=function(field,annotation){field=$(field);if(annotation.tags&&$.isArray(annotation.tags)&&annotation.tags.length){return field.addClass("annotator-tags").html(function(){var string;return string=$.map(annotation.tags,function(tag){return'<span class="annotator-tag">'+Annotator.Util.escape(tag)+"</span>"}).join(" ")})}else{return field.remove()}};return Tags}(Annotator.Plugin);Annotator.Plugin.Tags.filterCallback=function(input,tags){var keyword,keywords,matches,tag,_k,_l,_len2,_len3;if(tags==null){tags=[]}matches=0;keywords=[];if(input){keywords=input.split(/\s+/g);for(_k=0,_len2=keywords.length;_k<_len2;_k++){keyword=keywords[_k];if(tags.length){for(_l=0,_len3=tags.length;_l<_len3;_l++){tag=tags[_l];if(tag.indexOf(keyword)!==-1){matches+=1}}}}}return matches===keywords.length};Annotator.prototype.setupPlugins=function(config,options){var name,opts,pluginConfig,plugins,uri,win,_k,_len2,_results;if(config==null){config={}}if(options==null){options={}}win=Annotator.Util.getGlobal();plugins=["Unsupported","Auth","Tags","Filter","Store","AnnotateItPermissions"];if(win.Showdown){plugins.push("Markdown")}uri=win.location.href.split(/#|\?/).shift()||"";pluginConfig={Tags:{},Filter:{filters:[{label:Annotator._t("User"),property:"user"},{label:Annotator._t("Tags"),property:"tags"}]},Auth:{tokenUrl:config.tokenUrl||"http://annotateit.org/api/token"},Store:{prefix:config.storeUrl||"http://annotateit.org/api",annotationData:{uri:uri},loadFromSearch:{uri:uri}}};for(name in options){if(!__hasProp.call(options,name))continue;opts=options[name];if(__indexOf.call(plugins,name)<0){plugins.push(name)}}$.extend(true,pluginConfig,options);_results=[];for(_k=0,_len2=plugins.length;_k<_len2;_k++){name=plugins[_k];if(!(name in pluginConfig)||pluginConfig[name]){_results.push(this.addPlugin(name,pluginConfig[name]))}else{_results.push(void 0)}}return _results}}.call(this);


/*  Annotator Touch Plugin - v1.1.1
 *  Copyright 2012-2013, Compendio <www.compendio.ch>
 *  Released under the MIT license
 *  More Information: https://github.com/aron/annotator.touch.j
 */
((function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b=Object.prototype.hasOwnProperty,c=function(a,c){function e(){this.constructor=a}for(var d in c)b.call(c,d)&&(a[d]=c[d]);return e.prototype=c.prototype,a.prototype=new e,a.__super__=c.prototype,a};Annotator.Plugin.Touch=function(b){function f(b,c){this._onDocumentTap=a(this._onDocumentTap,this),this._onHighlightTap=a(this._onHighlightTap,this),this._onAdderTap=a(this._onAdderTap,this),this._onToggleTap=a(this._onToggleTap,this),this._onSelection=a(this._onSelection,this),this._watchForSelection=a(this._watchForSelection,this),f.__super__.constructor.apply(this,arguments),this.utils=Annotator.Plugin.Touch.utils,this.selection=null,this.document=d(document)}var d,e;return c(f,b),e=Annotator._t,d=Annotator.$,f.states={ON:"on",OFF:"off"},f.prototype.template='<div class="annotator-touch-widget annotator-touch-controls annotator-touch-hide">\n  <div class="annotator-touch-widget-inner">\n    <a class="annotator-button annotator-add annotator-focus">'+e("Annotate")+'</a>\n<a class="annotator-button annotator-touch-toggle" data-state="off">'+e("Start Annotating")+"</a>\n  </div>\n</div>",f.prototype.classes={hide:"annotator-touch-hide"},f.prototype.options={force:!1,useHighlighter:!1},f.prototype.pluginInit=function(){if(!Annotator.supported()||!this.options.force&&!f.isTouchDevice())return;return this._setupControls(),this.options.useHighlighter&&(this.showControls(),this.highlighter=new Highlighter({root:this.element[0],prefix:"annotator-selection",enable:!1,highlightStyles:!0})),this.document.delegate(".annotator-hl","tap",{preventDefault:!1},this._onHighlightTap),this.subscribe("selection",this._onSelection),this._unbindAnnotatorEvents(),this._setupAnnotatorEvents(),this._watchForSelection()},f.prototype.pluginDestroy=function(){this.controls&&this.controls.remove(),this.highlighter&&this.highlighter.disable();if(this.annotator)return this.annotator.editor.unsubscribe("hide",this._watchForSelection)},f.prototype.startAnnotating=function(){return this.highlighter&&this.highlighter.enable(),this.toggle.attr("data-state",f.states.ON),this.toggle.html("Stop Annotating"),this},f.prototype.stopAnnotating=function(){return this.highlighter&&this.highlighter.disable(),this.toggle.attr("data-state",f.states.OFF),this.toggle.html("Start Annotating"),this},f.prototype.isAnnotating=function(){var a;return a=this.options.useHighlighter,!a||this.toggle.attr("data-state")===f.states.ON},f.prototype.showEditor=function(a){return this.annotator.showEditor(a,{}),this.hideControls(),this},f.prototype.showControls=function(){return this.controls.removeClass(this.classes.hide),this},f.prototype.hideControls=function(){return this.options.useHighlighter||this.controls.addClass(this.classes.hide),this},f.prototype._setupControls=function(){this.annotator.adder.remove(),this.controls=d(this.template).appendTo("body"),this.adder=this.controls.find(".annotator-add"),this.adder.bind("tap",{onTapDown:function(a){return a.stopPropagation()}},this._onAdderTap),this.toggle=this.controls.find(".annotator-touch-toggle"),this.toggle.bind({tap:this._onToggleTap});if(!this.options.useHighlighter)return this.toggle.hide()},f.prototype._setupAnnotatorEvents=function(){var a=this;return this.editor=new f.Editor(this.annotator.editor),this.viewer=new f.Viewer(this.annotator.viewer),this.annotator.editor.on("show",function(){a._clearWatchForSelection(),a.annotator.onAdderMousedown();if(a.highlighter)return a.highlighter.disable()}),this.annotator.viewer.on("show",function(){if(a.highlighter)return a.highlighter.disable()}),this.annotator.editor.on("hide",function(){return a.utils.nextTick(function(){return a.highlighter&&a.highlighter.enable().deselect(),a._watchForSelection()})}),this.annotator.viewer.on("hide",function(){return a.utils.nextTick(function(){if(a.highlighter)return a.highlighter.enable().deselect()})})},f.prototype._unbindAnnotatorEvents=function(){return this.document.unbind({mouseup:this.annotator.checkForEndSelection,mousedown:this.annotator.checkForStartSelection}),this.element.unbind("click mousedown mouseover mouseout")},f.prototype._watchForSelection=function(){var a,b,c,d=this;if(this.timer)return;return a=f.isAndroid()?300:1e3/60,b=(new Date).getTime(),c=function(){var e;return e=(new Date).getTime()-b,e>a&&(b=(new Date).getTime(),d._checkSelection()),d.timer=d.utils.requestAnimationFrame.call(window,c)},c()},f.prototype._clearWatchForSelection=function(){return this.utils.cancelAnimationFrame.call(window,this.timer),this.timer=null},f.prototype._checkSelection=function(){var a,b,c;b=window.getSelection(),a=this.selectionString,c=d.trim(b+""),b.rangeCount&&c!==this.selectionString&&(this.range=b.getRangeAt(0),this.selectionString=c);if(b.rangeCount===0||this.range&&this.range.collapsed)this.range=null,this.selectionString="";if(this.selectionString!==a)return this.publish("selection",[this.range,this])},f.prototype._onSelection=function(){return this.isAnnotating()&&this.range&&this._isValidSelection(this.range)?(this.adder.removeAttr("disabled"),this.showControls()):(this.adder.attr("disabled",""),this.hideControls())},f.prototype._isValidSelection=function(a){var b,c,e,f;return b=function(a){return d(a).parents(".annotator-wrapper").length},c=a.startOffset<a.startContainer.length,f=c&&b(a.startContainer),e=a.endOffset>0&&b(a.endContainer),f||e},f.prototype._onToggleTap=function(a){return a.preventDefault(),this.isAnnotating()?this.stopAnnotating():this.startAnnotating()},f.prototype._onAdderTap=function(a){var b,c,d,e=this;a.preventDefault();if(this.range){b=new Annotator.Range.BrowserRange(this.range),d=b.normalize().limit(this.element[0]);if(d&&!this.annotator.isAnnotator(d.commonAncestor))return c=function(a){return e.annotator.unsubscribe("beforeAnnotationCreated",c),a.quote=d.toString(),a.ranges=[d]},this.annotator.subscribe("beforeAnnotationCreated",c),this.annotator.onAdderClick(a)}},f.prototype._onHighlightTap=function(a){var b,c;b=d(a.currentTarget).parents().filter(function(){return d(this).is("a, [data-annotator-clickable]")});if(b.length)return;if(d.contains(this.element[0],a.currentTarget))return c=a.originalEvent,c&&c.touches&&(a.pageX=c.touches[0].pageX,a.pageY=c.touches[0].pageY),this.annotator.viewer.isShown()&&this.annotator.viewer.hide(),this.annotator.onHighlightMouseover(a),this.document.unbind("tap",this._onDocumentTap),this.document.bind("tap",{preventDefault:!1},this._onDocumentTap)},f.prototype._onDocumentTap=function(a){this.annotator.isAnnotator(a.target)||this.annotator.viewer.hide();if(!this.annotator.viewer.isShown())return this.document.unbind("tap",this._onDocumentTap)},f.isTouchDevice=function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},f.isAndroid=function(){return/Android/i.test(window.navigator.userAgent)},f}(Annotator.Plugin),Annotator.Plugin.Touch.Editor=function(b){function g(b,c){var d=this;this.editor=b,this._onOverlayTap=a(this._onOverlayTap,this),this._onCancel=a(this._onCancel,this),this._onSubmit=a(this._onSubmit,this),this._onExpandTap=a(this._onExpandTap,this),this._triggerAndroidRedraw=a(this._triggerAndroidRedraw,this),g.__super__.constructor.call(this,this.editor.element[0],c),this.element.addClass("annotator-touch-editor"),this.element.wrapInner('<div class="annotator-touch-widget" />'),this.element.find("form").addClass("annotator-touch-widget-inner"),this.element.find(".annotator-controls a").addClass("annotator-button"),this.element.undelegate("textarea","keydown"),this.on("hide",function(){return d.element.find(":focus").blur()}),this._setupQuoteField(),this._setupAndroidRedrawHack()}var d,e,f;return c(g,b),f=Annotator._t,e=Annotator.$,d=Annotator.Plugin.Touch,g.prototype.events={click:"_onOverlayTap",".annotator-save tap":"_onSubmit",".annotator-cancel tap":"_onCancel",".annotator-quote-toggle tap":"_onExpandTap"},g.prototype.classes={expand:"annotator-touch-expand"},g.prototype.templates={quote:'<button class="annotator-quote-toggle">'+f("expand")+'</button>\n<span class="quote"></span>'},g.prototype.showQuote=function(){return this.quote.addClass(this.classes.expand),this.quote.find("button").text(f("Collapse")),this},g.prototype.hideQuote=function(){return this.quote.removeClass(this.classes.expand),this.quote.find("button").text(f("Expand")),this},g.prototype.isQuoteHidden=function(){return!this.quote.hasClass(this.classes.expand)},g.prototype._setupQuoteField=function(){var a=this;return this.quote=e(this.editor.addField({id:"quote",load:function(b,c){return a.hideQuote(),a.quote.find("span").html(Annotator.Util.escape(c.quote||"")),a.quote.find("button").toggle(a._isTruncated())}})),this.quote.empty().addClass("annotator-item-quote"),this.quote.append(this.templates.quote)},g.prototype._setupAndroidRedrawHack=function(){var a,b,c=this;if(d.isAndroid())return b=null,a=function(){return b=null,c._triggerAndroidRedraw()},e(window).bind("scroll",function(){if(!b)return b=setTimeout(a,100)})},g.prototype._triggerAndroidRedraw=function(){return this._input||(this._input=this.element.find(":input:first")),this._default||(this._default=parseFloat(this._input.css("padding-top"))),this._multiplier=(this._multiplier||1)*-1,this._input[0].style.paddingTop=this._default+this._multiplier+"px",this._input[0].style.paddingTop=this._default-this._multiplier+"px"},g.prototype._isTruncated=function(){var a,b,c;return b=this.isQuoteHidden(),b||this.hideQuote(),c=this.quote.height(),this.showQuote(),a=this.quote.height(),b?this.hideQuote():this.showQuote(),a>c},g.prototype._onExpandTap=function(a){return a.preventDefault(),a.stopPropagation(),this.isQuoteHidden()?this.showQuote():this.hideQuote()},g.prototype._onSubmit=function(a){return a.preventDefault(),this.editor.submit()},g.prototype._onCancel=function(a){return a.preventDefault(),this.editor.hide()},g.prototype._onOverlayTap=function(a){if(a.target===this.element[0])return this.editor.hide()},g}(Annotator.Delegator),jQuery.event.special.tap={add:function(a){var b,c,d,e;return c=a.data=a.data||{},b=this,e=function(a){return c.preventDefault!==!1&&a.preventDefault(),c.onTapDown&&c.onTapDown.apply(this,arguments),c.event=a,c.touched=setTimeout(function(){return c.touched=null},c.timeout||300),jQuery(document).bind({touchend:d,mouseup:d})},d=function(e){var f;if(c.touched!=null){clearTimeout(c.touched);if(e.target===b||jQuery.contains(b,e.target))f=a.origHandler||a.handler,f.call(this,c.event);c.touched=null}return c.onTapUp&&c.onTapUp.apply(this,arguments),jQuery(document).unbind({touchstart:d,mousedown:d})},c.tapHandlers={touchstart:e,mousedown:e},a.selector?jQuery(b).delegate(a.selector,c.tapHandlers):jQuery(b).bind(c.tapHandlers)},remove:function(a){return jQuery(this).unbind(a.data.tapHandlers)}},Annotator.Delegator.natives.push("touchstart","touchmove","touchend","tap"),Annotator.Plugin.Touch.utils=function(){var a,b,c,d,e,f,g;e=["ms","moz","webkit","o"],d=window.requestAnimationFrame,a=window.cancelAnimationFrame;for(f=0,g=e.length;f<g;f++){c=e[f];if(!d)d=window[""+c+"RequestAnimationFrame"],a=window[""+c+"CancelAnimationFrame"]||window[""+c+"CancelRequestAnimationFrame"];else continue}return d||(b=0,d=function(a,c){var d,e;return d=(new Date).getTime(),e=Math.max(0,16-(d-b)),b=d+e,window.setTimeout(function(){return a(d+e)},e)}),a||(a=function(a){return clearTimeout(a)}),{requestAnimationFrame:d,cancelAnimationFrame:a,nextTick:function(a){return setTimeout(a,0)}}}(),Annotator.Plugin.Touch.Viewer=function(b){function e(b,c){this.viewer=b,this._onLoad=a(this._onLoad,this),e.__super__.constructor.call(this,this.viewer.element[0],c),this.element.unbind("click"),this.element.addClass("annotator-touch-widget annotator-touch-viewer"),this.on("load",this._onLoad)}var d;return c(e,b),d=Annotator.$,e.prototype.events={".annotator-item tap":"_onTap",".annotator-edit tap":"_onEdit",".annotator-delete tap":"_onDelete"},e.prototype.hideAllControls=function(){return this.element.find(".annotator-item").removeClass(this.viewer.classes.showControls),this},e.prototype._onLoad=function(){var a;return a=this.element.find(".annotator-controls"),a.toggleClass("annotator-controls annotator-touch-controls"),a.find("button").addClass("annotator-button")},e.prototype._onTap=function(a){var b,c;c=d(a.currentTarget),b=c.hasClass(this.viewer.classes.showControls),this.hideAllControls();if(!b)return c.addClass(this.viewer.classes.showControls)},e.prototype._onEdit=function(a){return a.preventDefault(),this.viewer.onEditClick(a)},e.prototype._onDelete=function(a){return a.preventDefault(),this.viewer.onDeleteClick(a)},e}(Annotator.Delegator)})).call(this);



/*  Offline Annotator Plugin - v1.0.0
 *  Copyright 2012, Compendio <www.compendio.ch>
 *  Released under the MIT license
 *  More Information: http://github.com/aron/annotator.offline.js
 */
((function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}},d=Object.prototype.hasOwnProperty,e=function(a,b){function e(){this.constructor=a}for(var c in b)d.call(b,c)&&(a[c]=b[c]);return e.prototype=b.prototype,a.prototype=new e,a.__super__=b.prototype,a};Annotator.Plugin.Offline=a=function(a){function g(){this._onOffline=c(this._onOffline,this),this._onOnline=c(this._onOnline,this);var a,e,f;g.__super__.constructor.apply(this,arguments),this.store=new g.Store,this.cache={},f={online:"online",offline:"offline",beforeAnnotationLoaded:"setAnnotationData",beforeAnnotationCreated:"setAnnotationData"};for(a in f){if(!d.call(f,a))continue;e=f[a],typeof this.options[e]=="function"&&this.on(a,b.proxy(this.options,e))}}var b,f;return e(g,a),f=Annotator._t,b=Annotator.$,g.ANNOTATION_PREFIX="annotation.",g.uuid=function(){return(""+Math.random()+(new Date).getTime()).slice(2)},g.prototype.events={annotationCreated:"_onAnnotationCreated",annotationUpdated:"_onAnnotationUpdated",annotationDeleted:"_onAnnotationDeleted"},g.prototype.options={getUniqueKey:function(a){return a.id||(a.id=g.uuid()),a.id},shouldLoadAnnotation:function(a){return!0}},g.prototype.pluginInit=function(){if(!Annotator.supported())return;return this.loadAnnotationsFromStore(),this.isOnline()?this.online():this.offline(),b(window).bind({online:this._onOnline,offline:this._onOffline})},g.prototype.annotations=function(){return this.cache},g.prototype.online=function(){return this.publish("online",[this]),this},g.prototype.offline=function(){return this.publish("offline",[this]),this},g.prototype.isOnline=function(){return window.navigator.onLine},g.prototype.loadAnnotationsFromStore=function(){var a,b,c,d,e;c=[],b=this.store.all(g.ANNOTATION_PREFIX);for(d=0,e=b.length;d<e;d++){a=b[d];if(!this.options.shouldLoadAnnotation(a))continue;this.publish("beforeAnnotationLoaded",[a,this]),this.publish("annotationLoaded",[a,this]),this.cache[this.keyForAnnotation(a)]=a,c.push(a)}return c.length&&this.annotator.loadAnnotations(c),this},g.prototype.addAnnotation=function(a,b){var c;return b==null&&(b={}),c=this.cache[this.options.getUniqueKey(a)],!c&&this.options.shouldLoadAnnotation(a)?this.annotator.setupAnnotation(a,b.silent):this.updateStoredAnnotation(a),this},g.prototype.removeAnnotation=function(a){return this.options.shouldLoadAnnotation(a)?this.annotator.deleteAnnotation(a):this.removeStoredAnnotation(a),this},g.prototype.updateStoredAnnotation=function(a){var c,d,e,f;return c=this.keyForAnnotation(a),d=this.keyForStore(a),e=this.cache[c],e?b.extend(e,a):e=this.cache[c]=a,f=b.extend({},e),delete f.highlights,this.store.set(d,f),this},g.prototype.removeStoredAnnotation=function(a){var b,c;return b=this.keyForAnnotation(a),c=this.keyForStore(a),this.store.remove(c),delete this.cache[b],this},g.prototype.keyForAnnotation=function(a){return this.options.getUniqueKey.call(this,a,this)},g.prototype.keyForStore=function(a){return g.ANNOTATION_PREFIX+this.keyForAnnotation(a)},g.prototype._onOnline=function(a){return this.online()},g.prototype._onOffline=function(a){return this.offline()},g.prototype._onAnnotationCreated=function(a){return this.updateStoredAnnotation(a)},g.prototype._onAnnotationUpdated=function(a){return this.updateStoredAnnotation(a)},g.prototype._onAnnotationDeleted=function(a){return this.removeStoredAnnotation(a)},g}(Annotator.Plugin),Annotator.Plugin.Offline.Store=b=function(a){function b(){b.__super__.constructor.apply(this,arguments)}return e(b,a),b.KEY_PREFIX="annotator.offline/",b.CACHE_DELIMITER="--cache--",b.localStorage=window.localStorage,b.isSupported=function(){try{return"localStorage"in window&&window.localStorage!==null}catch(a){return!1}},b.now=function(){return(new Date).getTime()},b.prototype.all=function(a){var c,d,e,f;a==null&&(a=""),f=[],d=this.prefixed(a);for(c in localStorage){if(c.indexOf(d)!==0)continue;e=this.get(c.slice(b.KEY_PREFIX.length)),f.push(e)}return f},b.prototype.get=function(a){var c;return c=b.localStorage.getItem(this.prefixed(a)),c&&(c=this.checkCache(c),c||this.remove(a)),JSON.parse(c)},b.prototype.set=function(a,c,d){c=JSON.stringify(c),d&&(c=b.now()+d+b.CACHE_DELIMITER+c);try{b.localStorage.setItem(this.prefixed(a),c)}catch(e){this.publish("error",[e,this])}return this},b.prototype.remove=function(a){return b.localStorage.removeItem(this.prefixed(a)),this},b.prototype.clear=function(){var a,c;c=b.localStorage;for(a in c)a.indexOf(b.KEY_PREFIX)===0&&c.removeItem(a);return this},b.prototype.prefixed=function(a){return b.KEY_PREFIX+a},b.prototype.checkCache=function(a){var c;return a.indexOf(b.CACHE_DELIMITER)>-1&&(c=a.split(b.CACHE_DELIMITER),a=b.now()>c.shift()?null:c.join(b.CACHE_DELIMITER)),a},b}(Annotator.Delegator)})).call(this);



/* Share Annotator Plugin */
var _ref,__bind=function(a,b){return function(){return a.apply(b,arguments)}},__hasProp={}.hasOwnProperty,__extends=function(d,b){for(var a in b){if(__hasProp.call(b,a)){d[a]=b[a]}}function c(){this.constructor=d}c.prototype=b.prototype;d.prototype=new c();d.__super__=b.prototype;return d};Annotator.Plugin.Share=(function(b){__extends(a,b);a.prototype.options={shareIn:["facebook","twitter","email","google"],getUrl:{facebook:function(e,d,c){return"https://www.facebook.com/sharer/sharer.php?s=100&p[url]="+d+"&p[title]="+encodeURIComponent("Open Video Annotation")+"&p[summary]="+c},twitter:function(e,d,c){return"https://twitter.com/intent/tweet?original_referer="+d+"&source=tweetbutton&url="+d+"&via=OpenVideoAnnotation&text="+encodeURIComponent("I want to share the next Open Video Annotation: ")},google:function(e,d,c){return"https://plus.google.com/share?url="+d},email:function(e,d,c){return"mailto:?subject="+e+"&body="+d}},baseUrl:"",};function a(d,c){if(typeof c!="undefined"){this.options.shareIn=typeof c.shareIn!="undefined"?c.shareIn:this.options.shareIn}this.buildHTMLShareButton=__bind(this.buildHTMLShareButton,this);this.runningAPI=__bind(this.runningAPI,this);this.updateViewer=__bind(this.updateViewer,this);_ref=a.__super__.constructor.apply(this,arguments);return _ref}a.prototype.field=null;a.prototype.input=null;a.prototype.pluginInit=function(){console.log("Share-pluginInit");if(!Annotator.supported()){return}this.field=this.annotator.editor.addField({type:"input",});var d=Annotator.$('<li class="annotator-item">'+this.buildHTMLShareButton("Share without saving:")+"</li>");Annotator.$(this.field).replaceWith(d);this.field=d[0];this.buttonsActions(this.field,2,this.options.baseUrl);var e=this.initAPI();this.runAPI(e);var c=this.annotator.viewer.addField({load:this.updateViewer,});return this.input=$(this.field).find(":input")};a.prototype.buildHTMLShareButton=function(f,g){var f=f||"",g=typeof g!="undefined"?'annotationId="'+g+'"':"",d=f!=""?'<div class="share-text-annotator">'+f+"</div>":"",e='<div class="share-button-annotator share-button" '+g+"></div>",c='<div class="share-popup-overlay-bg" style="z-index:30000000000"><div class="share-popup"><div class="share-popup-items"></div><div class="close-btn">Close</div></div></div>';return'<div class="share-container-annotator">'+d+e+c+"</div>"};a.prototype.buildHTMLPopup=function(f){var e="";if(typeof this.options.shareIn!="undefined"){this.options.shareIn.forEach(function(h){e+='<div class="share-'+h+'-annotator share-button">'+h.charAt(0).toUpperCase()+h.slice(1)+"</div>"})}this.uri=typeof this.uri!="undefined"?this.uri:"";var f='<div class="share-popup-title">'+f.replace(":","")+"</div>",g='<div class="share-popup-copy">Copy and Share:</div>',d='<input type="text" class="share-popup-uri" onclick="javascript:this.select();" readonly="true" value="'+this.uri+'">',c=f+e+g+d;return c};a.prototype.buttonsActions=function(e,f,c){var d=this;$(e).find(".close-btn").click(function(){$(".share-popup-overlay-bg").hide()});$(e).find(".share-popup-overlay-bg").click(function(){$(".share-popup-overlay-bg").hide()});$(e).find(".share-popup").click(function(){return false});$(e).find(".share-button-annotator.share-button").click(function(event){event.preventDefault();var h=this,g=$(this).attr("annotationId"),i=f==1?"Share":"Share without saving";d.uri=d.createAPIURL(f,g,c);$(this).parent().find(".share-popup-overlay-bg").show();$(this).parent().find(".share-popup-items").html(d.buildHTMLPopup(i));if(typeof d.options.shareIn!="undefined"){d.options.shareIn.forEach(function(j){$(h).parent().find(".share-"+j+"-annotator.share-button").click(function(){var l=d.createAPIURL(f,g,l),n="Sharing a annotation with Open Video Annotation";link=encodeURIComponent(l),noteText=d.getSource("ovaText"),finalUrl="";if(f==1){var m=d.annotator.viewer,k=$(m.element).find("div:first").html();noteText=encodeURIComponent(k)}finalUrl=typeof d.options.getUrl[j]!="undefined"?d.options.getUrl[j](n,link,noteText):"";if(typeof d.options.getUrl[j]!="undefined"){window.open(finalUrl)}})})}})};a.prototype.createAPIURL=function(f,k,h){var q=this.annotator,g=q.editor,f=f||1,h=h||window.location.href;h+=(h.indexOf("?")>=0)?"&":"?";if(f===1){var k=typeof k!="undefined"?k:"";h+="ovaId="+k}else{if(f===2){var u=this.getSource("ovaText")||" ";h+="ovaText="+u;if(typeof g.VideoJS!="undefined"&&g.VideoJS!==-1){var d=this.getSource("ovaStart")||" ",j=this.getSource("ovaEnd")||" ",t=this.getSource("ovaContainer")||" ",l=this.getSource("ovaSrc")||" ";h+="&ovaStart="+d+"&ovaEnd="+j+"&ovaContainer="+t+"&ovaSrc="+l}else{if(typeof g.OpenSeaDragon!="undefined"&&g.OpenSeaDragon!==-1){var p=this.getSource("ovaLeft")||" ",s=this.getSource("ovaTop")||" ",n=this.getSource("ovaWidth")||" ",c=this.getSource("ovaHeight")||" ",v=this.getSource("ovaLeftZoom")||" ",r=this.getSource("ovaTopZoom")||" ",i=this.getSource("ovaWidthZoom")||" ",m=this.getSource("ovaHeightZoom")||" ",t=this.getSource("ovaContainer")||" ",l=this.getSource("ovaSrc")||" ";h+="&ovaLeft="+p+"&ovaTop="+s+"&ovaWidth="+n+"&ovaHeight="+c+"&ovaLeftZoom="+v+"&ovaTopZoom="+r+"&ovaWidthZoom="+i+"&ovaHeightZoom="+m+"&ovaContainer="+t+"&ovaSrc="+l}else{var d=this.getSource("ovaStart")||" ",j=this.getSource("ovaEnd")||" ",e=this.getSource("ovastartOffset")||" ",o=this.getSource("ovaendOffset")||" ";h+="&ovaStart="+d+"&ovaEnd="+j+"&ovastartOffset="+e+"&ovaendOffset="+o}}}}return h};a.prototype.getSource=function(h){var h=h||"";if(h=="ovaId"){h=this.annotation.id}else{var i=this.annotator,g=i.editor,e=$(g.element).find("textarea")[0];if(h=="ovaText"){h=e.value}if(typeof g.VideoJS!="undefined"&&g.VideoJS!==-1){if(h=="ovaContainer"){h=g.VideoJS}else{if(h=="ovaSrc"){h=i.mplayer[g.VideoJS].tech.options_.source.src}else{if(h=="ovaStart"){h=i.mplayer[g.VideoJS].rangeslider.getValues().start}else{if(h=="ovaEnd"){h=i.mplayer[g.VideoJS].rangeslider.getValues().end}}}}}else{if(typeof g.OpenSeaDragon!="undefined"&&g.OpenSeaDragon!==-1){var c=g.annotation;if(h=="ovaLeft"){h=i.osda.rectPosition.left}else{if(h=="ovaTop"){h=i.osda.rectPosition.top}else{if(h=="ovaWidth"){h=i.osda.rectPosition.width}else{if(h=="ovaHeight"){h=i.osda.rectPosition.height}else{if(h=="ovaLeftZoom"){h=i.osda.viewer.drawer.viewport.getBounds().x}else{if(h=="ovaTopZoom"){h=i.osda.viewer.drawer.viewport.getBounds().y}else{if(h=="ovaWidthZoom"){h=i.osda.viewer.drawer.viewport.getBounds().width}else{if(h=="ovaHeightZoom"){h=i.osda.viewer.drawer.viewport.getBounds().height}else{if(h=="ovaContainer"){h=i.osda.viewer.id}else{if(h=="ovaSrc"){var h=i.osda.viewer.source,d=typeof h.tilesUrl!="undefined"?h.tilesUrl:"",f=typeof h.getTileUrl!="undefined"?h.getTileUrl:"";h=d!=""?d:(""+f).replace(/\s+/g," ")}}}}}}}}}}}else{var c=g.annotation;if(h=="ovastartOffset"){h=c.ranges[0].startOffset}else{if(h=="ovaendOffset"){h=c.ranges[0].endOffset}else{if(h=="ovaStart"){h=c.ranges[0].start}else{if(h=="ovaEnd"){h=c.ranges[0].end}}}}}}}return encodeURIComponent(h)};a.prototype.initAPI=function(){console.log("initAPI");var o={},i=this.getParameterByName("ovaId"),e=this.getParameterByName("ovaStart"),d=this.getParameterByName("ovaEnd"),m=this.getParameterByName("ovaContainer"),h=this.getParameterByName("ovaSrc"),n=this.getParameterByName("ovaText"),u=this.getParameterByName("ovaUser"),j=this.getParameterByName("ovaLeft"),q=this.getParameterByName("ovaTop"),r=this.getParameterByName("ovaWidth"),l=this.getParameterByName("ovaHeight"),f=this.getParameterByName("ovaLeftZoom"),k=this.getParameterByName("ovaTopZoom"),s=this.getParameterByName("ovaWidthZoom"),t=this.getParameterByName("ovaHeightZoom"),p=this.getParameterByName("ovastartOffset"),g=this.getParameterByName("ovaendOffset");var c=top.location.href;if(i!=""){c=this.removeVariableFromURL(c,"ovaId")}if(e!=""){c=this.removeVariableFromURL(c,"ovaStart")}if(d!=""){c=this.removeVariableFromURL(c,"ovaEnd")}if(m!=""){c=this.removeVariableFromURL(c,"ovaContainer")}if(h!=""){c=this.removeVariableFromURL(c,"ovaSrc")}if(n!=""){c=this.removeVariableFromURL(c,"ovaText")}if(u!=""){c=this.removeVariableFromURL(c,"ovaUser")}if(j!=""){c=this.removeVariableFromURL(c,"ovaLeft")}if(q!=""){c=this.removeVariableFromURL(c,"ovaTop")}if(r!=""){c=this.removeVariableFromURL(c,"ovaWidth")}if(l!=""){c=this.removeVariableFromURL(c,"ovaHeight")}if(f!=""){c=this.removeVariableFromURL(c,"ovaLeftZoom")}if(k!=""){c=this.removeVariableFromURL(c,"ovaTopZoom")}if(s!=""){c=this.removeVariableFromURL(c,"ovaWidthZoom")}if(t!=""){c=this.removeVariableFromURL(c,"ovaHeightZoom")}if(p!=""){c=this.removeVariableFromURL(c,"ovastartOffset")}if(g!=""){c=this.removeVariableFromURL(c,"ovaendOffset")}window.history.pushState("object or string","Title",c);if(i!=""){$.extend(o,{method:1,ovaId:i})}if(e!=""&&d!=""&&m!=""&&h!=""){$.extend(o,{method:2,start:e,end:d,container:m,src:h,text:n,user:u})}else{if(j!=""&&q!=""&&r!=""&&l!=""&&f!=""&&k!=""&&s!=""&&t!=""){$.extend(o,{method:2,Left:j,Top:q,Width:r,Height:l,leftZoom:f,topZoom:k,widthZoom:s,heightZoom:t,container:m,src:h,text:n,user:u})}else{if(e!=""&&d!=""&&p!=""&&g!=""){$.extend(o,{method:2,start:e,end:d,startOffset:p,endOffset:g,text:n,user:u})}}}return o};a.prototype.runningAPI=function(c,x){var l=$(".annotator-wrapper").parent()[0],h,e,v=this;$.data(l,"annotator",v.annotator);annotator=window.annotator=$.data(l,"annotator");h=typeof annotator.mplayer!="undefined"?annotator.mplayer:[];e=typeof annotator.osda!="undefined"?annotator.osda:[];if(typeof x!="undefined"&&typeof x.method!="undefined"&&(x.method=="1"||x.method=="2")){if(x.method=="1"){var o=annotator.plugins.Store.annotations,q=decodeURIComponent(x.ovaId);for(var D in o){var z=o[D],w;if(typeof z.id!="undefined"&&z.id==q){if(v._isVideo(z)){if(typeof h[z.target.container]!="undefined"){var A=h[z.target.container];if(A.id_==z.target.container){var J=z;videojs(A.id_).ready(function(){if(A.techName!="Youtube"){A.preload("auto")}A.autoPlayAPI=J;A.play()})}}}else{if(z.media=="image"){if($("div#"+z.target.container).length){var f=typeof annotator.osda!="undefined"&&typeof annotator.osda.viewer!="undefined";function H(){f=typeof annotator.osda!="undefined"&&typeof annotator.osda.viewer!="undefined";if(typeof w=="undefined"){w=D}if(!f){setTimeout(H,200)}else{z=o[w];$(z.highlights).parent().find(".annotator-hl").removeClass("api");$(z.highlights).addClass("api");if(typeof annotator!="undefined"&&typeof annotator.osda!="undefined"){var K=annotator.osda.viewer.drawer.viewport.getBounds(),L=typeof z.bounds!="undefined"?z.bounds:{};if(typeof L.x!="undefined"){K.x=L.x}if(typeof L.y!="undefined"){K.y=L.y}if(typeof L.width!="undefined"){K.width=L.width}if(typeof L.height!="undefined"){K.height=L.height}annotator.osda.viewer.drawer.viewport.fitBounds(K)}$("html,body").animate({scrollTop:$(annotator.osda.viewer.element).offset().top},"slow")}}H()}}else{var y=typeof z.ranges!="undefined"&&typeof z.ranges[0]!="undefined",B=y?z.ranges[0].startOffset:"",k=y?z.ranges[0].endOffset:"";if(typeof B!="undefined"&&typeof k!="undefined"){$(z.highlights).addClass("api");$("html,body").animate({scrollTop:$(z.highlights[0]).offset().top},"slow")}}}}}}else{if(x.method=="2"){if(typeof h!="undefined"){var t=decodeURIComponent(x.container),A=h[t],F=(typeof A!="undefined"&&t==A.id_),u=(!isNaN(parseFloat(x.start))&&isFinite(x.start)&&!isNaN(parseFloat(x.end))&&isFinite(x.end)),d=false;if(F){var n=decodeURIComponent(x.src),g=n.substring(0,n.lastIndexOf(".")),m=A.tech.options_.source.src==""?A.tag.currentSrc:A.tech.options_.source.src;m=m.substring(0,m.lastIndexOf("."));d=(g==m)}if(F&&u&&d){var j={rangeTime:{start:x.start,end:x.end},created:new Date().toISOString(),updated:new Date().toISOString(),target:{container:t,src:n},media:"video",text:decodeURIComponent(x.text),user:decodeURIComponent(x.user)};videojs(A.id_).ready(function(){if(A.techName!="Youtube"){A.preload("auto")}A.autoPlayAPI=j;A.play()})}}var B=x.startOffset,k=x.endOffset;if(!F&&typeof B!="undefined"&&typeof k!="undefined"){var j={ranges:[{start:decodeURIComponent(x.start),end:decodeURIComponent(x.end),startOffset:decodeURIComponent(x.startOffset),endOffset:decodeURIComponent(x.endOffset),}],created:new Date().toISOString(),updated:new Date().toISOString(),media:"text",text:decodeURIComponent(x.text),user:decodeURIComponent(x.user)};annotator.setupAnnotation(j);$(j.highlights).addClass("api");$("html,body").animate({scrollTop:$(j.highlights[0]).offset().top},"slow")}var p=x.Left,C=x.Top,E=x.Width,s=x.Height,i=x.leftZoom,r=x.topZoom,G=x.widthZoom,I=x.heightZoom;if(!F&&typeof p!="undefined"&&typeof C!="undefined"&&typeof E!="undefined"&&typeof s!="undefined"&&typeof i!="undefined"&&typeof r!="undefined"&&typeof G!="undefined"&&typeof I!="undefined"){var z={rangePosition:{width:parseFloat(decodeURIComponent(x.Width)),top:parseFloat(decodeURIComponent(x.Top)),left:parseFloat(decodeURIComponent(x.Left)),height:parseFloat(decodeURIComponent(x.Height)),},bounds:{width:parseFloat(decodeURIComponent(x.widthZoom)),x:parseFloat(decodeURIComponent(x.leftZoom)),y:parseFloat(decodeURIComponent(x.topZoom)),height:parseFloat(decodeURIComponent(x.heightZoom)),},target:{container:x.container,src:x.src},created:new Date().toISOString(),updated:new Date().toISOString(),media:"image",text:decodeURIComponent(x.text),user:decodeURIComponent(x.user)};var f=typeof annotator.osda!="undefined"&&typeof annotator.osda.viewer!="undefined";function H(){f=typeof annotator.osda!="undefined"&&typeof annotator.osda.viewer!="undefined";if(!f){setTimeout(H,200)}else{annotator.plugins.Store.annotations.push(z);annotator.osda.viewer.annotationInstance.drawRect(z);$(z.highlights).addClass("api");var K=annotator.osda.viewer.drawer.viewport.getBounds(),L=typeof z.bounds!="undefined"?z.bounds:{};if(typeof L.x!="undefined"){K.x=L.x}if(typeof L.y!="undefined"){K.y=L.y}if(typeof L.width!="undefined"){K.width=L.width}if(typeof L.height!="undefined"){K.height=L.height}annotator.osda.viewer.drawer.viewport.fitBounds(K);$("html,body").animate({scrollTop:$(annotator.osda.viewer.element).offset().top},"slow")}}H()}}}}annotator.isShareLoaded=true;annotator.publish("shareloaded")};a.prototype.runAPI=function(d){var c=this;var e=function(f){c.runningAPI(f,d);c.annotator.unsubscribe("annotationsLoaded",e)};this.annotator.subscribe("annotationsLoaded",e)};a.prototype._isVideo=function(c){var c=c||{};rt=c.rangeTime,isVideo=(typeof c.media!="undefined"&&c.media=="video"),hasContainer=(typeof c.target!="undefined"&&typeof c.target.container!="undefined"),isNumber=(typeof rt!="undefined"&&!isNaN(parseFloat(rt.start))&&isFinite(rt.start)&&!isNaN(parseFloat(rt.end))&&isFinite(rt.end));return(isVideo&&hasContainer&&isNumber)};a.prototype._isImage=function(g){var j=$(".annotator-wrapper").parent()[0],i=window.annotator=$.data(j,"annotator"),f=g.rangePosition,d=(typeof i.osda!="undefined"),e=(typeof g.target!="undefined"&&typeof g.target.container!="undefined"),h=(typeof g.media!="undefined"&&g.media=="image"),c=(typeof f!="undefined");return(d&&e&&h&&c)};a.prototype.getParameterByName=function(c){c=c.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+c+"=([^&#]*)"),d=e.exec("?"+window.location.href.split("?")[1]);return d==null?"":decodeURIComponent(d[1].replace(/\+/g," "))};a.prototype.removeVariableFromURL=function(f,d){var c=String(f);var e=new RegExp("\\?"+d+"=[^&]*&?","gi");c=c.replace(e,"?");e=new RegExp("\\&"+d+"=[^&]*&?","gi");c=c.replace(e,"&");c=c.replace(/(\?|&)$/,"");e=null;return c};a.prototype.updateViewer=function(f,c){this.annotation=c;var d=this,f=$(f),e=f.addClass("share-viewer-annotator").html(function(){var g;return d.buildHTMLShareButton("Share:",d.getSource("ovaId"))});this.buttonsActions(f[0],1,this.options.baseUrl);return e};return a})(Annotator.Plugin);




/*=================================Including Annotator.js library=================================*/

/*jshint immed:false*/ /*globals Range*/
(function (module, window, document) {
  /* Helper function to provide support for Function.prototype.bind() in
   * unsupported browsers. NOTE: This method is not equivalent to the
   * specification for bind. An only supports the context argument for
   * simplicity.
   *
   * fn      - The function to bind.
   * context - The value to be used as `this` within the function.
   *
   * Returns a new function bound to the context.
   */
  function bind(fn, context) {
    return fn.bind ? fn.bind(context) : function () {
      return fn.apply(context, arguments);
    };
  }

  /* Checks to see if the element has the class.
   *
   * el        - A DOM element.
   * className - The class to look for.
   *
   * Returns true if the element has the class.
   */
  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return (new RegExp('\\b' + className + '\\b', 'i')).test(el.className);
    }
  }

  /* Adds a class to the element provided.
   *
   * el        - A DOM element.
   * className - The class to add.
   *
   * Returns nothing.
   */
  function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else if (!hasClass(el, className)) {
      el.className += ' ' + className;
    }
  }

  /* Removes a class to the element provided.
   *
   * el        - A DOM element.
   * className - The class to remove.
   *
   * Returns nothing.
   */
  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else if (hasClass(el, className)) {
      var regexp = new RegExp('\\b' + className + '\\b', 'i');
      el.className = el.className.split(regexp).join('');
    }
  }

  /* Public: Object for working with text selections using the native Range
   * and Selection objects. This can be used in any browser that supports
   * these API's (and document.caretRangeFromPoint) however it was developed to
   * allow selections to be made in the Android WebKit browser which doesn't
   * natively allow access to selected text via the window.getSelected() method.
   *
   * See: http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#ranges
   * See: http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections
   * See: http://code.google.com/p/android/issues/detail?id=14540
   *
   * options - An object literal of initialisation options.
   *           root: The root node element to watch for clicks.
   *           throttle: Event throttle duration in milliseconds.
   *           enable: If false does not enable the plugin on init.
   *           prefix: Prefix string for CSS classes.
   *           highlightStyles: true if plugin should inject custom highlight
   *           color into the page, can also be a string of css proeprties
   *           (default: false).
   *
   * Examples
   *
   *   // Watch for click events on the root node.
   *   var highlighter = new Highlighter({
   *     root: document.getElementById('content')
   *   });
   *
   *   // Selected text can be accessed with window.getSelection() as normal
   *   // or using the #get() method.
   *   saveButton.addEventListener('click', function () {
   *     var selection = highlighter.get();
   *     if (selection.toString().trim()) {
   *       // Do something.
   *     }
   *   }, false);
   *
   *   // Disable watching for clicks at any time.
   *   highlighter.disable();
   *
   *   // Manually invoke the highlighter.
   *   contentNode.addEventListener('click', function (event) {
   *     var position = highlighter.getFirstPosition(event);
   *     if (position) {
   *       // Higlights the word at the position specified.
   *       highlighter.selectWord(position);
   *     }
   *   }, false);
   *
   * Returns a new instance of Highlighter.
   */
  function Highlighter(options) {
    // Bind all event handlers to the current scope.
    for (var method in this) {
      if (method.indexOf('_on') === 0 && typeof this[method] === 'function') {
        this[method] = bind(this[method], this);
      }
    }

    this.options = options = options || {};
    this.root = options.root || document.documentElement;
    this.prefix = (options.prefix || 'highlighter') + '-';
    this.throttle = options.throttle || 1000 / 60;
    this.selected = null;
    this.handles = {
      start: this.createHandle('start'),
      end:   this.createHandle('end')
    };

    if (options.enable !== false) {
      this.enable();
    }
  }

  Highlighter.prototype = {
    /* Redefine the constructor property. */
    constructor: Highlighter,

    /* Public: Alias for window.getSelection().
     *
     * Examples
     *
     *   var selection = highlighter.get();
     *   if (selection.toString()) {
     *     // Do something.
     *   }
     *
     * Returns a Selection instance.
     */
    get: function () {
      return window.getSelection();
    },

    /* Public: Starts the object watching for clicks on the #root element and
     * appends the handle elements to the DOM.
     *
     * Examples
     *
     *   highlighter.enable();
     *
     * Returns itself.
     */
    enable: function () {
      if (!this.enabled) {
        this.bind(this.root, {click: '_onClick'});
        this.bind(document, {
          tapstart:  '_onDocumentDown',
          mousedown: '_onDocumentDown'
        });

        if (this.options.highlightStyles) {
          this.style = this.createStyle();
          document.getElementsByTagName('head')[0].appendChild(this.style);
        }

        document.body.appendChild(this.handles.start);
        document.body.appendChild(this.handles.end);
        this.hideHandles();
        this.enabled = true;
      }
      return this;
    },

    /* Public: Ends the object watching for clicks on the #root element and
     * removes the handle elements from the DOM.
     *
     * Examples
     *
     *   highlighter.disable();
     *
     * Returns itself.
     */
    disable: function () {
      if (this.enabled) {
        this.unbind(this.root, {click: '_onClick'});
        this.unbind(document, {
          tapstart:  '_onDocumentDown',
          mousedown: '_onDocumentDown'
        });

        if (this.style) {
          this.style.parentNode.removeChild(this.style);
        }

        document.body.removeChild(this.handles.start);
        document.body.removeChild(this.handles.end);

        this.get().removeAllRanges();
        this.showHandles();
        this.enabled = false;
      }
    },

    /* Public: Checks if the listener is currently enabled.
     *
     * Examples
     *
     *   if (highlighter.isEnabled()) {
     *     // Watch for selection changes.
     *   }
     *
     * Returns true if the listener is currently enabled.
     */
    isEnabled: function () {
      return this.enabled;
    },

    /* Public: Selects the range and positions the draggable handles.
     *
     * range - An instance of Range to select.
     *
     * Examples
     *
     *   var range = document.createRange();
     *   // Set start and end positions then…
     *   highlighter.select(range);
     *
     * Returns itself.
     */
    select: function (range) {
      var selection = this.get(),
          top   = window.scrollY,
          left  = window.scrollX,
          rects = range.getClientRects(),
          first = rects[0],
          last  = rects[rects.length - 1];

      selection.removeAllRanges();
      selection.addRange(range);

      this.positionHandles({
        x: first.left + left,
        y: first.top + top + (first.height / 2)
      }, {
        x: last.left + last.width + left,
        y: last.top + top + (last.height / 2)
      });

      this.selected = range;
      return this.showHandles();
    },

    /* Public: Deselects the current selection and hides the handles.
     *
     * Examples
     *
     *   document.addEventListener('click', function (event) {
     	
     *     if (!isInSelected(event)) {
     *       highlighter.deselect();
     *     }
     *   });
     *
     * Returns itself.
     */
    deselect: function () {
      var selected = this.get();
      if (selected) {
        this.selected = null;
        selected.removeAllRanges();
      }
      return this.hideHandles();
    },

    /* Public: Selects the word under the current mouse position. The position
     * object should be relative to the client viewport rather than the
     * document.
     *
     * position - A position object with "x" and "y" properties.
     *
     * Examples
     *
     *   highlighter.selectWord({x: 20, y: 120});
     *
     * Returns itself.
     */
    selectWord: function (position) {
      var word = this.createRange(position);
      if (word) {
        word.expand("word");

        if (word.toString().trim()) {
          this.select(word);
        }
      }
      return this;
    },

    /* Public: Selects a range between two points.
     *
     * start - The Range to start at.
     * end   - The Range to end at.
     *
     * Returns itself.
     */
    selectRange: function (start, end) {
      var range = document.createRange();
      range.setStart(start.startContainer, start.startOffset);
      range.setEnd(end.endContainer, end.endOffset);
      return this.select(range);
    },

    /* Public: Expands the start of the currently selected range to the
     * new point.
     *
     * start - The Range to extend the start position to.
     *
     * Example:
     *
     *   highlighter.expandStart(newRange);
     *
     * Returns itself.
     */
    expandStart: function (start) {
      var current = this.selected, hasChanged;
      if (current) {
        hasChanged = current.startContainer !== start.startContainer ||
                     current.startOffset !== start.startOffset;

        if (hasChanged) {
          this.selectRange(start, current);
        }
      }
      return this;
    },

    /* Public: Expands the end of the currently selected range to the new point.
     *
     * start - The Range to extend the start position to.
     *
     * Example:
     *
     *   highlighter.expandEnd(newRange);
     *
     * Returns itself.
     */
    expandEnd: function (end) {
      var current = this.selected, hasChanged;
      if (current) {
        end.expand("character");
        hasChanged = current.endContainer !== end.endContainer ||
                     current.endOffset !== end.endOffset;

        if (hasChanged) {
          this.selectRange(current, end);
        }
      }
      return this;
    },

    /* Public: Creates a new Range object from the position provided. If no
     * range can be created then null is returned.
     *
     * position - A position object with "x" and "y" properties.
     *
     * Examples
     *
     *   var range = highlighter.createRange({x: 20, y: 120});
     *
     * Returns a new Range instance or null.
     */
    createRange: function (position) {
      // NOTE: This method is not supported by Firefox. There is an
      // Event.rangeParent() method that could be used instead.
      // See: http://clauswitt.com/click-to-split-text-in-the-browser.html
      return document.caretRangeFromPoint(position.x, position.y);
    },

    /* Public: Shows the adjustable handles.
     *
     * Examples
     *
     *   highlighter.showHandles();
     *
     * Returns itself.
     */
    showHandles: function () {
      removeClass(document.documentElement, this.prefix + 'hide');
      return this;
    },

    /* Public: Hides the adjustable handles.
     *
     * Examples
     *
     *   highlighter.hideHandles();
     *
     * Returns itself.
     */
    hideHandles: function () {
      addClass(document.documentElement, this.prefix + 'hide');
      return this;
    },

    /* Public: Extracts a position object from an Event object. On multi-touch
     * devices the method will return the position of the first touch event.
     *
     * event - A browser event object.
     *
     * Examples
     *
     *   contentNode.addEventListener('click', function (event) {
     *     var position = highlighter.getFirstPosition(event);
     *     if (position) {
     *       // Higlights the word at the position specified.
     *       highlighter.selectWord(position);
     *     }
     *   }, false);
     *
     * Returns the position object or null.
     */
    getFirstPosition: function (event, useClient) {
      var firstTouch = event.touches ? event.touches[0] : event;
      if (firstTouch) {
        return {
          x: firstTouch.clientX,
          y: firstTouch.clientY
        };
      }
      return null;
    },

    /* Internal: Adds event listeners to a DOM node. The events should be
     * event/callback pairs. If a callback is passed as a string then it is
     * assumed that it is a method on the current object.
     *
     * node   - A DOM node to bind events to.
     * events - An object of event/callback pairs.
     *
     * Examples
     *
     *   highlighter.bind(domNode, {click: onClick});
     *
     * Returns itself.
     */
    bind: function (node, events) {
      var event, callback;
      for (event in events) {
        if (events.hasOwnProperty(event)) {
          callback = events[event];
          if (typeof callback === 'string') {
            callback = this[callback];
          }
          node.addEventListener(event, callback, false);
        }
      }
      return this;
    },

    /* Internal: Removes event listeners from a DOM node. The events should be
     * event/callback pairs. If a callback is passed as a string then it is
     * assumed that it is a method on the current object.
     *
     * node   - A DOM node to remove listeners from.
     * events - An object of event/callback pairs.
     *
     * Examples
     *
     *   highlighter.unbind(domNode, {click: onClick});
     *
     * Returns itself.
     */
    unbind: function (node, events) {
      var event, callback;
      for (event in events) {
        if (events.hasOwnProperty(event)) {
          callback = events[event];
          if (typeof callback === 'string') {
            callback = this[callback];
          }
          node.removeEventListener(event, callback, false);
        }
      }
      return this;
    },

    /* Internal: Updates the selection based on a moved handle.
     *
     * position      - A position object with "x" and "y" properties.
     * isStartHandle - If the handle moved is the start handle.
     *
     * Returns itself.
     */
    updatePositionByHandle: function (position, isStartHandle) {
      var selected, range, isEndBeforeStart, isStartBeforeEnd;

      // Grab the range for the current position ignoring handle elements.
      this.hideHandles();
      range = this.createRange(position);
      this.showHandles();

      if (range) {
        selected = this.selected;

        // Need to account for end handle being dragged before the start
        // handle in which case the selection needs to be inverted and
        // vice versa.
        isEndBeforeStart = !this._isStartHandle &&
          selected.compareBoundaryPoints(Range.START_TO_START, range) === 1;
        isStartBeforeEnd =  this._isStartHandle &&
          selected.compareBoundaryPoints(Range.END_TO_END, range) === -1;

        // Account for the selection being reversed.
        if (isEndBeforeStart || isStartBeforeEnd) {
          this._isStartHandle = !this._isStartHandle;

          // Collapse the range. false collapses to the end of the range.
          // See: https://developer.mozilla.org/en/DOM/range.collapse
          selected.collapse(isEndBeforeStart);
          if (isEndBeforeStart) {
            this.selectRange(range, selected);
          } else {
            this.selectRange(selected, range);
          }
        } else {
          // Otherwise extend the range depending on the handle dragged.
          this[this._isStartHandle ? 'expandStart' : 'expandEnd'](range);
        }
      }
      return this;
    },

    /* Internal: Checks to see if the provided node is one of the handles.
     *
     * node - A document Node.
     *
     * Examples
     *
     *   highlighter.isHandle(event.target);
     *
     * Returns true if the node is one of the handles.
     */
    isHandle: function (node) {
      return node === this.handles.start || node === this.handles.end;
    },

    /* Internal: Positions the drag handles. If any properties are missing
     * they will be ignored.
     *
     * start - A position object with "x" and "y" properties.
     * end   - A position object with "x" and "y" properties.
     *
     * Returns itself.
     */
    positionHandles: function (start, end) {
      start = start || {};
      end   = end || {};

      if (start.y) {
        this.handles.start.style.top  = start.y + 'px';
      }
      if (start.x) {
        this.handles.start.style.left = start.x + 'px';
      }
      if (end.y) {
        this.handles.end.style.top  = end.y + 'px';
      }
      if (end.x) {
        this.handles.end.style.left = end.x + 'px';
      }

      return this;
    },

    /* Internal: Creates a new handle element and attaches appropriate
     * listeners.
     *
     * className - An class name to add to the element.
     *
     * Returns a new <span> Element.
     */
    createHandle: function (className) {
      var handle = document.createElement('span');

      addClass(handle, this.prefix + 'handle');
      addClass(handle, this.prefix + className);

      this.bind(handle, {
        touchstart: '_onHandleDown',
        mousedown:  '_onHandleDown'
      });

      return handle;
    },

    /* Internal: Creates a style element that can be appended to the page
     * to set the document highlight styles. These can be set using the
     * #highlightStyles option.
     *
     * Examples
     *
     *   var head = document.getElementsByTagName('head')[0];
     *   head.appendChild(highlighter.createStyle);
     *
     * Returns a <style> element.
     */
    createStyle: function () {
      var css = '::selection {$} ::-moz-selection {$} ::-webkit-selection {$}',
          style = document.createElement('style'),
          isStyle = typeof this.options.highlightStyles === 'string',
          content = this.options.highlightStyles;

      //content = isStyle ? content : 'background-color: rgb(180, 213, 254)';
      content = isStyle ? content : 'text-decoration: line-through;';
      


      css = css.replace(/\$/g, content);
      style.appendChild(document.createTextNode(css));
      return style;
    },

    /* Event handler that watches for clicks on the root node and selects
     * the word at that position.
     *
     * event - A click Event object.
     *
     * Returns nothing.
     */
    _onClick: function (event) {
      if (!this.selected && !this._cleared) {
        var position = this.getFirstPosition(event);
        if (position) {
          this.selectWord(position);
        }
        event.preventDefault();
      }
    },

    /* Event listener to handle taps/clicks on the document and ensure the
     * current highlight remains selected if tapped or clear it if the tap
     * was elsewhere.
     *
     * event - A tap/click event object.
     *
     * Returns nothing.
     */
    _onDocumentDown: function (event) {
      var position = this.getFirstPosition(event),
          selected = this.selected,
          range, isBeforeStart, isAfterEnd;

      delete this._cleared;
      if (this.selected && position && !this.isHandle(event.target)) {
        range = this.createRange(position);
        isBeforeStart = range.compareBoundaryPoints(Range.START_TO_END, selected) === -1;
        isAfterEnd    = range.compareBoundaryPoints(Range.END_TO_START, selected) === 1;

        if (isBeforeStart || isAfterEnd) {
          this._cleared = true;
          this.deselect();
        }
      }

      if (this.isEnabled()) {
        event.preventDefault();
      }
    },

    /* Handle event handler. Watches for taps/clicks on the handle elements
     * and sets up drag handlers.
     *
     * event - A click/tap Event object.
     *
     * Returns nothing.
     */
    _onHandleDown: function (event) {
      var position = this.getFirstPosition(event);
      if (position && this.selected) {
        this._offset = {
          y: position.y - parseFloat(event.target.style.top)  + window.scrollY,
          x: position.x - parseFloat(event.target.style.left) + window.scrollX
        };

        this._startPosition = this._endPosition = position;
        this._isStartHandle = event.target === this.handles.start;

        this.bind(document, {
          mousemove: '_onHandleMove',
          mouseup:   '_onHandleUp',
          touchmove: '_onHandleMove',
          touchend:  '_onHandleUp'
        });
      }
      event.stopPropagation();
      event.preventDefault();
    },

    /* Handle event handler. Updates the selection and handle position. Also
     * throttles calls to the method to prevent excessive updates.
     *
     * event - A click/tap Event object.
     *
     * Returns nothing.
     */
    _onHandleMove: function (event) {
      var self = this, position;
      event.stopPropagation();
      event.preventDefault();

      if (!this._throttled) {
        this._throttled = setTimeout(function () {
          self._throttled = null;
        }, this.throttle);

        if (this._startPosition) {
          position = this.getFirstPosition(event);
          if (position) {
            position = {
              y: position.y - this._offset.y,
              x: position.x - this._offset.x
            };
            this.updatePositionByHandle(position, this._isStartHandle);
          }
        }
      }
    },

    /* Handle event handler. Removes cached properties and bound event handlers.
     *
     * event - A click/tap Event object.
     *
     * Returns nothing.
     */
    _onHandleUp: function () {
      clearTimeout(this._throttled);

      delete this._isStartHandle;
      delete this._startPosition;
      delete this._endPosition;
      delete this._throttled;
      delete this._offset;

      this.unbind(document, {
        mousemove: '_onHandleMove',
        mouseup:   '_onHandleUp',
        touchmove: '_onHandleMove',
        touchend:  '_onHandleUp'
      });
    }
  };

  if (module.exports) {
    module.exports = Highlighter;
  } else {
    module.Highlighter = Highlighter;
  }
})(typeof module !== 'undefined' ? module : this, this, this.document);


/*---------------------------------------------------------------------------------
- ------------------Including the mustache.js file--------------------------------
----------------------------------------------------------------------------------- */



/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template + ':' + (tags || mustache.tags).join(':')] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));






















/*---------------------------------------------------------------------------------
- ------------------Including the suggest.js file--------------------------------
----------------------------------------------------------------------------------- */


window.onload = (function(Annotator){

	Annotator = window.Annotator || Annotator;
	Annotator.Plugin.SuggestEdit = function (element, message) {
    var myPlugin = {};
    myPlugin.options = {
    /* The CSS class to apply to drawn highlights*/
    suggestClass: 'annotator-editing',

    describeClass: 'annotator-describe',

    combinedClass: 'annotator-combined'
    }

    myPlugin.pluginInit = function () {
    	
    	/*myPlugin.suggester = function(annotation){
    		console.log(this.annotator.setupAnnotation(annotation));
    	};*/

      this.annotator.viewer.addField({
        load: function (field, annotation) {
          field.innerHTML = message;
        }
      });

      this.annotator.editor.addField({
      	load: function (field, annotation) {
          /*field.innerHTML = "<input type='text' placeholder='suggest here' />";*/
          field.innerHTML = "<input id = 'sugCheck' type='checkbox' name='terms' /> Edit <input id = 'DesCheck' type='checkbox' name='terms' /> Describe";

        },
        submit: function (field, annotation ) {
        	/*console.log("submitted" , $(field).children()[0].value, annotation);
        	var suggtext = $(field).children()[0].value;
        	console.log("suggested text hiiiiiiiii",suggtext);
            var temp = annotation;*/

        			if ($('#sugCheck').is(':checked') && $('#DesCheck').is(':checked')){ 
			        	annotation.edit = true;
			        	annotation.describe = true;
			        	/*console.log("checked both",annotation.edit,annotation.describe);
			        	console.log("annotated info",annotation.quote,annotation.ranges);*/

		        	}
		        	else if ($('#sugCheck').is(':checked')) {
		        		annotation.edit = true;
		        		annotation.describe = false;
		      			/*console.log("checkedOnly suggest",annotation.edit,annotation.describe);*/	
		        	}
		        	else if ($('#DesCheck').is(':checked')) {
		        		annotation.edit = false;
		        		annotation.describe = true;
		      			/*console.log("checkedOnly Describe ",annotation.edit,annotation.describe);	*/
		        	}
		        	else {
		        		annotation.edit = false;
		        		annotation.describe = false;
		      			/*console.log("notchecked any",annotation.edit,annotation.describe);*/
		        	}
		     /*console.log("suggested text",suggtext);*/
		     /*var temp = annotation;
        	
        			if (suggtext == "" ){ 
			        	temp.suggest = false;
			            console.info("suggested text",suggtext);
 
		        	}
		        	else {
		        		temp.suggest = true;
		        		
		        	}*/

        }/*submit*/
      });/*addfield*/


      this.annotator
          .subscribe("annotationCreated", function (annotation) {
	          	if(annotation.edit == true){
		            /*console.info("Editclass value is::",myPlugin.options.suggestClass);*/
		            $(annotation.highlights).addClass(myPlugin.options.suggestClass);
		            console.info("The annotation for editing: %o has just been created!", annotation);
		            var Anno_base_template = new Annotation_structure(annotation);
    				    /*console.log("This is Anno Struct template ",Anno_base_template);*/
    				    Anno_base_template.motivation = "editing";
    				    var Anno_data_structure = $.extend({},Anno_base_template,annotation);
    				    console.log("This is Anno Data Struct ",Anno_data_structure);
                /*console.log("setupannotation",annotation.setupAnnotation(Anno_data_structure));*/
          }


        		else if(annotation.describe == true){
        			/*console.info("suggestclass value is::",myPlugin.options.describeClass);*/
            		$(annotation.highlights).addClass(myPlugin.options.describeClass);
            		console.info("The annotation for describing: %o has just been created!", annotation);
            		var Anno_base_template = new Annotation_structure(annotation);
            		Anno_base_template.motivation = "describing";
				    var Anno_data_structure = $.extend({},Anno_base_template,annotation);
				    console.log("This is Anno Data Struct ",Anno_data_structure);
        		}

        		else if((annotation.edit == true)&&(annotation.describe == true)){
					$(annotation.highlights).addClass(myPlugin.options.combinedClass);
            		console.info("The annotation for both editing and describing: %o has just been created!", annotation);
            		var Anno_base_template = new Annotation_structure(annotation);
            		Anno_base_template.motivation = "describe and edit";
				    var Anno_data_structure = $.extend({},Anno_base_template,annotation);
				    console.log("This is Anno Data Struct ",Anno_data_structure);

        		}


        		else {
        			var Anno_base_template = new Annotation_structure(annotation);
  				    var Anno_data_structure = $.extend({},Anno_base_template,annotation);
  				    console.log("This is Anno Data Struct ",Anno_data_structure);
        		}
          })

 			/*.subscribe("beforeAnnotationCreated", function (annotation) {
            console.info("The BEFORE annotation: %o has just been created!", annotation)
          })*/
 			
          /* .subscribe("annotationEditorSubmit", function (editor, annotation) {
            console.info("The annotation with editor: %o %o has just been created!", editor, annotation)
          })*/

        
    };/*pluginInit*/

/*==============================================================*/
Annotation_structure = function (anno) {
				  this.context = "http://www.w3.org/ns/anno.jsonld",
				  this.id = " ",
				  this.type = "Annotation",
				  this.body = anno.text ,
				  this.target = anno.quote,
				  this.creator = "ashwini",
				  this.created = Date(),
				  this.motivation = "Commenting" 
				  return this;
				  }
  /*var annt = Annotation_structure();
  console.log("Check",annt);
  var Anno_object = $.extend({},annt,annotation);
==============================================================
 Highlighter.prototype.suggest = function () {

	console.log("checking the highlighter",this);
}*/

 /* Create your plugin here. Then return it.*/
    return myPlugin;

}/*SuggestEdit*/
})/*closure*/


