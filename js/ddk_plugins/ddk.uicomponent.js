function FxAddEventListener(e,t,n,a){FxDataObj.FxAddEventListener(e,t,n,a)}function FxRemoveEventListener(e,t,n,a){FxDataObj.FxRemoveEventListener(e,t,n,a)}function FxEventObject(e){return FxDataObj.FxEventObject(e)}function FxFindThis(e,t){return FxDataObj.FxFindThis(e,t)}function FxCheckMultiImgLoad(e){return FxDataObj.FxCheckMultiImgLoad(e)}function FxImgScaleToRect(e,t,n,a){return FxDataObj.FxImgScale(e,t,n,a,!0)}function FxImgShrinkToRect(e,t,n,a){return FxDataObj.FxImgScale(e,t,n,a,!1)}function FxShareTo(e,t){FxDataObj.FxShareTo(e,t)}function FxReplace(e,t,n,a){return FxDataObj.FxReplace(e,t,n,a)}function FxCustomEventPolyfill(){FxDataObj.FxCustomEventPolyfill()}function FxHHcurrentOrentation(){return FxDataObj.handheld.currentOrentation()}function FxHHgetWindowRatio(){return FxDataObj.handheld.getWindowRatio()}function FxHHenableOrientationEvent(){return FxDataObj.handheld.enableOrientationEvent()}function ddkUIComponent(e,t){var n=DDK.uiAPI.work(e,t);null!=n&&DDK.blert(n)}var FxDataObj={initTime:new Date};FxDataObj.logs_ary=[],FxDataObj.eventMode=(FxDataObj.eventMode=void 0)!==window.addEventListener?0:1,FxDataObj.FxEventLog=function(e,t,n,a,i,o){var r={e_id_str:null,e_class_str:null};r.addTime=new Date,r.time=r.addTime-FxDataObj.initTime,r.handler_func=i,r.event_str=a,"add"==t?(r.job_str="註冊",0==e?(r.mode_str="addEventListener",r.capture_str=o):(r.mode_str="attachEvent",r.capture="不支援堆疊模式")):(r.job_str="移除",0==e?(r.mode_str="removeEventListener",r.capture_str=o):(r.mode_str="detachEvent",r.capture="不支援堆疊模式")),r.e_str=n==window?"window":n.tagName,n.hasAttribute&&(1==n.hasAttribute("id")&&(r.e_id_str=n.getAttribute("id")),1==n.hasAttribute("class")&&(r.e_class_str=n.getAttribute("class"))),FxDataObj.logs_ary.push(r)},FxDataObj.FxAddEventListener=function(e,t,n,a){0==FxDataObj.eventMode?(0==t.indexOf("on")&&(t=t.substring(2,t.length)),e.addEventListener(t,n,a)):(-1==t.indexOf("on")&&(t="on"+t),e.attachEvent(t,n)),FxDataObj.FxEventLog(FxDataObj.eventMode,"add",e,t,n,a)},FxDataObj.FxRemoveEventListener=function(e,t,n,a){0==FxDataObj.eventMode?(0==t.indexOf("on")&&(t=t.substring(2,t.length)),e.removeEventListener(t,n,a)):(-1==t.indexOf("on")&&(t="on"+t),e.detachEvent(t,n)),FxDataObj.FxEventLog(FxDataObj.eventMode,"remove",e,t,n,a)},FxDataObj.FxEventObject=function(e){var t={};return t.e=e||event,t.target=t.e.target||t.e.srcElement,t.overwriteDefault=function(){return this.e.preventDefault?this.e.preventDefault():this.e.returnValue=!1,this},t.stopBubble=function(){return this.e.stopPropagation?this.e.stopPropagation():this.e.cancelBubble=!0,this},t},FxDataObj.FxFindThis=function(e,t){return 0==FxDataObj.eventMode?t:1==FxDataObj.eventMode?e.srcElement:void 0},FxDataObj.FxCheckMultiImgLoad=function(e){return e.img_ary?(e.interval||(e.interval="FxCheckMultiImgLoad Interval "+(new Date).toString()),e.eachEnd||(e.eachEnd=function(){}),e.end||(e.end=function(){}),e.delay||(e.delay=50),function(){var t=e.img_ary,n=String(Math.random());n=n.substring(n.indexOf(".")+1,n.length);var a={};a["interval-"+n]=0;var i,o=e.eachEnd,r=e.end;a["interval-"+n]=setInterval(function(){for(var e=0,u=0;u<t.length;u++)1==(i=t[u]).complete&&(e+=1),1==i.complete&&"true"!=i.getAttribute("done")&&(i.setAttribute("done","true"),o(i));e==t.length&&(clearInterval(a["interval-"+n]),r(t))},e.delay)}):(console.log("FxCheckMultiImgLoad error : without image list array"),void 0)},FxDataObj.FxImgScale=function(e,t,n,a,i){var o={width:0,height:0,fScaleTo_maxWidth:!0};if(0>=n||0>=a||0>=e||0>=t)return o;var r=e,u=a*e/n,l=n*t/a,d=t,s=l>e;return s=s?i:!i,o.fScaleTo_maxWidth=s?(o.width=Math.floor(r),o.height=Math.floor(u),!0):(o.width=Math.floor(l),o.height=Math.floor(d),!1),o.targetleft=Math.floor((e-o.width)/2),o.targettop=Math.floor((t-o.height)/2),[o.targettop,o.targetleft,o.width,o.height]},FxDataObj.FxShareTo=function(e,t){var n=e+"_go";switch(e){case"facebook":FxDataObj.FxOpenToSocialMedia("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t),n,580,400);break;case"google+":FxDataObj.FxOpenToSocialMedia("https://plus.google.com/share?url="+encodeURIComponent(t),n,580,400);break;case"twitter":FxDataObj.FxOpenToSocialMedia("http://www.twitter.com/share?url="+encodeURIComponent(t)+"&text="+encodeURIComponent(document.title),n,580,400);break;case"plurk":FxDataObj.FxOpenToSocialMedia("http://www.plurk.com/?qualifier=shares&amp;status=".concat(encodeURIComponent(t)).concat(" ").concat("(").concat(encodeURIComponent(document.title)).concat(")"),n,580,400);break;case"sina":FxDataObj.FxOpenToSocialMedia("http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(t)+"&title="+encodeURIComponent(document.title),n,580,400)}},FxDataObj.FxOpenToSocialMedia=function(e,t,n,a){var i=(window.screen.availHeight-30-a)/2,o=(window.screen.availWidth-10-n)/2;window.open(e,t,"height="+a+",width="+n+",top="+i+",left="+o+",status=no,location=no,status=no,menubar=no,toolbar=no,resizable=no,scrollbars=no")},FxDataObj.FxReplace=function(e,t,n,a){var i;return a&&""!=a||(a="first"),"first"==a&&(i=new RegExp(t,"i")),"all"==a&&(i=new RegExp(t,"gi")),e.replace(i,n)},FxDataObj.FxEventAnalyticReport=function(){for(var e,t="FxUtility.js:Event analytic report:\n",n="",a=0;a<FxDataObj.logs_ary.length;a++){for(var i in e=FxDataObj.logs_ary[a],this)if("object"!=typeof this[i]){if(e.handler_func==this[i]){n=i;break}}else if("object"==typeof this[i])for(var o in this[i])if(e.handler_func==this[i][o]){n=i+"."+o;break}t+=a+1+".於初始後"+e.time+" ms 以"+e.mode_str+" "+e.job_str+"了["+e.e_str+' id="'+e.e_id_str+'" class="'+e.e_class_str+'"]上的'+e.event_str+"事件,監聽者為"+n+" 堆疊參數:"+e.capture_str+"\n"}console.log(t)},FxDataObj.handheld={lastWindowRatio:0,lastOrentation:"",run_excuteOrentationUpdate:0},FxDataObj.FxCustomEventPolyfill=function(){if(!document.getElementById("FxUtility_FxCustomEventPolyfill")){var e,t,n,a;(e=document.createElement("script")).setAttribute("language","javascript"),e.setAttribute("type","text/javascript"),e.setAttribute("id","FxUtility_FxCustomEventPolyfill"),e.text="(function () {/* 擴充new CustomEvent 的相容性 , IE 系列向下相容到IE9*/function CustomEvent ( event, params ) {	params = params || { bubbles: false, cancelable: false, detail: undefined };	var evt = document.createEvent( 'CustomEvent' );	evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );	return evt;}CustomEvent.prototype = window.Event.prototype;window.CustomEvent = CustomEvent;})();",a=!(n=[document.getElementsByTagName("HEAD")[0],document.getElementsByTagName("BODY")[0]]);for(var i=0;i<n.length;i++)if(n[i]){t=n[i],a=!0;break}1==a&&t.appendChild(e)}},FxDataObj.handheld.currentOrentation=function(){return FxDataObj.handheld.lastOrentation},FxDataObj.handheld.getWindowRatio=function(){var e,t;return t=window.innerWidth?(e=window.innerWidth,window.innerHeight):(e=window.outerWidth,window.outerHeight),e?Math.floor(e/t):(console.log("FxUtility 1.1 beta info:lose window size"),null)},FxDataObj.handheld.enableOrientationEvent=function(){function e(){var e,t,n,a,i;i={currentOrentation:"",lastOrentation:FxDataObj.handheld.lastOrentation},1<(a=FxDataObj.handheld.getWindowRatio())&&(a=1),a!=FxDataObj.handheld.lastWindowRatio&&(0<(FxDataObj.handheld.lastWindowRatio=a)?(FxDataObj.handheld.lastOrentation="landscape",i.currentOrentation="landscape",t=new CustomEvent("orientationToLandscape",{detail:i}),window.dispatchEvent(t)):(FxDataObj.handheld.lastOrentation="portrait",i.currentOrentation="portrait",n=new CustomEvent("orientationToPortrait",{detail:i}),window.dispatchEvent(n)),e=new CustomEvent("orientationUpdate",{detail:i}),window.dispatchEvent(e))}return FxDataObj.FxCustomEventPolyfill(),FxDataObj.handheld.lastOrentation=FxDataObj.handheld.getWindowRatio(),1<FxDataObj.handheld.lastOrentation&&(FxDataObj.handheld.lastOrentation=1),FxDataObj.handheld.lastOrentation=0<FxDataObj.handheld.lastOrentation?"landscape":"portrait",e(),FxDataObj.handheld.run_excuteOrentationUpdate=setInterval(e,15),{update:"orientationUpdate",u:"orientationUpdate",toLandscape:"orientationToLandscape",h:"orientationToLandscape",toPortrait:"orientationToPortrait",v:"orientationToPortrait"}};var DDK={blert:function(){},claerContentStyle:function(e){for(var t,n,a,i,o=e,r=0;r<o.length;r++)if(t=o[r],$(t).attr("style")){a=(n=FxReplace($(t).attr("style").toLowerCase()," ","","all")).split(";"),i="";for(var u=0;u<a.length;u++)"color"==(n=a[u].split(":"))[0]&&(i+=n[0]+":"+n[1]+";");$(t).attr("style",i)}},parentElement:function(e,t){var n=e;t=t.toUpperCase();for(var a=0;;a++){if(n.tagName.toUpperCase()==t)return n;if("HTML"==(n=n.parentElement).tagName.toUpperCase())return"undefined"}},findYouTubeIdByUrl:function(e){var t;if(-1==e.indexOf("?"))return e.substring(e.lastIndexOf("/")+1,e.length);t=e.substring(e.indexOf("?")+1,e.length).split("&");for(var n=0;n<t.length;n++)if("v"==t[n].split("=")[0])return t[n].split("=")[1]},orientationEvent:FxHHenableOrientationEvent(),mutual:{uiFlowStopper:{}}};DDK.mutual={init:function(){},uiWindowOverlap:{},uiFlowStopper:{},uiAPI:{}},DDK.mutual.uiWindowOverlap={StaticConstant:{IN_ACTION_CALSS_NAME:"actived",UN_ACTION_CALSS_NAME:"unActived",LAP_NAME:".blackCover",UI_FLOW_STOPPER_NAME:".ui-flow-stopper",LAP_TRUE_COVER_CLASS_NAME:"trueCover",LAP_COLOR_COVER_CLASS_NAME:"colorCover",LAP_COLOR_COVER_WAIT_CLASS_NAME:"wait"},lapName:".blackCover",lapedHandler:{},isBindEvent:!1,overlap:function(e){var t=$(DDK.mutual.uiWindowOverlap.StaticConstant.LAP_NAME),n={delay:0,duration:700,complete:function(){$(this).removeAttr("style")}};0==$(t).hasClass(e)&&($(t).addClass(e).addClass(DDK.mutual.uiWindowOverlap.StaticConstant.IN_ACTION_CALSS_NAME),$(t).find("."+DDK.mutual.uiWindowOverlap.StaticConstant.LAP_COLOR_COVER_CLASS_NAME).animateCSS("fadeIn",n)),0==DDK.mutual.uiWindowOverlap.isBindEvent&&(FxAddEventListener(t[0],"click",DDK.mutual.uiWindowOverlap.lapClickEvent,!1),DDK.mutual.uiWindowOverlap.isBindEvent=!0)},nonOverlap:function(e,t){var n=$(DDK.mutual.uiWindowOverlap.StaticConstant.LAP_NAME);if(1==$(n).hasClass(e)){var a=function(){FxRemoveEventListener(n[0],"click",DDK.mutual.uiWindowOverlap.lapClickEvent,!1),DDK.mutual.uiWindowOverlap.isBindEvent=!1};0==t?($(n).removeClass(e),$(n).find("."+DDK.mutual.uiWindowOverlap.StaticConstant.LAP_COLOR_COVER_CLASS_NAME).animateCSS("fadeOut",{delay:0,duration:250,complete:function(){$(this).removeAttr("style"),$(n).removeClass(DDK.mutual.uiWindowOverlap.StaticConstant.IN_ACTION_CALSS_NAME),1==$(n).attr("class").split(" ").length&&1==DDK.mutual.uiWindowOverlap.isBindEvent&&a()}})):2==$(n).attr("class").split(" ").length&&1==DDK.mutual.uiWindowOverlap.isBindEvent&&a()}},registLapClickEvent:function(e){var t=e.behaviorName;e.replaced&&1==e.replaced?DDK.mutual.uiWindowOverlap.lapedHandler[t]&&(DDK.mutual.uiWindowOverlap.lapedHandler[t]=e):DDK.mutual.uiWindowOverlap.lapedHandler[t]||(DDK.mutual.uiWindowOverlap.lapedHandler[t]=e)},lapClickEvent:function(e){FxEventObject(e).overwriteDefault();var t=$(e.currentTarget).attr("class").split(" ");t=t[t.length-1],DDK.mutual.uiWindowOverlap.lapedHandler[t]&&DDK.mutual.uiWindowOverlap.lapedHandler[t].work(e)}},DDK.mutual.uiFlowStopper={eventHolder:{},StaticConstant:{IN_ACTION_CALSS_NAME:"actived",UN_ACTION_CALSS_NAME:"unActived",UI_FLOW_STOPPER_NAME:".ui-flow-stopper",UI_PLUG_IN_IDINTIFY_CLASS_NAME:"forFlowStopper",BODY_FORCE_SCROLL_CLASS_NAME:"ui-flow-stopper-locked",BEFORE_ZOOM_IN_CLASS_NAME:"beforeZoomIn"},init:function(e,t){var n,a,i,o,r,u,l;o="FlowStopper_"+String((new Date).getTime()),n=DDK.mutual.uiFlowStopper.getStopperInstance(e),a=$(DDK.mutual.uiFlowStopper.StaticConstant.UI_FLOW_STOPPER_NAME),t.firstText&&(t.firstText.text&&$(n).find("h3 span").html(t.firstText.text),t.firstText.style&&$(n).find("h3 span").attr("style",t.firstText.style)),t.secondText?(t.secondText.text&&$(n).find("h4 span").html(t.secondText.text),t.secondText.style&&$(n).find("h4 span").attr("style",t.secondText.style)):$(n).find("h4").remove(),t.doneLabel&&$(n).find("button.doneBtn span").text(t.doneLabel),t.deniedLabel&&$(n).find("button.deniedBtn span").text(t.deniedLabel),u={uiId:o},r=DDK.mutual.uiFlowStopper.eventHolder[o]={uiId:o,onAfterDone:function(){t.uiAfterDone(u)},onAfterDenied:function(){t.uiAfterDenied(u)},onBeforeAppear:function(){t.uiBeforeAppear()},onAfterAppear:function(){$(this).attr("style",""),t.uiAfterAppear()},onBeforeRemove:function(){t.uiBeforeRemove()},onAfterRemove:function(){$(this).attr("style",""),t.uiAfterRemove()}},"Simple Alert"==e&&(FxAddEventListener((i=$(n).find("button.doneBtn , button.closeBtn"))[0],"click",r.onAfterDone,!1),FxAddEventListener(i[1],"click",r.onAfterDone,!1)),"Simple Confirm"!=e&&"Huge Prompt"!=e&&"Small Prompt"!=e||(FxAddEventListener((i=$(n).find("button.doneBtn , button.deniedBtn"))[0],"click",r.onAfterDone,!1),FxAddEventListener(i[1],"click",r.onAfterDenied,!1)),r.onBeforeAppear(),l=0==$(a).hasClass(DDK.mutual.uiFlowStopper.StaticConstant.IN_ACTION_CALSS_NAME)?($("body").addClass(DDK.mutual.uiFlowStopper.StaticConstant.BODY_FORCE_SCROLL_CLASS_NAME),$(a).addClass(DDK.mutual.uiFlowStopper.StaticConstant.IN_ACTION_CALSS_NAME),DDK.mutual.uiWindowOverlap.overlap(DDK.mutual.uiFlowStopper.StaticConstant.UI_PLUG_IN_IDINTIFY_CLASS_NAME),300):150,"Huge Prompt"!=e&&"Small Prompt"!=e||$(n).find(".contentWrapper").append($(document.createElement("FORM")).append(t.formInstance)),$(n).attr("data-ui-id",o).addClass(DDK.mutual.uiFlowStopper.StaticConstant.BEFORE_ZOOM_IN_CLASS_NAME).hide(),$(a).append(n),setTimeout(function(){$(a).removeClass(DDK.mutual.uiWindowOverlap.StaticConstant.UN_ACTION_CALSS_NAME),$(n).removeClass(DDK.mutual.uiFlowStopper.StaticConstant.BEFORE_ZOOM_IN_CLASS_NAME),$(n).animateCSS("zoomIn",{delay:0,duration:350,complete:function(){r.onAfterAppear(),$(this).removeAttr("style")}})},l)},getStopperInstance:function(e){var t=null,n=".UIComponent .copy",a=" > article";switch(e){case"Simple Alert":t=$(n+".ui-alert"+a).clone()[0];break;case"Please Wait":t=$(n+".ui-wait"+a).clone()[0];break;case"Simple Confirm":t=$(n+".ui-confirm"+a).clone()[0];break;case"Small Prompt":t=$(n+".ui-prompt-mini"+a).clone()[0];break;case"Huge Prompt":t=$(n+".ui-prompt-huge"+a).clone()[0]}return t},currentStopperId:function(){return $($(".ui-flow-stopper").find("article")[0]).attr("data-ui-id")},removeStopperInstance:function(e,t){var n=DDK.mutual.uiFlowStopper.eventHolder[e],a=$('.ui-flow-stopper article[data-ui-id="'+e+'"]');$(a).animateCSS("zoomOut",{delay:90,duration:400,complete:function(){n.onAfterRemove(),$(this).remove(),0==$(".ui-flow-stopper").find("article").length&&($("body").removeClass(DDK.mutual.uiFlowStopper.StaticConstant.BODY_FORCE_SCROLL_CLASS_NAME),$(DDK.mutual.uiFlowStopper.StaticConstant.UI_FLOW_STOPPER_NAME).removeClass(DDK.mutual.uiFlowStopper.StaticConstant.IN_ACTION_CALSS_NAME).addClass(DDK.mutual.uiFlowStopper.StaticConstant.UN_ACTION_CALSS_NAME),DDK.mutual.uiWindowOverlap.nonOverlap(DDK.mutual.uiFlowStopper.StaticConstant.UI_PLUG_IN_IDINTIFY_CLASS_NAME,t))}})}},DDK.uiAPI={StaticConstant:{UI_FLOW_STOPPER_NAME:".ui-flow-stopper"},queue_ary:[],work:function(e,t){var n=null;if(!e)return n="uiAPI:without ui name.";if(!t)return n="uiAPI:without ui options.";for(var a=!1,i=["Simple Alert","Please Wait","Simple Confirm","Small Prompt","Huge Prompt"],o=0;o<i.length;o++)if(e==i[o]){a=!0,n="uiAPI:"+i[o]+" active.",DDK.blert(n);break}return 0==a?n="uiAPI:ui name might error.":DDK.uiAPI.formatOptions(e,t)},formatOptions:function(e,t){var n=null;if("Simple Alert"==e||"Small Prompt"==e||"Huge Prompt"==e||"Please Wait"==e||"Simple Confirm"==e){if(!t.action)return n="uiAPI:break , without action.";if("appear"!=t.action&&"remove"!=t.action)return n='uiAPI:break , "'+t.action+'" << unsupport argument.';if(t.replaced){if("boolean"!=typeof t.replaced)return n='uiAPI:break , "'+t.replaced+'" not Boolean.'}else t.replaced=!1;if(("appear"==t.action&&"Small Prompt"==e||"Huge Prompt"==e)&&(!t.formInstance||""==t.formInstance))return n="uiAPI:break , without formInstance.";n=DDK.uiAPI.workWithFlowStopper(e,t)}return n},workWithFlowStopper:function(e,t){var n=null,a=function(){var e=DDK.mutual.uiFlowStopper.currentStopperId();DDK.mutual.uiFlowStopper.removeStopperInstance(e,t.replaced)},i={function_ary:[["replaced",function(){return!0}],["suicide",function(){return!0}]]};if("appear"==t.action){t.uiAfterDone="Small Prompt"==e||"Huge Prompt"==e?function(e){var n=e.uiId,a=function(){DDK.mutual.uiFlowStopper.removeStopperInstance(n,!1)};t.afterDone?1==t.afterDone($(DDK.uiAPI.StaticConstant.UI_FLOW_STOPPER_NAME).find(".contentWrapper > form").children())&&(DDK.uiAPI.apiAddNewQueue(a,i),DDK.uiAPI.apiExcute()):(DDK.uiAPI.apiAddNewQueue(a,i),DDK.uiAPI.apiExcute())}:function(e){t.afterDone&&t.afterDone();var n=e.uiId;DDK.uiAPI.apiAddNewQueue(function(){DDK.mutual.uiFlowStopper.removeStopperInstance(n,!1)},i),DDK.uiAPI.apiExcute()},t.uiAfterDenied=function(e){t.afterDenied&&t.afterDenied();var n=e.uiId;DDK.uiAPI.apiAddNewQueue(function(){DDK.mutual.uiFlowStopper.removeStopperInstance(n,!1)},i),DDK.uiAPI.apiExcute()};var o=t.uiBeforeAppear=function(){t.events&&t.events.beforeAppear&&t.events.beforeAppear()},r=t.uiAfterAppear=function(){t.events&&t.events.afterAppear&&t.events.afterAppear()},u=t.uiBeforeRemove=function(){t.events&&t.events.beforeRemove&&t.events.beforeRemove()},l=t.uiAfterRemove=function(){t.events&&t.events.afterRemove&&t.events.afterRemove()},d={function_ary:[["idd",{n:t.firstText}],["replaced",function(){return t.replaced}],["suicide",function(){return!1}],["beforeAppear",function(){o()}],["afterAppear",function(){r()}],["beforeRemove",function(){u()}],["afterRemove",function(){l()}]]};n=t.replaced&&1==t.replaced&&0<DDK.uiAPI.queue_ary.length?(n=DDK.uiAPI.apiAddNewQueue(a,i),DDK.blert(n),n=DDK.uiAPI.apiExcute(),DDK.uiAPI.apiAddNewQueue(function(){setTimeout(function(){DDK.mutual.uiFlowStopper.init(e,t)},350)},d)):DDK.uiAPI.apiAddNewQueue(function(){DDK.mutual.uiFlowStopper.init(e,t)},d),DDK.blert(n),n=DDK.uiAPI.apiExcute()}else"remove"==t.action&&(n=DDK.uiAPI.apiAddNewQueue(a,i),DDK.blert(n),n=DDK.uiAPI.apiExcute());return n},apiAddNewQueue:function(e,t){var n={};if(e&&(n.run=e),t)for(var a=0;a<t.function_ary.length;a++)n[t.function_ary[a][0]]=t.function_ary[a][1];return DDK.uiAPI.queue_ary.push(n),"uiAPI:add new queue , existing queues = "+DDK.uiAPI.queue_ary.length},apiExcute:function(){var e,t;return 1==DDK.uiAPI.queue_ary.length?(e=DDK.uiAPI.queue_ary[0]).run():1<DDK.uiAPI.queue_ary.length&&((e=DDK.uiAPI.queue_ary[DDK.uiAPI.queue_ary.length-1]).replaced?e.replaced&&1==e.replaced()?((t=DDK.uiAPI.queue_ary[DDK.uiAPI.queue_ary.length-2]).beforeRemove&&t.beforeRemove(),DDK.uiAPI.queue_ary.splice(DDK.uiAPI.queue_ary.length[DDK.uiAPI.queue_ary.length-2],1),e.run(),e.suicide&&1==e.suicide()&&(DDK.uiAPI.queue_ary.pop(),0<DDK.uiAPI.queue_ary.length&&DDK.uiAPI.queue_ary[0].run())):e.replaced&&e.replaced():(e.run(),DDK.uiAPI.queue_ary.pop())),"uiAPI:a queue excute , rest of queues = "+DDK.uiAPI.queue_ary.length}},FxCustomEventPolyfill();