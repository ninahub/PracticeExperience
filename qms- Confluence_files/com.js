try {
var MW=MW||{};
var $=$||AJS.$;
MW.MV=MW.MV||{};
AJS.toInit(function(A){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return 
}MW.MV.AnchorManager=function(){var K=contextPath,J=K+"/plugins/servlet/notifications-miniview",O=[0,"0"],D={JIRA:"JIRA",CONFLUENCE:"Confluence"},P=/[?&]show-miniview/.test(window.location.search);
function S(U){U=U.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var T="[\\?\\#&]"+U+"=([^&#]*)";
var W=new RegExp(T);
var V=W.exec(window.location.search);
if(V!==null){return decodeURIComponent(V[1].replace(/\+/g," "))
}}var B=S("show-miniview");
if(B){J+="#notification/"+B
}function M(){if(typeof (Confluence)!="undefined"){return D.CONFLUENCE
}else{if(typeof (JIRA)!="undefined"){return D.JIRA
}}}function I(){var T="badge-i";
if(A("#notifications-anchor").length===0){Q()
}else{T+=" aui-icon aui-icon-small"
}A("#notifications-anchor").html('<div class="'+T+'"><span class="badge-w"><span class="badge"></span></span></div>')
}function Q(){var U=M(),T;
if(U==D.JIRA){T=A("#header .global .secondary")
}else{if(U==D.CONFLUENCE){T=A("#header-menu-bar")
}}T.children().each(function(){A(this).find("a").click(function(){MW.Dialog.hide()
})
});
T.append("<a href='#' id='notifications-anchor' class='mw-anchor read'></a>")
}function R(V){var U=false,T;
return function(){if(U){return T
}U=true;
T=V.apply(this,arguments);
return T
}
}var L=R(function(){MW.Dialog.preload=true;
MW.Dialog.show();
MW.Dialog.hide()
});
function E(T,X){var U=A("#notifications-anchor"),V=U.find(".badge");
V.html(X);
var Y=T>0?AJS.format("New Notifications: {0}",T):"Open Notifications",W=U.attr("title")||"";
U.attr("title",Y+W.replace(/.*?\(/," ("));
U.toggleClass("unread",T!==0);
U.toggleClass("read",T===0);
V.toggleClass("aui-button-primary",T!==0);
O=[T,X];
if(T>0&&A("#notifications-anchor:visible").length>0&&!P){L()
}}function F(){console.log("Creating iframes");
var T="gn";
if(D.CONFLUENCE==M()){T=T.split("")
}G("notifications",J,T);
N()
}function N(){A(document).keydown(function(T){if(AJS.InlineDialog.current&&T.which==27&&!A(T.target).is(":input")){AJS.InlineDialog.current.hide()
}})
}function C(){A("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()
})
}function G(V,U,X){var T;
var W=function(){T=this
};
if(!window.addEventListener){window.attachEvent("onmessage",b)
}else{window.addEventListener("message",b,false)
}function b(g){function h(e){return e===location.protocol+"//"+location.host
}if("escKey"===g.data){T.hide();
A("#notifications-anchor").focus();
document.activeElement.blur()
}else{if("getParentConfig"===g.data&&h(g.origin)){var f=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:O[1]}}),d=A("#"+V+"-miniview-iframe")[0].contentWindow;
d.postMessage(f,"*");
if(MW.Dialog.preload){MW.Dialog.preload=false
}else{d.focus()
}}}}var c=A("#"+V+"-anchor"),Z=(AJS.version.indexOf("PDL-OLD")!==-1)?c.outerHeight()-c.height():0,Y=10+Z;
MW.Dialog=AJS.InlineDialog(A("#"+V+"-anchor"),V+"-miniview",function(g,e,h){if(A(g).children().length===0){A(g).append(A('<iframe id="'+V+'-miniview-iframe" src="'+U+'" frameborder="0"></iframe>'))
}else{var f=JSON.stringify({unread:O[1]}),d=A("#"+V+"-miniview-iframe")[0].contentWindow;
d.postMessage(f,"*");
setTimeout(function(){d.focus()
},100)
}C();
h()
},{width:500,height:520,hideDelay:null,initCallback:W,noBind:true,offsetY:Y});
A("#"+V+"-anchor").click(function(d){d.preventDefault();
if(A("#"+V+"-miniview-iframe").is(":visible")){MW.Dialog.hide()
}else{MW.Dialog.show()
}});
var a=function(){AJS.whenIType(X).click(("#"+V+"-anchor"));
E(O[0],O[1])
};
if(window.Confluence){AJS.bind("initialize.keyboardshortcuts",a)
}else{a()
}if(P){A("#"+V+"-anchor").click()
}}function H(){I();
F()
}return{setupAnchors:H,updateNotificationCount:E}
}();
if(AJS.I18n&&AJS.I18n.keys){AJS.I18n.keys["com.atlassian.mywork.keyboard.shortcut.open.notifications.desc"]="Open Notifications"
}MW.MV.AnchorManager.setupAnchors();
anchorUtil=new MW.AnchorUtil(A,contextPath,MW.MV.AnchorManager.updateNotificationCount);
anchorUtil.setupAnchors();
A("#notifications-anchor").click(function(){MW.MV.AnchorManager.updateNotificationCount(0,"0")
});
A(window).focus(function(){console.log("Focus - starting requests");
anchorUtil.startRequests()
});
A("body").click(function(){anchorUtil.startRequests()
})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var MW=MW||{};
MW.AnchorUtil=function(D,K,E){var I=30000,S,P=K+"/rest/mywork/latest/status/notification/count";
var R=new Date().getTime();
var B=5*60*1000;
var T=1000*60*5;
var G=1.25;
var C=0;
function H(U){return U<=9?U:"9+"
}function Q(){window.clearInterval(S);
S=undefined
}function O(){return(new Date().getTime()-R)<T
}function M(){if(!O()||!S){L()
}R=new Date().getTime()
}function L(){if(S){clearTimeout(S)
}S=setTimeout(function(){F()
},C=N(C))
}function A(W,U){var V=W*1000;
B=U*1000||B;
if(V&&V!=I){I=V;
M()
}}function N(U){return Math.min(O()?I:U*G,B)
}function F(U){D.getJSON(P+((U)?"?pageid="+U:""),function(W){A(W.timeout,W.maxTimeout);
var V=W.count;
E(V,H(V))
});
L()
}function J(){var U=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");
if(U){F(AJS.Meta.get("page-id"))
}else{F()
}M()
}return{setupAnchors:J,startRequests:M,stopRequests:Q,updateAnchors:F}
};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


