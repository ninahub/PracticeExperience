try {
var $=$||AJS.$;
var MW=MW||{};
MW.Cookie=(function(){return{name:"mywork.tab.tasks",save:function(A){this.setCookie(this.name,A,7)
},load:function(){return this.getCookie(this.name)=="true"
},setCookie:function(C,D,E){var A="";
if(E){var B=new Date();
B.setTime(B.getTime()+(E*24*60*60*1000));
A="; expires="+B.toGMTString()
}document.cookie=C+"="+D+A+"; path=/"
},getCookie:function(B){var D=B+"=";
var A=document.cookie.split("; ");
for(var C=0;
C<A.length;
C++){if(A[C].indexOf(D)===0){return A[C].substring(D.length,A[C].length)
}}return null
}}
})();
MW.Slide={FROM_RIGHT:"from-right",FROM_LEFT:"from-left"};
MW.CardTransitions=(function(C){var B;
var A=function(E){B=E.globalEvents
};
var D=function(E,I,J,K){J=J||300;
var H,G;
if(I===MW.Slide.FROM_RIGHT){H="right";
G="left"
}else{if(I===MW.Slide.FROM_LEFT){H="left";
G="right"
}else{H=G=""
}}var F=$(".showing");
$(".transition-finished").removeClass("transition-finished");
setTimeout(function(){B.trigger("blockKeyboardShortcut");
E.addClass("showing");
E.show("slide",{direction:H},J,function(){B.trigger("unblockKeyboardShortcut");
E.focus();
E.addClass("transition-finished")
});
if(F.length>0&&F[0]==E[0]){if(K){K()
}return 
}F.removeClass("showing");
F.hide("slide",{direction:G},J,function(){B.trigger("cleanupNestedCard");
if(K){K()
}})
})
};
A(C);
return{showCard:D}
});
$(function(A){(function(B,C){B.effects.slide=function(D){return this.queue(function(){var G=B(this),F=["position","top","bottom","left","right"];
var K=B.effects.setMode(G,D.options.mode||"show");
var J=D.options.direction||"left";
B.effects.save(G,F);
G.show();
B.effects.createWrapper(G).css({overflow:"hidden"});
var H=(J=="up"||J=="down")?"top":"left";
var E=(J=="up"||J=="left")?"pos":"neg";
var L=D.options.distance||(H=="top"?G.outerHeight({margin:true}):G.outerWidth({margin:true}));
if(K=="show"){G.css(H,E=="pos"?(isNaN(L)?"-"+L:-L):L)
}var I={};
I[H]=(K=="show"?(E=="pos"?"+=":"-="):(E=="pos"?"-=":"+="))+L;
G.animate(I,{queue:false,duration:D.duration,easing:D.options.easing,complete:function(){if(K=="hide"){G.hide()
}B.effects.restore(G,F);
B.effects.removeWrapper(G);
if(D.callback){D.callback.apply(this,arguments)
}G.dequeue()
}})
})
}
})(jQuery)
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.format=function(C){var A=/^((?:(?:[^']*'){2})*?[^']*?)\{(\d+)\}/,B=/'(?!')/g;
MW.format=function(G){var E=arguments,F="",D=G.match(A);
while(D){G=G.substring(D[0].length);
F+=D[1].replace(B,"")+(E.length>++D[2]?E[D[2]]:"");
D=G.match(A)
}return F+=G.replace(B,"")
};
return MW.format.apply(MW,arguments)
};
MW.formatString=function(B,A){return B.replace(/\{\{|\}\}|\{(\w+)\}/g,function(C,D){if(C=="{{"){return"{"
}if(C=="}}"){return"}"
}return A[D]
})
};
MW.getParameterByNameFromHash=function(A){return MW.getParameterByName(A,window.location.hash)
};
MW.getParameterByName=function(B,D){B=B.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var A="[\\?\\#&]"+B+"=([^&#]*)";
var E=new RegExp(A);
var C=E.exec(D||window.location.search);
if(C===null){return""
}else{return decodeURIComponent(C[1].replace(/\+/g," "))
}};
MW.setRequestTime=function(A){MW.timeDifference=new Date().getTime()-parseInt(A,10)
};
MW.getPrettyTime=function(D){var C=new Date(D+MW.timeDifference),B=new Date(),F=B-C,E=60000,A=60*E;
if(C>=B){return "\u73B0\u5728"
}else{if(F<E){return "\u5927\u7EA61\u5206\u949F\u4EE5\u524D"
}else{if(F<2*E){return "1\u5206\u949F\u4EE5\u524D"
}else{if(F<50*E){return AJS.format("{0}\u5206\u949F\u4EE5\u524D",Math.floor(F/E))
}else{if(F<90*E){return "\u5927\u7EA61\u5C0F\u65F6\u4EE5\u524D"
}else{if(F<24*A){return AJS.format("\u5927\u7EA6{0}\u5C0F\u65F6\u4EE5\u524D",Math.floor(F/A))
}else{return AJS.format("{0} days ago",Math.floor(F/(24*A)))
}}}}}}};
MW.escapeHTML=function(A){return A?A.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):A
};
MW.pick=function(B){var A={};
_.each(_.flatten(Array.prototype.slice.call(arguments,1)),function(C){if(C in B){A[C]=B[C]
}});
return A
};
MW.Deferred=function(){var A=$.Deferred();
return{done:_.bind(A.done,A),isResolved:_.bind(A.isResolved,A),resolveOnSuccess:function(B){return _.extend({},B,{success:function(){if(B&&B.success){B.success()
}A.resolve()
}})
}}
};
MW.makeTextAreaExpandable=function(A,D){var C=A.find(".expandingArea textarea");
var B=A.find(".expandingArea span");
B.text(C.val());
C.bind("input",function(){B.text(C.val());
if(D){D()
}});
A.find(".expandingArea").addClass("active")
};
MW.getBaseUrl=function(){return window.location.href.split("/",3).join("/")+MW.contextPath
};
MW.createMiniviewCallback=function(B,A){var C=document.createElement("a");
C.href=B;
var D=C.search;
if(D.length===0){D="?show-miniview"
}else{if(!/[?&]show-miniview/.test(D)){D+="&show-miniview"
}}if(A){D+="="+encodeURIComponent(A)
}return C.pathname+D+C.hash
};
MW.createCallback=function(B,A){if(MW.App.parseView()!=="chrome"){if(MW.App.parseView()==="mobile"){return B+"/plugins/servlet/mobile?#mywork/notification"
}else{if(!!MW.parentConfig.parentUrl){return MW.createMiniviewCallback(MW.parentConfig.parentUrl,A)
}else{return B+"/plugins/servlet/notifications-miniview/notification"
}}}};
MW.appendCallback=function(A,C){var B=A.indexOf("%3F")<0?"?":"&";
return encodeURIComponent(B+"callback="+encodeURIComponent(C))
};
MW.onJsonMessage=function(A){function B(C){var D=JSON.parse(C.data);
A(D,C)
}if(!window.addEventListener){window.attachEvent("onmessage",B)
}else{window.addEventListener("message",B,false)
}};
$(function(){$.fn.visible=function(){var A=$(this);
return !!(A.width()||A.height())&&A.css("display")!=="none"
};
if(!_.groupBy){$.extend(_,{groupBy:function(B,A){var C={};
$.each(B,function(E,G){var D=A(G);
var F=(C[D]=C[D]||[]);
F.push(G)
});
return C
}})
}$.fn.serializeObject=function(){var B={};
var A=this.serializeArray();
_.each(A,function(C){if(B[C.name]!==undefined){if(!B[C.name].push){B[C.name]=[B[C.name]]
}B[C.name].push(C.value||"")
}else{B[C.name]=C.value||""
}});
return B
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// Underscore.js 1.3.1
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function q(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&q(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&q(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,
h)&&!f--)break;g=!f}}d.pop();return g}var r=this,G=r._,n={},k=Array.prototype,o=Object.prototype,i=k.slice,H=k.unshift,l=o.toString,I=o.hasOwnProperty,w=k.forEach,x=k.map,y=k.reduce,z=k.reduceRight,A=k.filter,B=k.every,C=k.some,p=k.indexOf,D=k.lastIndexOf,o=Array.isArray,J=Object.keys,s=Function.prototype.bind,b=function(a){return new m(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else r._=b;b.VERSION="1.3.1";var j=b.each=
b.forEach=function(a,c,d){if(a!=null)if(w&&a.forEach===w)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===n)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===n)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(x&&a.map===x)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==
null&&(a=[]);if(y&&a.reduce===y)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(z&&a.reduceRight===z)return e&&(c=b.bind(c,e)),f?a.reduceRight(c,d):a.reduceRight(c);var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=
function(a,c,b){var e;E(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(A&&a.filter===A)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(B&&a.every===B)return a.every(c,b);j(a,function(a,g,h){if(!(e=
e&&c.call(b,a,g,h)))return n});return e};var E=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(C&&a.some===C)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return n});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return p&&a.indexOf===p?a.indexOf(c)!=-1:b=E(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});
return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){f==0?b[0]=a:(d=Math.floor(Math.random()*(f+1)),b[f]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,
c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=
b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);
return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1));return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,
d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(p&&a.indexOf===p)return a.indexOf(c);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(D&&a.lastIndexOf===D)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};
var F=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));F.prototype=a.prototype;var b=new F,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,
c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:
a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};
b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=J||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.defaults=function(a){j(i.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return q(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=o||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};
b.isArguments=function(a){return l.call(a)=="[object Arguments]"};if(!b.isArguments(arguments))b.isArguments=function(a){return!(!a||!b.has(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};
b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return I.call(a,b)};b.noConflict=function(){r._=G;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),
function(c){K(c,b[c]=a[c])})};var L=0;b.uniqueId=function(a){var b=L++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/.^/,u=function(a){return a.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||t,function(a,b){return"',_.escape("+
u(b)+"),'"}).replace(d.interpolate||t,function(a,b){return"',"+u(b)+",'"}).replace(d.evaluate||t,function(a,b){return"');"+u(b).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e.call(this,a,b)}};b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var v=function(a,c){return c?b(a).chain():a},K=function(a,c){m.prototype[a]=
function(){var a=i.call(arguments);H.call(a,this._wrapped);return v(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return v(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return v(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=
true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
    b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
    b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
    a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
    h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
    return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
    !this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
    this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
    l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
    a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
    shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
        this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
    {};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
        arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
    C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
    this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
    ""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
    !(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
    this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
    stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
        function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
        this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
    f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
        for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
        !1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
        e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
jQuery.effects||(function(H,E){H.effects={};
H.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(N,M){H.fx.step[M]=function(O){if(!O.colorInit){O.start=L(O.elem,M);
O.end=J(O.end);
O.colorInit=true
}O.elem.style[M]="rgb("+Math.max(Math.min(parseInt((O.pos*(O.end[0]-O.start[0]))+O.start[0],10),255),0)+","+Math.max(Math.min(parseInt((O.pos*(O.end[1]-O.start[1]))+O.start[1],10),255),0)+","+Math.max(Math.min(parseInt((O.pos*(O.end[2]-O.start[2]))+O.start[2],10),255),0)+")"
}
});
function J(N){var M;
if(N&&N.constructor==Array&&N.length==3){return N
}if(M=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(N)){return[parseInt(M[1],10),parseInt(M[2],10),parseInt(M[3],10)]
}if(M=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(N)){return[parseFloat(M[1])*2.55,parseFloat(M[2])*2.55,parseFloat(M[3])*2.55]
}if(M=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(N)){return[parseInt(M[1],16),parseInt(M[2],16),parseInt(M[3],16)]
}if(M=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(N)){return[parseInt(M[1]+M[1],16),parseInt(M[2]+M[2],16),parseInt(M[3]+M[3],16)]
}if(M=/rgba\(0, 0, 0, 0\)/.exec(N)){return A.transparent
}return A[H.trim(N).toLowerCase()]
}function L(O,M){var N;
do{N=H.curCSS(O,M);
if(N!=""&&N!="transparent"||H.nodeName(O,"body")){break
}M="backgroundColor"
}while(O=O.parentNode);
return J(N)
}var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};
var F=["add","remove","toggle"],C={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
function G(){var P=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,Q={},N,O;
if(P&&P.length&&P[0]&&P[P[0]]){var M=P.length;
while(M--){N=P[M];
if(typeof P[N]=="string"){O=N.replace(/\-(\w)/g,function(R,S){return S.toUpperCase()
});
Q[O]=P[N]
}}}else{for(N in P){if(typeof P[N]==="string"){Q[N]=P[N]
}}}return Q
}function B(N){var M,O;
for(M in N){O=N[M];
if(O==null||H.isFunction(O)||M in C||(/scrollbar/).test(M)||(!(/color/i).test(M)&&isNaN(parseFloat(O)))){delete N[M]
}}return N
}function I(M,O){var P={_:0},N;
for(N in O){if(M[N]!=O[N]){P[N]=O[N]
}}return P
}H.effects.animateClass=function(M,N,P,O){if(H.isFunction(P)){O=P;
P=null
}return this.queue(function(){var T=H(this),Q=T.attr("style")||" ",U=B(G.call(this)),S,R=T.attr("class");
H.each(F,function(V,W){if(M[W]){T[W+"Class"](M[W])
}});
S=B(G.call(this));
T.attr("class",R);
T.animate(I(U,S),{queue:false,duration:N,easing:P,complete:function(){H.each(F,function(V,W){if(M[W]){T[W+"Class"](M[W])
}});
if(typeof T.attr("style")=="object"){T.attr("style").cssText="";
T.attr("style").cssText=Q
}else{T.attr("style",Q)
}if(O){O.apply(this,arguments)
}H.dequeue(this)
}})
})
};
H.fn.extend({_addClass:H.fn.addClass,addClass:function(N,M,P,O){return M?H.effects.animateClass.apply(this,[{add:N},M,P,O]):this._addClass(N)
},_removeClass:H.fn.removeClass,removeClass:function(N,M,P,O){return M?H.effects.animateClass.apply(this,[{remove:N},M,P,O]):this._removeClass(N)
},_toggleClass:H.fn.toggleClass,toggleClass:function(O,N,M,Q,P){if(typeof N=="boolean"||N===E){if(!M){return this._toggleClass(O,N)
}else{return H.effects.animateClass.apply(this,[(N?{add:O}:{remove:O}),M,Q,P])
}}else{return H.effects.animateClass.apply(this,[{toggle:O},N,M,Q])
}},switchClass:function(M,O,N,Q,P){return H.effects.animateClass.apply(this,[{add:O,remove:M},N,Q,P])
}});
H.extend(H.effects,{version:"@VERSION",save:function(N,O){for(var M=0;
M<O.length;
M++){if(O[M]!==null){N.data("ec.storage."+O[M],N[0].style[O[M]])
}}},restore:function(N,O){for(var M=0;
M<O.length;
M++){if(O[M]!==null){N.css(O[M],N.data("ec.storage."+O[M]))
}}},setMode:function(M,N){if(N=="toggle"){N=M.is(":hidden")?"show":"hide"
}return N
},getBaseline:function(N,O){var P,M;
switch(N[0]){case"top":P=0;
break;
case"middle":P=0.5;
break;
case"bottom":P=1;
break;
default:P=N[0]/O.height
}switch(N[1]){case"left":M=0;
break;
case"center":M=0.5;
break;
case"right":M=1;
break;
default:M=N[1]/O.width
}return{x:M,y:P}
},createWrapper:function(M){if(M.parent().is(".ui-effects-wrapper")){return M.parent()
}var N={width:M.outerWidth(true),height:M.outerHeight(true),"float":M.css("float")},P=H("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),O=document.activeElement;
M.wrap(P);
if(M[0]===O||H.contains(M[0],O)){H(O).focus()
}P=M.parent();
if(M.css("position")=="static"){P.css({position:"relative"});
M.css({position:"relative"})
}else{H.extend(N,{position:M.css("position"),zIndex:M.css("z-index")});
H.each(["top","left","bottom","right"],function(Q,R){N[R]=M.css(R);
if(isNaN(parseInt(N[R],10))){N[R]="auto"
}});
M.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}return P.css(N).show()
},removeWrapper:function(M){var N,O=document.activeElement;
if(M.parent().is(".ui-effects-wrapper")){N=M.parent().replaceWith(M);
if(M[0]===O||H.contains(M[0],O)){H(O).focus()
}return N
}return M
},setTransition:function(N,P,M,O){O=O||{};
H.each(P,function(R,Q){unit=N.cssUnit(Q);
if(unit[0]>0){O[Q]=unit[0]*M+unit[1]
}});
return O
}});
function D(N,M,O,P){if(typeof N=="object"){P=M;
O=null;
M=N;
N=M.effect
}if(H.isFunction(M)){P=M;
O=null;
M={}
}if(typeof M=="number"||H.fx.speeds[M]){P=O;
O=M;
M={}
}if(H.isFunction(O)){P=O;
O=null
}M=M||{};
O=O||M.duration;
O=H.fx.off?0:typeof O=="number"?O:O in H.fx.speeds?H.fx.speeds[O]:H.fx.speeds._default;
P=P||M.complete;
return[N,M,O,P]
}function K(M){if(!M||typeof M==="number"||H.fx.speeds[M]){return true
}if(typeof M==="string"&&!H.effects[M]){return true
}return false
}H.fn.extend({effect:function(P,O,R,T){var N=D.apply(this,arguments),Q={options:N[1],duration:N[2],callback:N[3]},S=Q.options.mode,M=H.effects[P];
if(H.fx.off||!M){if(S){return this[S](Q.duration,Q.callback)
}else{return this.each(function(){if(Q.callback){Q.callback.call(this)
}})
}}return M.call(this,Q)
},_show:H.fn.show,show:function(N){if(K(N)){return this._show.apply(this,arguments)
}else{var M=D.apply(this,arguments);
M[1].mode="show";
return this.effect.apply(this,M)
}},_hide:H.fn.hide,hide:function(N){if(K(N)){return this._hide.apply(this,arguments)
}else{var M=D.apply(this,arguments);
M[1].mode="hide";
return this.effect.apply(this,M)
}},__toggle:H.fn.toggle,toggle:function(N){if(K(N)||typeof N==="boolean"||H.isFunction(N)){return this.__toggle.apply(this,arguments)
}else{var M=D.apply(this,arguments);
M[1].mode="toggle";
return this.effect.apply(this,M)
}},cssUnit:function(M){var N=this.css(M),O=[];
H.each(["em","px","%","pt"],function(P,Q){if(N.indexOf(Q)>0){O=[parseFloat(N),Q]
}});
return O
}});
H.easing.jswing=H.easing.swing;
H.extend(H.easing,{def:"easeOutQuad",swing:function(N,O,M,Q,P){return H.easing[H.easing.def](N,O,M,Q,P)
},easeInQuad:function(N,O,M,Q,P){return Q*(O/=P)*O+M
},easeOutQuad:function(N,O,M,Q,P){return -Q*(O/=P)*(O-2)+M
},easeInOutQuad:function(N,O,M,Q,P){if((O/=P/2)<1){return Q/2*O*O+M
}return -Q/2*((--O)*(O-2)-1)+M
},easeInCubic:function(N,O,M,Q,P){return Q*(O/=P)*O*O+M
},easeOutCubic:function(N,O,M,Q,P){return Q*((O=O/P-1)*O*O+1)+M
},easeInOutCubic:function(N,O,M,Q,P){if((O/=P/2)<1){return Q/2*O*O*O+M
}return Q/2*((O-=2)*O*O+2)+M
},easeInQuart:function(N,O,M,Q,P){return Q*(O/=P)*O*O*O+M
},easeOutQuart:function(N,O,M,Q,P){return -Q*((O=O/P-1)*O*O*O-1)+M
},easeInOutQuart:function(N,O,M,Q,P){if((O/=P/2)<1){return Q/2*O*O*O*O+M
}return -Q/2*((O-=2)*O*O*O-2)+M
},easeInQuint:function(N,O,M,Q,P){return Q*(O/=P)*O*O*O*O+M
},easeOutQuint:function(N,O,M,Q,P){return Q*((O=O/P-1)*O*O*O*O+1)+M
},easeInOutQuint:function(N,O,M,Q,P){if((O/=P/2)<1){return Q/2*O*O*O*O*O+M
}return Q/2*((O-=2)*O*O*O*O+2)+M
},easeInSine:function(N,O,M,Q,P){return -Q*Math.cos(O/P*(Math.PI/2))+Q+M
},easeOutSine:function(N,O,M,Q,P){return Q*Math.sin(O/P*(Math.PI/2))+M
},easeInOutSine:function(N,O,M,Q,P){return -Q/2*(Math.cos(Math.PI*O/P)-1)+M
},easeInExpo:function(N,O,M,Q,P){return(O==0)?M:Q*Math.pow(2,10*(O/P-1))+M
},easeOutExpo:function(N,O,M,Q,P){return(O==P)?M+Q:Q*(-Math.pow(2,-10*O/P)+1)+M
},easeInOutExpo:function(N,O,M,Q,P){if(O==0){return M
}if(O==P){return M+Q
}if((O/=P/2)<1){return Q/2*Math.pow(2,10*(O-1))+M
}return Q/2*(-Math.pow(2,-10*--O)+2)+M
},easeInCirc:function(N,O,M,Q,P){return -Q*(Math.sqrt(1-(O/=P)*O)-1)+M
},easeOutCirc:function(N,O,M,Q,P){return Q*Math.sqrt(1-(O=O/P-1)*O)+M
},easeInOutCirc:function(N,O,M,Q,P){if((O/=P/2)<1){return -Q/2*(Math.sqrt(1-O*O)-1)+M
}return Q/2*(Math.sqrt(1-(O-=2)*O)+1)+M
},easeInElastic:function(N,P,M,T,S){var Q=1.70158;
var R=0;
var O=T;
if(P==0){return M
}if((P/=S)==1){return M+T
}if(!R){R=S*0.3
}if(O<Math.abs(T)){O=T;
var Q=R/4
}else{var Q=R/(2*Math.PI)*Math.asin(T/O)
}return -(O*Math.pow(2,10*(P-=1))*Math.sin((P*S-Q)*(2*Math.PI)/R))+M
},easeOutElastic:function(N,P,M,T,S){var Q=1.70158;
var R=0;
var O=T;
if(P==0){return M
}if((P/=S)==1){return M+T
}if(!R){R=S*0.3
}if(O<Math.abs(T)){O=T;
var Q=R/4
}else{var Q=R/(2*Math.PI)*Math.asin(T/O)
}return O*Math.pow(2,-10*P)*Math.sin((P*S-Q)*(2*Math.PI)/R)+T+M
},easeInOutElastic:function(N,P,M,T,S){var Q=1.70158;
var R=0;
var O=T;
if(P==0){return M
}if((P/=S/2)==2){return M+T
}if(!R){R=S*(0.3*1.5)
}if(O<Math.abs(T)){O=T;
var Q=R/4
}else{var Q=R/(2*Math.PI)*Math.asin(T/O)
}if(P<1){return -0.5*(O*Math.pow(2,10*(P-=1))*Math.sin((P*S-Q)*(2*Math.PI)/R))+M
}return O*Math.pow(2,-10*(P-=1))*Math.sin((P*S-Q)*(2*Math.PI)/R)*0.5+T+M
},easeInBack:function(N,O,M,R,Q,P){if(P==E){P=1.70158
}return R*(O/=Q)*O*((P+1)*O-P)+M
},easeOutBack:function(N,O,M,R,Q,P){if(P==E){P=1.70158
}return R*((O=O/Q-1)*O*((P+1)*O+P)+1)+M
},easeInOutBack:function(N,O,M,R,Q,P){if(P==E){P=1.70158
}if((O/=Q/2)<1){return R/2*(O*O*(((P*=(1.525))+1)*O-P))+M
}return R/2*((O-=2)*O*(((P*=(1.525))+1)*O+P)+2)+M
},easeInBounce:function(N,O,M,Q,P){return Q-H.easing.easeOutBounce(N,P-O,0,Q,P)+M
},easeOutBounce:function(N,O,M,Q,P){if((O/=P)<(1/2.75)){return Q*(7.5625*O*O)+M
}else{if(O<(2/2.75)){return Q*(7.5625*(O-=(1.5/2.75))*O+0.75)+M
}else{if(O<(2.5/2.75)){return Q*(7.5625*(O-=(2.25/2.75))*O+0.9375)+M
}else{return Q*(7.5625*(O-=(2.625/2.75))*O+0.984375)+M
}}}},easeInOutBounce:function(N,O,M,Q,P){if(O<P/2){return H.easing.easeInBounce(N,O*2,0,Q,P)*0.5+M
}return H.easing.easeOutBounce(N,O*2-P,0,Q,P)*0.5+Q*0.5+M
}})
})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var FastClick=(function(){var A="ontouchstart" in window;
return function(G){if(!(G instanceof HTMLElement)){throw new TypeError("Layer must be instance of HTMLElement")
}if(A){G.addEventListener("touchstart",E,true);
G.addEventListener("touchmove",F,true);
G.addEventListener("touchend",C,true);
G.addEventListener("touchcancel",B,true)
}G.addEventListener("click",D,true);
if(G.onclick instanceof Function){G.addEventListener("click",G.onclick,false);
G.onclick=""
}var H={x:0,y:0,scroll:0},I=false;
function E(J){I=true;
H.x=J.targetTouches[0].clientX;
H.y=J.targetTouches[0].clientY;
H.scroll=window.pageYOffset;
return true
}function F(J){if(I){if(Math.abs(J.targetTouches[0].clientX-H.x)>10||Math.abs(J.targetTouches[0].clientY-H.y)>10){I=false
}}return true
}function C(J){var K,L;
if(!I||Math.abs(window.pageYOffset-H.scroll)>5){return true
}K=document.elementFromPoint(H.x,H.y);
if(K.nodeType===Node.TEXT_NODE){K=K.parentNode
}if(!(K.className.indexOf("clickevent")!==-1&&K.className.indexOf("touchandclickevent")===-1)){L=document.createEvent("MouseEvents");
L.initMouseEvent("click",true,true,window,1,0,0,H.x,H.y,false,false,false,false,0,null);
L.forwardedTouchEvent=true;
K.dispatchEvent(L)
}if(!(K instanceof HTMLSelectElement)&&K.className.indexOf("clickevent")===-1){J.preventDefault()
}else{return false
}}function B(J){I=false
}function D(K){if(!window.event){return true
}var J=true;
var L;
var M=window.event.forwardedTouchEvent;
if(A){L=document.elementFromPoint(H.x,H.y);
if(!L||(!M&&L.className.indexOf("clickevent")==-1)){J=false
}}if(J){return true
}K.stopPropagation();
K.preventDefault();
K.stopImmediatePropagation();
return false
}}
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from mywork.soy.
// Please don't edit this file by hand.

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }


MyWork.Templates.mainNotification = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  MyWork.Templates.mainNotificationHeader(null, output);
  output.append('<div class=\'mw-notifications-list\'>');
  MyWork.Templates.loading(null, output);
  output.append('</div><div class="mw-footer" data-role="footer"></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.mainNotificationHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-header aui-toolbar" data-role="header"><h2>', soy.$$escapeHtml("Notifications"), '</h2>');
  MyWork.Templates.toggleButtons(null, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'mw-loading\'>', soy.$$escapeHtml("Loading..."), '</div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.footer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-footer" data-role="footer"></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.toggleButtons = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="mw-toggles toolbar-group"><li class="toolbar-item"><a class="mw-button-notifications toolbar-trigger" title="', soy.$$escapeHtml("Notifications"), '"><span class="icon icon-notification"></span></a></li><li class="toolbar-item"><a class="toolbar-trigger mw-button-tasks" title="', soy.$$escapeHtml("Personal Tasks"), '"><span class="icon icon-task"></span></a><span class="mw-count mw-task-count zero">0</span></li></ul>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.notificationDrilldown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-drilldown-top" title="', soy.$$escapeHtml("Back to notifications (type \x27u\x27)"), '"><a class="mw-drilldown-back"><span class="back-arrow"></span> ', soy.$$escapeHtml("Back to notifications"), '</a></div><div class="mw-drilldown-container"><div class="mw-drilldown-header"></div><div class="mw-drilldown-body"></div></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.drilldownEntry = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-drilldown-icon">', (opt_data.notification.iconUrl) ? '<img src="' + soy.$$escapeHtml(opt_data.notification.iconUrl) + '" class="mw-drilldown-avatar avatar">' : '', '</div><div class="mw-drilldown-item"><div class="mw-drilldown-title">', opt_data.htmlTitle, '</div>', (opt_data.notification.description) ? '<div class="mw-drilldown-excerpt">' + opt_data.notification.descriptionHtml + '</div>' : '', '<div class="mw-drilldown-actions"><ul></ul><div class="message"></div><div class="action-form"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.drilldownHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="drilldown-header-title"><div class="drilldown-title">', (opt_data.url) ? '<a href=' + soy.$$escapeHtml(opt_data.url) + ' target="_blank">' + opt_data.title + '</a>' : soy.$$escapeHtml(opt_data.title), '</div><div class="drilldown-new-actions">', (opt_data.displayIconClass) ? '<div class="drilldown-icon ' + soy.$$escapeHtml(opt_data.displayIconClass) + '"></div>' : (opt_data.displayIconUrl) ? '<img class="drilldown-icon" src="' + soy.$$escapeHtml(opt_data.displayIconUrl) + '">' : '', '<span class="drilldown-action-text">', soy.$$escapeHtml(opt_data.newActionsText), '</span></div><div class="mw-drilldown-actions"><ul></ul><div class="message"></div></div><div class="action-form"></div></div>', (opt_data.renderTask) ? '<div class="drilldown-task-container"><a class="aui-button button mw-task' + ((opt_data.hasTask) ? ' on' : '') + '"><span>Task</span></a></div>' : '');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.notificationView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-notification-verb-icon">', (opt_data.notification.displayIconClass) ? '<div class="' + soy.$$escapeHtml(opt_data.notification.displayIconClass) + '"></div>' : (opt_data.notification.displayIconUrl) ? '<div style="background:url(' + soy.$$escapeHtml(opt_data.notification.displayIconUrl) + ') no-repeat 0 0; width:16px; height:16px"></div>' : '', '</div><div class="mw-notification-text"></div><div class="mw-notification-time" title="', soy.$$escapeHtml(opt_data.prettyTime), '">', soy.$$escapeHtml(opt_data.prettyTime), '</div><div class="mw-drilldown-arrow"></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.mainTasks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  MyWork.Templates.taskHeader(opt_data, output);
  output.append('<ul class="mw-tasks-list">');
  MyWork.Templates.loading(null, output);
  output.append('</ul><div class="mw-footer" data-role="footer"><a class="view-completed">', soy.$$escapeHtml("View completed"), '</a></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.taskHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-header aui-toolbar" data-role="header"><h2>', soy.$$escapeHtml("Personal tasks"), '</h2>');
  MyWork.Templates.toggleButtons(null, output);
  output.append('<div class="add-task-row"><button class="add-task aui-button aui-style">', soy.$$escapeHtml(opt_data.addTaskButtonText), '</button><div><input id="new-personal-task" type="text" placeholder="', soy.$$escapeHtml(opt_data.addTaskPlaceholder), '"/></div></div></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.personalTask = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="entire-task notes"><div class="handle"></div><div class="spacer"></div><div class="mw-task-checkbox-w"><div class="mw-task-checkbox"></div></div><div class="spacer"></div><div class="item-content notes">', soy.$$escapeHtml(opt_data.text), '</div>', (opt_data.task.item.url) ? (opt_data.task.item.displayIconClass) ? '<a href="' + soy.$$escapeHtml(opt_data.task.item.url) + '" title="' + soy.$$escapeHtml(opt_data.task.item.title) + '" class="' + soy.$$escapeHtml(opt_data.task.item.displayIconClass) + ' mw-task-link" target="_blank"></a>' : '<a href="' + soy.$$escapeHtml(opt_data.task.item.url) + '" title="' + soy.$$escapeHtml(opt_data.task.item.title) + '" class="mw-task-link" target="_blank" style="background-image:url(' + soy.$$escapeHtml(opt_data.task.item.displayIconUrl) + ')"></a>' : '', '<div class="mw-drilldown-arrow"></div></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.personalTaskDetail = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-drilldown-top" title="', soy.$$escapeHtml(opt_data.backToTasksText), '"><a class="mw-taskdetail-back"><span class="back-arrow"></span> ', soy.$$escapeHtml(opt_data.backToTasksText), '</a></div><div class="mw-taskdetail-outer-container"><div class="mw-taskdetail-header"><span class="mw-task-checkbox-w"><a class="mw-task-checkbox" tabindex="1"></a></span>', (opt_data.task.readonlyTitle) ? '<a class="mw-taskdetail-title" href="' + soy.$$escapeHtml(opt_data.task.item.url) + '" target="_blank" tabindex="2">' + soy.$$escapeHtml(opt_data.task.title) + '</a>' : '<input type="text" class="mw-taskdetail-title" value="' + soy.$$escapeHtml(opt_data.task.title) + '" tabindex="2"/>', '</div><div class="mw-taskdetail-container">');
  MyWork.Templates.taskDetailBody(opt_data, output);
  MyWork.Templates.taskDetailDelete(null, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.taskDetailBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div tabindex="3" class="mw-taskdetail-notes ', (opt_data.task.item.url) ? 'short' : '', '" ></div><textarea tabindex="3" class="mw-taskdetail-notes-textarea ', (opt_data.task.item.url) ? 'short' : '', '"></textarea>', (opt_data.task.item.url) ? '<div class="mw-related-content">' + ((opt_data.task.item.displayIconClass) ? '<div type="text" class="' + soy.$$escapeHtml(opt_data.task.item.displayIconClass) + ' mw-related-title">' : '<div type="text" class="mw-related-title" style="background:url(' + soy.$$escapeHtml(opt_data.task.item.displayIconUrl) + ') no-repeat 0 0;">') + '<a href="' + soy.$$escapeHtml(opt_data.task.item.url) + '" target="_blank">' + soy.$$escapeHtml(opt_data.task.item.title) + '</a></div></div>' : '');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.taskDetailTags = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-taskdetail-tags"><h1>', soy.$$escapeHtml("Tags"), '</h1><div class="mw-taskdetail-taglist"></div></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.taskDetailDelete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-taskdetail-action-buttons"><button tabindex="4" class="mw-taskdetail-save aui-button aui-button-primary">', soy.$$escapeHtml("Save"), '</button><button tabindex="5" class="mw-taskdetail-delete aui-button">', soy.$$escapeHtml("Delete"), '</button></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.noNotifications = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-no-notifications"><div class="notifications-callout"></div><h1>', soy.$$escapeHtml(opt_data.heading), '</h1><div class="subheading"><p>', soy.$$escapeHtml(opt_data.subheading), '</p></div>', soy.$$escapeHtml(opt_data.body), '</div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.noTasks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="mw-no-tasks"><div class="taskarrow-callout"></div><li class="empty-task"><div class="entire-task empty"><p>', soy.$$escapeHtml(opt_data.noTaskItem), '</p></div></li><p>', soy.$$escapeHtml(opt_data.noTaskDescription), '</p><div class="list-container"><div><ul><li>', soy.$$escapeHtml(opt_data.noTask1), '</li><li>', soy.$$escapeHtml(opt_data.noTask2), '</li></ul></div><div class="addtask-callout-container"><div class="addtask-callout"></div></div></div><div class="list-container"><div class="task-callout-list"><ul><li>', soy.$$escapeHtml(opt_data.noTask3), '</li></ul></div><div class="task-callout-container"><div class="task-callout"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.showMore = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="mw-mobile-entry-item more-trigger"><a href="#" class="mw-show-more button gradient-background">', soy.$$escapeHtml("More"), '</a></li>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.completedCategory = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class=\'task completed category\'>', soy.$$escapeHtml(opt_data.category), '</li>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.openLinkAction = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a target="', soy.$$escapeHtml(opt_data.notification.target), '" href="', soy.$$escapeHtml(opt_data.url), '" data-url="', soy.$$escapeHtml(opt_data.notification.parent.url), '">', soy.$$escapeHtml(opt_data.displayName), '</a>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.inlineActionForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="inline-action-form"></form>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.inlineActionTextarea = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="expandingArea"><pre><span></span><br></pre><textarea class="mw-inline-textarea" name="comment" rows="3"></textarea></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.inlineActionSubmit = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="inline-action-submit"><button class="aui-button aui-button-primary add-comment-button disabled">', soy.$$escapeHtml(opt_data.submitLabel), '</button><button class="aui-button inline-cancel">', soy.$$escapeHtml("Cancel"), '</button></div>');
  return opt_sb ? '' : output.toString();
};


MyWork.Templates.categoryLabel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="category-label">', soy.$$escapeHtml(opt_data.text), '</span>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
(function(){function A(){return Array.prototype.slice.apply(arguments).join(".")
}MW.Configuration=Backbone.Model.extend({parse:function(B){B.objectActions={};
B.itemActions={};
B.taskActions={};
var C=function(F,E,D){_(E).map(function(G){F[G]=(F[G]||[]).concat([D])
})
};
_(B.actions).each(function(D,E){D.id=E;
C(B.objectActions,D.objectActions,D);
C(B.itemActions,D.actions,D);
C(B.taskActions,D.taskActions,D);
D.attrs=D.attrs||{};
D.attrs.getAlternateAction=function(){return B.actions[D.attrs.alternateAction]
}
});
return B
},appendUrl:function(B){var C=this.getProperty(B);
return C?this.getUrl()+C:C
},getUrl:function(){return this.get("url")||""
},getProperty:function(){var B=A.apply(this,arguments);
return this.get("properties")[B]||""
},getUserUrl:function(B,C){return(this.get("url")||"")+MW.formatString(this.getProperty(B+".user_url"),{username:encodeURIComponent(C)})
},getObjectActions:function(B,D,C){return this.getMyActions(this.get("objectActions"),B,D,C)
},getActions:function(B,D,C){return this.getMyActions(this.get("itemActions"),B,D,C)
},getTaskActions:function(B,D,C){return this.getMyActions(this.get("taskActions"),B,D,C)
},getMyActions:function(E,B,D,C){E=E||{};
C=C||{};
var F=[].concat(E[B]||[],E[B+"."+D]||[]);
return _(F).filter(_.bind(function(G){return this.isMetadataMatch(C,G.attrs.condition||{})
},this))
},isMetadataMatch:function(B,C){return _.all(C,function(E,D){return B[D]==E
})
},i18n:function(B){return this.get("i18n")[B]
}})
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.Task=Backbone.Model.extend({setState:function(A){if(this.config.getTaskActions(this.get("entity"),this.get("action")).length>0){$.ajax({type:"POST",url:MW.contextPath+"/rest/mywork/1/action/task",dataType:"json",contentType:"application/json",data:JSON.stringify({application:this.get("application"),qualifiedAction:this.get("category"),id:this.get("id"),status:A,metadata:this.get("metadata")})})
}this.save({status:A});
MW.Notifications.setStatusByGlobalId(this.get("globalId"),A)
},reorder:function(B){var A=this;
$.ajax({url:MW.contextPath+"/rest/mywork/latest/task/"+A.get("id")+"/position",type:"PUT",contentType:"application/json",data:JSON.stringify({before:B})})
},initialize:function(){this.parse(this.attributes)
},parse:function(A){if(!A.item){A.item={}
}var C=A.item,D=MW.Configurations.hasConfig(A),B=this.config=MW.Configurations.getFromNotification(A);
A.title=A.title||C.title;
A.category=A.application+"."+A.entity;
if(D){if(C){if(C.url&&C.url.indexOf("/")===0){C.url=B.get("url")+C.url
}if(C.iconUrl&&C.iconUrl.indexOf("/")===0){C.iconUrl=B.get("url")+C.iconUrl
}}}C.displayIconUrl=C.iconUrl||this.config.appendUrl(A.category);
if(this.hasDisplayIconClass(A.entity)){C.displayIconClass="mw-icon-"+A.entity
}A.readonlyTitle=this.config.getProperty(A.category,"readonlyTitle")=="true";
return A
},hasDisplayIconClass:function(A){return _.include(["blog","page","comment","inline-task"],A)
},setTitle:function(A){if(this.get("title")!=A){this.save({title:A})
}},setNotes:function(A){var B=this;
if(this.get("notes")!=A){$.ajax({url:MW.contextPath+"/rest/mywork/latest/task/"+B.get("id")+"/notes",type:"PUT",contentType:"application/json",data:JSON.stringify(A)});
this.set({notes:A})
}},isCompleted:function(){return this.get("status")==="DONE"
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var AJS=AJS||{};
var MW=MW||{};
AJS.EventQueue=AJS.EventQueue||[];
MW.Notification=Backbone.Model.extend({getPrettyTime:function(){return MW.getPrettyTime(this.get("created"))
},open:function(){this.get("parent").trigger("open",this);
window.open(this.attributes.url)
},toEventJSON:function(){return _.extend(MW.pick(this.attributes,"id","globalId","status"),MW.pick(this.get("parent").attributes,"application","entity","action"))
},executeInlineAction:function(B){var A=this.getActionData(B.actionName,B.target);
var C=B.extraData?_.extend(B.extraData,A):A;
$.ajax({type:"POST",url:MW.contextPath+"/rest/mywork/1/action",data:JSON.stringify(C),dataType:"json",success:B.success,error:B.error,contentType:"application/json"})
},getActionData:function(A,B){return{globalId:this.get("globalId"),qualifiedAction:this.get("parent").get("category")+"."+A,application:this.get("parent").get("application"),metadata:this.get("metadata"),target:B,id:this.get("id")}
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var AJS=AJS||{};
var MW=MW||{};
AJS.EventQueue=AJS.EventQueue||[];
MW.NotificationGroup=Backbone.Model.extend({initialize:function(D,B){var A=this.globalEvents=B.globalEvents;
this.config=B.config;
var C=this;
this.notifications=[];
if(A){A.on("focusClickedNotification",this.focusSelected,this);
A.on("removeDrilldownFocused",function(){if(C.get("drilldownFocused")){C.set("drilldownFocused",false)
}});
A.on("removeMainFocused",function(){if(C.get("mainFocused")){C.set("mainFocused",false)
}})
}},setState:function(A,D){var B=this;
this.set("status",A);
var C=this.notifications[0].get("id");
$.ajax({url:MW.contextPath+"/rest/mywork/latest/notification/"+C+"/status",type:"PUT",contentType:"application/json",data:JSON.stringify(A),success:function(E){D&&D();
if(!_.isObject(E)){E=JSON.parse(E)
}MW.Tasks.getByGlobalIdDeferred(E.globalId,function(F){if(F&&F.isCompleted()){F.set("globalId","",{silent:true})
}});
MW.Tasks.add(E,{at:0})
}})
},hasTask:function(){return this.get("status")==="TODO"
},createTask:function(B){this.setState("TODO",B);
var A=this.get("globalId");
MW.Notifications.setStatusByGlobalId(A,"TODO");
this.globalEvents.trigger("taskCreated");
AJS.EventQueue.push({name:"mywork.createTask",properties:{changeStatusTo:this.get("status")}})
},appendNotifications:function(A){var B=this;
A=_.map(A,function(D){var C=$.extend(D,{globalEvents:B.globalEvents,parent:B});
return new MW.Notification(C)
});
this.notifications=_.sortBy(A.concat(this.notifications),function(C){return C.get("created")*-1
});
this.updateStatus();
this.set("notifications",this.notifications);
this.set("updated",_.first(this.notifications).get("created"));
this.trigger("modified",this);
this.globalEvents.trigger("removeDrilldownFocused")
},getPrettyTime:function(){return MW.getPrettyTime(_.first(this.notifications).get("created"))
},getUnreadNotifications:function(){return _.filter(this.get("notifications"),function(A){return !A.get("read")
})
},getMetadata:function(){return this.notifications[0].get("metadata")
},resetFocused:function(A){this.removeFocus();
(A||_.first(this.notifications)).set("drilldownFocused",true,{silent:true})
},updateStatus:function(){var A=this.notifications[0].get("globalId");
if(!_.any(this.notifications,function(B){return B.get("globalId")!==A
})){this.set("globalId",this.notifications[0].get("globalId"));
this.set("status",this.notifications[0].get("status"))
}else{this.unset("globalId");
this.unset("status")
}},setStatusByGlobalId:function(B,A){if(this.get("globalId")===B){this.set("status",A);
_.each(this.notifications,function(C){C.set("status",A)
})
}else{_.each(this.notifications,function(C){if(C.get("globalId")===B){C.set("status",A)
}})
}},hasNewNotifications:function(){return !(this.notifications)[0].get("read")
},i18ns:function(A,C){var B=C>1?"s":"";
return this.i18n.apply(this,[A+B].concat(Array.prototype.slice.call(arguments,1)))
},i18n:function(A){var B={};
_.each(Array.prototype.slice.call(arguments,1),function(C,D){B[D]=C
});
return this.i18nWithMap(A,B)
},i18nWithMap:function(A,B){return this.entityI18n(this.get("action")+(A?"."+A:""),B)
},i18nHtml:function(A,F){var E=MW.escapeHTML(this.i18nWithMap(A,$.extend({user:"{user}"},F)));
if(!E){return""
}var D=this.getMetadata();
var C=this.config.getUserUrl(this.get("application"),D.username);
var B=D.user||"";
var G=C?$("<a />").attr("target","_blank").attr("href",C).text(B).wrap("<div />").parent().html():MW.escapeHTML(B);
return E.replace("{user}",G)
},entityI18n:function(A,D){var B=this.get("category")+(A?"."+A:""),C=this.config.i18n(B);
if(!C){return""
}return MW.formatString(C,_.extend({},this.getMetadata(),D))
},focused:function(){for(var A=0;
A<this.notifications.length;
A++){if(!!this.notifications[A].get("drilldownFocused")){return this.notifications[A]
}}},focusOlder:function(){var B=_.indexOf(this.notifications,this.focused());
var A=this.notifications[Math.min(this.notifications.length-1,B+1)];
if(!A.get("drilldownFocused")){this.removeFocus();
A.set("drilldownFocused",true)
}return A
},focusNewer:function(){var A=_.indexOf(this.notifications,this.focused());
if(A>0){this.removeFocus();
this.notifications[A-1].set("drilldownFocused",true)
}},focusSelected:function(B){var A=this.focused();
if(A&&A!==B){this.removeFocus();
B.set("drilldownFocused",true)
}},focusOldest:function(){this.removeFocus();
_.last(this.notifications).set("drilldownFocused",true)
},removeFocus:function(){_.each(this.notifications,function(A){A.set("drilldownFocused",false)
})
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.ConfigurationCollection=Backbone.Collection.extend({initialize:function(A){this.model=MW.Configuration;
this.url=MW.contextPath+"/rest/mywork/latest/configuration";
this.blank=new MW.Configuration({i18n:{},properties:{}})
},fetchOnce:_.once(function(){var A=$.Deferred();
this.fetch({success:function(){A.resolve()
},data:{version:MW.configurationVersion}});
return A
}),getFromNotificationRaw:function(A){return this.find(function(B){return(A.applicationLinkId||"")===B.get("appId")&&A.application==B.get("application")
})
},getFromNotification:function(A){return this.getFromNotificationRaw(A)||this.blank
},hasConfig:function(A){return typeof this.getFromNotificationRaw(A)!=="undefined"
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.TaskCollection=Backbone.Collection.extend({all:function(){return this.filter(function(A){return true
})
},initialize:function(){this.model=MW.Task;
this.url=MW.contextPath+"/rest/mywork/latest/task";
this.hasFetched=MW.Deferred()
},fetchOnce:_.once(function(A){this.fetcher(A)
}),fetcher:function(A){this.fetch(this.hasFetched.resolveOnSuccess(_.extend({add:true},A)))
},reorder:function(A,C){var B,D;
if(C){B=this.indexOf(C);
D=C.get("id")
}else{B=this.length
}this.remove(A);
this.add(A,{at:B});
A.reorder(D)
},getByIdDeferred:function(C,B){var A=this;
this.hasFetched.done(function(){B(A.get(C))
})
},getByGlobalIdCheckHost:function(C,B){var A=this;
this.getByGlobalIdDeferred(C,function(D){if(D){B(D)
}else{A.fetcher({add:false,success:function(){A.getByGlobalIdDeferred(C,B)
}})
}})
},getByGlobalIdDeferred:function(C,B){var A=this;
this.hasFetched.done(function(){B(A.getByGlobalId(C))
})
},getByGlobalId:function(A){return this.find(function(B){return(B.get("globalId")===A)
})
},todo:function(){return this.filter(function(A){return !A.isCompleted()
})
},done:function(){return this.doneBetween()
},doneOlderThan:function(A){return this.doneBetween(A)
},doneNewerThan:function(A){return this.doneBetween(null,A)
},doneBetween:function(B,A){return this.filter(function(C){var D=new Date(C.get("updated"));
var E;
if(!B&&!A){E=true
}else{if(!A){E=D<B
}else{if(!B){E=D>=A
}else{E=(D>=B&&D<A)
}}}if(E){return C.isCompleted()
}})
},parse:function(A){var B=this;
_.each(A,function(C){C.displayName=C.item.title||""
});
setTimeout(function(){B.trigger("fetch")
});
return A
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.NotificationCollection=Backbone.Collection.extend({currentLastFetchId:0,beforeId:10000000,fetcher:function(A){A=A||{};
if(!this.firstFetch&&A.updateOnly){return 
}if(!this.firstFetch){this.firstFetch=true;
return this.fetchWithLimit(this.hasFetched.resolveOnSuccess(A))
}else{return this.fetchAfterWithLimit(A)
}},fetchWithLimit:function(A){A.data=A.data||{};
A.data=_.extend(A.data,{limit:MW.MAX_RESULTS});
return this.fetch(A)
},fetchAfterWithLimit:function(A){A=_.extend(A,{add:true});
A.data=A.data||{};
A.data=_.extend(A.data,{after:this.currentLastFetchId});
return this.fetchWithLimit(A)
},initialize:function(B,A){var C=this;
this.globalEvents=A.globalEvents;
this.url=MW.contextPath+"/rest/mywork/latest/notification/nested";
this.model=MW.NotificationGroup;
this.hasFetched=MW.Deferred();
this.config=A.config
},comparator:function(D,B){var E=D.attributes.pinned,C=B.attributes.pinned;
if(E&&!C){return -1
}if(!E&&C){return 1
}var A=D.attributes.updated,F=B.attributes.updated;
if(A<F){return 1
}if(A>F){return -1
}return 0
},setLastReadId:function(A){if(A<=this.currentLastFetchId){return 
}this.currentLastFetchId=A;
$.ajax({url:MW.contextPath+"/rest/mywork/latest/notification/lastreadid",type:"PUT",contentType:"application/json",data:JSON.stringify(this.currentLastFetchId)})
},getCategory:function(A){return A.application+"."+A.entity
},geti18nKey:function(A){return this.getCategory(A)+"."+A.action
},isMyWorkAuth:function(A){return A.application=="com.atlassian.mywork.host.provider"&&A.entity=="authentication"
},prepareMyWorkAuth:function(B,A,C){var D=MW.createCallback(C);
if(D){_.each(A,function(E){E.url+=MW.appendCallback(E.url,D);
E.target="_top"
});
B.url=A[0].url;
B.target="_top"
}},parse:function(B){var D=this;
var C=[];
_.each(B,function(G){var F=D.initNotification(G);
C=C.concat(F)
});
if(!this.currentLastFetchId&&!!C.length){C[0].mainFocused=true
}var E=0;
var A=[];
_(C).each(function(H){_(H.notifications).each(function(I){if(I.id>E){E=I.id
}D.beforeId=Math.min(D.beforeId,I.id)
});
var F=D.getByAggregateKey(H.aggregateKey);
if(F){return F.appendNotifications(H.notifications)
}var G=new MW.NotificationGroup(H,{globalEvents:D.globalEvents,config:D.config.getFromNotification(H)});
G.appendNotifications(H.notifications);
A.push(G)
});
this.setLastReadId(E||this.currentLastFetchId);
return A
},initNotification:function(F){var E=this,D=F.item,C=F.notifications,G=this.config.hasConfig(D),A=this.config.getFromNotification(D),B=this.geti18nKey(D);
if(this.isBasicAction(D)){D.displayIconClass="mw-icon-"+this.getIconClassName(D)
}D.category=E.getCategory(D);
if(G){D.objectActions=A.getObjectActions(D.entity,D.action,C[0].metadata);
if(D.url&&D.url.indexOf("/")===0){D.url=A.get("url")+D.url
}if(D.iconUrl&&D.iconUrl.indexOf("/")===0){D.iconUrl=A.get("url")+D.iconUrl
}}else{if(D.url){D.objectActions=[{type:"link"}]
}else{D.objectActions=[]
}}D.notifications=[];
if(this.isMyWorkAuth(D)){this.prepareMyWorkAuth(D,C,MW.getBaseUrl())
}_.each(C,function(H){H.target=H.target||"_blank";
H.descriptionHtml=(H.description||"");
var I=_(["br","ul","p"]).chain().map(function(J){return H.descriptionHtml.indexOf("<"+J)>=0
}).any().value();
if(!I){H.descriptionHtml=H.descriptionHtml.replace(/\n/g,"<br/>")
}if(G){H.actions=A.getActions(D.entity,D.action,H.metadata);
if(H.url&&H.url.indexOf("/")===0){H.url=A.get("url")+H.url
}if(H.iconUrl&&H.iconUrl.indexOf("/")===0){H.iconUrl=A.get("url")+H.iconUrl
}if(H.actionIconUrl&&H.actionIconUrl.indexOf("/")===0){H.actionIconUrl=A.get("url")+H.actionIconUrl
}}else{if(H.url){H.actions=[{type:"link"}]
}else{H.actions=[]
}}D.notifications.push(H)
});
D.displayIconUrl=C[0].actionIconUrl||D.iconUrl||A.appendUrl(B)||A.appendUrl(D.category);
return D
},isBasicAction:function(A){if(A.application==="com.atlassian.mywork.providers.jira"){return A.action==="comment"
}else{if(A.application==="com.atlassian.mywork.providers.confluence"){return _.include(["like","comment","task.assign","mentions.user","share"],A.action)
}}return false
},getIconClassName:function(A){var B=A.action;
if(B.indexOf("task")!==-1){B="inline-task"
}if(_.include(["mentions.user","share"],B)){B=A.entity
}return B
},main:function(){return this.models
},unread:function(){return this.filter(function(A){return !A.get("read")
})
},setNotificationsAsRead:function(A,C){var B=_(A).chain().filter(function(D){return !D.get("read")
}).map(function(D){D.set("read",true,{silent:C});
return D.id
}).value();
if(B.length>0){$.ajax({url:MW.contextPath+"/rest/mywork/latest/notification/read",type:"PUT",contentType:"application/json",data:JSON.stringify(B)})
}},getByAggregateKeyDeferred:function(A,C){var B=this;
this.hasFetched.done(function(){C(B.getByAggregateKey(A))
})
},getByAggregateKey:function(A){return this.find(function(B){return B.get("aggregateKey")===A
})
},setStatusByGlobalId:function(B,A){this.each(function(C){C.setStatusByGlobalId(B,A)
})
},drilldown:function(A){return this.filter(function(B){return(B.get("aggregateKey")==A)
})
},focused:function(A){return this.find(function(B){return(B.get(A))
})
},focusMain:function(E,B){var D=this.main(B),A="removeMainFocused",C="mainFocused";
return("up"==E)?this.focusPrevious(D,C,A):this.focusNext(D,C,A)
},setFocused:function(A){this.globalEvents.trigger("removeMainFocused");
A.set("mainFocused",true)
},focusNext:function(D,B,A){var C=_.indexOf(D,this.focused(B));
if(C<(D.length-1)){if(A){this.globalEvents.trigger(A)
}else{currentView[C].set(B,false)
}D[C+1].set(B,true);
return true
}else{return false
}},focusPrevious:function(D,B,A){var C=_.indexOf(D,this.focused(B));
if(C>0){if(A){this.globalEvents.trigger(A)
}else{D[C].set(B,false)
}D[C-1].set(B,true);
return true
}return false
},countNested:function(A){var B=0;
_(A).each(function(C){B+=C.get("notifications").length
});
return B
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.TaskAbstractView=Backbone.View.extend({tagName:"li",className:"task",events:{"click .item-content":"showDetail","click .mw-task-text":"showDetail","click .mw-drilldown-arrow":"showDetail","click .mw-task-checkbox":"toggleStatus"},initialize:function(A){this.globalEvents=A.globalEvents;
this.model.bind("change",this.render,this);
A.globalEvents.bind("reordered",this.reordered,this)
},showDetail:function(){this.globalEvents.trigger("showTaskDetail",this.model)
},toggleStatus:function(){if(!this.model.isCompleted()){this.model.setState("DONE")
}else{this.model.setState("TODO")
}},reordered:function(D,C){if(this.model.cid===D){var A=this.model;
var B=MW.Tasks.getByCid(C);
MW.Tasks.reorder(A,B)
}},getDisplayText:function(){var A=this.model.get("title");
if(!A){A=""
}return A
},render:function(){var A=this.$el,D=this.getDisplayText(),C=/(^|\s)#(\w+)/g,B=D.match(C);
D=this.parseTagText(D,C);
this.renderTemplate(A,D);
this.renderTagLozenge(B);
if(this.model.isCompleted()){A.addClass("completed")
}else{A.removeClass("completed")
}return this
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.NotificationAbstractView=Backbone.View.extend({tagName:"li",className:"mw-notification-item",events:{click:"renderDrilldownClick"},initialize:function(A){var B=this;
this.globalEvents=A.globalEvents;
this.globalEvents.bind("renderDrilldown",this.renderSpecifiedDrilldown,this);
this.model.bind("change",this.render,this);
_.bindAll(this,"renderSpecifiedDrilldown")
},render:function(){var A=$(this.el);
A.toggleClass("unread",this.model.hasNewNotifications());
A.toggleClass("focused",this.model.get("mainFocused")||false);
if(this.model.get("pinned")){A.addClass("pinned")
}this.renderTemplate(A);
this.updateTitle();
return this
},renderDrilldownClick:function(){this.globalEvents.trigger("renderDrilldown",this.model,false)
},renderSpecifiedDrilldown:function(B,A,C){if(this.model.get("aggregateKey")==B.get("aggregateKey")){this.renderDrilldown(A,C)
}},renderDrilldown:function(B,D){var C=this,A=new MW.DrilldownView({model:this.model,globalEvents:C.globalEvents,reverseSlide:D});
this.model.resetFocused(_(this.model.getUnreadNotifications()).last());
this.renderDrilldownTemplate(A,B);
this.globalEvents.trigger("removeMainFocused");
this.model.set("mainFocused",true);
MW.Notifications.setNotificationsAsRead(this.model.notifications,true);
this.updateTitle();
this.$el.removeClass("unread")
},updateTitle:function(){var D=this.$el.find(".mw-notification-text");
var C=this.model.notifications,F=this.model;
var A=_.filter(C,function(G){return !G.get("read")
}).length;
var E="",B=this.model.get("title")||C[0].get("title")||"";
if(C.length===1){E=F.i18nWithMap("title",{title:B})
}else{E=F.i18ns("aggregate",C.length,B);
if(A){E=F.i18ns("aggregatenew",A,B)||E
}}D.text(E||B).attr("title",E)
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.NotificationMainAbstractView=Backbone.View.extend({className:"mw-notifications card",events:{"click .mw-show-more":"showMoreNotificationsEvent","click .mw-button-tasks":"gotoTasks"},initialize:function(A){this.globalEvents=A.globalEvents;
this.globalEvents.on("showNotificationCard",this.showCard,this);
this.globalEvents.bind("highlightNotificationAbove",this.highlightNotificationAbove,this);
this.globalEvents.bind("highlightNotificationBelow",this.highlightNotificationBelow,this);
MW.Notifications.bind("reset",this.addNotificationsToContainer,this);
MW.Notifications.bind("remove",this.addNotificationsToContainer,this);
MW.Notifications.bind("add",this.addOneNewNotification,this);
MW.Notifications.bind("modified",this.updateNotification,this);
var B=MW.KeyboardShortcuts.setupContext("notification","showNotificationCard",this);
B.addShortcut(107,this.highlightNotificationBelow);
B.addShortcut(106,this.highlightNotificationAbove);
B.addShortcut(13,this.renderFocusedDrilldown)
},cleanUp:function(){MW.Notifications.off()
},renderFocusedDrilldown:function(){MW.App.globalEvents.trigger("renderDrilldown",MW.Notifications.focused("mainFocused"))
},highlightNotificationAbove:function(){if(!MW.Notifications.focusMain("down",this.isShowingAll())){this.showMoreNotifications("keyboard")
}else{MW.App.scrollToFocusedMain()
}},highlightNotificationBelow:function(){MW.Notifications.focusMain("up",this.isShowingAll());
MW.App.scrollToFocusedMain()
},isShowingAll:function(){return !$(".mw-show-more").visible()
},render:function(){var A=$(this.el);
this.renderTemplate(A);
this.notificationList=A.find(".mw-notifications-list");
return this
},addNotificationsToContainer:function(){var C=this.notificationList;
var A=MW.Notifications.main();
C.empty();
if(A.length===0){this.renderEmptyNotificationsTemplate(C)
}else{this.addAllNotifications(A)
}var B=$(MyWork.Templates.showMore());
if(MW.Notifications.countNested(A)<MW.MAX_RESULTS){B.addClass("hidden")
}C.append(B)
},addAllNotifications:function(A){var B=this;
_.each(A,function(C){B.addOneNewNotification(C)
})
},updateNotification:function(A){setTimeout(_.bind(function(){var B=this.notificationList.find('li[aggregate-key="'+A.get("aggregateKey")+'"]');
this.addOneNotification(A,B)
},this))
},addOneNewNotification:function(B){this.$el.find(".mw-no-notifications").remove();
var A=new MW.NotificationView({model:B,globalEvents:this.globalEvents,attributes:{"aggregate-key":B.get("aggregateKey")}});
this.addOneNotification(B,A.render().$el)
},addOneNotification:function(E,D){var C=this.$el.find(".mw-notifications-list");
var B=MW.Notifications.indexOf(E);
var A=C.find(".mw-notification-item").eq(B);
if(A.length===0){C.append(D)
}else{if(A[0]!==D[0]){A.before(D)
}}},showMoreNotificationsEvent:function(A){this.showMoreNotifications("click");
A.preventDefault()
},showMoreNotifications:function(D){var C=$(".more-trigger");
var B=$('<li class="mw-loading-more" />');
C.before(B);
C.addClass("hidden").remove();
var A=_.bind(function(G,E){B.remove();
var F=_(E).reduce(function(H,I){return H+I.notifications.length
},0);
this.notificationList.append(C);
if(F===MW.MAX_RESULTS){C.removeClass("hidden")
}},this);
MW.Notifications.fetchWithLimit({add:true,data:{before:MW.Notifications.beforeId},success:A});
this.fireShowMoreAnalyticsEvent(D)
},fireShowMoreAnalyticsEvent:function(A){AJS.EventQueue.push({name:"mywork.showmore",properties:{count:MW.Notifications.main().length,from:A||"click"}})
},gotoTasks:function(){this.globalEvents.trigger("showTaskCard",1)
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.NotificationEntryAbstractView=Backbone.View.extend({className:"mw-drilldown-list",events:{click:"focusSelected","click .authorise":"authorise","click .discard":"discard"},initialize:function(A){this.globalEvents=A.globalEvents;
this.model.bind("change drilldownFocused",this.rerenderFocus,this)
},cleanup:function(){this.model.off(null,null,this)
},render:function(){var A=$(this.el);
var C=this.model;
A.toggleClass("focused",C.get("drilldownFocused")||false);
if(C.get("read")){A.addClass("collapsed")
}var B="";
B=this.createNotificationTitle(C);
this.renderTemplate(A,{notification:C.toJSON(),htmlTitle:B});
this.fixRelativeUrls();
if(MW.Notifications.isMyWorkAuth(C.get("parent").attributes)){A.find(".mw-drilldown-excerpt").append($('<button class="authorise">'+"Authorise"+'</button><button class="discard">'+"Discard"+"</button>"))
}this.ensureNoMissingImage(A.find(".mw-drilldown-avatar"),"useravatar");
this.actionMessageView=new MW.ActionMessageView({el:A.find(".message").first(),aggregateKey:C.get("parent").get("aggregateKey")});
this.addActions();
return this
},fixRelativeUrls:function(){var A=this.model.get("parent").config.getUrl(),B=A.split("/",3).join("/");
this.$el.find("a").each(function(E,C){var D=$(C).attr("href");
if(!!D&&D.indexOf("/")===0){$(C).attr("href",B+D)
}})
},rerenderFocus:function(){$(this.el).toggleClass("focused",this.model.get("drilldownFocused")||false)
},focusSelected:function(){this.globalEvents.trigger("focusClickedNotification",this.model)
},htmlTitle:function(){var B=this.model.get("parent").entityI18n("this")||"this",A=$.extend({title:B},this.model.get("metadata"));
return this.model.get("parent").i18nHtml("title",A)||MW.escapeHTML(this.model.get("title"))
},ensureNoMissingImage:function(B,A){B.error(function(){var C=$("<span />");
C.addClass(A);
B.after(C);
B.remove()
})
},addActions:function(){var B=$(this.el),F=this.model,E=B.find(".mw-drilldown-actions ul"),A=B.find(".action-form"),C=F.get("actions").reverse();
var D=this;
$.each(C,function(H,I){if(!MW.Configurations.getFromNotification(F.attributes)){return 
}var G=new MW.ActionView({model:I,url:F.get("url"),itemUrl:F.get("parent").get("url"),actionFormElement:A,notification:F,actions:C,target:"notification",actionMessageView:D.actionMessageView,globalEvents:D.globalEvents});
E.prepend(G.render().el)
});
C.reverse();
this.addTime(E,F.getPrettyTime())
},authorise:function(){window.top.location.href=this.model.get("url")
},discard:function(){var A=this.model;
A.executeInlineAction({actionName:"dismissAuth",target:"notification",success:function(B){if(B.successful){MW.Tasks.remove(MW.Tasks.getByGlobalId(A.get("globalId")));
MW.Notifications.remove(A.get("parent"));
MW.App.gotoMain()
}else{var C="Unknown error";
this.actionMessageView.showErrorMessage(C)
}},error:function(C,D,B){if(C.status===401){this.actionMessageView.showLoginErrorMessage("You are not logged in. Please \u003ca href=\"#\">log in\u003c\/a>.")
}else{this.actionMessageView.showErrorMessage(B)
}}})
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.DrilldownAbstractView=Backbone.View.extend({className:"mw-notification-drilldown card",events:{"click .mw-drilldown-top":"gotoMain","click .mw-header .nav button":"gotoMain"},initialize:function(A){this.globalEvents=A.globalEvents;
this.reverseSlide=A.reverseSlide;
this.globalEvents.bind("showNotificationDrilldownCard",this.showCard,this);
this.globalEvents.bind("movetoDrilldownAbove",this.movetoDrilldownAbove,this);
this.globalEvents.bind("movetoDrilldownBelow",this.movetoDrilldownBelow,this);
this.globalEvents.bind("cleanupNestedCard",this.removeElementAndBindings,this);
var B=MW.KeyboardShortcuts.setupContext("notificationDrilldown-"+this.model.get("aggregateKey"),"showNotificationDrilldownCard",this);
B.addShortcut(13,this.openDrilldownObject);
B.addShortcut(106,this.gotoAboveNotification);
B.addShortcut(107,this.gotoBelowNotification);
B.addShortcut(110,this.movetoDrilldownBelow);
B.addShortcut(112,this.movetoDrilldownAbove);
B.addShortcut(115,this.createTaskFromDrilldown);
B.addShortcut(117,this.gotoMain);
this.kb=B
},gotoAboveNotification:function(){this.globalEvents.trigger("highlightNotificationAbove");
this.renderDrilldown(false)
},gotoBelowNotification:function(){this.globalEvents.trigger("highlightNotificationBelow");
this.renderDrilldown(true)
},renderDrilldown:function(B){var A=MW.Notifications.focused("mainFocused");
if(this.model!=A){this.globalEvents.trigger("renderDrilldown",A,false,B)
}},createTaskFromDrilldown:function(){this.headerView.createTask()
},movetoDrilldownAbove:function(){var A=this.model.focused();
var B=this.model.focusOlder();
if(A===B){MW.App.scrollToDrilldownHeader()
}else{MW.App.scrollToFocusedDrilldown();
if(_(this.collapsedGroup).contains(B)){this.showOlder(function(){MW.App.scrollToFocusedDrilldown()
})
}}},movetoDrilldownBelow:function(){this.model.focusNewer();
MW.App.scrollToFocusedDrilldown()
},openDrilldownObject:function(){var A=this.model.focused().get("url");
window.open(A)
},render:function(){var K=$(this.el),F=this,B=this.model,I=this.model.notifications;
this.renderTemplate(K);
var E=K.find(".mw-drilldown-header"),C=K.find(".mw-drilldown-body");
this.collapsedGroup=_.filter(I,function(L){return L.get("read")
});
var G=this.collapsedGroup.length;
var H=I.length-G;
this.headerView=new MW.HeaderView({el:E,model:B,numUpdates:H,globalEvents:this.globalEvents});
this.headerView.render();
this.entryViews=[];
_.each(I,function(M){var L=new MW.NotificationEntryView({model:M,globalEvents:F.globalEvents,attributes:{"notification-id":M.get("id")}});
C.prepend(L.render().el);
F.entryViews.push(L)
});
var J=K.find(".mw-drilldown-list.collapsed");
if(G===I.length){G-=1;
J.last().removeClass("collapsed");
J=K.find(".mw-drilldown-list.collapsed")
}J.wrapAll("<div class='collapsed-group'/>");
if(G){C.prepend("<div class='mw-collapsed-header'></div>");
var D=C.find(".mw-collapsed-header");
D.click(function(L){setTimeout(function(){F.showOlder(function(){F.model.focusOldest()
})
},0);
L.preventDefault()
});
var A=this.model.i18ns("older",G);
D.html("<a href='#'>"+A+"</a>")
}return this
},showOlder:function(B){var A=this.$el.find(".mw-collapsed-header");
if(A.length===0){return 
}this.showCollapsedGroup($(".collapsed-group"),B);
A.remove()
},gotoMain:function(){this.globalEvents.trigger("showNotificationCard")
},removeElementAndBindings:function(){if(!this.$el.hasClass("showing")){this.globalEvents.off(null,null,this);
this.kb.cleanup();
this.headerView.removeBindings();
_.each(this.entryViews,function(A){A.cleanup()
});
this.undelegateEvents();
this.remove()
}},showCard:function(A){if(!this.$el.hasClass("showing")){MW.Router.navigateToNotification(this.model.get("aggregateKey"));
if(this.reverseSlide){this.showCardAnimationReverseSlide(A)
}else{this.showCardAnimation(A)
}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.TaskDetailAbstractView=Backbone.View.extend({tagName:"div",className:"mw-taskdetail card",events:{"click .mw-drilldown-top":"gotoTasks","click .mw-taskdetail-save":"gotoTasks","click .mw-header .nav button":"gotoTasks","keypress .mw-taskdetail-notes-textarea":"handleNotesKeypress","keypress .mw-taskdetail-title":"handleTitleKeypress","click .mw-taskdetail-notes":"editNotes","mousedown .mw-taskdetail-notes":"mouseNotes","focus .mw-taskdetail-notes":"focusNotes","focusout .mw-taskdetail-notes-textarea":"saveNotes","focusout .mw-taskdetail-title":"saveTitle","click .mw-taskdetail-delete":"deleteTask","click .mw-task-checkbox":"toggleCompleted"},initialize:function(A){this.globalEvents=A.globalEvents;
this.globalEvents.bind("deleteTask",this.removeTask,this);
this.globalEvents.bind("cleanupNestedCard",this.removeElementAndBindings,this);
MW.KeyboardShortcuts.changeContext("taskDetail")
},toggleCompleted:function(){if(this.completedCheckbox.hasClass("completed")){this.model.setState("TODO")
}else{this.model.setState("DONE")
}this.renderCompleteState()
},showCard:function(A){MW.Router.navigateToTask(this.model.id);
this.showCardAnimation(A)
},handleNotesKeypress:function(A){A.stopPropagation();
this.renderTags()
},handleTitleKeypress:function(A){this.renderTags();
if(A.keyCode==13){this.saveTitle();
A.preventDefault()
}},mouseNotes:function(){this.mouse=true
},focusNotes:function(){if(!this.mouse){this.editNotes()
}},editNotes:function(){this.mouse=false;
this.notesTextareaDiv.hide();
this.relatedContent.addClass("selected");
var B=this.notesTextarea.val().length;
var A=this.notesTextarea.show().focus()[0];
if(A.setSelectionRange){A.setSelectionRange(B,B)
}},saveNotes:function(){var A=this.notesTextarea.val();
this.updateModel(function(){this.model.setNotes(A);
this.updateNotes(A);
this.notesTextarea.hide();
this.notesTextareaDiv.show();
this.relatedContent.removeClass("selected")
})
},updateNotes:function(B){var A=this.convertLinks($("<pre />").text(B).html());
if(!A){this.notesTextareaDiv.addClass("placeholder").text("Add some notes")
}else{this.notesTextareaDiv.removeClass("placeholder").html(A)
}this.notesTextarea.val(B)
},convertLinks:function(C){var B=/(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig;
var A=String.fromCharCode(160);
return C.replace(/ {2}/g,A+A).replace(/\n/g,"<br />").replace(B,"<a href='$1' target='_blank'>$1</a>")
},saveTitle:function(){this.updateModel(function(){this.model.setTitle(this.getTitleText())
})
},updateModel:function(A){_.bind(A,this)()
},deleteTask:function(A){A.preventDefault();
this.showDeleteConfirmation()
},removeTask:function(){this.model.destroy();
this.globalEvents.trigger("showTaskCardBack")
},getTitleText:function(){return this.titleInput.val()||this.titleInput.text()
},getNotesText:function(){return this.model.get("notes")||""
},gotoTasks:function(){this.saveTitle();
this.saveNotes();
this.globalEvents.trigger("showTaskCardBack")
},removeElementAndBindings:function(){if(!this.$el.hasClass("showing")){this.model.off(null,null,this);
this.globalEvents.off(null,null,this);
this.undelegateEvents();
this.remove()
}},render:function(){var B=$(this.el);
var C=B.children().length===0;
if(C){this.renderTemplate(B)
}this.titleInput=B.find(".mw-taskdetail-title");
this.notesTextarea=B.find(".mw-taskdetail-notes-textarea");
this.notesTextareaDiv=B.find(".mw-taskdetail-notes");
this.relatedContent=B.find(".mw-related-content");
var A=this.getNotesText();
this.updateNotes(A);
if(C){this.notesTextarea.hide()
}this.completedCheckbox=B.find(".mw-task-checkbox");
this.container=B.find(".mw-taskdetail-container");
this.renderTagPlaceholder();
this.renderCompleteState();
if(this.model.get("readonlyTitle")){this.titleInput.attr("title","Open the page to edit the task")
}this.relatedContent.attr("title","Open related link");
return this
},renderCompleteState:function(){var A=this.model.isCompleted();
this.completedCheckbox.toggleClass("completed",A);
this.container.toggleClass("completed",A)
},renderTagPlaceholder:function(){if(!!AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("nat.tags")){$(".mw-taskdetail-container").append(MyWork.Templates.taskDetailTags({task:this.model.attributes}));
this.renderTags()
}},renderTags:function(){if(!!AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("nat.tags")){var E=this.getTitleText(),C=this.notesTextarea.val(),F=E+" "+C,D=/(^|\s)#(\w+)/g,B=F.match(D),A=$(this.el).find(".mw-taskdetail-taglist");
A.empty();
if(!B){A.addClass("empty");
A.text("Organise your tasks by adding a #tag")
}else{A.removeClass("empty");
_.each(B,function(G){A.append(MyWork.Templates.categoryLabel({text:G.split("#")[1]}))
})
}}},isInlineTask:function(){return this.model.get("application")==="com.atlassian.confluence"&&this.model.get("entity")==="inline-task"
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.TaskMainAbstractView=Backbone.View.extend({tagName:"div",className:"mw-tasks card",completed:false,events:{"keypress #new-personal-task":"createOnEnter","keyup #new-personal-task":"disableAddTask","input #new-personal-task":"disableAddTask","click .add-task":"addPersonalTask","click .view-completed":"toggleCompleted","click .mw-button-notifications":"gotoNotifications","click .view-completed-mobile":"showCompleted","click .view-uncompleted-mobile":"showUncompleted","click .add-task-mobile":"showAddTaskOverlay"},gotoNotifications:function(){this.globalEvents.trigger("showNotificationCard",1)
},initialize:function(A){this.globalEvents=A.globalEvents;
this.globalEvents.bind("addPersonalTask",this.addPersonalTask,this);
this.globalEvents.bind("showTaskDetail",this.showTaskDetail,this);
this.globalEvents.bind("showTaskByGlobalId",this.showTaskByGlobalId,this);
this.globalEvents.bind("showTaskCard",this.showTaskCard,this);
this.globalEvents.bind("showTaskCardBack",this.showCard,this);
MW.Tasks.bind("fetch",this.loaded,this);
MW.KeyboardShortcuts.setupContext("task","showTaskCard",this);
$(document).bind("keydown",_.bind(this.focusInput,this))
},cleanUp:function(){MW.Tasks.off()
},focusInput:function(){this.input.focus()
},showTaskByGlobalId:function(A){this.showTaskDetail(MW.Tasks.getByGlobalId(A))
},showTaskDetail:function(A,B){var C=new MW.TaskDetailView({model:A,globalEvents:this.globalEvents});
this.renderShowTaskDetailView(C,B);
C.showCard()
},showTaskCard:function(A){this.completed=false;
this.showCard(A)
},addTodo:function(){if(!this.taskList){return 
}var B=this;
this.taskList.empty();
var A=MW.Tasks.todo();
if(A.length===0){this.renderEmptyTaskTemplate(this.taskList)
}else{_.each(A,function(C){B.addOneTask(C)
});
this.makeTasksSortable()
}if(this.viewCompleted){this.viewCompleted.toggle(MW.Tasks.done().length!==0)
}},render:function(){var A=$(this.el);
this.renderTemplate(A);
this.input=A.find("#new-personal-task");
this.viewCompleted=A.find(".view-completed");
this.addTask=A.find(".add-task");
this.taskList=A.find(".mw-tasks-list");
this.disableAddTask();
return this
},showLoading:function(){this.taskList.empty();
var A=new ConfluenceMobile.Notification(this.taskList);
A.showLoading()
},loaded:function(){if(this.completed){this.addDone()
}else{this.addTodo()
}},addOneTask:function(C,B){$(".mw-no-tasks").hide();
var A=new MW.TaskView({model:C,globalEvents:this.globalEvents,attributes:{"task-cid":C.cid}});
if(B){this.taskList.prepend(A.render().el)
}else{this.taskList.append(A.render().el)
}},createOnEnter:function(A){if(A.which!=13){return 
}this.addPersonalTask()
},addPersonalTask:function(){var B=this.input.val();
if(!$.trim(B)){return 
}if(this.completed){this.showUncompleted()
}var A=this.createPersonalTask(B);
A.set("displayName",B);
this.taskList.scrollTop(0);
this.input.val("");
this.disableAddTask()
},createPersonalTask:function(B){var A=MW.Tasks.create({application:"com.atlassian.mywork.host.provider",entity:"notes",status:"TODO",title:B},{at:0});
this.addOneTask(A,true);
return A
},show:function(){if(MW.Tasks.hasFetched.isResolved()){this.completed?this.showCompleted():this.showUncompleted()
}},toggleCompleted:function(){!this.completed?this.showCompleted():this.showUncompleted()
},addDone:function(){this.taskList.empty();
if(MW.Tasks.done().length===0){this.renderEmptyCompletedTemplate(this.taskList)
}else{var B=new Date();
var A=new Date(B.getFullYear(),B.getMonth(),B.getDate());
var C=new Date(B.getFullYear(),B.getMonth(),B.getDate()-1);
this.addListWithCategory(MW.Tasks.doneNewerThan(A),"Today");
this.addListWithCategory(MW.Tasks.doneBetween(C,A),"Yesterday");
this.addListWithCategory(MW.Tasks.doneOlderThan(C),"Older")
}},addListWithCategory:function(C,B){var A=this;
if(!!C.length){this.taskList.append(MyWork.Templates.completedCategory({category:B}));
_.each(C,function(D){A.addOneTask(D)
})
}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.ActionMessageView=Backbone.View.extend({showErrorMessage:function(A){if(!A){A="Oh no! Something\'s gone wrong. Check your network connection and try again."
}this.$el.text(A)
},showLoginErrorMessage:function(A){this.$el.html(A);
this.$("a").click(function(B){B.preventDefault();
if(MW.App.parseView()==="mobile"){ConfluenceMobile.loadLoginScreen(true)
}else{location.reload()
}})
},showOAuthErrorMessage:function(C,B){var A=B,D=MW.createCallback(MW.getBaseUrl(),this.options.aggregateKey);
if(D){A+=MW.appendCallback(A,D)
}this.$el.html(C);
this.$("a").attr("href",A)
},clearMessage:function(){this.$el.empty()
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.ActionAbstractView=Backbone.View.extend({tagName:"li",className:"action-item",disabled:false,events:function(){return{click:"clickEvent"}
},disableFormElements:function(){var A=this.options.actionFormElement;
A.find("input").addClass("disabled").attr("disabled","disabled")
},enableFormElements:function(){var A=this.options.actionFormElement;
A.find("input").removeClass("disabled").removeAttr("disabled")
},showSuccessMessage:function(D){var A=this.model.attrs||{};
if(A.alternateAction){var C=this.model;
this.model=A.getAlternateAction();
this.options.actions[_.indexOf(this.options.actions,C)]=this.model;
this.render();
return 
}if(A.allowOnceOnly){this.disableActionElement()
}var B=this.actionI18n("alternateDisplayName");
if(B){this.toggleDisplayName(this.actionI18n("displayName"),B,A.responseLink)
}if(A.responseLink){this.$el.unbind().find("a").attr("target","_blank").attr("href",D)
}},makeAjaxRequest:function(A,E,C){var G=this,I=this.model.attrs||{},H=this.options.actionFormElement,B=G.options.actionMessageView;
this.disableActionElement();
H.find(".aui-button-primary").addClass("disabled");
H.find(".mw-loading").addClass("show");
var F=this.addDots();
var D=function(){F();
G.enableActionElement();
H.find(".aui-button-primary").removeClass("disabled");
H.find(".mw-loading").removeClass("show")
};
var J=function(K){D();
B.clearMessage();
H.parent().removeClass("expanded");
A?A(K):G.showSuccessMessage(K)
};
this.options.notification.executeInlineAction({actionName:this.model.id,target:this.options.target,extraData:C,success:function(K){if(K.successful){if(!I.instant){J()
}}else{D();
var L=G.i18n(K.messageKey)||K.message||"Unknown error";
if(E){E(L,null,K.authUrl)
}else{if(K.authUrl){B.showOAuthErrorMessage("Authorisation failed. Please \u003ca>authorise\u003c\/a>.",K.authUrl)
}else{B.showErrorMessage(L)
}}}},error:function(L,M,K){D();
if(E){E(K,L)
}else{if(L.status===401){B.showLoginErrorMessage("You are not logged in. Please \u003ca href=\"#\">log in\u003c\/a>.")
}else{B.showErrorMessage(K)
}}}});
if(I.instant){J()
}},addDots:function(){var A=$(this.el).find("a");
var B=A.text();
A.text(B+"...");
return function(){A.text(B)
}
},clickEvent:function(D){var B=this.model.type,C=this;
if(this.disabled){return false
}if(B!="link"){D.preventDefault()
}if(B==="taskLink"){var A=this.options.notification.get("globalId");
MW.Tasks.getByGlobalIdCheckHost(A,function(F){if(F){C.options.globalEvents.trigger("showTaskByGlobalId",A)
}else{C.options.actionMessageView.showErrorMessage("The task does not exist");
C.setDisabled(true)
}})
}if(B==="ajax"){this.makeAjaxRequest(null,null,null)
}if(B==="form"){var E=this.options.actionFormElement;
E.find("form").remove();
E.append(this.renderForm());
E.parent().addClass("expanded");
this.showForm(E)
}},toggleDisplayName:function(A,E,D){var C;
if(!!D){C=$(this.el).find("a")
}else{C=$(this.el);
C.unbind()
}var B=(C.text()===A)?E:A;
C.text(B)
},disableActionElement:function(){this.setDisabled(true)
},enableActionElement:function(){this.setDisabled(false)
},setDisabled:function(A){this.disabled=A;
$(this.el).toggleClass("disabled",A)
},removeForm:function(){var A=this.options.actionFormElement;
if(A.visible()){A.find("textarea").blur();
A.remove();
this.enableActionElement()
}},doFormBindings:function(A){var B=this;
A.keypress(function(D){D.stopPropagation()
});
var C=function(){var F=A.find(".aui-button-primary");
var D=A.find("textarea");
var E=D.val().length>0;
F.toggleClass("disabled",!E);
if(E){F.removeAttr("disabled")
}else{F.attr("disabled","disabled")
}};
A.keyup(C);
C();
A.find(".inline-cancel").click(function(D){D.preventDefault();
B.removeForm()
});
A.submit(function(E){B.disableFormElements();
var D=A.serializeObject();
A.find("textarea").blur().attr("disabled","disabled");
B.makeAjaxRequest(function(F){B.showSuccessMessage(F);
B.removeForm()
},function(H,I,F){var G=B.options.actionMessageView;
A.find("textarea").removeAttr("disabled");
if(I&&I.status===401){G.showLoginErrorMessage("You are not logged in. You may want to copy any changes you have made and \u003ca href=\"#\">log in\u003c\/a> again.")
}else{if(F){G.showOAuthErrorMessage("Authorisation failed. You may want to copy any changes you have made and \u003ca>authorise\u003c\/a>.",F)
}else{G.showErrorMessage(H)
}}B.enableFormElements()
},D);
return false
})
},renderForm:function(){this.disableActionElement();
var C=this,B=this.getFormContainerTemplate(),A=$(B);
_.each(this.options.model.data,function(F){var E;
if(F.type==="textarea"){E=C.getFormTextareaTemplate()
}A.append(E)
});
var D=this.getFormActionButtonsTemplate({submitLabel:this.actionI18n("submitLabel")});
A.append(D);
this.doFormBindings(A);
return A
},render:function(){var E=$(this.el);
E.empty();
if(this.model.type==="link"){var H=this.options.notification;
var G=H.toJSON();
var C=this.options.url;
if(this.model.url){var B=MW.Configurations.getFromNotification(H.attributes);
var F=B?B.get("url"):MW.contextPath;
C=F+MW.formatString(this.model.url,$.extend({globalId:G.globalId},G.metadata))
}var D=this.actionI18n("displayName")||"Open";
var A=$(MyWork.Templates.openLinkAction({notification:G,url:C,displayName:D}));
A.mouseup(function(){H.get("parent").trigger("open",H)
});
E.append(A)
}else{E.append($("<a href='#'>"+this.actionI18n("displayName")+"</a>"))
}if(this.actionI18n("title")){E.attr("title",this.actionI18n("title"))
}return this
},actionI18n:function(A){var B=this.model.id;
return this.i18n("action."+B+"."+A)
},i18n:function(A){var D=this.options.notification.toJSON(),C=D.parent.config,B=D.parent.get("application");
return C.i18n(B+"."+A)
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.HeaderAbstractView=Backbone.View.extend({events:{"click .mw-task":"selectTask","mouseover .mw-task":"showTooltip"},initialize:function(A){this.globalEvents=A.globalEvents
},removeBindings:function(){this.$el.unbind();
this.model.off(null,null,this)
},render:function(){var E=$(this.options.el),D=this.options.model,C=this.htmlTitle();
if(!C){return 
}var B=D.has("globalId")&&!(D.get("application")==="com.atlassian.mywork.providers.confluence"&&D.get("action").indexOf("task.")===0)&&!D.get("pinned");
var A=$.extend({},D.attributes,{title:C,newActionsText:this.newActionsText(),renderTask:B,hasTask:D.hasTask()});
this.renderTemplate(E,A,D);
this.addActions()
},htmlTitle:function(){var A=this.model.notifications,B=A[0].get("metadata");
return this.model.i18nHtml("itemtitle",B)||MW.escapeHTML(this.model.get("title"))
},newActionsText:function(){var C=this.options.model,E=this.options.numUpdates,F=C.entityI18n("this")||"this",A=C.entityI18n("entity")||C.get("entity"),B=F+" "+A,D=C.i18ns("aggregatenew",E,B);
if(E===0){D=C.i18ns("aggregate",C.notifications.length,B)
}return D
},addActions:function(){var G=this,E=this.model,C=this.model.notifications[0],D=$(this.options.el);
var B=$(".drilldown-header-title > .mw-drilldown-actions"),A=D.find(".mw-drilldown-actions > ul");
var F=new MW.ActionMessageView({el:D.find(".message").first(),aggregateKey:E.get("aggregateKey")});
_.each(E.get("objectActions"),function(I){var H=new MW.ActionView({model:I,url:E.get("url"),itemUrl:E.get("url"),actionFormElement:D.find(".action-form"),notification:C,actions:E.get("objectActions"),actionMessageView:F,target:"object",actionElement:B,globalEvents:G.globalEvents});
A.append(H.render().el)
})
},selectTask:function(){if(this.model.hasTask()){this.globalEvents.trigger("showTaskByGlobalId",this.model.get("globalId"))
}else{this.createTask()
}},_getRelatedTaskButton:function(){return $(this.options.el).find(".drilldown-task-container .mw-task")
},createTask:function(){this._getRelatedTaskButton().addClass("loading");
this.model.createTask(_.bind(this.taskCreated,this))
},taskCreated:function(){this._getRelatedTaskButton().removeClass("loading").addClass("on")
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
$(function(){MW.Router=Backbone.Router.extend({initialize:function(A){this.globalEvents=A.globalEvents
},routes:{notification:"notifications",task:"tasks","notification/:id":"notification","task/:id":"task","*path":"initial"},navigateToMain:function(A){A=this.setDefaultOptions(A);
this.navigate("notification",A)
},navigateToNotification:function(B,A){A=this.setDefaultOptions(A);
this.navigate("notification/"+B,A)
},navigateToTasks:function(A){A=this.setDefaultOptions(A);
this.navigate("task",A)
},navigateToTask:function(B,A){A=this.setDefaultOptions(A);
this.navigate("task/"+B,A)
},setDefaultOptions:function(A){A=A||{};
_.extend(A,{replace:$(".miniview-page").hasClass("iframe")});
return A
},initial:function(){MW.App.gotoInitial()
},notifications:function(){MW.App.gotoMain()
},tasks:function(){MW.App.gotoTasks()
},notification:function(B){var A=this;
MW.Notifications.getByAggregateKeyDeferred(B,function(C){if(_.isEmpty(C)){return A.notifications()
}MW.Notifications.setFocused(C);
A.globalEvents.trigger("renderDrilldown",C)
})
},taskByGlobalId:function(A){MW.Tasks.getByGlobalIdDeferred(A,_.bind(this.task,this))
},task:function(A){MW.Tasks.getByIdDeferred(A,_.bind(function(B){if(!B){return this.tasks()
}MW.App.completed=!B.isCompleted();
this.globalEvents.trigger("showTaskDetail",B)
},this))
}})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.NotificationMainView=MW.NotificationMainAbstractView.extend({renderEmptyNotificationsTemplate:function(A){A.html(MyWork.Templates.noNotifications({heading:"Hi!",subheading:"You don\'t have any notifications yet.",body:new soydata.SanitizedHtml("\u003cp>New notifications will appear here when other users:\u003c\/p>\u003cul>\u003cli>Share content with you\u003c\/li>\u003cli>Mention you within a comment, page or blog\u003c\/li>\u003cli>Reply to or like any content you have created\u003c\/li>\u003c\/ul>")}))
},renderTemplate:function(A){A.html(MyWork.Templates.mainNotification());
A.find(".mw-button-notifications").toggleClass("on",true)
},showCard:function(A){MW.Router.navigateToMain();
MW.Cookie.save(false);
MW.CardAnimation.showCard($(this.el),MW.Slide.FROM_LEFT,A,function(){MW.App.scrollToFocusedMain()
})
}});
MW.NotificationView=MW.NotificationAbstractView.extend({initialize:function(){MW.NotificationView.__super__.initialize.apply(this,arguments);
this.globalEvents.on("showNotificationCard",this.updateTime,this);
this.globalEvents.on("reopenMiniview",this.updateTime,this);
this.globalEvents.on("reopenMiniview",this.updateSeen,this)
},updateTime:function(){this.$el.find(".mw-notification-time").text(this.model.getPrettyTime())
},updateSeen:function(){MW.Notifications.setNotificationsAsRead(this.model.notifications,true);
this.updateTitle();
this.$el.removeClass("unread")
},renderTemplate:function(A){A.html(MyWork.Templates.notificationView({notification:this.model.toJSON(),prettyTime:this.model.getPrettyTime()}))
},renderDrilldownTemplate:function(A){$("#mw-container").append(A.render().el);
this.globalEvents.trigger("showNotificationDrilldownCard")
}});
MW.NotificationEntryView=MW.NotificationEntryAbstractView.extend({createNotificationTitle:function(){return this.htmlTitle()
},addTime:function(A,B){A.prepend($("<li />").text(B))
},renderTemplate:function(A,B){A.html(MyWork.Templates.drilldownEntry(B))
}});
MW.HeaderView=MW.HeaderAbstractView.extend({renderTemplate:function(A,B,C){A.html(MyWork.Templates.drilldownHeader(B));
if(C.get("action")&&C.get("action").indexOf("task.")===0){A.find(".drilldown-star-container").hide()
}},showTooltip:function(){if(!this.model.hasTask()){var B={live:true,gravity:"ne",title:"data-tooltip"};
var A=this.$el.find(".mw-task");
A.attr("data-tooltip","Add this to your tasks");
A.tooltip(B)
}}});
MW.DrilldownView=MW.DrilldownAbstractView.extend({renderTemplate:function(A){A.html(MyWork.Templates.notificationDrilldown())
},showCardAnimation:function(A){MW.CardAnimation.showCard($(this.el),MW.Slide.FROM_RIGHT,A)
},showCardAnimationReverseSlide:function(A){MW.CardAnimation.showCard($(this.el),MW.Slide.FROM_LEFT,A)
},showCollapsedGroup:function(A,B){A.slideToggle(300,function(){A.focus();
if(B){B()
}})
}});
MW.ActionView=MW.ActionAbstractView.extend({showForm:function(A){A.slideDown(100,function(){MW.App.scrollToFocusedElement(".mw-drilldown-container",".mw-notification-drilldown",A.parents(".mw-drilldown-list"));
A.find("textarea").first().each(function(C,B){if(B.setSelectionRange){B.focus();
B.setSelectionRange(0,0)
}})
})
},renderForm:function(){var A=MW.ActionAbstractView.prototype.renderForm.apply(this,arguments);
MW.makeTextAreaExpandable(A,function(){MW.App.scrollToFocusedElement(".mw-drilldown-container",".mw-notification-drilldown",$(".inline-action-submit"))
});
return A
},getFormContainerTemplate:function(){return MyWork.Templates.inlineActionForm()
},getFormTextareaTemplate:function(){return MyWork.Templates.inlineActionTextarea()
},getFormActionButtonsTemplate:function(A){return MyWork.Templates.inlineActionSubmit(A)
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.TaskMainView=MW.TaskMainAbstractView.extend({makeTasksSortable:function(){var A=this;
$(".mw-tasks ul").sortable({disabled:false,handle:".entire-task",axis:"y",tolerance:"pointer",opacity:0.85,placeholder:"sortable-placeholder",update:function(C,E){var D=E.item.attr("task-cid");
var B=E.item.next().attr("task-cid");
A.globalEvents.trigger("reordered",D,B)
}})
},renderShowTaskDetailView:function(A){$("#mw-container").append(A.render().el)
},renderEmptyTaskTemplate:function(A){A.html(MyWork.Templates.noTasks({noTaskItem:"You don\'t have any personal tasks yet.",noTaskDescription:"Tasks are added to this list when:",noTask1:"You create new personal tasks using the field above",noTask2:"You mark a notification as a task you need to follow-up on",noTask3:"Other users assign a task to you from a page"}))
},renderEmptyCompletedTemplate:function(A){},renderTemplate:function(A){A.append(MyWork.Templates.mainTasks({addTaskPlaceholder:"Add personal task",addTaskButtonText:"Add task"}));
A.find(".mw-button-tasks").toggleClass("on",true)
},showUncompleted:function(){this.addTodo();
this.viewCompleted.text("View completed");
$(".mw-tasks").toggleClass("completed",false);
this.completed=false
},showCompleted:function(){this.addDone();
$(".mw-tasks ul").sortable("disable");
$(".mw-tasks .handle").hide();
this.viewCompleted.text("Hide completed");
$(".mw-tasks").toggleClass("completed",true);
this.completed=true
},showAddTaskOverlay:function(){},disableAddTask:function(){var A=$.trim(this.input.val()).length===0;
this.addTask.prop("disabled",A);
this.addTask.toggleClass("disabled",A)
},showCard:function(A){MW.Router.navigateToTasks();
MW.Cookie.save(true);
this.show();
MW.CardAnimation.showCard($(this.el),MW.Slide.FROM_LEFT,A)
}});
MW.TaskView=MW.TaskAbstractView.extend({renderTemplate:function(A,B){A.html(MyWork.Templates.personalTask({task:this.model.toJSON(),text:B}))
},parseTagText:function(C,B){var A=C;
if(AJS.DarkFeatures.isEnabled("nat.tags")){A=C.replace(B," ")
}return A
},renderTagLozenge:function(A){if(AJS.DarkFeatures.isEnabled("nat.tags")){_.each(A,function(B){this.$el.find(".item-content").append(MyWork.Templates.categoryLabel({text:B.split("#")[1]}))
})
}}});
MW.TaskDetailView=MW.TaskDetailAbstractView.extend({showCardAnimation:function(A){MW.CardAnimation.showCard($(this.el),MW.Slide.FROM_RIGHT,A)
},showDeleteConfirmation:function(){var B="Deleting the task cannot be undone.\nAre you sure?";
if(this.isInlineTask()){B="Deleting the task cannot be undone. Are you sure?\n\nThe task will be deleted from your list but not from the linked page"
}var A=confirm(B);
if(A){this.removeTask()
}},renderTemplate:function(A){var B=MyWork.Templates.personalTaskDetail({backToTasksText:"Back to tasks",task:this.model.attributes});
A.html(B);
if($.browser.msie){A.find(".mw-taskdetail-title").width("450px")
}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
AJS.EventQueue=AJS.EventQueue||[];
MW.MAX_RESULTS=parseInt(MW.getParameterByNameFromHash("max")||"0",10)||30;
$(function(){var A=_.extend({},Backbone.Events);
MW.globalEvents=A;
MW.contextPath=$("meta[name=context-path]").attr("content");
MW.configurationVersion=$("meta[name='mw-configuration-version']").attr("content");
MW.setRequestTime($("meta[name='mw-request-time']").attr("content"));
MW.Configurations=new MW.ConfigurationCollection();
MW.Notifications=new MW.NotificationCollection([],{globalEvents:A,config:MW.Configurations});
MW.Tasks=new MW.TaskCollection([]);
MW.KeyboardShortcuts=new MW.KeyboardShortcuts(A);
MW.CardAnimation=new MW.CardTransitions({globalEvents:A});
MW.AppView=Backbone.View.extend({el:$("#mw-container"),count:0,render:function(){setTimeout(function(){var C=MW.Tasks.todo().length;
$(".mw-count").text(C).toggleClass("zero",C===0)
})
},initialize:function(C){var D=this;
this.globalEvents=C.globalEvents;
this.renderNotificationMain();
this.renderTaskMain();
MW.Notifications.bind("all",this.render,this);
MW.Notifications.bind("open",this.openNotification,this);
MW.Tasks.bind("all",this.render,this);
MW.onJsonMessage(function(F){if(F.unread){E(F.unread)
}});
function E(F){MW.Notifications.fetcher({success:function(){AJS.EventQueue.push({name:"notificationtabopened",properties:{tasks:MW.Tasks.length,unread:F,loadedBy:MW.App.parseView()}});
D.gotoInitial(F)
}});
MW.Tasks.fetchOnce();
D.globalEvents.trigger("reopenMiniview")
}if(MW.parentConfig.preload){$(window.top).focus()
}MW.Configurations.fetchOnce().done(function(){if(MW.parentConfig.preload){return 
}MW.Notifications.fetcher();
MW.Tasks.fetchOnce()
});
MW.Tasks.bind("destroy",function(F){MW.Notifications.setStatusByGlobalId(F.get("globalId"),"")
})
},renderNotificationMain:function(){var C=new MW.NotificationMainView({globalEvents:this.globalEvents});
$("#mw-container").append(C.render().el)
},renderTaskMain:function(){var C=new MW.TaskMainView({globalEvents:A});
$("#mw-container").append(C.render().el)
},gotoInitial:function(){if(MW.parentConfig.unread=="0"&&MW.Cookie.load()){if(!$(".mw-tasks").is(":visible")){MW.App.gotoTasks(1)
}}else{if(!$(".mw-notifications").is(":visible")){MW.App.gotoMain(1)
}}},gotoTasks:function(){MW.Router.navigateToTasks();
this.globalEvents.trigger("showTaskCard",1);
if(!this.gotoTasksOnce){AJS.EventQueue.push({name:"tasktabopened",loadedBy:MW.App.parseView()});
this.gotoTasksOnce=true
}MW.Cookie.save(true)
},gotoMain:function(){MW.Router.navigateToMain();
this.globalEvents.trigger("showNotificationCard",1);
MW.Cookie.save(false)
},parseView:function(){if(window.top===window.self){return"homepage"
}else{if(window.location.href.indexOf("anchorTarget=_blank")!=-1){return"chrome"
}}},scrollToFocusedElement:function(D,G,F){var C=$(D),H=$(G||D);
var E=F||$(C).find(".focused");
if(!!E.length){var I=C.scrollTop()+E.position().top-H.position().top;
C.scrollTop(Math.max(C.scrollTop(),I-C.height()+E.outerHeight(true)));
C.scrollTop(Math.min(C.scrollTop(),I))
}},scrollToFocusedDrilldown:function(){this.scrollToFocusedElement(".mw-drilldown-container",".mw-notification-drilldown")
},scrollToFocusedMain:function(){this.scrollToFocusedElement(".mw-notifications-list")
},scrollToDrilldownHeader:function(){this.scrollToFocusedElement(".mw-drilldown-container",".mw-drilldown-container",$(".mw-drilldown-header"))
},openNotification:function(C){AJS.EventQueue.push({name:"mywork.notificationlinkopened",properties:C.toEventJSON()})
}});
var B=function(){MW.App=new MW.AppView({globalEvents:A});
MW.Router=new MW.Router({globalEvents:A});
Backbone.history.start({root:MW.contextPath+"/plugins/servlet/"+window.location.pathname.match(/servlet\/([^\/]*(?:\/m)?)?\/?/)[1]+"/"})
};
MW.parentConfig={};
if(window.top!=window.self){$(".miniview-page").addClass("iframe");
$("body").bind("click",function(C){C.stopPropagation()
});
MW.onJsonMessage(function(D,C){if(D.parentConfig&&C.source===parent){MW.parentConfig=D.parentConfig;
B()
}});
parent.postMessage("getParentConfig","*")
}else{B()
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.KeyboardShortcuts=function(B){var E={},C={},D=false;
var A=function(){$(document).bind("keydown",function(F){if(F.which==27){parent.postMessage("escKey","*")
}});
$(document).bind("keypress",function(G){var F=E.keyPressed(G.which);
if(F){G.preventDefault();
G.stopPropagation()
}});
B.on("blockKeyboardShortcut",function(){D=true
});
B.on("unblockKeyboardShortcut",function(){D=false
})
};
E.addShortcut=function(H,J,G,F){var I=C[G];
I=I||{};
I[H]=_.bind(J,F);
C[G]=I
};
E.setupContext=function(I,H,G){var F=function(){E.changeContext(I)
};
B.on(H,F);
return{cleanup:function(){B.off(H,F);
C[I]={}
},addShortcut:function(J,K){E.addShortcut(J,K,I,G)
}}
};
E.changeContext=function(F){E.context=F
};
E.keyPressed=_.debounce(function(F){if(!D){var H=C[E.context]||{};
var G=H[F];
if(G){G();
return true
}}},30);
E.clearShortcuts=function(){C={}
};
A();
return E
};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


