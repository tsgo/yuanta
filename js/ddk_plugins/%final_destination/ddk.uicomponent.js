var FxDataObj={initTime:new Date};function FxAddEventListener(t,e,n,a){FxDataObj.FxAddEventListener(t,e,n,a)}function FxRemoveEventListener(t,e,n,a){FxDataObj.FxRemoveEventListener(t,e,n,a)}function FxEventObject(t){return FxDataObj.FxEventObject(t)}function FxFindThis(t,e){return FxDataObj.FxFindThis(t,e)}function FxCheckMultiImgLoad(t){return FxDataObj.FxCheckMultiImgLoad(t)}function FxImgScaleToRect(t,e,n,a){return FxDataObj.FxImgScale(t,e,n,a,!0)}function FxImgShrinkToRect(t,e,n,a){return FxDataObj.FxImgScale(t,e,n,a,!1)}function FxShareTo(t,e){FxDataObj.FxShareTo(t,e)}function FxReplace(t,e,n,a){return FxDataObj.FxReplace(t,e,n,a)}function FxCustomEventPolyfill(){FxDataObj.FxCustomEventPolyfill()}function FxHHcurrentOrentation(){return FxDataObj.handheld.currentOrentation()}function FxHHgetWindowRatio(){return FxDataObj.handheld.getWindowRatio()}function FxHHenableOrientationEvent(){return FxDataObj.handheld.enableOrientationEvent()}FxDataObj.logs_ary=[],(FxDataObj.eventMode=void 0)!==window.addEventListener?FxDataObj.eventMode=0:FxDataObj.eventMode=1,FxDataObj.FxEventLog=function(t,e,n,a,i,o){var r={e_id_str:null,e_class_str:null};r.addTime=new Date,r.time=r.addTime-FxDataObj.initTime,r.handler_func=i,r.event_str=a,"add"==e?(r.job_str="註冊",0==t?(r.mode_str="addEventListener",r.capture_str=o):(r.mode_str="attachEvent",r.capture="不支援堆疊模式")):(r.job_str="移除",0==t?(r.mode_str="removeEventListener",r.capture_str=o):(r.mode_str="detachEvent",r.capture="不支援堆疊模式")),n==window?r.e_str="window":r.e_str=n.tagName,n.hasAttribute&&(1==n.hasAttribute("id")&&(r.e_id_str=n.getAttribute("id")),1==n.hasAttribute("class")&&(r.e_class_str=n.getAttribute("class"))),FxDataObj.logs_ary.push(r)},FxDataObj.FxAddEventListener=function(t,e,n,a){0==FxDataObj.eventMode?(0==e.indexOf("on")&&(e=e.substring(2,e.length)),t.addEventListener(e,n,a)):(-1==e.indexOf("on")&&(e="on"+e),t.attachEvent(e,n)),FxDataObj.FxEventLog(FxDataObj.eventMode,"add",t,e,n,a)},FxDataObj.FxRemoveEventListener=function(t,e,n,a){0==FxDataObj.eventMode?(0==e.indexOf("on")&&(e=e.substring(2,e.length)),t.removeEventListener(e,n,a)):(-1==e.indexOf("on")&&(e="on"+e),t.detachEvent(e,n)),FxDataObj.FxEventLog(FxDataObj.eventMode,"remove",t,e,n,a)},FxDataObj.FxEventObject=function(t){var e={};return e.e=t||event,e.target=e.e.target||e.e.srcElement,e.overwriteDefault=function(){return this.e.preventDefault?this.e.preventDefault():this.e.returnValue=!1,this},e.stopBubble=function(){return this.e.stopPropagation?this.e.stopPropagation():this.e.cancelBubble=!0,this},e},FxDataObj.FxFindThis=function(t,e){return 0==FxDataObj.eventMode?e:1==FxDataObj.eventMode?t.srcElement:void 0},FxDataObj.FxCheckMultiImgLoad=function(t){if(t.img_ary){t.interval||(t.interval="FxCheckMultiImgLoad Interval "+(new Date).toString()),t.eachEnd||(t.eachEnd=function(){}),t.end||(t.end=function(){}),t.delay||(t.delay=50);return function(){var n=t.img_ary,a=String(Math.random());a=a.substring(a.indexOf(".")+1,a.length);var i={};i["interval-"+a]=0;var o,r=t.eachEnd,u=t.end;i["interval-"+a]=setInterval(function(){for(var t=0,e=0;e<n.length;e++)1==(o=n[e]).complete&&(t+=1),1==o.complete&&"true"!=o.getAttribute("done")&&(o.setAttribute("done","true"),r(o));t==n.length&&(clearInterval(i["interval-"+a]),u(n))},t.delay)}}console.log("FxCheckMultiImgLoad error : without image list array")},FxDataObj.FxImgScale=function(t,e,n,a,i){var o={width:0,height:0,fScaleTo_maxWidth:!0};if(n<=0||a<=0||t<=0||e<=0)return o;var r=t,u=a*t/n,l=n*e/a,d=e,s=t<l;return s=s?i:!i,o.fScaleTo_maxWidth=s?(o.width=Math.floor(r),o.height=Math.floor(u),!0):(o.width=Math.floor(l),o.height=Math.floor(d),!1),o.targetleft=Math.floor((t-o.width)/2),o.targettop=Math.floor((e-o.height)/2),[o.targettop,o.targetleft,o.width,o.height]},FxDataObj.FxShareTo=function(t,e){var n=t+"_go";switch(t){case"facebook":FxDataObj.FxOpenToSocialMedia("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e),n,580,400);break;case"google+":FxDataObj.FxOpenToSocialMedia("https://plus.google.com/share?url="+encodeURIComponent(e),n,580,400);break;case"twitter":FxDataObj.FxOpenToSocialMedia("http://www.twitter.com/share?url="+encodeURIComponent(e)+"&text="+encodeURIComponent(document.title),n,580,400);break;case"plurk":FxDataObj.FxOpenToSocialMedia("http://www.plurk.com/?qualifier=shares&amp;status=".concat(encodeURIComponent(e)).concat(" ").concat("(").concat(encodeURIComponent(document.title)).concat(")"),n,580,400);break;case"sina":FxDataObj.FxOpenToSocialMedia("http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(e)+"&title="+encodeURIComponent(document.title),n,580,400)}},FxDataObj.FxOpenToSocialMedia=function(t,e,n,a){var i=(window.screen.availHeight-30-a)/2,o=(window.screen.availWidth-10-n)/2;window.open(t,e,"height="+a+",width="+n+",top="+i+",left="+o+",status=no,location=no,status=no,menubar=no,toolbar=no,resizable=no,scrollbars=no")},FxDataObj.FxReplace=function(t,e,n,a){var i;return a&&""!=a||(a="first"),"first"==a&&(i=new RegExp(e,"i")),"all"==a&&(i=new RegExp(e,"gi")),t.replace(i,n)},FxDataObj.FxEventAnalyticReport=function(){for(var t,e="FxUtility.js:Event analytic report:\n",n="",a=0;a<FxDataObj.logs_ary.length;a++){for(var i in t=FxDataObj.logs_ary[a],this)if("object"!=typeof this[i]){if(t.handler_func==this[i]){n=i;break}}else if("object"==typeof this[i])for(var o in this[i])if(t.handler_func==this[i][o]){n=i+"."+o;break}e+=a+1+".於初始後"+t.time+" ms 以"+t.mode_str+" "+t.job_str+"了["+t.e_str+' id="'+t.e_id_str+'" class="'+t.e_class_str+'"]上的'+t.event_str+"事件,監聽者為"+n+" 堆疊參數:"+t.capture_str+"\n"}console.log(e)},FxDataObj.handheld={lastWindowRatio:0,lastOrentation:"",run_excuteOrentationUpdate:0},FxDataObj.FxCustomEventPolyfill=function(){if(!document.getElementById("FxUtility_FxCustomEventPolyfill")){var t,e,n,a;(t=document.createElement("script")).setAttribute("language","javascript"),t.setAttribute("type","text/javascript"),t.setAttribute("id","FxUtility_FxCustomEventPolyfill"),"(function () {/* 擴充new CustomEvent 的相容性 , IE 系列向下相容到IE9*/function CustomEvent ( event, params ) {\tparams = params || { bubbles: false, cancelable: false, detail: undefined };\tvar evt = document.createEvent( 'CustomEvent' );\tevt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );\treturn evt;}CustomEvent.prototype = window.Event.prototype;window.CustomEvent = CustomEvent;})();",t.text="(function () {/* 擴充new CustomEvent 的相容性 , IE 系列向下相容到IE9*/function CustomEvent ( event, params ) {\tparams = params || { bubbles: false, cancelable: false, detail: undefined };\tvar evt = document.createEvent( 'CustomEvent' );\tevt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );\treturn evt;}CustomEvent.prototype = window.Event.prototype;window.CustomEvent = CustomEvent;})();",a=!(n=[document.getElementsByTagName("HEAD")[0],document.getElementsByTagName("BODY")[0]]);for(var i=0;i<n.length;i++)if(n[i]){e=n[i],a=!0;break}1==a&&e.appendChild(t)}},FxDataObj.handheld.currentOrentation=function(){return FxDataObj.handheld.lastOrentation},FxDataObj.handheld.getWindowRatio=function(){var t,e;return e=window.innerWidth?(t=window.innerWidth,window.innerHeight):(t=window.outerWidth,window.outerHeight),t?Math.floor(t/e):(console.log("FxUtility 1.1 beta info:lose window size"),null)},FxDataObj.handheld.enableOrientationEvent=function(){function t(){var t,e,n,a,i;i={currentOrentation:"",lastOrentation:FxDataObj.handheld.lastOrentation},1<(a=FxDataObj.handheld.getWindowRatio())&&(a=1),a!=FxDataObj.handheld.lastWindowRatio&&(0<(FxDataObj.handheld.lastWindowRatio=a)?(FxDataObj.handheld.lastOrentation="landscape",i.currentOrentation="landscape",e=new CustomEvent("orientationToLandscape",{detail:i}),window.dispatchEvent(e)):(FxDataObj.handheld.lastOrentation="portrait",i.currentOrentation="portrait",n=new CustomEvent("orientationToPortrait",{detail:i}),window.dispatchEvent(n)),t=new CustomEvent("orientationUpdate",{detail:i}),window.dispatchEvent(t))}return FxDataObj.FxCustomEventPolyfill(),"orientationUpdate","orientationToLandscape","orientationToPortrait",FxDataObj.handheld.lastOrentation=FxDataObj.handheld.getWindowRatio(),1<FxDataObj.handheld.lastOrentation&&(FxDataObj.handheld.lastOrentation=1),0<FxDataObj.handheld.lastOrentation?FxDataObj.handheld.lastOrentation="landscape":FxDataObj.handheld.lastOrentation="portrait",t(),FxDataObj.handheld.run_excuteOrentationUpdate=setInterval(t,15),{update:"orientationUpdate",u:"orientationUpdate",toLandscape:"orientationToLandscape",h:"orientationToLandscape",toPortrait:"orientationToPortrait",v:"orientationToPortrait"}};var DDK={blert:function(t){},claerContentStyle:function(t){for(var e,n,a,i,o=t,r=0;r<o.length;r++)if(e=o[r],$(e).attr("style")){a=(n=FxReplace($(e).attr("style").toLowerCase()," ","","all")).split(";"),i="";for(var u=0;u<a.length;u++)"color"==(n=a[u].split(":"))[0]&&(i+=n[0]+":"+n[1]+";");$(e).attr("style",i)}},parentElement:function(t,e){var n=t;e=e.toUpperCase();for(var a=0;;a++){if(n.tagName.toUpperCase()==e)return n;if("HTML"==(n=n.parentElement).tagName.toUpperCase())return"undefined"}},findYouTubeIdByUrl:function(t){var e;if(-1==t.indexOf("?"))return t.substring(t.lastIndexOf("/")+1,t.length);e=t.substring(t.indexOf("?")+1,t.length).split("&");for(var n=0;n<e.length;n++)if("v"==e[n].split("=")[0])return e[n].split("=")[1]},orientationEvent:FxHHenableOrientationEvent(),mutual:{uiFlowStopper:{}}};function ddkUIComponent(t,e){var n=DDK.uiAPI.work(t,e);null!=n&&DDK.blert(n)}DDK.mutual={init:function(){},uiWindowOverlap:{},uiFlowStopper:{},uiAPI:{}},DDK.mutual.uiWindowOverlap={StaticConstant:{IN_ACTION_CALSS_NAME:"actived",UN_ACTION_CALSS_NAME:"unActived",LAP_NAME:".blackCover",UI_FLOW_STOPPER_NAME:".ui-flow-stopper",LAP_TRUE_COVER_CLASS_NAME:"trueCover",LAP_COLOR_COVER_CLASS_NAME:"colorCover",LAP_COLOR_COVER_WAIT_CLASS_NAME:"wait"},lapName:".blackCover",lapedHandler:{},isBindEvent:!1,overlap:function(t){var e=$(DDK.mutual.uiWindowOverlap.StaticConstant.LAP_NAME),n={delay:0,duration:700,complete:function(){$(this).removeAttr("style")}};0==$(e).hasClass(t)&&($(e).addClass(t).addClass(DDK.mutual.uiWindowOverlap.StaticConstant.IN_ACTION_CALSS_NAME),$(e).find("."+DDK.mutual.uiWindowOverlap.StaticConstant.LAP_COLOR_COVER_CLASS_NAME).animateCSS("fadeIn",n)),0==DDK.mutual.uiWindowOverlap.isBindEvent&&(FxAddEventListener(e[0],"click",DDK.mutual.uiWindowOverlap.lapClickEvent,!1),DDK.mutual.uiWindowOverlap.isBindEvent=!0)},nonOverlap:function(t,e){var n=$(DDK.mutual.uiWindowOverlap.StaticConstant.LAP_NAME);if(1==$(n).hasClass(t)){var a=function(){FxRemoveEventListener(n[0],"click",DDK.mutual.uiWindowOverlap.lapClickEvent,!1),DDK.mutual.uiWindowOverlap.isBindEvent=!1};0==e?($(n).removeClass(t),$(n).find("."+DDK.mutual.uiWindowOverlap.StaticConstant.LAP_COLOR_COVER_CLASS_NAME).animateCSS("fadeOut",{delay:0,duration:250,complete:function(){$(this).removeAttr("style"),$(n).removeClass(DDK.mutual.uiWindowOverlap.StaticConstant.IN_ACTION_CALSS_NAME),1==$(n).attr("class").split(" ").length&&1==DDK.mutual.uiWindowOverlap.isBindEvent&&a()}})):2==$(n).attr("class").split(" ").length&&1==DDK.mutual.uiWindowOverlap.isBindEvent&&a()}},registLapClickEvent:function(t){var e=t.behaviorName;t.replaced&&1==t.replaced?DDK.mutual.uiWindowOverlap.lapedHandler[e]&&(DDK.mutual.uiWindowOverlap.lapedHandler[e]=t):DDK.mutual.uiWindowOverlap.lapedHandler[e]||(DDK.mutual.uiWindowOverlap.lapedHandler[e]=t)},lapClickEvent:function(t){FxEventObject(t).overwriteDefault();var e=$(t.currentTarget).attr("class").split(" ");e=e[e.length-1],DDK.mutual.uiWindowOverlap.lapedHandler[e]&&DDK.mutual.uiWindowOverlap.lapedHandler[e].work(t)}},DDK.mutual.uiFlowStopper={eventHolder:{},StaticConstant:{IN_ACTION_CALSS_NAME:"actived",UN_ACTION_CALSS_NAME:"unActived",UI_FLOW_STOPPER_NAME:".ui-flow-stopper",UI_PLUG_IN_IDINTIFY_CLASS_NAME:"forFlowStopper",BODY_FORCE_SCROLL_CLASS_NAME:"ui-flow-stopper-locked",BEFORE_ZOOM_IN_CLASS_NAME:"beforeZoomIn"},init:function(t,e){var n,a,i,o,r,u,l;o="FlowStopper_"+String((new Date).getTime()),n=DDK.mutual.uiFlowStopper.getStopperInstance(t),a=$(DDK.mutual.uiFlowStopper.StaticConstant.UI_FLOW_STOPPER_NAME),e.firstText&&(e.firstText.text&&$(n).find("h3 span").html(e.firstText.text),e.firstText.style&&$(n).find("h3 span").attr("style",e.firstText.style)),e.secondText?(e.secondText.text&&$(n).find("h4 span").html(e.secondText.text),e.secondText.style&&$(n).find("h4 span").attr("style",e.secondText.style)):$(n).find("h4").remove(),e.doneLabel&&$(n).find("button.doneBtn span").text(e.doneLabel),e.deniedLabel&&$(n).find("button.deniedBtn span").text(e.deniedLabel),u={uiId:o},r=DDK.mutual.uiFlowStopper.eventHolder[o]={uiId:o,onAfterDone:function(t){e.uiAfterDone(u)},onAfterDenied:function(t){e.uiAfterDenied(u)},onBeforeAppear:function(){e.uiBeforeAppear()},onAfterAppear:function(){$(this).attr("style",""),e.uiAfterAppear()},onBeforeRemove:function(){e.uiBeforeRemove()},onAfterRemove:function(){$(this).attr("style",""),e.uiAfterRemove()}},"Simple Alert"==t&&(FxAddEventListener((i=$(n).find("button.doneBtn , button.closeBtn"))[0],"click",r.onAfterDone,!1),FxAddEventListener(i[1],"click",r.onAfterDone,!1)),"Simple Confirm"!=t&&"Huge Prompt"!=t&&"Small Prompt"!=t||(FxAddEventListener((i=$(n).find("button.doneBtn , button.deniedBtn"))[0],"click",r.onAfterDone,!1),FxAddEventListener(i[1],"click",r.onAfterDenied,!1)),r.onBeforeAppear(),l=0==$(a).hasClass(DDK.mutual.uiFlowStopper.StaticConstant.IN_ACTION_CALSS_NAME)?($("body").addClass(DDK.mutual.uiFlowStopper.StaticConstant.BODY_FORCE_SCROLL_CLASS_NAME),$(a).addClass(DDK.mutual.uiFlowStopper.StaticConstant.IN_ACTION_CALSS_NAME),DDK.mutual.uiWindowOverlap.overlap(DDK.mutual.uiFlowStopper.StaticConstant.UI_PLUG_IN_IDINTIFY_CLASS_NAME),300):150,"Huge Prompt"!=t&&"Small Prompt"!=t||$(n).find(".contentWrapper").append($(document.createElement("FORM")).append(e.formInstance)),$(n).attr("data-ui-id",o).addClass(DDK.mutual.uiFlowStopper.StaticConstant.BEFORE_ZOOM_IN_CLASS_NAME).hide(),$(a).append(n),setTimeout(function(){$(a).removeClass(DDK.mutual.uiWindowOverlap.StaticConstant.UN_ACTION_CALSS_NAME),$(n).removeClass(DDK.mutual.uiFlowStopper.StaticConstant.BEFORE_ZOOM_IN_CLASS_NAME),$(n).animateCSS("zoomIn",{delay:0,duration:350,complete:function(){r.onAfterAppear(),$(this).removeAttr("style")}})},l)},getStopperInstance:function(t){var e=null,n=".UIComponent .copy",a=" > article";switch(t){case"Simple Alert":e=$(n+".ui-alert"+a).clone()[0];break;case"Please Wait":e=$(n+".ui-wait"+a).clone()[0];break;case"Simple Confirm":e=$(n+".ui-confirm"+a).clone()[0];break;case"Small Prompt":e=$(n+".ui-prompt-mini"+a).clone()[0];break;case"Huge Prompt":e=$(n+".ui-prompt-huge"+a).clone()[0]}return e},currentStopperId:function(){return $($(".ui-flow-stopper").find("article")[0]).attr("data-ui-id")},removeStopperInstance:function(t,e){var n=DDK.mutual.uiFlowStopper.eventHolder[t],a=$('.ui-flow-stopper article[data-ui-id="'+t+'"]');$(a).animateCSS("zoomOut",{delay:90,duration:400,complete:function(){n.onAfterRemove(),$(this).remove(),0==$(".ui-flow-stopper").find("article").length&&($("body").removeClass(DDK.mutual.uiFlowStopper.StaticConstant.BODY_FORCE_SCROLL_CLASS_NAME),$(DDK.mutual.uiFlowStopper.StaticConstant.UI_FLOW_STOPPER_NAME).removeClass(DDK.mutual.uiFlowStopper.StaticConstant.IN_ACTION_CALSS_NAME).addClass(DDK.mutual.uiFlowStopper.StaticConstant.UN_ACTION_CALSS_NAME),DDK.mutual.uiWindowOverlap.nonOverlap(DDK.mutual.uiFlowStopper.StaticConstant.UI_PLUG_IN_IDINTIFY_CLASS_NAME,e))}})}},DDK.uiAPI={StaticConstant:{UI_FLOW_STOPPER_NAME:".ui-flow-stopper"},queue_ary:[],work:function(t,e){var n=null;if(!t)return n="uiAPI:without ui name.";if(!e)return n="uiAPI:without ui options.";for(var a=!1,i=["Simple Alert","Please Wait","Simple Confirm","Small Prompt","Huge Prompt"],o=0;o<i.length;o++)if(t==i[o]){a=!0,n="uiAPI:"+i[o]+" active.",DDK.blert(n);break}return 0==a?n="uiAPI:ui name might error.":DDK.uiAPI.formatOptions(t,e)},formatOptions:function(t,e){var n=null;if("Simple Alert"==t||"Small Prompt"==t||"Huge Prompt"==t||"Please Wait"==t||"Simple Confirm"==t){if(!e.action)return n="uiAPI:break , without action.";if("appear"!=e.action&&"remove"!=e.action)return n='uiAPI:break , "'+e.action+'" << unsupport argument.';if(e.replaced){if("boolean"!=typeof e.replaced)return n='uiAPI:break , "'+e.replaced+'" not Boolean.'}else e.replaced=!1;if(("appear"==e.action&&"Small Prompt"==t||"Huge Prompt"==t)&&(!e.formInstance||""==e.formInstance))return n="uiAPI:break , without formInstance.";n=DDK.uiAPI.workWithFlowStopper(t,e)}return n},workWithFlowStopper:function(t,a){var e=null,n=function(){var t=DDK.mutual.uiFlowStopper.currentStopperId();DDK.mutual.uiFlowStopper.removeStopperInstance(t,a.replaced)},i={function_ary:[["replaced",function(){return!0}],["suicide",function(){return!0}]]};if("appear"==a.action){a.uiAfterDone="Small Prompt"==t||"Huge Prompt"==t?function(t){var e=t.uiId,n=function(){DDK.mutual.uiFlowStopper.removeStopperInstance(e,!1)};a.afterDone?1==a.afterDone($(DDK.uiAPI.StaticConstant.UI_FLOW_STOPPER_NAME).find(".contentWrapper > form").children())&&(DDK.uiAPI.apiAddNewQueue(n,i),DDK.uiAPI.apiExcute()):(DDK.uiAPI.apiAddNewQueue(n,i),DDK.uiAPI.apiExcute())}:function(t){a.afterDone&&a.afterDone();var e=t.uiId;DDK.uiAPI.apiAddNewQueue(function(){DDK.mutual.uiFlowStopper.removeStopperInstance(e,!1)},i),DDK.uiAPI.apiExcute()};a.uiAfterDenied=function(t){a.afterDenied&&a.afterDenied();var e=t.uiId;DDK.uiAPI.apiAddNewQueue(function(){DDK.mutual.uiFlowStopper.removeStopperInstance(e,!1)},i),DDK.uiAPI.apiExcute()};var o=a.uiBeforeAppear=function(){a.events&&a.events.beforeAppear&&a.events.beforeAppear()},r=a.uiAfterAppear=function(){a.events&&a.events.afterAppear&&a.events.afterAppear()},u=a.uiBeforeRemove=function(){a.events&&a.events.beforeRemove&&a.events.beforeRemove()},l=a.uiAfterRemove=function(){a.events&&a.events.afterRemove&&a.events.afterRemove()},d={function_ary:[["idd",{n:a.firstText}],["replaced",function(){return a.replaced}],["suicide",function(){return!1}],["beforeAppear",function(){o()}],["afterAppear",function(){r()}],["beforeRemove",function(){u()}],["afterRemove",function(){l()}]]};e=(e=a.replaced&&1==a.replaced&&0<DDK.uiAPI.queue_ary.length?(e=DDK.uiAPI.apiAddNewQueue(n,i),DDK.blert(e),e=DDK.uiAPI.apiExcute(),DDK.uiAPI.apiAddNewQueue(function(){setTimeout(function(){DDK.mutual.uiFlowStopper.init(t,a)},350)},d)):DDK.uiAPI.apiAddNewQueue(function(){DDK.mutual.uiFlowStopper.init(t,a)},d),DDK.blert(e),DDK.uiAPI.apiExcute())}else"remove"==a.action&&(e=DDK.uiAPI.apiAddNewQueue(n,i),DDK.blert(e),e=DDK.uiAPI.apiExcute());return e},apiAddNewQueue:function(t,e){var n={};if(t&&(n.run=t),e)for(var a=0;a<e.function_ary.length;a++)n[e.function_ary[a][0]]=e.function_ary[a][1];return DDK.uiAPI.queue_ary.push(n),"uiAPI:add new queue , existing queues = "+DDK.uiAPI.queue_ary.length},apiExcute:function(){var t,e;return 1==DDK.uiAPI.queue_ary.length?(t=DDK.uiAPI.queue_ary[0]).run():1<DDK.uiAPI.queue_ary.length&&((t=DDK.uiAPI.queue_ary[DDK.uiAPI.queue_ary.length-1]).replaced?t.replaced&&1==t.replaced()?((e=DDK.uiAPI.queue_ary[DDK.uiAPI.queue_ary.length-2]).beforeRemove&&e.beforeRemove(),DDK.uiAPI.queue_ary.splice(DDK.uiAPI.queue_ary.length[DDK.uiAPI.queue_ary.length-2],1),t.run(),t.suicide&&1==t.suicide()&&(DDK.uiAPI.queue_ary.pop(),0<DDK.uiAPI.queue_ary.length&&DDK.uiAPI.queue_ary[0].run())):t.replaced&&t.replaced():(t.run(),DDK.uiAPI.queue_ary.pop())),"uiAPI:a queue excute , rest of queues = "+DDK.uiAPI.queue_ary.length}},FxCustomEventPolyfill();