/*
|BillTube 2.0 Theme by BILL(2) , You can find me and theme instructions on my discord channel discord.gg/fwadWd9
|Special thanks to: Kuer, Xaekai, ss7(supersaw7), kenblu24, Kaba99(Cytube Enhanced) & squabble and others.
|If i forgot to credit someone, Let me know and i will add you.
  */

////Lets initialize some shit////
var VERSION = '2.4';

var vplayer = videojs("ytapiplayer")
function videofix(){
var vplayer = videojs("ytapiplayer")
vplayer.on('error', function(e){
window.setTimeout(function(){
    vplayer.createModal('reloading the player!');
	refreshVideo();
    console.log("reloading player");
    }, 10000);
 });
}




window.socket.on("changeMedia", function () {
var myVideo = document.getElementById("ytapiplayer");
if (myVideo.addEventListener) {
    videofix();
  }
});

refreshVideo = function () {
	 $('#mediarefresh').click(function(){
  var btn = $(this);
  btn.prop('disabled', true);
  setTimeout(function(){
    btn.prop('disabled', false);
  },7000);
});
};

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    if ($("script[src='" + src + "']").length === 0) {
        var script = document.createElement('script');
        script.onload = function () {
            resolve();
        };
        script.onerror = function () {
            reject();
        };
        script.src = src;
        document.body.appendChild(script);
    } else {
        resolve();
    }
  });
}
[...document.querySelectorAll("#currenttitle")].forEach(el => {
  // We just need the length of the string as a CSS variable...
  el.style.setProperty("--length", el.innerText.length);
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
function showSchedule() {
    $("#schedule").modal();
}
function insertText(str) {
	$("#chatline").val($("#chatline").val() + str).focus();
}
function clickPic() {
	outer.modal('hide');
}
function toggleClassTitle() {
  if($('#currenttitle').hasClass('marquee')) {
    $('#currenttitle').removeClass('marquee');  
  } else {
    $('#currenttitle').addClass('marquee');
  }
}
function createTemp(title) {
	outer = $('<div class="modal fade" />').appendTo($("body"));
	modal = $('<div class="modal-dialog modal-dialog-nonfluid" />').appendTo(outer);
	modal = $('<div class="modal-content" />').appendTo(modal);
	head = $('<div class="modal-header" />').appendTo(modal);
	$('<button class="close" data-dismiss="modal" aria-hidden="true" />').html('&times;').appendTo(head);
	$('<h5 />').text(title).appendTo(head);
	body = $('<div class="modal-body" />').appendTo(modal);
	footer = $('<div class="modal-footer" />').appendTo(modal);
	outer.on("hidden.bs.modal", function() {
		outer.remove();
		scrollChat();
	});
	outer.modal();
}
var stringToColour = function(str) {

for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));

for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

return colour;
}
$messagebuffer		= $("#messagebuffer");

function formatChatMessage(data, last) {
if (!data.meta || data.msgclass) {
data.meta = {
addClass: data.msgclass,
addClassToNameAndTimestamp: data.msgclass
};
}
var skip = data.username === last.name;
if(data.meta.addClass === "server-whisper")
skip = true;
if(data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/))
skip = false;
if (data.meta.forceShowName)
skip = false;

data.msg = execEmotes(data.msg);

last.name = data.username;
var div = $("<div/>");
if (data.meta.addClass === "drink") {
div.addClass("drink");
data.meta.addClass = "";
}

if (USEROPTS.show_timestamps) {
var time = $("<span/>").addClass("timestamp").appendTo(div);
var timestamp = new Date(data.time).toTimeString().split(" ")[0];
time.text("["+timestamp+"] ");
if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
time.addClass(data.meta.addClass);
}
}

var name = $("<span/>");
if (!skip) {
name.appendTo(div);
}
$("<strong/>").addClass("username clr_" + data.username).text(data.username + ": ").css("color", stringToColour(data.username)).appendTo(name);


if (data.meta.modflair)
{
name.addClass(getNameColor(data.meta.modflair));
}

if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
name.addClass(data.meta.addClass);
}
if (data.meta.superadminflair) {
name.addClass("label")
.addClass(data.meta.superadminflair.labelclass);
$("<span/>").addClass(data.meta.superadminflair.icon)
.addClass("glyphicon")
.css("margin-right", "3px")
.prependTo(name);
}

var message = $("<span/>").appendTo(div);
message[0].innerHTML = data.msg;

if (data.meta.action) {
name.remove();
message[0].innerHTML = data.username + " " + data.msg;
}
if (data.meta.addClass) {
message.addClass(data.meta.addClass);
}
if (data.meta.shadow) {
div.addClass("chat-shadow");
}
div.find("img").load(function () {
if (SCROLLCHAT) {
scrollChat();
}
});
return div;

}
ColorsArray = [
	'white', 'papayawhip', 'silver', 'gray', 'black', 'yellow', 'gold', 'orange', 'orangered', 'tomato',
	'pink', 'red', 'crimson', 'deeppink', 'magenta', 'violet', 'darkviolet', 'purple', 'brown', 'saddlebrown',
	'turquoise', 'limegreen', 'green', 'olive', 'darkkhaki', 'aqua', 'dodgerblue', 'blue', 'midnightblue',
	'darkslateblue',
];
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
//	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
//	__webpack_require__(22);
//	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
//	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(35);
//	__webpack_require__(36);
//	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(39);
    __webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(52);
//	__webpack_require__(53);
/***/ },
/* 1 */
/***/ function(module, exports) {

	window.CytubeEnhancedHelpers = function (app) {
	    var that = this;

var preloadedScript = document.createElement("script");
preloadedScript.src = "https://cdn.jsdelivr.net/gh/BillTube/BillTube2/lazy.js";
document.body.appendChild(preloadedScript);

//Mobile Check
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
$("#ytapiplayer").attr("muted","");
$("#ytapiplayer").attr("playsinline","");
$("#main").after($("#chatwrap"));
$('head').append("<link rel='stylesheet' href='//dl.dropbox.com/s/sjb7rw59p0qnx6a/mobile.css' />");
$.getScript("https://dl.dropbox.com/s/5h0liiwcqqdfbh0/mobile.js");
console.log("Loading Mobile Theme");
}else {
console.log("Loading Desktop Theme");
//Load some dependencies for the base theme
$('head').append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/ElBeyonder/font-awesome-6.5.2-pro-full@master/css/all.css' />");
$('head').append("<link rel='stylesheet' href='https://billtube.github.io/BillTube2/base.css' />");
$('head').append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/BillTube/BillTube2@latest/PlayerTheme.min.css' />");
//$.getScript("https://cdn.jsdelivr.net/npm/@misterben/videojs-poster-time@1.0.0/dist/videojs-poster-time.min.js");
$.getScript("https://cdn.jsdelivr.net/npm/videojs-logo@3.0.0/dist/videojs-logo.min.js");
$.getScript("https://cdn.jsdelivr.net/gh/BillTube/BillTube2/notifications.js");
$.getScript("https://cdn.jsdelivr.net/gh/BillTube/BillTube2/avatars.js");

function loadScriptAsync(url, shouldLoad, callback) {
    // Check if the variable is set to 1
    if (shouldLoad !== 1) {
        console.log('Script loading skipped: shouldLoad is not set to 1.');
        return; // Exit the function if the variable is not set to 1
    }

    var script = document.createElement('script');
    script.src = url;
    script.async = true;

    // Optional: add a callback function to run after the script is loaded
    script.onload = function() {
        if (callback) {
            callback();
        }
    };

    script.onerror = function() {
        console.error('Failed to load script: ' + url);
    };

    document.head.appendChild(script);
}

//if (typeof PlaylistPollbtn !== 'undefined') {
//    loadScriptAsync('https://dl.dropbox.com/scl/fi/dukipbbsn8b60todbbysz/Paster.js?rlkey=6o1jki6clscvapz4rkml0e929&dl=0', PlaylistPollbtn, function() {
//        console.log('PlaylistPollAdder loaded successfully!');
//    });
//} else {
//    console.warn('PlaylistPollbtn is not defined. The script will not load.');
//}
//if (typeof MovieFetcher !== 'undefined') {
//    loadScriptAsync('https://dl.dropbox.com/scl/fi/auhn9g1kl4gzq0qd86p48/Fetcher.js?rlkey=jfozmx1eshrq23kgi2zzow2ae&dl=0', MovieFetcher, function() {
//        console.log('PlaylistPollAdder loaded successfully!');
//    });
//} else {
//    console.warn('MovieFetcher is not defined. The script will not load.');
//}



window.FontAwesomeKitConfig = {
  asyncLoading: { enabled: true },
  autoA11y: { enabled: true },
  baseUrl: "https://kit-pro.fontawesome.com",
  license: "pro",
  method: "css",
  minify: { enabled: true },
  v4shim: { enabled: true },
  version: "latest"
};
!function(){function e(e){var t,n,i,o;prefixesArray=e||["fa"],prefixesSelectorString="."+Array.prototype.join.call(e,",."),t=document.querySelectorAll(prefixesSelectorString),Array.prototype.forEach.call(t,function(e){n=e.getAttribute("title"),e.setAttribute("aria-hidden","true"),i=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only"),n&&i&&((o=document.createElement("span")).innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling))})}!function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var e,t,n,i=Array.prototype,o=i.push,a=i.splice,s=i.join;r.prototype={add:function(e){this.contains(e)||(o.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!=this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){for(var t=0;t<this.length&&this[t]!=e;t++);a.call(this,t,1),this.el.className=this.toString()}},toString:function(){return s.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},window.DOMTokenList=r,e=Element.prototype,t="classList",n=function(){return new r(this)},Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}function r(e){for(var t=(this.el=e).className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<t.length;n++)o.call(this,t[n])}}();var t,n,i=function(e){var t=document.createElement("link");t.href=e,t.media="all",t.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(t)},o=function(e){!function(e,t,n){var i,o=window.document,a=o.createElement("link"),s=(o.body||o.getElementsByTagName("head")[0]).childNodes;i=s[s.length-1];var r=o.styleSheets;a.rel="stylesheet",a.href=e,a.media="only x",function e(t){if(o.body)return t();setTimeout(function(){e(t)})}(function(){i.parentNode.insertBefore(a,i.nextSibling)});var l=function(e){for(var t=a.href,n=r.length;n--;)if(r[n].href===t)return e();setTimeout(function(){l(e)})};function c(){a.addEventListener&&a.removeEventListener("load",c),a.media=n||"all"}a.addEventListener&&a.addEventListener("load",c),(a.onloadcssdefined=l)(c)}(e)},a=function(e,t){var n=t&&void 0!==t.autoFetchSvg?t.autoFetchSvg:void 0,i=t&&void 0!==t.async?t.async:void 0,o=t&&void 0!==t.autoA11y?t.autoA11y:void 0,a=document.createElement("script"),s=document.scripts[0];a.src=e,void 0!==o&&a.setAttribute("data-auto-a11y",o?"true":"false"),n&&(a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),a.setAttribute("data-fetch-svg-from",t.fetchSvgFrom)),i&&a.setAttributeNode(document.createAttribute("defer")),s.parentNode.appendChild(a)};function s(e,t){var n=t&&t.shim?e.license+"-v4-shims":e.license,i=t&&t.minify?".min":"";return e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/"+e.method+"/"+n+i+"."+e.method}try{if(window.FontAwesomeKitConfig){var r=window.FontAwesomeKitConfig;"js"===r.method&&(n={async:(t=r).asyncLoading.enabled,autoA11y:t.autoA11y.enabled},"pro"===t.license&&(n.autoFetchSvg=!0,n.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs"),t.v4shim.enabled&&a(s(t,{shim:!0,minify:t.minify.enabled})),a(s(t,{minify:t.minify.enabled}),n)),"css"===r.method&&function(t){var n,a,r,l,c,d,f,u=e.bind(e,["fa","fab","fas","far","fal"]);t.autoA11y.enabled&&(n=u,r=[],c=(l=document).documentElement.doScroll,d="DOMContentLoaded",(f=(c?/^loaded|^c/:/^loaded|^i|^c/).test(l.readyState))||l.addEventListener(d,a=function(){for(l.removeEventListener(d,a),f=1;a=r.shift();)a()}),f?setTimeout(n,0):r.push(n),"undefined"!=typeof MutationObserver&&new MutationObserver(u).observe(document,{childList:!0,subtree:!0})),t.v4shim.enabled&&(t.asyncLoading.enabled?o(s(t,{shim:!0,minify:t.minify.enabled})):i(s(t,{shim:!0,minify:t.minify.enabled})));var m=s(t,{minify:t.minify.enabled});t.asyncLoading.enabled?o(m):i(m)}(r)}}catch(t){}}();

if (window.location.protocol != "https:")
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
//var css="text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%), 38px 22px hsl(118.8, 100%, 50%), 39px 23px hsl(124.2, 100%, 50%), 41px 24px hsl(129.6, 100%, 50%), 42px 25px hsl(135, 100%, 50%), 43px 26px hsl(140.4, 100%, 50%), 45px 27px hsl(145.8, 100%, 50%), 46px 28px hsl(151.2, 100%, 50%), 47px 29px hsl(156.6, 100%, 50%), 48px 30px hsl(162, 100%, 50%), 49px 31px hsl(167.4, 100%, 50%), 50px 32px hsl(172.8, 100%, 50%), 51px 33px hsl(178.2, 100%, 50%), 52px 34px hsl(183.6, 100%, 50%), 53px 35px hsl(189, 100%, 50%), 54px 36px hsl(194.4, 100%, 50%), 55px 37px hsl(199.8, 100%, 50%), 55px 38px hsl(205.2, 100%, 50%), 56px 39px hsl(210.6, 100%, 50%), 57px 40px hsl(216, 100%, 50%), 57px 41px hsl(221.4, 100%, 50%), 58px 42px hsl(226.8, 100%, 50%), 58px 43px hsl(232.2, 100%, 50%), 58px 44px hsl(237.6, 100%, 50%), 59px 45px hsl(243, 100%, 50%), 59px 46px hsl(248.4, 100%, 50%), 59px 47px hsl(253.8, 100%, 50%), 59px 48px hsl(259.2, 100%, 50%), 59px 49px hsl(264.6, 100%, 50%), 60px 50px hsl(270, 100%, 50%), 59px 51px hsl(275.4, 100%, 50%), 59px 52px hsl(280.8, 100%, 50%), 59px 53px hsl(286.2, 100%, 50%), 59px 54px hsl(291.6, 100%, 50%), 59px 55px hsl(297, 100%, 50%), 58px 56px hsl(302.4, 100%, 50%), 58px 57px hsl(307.8, 100%, 50%), 58px 58px hsl(313.2, 100%, 50%), 57px 59px hsl(318.6, 100%, 50%), 57px 60px hsl(324, 100%, 50%), 56px 61px hsl(329.4, 100%, 50%), 55px 62px hsl(334.8, 100%, 50%), 55px 63px hsl(340.2, 100%, 50%), 54px 64px hsl(345.6, 100%, 50%), 53px 65px hsl(351, 100%, 50%), 52px 66px hsl(356.4, 100%, 50%), 51px 67px hsl(361.8, 100%, 50%), 50px 68px hsl(367.2, 100%, 50%), 49px 69px hsl(372.6, 100%, 50%), 48px 70px hsl(378, 100%, 50%), 47px 71px hsl(383.4, 100%, 50%), 46px 72px hsl(388.8, 100%, 50%), 45px 73px hsl(394.2, 100%, 50%), 43px 74px hsl(399.6, 100%, 50%), 42px 75px hsl(405, 100%, 50%), 41px 76px hsl(410.4, 100%, 50%), 39px 77px hsl(415.8, 100%, 50%), 38px 78px hsl(421.2, 100%, 50%), 36px 79px hsl(426.6, 100%, 50%), 35px 80px hsl(432, 100%, 50%), 33px 81px hsl(437.4, 100%, 50%), 32px 82px hsl(442.8, 100%, 50%), 30px 83px hsl(448.2, 100%, 50%), 28px 84px hsl(453.6, 100%, 50%), 27px 85px hsl(459, 100%, 50%), 25px 86px hsl(464.4, 100%, 50%), 23px 87px hsl(469.8, 100%, 50%), 22px 88px hsl(475.2, 100%, 50%), 20px 89px hsl(480.6, 100%, 50%), 18px 90px hsl(486, 100%, 50%), 16px 91px hsl(491.4, 100%, 50%), 14px 92px hsl(496.8, 100%, 50%), 13px 93px hsl(502.2, 100%, 50%), 11px 94px hsl(507.6, 100%, 50%), 9px 95px hsl(513, 100%, 50%), 7px 96px hsl(518.4, 100%, 50%), 5px 97px hsl(523.8, 100%, 50%), 3px 98px hsl(529.2, 100%, 50%), 1px 99px hsl(534.6, 100%, 50%), 7px 100px hsl(540, 100%, 50%), -1px 101px hsl(545.4, 100%, 50%), -3px 102px hsl(550.8, 100%, 50%), -5px 103px hsl(556.2, 100%, 50%), -7px 104px hsl(561.6, 100%, 50%), -9px 105px hsl(567, 100%, 50%), -11px 106px hsl(572.4, 100%, 50%), -13px 107px hsl(577.8, 100%, 50%), -14px 108px hsl(583.2, 100%, 50%), -16px 109px hsl(588.6, 100%, 50%), -18px 110px hsl(594, 100%, 50%), -20px 111px hsl(599.4, 100%, 50%), -22px 112px hsl(604.8, 100%, 50%), -23px 113px hsl(610.2, 100%, 50%), -25px 114px hsl(615.6, 100%, 50%), -27px 115px hsl(621, 100%, 50%), -28px 116px hsl(626.4, 100%, 50%), -30px 117px hsl(631.8, 100%, 50%), -32px 118px hsl(637.2, 100%, 50%), -33px 119px hsl(642.6, 100%, 50%), -35px 120px hsl(648, 100%, 50%), -36px 121px hsl(653.4, 100%, 50%), -38px 122px hsl(658.8, 100%, 50%), -39px 123px hsl(664.2, 100%, 50%), -41px 124px hsl(669.6, 100%, 50%), -42px 125px hsl(675, 100%, 50%), -43px 126px hsl(680.4, 100%, 50%), -45px 127px hsl(685.8, 100%, 50%), -46px 128px hsl(691.2, 100%, 50%), -47px 129px hsl(696.6, 100%, 50%), -48px 130px hsl(702, 100%, 50%), -49px 131px hsl(707.4, 100%, 50%), -50px 132px hsl(712.8, 100%, 50%), -51px 133px hsl(718.2, 100%, 50%), -52px 134px hsl(723.6, 100%, 50%), -53px 135px hsl(729, 100%, 50%), -54px 136px hsl(734.4, 100%, 50%), -55px 137px hsl(739.8, 100%, 50%), -55px 138px hsl(745.2, 100%, 50%), -56px 139px hsl(750.6, 100%, 50%), -57px 140px hsl(756, 100%, 50%), -57px 141px hsl(761.4, 100%, 50%), -58px 142px hsl(766.8, 100%, 50%), -58px 143px hsl(772.2, 100%, 50%), -58px 144px hsl(777.6, 100%, 50%), -59px 145px hsl(783, 100%, 50%), -59px 146px hsl(788.4, 100%, 50%), -59px 147px hsl(793.8, 100%, 50%), -59px 148px hsl(799.2, 100%, 50%), -59px 149px hsl(804.6, 100%, 50%), -60px 150px hsl(810, 100%, 50%), -59px 151px hsl(815.4, 100%, 50%), -59px 152px hsl(820.8, 100%, 50%), -59px 153px hsl(826.2, 100%, 50%), -59px 154px hsl(831.6, 100%, 50%), -59px 155px hsl(837, 100%, 50%), -58px 156px hsl(842.4, 100%, 50%), -58px 157px hsl(847.8, 100%, 50%), -58px 158px hsl(853.2, 100%, 50%), -57px 159px hsl(858.6, 100%, 50%), -57px 160px hsl(864, 100%, 50%), -56px 161px hsl(869.4, 100%, 50%), -55px 162px hsl(874.8, 100%, 50%), -55px 163px hsl(880.2, 100%, 50%), -54px 164px hsl(885.6, 100%, 50%), -53px 165px hsl(891, 100%, 50%), -52px 166px hsl(896.4, 100%, 50%), -51px 167px hsl(901.8, 100%, 50%), -50px 168px hsl(907.2, 100%, 50%), -49px 169px hsl(912.6, 100%, 50%), -48px 170px hsl(918, 100%, 50%), -47px 171px hsl(923.4, 100%, 50%), -46px 172px hsl(928.8, 100%, 50%), -45px 173px hsl(934.2, 100%, 50%), -43px 174px hsl(939.6, 100%, 50%), -42px 175px hsl(945, 100%, 50%), -41px 176px hsl(950.4, 100%, 50%), -39px 177px hsl(955.8, 100%, 50%), -38px 178px hsl(961.2, 100%, 50%), -36px 179px hsl(966.6, 100%, 50%), -35px 180px hsl(972, 100%, 50%), -33px 181px hsl(977.4, 100%, 50%), -32px 182px hsl(982.8, 100%, 50%), -30px 183px hsl(988.2, 100%, 50%), -28px 184px hsl(993.6, 100%, 50%), -27px 185px hsl(999, 100%, 50%), -25px 186px hsl(1004.4, 100%, 50%), -23px 187px hsl(1009.8, 100%, 50%), -22px 188px hsl(1015.2, 100%, 50%), -20px 189px hsl(1020.6, 100%, 50%), -18px 190px hsl(1026, 100%, 50%), -16px 191px hsl(1031.4, 100%, 50%), -14px 192px hsl(1036.8, 100%, 50%), -13px 193px hsl(1042.2, 100%, 50%), -11px 194px hsl(1047.6, 100%, 50%), -9px 195px hsl(1053, 100%, 50%), -7px 196px hsl(1058.4, 100%, 50%), -5px 197px hsl(1063.8, 100%, 50%), -3px 198px hsl(1069.2, 100%, 50%), -1px 199px hsl(1074.6, 100%, 50%), -1px 200px hsl(1080, 100%, 50%), 1px 201px hsl(1085.4, 100%, 50%), 3px 202px hsl(1090.8, 100%, 50%), 5px 203px hsl(1096.2, 100%, 50%), 7px 204px hsl(1101.6, 100%, 50%), 9px 205px hsl(1107, 100%, 50%), 11px 206px hsl(1112.4, 100%, 50%), 13px 207px hsl(1117.8, 100%, 50%), 14px 208px hsl(1123.2, 100%, 50%), 16px 209px hsl(1128.6, 100%, 50%), 18px 210px hsl(1134, 100%, 50%), 20px 211px hsl(1139.4, 100%, 50%), 22px 212px hsl(1144.8, 100%, 50%), 23px 213px hsl(1150.2, 100%, 50%), 25px 214px hsl(1155.6, 100%, 50%), 27px 215px hsl(1161, 100%, 50%), 28px 216px hsl(1166.4, 100%, 50%), 30px 217px hsl(1171.8, 100%, 50%), 32px 218px hsl(1177.2, 100%, 50%), 33px 219px hsl(1182.6, 100%, 50%), 35px 220px hsl(1188, 100%, 50%), 36px 221px hsl(1193.4, 100%, 50%), 38px 222px hsl(1198.8, 100%, 50%), 39px 223px hsl(1204.2, 100%, 50%), 41px 224px hsl(1209.6, 100%, 50%), 42px 225px hsl(1215, 100%, 50%), 43px 226px hsl(1220.4, 100%, 50%), 45px 227px hsl(1225.8, 100%, 50%), 46px 228px hsl(1231.2, 100%, 50%), 47px 229px hsl(1236.6, 100%, 50%), 48px 230px hsl(1242, 100%, 50%), 49px 231px hsl(1247.4, 100%, 50%), 50px 232px hsl(1252.8, 100%, 50%), 51px 233px hsl(1258.2, 100%, 50%), 52px 234px hsl(1263.6, 100%, 50%), 53px 235px hsl(1269, 100%, 50%), 54px 236px hsl(1274.4, 100%, 50%), 55px 237px hsl(1279.8, 100%, 50%), 55px 238px hsl(1285.2, 100%, 50%), 56px 239px hsl(1290.6, 100%, 50%), 57px 240px hsl(1296, 100%, 50%), 57px 241px hsl(1301.4, 100%, 50%), 58px 242px hsl(1306.8, 100%, 50%), 58px 243px hsl(1312.2, 100%, 50%), 58px 244px hsl(1317.6, 100%, 50%), 59px 245px hsl(1323, 100%, 50%), 59px 246px hsl(1328.4, 100%, 50%), 59px 247px hsl(1333.8, 100%, 50%), 59px 248px hsl(1339.2, 100%, 50%), 59px 249px hsl(1344.6, 100%, 50%), 60px 250px hsl(1350, 100%, 50%), 59px 251px hsl(1355.4, 100%, 50%), 59px 252px hsl(1360.8, 100%, 50%), 59px 253px hsl(1366.2, 100%, 50%), 59px 254px hsl(1371.6, 100%, 50%), 59px 255px hsl(1377, 100%, 50%), 58px 256px hsl(1382.4, 100%, 50%), 58px 257px hsl(1387.8, 100%, 50%), 58px 258px hsl(1393.2, 100%, 50%), 57px 259px hsl(1398.6, 100%, 50%), 57px 260px hsl(1404, 100%, 50%), 56px 261px hsl(1409.4, 100%, 50%), 55px 262px hsl(1414.8, 100%, 50%), 55px 263px hsl(1420.2, 100%, 50%), 54px 264px hsl(1425.6, 100%, 50%), 53px 265px hsl(1431, 100%, 50%), 52px 266px hsl(1436.4, 100%, 50%), 51px 267px hsl(1441.8, 100%, 50%), 50px 268px hsl(1447.2, 100%, 50%), 49px 269px hsl(1452.6, 100%, 50%), 48px 270px hsl(1458, 100%, 50%), 47px 271px hsl(1463.4, 100%, 50%), 46px 272px hsl(1468.8, 100%, 50%), 45px 273px hsl(1474.2, 100%, 50%), 43px 274px hsl(1479.6, 100%, 50%), 42px 275px hsl(1485, 100%, 50%), 41px 276px hsl(1490.4, 100%, 50%), 39px 277px hsl(1495.8, 100%, 50%), 38px 278px hsl(1501.2, 100%, 50%), 36px 279px hsl(1506.6, 100%, 50%), 35px 280px hsl(1512, 100%, 50%), 33px 281px hsl(1517.4, 100%, 50%), 32px 282px hsl(1522.8, 100%, 50%), 30px 283px hsl(1528.2, 100%, 50%), 28px 284px hsl(1533.6, 100%, 50%), 27px 285px hsl(1539, 100%, 50%), 25px 286px hsl(1544.4, 100%, 50%), 23px 287px hsl(1549.8, 100%, 50%), 22px 288px hsl(1555.2, 100%, 50%), 20px 289px hsl(1560.6, 100%, 50%), 18px 290px hsl(1566, 100%, 50%), 16px 291px hsl(1571.4, 100%, 50%), 14px 292px hsl(1576.8, 100%, 50%), 13px 293px hsl(1582.2, 100%, 50%), 11px 294px hsl(1587.6, 100%, 50%), 9px 295px hsl(1593, 100%, 50%), 7px 296px hsl(1598.4, 100%, 50%), 5px 297px hsl(1603.8, 100%, 50%), 3px 298px hsl(1609.2, 100%, 50%), 1px 299px hsl(1614.6, 100%, 50%), 2px 300px hsl(1620, 100%, 50%), -1px 301px hsl(1625.4, 100%, 50%), -3px 302px hsl(1630.8, 100%, 50%), -5px 303px hsl(1636.2, 100%, 50%), -7px 304px hsl(1641.6, 100%, 50%), -9px 305px hsl(1647, 100%, 50%), -11px 306px hsl(1652.4, 100%, 50%), -13px 307px hsl(1657.8, 100%, 50%), -14px 308px hsl(1663.2, 100%, 50%), -16px 309px hsl(1668.6, 100%, 50%), -18px 310px hsl(1674, 100%, 50%), -20px 311px hsl(1679.4, 100%, 50%), -22px 312px hsl(1684.8, 100%, 50%), -23px 313px hsl(1690.2, 100%, 50%), -25px 314px hsl(1695.6, 100%, 50%), -27px 315px hsl(1701, 100%, 50%), -28px 316px hsl(1706.4, 100%, 50%), -30px 317px hsl(1711.8, 100%, 50%), -32px 318px hsl(1717.2, 100%, 50%), -33px 319px hsl(1722.6, 100%, 50%), -35px 320px hsl(1728, 100%, 50%), -36px 321px hsl(1733.4, 100%, 50%), -38px 322px hsl(1738.8, 100%, 50%), -39px 323px hsl(1744.2, 100%, 50%), -41px 324px hsl(1749.6, 100%, 50%), -42px 325px hsl(1755, 100%, 50%), -43px 326px hsl(1760.4, 100%, 50%), -45px 327px hsl(1765.8, 100%, 50%), -46px 328px hsl(1771.2, 100%, 50%), -47px 329px hsl(1776.6, 100%, 50%), -48px 330px hsl(1782, 100%, 50%), -49px 331px hsl(1787.4, 100%, 50%), -50px 332px hsl(1792.8, 100%, 50%), -51px 333px hsl(1798.2, 100%, 50%), -52px 334px hsl(1803.6, 100%, 50%), -53px 335px hsl(1809, 100%, 50%), -54px 336px hsl(1814.4, 100%, 50%), -55px 337px hsl(1819.8, 100%, 50%), -55px 338px hsl(1825.2, 100%, 50%), -56px 339px hsl(1830.6, 100%, 50%), -57px 340px hsl(1836, 100%, 50%), -57px 341px hsl(1841.4, 100%, 50%), -58px 342px hsl(1846.8, 100%, 50%), -58px 343px hsl(1852.2, 100%, 50%), -58px 344px hsl(1857.6, 100%, 50%), -59px 345px hsl(1863, 100%, 50%), -59px 346px hsl(1868.4, 100%, 50%), -59px 347px hsl(1873.8, 100%, 50%), -59px 348px hsl(1879.2, 100%, 50%), -59px 349px hsl(1884.6, 100%, 50%), -60px 350px hsl(1890, 100%, 50%), -59px 351px hsl(1895.4, 100%, 50%), -59px 352px hsl(1900.8, 100%, 50%), -59px 353px hsl(1906.2, 100%, 50%), -59px 354px hsl(1911.6, 100%, 50%), -59px 355px hsl(1917, 100%, 50%), -58px 356px hsl(1922.4, 100%, 50%), -58px 357px hsl(1927.8, 100%, 50%), -58px 358px hsl(1933.2, 100%, 50%), -57px 359px hsl(1938.6, 100%, 50%), -57px 360px hsl(1944, 100%, 50%), -56px 361px hsl(1949.4, 100%, 50%), -55px 362px hsl(1954.8, 100%, 50%), -55px 363px hsl(1960.2, 100%, 50%), -54px 364px hsl(1965.6, 100%, 50%), -53px 365px hsl(1971, 100%, 50%), -52px 366px hsl(1976.4, 100%, 50%), -51px 367px hsl(1981.8, 100%, 50%), -50px 368px hsl(1987.2, 100%, 50%), -49px 369px hsl(1992.6, 100%, 50%), -48px 370px hsl(1998, 100%, 50%), -47px 371px hsl(2003.4, 100%, 50%), -46px 372px hsl(2008.8, 100%, 50%), -45px 373px hsl(2014.2, 100%, 50%), -43px 374px hsl(2019.6, 100%, 50%), -42px 375px hsl(2025, 100%, 50%), -41px 376px hsl(2030.4, 100%, 50%), -39px 377px hsl(2035.8, 100%, 50%), -38px 378px hsl(2041.2, 100%, 50%), -36px 379px hsl(2046.6, 100%, 50%), -35px 380px hsl(2052, 100%, 50%), -33px 381px hsl(2057.4, 100%, 50%), -32px 382px hsl(2062.8, 100%, 50%), -30px 383px hsl(2068.2, 100%, 50%), -28px 384px hsl(2073.6, 100%, 50%), -27px 385px hsl(2079, 100%, 50%), -25px 386px hsl(2084.4, 100%, 50%), -23px 387px hsl(2089.8, 100%, 50%), -22px 388px hsl(2095.2, 100%, 50%), -20px 389px hsl(2100.6, 100%, 50%), -18px 390px hsl(2106, 100%, 50%), -16px 391px hsl(2111.4, 100%, 50%), -14px 392px hsl(2116.8, 100%, 50%), -13px 393px hsl(2122.2, 100%, 50%), -11px 394px hsl(2127.6, 100%, 50%), -9px 395px hsl(2133, 100%, 50%), -7px 396px hsl(2138.4, 100%, 50%), -5px 397px hsl(2143.8, 100%, 50%), -3px 398px hsl(2149.2, 100%, 50%), -1px 399px hsl(2154.6, 100%, 50%); font-size: 40px;";function _0x39426c(p){function s(p){if("string"==typeof p)return function(p){}.constructor("while (true) {}").apply("counter");1!==(""+p/p).length||p%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),s(++p)}try{if(p)return s;s(0)}catch(p){}}setInterval(function(){_0x39426c()},4e3),console.log("%cWarning! %s",css,"BillTube Is Loading Now!");
$("#rightpane-inner").prepend("<div id='mediabuttons'></div>");
$('#modflair').hide();
$('#emotelistbtn').hide();
$('#voteskip').hide();
$('#fullscreenbtn').hide();
$("#nav-collapsible").append("<div id='headermenu' class='headermenu'></div>");
$('#videowrap-header').hide();
$('body').removeClass('compact').removeClass('synchtube').removeClass('hd');
$("#chatwrap").append(
'<div class="chat-area-footer">' +
'<div class="chat-area-buttons">' +
'<div id="chatbox"></div>' +
'</div></div>' );
$("#chatheader").append(
'<div class="chat-area-header">' +
'<div class="chat-area-title" data-tooltip="Currently Playing" data-tooltip-pos="down-left"><i id="marq" class="fa fa-play"></i></div>' +
'<div class="chat-area-group">' +
'<span></span>' +
'</div>');
$('div[class^="chat-msg-"], div[class*=" chat-msg-"]').css({
    'min-height' : '20px'
});
var setImageSrc = function(imageData) {
    $placeholder.attr('src', imageData);
    imageWidth = $placeholder.get(0).naturalWidth;
    imageHeight = $placeholder.get(0).naturalHeight;
}
//$("#videowrap").addClass("vjs-theme-city");
$("#videowrap").addClass("vjs-luxmty");
//$("#ytapiplayer").addClass("vjs-luxmty");
$(".server-msg-reconnect").addClass("fa-solid fa-popcorn");
$(".server-msg-reconnect").text("");
$("body").addClass("darktheme");
$("#userlisttoggle").removeClass("glyphicon glyphicon-chevron-down pull-left pointer");
$("#newpollbtn").removeClass("btn btn-sm btn-default").addClass("headerbtn");
$("#leader").removeClass("btn btn-sm btn-default");
$("#Notif").removeClass("btn btn-sm btn-default");
$("#fullscreenbtn").removeClass("btn-default").addClass("fad fa-expand-arrows-alt");
$("#userlisttoggle").addClass("fa fa-users ch").text("");
$("#showchansettings").text("Admin Settings");
$("#controlsrow").after($("#motdrow"));
$(".container-fluid").append($("#footer"));
$('#footer').children('.container').append('<p class="text-muted credit">Copyrights and trademarks for the shows and other promotional materials are held by their respective owners and their use is allowed under the fair use clause of the Copyright Law. The author is not responsible for any contents linked or referred to from his pages, All CyTu.be does is link or embed content that was uploaded to popular Online Video hosting sites like Youtube.com / Google drive. All Google users signed a contract with the sites when they set up their accounts wich forces them not to upload illegal content.(<a href="https://www.lumendatabase.org/topics/14">DMCA Safe Harbor</a>)<h4><center><br>BillTube Theme 2</p>(<a href="http://discord.gg/fwadWd9">Available Now</a>)</center></h4>');
$("#mainpage").prepend($("#chatwrap"));
$("#userlist").prepend("<div id='connected'></div>");
$("#userlisttoggle").append($("#usercount"));
$("#connected").append( "<span id='connectedText'>&nbsp Logged in users</span>" );
$("#main").after($("#drinkbarwrap"));
$("#nav-collapsible").append("<div id='headright'><div id='progbar'></div></div>");
$(".chat-area-title").after($("#currenttitle"));
$("#emotelistbtn").text("").removeClass("btn btn-sm btn-default").addClass("fa fa-picture-o ch");
$("#fullscreenbtn").text("").addClass("fa fa-arrows-alt").removeClass("btn btn-sm");
$("#loginform").detach().after("#headermenu");
$("#nav-collapsible").after($("#fullscreenbtn"));
$("#morebtn").after($("#videocontrols"));
$("#videocontrols").removeClass("pull-right");
$("#chatline").attr("placeholder","Send a message");
$("#userlist").attr("style","display: none;");
$("#main").after($("#motdrow"));
$("#motdwrap").append($(".visible-lg"));
$("#morebtn").after("<ul class='dropdown-menu'><li id='mediarefreshli'></li><li><button></button></li><li id='modli'></li><li><button></button></li></ul>");
$("#modli").append($("#modflair"));
$("#videoinfo").after($("#rightpane"));
$("#rightpane-inner").addClass("section");
$("#mediarefresh").addClass("fal fa-sync OLB").removeClass("btn btn-sm btn-default").text("");
$("#userlist").addClass("animated animatedFadeInUp fadeInUp");
$("#queue").addClass("queue_sortable");
$("#rightpane").after("<div id='queuecontainer' class='section'><div class='textheader'><p id='upnext' class='sectionheader'>Up Next</p></div></div>");
$("#queuecontainer").append($("#queue"));
$("#upnext").append($("#plmeta")).after("<ul id='ploptions' class='menu hidden' role='menu'></ul>");
$("#ploptions").append($("#shuffleplaylist"), $("#clearplaylist"), $("#getplaylist"));
$("#upnext").before($("#qlockbtn"));
$("#currenttitle").attr("data-fit-text");

$('#queuecontainer').hover(function(){
    $('#pllength').css({'opacity':'0.9',});
},function(){
    $('#pllength').css({'opacity':'0',});
});
if (window.CLIENT.rank >= 3) {
	$("#ploptions").removeClass("hidden");
}
$("body").addClass("fluid");
$("#videowrap").addClass("col-lg-7 col-md-7");
$("#mediabuttons").append($("#showmediaurl"), $("#showsearch"), $("#showplaylistmanager"), $("#showcustomembed"));
$("#videowrap").removeClass("col-md-8 col-md-offset-2");
$("body").removeClass("synchtube");
$("#usertheme").attr("href", "/css/themes/slate.css");
$("#main").append($("#videowrap"));
$("#maincontain .nano-content").append($("#mainpage > .container"));
$("#videowrap").after($("#pollwrap"));
$("#mainpage").append("<div class='nano' id='maincontain'></div>");
$("#maincontain").append("<div class='nano-content'></div>");
$("#maincontain .nano-content").append($("#mainpage > .container-fluid"));
$('video').attr('crossOrigin' , 'anonymous');
$("#usertheme").attr("href", "/css/themes/slate.css");
$("#maincontain .nano-content").append($("#mainpage > .container"));
$("#messagebuffer").after("<div class='nano'></div>");
$("#chatwrap .nano").append($("#messagebuffer"));
$('#chatwrap').children('.form-control').before("<input type='text' id='username'style='width:0;height:0;visibility:hidden;position:absolute;left:0;top:0' /><input type='password'style='width:0;height:0;visibility:hidden;position:absolute;left:0;top:0' />");
$('.form-control').attr('autocomplete' , 'off');
$("nav .navbar-brand").attr('href', document.URL);
$("#mainpage").append("<style id='splitRatio'>@media (min-width: 992px) {#mainpage > .nano {width: 83%;} #chatwrap {width: 17%;}}</style>");
$("#maincontain").addClass("maincontain");
$("#sitefooter").append($("#logoutform"));
$("#logoutform").removeClass("pull-right");
$('#modflair').detach().prependTo('#headermenu');
$(".chat-area-header").after("<div class='nano'></div>");
$("#chatbox").append($("#chatline")).append($("#guestlogin"));
$(".chat-area-group").append($("#userlisttoggle"));
$("#chatline").attr('autocomplete', 'off');
$("#usercount").unbind();
$('#announcements').detach().appendTo('#sitefooter');
$('#videowrap-header').remove();
$('#resizewrap').remove();

var EMOTELISTMODAL = $("#emotelist");
$("#emotelistbutton").click(function () {
    EMOTELISTMODAL.modal();
});

function welcomeBack() {
		$('<div class="server-msg-reconnect">Welcome Guest, please consider creating an account.</div>').appendTo("#messagebuffer");
		scrollChat();
}
KEYDOWN = true;
MOUSEOVER = true;

socket.on("login", function() {
	if (CLIENT.rank === 0) {
		$(window).on("mouseover", function() {
			if (MOUSEOVER) {
				MOUSEOVER = false;
				welcomeBack();
				setTimeout(function() {
					MOUSEOVER = false;
				}, 1000);
			}
		});
  }
});

if (typeof BG_Dimmed !== 'undefined') {
    loadScriptAsync('https://dl.dropbox.com/scl/fi/dukipbbsn8b60todbbysz/Paster.js?rlkey=6o1jki6clscvapz4rkml0e929&dl=0', PlaylistPollbtn, function() {
        console.log('PlaylistPollAdder loaded successfully!');
    });
} else {
    console.warn('PlaylistPollbtn is not defined. The script will not load.');
}
// Check if BG_Dimmed is defined
if (typeof BG_Dimmed !== 'undefined') {
    // Dim the background if BG_Dimmed is set to "1"
    if (BG_Dimmed === "1") {
        $("<style>")
            .attr("type", "text/css")
            .appendTo("#wrap")
            .text(`
#wrap:before { background-color: rgba(0, 0, 0, 0.8); }`);
    }
} else {
    // Log a warning to the console if BG_Dimmed is not defined
    console.warn('BG_Dimmed is not defined. The background dimming code will not run.');
}


if ($('#usercount').length !== 0) {
    $('#usercount').text($('#usercount').text().replace('connected users' , ' ').replace('connected user' , ' '));
    window.socket.on('usercount', function () {
    $('#usercount').text($('#usercount').text().replace('connected users' , ' ').replace('connected user' , ' '));
	$('#usercount').text($('#usercount').text().replace('not connected' , ' '));
    });
}

if ($('#currenttitle').length !== 0) {
    $('#currenttitle').text($('#currenttitle').text().replace(/[.]/g, ' '));
		$('#currenttitle').text($('#currenttitle').text().replace('Currently Playing:' , ' ').replace('Currently Playing:' , ' '));
    window.socket.on('changeMedia', function () {
    $('#currenttitle').text($('#currenttitle').text().replace(/[.]/g, ' '));
	    $('#currenttitle').text($('#currenttitle').text().replace('Currently Playing:' , ' ').replace('Currently Playing:' , ' '));
    });
}
DROPBOX		= 'https://dl.dropboxusercontent.com/s/';
 $(document).ready(function() {
    $("video").bind("contextmenu",function(){
        return false;
        });
 } );


window.socket.on("changeMedia", function () {
var myVideo = document.getElementById("ytapiplayer");
if (myVideo.addEventListener) {
    myVideo.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, false);
} else {
    myVideo.attachEvent('oncontextmenu', function() {
        window.event.returnValue = false;
    });}
});

var myVideo = document.getElementById("ytapiplayer");
if (myVideo.addEventListener) {
  myVideo.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
} else {
  myVideo.attachEvent('oncontextmenu', function() {
    window.event.returnValue = false;
  });
}
$("#mediaurl").on("paste", function() {
	setTimeout(function() {
		$("#mediaurl")[0].value = $("#mediaurl")[0].value.replace("//www.dropbox.com/s/", "//dl.dropbox.com/s/").replace("?dl=0","").replace("?a=view","");
	}, 1);
	setTimeout(function() {
		if ($("#addfromurl-title-val").length !== 0) {
			var mediaUrl = decodeURI($("#mediaurl")[0].value).split("/");
			mediaUrl = mediaUrl[mediaUrl.length-1].split("?")[0].split(".");
			var mediaTitle = "";
			for (i = 0; i < mediaUrl.length-1; i++) {
				mediaTitle += mediaUrl[i] + ".";
			}
			mediaTitle = mediaTitle.substring(0, mediaTitle.length-1).replace(/[.]/g, " ").replace("HDTV", "").replace("720p", "").replace("1080p", "").replace("-tNe", "").replace("x265", "").replace("x264", "").replace("q22", "").replace("Joy", "").replace("(", "").replace(")", "");
			$("#addfromurl-title-val")[0].value = mediaTitle;
		}
	}, 250);
});

location.href.charAt(location.href.length - 1) === '#' && chatOnly();
_timeVIDEBLU = {raw: 0, ofs: 0, paused: false};//Define time object for ss7's video time display plugin
currentmedia = {istemp: false, location: 0, uid: 0, id: 0, seconds: 0, length: 0};
playlistinfo = {length: 0};
issplit = false;
var trnsdelay = 400;//Defines trnsdelay, transition time (in ms)

if (typeof(_changeMediaVIDEBLU) == 'undefined') { _changeMediaVIDEBLU = Callbacks.changeMedia; }//Creates global variable _changeMediaVIDEBLU and sets it equal to old changeMedia() in Callbacks.js
if (typeof(_playlistVIDEBLU) == 'undefined') { _playlistVIDEBLU = Callbacks.playlist; }
if (typeof(_queueVIDEBLU) == 'undefined') { _queueVIDEBLU = Callbacks.queue; }
if (typeof(_mediaupdateVIDEBLU) == 'undefined') { _mediaUpdateVIDEBLU = Callbacks.mediaUpdate; }

Callbacks.queue = function(data) {//currently for debugging purposes only. Doesn't do anything.
	_queueVIDEBLU(data);
	console.log("Called Callbacks.queue");
	console.log(data);
}

function requeue (data) {
	/*for (var i = 0; i <= data.length - 1; i++) {//find information of current video in playlist
		var e = data[i];
		if (e.media.id == currentmedia.id) {
			currentmedia.uid = e.uid;
			currentmedia.ispermanent = e.temp;
			currentmedia.location = i;
		}
	}*/
	var _playlist=[];
	$("#queue > .queue_entry").each(function(){
		var data = $(this).data();
		//var addedby = $(this).attr("title").match(/: (\w+)$/)[1];
		_playlist.push({ uid: data.uid, media: data.media, temp: data.temp });
	});
}

//function changeMedia2(){
	Callbacks.changeMedia = function(data) {//Adds to the old changeMedia() in Callbacks.js, which is called when the media changes.
		_changeMediaVIDEBLU(data);//call the old changeMedia() function stored.
		$("#currenttitle").text(data.title);//change the text of #currenttitle to data.title (gets rid of "Currently Playing: " in video title)
		$("#ss7time").attr("title", data.duration);//gets time of current video
		currentmedia.length = data.duration;
		currentmedia.id = data.id;
		currentmedia.seconds = data.seconds;
		var title = $("#queue .queue_active").attr("title");
		$("#addedby").text(title.match(/(?:Added by: ){1}(.*)/)[1]);
	}
//}
//changeMedia2()

//function mediaUpdate2() {
	Callbacks.mediaUpdate = function(data) {//Adds to the old mediaUpdate() in Callbacks.js, which is called every couple seconds.
		_mediaUpdateVIDEBLU(data);//call the old mediaUpdate function stored.
		_timeVIDEBLU.paused = data.paused;//stores data.paused in another variable. (Is video paused?)
		_timeVIDEBLU.raw = Math.max(data.currentTime, 0);//stores the current video time position as _timeVIDEBLU.raw, to be used in setvideotime()
		_timeVIDEBLU.ofs = _timeVIDEBLU.raw - (new Date()).getTime()/1000;//stores time offset, to keep the timer going between media updates
	}
//}
//mediaUpdate2();
setvideotime=function(){var e=_timeVIDEBLU.paused?_timeVIDEBLU.raw:(new Date).getTime()/1e3+_timeVIDEBLU.ofs,t=Math.round(100*e/currentmedia.seconds);t>100&&(t=0),$("#progbar").css("width",t+"%"),setTimeout(setvideotime,1e3*(Math.round(e)+1-e));var i=(e=Math.round(e))%60,s=(e=Math.floor(e/60))%60,o=Math.floor(e/60);i<10&&(i="0"+i),s<10&&(s="0"+s),o<10&&(o="0"+o),currentmedia.seconds>3598?$("#ss7time").text(o+":"+s+":"+i):0==o?$("#ss7time").text(s+":"+i):"--:--"==currentmedia.length&&$("#ss7time").text("Live")},setvideotime();
$("#drinkbar").click(function(){
  $("#drinkcount").remove();
});

 $(document).ready(function() {
    $("video").bind("contextmenu",function(){
        return false;
        });
 } );
scrollbtn = $('<button id="scroll-btn" class="btn btn-sm btn-default" title="Scroll to current item" />')
  .append('<span class="glyphicon glyphicon-hand-right" />')
  .prependTo("#ploptions")
  .on("click", function() {
	scrollQueue();
  });

var LOADED = (typeof LOADED==="undefined") ? false : true;
LOADED ? location.reload() : '';
var myElement = document.querySelector("#videowrap");
myElement.style.display = "block";
$("body").addClass('fluid');
var field = document.querySelectorAll('[data-persist]')
for (i=0;i<field.length;i++){
  var stored = localStorage.getItem(field[i].getAttribute('data-persist'))
  if (stored) field[i].value = stored
  field[i].addEventListener('input',function(){
    localStorage.setItem(this.getAttribute('data-persist'),this.value)
  })
}}
//Playlist Search bar module by Bill
 $("#queuecontainer > div").append("<input type='text' class='search form-control pls' placeholder='Video Search'>");

 $(document).ready(function() {
  $(".search").keyup(function () {
    var searchTerm = $(".search").val();
    var listItem = $('#queue').children('li');
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });

  $("#queue li").not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
  });

  $("#queue li:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $('#queue li[visible="true"]').length;
    $('.counter').text(jobCount + ' item');

  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
		  });
});
    socket.on('setAFK', scrollChat);
	socket.on('chatMsg', scrollChat);
    socket.on('chatMsg', function (data) {
        if (data.msg.indexOf('<a') != -1 || data.msg.indexOf('<img') != -1) {
            setTimeout(scrollChat, 500);
        }
    });
      function scrollToBottom() {
    document.getElementById('messagebuffer').scrollTo(0, 10000);
  }
 window.addEventListener('resize', function() {
    scrollToBottom();
  });

//lets disable this for now, youtube doenst like it
//$("#ytapiplayer").attr("airplay","allow");
//$("#ytapiplayer").attr("x-webkit-airplay","allow");
//$("#ytapiplayer").attr("autoplay","true");
$("#maincontain").addClass("Overlay-Scrollbars");
$("#maincontain").addClass("leftcontent");
$("#chatwrap").addClass("rightcontent");

/////////////////////////////////////////////////////////////////////////////////////////////////////
socket.on("closePoll", function() {
	$("#closepolls").remove();
	$('.well.muted').unbind().insertAfter("#navtabs");
	$('<button class="btn btn-xs closepolls" id="closepolls">Clear All Polls</button>').insertBefore('.well.muted:first').click(function() {
		$('.well.muted').remove();
		$("#closepolls").remove();
	});
});
$('#nav-collapsible a:contains("Layout")').remove();
$('#us-general > form').hide();
$("#us-general > form").after('<div id="btscreen"><div class="card-frame"><div class="left"><div class="billtube">BillTube Theme 2.0</div><div class="billtubeinfo">For more information about this theme join my Discord at <a href="http://discord.gg/fwadWd9" target="_blank">Discord.gg/fwadWd9</a></div></div></div></div>');


	    /**
	     * Returns viewport size
	     * @returns {{width: number, height: number}}
	     */
	    this.getViewportSize = function () {
	        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	        return {
	            width: width,
	            height: height
	        };
	    };

	    /**
	     * Adds the text to chat input
	     * @param message The text to add.
	     * @param position The position of the adding. It can be 'begin' or 'end'.
	     */
	    this.addMessageToChatInput = function (message, position) {
	        var $chatline = $(chatline);
	        position = position || 'end';

	        if (position === 'begin') {
	            message = message + $chatline.val();
	        } else {
	            message = $chatline.val() + message;
	        }

	        $chatline.val(message).focus();
	    };
	};

/***/ },
/* 2 */
/***/ function(module, exports) {
window.CytubeEnhancedStorage=function(e,t,n){var r=this;t=void 0===t||t,n=void 0!==n&&n;var i={},a={},o={};try{o=JSON.parse(window.localStorage.getItem(e+"-"+(t?"":CHANNEL.name)+e)),o=_.isPlainObject(o)?o:{}}catch(e){o={}}a=_.cloneDeep(o),this.getDefault=function(e){return i[e]},this.setDefault=function(e,t){t=_.cloneDeep(t),i[e]=t,o[e]=void 0!==o[e]?o[e]:t,a[e]=void 0!==a[e]?a[e]:t},this.get=function(e){return o[e]},this.set=function(e,t){var i=o[e]=_.cloneDeep(t);return n&&r.save(),i},this.toggle=function(e){var t=o[e]=!o[e];return n&&r.save(),t},this.isDirty=function(e){var t=!1;if(_.isArray(e)){for(var n in e)if(!s(o[n],a[n])){t=!0;break}}else t=!s(o[e],a[e]);return t},this.save=function(){try{return window.localStorage.setItem(e+"-"+(t?"":CHANNEL.name)+e,JSON.stringify(o))}catch(e){return!1}},this.reset=function(){o=_.cloneDeep(i)};var s=function(e,t){return _.isArray(e)&&_.isArray(t)?0===_.difference(e,t).length&&0===_.difference(t,e).length:_.isEqual(e,t)}};
/***/ },
/* 3 */
/***/ function(module, exports) {
window.CytubeEnhancedUISettings=function(t){"use strict";var e=this;this.$navbar=$("#nav-collapsible").find(".navbar-nav"),this.tabs={},this.$tabsContainerHeader=$('<div class="'+t.prefix+'ui__header"></div>'),this.$tabsContainerBody=$('<div class="'+t.prefix+'ui__body tab-content"></div>'),this.$tabsContainerTabs=$('<ul class="nav nav-tabs">'),this.$tabsContainerFooter=$('<div class="'+t.prefix+'ui__footer"></div>'),this.$tabsContainerOpenButton=$('<a href="#" id="'+t.prefix+'ui"></a>').text(t.t("settings[.]Theme settings")).on("click",function(t){t.preventDefault(),t.stopPropagation(),e.openSettings()}),$("#settings").click(function(t){t.preventDefault(),t.stopPropagation(),e.openSettings()});var n=$("#useroptions .modal-header .nav-tabs");n.length,this.$tabsContainerOpenButton.appendTo(e.$navbar).wrap("<li>"),this.themeTabName="theme-settings",this.themeTabTitle=t.t("themes[.]General"),this.storage=new CytubeEnhancedStorage("settings",!1);var s=!1;$("<h4>"+t.t("settings[.]Theme Settings")+"</h4>").appendTo(e.$tabsContainerHeader),e.$tabsContainerTabs.appendTo(e.$tabsContainerHeader),$('<button type="button" data-dismiss="modal" class="btn btn-default btn-success">'+t.t("settings[.]Save")+"</button>").appendTo(e.$tabsContainerFooter).on("click",function(){e.save()}),$('<button type="button" data-dismiss="modal" class="'+t.prefix+'user-settings btn btn-default">'+t.t("settings[.]Cancel")+"</button>").appendTo(e.$tabsContainerFooter),this.onSave=function(n){$(document).on(t.prefix+"settings.save",function(){n(e.storage)})},this.save=function(){$(document).trigger(t.prefix+"settings.save"),e.storage.save(),s&&t.UI.createConfirmWindow(t.t("settings[.]Some settings need to refresh the page to get to work. Do it now?"),function(){window.location.reload()})},this.reset=function(){e.storage.reset(),t.UI.createConfirmWindow(t.t("settings[.]Some settings need to refresh the page to get to work. Do it now?"),function(){window.location.reload()})};this.getTab=function(n,s,a){return void 0!==e.tabs[n]?e.tabs[n]:s?function(n,s,a){var o=new window.CytubeEnhancedUITab(t,n,s,a);return o.$button.appendTo(e.$tabsContainerTabs),o.$content.appendTo(e.$tabsContainerBody),e.tabs[n]=o,e.sortTabs(),o}(n,s,a):null},this.configureTheme=function(n){var s=e.getTab(e.themeTabName,e.themeTabTitle,2),a=new CytubeEnhancedStorage("themes."+t.Settings.storage.get("themes.selected"),!0,!0);n(t,s,a)},this.openTab=function(t){return!!e.tabs[t]&&(e.tabs[t].show(),!0)},e.removeTab=function(t){return!!e.tabs[t]&&(e.tabs[t].remove(),delete e.tabs[t],!0)},this.sortTabs=function(){var t=[];for(var n in e.tabs)t.push(e.tabs[n]);for(var s=0,a=(t=t.sort(function(t,e){return t.sort>e.sort?1:t.sort<e.sort?-1:0})).length;s<a;s++)t[s].$button.detach().appendTo(e.$tabsContainerTabs)},this.openSettings=function(){var n;for(var s in t.UI.createModalWindow("settings",e.$tabsContainerHeader,e.$tabsContainerBody,e.$tabsContainerFooter,!0),e.tabs)(void 0===n||void 0===n.sort||n.sort>e.tabs[s].sort)&&(n=e.tabs[s]);n.show()},this.requestPageReload=function(){s=!0}};
/***/ },
/* 4 */
/***/ function(module, exports) {
window.CytubeEnhancedUITab=function(t,o,n,e){"use strict";var r=this;this.$button=$('<li><a href="#'+t.prefix+o+'__content" class="'+o+'__button" data-toggle="tab">'+n+"</a></li>"),this.$content=$('<div id="'+t.prefix+o+'__content" class="tab-pane">'),this.$form=t.UI.createControlsWrapper("horizontal").appendTo(this.$content),this.sort=Math.abs(parseInt(e,10))||0,this.controls={},this.show=function(){r.$button.find("a").tab("show"),$(document).trigger(t.prefix+"tab-"+o+".show")},this.$button.on("show.bs.tab",function(){$(document).trigger(t.prefix+"tab-"+o+".show")}),this.onShow=function(n){$(document).on(t.prefix+"tab-"+o+".show",function(){n(r)})},this.addControl=function(o,n,e,s,i,a,c,h){o=-1!=["select","checkbox"].indexOf(o)?o:"select",c=Math.abs(parseInt(c,10))||0;var u="create"+o.slice(0,1).toUpperCase()+o.slice(1)+"Control",f=t.UI[u](n,e,s,i,a);return f.data("sort",c),r.controls[s]={$el:f,sort:c},h?f.appendTo(h):f.appendTo(r.$form),r.sortControls(),f},this.sortControls=function(){var t=[];for(var o in r.controls)t.push(r.controls[o]);for(var n=0,e=(t=t.sort(function(t,o){return t.sort>o.sort?1:t.sort<o.sort?-1:0})).length;n<e;n++)t[n].$el.detach().appendTo(r.$form)},this.getName=function(){return o},this.remove=function(){r.$button.empty(),r.$content.empty()}};
/***/ },
/* 5 */
/***/ function(module, exports) {
window.CytubeEnhancedUI=function(o){var a=this;this.createModalWindow=function(a,e,n,t,d){$(".modal").modal("hide"),a=o.prefix+"modal-"+a;var i=$("#"+a);if(d){if(i.length)return i.modal("show"),i}else i.remove();var l=$('<div class="modal fade" id="'+a+'" role="dialog" tabindex="-1">').appendTo($("body")),s=$('<div class="modal-dialog modal-lg">').appendTo(l),r=$('<div class="modal-content">').appendTo(s);if(e){var p=$('<div class="modal-header">').append(e).appendTo(r);$('<button type="button" class="close" data-dismiss="modal" aria-label="'+o.t("Close")+'">').html('<span aria-hidden="true">&times;</span>').prependTo(p)}return n&&$('<div class="modal-body">').append(n).appendTo(r),t&&$('<div class="modal-footer">').append(t).appendTo(r),d||l.on("hidden.bs.modal",function(){$(this).remove()}),l.modal({keyboard:!0}),l},this.createConfirmWindow=function(e,n){var t=$('<div class="modal fade '+o.prefix+'modal-confirm modal-centered" role="dialog" tabindex="-1">').appendTo($("body")),d=$('<div class="modal-dialog modal-sm">').appendTo(t),i=$('<div class="modal-content">').appendTo(d);$('<div class="modal-header">').html($('<h3 class="modal-title">').text(e)).appendTo(i);var l=$('<div class="modal-footer">').appendTo(i);$('<button type="button" data-dismiss="modal" class="btn btn-default">'+o.t("Confirm")+"</button>").appendTo(l).on("click",function(){n()}),$('<button type="button" data-dismiss="modal" class="'+o.prefix+'user-settings btn btn-default">'+o.t("Cancel")+"</button>").appendTo(l),t.on("shown.bs.modal",function(){a.centerModals($(this))}),t.on("hidden.bs.modal",function(){$(this).remove()}),t.modal({keyboard:!0})},this.createControlsWrapper=function(o){return o=-1!=["default","horizontal","inline"].indexOf(o)?o:"default",$('<div class="form-'+o+'">')},this.createSelectControl=function(a,e,n,t,d){t=t||[];var i,l,s=$('<div class="form-group">');if("horizontal"==a){$('<label for="'+o.prefix+n+'" class="control-label col-sm-4">'+e+"</label>").appendTo(s);var r=$('<div class="col-sm-8">').appendTo(s);i=$('<select id="'+o.prefix+n+'" class="form-control">').appendTo(r)}else $('<label for="'+o.prefix+n+'">'+e+"</label>").appendTo(s),i=$('<select id="'+o.prefix+n+'" class="form-control">').appendTo(s);d&&i.on("change",d);for(var p=0,c=t.length;p<c;p++)l=t[p].selected?"selected":"",i.append('<option value="'+t[p].value+'" '+l+">"+t[p].title+"</option>");return s},this.createButton=function(o,a,e){var n=$('<button type="button" class="btn btn-'+o+'">'+a+"</button>");return e&&n.on("click",e),n},this.toggleLoader=function(o,a){o.each(function(){void 0===a&&(a=o.hasClass("loading-spinner__loading")?"off":"on"),$(this).removeClass("loading-spinner__loading"),$(".loading-spinner__overlay").remove(),$(this).css("height","auto"),$(this).css("width","auto"),"on"===a&&($(this).addClass("loading-spinner__loading"),$(this).css("height",$(this).outerHeight()),$(this).css("width",$(this).outerWidth()),$('<div class="loading-spinner__overlay">').append($('<div class="loading-spinner__wrapper">').append('<div class="loading-spinner">')).appendTo($(this)))})},$.fn.toggleLoader=function(o){a.toggleLoader($(this),o)},this.centerModals=function(o){void 0===o&&(o=$(".modal-centered")),o.each(function(){var a=o.find(".modal-dialog");a.css({display:"block",marginTop:Math.max(0,($(window).height()-a.outerHeight())/2)})})},$(window).resize(function(){a.centerModals()})};
/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {
__webpack_require__(7),window.CytubeEnhanced=function(t,e,n){"use strict";var i=this;this.translations={},this.prefix="ce-",this.version="2.7.0";var a={};if(this.getModule=function(t){var e=$.Deferred(),n=6e4;return function i(){if(void 0!==a[t])e.resolve(a[t]);else{if(n<=0)throw new Error("Load timeout for module "+t+".");n-=100,setTimeout(i,100)}}(),e},this.addModule=function(t,i){if(this.isModulePermitted(t)){var s=new i(this,e[t]||{});n[t]&&n[t](s),a[t]=s}},this.isModulePermitted=function(t){return!e.hasOwnProperty(t)||(!e[t].hasOwnProperty("enabled")||e[t].enabled)},this.addTranslation=function(t,e){void 0===i.translations[t]?i.translations[t]=e:$.extend(!0,i.translations[t],e)},this.t=function(t){var e=t;if("en"!==i.storage.get("language")&&i.translations[i.storage.get("language")])if(-1!==t.indexOf("[.]")){var n=t.split("[.]");if(void 0===(e=i.translations[i.storage.get("language")][n[0]]))return(e=t.split("[.]").pop())||t;for(var a=1,s=n.length;a<s;a++)if(void 0===(e=e[n[a]]))return(e=t.split("[.]").pop())||t;e=e||n[n.length-1]}else e=i.translations[i.storage.get("language")][t];else-1!==t.indexOf("[.]")&&(e=(e=t.split("[.]").pop())||t);return e},this.parseJSON=function(t,e){var n;e=void 0!==e?e:null;try{n=window.JSON.parse(t)}catch(t){n=e}return n},this.toJSON=function(t,e){var n;e=void 0!==e?e:null;try{n=window.JSON.stringify(t)}catch(t){n=e}return n},$.ajaxSetup({cache:!0}),window.cytubeEnhancedDefaultTranslates)for(var s in window.cytubeEnhancedDefaultTranslates)this.addTranslation(s,window.cytubeEnhancedDefaultTranslates[s]);this.storage=new window.CytubeEnhancedStorage("default",!0,!0),this.storage.setDefault("language",t),this.UI=new window.CytubeEnhancedUI(this),this.Helpers=new window.CytubeEnhancedHelpers(this),this.Settings=new window.CytubeEnhancedUISettings(this)};
/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {
var __WEBPACK_AMD_DEFINE_RESULT__;(function(n,t){(function(){var r,e="4.11.2",u=200,i="Expected a function",o="__lodash_hash_undefined__",f="__lodash_placeholder__",a=1,c=2,l=4,s=8,h=16,p=32,v=64,_=128,g=256,y=512,d=1,b=2,w=30,m="...",x=150,A=16,j=1,O=2,k=3,E=1/0,I=9007199254740991,R=1.7976931348623157e308,S=NaN,W=4294967295,L=W-1,C=W>>>1,B="[object Arguments]",z="[object Array]",U="[object Boolean]",$="[object Date]",D="[object Error]",M="[object Function]",F="[object GeneratorFunction]",P="[object Map]",N="[object Number]",T="[object Object]",q="[object Promise]",K="[object RegExp]",Z="[object Set]",V="[object String]",G="[object Symbol]",J="[object WeakMap]",Y="[object WeakSet]",H="[object ArrayBuffer]",Q="[object DataView]",X="[object Float32Array]",nn="[object Float64Array]",tn="[object Int8Array]",rn="[object Int16Array]",en="[object Int32Array]",un="[object Uint8Array]",on="[object Uint8ClampedArray]",fn="[object Uint16Array]",an="[object Uint32Array]",cn=/\b__p \+= '';/g,ln=/\b(__p \+=) '' \+/g,sn=/(__e\(.*?\)|\b__t\)) \+\n'';/g,hn=/&(?:amp|lt|gt|quot|#39|#96);/g,pn=/[&<>"'`]/g,vn=RegExp(hn.source),_n=RegExp(pn.source),gn=/<%-([\s\S]+?)%>/g,yn=/<%([\s\S]+?)%>/g,dn=/<%=([\s\S]+?)%>/g,bn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,xn=/[\\^$.*+?()[\]{}|]/g,An=RegExp(xn.source),jn=/^\s+|\s+$/g,On=/^\s+/,kn=/\s+$/,En=/[a-zA-Z0-9]+/g,In=/\\(\\)?/g,Rn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Sn=/\w*$/,Wn=/^0x/i,Ln=/^[-+]0x[0-9a-f]+$/i,Cn=/^0b[01]+$/i,Bn=/^\[object .+?Constructor\]$/,zn=/^0o[0-7]+$/i,Un=/^(?:0|[1-9]\d*)$/,$n=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Dn=/($^)/,Mn=/['\n\r\u2028\u2029\\]/g,Fn="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Pn="[\\ud800-\\udfff]",Nn="["+Fn+"]",Tn="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",qn="\\d+",Kn="[\\u2700-\\u27bf]",Zn="[a-z\\xdf-\\xf6\\xf8-\\xff]",Vn="[^\\ud800-\\udfff"+Fn+qn+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",Gn="\\ud83c[\\udffb-\\udfff]",Jn="[^\\ud800-\\udfff]",Yn="(?:\\ud83c[\\udde6-\\uddff]){2}",Hn="[\\ud800-\\udbff][\\udc00-\\udfff]",Qn="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Xn="(?:"+Zn+"|"+Vn+")",nt="(?:"+Qn+"|"+Vn+")",tt="(?:"+Tn+"|"+Gn+")"+"?",rt="[\\ufe0e\\ufe0f]?"+tt+("(?:\\u200d(?:"+[Jn,Yn,Hn].join("|")+")[\\ufe0e\\ufe0f]?"+tt+")*"),et="(?:"+[Kn,Yn,Hn].join("|")+")"+rt,ut="(?:"+[Jn+Tn+"?",Tn,Yn,Hn,Pn].join("|")+")",it=RegExp("['â€™]","g"),ot=RegExp(Tn,"g"),ft=RegExp(Gn+"(?="+Gn+")|"+ut+rt,"g"),at=RegExp([Qn+"?"+Zn+"+(?:['â€™](?:d|ll|m|re|s|t|ve))?(?="+[Nn,Qn,"$"].join("|")+")",nt+"+(?:['â€™](?:D|LL|M|RE|S|T|VE))?(?="+[Nn,Qn+Xn,"$"].join("|")+")",Qn+"?"+Xn+"+(?:['â€™](?:d|ll|m|re|s|t|ve))?",Qn+"+(?:['â€™](?:D|LL|M|RE|S|T|VE))?",qn,et].join("|"),"g"),ct=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),lt=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,st=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","Reflect","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ht=-1,pt={};pt[X]=pt[nn]=pt[tn]=pt[rn]=pt[en]=pt[un]=pt[on]=pt[fn]=pt[an]=!0,pt[B]=pt[z]=pt[H]=pt[U]=pt[Q]=pt[$]=pt[D]=pt[M]=pt[P]=pt[N]=pt[T]=pt[K]=pt[Z]=pt[V]=pt[J]=!1;var vt={};vt[B]=vt[z]=vt[H]=vt[Q]=vt[U]=vt[$]=vt[X]=vt[nn]=vt[tn]=vt[rn]=vt[en]=vt[P]=vt[N]=vt[T]=vt[K]=vt[Z]=vt[V]=vt[G]=vt[un]=vt[on]=vt[fn]=vt[an]=!0,vt[D]=vt[M]=vt[J]=!1;var _t={"Ã€":"A","Ã":"A","Ã‚":"A","Ãƒ":"A","Ã„":"A","Ã…":"A","Ã ":"a","Ã¡":"a","Ã¢":"a","Ã£":"a","Ã¤":"a","Ã¥":"a","Ã‡":"C","Ã§":"c","Ã":"D","Ã°":"d","Ãˆ":"E","Ã‰":"E","ÃŠ":"E","Ã‹":"E","Ã¨":"e","Ã©":"e","Ãª":"e","Ã«":"e","ÃŒ":"I","Ã":"I","ÃŽ":"I","Ã":"I","Ã¬":"i","Ã­":"i","Ã®":"i","Ã¯":"i","Ã‘":"N","Ã±":"n","Ã’":"O","Ã“":"O","Ã”":"O","Ã•":"O","Ã–":"O","Ã˜":"O","Ã²":"o","Ã³":"o","Ã´":"o","Ãµ":"o","Ã¶":"o","Ã¸":"o","Ã™":"U","Ãš":"U","Ã›":"U","Ãœ":"U","Ã¹":"u","Ãº":"u","Ã»":"u","Ã¼":"u","Ã":"Y","Ã½":"y","Ã¿":"y","Ã†":"Ae","Ã¦":"ae","Ãž":"Th","Ã¾":"th","ÃŸ":"ss"},gt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yt={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},dt={function:!0,object:!0},bt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},wt=parseFloat,mt=parseInt,xt=dt[typeof exports]&&exports&&!exports.nodeType?exports:r,At=dt[typeof n]&&n&&!n.nodeType?n:r,jt=At&&At.exports===xt?xt:r,Ot=er(xt&&At&&"object"==typeof t&&t),kt=er(dt[typeof self]&&self),Et=er(dt[typeof window]&&window),It=er(dt[typeof this]&&this),Rt=Ot||Et!==(It&&It.window)&&Et||kt||It||Function("return this")();function St(n,t){return n.set(t[0],t[1]),n}function Wt(n,t){return n.add(t),n}function Lt(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function Ct(n,t,r,e){for(var u=-1,i=n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function Bt(n,t){for(var r=-1,e=n.length;++r<e&&!1!==t(n[r],r,n););return n}function zt(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function Ut(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function $t(n,t){return!!n.length&&Zt(n,t,0)>-1}function Dt(n,t,r){for(var e=-1,u=n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function Mt(n,t){for(var r=-1,e=n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function Ft(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Pt(n,t,r,e){var u=-1,i=n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function Nt(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function Tt(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function qt(n,t,r,e){var u;return r(n,function(n,r,i){if(t(n,r,i))return u=e?r:n,!1}),u}function Kt(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function Zt(n,t,r){if(t!=t)return fr(n,r);for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function Vt(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function Gt(n,t){var r=n?n.length:0;return r?Yt(n,t)/r:S}function Jt(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function Yt(n,t){for(var e,u=-1,i=n.length;++u<i;){var o=t(n[u]);o!==r&&(e=e===r?o:e+o)}return e}function Ht(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function Qt(n,t){return Mt(t,function(t){return[t,n[t]]})}function Xt(n){return function(t){return n(t)}}function nr(n,t){return Mt(t,function(t){return n[t]})}function tr(n,t){for(var r=-1,e=n.length;++r<e&&Zt(t,n[r],0)>-1;);return r}function rr(n,t){for(var r=n.length;r--&&Zt(t,n[r],0)>-1;);return r}function er(n){return n&&n.Object===Object?n:null}function ur(n){return _t[n]}function ir(n){return gt[n]}function or(n){return"\\"+bt[n]}function fr(n,t,r){for(var e=n.length,u=t+(r?0:-1);r?u--:++u<e;){var i=n[u];if(i!=i)return u}return-1}function ar(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(n){}return t}function cr(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function lr(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function sr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==f||(n[r]=f,i[u++]=r)}return i}function hr(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function pr(n){if(!n||!ct.test(n))return n.length;for(var t=ft.lastIndex=0;ft.test(n);)t++;return t}function vr(n){return n.match(ft)}function _r(n){return yt[n]}var gr=function n(t){var Fn=(t=t?gr.defaults({},t,gr.pick(Rt,st)):Rt).Date,Pn=t.Error,Nn=t.Math,Tn=t.RegExp,qn=t.TypeError,Kn=t.Array.prototype,Zn=t.Object.prototype,Vn=t.String.prototype,Gn=t.Function.prototype.toString,Jn=Zn.hasOwnProperty,Yn=0,Hn=Gn.call(Object),Qn=Zn.toString,Xn=Rt._,nt=Tn("^"+Gn.call(Jn).replace(xn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tt=jt?t.Buffer:r,rt=t.Reflect,et=t.Symbol,ut=t.Uint8Array,ft=t.clearTimeout,_t=rt?rt.enumerate:r,gt=Object.getOwnPropertySymbols,yt="symbol"==typeof(yt=et&&et.iterator)?yt:r,dt=Object.create,bt=Zn.propertyIsEnumerable,xt=t.setTimeout,At=Kn.splice,Ot=Nn.ceil,kt=Nn.floor,Et=Object.getPrototypeOf,It=t.isFinite,er=Kn.join,yr=Object.keys,dr=Nn.max,br=Nn.min,wr=t.parseInt,mr=Nn.random,xr=Vn.replace,Ar=Kn.reverse,jr=Vn.split,Or=Vu(t,"DataView"),kr=Vu(t,"Map"),Er=Vu(t,"Promise"),Ir=Vu(t,"Set"),Rr=Vu(t,"WeakMap"),Sr=Vu(Object,"create"),Wr=Rr&&new Rr,Lr=!bt.call({valueOf:1},"valueOf"),Cr={},Br=di(Or),zr=di(kr),Ur=di(Er),$r=di(Ir),Dr=di(Rr),Mr=et?et.prototype:r,Fr=Mr?Mr.valueOf:r,Pr=Mr?Mr.toString:r;function Nr(n){if(Co(n)&&!jo(n)&&!(n instanceof Kr)){if(n instanceof qr)return n;if(Jn.call(n,"__wrapped__"))return bi(n)}return new qr(n)}function Tr(){}function qr(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Kr(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=W,this.__views__=[]}function Zr(){}function Vr(n,t){return Sr?n[t]!==r:Jn.call(n,t)}function Gr(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Jr(n){var t=-1,r=n?n.length:0;for(this.__data__=new Gr;++t<r;)this.push(n[t])}function Yr(n,t){var r=n.__data__;if(oi(t)){var e=r.__data__;return("string"==typeof t?e.string:e.hash)[t]===o}return r.has(t)}function Hr(n){var t=-1,r=n?n.length:0;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Qr(n,t){var r=te(n,t);return!(r<0||(r==n.length-1?n.pop():At.call(n,r,1),0))}function Xr(n,t){var e=te(n,t);return e<0?r:n[e][1]}function ne(n,t){return te(n,t)>-1}function te(n,t){for(var r=n.length;r--;)if(wo(n[r][0],t))return r;return-1}function re(n,t,r){var e=te(n,t);e<0?n.push([t,r]):n[e][1]=r}function ee(n,t,e,u){return n===r||wo(n,Zn[e])&&!Jn.call(u,e)?t:n}function ue(n,t,e){(e===r||wo(n[t],e))&&("number"!=typeof t||e!==r||t in n)||(n[t]=e)}function ie(n,t,e){var u=n[t];Jn.call(n,t)&&wo(u,e)&&(e!==r||t in n)||(n[t]=e)}function oe(n,t,r,e){return ve(n,function(n,u,i){t(e,n,r(n),i)}),e}function fe(n,t){return n&&wu(t,af(t),n)}function ae(n,t){for(var e=-1,u=null==n,i=t.length,o=Array(i);++e<i;)o[e]=u?r:rf(n,t[e]);return o}function ce(n,t,e){return n==n&&(e!==r&&(n=n<=e?n:e),t!==r&&(n=n>=t?n:t)),n}function le(n,t,e,u,i,o,f){var a;if(u&&(a=o?u(n,i,o,f):u(n)),a!==r)return a;if(!Lo(n))return n;var c=jo(n);if(c){if(a=function(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&Jn.call(n,"index")&&(r.index=n.index,r.input=n.input),r}(n),!t)return bu(n,a)}else{var l=Qu(n),s=l==M||l==F;if(Eo(n))return function(n,t){if(t)return n.slice();var r=new n.constructor(n.length);return n.copy(r),r}(n,t);if(l==T||l==B||s&&!o){if(ar(n))return o?n:{};if(a=function(n){return"function"!=typeof n.constructor||ai(n)?{}:se(Ju(n))}(s?{}:n),!t)return function(n,t){return wu(n,Yu(n),t)}(n,fe(a,n))}else{if(!vt[l])return o?n:{};a=function(n,t,r,e){var u,i,o,f=n.constructor;switch(t){case H:return _u(n);case U:case $:return new f(+n);case Q:return function(n,t){var r=t?_u(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}(n,e);case X:case nn:case tn:case rn:case en:case un:case on:case fn:case an:return function(n,t){var r=t?_u(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}(n,e);case P:return function(n,t,r){return Pt(t?r(lr(n),!0):lr(n),St,new n.constructor)}(n,e,r);case N:case V:return new f(n);case K:return(o=new(i=n).constructor(i.source,Sn.exec(i))).lastIndex=i.lastIndex,o;case Z:return function(n,t,r){return Pt(t?r(hr(n),!0):hr(n),Wt,new n.constructor)}(n,e,r);case G:return u=n,Fr?Object(Fr.call(u)):{}}}(n,l,le,t)}}f||(f=new Hr);var h=f.get(n);if(h)return h;if(f.set(n,a),!c)var p=e?function(n){return ke(n,af,Yu)}(n):af(n);return Bt(p||n,function(r,i){p&&(r=n[i=r]),ie(a,i,le(r,t,e,u,i,n,f))}),a}function se(n){return Lo(n)?dt(n):{}}function he(n,t,e){if("function"!=typeof n)throw new qn(i);return xt(function(){n.apply(r,e)},t)}function pe(n,t,r,e){var i=-1,o=$t,f=!0,a=n.length,c=[],l=t.length;if(!a)return c;r&&(t=Mt(t,Xt(r))),e?(o=Dt,f=!1):t.length>=u&&(o=Yr,f=!1,t=new Jr(t));n:for(;++i<a;){var s=n[i],h=r?r(s):s;if(s=e||0!==s?s:0,f&&h==h){for(var p=l;p--;)if(t[p]===h)continue n;c.push(s)}else o(t,h,e)||c.push(s)}return c}Nr.templateSettings={escape:gn,evaluate:yn,interpolate:dn,variable:"",imports:{_:Nr}},Nr.prototype=Tr.prototype,Nr.prototype.constructor=Nr,qr.prototype=se(Tr.prototype),qr.prototype.constructor=qr,Kr.prototype=se(Tr.prototype),Kr.prototype.constructor=Kr,Zr.prototype=Sr?Sr(null):Zn,Gr.prototype.clear=function(){this.__data__={hash:new Zr,map:kr?new kr:[],string:new Zr}},Gr.prototype.delete=function(n){var t=this.__data__;return oi(n)?function(n,t){return Vr(n,t)&&delete n[t]}("string"==typeof n?t.string:t.hash,n):kr?t.map.delete(n):Qr(t.map,n)},Gr.prototype.get=function(n){var t=this.__data__;return oi(n)?function(n,t){if(Sr){var e=n[t];return e===o?r:e}return Jn.call(n,t)?n[t]:r}("string"==typeof n?t.string:t.hash,n):kr?t.map.get(n):Xr(t.map,n)},Gr.prototype.has=function(n){var t=this.__data__;return oi(n)?Vr("string"==typeof n?t.string:t.hash,n):kr?t.map.has(n):ne(t.map,n)},Gr.prototype.set=function(n,t){var e=this.__data__;return oi(n)?function(n,t,e){n[t]=Sr&&e===r?o:e}("string"==typeof n?e.string:e.hash,n,t):kr?e.map.set(n,t):re(e.map,n,t),this},Jr.prototype.push=function(n){var t=this.__data__;if(oi(n)){var r=t.__data__;("string"==typeof n?r.string:r.hash)[n]=o}else t.set(n,o)},Hr.prototype.clear=function(){this.__data__={array:[],map:null}},Hr.prototype.delete=function(n){var t=this.__data__,r=t.array;return r?Qr(r,n):t.map.delete(n)},Hr.prototype.get=function(n){var t=this.__data__,r=t.array;return r?Xr(r,n):t.map.get(n)},Hr.prototype.has=function(n){var t=this.__data__,r=t.array;return r?ne(r,n):t.map.has(n)},Hr.prototype.set=function(n,t){var r=this.__data__,e=r.array;e&&(e.length<u-1?re(e,n,t):(r.array=null,r.map=new Gr(e)));var i=r.map;return i&&i.set(n,t),this};var ve=Au(xe),_e=Au(Ae,!0);function ge(n,t){var r=!0;return ve(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ye(n,t,e){for(var u=-1,i=n.length;++u<i;){var o=n[u],f=t(o);if(null!=f&&(a===r?f==f&&!Mo(f):e(f,a)))var a=f,c=o}return c}function de(n,t){var r=[];return ve(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function be(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=ti),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?be(f,t-1,r,e,u):Ft(u,f):e||(u[u.length]=f)}return u}var we=ju(),me=ju(!0);function xe(n,t){return n&&we(n,t,af)}function Ae(n,t){return n&&me(n,t,af)}function je(n,t){return Ut(t,function(t){return Ro(n[t])})}function Oe(n,t){for(var e=0,u=(t=ii(t,n)?[t]:pu(t)).length;null!=n&&e<u;)n=n[yi(t[e++])];return e&&e==u?n:r}function ke(n,t,r){var e=t(n);return jo(n)?e:Ft(e,r(n))}function Ee(n,t){return n>t}function Ie(n,t){return Jn.call(n,t)||"object"==typeof n&&t in n&&null===Ju(n)}function Re(n,t){return t in Object(n)}function Se(n,t,e){for(var u=e?Dt:$t,i=n[0].length,o=n.length,f=o,a=Array(o),c=1/0,l=[];f--;){var s=n[f];f&&t&&(s=Mt(s,Xt(t))),c=br(s.length,c),a[f]=!e&&(t||i>=120&&s.length>=120)?new Jr(f&&s):r}s=n[0];var h=-1,p=a[0];n:for(;++h<i&&l.length<c;){var v=s[h],_=t?t(v):v;if(v=e||0!==v?v:0,!(p?Yr(p,_):u(l,_,e))){for(f=o;--f;){var g=a[f];if(!(g?Yr(g,_):u(n[f],_,e)))continue n}p&&p.push(_),l.push(v)}}return l}function We(n,t,e){ii(t,n)||(n=hi(n,t=pu(t)),t=Ri(t));var u=null==n?n:n[yi(t)];return null==u?r:Lt(u,n,e)}function Le(n,t,e,u,i){return n===t||(null==n||null==t||!Lo(n)&&!Co(t)?n!=n&&t!=t:function(n,t,e,u,i,o){var f=jo(n),a=jo(t),c=z,l=z;f||(c=(c=Qu(n))==B?T:c),a||(l=(l=Qu(t))==B?T:l);var s=c==T&&!ar(n),h=l==T&&!ar(t),p=c==l;if(p&&!s)return o||(o=new Hr),f||Fo(n)?Fu(n,t,e,u,i,o):function(n,t,r,e,u,i,o){switch(r){case Q:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case H:return!(n.byteLength!=t.byteLength||!e(new ut(n),new ut(t)));case U:case $:return+n==+t;case D:return n.name==t.name&&n.message==t.message;case N:return n!=+n?t!=+t:n==+t;case K:case V:return n==t+"";case P:var f=lr;case Z:var a=i&b;if(f||(f=hr),n.size!=t.size&&!a)return!1;var c=o.get(n);return c?c==t:(i|=d,o.set(n,t),Fu(f(n),f(t),e,u,i,o));case G:if(Fr)return Fr.call(n)==Fr.call(t)}return!1}(n,t,c,e,u,i,o);if(!(i&b)){var v=s&&Jn.call(n,"__wrapped__"),_=h&&Jn.call(t,"__wrapped__");if(v||_){var g=v?n.value():n,y=_?t.value():t;return o||(o=new Hr),e(g,y,u,i,o)}}return!!p&&(o||(o=new Hr),function(n,t,e,u,i,o){var f=i&b,a=af(n),c=a.length,l=af(t).length;if(c!=l&&!f)return!1;for(var s=c;s--;){var h=a[s];if(!(f?h in t:Ie(t,h)))return!1}var p=o.get(n);if(p)return p==t;var v=!0;o.set(n,t);for(var _=f;++s<c;){h=a[s];var g=n[h],y=t[h];if(u)var d=f?u(y,g,h,t,n,o):u(g,y,h,n,t,o);if(!(d===r?g===y||e(g,y,u,i,o):d)){v=!1;break}_||(_="constructor"==h)}if(v&&!_){var w=n.constructor,m=t.constructor;w!=m&&"constructor"in n&&"constructor"in t&&!("function"==typeof w&&w instanceof w&&"function"==typeof m&&m instanceof m)&&(v=!1)}return o.delete(n),v}(n,t,e,u,i,o))}(n,t,Le,e,u,i))}function Ce(n,t,e,u){var i=e.length,o=i,f=!u;if(null==n)return!o;for(n=Object(n);i--;){var a=e[i];if(f&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++i<o;){var c=(a=e[i])[0],l=n[c],s=a[1];if(f&&a[2]){if(l===r&&!(c in n))return!1}else{var h=new Hr;if(u)var p=u(l,s,c,n,t,h);if(!(p===r?Le(s,l,u,d|b,h):p))return!1}}return!0}function Be(n){return"function"==typeof n?n:null==n?Cf:"object"==typeof n?jo(n)?Me(n[0],n[1]):De(n):Nf(n)}function ze(n){n=null==n?n:Object(n);var t=[];for(var r in n)t.push(r);return t}function Ue(n,t){return n<t}function $e(n,t){var r=-1,e=Oo(n)?Array(n.length):[];return ve(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function De(n){var t=Zu(n);return 1==t.length&&t[0][2]?li(t[0][0],t[0][1]):function(r){return r===n||Ce(r,n,t)}}function Me(n,t){return ii(n)&&ci(t)?li(yi(n),t):function(e){var u=rf(e,n);return u===r&&u===t?ef(e,n):Le(t,u,r,d|b)}}function Fe(n,t,e,u,i){if(n!==t){if(!jo(t)&&!Fo(t))var o=cf(t);Bt(o||t,function(f,a){if(o&&(f=t[a=f]),Lo(f))i||(i=new Hr),function(n,t,e,u,i,o,f){var a=n[e],c=t[e],l=f.get(c);if(l)ue(n,e,l);else{var s=o?o(a,c,e+"",n,t,f):r,h=s===r;h&&(s=c,jo(c)||Fo(c)?jo(a)?s=a:ko(a)?s=bu(a):(h=!1,s=le(c,!0)):Uo(c)||Ao(c)?Ao(a)?s=Vo(a):!Lo(a)||u&&Ro(a)?(h=!1,s=le(c,!0)):s=a:h=!1),f.set(c,s),h&&i(s,c,u,o,f),f.delete(c),ue(n,e,s)}}(n,t,a,e,Fe,u,i);else{var c=u?u(n[a],f,a+"",n,t,i):r;c===r&&(c=f),ue(n,a,c)}})}}function Pe(n,t){var e=n.length;if(e)return ei(t+=t<0?e:0,e)?n[t]:r}function Ne(n,t,r){var e=-1;return t=Mt(t.length?t:[Cf],Xt(qu())),function(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}($e(n,function(n,r,u){return{criteria:Mt(t,function(t){return t(n)}),index:++e,value:n}}),function(n,t){return function(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=gu(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*("desc"==c?-1:1)}}return n.index-t.index}(n,t,r)})}function Te(n,t){return n=Object(n),Pt(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function qe(n,t){for(var r=-1,e=Pu(n),u=e.length,i={};++r<u;){var o=e[r],f=n[o];t(f,o)&&(i[o]=f)}return i}function Ke(n){return function(t){return null==t?r:t[n]}}function Ze(n,t,r,e){var u=e?Vt:Zt,i=-1,o=t.length,f=n;for(r&&(f=Mt(n,Xt(r)));++i<o;)for(var a=0,c=t[i],l=r?r(c):c;(a=u(f,l,a,e))>-1;)f!==n&&At.call(f,a,1),At.call(n,a,1);return n}function Ve(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;if(ei(u))At.call(n,u,1);else if(ii(u,n))delete n[yi(u)];else{var o=pu(u),f=hi(n,o);null!=f&&delete f[yi(Ri(o))]}}}return n}function Ge(n,t){return n+kt(mr()*(t-n+1))}function Je(n,t){var r="";if(!n||t<1||t>I)return r;do{t%2&&(r+=n),(t=kt(t/2))&&(n+=n)}while(t);return r}function Ye(n,t,e,u){for(var i=-1,o=(t=ii(t,n)?[t]:pu(t)).length,f=o-1,a=n;null!=a&&++i<o;){var c=yi(t[i]);if(Lo(a)){var l=e;if(i!=f){var s=a[c];(l=u?u(s,c,a):r)===r&&(l=null==s?ei(t[i+1])?[]:{}:s)}ie(a,c,l)}a=a[c]}return n}_t&&!bt.call({valueOf:1},"valueOf")&&(ze=function(n){return cr(_t(n))});var He=Wr?function(n,t){return Wr.set(n,t),n}:Cf;function Qe(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),(r=r>u?u:r)<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(u);++e<u;)i[e]=n[e+t];return i}function Xe(n,t){var r;return ve(n,function(n,e,u){return!(r=t(n,e,u))}),!!r}function nu(n,t,r){var e=0,u=n?n.length:e;if("number"==typeof t&&t==t&&u<=C){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!Mo(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return tu(n,t,Cf,r)}function tu(n,t,e,u){t=e(t);for(var i=0,o=n?n.length:0,f=t!=t,a=null===t,c=Mo(t),l=t===r;i<o;){var s=kt((i+o)/2),h=e(n[s]),p=h!==r,v=null===h,_=h==h,g=Mo(h);if(f)var y=u||_;else y=l?_&&(u||p):a?_&&p&&(u||!v):c?_&&p&&!v&&(u||!g):!v&&!g&&(u?h<=t:h<t);y?i=s+1:o=s}return br(o,L)}function ru(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!wo(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function eu(n){return"number"==typeof n?n:Mo(n)?S:+n}function uu(n){if("string"==typeof n)return n;if(Mo(n))return Pr?Pr.call(n):"";var t=n+"";return"0"==t&&1/n==-E?"-0":t}function iu(n,t,r){var e=-1,i=$t,o=n.length,f=!0,a=[],c=a;if(r)f=!1,i=Dt;else if(o>=u){var l=t?null:Du(n);if(l)return hr(l);f=!1,i=Yr,c=new Jr}else c=t?[]:a;n:for(;++e<o;){var s=n[e],h=t?t(s):s;if(s=r||0!==s?s:0,f&&h==h){for(var p=c.length;p--;)if(c[p]===h)continue n;t&&c.push(h),a.push(s)}else i(c,h,r)||(c!==a&&c.push(h),a.push(s))}return a}function ou(n,t,r,e){return Ye(n,t,r(Oe(n,t)),e)}function fu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?Qe(n,e?0:i,e?i+1:u):Qe(n,e?i+1:0,e?u:i)}function au(n,t){var r=n;return r instanceof Kr&&(r=r.value()),Pt(t,function(n,t){return t.func.apply(t.thisArg,Ft([n],t.args))},r)}function cu(n,t,r){for(var e=-1,u=n.length;++e<u;)var i=i?Ft(pe(i,n[e],t,r),pe(n[e],i,t,r)):n[e];return i&&i.length?iu(i,t,r):[]}function lu(n,t,e){for(var u=-1,i=n.length,o=t.length,f={};++u<i;){var a=u<o?t[u]:r;e(f,n[u],a)}return f}function su(n){return ko(n)?n:[]}function hu(n){return"function"==typeof n?n:Cf}function pu(n){return jo(n)?n:gi(n)}function vu(n,t,e){var u=n.length;return e=e===r?u:e,!t&&e>=u?n:Qe(n,t,e)}function _u(n){var t=new n.constructor(n.byteLength);return new ut(t).set(new ut(n)),t}function gu(n,t){if(n!==t){var e=n!==r,u=null===n,i=n==n,o=Mo(n),f=t!==r,a=null===t,c=t==t,l=Mo(t);if(!a&&!l&&!o&&n>t||o&&f&&c&&!a&&!l||u&&f&&c||!e&&c||!i)return 1;if(!u&&!o&&!l&&n<t||l&&e&&i&&!u&&!o||a&&e&&i||!f&&i||!c)return-1}return 0}function yu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,a=t.length,c=dr(i-o,0),l=Array(a+c),s=!e;++f<a;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;c--;)l[f++]=n[u++];return l}function du(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,a=-1,c=t.length,l=dr(i-f,0),s=Array(l+c),h=!e;++u<l;)s[u]=n[u];for(var p=u;++a<c;)s[p+a]=t[a];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function bu(n,t){var r=-1,e=n.length;for(t||(t=Array(e));++r<e;)t[r]=n[r];return t}function wu(n,t,r,e){r||(r={});for(var u=-1,i=t.length;++u<i;){var o=t[u];ie(r,o,e?e(r[o],n[o],o,r,n):n[o])}return r}function mu(n,t){return function(r,e){var u=jo(r)?Ct:oe,i=t?t():{};return u(r,n,qu(e),i)}}function xu(n){return yo(function(t,e){var u=-1,i=e.length,o=i>1?e[i-1]:r,f=i>2?e[2]:r;for(o="function"==typeof o?(i--,o):r,f&&ui(e[0],e[1],f)&&(o=i<3?r:o,i=1),t=Object(t);++u<i;){var a=e[u];a&&n(t,a,u,o)}return t})}function Au(n,t){return function(r,e){if(null==r)return r;if(!Oo(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Object(r);(t?i--:++i<u)&&!1!==e(o[i],i,o););return r}}function ju(n){return function(t,r,e){for(var u=-1,i=Object(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(!1===r(i[a],a,i))break}return t}}function Ou(n){return function(t){t=Go(t);var e=ct.test(t)?vr(t):r,u=e?e[0]:t.charAt(0),i=e?vu(e,1).join(""):t.slice(1);return u[n]()+i}}function ku(n){return function(t){return Pt(Ef(bf(t).replace(it,"")),n,"")}}function Eu(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=se(n.prototype),e=n.apply(r,t);return Lo(e)?e:r}}function Iu(n){return yo(function(t){var e=(t=be(t,1)).length,o=e,f=qr.prototype.thru;for(n&&t.reverse();o--;){var a=t[o];if("function"!=typeof a)throw new qn(i);if(f&&!c&&"wrapper"==Tu(a))var c=new qr([],!0)}for(o=c?o:e;++o<e;){var l=Tu(a=t[o]),h="wrapper"==l?Nu(a):r;c=h&&fi(h[0])&&h[1]==(_|s|p|g)&&!h[4].length&&1==h[9]?c[Tu(h[0])].apply(c,h[3]):1==a.length&&fi(a)?c[l]():c.thru(a)}return function(){var n=arguments,r=n[0];if(c&&1==n.length&&jo(r)&&r.length>=u)return c.plant(r).value();for(var i=0,o=e?t[i].apply(this,n):r;++i<e;)o=t[i].call(this,o);return o}})}function Ru(n,t,e,u,i,o,f,l,p,v){var g=t&_,d=t&a,b=t&c,w=t&(s|h),m=t&y,x=b?r:Eu(n);return function a(){for(var c=arguments.length,s=c,h=Array(c);s--;)h[s]=arguments[s];if(w)var _=Gu(a),y=function(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&e++;return e}(h,_);if(u&&(h=yu(h,u,i,w)),o&&(h=du(h,o,f,w)),c-=y,w&&c<v){var A=sr(h,_);return Uu(n,t,Ru,a.placeholder,e,h,A,l,p,v-c)}var j=d?e:this,O=b?j[n]:n;return c=h.length,l?h=function(n,t){for(var e=n.length,u=br(t.length,e),i=bu(n);u--;){var o=t[u];n[u]=ei(o,e)?i[o]:r}return n}(h,l):m&&c>1&&h.reverse(),g&&p<c&&(h.length=p),this&&this!==Rt&&this instanceof a&&(O=x||Eu(O)),O.apply(j,h)}}function Su(n,t){return function(r,e){return function(n,t,r,e){return xe(n,function(n,u,i){t(e,r(n),u,i)}),e}(r,n,t(e),{})}}function Wu(n){return function(t,e){var u;if(t===r&&e===r)return 0;if(t!==r&&(u=t),e!==r){if(u===r)return e;"string"==typeof t||"string"==typeof e?(t=uu(t),e=uu(e)):(t=eu(t),e=eu(e)),u=n(t,e)}return u}}function Lu(n){return yo(function(t){return t=1==t.length&&jo(t[0])?Mt(t[0],Xt(qu())):Mt(be(t,1,ri),Xt(qu())),yo(function(r){var e=this;return n(t,function(n){return Lt(n,e,r)})})})}function Cu(n,t){var e=(t=t===r?" ":uu(t)).length;if(e<2)return e?Je(t,n):t;var u=Je(t,Ot(n/pr(t)));return ct.test(t)?vu(vr(u),0,n).join(""):u.slice(0,n)}function Bu(n){return function(t,e,u){return u&&"number"!=typeof u&&ui(t,e,u)&&(e=u=r),t=(t=Zo(t))==t?t:0,e===r?(e=t,t=0):e=Zo(e)||0,function(n,t,r,e){for(var u=-1,i=dr(Ot((t-n)/(r||1)),0),o=Array(i);i--;)o[e?i:++u]=n,n+=r;return o}(t,e,u=u===r?t<e?1:-1:Zo(u)||0,n)}}function zu(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=Zo(t),r=Zo(r)),n(t,r)}}function Uu(n,t,e,u,i,o,f,h,_,g){var y=t&s;t|=y?p:v,(t&=~(y?v:p))&l||(t&=~(a|c));var d=[n,t,i,y?o:r,y?f:r,y?r:o,y?r:f,h,_,g],b=e.apply(r,d);return fi(n)&&_i(b,d),b.placeholder=u,b}function $u(n){var t=Nn[n];return function(n,r){if(n=Zo(n),r=qo(r)){var e=(Go(n)+"e").split("e");return+((e=(Go(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"))[0]+"e"+(+e[1]-r))}return t(n)}}var Du=Ir&&1/hr(new Ir([,-0]))[1]==E?function(n){return new Ir(n)}:Df;function Mu(n,t,e,u,o,y,d,b){var w=t&c;if(!w&&"function"!=typeof n)throw new qn(i);var m=u?u.length:0;if(m||(t&=~(p|v),u=o=r),d=d===r?d:dr(qo(d),0),b=b===r?b:qo(b),m-=o?o.length:0,t&v){var x=u,A=o;u=o=r}var j=w?r:Nu(n),O=[n,t,e,u,o,x,A,y,d,b];if(j&&function(n,t){var r=n[1],e=t[1],u=r|e,i=u<(a|c|_),o=e==_&&r==s||e==_&&r==g&&n[7].length<=t[8]||e==(_|g)&&t[7].length<=t[8]&&r==s;if(!i&&!o)return n;e&a&&(n[2]=t[2],u|=r&a?0:l);var h=t[3];if(h){var p=n[3];n[3]=p?yu(p,h,t[4]):h,n[4]=p?sr(n[3],f):t[4]}(h=t[5])&&(p=n[5],n[5]=p?du(p,h,t[6]):h,n[6]=p?sr(n[5],f):t[6]),(h=t[7])&&(n[7]=h),e&_&&(n[8]=null==n[8]?t[8]:br(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u}(O,j),n=O[0],t=O[1],e=O[2],u=O[3],o=O[4],!(b=O[9]=null==O[9]?w?0:n.length:dr(O[9]-m,0))&&t&(s|h)&&(t&=~(s|h)),t&&t!=a)k=t==s||t==h?function(n,t,e){var u=Eu(n);return function i(){for(var o=arguments.length,f=Array(o),a=o,c=Gu(i);a--;)f[a]=arguments[a];var l=o<3&&f[0]!==c&&f[o-1]!==c?[]:sr(f,c);return(o-=l.length)<e?Uu(n,t,Ru,i.placeholder,r,f,l,r,r,e-o):Lt(this&&this!==Rt&&this instanceof i?u:n,this,f)}}(n,t,b):t!=p&&t!=(a|p)||o.length?Ru.apply(r,O):function(n,t,r,e){var u=t&a,i=Eu(n);return function t(){for(var o=-1,f=arguments.length,a=-1,c=e.length,l=Array(c+f),s=this&&this!==Rt&&this instanceof t?i:n;++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++o];return Lt(s,u?r:this,l)}}(n,t,e,u);else var k=function(n,t,r){var e=t&a,u=Eu(n);return function t(){return(this&&this!==Rt&&this instanceof t?u:n).apply(e?r:this,arguments)}}(n,t,e);return(j?He:_i)(k,O)}function Fu(n,t,e,u,i,o){var f=-1,a=i&b,c=i&d,l=n.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var h=o.get(n);if(h)return h==t;var p=!0;for(o.set(n,t);++f<l;){var v=n[f],_=t[f];if(u)var g=a?u(_,v,f,t,n,o):u(v,_,f,n,t,o);if(g!==r){if(g)continue;p=!1;break}if(c){if(!Tt(t,function(n){return v===n||e(v,n,u,i,o)})){p=!1;break}}else if(v!==_&&!e(v,_,u,i,o)){p=!1;break}}return o.delete(n),p}function Pu(n){return ke(n,cf,Hu)}var Nu=Wr?function(n){return Wr.get(n)}:Df;function Tu(n){for(var t=n.name+"",r=Cr[t],e=Jn.call(Cr,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function qu(){var n=Nr.iteratee||Bf;return n=n===Bf?Be:n,arguments.length?n(arguments[0],arguments[1]):n}var Ku=Ke("length");function Zu(n){for(var t=vf(n),r=t.length;r--;)t[r][2]=ci(t[r][1]);return t}function Vu(n,t){var e=n[t];return Bo(e)?e:r}function Gu(n){return(Jn.call(Nr,"placeholder")?Nr:n).placeholder}function Ju(n){return Et(Object(n))}function Yu(n){return gt(Object(n))}gt||(Yu=function(){return[]});var Hu=gt?function(n){for(var t=[];n;)Ft(t,Yu(n)),n=Ju(n);return t}:Yu;function Qu(n){return Qn.call(n)}function Xu(n,t,r){for(var e,u=-1,i=(t=ii(t,n)?[t]:pu(t)).length;++u<i;){var o=yi(t[u]);if(!(e=null!=n&&r(n,o)))break;n=n[o]}return e||!!(i=n?n.length:0)&&Wo(i)&&ei(o,i)&&(jo(n)||Do(n)||Ao(n))}function ni(n){var t=n?n.length:r;return Wo(t)&&(jo(n)||Do(n)||Ao(n))?Ht(t,String):null}function ti(n){return ko(n)&&(jo(n)||Ao(n))}function ri(n){return jo(n)&&!(2==n.length&&!Ro(n[0]))}function ei(n,t){return!!(t=null==t?I:t)&&("number"==typeof n||Un.test(n))&&n>-1&&n%1==0&&n<t}function ui(n,t,r){if(!Lo(r))return!1;var e=typeof t;return!!("number"==e?Oo(r)&&ei(t,r.length):"string"==e&&t in r)&&wo(r[t],n)}function ii(n,t){if(jo(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!Mo(n))||wn.test(n)||!bn.test(n)||null!=t&&n in Object(t)}function oi(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function fi(n){var t=Tu(n),r=Nr[t];if("function"!=typeof r||!(t in Kr.prototype))return!1;if(n===r)return!0;var e=Nu(r);return!!e&&n===e[0]}function ai(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||Zn)}function ci(n){return n==n&&!Lo(n)}function li(n,t){return function(e){return null!=e&&e[n]===t&&(t!==r||n in Object(e))}}function si(n,t,e,u,i,o){return Lo(n)&&Lo(t)&&Fe(n,t,r,si,o.set(t,n)),n}function hi(n,t){return 1==t.length?n:Oe(n,Qe(t,0,-1))}(Or&&Qu(new Or(new ArrayBuffer(1)))!=Q||kr&&Qu(new kr)!=P||Er&&Qu(Er.resolve())!=q||Ir&&Qu(new Ir)!=Z||Rr&&Qu(new Rr)!=J)&&(Qu=function(n){var t=Qn.call(n),e=t==T?n.constructor:r,u=e?di(e):r;if(u)switch(u){case Br:return Q;case zr:return P;case Ur:return q;case $r:return Z;case Dr:return J}return t});var pi,vi,_i=(pi=0,vi=0,function(n,t){var r=uo(),e=A-(r-vi);if(vi=r,e>0){if(++pi>=x)return n}else pi=0;return He(n,t)}),gi=ho(function(n){var t=[];return Go(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(In,"$1"):r||n)}),t});function yi(n){if("string"==typeof n||Mo(n))return n;var t=n+"";return"0"==t&&1/n==-E?"-0":t}function di(n){if(null!=n){try{return Gn.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function bi(n){if(n instanceof Kr)return n.clone();var t=new qr(n.__wrapped__,n.__chain__);return t.__actions__=bu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}var wi=yo(function(n,t){return ko(n)?pe(n,be(t,1,ko,!0)):[]}),mi=yo(function(n,t){var e=Ri(t);return ko(e)&&(e=r),ko(n)?pe(n,be(t,1,ko,!0),qu(e)):[]}),xi=yo(function(n,t){var e=Ri(t);return ko(e)&&(e=r),ko(n)?pe(n,be(t,1,ko,!0),r,e):[]});function Ai(n,t,e){var u=n?n.length:0;return u?Qe(n,(t=e||t===r?1:qo(t))<0?0:t,u):[]}function ji(n,t,e){var u=n?n.length:0;return u?Qe(n,0,(t=u-(t=e||t===r?1:qo(t)))<0?0:t):[]}function Oi(n){return n&&n.length?n[0]:r}var ki=yo(function(n){var t=Mt(n,su);return t.length&&t[0]===n[0]?Se(t):[]}),Ei=yo(function(n){var t=Ri(n),e=Mt(n,su);return t===Ri(e)?t=r:e.pop(),e.length&&e[0]===n[0]?Se(e,qu(t)):[]}),Ii=yo(function(n){var t=Ri(n),e=Mt(n,su);return t===Ri(e)?t=r:e.pop(),e.length&&e[0]===n[0]?Se(e,r,t):[]});function Ri(n){var t=n?n.length:0;return t?n[t-1]:r}var Si=yo(Wi);function Wi(n,t){return n&&n.length&&t&&t.length?Ze(n,t):n}var Li=yo(function(n,t){t=be(t,1);var r=n?n.length:0,e=ae(n,t);return Ve(n,Mt(t,function(n){return ei(n,r)?+n:n}).sort(gu)),e});function Ci(n){return n?Ar.call(n):n}var Bi=yo(function(n){return iu(be(n,1,ko,!0))}),zi=yo(function(n){var t=Ri(n);return ko(t)&&(t=r),iu(be(n,1,ko,!0),qu(t))}),Ui=yo(function(n){var t=Ri(n);return ko(t)&&(t=r),iu(be(n,1,ko,!0),r,t)});function $i(n){if(!n||!n.length)return[];var t=0;return n=Ut(n,function(n){if(ko(n))return t=dr(n.length,t),!0}),Ht(t,function(t){return Mt(n,Ke(t))})}function Di(n,t){if(!n||!n.length)return[];var e=$i(n);return null==t?e:Mt(e,function(n){return Lt(t,r,n)})}var Mi=yo(function(n,t){return ko(n)?pe(n,t):[]}),Fi=yo(function(n){return cu(Ut(n,ko))}),Pi=yo(function(n){var t=Ri(n);return ko(t)&&(t=r),cu(Ut(n,ko),qu(t))}),Ni=yo(function(n){var t=Ri(n);return ko(t)&&(t=r),cu(Ut(n,ko),r,t)}),Ti=yo($i);var qi=yo(function(n){var t=n.length,e=t>1?n[t-1]:r;return e="function"==typeof e?(n.pop(),e):r,Di(n,e)});function Ki(n){var t=Nr(n);return t.__chain__=!0,t}function Zi(n,t){return t(n)}var Vi=yo(function(n){var t=(n=be(n,1)).length,e=t?n[0]:0,u=this.__wrapped__,i=function(t){return ae(t,n)};return!(t>1||this.__actions__.length)&&u instanceof Kr&&ei(e)?((u=u.slice(e,+e+(t?1:0))).__actions__.push({func:Zi,args:[i],thisArg:r}),new qr(u,this.__chain__).thru(function(n){return t&&!n.length&&n.push(r),n})):this.thru(i)});var Gi=mu(function(n,t,r){Jn.call(n,r)?++n[r]:n[r]=1});function Ji(n,t){return"function"==typeof t&&jo(n)?Bt(n,t):ve(n,qu(t))}function Yi(n,t){return"function"==typeof t&&jo(n)?function(n,t){for(var r=n.length;r--&&!1!==t(n[r],r,n););return n}(n,t):_e(n,qu(t))}var Hi=mu(function(n,t,r){Jn.call(n,r)?n[r].push(t):n[r]=[t]});var Qi=yo(function(n,t,e){var u=-1,i="function"==typeof t,o=ii(t),f=Oo(n)?Array(n.length):[];return ve(n,function(n){var a=i?t:o&&null!=n?n[t]:r;f[++u]=a?Lt(a,n,e):We(n,t,e)}),f}),Xi=mu(function(n,t,r){n[r]=t});function no(n,t){return(jo(n)?Mt:$e)(n,qu(t,3))}var to=mu(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]});function ro(n,t,e){var u=-1,i=To(n),o=i.length,f=o-1;for(t=(e?ui(n,t,e):t===r)?1:ce(qo(t),0,o);++u<t;){var a=Ge(u,f),c=i[a];i[a]=i[u],i[u]=c}return i.length=t,i}var eo=yo(function(n,t){if(null==n)return[];var r=t.length;return r>1&&ui(n,t[0],t[1])?t=[]:r>2&&ui(t[0],t[1],t[2])&&(t=[t[0]]),Ne(n,t=1==t.length&&jo(t[0])?t[0]:be(t,1,ri),[])}),uo=Fn.now;function io(n,t,e){return t=e?r:t,t=n&&null==t?n.length:t,Mu(n,_,r,r,r,r,t)}function oo(n,t){var e;if("function"!=typeof t)throw new qn(i);return n=qo(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=r),e}}var fo=yo(function(n,t,r){var e=a;if(r.length){var u=sr(r,Gu(fo));e|=p}return Mu(n,e,t,r,u)}),ao=yo(function(n,t,r){var e=a|c;if(r.length){var u=sr(r,Gu(ao));e|=p}return Mu(t,e,n,r,u)});function co(n,t,e){var u,o,f,a,c,l=0,s=0,h=!1,p=!1,v=!0;if("function"!=typeof n)throw new qn(i);function _(t){var e=u,i=o;return u=o=r,s=t,a=n.apply(i,e)}function g(n){var r=n-l;return!l||r>=t||r<0||p&&n-s>=f}function y(){var n=uo();if(g(n))return d(n);c=xt(y,function(n){var r=t-(n-l);return p?br(r,f-(n-s)):r}(n))}function d(n){return ft(c),c=r,v&&u?_(n):(u=o=r,a)}function b(){var n=uo(),e=g(n);if(u=arguments,o=this,l=n,e){if(c===r)return function(n){return s=n,c=xt(y,t),h?_(n):a}(l);if(p)return ft(c),c=xt(y,t),_(l)}return c===r&&(c=xt(y,t)),a}return t=Zo(t)||0,Lo(e)&&(h=!!e.leading,f=(p="maxWait"in e)?dr(Zo(e.maxWait)||0,t):f,v="trailing"in e?!!e.trailing:v),b.cancel=function(){c!==r&&ft(c),l=s=0,u=o=c=r},b.flush=function(){return c===r?a:d(uo())},b}var lo=yo(function(n,t){return he(n,1,t)}),so=yo(function(n,t,r){return he(n,Zo(t)||0,r)});function ho(n,t){if("function"!=typeof n||t&&"function"!=typeof t)throw new qn(i);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o),o};return r.cache=new(ho.Cache||Gr),r}ho.Cache=Gr;var po=yo(function(n,t){var r=(t=1==t.length&&jo(t[0])?Mt(t[0],Xt(qu())):Mt(be(t,1,ri),Xt(qu()))).length;return yo(function(e){for(var u=-1,i=br(e.length,r);++u<i;)e[u]=t[u].call(this,e[u]);return Lt(n,this,e)})}),vo=yo(function(n,t){var e=sr(t,Gu(vo));return Mu(n,p,r,t,e)}),_o=yo(function(n,t){var e=sr(t,Gu(_o));return Mu(n,v,r,t,e)}),go=yo(function(n,t){return Mu(n,g,r,r,r,be(t,1))});function yo(n,t){if("function"!=typeof n)throw new qn(i);return t=dr(t===r?n.length-1:qo(t),0),function(){for(var r=arguments,e=-1,u=dr(r.length-t,0),i=Array(u);++e<u;)i[e]=r[t+e];switch(t){case 0:return n.call(this,i);case 1:return n.call(this,r[0],i);case 2:return n.call(this,r[0],r[1],i)}var o=Array(t+1);for(e=-1;++e<t;)o[e]=r[e];return o[t]=i,Lt(n,this,o)}}function bo(){if(!arguments.length)return[];var n=arguments[0];return jo(n)?n:[n]}function wo(n,t){return n===t||n!=n&&t!=t}var mo=zu(Ee),xo=zu(function(n,t){return n>=t});function Ao(n){return ko(n)&&Jn.call(n,"callee")&&(!bt.call(n,"callee")||Qn.call(n)==B)}var jo=Array.isArray;function Oo(n){return null!=n&&Wo(Ku(n))&&!Ro(n)}function ko(n){return Co(n)&&Oo(n)}var Eo=tt?function(n){return n instanceof tt}:Sf(!1);function Io(n){return!!Co(n)&&(Qn.call(n)==D||"string"==typeof n.message&&"string"==typeof n.name)}function Ro(n){var t=Lo(n)?Qn.call(n):"";return t==M||t==F}function So(n){return"number"==typeof n&&n==qo(n)}function Wo(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=I}function Lo(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function Co(n){return!!n&&"object"==typeof n}function Bo(n){return!!Lo(n)&&(Ro(n)||ar(n)?nt:Bn).test(di(n))}function zo(n){return"number"==typeof n||Co(n)&&Qn.call(n)==N}function Uo(n){if(!Co(n)||Qn.call(n)!=T||ar(n))return!1;var t=Ju(n);if(null===t)return!0;var r=Jn.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Gn.call(r)==Hn}function $o(n){return Lo(n)&&Qn.call(n)==K}function Do(n){return"string"==typeof n||!jo(n)&&Co(n)&&Qn.call(n)==V}function Mo(n){return"symbol"==typeof n||Co(n)&&Qn.call(n)==G}function Fo(n){return Co(n)&&Wo(n.length)&&!!pt[Qn.call(n)]}var Po=zu(Ue),No=zu(function(n,t){return n<=t});function To(n){if(!n)return[];if(Oo(n))return Do(n)?vr(n):bu(n);if(yt&&n[yt])return cr(n[yt]());var t=Qu(n);return(t==P?lr:t==Z?hr:gf)(n)}function qo(n){if(!n)return 0===n?n:0;if((n=Zo(n))===E||n===-E)return(n<0?-1:1)*R;var t=n%1;return n==n?t?n-t:n:0}function Ko(n){return n?ce(qo(n),0,W):0}function Zo(n){if("number"==typeof n)return n;if(Mo(n))return S;if(Lo(n)){var t=Ro(n.valueOf)?n.valueOf():n;n=Lo(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(jn,"");var r=Cn.test(n);return r||zn.test(n)?mt(n.slice(2),r?2:8):Ln.test(n)?S:+n}function Vo(n){return wu(n,cf(n))}function Go(n){return null==n?"":uu(n)}var Jo=xu(function(n,t){if(Lr||ai(t)||Oo(t))wu(t,af(t),n);else for(var r in t)Jn.call(t,r)&&ie(n,r,t[r])}),Yo=xu(function(n,t){if(Lr||ai(t)||Oo(t))wu(t,cf(t),n);else for(var r in t)ie(n,r,t[r])}),Ho=xu(function(n,t,r,e){wu(t,cf(t),n,e)}),Qo=xu(function(n,t,r,e){wu(t,af(t),n,e)}),Xo=yo(function(n,t){return ae(n,be(t,1))});var nf=yo(function(n){return n.push(r,ee),Lt(Ho,r,n)}),tf=yo(function(n){return n.push(r,si),Lt(sf,r,n)});function rf(n,t,e){var u=null==n?r:Oe(n,t);return u===r?e:u}function ef(n,t){return null!=n&&Xu(n,t,Re)}var uf=Su(function(n,t,r){n[t]=r},Sf(Cf)),of=Su(function(n,t,r){Jn.call(n,t)?n[t].push(r):n[t]=[r]},qu),ff=yo(We);function af(n){var t=ai(n);if(!t&&!Oo(n))return function(n){return yr(Object(n))}(n);var r=ni(n),e=!!r,u=r||[],i=u.length;for(var o in n)!Ie(n,o)||e&&("length"==o||ei(o,i))||t&&"constructor"==o||u.push(o);return u}function cf(n){for(var t=-1,r=ai(n),e=ze(n),u=e.length,i=ni(n),o=!!i,f=i||[],a=f.length;++t<u;){var c=e[t];o&&("length"==c||ei(c,a))||"constructor"==c&&(r||!Jn.call(n,c))||f.push(c)}return f}var lf=xu(function(n,t,r){Fe(n,t,r)}),sf=xu(function(n,t,r,e){Fe(n,t,r,e)}),hf=yo(function(n,t){return null==n?{}:(t=Mt(be(t,1),yi),Te(n,pe(Pu(n),t)))});var pf=yo(function(n,t){return null==n?{}:Te(n,Mt(be(t,1),yi))});function vf(n){return Qt(n,af(n))}function _f(n){return Qt(n,cf(n))}function gf(n){return n?nr(n,af(n)):[]}var yf=ku(function(n,t,r){return t=t.toLowerCase(),n+(r?df(t):t)});function df(n){return kf(Go(n).toLowerCase())}function bf(n){return(n=Go(n))&&n.replace($n,ur).replace(ot,"")}var wf=ku(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),mf=ku(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),xf=Ou("toLowerCase");var Af=ku(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()});var jf=ku(function(n,t,r){return n+(r?" ":"")+kf(t)});var Of=ku(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),kf=Ou("toUpperCase");function Ef(n,t,e){return n=Go(n),(t=e?r:t)===r&&(t=lt.test(n)?at:En),n.match(t)||[]}var If=yo(function(n,t){try{return Lt(n,r,t)}catch(n){return Io(n)?n:new Pn(n)}}),Rf=yo(function(n,t){return Bt(be(t,1),function(t){t=yi(t),n[t]=fo(n[t],n)}),n});function Sf(n){return function(){return n}}var Wf=Iu(),Lf=Iu(!0);function Cf(n){return n}function Bf(n){return Be("function"==typeof n?n:le(n,!0))}var zf=yo(function(n,t){return function(r){return We(r,n,t)}}),Uf=yo(function(n,t){return function(r){return We(n,r,t)}});function $f(n,t,r){var e=af(t),u=je(t,e);null!=r||Lo(t)&&(u.length||!e.length)||(r=t,t=n,n=this,u=je(t,af(t)));var i=!(Lo(r)&&"chain"in r&&!r.chain),o=Ro(n);return Bt(u,function(r){var e=t[r];n[r]=e,o&&(n.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=n(this.__wrapped__);return(r.__actions__=bu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,Ft([this.value()],arguments))})}),n}function Df(){}var Mf=Lu(Mt),Ff=Lu(zt),Pf=Lu(Tt);function Nf(n){return ii(n)?Ke(yi(n)):function(n){return function(t){return Oe(t,n)}}(n)}var Tf=Bu(),qf=Bu(!0);var Kf=Wu(function(n,t){return n+t}),Zf=$u("ceil"),Vf=Wu(function(n,t){return n/t}),Gf=$u("floor");var Jf,Yf=Wu(function(n,t){return n*t}),Hf=$u("round"),Qf=Wu(function(n,t){return n-t});return Nr.after=function(n,t){if("function"!=typeof t)throw new qn(i);return n=qo(n),function(){if(--n<1)return t.apply(this,arguments)}},Nr.ary=io,Nr.assign=Jo,Nr.assignIn=Yo,Nr.assignInWith=Ho,Nr.assignWith=Qo,Nr.at=Xo,Nr.before=oo,Nr.bind=fo,Nr.bindAll=Rf,Nr.bindKey=ao,Nr.castArray=bo,Nr.chain=Ki,Nr.chunk=function(n,t,e){t=(e?ui(n,t,e):t===r)?1:dr(qo(t),0);var u=n?n.length:0;if(!u||t<1)return[];for(var i=0,o=0,f=Array(Ot(u/t));i<u;)f[o++]=Qe(n,i,i+=t);return f},Nr.compact=function(n){for(var t=-1,r=n?n.length:0,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u},Nr.concat=function(){var n=arguments.length,t=bo(arguments[0]);if(n<2)return n?bu(t):[];for(var r=Array(n-1);n--;)r[n-1]=arguments[n];return function(n,t){for(var r=-1,e=n.length,u=-1,i=t.length,o=Array(e+i);++r<e;)o[r]=n[r];for(;++u<i;)o[r++]=t[u];return o}(t,be(r,1))},Nr.cond=function(n){var t=n?n.length:0,r=qu();return n=t?Mt(n,function(n){if("function"!=typeof n[1])throw new qn(i);return[r(n[0]),n[1]]}):[],yo(function(r){for(var e=-1;++e<t;){var u=n[e];if(Lt(u[0],this,r))return Lt(u[1],this,r)}})},Nr.conforms=function(n){return function(n){var t=af(n),e=t.length;return function(u){if(null==u)return!e;for(var i=e;i--;){var o=t[i],f=n[o],a=u[o];if(a===r&&!(o in Object(u))||!f(a))return!1}return!0}}(le(n,!0))},Nr.constant=Sf,Nr.countBy=Gi,Nr.create=function(n,t){var r=se(n);return t?fe(r,t):r},Nr.curry=function n(t,e,u){var i=Mu(t,s,r,r,r,r,r,e=u?r:e);return i.placeholder=n.placeholder,i},Nr.curryRight=function n(t,e,u){var i=Mu(t,h,r,r,r,r,r,e=u?r:e);return i.placeholder=n.placeholder,i},Nr.debounce=co,Nr.defaults=nf,Nr.defaultsDeep=tf,Nr.defer=lo,Nr.delay=so,Nr.difference=wi,Nr.differenceBy=mi,Nr.differenceWith=xi,Nr.drop=Ai,Nr.dropRight=ji,Nr.dropRightWhile=function(n,t){return n&&n.length?fu(n,qu(t,3),!0,!0):[]},Nr.dropWhile=function(n,t){return n&&n.length?fu(n,qu(t,3),!0):[]},Nr.fill=function(n,t,e,u){var i=n?n.length:0;return i?(e&&"number"!=typeof e&&ui(n,t,e)&&(e=0,u=i),function(n,t,e,u){var i=n.length;for((e=qo(e))<0&&(e=-e>i?0:i+e),(u=u===r||u>i?i:qo(u))<0&&(u+=i),u=e>u?0:Ko(u);e<u;)n[e++]=t;return n}(n,t,e,u)):[]},Nr.filter=function(n,t){return(jo(n)?Ut:de)(n,qu(t,3))},Nr.flatMap=function(n,t){return be(no(n,t),1)},Nr.flatMapDeep=function(n,t){return be(no(n,t),E)},Nr.flatMapDepth=function(n,t,e){return e=e===r?1:qo(e),be(no(n,t),e)},Nr.flatten=function(n){return n&&n.length?be(n,1):[]},Nr.flattenDeep=function(n){return n&&n.length?be(n,E):[]},Nr.flattenDepth=function(n,t){return n&&n.length?be(n,t=t===r?1:qo(t)):[]},Nr.flip=function(n){return Mu(n,y)},Nr.flow=Wf,Nr.flowRight=Lf,Nr.fromPairs=function(n){for(var t=-1,r=n?n.length:0,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},Nr.functions=function(n){return null==n?[]:je(n,af(n))},Nr.functionsIn=function(n){return null==n?[]:je(n,cf(n))},Nr.groupBy=Hi,Nr.initial=function(n){return ji(n,1)},Nr.intersection=ki,Nr.intersectionBy=Ei,Nr.intersectionWith=Ii,Nr.invert=uf,Nr.invertBy=of,Nr.invokeMap=Qi,Nr.iteratee=Bf,Nr.keyBy=Xi,Nr.keys=af,Nr.keysIn=cf,Nr.map=no,Nr.mapKeys=function(n,t){var r={};return t=qu(t,3),xe(n,function(n,e,u){r[t(n,e,u)]=n}),r},Nr.mapValues=function(n,t){var r={};return t=qu(t,3),xe(n,function(n,e,u){r[e]=t(n,e,u)}),r},Nr.matches=function(n){return De(le(n,!0))},Nr.matchesProperty=function(n,t){return Me(n,le(t,!0))},Nr.memoize=ho,Nr.merge=lf,Nr.mergeWith=sf,Nr.method=zf,Nr.methodOf=Uf,Nr.mixin=$f,Nr.negate=function(n){if("function"!=typeof n)throw new qn(i);return function(){return!n.apply(this,arguments)}},Nr.nthArg=function(n){return n=qo(n),yo(function(t){return Pe(t,n)})},Nr.omit=hf,Nr.omitBy=function(n,t){return t=qu(t),qe(n,function(n,r){return!t(n,r)})},Nr.once=function(n){return oo(2,n)},Nr.orderBy=function(n,t,e,u){return null==n?[]:(jo(t)||(t=null==t?[]:[t]),jo(e=u?r:e)||(e=null==e?[]:[e]),Ne(n,t,e))},Nr.over=Mf,Nr.overArgs=po,Nr.overEvery=Ff,Nr.overSome=Pf,Nr.partial=vo,Nr.partialRight=_o,Nr.partition=to,Nr.pick=pf,Nr.pickBy=function(n,t){return null==n?{}:qe(n,qu(t))},Nr.property=Nf,Nr.propertyOf=function(n){return function(t){return null==n?r:Oe(n,t)}},Nr.pull=Si,Nr.pullAll=Wi,Nr.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?Ze(n,t,qu(r)):n},Nr.pullAllWith=function(n,t,e){return n&&n.length&&t&&t.length?Ze(n,t,r,e):n},Nr.pullAt=Li,Nr.range=Tf,Nr.rangeRight=qf,Nr.rearg=go,Nr.reject=function(n,t){var r=jo(n)?Ut:de;return t=qu(t,3),r(n,function(n,r,e){return!t(n,r,e)})},Nr.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=qu(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return Ve(n,u),r},Nr.rest=yo,Nr.reverse=Ci,Nr.sampleSize=ro,Nr.set=function(n,t,r){return null==n?n:Ye(n,t,r)},Nr.setWith=function(n,t,e,u){return u="function"==typeof u?u:r,null==n?n:Ye(n,t,e,u)},Nr.shuffle=function(n){return ro(n,W)},Nr.slice=function(n,t,e){var u=n?n.length:0;return u?(e&&"number"!=typeof e&&ui(n,t,e)?(t=0,e=u):(t=null==t?0:qo(t),e=e===r?u:qo(e)),Qe(n,t,e)):[]},Nr.sortBy=eo,Nr.sortedUniq=function(n){return n&&n.length?ru(n):[]},Nr.sortedUniqBy=function(n,t){return n&&n.length?ru(n,qu(t)):[]},Nr.split=function(n,t,e){return e&&"number"!=typeof e&&ui(n,t,e)&&(t=e=r),(e=e===r?W:e>>>0)?(n=Go(n))&&("string"==typeof t||null!=t&&!$o(t))&&""==(t=uu(t))&&ct.test(n)?vu(vr(n),0,e):jr.call(n,t,e):[]},Nr.spread=function(n,t){if("function"!=typeof n)throw new qn(i);return t=t===r?0:dr(qo(t),0),yo(function(r){var e=r[t],u=vu(r,0,t);return e&&Ft(u,e),Lt(n,this,u)})},Nr.tail=function(n){return Ai(n,1)},Nr.take=function(n,t,e){return n&&n.length?Qe(n,0,(t=e||t===r?1:qo(t))<0?0:t):[]},Nr.takeRight=function(n,t,e){var u=n?n.length:0;return u?Qe(n,(t=u-(t=e||t===r?1:qo(t)))<0?0:t,u):[]},Nr.takeRightWhile=function(n,t){return n&&n.length?fu(n,qu(t,3),!1,!0):[]},Nr.takeWhile=function(n,t){return n&&n.length?fu(n,qu(t,3)):[]},Nr.tap=function(n,t){return t(n),n},Nr.throttle=function(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new qn(i);return Lo(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),co(n,t,{leading:e,maxWait:t,trailing:u})},Nr.thru=Zi,Nr.toArray=To,Nr.toPairs=vf,Nr.toPairsIn=_f,Nr.toPath=function(n){return jo(n)?Mt(n,yi):Mo(n)?[n]:bu(gi(n))},Nr.toPlainObject=Vo,Nr.transform=function(n,t,r){var e=jo(n)||Fo(n);if(t=qu(t,4),null==r)if(e||Lo(n)){var u=n.constructor;r=e?jo(n)?new u:[]:Ro(u)?se(Ju(n)):{}}else r={};return(e?Bt:xe)(n,function(n,e,u){return t(r,n,e,u)}),r},Nr.unary=function(n){return io(n,1)},Nr.union=Bi,Nr.unionBy=zi,Nr.unionWith=Ui,Nr.uniq=function(n){return n&&n.length?iu(n):[]},Nr.uniqBy=function(n,t){return n&&n.length?iu(n,qu(t)):[]},Nr.uniqWith=function(n,t){return n&&n.length?iu(n,r,t):[]},Nr.unset=function(n,t){return null==n||function(n,t){n=hi(n,t=ii(t,n)?[t]:pu(t));var r=yi(Ri(t));return!(null!=n&&Ie(n,r))||delete n[r]}(n,t)},Nr.unzip=$i,Nr.unzipWith=Di,Nr.update=function(n,t,r){return null==n?n:ou(n,t,hu(r))},Nr.updateWith=function(n,t,e,u){return u="function"==typeof u?u:r,null==n?n:ou(n,t,hu(e),u)},Nr.values=gf,Nr.valuesIn=function(n){return null==n?[]:nr(n,cf(n))},Nr.without=Mi,Nr.words=Ef,Nr.wrap=function(n,t){return vo(t=null==t?Cf:t,n)},Nr.xor=Fi,Nr.xorBy=Pi,Nr.xorWith=Ni,Nr.zip=Ti,Nr.zipObject=function(n,t){return lu(n||[],t||[],ie)},Nr.zipObjectDeep=function(n,t){return lu(n||[],t||[],Ye)},Nr.zipWith=qi,Nr.entries=vf,Nr.entriesIn=_f,Nr.extend=Yo,Nr.extendWith=Ho,$f(Nr,Nr),Nr.add=Kf,Nr.attempt=If,Nr.camelCase=yf,Nr.capitalize=df,Nr.ceil=Zf,Nr.clamp=function(n,t,e){return e===r&&(e=t,t=r),e!==r&&(e=(e=Zo(e))==e?e:0),t!==r&&(t=(t=Zo(t))==t?t:0),ce(Zo(n),t,e)},Nr.clone=function(n){return le(n,!1,!0)},Nr.cloneDeep=function(n){return le(n,!0,!0)},Nr.cloneDeepWith=function(n,t){return le(n,!0,!0,t)},Nr.cloneWith=function(n,t){return le(n,!1,!0,t)},Nr.deburr=bf,Nr.divide=Vf,Nr.endsWith=function(n,t,e){n=Go(n),t=uu(t);var u=n.length;return e=e===r?u:ce(qo(e),0,u),(e-=t.length)>=0&&n.indexOf(t,e)==e},Nr.eq=wo,Nr.escape=function(n){return(n=Go(n))&&_n.test(n)?n.replace(pn,ir):n},Nr.escapeRegExp=function(n){return(n=Go(n))&&An.test(n)?n.replace(xn,"\\$&"):n},Nr.every=function(n,t,e){var u=jo(n)?zt:ge;return e&&ui(n,t,e)&&(t=r),u(n,qu(t,3))},Nr.find=function(n,t){if(t=qu(t,3),jo(n)){var e=Kt(n,t);return e>-1?n[e]:r}return qt(n,t,ve)},Nr.findIndex=function(n,t){return n&&n.length?Kt(n,qu(t,3)):-1},Nr.findKey=function(n,t){return qt(n,qu(t,3),xe,!0)},Nr.findLast=function(n,t){if(t=qu(t,3),jo(n)){var e=Kt(n,t,!0);return e>-1?n[e]:r}return qt(n,t,_e)},Nr.findLastIndex=function(n,t){return n&&n.length?Kt(n,qu(t,3),!0):-1},Nr.findLastKey=function(n,t){return qt(n,qu(t,3),Ae,!0)},Nr.floor=Gf,Nr.forEach=Ji,Nr.forEachRight=Yi,Nr.forIn=function(n,t){return null==n?n:we(n,qu(t),cf)},Nr.forInRight=function(n,t){return null==n?n:me(n,qu(t),cf)},Nr.forOwn=function(n,t){return n&&xe(n,qu(t))},Nr.forOwnRight=function(n,t){return n&&Ae(n,qu(t))},Nr.get=rf,Nr.gt=mo,Nr.gte=xo,Nr.has=function(n,t){return null!=n&&Xu(n,t,Ie)},Nr.hasIn=ef,Nr.head=Oi,Nr.identity=Cf,Nr.includes=function(n,t,r,e){n=Oo(n)?n:gf(n),r=r&&!e?qo(r):0;var u=n.length;return r<0&&(r=dr(u+r,0)),Do(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&Zt(n,t,r)>-1},Nr.indexOf=function(n,t,r){var e=n?n.length:0;return e?((r=qo(r))<0&&(r=dr(e+r,0)),Zt(n,t,r)):-1},Nr.inRange=function(n,t,e){return t=Zo(t)||0,e===r?(e=t,t=0):e=Zo(e)||0,function(n,t,r){return n>=br(t,r)&&n<dr(t,r)}(n=Zo(n),t,e)},Nr.invoke=ff,Nr.isArguments=Ao,Nr.isArray=jo,Nr.isArrayBuffer=function(n){return Co(n)&&Qn.call(n)==H},Nr.isArrayLike=Oo,Nr.isArrayLikeObject=ko,Nr.isBoolean=function(n){return!0===n||!1===n||Co(n)&&Qn.call(n)==U},Nr.isBuffer=Eo,Nr.isDate=function(n){return Co(n)&&Qn.call(n)==$},Nr.isElement=function(n){return!!n&&1===n.nodeType&&Co(n)&&!Uo(n)},Nr.isEmpty=function(n){if(Oo(n)&&(jo(n)||Do(n)||Ro(n.splice)||Ao(n)||Eo(n)))return!n.length;if(Co(n)){var t=Qu(n);if(t==P||t==Z)return!n.size}for(var r in n)if(Jn.call(n,r))return!1;return!(Lr&&af(n).length)},Nr.isEqual=function(n,t){return Le(n,t)},Nr.isEqualWith=function(n,t,e){var u=(e="function"==typeof e?e:r)?e(n,t):r;return u===r?Le(n,t,e):!!u},Nr.isError=Io,Nr.isFinite=function(n){return"number"==typeof n&&It(n)},Nr.isFunction=Ro,Nr.isInteger=So,Nr.isLength=Wo,Nr.isMap=function(n){return Co(n)&&Qu(n)==P},Nr.isMatch=function(n,t){return n===t||Ce(n,t,Zu(t))},Nr.isMatchWith=function(n,t,e){return e="function"==typeof e?e:r,Ce(n,t,Zu(t),e)},Nr.isNaN=function(n){return zo(n)&&n!=+n},Nr.isNative=Bo,Nr.isNil=function(n){return null==n},Nr.isNull=function(n){return null===n},Nr.isNumber=zo,Nr.isObject=Lo,Nr.isObjectLike=Co,Nr.isPlainObject=Uo,Nr.isRegExp=$o,Nr.isSafeInteger=function(n){return So(n)&&n>=-I&&n<=I},Nr.isSet=function(n){return Co(n)&&Qu(n)==Z},Nr.isString=Do,Nr.isSymbol=Mo,Nr.isTypedArray=Fo,Nr.isUndefined=function(n){return n===r},Nr.isWeakMap=function(n){return Co(n)&&Qu(n)==J},Nr.isWeakSet=function(n){return Co(n)&&Qn.call(n)==Y},Nr.join=function(n,t){return n?er.call(n,t):""},Nr.kebabCase=wf,Nr.last=Ri,Nr.lastIndexOf=function(n,t,e){var u=n?n.length:0;if(!u)return-1;var i=u;if(e!==r&&(i=((i=qo(e))<0?dr(u+i,0):br(i,u-1))+1),t!=t)return fr(n,i,!0);for(;i--;)if(n[i]===t)return i;return-1},Nr.lowerCase=mf,Nr.lowerFirst=xf,Nr.lt=Po,Nr.lte=No,Nr.max=function(n){return n&&n.length?ye(n,Cf,Ee):r},Nr.maxBy=function(n,t){return n&&n.length?ye(n,qu(t),Ee):r},Nr.mean=function(n){return Gt(n,Cf)},Nr.meanBy=function(n,t){return Gt(n,qu(t))},Nr.min=function(n){return n&&n.length?ye(n,Cf,Ue):r},Nr.minBy=function(n,t){return n&&n.length?ye(n,qu(t),Ue):r},Nr.multiply=Yf,Nr.nth=function(n,t){return n&&n.length?Pe(n,qo(t)):r},Nr.noConflict=function(){return Rt._===this&&(Rt._=Xn),this},Nr.noop=Df,Nr.now=uo,Nr.pad=function(n,t,r){n=Go(n);var e=(t=qo(t))?pr(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return Cu(kt(u),r)+n+Cu(Ot(u),r)},Nr.padEnd=function(n,t,r){n=Go(n);var e=(t=qo(t))?pr(n):0;return t&&e<t?n+Cu(t-e,r):n},Nr.padStart=function(n,t,r){n=Go(n);var e=(t=qo(t))?pr(n):0;return t&&e<t?Cu(t-e,r)+n:n},Nr.parseInt=function(n,t,r){return r||null==t?t=0:t&&(t=+t),n=Go(n).replace(jn,""),wr(n,t||(Wn.test(n)?16:10))},Nr.random=function(n,t,e){if(e&&"boolean"!=typeof e&&ui(n,t,e)&&(t=e=r),e===r&&("boolean"==typeof t?(e=t,t=r):"boolean"==typeof n&&(e=n,n=r)),n===r&&t===r?(n=0,t=1):(n=Zo(n)||0,t===r?(t=n,n=0):t=Zo(t)||0),n>t){var u=n;n=t,t=u}if(e||n%1||t%1){var i=mr();return br(n+i*(t-n+wt("1e-"+((i+"").length-1))),t)}return Ge(n,t)},Nr.reduce=function(n,t,r){var e=jo(n)?Pt:Jt,u=arguments.length<3;return e(n,qu(t,4),r,u,ve)},Nr.reduceRight=function(n,t,r){var e=jo(n)?Nt:Jt,u=arguments.length<3;return e(n,qu(t,4),r,u,_e)},Nr.repeat=function(n,t,e){return t=(e?ui(n,t,e):t===r)?1:qo(t),Je(Go(n),t)},Nr.replace=function(){var n=arguments,t=Go(n[0]);return n.length<3?t:xr.call(t,n[1],n[2])},Nr.result=function(n,t,e){var u=-1,i=(t=ii(t,n)?[t]:pu(t)).length;for(i||(n=r,i=1);++u<i;){var o=null==n?r:n[yi(t[u])];o===r&&(u=i,o=e),n=Ro(o)?o.call(n):o}return n},Nr.round=Hf,Nr.runInContext=n,Nr.sample=function(n){var t=Oo(n)?n:gf(n),e=t.length;return e>0?t[Ge(0,e-1)]:r},Nr.size=function(n){if(null==n)return 0;if(Oo(n)){var t=n.length;return t&&Do(n)?pr(n):t}if(Co(n)){var r=Qu(n);if(r==P||r==Z)return n.size}return af(n).length},Nr.snakeCase=Af,Nr.some=function(n,t,e){var u=jo(n)?Tt:Xe;return e&&ui(n,t,e)&&(t=r),u(n,qu(t,3))},Nr.sortedIndex=function(n,t){return nu(n,t)},Nr.sortedIndexBy=function(n,t,r){return tu(n,t,qu(r))},Nr.sortedIndexOf=function(n,t){var r=n?n.length:0;if(r){var e=nu(n,t);if(e<r&&wo(n[e],t))return e}return-1},Nr.sortedLastIndex=function(n,t){return nu(n,t,!0)},Nr.sortedLastIndexBy=function(n,t,r){return tu(n,t,qu(r),!0)},Nr.sortedLastIndexOf=function(n,t){if(n&&n.length){var r=nu(n,t,!0)-1;if(wo(n[r],t))return r}return-1},Nr.startCase=jf,Nr.startsWith=function(n,t,r){return n=Go(n),r=ce(qo(r),0,n.length),n.lastIndexOf(uu(t),r)==r},Nr.subtract=Qf,Nr.sum=function(n){return n&&n.length?Yt(n,Cf):0},Nr.sumBy=function(n,t){return n&&n.length?Yt(n,qu(t)):0},Nr.template=function(n,t,e){var u=Nr.templateSettings;e&&ui(n,t,e)&&(t=r),n=Go(n),t=Ho({},t,u,ee);var i,o,f=Ho({},t.imports,u.imports,ee),a=af(f),c=nr(f,a),l=0,s=t.interpolate||Dn,h="__p += '",p=Tn((t.escape||Dn).source+"|"+s.source+"|"+(s===dn?Rn:Dn).source+"|"+(t.evaluate||Dn).source+"|$","g"),v="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++ht+"]")+"\n";n.replace(p,function(t,r,e,u,f,a){return e||(e=u),h+=n.slice(l,a).replace(Mn,or),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),f&&(o=!0,h+="';\n"+f+";\n__p += '"),e&&(h+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=a+t.length,t}),h+="';\n";var _=t.variable;_||(h="with (obj) {\n"+h+"\n}\n"),h=(o?h.replace(cn,""):h).replace(ln,"$1").replace(sn,"$1;"),h="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var g=If(function(){return Function(a,v+"return "+h).apply(r,c)});if(g.source=h,Io(g))throw g;return g},Nr.times=function(n,t){if((n=qo(n))<1||n>I)return[];var r=W,e=br(n,W);t=qu(t),n-=W;for(var u=Ht(e,t);++r<n;)t(r);return u},Nr.toInteger=qo,Nr.toLength=Ko,Nr.toLower=function(n){return Go(n).toLowerCase()},Nr.toNumber=Zo,Nr.toSafeInteger=function(n){return ce(qo(n),-I,I)},Nr.toString=Go,Nr.toUpper=function(n){return Go(n).toUpperCase()},Nr.trim=function(n,t,e){if((n=Go(n))&&(e||t===r))return n.replace(jn,"");if(!n||!(t=uu(t)))return n;var u=vr(n),i=vr(t);return vu(u,tr(u,i),rr(u,i)+1).join("")},Nr.trimEnd=function(n,t,e){if((n=Go(n))&&(e||t===r))return n.replace(kn,"");if(!n||!(t=uu(t)))return n;var u=vr(n);return vu(u,0,rr(u,vr(t))+1).join("")},Nr.trimStart=function(n,t,e){if((n=Go(n))&&(e||t===r))return n.replace(On,"");if(!n||!(t=uu(t)))return n;var u=vr(n);return vu(u,tr(u,vr(t))).join("")},Nr.truncate=function(n,t){var e=w,u=m;if(Lo(t)){var i="separator"in t?t.separator:i;e="length"in t?qo(t.length):e,u="omission"in t?uu(t.omission):u}var o=(n=Go(n)).length;if(ct.test(n)){var f=vr(n);o=f.length}if(e>=o)return n;var a=e-pr(u);if(a<1)return u;var c=f?vu(f,0,a).join(""):n.slice(0,a);if(i===r)return c+u;if(f&&(a+=c.length-a),$o(i)){if(n.slice(a).search(i)){var l,s=c;for(i.global||(i=Tn(i.source,Go(Sn.exec(i))+"g")),i.lastIndex=0;l=i.exec(s);)var h=l.index;c=c.slice(0,h===r?a:h)}}else if(n.indexOf(uu(i),a)!=a){var p=c.lastIndexOf(i);p>-1&&(c=c.slice(0,p))}return c+u},Nr.unescape=function(n){return(n=Go(n))&&vn.test(n)?n.replace(hn,_r):n},Nr.uniqueId=function(n){var t=++Yn;return Go(n)+t},Nr.upperCase=Of,Nr.upperFirst=kf,Nr.each=Ji,Nr.eachRight=Yi,Nr.first=Oi,$f(Nr,(Jf={},xe(Nr,function(n,t){Jn.call(Nr.prototype,t)||(Jf[t]=n)}),Jf),{chain:!1}),Nr.VERSION=e,Bt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){Nr[n].placeholder=Nr}),Bt(["drop","take"],function(n,t){Kr.prototype[n]=function(e){var u=this.__filtered__;if(u&&!t)return new Kr(this);e=e===r?1:dr(qo(e),0);var i=this.clone();return u?i.__takeCount__=br(e,i.__takeCount__):i.__views__.push({size:br(e,W),type:n+(i.__dir__<0?"Right":"")}),i},Kr.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Bt(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==j||r==k;Kr.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:qu(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),Bt(["head","last"],function(n,t){var r="take"+(t?"Right":"");Kr.prototype[n]=function(){return this[r](1).value()[0]}}),Bt(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Kr.prototype[n]=function(){return this.__filtered__?new Kr(this):this[r](1)}}),Kr.prototype.compact=function(){return this.filter(Cf)},Kr.prototype.find=function(n){return this.filter(n).head()},Kr.prototype.findLast=function(n){return this.reverse().find(n)},Kr.prototype.invokeMap=yo(function(n,t){return"function"==typeof n?new Kr(this):this.map(function(r){return We(r,n,t)})}),Kr.prototype.reject=function(n){return n=qu(n,3),this.filter(function(t){return!n(t)})},Kr.prototype.slice=function(n,t){n=qo(n);var e=this;return e.__filtered__&&(n>0||t<0)?new Kr(e):(n<0?e=e.takeRight(-n):n&&(e=e.drop(n)),t!==r&&(e=(t=qo(t))<0?e.dropRight(-t):e.take(t-n)),e)},Kr.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Kr.prototype.toArray=function(){return this.take(W)},xe(Kr.prototype,function(n,t){var e=/^(?:filter|find|map|reject)|While$/.test(t),u=/^(?:head|last)$/.test(t),i=Nr[u?"take"+("last"==t?"Right":""):t],o=u||/^find/.test(t);i&&(Nr.prototype[t]=function(){var t=this.__wrapped__,f=u?[1]:arguments,a=t instanceof Kr,c=f[0],l=a||jo(t),s=function(n){var t=i.apply(Nr,Ft([n],f));return u&&h?t[0]:t};l&&e&&"function"==typeof c&&1!=c.length&&(a=l=!1);var h=this.__chain__,p=!!this.__actions__.length,v=o&&!h,_=a&&!p;if(!o&&l){t=_?t:new Kr(this);var g=n.apply(t,f);return g.__actions__.push({func:Zi,args:[s],thisArg:r}),new qr(g,h)}return v&&_?n.apply(this,f):(g=this.thru(s),v?u?g.value()[0]:g.value():g)})}),Bt(["pop","push","shift","sort","splice","unshift"],function(n){var t=Kn[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);Nr.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(jo(u)?u:[],n)}return this[r](function(r){return t.apply(jo(r)?r:[],n)})}}),xe(Kr.prototype,function(n,t){var r=Nr[t];if(r){var e=r.name+"";(Cr[e]||(Cr[e]=[])).push({name:t,func:r})}}),Cr[Ru(r,c).name]=[{name:"wrapper",func:r}],Kr.prototype.clone=function(){var n=new Kr(this.__wrapped__);return n.__actions__=bu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=bu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=bu(this.__views__),n},Kr.prototype.reverse=function(){if(this.__filtered__){var n=new Kr(this);n.__dir__=-1,n.__filtered__=!0}else(n=this.clone()).__dir__*=-1;return n},Kr.prototype.value=function(){var n=this.__wrapped__.value(),t=this.__dir__,r=jo(n),e=t<0,i=r?n.length:0,o=function(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=br(t,n+o);break;case"takeRight":n=dr(n,t-o)}}return{start:n,end:t}}(0,i,this.__views__),f=o.start,a=o.end,c=a-f,l=e?a:f-1,s=this.__iteratees__,h=s.length,p=0,v=br(c,this.__takeCount__);if(!r||i<u||i==c&&v==c)return au(n,this.__actions__);var _=[];n:for(;c--&&p<v;){for(var g=-1,y=n[l+=t];++g<h;){var d=s[g],b=d.iteratee,w=d.type,m=b(y);if(w==O)y=m;else if(!m){if(w==j)continue n;break n}}_[p++]=y}return _},Nr.prototype.at=Vi,Nr.prototype.chain=function(){return Ki(this)},Nr.prototype.commit=function(){return new qr(this.value(),this.__chain__)},Nr.prototype.next=function(){this.__values__===r&&(this.__values__=To(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?r:this.__values__[this.__index__++]}},Nr.prototype.plant=function(n){for(var t,e=this;e instanceof Tr;){var u=bi(e);u.__index__=0,u.__values__=r,t?i.__wrapped__=u:t=u;var i=u;e=e.__wrapped__}return i.__wrapped__=n,t},Nr.prototype.reverse=function(){var n=this.__wrapped__;if(n instanceof Kr){var t=n;return this.__actions__.length&&(t=new Kr(this)),(t=t.reverse()).__actions__.push({func:Zi,args:[Ci],thisArg:r}),new qr(t,this.__chain__)}return this.thru(Ci)},Nr.prototype.toJSON=Nr.prototype.valueOf=Nr.prototype.value=function(){return au(this.__wrapped__,this.__actions__)},yt&&(Nr.prototype[yt]=function(){return this}),Nr}();(Et||kt||{})._=gr,(__WEBPACK_AMD_DEFINE_RESULT__=function(){return gr}.call(exports,__webpack_require__,exports,n))===r||(n.exports=__WEBPACK_AMD_DEFINE_RESULT__)}).call(this)}).call(exports,__webpack_require__(8)(module),function(){return this}());
/***/ },
/* 8 */
/***/ function(module, exports) {
module.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e};
/***/ },
/* 9 */
/***/ function(module, exports) {
window.cytubeEnhanced=new window.CytubeEnhanced(window.cytubeEnhancedSettings&&window.cytubeEnhancedSettings.language||"en",window.cytubeEnhancedSettings&&window.cytubeEnhancedSettings.modulesSettings||{},window.cytubeEnhancedSettings&&window.cytubeEnhancedSettings.modulesExtends||{});
/***/ },
/* 10 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('Overlay', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);

$("#videowrap").append("<div id='VideoOverlay' class='fadein'><button data-tooltip='Fullscreen the video' data-tooltip-pos='down' class='fal fa-expand-alt OLB' id='fs-vid-button'></button></div>");
$("#VideoOverlay").hide();
var i = null;
$("#videowrap").mousemove(function() {
    clearTimeout(i);
    $("#VideoOverlay").show();
    i = setTimeout('$("#VideoOverlay").hide();', 5000);
}).mouseleave(function() {
    clearTimeout(i);
    $("#VideoOverlay").hide();
});
$("#VideoOverlay").append($("#mediarefresh"));
$("#VideoOverlay").append("<button id='skip' data-tooltip='Voteskip the video (Has A Cooldown)' data-tooltip-pos='down' class='fal fa-arrow-alt-to-right OLB'></button>");
$("#VideoOverlay").append("<button id='Ambient' data-tooltip='Ambient Mode' data-tooltip-pos='down' style='float: right;' class='fal fa-popcorn OLB'></button>");
$("#Ambient").click(function(){
$.getScript("https://cdn.jsdelivr.net/gh/BillTube/BillTube2@latest/BillTube_Ambient.js");
});

$('#skip').click(function(){
  var btn = $(this);
  socket.emit("voteskip");
  btn.prop('disabled', true);
  setTimeout(function(){
    btn.prop('disabled', false);
  },15000);
});

function fullscreen() {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.getElementById('videowrap');
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
var fsVidButton = document.getElementById('fs-vid-button');
var video = document.getElementById('videowrap');

fsVidButton.addEventListener('click', function(e) {
	e.preventDefault();
	fullscreen('videowrap');
});


 });
/***/ },
/* 11 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('additionalChatCommands', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        permittedCommands: ['*']
	    };
	    settings = $.extend({}, defaultSettings, settings);
	    settings.permittedCommands = _.isArray(settings.permittedCommands) ? settings.permittedCommands : [];
	    settings.permittedCommands = _.map(settings.permittedCommands, function (value) { return _.toLower(value); });

	    this.$chatline = $('#chatline');


	    this.isCommandPermitted = function (commandName) {
	        if (that.commandsList[commandName]) {
	            if (that.commandsList[commandName].canBeOmitted) {
	                return settings.permittedCommands.indexOf('*') !== -1 || settings.permittedCommands.indexOf(commandName) !== -1;
	            } else {
	                return true;
	            }
	        } else {
	            return false;
	        }
	    };


	    this.askAnswers = ["100%", app.t('qCommands[.]of course'), app.t('qCommands[.]yes'), app.t('qCommands[.]maybe'), app.t('qCommands[.]impossible'), app.t('qCommands[.]no way'), app.t('qCommands[.]don\'t think so'), app.t('qCommands[.]no'), "50/50", app.t('qCommands[.]cirno is busy'), app.t('qCommands[.]I regret to inform you')];


	    /**
	     * Quotes for !q command
	     * @type {Array}
	     */
	    this.randomQuotes = [];


	    /**
	     *The list of commands
	     *
	     * Every command must have method value(message) which returns command's message.
	     * Commands can also have description property for chatCommandsHelp module and isAvailable method which returns false if command is not permitted (by default returns true)
	     *
	     * @type {object}
	     */
	    this.commandsList = {
	        '!pick': {
	            description: app.t('chatCommands[.]random option from the list of options (!pick option1, option2, option3)'),
	            value: function (msg) {
	                var formattedMsg = _.trim(msg.replace('!pick', ''));

	                if (formattedMsg === '') {
	                    return app.t('chatCommands[.]Use !pick variant1, variant2');
	                } else {
	                    var variants = formattedMsg.split(',');
	                    return _.trim(variants[Math.floor(Math.random() * variants.length)]);
	                }
	            },
	            canBeOmitted: true
	        },
	        '!ask': {
	            description: app.t('chatCommands[.]asking a question with yes/no/... type answer (e.g. <i>!ask Will i be rich?</i>)'),
	            value: function () {
	                return that.askAnswers[Math.floor(Math.random() * that.askAnswers.length)];
	            },
	            canBeOmitted: true
	        },
	        '!time': {
	            description: app.t('chatCommands[.]show the current time'),
	            value: function () {
	                var h = new Date().getHours();
	                if (h < 10) {
	                    h = '0' + h;
	                }

	                var m = new Date().getMinutes();
	                if (m < 10) {
	                    m = '0' + m;
	                }

	                return app.t('chatCommands[.]current time') + ': ' + h + ':' + m;
	            },
	            canBeOmitted: true
	        },
	        '!dice': {
	            description: app.t('chatCommands[.]throw a dice'),
	            value: function () {
	                return Math.floor(Math.random() * 5) + 1;
	            },
	            canBeOmitted: true
	        },
	        '!roll': {
	            description: app.t('chatCommands[.]random number between 0 and 999'),
	            value: function () {
	                var randomNumber = Math.floor(Math.random() * 1000);

	                if (randomNumber < 100) {
	                    randomNumber = '0' + randomNumber;
	                } else if (randomNumber < 10) {
	                    randomNumber= '00' + randomNumber;
	                }

	                return randomNumber;
	            },
	            canBeOmitted: true
	        },
	        '!skip': {
	            description: app.t('chatCommands[.]vote for the video skip'),
	            value: function (msg) {
	                window.socket.emit("voteskip");
	                msg = app.t('chatCommands[.]you have voted to skip the video');

	                return msg;
	            },
	            isAvailable: function () {
	                return window.hasPermission('voteskip');
	            },
	            canBeOmitted: true
	        },
	        '!next': {
	            description: app.t('chatCommands[.]play the next video'),
	            value: function (msg) {
	                window.socket.emit("playNext");
	                msg = app.t('chatCommands[.]the next video is playing');

	                return msg;
	            },
	            isAvailable: function () {
	                return window.hasPermission('playlistjump');
	            },
	            canBeOmitted: true
	        },
	        '!bump': {
	            description: app.t('chatCommands[.]bump the last video'),
	            value: function (msg) {
	                var $lastEntry = $('#queue').find('.queue_entry').last();
	                var uid = $lastEntry.data("uid");
	                var title = $lastEntry.find('.qe_title').html();

	                window.socket.emit("moveMedia", {from: uid, after: window.PL_CURRENT});

	                msg = app.t('chatCommands[.]the last video was bumped') + title;

	                return msg;
	            },
	            isAvailable: function () {
	                return window.hasPermission('playlistmove');
	            },
	            canBeOmitted: true
	        },
	        '!add': {
	            description: app.t('chatCommands[.]adds the video to the end of the playlist (e.g. <i>!add https://www.youtube.com/watch?v=hh4gpgAZkc8</i>) ,May not work on all Channels!'),
	            value: function (msg) {
	                var parsed = window.parseMediaLink(msg.split("!add ")[1]);

	                if (parsed.id === null) {
	                    msg = app.t('chatCommands[.]error: the wrong link');
	                } else {
	                    window.socket.emit("queue", {id: parsed.id, pos: "end", type: parsed.type});
	                    msg = app.t('chatCommands[.]the video was added');
	                }

	                return msg;
	            },
	            isAvailable: function () {
	                return window.hasPermission('playlistadd');
	            },
	            canBeOmitted: true
	        },
	        '!now': {
	            description: app.t('chatCommands[.]show what is currently playing'),
	            value: function () {
	                return app.t('chatCommands[.]now: ') + $(".queue_active a").html();
	            },
	            canBeOmitted: true
	        },
	        '!sm': {
	            description: app.t('chatCommands[.]show a random emote in chat'),
	            value: function () {
	                var smilesArray = window.CHANNEL.emotes.map(function (smile) {
	                    return smile.name;
	                });

	                return smilesArray[Math.floor(Math.random() * smilesArray.length)] + ' ';
	            },
	            canBeOmitted: true
	        }
	    };
	    this.IS_COMMAND = false;
	    this.prepareMessage = function (msg) {
	        that.IS_COMMAND = false;

	        for (var command in that.commandsList) {
	            if (this.commandsList.hasOwnProperty(command) && _.toLower(_.trim(msg)).indexOf(command) === 0) {
	                if (that.isCommandPermitted(command) && (that.commandsList[command].isAvailable ? that.commandsList[command].isAvailable() : true)) {
	                    that.IS_COMMAND = true;

	                    msg = that.commandsList[command].value(msg);
	                }

	                break;
	            }
	        }

	        return msg;
	    };
	    this.sendUserChatMessage = function (e) {
	        if(e.keyCode === 13) {
	            if (window.CHATTHROTTLE) {
	                return;
	            }
	            var msg = that.$chatline.val().trim();
	            if(msg !== '') {
	                var meta = {};
	                if (window.USEROPTS.adminhat && window.CLIENT.rank >= 255) {
	                    msg = "/a " + msg;
	                } else if (window.USEROPTS.modhat && window.CLIENT.rank >= window.Rank.Moderator) {
	                    meta.modflair = window.CLIENT.rank;
	                }
	                // The /m command no longer exists, so emulate it clientside
	                if (window.CLIENT.rank >= 2 && msg.indexOf("/m ") === 0) {
	                    meta.modflair = window.CLIENT.rank;
	                    msg = msg.substring(3);
	                }
	                var msgForCommand = this.prepareMessage(msg);

	                if (that.IS_COMMAND) {
	                    window.socket.emit("chatMsg", {msg: msg, meta: meta});
	                    window.socket.emit("chatMsg", {msg: '🤓 ' + msgForCommand});

	                    that.IS_COMMAND = false;
	                } else {
	                    window.socket.emit("chatMsg", {msg: msg, meta: meta});
	                }
	                window.CHATHIST.push(that.$chatline.val());
	                window.CHATHISTIDX = window.CHATHIST.length;
	                that.$chatline.val('');
	            }
	            return;
	        } else if(e.keyCode === 9) { // Tab completion
	            window.chatTabComplete();
	            e.preventDefault();
	            return false;
	        } else if(e.keyCode === 38) { // Up arrow (input history)
	            if(window.CHATHISTIDX === window.CHATHIST.length) {
	                window.CHATHIST.push(that.$chatline.val());
	            }
	            if(window.CHATHISTIDX > 0) {
	                window.CHATHISTIDX--;
	                that.$chatline.val(window.CHATHIST[window.CHATHISTIDX]);
	            }

	            e.preventDefault();
	            return false;
	        } else if(e.keyCode === 40) { // Down arrow (input history)
	            if(window.CHATHISTIDX < window.CHATHIST.length - 1) {
	                window.CHATHISTIDX++;
	                that.$chatline.val(window.CHATHIST[window.CHATHISTIDX]);
	            }

	            e.preventDefault();
	            return false;
	        }
	    };
	    that.$chatline.off().on('keydown', function (e) {
	        that.sendUserChatMessage(e);
	    });
	    $('#chatbtn').off().on('click', function (e) {
	        that.sendUserChatMessage(e);
	    });
	});
	
bumplastbtn = $('<button title="Bump last added video" id="bumplast-btn" class="btn btn-default fal fa-redo"></button>')
  .appendTo(ploptions)
  .on("click", function() {
	len=$("#queue").children().length;
	uid=$("#queue .queue_entry:nth-child("+len+")").data("uid");
	socket.emit("moveMedia", {from:uid, after:PL_CURRENT});
  });

deletelastbtn = $('<button title="Delete last added video" id="deletelast-btn" class="btn btn-default fal fa-trash-undo-alt"></button>')
  .appendTo(ploptions)
  .on("click", function() {
	if (confirm('Are you sure to delete last item?')) {
		len=$("#queue").children().length;
		uid=$("#queue .queue_entry:nth-child("+len+")").data("uid");
		socket.emit("delete", uid);
	}
  });

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(13);
	window.cytubeEnhanced.addModule('bbCodesHelper', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        templateButtons: ['b', 'i', 'sp', 'code', 's'],
	        templateButtonsAnimationSpeed: 150
	    };
	    settings = $.extend({}, defaultSettings, settings);


	    if ($('#chat-controls').length === 0) {
	        $('<div id="chat-controls" class="">').appendTo(".chat-area-buttons");
	    }
			if (CLIENT.rank<1) {
				$("#chat-controls").addClass("hidden");
			}
			 window.socket.on('login', function ()  {
				$("#chat-controls").removeClass("hidden");
			});
			
	    if ($('#chat-menu').length === 0) {
	        $('<div id="chat-menu" class="">').appendTo(".chat-area-buttons");
	    }
			    if ($('#chat-controls-embed').length === 0) {
	        $('<div id="chat-controls-embed" class="">').appendTo("#chatbox");
	    }
			if (CLIENT.rank<1) {
				$("#chat-menu").addClass("hidden");
			}
			 window.socket.on('login', function ()  {
				$("#chat-menu").removeClass("hidden");
			});
			
	    this.handleMarkdownHelperBtnClick = function ($markdownHelperBtn, $markdownTemplatesWrapper) {
	        if ($markdownHelperBtn.hasClass('chatbtn-default')) { //closed
	            $markdownHelperBtn.removeClass('chatbtn-default');
	            $markdownHelperBtn.addClass('chatbtn-success');

	            $markdownTemplatesWrapper.show();
	            $markdownTemplatesWrapper.children().animate({left: 0}, settings.templateButtonsAnimationSpeed);
	        } else { //opened
	            $markdownHelperBtn.removeClass('chatbtn-success');
	            $markdownHelperBtn.addClass('chatbtn-default');

	            $markdownTemplatesWrapper.children().animate({left: -$markdownTemplatesWrapper.width()}, settings.templateButtonsAnimationSpeed, function () {
	                $markdownTemplatesWrapper.hide();
	            });
	        }
	    };

	    this.$markdownHelperBtn = $('<button id="markdown-helper-btn" type="button" class="chatbtn" data-tooltip="Markdown Helper" data-tooltip-pos="up">')
	        .html('<i class="fad fa-font-case"></i>')
	        .on('click', function () {
	            that.handleMarkdownHelperBtnClick($(this), that.$markdownTemplatesWrapper);

	            app.storage.toggle('bb-codes-opened');
	        });

	    if ($('#chat-help-btn').length !== 0) {
	        this.$markdownHelperBtn.insertBefore('#chat-help-btn');
	    } else {
	        this.$markdownHelperBtn.appendTo('#chat-controls-embed');
	    }


	    this.$markdownTemplatesWrapper = $('<div class="btn-group markdown-helper-templates-wrapper">')
	        .insertAfter(this.$markdownHelperBtn)
	        .hide();

	    if (app.storage.get('bb-codes-opened')) {
	        this.handleMarkdownHelperBtnClick(this.$markdownHelperBtn, this.$markdownTemplatesWrapper);
	    }


	    /**
	     * Markdown templates
	     *
	     * To add your template you need to also add your template key into settings.templateButtons
	     * @type {object}
	     */
	    this.markdownTemplates = {
	        'b': {
	            text: '<b>B</b>',
	            title: app.t('markdown[.]Bold text')
	        },
	        'i': {
	            text: '<i>I</i>',
	            title: app.t('markdown[.]Cursive text')
	        },
	        'sp': {
	            text: 'SP',
	            title: app.t('markdown[.]Spoiler')
	        },
	        'code': {
	            text: '<code>CODE</code>',
	            title: app.t('markdown[.]Monospace')
	        },
	        's': {
	            text: '<s>S</s>',
	            title: app.t('markdown[.]Strike')
	        }
	    };

	    var template;
	    for (var templateIndex = 0, templatesLength = settings.templateButtons.length; templateIndex < templatesLength; templateIndex++) {
	        template = settings.templateButtons[templateIndex];

	        $('<button type="button" class="btn btn-sm btn-default" title="' + this.markdownTemplates[template].title + '">')
	            .html(this.markdownTemplates[template].text)
	            .data('template', template)
	            .appendTo(this.$markdownTemplatesWrapper);
	    }


	    this.handleMarkdown = function (templateType) {
	        if (this.markdownTemplates.hasOwnProperty(templateType)) {
	            $('#chatline')
	                .selection('insert', {
	                    text: '[' + templateType + ']',
	                    mode: 'before'
	                })
	                .selection('insert', {
	                    text: '[/' + templateType + ']',
	                    mode: 'after'
	                });
	        }
	    };
	    this.$markdownTemplatesWrapper.on('click', 'button', function () {
	        that.handleMarkdown($(this).data('template'));

	        return false;
	    });
			function insertText(str) {
				$("#chatline").val($("#chatline").val() + str).focus();
			}
		

	});


/***/ },
/* 13 */
/***/ function(module, exports) {
!function(t,e,r){var n=function(t){var n={text:"",start:0,end:0};if(!t.value)return n;try{if(e.getSelection)n.start=t.selectionStart,n.end=t.selectionEnd,n.text=t.value.slice(n.start,n.end);else if(r.selection){t.focus();var s=r.selection.createRange(),a=r.body.createTextRange();n.text=s.text;try{a.moveToElementText(t),a.setEndPoint("StartToStart",s)}catch(e){(a=t.createTextRange()).setEndPoint("StartToStart",s)}n.start=t.value.length-a.text.length,n.end=n.start+s.text.length}}catch(t){}return n},s={getPos:function(t){var e=n(t);return{start:e.start,end:e.end}},setPos:function(t,r,n){"start"===(n=this._caretMode(n))?r.end=r.start:"end"===n&&(r.start=r.end),t.focus();try{if(t.createTextRange){var s=t.createTextRange();e.navigator.userAgent.toLowerCase().indexOf("msie")>=0&&(r.start=t.value.substr(0,r.start).replace(/\r/g,"").length,r.end=t.value.substr(0,r.end).replace(/\r/g,"").length),s.collapse(!0),s.moveStart("character",r.start),s.moveEnd("character",r.end-r.start),s.select()}else t.setSelectionRange&&t.setSelectionRange(r.start,r.end)}catch(t){}},getText:function(t){return n(t).text},_caretMode:function(t){switch(!1===(t=t||"keep")&&(t="end"),t){case"keep":case"start":case"end":break;default:t="keep"}return t},replace:function(e,r,s){var a=n(e),c=e.value,o=t(e).scrollTop(),i={start:a.start,end:a.start+r.length};e.value=c.substr(0,a.start)+r+c.substr(a.end),t(e).scrollTop(o),this.setPos(e,i,s)},insertBefore:function(e,r,s){var a=n(e),c=e.value,o=t(e).scrollTop(),i={start:a.start+r.length,end:a.end+r.length};e.value=c.substr(0,a.start)+r+c.substr(a.start),t(e).scrollTop(o),this.setPos(e,i,s)},insertAfter:function(e,r,s){var a=n(e),c=e.value,o=t(e).scrollTop(),i={start:a.start,end:a.end};e.value=c.substr(0,a.end)+r+c.substr(a.end),t(e).scrollTop(o),this.setPos(e,i,s)}};t.extend({selection:function(n){var s="text"===(n||"text").toLowerCase();try{if(e.getSelection){if(s)return e.getSelection().toString();var a,c=e.getSelection();return c.getRangeAt?a=c.getRangeAt(0):((a=r.createRange()).setStart(c.anchorNode,c.anchorOffset),a.setEnd(c.focusNode,c.focusOffset)),t("<div></div>").append(a.cloneContents()).html()}if(r.selection)return s?r.selection.createRange().text:r.selection.createRange().htmlText}catch(t){}return""}}),t.fn.extend({selection:function(t,e){switch(e=e||{},t){case"getPos":return s.getPos(this[0]);case"setPos":return this.each(function(){s.setPos(this,e)});case"replace":return this.each(function(){s.replace(this,e.text,e.caret)});case"insert":return this.each(function(){"before"===e.mode?s.insertBefore(this,e.text,e.caret):s.insertAfter(this,e.text,e.caret)});case"get":default:return s.getText(this[0])}return this}})}(jQuery,window,window.document);
/***/ },
/* 14 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('chatAvatars', function (app, settings) {
	    'use strict';
	    var that = this;
	    var tab = app.Settings.getTab('settings', app.t('settings[.]Avatars'), 100);
	    var userSettings = app.Settings.storage;
	    var appSettings = app.storage;

	    var defaultSettings = {
	        avatarClass: 'profileImage',
	        smallAvatarClass: 'chat-avatar_small',
	        bigAvatarClass: 'chat-avatar_big'
	    };
	    settings = $.extend({}, defaultSettings, settings);

	
	    var namespace = 'avatars';
	    this.scheme = {
	        'avatars-mode': {
	            title: app.t('chatAvatars[.]Chat avatars'),
	            default: 'big',
	            options: [
	                {value: 'none', title: app.t('chatAvatars[.]Disabled')},
	                {value: 'small', title: app.t('chatAvatars[.]Small')},
	                {value: 'big', title: app.t('chatAvatars[.]Big')}
	            ]
	        }
	    };
	    appSettings.setDefault(namespace + '.cache', []);


	    this.cacheAvatar = function (username, avatar) {
	        var cachedAvatars = appSettings.get(namespace + '.cache');

	        if (cachedAvatars.length >= 50) {
	            cachedAvatars = cachedAvatars.slice(0, 49);
	        }

	        cachedAvatars.unshift({
	            username: username,
	            avatar: avatar
	        });

	        appSettings.set(namespace + '.cache', cachedAvatars);
	    };

	    this.getAvatarFromCache = function (username) {
	        var cachedAvatar = _.findLast(appSettings.get(namespace + '.cache'), function (o) { return o.username == username; });
	        cachedAvatar = cachedAvatar ? cachedAvatar.avatar : null;

	        return cachedAvatar;
	    };

	    this.getAvatarFromUserlist = function (username) {
	        return (window.findUserlistItem(username) && window.findUserlistItem(username).data('profile').image) ? window.findUserlistItem(username).data('profile').image : null;
	    };

$(document).ready(function () {
$('[class*="chat-msg"]:not(.drink):not(.consecutive)').css('margin-left', '49px');	
});

if (userSettings.get(namespace + '.avatars-mode') == 'none') {
$('[class*="chat-msg"]:not(.drink):not(.consecutive)').css('margin-left', '2px');
$(".profileImage").css('visibility', 'hidden');
}
if (userSettings.get(namespace + '.avatars-mode') == 'big') {
$('[class*="chat-msg"]:not(.drink):not(.consecutive)').css('margin-left', '49px');	
}
if (userSettings.get(namespace + '.avatars-mode') == 'small') {
$('[class*="chat-msg"]:not(.drink):not(.consecutive)').css('margin-left', '29px');	
}
window.socket.on('chatMsg', function() {
if (userSettings.get(namespace + '.avatars-mode') == 'big') {
  $('[class*="chat-msg"]:not(.drink):not(.consecutive)').css('margin-left', '49px');}  
});
window.socket.on('chatMsg', function() {
if (userSettings.get(namespace + '.avatars-mode') == 'small') {
  $('[class*="chat-msg"]:not(.drink):not(.consecutive)').css('margin-left', '29px');}
});
window.socket.on('chatMsg', function() {
if (userSettings.get(namespace + '.avatars-mode') == 'none') {
$('[class*="chat-msg"]:not(.drink):not(.consecutive)').css('margin-left', '2px');
$(".profileImage").css('visibility', 'hidden');}
});

setTimeout( function(){ 
if (userSettings.get(namespace + '.avatars-mode') == 'none') {
$('[class*="chat-msg"]:not(.drink):not(.consecutive)').css('margin-left', '2px');
$(".profileImage").css('visibility', 'hidden');}
}  , 5000 );

window.socket.once('mediaUpdate', function (data) {
  if (CLIENT.rank >= -1) {
	var li = $('<li class="centered" />').prependTo('.navbar-nav');
	var img = findUserlistItem(CLIENT.name).data().profile.image;
	if (img == "") img = DROPBOX + 'xor4ykvsgrzys3d/noavatar.png';
	$('<a href="/account/profile" target="_blank"/>').html('<img id="useravatar" src="' + img + '" title="' + CLIENT.name + '" />')
	  .appendTo('.navbar-nav');
  } 
});
	
	    this.applyAvatar = function ($usernameBlock, username, newAvatar) {
	        username = username || $usernameBlock.text().replace(/^\s+|[:]?\s+$/g, '');
	        newAvatar = newAvatar || that.getAvatarFromUserlist(username);
	        var cachedAvatar = that.getAvatarFromCache(username);
	        var $messageBlock = $usernameBlock.parent();

	        if (cachedAvatar || newAvatar) {
	            if (!cachedAvatar) {
	                that.cacheAvatar(username, newAvatar);
	            }

	            if ($messageBlock.find('.' + settings.avatarClass).length === 0) {
	                var $avatar = $("<img>").attr("src", newAvatar || cachedAvatar)
	                    .addClass(settings.avatarClass + ' ' + ((userSettings.get(namespace + '.avatars-mode') == 'big') ? settings.bigAvatarClass : settings.smallAvatarClass))
	                    .prependTo($messageBlock).parent().addClass("nametitle");

	                if (userSettings.get(namespace + '.avatars-mode') == 'big') {
	                    $(this).css('display', 'none');
	                    $avatar.attr('title', username);
	                }
					if (userSettings.get(namespace + '.avatars-mode') == 'small') {
	                    $(this).css('display', 'none');
	                    $avatar.attr('title', username);
	                }
	            }
	        } else {
				if ($messageBlock.find('.' + settings.avatarClass).length === 0) {
	                var $avatar = $("<img>").attr("data-name", username).addClass("AvL")
	                    .addClass(settings.avatarClass + ' ' + ((userSettings.get(namespace + '.avatars-mode') == 'big') ? settings.bigAvatarClass : settings.smallAvatarClass))
	                    .prependTo($messageBlock).parent().addClass("nametitle");;

	                if (userSettings.get(namespace + '.avatars-mode') == 'big') {
	                    $(this).css('display', 'none');
	                    $avatar.attr('title', username);
	                }
					if (userSettings.get(namespace + '.avatars-mode') == 'small') {
	                    $(this).css('display', 'none');
	                    $avatar.attr('title', username);
	                }
	            }
			}	
	    };

	    /**
	     * Creating markup for settings
	     */
	    var schemeItem;
	    var option;
	    var sort = 100;
	    for (var itemName in this.scheme) {
	        schemeItem = this.scheme[itemName];

	        userSettings.setDefault(namespace + '.' + itemName, schemeItem.default);

	        if (userSettings.get(namespace + '.' + itemName)) {
	            for (option in schemeItem.options) {
	                schemeItem.options[option].selected = (userSettings.get(namespace + '.' + itemName) == schemeItem.options[option].value);
	            }
	        }

	        tab.addControl('select', 'horizontal', schemeItem.title, itemName, schemeItem.options, null, sort);
	        sort += 100;
	    }


	    /**
	     * Saving and applying settings
	     */
	    app.Settings.onSave(function (settings) {
	        for (var itemName in that.scheme) {
	            settings.set(namespace + '.' + itemName, $('#' + app.prefix + itemName).val());
	        }

	        if (settings.isDirty(namespace + '.avatars-mode')) {
	            app.Settings.requestPageReload();
	        }
	    });


	    /**
	     * Applying settings
	     */
	    if (userSettings.get(namespace  + '.avatars-mode')) {
	        window.formatChatMessage = (function (oldFormatChatMessage) {
	            return function (data, last) {
	                var $div = oldFormatChatMessage(data, last);

	                that.applyAvatar($div.find('.username'), data.username);

	                return $div;
	            };
	        })(window.formatChatMessage);

	        $('.username').each(function () {
	            that.applyAvatar($(this));
	        });


	        window.socket.on('addUser', function (data) {
	            if (data.profile && data.profile.image && data.name) {
	                $('.username:contains("' + data.name + ':")').each(function () {
	                    that.applyAvatar($(this), data.name, data.profile.image);
	                });
	            }
	        });
	    }
	});

/***/ },
/* 15 */
/***/ function(module, exports) {
window.cytubeEnhanced.addModule("chatCommandsHelp",function(a,t){"use strict";var n=this,o={commands:{"/me":a.t("chatCommands[.]%username% action (e.g: <i>/me is dancing</i>)"),"/sp":a.t("chatCommands[.]spoiler"),"/afk":a.t("chatCommands[.]sets your status to AFK")}};t=$.extend({},o,t),0===$("#chat-controls").length&&$('<div id="chat-controls" class="">').appendTo(".chat-area-buttons"),this.commands={},this.commands[a.t("Standard commands")]=t.commands,a.isModulePermitted("additionalChatCommands")&&a.getModule("additionalChatCommands").done(function(t){var o={};for(var s in t.commandsList)t.commandsList.hasOwnProperty(s)&&t.isCommandPermitted(s)&&(!t.commandsList[s].isAvailable||t.commandsList[s].isAvailable())&&(o[s]=t.commandsList[s].description||"");n.commands[a.t("Extra commands")]=o}),this.handleChatHelpBtn=function(t){var n=$('<h3 class="modal-title">').text(a.t("The list of chat commands")),o=$("<div>");for(var s in t)if(t.hasOwnProperty(s)){$("<h3>").html(s).appendTo(o);var d=$("<ul>");for(var i in t[s])t[s].hasOwnProperty(i)&&$("<li>").html("<code>"+i+"</code> - "+t[s][i]+".").appendTo(d);d.appendTo(o)}a.UI.createModalWindow("chat-commands-help",n,o)},this.$chatHelpBtn=$('<button id="chat-help-btn" data-tooltip="Help" data-tooltip-pos="up" class="chatbtn" >').html('<i class="fad fa-question-circle"></i>').appendTo("#chat-controls-embed").on("click",function(){n.handleChatHelpBtn(n.commands)})});
/***/ },
/* 16 */
/***/ function(module, exports) {
window.cytubeEnhanced.addModule("chatControls",function(t,a){"use strict";var n=this;a=$.extend({},{afkButton:!0,clearChatButton:!1},a),this.handleAfkBtn=function(){window.socket.emit("chatMsg",{msg:"/afk"})},this.$afkBtn=$('<span id="afk-btn" class="label label-default pull-right pointer">').text(t.t("AFK")).appendTo("#chat-menu").on("click",function(){n.handleAfkBtn()}),this.handleAfk=function(t){t.name===window.CLIENT.name&&(t.afk?(n.$afkBtn.removeClass("label-default"),n.$afkBtn.addClass("label-success")):(n.$afkBtn.addClass("label-default"),n.$afkBtn.removeClass("label-success")))},a.afkButton?window.socket.on("setAFK",function(t){n.handleAfk(t)}):this.$afkBtn.hide(),this.handleClearBtn=function(){window.confirm(t.t("Are you sure, that you want to clear the chat?"))&&window.socket.emit("chatMsg",{msg:"/clear"})},this.$clearChatBtn=$('<span id="clear-chat-btn" data-tooltip-pos="up" data-tooltip="Clear the chat for everybody" class="label label-default pull-right pointer fa fa-solid fa-broom-wide">').text(t.t(" ")).insertAfter(this.$afkBtn).on("click",function(){n.handleClearBtn()}),window.hasPermission("chatclear")||this.$clearChatBtn.hide(),this.handleChatClear=function(){window.hasPermission("chatclear")&&a.clearChatButton?n.$clearChatBtn.show():n.$clearChatBtn.hide()},window.socket.on("setUserRank",function(){n.handleChatClear()})});
/***/ },
/* 17 */
/***/ function(module, exports) {
window.cytubeEnhanced.addModule("chatHistory",function(t,s){"use strict";var e=this;s=$.extend({},{itemsInHistory:50},s),t.storage.setDefault("pmHistory",[]),window.socket.on("chatMsg",function(e){if(window.CLIENT.name&&-1!=e.msg.toLowerCase().indexOf(window.CLIENT.name.toLowerCase())){var i=t.storage.get("pmHistory");$.isArray(i)||(i=[]),i.length>=s.itemsInHistory&&(i=i.slice(0,s.itemsInHistory-1)),i.unshift({username:e.username,msg:e.msg,time:e.time}),t.storage.set("pmHistory",i)}}),this.formatHistoryMessage=function(t){var s=$('<div class="pm-history-message">'),e=new Date(t.time),i=e.getDate();i=i<10?"0"+i:i;var o=e.getMonth();o=o<10?"0"+o:o;var a=e.getFullYear(),r=e.getHours();r=r<10?"0"+r:r;var n=e.getMinutes();n=n<10?"0"+n:n;var m=e.getSeconds(),d=i+"."+o+"."+a+" "+r+":"+n+":"+(m=m<10?"0"+m:m);return s.append($('<div class="pm-history-message-time">['+d+"]</div>")),s.append($('<div class="pm-history-message-username">'+t.username+"</div>")),s.append($('<div class="pm-history-message-content">'+t.msg+"</div>")),s},this.showChatHistory=function(){var s=t.storage.get("pmHistory");$.isArray(s)||(s=[]);var i=$('<div class="modal-header__inner">');i.append($('<h3 class="modal-title">').text(t.t("pmHistory[.]Chat history"))),i.append($('<div class="modat-header__description">').text(t.t("pmHistory[.]Your chat messages history.")));for(var o=$('<div class="pm-history-content">'),a=0,r=s.length;a<r;a++)o.append(e.formatHistoryMessage(s[a]));var n=$('<button type="button" id="pm-history-reset-btn" class="btn btn-danger" data-dismiss="modal">'+t.t("pmHistory[.]Reset history")+"</button>").on("click",function(){window.confirm(t.t("pmHistory[.]Are you sure, that you want to clear messages history?"))&&e.resetChatHistory()}),m=$('<button type="button" id="pm-history-exit-btn" class="btn btn-default" data-dismiss="modal">'+t.t("pmHistory[.]Exit")+"</button>"),d=$('<div class="pm-history-footer">');return d.append(n),d.append(m),t.UI.createModalWindow("chat-history",i,o,d)},this.$showChatHistoryBtn=$('<span id="pm-history-btn" class="label label-default pull-right pointer">').text(t.t("pmHistory[.]History")).appendTo("#chat-menu").on("click",function(){e.showChatHistory()}),this.resetChatHistory=function(){t.storage.set("pmHistory",t.storage.getDefault("pmHistory"))}});
/***/ },
/* 18 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('common', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        insertUsernameOnClick: true
	    };
	    settings = $.extend({}, defaultSettings, settings);

	    this.$chatline = $("#chatline");
	    this.$userlist = $("#userlist");


	    window.chatTabComplete = function () {
	        var i;
	        var words = that.$chatline.val().split(" ");
	        var current = words[words.length - 1].toLowerCase();
	        if (!current.match(/^[\wÐ°-ÑÐ-Ð¯Ñ‘Ð-]{1,20}$/)) {
	            return;
	        }

	        var __slice = Array.prototype.slice;
	        var usersWithCap = __slice.call(that.$userlist.find('.userlist_item')).map(function (elem) {
	            return elem.children[1].innerHTML;
	        });
	        var users = __slice.call(usersWithCap).map(function (user) {
	            return user.toLowerCase();
	        }).filter(function (name) {
	            return name.indexOf(current) === 0;
	        });

	        // users now contains a list of names that start with current word

	        if (users.length === 0) {
	            return;
	        }

	        // trim possible names to the shortest possible completion
	        var min = Math.min.apply(Math, users.map(function (name) {
	            return name.length;
	        }));
	        users = users.map(function (name) {
	            return name.substring(0, min);
	        });

	        // continually trim off letters until all prefixes are the same
	        var changed = true;
	        var iter = 21;
	        while (changed) {
	            changed = false;
	            var first = users[0];
	            for (i = 1; i < users.length; i++) {
	                if (users[i] !== first) {
	                    changed = true;
	                    break;
	                }
	            }

	            if (changed) {
	                users = users.map(function (name) {
	                    return name.substring(0, name.length - 1);
	                });
	            }

	            // In the event something above doesn't generate a break condition, limit
	            // the maximum number of repetitions
	            if (--iter < 0) {
	                break;
	            }
	        }

	        current = users[0].substring(0, min);
	        for (i = 0; i < usersWithCap.length; i++) {
	            if (usersWithCap[i].toLowerCase() === current) {
	                current = usersWithCap[i];
	                break;
	            }
	        }

	        if (users.length === 1) {
	            if (words.length === 1) {
	                current += ":";
	            }
	            current += " ";
	        }
	        words[words.length - 1] = current;
	        that.$chatline.val(words.join(" "));
	    };


	    if (settings.insertUsernameOnClick) {
	        $('#messagebuffer')
	            .on('click', '.username', function() {
	                app.Helpers.addMessageToChatInput($(this).text().replace(": ", " "), 'begin');
	            })
	            .on('click', '.profileImage', function() {
	                app.Helpers.addMessageToChatInput($(this).parent().find('.username').text().replace(": ", " "), 'begin');
	            });
	    }
		
	    $('#wrap').children('.navbar-fixed-top').removeClass('navbar-fixed-top');
	    $('#footer').children('.container').append('<p class="text-muted credit">CyTube Enhanced Merged(<a href="https://github.com/kaba99/cytube-enhanced" target="_blank">GitHub</a>)</p>');
	    setTimeout(function () {
	        window.handleWindowResize(); //chat height fix
	    }, 3000);
	    setTimeout(function () {
	        window.handleWindowResize(); //chat height fix
	    }, 10000);

	    window.addUserDropdown = (function (oldAddUserDropdown) {
	        return function (entry) {
	            var functionResponse = oldAddUserDropdown(entry);

	            entry.find('.user-dropdown>strong').click(function () {
	                that.$chatline.val($(this).text() + ": " + that.$chatline.val());
	            });

	            return functionResponse;
	        };
	    })(window.addUserDropdown);

	    $('.user-dropdown>strong').click(function () {
	        that.$chatline.val($(this).text() + ": " + that.$chatline.val()).focus();
	    });


	    $('#queue').sortable("option", "axis", "y");
	});

/***/ },
/* 19 */
/***/ function(module, exports) {
window.cytubeEnhanced.addModule("customCss",function(e,t){"use strict";var s=this;t=$.extend({},{aceUrl:"https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3/ace.js"},t);var i=e.Settings.getTab("custom-css","CSS",200),a=e.parseJSON(window.getOrDefault(window.CHANNEL.name+"_config-layout",void 0),{});e.Settings.storage.setDefault("user-code.css",_.isPlainObject(a)&&_.isString(a["user-css"])?a["user-css"]:"");var o,n=$('<textarea class="'+e.prefix+'custom-editor-textarea"></textarea>').val(e.Settings.storage.get("user-code.css")).appendTo(i.$content),c=$('<div class="'+e.prefix+'custom-editor-ace" id="'+e.prefix+'css-editor"></div>').text(e.Settings.storage.get("user-code.css"));i.onShow(function(){void 0===o&&(void 0===window.ace?(e.Settings.aceIsLoading||e.Settings.aceLoadingFailed||(e.Settings.aceIsLoading=!0,$.ajax({url:t.aceUrl,dataType:"script",timeout:2e4}).done(function(){s.initializeAceEditor()}).always(function(){e.Settings.aceIsLoading=!1,e.Settings.aceLoadingFailed=!0,i.$content.toggleLoader("off")})),e.Settings.aceIsLoading&&!e.Settings.aceLoadingFailed&&i.$content.toggleLoader("on")):s.initializeAceEditor())}),this.applyUserCss=function(t){$("#"+e.prefix+"user-css").remove(),$("head").append('<style id="'+e.prefix+'user-css" type="text/css">'+t+"</style>")},this.initializeAceEditor=function(){c.text(n.val()),n.replaceWith(c),(o=window.ace.edit(e.prefix+"css-editor")).setTheme("ace/theme/tomorrow_night"),o.getSession().setMode("ace/mode/css"),o.getSession().setTabSize(4),o.getSession().setUseSoftTabs(!0),o.getSession().setUseWrapMode(!0),o.getSession().setWrapLimitRange(),o.setOptions({minLines:30,maxLines:30,autoScrollEditorIntoView:!0,highlightActiveLine:!0})},e.Settings.onSave(function(e){o?e.set("user-code.css",o.getValue()):e.set("user-code.css",n.val()),s.applyUserCss(e.get("user-code.css"))}),this.applyUserCss(e.Settings.storage.get("user-code.css"))});
/***/ },
/* 20 */
/***/ function(module, exports) {
window.cytubeEnhanced.addModule("customJs",function(e,t){"use strict";var s=this;t=$.extend({},{aceUrl:"https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3/ace.js"},t);var i=e.Settings.getTab("custom-js","JS",300);e.Settings.storage.setDefault("user-code.js","");var a,o=$('<textarea class="'+e.prefix+'custom-editor-textarea"></textarea>').val(e.Settings.storage.get("user-code.js")).appendTo(i.$content),n=$('<div class="'+e.prefix+'custom-editor-ace" id="'+e.prefix+'js-editor"></div>').text(e.Settings.storage.get("user-code.js"));i.onShow(function(){void 0===a&&(void 0===window.ace?(e.Settings.aceIsLoading||e.Settings.aceLoadingFailed||(e.Settings.aceIsLoading=!0,$.ajax({url:t.aceUrl,dataType:"script",timeout:2e4}).done(function(){s.initializeAceEditor()}).always(function(){e.Settings.aceIsLoading=!1,e.Settings.aceLoadingFailed=!0,i.$content.toggleLoader("off")})),e.Settings.aceIsLoading&&!e.Settings.aceLoadingFailed&&i.$content.toggleLoader("on")):s.initializeAceEditor())}),this.applyUserJs=function(t){$("#"+e.prefix+"user-js").remove(),$("body").append('<script id="'+e.prefix+'user-js" type="text/javascript">'+t+"<\/script>")},this.initializeAceEditor=function(){n.text(o.val()),o.replaceWith(n),(a=window.ace.edit(e.prefix+"js-editor")).setTheme("ace/theme/tomorrow_night"),a.getSession().setMode("ace/mode/javascript"),a.getSession().setTabSize(4),a.getSession().setUseSoftTabs(!0),a.getSession().setUseWrapMode(!0),a.getSession().setWrapLimitRange(),a.setOptions({minLines:30,maxLines:30,autoScrollEditorIntoView:!0,highlightActiveLine:!0})},e.Settings.onSave(function(e){a?e.set("user-code.js",a.getValue()):e.set("user-code.js",o.val()),s.applyUserJs(e.get("user-code.js"))}),this.applyUserJs(e.Settings.storage.get("user-code.js"))});
/***/ },
/* 21 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('extras', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        enabledModules: ['anime-quotes', 'pirate-quotes']
	    };
	    settings = $.extend({}, defaultSettings, settings);

	    var tab = app.Settings.getTab('extras', app.t('extras[.]Extras'), 9000);
	    var $tabContent = $('<div class="row">').appendTo(tab.$content).wrap('<div class="' + app.prefix + 'extras">');
	    var userSettings = app.Settings.storage;

	    var $modulesInfoMessage = $('<div class="' + app.prefix + 'extras__info-message">').text('No third party modules.').prependTo(tab.$content);

	    var namespace = 'extras';
	    userSettings.setDefault(namespace + '.enabled', settings.enabledModules);
	    this.enabledModules = userSettings.get(namespace + '.enabled') || [];
	    this.extraModules = {};


	    this.add = function (config) {
	        $modulesInfoMessage.text(app.t('extras[.]Extras for additional functionality'));

	        that.extraModules[config.name] = config;
	        that.extraModules[config.name].$el = that.addMarkup(config).appendTo($tabContent);
	        that.sort();

	        if (that.enabledModules.indexOf(config.name) != -1) {
	            $.getScript(that.extraModules[config.name].url + '?ac=' + Date.now());
	        }
	    };


	    this.enable = function (name) {
	        return that.enabledModules.push(name);
	    };


	    this.disable = function (name) {
	        var position = that.enabledModules.indexOf(name);

	        if (position !== -1) {
	            return that.enabledModules.splice(position, 1);
	        } else {
	            return false;
	        }
	    };


	    this.addMarkup = function (config) {
	        var $moduleInfo = $('<div class="' + app.prefix + 'extras__item">');
	        $moduleInfo.data('name', config.name);


	        config.authorUrl = _.trim(config.authorUrl);
	        var $title = config.authorUrl ?
	            $('<a class="' + app.prefix + 'extras__item__title ' + app.prefix + 'extras__item__title_link" target="_blank">').attr('href', config.authorUrl).text(config.title).appendTo($moduleInfo) :
	            $('<div class="' + app.prefix + 'extras__item__title ' + app.prefix + 'extras__item__title_text">').text(config.title).appendTo($moduleInfo);

	        var $description = $('<div class="' + app.prefix + 'extras__item__description">').text(config.description || 'ÐÐµÑ‚ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸Ñ').appendTo($moduleInfo);

	        var $toggleModuleButton = $('<div class="' + app.prefix + 'extras__item__button btn btn-xs">').appendTo($moduleInfo).data('enabled', that.enabledModules.indexOf(config.name) != -1).on('click', function () {
	            if ($(this).data('enabled')) {
	                $(this).data('enabled', false);
	                that.disable(config.name);
	                $(this).removeClass('btn-danger').addClass('btn-success').text('Enable');
	            } else {
	                $(this).data('enabled', true);
	                that.enable(config.name);
	                $(this).removeClass('btn-success').addClass('btn-danger').text('Disable');
	            }
	        });
	        if (that.enabledModules.indexOf(config.name) != -1) {
	            $toggleModuleButton.addClass('btn-danger').text('Disable');
	        } else {
	            $toggleModuleButton.addClass('btn-success').text('Enable');
	        }

	        $moduleInfo = $('<div class="col-md-6">').append($moduleInfo);

	        return $moduleInfo;
	    };


	    this.sort = function () {
	        var extraModulesArray = [];
	        for (var module in that.extraModules) {
	            extraModulesArray.push(that.extraModules[module]);
	        }

	        extraModulesArray = extraModulesArray.sort(function (a, b) {
	            var aSort = +(that.enabledModules.indexOf(a.name) != -1);
	            var bSort = +(that.enabledModules.indexOf(b.name) != -1);

	            if (aSort < bSort) {
	                return 1;
	            } else if (aSort > bSort) {
	                return -1;
	            } else {
	                if (a.title.toLowerCase() > b.title.toLowerCase()) {
	                    return 1;
	                } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
	                    return -1;
	                } else {
	                    return 0;
	                }
	            }
	        });

	        for (var extraModuleIndex = 0, extraModulesLength = extraModulesArray.length; extraModuleIndex < extraModulesLength; extraModuleIndex++) {
	            extraModulesArray[extraModuleIndex].$el.detach().appendTo($tabContent);
	        }
	    };


	    /**
	     * Saving and applying settings
	     */
	    app.Settings.onSave(function (settings) {
	        settings.set(namespace + '.enabled', that.enabledModules);

	        if (settings.isDirty(namespace + '.enabled')) {
	            app.Settings.requestPageReload();
	        }
	    });
	});


/***/ },

/* 22 */
/***/ function(module, exports, __webpack_require__) {
/***/ },
/* 23 */
/***/ function(module, exports) {
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){var t,i,n=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(e.event.fixHooks)for(var s=n.length;s;)e.event.fixHooks[n[--s]]=e.event.mouseHooks;var a=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var t=o.length;t;)this.addEventListener(o[--t],h,!1);else this.onmousewheel=h;e.data(this,"mousewheel-line-height",a.getLineHeight(this)),e.data(this,"mousewheel-page-height",a.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var t=o.length;t;)this.removeEventListener(o[--t],h,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var i=e(t),n=i["offsetParent"in e.fn?"offsetParent":"parent"]();return n.length||(n=e("body")),parseInt(n.css("fontSize"),10)||parseInt(i.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function h(n){var o,s=n||window.event,h=l.call(arguments,1),f=0,d=0,c=0,m=0,g=0;if((n=e.event.fix(s)).type="mousewheel","detail"in s&&(c=-1*s.detail),"wheelDelta"in s&&(c=s.wheelDelta),"wheelDeltaY"in s&&(c=s.wheelDeltaY),"wheelDeltaX"in s&&(d=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(d=-1*c,c=0),f=0===c?d:c,"deltaY"in s&&(f=c=-1*s.deltaY),"deltaX"in s&&(d=s.deltaX,0===c&&(f=-1*d)),0!==c||0!==d){if(1===s.deltaMode){var w=e.data(this,"mousewheel-line-height");f*=w,c*=w,d*=w}else if(2===s.deltaMode){var v=e.data(this,"mousewheel-page-height");f*=v,c*=v,d*=v}if(o=Math.max(Math.abs(c),Math.abs(d)),(!i||o<i)&&(i=o,u(s,o)&&(i/=40)),u(s,o)&&(f/=40,d/=40,c/=40),f=Math[f>=1?"floor":"ceil"](f/i),d=Math[d>=1?"floor":"ceil"](d/i),c=Math[c>=1?"floor":"ceil"](c/i),a.settings.normalizeOffset&&this.getBoundingClientRect){var p=this.getBoundingClientRect();m=n.clientX-p.left,g=n.clientY-p.top}return n.deltaX=d,n.deltaY=c,n.deltaFactor=i,n.offsetX=m,n.offsetY=g,n.deltaMode=0,h.unshift(n,f,d,c),t&&clearTimeout(t),t=setTimeout(r,200),(e.event.dispatch||e.event.handle).apply(this,h)}}function r(){i=null}function u(e,t){return a.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
/***/ },
/* 24 */
/***/ function(module, exports) {
!function(t){if(t.support.touch="ontouchend"in document,t.support.touch){var o,e=t.ui.mouse.prototype,u=e._mouseInit,n=e._mouseDestroy;e._touchStart=function(t){!o&&this._mouseCapture(t.originalEvent.changedTouches[0])&&(o=!0,this._touchMoved=!1,c(t,"mouseover"),c(t,"mousemove"),c(t,"mousedown"))},e._touchMove=function(t){o&&(this._touchMoved=!0,c(t,"mousemove"))},e._touchEnd=function(t){o&&(c(t,"mouseup"),c(t,"mouseout"),this._touchMoved||c(t,"click"),o=!1)},e._mouseInit=function(){this.element.bind({touchstart:t.proxy(this,"_touchStart"),touchmove:t.proxy(this,"_touchMove"),touchend:t.proxy(this,"_touchEnd")}),u.call(this)},e._mouseDestroy=function(){this.element.unbind({touchstart:t.proxy(this,"_touchStart"),touchmove:t.proxy(this,"_touchMove"),touchend:t.proxy(this,"_touchEnd")}),n.call(this)}}function c(t,o){if(!(t.originalEvent.touches.length>1)){t.preventDefault();var e=t.originalEvent.changedTouches[0],u=document.createEvent("MouseEvents");u.initMouseEvent(o,!0,!0,window,1,e.screenX,e.screenY,e.clientX,e.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(u)}}}(jQuery);
/***/ },
/* 25 */
/***/ function(module, exports) {
window.cytubeEnhanced.addModule("languageSwitcher",function(e){"use strict";var a=e.Settings.getTab("general",e.t("general[.]General"),100),t=["en"];for(var n in e.translations)t.push(n);var g=[];for(var l in t)g.push({value:t[l],title:e.t(t[l]),selected:t[l]==e.storage.get("language")});a.addControl("select","horizontal",e.t("general[.]Interface language"),"language",g,null,2e4),e.Settings.onSave(function(a){e.storage.set("language",$("#"+e.prefix+"language").val()),e.storage.isDirty("language")&&e.Settings.requestPageReload()})});
/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	window.cytubeEnhanced.addModule('navMenuTabs', function (app) {
	    'use strict';
	    var that = this;


	    this.addTabInput = function ($tabsArea, tabName, tabValue) {
	        tabName = tabName || '';
	        tabValue = tabValue || '';

	        var $wrapper = $('<div class="row tab-option-wrapper">').appendTo($tabsArea);

	        var $tabNameWrapperOfWrapper = $('<div class="col-sm-4 col-md-3">').appendTo($wrapper);
	        var $tabNameWrapper = $('<div class="form-group">').appendTo($tabNameWrapperOfWrapper);
	        $('<input name="title" type="text" class="form-control" placeholder="' + app.t('tabs[.]Title') + '">')
	            .val(tabName)
	            .appendTo($tabNameWrapper);


	        var $tabValueWrapperOfWrapper = $('<div class="col-sm-8 col-md-9">').appendTo($wrapper);
	        var $tabValueWrapper = $('<div class="form-group">').appendTo($tabValueWrapperOfWrapper);
	        $('<input name="content" type="text" class="form-control" placeholder="' + app.t('tabs[.]Content') + '">')
	            .val(tabValue)
	            .appendTo($tabValueWrapper);
	    };
	    this.tabsConfigToHtml = function (channelDescription, tabsConfig) {
	        var $virtualMainWrapper = $('<div>');

	        if (channelDescription !== undefined && channelDescription !== '') {
	            $('<div id="motd-channel-description">')
	                .html(channelDescription)
	                .appendTo($virtualMainWrapper);
	        }
	        if (tabsConfig.length !== 0) {
	            var TAB_TITLE = 0;
	            var TAB_CONTENT = 1;
	            var LINK_TITLE = 0;
	            var LINK_ADDRESS = 1;

	            var $tabsWrapper = $('<div id="motd-tabs-wrapper">').appendTo($virtualMainWrapper);
	            var $tabs = $('<div id="motd-tabs">').appendTo($tabsWrapper);
	            var $tabsContent = $('<div id="motd-tabs-content">').appendTo($tabsWrapper);

	            for (var tabIndex = 0, tabsLength = tabsConfig.length; tabIndex < tabsLength; tabIndex++) {
	                if (tabsConfig[tabIndex][TAB_TITLE].indexOf('!dropdown!') === 0) {
	                    var $dropdownWrapper = $('<div class="btn-group">');
	                    $('<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">')
	                        .html(tabsConfig[tabIndex][TAB_TITLE].replace('!dropdown!', '') + ' <span class="caret"></span>')
	                        .appendTo($dropdownWrapper);
	                    var $dropdownMenu = $('<ul class="dropdown-menu">')
	                        .appendTo($dropdownWrapper);

	                    var linksConfig = tabsConfig[tabIndex][TAB_CONTENT];
	                    for (var linkIndex = 0, linksLength = tabsConfig[tabIndex][TAB_CONTENT].length; linkIndex < linksLength; linkIndex++) {
	                        var $link = $('<a>').attr({href: linksConfig[linkIndex][LINK_ADDRESS], target: '_blank'}).text(linksConfig[linkIndex][LINK_TITLE]);
	                        $('<li>').html($link).appendTo($dropdownMenu);
	                    }

	                    $dropdownWrapper.appendTo($tabs);
	                } else if (tabsConfig[tabIndex][TAB_TITLE].indexOf('!link!') === 0) {
	                    $('<a href="' + tabsConfig[tabIndex][TAB_CONTENT] + '" target="_blank" class="btn btn-default btn-link">')
	                        .html(tabsConfig[tabIndex][TAB_TITLE].replace('!link!', ''))
	                        .appendTo($tabs);
	                } else {
	                    $('<button class=" motd-tab-btn" data-tab-index="' + tabIndex + '">')
	                        .html(tabsConfig[tabIndex][TAB_TITLE])
	                        .appendTo($tabs);

	                    $('<div class="motd-tab-content" data-tab-index="' + tabIndex + '">')
	                        .hide()
	                        .html(tabsConfig[tabIndex][TAB_CONTENT])
	                        .appendTo($tabsContent);
	                }
	            }
	        }
	        return $virtualMainWrapper.html();
	    };
	    this.tabsHtmlToCondig = function (htmlCode) {
	        this.$tabsArea.empty();
	        var $tabsTree = $('<div>').html(htmlCode);
	        var $tabsTreeNavBtns = $tabsTree.find('#motd-tabs').children();
	        var $tabsTreeTabsContent = $tabsTree.find('#motd-tabs-content');
	        $('#channel-description-input').val($tabsTree.find('#motd-channel-description').html());
	        $tabsTreeNavBtns.each(function () {
	            if ($(this).hasClass('btn-group')) { //dropdown
	                var parsedDropdownItems = '';
	                var $dropdownItems = $(this).children('ul').children();

	                $dropdownItems.each(function () {
	                    var link = $(this).children('a');

	                    parsedDropdownItems += '[n]' + link.text() + '[/n][a]' + link.attr('href') + '[/a], ';
	                });
	                parsedDropdownItems = parsedDropdownItems.slice(0, -2);

	                that.addTabInput(that.$tabsArea, '!dropdown!' + $(this).children('button').html().replace(' <span class="caret"></span>', ''), parsedDropdownItems);
	            } else if ($(this).hasClass('btn-link')) { //link
	                that.addTabInput(that.$tabsArea, '!link!' + $(this).html(), $(this).attr('href'));
	            } else { //tab
	                that.addTabInput(that.$tabsArea, $(this).html(), $tabsTreeTabsContent.find('[data-tab-index="' + $(this).data('tabIndex') + '"]').html());
	            }
	        });
	    };
	    this.motdCutMap = {
	        '<iframe $1>$2</iframe>': /\[iframe(.*?)\](.*?)[/iframe]]/g
	    };
	    this.fixMotdCut = function () {
	        $('#motd-tabs-content').find('.motd-tab-content').each(function () {
	            for (var tag in that.motdCutMap) {
	                if (that.motdCutMap.hasOwnProperty(tag)) {
	                    $(this).html($(this).html().replace(that.motdCutMap[tag], tag));
	                }
	            }
	        });
	    };
	    this.$tabsSettings = $('<div id="tabs-settings">')
	        .html('<hr>' +
	            '<h3>' + app.t('tabs[.]Tabs settings') + '</h3>' +
	            '<ul>' +
	                '<li>' + app.t('tabs[.]By default tab behaves like simple tab.') + '</li>' +
	                '<li>' + app.t('tabs[.]Use !dropdown! prefix to create dropdown list. Example: !dropdown!My dropdown. Value must look like "[n]Link title 1[/n][a]URL 1[/a], [n]Link title 2[/n][a]URL 2[/a], [n]Link title 3[/n][a]URL 3[/a]"') + '</li>' +
	                '<li>' + app.t('tabs[.]Use !link! prefix to create link. Example: !link!My link. Value must contain URL.') + '</li>' +
	            '</ul>')
	        .insertBefore('#cs-motdtext')
	        .hide();
	    this.$channelDescriptionInputWrapper = $('<div class="form-group">').appendTo(this.$tabsSettings);
	    this.$channelDescriptionLabel = $('<label for="channel-description-input">' + app.t('tabs[.]Channel description') + '</label>').appendTo(this.$channelDescriptionInputWrapper);
	    this.$channelDescriptionInput = $('<input id="channel-description-input" placeholder="' + app.t('tabs[.]Channel description') + '" class="form-control">').appendTo(this.$channelDescriptionInputWrapper);
	    this.$tabsArea = $('<div id="tabs-settings-area">').appendTo(this.$tabsSettings);
	    $('<p>Tabs</p>').insertBefore(this.$tabsArea);

	    this.$addTabToTabsSettingsBtn = $('<button type="button" class="btn btn-sm btn-primary" id="tabs-settings-add">')
	        .text(app.t('tabs[.]Add tab'))
	        .appendTo(this.$tabsSettings)
	        .on('click', function () {
	            that.addTabInput(that.$tabsArea);
	        });

	    this.$removeLastTabFromTabsSettingsBtn = $('<button type="button" class="btn btn-sm btn-primary" id="tabs-settings-remove">')
	        .text(app.t('tabs[.]Remove the last tab'))
	        .appendTo(this.$tabsSettings)
	        .on('click', function () {
	            that.$tabsArea.children('.tab-option-wrapper').last().remove();
	        });
	    this.$tabsToHtml = $('<button type="button" class="btn btn-sm btn-primary" id="tabs-settings-to-html">')
	        .text(app.t('tabs[.]Convert to the editor\'s code'))
	        .appendTo(this.$tabsSettings)
	        .on('click', function () {
	            if (window.confirm(app.t('tabs[.]The code in the editor will be replaced with the new code, continue?'))) {
	                $(this).removeClass('btn-success');

	                var tabsConfig = []; //list of arrays like [tabTitle, tabContent]

	                that.$tabsArea.find('.tab-option-wrapper').each(function () {
	                    var tabName = $(this).find('input[name="title"]').val().trim();
	                    var tabContent = $(this).find('input[name="content"]').val().trim();

	                    if (tabName.indexOf('!dropdown!') === 0) {
	                        if (!/^(?:\[n\](.+?)\[\/n\]\[a\](.+?)\[\/a\][ ]*,[ ]*)*\[n\](.+?)\[\/n\]\[a\](.+?)\[\/a\]$/.test(tabContent)) {
	                            window.alert(app.t('tabs[.]Wrong content for the dropdown') + tabName.replace('!dropdown!', '') + '.');
	                            return;
	                        }

	                        tabContent = tabContent.split(',').map(function (linkInfo) {
	                            linkInfo = linkInfo.trim().match(/^\[n\](.+?)\[\/n\]\[a\](.+?)\[\/a\]$/);

	                            return [linkInfo[1].trim(), linkInfo[2].trim()];
	                        });
	                    } else if (tabName.indexOf('!link!') === 0) {

	                    }

	                    tabsConfig.push([tabName, tabContent]);
	                });


	                $('#cs-motdtext').val(that.tabsConfigToHtml(that.$channelDescriptionInput.val(), tabsConfig));
	            }
	        });


	    this.$htmlToTabs = $('<button type="button" class="btn btn-sm btn-primary" id="tabs-settings-from-html">')
	        .text(app.t('tabs[.]Convert from the editor\'s code'))
	        .appendTo(this.$tabsSettings)
	        .on('click', function () {
	            if (window.confirm(app.t('tabs[.]Tabs settings will be replaced with the code from the editor, continue?'))) {
	                $(this).removeClass('motdselected');
	                that.tabsHtmlToCondig($('#cs-motdtext').val());
	            }
	        });
	    this.showMotdTab = function ($tabBtn) {
	        var $tabContent = $('#motd-tabs-content').find('[data-tab-index="' + $tabBtn.data('tabIndex') + '"]');

	        if ($tabBtn.hasClass('motdbutton')) { //closed
	            $('.motd-tab-content').hide();
	            $tabContent.show();

	            $('.motd-tab-btn').removeClass('motdselected').addClass('motdbutton');

	            $tabBtn.removeClass('motdbutton');
	            $tabBtn.addClass('motdselected');
	        } else { //opened
	            $tabContent.hide();

	            $tabBtn.removeClass('motdselected');
	            $tabBtn.addClass('motdbutton');
	        }
	    };
	    $(document.body).on('click', '#motd-tabs .motd-tab-btn', function () {
	        that.showMotdTab($(this));
	    });
	    this.motdHandleDropdown = function () {
	        $('.motd-tab-btn').removeClass('btn-success').addClass('motdbutton');
	        $('.motd-tab-content').hide();
	    };
	    $(document.body).on('click', '#motd-tabs .dropdown-toggle', function () {
	        that.motdHandleDropdown();
	    });
	    this.tabsHtmlToCondig($('#cs-motdtext').val());
	    this.fixMotdCut();
	    window.socket.on('setMotd', function () {
	        that.fixMotdCut();
	    });
	    $(document).on('change keypress', '#tabs-settings-area input, #tabs-settings-area textarea', function () {
	        that.$tabsToHtml.addClass('btn-success');
	    });
	    $(document).on('change keypress', '#cs-motdtext', function () {
	        that.$htmlToTabs.addClass('btn-success');
	    });
//////////////////sticky shit/////////////////

;(function( win, $ ) {

	function featureTest( property, value, noPrefixes ) {
		var prop = property + ':',
			el = document.createElement( 'test' ),
			mStyle = el.style;

		if( !noPrefixes ) {
			mStyle.cssText = prop + [ '-webkit-', '-moz-', '-ms-', '-o-', '' ].join( value + ';' + prop ) + value + ';';
		} else {
			mStyle.cssText = prop + value;
		}
		return mStyle[ property ].indexOf( value ) !== -1;
	}
	function getPx( unit ) {
		return parseInt( unit, 10 ) || 0;
	}
	var uniqueIdCounter = 0;
	var S = {
		classes: {
			plugin: 'fixedsticky',
			active: 'fixedsticky-on',
			inactive: 'fixedsticky-off',
			clone: 'fixedsticky-dummy',
			withoutFixedFixed: 'fixedsticky-withoutfixedfixed'
		},
		keys: {
			offset: 'fixedStickyOffset',
			position: 'fixedStickyPosition',
			id: 'fixedStickyId'
		},
		tests: {
			sticky: featureTest( 'position', 'sticky' ),
			fixed: featureTest( 'position', 'fixed', true )
		},
		// Thanks jQuery!
		getScrollTop: function() {
			var prop = 'pageYOffset',
				method = 'scrollTop';
			return win ? (prop in win) ? win[ prop ] :
				win.document.documentElement[ method ] :
				win.document.body[ method ];
		},
		bypass: function() {
			// Check native sticky, check fixed and if fixed-fixed is also included on the page and is supported
			return ( S.tests.sticky && !S.optOut ) ||
				!S.tests.fixed ||
				win.FixedFixed && !$( win.document.documentElement ).hasClass( 'fixed-supported' );
		},
		update: function( el ) {
			if( !el.offsetWidth ) { return; }

			var $el = $( el ),
				height = $el.outerHeight(),
				initialOffset = $el.data( S.keys.offset ),
				scroll = S.getScrollTop(),
				isAlreadyOn = $el.is( '.' + S.classes.active ),
				toggle = function( turnOn ) {
					$el[ turnOn ? 'addClass' : 'removeClass' ]( S.classes.active )
						[ !turnOn ? 'addClass' : 'removeClass' ]( S.classes.inactive );
				},
				viewportHeight = $( window ).height(),
				position = $el.data( S.keys.position ),
				skipSettingToFixed,
				elTop,
				elBottom,
				$parent = $el.parent(),
				parentOffset = $parent.offset().top,
				parentHeight = $parent.outerHeight();

			if( initialOffset === undefined ) {
				initialOffset = $el.offset().top;
				$el.data( S.keys.offset, initialOffset );
				$el.after( $( '<div>' ).addClass( S.classes.clone ).height( height ) );
			} else {
				$el.next( '.' + S.classes.clone ).height( height );
			}

			if( !position ) {
				// Some browsers require fixed/absolute to report accurate top/left values.
				skipSettingToFixed = $el.css( 'top' ) !== 'auto' || $el.css( 'bottom' ) !== 'auto';

				if( !skipSettingToFixed ) {
					$el.css( 'position', 'fixed' );
				}

				position = {
					top: $el.css( 'top' ) !== 'auto',
					bottom: $el.css( 'bottom' ) !== 'auto'
				};

				if( !skipSettingToFixed ) {
					$el.css( 'position', '' );
				}

				$el.data( S.keys.position, position );
			}

			function isFixedToTop() {
				var offsetTop = scroll + elTop;

				// Initial Offset Top
				return initialOffset < offsetTop &&
					// Container Bottom
					offsetTop + height <= parentOffset + parentHeight;
			}

			function isFixedToBottom() {
				// Initial Offset Top + Height
				return initialOffset + ( height || 0 ) > scroll + viewportHeight - elBottom &&
					// Container Top
					scroll + viewportHeight - elBottom >= parentOffset + ( height || 0 );
			}

			elTop = getPx( $el.css( 'top' ) );
			elBottom = getPx( $el.css( 'bottom' ) );

			if( position.top && isFixedToTop() || position.bottom && isFixedToBottom() ) {
				if( !isAlreadyOn ) {
					toggle( true );
				}
			} else {
				if( isAlreadyOn ) {
					toggle( false );
				}
			}
		},
		destroy: function( el ) {
			var $el = $( el );
			if (S.bypass()) {
				return $el;
			}

			return $el.each(function() {
				var $this = $( this );
				var id = $this.data( S.keys.id );
				$( win ).unbind( '.fixedsticky' + id );

				$this
					.removeData( [ S.keys.offset, S.keys.position, S.keys.id ] )
					.removeClass( S.classes.active )
					.removeClass( S.classes.inactive )
					.next( '.' + S.classes.clone ).remove();
			});
		},
		init: function( el ) {
			var $el = $( el );

			if( S.bypass() ) {
				return $el;
			}
			return $el.each(function() {
				var _this = this;
				var id = uniqueIdCounter++;
				$( this ).data( S.keys.id, id );

				$( win ).bind( 'scroll.fixedsticky' + id, function() {
					S.update( _this );
				}).trigger( 'scroll.fixedsticky' + id );

				$( win ).bind( 'resize.fixedsticky' + id , function() {
					if( $el.is( '.' + S.classes.active ) ) {
						S.update( _this );
					}
				});
			});
		}
	};
	win.FixedSticky = S;
	// Plugin
	$.fn.fixedsticky = function( method ) {
		if ( typeof S[ method ] === 'function') {
			return S[ method ].call( S, this);
		} else if ( typeof method === 'object' || ! method ) {
			return S.init.call( S, this );
		} else {
			throw new Error( 'Method `' +  method + '` does not exist on jQuery.fixedsticky' );
		}
	};
	// Add fallback when fixed-fixed is not available.
	if( !win.FixedFixed ) {
		$( win.document.documentElement ).addClass( S.classes.withoutFixedFixed );
	}
})( window, jQuery );
///////////////Navigation shit/////////////////
this.$titleRow = $('<div id="navtabs" class="row">').insertAfter('#main');
$("#navtabs").prepend(
'<section id="tabs" class="et-hero-tabs">' +
'<div class="et-hero-tabs-container">' +
'<a class="et-hero-tab" id="motdtab" href="#motdwrap">MOTD</a>' +
'<a class="et-hero-tab" id="playlisttoggle" href="#queuecontainer">PLAYLIST</a>' +
'<a class="et-hero-tab hidden" id="polltab" href="#pollwrap"></a>' +
'<a class="et-hero-tab" id="addmediatoggle" href="#rightpane"></a>' +
'<span class="et-hero-tab-slider"></span>' +
'</div></section>');
$('#nav-collapsible a:contains("Delete Account")').remove();
$('#nav-collapsible a:contains("Account")').parent().detach().appendTo(".et-hero-tabs-container").addClass("et-hero-tab accountbutton").insertBefore("#motdtab");
$( window ).load(function() {

  class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 40;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 100);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
  }
  new StickyNavigation();
});

/////////////////////////////////////////////
$( '#tabs' ).fixedsticky();
if (window.CLIENT.rank >= 3) {
	$("#polltab").removeClass("hidden");
}
$("#polltab").append($("#newpollbtn"));
$("#addmediatoggle").append("<button id='addmedia' title='Add Media' class='headerbtn'></button>");
$("#addmediatoggle").click(function(){ //Add Media button action
	if ($("#rightpane").css('display') == 'none'){//if add media is hidden
		$("#mediabuttons button").each(function() {
			if ($(this).css("display") != "none") {
				if ($(this).hasClass("collapsed")){
					$(this).trigger("click");
				}
				return false;
			}//if button is clickable
		})
		$("#rightpane").slideDown(trnsdelay);
	}
	else {
		$("#rightpane").slideUp(trnsdelay);
	}
var trnsdelay = 400;//Defines trnsdelay, transition time (in ms)
});
$("#playlisttoggle").click(function(){ //Add Media button action
	if ($("#queuecontainer").css('display') == 'none'){//if add media is hidden
		$("#mediabuttons button").each(function() {
			if ($(this).css("display") != "none") {
				if ($(this).hasClass("collapsed")){
					$(this).trigger("click");
				}
				return false;
			}//if button is clickable
		})
		$("#queuecontainer").slideDown(trnsdelay);
	}
	else {
		$("#queuecontainer").slideUp(trnsdelay);
	}
var trnsdelay = 400;//Defines trnsdelay, transition time (in ms)
});
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('CopyEmotes', function (app) {
	    'use strict';
	    var that = this;

var target = document.querySelector('#messagebuffer');
var observer = new MutationObserver(function (mutations) {
	var last = $('#messagebuffer').children().last();
	var emote = last.find(".channel-emote").click(
		function () {
		    $('#chatline').val($('#chatline').val() + " " + ($(this).attr("title")));
		}
	);
	emote.each(function () {
		console.log($(this).attr("title"), $(this).attr("src"));
		emoteToDialog($(this).attr("title"), $(this).attr("src"));
	});
});
$("#chatwrap").append(
'<div id="LastEmote" class="LastEmoteBox">' +
'</div></div>' );
var config = { childList: true };
observer.observe(target, config);
var items = 0;
function emoteToDialog(title, src) {
	if (typeof title == 'undefined' || typeof src == 'undefined') {
		return;
	}
	var emoteID = title.replace("/", "")
	var del = $('#' + emoteID).remove();
	if(!del.length > 0){
		items++;
	}
	if(items >= 4){
		$('#chatEmotes').children().last().remove();
		items--;
	}
	var btn = $('<div class="emoteicon" id="'+emoteID+'"title=/'+emoteID+' style="float:left;"><img src="' + src + '" id="' + emoteID + "_img'" + '" width="28" height="28" /></img></div>');
		btn.click(
		function () {
			$('#chatline').val($('#chatline').val() + " " + title);
		}
	);
	btn.prependTo("#LastEmote");}
});
/***/ },
/* 28 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('smilesAndFavouritePicturesTogether', function (app) {
	    'use strict';
	    var that = this;

	    var tab = app.Settings.getTab('general', app.t('general[.]General'), 100);
	    var userSettings = app.Settings.storage;


	    if (!app.isModulePermitted('smiles') || !app.isModulePermitted('favouritePictures')) {
	        return;
	    }

	    var namespace = 'general';
	    this.scheme = {
	        'smiles-and-favourite-pictures-together': {
	            title: app.t('general[.]Smiles and pictures together'),
	            default: 'no',
	            options: [
	                {value: 'no', title: app.t('settings[.]no')}
	            ]
	        }
	    };
	    /**
	     * Creating markup for settings
	     */
	    var schemeItem;
	    var option;
	    var sort = 10000;
	    for (var itemName in this.scheme) {
	        schemeItem = this.scheme[itemName];

	        userSettings.setDefault(namespace + '.' + itemName, schemeItem.default);

	        if (userSettings.get(namespace + '.' + itemName)) {
	            for (option in schemeItem.options) {
	                schemeItem.options[option].selected = (userSettings.get(namespace + '.' + itemName) == schemeItem.options[option].value);
	            }
	        }

	        tab.addControl('select', 'horizontal', schemeItem.title, itemName, schemeItem.options, null, sort);
	        sort += 100;
	    }


	    /**
	     * Saving and applying settings
	     */
	    app.Settings.onSave(function (settings) {
	        for (var itemName in that.scheme) {
	            settings.set(namespace + '.' + itemName, $('#' + app.prefix + itemName).val());
	        }

	        if (settings.isDirty(namespace + '.smiles-and-favourite-pictures-together')) {
	            app.Settings.requestPageReload();
	        }
	    });
	    if (userSettings.get(namespace + '.smiles-and-favourite-pictures-together')  == 'yes') {
	        app.getModule('smiles').done(function (smilesModule) {
	            smilesModule.makeSmilesAndPicturesTogether();
	        });
	        app.getModule('favouritePictures').done(function (favouritePicturesModule) {
	            favouritePicturesModule.makeSmilesAndPicturesTogether();
	        });
	        $('<button id="smiles-and-picture-btn" class="chatbtn fad fa-images" title="' + app.t('general[.]Show emotes and favorite images') + '">')
	            .html('<i class="glyphicon glyphicon-th-large"></i>')
	            .prependTo($('#chat-controls'))
	            .on('click', function () {
	                $('#smiles-btn').click();
	                $('#favourite-pictures-btn').click();

	            });
	    }
	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('smiles', function (app) {
	    'use strict';
	    var that = this;

	    $('#emotelistbtn').hide();
	    if ($('#chat-panel').length === 0) {
	        $('<div id="chat-panel" class="row">').insertAfter("#messagebuffer");
	    }
	    if ($('#chat-controls').length === 0) {
	        $('<div id="chat-controls" class="btn-group">').appendTo(".chat-area-buttons");
	    }
	    this.$smilesBtn = $('<button class="chatbtn" id="smiles-btn" data-tooltip="Emotes" data-tooltip-pos="up" >')
	        .html('<i class="fa-solid fa-face-awesome"></i>')
	        .prependTo('#chat-controls');

	    this.$smilesPanel = $('<div class="animated animatedFadeInUp fadeInUp" id="smiles-panel">')
	        .prependTo('#chat-panel')
	        .hide();
	    this.renderSmiles = function () {
	        var smiles = window.CHANNEL.emotes;

	        for (var smileIndex = 0, smilesLen = smiles.length; smileIndex < smilesLen; smileIndex++) {
	            $('<img class="smile-on-panel">')
	                .attr({src: smiles[smileIndex].image})
	                .data('name', smiles[smileIndex].name)
	                .appendTo(this.$smilesPanel);
	        }
	    };
	    this.insertSmile = function (smileName) {
	        app.Helpers.addMessageToChatInput(' ' + smileName + ' ', 'end');
	    };
	    $(document.body).on('click', '.smile-on-panel', function () {
	        that.insertSmile($(this).data('name'))
			that.showSmilesPanel();
	    });
	    $(window).on('resize', function () {
	        if (app.Helpers.getViewportSize().width < 992) {
	            that.$smilesPanel.empty();
	        }
	    });
	    this.showSmilesPanel = function () {
	        if (app.Helpers.getViewportSize().width < 992) {
	            that.$smilesPanel.empty();
	            $('#emotelistbtn').click();
	        } else {
	            if (that.$smilesPanel.html() === '') {
	                that.renderSmiles();
	            }

	            var smilesAndPicturesTogether = this.smilesAndPicturesTogether || true; //setted up by userConfig module

	            if ($('#favourite-pictures-panel').length !== 0 && !smilesAndPicturesTogether) {
	                $('#favourite-pictures-panel').hide();
	            }

	            that.$smilesPanel.toggle();

	            if (!smilesAndPicturesTogether) {
	                if (that.$smilesBtn.hasClass('btn-default')) {
	                    if ($('#favourite-pictures-btn').length !== 0 && $('#favourite-pictures-btn').hasClass('btn-success')) {
	                        $('#favourite-pictures-btn').removeClass('btn-success').addClass('');
	                    }

	                    that.$smilesBtn.removeClass('');
	                    that.$smilesBtn.addClass('');
	                } else {
	                    that.$smilesBtn.removeClass('');
	                    that.$smilesBtn.addClass('');
	                }
	            }
	        }
	    };
	    this.$smilesBtn.on('click', function() {
	        that.showSmilesPanel();
	    });
	    this.makeSmilesAndPicturesTogether = function () {
	        that.smilesAndPicturesTogether = true;
	        that.$smilesBtn.hide();
	        that.$smilesPanel.hide();
	    };
	});
/***/ },
/* 30 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('themes', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        defaultTheme: 'default', //default theme for user (until user do not change it)
	        themeId: 'theme-css' //node id in DOM
	    };
	    settings = $.extend({}, defaultSettings, settings);


	    $('#us-theme').closest('.form-group').hide().val('/css/themes/slate.css');
	    if (window.createCookie) {
	        window.createCookie('cytube-theme', '/css/themes/slate.css', 1000);
	    }


	    var tab = app.Settings.getTab('themes', app.t('themes[.]Themes'), 500);
	    var $tabContent = $('<div class="' + app.prefix + 'themes">').appendTo(tab.$content);
	    var userSettings = app.Settings.storage;

	    var $themesInfoMessage = $('<div class="' + app.prefix + 'themes__info-message">').text('No Topic').prependTo(tab.$content);

	    var namespace = 'themes';
	    userSettings.setDefault(namespace + '.selected', settings.defaultTheme);
	    this.themes = {};


	    //if settings.defaultTheme was changed by administrator ask user if he want to switch on it
	    this.applyNewDefaultTheme = function () {
	        var previousDefaultTheme = userSettings.get(namespace + '.previousDefaultTheme');

	        if (userSettings.get(namespace + '.selected') == previousDefaultTheme) {
	            userSettings.set(namespace + '.previousDefaultTheme', settings.defaultTheme);
	            that.setTheme(settings.defaultTheme);
	            userSettings.save();
	            console.log('reloading');
	            window.location.reload();
	        } else if (!previousDefaultTheme || (previousDefaultTheme && previousDefaultTheme != settings.defaultTheme)) {
	            userSettings.set(namespace + '.previousDefaultTheme', settings.defaultTheme);
	            userSettings.save();

	            if (settings.defaultTheme != userSettings.get(namespace + '.selected')) {
	                var themeTitle = that.themes[settings.defaultTheme].title;
	                app.UI.createConfirmWindow(app.t('themes[.]Default theme was changed to "%themeTitle%" by the channel owner. Do you want to try it? (Don\'t forget that you can change the theme in the extended settings at anytime.)').replace('%themeTitle%', themeTitle), function () {
	                    that.setTheme(settings.defaultTheme);
	                    userSettings.save();
	                    app.UI.createConfirmWindow(app.t('settings[.]The page needs to reload to apply changes. Do it now?'), function () {
	                        window.location.reload();
	                    });
	                });
	            }
	        }
	    };


	    this.add = function (config) {
	        $themesInfoMessage.remove();

	        that.themes[config.name] = config;
	        that.themes[config.name].$el = that.addMarkup(config).appendTo($tabContent);
	        that.sort();

	        if (config.name === userSettings.get(namespace + '.selected')) {
	            if (config.name === settings.defaultTheme) {
	                userSettings.set(namespace + '.previousDefaultTheme', settings.defaultTheme);
	                userSettings.save();
	            }
	            that.setTheme(config.name);
	            that.applyTheme(config.name);
	        } else if (config.name === settings.defaultTheme) {
	            that.applyNewDefaultTheme();
	        }
	    };
	    tab.onShow(function () {
	        $('.' + app.prefix + 'themes__item')
	            .removeClass('active')
	            .filter(function() {
	                return $(this).data('name') === userSettings.get(namespace + '.selected');
	            })
	            .addClass('active');
	    });
	    /**
	     * Sets theme
	     * @param name Theme's name
	     */
	    this.setTheme = function (name) {
	        userSettings.set(namespace + '.selected', name);

	        $('.' + app.prefix + 'themes__item')
	            .removeClass('active')
	            .filter(function() {
	                return $(this).data('name') === name;
	            })
	            .addClass('active');
	    };
	    this.applyTheme = function (name) {
	        var config = that.themes[name];

	        $('#' + settings.themeId).remove();
	        if (config.cssUrl) {
	            $('<link rel="stylesheet" id="' + settings.themeId + '">').attr('href', config.cssUrl).appendTo($('head'));
	        } else { //resets to default theme
	            that.setTheme(userSettings.getDefault(namespace + '.selected'));
	        }

	        if (config.jsUrl) {
	            $.getScript(config.jsUrl);
	        }
	    };
	    this.addMarkup = function (config) {
	        var $moduleInfo = $('<div class="' + app.prefix + 'themes__item">').data('name', config.name).on('click', function () {
	            var name = $(this).data('name');

	            if (name !== userSettings.get(namespace + '.selected')) {
	                app.UI.createConfirmWindow(app.t('themes[.]Apply this theme?'), function () {
	                    that.setTheme(name);
	                });
	            }
	        });
	        var $title = $('<div class="' + app.prefix + 'themes__item__title">').text(config.title).appendTo($moduleInfo);

	        if (typeof config.pictureUrl !== 'undefined' && (config.pictureUrl = config.pictureUrl.trim()) !== '') {
	            $('<div class="' + app.prefix + 'themes__item__picture">').appendTo($moduleInfo).css('background-image', 'url("' + config.pictureUrl + '")');
	        }
	        return $moduleInfo;
	    };
	    this.sort = function () {
	        var themesArray = [];
	        for (var theme in that.themes) {
	            themesArray.push(that.themes[theme]);
	        }

	        themesArray = themesArray.sort(function (a, b) {
	            if (a.title.toLowerCase() > b.title.toLowerCase()) {
	                return 1;
	            } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
	                return -1;
	            } else {
	                return 0;
	            }
	        });

	        for (var themeIndex = 0, themesLength = themesArray.length; themeIndex < themesLength; themeIndex++) {
	            themesArray[themeIndex].$el.detach().appendTo($tabContent);
	        }
	    };
	    /**
	     * Saving and applying settings
	     */
	    app.Settings.onSave(function (settings) {
	        if (settings.isDirty(namespace + '.selected')) {
	            app.Settings.requestPageReload();
	        }
	    });
	});
/***/ },
/* 31 */
/***/ function(module, exports) {

/***/ },
/* 32 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('videoControls', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnOffVideoOption: true,
	        selectQualityOption: true,
	        expandPlaylistOption: true,
	        showVideoContributorsOption: true,
	        playlistHeight: 800
	    };
	    settings = $.extend({}, defaultSettings, settings);

	  $('<span id="clean" data-tooltip="Clean up server messages" data-tooltip-pos="up" class="label label-default pull-right pointer fa fa-solid fa-trash" aria-hidden="true"> </span>')
    .appendTo("#chat-menu")
    .on("click", function() {
      let $messagebuffer = $("#messagebuffer");
      $messagebuffer.find("[class^=chat-msg-\\\\\\$server]").each(function() { $(this).remove(); });
      $messagebuffer.find("[class^=chat-msg-\\\\\\$voteskip]").each(function() { $(this).remove(); });
      $messagebuffer.find("[class^=server-msg]").each(function() { $(this).remove(); });
      $messagebuffer.find("[class^=poll-notify]").each(function() { $(this).remove(); });
      $(".chat-msg-Video:not(:last)").each(function() { $(this).remove(); });
    });
	

    this.$topVideoControls = $('<div id="top-video-controls" class="btn-group">').appendTo("#VideoOverlay");

//    videojs("ytapiplayer").ready(function(){this.volume(1);});

	    this.settingsFix = function () {
	        $("#us-theme").val(window.USEROPTS.theme);
	        $("#us-layout").val(window.USEROPTS.layout);
	        $("#us-no-channelcss").prop("checked", window.USEROPTS.ignore_channelcss);
	        $("#us-no-channeljs").prop("checked", window.USEROPTS.ignore_channeljs);

	        $("#us-synch").prop("checked", window.USEROPTS.synch);
	        $("#us-synch-accuracy").val(window.USEROPTS.sync_accuracy);
	        $("#us-wmode-transparent").prop("checked", window.USEROPTS.wmode_transparent);
	        $("#us-hidevideo").prop("checked", window.USEROPTS.hidevid);
	        $("#us-playlistbuttons").prop("checked", window.USEROPTS.qbtn_hide);
	        $("#us-oldbtns").prop("checked", window.USEROPTS.qbtn_idontlikechange);
	        $("#us-default-quality").val(window.USEROPTS.default_quality || "auto");

	        $("#us-chat-timestamp").prop("checked", window.USEROPTS.show_timestamps);
	        $("#us-sort-rank").prop("checked", window.USEROPTS.sort_rank);
	        $("#us-sort-afk").prop("checked", window.USEROPTS.sort_afk);
	        $("#us-blink-title").val(window.USEROPTS.blink_title);
	        $("#us-ping-sound").val(window.USEROPTS.boop);
	        $("#us-sendbtn").prop("checked", window.USEROPTS.chatbtn);
	        $("#us-no-emotes").prop("checked", window.USEROPTS.no_emotes);

	        $("#us-modflair").prop("checked", window.USEROPTS.modhat);
	        $("#us-joinmessage").prop("checked", window.USEROPTS.joinmessage);
	        $("#us-shadowchat").prop("checked", window.USEROPTS.show_shadowchat);
	    };

	    if ($('#showmediaurl').length !== 0) {
	        $('#showmediaurl').html(app.t('standardUI[.]Add video'))
	            .attr({title: app.t('standardUI[.]Add video from url')})
	            .detach()
	            .insertBefore($('#showsearch'));
	    }

	    this.expandPlaylist = function ($expandPlaylistBtn) {
	        if ($expandPlaylistBtn.hasClass('btn-success')) {//expanded
	            $('#queue').css('max-height', settings.playlistHeight + 'px');

	            $expandPlaylistBtn.attr('title', app.t('video[.]Expand playlist'));

	            $expandPlaylistBtn.removeClass('btn-success');
	            $expandPlaylistBtn.addClass('btn-default');
	        } else {//not expanded
	            $('#queue').css('max-height', '100000px');

	            $expandPlaylistBtn.attr('title', app.t('video[.]Unexpand playlist'));

	            $expandPlaylistBtn.removeClass('btn-default');
	            $expandPlaylistBtn.addClass('btn-success');

	            window.scrollQueue();
	        }
	    };
	    this.$expandPlaylistBtn = $('<button id="expand-playlist-btn" class="btn btn-sm btn-default" data-expanded="0" title="' + app.t('video[.]Expand playlist') + '">')
	        .append('<span class="glyphicon glyphicon-resize-full">')
	        .prependTo('#ploptions')
	        .on('click', function() {
	            that.expandPlaylist($(this));
	        });
	    if (!settings.expandPlaylistOption) {
	        this.$expandPlaylistBtn.hide();
	    }


	    this.$scrollToCurrentBtn = $('<button id="scroll-to-current-btn" class="btn btn-sm btn-default" title="' + app.t('video[.]Scroll the playlist to the current video') + '">')
	        .append('<span class="glyphicon glyphicon-hand-right">')
	        .prependTo('#upnext')
	        .on('click', function() {
	            window.scrollQueue();
	        });

	    this.showVideoContributorsList = function () {
	        var $header = $('<h3 class="modal-title">').text(app.t('video[.]Contributors\' list'));
	        var $bodyWrapper = $('<div>');

	        var contributorsList = {};
	        $('#queue').find('.queue_entry').each(function () {
	            var username = $(this).attr('title').replace('Added by: ', '');

	            if (contributorsList[username] === undefined) {
	                contributorsList[username] = 1;
	            } else {
	                contributorsList[username] += 1;
	            }
	        });

	        $bodyWrapper.append($('<p>' + app.t('video[.]Video\'s count') + ': ' + ($('#queue').find('.queue_entry').length + 1) + '</p>'));

	        var $contributorsListOl = $('<ol>');
	        for (var contributor in contributorsList) {
	            if (contributorsList.hasOwnProperty(contributor)) {
	                $contributorsListOl.append($('<li>' + contributor + ': ' + contributorsList[contributor] + '.</li>'));
	            }
	        }
	        $contributorsListOl.appendTo($bodyWrapper);

	        app.UI.createModalWindow('video-contributors-list', $header, $bodyWrapper);
	    };
	    this.$videoContributorsBtn = $('<button id="video-contributors-btn" class="btn btn-sm btn-default" title="' + app.t('video[.]Contributors\' list') + '">')
	        .append('<span class="glyphicon glyphicon-user">')
	        .prependTo('#ploptions')
	        .on('click', function() {
	            that.showVideoContributorsList();
	        });
	    if (!settings.showVideoContributorsOption) {
	        this.$videoContributorsBtn.hide();
	    }
		socket.on("changeMedia", function(data) {
	    setTimeout(function() {
            $("#ytapiplayer").attr("airplay","allow");
            $("#ytapiplayer").attr("x-webkit-airplay","allow");
          var myPlayer = videojs('ytapiplayer');
          myPlayer.poster(Poster_URL);
          console.log(myPlayer.poster());
		  [...document.querySelectorAll("#currenttitle")].forEach(el => {
  // We just need the length of the string as a CSS variable...
  el.style.setProperty("--length", el.innerText.length);
});
	}, 1);
});

});
/***/ },
/* 33 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('channelslide', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);


	if (UI_ChannelList=="1") {

$('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css' />");
$('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.theme.min.css' />");
$('head').append("<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.transitions.min.css' />");
$('head').append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/BillTube/BillTube2/channelslider.css' />");

$("#motdrow").before('<div class="slider"><i id="left" class="arrow arrleft"></i><div id="carousel" class="carousel-inner owl-carousel owl-theme owl-hero-theme"></div><i id="right" class="arrow arrright"></i></div>');}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js").then(function() {
  var owl = $('#carousel');
  owl.owlCarousel({
    jsonPath : Channel_JSON,
    jsonSuccess : customDataSuccess,
	lazyLoad : true,
	autoHeight : true,
    transitionStyle:"fade",
	autoPlay : 48000,
    stopOnHover : true,
	pagination : false,
    items : 6, 
      itemsDesktop : [696,4], 
      itemsDesktopSmall : [696,3], 
      itemsTablet: [600,2], 
      itemsMobile : [500, 1] 
  });

  function customDataSuccess(data){
    var campaigns = data.list.channels;
    var content = "";
    
    for(var i in campaigns){
       
    var img = campaigns[i].image_url;
    var alt = campaigns[i].title;
    var channel_url = campaigns[i].channel_url;
	
      var contents = document.createElement('div');
      
      contents.setAttribute('class', 'item')
      contents.setAttribute('onclick', "window.open('" + channel_url + "')")
      contents.innerHTML = "<img src='"+img+"' class='kek' alt='"+alt+"'>";
      document.getElementById("carousel").appendChild(contents)

    }
  }
  $("#right").click(function(){
    owl.trigger('owl.next');
  })
  $("#left").click(function(){
    owl.trigger('owl.prev');
  })
 });
});
/***/ },
/* 34 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('NameColors', function () {


var stringToColour = function(str) {

for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));
return colour;
}

function formatChatMessage(data, last) {
if (!data.meta || data.msgclass) {
data.meta = {
addClass: data.msgclass,
addClassToNameAndTimestamp: data.msgclass
};
}
var skip = data.username === last.name;
if(data.meta.addClass === "server-whisper")
skip = true;
if(data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/))
skip = false;
if (data.meta.forceShowName)
skip = false;

data.msg = execEmotes(data.msg);

last.name = data.username;
var div = $("<div/>");
if (data.meta.addClass === "drink") {
div.addClass("drink");
data.meta.addClass = "";
}

if (USEROPTS.show_timestamps) {
var time = $("<span/>").addClass("timestamp").appendTo(div);
var timestamp = new Date(data.time).toTimeString().split(" ")[0];
time.text("["+timestamp+"] ");
if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
time.addClass(data.meta.addClass);
}
}
var name = $("<span/>");
if (!skip) {
name.appendTo(div);
}
$("<strong/>").addClass("username clr_" + data.username).text(data.username + ": ").css("color", stringToColour(data.username)).appendTo(name);
if (data.meta.modflair)
{
name.addClass(getNameColor(data.meta.modflair));
}
if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
name.addClass(data.meta.addClass);
}
if (data.meta.superadminflair) {
name.addClass("label")
.addClass(data.meta.superadminflair.labelclass);
$("<span/>").addClass(data.meta.superadminflair.icon)
.addClass("glyphicon")
.css("margin-right", "3px")
.prependTo(name);
}
var message = $("<span/>").appendTo(div);
message[0].innerHTML = data.msg;
if (data.meta.action) {
name.remove();
message[0].innerHTML = data.username + " " + data.msg;
}
if (data.meta.addClass) {
message.addClass(data.meta.addClass);
}
if (data.meta.shadow) {
div.addClass("chat-shadow");
}
div.find("img").load(function () {
if (SCROLLCHAT) {
scrollChat();
}
});
return div;
}
});
/***/ },
/* 35 */
/***/ function(module, exports) {

	window.cytubeEnhanced.getModule('extras').done(function (extraModules) {
	    extraModules.add({
	        title: 'NND-STYLE',
	        name: 'NND',
	        description: 'written by biggles- (github.com/deerfarce).',
	        url: 'https://dl.dropbox.com/s/j8gaat6vj1x9xbd/NND.js'
	    });
	});

/***/ },
/* 36 */
/***/ function(module, exports) {

	window.cytubeEnhanced.getModule('extras').done(function (extraModules) {
	    extraModules.add({
	        title: 'NND-STYLE',
	        name: 'NND',
	        description: 'written by biggles- (github.com/deerfarce).',
	        url: 'https://dl.dropbox.com/s/j8gaat6vj1x9xbd/NND.js'
	    });
	});

/***/ },
/* 37 */
/***/ function(module, exports) {

	window.cytubeEnhanced.getModule('extras').done(function (extraModules) {
	    extraModules.add({
	        title: 'NND-STYLE',
	        name: 'NND',
	        description: 'written by biggles- (github.com/deerfarce).',
	        url: 'https://dl.dropbox.com/s/j8gaat6vj1x9xbd/NND.js'
	    });
	});

/***/ },
/* 38 */
/***/ function(module, exports) {

	window.cytubeEnhanced.getModule('themes').done(function (extraModules) {
	    extraModules.add({
	        title: 'Default Theme',
	        name: 'default',
	        cssUrl: '//dl.dropbox.com/s/o0phwcb3gwqz6bl/default.css',
	        jsUrl: '//dl.dropbox.com/s/yj0jtegjyh9bhfq/default.js',
	        pictureUrl: 'https://dl.dropbox.com/s/mmhlxuh72l5ki7j/default.png'
	    });
	});

/***/ },
/* 39 */
/***/ function(module, exports) {

window.cytubeEnhanced.getModule('themes').done(function (extraModules) {
	    extraModules.add({
	        title: 'Halloween Theme',
	        name: 'Halloween',
	        cssUrl: '//dl.dropbox.com/s/sc2fswbaam8ufdx/Halloween.css',
	        jsUrl: '//dl.dropbox.com/s/suz857w35tq4ls4/halloween.js',
	        pictureUrl: 'https://dl.dropbox.com/s/znqvrttensso4l2/halloween.png'
	    });
	});

/***/ },
/* 40 */
/***/ function(module, exports) {

window.cytubeEnhanced.getModule('themes').done(function (extraModules) {
	    extraModules.add({
	        title: 'Lightweight Theme',
	        name: 'Lightweight',
	        cssUrl: '//dl.dropbox.com/s/yj4vgjz3prg67rt/Lightweight.css',
	        jsUrl: '//dl.dropbox.com/s/p3zgxkncy4hv42t/Lightweight.js',
	        pictureUrl: 'https://dl.dropbox.com/s/3en6bk2odxtk2tn/lightweight.png'
	    });
	});

/***/ },
/* 41 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('Colors', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);


var stringToColour = function(str) {

for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));

for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

return colour;
}

function formatChatMessage(data, last) {
if (!data.meta || data.msgclass) {
data.meta = {
addClass: data.msgclass,
addClassToNameAndTimestamp: data.msgclass
};
}
var skip = data.username === last.name;
if(data.meta.addClass === "server-whisper")
skip = true;
if(data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/))
skip = false;
if (data.meta.forceShowName)
skip = false;

data.msg = execEmotes(data.msg);

last.name = data.username;
var div = $("<div/>");
if (data.meta.addClass === "drink") {
div.addClass("drink");
data.meta.addClass = "";
}

if (USEROPTS.show_timestamps) {
var time = $("<span/>").addClass("timestamp").appendTo(div);
var timestamp = new Date(data.time).toTimeString().split(" ")[0];
time.text("["+timestamp+"] ");
if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
time.addClass(data.meta.addClass);
}
}
var name = $("<span/>");
if (!skip) {
name.appendTo(div);
}
$("<strong/>").addClass("username clr_" + data.username).text(data.username + ": ").css("color", stringToColour(data.username)).appendTo(name);
if (data.meta.modflair)
{
name.addClass(getNameColor(data.meta.modflair));
}
if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
name.addClass(data.meta.addClass);
}
if (data.meta.superadminflair) {
name.addClass("label")
.addClass(data.meta.superadminflair.labelclass);
$("<span/>").addClass(data.meta.superadminflair.icon)
.addClass("glyphicon")
.css("margin-right", "3px")
.prependTo(name);
}
var message = $("<span/>").appendTo(div);
message[0].innerHTML = data.msg;
if (data.meta.action) {
name.remove();
message[0].innerHTML = data.username + " " + data.msg;
}
if (data.meta.addClass) {
message.addClass(data.meta.addClass);
}
if (data.meta.shadow) {
div.addClass("chat-shadow");
}
div.find("img").load(function () {
if (SCROLLCHAT) {
scrollChat();
}
});
return div;
}
});

/***/ },
/* 42 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('Announcements', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);

$.getScript("https://dl.dropbox.com/s/h8kazctox05u2o7/cytube.js");

// adding custom channel announcement

if (UI_ChannelAnnouncement=="1") {
	ChannelAnnouncement_Title=="" ? ChannelAnnouncement_Title='Administration Message' : '';
	ChannelAnnouncement_HTML=="" ? ChannelAnnouncement_HTML='<i>no messages</i>' : '';
	makeAlert(ChannelAnnouncement_Title, ChannelAnnouncement_HTML).insertBefore("#motdrow");
}

// Ensure that UI_ChannelName is defined and set to 1 (as a string or number)
if (typeof UI_ChannelName !== 'undefined' && (UI_ChannelName === "1" || UI_ChannelName === 1)) {
    // Ensure ChannelName_Caption is defined and not empty
    if (typeof ChannelName_Caption !== 'undefined' && ChannelName_Caption !== "") {
        $(".navbar-brand").html(ChannelName_Caption);
    } else {
        console.warn('ChannelName_Caption is either undefined or empty.');
    }
} else {
    console.warn('UI_ChannelName is either undefined or not set to "1".');
}

if (typeof UI_Favicon !== 'undefined' && UI_Favicon === "1" && Favicon_URL !== "") {
	$(document).ready(function() {
		$('<link id="chanfavicon" href="'+Favicon_URL+'" type="image/x-icon" rel="shortcut icon" />')
		  .appendTo("head");
	});
}
	});

/***/ },

/* 43 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('Discord', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);


// Ensure that UI_Discord is defined and set to 1 (as a string or number)
if (typeof UI_Discord !== 'undefined' && (UI_Discord === "1" || UI_Discord === 1) && typeof Discord_URL !== 'undefined' && Discord_URL !== "") {
    $('head').append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/BillTube/BillTube2/discord.css' />");
    $("#motd").after("<div class='discordoverlay'><div class='discordmain'><img class='discord' src='//i.postimg.cc/J73Nn5nb/J6RTf6P.png' /><div class='discordtext'><h1>Join the community!</h1><h2><a href='" + Discord_URL + "' target='_blank'>" + Discord_NAME + "</a></h2></div><div class='Darrows Darrows-1'></div><div class='Darrows Darrows-2'></div></div></div>");
} else {
    console.warn('UI_Discord is either undefined, not set to 1, or Discord_URL is empty.');
}

});

/***/ },
/* 44 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('TabComplete', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);


$('#chatline').unbind('keydown',tabSuggestions || function(){});
var tabSuggestions = (function(){

    var chatline = document.getElementById('chatline'),
        suggestionsDiv = document.getElementById('suggestionsDiv') || document.createElement('div'),
        lastMatchNum = 0,
        lastMatch;
    suggestionsDiv.id = 'suggestionsDiv',
    suggestionsDiv.style.position = 'absolute',
    suggestionsDiv.style.zIndex = '999',
    chatline.parentNode.appendChild(suggestionsDiv)

    function emoteImg(emote){
        var i = document.createElement('img')
        i.className = 'channel-emote-small',
        i.src = emote.image,
        i.title = emote.name,
        i.onclick = function(e){
            clearBorders();
            chatline.value = chatline.value.replace(/\/[a-z0-9?!&]*$/i, emote.name),
            this.style.border = '2px solid white',
            chatline.focus();
            var i = 0, a = this;
            while (a = a.previousSibling) i++;
            lastMatchNum = i
        }
        return i
    }

    function clearBorders(){
        for (var i = 0; i < suggestionsDiv.children.length; i++)
            suggestionsDiv.children[i].style.border = 'none'
    }

    function levenshtein(a, b) {
      if (a.length === 0) return b.length
      if (b.length === 0) return a.length
      let tmp, i, j, prev, val, row
      // swap to save some memory O(min(a,b)) instead of O(a)
      if (a.length > b.length) {
        tmp = a
        a = b
        b = tmp
      }

      row = Array(a.length + 1)
      // init the row
      for (i = 0; i <= a.length; i++) {
        row[i] = i
      }

      // fill in the rest
      for (i = 1; i <= b.length; i++) {
        prev = i
        for (j = 1; j <= a.length; j++) {
          if (b[i - 1] === a[j - 1]) {
            val = row[j - 1] // match
          } else {
            val = Math.min(row[j - 1] + 1, // substitution
                  Math.min(prev + 1,     // insertion
                           row[j] + 1))  // deletion
          }
          row[j - 1] = prev
          prev = val
        }
        row[a.length] = prev
      }
      return row[a.length]
    }

    return function(e){
        if (e.keyCode != 9 && !e.shiftKey)
            suggestionsDiv.innerHTML = '',
            lastMatch = null
        else if (e.keyCode == 9){
            //emotes
            if (lastMatch) {
                //toggle matches
                if (Object.prototype.toString.call(lastMatch) === '[object Array]')
                    //usernames
                    chatline.value = chatline.value.replace(/[a-z0-9-]+$/i, lastMatch[++lastMatchNum % lastMatch.length])
                else
                    //emotes
                    e.shiftKey ? lastMatchNum = (--lastMatchNum + suggestionsDiv.children.length) % suggestionsDiv.children.length :
                    lastMatchNum = ++lastMatchNum % suggestionsDiv.children.length,
                    clearBorders(),suggestionsDiv.children[lastMatchNum] && suggestionsDiv.children[lastMatchNum].onclick()
            } else {

                var emoteStr = chatline.value.match(/\/[a-z0-9?!&]*$/i)
                if (emoteStr){
                    //show emotesuggestions
                    var emoteList = CHANNEL.emotes.slice(),
                        suggestions = []
                    //find matches based on levenshtein distance
                    emoteStr = emoteStr[0].replace(/\?/g,'\\?')
                    for (var i = 0, emoteStr_withoutslash = emoteStr.replace('/',''); i < emoteList.length; i++)
                        if (emoteList[i].name.match(emoteStr_withoutslash) || levenshtein(emoteStr, emoteList[i].name) < 3)
                            suggestions.push(new emoteImg(emoteList[i]))
                    //sort suggestions
                    suggestions.sort(function(a, b){
                        var indexofa = a.title.indexOf(emoteStr),
                            indexofb = b.title.indexOf(emoteStr)

                        if (indexofa === 0 && indexofb !== 0)
                            return -1
                        else if (indexofb === 0 && indexofa !== 0)
                            return 1
                        else {
                            //sort aphabetically with respect for numbers at the end
                            var i = 0;
                            while (a.title.charAt(i) === b.title.charAt(i) && i < a.title.length && i < b.title.length)
                                i++;
                            if (a.title.length !== b.title.length &&
                               (i == a.title.length - 1 || i == b.title.length - 1) &&
                               !isNaN(parseInt(a.title.charAt(i))) && !isNaN(parseInt(b.title.charAt(i))))
                                return a.title.charAt(i) < b.title.charAt(i) ? 1 : -1
                            return a.title.charAt(i) < b.title.charAt(i) ? -1 : 1
                        }
                    })
                    //populate suggestionsDiv
                    suggestionsDiv.innerHTML = ''
                    for (var i=0; i<suggestions.length; i++)
                        suggestionsDiv.appendChild(suggestions[i])
                    lastMatchNum = 0,
                    lastMatch = emoteStr,
                    suggestionsDiv.children[0] && (suggestionsDiv.children[0].style.border = '3px solid white') && suggestionsDiv.children[lastMatchNum].onclick()

                } else {
                    //usernames
                    var userStr = chatline.value.match(/[a-z0-9-]+$/i),
                        userlistElems = $('#userlist .userlist_item');//document.getElementById("userlist").children
                    lastMatch = [],
                    lastMatchNum = 0
                    for (var i = 0; i < userlistElems.length; i++)
                        if (userlistElems[i].children[1].textContent != CLIENT.name &&
                            userlistElems[i].children[1].textContent.match(new RegExp('^' + userStr, 'i')))
                            lastMatch.push(userlistElems[i].children[1].textContent);
                    if (lastMatch.length != 0)
                        chatline.value = chatline.value.replace(/[a-z0-9-]+$/i, lastMatch[0])
                    else
                        lastMatch = null
                }
            }
        }
    }
})()

chatTabComplete = function(){return false},
$("#chatline").keydown(tabSuggestions)
	});
/***/ },
/* 45 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('BGs', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);
		

// Check if BG_Stock is either undefined or set to "1" (as string or number)
if (typeof BG_Stock === 'undefined' || BG_Stock === "1" || BG_Stock === 1) {
    var BGPics1 = ['https://i.ibb.co/tH1T2kM/3z9lp6.jpg', 'https://i.ibb.co/zZBdvW1/8oxmr2.jpg', 'https://i.ibb.co/wMfkcQx/9m6owx.png', 'https://i.ibb.co/PhrtPSW/ox2yd5.jpg', 'https://i.ibb.co/5sjxgRV/j5k8vq.jpg', 'https://i.ibb.co/VDnK4Pv/1kj9y1.jpg', 'https://i.ibb.co/CJ3hjJv/4xg9zv.jpg'];
    randomHero();
    console.warn('hero1');
} else if (BG_Stock === "0" || BG_Stock === 0) { // Check for both string and numeric 0
    randomHero2();
    console.warn('hero2');
} else {
    console.warn('BG_Stock has an unexpected value: ', BG_Stock);
}

function randomHero() {
    // Implement the randomHero functionality here
    $("#wrap").css({
       'background' : 'url('+ BGPics1[Math.floor(Math.random() * BGPics1.length)] + ') no-repeat',
       'background-attachment' : 'scroll',
       'background-position' : '50% 50%',
       'background-size' : 'cover'
   });
}

function randomHero2() {
    // Implement the randomHero2 functionality here
    $("#wrap").css({
       'background' : 'url('+ BGPics[Math.floor(Math.random() * BGPics.length)] + ') no-repeat',
       'background-attachment' : 'scroll',
       'background-position' : '50% 50%',
       'background-size' : 'cover'
   });
}

});
/***/ },
/* 47 */
/***/ function(module, exports) {

//__webpack_require__(47);

window . cytubeEnhanced . getModule ( 'bbCodesHelper' ) . done ( function  ( commandsModule )  {

			/*
			Copyright Â© 2016 Benjamin Paul. All rights reserved.
			Edited to work with BillTube
			*/
			var GTMR = false;

			giphysearchbtn = $('<button id="giphysearch-btn" data-tooltip="Giphy" data-tooltip-pos="up" class="chatbtn"><i class="fa-solid fa-gif"></i></button>')
				.appendTo('#chat-controls')
				.on("click", function() {
					if (!GTMR) {
						injectGiphy();
						setTimeout(function() {
							$("#giphy_input").focus().val('');
						}, 250);
						GTMR = true;
						setTimeout(function() {
							GTMR = false;
						}, 1000);
					}
				});
				function clickPic() {
				outer.modal('hide');
				
			}

			DONTSPAMGIPHY = true;

			function getGiphy(p_oEvent) {
				p_oEvent.preventDefault();
				if (DONTSPAMGIPHY) {
					DONTSPAMGIPHY = false;
					setTimeout(function() {
						DONTSPAMGIPHY = true;
					}, 1000);
					$('.imagesearch').text('Searching...');
					$('#single').attr('src', '').attr('onclick', '').hide();
					$('.giphyimage').hide();
					$(".gforwardbutton").prop('disabled', true);
					$(".gbackbutton").prop('disabled', true);
					$(".gbackbutton").off('click');
					$(".gforwardbutton").off('click');
					$('.giphyimage').find('img').each(function() {
						$(this).attr('src', '');
						$(this).attr('onclick', '');
					});
					SINGLE = false;
					gifterm = $("#giphy_input").val();
					giff = encodeURIComponent(gifterm);
					if ($("#gifs").prop('checked')) {
						giftype = 'gifs';
					} else {
						giftype = 'stickers';
					}
					TRANSLATE = false;
					RANDOM = false;
					if (TRENDING) {
						searchtype = 'trending?limit=80';
					} else {
						if ($("#search").prop('checked')) {
							searchtype = 'search?q=' + giff + '&limit=100';
						} else if ($("#translate").prop('checked')) {
							searchtype = 'translate?s=' + giff;
							SINGLE = true;
							TRANSLATE = true;
						} else {
							searchtype = 'random?tag=' + giff;
							SINGLE = true;
							RANDOM = true;
						}
					}
					theurl = 'https://api.giphy.com/v1/' + giftype + '/' + searchtype + '&api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes';
					$.ajax({
						url: theurl,
						jsonp: 'callback',
						dataType: 'json',
						success: function(data) {
							console.log(data);
							imagedata = data.data;
							if (imagedata !== undefined) {
								//onclick="insertText(\'' + imageid + '.pic \');clickPic()" src="' + imageid + '"
								if (SINGLE) {
								$('.imagesearch').text('"' + gifterm + '"');
									if (TRANSLATE) {
										$("#single").attr('src', imagedata.images.original.url).attr('onclick', 'insertText(\'' + imagedata.images.original.url + ' \');clickPic()').show();
									} else {
										$("#single").attr('src', imagedata.image_url).attr('onclick', 'insertText(\'' + imagedata.image_url + ' \');clickPic()').show();
									}
								} else {
									if (TRENDING) {
										gifterm = '';
									} else {
										gifterm = ' "' + gifterm + '"';
									}
									offset = 0;
									imagelength = imagedata.length;
									$('.giphyimage').show();
									$('.imagesearch').text('Showing' + gifterm + ' 1-9 of 100');
									for (var gip = 0; gip < 9; gip++) {
										if (imagedata[gip] !== undefined) {
											imageurl = imagedata[gip].images.original.url;
											if (imagedata[gip].images.fixed_width.width === '200' && parseInt(imagedata[gip].images.fixed_height.height) <= 200) {
												fixed = imagedata[gip].images.fixed_width.url;
											} else {
												fixed = imagedata[gip].images.fixed_height.url;
											}
											if (fixed === '') {
												fixed = imagedata[gip].images.original.url;
												/*if (imagedata[gip].images.fixed_width.width === '200' && parseInt(imagedata[gip].images.fixed_height.height) <= 200) {
													fixed = imagedata[gip].images.fixed_width.url;
												} else {
													fixed = imagedata[gip].images.fixed_height.url;
												}*/
											}
											$('.giphyimage').find('img').eq(gip).attr('onclick', 'insertText(\'' + imageurl + ' \');clickPic()').attr('src', fixed);
										}
										if (gip === 8) {
											offset += gip + 1;
											if (imagelength > offset) {
												$(".gforwardbutton").prop('disabled', false);
											}
										}
									}
									$(".gforwardbutton").click(function() {
										$('.giphyimage').find('img').each(function() {
											$(this).attr('src', '');
											$(this).attr('onclick', '');
										});
										$('.imagesearch').text('Showing' + gifterm + ' ' + offset + '-' + (offset + 9) + ' of 99');
										for (var fgip = 0; fgip < 9; fgip++) {
											if (imagedata[fgip + offset] !== undefined) {
												imageurl = imagedata[fgip + offset].images.original.url;
												if (imagedata[fgip + offset].images.fixed_width.width === '200' && parseInt(imagedata[fgip + offset].images.fixed_height.height) <= 200) {
													fixed = imagedata[fgip + offset].images.fixed_width.url;
												} else {
													fixed = imagedata[fgip + offset].images.fixed_height.url;
												}
												if (fixed === '') {
													fixed = imagedata[gip].images.original.url;
													/*if (imagedata[fgip + offset].images.fixed_width.width === '200' && parseInt(imagedata[fgip + offset].images.fixed_height.height) <= 200) {
														fixed = imagedata[fgip + offset].images.fixed_width.url;
													} else {
														fixed = imagedata[fgip + offset].images.fixed_height.url;
													}*/
												}
												$('.giphyimage').find('img').eq(fgip).attr('onclick', 'insertText(\'' + imageurl + ' \');clickPic()').attr('src', fixed);
												
											}
											if (fgip === 8) {
												offset += fgip + 1;
												if (imagelength > offset) {
													$(".gforwardbutton").prop('disabled', false);
												} else {
													$(".gforwardbutton").prop('disabled', true);
												}
											}
										}
										$(".gbackbutton").prop('disabled', false);
									});
									$(".gbackbutton").click(function() {
										$('.giphyimage').find('img').each(function() {
											$(this).attr('src', '');
											$(this).attr('onclick', '');
										});
										$('.imagesearch').text('Showing' + gifterm + ' ' + (offset - 18) + '-' + (offset - 9) + ' of 99');
										for (var ggip = 0; ggip < 9; ggip++) {
											if (imagedata[ggip + offset - 18] !== undefined) {
												imageurl = imagedata[ggip + offset - 18].images.original.url;
												if (imagedata[ggip + offset - 18].images.fixed_width.width === '200' && parseInt(imagedata[ggip + offset - 18].images.fixed_height.height) <= 200) {
													fixed = imagedata[ggip + offset - 18].images.fixed_width.url;
												} else {
													fixed = imagedata[ggip + offset - 18].images.fixed_height.url;
												}
												if (fixed === '') {
													fixed = imagedata[ggip + offset - 18].images.original.url;
													/*if (imagedata[ggip + offset - 18].images.fixed_width.width === '200' && parseInt(imagedata[ggip + offset - 18].images.fixed_height.height) <= 200) {
														fixed = imagedata[ggip + offset - 18].images.fixed_width.url;
													} else {
														fixed = imagedata[ggip + offset - 18].images.fixed_height.url;
													}*/
												}
												$('.giphyimage').find('img').eq(ggip).attr('onclick', 'insertText(\'' + imageurl + ' \');clickPic()').attr('src', fixed);
												
											}
											if (ggip === 8) {
												offset -= ggip + 1;
												if (offset > 9) {
													$(".gbackbutton").prop('disabled', false);
												} else {
													$(".gbackbutton").prop('disabled', true);
												}
											}
										}
										$(".gforwardbutton").prop('disabled', false);
									});
								}
							} else {
								$('.imagesearch').text('Error: Not found.');
							}
						},
						error: function(data) {
							console.log(data);
							$('.imagesearch').text('Connection Error: Try again later.');
						}
					});
				}
			}
			function injectGiphy() {
				createTemp('Giphy Gifs');
				body.append('<div id="giphy_wrap" class="form-group"><span id="giphy_search"></span></div>');
				$('<div id="giphy_window" style="min-height:550px" class="col-lg-12 col-md-12">' +
					'<center style="height:45px"><span style="float:left">' +
					'<label class="checkbox-inline"><input type="checkbox" id="gifs" class="gifoption" value="no" checked> Gifs</label>' +
					'<label class="checkbox-inline"><input type="checkbox" id="stickers" class="gifoption" value="no"> Stickers</label>' +
					'</span><span>' +
					'<label class="checkbox-inline"><input type="checkbox" id="search" class="searchoption" value="no" checked> Search</label>' +
					'<label class="checkbox-inline"><input type="checkbox" id="translate" class="searchoption" value="no"> Single</label>' +
					'<label class="checkbox-inline"><input type="checkbox" id="random" class="searchoption" value="no"> Random</label>' +
					'</span><button style="float:right padding: 1px 6px;" class="Trendingbutton" id="trending">Trending</button></center>' +
					'<div style="height:40px"><center><button style="float:left;margin:5px 0 5px 0;" class="btn btn-sm btn-default gbackbutton fal fa-arrow-left" disabled></button><span class="text-info imagesearch"></span><button style="float:right;margin:5px 0 5px 0;" class="btn btn-sm btn-default gforwardbutton fal fa-arrow-right" disabled></button></center></div>' +
					'<center><img id="single" style="cursor:pointer;max-width:500px;max-height:500px;display:none"/></center>' +
					'<center><span style="max-height:100%;display:none" class="giphyimage">' +
					'<img class="GiphyCell"/><img class="GiphyCell"/><img class="GiphyCell"/><img class="GiphyCell"/>' +
					'<img class="GiphyCell"/><img class="GiphyCell"/><img class="GiphyCell"/><img class="GiphyCell"/>' +
					'<img class="GiphyCell"/>' +
					'</span></center></div>').appendTo("#giphy_wrap");
				$("#giphy_search").html('<form id="giphy_query"><label style="display: block;"><input id="giphy_input" type="text" placeholder="Search GIPHY" style="" maxlength="240" class="form-control"></input></label></form>');
				$("#giphy_window").find('.gifoption').each(function() {
					$(this).click(function() {
						$('.gifoption').prop('checked', false);
						$(this).prop('checked', true);
					});
				});
				$("#giphy_window").find('.searchoption').each(function() {
					$(this).click(function() {
						$('.searchoption').prop('checked', false);
						$(this).prop('checked', true);
					});
				});
				$("body").css('overflow', 'hidden');
				outer.on("hidden.bs.modal", function() {
					outer.remove();
					$("body").css('overflow', 'auto');
					scrollChat();
				});
				$('#giphy_query').on('submit', function(p_oEvent) {
					if ($('#giphy_input').val() === '') {
						return;
					}
					TRENDING = false;
					getGiphy(p_oEvent);
				});
				$('#trending').click(function(p_oEvent) {
					TRENDING = true;
					getGiphy(p_oEvent);
				});
			}

	});
//let the gifs play on hover!

$('#messagebuffer').on('mouseenter', '.giphy', function() {
  jQuery(this).attr('src', jQuery(this).attr('src').replace("200_s.gif", "giphy.gif"));
}).on('mouseleave', '.giphy', function() {
   jQuery(this).attr('src', jQuery(this).attr('src').replace("giphy.gif", "200_s.gif"));
});

$(document).ready(function() {
    // Function to add the favorite button to images
    function addFavoriteButtonToImages() {
        // Find all images with the class "chat-picture" or "channel-emote" inside the "messagebuffer"
        $('#messagebuffer .chat-picture, #messagebuffer .channel-emote').each(function() {
            var $img = $(this);
            // Check if the button has already been added to avoid duplicates
            if ($img.parent().find('.chat-img-btn').length === 0) {
                // Create a small button with a tooltip that says "Favorite"
                var $button = $('<button class="chat-img-btn-fav" title="Favorite" style="position:absolute; top:1px; right:1px; opacity:0.4; background:transparent; border:none; color:white;">⭐</button>');
                
                // Position the image parent relative for absolute positioning
                $img.wrap('<div style="position:relative; display:inline-block;"></div>');
                // Append the button to the image's parent container
                $img.parent().append($button);
                
                // Add click handler for the button
                $button.on('click', function() {
                    // Get the image URL
                    var imageUrl = $img.attr('src');
                    
                    // Paste the image URL into the textbox with ID "picture-address"
                    $('#picture-address').val(imageUrl);
                    
                    // Trigger the submission by clicking the button with ID "add-picture-btn"
                    $('#add-picture-btn').click();
                    
                    // Disable the button to ensure the action is only performed once per image
                    $button.prop('disabled', true);
                });
            }
        });
    }

    // Add favorite button on page load
    addFavoriteButtonToImages();

    // Listen for new chat messages and add the button to new images
    socket.on('chatMsg', function(data) {
        // Delay to ensure the message is added to the DOM
        setTimeout(function() {
            addFavoriteButtonToImages();
        }, 100); // Small delay to ensure the DOM is updated
    });
});

/***/ },
/* 48 */
/***/ function(module, exports) {

/***RequestList***/
window.cytubeEnhanced.addModule('RequestList', function (app, settings) {
	    'use strict';
	    var that = this;
	    this.handleAddVideoBtn = function (commands) {
	        var $header = $('<h3 class="modal-title">').text('iframe');
	        var $bodyWrapper = $('<center></center>');
	        app.UI.createModalWindow('request-list', $header, $bodyWrapper);
	    };
	    this.$AddVideoBtn = $('')
	        .text(app.t(''))
	        .appendTo('#chat-controls')
	        .on('click', function () {
	            that.handleAddVideoBtn(that.commands);
	        });


	});

/***/ },
/* 49 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('AdvancedMOTD', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);

if (window.CLIENT.rank >= 3) {

!function(V){"use strict";var o=function(){},H=function(n,r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n(r.apply(null,e))}},q=function(e){return function(){return e}},$=function(e){return e};function d(r){for(var o=[],e=1;e<arguments.length;e++)o[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o.concat(e);return r.apply(null,n)}}var e,t,n,r,i,a,u,s,c,l,f,m,g,p,h,v,y=function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return!n.apply(null,e)}},b=q(!1),C=q(!0),x=function(){return w},w=(e=function(e){return e.isNone()},r={fold:function(e,t){return e()},is:b,isSome:b,isNone:C,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:q(null),getOrUndefined:q(undefined),or:n,orThunk:t,map:x,each:o,bind:x,exists:b,forall:C,filter:x,equals:e,equals_:e,toArray:function(){return[]},toString:q("none()")},Object.freeze&&Object.freeze(r),r),N=function(n){var e=q(n),t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:C,isNone:b,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return N(e(n))},each:function(e){e(n)},bind:r,exists:r,forall:r,filter:function(e){return e(n)?o:w},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(b,function(e){return t(n,e)})}};return o},_={some:N,none:x,from:function(e){return null===e||e===undefined?w:N(e)}},E=function(t){return function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t}(e)===t}},S=E("string"),T=E("object"),k=E("array"),A=E("null"),R=E("boolean"),D=E("function"),O=E("number"),B=Array.prototype.slice,P=Array.prototype.indexOf,I=Array.prototype.push,L=function(e,t){return P.call(e,t)},F=function(e,t){return-1<L(e,t)},M=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0;return!1},W=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o)}return r},z=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},K=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a,o)?n:r).push(a)}return{pass:n,fail:r}},U=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r];t(i,r)&&n.push(i)}return n},j=function(e,t,n){return z(e,function(e){n=t(n,e)}),n},X=function(e,t){for(var n=0,r=e.length;n<r;n++){var o=e[n];if(t(o,n))return _.some(o)}return _.none()},Y=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return _.some(n);return _.none()},G=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!k(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);I.apply(t,e[n])}return t}(W(e,t))},J=function(e,t){for(var n=0,r=e.length;n<r;++n)if(!0!==t(e[n],n))return!1;return!0},Q=function(e,t){return U(e,function(e){return!F(t,e)})},Z=function(e){return 0===e.length?_.none():_.some(e[0])},ee=function(e){return 0===e.length?_.none():_.some(e[e.length-1])},te=D(Array.from)?Array.from:function(e){return B.call(e)},ne="undefined"!=typeof V.window?V.window:Function("return this;")(),re=function(e,t){return function(e,t){for(var n=t!==undefined&&null!==t?t:ne,r=0;r<e.length&&n!==undefined&&null!==n;++r)n=n[e[r]];return n}(e.split("."),t)},oe={getOrDie:function(e,t){var n=re(e,t);if(n===undefined||null===n)throw new Error(e+" not available on this browser");return n}},ie=function(){return oe.getOrDie("URL")},ae={createObjectURL:function(e){return ie().createObjectURL(e)},revokeObjectURL:function(e){ie().revokeObjectURL(e)}},ue=V.navigator,se=ue.userAgent,ce=function(e){return"matchMedia"in V.window&&V.matchMedia(e).matches};m=/Android/.test(se),a=(a=!(i=/WebKit/.test(se))&&/MSIE/gi.test(se)&&/Explorer/gi.test(ue.appName))&&/MSIE (\w+)\./.exec(se)[1],u=-1!==se.indexOf("Trident/")&&(-1!==se.indexOf("rv:")||-1!==ue.appName.indexOf("Netscape"))&&11,s=-1!==se.indexOf("Edge/")&&!a&&!u&&12,a=a||u||s,c=!i&&!u&&/Gecko/.test(se),l=-1!==se.indexOf("Mac"),f=/(iPad|iPhone)/.test(se),g="FormData"in V.window&&"FileReader"in V.window&&"URL"in V.window&&!!ae.createObjectURL,p=ce("only screen and (max-device-width: 480px)")&&(m||f),h=ce("only screen and (min-width: 800px)")&&(m||f),v=-1!==se.indexOf("Windows Phone"),s&&(i=!1);var le,fe={opera:!1,webkit:i,ie:a,gecko:c,mac:l,iOS:f,android:m,contentEditable:!f||g||534<=parseInt(se.match(/AppleWebKit\/(\d*)/)[1],10),transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!==a,range:V.window.getSelection&&"Range"in V.window,documentMode:a&&!s?V.document.documentMode||7:10,fileApi:g,ceFalse:!1===a||8<a,cacheSuffix:null,container:null,overrideViewPort:null,experimentalShadowDom:!1,canHaveCSP:!1===a||11<a,desktop:!p&&!h,windowsPhone:v},de=window.Promise?window.Promise:function(){function r(e,t){return function(){e.apply(t,arguments)}}var e=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=function(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,r(o,this),r(u,this))},t=i.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)};function a(r){var o=this;null!==this._state?t(function(){var e=o._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(o._value)}catch(n){return void r.reject(n)}r.resolve(t)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(r(t,e),r(o,this),r(u,this))}this._state=!0,this._value=e,s.call(this)}catch(n){u.call(this,n)}}function u(e){this._state=!1,this._value=e,s.call(this)}function s(){for(var e=0,t=this._deferreds.length;e<t;e++)a.call(this,this._deferreds[e]);this._deferreds=null}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(o){if(r)return;r=!0,n(o)}}return i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(n,r){var o=this;return new i(function(e,t){a.call(o,new c(n,r,e,t))})},i.all=function(){var s=Array.prototype.slice.call(1===arguments.length&&e(arguments[0])?arguments[0]:arguments);return new i(function(o,i){if(0===s.length)return o([]);var a=s.length;function u(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){u(t,e)},i)}s[t]=e,0==--a&&o(s)}catch(r){i(r)}}for(var e=0;e<s.length;e++)u(e,s[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i}(),me=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},ge=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},pe=function(t,n){var r,e;return(e=function(){var e=arguments;clearTimeout(r),r=me(function(){t.apply(this,e)},n)}).stop=function(){clearTimeout(r)},e},he={requestAnimationFrame:function(e,t){le?le.then(e):le=new de(function(e){t||(t=V.document.body),function(e,t){var n,r=V.window.requestAnimationFrame,o=["ms","moz","webkit"];for(n=0;n<o.length&&!r;n++)r=V.window[o[n]+"RequestAnimationFrame"];r||(r=function(e){V.window.setTimeout(e,0)}),r(e,t)}(e,t)}).then(e)},setTimeout:me,setInterval:ge,setEditorTimeout:function(e,t,n){return me(function(){e.removed||t()},n)},setEditorInterval:function(e,t,n){var r;return r=ge(function(){e.removed?clearInterval(r):t()},n)},debounce:pe,throttle:pe,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}},ve=/^(?:mouse|contextmenu)|click/,ye={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1},be=function(){return!1},Ce=function(){return!0},xe=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},we=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},Ne=function(e,t){var n,r,o=t||{};for(n in e)ye[n]||(o[n]=e[n]);if(o.target||(o.target=o.srcElement||V.document),fe.experimentalShadowDom&&(o.target=function(e,t){if(e.composedPath){var n=e.composedPath();if(n&&0<n.length)return n[0]}return t}(e,o.target)),e&&ve.test(e.type)&&e.pageX===undefined&&e.clientX!==undefined){var i=o.target.ownerDocument||V.document,a=i.documentElement,u=i.body;o.pageX=e.clientX+(a&&a.scrollLeft||u&&u.scrollLeft||0)-(a&&a.clientLeft||u&&u.clientLeft||0),o.pageY=e.clientY+(a&&a.scrollTop||u&&u.scrollTop||0)-(a&&a.clientTop||u&&u.clientTop||0)}return o.preventDefault=function(){o.isDefaultPrevented=Ce,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},o.stopPropagation=function(){o.isPropagationStopped=Ce,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},!(o.stopImmediatePropagation=function(){o.isImmediatePropagationStopped=Ce,o.stopPropagation()})==((r=o).isDefaultPrevented===Ce||r.isDefaultPrevented===be)&&(o.isDefaultPrevented=be,o.isPropagationStopped=be,o.isImmediatePropagationStopped=be),"undefined"==typeof o.metaKey&&(o.metaKey=!1),o},Ee=function(e,t,n){var r=e.document,o={type:"ready"};if(n.domLoaded)t(o);else{var i=function(){return"complete"===r.readyState||"interactive"===r.readyState&&r.body},a=function(){n.domLoaded||(n.domLoaded=!0,t(o))},u=function(){i()&&(we(r,"readystatechange",u),a())},s=function(){try{r.documentElement.doScroll("left")}catch(e){return void he.setTimeout(s)}a()};!r.addEventListener||fe.ie&&fe.ie<11?(xe(r,"readystatechange",u),r.documentElement.doScroll&&e.self===e.top&&s()):i()?a():xe(e,"DOMContentLoaded",a),xe(e,"load",a)}},Se=function(){var m,g,p,h,v,y=this,b={};g="mce-data-"+(+new Date).toString(32),h="onmouseenter"in V.document.documentElement,p="onfocusin"in V.document.documentElement,v={mouseenter:"mouseover",mouseleave:"mouseout"},m=1,y.domLoaded=!1,y.events=b;var C=function(e,t){var n,r,o,i,a=b[t];if(n=a&&a[e.type])for(r=0,o=n.length;r<o;r++)if((i=n[r])&&!1===i.func.call(i.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return};y.bind=function(e,t,n,r){var o,i,a,u,s,c,l,f=V.window,d=function(e){C(Ne(e||f.event),o)};if(e&&3!==e.nodeType&&8!==e.nodeType){for(e[g]?o=e[g]:(o=m++,e[g]=o,b[o]={}),r=r||e,a=(t=t.split(" ")).length;a--;)c=d,s=l=!1,"DOMContentLoaded"===(u=t[a])&&(u="ready"),y.domLoaded&&"ready"===u&&"complete"===e.readyState?n.call(r,Ne({type:u})):(h||(s=v[u])&&(c=function(e){var t,n;if(t=e.currentTarget,(n=e.relatedTarget)&&t.contains)n=t.contains(n);else for(;n&&n!==t;)n=n.parentNode;n||((e=Ne(e||f.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,C(e,o))}),p||"focusin"!==u&&"focusout"!==u||(l=!0,s="focusin"===u?"focus":"blur",c=function(e){(e=Ne(e||f.event)).type="focus"===e.type?"focusin":"focusout",C(e,o)}),(i=b[o][u])?"ready"===u&&y.domLoaded?n({type:u}):i.push({func:n,scope:r}):(b[o][u]=i=[{func:n,scope:r}],i.fakeName=s,i.capture=l,i.nativeHandler=c,"ready"===u?Ee(e,c,y):xe(e,s||u,c,l)));return e=i=0,n}},y.unbind=function(e,t,n){var r,o,i,a,u,s;if(!e||3===e.nodeType||8===e.nodeType)return y;if(r=e[g]){if(s=b[r],t){for(i=(t=t.split(" ")).length;i--;)if(o=s[u=t[i]]){if(n)for(a=o.length;a--;)if(o[a].func===n){var c=o.nativeHandler,l=o.fakeName,f=o.capture;(o=o.slice(0,a).concat(o.slice(a+1))).nativeHandler=c,o.fakeName=l,o.capture=f,s[u]=o}n&&0!==o.length||(delete s[u],we(e,o.fakeName||u,o.nativeHandler,o.capture))}}else{for(u in s)o=s[u],we(e,o.fakeName||u,o.nativeHandler,o.capture);s={}}for(u in s)return y;delete b[r];try{delete e[g]}catch(d){e[g]=null}}return y},y.fire=function(e,t,n){var r;if(!e||3===e.nodeType||8===e.nodeType)return y;for((n=Ne(null,n)).type=t,n.target=e;(r=e[g])&&C(n,r),(e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow)&&!n.isPropagationStopped(););return y},y.clean=function(e){var t,n,r=y.unbind;if(!e||3===e.nodeType||8===e.nodeType)return y;if(e[g]&&r(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(r(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[g]&&r(e);return y},y.destroy=function(){b={}},y.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}};Se.Event=new Se,Se.Event.bind(V.window,"ready",function(){});var Te,ke,_e,Ae,Re,De,Oe,Be,Pe,Ie,Le,Fe,Me,ze,Ue,je,Ve,He,qe="sizzle"+-new Date,$e=V.window.document,We=0,Ke=0,Xe=Tt(),Ye=Tt(),Ge=Tt(),Je=function(e,t){return e===t&&(Le=!0),0},Qe=typeof undefined,Ze={}.hasOwnProperty,et=[],tt=et.pop,nt=et.push,rt=et.push,ot=et.slice,it=et.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},at="[\\x20\\t\\r\\n\\f]",ut="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",st="\\["+at+"*("+ut+")(?:"+at+"*([*^$|!~]?=)"+at+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ut+"))|)"+at+"*\\]",ct=":("+ut+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+st+")*)|.*)\\)|)",lt=new RegExp("^"+at+"+|((?:^|[^\\\\])(?:\\\\.)*)"+at+"+$","g"),ft=new RegExp("^"+at+"*,"+at+"*"),dt=new RegExp("^"+at+"*([>+~]|"+at+")"+at+"*"),mt=new RegExp("="+at+"*([^\\]'\"]*?)"+at+"*\\]","g"),gt=new RegExp(ct),pt=new RegExp("^"+ut+"$"),ht={ID:new RegExp("^#("+ut+")"),CLASS:new RegExp("^\\.("+ut+")"),TAG:new RegExp("^("+ut+"|[*])"),ATTR:new RegExp("^"+st),PSEUDO:new RegExp("^"+ct),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+at+"*(even|odd|(([+-]|)(\\d*)n|)"+at+"*(?:([+-]|)"+at+"*(\\d+)|))"+at+"*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^"+at+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+at+"*((?:-\\d)?\\d*)"+at+"*\\)|)(?=[^-]|$)","i")},vt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,bt=/^[^{]+\{\s*\[native \w/,Ct=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xt=/[+~]/,wt=/'|\\/g,Nt=new RegExp("\\\\([\\da-f]{1,6}"+at+"?|("+at+")|.)","ig"),Et=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{rt.apply(et=ot.call($e.childNodes),$e.childNodes),et[$e.childNodes.length].nodeType}catch(iE){rt={apply:et.length?function(e,t){nt.apply(e,ot.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var St=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m;if((t?t.ownerDocument||t:$e)!==Me&&Fe(t),n=n||[],!e||"string"!=typeof e)return n;if(1!==(u=(t=t||Me).nodeType)&&9!==u)return[];if(Ue&&!r){if(o=Ct.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n;if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&He(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return rt.apply(n,t.getElementsByTagName(e)),n;if((a=o[3])&&ke.getElementsByClassName)return rt.apply(n,t.getElementsByClassName(a)),n}if(ke.qsa&&(!je||!je.test(e))){if(f=l=qe,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(c=De(e),(l=t.getAttribute("id"))?f=l.replace(wt,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",s=c.length;s--;)c[s]=f+Pt(c[s]);d=xt.test(e)&&Ot(t.parentNode)||t,m=c.join(",")}if(m)try{return rt.apply(n,d.querySelectorAll(m)),n}catch(g){}finally{l||t.removeAttribute("id")}}}return Be(e.replace(lt,"$1"),t,n,r)};function Tt(){var r=[];return function e(t,n){return r.push(t+" ")>_e.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function kt(e){return e[qe]=!0,e}function _t(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function At(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function Rt(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function Dt(a){return kt(function(i){return i=+i,kt(function(e,t){for(var n,r=a([],e.length,i),o=r.length;o--;)e[n=r[o]]&&(e[n]=!(t[n]=e[n]))})})}function Ot(e){return e&&typeof e.getElementsByTagName!==Qe&&e}for(Te in ke=St.support={},Re=St.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},Fe=St.setDocument=function(e){var t,s=e?e.ownerDocument||e:$e,n=s.defaultView;return s!==Me&&9===s.nodeType&&s.documentElement?(ze=(Me=s).documentElement,Ue=!Re(s),n&&n!==function(e){try{return e.top}catch(t){}return null}(n)&&(n.addEventListener?n.addEventListener("unload",function(){Fe()},!1):n.attachEvent&&n.attachEvent("onunload",function(){Fe()})),ke.attributes=!0,ke.getElementsByTagName=!0,ke.getElementsByClassName=bt.test(s.getElementsByClassName),ke.getById=!0,_e.find.ID=function(e,t){if(typeof t.getElementById!==Qe&&Ue){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},_e.filter.ID=function(e){var t=e.replace(Nt,Et);return function(e){return e.getAttribute("id")===t}},_e.find.TAG=ke.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Qe)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},_e.find.CLASS=ke.getElementsByClassName&&function(e,t){if(Ue)return t.getElementsByClassName(e)},Ve=[],je=[],ke.disconnectedMatch=!0,je=je.length&&new RegExp(je.join("|")),Ve=Ve.length&&new RegExp(Ve.join("|")),t=bt.test(ze.compareDocumentPosition),He=t||bt.test(ze.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Je=t?function(e,t){if(e===t)return Le=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!ke.sortDetached&&t.compareDocumentPosition(e)===n?e===s||e.ownerDocument===$e&&He($e,e)?-1:t===s||t.ownerDocument===$e&&He($e,t)?1:Ie?it.call(Ie,e)-it.call(Ie,t):0:4&n?-1:1)}:function(e,t){if(e===t)return Le=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,a=[e],u=[t];if(!o||!i)return e===s?-1:t===s?1:o?-1:i?1:Ie?it.call(Ie,e)-it.call(Ie,t):0;if(o===i)return _t(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;a[r]===u[r];)r++;return r?_t(a[r],u[r]):a[r]===$e?-1:u[r]===$e?1:0},s):Me},St.matches=function(e,t){return St(e,null,null,t)},St.matchesSelector=function(e,t){if((e.ownerDocument||e)!==Me&&Fe(e),t=t.replace(mt,"='$1']"),ke.matchesSelector&&Ue&&(!Ve||!Ve.test(t))&&(!je||!je.test(t)))try{var n=(void 0).call(e,t);if(n||ke.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(iE){}return 0<St(t,Me,null,[e]).length},St.contains=function(e,t){return(e.ownerDocument||e)!==Me&&Fe(e),He(e,t)},St.attr=function(e,t){(e.ownerDocument||e)!==Me&&Fe(e);var n=_e.attrHandle[t.toLowerCase()],r=n&&Ze.call(_e.attrHandle,t.toLowerCase())?n(e,t,!Ue):undefined;return r!==undefined?r:ke.attributes||!Ue?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},St.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},St.uniqueSort=function(e){var t,n=[],r=0,o=0;if(Le=!ke.detectDuplicates,Ie=!ke.sortStable&&e.slice(0),e.sort(Je),Le){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return Ie=null,e},Ae=St.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=Ae(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=Ae(t);return n},(_e=St.selectors={cacheLength:50,createPseudo:kt,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Nt,Et),e[3]=(e[3]||e[4]||e[5]||"").replace(Nt,Et),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||St.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&St.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&gt.test(n)&&(t=De(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Nt,Et).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Xe[e+" "];return t||(t=new RegExp("(^|"+at+")"+e+"("+at+"|$)"))&&Xe(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Qe&&e.getAttribute("class")||"")})},ATTR:function(n,r,o){return function(e){var t=St.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===o:"!="===r?t!==o:"^="===r?o&&0===t.indexOf(o):"*="===r?o&&-1<t.indexOf(o):"$="===r?o&&t.slice(-o.length)===o:"~="===r?-1<(" "+t+" ").indexOf(o):"|="===r&&(t===o||t.slice(0,o.length+1)===o+"-"))}},CHILD:function(m,e,t,g,p){var h="nth"!==m.slice(0,3),v="last"!==m.slice(-4),y="of-type"===e;return 1===g&&0===p?function(e){return!!e.parentNode}:function(e,t,n){var r,o,i,a,u,s,c=h!==v?"nextSibling":"previousSibling",l=e.parentNode,f=y&&e.nodeName.toLowerCase(),d=!n&&!y;if(l){if(h){for(;c;){for(i=e;i=i[c];)if(y?i.nodeName.toLowerCase()===f:1===i.nodeType)return!1;s=c="only"===m&&!s&&"nextSibling"}return!0}if(s=[v?l.firstChild:l.lastChild],v&&d){for(u=(r=(o=l[qe]||(l[qe]={}))[m]||[])[0]===We&&r[1],a=r[0]===We&&r[2],i=u&&l.childNodes[u];i=++u&&i&&i[c]||(a=u=0)||s.pop();)if(1===i.nodeType&&++a&&i===e){o[m]=[We,u,a];break}}else if(d&&(r=(e[qe]||(e[qe]={}))[m])&&r[0]===We)a=r[1];else for(;(i=++u&&i&&i[c]||(a=u=0)||s.pop())&&((y?i.nodeName.toLowerCase()!==f:1!==i.nodeType)||!++a||(d&&((i[qe]||(i[qe]={}))[m]=[We,a]),i!==e)););return(a-=p)===g||a%g==0&&0<=a/g}}},PSEUDO:function(e,i){var t,a=_e.pseudos[e]||_e.setFilters[e.toLowerCase()]||St.error("unsupported pseudo: "+e);return a[qe]?a(i):1<a.length?(t=[e,e,"",i],_e.setFilters.hasOwnProperty(e.toLowerCase())?kt(function(e,t){for(var n,r=a(e,i),o=r.length;o--;)e[n=it.call(e,r[o])]=!(t[n]=r[o])}):function(e){return a(e,0,t)}):a}},pseudos:{not:kt(function(e){var r=[],o=[],u=Oe(e.replace(lt,"$1"));return u[qe]?kt(function(e,t,n,r){for(var o,i=u(e,null,r,[]),a=e.length;a--;)(o=i[a])&&(e[a]=!(t[a]=o))}):function(e,t,n){return r[0]=e,u(r,null,n,o),!o.pop()}}),has:kt(function(t){return function(e){return 0<St(t,e).length}}),contains:kt(function(t){return t=t.replace(Nt,Et),function(e){return-1<(e.textContent||e.innerText||Ae(e)).indexOf(t)}}),lang:kt(function(n){return pt.test(n||"")||St.error("unsupported lang: "+n),n=n.replace(Nt,Et).toLowerCase(),function(e){var t;do{if(t=Ue?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=V.window.location&&V.window.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===ze},focus:function(e){return e===Me.activeElement&&(!Me.hasFocus||Me.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!_e.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return vt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:Dt(function(){return[0]}),last:Dt(function(e,t){return[t-1]}),eq:Dt(function(e,t,n){return[n<0?n+t:n]}),even:Dt(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:Dt(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:Dt(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:Dt(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=_e.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_e.pseudos[Te]=At(Te);for(Te in{submit:!0,reset:!0})_e.pseudos[Te]=Rt(Te);function Bt(){}function Pt(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function It(a,e,t){var u=e.dir,s=t&&"parentNode"===u,c=Ke++;return e.first?function(e,t,n){for(;e=e[u];)if(1===e.nodeType||s)return a(e,t,n)}:function(e,t,n){var r,o,i=[We,c];if(n){for(;e=e[u];)if((1===e.nodeType||s)&&a(e,t,n))return!0}else for(;e=e[u];)if(1===e.nodeType||s){if((r=(o=e[qe]||(e[qe]={}))[u])&&r[0]===We&&r[1]===c)return i[2]=r[2];if((o[u]=i)[2]=a(e,t,n))return!0}}}function Lt(o){return 1<o.length?function(e,t,n){for(var r=o.length;r--;)if(!o[r](e,t,n))return!1;return!0}:o[0]}function Ft(e,t,n,r,o){for(var i,a=[],u=0,s=e.length,c=null!=t;u<s;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),c&&t.push(u)));return a}function Mt(m,g,p,h,v,e){return h&&!h[qe]&&(h=Mt(h)),v&&!v[qe]&&(v=Mt(v,e)),kt(function(e,t,n,r){var o,i,a,u=[],s=[],c=t.length,l=e||function(e,t,n){for(var r=0,o=t.length;r<o;r++)St(e,t[r],n);return n}(g||"*",n.nodeType?[n]:n,[]),f=!m||!e&&g?l:Ft(l,u,m,n,r),d=p?v||(e?m:c||h)?[]:t:f;if(p&&p(f,d,n,r),h)for(o=Ft(d,s),h(o,[],n,r),i=o.length;i--;)(a=o[i])&&(d[s[i]]=!(f[s[i]]=a));if(e){if(v||m){if(v){for(o=[],i=d.length;i--;)(a=d[i])&&o.push(f[i]=a);v(null,d=[],o,r)}for(i=d.length;i--;)(a=d[i])&&-1<(o=v?it.call(e,a):u[i])&&(e[o]=!(t[o]=a))}}else d=Ft(d===t?d.splice(c,d.length):d),v?v(null,t,d,r):rt.apply(t,d)})}function zt(e){for(var r,t,n,o=e.length,i=_e.relative[e[0].type],a=i||_e.relative[" "],u=i?1:0,s=It(function(e){return e===r},a,!0),c=It(function(e){return-1<it.call(r,e)},a,!0),l=[function(e,t,n){return!i&&(n||t!==Pe)||((r=t).nodeType?s(e,t,n):c(e,t,n))}];u<o;u++)if(t=_e.relative[e[u].type])l=[It(Lt(l),t)];else{if((t=_e.filter[e[u].type].apply(null,e[u].matches))[qe]){for(n=++u;n<o&&!_e.relative[e[n].type];n++);return Mt(1<u&&Lt(l),1<u&&Pt(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(lt,"$1"),t,u<n&&zt(e.slice(u,n)),n<o&&zt(e=e.slice(n)),n<o&&Pt(e))}l.push(t)}return Lt(l)}Bt.prototype=_e.filters=_e.pseudos,_e.setFilters=new Bt,De=St.tokenize=function(e,t){var n,r,o,i,a,u,s,c=Ye[e+" "];if(c)return t?0:c.slice(0);for(a=e,u=[],s=_e.preFilter;a;){for(i in n&&!(r=ft.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=dt.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(lt," ")}),a=a.slice(n.length)),_e.filter)!(r=ht[i].exec(a))||s[i]&&!(r=s[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?St.error(e):Ye(e,u).slice(0)},Oe=St.compile=function(e,t){var n,h,v,y,b,r,o=[],i=[],a=Ge[e+" "];if(!a){for(t||(t=De(e)),n=t.length;n--;)(a=zt(t[n]))[qe]?o.push(a):i.push(a);(a=Ge(e,(h=i,y=0<(v=o).length,b=0<h.length,r=function(e,t,n,r,o){var i,a,u,s=0,c="0",l=e&&[],f=[],d=Pe,m=e||b&&_e.find.TAG("*",o),g=We+=null==d?1:Math.random()||.1,p=m.length;for(o&&(Pe=t!==Me&&t);c!==p&&null!=(i=m[c]);c++){if(b&&i){for(a=0;u=h[a++];)if(u(i,t,n)){r.push(i);break}o&&(We=g)}y&&((i=!u&&i)&&s--,e&&l.push(i))}if(s+=c,y&&c!==s){for(a=0;u=v[a++];)u(l,f,t,n);if(e){if(0<s)for(;c--;)l[c]||f[c]||(f[c]=tt.call(r));f=Ft(f)}rt.apply(r,f),o&&!e&&0<f.length&&1<s+v.length&&St.uniqueSort(r)}return o&&(We=g,Pe=d),l},y?kt(r):r))).selector=e}return a},Be=St.select=function(e,t,n,r){var o,i,a,u,s,c="function"==typeof e&&e,l=!r&&De(e=c.selector||e);if(n=n||[],1===l.length){if(2<(i=l[0]=l[0].slice(0)).length&&"ID"===(a=i[0]).type&&ke.getById&&9===t.nodeType&&Ue&&_e.relative[i[1].type]){if(!(t=(_e.find.ID(a.matches[0].replace(Nt,Et),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=ht.needsContext.test(e)?0:i.length;o--&&(a=i[o],!_e.relative[u=a.type]);)if((s=_e.find[u])&&(r=s(a.matches[0].replace(Nt,Et),xt.test(i[0].type)&&Ot(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&Pt(i)))return rt.apply(n,r),n;break}}return(c||Oe(e,l))(r,t,!Ue,n,xt.test(e)&&Ot(t.parentNode)||t),n},ke.sortStable=qe.split("").sort(Je).join("")===qe,ke.detectDuplicates=!!Le,Fe(),ke.sortDetached=!0;var Ut=Array.isArray,jt=function(e,t,n){var r,o;if(!e)return 0;if(n=n||e,e.length!==undefined){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return 0}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return 0;return 1},Vt=function(e,t,n){var r,o;for(r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r;return-1},Ht={isArray:Ut,toArray:function(e){var t,n,r=e;if(!Ut(e))for(r=[],t=0,n=e.length;t<n;t++)r[t]=e[t];return r},each:jt,map:function(n,r){var o=[];return jt(n,function(e,t){o.push(r(e,t,n))}),o},filter:function(n,r){var o=[];return jt(n,function(e,t){r&&!r(e,t,n)||o.push(e)}),o},indexOf:function(e,t){var n,r;if(e)for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},reduce:function(e,t,n,r){var o=0;for(arguments.length<3&&(n=e[0]);o<e.length;o++)n=t.call(r,n,e[o],o);return n},findIndex:Vt,find:function(e,t,n){var r=Vt(e,t,n);return-1!==r?e[r]:undefined},last:function(e){return e[e.length-1]}},qt=/^\s*|\s*$/g,$t=function(e){return null===e||e===undefined?"":(""+e).replace(qt,"")},Wt=function(e,t){return t?!("array"!==t||!Ht.isArray(e))||typeof e===t:e!==undefined},Kt=function(e,n,r,o){o=o||this,e&&(r&&(e=e[r]),Ht.each(e,function(e,t){if(!1===n.call(o,e,t,r))return!1;Kt(e,n,r,o)}))},Xt={trim:$t,isArray:Ht.isArray,is:Wt,toArray:Ht.toArray,makeMap:function(e,t,n){var r;for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={};return n},each:Ht.each,map:Ht.map,grep:Ht.filter,inArray:Ht.indexOf,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e,t){for(var n,r,o,i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];var u,s=arguments;for(n=1,r=s.length;n<r;n++)for(o in t=s[n])t.hasOwnProperty(o)&&(u=t[o])!==undefined&&(e[o]=u);return e},create:function(e,t,n){var r,o,i,a,u,s=this,c=0;if(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),i=e[3].match(/(^|\.)(\w+)$/i)[2],!(o=s.createNS(e[3].replace(/\.\w+$/,""),n))[i]){if("static"===e[2])return o[i]=t,void(this.onCreate&&this.onCreate(e[2],e[3],o[i]));t[i]||(t[i]=function(){},c=1),o[i]=t[i],s.extend(o[i].prototype,t),e[5]&&(r=s.resolve(e[5]).prototype,a=e[5].match(/\.(\w+)$/i)[1],u=o[i],o[i]=c?function(){return r[a].apply(this,arguments)}:function(){return this.parent=r[a],u.apply(this,arguments)},o[i].prototype[i]=o[i],s.each(r,function(e,t){o[i].prototype[t]=r[t]}),s.each(t,function(e,t){r[t]?o[i].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==i&&(o[i].prototype[t]=e)})),s.each(t["static"],function(e,t){o[i][t]=e})}},walk:Kt,createNS:function(e,t){var n,r;for(t=t||V.window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r];return t},resolve:function(e,t){var n,r;for(t=t||V.window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||Wt(e,"array")?e:Ht.map(e.split(t||","),$t)},_addCacheSuffix:function(e){var t=fe.cacheSuffix;return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},Yt=V.document,Gt=Array.prototype.push,Jt=Array.prototype.slice,Qt=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,Zt=Se.Event,en=Xt.makeMap("children,contents,next,prev"),tn=function(e){return void 0!==e},nn=function(e){return"string"==typeof e},rn=function(e,t){var n,r,o;for(o=(t=t||Yt).createElement("div"),n=t.createDocumentFragment(),o.innerHTML=e;r=o.firstChild;)n.appendChild(r);return n},on=function(e,t,n,r){var o;if(nn(t))t=rn(t,bn(e[0]));else if(t.length&&!t.nodeType){if(t=gn.makeArray(t),r)for(o=t.length-1;0<=o;o--)on(e,t[o],n,r);else for(o=0;o<t.length;o++)on(e,t[o],n,r);return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t);return e},an=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},un=function(e,t,n){var r,o;return t=gn(t)[0],e.each(function(){var e=this;n&&r===e.parentNode||(r=e.parentNode,o=t.cloneNode(!1),e.parentNode.insertBefore(o,e)),o.appendChild(e)}),e},sn=Xt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),cn=Xt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),ln={"for":"htmlFor","class":"className",readonly:"readOnly"},fn={"float":"cssFloat"},dn={},mn={},gn=function(e,t){return new gn.fn.init(e,t)},pn=/^\s*|\s*$/g,hn=function(e){return null===e||e===undefined?"":(""+e).replace(pn,"")},vn=function(e,t){var n,r,o,i;if(e)if((n=e.length)===undefined){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},yn=function(e,n){var r=[];return vn(e,function(e,t){n(t,e)&&r.push(t)}),r},bn=function(e){return e?9===e.nodeType?e:e.ownerDocument:Yt};gn.fn=gn.prototype={constructor:gn,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this;if(!e)return o;if(e.nodeType)return o.context=o[0]=e,o.length=1,o;if(t&&t.nodeType)o.context=t;else{if(t)return gn(e).attr(t);o.context=t=V.document}if(nn(e)){if(!(n="<"===(o.selector=e).charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:Qt.exec(e)))return gn(t).find(e);if(n[1])for(r=rn(e,bn(t)).firstChild;r;)Gt.call(o,r),r=r.nextSibling;else{if(!(r=bn(t).getElementById(n[2])))return o;if(r.id!==n[2])return o.find(e);o.length=1,o[0]=r}}else this.add(e,!1);return o},toArray:function(){return Xt.toArray(this)},add:function(e,t){var n,r,o=this;if(nn(e))return o.add(gn(e));if(!1!==t)for(n=gn.unique(o.toArray().concat(gn.makeArray(e))),o.length=n.length,r=0;r<n.length;r++)o[r]=n[r];else Gt.apply(o,gn.makeArray(e));return o},attr:function(t,n){var e,r=this;if("object"==typeof t)vn(t,function(e,t){r.attr(e,t)});else{if(!tn(n)){if(r[0]&&1===r[0].nodeType){if((e=dn[t])&&e.get)return e.get(r[0],t);if(cn[t])return r.prop(t)?t:undefined;null===(n=r[0].getAttribute(t,2))&&(n=undefined)}return n}this.each(function(){var e;if(1===this.nodeType){if((e=dn[t])&&e.set)return void e.set(this,n);null===n?this.removeAttribute(t,2):this.setAttribute(t,n,2)}})}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this;if("object"==typeof(e=ln[e]||e))vn(e,function(e,t){n.prop(e,t)});else{if(!tn(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t;this.each(function(){1===this.nodeType&&(this[e]=t)})}return n},css:function(n,r){var e,o,i=this,t=function(e){return e.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})},a=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e})};if("object"==typeof n)vn(n,function(e,t){i.css(e,t)});else if(tn(r))n=t(n),"number"!=typeof r||sn[n]||(r=r.toString()+"px"),i.each(function(){var e=this.style;if((o=mn[n])&&o.set)o.set(this,r);else{try{this.style[fn[n]||n]=r}catch(t){}null!==r&&""!==r||(e.removeProperty?e.removeProperty(a(n)):e.removeAttribute(n))}});else{if(e=i[0],(o=mn[n])&&o.get)return o.get(e);if(!e.ownerDocument.defaultView)return e.currentStyle?e.currentStyle[t(n)]:"";try{return e.ownerDocument.defaultView.getComputedStyle(e,null).getPropertyValue(a(n))}catch(u){return undefined}}return i},remove:function(){for(var e,t=this.length;t--;)e=this[t],Zt.clean(e),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild);return this},html:function(e){var t,n=this;if(tn(e)){t=n.length;try{for(;t--;)n[t].innerHTML=e}catch(r){gn(n[t]).empty().append(e)}return n}return n[0]?n[0].innerHTML:""},text:function(e){var t,n=this;if(tn(e)){for(t=n.length;t--;)"innerText"in n[t]?n[t].innerText=e:n[0].textContent=e;return n}return n[0]?n[0].innerText||n[0].textContent:""},append:function(){return on(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)})},prepend:function(){return on(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)},!0)},before:function(){return this[0]&&this[0].parentNode?on(this,arguments,function(e){this.parentNode.insertBefore(e,this)}):this},after:function(){return this[0]&&this[0].parentNode?on(this,arguments,function(e){this.parentNode.insertBefore(e,this.nextSibling)},!0):this},appendTo:function(e){return gn(e).append(this),this},prependTo:function(e){return gn(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return un(this,e)},wrapAll:function(e){return un(this,e,!0)},wrapInner:function(e){return this.each(function(){gn(this).contents().wrapAll(e)}),this},unwrap:function(){return this.parent().each(function(){gn(this).replaceWith(this.childNodes)})},clone:function(){var e=[];return this.each(function(){e.push(this.cloneNode(!0))}),gn(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(o,i){var e=this;return"string"!=typeof o||(-1!==o.indexOf(" ")?vn(o.split(" "),function(){e.toggleClass(this,i)}):e.each(function(e,t){var n,r;(r=an(t,o))!==i&&(n=t.className,r?t.className=hn((" "+n+" ").replace(" "+o+" "," ")):t.className+=n?" "+o:o)})),e},hasClass:function(e){return an(this[0],e)},each:function(e){return vn(this,e)},on:function(e,t){return this.each(function(){Zt.bind(this,e,t)})},off:function(e,t){return this.each(function(){Zt.unbind(this,e,t)})},trigger:function(e){return this.each(function(){"object"==typeof e?Zt.fire(this,e.type,e):Zt.fire(this,e)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new gn(Jt.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[];for(t=0,n=this.length;t<n;t++)gn.find(e,this[t],r);return gn(r)},filter:function(n){return gn("function"==typeof n?yn(this.toArray(),function(e,t){return n(t,e)}):gn.filter(n,this.toArray()))},closest:function(n){var r=[];return n instanceof gn&&(n=n[0]),this.each(function(e,t){for(;t;){if("string"==typeof n&&gn(t).is(n)){r.push(t);break}if(t===n){r.push(t);break}t=t.parentNode}}),gn(r)},offset:function(e){var t,n,r,o,i=0,a=0;return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:Gt,sort:[].sort,splice:[].splice},Xt.extend(gn,{extend:Xt.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:Xt.toArray(e);var t},inArray:function(e,t){var n;if(t.indexOf)return t.indexOf(e);for(n=t.length;n--;)if(t[n]===e)return n;return-1},isArray:Xt.isArray,each:vn,trim:hn,grep:yn,find:St,expr:St.selectors,unique:St.uniqueSort,text:St.getText,contains:St.contains,filter:function(e,t,n){var r=t.length;for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1);return t=1===t.length?gn.find.matchesSelector(t[0],e)?[t[0]]:[]:gn.find.matches(e,t)}});var Cn=function(e,t,n){var r=[],o=e[t];for("string"!=typeof n&&n instanceof gn&&(n=n[0]);o&&9!==o.nodeType;){if(n!==undefined){if(o===n)break;if("string"==typeof n&&gn(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},xn=function(e,t,n,r){var o=[];for(r instanceof gn&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(r!==undefined){if(e===r)break;if("string"==typeof r&&gn(e).is(r))break}o.push(e)}return o},wn=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e;return null};vn({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Cn(e,"parentNode")},next:function(e){return wn(e,"nextSibling",1)},prev:function(e){return wn(e,"previousSibling",1)},children:function(e){return xn(e.firstChild,"nextSibling",1)},contents:function(e){return Xt.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},function(e,r){gn.fn[e]=function(t){var n=[];return this.each(function(){var e=r.call(n,this,t,n);e&&(gn.isArray(e)?n.push.apply(n,e):n.push(e))}),1<this.length&&(en[e]||(n=gn.unique(n)),0===e.indexOf("parents")&&(n=n.reverse())),n=gn(n),t?n.filter(t):n}}),vn({parentsUntil:function(e,t){return Cn(e,"parentNode",t)},nextUntil:function(e,t){return xn(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return xn(e,"previousSibling",1,t).slice(1)}},function(r,o){gn.fn[r]=function(t,e){var n=[];return this.each(function(){var e=o.call(n,this,t,n);e&&(gn.isArray(e)?n.push.apply(n,e):n.push(e))}),1<this.length&&(n=gn.unique(n),0!==r.indexOf("parents")&&"prevUntil"!==r||(n=n.reverse())),n=gn(n),e?n.filter(e):n}}),gn.fn.is=function(e){return!!e&&0<this.filter(e).length},gn.fn.init.prototype=gn.fn,gn.overrideDefaults=function(n){var r,o=function(e,t){return r=r||n(),0===arguments.length&&(e=r.element),t||(t=r.context),new o.fn.init(e,t)};return gn.extend(o,this),o};var Nn=function(n,r,e){vn(e,function(e,t){n[e]=n[e]||{},n[e][r]=t})};fe.ie&&fe.ie<8&&(Nn(dn,"get",{maxlength:function(e){var t=e.maxLength;return 2147483647===t?undefined:t},size:function(e){var t=e.size;return 20===t?undefined:t},"class":function(e){return e.className},style:function(e){var t=e.style.cssText;return 0===t.length?undefined:t}}),Nn(dn,"set",{"class":function(e,t){e.className=t},style:function(e,t){e.style.cssText=t}})),fe.ie&&fe.ie<9&&(fn["float"]="styleFloat",Nn(mn,"set",{opacity:function(e,t){var n=e.style;null===t||""===t?n.removeAttribute("filter"):(n.zoom=1,n.filter="alpha(opacity="+100*t+")")}})),gn.attrHooks=dn,gn.cssHooks=mn;var En,Sn,Tn,kn,_n,An,Rn,Dn=function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.test(t))return r}return undefined}(e,t);if(!n)return{major:0,minor:0};var r=function(e){return Number(t.replace(n,"$"+e))};return Bn(r(1),r(2))},On=function(){return Bn(0,0)},Bn=function(e,t){return{major:e,minor:t}},Pn={nu:Bn,detect:function(e,t){var n=String(t).toLowerCase();return 0===e.length?On():Dn(e,n)},unknown:On},In="Firefox",Ln=function(e,t){return function(){return t===e}},Fn=function(e){var t=e.current;return{current:t,version:e.version,isEdge:Ln("Edge",t),isChrome:Ln("Chrome",t),isIE:Ln("IE",t),isOpera:Ln("Opera",t),isFirefox:Ln(In,t),isSafari:Ln("Safari",t)}},Mn={unknown:function(){return Fn({current:undefined,version:Pn.unknown()})},nu:Fn,edge:q("Edge"),chrome:q("Chrome"),ie:q("IE"),opera:q("Opera"),firefox:q(In),safari:q("Safari")},zn="Windows",Un="Android",jn="Solaris",Vn="FreeBSD",Hn=function(e,t){return function(){return t===e}},qn=function(e){var t=e.current;return{current:t,version:e.version,isWindows:Hn(zn,t),isiOS:Hn("iOS",t),isAndroid:Hn(Un,t),isOSX:Hn("OSX",t),isLinux:Hn("Linux",t),isSolaris:Hn(jn,t),isFreeBSD:Hn(Vn,t)}},$n={unknown:function(){return qn({current:undefined,version:Pn.unknown()})},nu:qn,windows:q(zn),ios:q("iOS"),android:q(Un),linux:q("Linux"),osx:q("OSX"),solaris:q(jn),freebsd:q(Vn)},Wn=function(e,t){var n=String(t).toLowerCase();return X(e,function(e){return e.search(n)})},Kn=function(e,n){return Wn(e,n).map(function(e){var t=Pn.detect(e.versionRegexes,n);return{current:e.name,version:t}})},Xn=function(e,n){return Wn(e,n).map(function(e){var t=Pn.detect(e.versionRegexes,n);return{current:e.name,version:t}})},Yn=function(e,t){return-1!==e.indexOf(t)},Gn=function(e){return e.replace(/^\s+|\s+$/g,"")},Jn=function(e){return e.replace(/\s+$/g,"")},Qn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Zn=function(t){return function(e){return Yn(e,t)}},er=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Yn(e,"edge/")&&Yn(e,"chrome")&&Yn(e,"safari")&&Yn(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Qn],search:function(e){return Yn(e,"chrome")&&!Yn(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Yn(e,"msie")||Yn(e,"trident")}},{name:"Opera",versionRegexes:[Qn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Zn("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Zn("firefox")},{name:"Safari",versionRegexes:[Qn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Yn(e,"safari")||Yn(e,"mobile/"))&&Yn(e,"applewebkit")}}],tr=[{name:"Windows",search:Zn("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Yn(e,"iphone")||Yn(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Zn("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Zn("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Zn("linux"),versionRegexes:[]},{name:"Solaris",search:Zn("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Zn("freebsd"),versionRegexes:[]}],nr={browsers:q(er),oses:q(tr)},rr=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=nr.browsers(),m=nr.oses(),g=Kn(d,e).fold(Mn.unknown,Mn.nu),p=Xn(m,e).fold($n.unknown,$n.nu);return{browser:g,os:p,deviceType:(n=g,r=e,o=(t=p).isiOS()&&!0===/ipad/i.test(r),i=t.isiOS()&&!o,a=t.isAndroid()&&3===t.version.major,u=t.isAndroid()&&4===t.version.major,s=o||a||u&&!0===/mobile/i.test(r),c=t.isiOS()||t.isAndroid(),l=c&&!s,f=n.isSafari()&&t.isiOS()&&!1===/safari/i.test(r),{isiPad:q(o),isiPhone:q(i),isTablet:q(s),isPhone:q(l),isTouch:q(c),isAndroid:t.isAndroid,isiOS:t.isiOS,isWebView:q(f)})}},or={detect:(En=function(){var e=V.navigator.userAgent;return rr(e)},Tn=!1,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Tn||(Tn=!0,Sn=En.apply(null,e)),Sn})},ir=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:q(e)}},ar={fromHtml:function(e,t){var n=(t||V.document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw V.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return ir(n.childNodes[0])},fromTag:function(e,t){var n=(t||V.document).createElement(e);return ir(n)},fromText:function(e,t){var n=(t||V.document).createTextNode(e);return ir(n)},fromDom:ir,fromPoint:function(e,t,n){var r=e.dom();return _.from(r.elementFromPoint(t,n)).map(ir)}},ur=(V.Node.ATTRIBUTE_NODE,V.Node.CDATA_SECTION_NODE,V.Node.COMMENT_NODE,V.Node.DOCUMENT_NODE),sr=(V.Node.DOCUMENT_TYPE_NODE,V.Node.DOCUMENT_FRAGMENT_NODE,V.Node.ELEMENT_NODE),cr=V.Node.TEXT_NODE,lr=(V.Node.PROCESSING_INSTRUCTION_NODE,V.Node.ENTITY_REFERENCE_NODE,V.Node.ENTITY_NODE,V.Node.NOTATION_NODE,function(e){return e.dom().nodeName.toLowerCase()}),fr=function(t){return function(e){return e.dom().nodeType===t}},dr=fr(sr),mr=fr(cr),gr=Object.keys,pr=Object.hasOwnProperty,hr=function(e,t){for(var n=gr(e),r=0,o=n.length;r<o;r++){var i=n[r];t(e[i],i)}},vr=function(e,r){var o={};return hr(e,function(e,t){var n=r(e,t);o[n.k]=n.v}),o},yr=function(e,n){var r={},o={};return hr(e,function(e,t){(n(e,t)?r:o)[t]=e}),{t:r,f:o}},br=function(e,t){return pr.call(e,t)},Cr=function(e){return e.style!==undefined&&D(e.style.getPropertyValue)},xr=function(e,t,n){if(!(S(n)||R(n)||O(n)))throw V.console.error("Invalid call to Attr.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")},wr=function(e,t,n){xr(e.dom(),t,n)},Nr=function(e,t){var n=e.dom();hr(t,function(e,t){xr(n,t,e)})},Er=function(e,t){var n=e.dom().getAttribute(t);return null===n?undefined:n},Sr=function(e,t){e.dom().removeAttribute(t)},Tr=function(e,t){var n=e.dom();hr(t,function(e,t){!function(e,t,n){if(!S(n))throw V.console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);Cr(e)&&e.style.setProperty(t,n)}(n,t,e)})},kr=function(e,t){var n,r,o=e.dom(),i=V.window.getComputedStyle(o).getPropertyValue(t),a=""!==i||(r=mr(n=e)?n.dom().parentNode:n.dom())!==undefined&&null!==r&&r.ownerDocument.body.contains(r)?i:_r(o,t);return null===a?undefined:a},_r=function(e,t){return Cr(e)?e.style.getPropertyValue(t):""},Ar=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(t.length!==n.length)throw new Error('Wrong number of arguments to struct. Expected "['+t.length+']", got '+n.length+" arguments");var r={};return z(t,function(e,t){r[e]=q(n[t])}),r}},Rr=function(e,t){for(var n=[],r=function(e){return n.push(e),t(e)},o=t(e);(o=o.bind(r)).isSome(););return n},Dr=function(){return oe.getOrDie("Node")},Or=function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)},Br=function(e,t){return Or(e,t,Dr().DOCUMENT_POSITION_CONTAINED_BY)},Pr=sr,Ir=ur,Lr=function(e,t){var n=e.dom();if(n.nodeType!==Pr)return!1;var r=n;if(r.matches!==undefined)return r.matches(t);if(r.msMatchesSelector!==undefined)return r.msMatchesSelector(t);if(r.webkitMatchesSelector!==undefined)return r.webkitMatchesSelector(t);if(r.mozMatchesSelector!==undefined)return r.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")},Fr=function(e){return e.nodeType!==Pr&&e.nodeType!==Ir||0===e.childElementCount},Mr=function(e,t){return e.dom()===t.dom()},zr=or.detect().browser.isIE()?function(e,t){return Br(e.dom(),t.dom())}:function(e,t){var n=e.dom(),r=t.dom();return n!==r&&n.contains(r)},Ur=function(e){return ar.fromDom(e.dom().ownerDocument)},jr=function(e){return ar.fromDom(e.dom().ownerDocument.defaultView)},Vr=function(e){return _.from(e.dom().parentNode).map(ar.fromDom)},Hr=function(e){return _.from(e.dom().previousSibling).map(ar.fromDom)},qr=function(e){return _.from(e.dom().nextSibling).map(ar.fromDom)},$r=function(e){return t=Rr(e,Hr),(n=B.call(t,0)).reverse(),n;var t,n},Wr=function(e){return Rr(e,qr)},Kr=function(e){return W(e.dom().childNodes,ar.fromDom)},Xr=function(e,t){var n=e.dom().childNodes;return _.from(n[t]).map(ar.fromDom)},Yr=function(e){return Xr(e,0)},Gr=function(e){return Xr(e,e.dom().childNodes.length-1)},Jr=(Ar("element","offset"),or.detect().browser),Qr=function(e){return X(e,dr)},Zr={getPos:function(e,t,n){var r,o,i,a=0,u=0,s=e.ownerDocument;if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===kr(ar.fromDom(e),"position"))return{x:a=(o=t.getBoundingClientRect()).left+(s.documentElement.scrollLeft||e.scrollLeft)-s.documentElement.clientLeft,y:u=o.top+(s.documentElement.scrollTop||e.scrollTop)-s.documentElement.clientTop};for(r=t;r&&r!==n&&r.nodeType;)a+=r.offsetLeft||0,u+=r.offsetTop||0,r=r.offsetParent;for(r=t.parentNode;r&&r!==n&&r.nodeType;)a-=r.scrollLeft||0,u-=r.scrollTop||0,r=r.parentNode;u+=(i=ar.fromDom(t),Jr.isFirefox()&&"table"===lr(i)?Qr(Kr(i)).filter(function(e){return"caption"===lr(e)}).bind(function(o){return Qr(Wr(o)).map(function(e){var t=e.dom().offsetTop,n=o.dom().offsetTop,r=o.dom().offsetHeight;return t<=n?-r:0})}).getOr(0):0)}return{x:a,y:u}}},eo={},to={exports:eo};kn=undefined,_n=eo,An=to,Rn=undefined,function(e){"object"==typeof _n&&void 0!==An?An.exports=e():"function"==typeof kn&&kn.amd?kn([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).EphoxContactWrapper=e()}(function(){return function i(a,u,s){function c(t,e){if(!u[t]){if(!a[t]){var n="function"==typeof Rn&&Rn;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=u[t]={exports:{}};a[t][0].call(o.exports,function(e){return c(a[t][1][e]||e)},o,o.exports,i,a,u,s)}return u[t].exports}for(var l="function"==typeof Rn&&Rn,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,t,n){var r,o,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(iE){try{return r.call(null,e,0)}catch(iE){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(iE){r=a}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(iE){o=u}}();var c,l=[],f=!1,d=-1;function m(){f&&c&&(f=!1,c.length?l=c.concat(l):d=-1,l.length&&g())}function g(){if(!f){var e=s(m);f=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,f=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(iE){try{return o.call(null,e)}catch(iE){return o.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||f||s(g)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(e,f,t){(function(n){!function(e){var t=setTimeout;function r(){}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],l(e,this)}function o(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var e=1===n._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(n._value)}catch(iE){return void u(r.promise,iE)}a(r.promise,t)}else(1===n._state?a:u)(r.promise,n._value)})):n._deferreds.push(r)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void s(e);if("function"==typeof n)return void l((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,s(e)}catch(iE){u(e,iE)}var r,o}function u(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t]);e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,u(t,e))})}catch(r){if(n)return;n=!0,u(t,r)}}i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return o(this,new c(e,t,n)),n},i.all=function(e){var s=Array.prototype.slice.call(e);return new i(function(o,i){if(0===s.length)return o([]);var a=s.length;function u(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){u(t,e)},i)}s[t]=e,0==--a&&o(s)}catch(r){i(r)}}for(var e=0;e<s.length;e++)u(e,s[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i._immediateFn="function"==typeof n?function(e){n(e)}:function(e){t(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==f&&f.exports?f.exports=i:e.Promise||(e.Promise=i)}(this)}).call(this,e("timers").setImmediate)},{timers:3}],3:[function(s,e,c){(function(e,t){var r=s("process/browser.js").nextTick,n=Function.prototype.apply,o=Array.prototype.slice,i={},a=0;function u(e,t){this._id=e,this._clearFn=t}c.setTimeout=function(){return new u(n.call(setTimeout,window,arguments),clearTimeout)},c.setInterval=function(){return new u(n.call(setInterval,window,arguments),clearInterval)},c.clearTimeout=c.clearInterval=function(e){e.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(window,this._id)},c.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},c.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},c._unrefActive=c.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;0<=t&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},c.setImmediate="function"==typeof e?e:function(e){var t=a++,n=!(arguments.length<2)&&o.call(arguments,1);return i[t]=!0,r(function(){i[t]&&(n?e.apply(null,n):e.call(null),c.clearImmediate(t))}),t},c.clearImmediate="function"==typeof t?t:function(e){delete i[e]}}).call(this,s("timers").setImmediate,s("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(e,t,n){var r=e("promise-polyfill"),o="undefined"!=typeof window?window:Function("return this;")();t.exports={boltExport:o.Promise||r}},{"promise-polyfill":2}]},{},[4])(4)});var no=to.exports.boltExport,ro=function(e){var n=_.none(),t=[],r=function(e){o()?a(e):t.push(e)},o=function(){return n.isSome()},i=function(e){z(e,a)},a=function(t){n.each(function(e){V.setTimeout(function(){t(e)},0)})};return e(function(e){n=_.some(e),i(t),t=[]}),{get:r,map:function(n){return ro(function(t){r(function(e){t(n(e))})})},isReady:o}},oo={nu:ro,pure:function(t){return ro(function(e){e(t)})}},io=function(e){V.setTimeout(function(){throw e},0)},ao=function(n){var e=function(e){n().then(e,io)};return{map:function(e){return ao(function(){return n().then(e)})},bind:function(t){return ao(function(){return n().then(function(e){return t(e).toPromise()})})},anonBind:function(e){return ao(function(){return n().then(function(){return e.toPromise()})})},toLazy:function(){return oo.nu(e)},toCached:function(){var e=null;return ao(function(){return null===e&&(e=n()),e})},toPromise:n,get:e}},uo={nu:function(e){return ao(function(){return new no(e)})},pure:function(e){return ao(function(){return no.resolve(e)})}},so=function(a,e){return e(function(r){var o=[],i=0;0===a.length?r([]):z(a,function(e,t){var n;e.get((n=t,function(e){o[n]=e,++i>=a.length&&r(o)}))})})},co=function(e){return so(e,uo.nu)},lo=function(n){return{is:function(e){return n===e},isValue:C,isError:b,getOr:q(n),getOrThunk:q(n),getOrDie:q(n),or:function(e){return lo(n)},orThunk:function(e){return lo(n)},fold:function(e,t){return t(n)},map:function(e){return lo(e(n))},mapError:function(e){return lo(n)},each:function(e){e(n)},bind:function(e){return e(n)},exists:function(e){return e(n)},forall:function(e){return e(n)},toOption:function(){return _.some(n)}}},fo=function(n){return{is:b,isValue:b,isError:C,getOr:$,getOrThunk:function(e){return e()},getOrDie:function(){return e=String(n),function(){throw new Error(e)}();var e},or:function(e){return e},orThunk:function(e){return e()},fold:function(e,t){return e(n)},map:function(e){return fo(n)},mapError:function(e){return fo(e(n))},each:o,bind:function(e){return fo(n)},exists:b,forall:C,toOption:_.none}},mo={value:lo,error:fo,fromOption:function(e,t){return e.fold(function(){return fo(t)},lo)}};function go(e,u){var t=e,n=function(e,t,n,r){var o,i;if(e){if(!r&&e[t])return e[t];if(e!==u){if(o=e[n])return o;for(i=e.parentNode;i&&i!==u;i=i.parentNode)if(o=i[n])return o}}};this.current=function(){return t},this.next=function(e){return t=n(t,"firstChild","nextSibling",e)},this.prev=function(e){return t=n(t,"lastChild","previousSibling",e)},this.prev2=function(e){return t=function(e,t,n,r){var o,i,a;if(e){if(o=e[n],u&&o===u)return;if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a;return o}if((i=e.parentNode)&&i!==u)return i}}(t,"lastChild","previousSibling",e)}}var po,ho,vo,yo=function(t){var n;return function(e){return(n=n||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r];n[String(i)]=t(i,r)}return n}(t,q(!0))).hasOwnProperty(lr(e))}},bo=yo(["h1","h2","h3","h4","h5","h6"]),Co=yo(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),xo=function(e){return dr(e)&&!Co(e)},wo=function(e){return dr(e)&&"br"===lr(e)},No=yo(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),Eo=yo(["ul","ol","dl"]),So=yo(["li","dd","dt"]),To=yo(["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param","embed","source","wbr","track"]),ko=yo(["thead","tbody","tfoot"]),_o=yo(["td","th"]),Ao=yo(["pre","script","textarea","style"]),Ro=function(t){return function(e){return!!e&&e.nodeType===t}},Do=Ro(1),Oo=function(e){var r=e.toLowerCase().split(" ");return function(e){var t,n;if(e&&e.nodeType)for(n=e.nodeName.toLowerCase(),t=0;t<r.length;t++)if(n===r[t])return!0;return!1}},Bo=function(t){return function(e){if(Do(e)){if(e.contentEditable===t)return!0;if(e.getAttribute("data-mce-contenteditable")===t)return!0}return!1}},Po=Ro(3),Io=Ro(8),Lo=Ro(9),Fo=Ro(11),Mo=Oo("br"),zo=Bo("true"),Uo=Bo("false"),jo={isText:Po,isElement:Do,isComment:Io,isDocument:Lo,isDocumentFragment:Fo,isBr:Mo,isContentEditableTrue:zo,isContentEditableFalse:Uo,isRestrictedNode:function(e){return!!e&&!Object.getPrototypeOf(e)},matchNodeNames:Oo,hasPropValue:function(t,n){return function(e){return Do(e)&&e[t]===n}},hasAttribute:function(t,e){return function(e){return Do(e)&&e.hasAttribute(t)}},hasAttributeValue:function(t,n){return function(e){return Do(e)&&e.getAttribute(t)===n}},matchStyleValues:function(r,e){var o=e.toLowerCase().split(" ");return function(e){var t;if(Do(e))for(t=0;t<o.length;t++){var n=e.ownerDocument.defaultView.getComputedStyle(e,null);if((n?n.getPropertyValue(r):null)===o[t])return!0}return!1}},isBogus:function(e){return Do(e)&&e.hasAttribute("data-mce-bogus")},isBogusAll:function(e){return Do(e)&&"all"===e.getAttribute("data-mce-bogus")},isTable:function(e){return Do(e)&&"TABLE"===e.tagName}},Vo=function(e){return e&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},Ho=function(e,t){var n,r=t.childNodes;if(!jo.isElement(t)||!Vo(t)){for(n=r.length-1;0<=n;n--)Ho(e,r[n]);if(!1===jo.isDocument(t)){if(jo.isText(t)&&0<t.nodeValue.length){var o=Xt.trim(t.nodeValue).length;if(e.isBlock(t.parentNode)||0<o)return;if(0===o&&(a=(i=t).previousSibling&&"SPAN"===i.previousSibling.nodeName,u=i.nextSibling&&"SPAN"===i.nextSibling.nodeName,a&&u))return}else if(jo.isElement(t)&&(1===(r=t.childNodes).length&&Vo(r[0])&&t.parentNode.insertBefore(r[0],t),r.length||To(ar.fromDom(t))))return;e.remove(t)}var i,a,u;return t}},qo={trimNode:Ho},$o=Xt.makeMap,Wo=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Ko=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Xo=/[<>&\"\']/g,Yo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,Go={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};ho={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},vo={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"};var Jo=function(e,t){var n,r,o,i={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),ho[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r);return i}};po=Jo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var Qo=function(e,t){return e.replace(t?Wo:Ko,function(e){return ho[e]||e})},Zo=function(e,t){return e.replace(t?Wo:Ko,function(e){return 1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":ho[e]||"&#"+e.charCodeAt(0)+";"})},ei=function(e,t,n){return n=n||po,e.replace(t?Wo:Ko,function(e){return ho[e]||n[e]||e})},ti={encodeRaw:Qo,encodeAllRaw:function(e){return(""+e).replace(Xo,function(e){return ho[e]||e})},encodeNumeric:Zo,encodeNamed:ei,getEncodeFunc:function(e,t){var n=Jo(t)||po,r=$o(e.replace(/\+/g,","));return r.named&&r.numeric?function(e,t){return e.replace(t?Wo:Ko,function(e){return ho[e]!==undefined?ho[e]:n[e]!==undefined?n[e]:1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"})}:r.named?t?function(e,t){return ei(e,t,n)}:ei:r.numeric?Zo:Qo},decode:function(e){return e.replace(Yo,function(e,t){return t?65535<(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):Go[t]||String.fromCharCode(t):vo[e]||po[e]||(n=e,(r=ar.fromTag("div").dom()).innerHTML=n,r.textContent||r.innerText||n);var n,r})}},ni={},ri={},oi=Xt.makeMap,ii=Xt.each,ai=Xt.extend,ui=Xt.explode,si=Xt.inArray,ci=function(e,t){return(e=Xt.trim(e))?e.split(t||" "):[]},li=function(e){var u,t,n,r,o,i,s={},a=function(e,t,n){var r,o,i,a=function(e,t){var n,r,o={};for(n=0,r=e.length;n<r;n++)o[e[n]]=t||{};return o};for(t=t||"","string"==typeof(n=n||[])&&(n=ci(n)),r=(e=ci(e)).length;r--;)i={attributes:a(o=ci([u,t].join(" "))),attributesOrder:o,children:a(n,ri)},s[e[r]]=i},c=function(e,t){var n,r,o,i;for(n=(e=ci(e)).length,t=ci(t);n--;)for(r=s[e[n]],o=0,i=t.length;o<i;o++)r.attributes[t[o]]={},r.attributesOrder.push(t[o])};return ni[e]?ni[e]:(u="id accesskey class dir lang style tabindex title role",t="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",n="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(u+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",t+=" article aside details dialog figure main header footer hgroup section nav",n+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(u+=" xml:lang",n=[n,i="acronym applet basefont big font strike tt"].join(" "),ii(ci(i),function(e){a(e,"",n)}),t=[t,o="center dir isindex noframes"].join(" "),r=[t,n].join(" "),ii(ci(o),function(e){a(e,"",r)})),r=r||[t,n].join(" "),a("html","manifest","head body"),a("head","","base command link meta noscript script style title"),a("title hr noscript br"),a("base","href target"),a("link","href rel media hreflang type sizes hreflang"),a("meta","name http-equiv content charset"),a("style","media type scoped"),a("script","src async defer type charset"),a("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",r),a("address dt dd div caption","",r),a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",n),a("blockquote","cite",r),a("ol","reversed start type","li"),a("ul","","li"),a("li","value",r),a("dl","","dt dd"),a("a","href target rel media hreflang type",n),a("q","cite",n),a("ins del","cite datetime",r),a("img","src sizes srcset alt usemap ismap width height"),a("iframe","src name width height",r),a("embed","src type width height"),a("object","data type typemustmatch name usemap form width height",[r,"param"].join(" ")),a("param","name value"),a("map","name",[r,"area"].join(" ")),a("area","alt coords shape href target rel media hreflang type"),a("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),a("colgroup","span","col"),a("col","span"),a("tbody thead tfoot","","tr"),a("tr","","td th"),a("td","colspan rowspan headers",r),a("th","colspan rowspan headers scope abbr",r),a("form","accept-charset action autocomplete enctype method name novalidate target",r),a("fieldset","disabled form name",[r,"legend"].join(" ")),a("label","form for",n),a("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),a("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?r:n),a("select","disabled form multiple name required size","option optgroup"),a("optgroup","disabled label","option"),a("option","disabled label selected value"),a("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),a("menu","type label",[r,"li"].join(" ")),a("noscript","",r),"html4"!==e&&(a("wbr"),a("ruby","",[n,"rt rp"].join(" ")),a("figcaption","",r),a("mark rt rp summary bdi","",n),a("canvas","width height",r),a("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[r,"track source"].join(" ")),a("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[r,"track source"].join(" ")),a("picture","","img source"),a("source","src srcset type media sizes"),a("track","kind src srclang label default"),a("datalist","",[n,"option"].join(" ")),a("article section nav aside main header footer","",r),a("hgroup","","h1 h2 h3 h4 h5 h6"),a("figure","",[r,"figcaption"].join(" ")),a("time","datetime",n),a("dialog","open",r),a("command","type label icon disabled checked radiogroup command"),a("output","for form name",n),a("progress","value max",n),a("meter","value min max low high optimum",n),a("details","open",[r,"summary"].join(" ")),a("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e&&(c("script","language xml:space"),c("style","xml:space"),c("object","declare classid code codebase codetype archive standby align border hspace vspace"),c("embed","align name hspace vspace"),c("param","valuetype type"),c("a","charset name rev shape coords"),c("br","clear"),c("applet","codebase archive code object alt name width height align hspace vspace"),c("img","name longdesc align border hspace vspace"),c("iframe","longdesc frameborder marginwidth marginheight scrolling align"),c("font basefont","size color face"),c("input","usemap align"),c("select","onchange"),c("textarea"),c("h1 h2 h3 h4 h5 h6 div p legend caption","align"),c("ul","type compact"),c("li","type"),c("ol dl menu dir","compact"),c("pre","width xml:space"),c("hr","align noshade size width"),c("isindex","prompt"),c("table","summary width frame rules cellspacing cellpadding align bgcolor"),c("col","width align char charoff valign"),c("colgroup","width align char charoff valign"),c("thead","align char charoff valign"),c("tr","align char charoff valign bgcolor"),c("th","axis align char charoff valign nowrap bgcolor width height"),c("form","accept"),c("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),c("tfoot","align char charoff valign"),c("tbody","align char charoff valign"),c("area","nohref"),c("body","background bgcolor text link vlink alink")),"html4"!==e&&(c("input button select textarea","autofocus"),c("input textarea","placeholder"),c("a","download"),c("link script img","crossorigin"),c("iframe","sandbox seamless allowfullscreen")),ii(ci("a form meter progress dfn"),function(e){s[e]&&delete s[e].children[e]}),delete s.caption.children.table,delete s.script,ni[e]=s)},fi=function(e,n){var r;return e&&(r={},"string"==typeof e&&(e={"*":e}),ii(e,function(e,t){r[t]=r[t.toUpperCase()]="map"===n?oi(e,/[, ]/):ui(e,/[, ]/)})),r};function di(i){var e,t,n,r,o,a,u,s,c,l,f,d,m,N={},g={},E=[],p={},h={},v=function(e,t,n){var r=i[e];return r?r=oi(r,/[, ]/,oi(r.toUpperCase(),/[, ]/)):(r=ni[e])||(r=oi(t," ",oi(t.toUpperCase()," ")),r=ai(r,n),ni[e]=r),r};n=li((i=i||{}).schema),!1===i.verify_html&&(i.valid_elements="*[*]"),e=fi(i.valid_styles),t=fi(i.invalid_styles,"map"),s=fi(i.valid_classes,"map"),r=v("whitespace_elements","pre script noscript style textarea video audio iframe object code"),o=v("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),a=v("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),u=v("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),l=v("non_empty_elements","td th iframe video audio object script pre code",a),f=v("move_caret_before_on_enter_elements","table",l),d=v("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),c=v("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",d),m=v("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp"),ii((i.special||"script noscript iframe noframes noembed title style textarea xmp").split(" "),function(e){h[e]=new RegExp("</"+e+"[^>]*>","gi")});var S=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},y=function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m,g,p,h,v,y,b,C=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,x=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,w=/[*?+]/;if(e)for(e=ci(e,","),N["@"]&&(h=N["@"].attributes,v=N["@"].attributesOrder),t=0,n=e.length;t<n;t++)if(i=C.exec(e[t])){if(g=i[1],c=i[2],p=i[3],s=i[5],a={attributes:d={},attributesOrder:m=[]},"#"===g&&(a.paddEmpty=!0),"-"===g&&(a.removeEmpty=!0),"!"===i[4]&&(a.removeEmptyAttrs=!0),h){for(y in h)d[y]=h[y];m.push.apply(m,v)}if(s)for(r=0,o=(s=ci(s,"|")).length;r<o;r++)if(i=x.exec(s[r])){if(u={},f=i[1],l=i[2].replace(/[\\:]:/g,":"),g=i[3],b=i[4],"!"===f&&(a.attributesRequired=a.attributesRequired||[],a.attributesRequired.push(l),u.required=!0),"-"===f){delete d[l],m.splice(si(m,l),1);continue}g&&("="===g&&(a.attributesDefault=a.attributesDefault||[],a.attributesDefault.push({name:l,value:b}),u.defaultValue=b),":"===g&&(a.attributesForced=a.attributesForced||[],a.attributesForced.push({name:l,value:b}),u.forcedValue=b),"<"===g&&(u.validValues=oi(b,"?"))),w.test(l)?(a.attributePatterns=a.attributePatterns||[],u.pattern=S(l),a.attributePatterns.push(u)):(d[l]||m.push(l),d[l]=u)}h||"@"!==c||(h=d,v=m),p&&(a.outputName=c,N[p]=a),w.test(c)?(a.pattern=S(c),E.push(a)):N[c]=a}},b=function(e){N={},E=[],y(e),ii(n,function(e,t){g[t]=e.children})},C=function(e){var a=/^(~)?(.+)$/;e&&(ni.text_block_elements=ni.block_elements=null,ii(ci(e,","),function(e){var t=a.exec(e),n="~"===t[1],r=n?"span":"div",o=t[2];if(g[o]=g[r],p[o]=r,n||(c[o.toUpperCase()]={},c[o]={}),!N[o]){var i=N[r];delete(i=ai({},i)).removeEmptyAttrs,delete i.removeEmpty,N[o]=i}ii(g,function(e,t){e[r]&&(g[t]=e=ai({},g[t]),e[o]=e[r])})}))},x=function(e){var o=/^([+\-]?)(\w+)\[([^\]]+)\]$/;ni[i.schema]=null,e&&ii(ci(e,","),function(e){var t,n,r=o.exec(e);r&&(n=r[1],t=n?g[r[2]]:g[r[2]]={"#comment":{}},t=g[r[2]],ii(ci(r[3],"|"),function(e){"-"===n?delete t[e]:t[e]={}}))})},w=function(e){var t,n=N[e];if(n)return n;for(t=E.length;t--;)if((n=E[t]).pattern.test(e))return n};return i.valid_elements?b(i.valid_elements):(ii(n,function(e,t){N[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},g[t]=e.children}),"html5"!==i.schema&&ii(ci("strong/b em/i"),function(e){e=ci(e,"/"),N[e[1]].outputName=e[0]}),ii(ci("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){N[e]&&(N[e].removeEmpty=!0)}),ii(ci("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),function(e){N[e].paddEmpty=!0}),ii(ci("span"),function(e){N[e].removeEmptyAttrs=!0})),C(i.custom_elements),x(i.valid_children),y(i.extended_valid_elements),x("+ol[ul|ol],+ul[ul|ol]"),ii({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},function(e,t){N[t]&&(N[t].parentsRequired=ci(e))}),i.invalid_elements&&ii(ui(i.invalid_elements),function(e){N[e]&&delete N[e]}),w("span")||y("span[!data-mce-type|*]"),{children:g,elements:N,getValidStyles:function(){return e},getValidClasses:function(){return s},getBlockElements:function(){return c},getInvalidStyles:function(){return t},getShortEndedElements:function(){return a},getTextBlockElements:function(){return d},getTextInlineElements:function(){return m},getBoolAttrs:function(){return u},getElementRule:w,getSelfClosingElements:function(){return o},getNonEmptyElements:function(){return l},getMoveCaretBeforeOnEnterElements:function(){return f},getWhiteSpaceElements:function(){return r},getSpecialElements:function(){return h},isValidChild:function(e,t){var n=g[e.toLowerCase()];return!(!n||!n[t.toLowerCase()])},isValid:function(e,t){var n,r,o=w(e);if(o){if(!t)return!0;if(o.attributes[t])return!0;if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return p},addValidElements:y,setValidElements:b,addCustomElements:C,addValidChildren:x}}var mi=function(e,t,n,r){var o=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e};return"#"+o(t)+o(n)+o(r)};function gi(b,e){var C,t,c,l,x=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,w=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,N=/\s*([^:]+):\s*([^;]+);?/g,E=/\s+$/,S={},T="\ufeff";for(b=b||{},e&&(c=e.getValidStyles(),l=e.getInvalidStyles()),t=("\\\" \\' \\; \\: ; : "+T).split(" "),C=0;C<t.length;C++)S[t[C]]=T+C,S[T+C]=t[C];return{toHex:function(e){return e.replace(x,mi)},parse:function(e){var t,n,r,o,i,a,u,s,c={},l=b.url_converter,f=b.url_converter_scope||this,d=function(e,t,n){var r,o,i,a;if((r=c[e+"-top"+t])&&(o=c[e+"-right"+t])&&(i=c[e+"-bottom"+t])&&(a=c[e+"-left"+t])){var u=[r,o,i,a];for(C=u.length-1;C--&&u[C]===u[C+1];);-1<C&&n||(c[e+t]=-1===C?u[0]:u.join(" "),delete c[e+"-top"+t],delete c[e+"-right"+t],delete c[e+"-bottom"+t],delete c[e+"-left"+t])}},m=function(e){var t,n=c[e];if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return!1;return c[e]=n[0],!0}},g=function(e){return o=!0,S[e]},p=function(e,t){return o&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return S[e]})),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e},h=function(e){return String.fromCharCode(parseInt(e.slice(1),16))},v=function(e){return e.replace(/\\[0-9a-f]+/gi,h)},y=function(e,t,n,r,o,i){if(o=o||i)return"'"+(o=p(o)).replace(/\'/g,"\\'")+"'";if(t=p(t||n||r),!b.allow_script_urls){var a=t.replace(/[\s\r\n]+/g,"");if(/(java|vb)script:/i.test(a))return"";if(!b.allow_svg_data_urls&&/^data:image\/svg/i.test(a))return""}return l&&(t=l.call(f,t,"style")),"url('"+t.replace(/\'/g,"\\'")+"')"};if(e){for(e=(e=e.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,g).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,g)});t=N.exec(e);)if(N.lastIndex=t.index+t[0].length,n=t[1].replace(E,"").toLowerCase(),r=t[2].replace(E,""),n&&r){if(n=v(n),r=v(r),-1!==n.indexOf(T)||-1!==n.indexOf('"'))continue;if(!b.allow_script_urls&&("behavior"===n||/expression\s*\(|\/\*|\*\//.test(r)))continue;"font-weight"===n&&"700"===r?r="bold":"color"!==n&&"background-color"!==n||(r=r.toLowerCase()),r=(r=r.replace(x,mi)).replace(w,y),c[n]=o?p(r,!0):r}d("border","",!0),d("border","-width"),d("border","-color"),d("border","-style"),d("padding",""),d("margin",""),i="border",u="border-style",s="border-color",m(a="border-width")&&m(u)&&m(s)&&(c[i]=c[a]+" "+c[u]+" "+c[s],delete c[a],delete c[u],delete c[s]),"medium none"===c.border&&delete c.border,"none"===c["border-image"]&&delete c["border-image"]}return c},serialize:function(i,e){var t,n,r,o,a,u="",s=function(e){var t,n,r,o;if(t=c[e])for(n=0,r=t.length;n<r;n++)e=t[n],(o=i[e])&&(u+=(0<u.length?" ":"")+e+": "+o+";")};if(e&&c)s("*"),s(e);else for(t in i)!(n=i[t])||l&&(r=t,o=e,a=void 0,(a=l["*"])&&a[r]||(a=l[o])&&a[r])||(u+=(0<u.length?" ":"")+t+": "+n+";");return u}}}var pi,hi=Xt.each,vi=Xt.grep,yi=fe.ie,bi=/^([a-z0-9],?)+$/i,Ci=/^[ \t\r\n]*$/,xi=function(n,r,o){var e={},i=r.keep_values,t={set:function(e,t,n){r.url_converter&&(t=r.url_converter.call(r.url_converter_scope||o(),t,n,e[0])),e.attr("data-mce-"+n,t).attr(n,t)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}};return e={style:{set:function(e,t){null===t||"object"!=typeof t?(i&&e.attr("data-mce-style",t),e.attr("style",t)):e.css(t)},get:function(e){var t=e.attr("data-mce-style")||e.attr("style");return t=n.serialize(n.parse(t),e[0].nodeName)}}},i&&(e.href=e.src=t),e},wi=function(e,t){var n=t.attr("style"),r=e.serialize(e.parse(n),t[0].nodeName);r||(r=null),t.attr("data-mce-style",r)},Ni=function(e,t){var n,r,o=0;if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r);return o};function Ei(a,u){var s,c=this;void 0===u&&(u={});var r={},i=V.window,o={},t=0,e=function(m,g){void 0===g&&(g={});var p,h=0,v={};p=g.maxLoadTime||5e3;var y=function(e){m.getElementsByTagName("head")[0].appendChild(e)},n=function(e,t,n){var o,r,i,a,u=function(){for(var e=a.passed,t=e.length;t--;)e[t]();a.status=2,a.passed=[],a.failed=[]},s=function(){for(var e=a.failed,t=e.length;t--;)e[t]();a.status=3,a.passed=[],a.failed=[]},c=function(e,t){e()||((new Date).getTime()-i<p?he.setTimeout(t):s())},l=function(){c(function(){for(var e,t,n=m.styleSheets,r=n.length;r--;)if((t=(e=n[r]).ownerNode?e.ownerNode:e.owningElement)&&t.id===o.id)return u(),!0},l)},f=function(){c(function(){try{var e=r.sheet.cssRules;return u(),!!e}catch(t){}},f)};if(e=Xt._addCacheSuffix(e),v[e]?a=v[e]:(a={passed:[],failed:[]},v[e]=a),t&&a.passed.push(t),n&&a.failed.push(n),1!==a.status)if(2!==a.status)if(3!==a.status){if(a.status=1,(o=m.createElement("link")).rel="stylesheet",o.type="text/css",o.id="u"+h++,o.async=!1,o.defer=!1,i=(new Date).getTime(),g.contentCssCors&&(o.crossOrigin="anonymous"),"onload"in o&&!((d=V.navigator.userAgent.match(/WebKit\/(\d*)/))&&parseInt(d[1],10)<536))o.onload=l,o.onerror=s;else{if(0<V.navigator.userAgent.indexOf("Firefox"))return(r=m.createElement("style")).textContent='@import "'+e+'"',f(),void y(r);l()}var d;y(o),o.href=e}else s();else u()},t=function(t){return uo.nu(function(e){n(t,H(e,q(mo.value(t))),H(e,q(mo.error(t))))})},o=function(e){return e.fold($,$)};return{load:n,loadAll:function(e,n,r){co(W(e,t)).get(function(e){var t=K(e,function(e){return e.isValue()});0<t.fail.length?r(t.fail.map(o)):n(t.pass.map(o))})}}}(a,{contentCssCors:u.contentCssCors}),l=[],f=u.schema?u.schema:di({}),d=gi({url_converter:u.url_converter,url_converter_scope:u.url_converter_scope},u.schema),m=u.ownEvents?new Se(u.proxy):Se.Event,n=f.getBlockElements(),g=gn.overrideDefaults(function(){return{context:a,element:j.getRoot()}}),p=function(e){if(e&&a&&"string"==typeof e){var t=a.getElementById(e);return t&&t.id!==e?a.getElementsByName(e)[1]:t}return e},h=function(e){return"string"==typeof e&&(e=p(e)),g(e)},v=function(e,t,n){var r,o,i=h(e);return i.length&&(o=(r=s[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},y=function(e){var t=p(e);return t?t.attributes:[]},b=function(e,t,n){var r,o;""===n&&(n=null);var i=h(e);r=i.attr(t),i.length&&((o=s[t])&&o.set?o.set(i,n,t):i.attr(t,n),r!==n&&u.onSetAttrib&&u.onSetAttrib({attrElm:i,attrName:t,attrValue:n}))},C=function(){return u.root_element||a.body},x=function(e,t){return Zr.getPos(a.body,p(e),t)},w=function(e,t,n){var r=h(e);return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}))&&(t=fe.ie&&fe.ie<12?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:undefined)},N=function(e){var t,n;return e=p(e),t=w(e,"width"),n=w(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},E=function(e,t){var n;if(!e)return!1;if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType;if(bi.test(t)){var r=t.toLowerCase().split(/,/),o=e.nodeName.toLowerCase();for(n=r.length-1;0<=n;n--)if(r[n]===o)return!0;return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e];return 0<St(t,i[0].ownerDocument||i[0],null,i).length},S=function(e,t,n,r){var o,i=[],a=p(e);for(r=r===undefined,n=n||("BODY"!==C().nodeName?C().parentNode:null),Xt.is(t,"string")&&(t="*"===(o=t)?function(e){return 1===e.nodeType}:function(e){return E(e,o)});a&&a!==n&&a.nodeType&&9!==a.nodeType;){if(!t||"function"==typeof t&&t(a)){if(!r)return[a];i.push(a)}a=a.parentNode}return r?i:null},T=function(e,t,n){var r=t;if(e)for("string"==typeof t&&(r=function(e){return E(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e;return null},k=function(e,n,r){var o,t="string"==typeof e?p(e):e;if(!t)return!1;if(Xt.isArray(t)&&(t.length||0===t.length))return o=[],hi(t,function(e,t){e&&("string"==typeof e&&(e=p(e)),o.push(n.call(r,e,t)))}),o;var i=r||c;return n.call(i,t)},_=function(e,t){h(e).each(function(e,n){hi(t,function(e,t){b(n,t,e)})})},A=function(e,r){var t=h(e);yi?t.each(function(e,t){if(!1!==t.canHaveHTML){for(;t.firstChild;)t.removeChild(t.firstChild);try{t.innerHTML="<br>"+r,t.removeChild(t.firstChild)}catch(n){gn("<div></div>").html("<br>"+r).contents().slice(1).appendTo(t)}return r}}):t.html(r)},R=function(e,n,r,o,i){return k(e,function(e){var t="string"==typeof n?a.createElement(n):n;return _(t,r),o&&("string"!=typeof o&&o.nodeType?t.appendChild(o):"string"==typeof o&&A(t,o)),i?t:e.appendChild(t)})},D=function(e,t,n){return R(a.createElement(e),e,t,n,!0)},O=ti.decode,B=ti.encodeAllRaw,P=function(e,t){var n=h(e);return t?n.each(function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)}).remove():n.remove(),1<n.length?n.toArray():n[0]},I=function(e,t,n){h(e).toggleClass(t,n).each(function(){""===this.className&&gn(this).attr("class",null)})},L=function(t,e,n){return k(e,function(e){return Xt.is(e,"array")&&(t=t.cloneNode(!0)),n&&hi(vi(e.childNodes),function(e){t.appendChild(e)}),e.parentNode.replaceChild(t,e)})},F=function(){return a.createRange()},M=function(e,t,n,r){if(Xt.isArray(e)){for(var o=e.length;o--;)e[o]=M(e[o],t,n,r);return e}return!u.collect||e!==a&&e!==i||l.push([e,t,n,r]),m.bind(e,t,n,r||j)},z=function(e,t,n){var r;if(Xt.isArray(e)){for(r=e.length;r--;)e[r]=z(e[r],t,n);return e}if(l&&(e===a||e===i))for(r=l.length;r--;){var o=l[r];e!==o[0]||t&&t!==o[1]||n&&n!==o[2]||m.unbind(o[0],o[1],o[2])}return m.unbind(e,t,n)},U=function(e){if(e&&jo.isElement(e)){var t=e.getAttribute("data-mce-contenteditable");return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},j={doc:a,settings:u,win:i,files:o,stdMode:!0,boxModel:!0,styleSheetLoader:e,boundEvents:l,styles:d,schema:f,events:m,isBlock:function(e){if("string"==typeof e)return!!n[e];if(e){var t=e.nodeType;if(t)return!(1!==t||!n[e.nodeName])}return!1},$:g,$$:h,root:null,clone:function(t,e){if(!yi||1!==t.nodeType||e)return t.cloneNode(e);if(!e){var n=a.createElement(t.nodeName);return hi(y(t),function(e){b(n,e.nodeName,v(t,e.nodeName))}),n}return null},getRoot:C,getViewPort:function(e){var t=e||i,n=t.document.documentElement;return{x:t.pageXOffset||n.scrollLeft,y:t.pageYOffset||n.scrollTop,w:t.innerWidth||n.clientWidth,h:t.innerHeight||n.clientHeight}},getRect:function(e){var t,n;return e=p(e),t=x(e),n=N(e),{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:N,getParent:function(e,t,n){var r=S(e,t,n,!1);return r&&0<r.length?r[0]:null},getParents:S,get:p,getNext:function(e,t){return T(e,t,"nextSibling")},getPrev:function(e,t){return T(e,t,"previousSibling")},select:function(e,t){return St(e,p(t)||u.root_element||a,[])},is:E,add:R,create:D,createHTML:function(e,t,n){var r,o="";for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&"undefined"!=typeof t[r]&&(o+=" "+r+'="'+B(t[r])+'"');return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(e){var t,n=a.createElement("div"),r=a.createDocumentFragment();for(r.appendChild(n),e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t);return r.removeChild(n),r},remove:P,setStyle:function(e,t,n){var r=h(e).css(t,n);u.update_styles&&wi(d,r)},getStyle:w,setStyles:function(e,t){var n=h(e).css(t);u.update_styles&&wi(d,n)},removeAllAttribs:function(e){return k(e,function(e){var t,n=e.attributes;for(t=n.length-1;0<=t;t--)e.removeAttributeNode(n.item(t))})},setAttrib:b,setAttribs:_,getAttrib:v,getPos:x,parseStyle:function(e){return d.parse(e)},serializeStyle:function(e,t){return d.serialize(e,t)},addStyle:function(e){var t,n;if(j!==Ei.DOM&&a===V.document){if(r[e])return;r[e]=!0}(n=a.getElementById("mceDefaultStyles"))||((n=a.createElement("style")).id="mceDefaultStyles",n.type="text/css",(t=a.getElementsByTagName("head")[0]).firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(a.createTextNode(e))},loadCSS:function(e){var n;j===Ei.DOM||a!==V.document?(e||(e=""),n=a.getElementsByTagName("head")[0],hi(e.split(","),function(e){var t;e=Xt._addCacheSuffix(e),o[e]||(o[e]=!0,t=D("link",{rel:"stylesheet",href:e}),n.appendChild(t))})):Ei.DOM.loadCSS(e)},addClass:function(e,t){h(e).addClass(t)},removeClass:function(e,t){I(e,t,!1)},hasClass:function(e,t){return h(e).hasClass(t)},toggleClass:I,show:function(e){h(e).show()},hide:function(e){h(e).hide()},isHidden:function(e){return"none"===h(e).css("display")},uniqueId:function(e){return(e||"mce_")+t++},setHTML:A,getOuterHTML:function(e){var t="string"==typeof e?p(e):e;return jo.isElement(t)?t.outerHTML:gn("<div></div>").append(gn(t).clone()).html()},setOuterHTML:function(e,t){h(e).each(function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}P(gn(this).html(t),!0)})},decode:O,encode:B,insertAfter:function(e,t){var r=p(t);return k(e,function(e){var t,n;return t=r.parentNode,(n=r.nextSibling)?t.insertBefore(e,n):t.appendChild(e),e})},replace:L,rename:function(t,e){var n;return t.nodeName!==e.toUpperCase()&&(n=D(e),hi(y(t),function(e){b(n,e.nodeName,v(t,e.nodeName))}),L(n,t,!0)),n||t},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode;if(r===n)break;r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return d.toHex(Xt.trim(e))},run:k,getAttribs:y,isEmpty:function(e,t){var n,r,o,i,a,u,s=0;if(e=e.firstChild){a=new go(e,e.parentNode),t=t||(f?f.getNonEmptyElements():null),i=f?f.getWhiteSpaceElements():{};do{if(o=e.nodeType,jo.isElement(e)){var c=e.getAttribute("data-mce-bogus");if(c){e=a.next("all"===c);continue}if(u=e.nodeName.toLowerCase(),t&&t[u]){if("br"===u){s++,e=a.next();continue}return!1}for(n=(r=y(e)).length;n--;)if("name"===(u=r[n].nodeName)||"data-mce-bookmark"===u)return!1}if(8===o)return!1;if(3===o&&!Ci.test(e.nodeValue))return!1;if(3===o&&e.parentNode&&i[e.parentNode.nodeName]&&Ci.test(e.nodeValue))return!1;e=a.next()}while(e)}return s<=1},createRng:F,nodeIndex:Ni,split:function(e,t,n){var r,o,i,a=F();if(e&&t)return a.setStart(e.parentNode,Ni(e)),a.setEnd(t.parentNode,Ni(t)),r=a.extractContents(),(a=F()).setStart(t.parentNode,Ni(t)+1),a.setEnd(e.parentNode,Ni(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(qo.trimNode(j,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(qo.trimNode(j,o),e),P(e),n||t},bind:M,unbind:z,fire:function(e,t,n){return m.fire(e,t,n)},getContentEditable:U,getContentEditableParent:function(e){for(var t=C(),n=null;e&&e!==t&&null===(n=U(e));e=e.parentNode);return n},destroy:function(){if(l)for(var e=l.length;e--;){var t=l[e];m.unbind(t[0],t[1],t[2])}St.setDocument&&St.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}};return s=xi(d,u,function(){return j}),j}(pi=Ei||(Ei={})).DOM=pi(V.document),pi.nodeIndex=Ni;var Si=Ei,Ti=Si.DOM,ki=Xt.each,_i=Xt.grep,Ai=function(e){return"function"==typeof e},Ri=function(){var l={},o=[],i={},a=[],f=0;this.isDone=function(e){return 2===l[e]},this.markDone=function(e){l[e]=2},this.add=this.load=function(e,t,n,r){l[e]===undefined&&(o.push(e),l[e]=0),t&&(i[e]||(i[e]=[]),i[e].push({success:t,failure:r,scope:n||this}))},this.remove=function(e){delete l[e],delete i[e]},this.loadQueue=function(e,t,n){this.loadScripts(o,e,t,n)},this.loadScripts=function(n,e,t,r){var u,s=[],c=function(t,e){ki(i[e],function(e){Ai(e[t])&&e[t].call(e.scope)}),i[e]=undefined};a.push({success:e,failure:r,scope:t||this}),(u=function(){var e=_i(n);if(n.length=0,ki(e,function(e){var t,n,r,o,i,a;2!==l[e]?3!==l[e]?1!==l[e]&&(l[e]=1,f++,t=e,n=function(){l[e]=2,f--,c("success",e),u()},r=function(){l[e]=3,f--,s.push(e),c("failure",e),u()},i=(a=Ti).uniqueId(),(o=V.document.createElement("script")).id=i,o.type="text/javascript",o.src=Xt._addCacheSuffix(t),o.onload=function(){a.remove(i),o&&(o.onreadystatechange=o.onload=o=null),n()},o.onerror=function(){Ai(r)?r():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+t)},(V.document.getElementsByTagName("head")[0]||V.document.body).appendChild(o)):c("failure",e):c("success",e)}),!f){var t=a.slice(0);a.length=0,ki(t,function(e){0===s.length?Ai(e.success)&&e.success.call(e.scope):Ai(e.failure)&&e.failure.call(e.scope,s)})}})()}};Ri.ScriptLoader=new Ri;var Di,Oi=Xt.each;function Bi(){var r=this,o=[],a={},u={},i=[],s=function(e){var t;return u[e]&&(t=u[e].dependencies),t||[]},c=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},l=function(e,n,t,r){var o=s(e);Oi(o,function(e){var t=c(n,e);f(t.resource,t,undefined,undefined)}),t&&(r?t.call(r):t.call(Ri))},f=function(e,t,n,r,o){if(!a[e]){var i="string"==typeof t?t:t.prefix+t.resource+t.suffix;0!==i.indexOf("/")&&-1===i.indexOf("://")&&(i=Bi.baseURL+"/"+i),a[e]=i.substring(0,i.lastIndexOf("/")),u[e]?l(e,t,n,r):Ri.ScriptLoader.add(i,function(){return l(e,t,n,r)},r,o)}};return{items:o,urls:a,lookup:u,_listeners:i,get:function(e){return u[e]?u[e].instance:undefined},dependencies:s,requireLangPack:function(e,t){var n=Bi.language;if(n&&!1!==Bi.languageLoad){if(t)if(-1!==(t=","+t+",").indexOf(","+n.substr(0,2)+","))n=n.substr(0,2);else if(-1===t.indexOf(","+n+","))return;Ri.ScriptLoader.add(a[e]+"/langs/"+n+".js")}},add:function(t,e,n){o.push(e),u[t]={instance:e,dependencies:n};var r=K(i,function(e){return e.name===t});return i=r.fail,Oi(r.pass,function(e){e.callback()}),e},remove:function(e){delete a[e],delete u[e]},createUrl:c,addComponents:function(e,t){var n=r.urls[e];Oi(t,function(e){Ri.ScriptLoader.add(n+"/"+e)})},load:f,waitFor:function(e,t){u.hasOwnProperty(e)?t():i.push({name:e,callback:t})}}}(Di=Bi||(Bi={})).PluginManager=Di(),Di.ThemeManager=Di();var Pi=function(t,n){Vr(t).each(function(e){e.dom().insertBefore(n.dom(),t.dom())})},Ii=function(e,t){qr(e).fold(function(){Vr(e).each(function(e){Fi(e,t)})},function(e){Pi(e,t)})},Li=function(t,n){Yr(t).fold(function(){Fi(t,n)},function(e){t.dom().insertBefore(n.dom(),e.dom())})},Fi=function(e,t){e.dom().appendChild(t.dom())},Mi=function(t,e){z(e,function(e){Fi(t,e)})},zi=function(e){e.dom().textContent="",z(Kr(e),function(e){Ui(e)})},Ui=function(e){var t=e.dom();null!==t.parentNode&&t.parentNode.removeChild(t)},ji=function(e){var t,n=Kr(e);0<n.length&&(t=e,z(n,function(e){Pi(t,e)})),Ui(e)},Vi=function(n,r){var o=null;return{cancel:function(){null!==o&&(V.clearTimeout(o),o=null)},throttle:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];null===o&&(o=V.setTimeout(function(){n.apply(null,e),o=null},r))}}},Hi=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return Hi(n())}}},qi=function(e,t){var n=Er(e,t);return n===undefined||""===n?[]:n.split(" ")},$i=function(e){return e.dom().classList!==undefined},Wi=function(e,t){return o=t,i=qi(n=e,r="class").concat([o]),wr(n,r,i.join(" ")),!0;var n,r,o,i},Ki=function(e,t){return o=t,0<(i=U(qi(n=e,r="class"),function(e){return e!==o})).length?wr(n,r,i.join(" ")):Sr(n,r),!1;var n,r,o,i},Xi=function(e,t){$i(e)?e.dom().classList.add(t):Wi(e,t)},Yi=function(e){0===($i(e)?e.dom().classList:qi(e,"class")).length&&Sr(e,"class")},Gi=function(e,t){return $i(e)&&e.dom().classList.contains(t)},Ji=function(e,t){var n=[];return z(Kr(e),function(e){t(e)&&(n=n.concat([e])),n=n.concat(Ji(e,t))}),n},Qi=function(e,t){return n=t,o=(r=e)===undefined?V.document:r.dom(),Fr(o)?[]:W(o.querySelectorAll(n),ar.fromDom);var n,r,o};function Zi(e,t,n,r,o){return e(n,r)?_.some(n):D(o)&&o(n)?_.none():t(n,r,o)}var ea,ta=function(e,t,n){for(var r=e.dom(),o=D(n)?n:q(!1);r.parentNode;){r=r.parentNode;var i=ar.fromDom(r);if(t(i))return _.some(i);if(o(i))break}return _.none()},na=function(e,t,n){return Zi(function(e,t){return t(e)},ta,e,t,n)},ra=function(e,t,n){return ta(e,function(e){return Lr(e,t)},n)},oa=function(e,t){return n=t,o=(r=e)===undefined?V.document:r.dom(),Fr(o)?_.none():_.from(o.querySelector(n)).map(ar.fromDom);var n,r,o},ia=function(e,t,n){return Zi(Lr,ra,e,t,n)},aa=q("mce-annotation"),ua=q("data-mce-annotation"),sa=q("data-mce-annotation-uid"),ca=function(r,e){var t=r.selection.getRng(),n=ar.fromDom(t.startContainer),o=ar.fromDom(r.getBody()),i=e.fold(function(){return"."+aa()},function(e){return"["+ua()+'="'+e+'"]'}),a=Xr(n,t.startOffset).getOr(n),u=ia(a,i,function(e){return Mr(e,o)}),s=function(e,t){return n=t,(r=e.dom())&&r.hasAttribute&&r.hasAttribute(n)?_.some(Er(e,t)):_.none();var n,r};return u.bind(function(e){return s(e,""+sa()).bind(function(n){return s(e,""+ua()).map(function(e){var t=la(r,n);return{uid:n,name:e,elements:t}})})})},la=function(e,t){var n=ar.fromDom(e.getBody());return Qi(n,"["+sa()+'="'+t+'"]')},fa=function(i,e){var n,r,o,a=Hi({}),c=function(e,t){u(e,function(e){return t(e),e})},u=function(e,t){var n=a.get(),r=t(n.hasOwnProperty(e)?n[e]:{listeners:[],previous:Hi(_.none())});n[e]=r,a.set(n)},t=(n=function(){var e,t,n,r=a.get(),o=(e=gr(r),(n=B.call(e,0)).sort(t),n);z(o,function(e){u(e,function(u){var s=u.previous.get();return ca(i,_.some(e)).fold(function(){var t;s.isSome()&&(c(t=e,function(e){z(e.listeners,function(e){return e(!1,t)})}),u.previous.set(_.none()))},function(e){var t,n,r,o=e.uid,i=e.name,a=e.elements;s.is(o)||(n=o,r=a,c(t=i,function(e){z(e.listeners,function(e){return e(!0,t,{uid:n,nodes:W(r,function(e){return e.dom()})})})}),u.previous.set(_.some(o)))}),{previous:u.previous,listeners:u.listeners}})})},r=30,o=null,{cancel:function(){null!==o&&(V.clearTimeout(o),o=null)},throttle:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];null!==o&&V.clearTimeout(o),o=V.setTimeout(function(){n.apply(null,e),o=null},r)}});return i.on("remove",function(){t.cancel()}),i.on("nodeChange",function(){t.throttle()}),{addListener:function(e,t){u(e,function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}})}}},da=function(e,n){e.on("init",function(){e.serializer.addNodeFilter("span",function(e){z(e,function(t){var e;(e=t,_.from(e.attributes.map[ua()]).bind(n.lookup)).each(function(e){!1===e.persistent&&t.unwrap()})})})})},ma=function(){return(ma=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ga=0,pa=function(e,t){return ar.fromDom(e.dom().cloneNode(t))},ha=function(e){return pa(e,!1)},va=function(e){return pa(e,!0)},ya=function(e,t){var n,r,o=Ur(e).dom(),i=ar.fromDom(o.createDocumentFragment()),a=(n=t,(r=(o||V.document).createElement("div")).innerHTML=n,Kr(ar.fromDom(r)));Mi(i,a),zi(e),Fi(e,i)},ba="\ufeff",Ca=function(e){return e===ba},xa=ba,wa=function(e){return e.replace(new RegExp(ba,"g"),"")},Na=jo.isElement,Ea=jo.isText,Sa=function(e){return Ea(e)&&(e=e.parentNode),Na(e)&&e.hasAttribute("data-mce-caret")},Ta=function(e){return Ea(e)&&Ca(e.data)},ka=function(e){return Sa(e)||Ta(e)},_a=function(e){return e.firstChild!==e.lastChild||!jo.isBr(e.firstChild)},Aa=function(e){var t=e.container();return!(!e||!jo.isText(t))&&(t.data.charAt(e.offset())===xa||e.isAtStart()&&Ta(t.previousSibling))},Ra=function(e){var t=e.container();return!(!e||!jo.isText(t))&&(t.data.charAt(e.offset()-1)===xa||e.isAtEnd()&&Ta(t.nextSibling))},Da=function(e,t,n){var r,o,i;return(r=t.ownerDocument.createElement(e)).setAttribute("data-mce-caret",n?"before":"after"),r.setAttribute("data-mce-bogus","all"),r.appendChild(((i=V.document.createElement("br")).setAttribute("data-mce-bogus","1"),i)),o=t.parentNode,n?o.insertBefore(r,t):t.nextSibling?o.insertBefore(r,t.nextSibling):o.appendChild(r),r},Oa=function(e){return Ea(e)&&e.data[0]===xa},Ba=function(e){return Ea(e)&&e.data[e.data.length-1]===xa},Pa=function(e){return e&&e.hasAttribute("data-mce-caret")?(t=e.getElementsByTagName("br"),n=t[t.length-1],jo.isBogus(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null;var t,n},Ia=jo.isContentEditableTrue,La=jo.isContentEditableFalse,Fa=jo.isBr,Ma=jo.isText,za=jo.matchNodeNames("script style textarea"),Ua=jo.matchNodeNames("img input textarea hr iframe video audio object"),ja=jo.matchNodeNames("table"),Va=ka,Ha=function(e){return!Va(e)&&(Ma(e)?!za(e.parentNode):Ua(e)||Fa(e)||ja(e)||qa(e))},qa=function(e){return!1===(t=e,jo.isElement(t)&&"true"===t.getAttribute("unselectable"))&&La(e);var t},$a=function(e,t){return Ha(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(qa(e))return!1;if(Ia(e))return!0}return!0}(e,t)},Wa=Math.round,Ka=function(e){return e?{left:Wa(e.left),top:Wa(e.top),bottom:Wa(e.bottom),right:Wa(e.right),width:Wa(e.width),height:Wa(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},Xa=function(e,t){return e=Ka(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},Ya=function(e,t,n){return 0<=e&&e<=Math.min(t.height,n.height)/2},Ga=function(e,t){var n=Math.min(t.height/2,e.height/2);return e.bottom-n<t.top||!(e.top>t.bottom)&&Ya(t.top-e.bottom,e,t)},Ja=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&Ya(t.bottom-e.top,e,t)},Qa=function(e,t,n){return t>=e.left&&t<=e.right&&n>=e.top&&n<=e.bottom},Za=function(e){var t=e.startContainer,n=e.startOffset;return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},eu=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},tu=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),nu=function(e){return"string"==typeof e&&768<=e.charCodeAt(0)&&tu.test(e)},ru=function(e,t,n){return e.isSome()&&t.isSome()?_.some(n(e.getOrDie(),t.getOrDie())):_.none()},ou=[].slice,iu=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=ou.call(arguments);return function(e){for(var t=0;t<n.length;t++)if(!n[t](e))return!1;return!0}},au=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=ou.call(arguments);return function(e){for(var t=0;t<n.length;t++)if(n[t](e))return!0;return!1}},uu=jo.isElement,su=Ha,cu=jo.matchStyleValues("display","block table"),lu=jo.matchStyleValues("float","left right"),fu=iu(uu,su,y(lu)),du=y(jo.matchStyleValues("white-space","pre pre-line pre-wrap")),mu=jo.isText,gu=jo.isBr,pu=Si.nodeIndex,hu=eu,vu=function(e){return"createRange"in e?e.createRange():Si.DOM.createRng()},yu=function(e){return e&&/[\r\n\t ]/.test(e)},bu=function(e){return!!e.setStart&&!!e.setEnd},Cu=function(e){var t,n=e.startContainer,r=e.startOffset;return!!(yu(e.toString())&&du(n.parentNode)&&jo.isText(n)&&(t=n.data,yu(t[r-1])||yu(t[r+1])))},xu=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},wu=function(e){var t,n,r,o,i,a,u,s;return t=0<(n=e.getClientRects()).length?Ka(n[0]):Ka(e.getBoundingClientRect()),!bu(e)&&gu(e)&&xu(t)?(i=(r=e).ownerDocument,a=vu(i),u=i.createTextNode("\xa0"),(s=r.parentNode).insertBefore(u,r),a.setStart(u,0),a.setEnd(u,1),o=Ka(a.getBoundingClientRect()),s.removeChild(u),o):xu(t)&&bu(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset;if(t===n&&jo.isText(n)&&0===r&&1===o){var i=e.cloneRange();return i.setEndAfter(n),wu(i)}return null}(e):t},Nu=function(e,t){var n=Xa(e,t);return n.width=1,n.right=n.left+1,n},Eu=function(e){var t,n,r=[],o=function(e){var t,n;0!==e.height&&(0<r.length&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=vu(e.ownerDocument);if(t<e.data.length){if(nu(e.data[t]))return r;if(nu(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!Cu(n)))return o(Nu(wu(n),!1)),r}0<t&&(n.setStart(e,t-1),n.setEnd(e,t),Cu(n)||o(Nu(wu(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),Cu(n)||o(Nu(wu(n),!0)))};if(mu(e.container()))return i(e.container(),e.offset()),r;if(uu(e.container()))if(e.isAtEnd())n=hu(e.container(),e.offset()),mu(n)&&i(n,n.data.length),fu(n)&&!gu(n)&&o(Nu(wu(n),!1));else{if(n=hu(e.container(),e.offset()),mu(n)&&i(n,0),fu(n)&&e.isAtEnd())return o(Nu(wu(n),!1)),r;t=hu(e.container(),e.offset()-1),fu(t)&&!gu(t)&&(cu(t)||cu(n)||!fu(n))&&o(Nu(wu(t),!1)),fu(n)&&o(Nu(wu(n),!0))}return r};function Su(t,n,e){var r=function(){return e||(e=Eu(Su(t,n))),e};return{container:q(t),offset:q(n),toRange:function(){var e;return(e=vu(t.ownerDocument)).setStart(t,n),e.setEnd(t,n),e},getClientRects:r,isVisible:function(){return 0<r().length},isAtStart:function(){return mu(t),0===n},isAtEnd:function(){return mu(t)?n>=t.data.length:n>=t.childNodes.length},isEqual:function(e){return e&&t===e.container()&&n===e.offset()},getNode:function(e){return hu(t,e?n-1:n)}}}(ea=Su||(Su={})).fromRangeStart=function(e){return ea(e.startContainer,e.startOffset)},ea.fromRangeEnd=function(e){return ea(e.endContainer,e.endOffset)},ea.after=function(e){return ea(e.parentNode,pu(e)+1)},ea.before=function(e){return ea(e.parentNode,pu(e))},ea.isAbove=function(e,t){return ru(Z(t.getClientRects()),ee(e.getClientRects()),Ga).getOr(!1)},ea.isBelow=function(e,t){return ru(ee(t.getClientRects()),Z(e.getClientRects()),Ja).getOr(!1)},ea.isAtStart=function(e){return!!e&&e.isAtStart()},ea.isAtEnd=function(e){return!!e&&e.isAtEnd()},ea.isTextPosition=function(e){return!!e&&jo.isText(e.container())},ea.isElementPosition=function(e){return!1===ea.isTextPosition(e)};var Tu,ku,_u=Su,Au=jo.isText,Ru=jo.isBogus,Du=Si.nodeIndex,Ou=function(e){var t=e.parentNode;return Ru(t)?Ou(t):t},Bu=function(e){return e?Ht.reduce(e.childNodes,function(e,t){return Ru(t)&&"BR"!==t.nodeName?e=e.concat(Bu(t)):e.push(t),e},[]):[]},Pu=function(t){return function(e){return t===e}},Iu=function(e){var t,r,n,o;return(Au(e)?"text()":e.nodeName.toLowerCase())+"["+(r=Bu(Ou(t=e)),n=Ht.findIndex(r,Pu(t),t),r=r.slice(0,n+1),o=Ht.reduce(r,function(e,t,n){return Au(t)&&Au(r[n-1])&&e++,e},0),r=Ht.filter(r,jo.matchNodeNames(t.nodeName)),(n=Ht.findIndex(r,Pu(t),t))-o)+"]"},Lu=function(e,t){var n,r,o,i,a,u=[];return n=t.container(),r=t.offset(),Au(n)?o=function(e,t){for(;(e=e.previousSibling)&&Au(e);)t+=e.data.length;return t}(n,r):(r>=(i=n.childNodes).length?(o="after",r=i.length-1):o="before",n=i[r]),u.push(Iu(n)),a=function(e,t,n){var r=[];for(t=t.parentNode;!(t===e||n&&n(t));t=t.parentNode)r.push(t);return r}(e,n),a=Ht.filter(a,y(jo.isBogus)),(u=u.concat(Ht.map(a,function(e){return Iu(e)}))).reverse().join("/")+","+o},Fu=function(e,t){var n,r,o;return t?(t=(n=t.split(","))[0].split("/"),o=1<n.length?n[1]:"before",(r=Ht.reduce(t,function(e,t){return(t=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))?("text()"===t[1]&&(t[1]="#text"),n=e,r=t[1],o=parseInt(t[2],10),i=Bu(n),i=Ht.filter(i,function(e,t){return!Au(e)||!Au(i[t-1])}),(i=Ht.filter(i,jo.matchNodeNames(r)))[o]):null;var n,r,o,i},e))?Au(r)?function(e,t){for(var n,r=e,o=0;Au(r);){if(n=r.data.length,o<=t&&t<=o+n){e=r,t-=o;break}if(!Au(r.nextSibling)){e=r,t=n;break}o+=n,r=r.nextSibling}return Au(e)&&t>e.data.length&&(t=e.data.length),_u(e,t)}(r,parseInt(o,10)):(o="after"===o?Du(r)+1:Du(r),_u(r.parentNode,o)):null):null},Mu=function(e,t){jo.isText(t)&&0===t.data.length&&e.remove(t)},zu=function(e,t,n){var r,o,i,a,u,s,c;jo.isDocumentFragment(n)?(i=e,a=t,u=n,s=_.from(u.firstChild),c=_.from(u.lastChild),a.insertNode(u),s.each(function(e){return Mu(i,e.previousSibling)}),c.each(function(e){return Mu(i,e.nextSibling)})):(r=e,o=n,t.insertNode(o),Mu(r,o.previousSibling),Mu(r,o.nextSibling))},Uu=jo.isContentEditableFalse,ju=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],s=[],c=0,l=e.getRoot();for(jo.isText(a)?s.push(n?function(e,t,n){var r,o;for(o=e(t.data.slice(0,n)).length,r=t.previousSibling;r&&jo.isText(r);r=r.previousSibling)o+=e(r.data).length;return o}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(c=1,u=Math.max(0,i.length-1)),s.push(e.nodeIndex(i[u],n)+c));a&&a!==l;a=a.parentNode)s.push(e.nodeIndex(a,n));return s},Vu=function(e,t,n){var r=0;return Xt.each(e.select(t),function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++}),r},Hu=function(e,t){var n,r,o,i=t?"start":"end";n=e[i+"Container"],r=e[i+"Offset"],jo.isElement(n)&&"TR"===n.nodeName&&(n=(o=n.childNodes)[Math.min(t?r:r-1,o.length-1)])&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r))},qu=function(e){return Hu(e,!0),Hu(e,!1),e},$u=function(e,t){var n;if(jo.isElement(e)&&(e=eu(e,t),Uu(e)))return e;if(ka(e)){if(jo.isText(e)&&Sa(e)&&(e=e.parentNode),n=e.previousSibling,Uu(n))return n;if(n=e.nextSibling,Uu(n))return n}},Wu=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng();if(Uu(r)||"IMG"===o)return{name:o,index:Vu(n.dom,o,r)};var a,u,s,c,l,f,d,m=$u((a=i).startContainer,a.startOffset)||$u(a.endContainer,a.endOffset);return m?{name:o=m.tagName,index:Vu(n.dom,o,m)}:(u=e,c=t,l=i,f=(s=n).dom,(d={}).start=ju(f,u,c,l,!0),s.isCollapsed()||(d.end=ju(f,u,c,l,!1)),d)},Ku=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"};return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},Xu=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName;if("IMG"===u)return{name:u,index:Vu(n,u,a)};var s=qu(r.cloneRange());if(!i){s.collapse(!1);var c=Ku(n,o+"_end",t);zu(n,s,c)}(r=qu(r)).collapse(!0);var l=Ku(n,o+"_start",t);return zu(n,r,l),e.moveToBookmark({id:o,keep:1}),{id:o}},Yu={getBookmark:function(e,t,n){return 2===t?Wu(wa,n,e):3===t?(o=(r=e).getRng(),{start:Lu(r.dom.getRoot(),_u.fromRangeStart(o)),end:Lu(r.dom.getRoot(),_u.fromRangeEnd(o))}):t?{rng:e.getRng()}:Xu(e,!1);var r,o},getUndoBookmark:d(Wu,$,!0),getPersistentBookmark:Xu},Gu="_mce_caret",Ju=function(e){return jo.isElement(e)&&e.id===Gu},Qu=function(e,t){for(;t&&t!==e;){if(t.id===Gu)return t;t=t.parentNode}return null},Zu=jo.isElement,es=jo.isText,ts=function(e){var t=e.parentNode;t&&t.removeChild(e)},ns=function(e,t){0===t.length?ts(e):e.nodeValue=t},rs=function(e){var t=wa(e);return{count:e.length-t.length,text:t}},os=function(e,t){return us(e),t},is=function(e,t){var n,r,o,i=t.container(),a=(n=te(i.childNodes),r=e,o=L(n,r),-1===o?_.none():_.some(o)).map(function(e){return e<t.offset()?_u(i,t.offset()-1):t}).getOr(t);return us(e),a},as=function(e,t){return es(e)&&t.container()===e?(r=t,o=rs((n=e).data.substr(0,r.offset())),i=rs(n.data.substr(r.offset())),0<(a=o.text+i.text).length?(ns(n,a),_u(n,r.offset()-o.count)):r):os(e,t);var n,r,o,i,a},us=function(e){if(Zu(e)&&ka(e)&&(_a(e)?e.removeAttribute("data-mce-caret"):ts(e)),es(e)){var t=wa(function(e){try{return e.nodeValue}catch(t){return""}}(e));ns(e,t)}},ss={removeAndReposition:function(e,t){return _u.isTextPosition(t)?as(e,t):(n=e,(r=t).container()===n.parentNode?is(n,r):os(n,r));var n,r},remove:us},cs=or.detect().browser,ls=jo.isContentEditableFalse,fs=function(e,t,n){var r,o,i,a,u,s=Xa(t.getBoundingClientRect(),n);return"BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,i=e.scrollTop||r.scrollTop):(u=e.getBoundingClientRect(),o=e.scrollLeft-u.left,i=e.scrollTop-u.top),s.left+=o,s.right+=o,s.top+=i,s.bottom+=i,s.width=1,0<(a=t.offsetWidth-t.clientWidth)&&(n&&(a*=-1),s.left+=a,s.right+=a),s},ds=function(a,u,e){var t,s,c=Hi(_.none()),l=function(){!function(e){var t,n,r,o,i;for(t=gn("*[contentEditable=false]",e),o=0;o<t.length;o++)r=(n=t[o]).previousSibling,Ba(r)&&(1===(i=r.data).length?r.parentNode.removeChild(r):r.deleteData(i.length-1,1)),r=n.nextSibling,Oa(r)&&(1===(i=r.data).length?r.parentNode.removeChild(r):r.deleteData(0,1))}(a),s&&(ss.remove(s),s=null),c.get().each(function(e){gn(e.caret).remove(),c.set(_.none())}),clearInterval(t)},f=function(){t=he.setInterval(function(){e()?gn("div.mce-visual-caret",a).toggleClass("mce-visual-caret-hidden"):gn("div.mce-visual-caret",a).addClass("mce-visual-caret-hidden")},500)};return{show:function(t,e){var n,r,o;if(l(),o=e,jo.isElement(o)&&/^(TD|TH)$/i.test(o.tagName))return null;if(!u(e))return s=function(e,t){var n,r,o;if(r=e.ownerDocument.createTextNode(xa),o=e.parentNode,t){if(n=e.previousSibling,Ea(n)){if(ka(n))return n;if(Ba(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,Ea(n)){if(ka(n))return n;if(Oa(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(e,t),r=e.ownerDocument.createRange(),ls(s.nextSibling)?(r.setStart(s,0),r.setEnd(s,0)):(r.setStart(s,1),r.setEnd(s,1)),r;s=Da("p",e,t),n=fs(a,e,t),gn(s).css("top",n.top);var i=gn('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(a)[0];return c.set(_.some({caret:i,element:e,before:t})),c.get().each(function(e){t&&gn(e.caret).addClass("mce-visual-caret-before")}),f(),(r=e.ownerDocument.createRange()).setStart(s,0),r.setEnd(s,0),r},hide:l,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){c.get().each(function(e){var t=fs(a,e.element,e.before);gn(e.caret).css(t)})},destroy:function(){return he.clearInterval(t)}}},ms=function(){return cs.isIE()||cs.isEdge()||cs.isFirefox()},gs=function(e){return ls(e)||jo.isTable(e)&&ms()},ps=jo.isContentEditableFalse,hs=jo.matchStyleValues("display","block table table-cell table-caption list-item"),vs=ka,ys=Sa,bs=jo.isElement,Cs=Ha,xs=function(e){return 0<e},ws=function(e){return e<0},Ns=function(e,t){for(var n;n=e(t);)if(!ys(n))return n;return null},Es=function(e,t,n,r,o){var i=new go(e,r);if(ws(t)){if((ps(e)||ys(e))&&n(e=Ns(i.prev,!0)))return e;for(;e=Ns(i.prev,o);)if(n(e))return e}if(xs(t)){if((ps(e)||ys(e))&&n(e=Ns(i.next,!0)))return e;for(;e=Ns(i.next,o);)if(n(e))return e}return null},Ss=function(e,t){for(;e&&e!==t;){if(hs(e))return e;e=e.parentNode}return null},Ts=function(e,t,n){return Ss(e.container(),n)===Ss(t.container(),n)},ks=function(e,t){var n,r;return t?(n=t.container(),r=t.offset(),bs(n)?n.childNodes[r+e]:null):null},_s=function(e,t){var n=t.ownerDocument.createRange();return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},As=function(e,t,n){var r,o,i,a;for(o=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[o],vs(r)&&(r=r[o]),ps(r)){if(a=n,Ss(r,i=t)===Ss(a,i))return r;break}if(Cs(r))break;n=n.parentNode}return null},Rs=d(_s,!0),Ds=d(_s,!1),Os=function(e,t,n){var r,o,i,a,u=d(As,!0,t),s=d(As,!1,t);if(o=n.startContainer,i=n.startOffset,Sa(o)){if(bs(o)||(o=o.parentNode),"before"===(a=o.getAttribute("data-mce-caret"))&&(r=o.nextSibling,gs(r)))return Rs(r);if("after"===a&&(r=o.previousSibling,gs(r)))return Ds(r)}if(!n.collapsed)return n;if(jo.isText(o)){if(vs(o)){if(1===e){if(r=s(o))return Rs(r);if(r=u(o))return Ds(r)}if(-1===e){if(r=u(o))return Ds(r);if(r=s(o))return Rs(r)}return n}if(Ba(o)&&i>=o.data.length-1)return 1===e&&(r=s(o))?Rs(r):n;if(Oa(o)&&i<=1)return-1===e&&(r=u(o))?Ds(r):n;if(i===o.data.length)return(r=s(o))?Rs(r):n;if(0===i)return(r=u(o))?Ds(r):n}return n},Bs=function(e,t){return _.from(ks(e?0:-1,t)).filter(ps)},Ps=function(e,t,n){var r=Os(e,t,n);return-1===e?Su.fromRangeStart(r):Su.fromRangeEnd(r)},Is=function(e){return _.from(e.getNode()).map(ar.fromDom)},Ls=function(e,t){for(;t=e(t);)if(t.isVisible())return t;return t},Fs=function(e,t){var n=Ts(e,t);return!(n||!jo.isBr(e.getNode()))||n};(ku=Tu||(Tu={}))[ku.Backwards=-1]="Backwards",ku[ku.Forwards=1]="Forwards";var Ms,zs,Us,js=jo.isContentEditableFalse,Vs=jo.isText,Hs=jo.isElement,qs=jo.isBr,$s=Ha,Ws=function(e){return Ua(e)||!!qa(t=e)&&!0!==j(te(t.getElementsByTagName("*")),function(e,t){return e||Ia(t)},!1);var t},Ks=$a,Xs=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},Ys=function(e,t){if(xs(e)){if($s(t.previousSibling)&&!Vs(t.previousSibling))return _u.before(t);if(Vs(t))return _u(t,0)}if(ws(e)){if($s(t.nextSibling)&&!Vs(t.nextSibling))return _u.after(t);if(Vs(t))return _u(t,t.data.length)}return ws(e)?qs(t)?_u.before(t):_u.after(t):_u.before(t)},Gs=function(e,t,n){var r,o,i,a,u;if(!Hs(n)||!t)return null;if(t.isEqual(_u.after(n))&&n.lastChild){if(u=_u.after(n.lastChild),ws(e)&&$s(n.lastChild)&&Hs(n.lastChild))return qs(n.lastChild)?_u.before(n.lastChild):u}else u=t;var s,c,l,f=u.container(),d=u.offset();if(Vs(f)){if(ws(e)&&0<d)return _u(f,--d);if(xs(e)&&d<f.length)return _u(f,++d);r=f}else{if(ws(e)&&0<d&&(o=Xs(f,d-1),$s(o)))return!Ws(o)&&(i=Es(o,e,Ks,o))?Vs(i)?_u(i,i.data.length):_u.after(i):Vs(o)?_u(o,o.data.length):_u.before(o);if(xs(e)&&d<f.childNodes.length&&(o=Xs(f,d),$s(o)))return qs(o)?(s=n,(l=(c=o).nextSibling)&&$s(l)?Vs(l)?_u(l,0):_u.before(l):Gs(Tu.Forwards,_u.after(c),s)):!Ws(o)&&(i=Es(o,e,Ks,o))?Vs(i)?_u(i,0):_u.before(i):Vs(o)?_u(o,0):_u.after(o);r=o||u.getNode()}return(xs(e)&&u.isAtEnd()||ws(e)&&u.isAtStart())&&(r=Es(r,e,q(!0),n,!0),Ks(r,n))?Ys(e,r):(o=Es(r,e,Ks,n),!(a=Ht.last(U(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode;return n}(f,n),js)))||o&&a.contains(o)?o?Ys(e,o):null:u=xs(e)?_u.after(a):_u.before(a))},Js=function(t){return{next:function(e){return Gs(Tu.Forwards,e,t)},prev:function(e){return Gs(Tu.Backwards,e,t)}}},Qs=function(e){return _u.isTextPosition(e)?0===e.offset():Ha(e.getNode())},Zs=function(e){if(_u.isTextPosition(e)){var t=e.container();return e.offset()===t.data.length}return Ha(e.getNode(!0))},ec=function(e,t){return!_u.isTextPosition(e)&&!_u.isTextPosition(t)&&e.getNode()===t.getNode(!0)},tc=function(e,t,n){return e?!ec(t,n)&&(r=t,!(!_u.isTextPosition(r)&&jo.isBr(r.getNode())))&&Zs(t)&&Qs(n):!ec(n,t)&&Qs(t)&&Zs(n);var r},nc=function(e,t,n){var r=Js(t);return _.from(e?r.next(n):r.prev(n))},rc=function(t,n,r){return nc(t,n,r).bind(function(e){return Ts(r,e,n)&&tc(t,r,e)?nc(t,n,e):_.some(e)})},oc=function(t,n,e,r){return rc(t,n,e).bind(function(e){return r(e)?oc(t,n,e,r):_.some(e)})},ic=function(e,t){var n,r,o,i,a,u=e?t.firstChild:t.lastChild;return jo.isText(u)?_.some(_u(u,e?0:u.data.length)):u?Ha(u)?_.some(e?_u.before(u):(a=u,jo.isBr(a)?_u.before(a):_u.after(a))):(r=t,o=u,i=(n=e)?_u.before(o):_u.after(o),nc(n,r,i)):_.none()},ac=d(nc,!0),uc=d(nc,!1),sc={fromPosition:nc,nextPosition:ac,prevPosition:uc,navigate:rc,navigateIgnore:oc,positionIn:ic,firstPositionIn:d(ic,!0),lastPositionIn:d(ic,!1)},cc=function(e,t){return jo.isElement(t)&&e.isBlock(t)&&!t.innerHTML&&!fe.ie&&(t.innerHTML='<br data-mce-bogus="1" />'),t},lc=function(e,t){return sc.lastPositionIn(e).fold(function(){return!1},function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0})},fc=function(e,t,n){return!(!1!==t.hasChildNodes()||!Qu(e,t)||(o=n,i=(r=t).ownerDocument.createTextNode(xa),r.appendChild(i),o.setStart(i,0),o.setEnd(i,0),0));var r,o,i},dc=function(e,t,n,r){var o,i,a,u,s=n[t?"start":"end"],c=e.getRoot();if(s){for(a=s[0],i=c,o=s.length-1;1<=o;o--){if(u=i.childNodes,fc(c,i,r))return!0;if(s[o]>u.length-1)return!!fc(c,i,r)||lc(i,r);i=u[s[o]]}3===i.nodeType&&(a=Math.min(s[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(s[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},mc=function(e){return jo.isText(e)&&0<e.data.length},gc=function(e,t,n){var r,o,i,a,u,s,c=e.get(n.id+"_"+t),l=n.keep;if(c){if(r=c.parentNode,"start"===t?l?c.hasChildNodes()?(r=c.firstChild,o=1):mc(c.nextSibling)?(r=c.nextSibling,o=0):mc(c.previousSibling)?(r=c.previousSibling,o=c.previousSibling.data.length):(r=c.parentNode,o=e.nodeIndex(c)+1):o=e.nodeIndex(c):l?c.hasChildNodes()?(r=c.firstChild,o=1):mc(c.previousSibling)?(r=c.previousSibling,o=c.previousSibling.data.length):(r=c.parentNode,o=e.nodeIndex(c)):o=e.nodeIndex(c),u=r,s=o,!l){for(a=c.previousSibling,i=c.nextSibling,Xt.each(Xt.grep(c.childNodes),function(e){jo.isText(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))});c=e.get(n.id+"_"+t);)e.remove(c,!0);a&&i&&a.nodeType===i.nodeType&&jo.isText(a)&&!fe.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,s=o)}return _.some(_u(u,s))}return _.none()},pc=function(e,t){var n,r,o,i,a,u,s,c,l,f,d,m,g,p,h,v,y=e.dom;if(t){if(v=t,Xt.isArray(v.start))return p=t,h=(g=y).createRng(),dc(g,!0,p,h)&&dc(g,!1,p,h)?_.some(h):_.none();if("string"==typeof t.start)return _.some((f=t,d=(l=y).createRng(),m=Fu(l.getRoot(),f.start),d.setStart(m.container(),m.offset()),m=Fu(l.getRoot(),f.end),d.setEnd(m.container(),m.offset()),d));if(t.hasOwnProperty("id"))return s=gc(o=y,"start",i=t),c=gc(o,"end",i),ru(s,(u=s,(a=c).isSome()?a:u),function(e,t){var n=o.createRng();return n.setStart(cc(o,e.container()),e.offset()),n.setEnd(cc(o,t.container()),t.offset()),n});if(t.hasOwnProperty("name"))return n=y,r=t,_.from(n.select(r.name)[r.index]).map(function(e){var t=n.createRng();return t.selectNode(e),t});if(t.hasOwnProperty("rng"))return _.some(t.rng)}return _.none()},hc=function(e,t,n){return Yu.getBookmark(e,t,n)},vc=function(t,e){pc(t,e).each(function(e){t.setRng(e)})},yc=function(e){return jo.isElement(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},bc=function(e){return e&&/^(IMG)$/.test(e.nodeName)},Cc=function(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)},xc=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},wc={isInlineBlock:bc,moveStart:function(e,t,n){var r,o,i,a=n.startOffset,u=n.startContainer;if((n.startContainer!==n.endContainer||!bc(n.startContainer.childNodes[n.startOffset]))&&1===u.nodeType)for(a<(i=u.childNodes).length?r=new go(u=i[a],e.getParent(u,e.isBlock)):(r=new go(u=i[i.length-1],e.getParent(u,e.isBlock))).next(!0),o=r.current();o;o=r.next())if(3===o.nodeType&&!Cc(o))return n.setStart(o,0),void t.setRng(n)},getNonWhiteSpaceSibling:function(e,t,n){if(e)for(t=t?"nextSibling":"previousSibling",e=n?e:e[t];e;e=e[t])if(1===e.nodeType||!Cc(e))return e},isTextBlock:function(e,t){return t.nodeType&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},isValid:function(e,t,n){return e.schema.isValidChild(t,n)},isWhiteSpaceNode:Cc,replaceVars:function(e,n){return"string"!=typeof e?e=e(n):n&&(e=e.replace(/%(\w+)/g,function(e,t){return n[t]||e})),e},isEq:function(e,t){return t=t||"",e=""+((e=e||"").nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()===t.toLowerCase()},normalizeStyleValue:xc,getStyle:function(e,t,n){return xc(e,e.getStyle(t,n),n)},getTextDecoration:function(t,e){var n;return t.getParent(e,function(e){return(n=t.getStyle(e,"text-decoration"))&&"none"!==n}),n},getParents:function(e,t,n){return e.getParents(t,n,e.getRoot())}},Nc=yc,Ec=wc.getParents,Sc=wc.isWhiteSpaceNode,Tc=wc.isTextBlock,kc=function(e,t){for(void 0===t&&(t=3===e.nodeType?e.length:e.childNodes.length);e&&e.hasChildNodes();)(e=e.childNodes[t])&&(t=3===e.nodeType?e.length:e.childNodes.length);return{node:e,offset:t}},_c=function(e,t){for(var n=t;n;){if(1===n.nodeType&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t;n=n.parentNode}return t},Ac=function(e,t,n,r){var o,i,a=n.nodeValue;return void 0===r&&(r=e?a.length:0),e?(o=a.lastIndexOf(" ",r),-1!==(o=(i=a.lastIndexOf("\xa0",r))<o?o:i)&&!t&&(o<r||!e)&&o<=a.length&&o++):(o=a.indexOf(" ",r),i=a.indexOf("\xa0",r),o=-1!==o&&(-1===i||o<i)?o:i),o},Rc=function(e,t,n,r,o,i){var a,u,s,c;if(3===n.nodeType){if(-1!==(s=Ac(o,i,n,r)))return{container:n,offset:s};c=n}for(a=new go(n,e.getParent(n,e.isBlock)||t);u=a[o?"prev":"next"]();)if(3!==u.nodeType||Nc(u.parentNode)){if(e.isBlock(u)||wc.isEq(u,"BR"))break}else if(-1!==(s=Ac(o,i,c=u)))return{container:u,offset:s};if(c)return{container:c,offset:r=o?0:c.length}},Dc=function(e,t,n,r,o){var i,a,u,s;for(3===r.nodeType&&0===r.nodeValue.length&&r[o]&&(r=r[o]),i=Ec(e,r),a=0;a<i.length;a++)for(u=0;u<t.length;u++)if(!("collapsed"in(s=t[u])&&s.collapsed!==n.collapsed)&&e.is(i[a],s.selector))return i[a];return r},Oc=function(t,e,n,r){var o,i=t.dom,a=i.getRoot();if(e[0].wrapper||(o=i.getParent(n,e[0].block,a)),!o){var u=i.getParent(n,"LI,TD,TH");o=i.getParent(3===n.nodeType?n.parentNode:n,function(e){return e!==a&&Tc(t,e)},u)}if(o&&e[0].wrapper&&(o=Ec(i,o,"ul,ol").reverse()[0]||o),!o)for(o=n;o[r]&&!i.isBlock(o[r])&&(o=o[r],!wc.isEq(o,"br")););return o||n},Bc=function(e,t,n,r,o,i,a){var u,s,c,l,f,d;if(u=s=a?n:o,l=a?"previousSibling":"nextSibling",f=e.getRoot(),3===u.nodeType&&!Sc(u)&&(a?0<r:i<u.nodeValue.length))return u;for(;;){if(!t[0].block_expand&&e.isBlock(s))return s;for(c=s[l];c;c=c[l])if(!Nc(c)&&!Sc(c)&&("BR"!==(d=c).nodeName||!d.getAttribute("data-mce-bogus")||d.nextSibling))return s;if(s===f||s.parentNode===f){u=s;break}s=s.parentNode}return u},Pc=function(e,t,n,r){var o,i=t.startContainer,a=t.startOffset,u=t.endContainer,s=t.endOffset,c=e.dom;return 1===i.nodeType&&i.hasChildNodes()&&3===(i=eu(i,a)).nodeType&&(a=0),1===u.nodeType&&u.hasChildNodes()&&3===(u=eu(u,t.collapsed?s:s-1)).nodeType&&(s=u.nodeValue.length),i=_c(c,i),u=_c(c,u),(Nc(i.parentNode)||Nc(i))&&(i=Nc(i)?i:i.parentNode,3===(i=t.collapsed?i.previousSibling||i:i.nextSibling||i).nodeType&&(a=t.collapsed?i.length:0)),(Nc(u.parentNode)||Nc(u))&&(u=Nc(u)?u:u.parentNode,3===(u=t.collapsed?u.nextSibling||u:u.previousSibling||u).nodeType&&(s=t.collapsed?0:u.length)),t.collapsed&&((o=Rc(c,e.getBody(),i,a,!0,r))&&(i=o.container,a=o.offset),(o=Rc(c,e.getBody(),u,s,!1,r))&&(u=o.container,s=o.offset)),n[0].inline&&(u=r?u:function(e,t){var n=kc(e,t);if(n.node){for(;n.node&&0===n.offset&&n.node.previousSibling;)n=kc(n.node.previousSibling);n.node&&0<n.offset&&3===n.node.nodeType&&" "===n.node.nodeValue.charAt(n.offset-1)&&1<n.offset&&(e=n.node).splitText(n.offset-1)}return e}(u,s)),(n[0].inline||n[0].block_expand)&&(n[0].inline&&3===i.nodeType&&0!==a||(i=Bc(c,n,i,a,u,s,!0)),n[0].inline&&3===u.nodeType&&s!==u.nodeValue.length||(u=Bc(c,n,i,a,u,s,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(i=Dc(c,n,t,i,"previousSibling"),u=Dc(c,n,t,u,"nextSibling")),(n[0].block||n[0].selector)&&(i=Oc(e,n,i,"previousSibling"),u=Oc(e,n,u,"nextSibling"),n[0].block&&(c.isBlock(i)||(i=Bc(c,n,i,a,u,s,!0)),c.isBlock(u)||(u=Bc(c,n,i,a,u,s,!1)))),1===i.nodeType&&(a=c.nodeIndex(i),i=i.parentNode),1===u.nodeType&&(s=c.nodeIndex(u)+1,u=u.parentNode),{startContainer:i,startOffset:a,endContainer:u,endOffset:s}},Ic=Xt.each,Lc=function(e,t,o){var n,r,i,a,u,s,c,l=t.startContainer,f=t.startOffset,d=t.endContainer,m=t.endOffset;if(0<(c=e.select("td[data-mce-selected],th[data-mce-selected]")).length)Ic(c,function(e){o([e])});else{var g,p,h,v=function(e){var t;return 3===(t=e[0]).nodeType&&t===l&&f>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===m&&0<e.length&&t===d&&3===t.nodeType&&e.splice(e.length-1,1),e},y=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e);return r},b=function(e,t){do{if(e.parentNode===t)return e;e=e.parentNode}while(e)},C=function(e,t,n){var r=n?"nextSibling":"previousSibling";for(u=(a=e).parentNode;a&&a!==t;a=u)u=a.parentNode,(s=y(a===e?a:a[r],r)).length&&(n||s.reverse(),o(v(s)))};if(1===l.nodeType&&l.hasChildNodes()&&(l=l.childNodes[f]),1===d.nodeType&&d.hasChildNodes()&&(p=m,h=(g=d).childNodes,--p>h.length-1?p=h.length-1:p<0&&(p=0),d=h[p]||g),l===d)return o(v([l]));for(n=e.findCommonAncestor(l,d),a=l;a;a=a.parentNode){if(a===d)return C(l,n,!0);if(a===n)break}for(a=d;a;a=a.parentNode){if(a===l)return C(d,n);if(a===n)break}r=b(l,n)||l,i=b(d,n)||d,C(l,r,!0),(s=y(r===l?r:r.nextSibling,"nextSibling",i===d?i.nextSibling:i)).length&&o(v(s)),C(d,i)}},Fc=(Ms=mr,zs="text",{get:function(e){if(!Ms(e))throw new Error("Can only get "+zs+" value of a "+zs+" node");return Us(e).getOr("")},getOption:Us=function(e){return Ms(e)?_.from(e.dom().nodeValue):_.none()},set:function(e,t){if(!Ms(e))throw new Error("Can only set raw "+zs+" value of a "+zs+" node");e.dom().nodeValue=t}}),Mc=function(e){return Fc.get(e)},zc=function(r,o,i,a){return Vr(o).fold(function(){return"skipping"},function(e){return"br"===a||mr(n=o)&&"\ufeff"===Mc(n)?"valid":dr(t=o)&&Gi(t,aa())?"existing":Ju(o)?"caret":wc.isValid(r,i,a)&&wc.isValid(r,lr(e),i)?"valid":"invalid-child";var t,n})},Uc=function(e,t,n,r){var o,i,a=t.uid,u=void 0===a?(o="mce-annotation",i=(new Date).getTime(),o+"_"+Math.floor(1e9*Math.random())+ ++ga+String(i)):a,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),c=ar.fromTag("span",e);Xi(c,aa()),wr(c,""+sa(),u),wr(c,""+ua(),n);var l,f=r(u,s),d=f.attributes,m=void 0===d?{}:d,g=f.classes,p=void 0===g?[]:g;return Nr(c,m),l=c,z(p,function(e){Xi(l,e)}),c},jc=function(i,e,t,n,r){var a=[],u=Uc(i.getDoc(),r,t,n),s=Hi(_.none()),c=function(){s.set(_.none())},l=function(e){z(e,o)},o=function(e){var t,n;switch(zc(i,e,"span",lr(e))){case"invalid-child":c();var r=Kr(e);l(r),c();break;case"valid":var o=s.get().getOrThunk(function(){var e=ha(u);return a.push(e),s.set(_.some(e)),e});Pi(t=e,n=o),Fi(n,t)}};return Lc(i.dom,e,function(e){var t;c(),t=W(e,ar.fromDom),l(t)}),a},Vc=function(s,c,l,f){s.undoManager.transact(function(){var e,t,n,r,o=s.selection.getRng();if(o.collapsed&&(r=Pc(e=s,t=o,[{inline:!0}],3===(n=t).startContainer.nodeType&&n.startContainer.nodeValue.length>=n.startOffset&&"\xa0"===n.startContainer.nodeValue[n.startOffset]),t.setStart(r.startContainer,r.startOffset),t.setEnd(r.endContainer,r.endOffset),e.selection.setRng(t)),s.selection.getRng().collapsed){var i=Uc(s.getDoc(),f,c,l.decorate);ya(i,"\xa0"),s.selection.getRng().insertNode(i.dom()),s.selection.select(i.dom())}else{var a=Yu.getPersistentBookmark(s.selection,!1),u=s.selection.getRng();jc(s,u,c,l.decorate,f),s.selection.moveToBookmark(a)}})};function Hc(s){var n,r=(n={},{register:function(e,t){n[e]={name:e,settings:t}},lookup:function(e){return n.hasOwnProperty(e)?_.from(n[e]).map(function(e){return e.settings}):_.none()}});da(s,r);var o=fa(s);return{register:function(e,t){r.register(e,t)},annotate:function(t,n){r.lookup(t).each(function(e){Vc(s,t,e,n)})},annotationChanged:function(e,t){o.addListener(e,t)},remove:function(e){ca(s,_.some(e)).each(function(e){var t=e.elements;z(t,ji)})},getAll:function(e){var t,n,r,o,i,a,u=(t=s,n=e,r=ar.fromDom(t.getBody()),o=Qi(r,"["+ua()+'="'+n+'"]'),i={},z(o,function(e){var t=Er(e,sa()),n=i.hasOwnProperty(t)?i[t]:[];i[t]=n.concat([e])}),i);return a=function(e){return W(e,function(e){return e.dom()})},vr(u,function(e,t){return{k:t,v:a(e,t)}})}}}var qc=function(e){return Xt.grep(e.childNodes,function(e){return"LI"===e.nodeName})},$c=function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&("\xa0"===(t=e.firstChild).data||jo.isBr(t));var t},Wc=function(e){return 0<e.length&&(!(t=e[e.length-1]).firstChild||$c(t))?e.slice(0,-1):e;var t},Kc=function(e,t){var n=e.getParent(t,e.isBlock);return n&&"LI"===n.nodeName?n:null},Xc=function(e,t){var n=_u.after(e),r=Js(t).prev(n);return r?r.toRange():null},Yc=function(t,e,n){var r,o,i,a,u=t.parentNode;return Xt.each(e,function(e){u.insertBefore(e,t)}),r=t,o=n,i=_u.before(r),(a=Js(o).next(i))?a.toRange():null},Gc=function(e,t){var n,r,o,i,a,u,s=t.firstChild,c=t.lastChild;return s&&"meta"===s.name&&(s=s.next),c&&"mce_marker"===c.attr("id")&&(c=c.prev),r=c,u=(n=e).getNonEmptyElements(),r&&(r.isEmpty(u)||(o=r,n.getBlockElements()[o.name]&&(a=o).firstChild&&a.firstChild===a.lastChild&&("br"===(i=o.firstChild).name||"\xa0"===i.value)))&&(c=c.prev),!(!s||s!==c||"ul"!==s.name&&"ol"!==s.name)},Jc=function(e,o,i,t){var n,r,a,u,s,c,l,f,d,m,g,p,h,v,y,b,C,x,w,N=(n=o,r=t,c=e.serialize(r),l=n.createFragment(c),u=(a=l).firstChild,s=a.lastChild,u&&"META"===u.nodeName&&u.parentNode.removeChild(u),s&&"mce_marker"===s.id&&s.parentNode.removeChild(s),a),E=Kc(o,i.startContainer),S=Wc(qc(N.firstChild)),T=o.getRoot(),k=function(e){var t=_u.fromRangeStart(i),n=Js(o.getRoot()),r=1===e?n.prev(t):n.next(t);return!r||Kc(o,r.getNode())!==E};return k(1)?Yc(E,S,T):k(2)?(f=E,d=S,m=T,o.insertAfter(d.reverse(),f),Xc(d[0],m)):(p=S,h=T,v=g=E,b=(y=i).cloneRange(),C=y.cloneRange(),b.setStartBefore(v),C.setEndAfter(v),x=[b.cloneContents(),C.cloneContents()],(w=g.parentNode).insertBefore(x[0],g),Xt.each(p,function(e){w.insertBefore(e,g)}),w.insertBefore(x[1],g),w.removeChild(g),Xc(p[p.length-1],h))},Qc=function(e,t){return!!Kc(e,t)},Zc=Xt.each,el=function(o){this.compare=function(e,t){if(e.nodeName!==t.nodeName)return!1;var n=function(n){var r={};return Zc(o.getAttribs(n),function(e){var t=e.nodeName.toLowerCase();0!==t.indexOf("_")&&"style"!==t&&0!==t.indexOf("data-")&&(r[t]=o.getAttrib(n,t))}),r},r=function(e,t){var n,r;for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1;if(e[r]!==n)return!1;delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1;return!0};return!(!r(n(e),n(t))||!r(o.parseStyle(o.getAttrib(e,"style")),o.parseStyle(o.getAttrib(t,"style")))||yc(e)||yc(t))}},tl=function(e){var t=Qi(e,"br"),n=U(function(e){for(var t=[],n=e.dom();n;)t.push(ar.fromDom(n)),n=n.lastChild;return t}(e).slice(-1),wo);t.length===n.length&&z(n,Ui)},nl=function(e){zi(e),Fi(e,ar.fromHtml('<br data-mce-bogus="1">'))},rl=function(n){Gr(n).each(function(t){Hr(t).each(function(e){Co(n)&&wo(t)&&Co(e)&&Ui(t)})})},ol=Xt.makeMap;function il(e){var u,s,c,l,f,d=[];return u=(e=e||{}).indent,s=ol(e.indent_before||""),c=ol(e.indent_after||""),l=ti.getEncodeFunc(e.entity_encoding||"raw",e.entities),f="html"===e.element_format,{start:function(e,t,n){var r,o,i,a;if(u&&s[e]&&0<d.length&&0<(a=d[d.length-1]).length&&"\n"!==a&&d.push("\n"),d.push("<",e),t)for(r=0,o=t.length;r<o;r++)i=t[r],d.push(" ",i.name,'="',l(i.value,!0),'"');d[d.length]=!n||f?">":" />",n&&u&&c[e]&&0<d.length&&0<(a=d[d.length-1]).length&&"\n"!==a&&d.push("\n")},end:function(e){var t;d.push("</",e,">"),u&&c[e]&&0<d.length&&0<(t=d[d.length-1]).length&&"\n"!==t&&d.push("\n")},text:function(e,t){0<e.length&&(d[d.length]=t?e:l(e))},cdata:function(e){d.push("<![CDATA[",e,"]]>")},comment:function(e){d.push("\x3c!--",e,"--\x3e")},pi:function(e,t){t?d.push("<?",e," ",l(t),"?>"):d.push("<?",e,"?>"),u&&d.push("\n")},doctype:function(e){d.push("<!DOCTYPE",e,">",u?"\n":"")},reset:function(){d.length=0},getContent:function(){return d.join("").replace(/\n$/,"")}}}function al(t,g){void 0===g&&(g=di());var p=il(t);return(t=t||{}).validate=!("validate"in t)||t.validate,{serialize:function(e){var f,d;d=t.validate,f={3:function(e){p.text(e.value,e.raw)},8:function(e){p.comment(e.value)},7:function(e){p.pi(e.name,e.value)},10:function(e){p.doctype(e.value)},4:function(e){p.cdata(e.value)},11:function(e){if(e=e.firstChild)for(;m(e),e=e.next;);}},p.reset();var m=function(e){var t,n,r,o,i,a,u,s,c,l=f[e.type];if(l)l(e);else{if(t=e.name,n=e.shortEnded,r=e.attributes,d&&r&&1<r.length&&((a=[]).map={},c=g.getElementRule(e.name))){for(u=0,s=c.attributesOrder.length;u<s;u++)(o=c.attributesOrder[u])in r.map&&(i=r.map[o],a.map[o]=i,a.push({name:o,value:i}));for(u=0,s=r.length;u<s;u++)(o=r[u].name)in a.map||(i=r.map[o],a.map[o]=i,a.push({name:o,value:i}));r=a}if(p.start(e.name,r,n),!n){if(e=e.firstChild)for(;m(e),e=e.next;);p.end(t)}}};return 1!==e.type||t.inner?f[11](e):m(e),p.getContent()}}}var ul,sl=function(a){var u=_u.fromRangeStart(a),s=_u.fromRangeEnd(a),c=a.commonAncestorContainer;return sc.fromPosition(!1,c,s).map(function(e){return!Ts(u,s,c)&&Ts(u,e,c)?(t=u.container(),n=u.offset(),r=e.container(),o=e.offset(),(i=V.document.createRange()).setStart(t,n),i.setEnd(r,o),i):a;var t,n,r,o,i}).getOr(a)},cl=function(e){return e.collapsed?e:sl(e)},ll=jo.matchNodeNames("td th"),fl=function(e,t){var n,r,o=e.selection.getRng(),i=o.startContainer,a=o.startOffset;o.collapsed&&(n=i,r=a,jo.isText(n)&&"\xa0"===n.nodeValue[r-1])&&jo.isText(i)&&(i.insertData(a-1," "),i.deleteData(a,1),o.setStart(i,a),o.setEnd(i,a),e.selection.setRng(o)),e.selection.setContent(t)},dl=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,m,g=e.selection,p=e.dom;if(/^ | $/.test(t)&&(t=function(e,t){var n,r;n=e.startContainer,r=e.startOffset;var o=function(e){return n[e]&&3===n[e].nodeType};return 3===n.nodeType&&(0<r?t=t.replace(/^&nbsp;/," "):o("previousSibling")||(t=t.replace(/^ /,"&nbsp;")),r<n.length?t=t.replace(/&nbsp;(<br>|)$/," "):o("nextSibling")||(t=t.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),t}(g.getRng(),t)),r=e.parser,m=n.merge,o=al({validate:e.settings.validate},e.schema),d='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',s={content:t,format:"html",selection:!0,paste:n.paste},(s=e.fire("BeforeSetContent",s)).isDefaultPrevented())e.fire("SetContent",{content:s.content,format:"html",selection:!0,paste:n.paste});else{-1===(t=s.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,d);var h,v,y,b,C,x,w=(l=g.getRng()).startContainer||(l.parentElement?l.parentElement():null),N=e.getBody();w===N&&g.isCollapsed()&&p.isBlock(N.firstChild)&&(h=e,(v=N.firstChild)&&!h.schema.getShortEndedElements()[v.nodeName])&&p.isEmpty(N.firstChild)&&((l=p.createRng()).setStart(N.firstChild,0),l.setEnd(N.firstChild,0),g.setRng(l)),g.isCollapsed()||(e.selection.setRng(cl(e.selection.getRng())),e.getDoc().execCommand("Delete",!1,null),y=e.selection.getRng(),b=t,C=y.startContainer,x=y.startOffset,3===C.nodeType&&y.collapsed&&("\xa0"===C.data[x]?(C.deleteData(x,1),/[\u00a0| ]$/.test(b)||(b+=" ")):"\xa0"===C.data[x-1]&&(C.deleteData(x-1,1),/[\u00a0| ]$/.test(b)||(b=" "+b))),t=b);var E,S,T,k={context:(i=g.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0};if(u=r.parse(t,k),!0===n.paste&&Gc(e.schema,u)&&Qc(p,i))return l=Jc(o,p,e.selection.getRng(),u),e.selection.setRng(l),void e.fire("SetContent",s);if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(u),"mce_marker"===(f=u.lastChild).attr("id"))for(f=(c=f).prev;f;f=f.walk(!0))if(3===f.type||!p.isBlock(f.name)){e.schema.isValidChild(f.parent.name,"span")&&f.parent.insert(c,f,"br"===f.name);break}if(e._selectionOverrides.showBlockCaretContainer(i),k.invalid){for(fl(e,d),i=g.getNode(),a=e.getBody(),9===i.nodeType?i=f=a:f=i;f!==a;)f=(i=f).parentNode;t=i===a?a.innerHTML:p.getOuterHTML(i),t=o.serialize(r.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return o.serialize(u)}))),i===a?p.setHTML(a,t):p.setOuterHTML(i,t)}else!function(e,t,n){if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n);else{var r=n.firstChild,o=n.lastChild;!r||r===o&&"BR"===r.nodeName?e.dom.setHTML(n,t):fl(e,t)}}(e,t=o.serialize(u),i);!function(e,t){var n=e.schema.getTextInlineElements(),r=e.dom;if(t){var o=e.getBody(),i=new el(r);Xt.each(r.select("*[data-mce-fragment]"),function(e){for(var t=e.parentNode;t&&t!==o;t=t.parentNode)n[e.nodeName.toLowerCase()]&&i.compare(t,e)&&r.remove(e,!0)})}}(e,m),function(n,e){var t,r,o,i,a,u=n.dom,s=n.selection;if(e){if(n.selection.scrollIntoView(e),t=function(e){for(var t=n.getBody();e&&e!==t;e=e.parentNode)if("false"===n.dom.getContentEditable(e))return e;return null}(e))return u.remove(e),s.select(t);var c=u.createRng();(i=e.previousSibling)&&3===i.nodeType?(c.setStart(i,i.nodeValue.length),fe.ie||(a=e.nextSibling)&&3===a.nodeType&&(i.appendData(a.data),a.parentNode.removeChild(a))):(c.setStartBefore(e),c.setEndBefore(e)),r=u.getParent(e,u.isBlock),u.remove(e),r&&u.isEmpty(r)&&(n.$(r).empty(),c.setStart(r,0),c.setEnd(r,0),ll(r)||r.getAttribute("data-mce-fragment")||!(o=function(e){var t=_u.fromRangeStart(e);if(t=Js(n.getBody()).next(t))return t.toRange()}(c))?u.add(r,u.create("br",{"data-mce-bogus":"1"})):(c=o,u.remove(r))),s.setRng(c)}}(e,p.get("mce_marker")),E=e.getBody(),Xt.each(E.getElementsByTagName("*"),function(e){e.removeAttribute("data-mce-fragment")}),S=e.dom,T=e.selection.getStart(),_.from(S.getParent(T,"td,th")).map(ar.fromDom).each(rl),e.fire("SetContent",s),e.addVisual()}},ml=function(e,t){var n,r,o="string"!=typeof(n=t)?(r=Xt.extend({paste:n.paste,data:{paste:n.paste}},n),{content:n.content,details:r}):{content:n,details:{}};dl(e,o.content,o.details)},gl=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,pl=function(e,t,n){var r=e.getParam(t,n);if(-1!==r.indexOf("=")){var o=e.getParam(t,"","hash");return o.hasOwnProperty(e.id)?o[e.id]:n}return r},hl=function(e){return e.getParam("iframe_attrs",{})},vl=function(e){return e.getParam("doctype","<!DOCTYPE html>")},yl=function(e){return e.getParam("document_base_url","")},bl=function(e){return pl(e,"body_id","tinymce")},Cl=function(e){return pl(e,"body_class","")},xl=function(e){return e.getParam("content_security_policy","")},wl=function(e){return e.getParam("br_in_pre",!0)},Nl=function(e){if(e.getParam("force_p_newlines",!1))return"p";var t=e.getParam("forced_root_block","p");return!1===t?"":t},El=function(e){return e.getParam("forced_root_block_attrs",{})},Sl=function(e){return e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption")},Tl=function(e){return e.getParam("no_newline_selector","")},kl=function(e){return e.getParam("keep_styles",!0)},_l=function(e){return e.getParam("end_container_on_empty_block",!1)},Al=function(e){return Xt.explode(e.getParam("font_size_style_values",""))},Rl=function(e){return Xt.explode(e.getParam("font_size_classes",""))},Dl=function(e){return e.getParam("images_dataimg_filter",q(!0),"function")},Ol=function(e){return e.getParam("automatic_uploads",!0,"boolean")},Bl=function(e){return e.getParam("images_reuse_filename",!1,"boolean")},Pl=function(e){return e.getParam("images_replace_blob_uris",!0,"boolean")},Il=function(e){return e.getParam("images_upload_url","","string")},Ll=function(e){return e.getParam("images_upload_base_path","","string")},Fl=function(e){return e.getParam("images_upload_credentials",!1,"boolean")},Ml=function(e){return e.getParam("images_upload_handler",null,"function")},zl=function(e){return e.getParam("content_css_cors",!1,"boolean")},Ul=function(e){return e.getParam("inline_boundaries_selector","a[href],code,.mce-annotation","string")},jl=function(e,t){if(!t)return t;var n=t.container(),r=t.offset();return e?Ta(n)?jo.isText(n.nextSibling)?_u(n.nextSibling,0):_u.after(n):Aa(t)?_u(n,r+1):t:Ta(n)?jo.isText(n.previousSibling)?_u(n.previousSibling,n.previousSibling.data.length):_u.before(n):Ra(t)?_u(n,r-1):t},Vl={isInlineTarget:function(e,t){return Lr(ar.fromDom(t),Ul(e))},findRootInline:function(e,t,n){var r,o,i,a=(r=e,o=t,i=n,U(Si.DOM.getParents(i.container(),"*",o),r));return _.from(a[a.length-1])},isRtl:function(e){return"rtl"===Si.DOM.getStyle(e,"direction",!0)||(t=e.textContent,gl.test(t));var t},isAtZwsp:function(e){return Aa(e)||Ra(e)},normalizePosition:jl,normalizeForwards:d(jl,!0),normalizeBackwards:d(jl,!1),hasSameParentBlock:function(e,t,n){var r=Ss(t,e),o=Ss(n,e);return r&&r===o}},Hl=function(e,t){return zr(e,t)?na(t,function(e){return No(e)||So(e)},(n=e,function(e){return Mr(n,ar.fromDom(e.dom().parentNode))})):_.none();var n},ql=function(e){var t,n,r;e.dom.isEmpty(e.getBody())&&(e.setContent(""),n=(t=e).getBody(),r=n.firstChild&&t.dom.isBlock(n.firstChild)?n.firstChild:n,t.selection.setCursorLocation(r,0))},$l=function(i,a,u){return ru(sc.firstPositionIn(u),sc.lastPositionIn(u),function(e,t){var n=Vl.normalizePosition(!0,e),r=Vl.normalizePosition(!1,t),o=Vl.normalizePosition(!1,a);return i?sc.nextPosition(u,o).map(function(e){return e.isEqual(r)&&a.isEqual(n)}).getOr(!1):sc.prevPosition(u,o).map(function(e){return e.isEqual(n)&&a.isEqual(r)}).getOr(!1)}).getOr(!0)},Wl=function(e,t){var n,r,o,i=ar.fromDom(e),a=ar.fromDom(t);return n=a,r="pre,code",o=d(Mr,i),ra(n,r,o).isSome()},Kl=function(e,t){return Ha(t)&&!1===(r=e,o=t,jo.isText(o)&&/^[ \t\r\n]*$/.test(o.data)&&!1===Wl(r,o))||(n=t,jo.isElement(n)&&"A"===n.nodeName&&n.hasAttribute("name"))||Xl(t);var n,r,o},Xl=jo.hasAttribute("data-mce-bookmark"),Yl=jo.hasAttribute("data-mce-bogus"),Gl=jo.hasAttributeValue("data-mce-bogus","all"),Jl=function(e){return function(e){var t,n,r=0;if(Kl(e,e))return!1;if(!(n=e.firstChild))return!0;t=new go(n,e);do{if(Gl(n))n=t.next(!0);else if(Yl(n))n=t.next();else if(jo.isBr(n))r++,n=t.next();else{if(Kl(e,n))return!1;n=t.next()}}while(n);return r<=1}(e.dom())},Ql=Ar("block","position"),Zl=Ar("from","to"),ef=function(e,t){var n=ar.fromDom(e),r=ar.fromDom(t.container());return Hl(n,r).map(function(e){return Ql(e,t)})},tf=function(o,i,e){var t=ef(o,_u.fromRangeStart(e)),n=t.bind(function(e){return sc.fromPosition(i,o,e.position()).bind(function(e){return ef(o,e).map(function(e){return t=o,n=i,r=e,jo.isBr(r.position().getNode())&&!1===Jl(r.block())?sc.positionIn(!1,r.block().dom()).bind(function(e){return e.isEqual(r.position())?sc.fromPosition(n,t,e).bind(function(e){return ef(t,e)}):_.some(r)}).getOr(r):r;var t,n,r})})});return ru(t,n,Zl).filter(function(e){return!1===Mr((r=e).from().block(),r.to().block())&&Vr((n=e).from().block()).bind(function(t){return Vr(n.to().block()).filter(function(e){return Mr(t,e)})}).isSome()&&(t=e,!1===jo.isContentEditableFalse(t.from().block().dom())&&!1===jo.isContentEditableFalse(t.to().block().dom()));var t,n,r})},nf=function(e,t,n){return n.collapsed?tf(e,t,n):_.none()},rf=function(e,t,n){return zr(t,e)?function(e,t){for(var n=D(t)?t:b,r=e.dom(),o=[];null!==r.parentNode&&r.parentNode!==undefined;){var i=r.parentNode,a=ar.fromDom(i);if(o.push(a),!0===n(a))break;r=i}return o}(e,function(e){return n(e)||Mr(e,t)}).slice(0,-1):[]},of=function(e,t){return rf(e,t,q(!1))},af=of,uf=function(e,t){return[e].concat(of(e,t))},sf=function(e){var t,n=(t=Kr(e),Y(t,Co).fold(function(){return t},function(e){return t.slice(0,e)}));return z(n,Ui),n},cf=function(e,t){var n=uf(t,e);return X(n.reverse(),Jl).each(Ui)},lf=function(e,t,n,r){if(Jl(n))return nl(n),sc.firstPositionIn(n.dom());0===U($r(r),function(e){return!Jl(e)}).length&&Jl(t)&&Pi(r,ar.fromTag("br"));var o=sc.prevPosition(n.dom(),_u.before(r.dom()));return z(sf(t),function(e){Pi(r,e)}),cf(e,t),o},ff=function(e,t,n){if(Jl(n))return Ui(n),Jl(t)&&nl(t),sc.firstPositionIn(t.dom());var r=sc.lastPositionIn(n.dom());return z(sf(t),function(e){Fi(n,e)}),cf(e,t),r},df=function(e,t){return zr(t,e)?(n=uf(e,t),_.from(n[n.length-1])):_.none();var n},mf=function(e,t){sc.positionIn(e,t.dom()).map(function(e){return e.getNode()}).map(ar.fromDom).filter(wo).each(Ui)},gf=function(e,t,n){return mf(!0,t),mf(!1,n),df(t,n).fold(d(ff,e,t,n),d(lf,e,t,n))},pf=function(e,t,n,r){return t?gf(e,r,n):gf(e,n,r)},hf=function(t,n){var e,r=ar.fromDom(t.getBody());return(e=nf(r.dom(),n,t.selection.getRng()).bind(function(e){return pf(r,n,e.from().block(),e.to().block())})).each(function(e){t.selection.setRng(e.toRange())}),e.isSome()},vf=function(e,t){var n=ar.fromDom(t),r=d(Mr,e);return ta(n,_o,r).isSome()},yf=function(e,t){var n,r,o=sc.prevPosition(e.dom(),_u.fromRangeStart(t)).isNone(),i=sc.nextPosition(e.dom(),_u.fromRangeEnd(t)).isNone();return!(vf(n=e,(r=t).startContainer)||vf(n,r.endContainer))&&o&&i},bf=function(e){var n,r,o,t,i=ar.fromDom(e.getBody()),a=e.selection.getRng();return yf(i,a)?((t=e).setContent(""),t.selection.setCursorLocation(),!0):(n=i,r=e.selection,o=r.getRng(),ru(Hl(n,ar.fromDom(o.startContainer)),Hl(n,ar.fromDom(o.endContainer)),function(e,t){return!1===Mr(e,t)&&(o.deleteContents(),pf(n,!0,e,t).each(function(e){r.setRng(e.toRange())}),!0)}).getOr(!1))},Cf=function(e,t){return!e.selection.isCollapsed()&&bf(e)},xf=function(a){if(!k(a))throw new Error("cases must be an array");if(0===a.length)throw new Error("there must be at least one case");var u=[],n={};return z(a,function(e,r){var t=gr(e);if(1!==t.length)throw new Error("one and only one name per case");var o=t[0],i=e[o];if(n[o]!==undefined)throw new Error("duplicate key detected:"+o);if("cata"===o)throw new Error("cannot have a case named cata (sorry)");if(!k(i))throw new Error("case arguments must be an array");u.push(o),n[o]=function(){var e=arguments.length;if(e!==i.length)throw new Error("Wrong number of arguments to case "+o+". Expected "+i.length+" ("+i+"), got "+e);for(var n=new Array(e),t=0;t<n.length;t++)n[t]=arguments[t];return{fold:function(){if(arguments.length!==a.length)throw new Error("Wrong number of arguments to fold. Expected "+a.length+", got "+arguments.length);return arguments[r].apply(null,n)},match:function(e){var t=gr(e);if(u.length!==t.length)throw new Error("Wrong number of arguments to match. Expected: "+u.join(",")+"\nActual: "+t.join(","));if(!J(u,function(e){return F(t,e)}))throw new Error("Not all branches were specified when using match. Specified: "+t.join(", ")+"\nRequired: "+u.join(", "));return e[o].apply(null,n)},log:function(e){V.console.log(e,{constructors:u,constructor:o,params:n})}}}}),n},wf=function(e){return Is(e).exists(wo)},Nf=function(e,t,n){var r=U(uf(ar.fromDom(n.container()),t),Co),o=Z(r).getOr(t);return sc.fromPosition(e,o.dom(),n).filter(wf)},Ef=function(e,t){return Is(t).exists(wo)||Nf(!0,e,t).isSome()},Sf=function(e,t){return(n=t,_.from(n.getNode(!0)).map(ar.fromDom)).exists(wo)||Nf(!1,e,t).isSome();var n},Tf=d(Nf,!1),kf=d(Nf,!0),_f=(ul="\xa0",function(e){return ul===e}),Af=function(e){return/^[\r\n\t ]$/.test(e)},Rf=function(e){return!Af(e)&&!_f(e)},Df=function(n,r,o){return _.from(o.container()).filter(jo.isText).exists(function(e){var t=n?0:-1;return r(e.data.charAt(o.offset()+t))})},Of=d(Df,!0,Af),Bf=d(Df,!1,Af),Pf=function(e){var t=e.container();return jo.isText(t)&&0===t.data.length},If=function(e,t){var n=ks(e,t);return jo.isContentEditableFalse(n)&&!jo.isBogusAll(n)},Lf=d(If,0),Ff=d(If,-1),Mf=function(e,t){return jo.isTable(ks(e,t))},zf=d(Mf,0),Uf=d(Mf,-1),jf=xf([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),Vf=function(e,t,n,r){var o=r.getNode(!1===t);return Hl(ar.fromDom(e),ar.fromDom(n.getNode())).map(function(e){return Jl(e)?jf.remove(e.dom()):jf.moveToElement(o)}).orThunk(function(){return _.some(jf.moveToElement(o))})},Hf=function(u,s,c){return sc.fromPosition(s,u,c).bind(function(e){return a=e.getNode(),_o(ar.fromDom(a))||So(ar.fromDom(a))?_.none():(t=u,o=e,i=function(e){return xo(ar.fromDom(e))&&!Ts(r,o,t)},Bs(!(n=s),r=c).fold(function(){return Bs(n,o).fold(q(!1),i)},i)?_.none():s&&jo.isContentEditableFalse(e.getNode())?Vf(u,s,c,e):!1===s&&jo.isContentEditableFalse(e.getNode(!0))?Vf(u,s,c,e):s&&Ff(c)?_.some(jf.moveToPosition(e)):!1===s&&Lf(c)?_.some(jf.moveToPosition(e)):_.none());var t,n,r,o,i,a})},qf=function(r,e,o){return i=e,a=o.getNode(!1===i),u=i?"after":"before",jo.isElement(a)&&a.getAttribute("data-mce-caret")===u?(t=e,n=o.getNode(!1===e),t&&jo.isContentEditableFalse(n.nextSibling)?_.some(jf.moveToElement(n.nextSibling)):!1===t&&jo.isContentEditableFalse(n.previousSibling)?_.some(jf.moveToElement(n.previousSibling)):_.none()).fold(function(){return Hf(r,e,o)},_.some):Hf(r,e,o).bind(function(e){return t=r,n=o,e.fold(function(e){return _.some(jf.remove(e))},function(e){return _.some(jf.moveToElement(e))},function(e){return Ts(n,e,t)?_.none():_.some(jf.moveToPosition(e))});var t,n});var t,n,i,a,u},$f=function(e,t,n){if(0!==n){var r,o,i,a=e.data.slice(t,t+n),u=t+n>=e.data.length,s=0===t;e.replaceData(t,n,(o=s,i=u,j((r=a).split(""),function(e,t){return-1!==" \f\n\r\t\x0B".indexOf(t)||"\xa0"===t?e.previousCharIsSpace||""===e.str&&o||e.str.length===r.length-1&&i?{previousCharIsSpace:!1,str:e.str+"\xa0"}:{previousCharIsSpace:!0,str:e.str+" "}:{previousCharIsSpace:!1,str:e.str+t}},{previousCharIsSpace:!1,str:""}).str))}},Wf=function(e,t){var n,r=e.data.slice(t),o=r.length-(n=r,n.replace(/^\s+/g,"")).length;return $f(e,t,o)},Kf=function(e,t){return r=e,o=(n=t).container(),i=n.offset(),!1===_u.isTextPosition(n)&&o===r.parentNode&&i>_u.before(r).offset()?_u(t.container(),t.offset()-1):t;var n,r,o,i},Xf=function(e){return Ha(e.previousSibling)?_.some((t=e.previousSibling,jo.isText(t)?_u(t,t.data.length):_u.after(t))):e.previousSibling?sc.lastPositionIn(e.previousSibling):_.none();var t},Yf=function(e){return Ha(e.nextSibling)?_.some((t=e.nextSibling,jo.isText(t)?_u(t,0):_u.before(t))):e.nextSibling?sc.firstPositionIn(e.nextSibling):_.none();var t},Gf=function(r,o){return Xf(o).orThunk(function(){return Yf(o)}).orThunk(function(){return e=r,t=o,n=_u.before(t.previousSibling?t.previousSibling:t.parentNode),sc.prevPosition(e,n).fold(function(){return sc.nextPosition(e,_u.after(t))},_.some);var e,t,n})},Jf=function(n,r){return Yf(r).orThunk(function(){return Xf(r)}).orThunk(function(){return e=n,t=r,sc.nextPosition(e,_u.after(t)).fold(function(){return sc.prevPosition(e,_u.before(t))},_.some);var e,t})},Qf=function(e,t,n){return(r=e,o=t,i=n,r?Jf(o,i):Gf(o,i)).map(d(Kf,n));var r,o,i},Zf=function(t,n,e){e.fold(function(){t.focus()},function(e){t.selection.setRng(e.toRange(),n)})},ed=function(e,t){return t&&e.schema.getBlockElements().hasOwnProperty(lr(t))},td=function(e){if(Jl(e)){var t=ar.fromHtml('<br data-mce-bogus="1">');return zi(e),Fi(e,t),_.some(_u.before(t.dom()))}return _.none()},nd=function(e,t,l){var n,r,o,i,a=Hr(e).filter(mr),u=qr(e).filter(mr);return Ui(e),(n=a,r=u,o=t,i=function(e,t,n){var r,o,i,a,u=e.dom(),s=t.dom(),c=u.data.length;return o=s,i=l,a=Jn((r=u).data).length,r.appendData(o.data),Ui(ar.fromDom(o)),i&&Wf(r,a),n.container()===s?_u(u,c):n},n.isSome()&&r.isSome()&&o.isSome()?_.some(i(n.getOrDie(),r.getOrDie(),o.getOrDie())):_.none()).orThunk(function(){return l&&(a.each(function(e){return t=e.dom(),n=e.dom().length,r=t.data.slice(0,n),o=r.length-Jn(r).length,$f(t,n-o,o);var t,n,r,o}),u.each(function(e){return Wf(e.dom(),0)})),t})},rd=function(t,n,e,r){void 0===r&&(r=!0);var o,i,a=Qf(n,t.getBody(),e.dom()),u=ta(e,d(ed,t),(o=t.getBody(),function(e){return e.dom()===o})),s=nd(e,a,(i=e,br(t.schema.getTextInlineElements(),lr(i))));t.dom.isEmpty(t.getBody())?(t.setContent(""),t.selection.setCursorLocation()):u.bind(td).fold(function(){r&&Zf(t,n,s)},function(e){r&&Zf(t,n,_.some(e))})},od=function(a,u){var e,t,n,r,o,i;return(e=a.getBody(),t=u,n=a.selection.getRng(),r=Os(t?1:-1,e,n),o=_u.fromRangeStart(r),i=ar.fromDom(e),!1===t&&Ff(o)?_.some(jf.remove(o.getNode(!0))):t&&Lf(o)?_.some(jf.remove(o.getNode())):!1===t&&Lf(o)&&Sf(i,o)?Tf(i,o).map(function(e){return jf.remove(e.getNode())}):t&&Ff(o)&&Ef(i,o)?kf(i,o).map(function(e){return jf.remove(e.getNode())}):qf(e,t,o)).map(function(e){return e.fold((o=a,i=u,function(e){return o._selectionOverrides.hideFakeCaret(),rd(o,i,ar.fromDom(e)),!0}),(n=a,r=u,function(e){var t=r?_u.before(e):_u.after(e);return n.selection.setRng(t.toRange()),!0}),(t=a,function(e){return t.selection.setRng(e.toRange()),!0}));var t,n,r,o,i}).getOr(!1)},id=function(e,t){var n,r=e.selection.getNode();return!!jo.isContentEditableFalse(r)&&(n=ar.fromDom(e.getBody()),z(Qi(n,".mce-offscreen-selection"),Ui),rd(e,t,ar.fromDom(e.selection.getNode())),ql(e),!0)},ad=function(e,t){return e.selection.isCollapsed()?od(e,t):id(e,t)},ud=function(e){var t,n=function(e,t){for(;t&&t!==e;){if(jo.isContentEditableTrue(t)||jo.isContentEditableFalse(t))return t;t=t.parentNode}return null}(e.getBody(),e.selection.getNode());return jo.isContentEditableTrue(n)&&e.dom.isBlock(n)&&e.dom.isEmpty(n)&&(t=e.dom.create("br",{"data-mce-bogus":"1"}),e.dom.setHTML(n,""),n.appendChild(t),e.selection.setRng(_u.before(t).toRange())),!0},sd=jo.isText,cd=function(e){return sd(e)&&e.data[0]===xa},ld=function(e){return sd(e)&&e.data[e.data.length-1]===xa},fd=function(e){return e.ownerDocument.createTextNode(xa)},dd=function(e,t){return e?function(e){if(sd(e.previousSibling))return ld(e.previousSibling)||e.previousSibling.appendData(xa),e.previousSibling;if(sd(e))return cd(e)||e.insertData(0,xa),e;var t=fd(e);return e.parentNode.insertBefore(t,e),t}(t):function(e){if(sd(e.nextSibling))return cd(e.nextSibling)||e.nextSibling.insertData(0,xa),e.nextSibling;if(sd(e))return ld(e)||e.appendData(xa),e;var t=fd(e);return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t}(t)},md=d(dd,!0),gd=d(dd,!1),pd=function(e,t){return jo.isText(e.container())?dd(t,e.container()):dd(t,e.getNode())},hd=function(e,t){var n=t.get();return n&&e.container()===n&&Ta(n)},vd=function(n,e){return e.fold(function(e){ss.remove(n.get());var t=md(e);return n.set(t),_.some(_u(t,t.length-1))},function(e){return sc.firstPositionIn(e).map(function(e){if(hd(e,n))return _u(n.get(),1);ss.remove(n.get());var t=pd(e,!0);return n.set(t),_u(t,1)})},function(e){return sc.lastPositionIn(e).map(function(e){if(hd(e,n))return _u(n.get(),n.get().length-1);ss.remove(n.get());var t=pd(e,!1);return n.set(t),_u(t,t.length-1)})},function(e){ss.remove(n.get());var t=gd(e);return n.set(t),_.some(_u(t,1))})},yd=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t);if(r.isSome())return r}return _.none()},bd=xf([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),Cd=function(e,t){var n=Ss(t,e);return n||e},xd=function(e,t,n){var r=Vl.normalizeForwards(n),o=Cd(t,r.container());return Vl.findRootInline(e,o,r).fold(function(){return sc.nextPosition(o,r).bind(d(Vl.findRootInline,e,o)).map(function(e){return bd.before(e)})},_.none)},wd=function(e,t){return null===Qu(e,t)},Nd=function(e,t,n){return Vl.findRootInline(e,t,n).filter(d(wd,t))},Ed=function(e,t,n){var r=Vl.normalizeBackwards(n);return Nd(e,t,r).bind(function(e){return sc.prevPosition(e,r).isNone()?_.some(bd.start(e)):_.none()})},Sd=function(e,t,n){var r=Vl.normalizeForwards(n);return Nd(e,t,r).bind(function(e){return sc.nextPosition(e,r).isNone()?_.some(bd.end(e)):_.none()})},Td=function(e,t,n){var r=Vl.normalizeBackwards(n),o=Cd(t,r.container());return Vl.findRootInline(e,o,r).fold(function(){return sc.prevPosition(o,r).bind(d(Vl.findRootInline,e,o)).map(function(e){return bd.after(e)})},_.none)},kd=function(e){return!1===Vl.isRtl(Ad(e))},_d=function(e,t,n){return yd([xd,Ed,Sd,Td],[e,t,n]).filter(kd)},Ad=function(e){return e.fold($,$,$,$)},Rd=function(e){return e.fold(q("before"),q("start"),q("end"),q("after"))},Dd=function(e){return e.fold(bd.before,bd.before,bd.after,bd.after)},Od=function(n,e,r,t,o,i){return ru(Vl.findRootInline(e,r,t),Vl.findRootInline(e,r,o),function(e,t){return e!==t&&Vl.hasSameParentBlock(r,e,t)?bd.after(n?e:t):i}).getOr(i)},Bd=function(e,r){return e.fold(q(!0),function(e){return n=r,!(Rd(t=e)===Rd(n)&&Ad(t)===Ad(n));var t,n})},Pd=function(e,t){return e?t.fold(H(_.some,bd.start),_.none,H(_.some,bd.after),_.none):t.fold(_.none,H(_.some,bd.before),_.none,H(_.some,bd.end))},Id=function(a,u,s,c){var e=Vl.normalizePosition(a,c),l=_d(u,s,e);return _d(u,s,e).bind(d(Pd,a)).orThunk(function(){return t=a,n=u,r=s,o=l,e=c,i=Vl.normalizePosition(t,e),sc.fromPosition(t,r,i).map(d(Vl.normalizePosition,t)).fold(function(){return o.map(Dd)},function(e){return _d(n,r,e).map(d(Od,t,n,r,i,e)).filter(d(Bd,o))}).filter(kd);var t,n,r,o,e,i})},Ld=_d,Fd=Id,Md=(d(Id,!1),d(Id,!0),Dd),zd=function(e){return e.fold(bd.start,bd.start,bd.end,bd.end)},Ud=function(e){return D(e.selection.getSel().modify)},jd=function(e,t,n){var r=e?1:-1;return t.setRng(_u(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0},Vd=function(e,t){var n=t.selection.getRng(),r=e?_u.fromRangeEnd(n):_u.fromRangeStart(n);return!!Ud(t)&&(e&&Aa(r)?jd(!0,t.selection,r):!(e||!Ra(r))&&jd(!1,t.selection,r))},Hd=function(e,t){var n=e.dom.createRng();n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},qd=function(e){return!1!==e.settings.inline_boundaries},$d=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},Wd=function(t,e,n){return vd(e,n).map(function(e){return Hd(t,e),n})},Kd=function(e,t,n){return function(){return!!qd(t)&&Vd(e,t)}},Xd={move:function(a,u,s){return function(){return!!qd(a)&&(t=a,n=u,e=s,r=t.getBody(),o=_u.fromRangeStart(t.selection.getRng()),i=d(Vl.isInlineTarget,t),Fd(e,i,r,o).bind(function(e){return Wd(t,n,e)})).isSome();var t,n,e,r,o,i}},moveNextWord:d(Kd,!0),movePrevWord:d(Kd,!1),setupSelectedState:function(a){var u=Hi(null),s=d(Vl.isInlineTarget,a);return a.on("NodeChange",function(e){var t,n,r,o,i;qd(a)&&(t=s,n=a.dom,r=e.parents,o=U(n.select('*[data-mce-selected="inline-boundary"]'),t),i=U(r,t),z(Q(o,i),d($d,!1)),z(Q(i,o),d($d,!0)),function(e,t){if(e.selection.isCollapsed()&&!0!==e.composing&&t.get()){var n=_u.fromRangeStart(e.selection.getRng());_u.isTextPosition(n)&&!1===Vl.isAtZwsp(n)&&(Hd(e,ss.removeAndReposition(t.get(),n)),t.set(null))}}(a,u),function(n,r,o,e){if(r.selection.isCollapsed()){var t=U(e,n);z(t,function(e){var t=_u.fromRangeStart(r.selection.getRng());Ld(n,r.getBody(),t).bind(function(e){return Wd(r,o,e)})})}}(s,a,u,e.parents))}),u},setCaretPosition:Hd},Yd=function(t,n){return function(e){return vd(n,e).map(function(e){return Xd.setCaretPosition(t,e),!0}).getOr(!1)}},Gd=function(r,o,i,a){var u=r.getBody(),s=d(Vl.isInlineTarget,r);r.undoManager.ignore(function(){var e,t,n;r.selection.setRng((e=i,t=a,(n=V.document.createRange()).setStart(e.container(),e.offset()),n.setEnd(t.container(),t.offset()),n)),r.execCommand("Delete"),Ld(s,u,_u.fromRangeStart(r.selection.getRng())).map(zd).map(Yd(r,o))}),r.nodeChanged()},Jd=function(n,r,i,o){var e,t,a=(e=n.getBody(),t=o.container(),Ss(t,e)||e),u=d(Vl.isInlineTarget,n),s=Ld(u,a,o);return s.bind(function(e){return i?e.fold(q(_.some(zd(e))),_.none,q(_.some(Md(e))),_.none):e.fold(_.none,q(_.some(Md(e))),_.none,q(_.some(zd(e))))}).map(Yd(n,r)).getOrThunk(function(){var t=sc.navigate(i,a,o),e=t.bind(function(e){return Ld(u,a,e)});return s.isSome()&&e.isSome()?Vl.findRootInline(u,a,o).map(function(e){return o=e,!!ru(sc.firstPositionIn(o),sc.lastPositionIn(o),function(e,t){var n=Vl.normalizePosition(!0,e),r=Vl.normalizePosition(!1,t);return sc.nextPosition(o,n).map(function(e){return e.isEqual(r)}).getOr(!0)}).getOr(!0)&&(rd(n,i,ar.fromDom(e)),!0);var o}).getOr(!1):e.bind(function(e){return t.map(function(e){return i?Gd(n,r,o,e):Gd(n,r,e,o),!0})}).getOr(!1)})},Qd=function(e,t,n){if(e.selection.isCollapsed()&&!1!==e.settings.inline_boundaries){var r=_u.fromRangeStart(e.selection.getRng());return Jd(e,t,n,r)}return!1},Zd=Ar("start","end"),em=Ar("rng","table","cells"),tm=xf([{removeTable:["element"]},{emptyCells:["cells"]}]),nm=function(e,t){return ia(ar.fromDom(e),"td,th",t)},rm=function(e,t){return ra(e,"table",t)},om=function(e){return!1===Mr(e.start(),e.end())},im=function(e,n){return rm(e.start(),n).bind(function(t){return rm(e.end(),n).bind(function(e){return Mr(t,e)?_.some(t):_.none()})})},am=function(e){return Qi(e,"td,th")},um=function(r,e){var t=nm(e.startContainer,r),n=nm(e.endContainer,r);return e.collapsed?_.none():ru(t,n,Zd).fold(function(){return t.fold(function(){return n.bind(function(t){return rm(t,r).bind(function(e){return Z(am(e)).map(function(e){return Zd(e,t)})})})},function(t){return rm(t,r).bind(function(e){return ee(am(e)).map(function(e){return Zd(t,e)})})})},function(e){return sm(r,e)?_.none():(n=r,rm((t=e).start(),n).bind(function(e){return ee(am(e)).map(function(e){return Zd(t.start(),e)})}));var t,n})},sm=function(e,t){return im(t,e).isSome()},cm=function(e,t){var n,r,o,i,a=d(Mr,e);return(n=t,r=a,o=nm(n.startContainer,r),i=nm(n.endContainer,r),ru(o,i,Zd).filter(om).filter(function(e){return sm(r,e)}).orThunk(function(){return um(r,n)})).bind(function(e){return im(t=e,a).map(function(e){return em(t,e,am(e))});var t})},lm=function(e,t){return Y(e,function(e){return Mr(e,t)})},fm=function(n){return(r=n,ru(lm(r.cells(),r.rng().start()),lm(r.cells(),r.rng().end()),function(e,t){return r.cells().slice(e,t+1)})).map(function(e){var t=n.cells();return e.length===t.length?tm.removeTable(n.table()):tm.emptyCells(e)});var r},dm=function(e,t){return cm(e,t).bind(fm)},mm=function(e){var t=[];if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n));return t},gm=mm,pm=function(e){return G(e,function(e){var t=Za(e);return t?[ar.fromDom(t)]:[]})},hm=function(e){return 1<mm(e).length},vm=function(e){return U(pm(e),_o)},ym=function(e){return Qi(e,"td[data-mce-selected],th[data-mce-selected]")},bm=function(e,t){var n=ym(t),r=vm(e);return 0<n.length?n:r},Cm=bm,xm=function(e){return bm(gm(e.selection.getSel()),ar.fromDom(e.getBody()))},wm=function(e,t){return z(t,nl),e.selection.setCursorLocation(t[0].dom(),0),!0},Nm=function(e,t){return rd(e,!1,t),!0},Em=function(n,e,r,t){return Tm(e,t).fold(function(){return t=n,dm(e,r).map(function(e){return e.fold(d(Nm,t),d(wm,t))});var t},function(e){return km(n,e)}).getOr(!1)},Sm=function(e,t){return X(uf(t,e),_o)},Tm=function(e,t){return X(uf(t,e),function(e){return"caption"===lr(e)})},km=function(e,t){return nl(t),e.selection.setCursorLocation(t.dom(),0),_.some(!0)},_m=function(u,s,c,l,f){return sc.navigate(c,u.getBody(),f).bind(function(e){return r=l,o=c,i=f,a=e,sc.firstPositionIn(r.dom()).bind(function(t){return sc.lastPositionIn(r.dom()).map(function(e){return o?i.isEqual(t)&&a.isEqual(e):i.isEqual(e)&&a.isEqual(t)})}).getOr(!0)?km(u,l):(t=l,n=e,Tm(s,ar.fromDom(n.getNode())).map(function(e){return!1===Mr(e,t)}));var t,n,r,o,i,a}).or(_.some(!0))},Am=function(a,u,s,e){var c=_u.fromRangeStart(a.selection.getRng());return Sm(s,e).bind(function(e){return Jl(e)?km(a,e):(t=a,n=s,r=u,o=e,i=c,sc.navigate(r,t.getBody(),i).bind(function(e){return Sm(n,ar.fromDom(e.getNode())).map(function(e){return!1===Mr(e,o)})}));var t,n,r,o,i})},Rm=function(a,u,e){var s=ar.fromDom(a.getBody());return Tm(s,e).fold(function(){return Am(a,u,s,e)},function(e){return t=a,n=u,r=s,o=e,i=_u.fromRangeStart(t.selection.getRng()),Jl(o)?km(t,o):_m(t,r,n,o,i);var t,n,r,o,i}).getOr(!1)},Dm=function(e,t){var n,r,o,i,a,u=ar.fromDom(e.selection.getStart(!0)),s=xm(e);return e.selection.isCollapsed()&&0===s.length?Rm(e,t,u):(n=e,r=u,o=ar.fromDom(n.getBody()),i=n.selection.getRng(),0!==(a=xm(n)).length?wm(n,a):Em(n,o,i,r))},Om=wc.isEq,Bm=function(e,t,n){var r=e.formatter.get(n);if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0;return!1},Pm=function(t,e,n,r){var o=t.dom.getRoot();return e!==o&&(e=t.dom.getParent(e,function(e){return!!Bm(t,e,n)||e.parentNode===o||!!Fm(t,e,n,r,!0)}),Fm(t,e,n,r))},Im=function(e,t,n){return!!Om(t,n.inline)||!!Om(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0)},Lm=function(e,t,n,r,o,i){var a,u,s,c=n[r];if(n.onmatch)return n.onmatch(t,n,r);if(c)if("undefined"==typeof c.length){for(a in c)if(c.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):wc.getStyle(e,t,a),o&&!u&&!n.exact)return;if((!o||n.exact)&&!Om(u,wc.normalizeStyleValue(e,wc.replaceVars(c[a],i),a)))return}}else for(s=0;s<c.length;s++)if("attributes"===r?e.getAttrib(t,c[s]):wc.getStyle(e,t,c[s]))return n;return n},Fm=function(e,t,n,r,o){var i,a,u,s,c=e.formatter.get(n),l=e.dom;if(c&&t)for(a=0;a<c.length;a++)if(i=c[a],Im(e.dom,t,i)&&Lm(l,t,i,"attributes",o,r)&&Lm(l,t,i,"styles",o,r)){if(s=i.classes)for(u=0;u<s.length;u++)if(!e.dom.hasClass(t,s[u]))return;return i}},Mm={matchNode:Fm,matchName:Im,match:function(e,t,n,r){var o;return r?Pm(e,r,t,n):(r=e.selection.getNode(),!!Pm(e,r,t,n)||!((o=e.selection.getStart())===r||!Pm(e,o,t,n)))},matchAll:function(r,o,i){var e,a=[],u={};return e=r.selection.getStart(),r.dom.getParent(e,function(e){var t,n;for(t=0;t<o.length;t++)n=o[t],!u[n]&&Fm(r,e,n,i)&&(u[n]=!0,a.push(n))},r.dom.getRoot()),a},canApply:function(e,t){var n,r,o,i,a,u=e.formatter.get(t),s=e.dom;if(u)for(n=e.selection.getStart(),r=wc.getParents(s,n),i=u.length-1;0<=i;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0;for(o=r.length-1;0<=o;o--)if(s.is(r[o],a))return!0}return!1},matchesUnInheritedFormatSelector:Bm},zm=function(e,t){return e.splitText(t)},Um=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset;return t===r&&jo.isText(t)?0<n&&n<t.nodeValue.length&&(t=(r=zm(t,n)).previousSibling,n<o?(t=r=zm(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(jo.isText(t)&&0<n&&n<t.nodeValue.length&&(t=zm(t,n),n=0),jo.isText(r)&&0<o&&o<r.nodeValue.length&&(o=(r=zm(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}},jm=xa,Vm="_mce_caret",Hm=function(e){return 0<function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==jm||1<e.childNodes.length)return[];1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length},qm=function(e){var t;if(e)for(e=(t=new go(e,e)).current();e;e=t.next())if(3===e.nodeType)return e;return null},$m=function(e){var t=ar.fromTag("span");return Nr(t,{id:Vm,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&Fi(t,ar.fromText(jm)),t},Wm=function(e,t,n){void 0===n&&(n=!0);var r,o=e.dom,i=e.selection;if(Hm(t))rd(e,!1,ar.fromDom(t),n);else{var a=i.getRng(),u=o.getParent(t,o.isBlock),s=((r=qm(t))&&r.nodeValue.charAt(0)===jm&&r.deleteData(0,1),r);a.startContainer===s&&0<a.startOffset&&a.setStart(s,a.startOffset-1),a.endContainer===s&&0<a.endOffset&&a.setEnd(s,a.endOffset-1),o.remove(t,!0),u&&o.isEmpty(u)&&nl(ar.fromDom(u)),i.setRng(a)}},Km=function(e,t,n){void 0===n&&(n=!0);var r=e.dom,o=e.selection;if(t)Wm(e,t,n);else if(!(t=Qu(e.getBody(),o.getStart())))for(;t=r.get(Vm);)Wm(e,t,!1)},Xm=function(e,t,n){var r=e.dom,o=r.getParent(n,d(wc.isTextBlock,e));o&&r.isEmpty(o)?n.parentNode.replaceChild(t,n):(tl(ar.fromDom(n)),r.isEmpty(n)?n.parentNode.replaceChild(t,n):r.insertAfter(t,n))},Ym=function(e,t){return e.appendChild(t),t},Gm=function(e,t){var n,r,o=(n=function(e,t){return Ym(e,t.cloneNode(!1))},r=t,function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n)}(e,function(e){r=n(r,e)}),r);return Ym(o,o.ownerDocument.createTextNode(jm))},Jm=function(i){i.on("mouseup keydown",function(e){var t,n,r,o;t=i,n=e.keyCode,r=t.selection,o=t.getBody(),Km(t,null,!1),8!==n&&46!==n||!r.isCollapsed()||r.getStart().innerHTML!==jm||Km(t,Qu(o,r.getStart())),37!==n&&39!==n||Km(t,Qu(o,r.getStart()))})},Qm=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(lr(t))&&!Ju(t.dom())&&!jo.isBogus(t.dom())},Zm=function(e){return 1===Kr(e).length},eg=function(e,t,n,r){var o,i,a,u,s=d(Qm,t),c=W(U(r,s),function(e){return e.dom()});if(0===c.length)rd(t,e,n);else{var l=(o=n.dom(),i=c,a=$m(!1),u=Gm(i,a.dom()),Pi(ar.fromDom(o),a),Ui(ar.fromDom(o)),_u(u,0));t.selection.setRng(l.toRange())}},tg=function(r,o){var t,e=ar.fromDom(r.getBody()),n=ar.fromDom(r.selection.getStart()),i=U((t=uf(n,e),Y(t,Co).fold(q(t),function(e){return t.slice(0,e)})),Zm);return ee(i).map(function(e){var t,n=_u.fromRangeStart(r.selection.getRng());return!(!$l(o,n,e.dom())||Ju((t=e).dom())&&Hm(t.dom())||(eg(o,r,e,i),0))}).getOr(!1)},ng=function(e,t){return!!e.selection.isCollapsed()&&tg(e,t)},rg=function(e){for(var t=0,n=0,r=e;r&&r.nodeType;)t+=r.offsetLeft||0,n+=r.offsetTop||0,r=r.offsetParent;return{x:t,y:n}},og=function(e,t,n){var r,o,i,a,u,s=e.dom,c=s.getRoot(),l=0;if(u={elm:t,alignToTop:n},e.fire("scrollIntoView",u),!u.isDefaultPrevented()&&jo.isElement(t)){if(!1===n&&(l=t.offsetHeight),"BODY"!==c.nodeName){var f=e.selection.getScrollContainer();if(f)return r=rg(t).y-rg(f).y+l,a=f.clientHeight,void((r<(i=f.scrollTop)||i+a<r+25)&&(f.scrollTop=r<i?r:r-a+25))}o=s.getViewPort(e.getWin()),r=s.getPos(t).y+l,i=o.y,a=o.h,(r<o.y||i+a<r+25)&&e.getWin().scrollTo(0,r<i?r:r-a+25)}},ig=function(d,e){Z(Su.fromRangeStart(e).getClientRects()).each(function(e){var t,n,r,o,i,a,u,s,c,l=function(e){if(e.inline)return e.getBody().getBoundingClientRect();var t=e.getWin();return{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight,width:t.innerWidth,height:t.innerHeight}}(d),f={x:(i=t=l,a=n=e,a.left>i.left&&a.right<i.right?0:a.left<i.left?a.left-i.left:a.right-i.right),y:(r=t,o=n,o.top>r.top&&o.bottom<r.bottom?0:o.top<r.top?o.top-r.top:o.bottom-r.bottom)};s=0!==f.x?0<f.x?f.x+4:f.x-4:0,c=0!==f.y?0<f.y?f.y+4:f.y-4:0,(u=d).inline?(u.getBody().scrollLeft+=s,u.getBody().scrollTop+=c):u.getWin().scrollBy(s,c)})},ag=jo.isContentEditableTrue,ug=jo.isContentEditableFalse,sg=function(e,t,n,r,o){return t._selectionOverrides.showCaret(e,n,r,o)},cg=function(e,t){var n,r;return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?null:((r=(n=t).ownerDocument.createRange()).selectNode(n),r)},lg=function(e,t,n){var r=Os(1,e.getBody(),t),o=_u.fromRangeStart(r),i=o.getNode();if(ug(i))return sg(1,e,i,!o.isAtEnd(),!1);var a=o.getNode(!0);if(ug(a))return sg(1,e,a,!1,!1);var u=e.dom.getParent(o.getNode(),function(e){return ug(e)||ag(e)});return ug(u)?sg(1,e,u,!1,n):null},fg=function(e,t,n){if(!t||!t.collapsed)return t;var r=lg(e,t,n);return r||t},dg=function(e,t){e.selection.setRng(t),ig(e,e.selection.getRng())},mg=function(e,t,n,r,o,i){var a,u,s=sg(r,e,i.getNode(!o),o,!0);if(t.collapsed){var c=t.cloneRange();o?c.setEnd(s.startContainer,s.startOffset):c.setStart(s.endContainer,s.endOffset),c.deleteContents()}else t.deleteContents();return e.selection.setRng(s),a=e.dom,u=n,jo.isText(u)&&0===u.data.length&&a.remove(u),!0},gg=function(e,t){return function(e,t){var n=e.selection.getRng();if(!jo.isText(n.commonAncestorContainer))return!1;var r=t?Tu.Forwards:Tu.Backwards,o=Js(e.getBody()),i=d(Ls,o.next),a=d(Ls,o.prev),u=t?i:a,s=t?Lf:Ff,c=Ps(r,e.getBody(),n),l=Vl.normalizePosition(t,u(c));if(!l)return!1;if(s(l))return mg(e,n,c.getNode(),r,t,l);var f=u(l);return!!(f&&s(f)&&Fs(l,f))&&mg(e,n,c.getNode(),r,t,f)}(e,t)},pg=function(e,t){e.getDoc().execCommand(t,!1,null)},hg=function(e){ad(e,!1)||gg(e,!1)||Qd(e,!1)||hf(e,!1)||Dm(e)||Cf(e,!1)||ng(e,!1)||(pg(e,"Delete"),ql(e))},vg=function(e){ad(e,!0)||gg(e,!0)||Qd(e,!0)||hf(e,!0)||Dm(e)||Cf(e,!0)||ng(e,!0)||pg(e,"ForwardDelete")},yg=function(o,t,e){var n=function(e){return t=o,n=e.dom(),r=_r(n,t),_.from(r).filter(function(e){return 0<e.length});var t,n,r};return na(ar.fromDom(e),function(e){return n(e).isSome()},function(e){return Mr(ar.fromDom(t),e)}).bind(n)},bg=function(o){return function(r,e){return _.from(e).map(ar.fromDom).filter(dr).bind(function(e){return yg(o,r,e.dom()).or((t=o,n=e.dom(),_.from(Si.DOM.getStyle(n,t,!0))));var t,n}).getOr("")}},Cg={getFontSize:bg("font-size"),getFontFamily:H(function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")},bg("font-family")),toPt:function(e,t){return/[0-9.]+px$/.test(e)?(n=72*parseInt(e,10)/96,r=t||0,o=Math.pow(10,r),Math.round(n*o)/o+"pt"):e;var n,r,o}},xg=function(e){return sc.firstPositionIn(e.getBody()).map(function(e){var t=e.container();return jo.isText(t)?t.parentNode:t})},wg=function(o){return _.from(o.selection.getRng()).bind(function(e){var t,n,r=o.getBody();return n=r,(t=e).startContainer===n&&0===t.startOffset?_.none():_.from(o.selection.getStart(!0))})},Ng=function(e,t){if(/^[0-9\.]+$/.test(t)){var n=parseInt(t,10);if(1<=n&&n<=7){var r=Al(e),o=Rl(e);return o?o[n-1]||t:r[n-1]||t}return t}return t},Eg=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},Sg=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e;e=e.parentNode}return null}(e,t,n)},Tg=function(e,t,n){return Sg(e,t,function(e){return e.nodeName===n})},kg=function(e){return e&&"TABLE"===e.nodeName},_g=function(e,t,n){for(var r=new go(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(jo.isBr(t))return!0},Ag=function(e,t,n,r,o){var i,a,u,s,c,l,f=e.getRoot(),d=e.schema.getNonEmptyElements();if(u=e.getParent(o.parentNode,e.isBlock)||f,r&&jo.isBr(o)&&t&&e.isEmpty(u))return _.some(Su(o.parentNode,e.nodeIndex(o)));for(i=new go(o,u);s=i[r?"prev":"next"]();){if("false"===e.getContentEditableParent(s)||(l=f,ka(c=s)&&!1===Sg(c,l,Ju)))return _.none();if(jo.isText(s)&&0<s.nodeValue.length)return!1===Tg(s,f,"A")?_.some(Su(s,r?s.nodeValue.length:0)):_.none();if(e.isBlock(s)||d[s.nodeName.toLowerCase()])return _.none();a=s}return n&&a?_.some(Su(a,0)):_.none()},Rg=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,g=e.getRoot(),p=!1;if(o=r[(n?"start":"end")+"Container"],i=r[(n?"start":"end")+"Offset"],l=jo.isElement(o)&&i===o.childNodes.length,s=e.schema.getNonEmptyElements(),c=n,ka(o))return _.none();if(jo.isElement(o)&&i>o.childNodes.length-1&&(c=!1),jo.isDocument(o)&&(o=g,i=0),o===g){if(c&&(u=o.childNodes[0<i?i-1:0])){if(ka(u))return _.none();if(s[u.nodeName]||kg(u))return _.none()}if(o.hasChildNodes()){if(i=Math.min(!c&&0<i?i-1:i,o.childNodes.length-1),o=o.childNodes[i],i=jo.isText(o)&&l?o.data.length:0,!t&&o===g.lastChild&&kg(o))return _.none();if(function(e,t){for(;t&&t!==e;){if(jo.isContentEditableFalse(t))return!0;t=t.parentNode}return!1}(g,o)||ka(o))return _.none();if(o.hasChildNodes()&&!1===kg(o)){a=new go(u=o,g);do{if(jo.isContentEditableFalse(u)||ka(u)){p=!1;break}if(jo.isText(u)&&0<u.nodeValue.length){i=c?0:u.nodeValue.length,o=u,p=!0;break}if(s[u.nodeName.toLowerCase()]&&(!(f=u)||!/^(TD|TH|CAPTION)$/.test(f.nodeName))){i=e.nodeIndex(u),o=u.parentNode,c||i++,p=!0;break}}while(u=c?a.next():a.prev())}}}return t&&(jo.isText(o)&&0===i&&Ag(e,l,t,!0,o).each(function(e){o=e.container(),i=e.offset(),p=!0}),jo.isElement(o)&&((u=o.childNodes[i])||(u=o.childNodes[i-1]),!u||!jo.isBr(u)||(m="A",(d=u).previousSibling&&d.previousSibling.nodeName===m)||_g(e,u,!1)||_g(e,u,!0)||Ag(e,l,t,!0,u).each(function(e){o=e.container(),i=e.offset(),p=!0}))),c&&!t&&jo.isText(o)&&i===o.nodeValue.length&&Ag(e,l,t,!1,o).each(function(e){o=e.container(),i=e.offset(),p=!0}),p?_.some(Su(o,i)):_.none()},Dg=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=Su.fromRangeStart(t);return Rg(e,n,!0,r).each(function(e){n&&Su.isAbove(o,e)||r.setStart(e.container(),e.offset())}),n||Rg(e,n,!1,r).each(function(e){r.setEnd(e.container(),e.offset())}),n&&r.collapse(!0),Eg(t,r)?_.none():_.some(r)},Og=function(e,t,n){var r=e.create("span",{},"&nbsp;");n.parentNode.insertBefore(r,n),t.scrollIntoView(r),e.remove(r)},Bg=function(e,t,n,r){var o=e.createRng();r?(o.setStartBefore(n),o.setEndBefore(n)):(o.setStartAfter(n),o.setEndAfter(n)),t.setRng(o)},Pg=function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng();Dg(i,a).each(function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)});var u=a.startOffset,s=a.startContainer;if(1===s.nodeType&&s.hasChildNodes()){var c=u>s.childNodes.length-1;s=s.childNodes[Math.min(u,s.childNodes.length-1)]||s,u=c&&3===s.nodeType?s.nodeValue.length:0}var l=i.getParent(s,i.isBlock),f=l?i.getParent(l.parentNode,i.isBlock):null,d=f?f.nodeName.toUpperCase():"",m=t&&t.ctrlKey;"LI"!==d||m||(l=f),s&&3===s.nodeType&&u>=s.nodeValue.length&&(function(e,t,n){for(var r,o=new go(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||0<r.length)return!0}(e.schema,s,l)||(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0)),n=i.create("br"),zu(i,a,n),Og(i,o,n),Bg(i,o,n,r),e.undoManager.add()},Ig=function(e,t){var n=ar.fromTag("br");Pi(ar.fromDom(t),n),e.undoManager.add()},Lg=function(e,t){Fg(e.getBody(),t)||Ii(ar.fromDom(t),ar.fromTag("br"));var n=ar.fromTag("br");Ii(ar.fromDom(t),n),Og(e.dom,e.selection,n.dom()),Bg(e.dom,e.selection,n.dom(),!1),e.undoManager.add()},Fg=function(e,t){return n=_u.after(t),!!jo.isBr(n.getNode())||sc.nextPosition(e,_u.after(t)).map(function(e){return jo.isBr(e.getNode())}).getOr(!1);var n},Mg=function(e){return e&&"A"===e.nodeName&&"href"in e},zg=function(e){return e.fold(q(!1),Mg,Mg,q(!1))},Ug=function(e,t){t.fold(o,d(Ig,e),d(Lg,e),o)},jg=function(e,t){var n,r,o,i=(n=e,r=d(Vl.isInlineTarget,n),o=_u.fromRangeStart(n.selection.getRng()),Ld(r,n.getBody(),o).filter(zg));i.isSome()?i.each(d(Ug,e)):Pg(e,t)},Vg={create:Ar("start","soffset","finish","foffset")},Hg=xf([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),qg=(Hg.before,Hg.on,Hg.after,function(e){return e.fold($,$,$)}),$g=xf([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]),Wg={domRange:$g.domRange,relative:$g.relative,exact:$g.exact,exactFromRange:function(e){return $g.exact(e.start(),e.soffset(),e.finish(),e.foffset())},getWin:function(e){var t=e.match({domRange:function(e){return ar.fromDom(e.startContainer)},relative:function(e,t){return qg(e)},exact:function(e,t,n,r){return e}});return jr(t)},range:Vg.create},Kg=or.detect().browser,Xg=function(e,t){var n=mr(t)?Mc(t).length:Kr(t).length+1;return n<e?n:e<0?0:e},Yg=function(e){return Wg.range(e.start(),Xg(e.soffset(),e.start()),e.finish(),Xg(e.foffset(),e.finish()))},Gg=function(e,t){return!jo.isRestrictedNode(t.dom())&&(zr(e,t)||Mr(e,t))},Jg=function(t){return function(e){return Gg(t,e.start())&&Gg(t,e.finish())}},Qg=function(e){return!0===e.inline||Kg.isIE()},Zg=function(e){return Wg.range(ar.fromDom(e.startContainer),e.startOffset,ar.fromDom(e.endContainer),e.endOffset)},ep=function(e){var t=e.getSelection();return(t&&0!==t.rangeCount?_.from(t.getRangeAt(0)):_.none()).map(Zg)},tp=function(e){var t=jr(e);return ep(t.dom()).filter(Jg(e))},np=function(e,t){return _.from(t).filter(Jg(e)).map(Yg)},rp=function(e){var t=V.document.createRange();try{return t.setStart(e.start().dom(),e.soffset()),t.setEnd(e.finish().dom(),e.foffset()),_.some(t)}catch(n){return _.none()}},op=function(e){return(e.bookmark?e.bookmark:_.none()).bind(d(np,ar.fromDom(e.getBody()))).bind(rp)},ip=function(e){var t=Qg(e)?tp(ar.fromDom(e.getBody())):_.none();e.bookmark=t.isSome()?t:e.bookmark},ap=function(t){op(t).each(function(e){t.selection.setRng(e)})},up=op,sp=function(e){return Eo(e)||So(e)},cp=function(e){return U(W(e.selection.getSelectedBlocks(),ar.fromDom),function(e){return!sp(e)&&!Vr(e).map(sp).getOr(!1)})},lp=function(e,t){var n=e.settings,r=e.dom,o=e.selection,i=e.formatter,a=/[a-z%]+$/i.exec(n.indentation)[0],u=parseInt(n.indentation,10),s=e.getParam("indent_use_margin",!1);e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||n.forced_root_block||r.getParent(o.getNode(),r.isBlock)||i.apply("div"),z(cp(e),function(e){!function(e,t,n,r,o,i){if("false"!==e.getContentEditable(i)){var a=n?"margin":"padding";if(a="TABLE"===i.nodeName?"margin":a,a+="rtl"===e.getStyle(i,"direction",!0)?"Right":"Left","outdent"===t){var u=Math.max(0,parseInt(i.style[a]||0,10)-r);e.setStyle(i,a,u?u+o:"")}else u=parseInt(i.style[a]||0,10)+r+o,e.setStyle(i,a,u)}}(r,t,s,u,a,e.dom())})},fp=Xt.each,dp=Xt.extend,mp=Xt.map,gp=Xt.inArray;function pp(s){var o,i,a,t,c={state:{},exec:{},value:{}},n=s.settings;s.on("PreInit",function(){o=s.dom,i=s.selection,n=s.settings,a=s.formatter});var r=function(e){var t;if(!s.quirks.isHidden()&&!s.removed){if(e=e.toLowerCase(),t=c.state[e])return t(e);try{return s.getDoc().queryCommandState(e)}catch(n){}return!1}},e=function(e,n){n=n||"exec",fp(e,function(t,e){fp(e.toLowerCase().split(","),function(e){c[n][e]=t})})},u=function(e,t,n){e=e.toLowerCase(),c.value[e]=function(){return t.call(n||s)}};dp(this,{execCommand:function(t,n,r,e){var o,i,a=!1;if(!s.removed){if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t)||e&&e.skip_focus?ap(s):s.focus(),(e=s.fire("BeforeExecCommand",{command:t,ui:n,value:r})).isDefaultPrevented())return!1;if(i=t.toLowerCase(),o=c.exec[i])return o(i,n,r),s.fire("ExecCommand",{command:t,ui:n,value:r}),!0;if(fp(s.plugins,function(e){if(e.execCommand&&e.execCommand(t,n,r))return s.fire("ExecCommand",{command:t,ui:n,value:r}),!(a=!0)}),a)return a;if(s.theme&&s.theme.execCommand&&s.theme.execCommand(t,n,r))return s.fire("ExecCommand",{command:t,ui:n,value:r}),!0;try{a=s.getDoc().execCommand(t,n,r)}catch(u){}return!!a&&(s.fire("ExecCommand",{command:t,ui:n,value:r}),!0)}},queryCommandState:r,queryCommandValue:function(e){var t;if(!s.quirks.isHidden()&&!s.removed){if(e=e.toLowerCase(),t=c.value[e])return t(e);try{return s.getDoc().queryCommandValue(e)}catch(n){}}},queryCommandSupported:function(e){if(e=e.toLowerCase(),c.exec[e])return!0;try{return s.getDoc().queryCommandSupported(e)}catch(t){}return!1},addCommands:e,addCommand:function(e,o,i){e=e.toLowerCase(),c.exec[e]=function(e,t,n,r){return o.call(i||s,t,n,r)}},addQueryStateHandler:function(e,t,n){e=e.toLowerCase(),c.state[e]=function(){return t.call(n||s)}},addQueryValueHandler:u,hasCustomCommand:function(e){return e=e.toLowerCase(),!!c.exec[e]}});var l=function(e,t,n){return t===undefined&&(t=!1),n===undefined&&(n=null),s.getDoc().execCommand(e,t,n)},f=function(e){return a.match(e)},d=function(e,t){a.toggle(e,t?{value:t}:undefined),s.nodeChanged()},m=function(e){t=i.getBookmark(e)},g=function(){i.moveToBookmark(t)};e({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){s.undoManager.add()},"Cut,Copy,Paste":function(e){var t,n=s.getDoc();try{l(e)}catch(o){t=!0}if("paste"!==e||n.queryCommandEnabled(e)||(t=!0),t||!n.queryCommandSupported(e)){var r=s.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");fe.mac&&(r=r.replace(/Ctrl\+/g,"\u2318+")),s.notificationManager.open({text:r,type:"error"})}},unlink:function(){if(i.isCollapsed()){var e=s.dom.getParent(s.selection.getStart(),"a");e&&s.dom.remove(e,!0)}else a.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(e){var t=e.substring(7);"full"===t&&(t="justify"),fp("left,center,right,justify".split(","),function(e){t!==e&&a.remove("align"+e)}),"none"!==t&&d("align"+t)},"InsertUnorderedList,InsertOrderedList":function(e){var t,n;l(e),(t=o.getParent(i.getNode(),"ol,ul"))&&(n=t.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName)&&(m(),o.split(n,t),g()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){d(e)},"ForeColor,HiliteColor":function(e,t,n){d(e,n)},FontName:function(e,t,n){var r,o;o=n,(r=s).formatter.toggle("fontname",{value:Ng(r,o)}),r.nodeChanged()},FontSize:function(e,t,n){var r,o;o=n,(r=s).formatter.toggle("fontsize",{value:Ng(r,o)}),r.nodeChanged()},RemoveFormat:function(e){a.remove(e)},mceBlockQuote:function(){d("blockquote")},FormatBlock:function(e,t,n){return d(n||"p")},mceCleanup:function(){var e=i.getBookmark();s.setContent(s.getContent()),i.moveToBookmark(e)},mceRemoveNode:function(e,t,n){var r=n||i.getNode();r!==s.getBody()&&(m(),s.dom.remove(r,!0),g())},mceSelectNodeDepth:function(e,t,n){var r=0;o.getParent(i.getNode(),function(e){if(1===e.nodeType&&r++===n)return i.select(e),!1},s.getBody())},mceSelectNode:function(e,t,n){i.select(n)},mceInsertContent:function(e,t,n){ml(s,n)},mceInsertRawHTML:function(e,t,n){i.setContent("tiny_mce_marker");var r=s.getContent();s.setContent(r.replace(/tiny_mce_marker/g,function(){return n}))},mceToggleFormat:function(e,t,n){d(n)},mceSetContent:function(e,t,n){s.setContent(n)},"Indent,Outdent":function(e){lp(s,e)},mceRepaint:function(){},InsertHorizontalRule:function(){s.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){s.hasVisual=!s.hasVisual,s.addVisual()},mceReplaceContent:function(e,t,n){s.execCommand("mceInsertContent",!1,n.replace(/\{\$selection\}/g,i.getContent({format:"text"})))},mceInsertLink:function(e,t,n){var r;"string"==typeof n&&(n={href:n}),r=o.getParent(i.getNode(),"a"),n.href=n.href.replace(" ","%20"),r&&n.href||a.remove("link"),n.href&&a.apply("link",n,r)},selectAll:function(){var e=o.getParent(i.getStart(),jo.isContentEditableTrue);if(e){var t=o.createRng();t.selectNodeContents(e),i.setRng(t)}},"delete":function(){hg(s)},forwardDelete:function(){vg(s)},mceNewDocument:function(){s.setContent("")},InsertLineBreak:function(e,t,n){return jg(s,n),!0}});var p=function(n){return function(){var e=i.isCollapsed()?[o.getParent(i.getNode(),o.isBlock)]:i.getSelectedBlocks(),t=mp(e,function(e){return!!a.matchNode(e,n)});return-1!==gp(t,!0)}};e({JustifyLeft:p("alignleft"),JustifyCenter:p("aligncenter"),JustifyRight:p("alignright"),JustifyFull:p("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return f(e)},mceBlockQuote:function(){return f("blockquote")},Outdent:function(){var e;if(n.inline_styles){if((e=o.getParent(i.getStart(),o.isBlock))&&0<parseInt(e.style.paddingLeft,10))return!0;if((e=o.getParent(i.getEnd(),o.isBlock))&&0<parseInt(e.style.paddingLeft,10))return!0}return r("InsertUnorderedList")||r("InsertOrderedList")||!n.inline_styles&&!!o.getParent(i.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var t=o.getParent(i.getNode(),"ul,ol");return t&&("insertunorderedlist"===e&&"UL"===t.tagName||"insertorderedlist"===e&&"OL"===t.tagName)}},"state"),e({Undo:function(){s.undoManager.undo()},Redo:function(){s.undoManager.redo()}}),u("FontName",function(){return wg(t=s).fold(function(){return xg(t).map(function(e){return Cg.getFontFamily(t.getBody(),e)}).getOr("")},function(e){return Cg.getFontFamily(t.getBody(),e)});var t},this),u("FontSize",function(){return wg(t=s).fold(function(){return xg(t).map(function(e){return Cg.getFontSize(t.getBody(),e)}).getOr("")},function(e){return Cg.getFontSize(t.getBody(),e)});var t},this)}var hp=Xt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend"," "),vp=function(a){var u,s,c=this,l={},f=function(){return!1},d=function(){return!0};u=(a=a||{}).scope||c,s=a.toggleEvent||f;var r=function(e,t,n,r){var o,i,a;if(!1===t&&(t=f),t)for(t={func:t},r&&Xt.extend(t,r),a=(i=e.toLowerCase().split(" ")).length;a--;)e=i[a],(o=l[e])||(o=l[e]=[],s(e,!0)),n?o.unshift(t):o.push(t);return c},m=function(e,t){var n,r,o,i,a;if(e)for(n=(i=e.toLowerCase().split(" ")).length;n--;){if(e=i[n],r=l[e],!e){for(o in l)s(o,!1),delete l[o];return c}if(r){if(t)for(a=r.length;a--;)r[a].func===t&&(r=r.slice(0,a).concat(r.slice(a+1)),l[e]=r);else r.length=0;r.length||(s(e,!1),delete l[e])}}else{for(e in l)s(e,!1);l={}}return c};c.fire=function(e,t){var n,r,o,i;if(e=e.toLowerCase(),(t=t||{}).type=e,t.target||(t.target=u),t.preventDefault||(t.preventDefault=function(){t.isDefaultPrevented=d},t.stopPropagation=function(){t.isPropagationStopped=d},t.stopImmediatePropagation=function(){t.isImmediatePropagationStopped=d},t.isDefaultPrevented=f,t.isPropagationStopped=f,t.isImmediatePropagationStopped=f),a.beforeFire&&a.beforeFire(t),n=l[e])for(r=0,o=n.length;r<o;r++){if((i=n[r]).once&&m(e,i.func),t.isImmediatePropagationStopped())return t.stopPropagation(),t;if(!1===i.func.call(u,t))return t.preventDefault(),t}return t},c.on=r,c.off=m,c.once=function(e,t,n){return r(e,t,n,{once:!0})},c.has=function(e){return e=e.toLowerCase(),!(!l[e]||0===l[e].length)}};vp.isNative=function(e){return!!hp[e.toLowerCase()]};var yp,bp=function(n){return n._eventDispatcher||(n._eventDispatcher=new vp({scope:n,toggleEvent:function(e,t){vp.isNative(e)&&n.toggleNativeEvent&&n.toggleNativeEvent(e,t)}})),n._eventDispatcher},Cp={fire:function(e,t,n){if(this.removed&&"remove"!==e&&"detach"!==e)return t;if(t=bp(this).fire(e,t,n),!1!==n&&this.parent)for(var r=this.parent();r&&!t.isPropagationStopped();)r.fire(e,t,!1),r=r.parent();return t},on:function(e,t,n){return bp(this).on(e,t,n)},off:function(e,t){return bp(this).off(e,t)},once:function(e,t){return bp(this).once(e,t)},hasEventListeners:function(e){return bp(this).has(e)}},xp=function(e,t){return e.fire("PreProcess",t)},wp=function(e,t){return e.fire("PostProcess",t)},Np=function(e){return e.fire("remove")},Ep=function(e){return e.fire("detach")},Sp=function(e,t){return e.fire("SwitchMode",{mode:t})},Tp=function(e,t,n,r){e.fire("ObjectResizeStart",{target:t,width:n,height:r})},kp=function(e,t,n,r){e.fire("ObjectResized",{target:t,width:n,height:r})},_p=function(e,t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}},Ap=function(e,t,n){var r,o;Gi(e,t)&&!1===n?(o=t,$i(r=e)?r.dom().classList.remove(o):Ki(r,o),Yi(r)):n&&Xi(e,t)},Rp=function(e,t){Ap(ar.fromDom(e.getBody()),"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e.readonly=!0,e.getBody().contentEditable="false"):(e.readonly=!1,e.getBody().contentEditable="true",_p(e,"StyleWithCSS",!1),_p(e,"enableInlineTableEditing",!1),_p(e,"enableObjectResizing",!1),e.focus(),e.nodeChanged())},Dp=function(e){return e.readonly?"readonly":"design"},Op=Si.DOM,Bp=function(e,t){return"selectionchange"===t?e.getDoc():!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)?e.getDoc().documentElement:e.settings.event_root?(e.eventRoot||(e.eventRoot=Op.select(e.settings.event_root)[0]),e.eventRoot):e.getBody()},Pp=function(e,t,n){var r;(r=e).hidden||r.readonly?!0===e.readonly&&n.preventDefault():e.fire(t,n)},Ip=function(i,a){var e,t;if(i.delegates||(i.delegates={}),!i.delegates[a]&&!i.removed)if(e=Bp(i,a),i.settings.event_root){if(yp||(yp={},i.editorManager.on("removeEditor",function(){var e;if(!i.editorManager.activeEditor&&yp){for(e in yp)i.dom.unbind(Bp(i,e));yp=null}})),yp[a])return;t=function(e){for(var t=e.target,n=i.editorManager.get(),r=n.length;r--;){var o=n[r].getBody();(o===t||Op.isChildOf(t,o))&&Pp(n[r],a,e)}},yp[a]=t,Op.bind(e,a,t)}else t=function(e){Pp(i,a,e)},Op.bind(e,a,t),i.delegates[a]=t},Lp={bindPendingEventDelegates:function(){var t=this;Xt.each(t._pendingNativeEvents,function(e){Ip(t,e)})},toggleNativeEvent:function(e,t){var n=this;"focus"!==e&&"blur"!==e&&(t?n.initialized?Ip(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(Bp(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e,t=this,n=t.getBody(),r=t.dom;if(t.delegates){for(e in t.delegates)t.dom.unbind(Bp(t,e),e,t.delegates[e]);delete t.delegates}!t.inline&&n&&r&&(n.onload=null,r.unbind(t.getWin()),r.unbind(t.getDoc())),r&&(r.unbind(n),r.unbind(t.getContainer()))}},Fp=Lp=Xt.extend({},Cp,Lp),Mp=Ar("sections","settings"),zp=or.detect().deviceType.isTouch(),Up=["lists","autolink","autosave"],jp={theme:"mobile"},Vp=function(e){var t=k(e)?e.join(" "):e,n=W(S(t)?t.split(" "):[],Gn);return U(n,function(e){return 0<e.length})},Hp=function(e,t){return e.sections().hasOwnProperty(t)},qp=function(e,t,n,r){var o,i=Vp(n.forced_plugins),a=Vp(r.plugins),u=e&&Hp(t,"mobile")?U(a,d(F,Up)):a,s=(o=u,[].concat(Vp(i)).concat(Vp(o)));return Xt.extend(r,{plugins:s.join(" ")})},$p=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,g,p,h=(o=["mobile"],i=yr(r,function(e,t){return F(o,t)}),Mp(i.t,i.f)),v=Xt.extend(t,n,h.settings(),(m=e,p=(g=h).settings().inline,m&&Hp(g,"mobile")&&!p?(c="mobile",l=jp,f=h.sections(),d=f.hasOwnProperty(c)?f[c]:{},Xt.extend({},l,d)):{}),{validate:!0,content_editable:h.settings().inline,external_plugins:(a=n,u=h.settings(),s=u.external_plugins?u.external_plugins:{},a&&a.external_plugins?Xt.extend({},a.external_plugins,s):s)});return qp(e,h,n,v)},Wp=function(e,t,n){return _.from(t.settings[n]).filter(e)},Kp=function(e,t,n,r){var o,i,a,u=t in e.settings?e.settings[t]:n;return"hash"===r?(a={},"string"==typeof(i=u)?z(0<i.indexOf("=")?i.split(/[;,](?![^=;,]*(?:[;,]|$))/):i.split(","),function(e){var t=e.split("=");1<t.length?a[Xt.trim(t[0])]=Xt.trim(t[1]):a[Xt.trim(t[0])]=Xt.trim(t)}):a=i,a):"string"===r?Wp(S,e,t).getOr(n):"number"===r?Wp(O,e,t).getOr(n):"boolean"===r?Wp(R,e,t).getOr(n):"object"===r?Wp(T,e,t).getOr(n):"array"===r?Wp(k,e,t).getOr(n):"string[]"===r?Wp((o=S,function(e){return k(e)&&J(e,o)}),e,t).getOr(n):"function"===r?Wp(D,e,t).getOr(n):u},Xp=Xt.each,Yp=Xt.explode,Gp={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},Jp=Xt.makeMap("alt,ctrl,shift,meta,access");function Qp(i){var a={},r=[],u=function(e){var t,n,r={};for(n in Xp(Yp(e,"+"),function(e){e in Jp?r[e]=!0:/^[0-9]{2,}$/.test(e)?r.keyCode=parseInt(e,10):(r.charCode=e.charCodeAt(0),r.keyCode=Gp[e]||e.toUpperCase().charCodeAt(0))}),t=[r.keyCode],Jp)r[n]?t.push(n):r[n]=!1;return r.id=t.join(","),r.access&&(r.alt=!0,fe.mac?r.ctrl=!0:r.shift=!0),r.meta&&(fe.mac?r.meta=!0:(r.ctrl=!0,r.meta=!1)),r},s=function(e,t,n,r){var o;return(o=Xt.map(Yp(e,">"),u))[o.length-1]=Xt.extend(o[o.length-1],{func:n,scope:r||i}),Xt.extend(o[0],{desc:i.translate(t),subpatterns:o.slice(1)})},o=function(e,t){return!!t&&t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&t.alt===e.altKey&&t.shift===e.shiftKey&&!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0)},c=function(e){return e.func?e.func.call(e.scope):null};i.on("keyup keypress keydown",function(t){var e,n;((n=t).altKey||n.ctrlKey||n.metaKey||"keydown"===(e=t).type&&112<=e.keyCode&&e.keyCode<=123)&&!t.isDefaultPrevented()&&(Xp(a,function(e){if(o(t,e))return r=e.subpatterns.slice(0),"keydown"===t.type&&c(e),!0}),o(t,r[0])&&(1===r.length&&"keydown"===t.type&&c(r[0]),r.shift()))}),this.add=function(e,n,r,o){var t;return"string"==typeof(t=r)?r=function(){i.execCommand(t,!1,null)}:Xt.isArray(t)&&(r=function(){i.execCommand(t[0],t[1],t[2])}),Xp(Yp(Xt.trim(e.toLowerCase())),function(e){var t=s(e,n,r,o);a[t.id]=t}),!0},this.remove=function(e){var t=s(e);return!!a[t.id]&&(delete a[t.id],!0)}}var Zp=function(e){var t=Ur(e).dom();return e.dom()===t.activeElement},eh=function(t){return(e=Ur(t),n=e!==undefined?e.dom():V.document,_.from(n.activeElement).map(ar.fromDom)).filter(function(e){return t.dom().contains(e.dom())});var e,n},th=function(t,e){return(n=e,n.collapsed?_.from(eu(n.startContainer,n.startOffset)).map(ar.fromDom):_.none()).bind(function(e){return ko(e)?_.some(e):!1===zr(t,e)?_.some(t):_.none()});var n},nh=function(t,e){th(ar.fromDom(t.getBody()),e).bind(function(e){return sc.firstPositionIn(e.dom())}).fold(function(){t.selection.normalize()},function(e){return t.selection.setRng(e.toRange())})},rh=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},oh=function(e){var t,n=e.getBody();return n&&(t=ar.fromDom(n),Zp(t)||eh(t).isSome())},ih=function(e){return e.inline?oh(e):(t=e).iframeElement&&Zp(ar.fromDom(t.iframeElement));var t},ah=function(e){return e.editorManager.setActive(e)},uh=function(e,t){e.removed||(t?ah(e):function(t){var e=t.selection,n=t.settings.content_editable,r=t.getBody(),o=e.getRng();t.quirks.refreshContentEditable();var i,a,u=(i=t,a=e.getNode(),i.dom.getParent(a,function(e){return"true"===i.dom.getContentEditable(e)}));if(t.$.contains(r,u))return rh(u),nh(t,o),ah(t);t.bookmark!==undefined&&!1===ih(t)&&up(t).each(function(e){t.selection.setRng(e),o=e}),n||(fe.opera||rh(r),t.getWin().focus()),(fe.gecko||n)&&(rh(r),nh(t,o)),ah(t)}(e))},sh=ih,ch=function(e,t){return t.dom()[e]},lh=function(e,t){return parseInt(kr(t,e),10)},fh=d(ch,"clientWidth"),dh=d(ch,"clientHeight"),mh=d(lh,"margin-top"),gh=d(lh,"margin-left"),ph=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,m,g=ar.fromDom(e.getBody()),p=e.inline?g:(r=g,ar.fromDom(r.dom().ownerDocument.documentElement)),h=(o=e.inline,a=t,u=n,s=(i=p).dom().getBoundingClientRect(),{x:a-(o?s.left+i.dom().clientLeft+gh(i):0),y:u-(o?s.top+i.dom().clientTop+mh(i):0)});return l=h.x,f=h.y,d=fh(c=p),m=dh(c),0<=l&&0<=f&&l<=d&&f<=m},hh=function(e){var t,n=e.inline?e.getBody():e.getContentAreaContainer();return(t=n,_.from(t).map(ar.fromDom)).map(function(e){return zr(Ur(e),e)}).getOr(!1)};function vh(n){var t,o=[],i=function(){var e,t=n.theme;return t&&t.getNotificationManagerImpl?t.getNotificationManagerImpl():{open:e=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:e,reposition:e,getArgs:e}},a=function(){0<o.length&&i().reposition(o)},u=function(t){Y(o,function(e){return e===t}).each(function(e){o.splice(e,1)})},r=function(r){if(!n.removed&&hh(n))return X(o,function(e){return t=i().getArgs(e),n=r,!(t.type!==n.type||t.text!==n.text||t.progressBar||t.timeout||n.progressBar||n.timeout);var t,n}).getOrThunk(function(){n.editorManager.setActive(n);var e,t=i().open(r,function(){u(t),a()});return e=t,o.push(e),a(),t})};return(t=n).on("SkinLoaded",function(){var e=t.settings.service_message;e&&r({text:e,type:"warning",timeout:0,icon:""})}),t.on("ResizeEditor ResizeWindow",function(){he.requestAnimationFrame(a)}),t.on("remove",function(){z(o.slice(),function(e){i().close(e)})}),{open:r,close:function(){_.from(o[0]).each(function(e){i().close(e),u(e),a()})},getNotifications:function(){return o}}}function yh(r){var o=[],i=function(){var e,t=r.theme;return t&&t.getWindowManagerImpl?t.getWindowManagerImpl():{open:e=function(){throw new Error("Theme did not provide a WindowManager implementation.")},alert:e,confirm:e,close:e,getParams:e,setParams:e}},a=function(e,t){return function(){return t?t.apply(e,arguments):undefined}},u=function(e){var t;o.push(e),t=e,r.fire("OpenWindow",{win:t})},s=function(n){Y(o,function(e){return e===n}).each(function(e){var t;o.splice(e,1),t=n,r.fire("CloseWindow",{win:t}),0===o.length&&r.focus()})},e=function(){return _.from(o[o.length-1])};return r.on("remove",function(){z(o.slice(0),function(e){i().close(e)})}),{windows:o,open:function(e,t){r.editorManager.setActive(r),ip(r);var n=i().open(e,t,s);return u(n),n},alert:function(e,t,n){var r=i().alert(e,a(n||this,t),s);u(r)},confirm:function(e,t,n){var r=i().confirm(e,a(n||this,t),s);u(r)},close:function(){e().each(function(e){i().close(e),s(e)})},getParams:function(){return e().map(i().getParams).getOr(null)},setParams:function(t){e().each(function(e){i().setParams(e,t)})},getWindows:function(){return o}}}var bh={},Ch="en",xh={setCode:function(e){e&&(Ch=e,this.rtl=!!this.data[e]&&"rtl"===this.data[e]._dir)},getCode:function(){return Ch},rtl:!1,add:function(e,t){var n=bh[e];for(var r in n||(bh[e]=n={}),t)n[r]=t[r];this.setCode(e)},translate:function(e){var t=bh[Ch]||{},n=function(e){return Xt.is(e,"function")?Object.prototype.toString.call(e):r(e)?"":""+e},r=function(e){return""===e||null===e||Xt.is(e,"undefined")},o=function(e){return e=n(e),Xt.hasOwn(t,e)?n(t[e]):e};if(r(e))return"";if(Xt.is(e,"object")&&Xt.hasOwn(e,"raw"))return n(e.raw);if(Xt.is(e,"array")){var i=e.slice(1);e=o(e[0]).replace(/\{([0-9]+)\}/g,function(e,t){return Xt.hasOwn(i,t)?n(i[t]):e})}return o(e).replace(/{context:\w+}$/,"")},data:bh},wh=Bi.PluginManager,Nh=function(e,t){var n=function(e,t){for(var n in wh.urls)if(wh.urls[n]+"/plugin"+t+".js"===e)return n;return null}(t,e.suffix);return n?xh.translate(["Failed to load plugin: {0} from url {1}",n,t]):xh.translate(["Failed to load plugin url: {0}",t])},Eh=function(e,t){e.notificationManager.open({type:"error",text:t})},Sh=function(e,t){e._skinLoaded?Eh(e,t):e.on("SkinLoaded",function(){Eh(e,t)})},Th=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=V.window.console;r&&(r.error?r.error.apply(r,arguments):r.log.apply(r,arguments))},kh={pluginLoadError:function(e,t){Sh(e,Nh(e,t))},pluginInitError:function(e,t,n){var r=xh.translate(["Failed to initialize plugin: {0}",t]);Th(r,n),Sh(e,r)},uploadError:function(e,t){Sh(e,xh.translate(["Failed to upload image: {0}",t]))},displayError:Sh,initError:Th},_h=Bi.PluginManager,Ah=Bi.ThemeManager;function Rh(){return new(oe.getOrDie("XMLHttpRequest"))}function Dh(u,s){var r={},n=function(e,r,o,t){var i,n;(i=Rh()).open("POST",s.url),i.withCredentials=s.credentials,i.upload.onprogress=function(e){t(e.loaded/e.total*100)},i.onerror=function(){o("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,t,n;i.status<200||300<=i.status?o("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?r((t=s.basePath,n=e.location,t?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):n)):o("Invalid JSON: "+i.responseText)},(n=new V.FormData).append("file",e.blob(),e.filename()),i.send(n)},c=function(e,t){return{url:t,blobInfo:e,status:!0}},l=function(e,t){return{url:"",blobInfo:e,status:!1,error:t}},f=function(e,t){Xt.each(r[e],function(e){e(t)}),delete r[e]},o=function(e,n){return e=Xt.grep(e,function(e){return!u.isUploaded(e.blobUri())}),de.all(Xt.map(e,function(e){return u.isPending(e.blobUri())?(t=e.blobUri(),new de(function(e){r[t]=r[t]||[],r[t].push(e)})):(o=e,i=s.handler,a=n,u.markPending(o.blobUri()),new de(function(t){var n;try{var r=function(){n&&n.close()};i(o,function(e){r(),u.markUploaded(o.blobUri(),e),f(o.blobUri(),c(o,e)),t(c(o,e))},function(e){r(),u.removeFailed(o.blobUri()),f(o.blobUri(),l(o,e)),t(l(o,e))},function(e){e<0||100<e||(n||(n=a()),n.progressBar.value(e))})}catch(e){t(l(o,e.message))}}));var o,i,a,t}))};return!1===D(s.handler)&&(s.handler=n),{upload:function(e,t){return s.url||s.handler!==n?o(e,t):new de(function(e){e([])})}}}var Oh=function(e){return oe.getOrDie("atob")(e)},Bh=function(e){var t,n,r=decodeURIComponent(e).split(",");return(n=/data:([^;]+)/.exec(r[0]))&&(t=n[1]),{type:t,data:r[1]}},Ph=function(a){return new de(function(e){var t,n,r,o,i=Bh(a);try{t=Oh(i.data)}catch(iE){return void e(new V.Blob([]))}for(o=t.length,n=new(oe.getOrDie("Uint8Array"))(o),r=0;r<n.length;r++)n[r]=t.charCodeAt(r);e(new V.Blob([n],{type:i.type}))})},Ih=function(e){return 0===e.indexOf("blob:")?(i=e,new de(function(e,t){var n=function(){t("Cannot convert "+i+" to Blob. Resource might not exist or is inaccessible.")};try{var r=Rh();r.open("GET",i,!0),r.responseType="blob",r.onload=function(){200===this.status?e(this.response):n()},r.onerror=n,r.send()}catch(o){n()}})):0===e.indexOf("data:")?Ph(e):null;var i},Lh=function(n){return new de(function(e){var t=new(oe.getOrDie("FileReader"));t.onloadend=function(){e(t.result)},t.readAsDataURL(n)})},Fh=Bh,Mh=0,zh=function(e){return(e||"blobid")+Mh++},Uh=function(n,r,o,t){var i,a;0!==r.src.indexOf("blob:")?(i=Fh(r.src).data,(a=n.findFirst(function(e){return e.base64()===i}))?o({image:r,blobInfo:a}):Ih(r.src).then(function(e){a=n.create(zh(),e,i),n.add(a),o({image:r,blobInfo:a})},function(e){t(e)})):(a=n.getByUri(r.src))?o({image:r,blobInfo:a}):Ih(r.src).then(function(t){Lh(t).then(function(e){i=Fh(e).data,a=n.create(zh(),t,i),n.add(a),o({image:r,blobInfo:a})})},function(e){t(e)})},jh=function(e){return e?te(e.getElementsByTagName("img")):[]},Vh=0,Hh={uuid:function(e){return e+Vh+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t());var t}};function qh(u){var n,o,t,e,i,r,a,s,c,l=(n=[],o=function(e){var t,n,r;if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");return t=e.id||Hh.uuid("blobid"),n=e.name||t,{id:q(t),name:q(n),filename:q(n+"."+(r=e.blob.type,{"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"}[r.toLowerCase()]||"dat")),blob:q(e.blob),base64:q(e.base64),blobUri:q(e.blobUri||ae.createObjectURL(e.blob)),uri:q(e.uri)}},{create:function(e,t,n,r){if(S(e))return o({id:e,name:r,blob:t,base64:n});if(T(e))return o(e);throw new Error("Unknown input type")},add:function(e){t(e.id())||n.push(e)},get:t=function(t){return e(function(e){return e.id()===t})},getByUri:function(t){return e(function(e){return e.blobUri()===t})},findFirst:e=function(e){return U(n,e)[0]},removeByUri:function(t){n=U(n,function(e){return e.blobUri()!==t||(ae.revokeObjectURL(e.blobUri()),!1)})},destroy:function(){z(n,function(e){ae.revokeObjectURL(e.blobUri())}),n=[]}}),f=(a={},s=function(e,t){return{status:e,resultUri:t}},{hasBlobUri:c=function(e){return e in a},getResultUri:function(e){var t=a[e];return t?t.resultUri:null},isPending:function(e){return!!c(e)&&1===a[e].status},isUploaded:function(e){return!!c(e)&&2===a[e].status},markPending:function(e){a[e]=s(1,null)},markUploaded:function(e,t){a[e]=s(2,t)},removeFailed:function(e){delete a[e]},destroy:function(){a={}}}),d=[],m=function(t){return function(e){return u.selection?t(e):[]}},g=function(e,t,n){for(var r=0;-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1),-1!==r;);return e},p=function(e,t,n){return e=g(e,'src="'+t+'"','src="'+n+'"'),e=g(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},h=function(t,n){z(u.undoManager.data,function(e){"fragmented"===e.type?e.fragments=W(e.fragments,function(e){return p(e,t,n)}):e.content=p(e.content,t,n)})},v=function(){return u.notificationManager.open({text:u.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})},y=function(e,t){l.removeByUri(e.src),h(e.src,t),u.$(e).attr({src:Bl(u)?t+"?"+(new Date).getTime():t,"data-mce-src":u.convertURL(t,"src")})},b=function(n){return i||(i=Dh(f,{url:Il(u),basePath:Ll(u),credentials:Fl(u),handler:Ml(u)})),w().then(m(function(r){var e;return e=W(r,function(e){return e.blobInfo}),i.upload(e,v).then(m(function(e){var t=W(e,function(e,t){var n=r[t].image;return e.status&&Pl(u)?y(n,e.url):e.error&&kh.uploadError(u,e.error),{element:n,status:e.status}});return n&&n(t),t}))}))},C=function(e){if(Ol(u))return b(e)},x=function(t){return!1!==J(d,function(e){return e(t)})&&(0!==t.getAttribute("src").indexOf("data:")||Dl(u)(t))},w=function(){var o,i,a;return r||(o=f,i=l,a={},r={findAll:function(e,n){var t;n||(n=q(!0)),t=U(jh(e),function(e){var t=e.src;return!!fe.fileApi&&!e.hasAttribute("data-mce-bogus")&&!e.hasAttribute("data-mce-placeholder")&&!(!t||t===fe.transparentSrc)&&(0===t.indexOf("blob:")?!o.isUploaded(t)&&n(e):0===t.indexOf("data:")&&n(e))});var r=W(t,function(n){if(a[n.src])return new de(function(t){a[n.src].then(function(e){if("string"==typeof e)return e;t({image:n,blobInfo:e.blobInfo})})});var e=new de(function(e,t){Uh(i,n,e,t)}).then(function(e){return delete a[e.image.src],e})["catch"](function(e){return delete a[n.src],e});return a[n.src]=e});return de.all(r)}}),r.findAll(u.getBody(),x).then(m(function(e){return e=U(e,function(e){return"string"!=typeof e||(kh.displayError(u,e),!1)}),z(e,function(e){h(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")}),e}))},N=function(e){return e.replace(/src="(blob:[^"]+)"/g,function(e,n){var t=f.getResultUri(n);if(t)return'src="'+t+'"';var r=l.getByUri(n);return r||(r=j(u.editorManager.get(),function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)},null)),r?'src="data:'+r.blob().type+";base64,"+r.base64()+'"':e})};return u.on("setContent",function(){Ol(u)?C():w()}),u.on("RawSaveContent",function(e){e.content=N(e.content)}),u.on("getContent",function(e){e.source_view||"raw"===e.format||(e.content=N(e.content))}),u.on("PostRender",function(){u.parser.addNodeFilter("img",function(e){z(e,function(e){var t=e.attr("src");if(!l.getByUri(t)){var n=f.getResultUri(t);n&&e.attr("src",n)}})})}),{blobCache:l,addFilter:function(e){d.push(e)},uploadImages:b,uploadImagesAuto:C,scanForImages:w,destroy:function(){l.destroy(),f.destroy(),r=i=null}}}var $h=function(e,t){return e.hasOwnProperty(t.nodeName)},Wh=function(e,t){if(jo.isText(t)){if(0===t.nodeValue.length)return!0;if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||$h(e,t.nextSibling)))return!0}return!1},Kh=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=e.settings,m=e.dom,g=e.selection,p=e.schema,h=p.getBlockElements(),v=g.getStart(),y=e.getBody();if(f=d.forced_root_block,v&&jo.isElement(v)&&f&&(l=y.nodeName.toLowerCase(),p.isValidChild(l,f.toLowerCase())&&(b=h,C=y,x=v,!M(af(ar.fromDom(x),ar.fromDom(C)),function(e){return $h(b,e.dom())})))){var b,C,x,w,N;for(n=(t=g.getRng()).startContainer,r=t.startOffset,o=t.endContainer,i=t.endOffset,c=sh(e),v=y.firstChild;v;)if(w=h,N=v,jo.isText(N)||jo.isElement(N)&&!$h(w,N)&&!yc(N)){if(Wh(h,v)){v=(u=v).nextSibling,m.remove(u);continue}a||(a=m.create(f,e.settings.forced_root_block_attrs),v.parentNode.insertBefore(a,v),s=!0),v=(u=v).nextSibling,a.appendChild(u)}else a=null,v=v.nextSibling;s&&c&&(t.setStart(n,r),t.setEnd(o,i),g.setRng(t),e.nodeChanged())}},Xh=function(e){e.settings.forced_root_block&&e.on("NodeChange",d(Kh,e))},Yh=function(t){return Yr(t).fold(q([t]),function(e){return[t].concat(Yh(e))})},Gh=function(t){return Gr(t).fold(q([t]),function(e){return"br"===lr(e)?Hr(e).map(function(e){return[t].concat(Gh(e))}).getOr([]):[t].concat(Gh(e))})},Jh=function(o,e){return ru((i=e,a=i.startContainer,u=i.startOffset,jo.isText(a)?0===u?_.some(ar.fromDom(a)):_.none():_.from(a.childNodes[u]).map(ar.fromDom)),(t=e,n=t.endContainer,r=t.endOffset,jo.isText(n)?r===n.data.length?_.some(ar.fromDom(n)):_.none():_.from(n.childNodes[r-1]).map(ar.fromDom)),function(e,t){var n=X(Yh(o),d(Mr,e)),r=X(Gh(o),d(Mr,t));return n.isSome()&&r.isSome()}).getOr(!1);var t,n,r,i,a,u},Qh=function(e,t,n,r){var o=n,i=new go(n,o),a=e.schema.getNonEmptyElements();do{if(3===n.nodeType&&0!==Xt.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length));if(a[n.nodeName]&&!/^(TD|TH)$/.test(n.nodeName))return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n));if(fe.ie&&fe.ie<11&&e.isBlock(n)&&e.isEmpty(n))return void(r?t.setStart(n,0):t.setEnd(n,0))}while(n=r?i.next():i.prev());"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},Zh=function(e){var t=e.selection.getSel();return t&&0<t.rangeCount};function ev(i){var r,o=[];"onselectionchange"in i.getDoc()||i.on("NodeChange Click MouseUp KeyUp Focus",function(e){var t,n;n={startContainer:(t=i.selection.getRng()).startContainer,startOffset:t.startOffset,endContainer:t.endContainer,endOffset:t.endOffset},"nodechange"!==e.type&&Eg(n,r)||i.fire("SelectionChange"),r=n}),i.on("contextmenu",function(){i.fire("SelectionChange")}),i.on("SelectionChange",function(){var e=i.selection.getStart(!0);!e||!fe.range&&i.selection.isCollapsed()||Zh(i)&&!function(e){var t,n;if((n=i.$(e).parentsUntil(i.getBody()).add(e)).length===o.length){for(t=n.length;0<=t&&n[t]===o[t];t--);if(-1===t)return o=n,!0}return o=n,!1}(e)&&i.dom.isChildOf(e,i.getBody())&&i.nodeChanged({selectionChange:!0})}),i.on("MouseUp",function(e){!e.isDefaultPrevented()&&Zh(i)&&("IMG"===i.selection.getNode().nodeName?he.setEditorTimeout(i,function(){i.nodeChanged()}):i.nodeChanged())}),this.nodeChanged=function(e){var t,n,r,o=i.selection;i.initialized&&o&&!i.settings.disable_nodechange&&!i.readonly&&(r=i.getBody(),(t=o.getStart(!0)||r).ownerDocument===i.getDoc()&&i.dom.isChildOf(t,r)||(t=r),n=[],i.dom.getParent(t,function(e){if(e===r)return!0;n.push(e)}),(e=e||{}).element=t,e.parents=n,i.fire("NodeChange",e))}}var tv,nv,rv={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,END:35,HOME:36,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(e){return fe.mac?e.metaKey:e.ctrlKey&&!e.altKey}},ov=function(e){return j(e,function(e,t){return e.concat(function(t){var e=function(e){return W(e,function(e){return(e=Ka(e)).node=t,e})};if(jo.isElement(t))return e(t.getClientRects());if(jo.isText(t)){var n=t.ownerDocument.createRange();return n.setStart(t,0),n.setEnd(t,t.data.length),e(n.getClientRects())}}(t))},[])};(nv=tv||(tv={}))[nv.Up=-1]="Up",nv[nv.Down=1]="Down";var iv=function(o,i,a,e,u,t){var n,s,c=0,l=[],r=function(e){var t,n,r;for(r=ov([e]),-1===o&&(r=r.reverse()),t=0;t<r.length;t++)if(n=r[t],!a(n,s)){if(0<l.length&&i(n,Ht.last(l))&&c++,n.line=c,u(n))return!0;l.push(n)}};return(s=Ht.last(t.getClientRects()))&&(r(n=t.getNode()),function(e,t,n,r){for(;r=Es(r,e,$a,t);)if(n(r))return}(o,e,r,n)),l},av=d(iv,tv.Up,Ga,Ja),uv=d(iv,tv.Down,Ja,Ga),sv=function(n){return function(e){return t=n,e.line>t;var t}},cv=function(n){return function(e){return t=n,e.line===t;var t}},lv=jo.isContentEditableFalse,fv=Es,dv=function(e,t){return Math.abs(e.left-t)},mv=function(e,t){return Math.abs(e.right-t)},gv=function(e,t){return e>=t.left&&e<=t.right},pv=function(e,o){return Ht.reduce(e,function(e,t){var n,r;return n=Math.min(dv(e,o),mv(e,o)),r=Math.min(dv(t,o),mv(t,o)),gv(o,t)?t:gv(o,e)?e:r===n&&lv(t.node)?t:r<n?t:e})},hv=function(e,t,n,r){for(;r=fv(r,e,$a,t);)if(n(r))return},vv=function(e,t,n){var r,o,i,a,u,s,c,l=ov(U(te(e.getElementsByTagName("*")),gs)),f=U(l,function(e){return n>=e.top&&n<=e.bottom});return(r=pv(f,t))&&(r=pv((a=e,c=function(t,e){var n;return n=U(ov([e]),function(e){return!t(e,u)}),s=s.concat(n),0===n.length},(s=[]).push(u=r),hv(tv.Up,a,d(c,Ga),u.node),hv(tv.Down,a,d(c,Ja),u.node),s),t))&&gs(r.node)?(i=t,{node:(o=r).node,before:dv(o,i)<mv(o,i)}):null},yv=function(t,n,e){if(e.collapsed)return!1;if(fe.ie&&fe.ie<=11&&e.startOffset===e.endOffset-1&&e.startContainer===e.endContainer){var r=e.startContainer.childNodes[e.startOffset];if(jo.isElement(r))return M(r.getClientRects(),function(e){return Qa(e,t,n)})}return M(e.getClientRects(),function(e){return Qa(e,t,n)})},bv=function(e){var t,n,r,o;return o=e.getBoundingClientRect(),n=(t=e.ownerDocument).documentElement,r=t.defaultView,{top:o.top+r.pageYOffset-n.clientTop,left:o.left+r.pageXOffset-n.clientLeft}},Cv=function(e,t){return n=(u=e).inline?bv(u.getBody()):{left:0,top:0},a=(i=e).getBody(),r=i.inline?{left:a.scrollLeft,top:a.scrollTop}:{left:0,top:0},{pageX:(o=function(e,t){if(t.target.ownerDocument!==e.getDoc()){var n=bv(e.getContentAreaContainer()),r=(i=(o=e).getBody(),a=o.getDoc().documentElement,u={left:i.scrollLeft,top:i.scrollTop},s={left:i.scrollLeft||a.scrollLeft,top:i.scrollTop||a.scrollTop},o.inline?u:s);return{left:t.pageX-n.left+r.left,top:t.pageY-n.top+r.top}}var o,i,a,u,s;return{left:t.pageX,top:t.pageY}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top};var n,r,o,i,a,u},xv=jo.isContentEditableFalse,wv=jo.isContentEditableTrue,Nv=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},Ev=function(u,s){return function(e){if(0===e.button){var t=X(s.dom.getParents(e.target),au(xv,wv)).getOr(null);if(i=s.getBody(),xv(a=t)&&a!==i){var n=s.dom.getPos(t),r=s.getBody(),o=s.getDoc().documentElement;u.element=t,u.screenX=e.screenX,u.screenY=e.screenY,u.maxX=(s.inline?r.scrollWidth:o.offsetWidth)-2,u.maxY=(s.inline?r.scrollHeight:o.offsetHeight)-2,u.relX=e.pageX-n.x,u.relY=e.pageY-n.y,u.width=t.offsetWidth,u.height=t.offsetHeight,u.ghost=function(e,t,n,r){var o=t.cloneNode(!0);e.dom.setStyles(o,{width:n,height:r}),e.dom.setAttrib(o,"data-mce-selected",null);var i=e.dom.create("div",{"class":"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"});return e.dom.setStyles(i,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),e.dom.setStyles(o,{margin:0,boxSizing:"border-box"}),i.appendChild(o),i}(s,t,u.width,u.height)}}var i,a}},Sv=function(l,f){return function(e){if(l.dragging&&(s=(i=f).selection,c=s.getSel().getRangeAt(0).startContainer,a=3===c.nodeType?c.parentNode:c,u=l.element,a!==u&&!i.dom.isChildOf(a,u)&&!xv(a))){var t=(r=l.element,(o=r.cloneNode(!0)).removeAttribute("data-mce-selected"),o),n=f.fire("drop",{targetClone:t,clientX:e.clientX,clientY:e.clientY});n.isDefaultPrevented()||(t=n.targetClone,f.undoManager.transact(function(){Nv(l.element),f.insertContent(f.dom.getOuterHTML(t)),f._selectionOverrides.hideFakeCaret()}))}var r,o,i,a,u,s,c;Tv(l)}},Tv=function(e){e.dragging=!1,e.element=null,Nv(e.ghost)},kv=function(e){var t,n,r,o,i,a,p,h,v,u,s,c={};t=Si.DOM,a=V.document,n=Ev(c,e),p=c,h=e,v=he.throttle(function(e,t){h._selectionOverrides.hideFakeCaret(),h.selection.placeCaretAt(e,t)},0),r=function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m=Math.max(Math.abs(e.screenX-p.screenX),Math.abs(e.screenY-p.screenY));if(p.element&&!p.dragging&&10<m){if(h.fire("dragstart",{target:p.element}).isDefaultPrevented())return;p.dragging=!0,h.focus()}if(p.dragging){var g=(f=p,{pageX:(d=Cv(h,e)).pageX-f.relX,pageY:d.pageY+5});c=p.ghost,l=h.getBody(),c.parentNode!==l&&l.appendChild(c),t=p.ghost,n=g,r=p.width,o=p.height,i=p.maxX,a=p.maxY,s=u=0,t.style.left=n.pageX+"px",t.style.top=n.pageY+"px",n.pageX+r>i&&(u=n.pageX+r-i),n.pageY+o>a&&(s=n.pageY+o-a),t.style.width=r-u+"px",t.style.height=o-s+"px",v(e.clientX,e.clientY)}},o=Sv(c,e),u=c,i=function(){u.dragging&&s.fire("dragend"),Tv(u)},(s=e).on("mousedown",n),e.on("mousemove",r),e.on("mouseup",o),t.bind(a,"mousemove",r),t.bind(a,"mouseup",i),e.on("remove",function(){t.unbind(a,"mousemove",r),t.unbind(a,"mouseup",i)})},_v=function(e){var n;kv(e),(n=e).on("drop",function(e){var t="undefined"!=typeof e.clientX?n.getDoc().elementFromPoint(e.clientX,e.clientY):null;(xv(t)||xv(n.dom.getContentEditableParent(t)))&&e.preventDefault()})},Av=function(t){var e=Vi(function(){if(!t.removed&&t.selection.getRng().collapsed){var e=fg(t,t.selection.getRng(),!1);t.selection.setRng(e)}},0);t.on("focus",function(){e.throttle()}),t.on("blur",function(){e.cancel()})},Rv=jo.isContentEditableTrue,Dv=jo.isContentEditableFalse,Ov=function(e,t){for(var n=e.getBody();t&&t!==n;){if(Rv(t)||Dv(t))return t;t=t.parentNode}return null},Bv=function(g){var p,e,t,a=g.getBody(),o=ds(g.getBody(),function(e){return g.dom.isBlock(e)},function(){return sh(g)}),h="sel-"+g.dom.uniqueId(),u=function(e){e&&g.selection.setRng(e)},s=function(){return g.selection.getRng()},v=function(e,t,n,r){return void 0===r&&(r=!0),g.fire("ShowCaret",{target:t,direction:e,before:n}).isDefaultPrevented()?null:(r&&g.selection.scrollIntoView(t,-1===e),o.show(n,t))},y=function(e,t){return t=Os(e,a,t),-1===e?_u.fromRangeStart(t):_u.fromRangeEnd(t)},n=function(e){return ka(e)||Oa(e)||Ba(e)},b=function(e){return n(e.startContainer)||n(e.endContainer)},c=function(e){var t=g.schema.getShortEndedElements(),n=g.dom.createRng(),r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;return br(t,r.nodeName.toLowerCase())?0===o?n.setStartBefore(r):n.setStartAfter(r):n.setStart(r,o),br(t,i.nodeName.toLowerCase())?0===a?n.setEndBefore(i):n.setEndAfter(i):n.setEnd(i,a),n},l=function(e,t){var n,r,o,i,a,u,s,c,l,f,d=g.$,m=g.dom;if(!e)return null;if(e.collapsed){if(!b(e))if(!1===t){if(c=y(-1,e),gs(c.getNode(!0)))return v(-1,c.getNode(!0),!1,!1);if(gs(c.getNode()))return v(-1,c.getNode(),!c.isAtEnd(),!1)}else{if(c=y(1,e),gs(c.getNode()))return v(1,c.getNode(),!c.isAtEnd(),!1);if(gs(c.getNode(!0)))return v(1,c.getNode(!0),!1,!1)}return null}return i=e.startContainer,a=e.startOffset,u=e.endOffset,3===i.nodeType&&0===a&&Dv(i.parentNode)&&(i=i.parentNode,a=m.nodeIndex(i),i=i.parentNode),1!==i.nodeType?null:(u===a+1&&i===e.endContainer&&(n=i.childNodes[a]),Dv(n)?(l=f=n.cloneNode(!0),(s=g.fire("ObjectSelected",{target:n,targetClone:l})).isDefaultPrevented()?null:(r=oa(ar.fromDom(g.getBody()),"#"+h).fold(function(){return d([])},function(e){return d([e.dom()])}),l=s.targetClone,0===r.length&&(r=d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",h)).appendTo(g.getBody()),e=g.dom.createRng(),l===f&&fe.ie?(r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(l),e.setStartAfter(r[0].firstChild.firstChild),e.setEndAfter(l)):(r.empty().append("\xa0").append(l).append("\xa0"),e.setStart(r[0].firstChild,1),e.setEnd(r[0].lastChild,0)),r.css({top:m.getPos(n,g.getBody()).y}),r[0].focus(),(o=g.selection.getSel()).removeAllRanges(),o.addRange(e),z(Qi(ar.fromDom(g.getBody()),"*[data-mce-selected]"),function(e){Sr(e,"data-mce-selected")}),n.setAttribute("data-mce-selected","1"),p=n,C(),e)):null)},f=function(){p&&(p.removeAttribute("data-mce-selected"),oa(ar.fromDom(g.getBody()),"#"+h).each(Ui),p=null),oa(ar.fromDom(g.getBody()),"#"+h).each(Ui),p=null},C=function(){o.hide()};return fe.ceFalse&&(function(){g.on("mouseup",function(e){var t=s();t.collapsed&&ph(g,e.clientX,e.clientY)&&u(lg(g,t,!1))}),g.on("click",function(e){var t;(t=Ov(g,e.target))&&(Dv(t)&&(e.preventDefault(),g.focus()),Rv(t)&&g.dom.isChildOf(t,g.selection.getNode())&&f())}),g.on("blur NewBlock",function(){f()}),g.on("ResizeWindow FullscreenStateChanged",function(){return o.reposition()});var n,r,i=function(e,t){var n,r,o=g.dom.getParent(e,g.dom.isBlock),i=g.dom.getParent(t,g.dom.isBlock);return!(!o||!g.dom.isChildOf(o,i)||!1!==Dv(Ov(g,o)))||o&&(n=o,r=i,!(g.dom.getParent(n,g.dom.isBlock)===g.dom.getParent(r,g.dom.isBlock)))&&function(e){var t=Js(e);if(!e.firstChild)return!1;var n=_u.before(e.firstChild),r=t.next(n);return r&&!Lf(r)&&!Ff(r)}(o)};r=!1,(n=g).on("touchstart",function(){r=!1}),n.on("touchmove",function(){r=!0}),n.on("touchend",function(e){var t=Ov(n,e.target);Dv(t)&&(r||(e.preventDefault(),l(cg(n,t))))}),g.on("mousedown",function(e){var t,n=e.target;if((n===a||"HTML"===n.nodeName||g.dom.isChildOf(n,a))&&!1!==ph(g,e.clientX,e.clientY))if(t=Ov(g,n))Dv(t)?(e.preventDefault(),l(cg(g,t))):(f(),Rv(t)&&e.shiftKey||yv(e.clientX,e.clientY,g.selection.getRng())||(C(),g.selection.placeCaretAt(e.clientX,e.clientY)));else if(!1===gs(n)){f(),C();var r=vv(a,e.clientX,e.clientY);if(r&&!i(e.target,r.node)){e.preventDefault();var o=v(1,r.node,r.before,!1);g.getBody().focus(),u(o)}}}),g.on("keypress",function(e){rv.modifierPressed(e)||(e.keyCode,Dv(g.selection.getNode())&&e.preventDefault())}),g.on("getSelectionRange",function(e){var t=e.range;if(p){if(!p.parentNode)return void(p=null);(t=t.cloneRange()).selectNode(p),e.range=t}}),g.on("setSelectionRange",function(e){e.range=c(e.range);var t=l(e.range,e.forward);t&&(e.range=t)}),g.on("AfterSetSelectionRange",function(e){var t,n=e.range;b(n)||"mcepastebin"===n.startContainer.parentNode.id||C(),t=n.startContainer.parentNode,g.dom.hasClass(t,"mce-offscreen-selection")||f()}),g.on("copy",function(e){var t,n=e.clipboardData;if(!e.isDefaultPrevented()&&e.clipboardData&&!fe.ie){var r=(t=g.dom.get(h))?t.getElementsByTagName("*")[0]:t;r&&(e.preventDefault(),n.clearData(),n.setData("text/html",r.outerHTML),n.setData("text/plain",r.outerText))}}),_v(g),Av(g)}(),e=g.contentStyles,t=".mce-content-body",e.push(o.getCss()),e.push(t+" .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}"+t+" *[contentEditable=false] {cursor: default;}"+t+" *[contentEditable=true] {cursor: text;}")),{showCaret:v,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(Pa(e),u(s()),g.selection.scrollIntoView(e[0]))},hideFakeCaret:C,destroy:function(){o.destroy(),p=null}}},Pv=function(e){for(var t=e;/<!--|--!?>/g.test(t);)t=t.replace(/<!--|--!?>/g,"");return t},Iv=function(e,t,n){var r,o,i,a,u=1;for(a=e.getShortEndedElements(),(i=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex=r=n;o=i.exec(t);){if(r=i.lastIndex,"/"===o[1])u--;else if(!o[1]){if(o[2]in a)continue;u++}if(0===u)break}return r},Lv=function(e,t){var n=e.exec(t);if(n){var r=n[1],o=n[2];return"string"==typeof r&&"data-mce-bogus"===r.toLowerCase()?o:null}return null};function Fv(z,U){void 0===U&&(U=di());var e=function(){};!1!==(z=z||{}).fix_self_closing&&(z.fix_self_closing=!0);var j=z.comment?z.comment:e,V=z.cdata?z.cdata:e,H=z.text?z.text:e,q=z.start?z.start:e,$=z.end?z.end:e,W=z.pi?z.pi:e,K=z.doctype?z.doctype:e;return{parse:function(e){var t,n,r,d,o,i,a,m,u,s,g,c,p,l,f,h,v,y,b,C,x,w,N,E,S,T,k,_,A,R=0,D=[],O=0,B=ti.decode,P=Xt.makeMap("src,href,data,background,formaction,poster,xlink:href"),I=/((java|vb)script|mhtml):/i,L=function(e){var t,n;for(t=D.length;t--&&D[t].name!==e;);if(0<=t){for(n=D.length-1;t<=n;n--)(e=D[n]).valid&&$(e.name);D.length=t}},F=function(e,t,n,r,o){var i,a,u,s,c;if(n=(t=t.toLowerCase())in g?t:B(n||r||o||""),p&&!m&&0==(0===(u=t).indexOf("data-")||0===u.indexOf("aria-"))){if(!(i=y[t])&&b){for(a=b.length;a--&&!(i=b[a]).pattern.test(t););-1===a&&(i=null)}if(!i)return;if(i.validValues&&!(n in i.validValues))return}if(P[t]&&!z.allow_script_urls){var l=n.replace(/[\s\u0000-\u001F]+/g,"");try{l=decodeURIComponent(l)}catch(f){l=unescape(l)}if(I.test(l))return;if(c=l,!(s=z).allow_html_data_urls&&(/^data:image\//i.test(c)?!1===s.allow_svg_data_urls&&/^data:image\/svg\+xml/i.test(c):/^data:/i.test(c)))return}m&&(t in P||0===t.indexOf("on"))||(d.map[t]=n,d.push({name:t,value:n}))};for(S=new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),T=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,s=U.getShortEndedElements(),E=z.self_closing_elements||U.getSelfClosingElements(),g=U.getBoolAttrs(),p=z.validate,u=z.remove_internals,A=z.fix_self_closing,k=U.getSpecialElements(),N=e+">";t=S.exec(N);){if(R<t.index&&H(B(e.substr(R,t.index-R))),n=t[6])":"===(n=n.toLowerCase()).charAt(0)&&(n=n.substr(1)),L(n);else if(n=t[7]){if(t.index+t[0].length>e.length){H(B(e.substr(t.index))),R=t.index+t[0].length;continue}":"===(n=n.toLowerCase()).charAt(0)&&(n=n.substr(1)),c=n in s,A&&E[n]&&0<D.length&&D[D.length-1].name===n&&L(n);var M=Lv(T,t[8]);if(null!==M){if("all"===M){R=Iv(U,e,S.lastIndex),S.lastIndex=R;continue}f=!1}if(!p||(l=U.getElementRule(n))){if(f=!0,p&&(y=l.attributes,b=l.attributePatterns),(v=t[8])?((m=-1!==v.indexOf("data-mce-type"))&&u&&(f=!1),(d=[]).map={},v.replace(T,F)):(d=[]).map={},p&&!m){if(C=l.attributesRequired,x=l.attributesDefault,w=l.attributesForced,l.removeEmptyAttrs&&!d.length&&(f=!1),w)for(o=w.length;o--;)a=(h=w[o]).name,"{$uid}"===(_=h.value)&&(_="mce_"+O++),d.map[a]=_,d.push({name:a,value:_});if(x)for(o=x.length;o--;)(a=(h=x[o]).name)in d.map||("{$uid}"===(_=h.value)&&(_="mce_"+O++),d.map[a]=_,d.push({name:a,value:_}));if(C){for(o=C.length;o--&&!(C[o]in d.map););-1===o&&(f=!1)}if(h=d.map["data-mce-bogus"]){if("all"===h){R=Iv(U,e,S.lastIndex),S.lastIndex=R;continue}f=!1}}f&&q(n,d,c)}else f=!1;if(r=k[n]){r.lastIndex=R=t.index+t[0].length,(t=r.exec(e))?(f&&(i=e.substr(R,t.index-R)),R=t.index+t[0].length):(i=e.substr(R),R=e.length),f&&(0<i.length&&H(i,!0),$(n)),S.lastIndex=R;continue}c||(v&&v.indexOf("/")===v.length-1?f&&$(n):D.push({name:n,valid:f}))}else(n=t[1])?(">"===n.charAt(0)&&(n=" "+n),z.allow_conditional_comments||"[if"!==n.substr(0,3).toLowerCase()||(n=" "+n),j(n)):(n=t[2])?V(Pv(n)):(n=t[3])?K(n):(n=t[4])&&W(n,t[5]);R=t.index+t[0].length}for(R<e.length&&H(B(e.substr(R))),o=D.length-1;0<=o;o--)(n=D[o]).valid&&$(n.name)}}}(Fv||(Fv={})).findEndTag=Iv;var Mv=Fv,zv=function(e,t){var n,r,o,i,a,u,s,c,l=t,f=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,d=e.schema;for(u=e.getTempAttrs(),s=l,c=new RegExp(["\\s?("+u.join("|")+')="[^"]+"'].join("|"),"gi"),l=s.replace(c,""),a=d.getShortEndedElements();i=f.exec(l);)r=f.lastIndex,o=i[0].length,n=a[i[1]]?r:Mv.findEndTag(d,l,r),l=l.substring(0,r-o)+l.substring(n),f.lastIndex=r-o;return wa(l)},Uv={trimExternal:zv,trimInternal:zv},jv=0,Vv=2,Hv=1,qv=function(g,p){var e=g.length+p.length+2,h=new Array(e),v=new Array(e),c=function(e,t,n,r,o){var i=l(e,t,n,r);if(null===i||i.start===t&&i.diag===t-r||i.end===e&&i.diag===e-n)for(var a=e,u=n;a<t||u<r;)a<t&&u<r&&g[a]===p[u]?(o.push([0,g[a]]),++a,++u):r-n<t-e?(o.push([2,g[a]]),++a):(o.push([1,p[u]]),++u);else{c(e,i.start,n,i.start-i.diag,o);for(var s=i.start;s<i.end;++s)o.push([0,g[s]]);c(i.end,t,i.end-i.diag,r,o)}},y=function(e,t,n,r){for(var o=e;o-t<r&&o<n&&g[o]===p[o-t];)++o;return{start:e,end:o,diag:t}},l=function(e,t,n,r){var o=t-e,i=r-n;if(0===o||0===i)return null;var a,u,s,c,l,f=o-i,d=i+o,m=(d%2==0?d:d+1)/2;for(h[1+m]=e,v[1+m]=t+1,a=0;a<=m;++a){for(u=-a;u<=a;u+=2){for(s=u+m,u===-a||u!==a&&h[s-1]<h[s+1]?h[s]=h[s+1]:h[s]=h[s-1]+1,l=(c=h[s])-e+n-u;c<t&&l<r&&g[c]===p[l];)h[s]=++c,++l;if(f%2!=0&&f-a<=u&&u<=f+a&&v[s-f]<=h[s])return y(v[s-f],u+e-n,t,r)}for(u=f-a;u<=f+a;u+=2){for(s=u+m-f,u===f-a||u!==f+a&&v[s+1]<=v[s-1]?v[s]=v[s+1]-1:v[s]=v[s-1],l=(c=v[s]-1)-e+n-u;e<=c&&n<=l&&g[c]===p[l];)v[s]=c--,l--;if(f%2==0&&-a<=u&&u<=a&&v[s]<=h[s+f])return y(v[s],u+e-n,t,r)}}},t=[];return c(0,g.length,0,p.length,t),t},$v=function(e){return jo.isElement(e)?e.outerHTML:jo.isText(e)?ti.encodeRaw(e.data,!1):jo.isComment(e)?"\x3c!--"+e.data+"--\x3e":""},Wv=function(e,t,n){var r=function(e){var t,n,r;for(r=V.document.createElement("div"),t=V.document.createDocumentFragment(),e&&(r.innerHTML=e);n=r.firstChild;)t.appendChild(n);return t}(t);if(e.hasChildNodes()&&n<e.childNodes.length){var o=e.childNodes[n];o.parentNode.insertBefore(r,o)}else e.appendChild(r)},Kv=function(e){return U(W(te(e.childNodes),$v),function(e){return 0<e.length})},Xv=function(e,t){var n,r,o,i=W(te(t.childNodes),$v);return n=qv(i,e),r=t,o=0,z(n,function(e){e[0]===jv?o++:e[0]===Hv?(Wv(r,e[1],o),o++):e[0]===Vv&&function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var n=e.childNodes[t];n.parentNode.removeChild(n)}}(r,o)}),t},Yv=Hi(_.none()),Gv=function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}},Jv=function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}},Qv=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},Zv=function(e){var t=ar.fromTag("body",Yv.get().getOrThunk(function(){var e=V.document.implementation.createHTMLDocument("undo");return Yv.set(_.some(e)),e}));return ya(t,Qv(e)),z(Qi(t,"*[data-mce-bogus]"),ji),t.dom().innerHTML},ey=function(n){var e,t,r;return e=Kv(n.getBody()),-1!==(t=(r=G(e,function(e){var t=Uv.trimInternal(n.serializer,e);return 0<t.length?[t]:[]})).join("")).indexOf("</iframe>")?Gv(r):Jv(t)},ty=function(e,t,n){"fragmented"===t.type?Xv(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},ny=function(e,t){return!(!e||!t)&&(r=t,Qv(e)===Qv(r)||(n=t,Zv(e)===Zv(n)));var n,r};function ry(u){var s,r,o=this,c=0,l=[],t=0,f=function(){return 0===t},i=function(e){f()&&(o.typing=e)},d=function(e){u.setDirty(e)},a=function(e){i(!1),o.add({},e)},n=function(){o.typing&&(i(!1),o.add())};return u.on("init",function(){o.add()}),u.on("BeforeExecCommand",function(e){var t=e.command;"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&(n(),o.beforeChange())}),u.on("ExecCommand",function(e){var t=e.command;"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&a(e)}),u.on("ObjectResizeStart Cut",function(){o.beforeChange()}),u.on("SaveContent ObjectResized blur",a),u.on("DragEnd",a),u.on("KeyUp",function(e){var t=e.keyCode;e.isDefaultPrevented()||((33<=t&&t<=36||37<=t&&t<=40||45===t||e.ctrlKey)&&(a(),u.nodeChanged()),46!==t&&8!==t||u.nodeChanged(),r&&o.typing&&!1===ny(ey(u),l[0])&&(!1===u.isDirty()&&(d(!0),u.fire("change",{level:l[0],lastLevel:null})),u.fire("TypingUndo"),r=!1,u.nodeChanged()))}),u.on("KeyDown",function(e){var t=e.keyCode;if(!e.isDefaultPrevented())if(33<=t&&t<=36||37<=t&&t<=40||45===t)o.typing&&a(e);else{var n=e.ctrlKey&&!e.altKey||e.metaKey;!(t<16||20<t)||224===t||91===t||o.typing||n||(o.beforeChange(),i(!0),o.add({},e),r=!0)}}),u.on("MouseDown",function(e){o.typing&&a(e)}),u.on("input",function(e){var t;e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(t=e).inputType&&null===t.data)&&a(e)}),u.addShortcut("meta+z","","Undo"),u.addShortcut("meta+y,meta+shift+z","","Redo"),u.on("AddUndo Undo Redo ClearUndos",function(e){e.isDefaultPrevented()||u.nodeChanged()}),o={data:l,typing:!1,beforeChange:function(){f()&&(s=Yu.getUndoBookmark(u.selection))},add:function(e,t){var n,r,o,i=u.settings;if(o=ey(u),e=e||{},e=Xt.extend(e,o),!1===f()||u.removed)return null;if(r=l[c],u.fire("BeforeAddUndo",{level:e,lastLevel:r,originalEvent:t}).isDefaultPrevented())return null;if(r&&ny(r,e))return null;if(l[c]&&(l[c].beforeBookmark=s),i.custom_undo_redo_levels&&l.length>i.custom_undo_redo_levels){for(n=0;n<l.length-1;n++)l[n]=l[n+1];l.length--,c=l.length}e.bookmark=Yu.getUndoBookmark(u.selection),c<l.length-1&&(l.length=c+1),l.push(e),c=l.length-1;var a={level:e,lastLevel:r,originalEvent:t};return u.fire("AddUndo",a),0<c&&(d(!0),u.fire("change",a)),e},undo:function(){var e;return o.typing&&(o.add(),o.typing=!1,i(!1)),0<c&&(e=l[--c],ty(u,e,!0),d(!0),u.fire("undo",{level:e})),e},redo:function(){var e;return c<l.length-1&&(e=l[++c],ty(u,e,!1),d(!0),u.fire("redo",{level:e})),e},clear:function(){l=[],c=0,o.typing=!1,o.data=l,u.fire("ClearUndos")},hasUndo:function(){return 0<c||o.typing&&l[0]&&!ny(ey(u),l[0])},hasRedo:function(){return c<l.length-1&&!o.typing},transact:function(e){return n(),o.beforeChange(),o.ignore(e),o.add()},ignore:function(e){try{t++,e()}finally{t--}},extra:function(e,t){var n,r;o.transact(e)&&(r=l[c].bookmark,n=l[c-1],ty(u,n,!0),o.transact(t)&&(l[c-1].beforeBookmark=r))}}}var oy,iy,ay={},uy=Ht.filter,sy=Ht.each;iy=function(e){var t,n,r=e.selection.getRng();t=jo.matchNodeNames("pre"),r.collapsed||(n=e.selection.getSelectedBlocks(),sy(uy(uy(n,t),function(e){return t(e.previousSibling)&&-1!==Ht.indexOf(n,e.previousSibling)}),function(e){var t,n;t=e.previousSibling,gn(n=e).remove(),gn(t).append("<br><br>").append(n.childNodes)}))},ay[oy="pre"]||(ay[oy]=[]),ay[oy].push(iy);var cy=function(e,t){sy(ay[e],function(e){e(t)})},ly=/^(src|href|style)$/,fy=Xt.each,dy=wc.isEq,my=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},gy=function(e,t,n){var r,o,i;return r=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],jo.isElement(r)&&(i=r.childNodes.length-1,!n&&o&&o--,r=r.childNodes[i<o?i:o]),jo.isText(r)&&n&&o>=r.nodeValue.length&&(r=new go(r,e.getBody()).next()||r),jo.isText(r)&&!n&&0===o&&(r=new go(r,e.getBody()).prev()||r),r},py=function(e,t,n,r){var o=e.create(n,r);return t.parentNode.insertBefore(o,t),o.appendChild(t),o},hy=function(e,t,n,r,o){var i=ar.fromDom(t),a=ar.fromDom(e.create(r,o)),u=n?Wr(i):$r(i);return Mi(a,u),n?(Pi(i,a),Li(a,i)):(Ii(i,a),Fi(a,i)),a.dom()},vy=function(e,t,n,r){return!(t=wc.getNonWhiteSpaceSibling(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},yy=function(e,n,r,o,i){var t,a,u,s,c,l,f,d,m,g,p,h,v,y,b=e.dom;if(c=b,!(dy(l=o,(f=n).inline)||dy(l,f.block)||(f.selector?jo.isElement(l)&&c.is(l,f.selector):void 0)||(s=o,n.links&&"A"===s.tagName)))return!1;if("all"!==n.remove)for(fy(n.styles,function(e,t){e=wc.normalizeStyleValue(b,wc.replaceVars(e,r),t),"number"==typeof t&&(t=e,i=0),(n.remove_similar||!i||dy(wc.getStyle(b,i,t),e))&&b.setStyle(o,t,""),u=1}),u&&""===b.getAttrib(o,"style")&&(o.removeAttribute("style"),o.removeAttribute("data-mce-style")),fy(n.attributes,function(e,t){var n;if(e=wc.replaceVars(e,r),"number"==typeof t&&(t=e,i=0),!i||dy(b.getAttrib(i,t),e)){if("class"===t&&(e=b.getAttrib(o,t))&&(n="",fy(e.split(/\s+/),function(e){/mce\-\w+/.test(e)&&(n+=(n?" ":"")+e)}),n))return void b.setAttrib(o,t,n);"class"===t&&o.removeAttribute("className"),ly.test(t)&&o.removeAttribute("data-mce-"+t),o.removeAttribute(t)}}),fy(n.classes,function(e){e=wc.replaceVars(e,r),i&&!b.hasClass(i,e)||b.removeClass(o,e)}),a=b.getAttribs(o),t=0;t<a.length;t++){var C=a[t].nodeName;if(0!==C.indexOf("_")&&0!==C.indexOf("data-"))return!1}return"none"!==n.remove?(d=e,g=n,h=(m=o).parentNode,v=d.dom,y=d.settings.forced_root_block,g.block&&(y?h===v.getRoot()&&(g.list_block&&dy(m,g.list_block)||fy(Xt.grep(m.childNodes),function(e){wc.isValid(d,y,e.nodeName.toLowerCase())?p?p.appendChild(e):(p=py(v,e,y),v.setAttribs(p,d.settings.forced_root_block_attrs)):p=0})):v.isBlock(m)&&!v.isBlock(h)&&(vy(v,m,!1)||vy(v,m.firstChild,!0,1)||m.insertBefore(v.create("br"),m.firstChild),vy(v,m,!0)||vy(v,m.lastChild,!1,1)||m.appendChild(v.create("br")))),g.selector&&g.inline&&!dy(g.inline,m)||v.remove(m,1),!0):void 0},by=yy,Cy=function(s,c,l,e,f){var t,n,d=s.formatter.get(c),m=d[0],a=!0,u=s.dom,r=s.selection,i=function(e){var n,t,r,o,i,a,u=(n=s,t=e,r=c,o=l,i=f,fy(wc.getParents(n.dom,t.parentNode).reverse(),function(e){var t;a||"_start"===e.id||"_end"===e.id||(t=Mm.matchNode(n,e,r,o,i))&&!1!==t.split&&(a=e)}),a);return function(e,t,n,r,o,i,a,u){var s,c,l,f,d,m,g=e.dom;if(n){for(m=n.parentNode,s=r.parentNode;s&&s!==m;s=s.parentNode){for(c=g.clone(s,!1),d=0;d<t.length;d++)if(yy(e,t[d],u,c,c)){c=0;break}c&&(l&&c.appendChild(l),f||(f=c),l=c)}!i||a.mixed&&g.isBlock(n)||(r=g.split(n,r)),l&&(o.parentNode.insertBefore(l,o),f.appendChild(o))}return r}(s,d,u,e,e,!0,m,l)},g=function(e){var t,n,r,o,i;if(jo.isElement(e)&&u.getContentEditable(e)&&(o=a,a="true"===u.getContentEditable(e),i=!0),t=Xt.grep(e.childNodes),a&&!i)for(n=0,r=d.length;n<r&&!yy(s,d[n],l,e,e);n++);if(m.deep&&t.length){for(n=0,r=t.length;n<r;n++)g(t[n]);i&&(a=o)}},p=function(e){var t,n=u.get(e?"_start":"_end"),r=n[e?"firstChild":"lastChild"];return yc(t=r)&&jo.isElement(t)&&("_start"===t.id||"_end"===t.id)&&(r=r[e?"firstChild":"lastChild"]),jo.isText(r)&&0===r.data.length&&(r=e?n.previousSibling||n.nextSibling:n.nextSibling||n.previousSibling),u.remove(n,!0),r},o=function(e){var t,n,r=e.commonAncestorContainer;if(e=Pc(s,e,d,!0),m.split){if(e=Um(e),(t=gy(s,e,!0))!==(n=gy(s,e))){if(/^(TR|TH|TD)$/.test(t.nodeName)&&t.firstChild&&(t="TR"===t.nodeName?t.firstChild.firstChild||t:t.firstChild||t),r&&/^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName)&&/^(TH|TD)$/.test(n.nodeName)&&n.firstChild&&(n=n.firstChild||n),my(u,t,n)){var o=_.from(t.firstChild).getOr(t);return i(hy(u,o,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void p(!0)}if(my(u,n,t))return o=_.from(n.lastChild).getOr(n),i(hy(u,o,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void p(!1);t=py(u,t,"span",{id:"_start","data-mce-type":"bookmark"}),n=py(u,n,"span",{id:"_end","data-mce-type":"bookmark"}),i(t),i(n),t=p(!0),n=p()}else t=n=i(t);e.startContainer=t.parentNode?t.parentNode:t,e.startOffset=u.nodeIndex(t),e.endContainer=n.parentNode?n.parentNode:n,e.endOffset=u.nodeIndex(n)+1}Lc(u,e,function(e){fy(e,function(e){g(e),jo.isElement(e)&&"underline"===s.dom.getStyle(e,"text-decoration")&&e.parentNode&&"underline"===wc.getTextDecoration(u,e.parentNode)&&yy(s,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,e)})})};if(e)e.nodeType?((n=u.createRng()).setStartBefore(e),n.setEndAfter(e),o(n)):o(e);else if("false"!==u.getContentEditable(r.getNode()))r.isCollapsed()&&m.inline&&!u.select("td[data-mce-selected],th[data-mce-selected]").length?function(e,t,n,r){var o,i,a,u,s,c,l,f=e.dom,d=e.selection,m=[],g=d.getRng();for(o=g.startContainer,i=g.startOffset,3===(s=o).nodeType&&(i!==o.nodeValue.length&&(u=!0),s=s.parentNode);s;){if(Mm.matchNode(e,s,t,n,r)){c=s;break}s.nextSibling&&(u=!0),m.push(s),s=s.parentNode}if(c)if(u){a=d.getBookmark(),g.collapse(!0);var p=Pc(e,g,e.formatter.get(t),!0);p=Um(p),e.formatter.remove(t,n,p),d.moveToBookmark(a)}else{l=Qu(e.getBody(),c);var h=$m(!1).dom(),v=Gm(m,h);Xm(e,h,l||c),Wm(e,l,!1),d.setCursorLocation(v,1),f.isEmpty(c)&&f.remove(c)}}(s,c,l,f):(t=Yu.getPersistentBookmark(s.selection,!0),o(r.getRng()),r.moveToBookmark(t),m.inline&&Mm.match(s,c,l,r.getStart())&&wc.moveStart(u,r,r.getRng()),s.nodeChanged());else{e=r.getNode();for(var h=0,v=d.length;h<v&&(!d[h].ceFalseOverride||!yy(s,d[h],l,e,e));h++);}},xy=Xt.each,wy=function(e){return e&&1===e.nodeType&&!yc(e)&&!Ju(e)&&!jo.isBogus(e)},Ny=function(e,t){var n;for(n=e;n;n=n[t]){if(3===n.nodeType&&0!==n.nodeValue.length)return e;if(1===n.nodeType&&!yc(n))return n}return e},Ey=function(e,t,n){var r,o,i=new el(e);if(t&&n&&(t=Ny(t,"previousSibling"),n=Ny(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)r=(o=r).nextSibling,t.appendChild(o);return e.remove(n),Xt.each(Xt.grep(n.childNodes),function(e){t.appendChild(e)}),t}return n},Sy=function(e,t,n){xy(e.childNodes,function(e){wy(e)&&(t(e)&&n(e),e.hasChildNodes()&&Sy(e,t,n))})},Ty=function(n,e){return d(function(e,t){return!(!t||!wc.getStyle(n,t,e))},e)},ky=function(r,e,t){return d(function(e,t,n){r.setStyle(n,e,t),""===n.getAttribute("style")&&n.removeAttribute("style"),_y(r,n)},e,t)},_y=function(e,t){"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,!0)},Ay=function(e,t){var n;1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType&&(n=wc.getTextDecoration(e,t.parentNode),e.getStyle(t,"color")&&n?e.setStyle(t,"text-decoration",n):e.getStyle(t,"text-decoration")===n&&e.setStyle(t,"text-decoration",null))},Ry=function(n,e,r,o){xy(e,function(t){xy(n.dom.select(t.inline,o),function(e){wy(e)&&by(n,t,r,e,t.exact?e:null)}),function(r,e,t){if(e.clear_child_styles){var n=e.links?"*:not(a)":"*";xy(r.select(n,t),function(n){wy(n)&&xy(e.styles,function(e,t){r.setStyle(n,t,"")})})}}(n.dom,t,o)})},Dy=function(e,t,n,r){(t.styles.color||t.styles.textDecoration)&&(Xt.walk(r,d(Ay,e),"childNodes"),Ay(e,r))},Oy=function(e,t,n,r){t.styles&&t.styles.backgroundColor&&Sy(r,Ty(e,"fontSize"),ky(e,"backgroundColor",wc.replaceVars(t.styles.backgroundColor,n)))},By=function(e,t,n,r){"sub"!==t.inline&&"sup"!==t.inline||(Sy(r,Ty(e,"fontSize"),ky(e,"fontSize","")),e.remove(e.select("sup"===t.inline?"sub":"sup",r),!0))},Py=function(e,t,n,r){r&&!1!==t.merge_siblings&&(r=Ey(e,wc.getNonWhiteSpaceSibling(r),r),r=Ey(e,r,wc.getNonWhiteSpaceSibling(r,!0)))},Iy=function(t,n,r,o,i){Mm.matchNode(t,i.parentNode,r,o)&&by(t,n,o,i)||n.merge_with_parents&&t.dom.getParent(i.parentNode,function(e){if(Mm.matchNode(t,e,r,o))return by(t,n,o,i),!0})},Ly=Xt.each,Fy=function(g,p,h,r){var e,t,v=g.formatter.get(p),y=v[0],o=!r&&g.selection.isCollapsed(),i=g.dom,n=g.selection,b=function(n,e){if(e=e||y,n){if(e.onformat&&e.onformat(n,e,h,r),Ly(e.styles,function(e,t){i.setStyle(n,t,wc.replaceVars(e,h))}),e.styles){var t=i.getAttrib(n,"style");t&&n.setAttribute("data-mce-style",t)}Ly(e.attributes,function(e,t){i.setAttrib(n,t,wc.replaceVars(e,h))}),Ly(e.classes,function(e){e=wc.replaceVars(e,h),i.hasClass(n,e)||i.addClass(n,e)})}},C=function(e,t){var n=!1;return!!y.selector&&(Ly(e,function(e){if(!("collapsed"in e&&e.collapsed!==o))return i.is(t,e.selector)&&!Ju(t)?(b(t,e),!(n=!0)):void 0}),n)},a=function(s,e,t,c){var l,f,d=[],m=!0;l=y.inline||y.block,f=s.create(l),b(f),Lc(s,e,function(e){var a,u=function(e){var t,n,r,o;if(o=m,t=e.nodeName.toLowerCase(),n=e.parentNode.nodeName.toLowerCase(),1===e.nodeType&&s.getContentEditable(e)&&(o=m,m="true"===s.getContentEditable(e),r=!0),wc.isEq(t,"br"))return a=0,void(y.block&&s.remove(e));if(y.wrapper&&Mm.matchNode(g,e,p,h))a=0;else{if(m&&!r&&y.block&&!y.wrapper&&wc.isTextBlock(g,t)&&wc.isValid(g,n,l))return e=s.rename(e,l),b(e),d.push(e),void(a=0);if(y.selector){var i=C(v,e);if(!y.inline||i)return void(a=0)}!m||r||!wc.isValid(g,l,t)||!wc.isValid(g,n,l)||!c&&3===e.nodeType&&1===e.nodeValue.length&&65279===e.nodeValue.charCodeAt(0)||Ju(e)||y.inline&&s.isBlock(e)?(a=0,Ly(Xt.grep(e.childNodes),u),r&&(m=o),a=0):(a||(a=s.clone(f,!1),e.parentNode.insertBefore(a,e),d.push(a)),a.appendChild(e))}};Ly(e,u)}),!0===y.links&&Ly(d,function(e){var t=function(e){"A"===e.nodeName&&b(e,y),Ly(Xt.grep(e.childNodes),t)};t(e)}),Ly(d,function(e){var t,n,r,o,i,a=function(e){var n=!1;return Ly(e.childNodes,function(e){if((t=e)&&1===t.nodeType&&!yc(t)&&!Ju(t)&&!jo.isBogus(t))return n=e,!1;var t}),n};n=0,Ly(e.childNodes,function(e){wc.isWhiteSpaceNode(e)||yc(e)||n++}),t=n,!(1<d.length)&&s.isBlock(e)||0!==t?(y.inline||y.wrapper)&&(y.exact||1!==t||((o=a(r=e))&&!yc(o)&&Mm.matchName(s,o,y)&&(i=s.clone(o,!1),b(i),s.replace(i,r,!0),s.remove(o,1)),e=i||r),Ry(g,v,h,e),Iy(g,y,p,h,e),Oy(s,y,h,e),By(s,y,h,e),Py(s,y,h,e)):s.remove(e,1)})};if("false"!==i.getContentEditable(n.getNode())){if(y){if(r)r.nodeType?C(v,r)||((t=i.createRng()).setStartBefore(r),t.setEndAfter(r),a(i,Pc(g,t,v),0,!0)):a(i,r,0,!0);else if(o&&y.inline&&!i.select("td[data-mce-selected],th[data-mce-selected]").length)!function(e,t,n){var r,o,i,a,u,s,c=e.selection;a=(r=c.getRng(!0)).startOffset,s=r.startContainer.nodeValue,(o=Qu(e.getBody(),c.getStart()))&&(i=qm(o));var l,f,d=/[^\s\u00a0\u00ad\u200b\ufeff]/;s&&0<a&&a<s.length&&d.test(s.charAt(a))&&d.test(s.charAt(a-1))?(u=c.getBookmark(),r.collapse(!0),r=Pc(e,r,e.formatter.get(t)),r=Um(r),e.formatter.apply(t,n,r),c.moveToBookmark(u)):(o&&i.nodeValue===jm||(l=e.getDoc(),f=$m(!0).dom(),i=(o=l.importNode(f,!0)).firstChild,r.insertNode(o),a=1),e.formatter.apply(t,n,o),c.setCursorLocation(i,a))}(g,p,h);else{var u=g.selection.getNode();g.settings.forced_root_block||!v[0].defaultBlock||i.getParent(u,i.isBlock)||Fy(g,v[0].defaultBlock),g.selection.setRng(cl(g.selection.getRng())),e=Yu.getPersistentBookmark(g.selection,!0),a(i,Pc(g,n.getRng(),v)),y.styles&&Dy(i,y,h,u),n.moveToBookmark(e),wc.moveStart(i,n,n.getRng()),g.nodeChanged()}cy(p,g)}}else{r=n.getNode();for(var s=0,c=v.length;s<c;s++)if(v[s].ceFalseOverride&&i.is(r,v[s].selector))return void b(r,v[s])}},My={applyFormat:Fy},zy=Xt.each,Uy=function(e,t,n,r,o){var i,a,u,s,c,l,f,d;null===t.get()&&(a=e,u={},(i=t).set({}),a.on("NodeChange",function(n){var r=wc.getParents(a.dom,n.element),o={};r=Xt.grep(r,function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}),zy(i.get(),function(e,n){zy(r,function(t){return a.formatter.matchNode(t,n,{},e.similar)?(u[n]||(zy(e,function(e){e(!0,{node:t,format:n,parents:r})}),u[n]=e),o[n]=e,!1):!Mm.matchesUnInheritedFormatSelector(a,t,n)&&void 0})}),zy(u,function(e,t){o[t]||(delete u[t],zy(e,function(e){e(!1,{node:n.element,format:t,parents:r})}))})})),c=n,l=r,f=o,d=(s=t).get(),zy(c.split(","),function(e){d[e]||(d[e]=[],d[e].similar=f),d[e].push(l)}),s.set(d)},jy={get:function(r){var t={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(n,e,t){Xt.each(t,function(e,t){r.setAttrib(n,t,e)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]};return Xt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){t[e]={block:e,remove:"all"}}),t}},Vy=Xt.each,Hy=Si.DOM,qy=function(e,t){var n,o,r,m=t&&t.schema||di({}),g=function(e){var t,n,r;return o="string"==typeof e?{name:e,classes:[],attrs:{}}:e,t=Hy.create(o.name),n=t,(r=o).classes.length&&Hy.addClass(n,r.classes.join(" ")),Hy.setAttribs(n,r.attrs),t},p=function(n,e,t){var r,o,i,a,u,s,c,l,f=0<e.length&&e[0],d=f&&f.name;if(u=d,s="string"!=typeof(a=n)?a.nodeName.toLowerCase():a,c=m.getElementRule(s),i=!(!(l=c&&c.parentsRequired)||!l.length)&&(u&&-1!==Xt.inArray(l,u)?u:l[0]))d===i?(o=e[0],e=e.slice(1)):o=i;else if(f)o=e[0],e=e.slice(1);else if(!t)return n;return o&&(r=g(o)).appendChild(n),t&&(r||(r=Hy.create("div")).appendChild(n),Xt.each(t,function(e){var t=g(e);r.insertBefore(t,n)})),p(r,e,o&&o.siblings)};return e&&e.length?(o=e[0],n=g(o),(r=Hy.create("div")).appendChild(p(n,e.slice(1),o.siblings)),r):""},$y=function(e){var t,a={classes:[],attrs:{}};return"*"!==(e=a.selector=Xt.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,function(e,t,n,r,o){switch(t){case"#":a.attrs.id=n;break;case".":a.classes.push(n);break;case":":-1!==Xt.inArray("checked disabled enabled read-only required".split(" "),n)&&(a.attrs[n]=n)}if("["===r){var i=o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);i&&(a.attrs[i[1]]=i[2])}return""})),a.name=t||"div",a},Wy=function(e){return e&&"string"==typeof e?(e=(e=e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Xt.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/),function(e){var t=Xt.map(e.split(/(?:~\+|~|\+)/),$y),n=t.pop();return t.length&&(n.siblings=t),n}).reverse()):[]},Ky=function(n,e){var t,r,o,i,a,u,s="";if(!1===(u=n.settings.preview_styles))return"";"string"!=typeof u&&(u="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");var c=function(e){return e.replace(/%(\w+)/g,"")};if("string"==typeof e){if(!(e=n.formatter.get(e)))return;e=e[0]}return"preview"in e&&!1===(u=e.preview)?"":(t=e.block||e.inline||"span",(i=Wy(e.selector)).length?(i[0].name||(i[0].name=t),t=e.selector,r=qy(i,n)):r=qy([t],n),o=Hy.select(t,r)[0]||r.firstChild,Vy(e.styles,function(e,t){(e=c(e))&&Hy.setStyle(o,t,e)}),Vy(e.attributes,function(e,t){(e=c(e))&&Hy.setAttrib(o,t,e)}),Vy(e.classes,function(e){e=c(e),Hy.hasClass(o,e)||Hy.addClass(o,e)}),n.fire("PreviewFormats"),Hy.setStyles(r,{position:"absolute",left:-65535}),n.getBody().appendChild(r),a=Hy.getStyle(n.getBody(),"fontSize",!0),a=/px$/.test(a)?parseInt(a,10):0,Vy(u.split(" "),function(e){var t=Hy.getStyle(o,e,!0);if(!("background-color"===e&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(t)&&(t=Hy.getStyle(n.getBody(),e,!0),"#ffffff"===Hy.toHex(t).toLowerCase())||"color"===e&&"#000000"===Hy.toHex(t).toLowerCase())){if("font-size"===e&&/em|%$/.test(t)){if(0===a)return;t=parseFloat(t)/(/%$/.test(t)?100:1)*a+"px"}"border"===e&&t&&(s+="padding:0 2px;"),s+=e+":"+t+";"}}),n.fire("AfterPreviewFormats"),Hy.remove(r),s)},Xy=function(e,t,n,r,o){var i=t.get(n);!Mm.match(e,n,r,o)||"toggle"in i[0]&&!i[0].toggle?My.applyFormat(e,n,r,o):Cy(e,n,r,o)},Yy=function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline");for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t]);e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])};function Gy(e){var t,n,r,o=(t=e,n={},(r=function(e,t){e&&("string"!=typeof e?Xt.each(e,function(e,t){r(t,e)}):(t=t.length?t:[t],Xt.each(t,function(e){"undefined"==typeof e.deep&&(e.deep=!e.selector),"undefined"==typeof e.split&&(e.split=!e.selector||e.inline),"undefined"==typeof e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))}),n[e]=t))})(jy.get(t.dom)),r(t.settings.formats),{get:function(e){return e?n[e]:n},register:r,unregister:function(e){return e&&n[e]&&delete n[e],n}}),i=Hi(null);return Yy(e),Jm(e),{get:o.get,register:o.register,unregister:o.unregister,apply:d(My.applyFormat,e),remove:d(Cy,e),toggle:d(Xy,e,o),match:d(Mm.match,e),matchAll:d(Mm.matchAll,e),matchNode:d(Mm.matchNode,e),canApply:d(Mm.canApply,e),formatChanged:d(Uy,e,i),getCssText:d(Ky,e)}}var Jy,Qy=Object.prototype.hasOwnProperty,Zy=(Jy=function(e,t){return t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var o=e[r];for(var i in o)Qy.call(o,i)&&(n[i]=Jy(n[i],o[i]))}return n}),eb={register:function(t,s,c){t.addAttributeFilter("data-mce-tabindex",function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attributes.map["data-mce-tabindex"]),n.attr(t,null)}),t.addAttributeFilter("src,href,style",function(e,t){for(var n,r,o=e.length,i="data-mce-"+t,a=s.url_converter,u=s.url_converter_scope;o--;)(r=(n=e[o]).attributes.map[i])!==undefined?(n.attr(t,0<r.length?r:null),n.attr(i,null)):(r=n.attributes.map[t],"style"===t?r=c.serializeStyle(c.parseStyle(r),n.name):a&&(r=a.call(u,r,t,n.name)),n.attr(t,0<r.length?r:null))}),t.addAttributeFilter("class",function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",0<n.length?n:null))}),t.addAttributeFilter("data-mce-type",function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attributes.map["data-mce-type"]||n.cleanup||(_.from(r.firstChild).exists(function(e){return!Ca(e.value)})?r.unwrap():r.remove())}),t.addNodeFilter("noscript",function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=ti.decode(t.value))}),t.addNodeFilter("script,style",function(e,t){for(var n,r,o,i=e.length,a=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};i--;)r=(n=e[i]).firstChild?n.firstChild.value:"","script"===t?((o=n.attr("type"))&&n.attr("type","mce-no/type"===o?null:o.replace(/^mce\-/,"")),"xhtml"===s.element_format&&0<r.length&&(n.firstChild.value="// <![CDATA[\n"+a(r)+"\n// ]]>")):"xhtml"===s.element_format&&0<r.length&&(n.firstChild.value="\x3c!--\n"+a(r)+"\n--\x3e")}),t.addNodeFilter("#comment",function(e){for(var t,n=e.length;n--;)0===(t=e[n]).value.indexOf("[CDATA[")?(t.name="#cdata",t.type=4,t.value=t.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===t.value.indexOf("mce:protected ")&&(t.name="#text",t.type=3,t.raw=!0,t.value=unescape(t.value).substr(14))}),t.addNodeFilter("xml:namespace,input",function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||"type"in n.attributes.map||n.attr("type","text"))}),t.addAttributeFilter("data-mce-type",function(e){z(e,function(e){"format-caret"===e.attr("data-mce-type")&&(e.isEmpty(t.schema.getNonEmptyElements())?e.remove():e.unwrap())})}),t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})},trimTrailingBr:function(e){var t,n,r=function(e){return e&&"br"===e.name};r(t=e.lastChild)&&r(n=t.prev)&&(t.remove(),n.remove())}},tb={process:function(e,t,n){return f=n,(l=e)&&l.hasEventListeners("PreProcess")&&!f.no_events?(o=t,i=n,c=(r=e).dom,o=o.cloneNode(!0),(a=V.document.implementation).createHTMLDocument&&(u=a.createHTMLDocument(""),Xt.each("BODY"===o.nodeName?o.childNodes:[o],function(e){u.body.appendChild(u.importNode(e,!0))}),o="BODY"!==o.nodeName?u.body.firstChild:u.body,s=c.doc,c.doc=u),xp(r,Zy(i,{node:o})),s&&(c.doc=s),o):t;var r,o,i,a,u,s,c,l,f}},nb=function(e,a,u){e.addNodeFilter("font",function(e){z(e,function(e){var t,n=a.parse(e.attr("style")),r=e.attr("color"),o=e.attr("face"),i=e.attr("size");r&&(n.color=r),o&&(n["font-family"]=o),i&&(n["font-size"]=u[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",a.serialize(n)),t=e,z(["color","face","size"],function(e){t.attr(e,null)})})})},rb=function(e,t){var n,r=gi();t.convert_fonts_to_spans&&nb(e,r,Xt.explode(t.font_size_legacy_values)),n=r,e.addNodeFilter("strike",function(e){z(e,function(e){var t=n.parse(e.attr("style"));t["text-decoration"]="line-through",e.name="span",e.attr("style",n.serialize(t))})})},ob={register:function(e,t){t.inline_styles&&rb(e,t)}},ib=/^[ \t\r\n]*$/,ab={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},ub=function(e,t,n){var r,o,i=n?"lastChild":"firstChild",a=n?"prev":"next";if(e[i])return e[i];if(e!==t){if(r=e[a])return r;for(o=e.parent;o&&o!==t;o=o.parent)if(r=o[a])return r}},sb=function(){function a(e,t){this.name=e,1===(this.type=t)&&(this.attributes=[],this.attributes.map={})}return a.create=function(e,t){var n,r;if(n=new a(e,ab[e]||1),t)for(r in t)n.attr(r,t[r]);return n},a.prototype.replace=function(e){return e.parent&&e.remove(),this.insert(e,this),this.remove(),this},a.prototype.attr=function(e,t){var n,r;if("string"!=typeof e){for(r in e)this.attr(r,e[r]);return this}if(n=this.attributes){if(t!==undefined){if(null===t){if(e in n.map)for(delete n.map[e],r=n.length;r--;)if(n[r].name===e)return n=n.splice(r,1),this;return this}if(e in n.map){for(r=n.length;r--;)if(n[r].name===e){n[r].value=t;break}}else n.push({name:e,value:t});return n.map[e]=t,this}return n.map[e]}},a.prototype.clone=function(){var e,t,n,r,o,i=new a(this.name,this.type);if(n=this.attributes){for((o=[]).map={},e=0,t=n.length;e<t;e++)"id"!==(r=n[e]).name&&(o[o.length]={name:r.name,value:r.value},o.map[r.name]=r.value);i.attributes=o}return i.value=this.value,i.shortEnded=this.shortEnded,i},a.prototype.wrap=function(e){return this.parent.insert(e,this),e.append(this),this},a.prototype.unwrap=function(){var e,t;for(e=this.firstChild;e;)t=e.next,this.insert(e,this,!0),e=t;this.remove()},a.prototype.remove=function(){var e=this.parent,t=this.next,n=this.prev;return e&&(e.firstChild===this?(e.firstChild=t)&&(t.prev=null):n.next=t,e.lastChild===this?(e.lastChild=n)&&(n.next=null):t.prev=n,this.parent=this.next=this.prev=null),this},a.prototype.append=function(e){var t;return e.parent&&e.remove(),(t=this.lastChild)?((t.next=e).prev=t,this.lastChild=e):this.lastChild=this.firstChild=e,e.parent=this,e},a.prototype.insert=function(e,t,n){var r;return e.parent&&e.remove(),r=t.parent||this,n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,(e.next=t).prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,(e.prev=t).next=e),e.parent=r,e},a.prototype.getAll=function(e){var t,n=[];for(t=this.firstChild;t;t=ub(t,this))t.name===e&&n.push(t);return n},a.prototype.empty=function(){var e,t,n;if(this.firstChild){for(e=[],n=this.firstChild;n;n=ub(n,this))e.push(n);for(t=e.length;t--;)(n=e[t]).parent=n.firstChild=n.lastChild=n.next=n.prev=null}return this.firstChild=this.lastChild=null,this},a.prototype.isEmpty=function(e,t,n){var r,o,i=this.firstChild;if(t=t||{},i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue;if(e[i.name])return!1;for(r=i.attributes.length;r--;)if("name"===(o=i.attributes[r].name)||0===o.indexOf("data-mce-bookmark"))return!1}if(8===i.type)return!1;if(3===i.type&&!ib.test(i.value))return!1;if(3===i.type&&i.parent&&t[i.parent.name]&&ib.test(i.value))return!1;if(n&&n(i))return!1}while(i=ub(i,this));return!0},a.prototype.walk=function(e){return ub(this,null,e)},a}(),cb=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new sb("br",1)).shortEnded=!0:r.empty().append(new sb("#text",3)).value="\xa0"},lb=function(e){return fb(e,"#text")&&"\xa0"===e.firstChild.value},fb=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},db=function(r,e,t,n){return n.isEmpty(e,t,function(e){return t=e,(n=r.getElementRule(t.name))&&n.paddEmpty;var t,n})},mb=function(e,t){return e&&(t[e.name]||"br"===e.name)},gb=function(e,p){var h=e.schema;p.remove_trailing_brs&&e.addNodeFilter("br",function(e,t,n){var r,o,i,a,u,s,c,l,f=e.length,d=Xt.extend({},h.getBlockElements()),m=h.getNonEmptyElements(),g=h.getWhiteSpaceElements();for(d.body=1,r=0;r<f;r++)if(i=(o=e[r]).parent,d[o.parent.name]&&o===i.lastChild){for(u=o.prev;u;){if("span"!==(s=u.name)||"bookmark"!==u.attr("data-mce-type")){if("br"!==s)break;if("br"===s){o=null;break}}u=u.prev}o&&(o.remove(),db(h,m,g,i)&&(c=h.getElementRule(i.name))&&(c.removeEmpty?i.remove():c.paddEmpty&&cb(p,n,d,i)))}else{for(a=o;i&&i.firstChild===a&&i.lastChild===a&&!d[(a=i).name];)i=i.parent;a===i&&!0!==p.padd_empty_with_br&&((l=new sb("#text",3)).value="\xa0",o.replace(l))}}),e.addAttributeFilter("href",function(e){var t,n,r,o=e.length;if(!p.allow_unsafe_link_target)for(;o--;)"a"===(t=e[o]).name&&"_blank"===t.attr("target")&&t.attr("rel",(n=t.attr("rel"),r=n?Xt.trim(n):"",/\b(noopener)\b/g.test(r)?r:r.split(" ").filter(function(e){return 0<e.length}).concat(["noopener"]).sort().join(" ")))}),p.allow_html_in_named_anchor||e.addAttributeFilter("id,name",function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href"))for(r=o.parent,t=o.lastChild;n=t.prev,r.insert(t,o),t=n;);}),p.fix_list_elements&&e.addNodeFilter("ul,ol",function(e){for(var t,n,r=e.length;r--;)if("ul"===(n=(t=e[r]).parent).name||"ol"===n.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t);else{var o=new sb("li",1);o.attr("style","list-style-type: none"),t.wrap(o)}}),p.validate&&h.getValidClasses()&&e.addAttributeFilter("class",function(e){for(var t,n,r,o,i,a,u,s=e.length,c=h.getValidClasses();s--;){for(n=(t=e[s]).attr("class").split(" "),i="",r=0;r<n.length;r++)o=n[r],u=!1,(a=c["*"])&&a[o]&&(u=!0),a=c[t.name],!u&&a&&a[o]&&(u=!0),u&&(i&&(i+=" "),i+=o);i.length||(i=null),t.attr("class",i)}})},pb=Xt.makeMap,hb=Xt.each,vb=Xt.explode,yb=Xt.extend;function bb(T,k){void 0===k&&(k=di());var _={},A=[],R={},D={};(T=T||{}).validate=!("validate"in T)||T.validate,T.root_name=T.root_name||"body";var O=function(e){var t,n,r;(n=e.name)in _&&((r=R[n])?r.push(e):R[n]=[e]),t=A.length;for(;t--;)(n=A[t].name)in e.attributes.map&&((r=D[n])?r.push(e):D[n]=[e]);return e},e={schema:k,addAttributeFilter:function(e,n){hb(vb(e),function(e){var t;for(t=0;t<A.length;t++)if(A[t].name===e)return void A[t].callbacks.push(n);A.push({name:e,callbacks:[n]})})},getAttributeFilters:function(){return[].concat(A)},addNodeFilter:function(e,n){hb(vb(e),function(e){var t=_[e];t||(_[e]=t=[]),t.push(n)})},getNodeFilters:function(){var e=[];for(var t in _)_.hasOwnProperty(t)&&e.push({name:t,callbacks:_[t]});return e},filterNode:O,parse:function(e,a){var t,n,r,o,i,u,s,c,l,f,d,m=[];a=a||{},R={},D={},l=yb(pb("script,style,head,html,body,title,meta,param"),k.getBlockElements());var g=k.getNonEmptyElements(),p=k.children,h=T.validate,v="forced_root_block"in a?a.forced_root_block:T.forced_root_block,y=k.getWhiteSpaceElements(),b=/^[ \t\r\n]+/,C=/[ \t\r\n]+$/,x=/[ \t\r\n]+/g,w=/^[ \t\r\n]+$/;f=y.hasOwnProperty(a.context)||y.hasOwnProperty(T.root_name);var N=function(e,t){var n,r=new sb(e,t);return e in _&&((n=R[e])?n.push(r):R[e]=[r]),r},E=function(e){var t,n,r,o,i=k.getBlockElements();for(t=e.prev;t&&3===t.type;){if(0<(r=t.value.replace(C,"")).length)return void(t.value=r);if(n=t.next){if(3===n.type&&n.value.length){t=t.prev;continue}if(!i[n.name]&&"script"!==n.name&&"style"!==n.name){t=t.prev;continue}}o=t.prev,t.remove(),t=o}};t=Mv({validate:h,allow_script_urls:T.allow_script_urls,allow_conditional_comments:T.allow_conditional_comments,self_closing_elements:function(e){var t,n={};for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t]);return n}(k.getSelfClosingElements()),cdata:function(e){d.append(N("#cdata",4)).value=e},text:function(e,t){var n;f||(e=e.replace(x," "),mb(d.lastChild,l)&&(e=e.replace(b,""))),0!==e.length&&((n=N("#text",3)).raw=!!t,d.append(n).value=e)},comment:function(e){d.append(N("#comment",8)).value=e},pi:function(e,t){d.append(N(e,7)).value=t,E(d)},doctype:function(e){d.append(N("#doctype",10)).value=e,E(d)},start:function(e,t,n){var r,o,i,a,u;if(i=h?k.getElementRule(e):{}){for((r=N(i.outputName||e,1)).attributes=t,r.shortEnded=n,d.append(r),(u=p[d.name])&&p[r.name]&&!u[r.name]&&m.push(r),o=A.length;o--;)(a=A[o].name)in t.map&&((s=D[a])?s.push(r):D[a]=[r]);l[e]&&E(r),n||(d=r),!f&&y[e]&&(f=!0)}},end:function(e){var t,n,r,o,i;if(n=h?k.getElementRule(e):{}){if(l[e]&&!f){if((t=d.firstChild)&&3===t.type)if(0<(r=t.value.replace(b,"")).length)t.value=r,t=t.next;else for(o=t.next,t.remove(),t=o;t&&3===t.type;)r=t.value,o=t.next,(0===r.length||w.test(r))&&(t.remove(),t=o),t=o;if((t=d.lastChild)&&3===t.type)if(0<(r=t.value.replace(C,"")).length)t.value=r,t=t.prev;else for(o=t.prev,t.remove(),t=o;t&&3===t.type;)r=t.value,o=t.prev,(0===r.length||w.test(r))&&(t.remove(),t=o),t=o}if(f&&y[e]&&(f=!1),n.removeEmpty&&db(k,g,y,d)&&!d.attributes.map.name&&!d.attr("id"))return i=d.parent,l[d.name]?d.empty().remove():d.unwrap(),void(d=i);n.paddEmpty&&(lb(d)||db(k,g,y,d))&&cb(T,a,l,d),d=d.parent}}},k);var S=d=new sb(a.context||T.root_name,11);if(t.parse(e),h&&m.length&&(a.context?a.invalid=!0:function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m,g,p,h;for(d=pb("tr,td,th,tbody,thead,tfoot,table"),l=k.getNonEmptyElements(),f=k.getWhiteSpaceElements(),m=k.getTextBlockElements(),g=k.getSpecialElements(),t=0;t<e.length;t++)if((n=e[t]).parent&&!n.fixed)if(m[n.name]&&"li"===n.parent.name){for(p=n.next;p&&m[p.name];)p.name="li",p.fixed=!0,n.parent.insert(p,n.parent),p=p.next;n.unwrap(n)}else{for(o=[n],r=n.parent;r&&!k.isValidChild(r.name,n.name)&&!d[r.name];r=r.parent)o.push(r);if(r&&1<o.length){for(o.reverse(),i=a=O(o[0].clone()),c=0;c<o.length-1;c++){for(k.isValidChild(a.name,o[c].name)?(u=O(o[c].clone()),a.append(u)):u=a,s=o[c].firstChild;s&&s!==o[c+1];)h=s.next,u.append(s),s=h;a=u}db(k,l,f,i)?r.insert(n,o[0],!0):(r.insert(i,o[0],!0),r.insert(n,i)),r=o[0],(db(k,l,f,r)||fb(r,"br"))&&r.empty().remove()}else if(n.parent){if("li"===n.name){if((p=n.prev)&&("ul"===p.name||"ul"===p.name)){p.append(n);continue}if((p=n.next)&&("ul"===p.name||"ul"===p.name)){p.insert(n,p.firstChild,!0);continue}n.wrap(O(new sb("ul",1)));continue}k.isValidChild(n.parent.name,"div")&&k.isValidChild("div",n.name)?n.wrap(O(new sb("div",1))):g[n.name]?n.empty().remove():n.unwrap()}}}(m)),v&&("body"===S.name||a.isRootContent)&&function(){var e,t,n=S.firstChild,r=function(e){e&&((n=e.firstChild)&&3===n.type&&(n.value=n.value.replace(b,"")),(n=e.lastChild)&&3===n.type&&(n.value=n.value.replace(C,"")))};if(k.isValidChild(S.name,v.toLowerCase())){for(;n;)e=n.next,3===n.type||1===n.type&&"p"!==n.name&&!l[n.name]&&!n.attr("data-mce-type")?(t||((t=N(v,1)).attr(T.forced_root_block_attrs),S.insert(t,n)),t.append(n)):(r(t),t=null),n=e;r(t)}}(),!a.invalid){for(c in R){for(s=_[c],i=(n=R[c]).length;i--;)n[i].parent||n.splice(i,1);for(r=0,o=s.length;r<o;r++)s[r](n,c,a)}for(r=0,o=A.length;r<o;r++)if((s=A[r]).name in D){for(i=(n=D[s.name]).length;i--;)n[i].parent||n.splice(i,1);for(i=0,u=s.callbacks.length;i<u;i++)s.callbacks[i](n,s.name,a)}}return S}};return gb(e,T),ob.register(e,T),e}var Cb=function(e,t,n){-1===Xt.inArray(t,n)&&(e.addAttributeFilter(n,function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),t.push(n))},xb=function(e,t,n){var r=wa(n.getInner?t.innerHTML:e.getOuterHTML(t));return n.selection||Ao(ar.fromDom(t))?r:Xt.trim(r)},wb=function(e,t,n){var r=n.selection?Zy({forced_root_block:!1},n):n,o=e.parse(t,r);return eb.trimTrailingBr(o),o},Nb=function(e,t,n,r,o){var i,a,u,s,c=(i=r,al(t,n).serialize(i));return a=e,s=c,!(u=o).no_events&&a?wp(a,Zy(u,{content:s})).content:s};function Eb(e,t){var a,u,s,c,l,n,r=(a=e,n=["data-mce-selected"],s=(u=t)&&u.dom?u.dom:Si.DOM,c=u&&u.schema?u.schema:di(a),a.entity_encoding=a.entity_encoding||"named",a.remove_trailing_brs=!("remove_trailing_brs"in a)||a.remove_trailing_brs,l=bb(a,c),eb.register(l,a,s),{schema:c,addNodeFilter:l.addNodeFilter,addAttributeFilter:l.addAttributeFilter,serialize:function(e,t){var n=Zy({format:"html"},t||{}),r=tb.process(u,e,n),o=xb(s,r,n),i=wb(l,o,n);return"tree"===n.format?i:Nb(u,a,c,i,n)},addRules:function(e){c.addValidElements(e)},setRules:function(e){c.setValidElements(e)},addTempAttr:d(Cb,l,n),getTempAttrs:function(){return n}});return{schema:r.schema,addNodeFilter:r.addNodeFilter,addAttributeFilter:r.addAttributeFilter,serialize:r.serialize,addRules:r.addRules,setRules:r.setRules,addTempAttr:r.addTempAttr,getTempAttrs:r.getTempAttrs}}function Sb(e){return{getBookmark:d(hc,e),moveToBookmark:d(vc,e)}}(Sb||(Sb={})).isBookmarkNode=yc;var Tb,kb,_b=Sb,Ab=jo.isContentEditableFalse,Rb=jo.isContentEditableTrue,Db=function(r,a){var u,s,c,l,f,d,m,g,p,h,v,y,i,b,C,x,w,N=a.dom,E=Xt.each,S=a.getDoc(),T=V.document,k=Math.abs,_=Math.round,A=a.getBody();l={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var e=".mce-content-body";a.contentStyles.push(e+" div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+e+" .mce-resizehandle:hover {background: #000}"+e+" img[data-mce-selected],"+e+" hr[data-mce-selected] {outline: 1px solid black;resize: none}"+e+" .mce-clonedresizable {position: absolute;"+(fe.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+e+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");var R=function(e){return e&&("IMG"===e.nodeName||a.dom.is(e,"figure.image"))},n=function(e){var t,n,r=e.target;t=e,n=a.selection.getRng(),!R(t.target)||yv(t.clientX,t.clientY,n)||e.isDefaultPrevented()||a.selection.select(r)},D=function(e){return a.dom.is(e,"figure.image")?e.querySelector("img"):e},O=function(e){var t=a.settings.object_resizing;return!1!==t&&!fe.iOS&&("string"!=typeof t&&(t="table,img,figure.image,div"),"false"!==e.getAttribute("data-mce-resize")&&e!==a.getBody()&&Lr(ar.fromDom(e),t))},B=function(e){var t,n,r,o;t=e.screenX-d,n=e.screenY-m,b=t*f[2]+h,C=n*f[3]+v,b=b<5?5:b,C=C<5?5:C,(R(u)&&!1!==a.settings.resize_img_proportional?!rv.modifierPressed(e):rv.modifierPressed(e)||R(u)&&f[2]*f[3]!=0)&&(k(t)>k(n)?(C=_(b*y),b=_(C/y)):(b=_(C/y),C=_(b*y))),N.setStyles(D(s),{width:b,height:C}),r=0<(r=f.startPos.x+t)?r:0,o=0<(o=f.startPos.y+n)?o:0,N.setStyles(c,{left:r,top:o,display:"block"}),c.innerHTML=b+" &times; "+C,f[2]<0&&s.clientWidth<=b&&N.setStyle(s,"left",g+(h-b)),f[3]<0&&s.clientHeight<=C&&N.setStyle(s,"top",p+(v-C)),(t=A.scrollWidth-x)+(n=A.scrollHeight-w)!=0&&N.setStyles(c,{left:r-t,top:o-n}),i||(Tp(a,u,h,v),i=!0)},P=function(){i=!1;var e=function(e,t){t&&(u.style[e]||!a.schema.isValid(u.nodeName.toLowerCase(),e)?N.setStyle(D(u),e,t):N.setAttrib(D(u),e,t))};e("width",b),e("height",C),N.unbind(S,"mousemove",B),N.unbind(S,"mouseup",P),T!==S&&(N.unbind(T,"mousemove",B),N.unbind(T,"mouseup",P)),N.remove(s),N.remove(c),o(u),kp(a,u,b,C),N.setAttrib(u,"style",N.getAttrib(u,"style")),a.nodeChanged()},o=function(e){var t,r,o,n,i;I(),M(),t=N.getPos(e,A),g=t.x,p=t.y,i=e.getBoundingClientRect(),r=i.width||i.right-i.left,o=i.height||i.bottom-i.top,u!==e&&(u=e,b=C=0),n=a.fire("ObjectSelected",{target:e}),O(e)&&!n.isDefaultPrevented()?E(l,function(n,e){var t;(t=N.get("mceResizeHandle"+e))&&N.remove(t),t=N.add(A,"div",{id:"mceResizeHandle"+e,"data-mce-bogus":"all","class":"mce-resizehandle",unselectable:!0,style:"cursor:"+e+"-resize; margin:0; padding:0"}),11===fe.ie&&(t.contentEditable=!1),N.bind(t,"mousedown",function(e){var t;e.stopImmediatePropagation(),e.preventDefault(),d=(t=e).screenX,m=t.screenY,h=D(u).clientWidth,v=D(u).clientHeight,y=v/h,(f=n).startPos={x:r*n[0]+g,y:o*n[1]+p},x=A.scrollWidth,w=A.scrollHeight,s=u.cloneNode(!0),N.addClass(s,"mce-clonedresizable"),N.setAttrib(s,"data-mce-bogus","all"),s.contentEditable=!1,s.unSelectabe=!0,N.setStyles(s,{left:g,top:p,margin:0}),s.removeAttribute("data-mce-selected"),A.appendChild(s),N.bind(S,"mousemove",B),N.bind(S,"mouseup",P),T!==S&&(N.bind(T,"mousemove",B),N.bind(T,"mouseup",P)),c=N.add(A,"div",{"class":"mce-resize-helper","data-mce-bogus":"all"},h+" &times; "+v)}),n.elm=t,N.setStyles(t,{left:r*n[0]+g-t.offsetWidth/2,top:o*n[1]+p-t.offsetHeight/2})}):I(),u.setAttribute("data-mce-selected","1")},I=function(){var e,t;for(e in M(),u&&u.removeAttribute("data-mce-selected"),l)(t=N.get("mceResizeHandle"+e))&&(N.unbind(t),N.remove(t))},L=function(e){var t,n=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)};i||a.removed||(E(N.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")}),t="mousedown"===e.type?e.target:r.getNode(),n(t=N.$(t).closest("table,img,figure.image,hr")[0],A)&&(z(),n(r.getStart(!0),t)&&n(r.getEnd(!0),t))?o(t):I())},F=function(e){return Ab(function(e,t){for(;t&&t!==e;){if(Rb(t)||Ab(t))return t;t=t.parentNode}return null}(a.getBody(),e))},M=function(){for(var e in l){var t=l[e];t.elm&&(N.unbind(t.elm),delete t.elm)}},z=function(){try{a.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(e){}};return a.on("init",function(){z(),fe.ie&&11<=fe.ie&&(a.on("mousedown click",function(e){var t=e.target,n=t.nodeName;i||!/^(TABLE|IMG|HR)$/.test(n)||F(t)||(2!==e.button&&a.selection.select(t,"TABLE"===n),"mousedown"===e.type&&a.nodeChanged())}),a.dom.bind(A,"mscontrolselect",function(e){var t=function(e){he.setEditorTimeout(a,function(){a.selection.select(e)})};if(F(e.target))return e.preventDefault(),void t(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&t(e.target))}));var t=he.throttle(function(e){a.composing||L(e)});a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged",t),a.on("keyup compositionend",function(e){u&&"TABLE"===u.nodeName&&t(e)}),a.on("hide blur",I),a.on("contextmenu",n)}),a.on("remove",M),{isResizable:O,showResizeRect:o,hideResizeRect:I,updateResizeRect:L,destroy:function(){u=s=null}}},Ob=function(e){return jo.isContentEditableTrue(e)||jo.isContentEditableFalse(e)},Bb=function(e,t,n){var r,o,i,a,u,s=n;if(s.caretPositionFromPoint)(o=s.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(o.offsetNode,o.offset),r.collapse(!0));else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t);else if(s.body.createTextRange){r=s.body.createTextRange();try{r.moveToPoint(e,t),r.collapse(!0)}catch(c){r=function(e,n,t){var r,o,i;if(r=t.elementFromPoint(e,n),o=t.body.createTextRange(),r&&"HTML"!==r.tagName||(r=t.body),o.moveToElementText(r),0<(i=(i=Xt.toArray(o.getClientRects())).sort(function(e,t){return(e=Math.abs(Math.max(e.top-n,e.bottom-n)))-(t=Math.abs(Math.max(t.top-n,t.bottom-n)))})).length){n=(i[0].bottom+i[0].top)/2;try{return o.moveToPoint(e,n),o.collapse(!0),o}catch(a){}}return null}(e,t,n)}return i=r,a=n.body,u=i&&i.parentElement?i.parentElement():null,jo.isContentEditableFalse(function(e,t,n){for(;e&&e!==t;){if(n(e))return e;e=e.parentNode}return null}(u,a,Ob))?null:i}return r},Pb=function(n,e){return W(e,function(e){var t=n.fire("GetSelectionRange",{range:e});return t.range!==e?t.range:e})},Ib=function(e,t){var n=(t||V.document).createDocumentFragment();return z(e,function(e){n.appendChild(e.dom())}),ar.fromDom(n)},Lb=Ar("element","width","rows"),Fb=Ar("element","cells"),Mb=Ar("x","y"),zb=function(e,t){var n=parseInt(Er(e,t),10);return isNaN(n)?1:n},Ub=function(e){return j(e,function(e,t){return t.cells().length>e?t.cells().length:e},0)},jb=function(e,t){for(var n=e.rows(),r=0;r<n.length;r++)for(var o=n[r].cells(),i=0;i<o.length;i++)if(Mr(o[i],t))return _.some(Mb(i,r));return _.none()},Vb=function(e,t,n,r,o){for(var i=[],a=e.rows(),u=n;u<=o;u++){var s=a[u].cells(),c=t<r?s.slice(t,r+1):s.slice(r,t+1);i.push(Fb(a[u].element(),c))}return i},Hb=function(e){var o=Lb(ha(e),0,[]);return z(Qi(e,"tr"),function(n,r){z(Qi(n,"td,th"),function(e,t){!function(e,t,n,r,o){for(var i=zb(o,"rowspan"),a=zb(o,"colspan"),u=e.rows(),s=n;s<n+i;s++){u[s]||(u[s]=Fb(va(r),[]));for(var c=t;c<t+a;c++)u[s].cells()[c]=s===n&&c===t?o:ha(o)}}(o,function(e,t,n){for(;r=t,o=n,i=void 0,((i=e.rows())[o]?i[o].cells():[])[r];)t++;var r,o,i;return t}(o,t,r),r,n,e)})}),Lb(o.element(),Ub(o.rows()),o.rows())},qb=function(e){return n=W((t=e).rows(),function(e){var t=W(e.cells(),function(e){var t=va(e);return Sr(t,"colspan"),Sr(t,"rowspan"),t}),n=ha(e.element());return Mi(n,t),n}),r=ha(t.element()),o=ar.fromTag("tbody"),Mi(o,n),Fi(r,o),r;var t,n,r,o},$b=function(l,e,t){return jb(l,e).bind(function(c){return jb(l,t).map(function(e){return t=l,r=e,o=(n=c).x(),i=n.y(),a=r.x(),u=r.y(),s=i<u?Vb(t,o,i,a,u):Vb(t,o,u,a,i),Lb(t.element(),Ub(s),s);var t,n,r,o,i,a,u,s})})},Wb=function(n,t){return X(n,function(e){return"li"===lr(e)&&Jh(e,t)}).fold(q([]),function(e){return(t=n,X(t,function(e){return"ul"===lr(e)||"ol"===lr(e)})).map(function(e){return[ar.fromTag("li"),ar.fromTag(lr(e))]}).getOr([]);var t})},Kb=function(e,t){var n,r=ar.fromDom(t.commonAncestorContainer),o=uf(r,e),i=U(o,function(e){return xo(e)||bo(e)}),a=Wb(o,t),u=i.concat(a.length?a:So(n=r)?Vr(n).filter(Eo).fold(q([]),function(e){return[n,e]}):Eo(n)?[n]:[]);return W(u,ha)},Xb=function(){return Ib([])},Yb=function(e,t){return n=ar.fromDom(t.cloneContents()),r=Kb(e,t),o=j(r,function(e,t){return Fi(t,e),t},n),0<r.length?Ib([o]):o;var n,r,o},Gb=function(e,o){return(t=e,n=o[0],ra(n,"table",d(Mr,t))).bind(function(e){var t=o[0],n=o[o.length-1],r=Hb(e);return $b(r,t,n).map(function(e){return Ib([qb(e)])})}).getOrThunk(Xb);var t,n},Jb=function(e,t){var n,r,o=Cm(t,e);return 0<o.length?Gb(e,o):(n=e,0<(r=t).length&&r[0].collapsed?Xb():Yb(n,r[0]))},Qb=function(e,t){if(void 0===t&&(t={}),t.get=!0,t.format=t.format||"html",t.selection=!0,(t=e.fire("BeforeGetContent",t)).isDefaultPrevented())return e.fire("GetContent",t),t.content;if("text"===t.format)return c=e,_.from(c.selection.getRng()).map(function(e){var t=c.dom.add(c.getBody(),"div",{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},e.cloneContents()),n=wa(t.innerText);return c.dom.remove(t),n}).getOr("");t.getInner=!0;var n,r,o,i,a,u,s,c,l=(r=t,i=(n=e).selection.getRng(),a=n.dom.create("body"),u=n.selection.getSel(),s=Pb(n,gm(u)),(o=r.contextual?Jb(ar.fromDom(n.getBody()),s).dom():i.cloneContents())&&a.appendChild(o),n.selection.serializer.serialize(a,r));return"tree"===t.format?l:(t.content=e.selection.isCollapsed()?"":l,e.fire("GetContent",t),t.content)},Zb=function(e,t,n){var r,o,i,a,u=(r=t,ma(ma({format:"html"},n),{set:!0,selection:!0,content:r})),s=e.selection.getRng(),c=e.getDoc();if(u.no_events||!(u=e.fire("BeforeSetContent",u)).isDefaultPrevented()){if(t=function(e,t){if("raw"!==t.format){var n=e.parser.parse(t.content,ma({isRootContent:!0,forced_root_block:!1},t));return al({validate:e.validate},e.schema).serialize(n)}return t.content}(e,u),s.insertNode){t+='<span id="__caret">_</span>',s.startContainer===c&&s.endContainer===c?c.body.innerHTML=t:(s.deleteContents(),0===c.body.childNodes.length?c.body.innerHTML=t:s.createContextualFragment?s.insertNode(s.createContextualFragment(t)):(i=c.createDocumentFragment(),a=c.createElement("div"),i.appendChild(a),a.outerHTML=t,s.insertNode(i))),o=e.dom.get("__caret"),(s=c.createRange()).setStartBefore(o),s.setEndBefore(o),e.selection.setRng(s),e.dom.remove("__caret");try{e.selection.setRng(s)}catch(f){}}else{var l=s;l.item&&(c.execCommand("Delete",!1,null),l=e.selection.getRng()),/^\s+/.test(t)?(l.pasteHTML('<span id="__mce_tmp">_</span>'+t),e.dom.remove("__mce_tmp")):l.pasteHTML(t)}u.no_events||e.fire("SetContent",u)}else e.fire("SetContent",u)},eC=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset;return _.from(i).map(ar.fromDom).map(function(e){return r&&t.collapsed?e:Xr(e,o(e,a)).getOr(e)}).bind(function(e){return dr(e)?_.some(e):Vr(e)}).map(function(e){return e.dom()}).getOr(e)},tC=function(e,t,n){return eC(e,t,!0,n,function(e,t){return Math.min(e.dom().childNodes.length,t)})},nC=function(e,t,n){return eC(e,t,!1,n,function(e,t){return 0<t?t-1:t})},rC=function(e,t){for(var n=e;e&&jo.isText(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n},oC=Xt.each,iC=function(e){return!!e.select},aC=function(e){return!(!e||!e.ownerDocument)&&zr(ar.fromDom(e.ownerDocument),ar.fromDom(e))},uC=function(u,s,e,c){var n,t,l,f,a,r=function(e,t){return Zb(c,e,t)},o=function(e){var t=m();t.collapse(!!e),i(t)},d=function(){return s.getSelection?s.getSelection():s.document.selection},m=function(){var e,t,n,r,o=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}};if(!s)return null;if(null==(r=s.document))return null;if(c.bookmark!==undefined&&!1===sh(c)){var i=up(c);if(i.isSome())return i.map(function(e){return Pb(c,[e])[0]}).getOr(r.createRange())}try{(e=d())&&!jo.isRestrictedNode(e.anchorNode)&&(t=0<e.rangeCount?e.getRangeAt(0):e.createRange?e.createRange():r.createRange())}catch(a){}return(t=Pb(c,[t])[0])||(t=r.createRange?r.createRange():r.body.createTextRange()),t.setStart&&9===t.startContainer.nodeType&&t.collapsed&&(n=u.getRoot(),t.setStart(n,0),t.setEnd(n,0)),l&&f&&(0===o(t.START_TO_START,t,l)&&0===o(t.END_TO_END,t,l)?t=f:f=l=null),t},i=function(e,t){var n,r;if((o=e)&&(iC(o)||aC(o.startContainer)&&aC(o.endContainer))){var o,i=iC(e)?e:null;if(i){f=null;try{i.select()}catch(a){}}else{if(n=d(),e=c.fire("SetSelectionRange",{range:e,forward:t}).range,n){f=e;try{n.removeAllRanges(),n.addRange(e)}catch(a){}!1===t&&n.extend&&(n.collapse(e.endContainer,e.endOffset),n.extend(e.startContainer,e.startOffset)),l=0<n.rangeCount?n.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!n.setBaseAndExtent||fe.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(r=e.startContainer.childNodes[e.startOffset])&&"IMG"===r.tagName&&(n.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),n.anchorNode===e.startContainer&&n.focusNode===e.endContainer||n.setBaseAndExtent(r,0,r,1)),c.fire("AfterSetSelectionRange",{range:e,forward:t})}}},g=function(){var e,t,n=d();return!(n&&n.anchorNode&&n.focusNode)||((e=u.createRng()).setStart(n.anchorNode,n.anchorOffset),e.collapse(!0),(t=u.createRng()).setStart(n.focusNode,n.focusOffset),t.collapse(!0),e.compareBoundaryPoints(e.START_TO_START,t)<=0)},p={bookmarkManager:null,controlSelection:null,dom:u,win:s,serializer:e,editor:c,collapse:o,setCursorLocation:function(e,t){var n=u.createRng();e?(n.setStart(e,t),n.setEnd(e,t),i(n),o(!1)):(Qh(u,n,c.getBody(),!0),i(n))},getContent:function(e){return Qb(c,e)},setContent:r,getBookmark:function(e,t){return n.getBookmark(e,t)},moveToBookmark:function(e){return n.moveToBookmark(e)},select:function(e,t){var r,n,o;return(r=u,n=e,o=t,_.from(n).map(function(e){var t=r.nodeIndex(e),n=r.createRng();return n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),o&&(Qh(r,n,e,!0),Qh(r,n,e,!1)),n})).each(i),e},isCollapsed:function(){var e=m(),t=d();return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:g,setNode:function(e){return r(u.getOuterHTML(e)),e},getNode:function(){return e=c.getBody(),(t=m())?(r=t.startContainer,o=t.endContainer,i=t.startOffset,a=t.endOffset,n=t.commonAncestorContainer,!t.collapsed&&(r===o&&a-i<2&&r.hasChildNodes()&&(n=r.childNodes[i]),3===r.nodeType&&3===o.nodeType&&(r=r.length===i?rC(r.nextSibling,!0):r.parentNode,o=0===a?rC(o.previousSibling,!1):o.parentNode,r&&r===o))?r:n&&3===n.nodeType?n.parentNode:n):e;var e,t,n,r,o,i,a},getSel:d,setRng:i,getRng:m,getStart:function(e){return tC(c.getBody(),m(),e)},getEnd:function(e){return nC(c.getBody(),m(),e)},getSelectedBlocks:function(e,t){return function(e,t,n,r){var o,i,a=[];if(i=e.getRoot(),n=e.getParent(n||tC(i,t,t.collapsed),e.isBlock),r=e.getParent(r||nC(i,t,t.collapsed),e.isBlock),n&&n!==i&&a.push(n),n&&r&&n!==r)for(var u=new go(o=n,i);(o=u.next())&&o!==r;)e.isBlock(o)&&a.push(o);return r&&n!==r&&r!==i&&a.push(r),a}(u,m(),e,t)},normalize:function(){var e=m(),t=d();if(!hm(t)&&Zh(c)){var n=Dg(u,e);return n.each(function(e){i(e,g())}),n.getOr(e)}return e},selectorChanged:function(e,t){var i;return a||(a={},i={},c.on("NodeChange",function(e){var n=e.element,r=u.getParents(n,null,u.getRoot()),o={};oC(a,function(e,n){oC(r,function(t){if(u.is(t,n))return i[n]||(oC(e,function(e){e(!0,{node:t,selector:n,parents:r})}),i[n]=e),o[n]=e,!1})}),oC(i,function(e,t){o[t]||(delete i[t],oC(e,function(e){e(!1,{node:n,selector:t,parents:r})}))})})),a[e]||(a[e]=[]),a[e].push(t),p},getScrollContainer:function(){for(var e,t=u.getRoot();t&&"BODY"!==t.nodeName;){if(t.scrollHeight>t.clientHeight){e=t;break}t=t.parentNode}return e},scrollIntoView:function(e,t){return og(c,e,t)},placeCaretAt:function(e,t){return i(Bb(e,t,c.getDoc()))},getBoundingClientRect:function(){var e=m();return e.collapsed?_u.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){s=l=f=null,t.destroy()}};return n=_b(p),t=Db(p,c),p.bookmarkManager=n,p.controlSelection=t,p};(kb=Tb||(Tb={}))[kb.Br=0]="Br",kb[kb.Block=1]="Block",kb[kb.Wrap=2]="Wrap",kb[kb.Eol=3]="Eol";var sC=function(e,t){return e===Tu.Backwards?t.reverse():t},cC=function(e,t,n,r){for(var o,i,a,u,s,c,l=Js(n),f=r,d=[];f&&(s=l,c=f,o=t===Tu.Forwards?s.next(c):s.prev(c));){if(jo.isBr(o.getNode(!1)))return t===Tu.Forwards?{positions:sC(t,d).concat([o]),breakType:Tb.Br,breakAt:_.some(o)}:{positions:sC(t,d),breakType:Tb.Br,breakAt:_.some(o)};if(o.isVisible()){if(e(f,o)){var m=(i=t,a=f,u=o,jo.isBr(u.getNode(i===Tu.Forwards))?Tb.Br:!1===Ts(a,u)?Tb.Block:Tb.Wrap);return{positions:sC(t,d),breakType:m,breakAt:_.some(o)}}d.push(o),f=o}else f=o}return{positions:sC(t,d),breakType:Tb.Eol,breakAt:_.none()}},lC=function(n,r,o,e){return r(o,e).breakAt.map(function(e){var t=r(o,e).positions;return n===Tu.Backwards?t.concat(e):[e].concat(t)}).getOr([])},fC=function(e,i){return j(e,function(e,o){return e.fold(function(){return _.some(o)},function(r){return ru(Z(r.getClientRects()),Z(o.getClientRects()),function(e,t){var n=Math.abs(i-e.left);return Math.abs(i-t.left)<=n?o:r}).or(e)})},_.none())},dC=function(t,e){return Z(e.getClientRects()).bind(function(e){return fC(t,e.left)})},mC=d(cC,Su.isAbove,-1),gC=d(cC,Su.isBelow,1),pC=d(lC,-1,mC),hC=d(lC,1,gC),vC=jo.isContentEditableFalse,yC=Za,bC=function(e,t,n,r){var o=e===Tu.Forwards,i=o?Lf:Ff;if(!r.collapsed){var a=yC(r);if(vC(a))return sg(e,t,a,e===Tu.Backwards,!0)}var u=Sa(r.startContainer),s=Ps(e,t.getBody(),r);if(i(s))return cg(t,s.getNode(!o));var c=Vl.normalizePosition(o,n(s));if(!c)return u?r:null;if(i(c))return sg(e,t,c.getNode(!o),o,!0);var l=n(c);return l&&i(l)&&Fs(c,l)?sg(e,t,l.getNode(!o),o,!0):u?fg(t,c.toRange(),!0):null},CC=function(e,t,n,r){var o,i,a,u,s,c,l,f,d;if(d=yC(r),o=Ps(e,t.getBody(),r),i=n(t.getBody(),sv(1),o),a=U(i,cv(1)),s=Ht.last(o.getClientRects()),(Lf(o)||zf(o))&&(d=o.getNode()),(Ff(o)||Uf(o))&&(d=o.getNode(!0)),!s)return null;if(c=s.left,(u=pv(a,c))&&vC(u.node))return l=Math.abs(c-u.left),f=Math.abs(c-u.right),sg(e,t,u.node,l<f,!0);if(d){var m=function(e,t,n,r){var o,i,a,u,s,c,l=Js(t),f=[],d=0,m=function(e){return Ht.last(e.getClientRects())};1===e?(o=l.next,i=Ja,a=Ga,u=_u.after(r)):(o=l.prev,i=Ga,a=Ja,u=_u.before(r)),c=m(u);do{if(u.isVisible()&&!a(s=m(u),c)){if(0<f.length&&i(s,Ht.last(f))&&d++,(s=Ka(s)).position=u,s.line=d,n(s))return f;f.push(s)}}while(u=o(u));return f}(e,t.getBody(),sv(1),d);if(u=pv(U(m,cv(1)),c))return fg(t,u.position.toRange(),!0);if(u=Ht.last(U(m,cv(0))))return fg(t,u.position.toRange(),!0)}},xC=function(e,t,n){var r,o,i,a,u=Js(e.getBody()),s=d(Ls,u.next),c=d(Ls,u.prev);if(n.collapsed&&e.settings.forced_root_block){if(!(r=e.dom.getParent(n.startContainer,"PRE")))return;(1===t?s(_u.fromRangeStart(n)):c(_u.fromRangeStart(n)))||(a=(i=e).dom.create(Nl(i)),(!fe.ie||11<=fe.ie)&&(a.innerHTML='<br data-mce-bogus="1">'),o=a,1===t?e.$(r).after(o):e.$(r).before(o),e.selection.select(o,!0),e.selection.collapse())}},wC=function(l,f){return function(){var e,t,n,r,o,i,a,u,s,c=(t=f,r=Js((e=l).getBody()),o=d(Ls,r.next),i=d(Ls,r.prev),a=t?Tu.Forwards:Tu.Backwards,u=t?o:i,s=e.selection.getRng(),(n=bC(a,e,u,s))?n:(n=xC(e,a,s))||null);return!!c&&(dg(l,c),!0)}},NC=function(u,s){return function(){var e,t,n,r,o,i,a=(r=(t=s)?1:-1,o=t?uv:av,i=(e=u).selection.getRng(),(n=CC(r,e,o,i))?n:(n=xC(e,r,i))||null);return!!a&&(dg(u,a),!0)}},EC=function(r,o){return function(){var t,e=o?_u.fromRangeEnd(r.selection.getRng()):_u.fromRangeStart(r.selection.getRng()),n=o?gC(r.getBody(),e):mC(r.getBody(),e);return(o?ee(n.positions):Z(n.positions)).filter((t=o,function(e){return t?Ff(e):Lf(e)})).fold(q(!1),function(e){return r.selection.setRng(e.toRange()),!0})}},SC=function(e,t,n,r,o){var i,a,u,s,c=Qi(ar.fromDom(n),"td,th,caption").map(function(e){return e.dom()}),l=U((i=e,G(c,function(e){var t,n,r=(t=Ka(e.getBoundingClientRect()),n=-1,{left:t.left-n,top:t.top-n,right:t.right+2*n,bottom:t.bottom+2*n,width:t.width+n,height:t.height+n});return[{x:r.left,y:i(r),cell:e},{x:r.right,y:i(r),cell:e}]})),function(e){return t(e,o)});return(a=l,u=r,s=o,j(a,function(e,r){return e.fold(function(){return _.some(r)},function(e){var t=Math.sqrt(Math.abs(e.x-u)+Math.abs(e.y-s)),n=Math.sqrt(Math.abs(r.x-u)+Math.abs(r.y-s));return _.some(n<t?r:e)})},_.none())).map(function(e){return e.cell})},TC=d(SC,function(e){return e.bottom},function(e,t){return e.y<t}),kC=d(SC,function(e){return e.top},function(e,t){return e.y>t}),_C=function(t,n){return Z(n.getClientRects()).bind(function(e){return TC(t,e.left,e.top)}).bind(function(e){return dC((t=e,sc.lastPositionIn(t).map(function(e){return mC(t,e).positions.concat(e)}).getOr([])),n);var t})},AC=function(t,n){return ee(n.getClientRects()).bind(function(e){return kC(t,e.left,e.top)}).bind(function(e){return dC((t=e,sc.firstPositionIn(t).map(function(e){return[e].concat(gC(t,e).positions)}).getOr([])),n);var t})},RC=function(e,t,n){var r,o,i,a,u=e(t,n);return(a=u).breakType===Tb.Wrap&&0===a.positions.length||!jo.isBr(n.getNode())&&(i=u).breakType===Tb.Br&&1===i.positions.length?(r=e,o=t,!u.breakAt.map(function(e){return r(o,e).breakAt.isSome()}).getOr(!1)):u.breakAt.isNone()},DC=d(RC,mC),OC=d(RC,gC),BC=function(e,t,n,r){var o,i,a,u,s=e.selection.getRng(),c=t?1:-1;if(ms()&&(o=t,i=s,a=n,u=_u.fromRangeStart(i),sc.positionIn(!o,a).map(function(e){return e.isEqual(u)}).getOr(!1))){var l=sg(c,e,n,!t,!0);return dg(e,l),!0}return!1},PC=function(e,t){var n=t.getNode(e);return jo.isElement(n)&&"TABLE"===n.nodeName?_.some(n):_.none()},IC=function(u,s,c){var e=PC(!!s,c),t=!1===s;e.fold(function(){return dg(u,c.toRange())},function(a){return sc.positionIn(t,u.getBody()).filter(function(e){return e.isEqual(c)}).fold(function(){return dg(u,c.toRange())},function(e){return n=s,o=a,t=c,void((i=Nl(r=u))?r.undoManager.transact(function(){var e=ar.fromTag(i);Nr(e,El(r)),Fi(e,ar.fromTag("br")),n?Ii(ar.fromDom(o),e):Pi(ar.fromDom(o),e);var t=r.dom.createRng();t.setStart(e.dom(),0),t.setEnd(e.dom(),0),dg(r,t)}):dg(r,t.toRange()));var n,r,o,t,i})})},LC=function(e,t,n,r){var o,i,a,u,s,c,l=e.selection.getRng(),f=_u.fromRangeStart(l),d=e.getBody();if(!t&&DC(r,f)){var m=(u=d,_C(s=n,c=f).orThunk(function(){return Z(c.getClientRects()).bind(function(e){return fC(pC(u,_u.before(s)),e.left)})}).getOr(_u.before(s)));return IC(e,t,m),!0}return!(!t||!OC(r,f))&&(o=d,m=AC(i=n,a=f).orThunk(function(){return Z(a.getClientRects()).bind(function(e){return fC(hC(o,_u.after(i)),e.left)})}).getOr(_u.after(i)),IC(e,t,m),!0)},FC=function(t,n){return function(){return _.from(t.dom.getParent(t.selection.getNode(),"td,th")).bind(function(e){return _.from(t.dom.getParent(e,"table")).map(function(e){return BC(t,n,e)})}).getOr(!1)}},MC=function(n,r){return function(){return _.from(n.dom.getParent(n.selection.getNode(),"td,th")).bind(function(t){return _.from(n.dom.getParent(t,"table")).map(function(e){return LC(n,r,e,t)})}).getOr(!1)}},zC=function(e){return F(["figcaption"],lr(e))},UC=function(e){var t=V.document.createRange();return t.setStartBefore(e.dom()),t.setEndBefore(e.dom()),t},jC=function(e,t,n){n?Fi(e,t):Li(e,t)},VC=function(e,t,n,r){return""===t?(l=e,f=r,d=ar.fromTag("br"),jC(l,d,f),UC(d)):(o=e,i=r,a=t,u=n,s=ar.fromTag(a),c=ar.fromTag("br"),Nr(s,u),Fi(s,c),jC(o,s,i),UC(c));var o,i,a,u,s,c,l,f,d},HC=function(e,t,n){return t?(o=e.dom(),gC(o,n).breakAt.isNone()):(r=e.dom(),mC(r,n).breakAt.isNone());var r,o},qC=function(t,n){var e,r,o,i=ar.fromDom(t.getBody()),a=_u.fromRangeStart(t.selection.getRng()),u=Nl(t),s=El(t);return(e=a,r=i,o=d(Mr,r),na(ar.fromDom(e.container()),Co,o).filter(zC)).exists(function(){if(HC(i,n,a)){var e=VC(i,u,s,n);return t.selection.setRng(e),!0}return!1})},$C=function(e,t){return function(){return!!e.selection.isCollapsed()&&qC(e,t)}},WC=function(e,r){return G(W(e,function(e){return Zy({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:o},e)}),function(e){return t=e,(n=r).keyCode===t.keyCode&&n.shiftKey===t.shiftKey&&n.altKey===t.altKey&&n.ctrlKey===t.ctrlKey&&n.metaKey===t.metaKey?[e]:[];var t,n})},KC=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,r)}},XC=function(e,t){return X(WC(e,t),function(e){return e.action()})},YC=function(i,a){i.on("keydown",function(e){var t,n,r,o;!1===e.isDefaultPrevented()&&(t=i,n=a,r=e,o=or.detect().os,XC([{keyCode:rv.RIGHT,action:wC(t,!0)},{keyCode:rv.LEFT,action:wC(t,!1)},{keyCode:rv.UP,action:NC(t,!1)},{keyCode:rv.DOWN,action:NC(t,!0)},{keyCode:rv.RIGHT,action:FC(t,!0)},{keyCode:rv.LEFT,action:FC(t,!1)},{keyCode:rv.UP,action:MC(t,!1)},{keyCode:rv.DOWN,action:MC(t,!0)},{keyCode:rv.RIGHT,action:Xd.move(t,n,!0)},{keyCode:rv.LEFT,action:Xd.move(t,n,!1)},{keyCode:rv.RIGHT,ctrlKey:!o.isOSX(),altKey:o.isOSX(),action:Xd.moveNextWord(t,n)},{keyCode:rv.LEFT,ctrlKey:!o.isOSX(),altKey:o.isOSX(),action:Xd.movePrevWord(t,n)},{keyCode:rv.UP,action:$C(t,!1)},{keyCode:rv.DOWN,action:$C(t,!0)}],r).each(function(e){r.preventDefault()}))})},GC=function(o,i){o.on("keydown",function(e){var t,n,r;!1===e.isDefaultPrevented()&&(t=o,n=i,r=e,XC([{keyCode:rv.BACKSPACE,action:KC(ad,t,!1)},{keyCode:rv.DELETE,action:KC(ad,t,!0)},{keyCode:rv.BACKSPACE,action:KC(gg,t,!1)},{keyCode:rv.DELETE,action:KC(gg,t,!0)},{keyCode:rv.BACKSPACE,action:KC(Qd,t,n,!1)},{keyCode:rv.DELETE,action:KC(Qd,t,n,!0)},{keyCode:rv.BACKSPACE,action:KC(Dm,t,!1)},{keyCode:rv.DELETE,action:KC(Dm,t,!0)},{keyCode:rv.BACKSPACE,action:KC(Cf,t,!1)},{keyCode:rv.DELETE,action:KC(Cf,t,!0)},{keyCode:rv.BACKSPACE,action:KC(hf,t,!1)},{keyCode:rv.DELETE,action:KC(hf,t,!0)},{keyCode:rv.BACKSPACE,action:KC(ng,t,!1)},{keyCode:rv.DELETE,action:KC(ng,t,!0)}],r).each(function(e){r.preventDefault()}))}),o.on("keyup",function(e){var t,n;!1===e.isDefaultPrevented()&&(t=o,n=e,XC([{keyCode:rv.BACKSPACE,action:KC(ud,t)},{keyCode:rv.DELETE,action:KC(ud,t)}],n))})},JC=function(e){return _.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},QC=function(e,t){var n,r,o,i=t,a=e.dom,u=e.schema.getMoveCaretBeforeOnEnterElements();if(t){if(/^(LI|DT|DD)$/.test(t.nodeName)){var s=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e;e=e.nextSibling}}(t.firstChild);s&&/^(UL|OL|DL)$/.test(s.nodeName)&&t.insertBefore(a.doc.createTextNode("\xa0"),t.firstChild)}if(o=a.createRng(),t.normalize(),t.hasChildNodes()){for(n=new go(t,t);r=n.current();){if(jo.isText(r)){o.setStart(r,0),o.setEnd(r,0);break}if(u[r.nodeName.toLowerCase()]){o.setStartBefore(r),o.setEndBefore(r);break}i=r,r=n.next()}r||(o.setStart(i,0),o.setEnd(i,0))}else jo.isBr(t)?t.nextSibling&&a.isBlock(t.nextSibling)?(o.setStartBefore(t),o.setEndBefore(t)):(o.setStartAfter(t),o.setEndAfter(t)):(o.setStart(t,0),o.setEnd(t,0));e.selection.setRng(o),a.remove(void 0),e.selection.scrollIntoView(t)}},ZC=function(e,t){var n,r,o=e.getRoot();for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==o?r:o},ex=JC,tx=function(e){return JC(e).fold(q(""),function(e){return e.nodeName.toUpperCase()})},nx=function(e){return JC(e).filter(function(e){return So(ar.fromDom(e))}).isSome()},rx=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},ox=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},ix=function(e){var t=e.parentNode;return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},ax=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!jo.isElement(r);)r=r[n?"nextSibling":"previousSibling"];return r===t},ux=function(e,t,n,r,o){var i=e.dom,a=e.selection.getRng();if(n!==e.getBody()){var u;ox(u=n)&&ox(u.parentNode)&&(o="LI");var s,c,l=o?t(o):i.create("BR");if(ax(n,r,!0)&&ax(n,r,!1))rx(n,"LI")?i.insertAfter(l,ix(n)):i.replace(l,n);else if(ax(n,r,!0))rx(n,"LI")?(i.insertAfter(l,ix(n)),l.appendChild(i.doc.createTextNode(" ")),l.appendChild(n)):n.parentNode.insertBefore(l,n);else if(ax(n,r,!1))i.insertAfter(l,ix(n));else{n=ix(n);var f=a.cloneRange();f.setStartAfter(r),f.setEndAfter(n);var d=f.extractContents();"LI"===o&&(c="LI",(s=d).firstChild&&s.firstChild.nodeName===c)?(l=d.firstChild,i.insertAfter(d,n)):(i.insertAfter(d,n),i.insertAfter(l,n))}i.remove(r),QC(e,l)}},sx=function(e){e.innerHTML='<br data-mce-bogus="1">'},cx=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},lx=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},fx=function(e,t,n){return!1===jo.isText(t)?n:e?1===n&&t.data.charAt(n-1)===xa?0:n:n===t.data.length-1&&t.data.charAt(n)===xa?t.data.length:n},dx=function(e,t){var n,r,o=e.getRoot();for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==o?r:o},mx=function(o,i,e){_.from(e.style).map(o.dom.parseStyle).each(function(e){var t=function(e){var t={},n=e.dom();if(Cr(n))for(var r=0;r<n.style.length;r++){var o=n.style.item(r);t[o]=n.style[o]}return t}(ar.fromDom(i)),n=ma(ma({},t),e);o.dom.setStyles(i,n)});var t=_.from(e["class"]).map(function(e){return e.split(/\s+/)}),n=_.from(i.className).map(function(e){return U(e.split(/\s+/),function(e){return""!==e})});ru(t,n,function(t,e){var n=U(e,function(e){return!F(t,e)}),r=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}(t,n);o.dom.setAttrib(i,"class",r.join(" "))});var r=["style","class"],a=yr(e,function(e,t){return!F(r,t)}).t;o.dom.setAttribs(i,a)},gx=function(e,t){var n=Nl(e);if(n&&n.toLowerCase()===t.tagName.toLowerCase()){var r=El(e);mx(e,t,r)}},px=function(a,e){var t,u,s,i,c,n,r,o,l,f,d,m,g,p,h,v,y,b,C,x=a.dom,w=a.schema,N=w.getNonEmptyElements(),E=a.selection.getRng(),S=function(e){var t,n,r,o=s,i=w.getTextInlineElements();if(r=t=e||"TABLE"===f||"HR"===f?x.create(e||m):c.cloneNode(!1),!1===kl(a))x.setAttrib(t,"style",null),x.setAttrib(t,"class",null);else do{if(i[o.nodeName]){if(Ju(o)||yc(o))continue;n=o.cloneNode(!1),x.setAttrib(n,"id",""),t.hasChildNodes()?n.appendChild(t.firstChild):r=n,t.appendChild(n)}}while((o=o.parentNode)&&o!==u);return gx(a,t),sx(r),t},T=function(e){var t,n,r,o;if(o=fx(e,s,i),jo.isText(s)&&(e?0<o:o<s.nodeValue.length))return!1;if(s.parentNode===c&&g&&!e)return!0;if(e&&jo.isElement(s)&&s===c.firstChild)return!0;if(cx(s,"TABLE")||cx(s,"HR"))return g&&!e||!g&&e;for(t=new go(s,c),jo.isText(s)&&(e&&0===o?t.prev():e||o!==s.nodeValue.length||t.next());n=t.current();){if(jo.isElement(n)){if(!n.getAttribute("data-mce-bogus")&&(r=n.nodeName.toLowerCase(),N[r]&&"br"!==r))return!1}else if(jo.isText(n)&&!/^[ \t\r\n]*$/.test(n.nodeValue))return!1;e?t.prev():t.next()}return!0},k=function(){r=/^(H[1-6]|PRE|FIGURE)$/.test(f)&&"HGROUP"!==d?S(m):S(),_l(a)&&lx(x,l)&&x.isEmpty(c)?r=x.split(l,c):x.insertAfter(r,c),QC(a,r)};Dg(x,E).each(function(e){E.setStart(e.startContainer,e.startOffset),E.setEnd(e.endContainer,e.endOffset)}),s=E.startContainer,i=E.startOffset,m=Nl(a),n=e.shiftKey,jo.isElement(s)&&s.hasChildNodes()&&(g=i>s.childNodes.length-1,s=s.childNodes[Math.min(i,s.childNodes.length-1)]||s,i=g&&jo.isText(s)?s.nodeValue.length:0),(u=dx(x,s))&&((m&&!n||!m&&n)&&(s=function(e,t,n,r,o){var i,a,u,s,c,l,f,d=t||"P",m=e.dom,g=dx(m,r);if(!(a=m.getParent(r,m.isBlock))||!lx(m,a)){if(l=(a=a||g)===e.getBody()||(f=a)&&/^(TD|TH|CAPTION)$/.test(f.nodeName)?a.nodeName.toLowerCase():a.parentNode.nodeName.toLowerCase(),!a.hasChildNodes())return i=m.create(d),gx(e,i),a.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i;for(s=r;s.parentNode!==a;)s=s.parentNode;for(;s&&!m.isBlock(s);)s=(u=s).previousSibling;if(u&&e.schema.isValidChild(l,d.toLowerCase())){for(i=m.create(d),gx(e,i),u.parentNode.insertBefore(i,u),s=u;s&&!m.isBlock(s);)c=s.nextSibling,i.appendChild(s),s=c;n.setStart(r,o),n.setEnd(r,o)}}return r}(a,m,E,s,i)),c=x.getParent(s,x.isBlock),l=c?x.getParent(c.parentNode,x.isBlock):null,f=c?c.nodeName.toUpperCase():"","LI"!==(d=l?l.nodeName.toUpperCase():"")||e.ctrlKey||(l=(c=l).parentNode,f=d),/^(LI|DT|DD)$/.test(f)&&x.isEmpty(c)?ux(a,S,l,c,m):m&&c===a.getBody()||(m=m||"P",Sa(c)?(r=Pa(c),x.isEmpty(c)&&sx(c),gx(a,r),QC(a,r)):T()?k():T(!0)?(r=c.parentNode.insertBefore(S(),c),QC(a,cx(c,"HR")?r:c)):((t=(b=E,C=b.cloneRange(),C.setStart(b.startContainer,fx(!0,b.startContainer,b.startOffset)),C.setEnd(b.endContainer,fx(!1,b.endContainer,b.endOffset)),C).cloneRange()).setEndAfter(c),o=t.extractContents(),y=o,z(Ji(ar.fromDom(y),mr),function(e){var t=e.dom();t.nodeValue=wa(t.nodeValue)}),function(e){for(;jo.isText(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;);}(o),r=o.firstChild,x.insertAfter(o,c),function(e,t,n){var r,o=n,i=[];if(o){for(;o=o.firstChild;){if(e.isBlock(o))return;jo.isElement(o)&&!t[o.nodeName.toLowerCase()]&&i.push(o)}for(r=i.length;r--;)!(o=i[r]).hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue?e.remove(o):(a=e,(u=o)&&"A"===u.nodeName&&a.isEmpty(u)&&e.remove(o));var a,u}}(x,N,r),p=x,(h=c).normalize(),(v=h.lastChild)&&!/^(left|right)$/gi.test(p.getStyle(v,"float",!0))||p.add(h,"br"),x.isEmpty(c)&&sx(c),r.normalize(),x.isEmpty(r)?(x.remove(r),k()):(gx(a,r),QC(a,r))),x.setAttrib(r,"id",""),a.fire("NewBlock",{newBlock:r})))},hx=function(e,t){return ex(e).filter(function(e){return 0<t.length&&Lr(ar.fromDom(e),t)}).isSome()},vx=function(e){return hx(e,Sl(e))},yx=function(e){return hx(e,Tl(e))},bx=xf([{br:[]},{block:[]},{none:[]}]),Cx=function(e,t){return yx(e)},xx=function(n){return function(e,t){return""===Nl(e)===n}},wx=function(n){return function(e,t){return nx(e)===n}},Nx=function(n,r){return function(e,t){return tx(e)===n.toUpperCase()===r}},Ex=function(e){return Nx("pre",e)},Sx=function(n){return function(e,t){return wl(e)===n}},Tx=function(e,t){return vx(e)},kx=function(e,t){return t},_x=function(e){var t=Nl(e),n=ZC(e.dom,e.selection.getStart());return n&&e.schema.isValidChild(n.nodeName,t||"P")},Ax=function(e,t){return function(n,r){return j(e,function(e,t){return e&&t(n,r)},!0)?_.some(t):_.none()}},Rx=function(e,t){return yd([Ax([Cx],bx.none()),Ax([Nx("summary",!0)],bx.br()),Ax([Ex(!0),Sx(!1),kx],bx.br()),Ax([Ex(!0),Sx(!1)],bx.block()),Ax([Ex(!0),Sx(!0),kx],bx.block()),Ax([Ex(!0),Sx(!0)],bx.br()),Ax([wx(!0),kx],bx.br()),Ax([wx(!0)],bx.block()),Ax([xx(!0),kx,_x],bx.block()),Ax([xx(!0)],bx.br()),Ax([Tx],bx.br()),Ax([xx(!1),kx],bx.br()),Ax([_x],bx.block())],[e,t.shiftKey]).getOr(bx.none())},Dx=function(e,t){Rx(e,t).fold(function(){jg(e,t)},function(){px(e,t)},o)},Ox=function(o){o.on("keydown",function(e){var t,n,r;e.keyCode===rv.ENTER&&(t=o,(n=e).isDefaultPrevented()||(n.preventDefault(),(r=t.undoManager).typing&&(r.typing=!1,r.add()),t.undoManager.transact(function(){!1===t.selection.isCollapsed()&&t.execCommand("Delete"),Dx(t,n)})))})},Bx=function(n,r){var e=r.container(),t=r.offset();return jo.isText(e)?(e.insertData(t,n),_.some(Su(e,t+n.length))):Is(r).map(function(e){var t=ar.fromText(n);return r.isAtEnd()?Ii(e,t):Pi(e,t),Su(t.dom(),n.length)})},Px=d(Bx,"\xa0"),Ix=d(Bx," "),Lx=function(e,t,n){return sc.navigateIgnore(e,t,n,Pf)},Fx=function(e,t){return X(uf(ar.fromDom(t.container()),e),Co)},Mx=function(e,n,r){return Lx(e,n.dom(),r).forall(function(t){return Fx(n,r).fold(function(){return!1===Ts(t,r,n.dom())},function(e){return!1===Ts(t,r,n.dom())&&zr(e,ar.fromDom(t.container()))})})},zx=function(t,n,r){return Fx(n,r).fold(function(){return Lx(t,n.dom(),r).forall(function(e){return!1===Ts(e,r,n.dom())})},function(e){return Lx(t,e.dom(),r).isNone()})},Ux=d(zx,!1),jx=d(zx,!0),Vx=d(Mx,!1),Hx=d(Mx,!0),qx=function(e){return Su.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},$x=function(e,t){var n=U(uf(ar.fromDom(t.container()),e),Co);return Z(n).getOr(e)},Wx=function(e,t){return qx(t)?Bf(t):Bf(t)||sc.prevPosition($x(e,t).dom(),t).exists(Bf)},Kx=function(e,t){return qx(t)?Of(t):Of(t)||sc.nextPosition($x(e,t).dom(),t).exists(Of)},Xx=function(e){return Is(e).bind(function(e){return na(e,dr)}).exists(function(e){return t=kr(e,"white-space"),F(["pre","pre-wrap"],t);var t})},Yx=function(e,t){return o=e,i=t,sc.prevPosition(o.dom(),i).isNone()||(n=e,r=t,sc.nextPosition(n.dom(),r).isNone())||Ux(e,t)||jx(e,t)||Sf(e,t)||Ef(e,t);var n,r,o,i},Gx=function(e,t){var n,r,o,i=(r=(n=t).container(),o=n.offset(),jo.isText(r)&&o<r.data.length?Su(r,o+1):n);return!Xx(i)&&(jx(e,i)||Hx(e,i)||Ef(e,i)||Kx(e,i))},Jx=function(e,t){return n=e,!Xx(r=t)&&(Ux(n,r)||Vx(n,r)||Sf(n,r)||Wx(n,r))||Gx(e,t);var n,r},Qx=function(e,t){return _f(e.charAt(t))},Zx=function(e){var t=e.container();return jo.isText(t)&&Yn(t.data,"\xa0")},ew=function(e){var n,t=e.data,r=(n=t.split(""),W(n,function(e,t){return _f(e)&&0<t&&t<n.length-1&&Rf(n[t-1])&&Rf(n[t+1])?" ":e}).join(""));return r!==t&&(e.data=r,!0)},tw=function(l,e){return _.some(e).filter(Zx).bind(function(e){var t,n,r,o,i,a,u,s,c=e.container();return i=l,u=(a=c).data,s=Su(a,0),Qx(u,0)&&!Jx(i,s)&&(a.data=" "+u.slice(1),1)||ew(c)||(t=l,r=(n=c).data,o=Su(n,r.length-1),Qx(r,r.length-1)&&!Jx(t,o)&&(n.data=r.slice(0,-1)+" ",1))?_.some(e):_.none()})},nw=function(t){var e=ar.fromDom(t.getBody());t.selection.isCollapsed()&&tw(e,Su.fromRangeStart(t.selection.getRng())).each(function(e){t.selection.setRng(e.toRange())})},rw=function(r,o){return function(e){return t=r,!Xx(n=e)&&(Yx(t,n)||Wx(t,n)||Kx(t,n))?Px(o):Ix(o);var t,n}},ow=function(e){var t,n,r=_u.fromRangeStart(e.selection.getRng()),o=ar.fromDom(e.getBody());if(e.selection.isCollapsed()){var i=d(Vl.isInlineTarget,e),a=_u.fromRangeStart(e.selection.getRng());return Ld(i,e.getBody(),a).bind((n=o,function(e){return e.fold(function(e){return sc.prevPosition(n.dom(),_u.before(e))},function(e){return sc.firstPositionIn(e)},function(e){return sc.lastPositionIn(e)},function(e){return sc.nextPosition(n.dom(),_u.after(e))})})).bind(rw(o,r)).exists((t=e,function(e){return t.selection.setRng(e.toRange()),t.nodeChanged(),!0}))}return!1},iw=function(r){r.on("keydown",function(e){var t,n;!1===e.isDefaultPrevented()&&(t=r,n=e,XC([{keyCode:rv.SPACEBAR,action:KC(ow,t)}],n).each(function(e){n.preventDefault()}))})},aw=function(e,t){var n;t.hasAttribute("data-mce-caret")&&(Pa(t),(n=e).selection.setRng(n.selection.getRng()),e.selection.scrollIntoView(t))},uw=function(e,t){var n,r=(n=e,oa(ar.fromDom(n.getBody()),"*[data-mce-caret]").fold(q(null),function(e){return e.dom()}));if(r)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void aw(e,r)):void(_a(r)&&(aw(e,r),e.undoManager.add()))},sw=function(e){e.on("keyup compositionstart",d(uw,e))},cw=or.detect().browser,lw=function(t){var e,n;e=t,n=Vi(function(){e.composing||nw(e)},0),cw.isIE()&&(e.on("keypress",function(e){n.throttle()}),e.on("remove",function(e){n.cancel()})),t.on("input",function(e){!1===e.isComposing&&nw(t)})},fw=function(r){r.on("keydown",function(e){var t,n;!1===e.isDefaultPrevented()&&(t=r,n=e,XC([{keyCode:rv.END,action:EC(t,!0)},{keyCode:rv.HOME,action:EC(t,!1)}],n).each(function(e){n.preventDefault()}))})},dw=function(e){var t=Xd.setupSelectedState(e);sw(e),YC(e,t),GC(e,t),Ox(e),iw(e),lw(e),fw(e)};function mw(u){var s,n,r,o=Xt.each,c=rv.BACKSPACE,l=rv.DELETE,f=u.dom,d=u.selection,e=u.settings,t=u.parser,i=fe.gecko,a=fe.ie,m=fe.webkit,g="data:text/mce-internal,",p=a?"Text":"URL",h=function(e,t){try{u.getDoc().execCommand(e,!1,t)}catch(n){}},v=function(e){return e.isDefaultPrevented()},y=function(){u.shortcuts.add("meta+a",null,"SelectAll")},b=function(){u.on("keydown",function(e){if(!v(e)&&e.keyCode===c&&d.isCollapsed()&&0===d.getRng().startOffset){var t=d.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}})},C=function(){u.inline||(u.contentStyles.push("body {min-height: 150px}"),u.on("click",function(e){var t;if("HTML"===e.target.nodeName){if(11<fe.ie)return void u.getBody().focus();t=u.selection.getRng(),u.getBody().focus(),u.selection.setRng(t),u.selection.normalize(),u.nodeChanged()}}))};return u.on("keydown",function(e){var t,n,r,o,i;if(!v(e)&&e.keyCode===rv.BACKSPACE&&(n=(t=d.getRng()).startContainer,r=t.startOffset,o=f.getRoot(),i=n,t.collapsed&&0===r)){for(;i&&i.parentNode&&i.parentNode.firstChild===i&&i.parentNode!==o;)i=i.parentNode;"BLOCKQUOTE"===i.tagName&&(u.formatter.toggle("blockquote",null,i),(t=f.createRng()).setStart(n,0),t.setEnd(n,0),d.setRng(t))}}),s=function(e){var t=f.create("body"),n=e.cloneContents();return t.appendChild(n),d.serializer.serialize(t,{format:"html"})},u.on("keydown",function(e){var t,n,r,o,i,a=e.keyCode;if(!v(e)&&(a===l||a===c)){if(t=u.selection.isCollapsed(),n=u.getBody(),t&&!f.isEmpty(n))return;if(!t&&(r=u.selection.getRng(),o=s(r),(i=f.createRng()).selectNode(u.getBody()),o!==s(i)))return;e.preventDefault(),u.setContent(""),n.firstChild&&f.isBlock(n.firstChild)?u.selection.setCursorLocation(n.firstChild,0):u.selection.setCursorLocation(n,0),u.nodeChanged()}}),fe.windowsPhone||u.on("keyup focusin mouseup",function(e){rv.modifierPressed(e)||d.normalize()},!0),m&&(u.settings.content_editable||f.bind(u.getDoc(),"mousedown mouseup",function(e){var t;if(e.target===u.getDoc().documentElement)if(t=d.getRng(),u.getBody().focus(),"mousedown"===e.type){if(ka(t.startContainer))return;d.placeCaretAt(e.clientX,e.clientY)}else d.setRng(t)}),u.on("click",function(e){var t=e.target;/^(IMG|HR)$/.test(t.nodeName)&&"false"!==f.getContentEditableParent(t)&&(e.preventDefault(),u.selection.select(t),u.nodeChanged()),"A"===t.nodeName&&f.hasClass(t,"mce-item-anchor")&&(e.preventDefault(),d.select(t))}),e.forced_root_block&&u.on("init",function(){h("DefaultParagraphSeparator",e.forced_root_block)}),u.on("init",function(){u.dom.bind(u.getBody(),"submit",function(e){e.preventDefault()})}),b(),t.addNodeFilter("br",function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()}),fe.iOS?(u.inline||u.on("keydown",function(){V.document.activeElement===V.document.body&&u.getWin().focus()}),C(),u.on("click",function(e){var t=e.target;do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)}),u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):y()),11<=fe.ie&&(C(),b()),fe.ie&&(y(),h("AutoUrlDetect",!1),u.on("dragstart",function(e){var t,n,r;(t=e).dataTransfer&&(u.selection.isCollapsed()&&"IMG"===t.target.tagName&&d.select(t.target),0<(n=u.selection.getContent()).length&&(r=g+escape(u.id)+","+escape(n),t.dataTransfer.setData(p,r)))}),u.on("drop",function(e){if(!v(e)){var t=(i=e).dataTransfer&&(a=i.dataTransfer.getData(p))&&0<=a.indexOf(g)?(a=a.substr(g.length).split(","),{id:unescape(a[0]),html:unescape(a[1])}):null;if(t&&t.id!==u.id){e.preventDefault();var n=Bb(e.x,e.y,u.getDoc());d.setRng(n),r=t.html,o=!0,u.queryCommandSupported("mceInsertClipboardContent")?u.execCommand("mceInsertClipboardContent",!1,{content:r,internal:o}):u.execCommand("mceInsertContent",!1,r)}}var r,o,i,a})),i&&(u.on("keydown",function(e){if(!v(e)&&e.keyCode===c){if(!u.getBody().getElementsByTagName("hr").length)return;if(d.isCollapsed()&&0===d.getRng().startOffset){var t=d.getNode(),n=t.previousSibling;if("HR"===t.nodeName)return f.remove(t),void e.preventDefault();n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(f.remove(n),e.preventDefault())}}}),V.Range.prototype.getClientRects||u.on("mousedown",function(e){if(!v(e)&&"HTML"===e.target.nodeName){var t=u.getBody();t.blur(),he.setEditorTimeout(u,function(){t.focus()})}}),n=function(){var e=f.getAttribs(d.getStart().cloneNode(!1));return function(){var t=d.getStart();t!==u.getBody()&&(f.setAttrib(t,"style",null),o(e,function(e){t.setAttributeNode(e.cloneNode(!0))}))}},r=function(){return!d.isCollapsed()&&f.getParent(d.getStart(),f.isBlock)!==f.getParent(d.getEnd(),f.isBlock)},u.on("keypress",function(e){var t;if(!v(e)&&(8===e.keyCode||46===e.keyCode)&&r())return t=n(),u.getDoc().execCommand("delete",!1,null),t(),e.preventDefault(),!1}),f.bind(u.getDoc(),"cut",function(e){var t;!v(e)&&r()&&(t=n(),he.setEditorTimeout(u,function(){t()}))}),e.readonly||u.on("BeforeExecCommand MouseDown",function(){h("StyleWithCSS",!1),h("enableInlineTableEditing",!1),e.object_resizing||h("enableObjectResizing",!1)}),u.on("SetContent ExecCommand",function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(f.select("a"),function(e){var t=e.parentNode,n=f.getRoot();if(t.lastChild===e){for(;t&&!f.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}f.add(t,"br",{"data-mce-bogus":1})}})}),u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),fe.mac&&u.on("keydown",function(e){!rv.metaKeyPressed(e)||e.shiftKey||37!==e.keyCode&&39!==e.keyCode||(e.preventDefault(),u.selection.getSel().modify("move",37===e.keyCode?"backward":"forward","lineboundary"))}),b()),{refreshContentEditable:function(){},isHidden:function(){var e;return!i||u.removed?0:!(e=u.selection.getSel())||!e.rangeCount||0===e.rangeCount}}}var gw=function(e){return jo.isElement(e)&&No(ar.fromDom(e))},pw=function(t){t.on("click",function(e){3<=e.detail&&function(e){var t=e.selection.getRng(),n=Su.fromRangeStart(t),r=Su.fromRangeEnd(t);if(Su.isElementPosition(n)){var o=n.container();gw(o)&&sc.firstPositionIn(o).each(function(e){return t.setStart(e.container(),e.offset())})}Su.isElementPosition(r)&&(o=n.container(),gw(o)&&sc.lastPositionIn(o).each(function(e){return t.setEnd(e.container(),e.offset())})),e.selection.setRng(cl(t))}(t)})},hw=function(e){var t,n;(t=e).on("click",function(e){t.dom.getParent(e.target,"details")&&e.preventDefault()}),(n=e).parser.addNodeFilter("details",function(e){z(e,function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")})}),n.serializer.addNodeFilter("details",function(e){z(e,function(e){var t=e.attr("data-mce-open");e.attr("open",S(t)?t:null),e.attr("data-mce-open",null)})})},vw=Si.DOM,yw=function(e){var t;e.bindPendingEventDelegates(),e.initialized=!0,e.fire("init"),e.focus(!0),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),(t=e).settings.auto_focus&&he.setEditorTimeout(t,function(){var e;(e=!0===t.settings.auto_focus?t:t.editorManager.get(t.settings.auto_focus)).destroyed||e.focus()},100)},bw=function(t,e){var n,r,u,o,i,a,s,c,l,f=t.settings,d=t.getElement(),m=t.getDoc();f.inline||(t.getElement().style.visibility=t.orgVisibility),e||f.content_editable||(m.open(),m.write(t.iframeHTML),m.close()),f.content_editable&&(t.on("remove",function(){var e=this.getBody();vw.removeClass(e,"mce-content-body"),vw.removeClass(e,"mce-edit-focus"),vw.setAttrib(e,"contentEditable",null)}),vw.addClass(d,"mce-content-body"),t.contentDocument=m=f.content_document||V.document,t.contentWindow=f.content_window||V.window,t.bodyElement=d,f.content_document=f.content_window=null,f.root_name=d.nodeName.toLowerCase()),(n=t.getBody()).disabled=!0,t.readonly=f.readonly,t.readonly||(t.inline&&"static"===vw.getStyle(n,"position",!0)&&(n.style.position="relative"),n.contentEditable=t.getParam("content_editable_state",!0)),n.disabled=!1,t.editorUpload=qh(t),t.schema=di(f),t.dom=Si(m,{keep_values:!0,url_converter:t.convertURL,url_converter_scope:t,hex_colors:f.force_hex_style_colors,class_filter:f.class_filter,update_styles:!0,root_element:t.inline?t.getBody():null,collect:f.content_editable,schema:t.schema,contentCssCors:zl(t),onSetAttrib:function(e){t.fire("SetAttrib",e)}}),t.parser=((o=bb((u=t).settings,u.schema)).addAttributeFilter("src,href,style,tabindex",function(e,t){for(var n,r,o,i=e.length,a=u.dom;i--;)if(r=(n=e[i]).attr(t),o="data-mce-"+t,!n.attributes.map[o]){if(0===r.indexOf("data:")||0===r.indexOf("blob:"))continue;"style"===t?((r=a.serializeStyle(a.parseStyle(r),n.name)).length||(r=null),n.attr(o,r),n.attr(t,r)):"tabindex"===t?(n.attr(o,r),n.attr(t,null)):n.attr(o,u.convertURL(r,t,n.name))}}),o.addNodeFilter("script",function(e){for(var t,n,r=e.length;r--;)0!==(n=(t=e[r]).attr("type")||"no/type").indexOf("mce-")&&t.attr("type","mce-"+n)}),o.addNodeFilter("#cdata",function(e){for(var t,n=e.length;n--;)(t=e[n]).type=8,t.name="#comment",t.value="[CDATA["+t.value+"]]"}),o.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(e){for(var t,n=e.length,r=u.schema.getNonEmptyElements();n--;)(t=e[n]).isEmpty(r)&&0===t.getAll("br").length&&(t.append(new sb("br",1)).shortEnded=!0)}),o),t.serializer=Eb(f,t),t.selection=uC(t.dom,t.getWin(),t.serializer,t),t.annotator=Hc(t),t.formatter=Gy(t),t.undoManager=ry(t),t._nodeChangeDispatcher=new ev(t),t._selectionOverrides=Bv(t),hw(t),pw(t),dw(t),Xh(t),t.fire("PreInit"),f.browser_spellcheck||f.gecko_spellcheck||(m.body.spellcheck=!1,vw.setAttrib(n,"spellcheck","false")),t.quirks=mw(t),t.fire("PostRender"),f.directionality&&(n.dir=f.directionality),f.nowrap&&(n.style.whiteSpace="nowrap"),f.protect&&t.on("BeforeSetContent",function(t){Xt.each(f.protect,function(e){t.content=t.content.replace(e,function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"})})}),t.on("SetContent",function(){t.addVisual(t.getBody())}),t.load({initial:!0,format:"html"}),t.startContent=t.getContent({format:"raw"}),t.on("compositionstart compositionend",function(e){t.composing="compositionstart"===e.type}),0<t.contentStyles.length&&(r="",Xt.each(t.contentStyles,function(e){r+=e+"\r\n"}),t.dom.addStyle(r)),(i=t,i.inline?vw.styleSheetLoader:i.dom.styleSheetLoader).loadAll(t.contentCSS,function(e){yw(t)},function(e){yw(t)}),f.content_style&&(a=t,s=f.content_style,c=ar.fromDom(a.getDoc().head),l=ar.fromTag("style"),wr(l,"type","text/css"),Fi(l,ar.fromText(s)),Fi(c,l))},Cw=Si.DOM,xw=function(e,t){var n,r,o,i,a,u,s,c=e.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),l=(n=e.id,r=c,o=t.height,i=hl(e),s=ar.fromTag("iframe"),Nr(s,i),Nr(s,{id:n+"_ifr",frameBorder:"0",allowTransparency:"true",title:r}),Tr(s,{width:"100%",height:(a=o,u="number"==typeof a?a+"px":a,u||""),display:"block"}),s).dom();l.onload=function(){l.onload=null,e.fire("load")};var f,d,m,g,p=function(e,t){if(V.document.domain!==V.window.location.hostname&&fe.ie&&fe.ie<12){var n=Hh.uuid("mce");e[n]=function(){bw(e)};var r='javascript:(function(){document.open();document.domain="'+V.document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()";return Cw.setAttrib(t,"src",r),!0}return!1}(e,l);return e.contentAreaContainer=t.iframeContainer,e.iframeElement=l,e.iframeHTML=(g=vl(f=e)+"<html><head>",yl(f)!==f.documentBaseUrl&&(g+='<base href="'+f.documentBaseURI.getURI()+'" />'),g+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',d=bl(f),m=Cl(f),xl(f)&&(g+='<meta http-equiv="Content-Security-Policy" content="'+xl(f)+'" />'),g+='</head><body id="'+d+'" class="mce-content-body '+m+'" data-id="'+f.id+'"><br></body></html>'),Cw.add(t.iframeContainer,l),p},ww=function(e,t){var n=xw(e,t);t.editorContainer&&(Cw.get(t.editorContainer).style.display=e.orgDisplay,e.hidden=Cw.isHidden(t.editorContainer)),e.getElement().style.display="none",Cw.setAttrib(e.id,"aria-hidden","true"),n||bw(e)},Nw=Si.DOM,Ew=function(t,n,e){var r=_h.get(e),o=_h.urls[e]||t.documentBaseUrl.replace(/\/$/,"");if(e=Xt.trim(e),r&&-1===Xt.inArray(n,e)){if(Xt.each(_h.dependencies(e),function(e){Ew(t,n,e)}),t.plugins[e])return;try{var i=new r(t,o,t.$);(t.plugins[e]=i).init&&(i.init(t,o),n.push(e))}catch(iE){kh.pluginInitError(t,e,iE)}}},Sw=function(e){return e.replace(/^\-/,"")},Tw=function(e){return{editorContainer:e,iframeContainer:e}},kw=function(e){var t,n,r=e.getElement();return e.inline?Tw(null):(t=r,n=Nw.create("div"),Nw.insertAfter(n,t),Tw(n))},_w=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=e.settings,m=e.getElement();return e.orgDisplay=m.style.display,S(d.theme)?(l=(o=e).settings,f=o.getElement(),i=l.width||Nw.getStyle(f,"width")||"100%",a=l.height||Nw.getStyle(f,"height")||f.offsetHeight,u=l.min_height||100,(s=/^[0-9\.]+(|px)$/i).test(""+i)&&(i=Math.max(parseInt(i,10),100)),s.test(""+a)&&(a=Math.max(parseInt(a,10),u)),c=o.theme.renderUI({targetNode:f,width:i,height:a,deltaWidth:l.delta_width,deltaHeight:l.delta_height}),l.content_editable||(a=(c.iframeHeight||a)+("number"==typeof a?c.deltaHeight||0:""))<u&&(a=u),c.height=a,c):D(d.theme)?(r=(t=e).getElement(),(n=t.settings.theme(t,r)).editorContainer.nodeType&&(n.editorContainer.id=n.editorContainer.id||t.id+"_parent"),n.iframeContainer&&n.iframeContainer.nodeType&&(n.iframeContainer.id=n.iframeContainer.id||t.id+"_iframecontainer"),n.height=n.iframeHeight?n.iframeHeight:r.offsetHeight,n):kw(e)},Aw=function(t){var e,n,r,o,i,a,u=t.settings,s=t.getElement();return t.rtl=u.rtl_ui||t.editorManager.i18n.rtl,t.editorManager.i18n.setCode(u.language),u.aria_label=u.aria_label||Nw.getAttrib(s,"aria-label",t.getLang("aria.rich_text_area")),t.fire("ScriptsLoaded"),o=(n=t).settings.theme,S(o)?(n.settings.theme=Sw(o),r=Ah.get(o),n.theme=new r(n,Ah.urls[o]),n.theme.init&&n.theme.init(n,Ah.urls[o]||n.documentBaseUrl.replace(/\/$/,""),n.$)):n.theme={},i=t,a=[],Xt.each(i.settings.plugins.split(/[ ,]/),function(e){Ew(i,a,Sw(e))}),e=_w(t),t.editorContainer=e.editorContainer?e.editorContainer:null,u.content_css&&Xt.each(Xt.explode(u.content_css),function(e){t.contentCSS.push(t.documentBaseURI.toAbsolute(e))}),u.content_editable?bw(t):ww(t,e)},Rw=Si.DOM,Dw=function(e){return"-"===e.charAt(0)},Ow=function(i,a){var u=Ri.ScriptLoader;!function(e,t,n,r){var o=t.settings,i=o.theme;if(S(i)){if(!Dw(i)&&!Ah.urls.hasOwnProperty(i)){var a=o.theme_url;a?Ah.load(i,t.documentBaseURI.toAbsolute(a)):Ah.load(i,"themes/"+i+"/theme"+n+".js")}e.loadQueue(function(){Ah.waitFor(i,r)})}else r()}(u,i,a,function(){var e,t,n,r,o;e=u,(n=(t=i).settings).language&&"en"!==n.language&&!n.language_url&&(n.language_url=t.editorManager.baseURL+"/langs/"+n.language+".js"),n.language_url&&!t.editorManager.i18n.data[n.language]&&e.add(n.language_url),r=i.settings,o=a,Xt.isArray(r.plugins)&&(r.plugins=r.plugins.join(" ")),Xt.each(r.external_plugins,function(e,t){_h.load(t,e),r.plugins+=" "+t}),Xt.each(r.plugins.split(/[ ,]/),function(e){if((e=Xt.trim(e))&&!_h.urls[e])if(Dw(e)){e=e.substr(1,e.length);var t=_h.dependencies(e);Xt.each(t,function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"};e=_h.createUrl(t,e),_h.load(e.resource,e)})}else _h.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"})}),u.loadQueue(function(){i.removed||Aw(i)},i,function(e){kh.pluginLoadError(i,e[0]),i.removed||Aw(i)})})},Bw=function(t){var e=t.settings,n=t.id,r=function(){Rw.unbind(V.window,"ready",r),t.render()};if(Se.Event.domLoaded){if(t.getElement()&&fe.contentEditable){e.inline?t.inline=!0:(t.orgVisibility=t.getElement().style.visibility,t.getElement().style.visibility="hidden");var o=t.getElement().form||Rw.getParent(n,"form");o&&(t.formElement=o,e.hidden_input&&!/TEXTAREA|INPUT/i.test(t.getElement().nodeName)&&(Rw.insertAfter(Rw.create("input",{type:"hidden",name:n}),n),t.hasHiddenInput=!0),t.formEventDelegate=function(e){t.fire(e.type,e)},Rw.bind(o,"submit reset",t.formEventDelegate),t.on("reset",function(){t.setContent(t.startContent,{format:"raw"})}),!e.submit_patch||o.submit.nodeType||o.submit.length||o._mceOldSubmit||(o._mceOldSubmit=o.submit,o.submit=function(){return t.editorManager.triggerSave(),t.setDirty(!1),o._mceOldSubmit(o)})),t.windowManager=yh(t),t.notificationManager=vh(t),"xml"===e.encoding&&t.on("GetContent",function(e){e.save&&(e.content=Rw.encode(e.content))}),e.add_form_submit_trigger&&t.on("submit",function(){t.initialized&&t.save()}),e.add_unload_trigger&&(t._beforeUnload=function(){!t.initialized||t.destroyed||t.isHidden()||t.save({format:"raw",no_events:!0,set_dirty:!1})},t.editorManager.on("BeforeUnload",t._beforeUnload)),t.editorManager.add(t),Ow(t,t.suffix)}}else Rw.bind(V.window,"ready",r)},Pw=function(e,t,n){var r=e.sidebars?e.sidebars:[];r.push({name:t,settings:n}),e.sidebars=r},Iw=Xt.each,Lw=Xt.trim,Fw="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),Mw={ftp:21,http:80,https:443,mailto:25},zw=function(r,e){var t,n,o=this;if(r=Lw(r),t=(e=o.settings=e||{}).base_uri,/^([\w\-]+):([^\/]{2})/i.test(r)||/^\s*#/.test(r))o.source=r;else{var i=0===r.indexOf("//");0!==r.indexOf("/")||i||(r=(t&&t.protocol||"http")+"://mce_host"+r),/^[\w\-]*:?\/\//.test(r)||(n=e.base_uri?e.base_uri.path:new zw(V.document.location.href).directory,""==e.base_uri.protocol?r="//mce_host"+o.toAbsPath(n,r):(r=/([^#?]*)([#?]?.*)/.exec(r),r=(t&&t.protocol||"http")+"://mce_host"+o.toAbsPath(n,r[1])+r[2])),r=r.replace(/@@/g,"(mce_at)"),r=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(r),Iw(Fw,function(e,t){var n=r[t];n&&(n=n.replace(/\(mce_at\)/g,"@@")),o[e]=n}),t&&(o.protocol||(o.protocol=t.protocol),o.userInfo||(o.userInfo=t.userInfo),o.port||"mce_host"!==o.host||(o.port=t.port),o.host&&"mce_host"!==o.host||(o.host=t.host),o.source=""),i&&(o.protocol="")}};zw.prototype={setPath:function(e){e=/^(.*?)\/?(\w+)?$/.exec(e),this.path=e[0],this.directory=e[1],this.file=e[2],this.source="",this.getURI()},toRelative:function(e){var t;if("./"===e)return e;if("mce_host"!==(e=new zw(e,{base_uri:this})).host&&this.host!==e.host&&e.host||this.port!==e.port||this.protocol!==e.protocol&&""!==e.protocol)return e.getURI();var n=this.getURI(),r=e.getURI();return n===r||"/"===n.charAt(n.length-1)&&n.substr(0,n.length-1)===r?n:(t=this.toRelPath(this.path,e.path),e.query&&(t+="?"+e.query),e.anchor&&(t+="#"+e.anchor),t)},toAbsolute:function(e,t){return(e=new zw(e,{base_uri:this})).getURI(t&&this.isSameOrigin(e))},isSameOrigin:function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0;var t=Mw[this.protocol];if(t&&(this.port||t)==(e.port||t))return!0}return!1},toRelPath:function(e,t){var n,r,o,i=0,a="";if(e=(e=e.substring(0,e.lastIndexOf("/"))).split("/"),n=t.split("/"),e.length>=n.length)for(r=0,o=e.length;r<o;r++)if(r>=n.length||e[r]!==n[r]){i=r+1;break}if(e.length<n.length)for(r=0,o=n.length;r<o;r++)if(r>=e.length||e[r]!==n[r]){i=r+1;break}if(1===i)return t;for(r=0,o=e.length-(i-1);r<o;r++)a+="../";for(r=i-1,o=n.length;r<o;r++)a+=r!==i-1?"/"+n[r]:n[r];return a},toAbsPath:function(e,t){var n,r,o,i=0,a=[];for(r=/\/$/.test(t)?"/":"",e=e.split("/"),t=t.split("/"),Iw(e,function(e){e&&a.push(e)}),e=a,n=t.length-1,a=[];0<=n;n--)0!==t[n].length&&"."!==t[n]&&(".."!==t[n]?0<i?i--:a.push(t[n]):i++);return 0!==(o=(n=e.length-i)<=0?a.reverse().join("/"):e.slice(0,n).join("/")+"/"+a.reverse().join("/")).indexOf("/")&&(o="/"+o),r&&o.lastIndexOf("/")!==o.length-1&&(o+=r),o},getURI:function(e){var t,n=this;return n.source&&!e||(t="",e||(n.protocol?t+=n.protocol+"://":t+="//",n.userInfo&&(t+=n.userInfo+"@"),n.host&&(t+=n.host),n.port&&(t+=":"+n.port)),n.path&&(t+=n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),n.source=t),n.source}},zw.parseDataUri=function(e){var t,n;return e=decodeURIComponent(e).split(","),(n=/data:([^;]+)/.exec(e[0]))&&(t=n[1]),{type:t,data:e[1]}},zw.getDocumentBaseUrl=function(e){var t;return t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t};var Uw=function(e,t,n){var r,o,i,a,u;if(t.format=t.format?t.format:"html",t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),"raw"===t.format)r=Xt.trim(Uv.trimExternal(e.serializer,n.innerHTML));else if("text"===t.format)r=wa(n.innerText||n.textContent);else{if("tree"===t.format)return e.serializer.serialize(n,t);i=(o=e).serializer.serialize(n,t),a=Nl(o),u=new RegExp("^(<"+a+"[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/"+a+">[\r\n]*|<br \\/>[\r\n]*)$"),r=i.replace(u,"")}return"text"===t.format||Ao(ar.fromDom(n))?t.content=r:t.content=Xt.trim(r),t.no_events||e.fire("GetContent",t),t.content},jw=function(e,t){t(e),e.firstChild&&jw(e.firstChild,t),e.next&&jw(e.next,t)},Vw=function(e,t,n){var r=function(e,n,t){var r={},o={},i=[];for(var a in t.firstChild&&jw(t.firstChild,function(t){z(e,function(e){e.name===t.name&&(r[e.name]?r[e.name].nodes.push(t):r[e.name]={filter:e,nodes:[t]})}),z(n,function(e){"string"==typeof t.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(t):o[e.name]={filter:e,nodes:[t]})})}),r)r.hasOwnProperty(a)&&i.push(r[a]);for(var a in o)o.hasOwnProperty(a)&&i.push(o[a]);return i}(e,t,n);z(r,function(t){z(t.filter.callbacks,function(e){e(t.nodes,t.filter.name,{})})})},Hw=function(e){return e instanceof sb},qw=function(e,t){var r;e.dom.setHTML(e.getBody(),t),sh(r=e)&&sc.firstPositionIn(r.getBody()).each(function(e){var t=e.getNode(),n=jo.isTable(t)?sc.firstPositionIn(t).getOr(e):e;r.selection.setRng(n.toRange())})},$w=function(u,s,c){return void 0===c&&(c={}),c.format=c.format?c.format:"html",c.set=!0,c.content=Hw(s)?"":s,Hw(s)||c.no_events||(u.fire("BeforeSetContent",c),s=c.content),_.from(u.getBody()).fold(q(s),function(e){return Hw(s)?function(e,t,n,r){Vw(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n);var o=al({validate:e.validate},e.schema).serialize(n);return r.content=Ao(ar.fromDom(t))?o:Xt.trim(o),qw(e,r.content),r.no_events||e.fire("SetContent",r),n}(u,e,s,c):(t=u,n=e,o=c,0===(r=s).length||/^\s+$/.test(r)?(a='<br data-mce-bogus="1">',"TABLE"===n.nodeName?r="<tr><td>"+a+"</td></tr>":/^(UL|OL)$/.test(n.nodeName)&&(r="<li>"+a+"</li>"),(i=Nl(t))&&t.schema.isValidChild(n.nodeName.toLowerCase(),i.toLowerCase())?(r=a,r=t.dom.createHTML(i,t.settings.forced_root_block_attrs,r)):r||(r='<br data-mce-bogus="1">'),qw(t,r),t.fire("SetContent",o)):("raw"!==o.format&&(r=al({validate:t.validate},t.schema).serialize(t.parser.parse(r,{isRootContent:!0,insert:!0}))),o.content=Ao(ar.fromDom(n))?r:Xt.trim(r),qw(t,o.content),o.no_events||t.fire("SetContent",o)),o.content);var t,n,r,o,i,a})},Ww=Si.DOM,Kw=function(e){return _.from(e).each(function(e){return e.destroy()})},Xw=function(e){if(!e.removed){var t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement();r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&Ww.remove(o.nextSibling),Np(e),e.editorManager.remove(e),!e.inline&&r&&(i=e,Ww.setStyle(i.id,"display",i.orgDisplay)),Ep(e),Ww.remove(e.getContainer()),Kw(t),Kw(n),e.destroy()}var i},Yw=function(e,t){var n,r,o,i=e.selection,a=e.dom;e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),Kw(i),Kw(a)),(r=(n=e).formElement)&&(r._mceOldSubmit&&(r.submit=r._mceOldSubmit,r._mceOldSubmit=null),Ww.unbind(r,"submit reset",n.formEventDelegate)),(o=e).contentAreaContainer=o.formElement=o.container=o.editorContainer=null,o.bodyElement=o.contentDocument=o.contentWindow=null,o.iframeElement=o.targetElm=null,o.selection&&(o.selection=o.selection.win=o.selection.dom=o.selection.dom.doc=null),e.destroyed=!0):e.remove())},Gw=Si.DOM,Jw=Xt.extend,Qw=Xt.each,Zw=Xt.resolve,eN=fe.ie,tN=function(e,t,n){var r,o,i,a,u,s,c,l=this,f=l.documentBaseUrl=n.documentBaseURL,d=n.baseURI;r=l,o=e,i=f,a=n.defaultSettings,u=t,c={id:o,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:i,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,render_ui:!0,indentation:"40px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:(s=r).convertURL,url_converter_scope:s,ie7_compat:!0},t=$p(zp,c,a,u),l.settings=t,Bi.language=t.language||"en",Bi.languageLoad=t.language_load,Bi.baseURL=n.baseURL,l.id=e,l.setDirty(!1),l.plugins={},l.documentBaseURI=new zw(t.document_base_url,{base_uri:d}),l.baseURI=d,l.contentCSS=[],l.contentStyles=[],l.shortcuts=new Qp(l),l.loadedCSS={},l.editorCommands=new pp(l),l.suffix=n.suffix,l.editorManager=n,l.inline=t.inline,l.buttons={},l.menuItems={},t.cache_suffix&&(fe.cacheSuffix=t.cache_suffix.replace(/^[\?\&]+/,"")),!1===t.override_viewport&&(fe.overrideViewPort=!1),n.fire("SetupEditor",{editor:l}),l.execCallback("setup",l),l.$=gn.overrideDefaults(function(){return{context:l.inline?l.getBody():l.getDoc(),element:l.getBody()}})};Jw(tN.prototype={render:function(){Bw(this)},focus:function(e){uh(this,e)},hasFocus:function(){return sh(this)},execCallback:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r,o=this.settings[e];if(o)return this.callbackLookup&&(r=this.callbackLookup[e])&&(o=r.func,r=r.scope),"string"==typeof o&&(r=(r=o.replace(/\.\w+$/,""))?Zw(r):0,o=Zw(o),this.callbackLookup=this.callbackLookup||{},this.callbackLookup[e]={func:o,scope:r}),o.apply(r||this,Array.prototype.slice.call(arguments,1))},translate:function(e){if(e&&Xt.is(e,"string")){var n=this.settings.language||"en",r=this.editorManager.i18n;e=r.data[n+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,t){return r.data[n+"."+t]||"{#"+t+"}"})}return this.editorManager.translate(e)},getLang:function(e,t){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+e]||(t!==undefined?t:"{#"+e+"}")},getParam:function(e,t,n){return Kp(this,e,t,n)},nodeChanged:function(e){this._nodeChangeDispatcher.nodeChanged(e)},addButton:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),t.stateSelector&&"undefined"==typeof t.active&&(t.active=!1),t.text||t.icon||(t.icon=e),t.tooltip=t.tooltip||t.title,n.buttons[e]=t},addSidebar:function(e,t){return Pw(this,e,t)},addMenuItem:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),n.menuItems[e]=t},addContextToolbar:function(e,t){var n,r=this;r.contextToolbars=r.contextToolbars||[],"string"==typeof e&&(n=e,e=function(e){return r.dom.is(e,n)}),r.contextToolbars.push({id:Hh.uuid("mcet"),predicate:e,items:t})},addCommand:function(e,t,n){this.editorCommands.addCommand(e,t,n)},addQueryStateHandler:function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},addQueryValueHandler:function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},addShortcut:function(e,t,n,r){this.shortcuts.add(e,t,n,r)},execCommand:function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},queryCommandState:function(e){return this.editorCommands.queryCommandState(e)},queryCommandValue:function(e){return this.editorCommands.queryCommandValue(e)},queryCommandSupported:function(e){return this.editorCommands.queryCommandSupported(e)},show:function(){this.hidden&&(this.hidden=!1,this.inline?this.getBody().contentEditable=!0:(Gw.show(this.getContainer()),Gw.hide(this.id)),this.load(),this.fire("show"))},hide:function(){var e=this,t=e.getDoc();e.hidden||(eN&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable=!1,e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(Gw.hide(e.getContainer()),Gw.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},isHidden:function(){return!!this.hidden},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var t,n=this.getElement();return this.removed?"":n?((e=e||{}).load=!0,t=this.setContent(n.value!==undefined?n.value:n.innerHTML,e),e.element=n,e.no_events||this.fire("LoadContent",e),e.element=n=null,t):void 0},save:function(e){var t,n,r=this,o=r.getElement();if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,/TEXTAREA|INPUT/i.test(o.nodeName)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=Gw.getParent(r.id,"form"))&&Qw(n.elements,function(e){if(e.name===r.id)return e.value=t,!1})),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},setContent:function(e,t){return $w(this,e,t)},getContent:function(e){return t=this,void 0===(n=e)&&(n={}),_.from(t.getBody()).fold(q("tree"===n.format?new sb("body",11):""),function(e){return Uw(t,n,e)});var t,n},insertContent:function(e,t){t&&(e=Jw({content:e},t)),this.execCommand("mceInsertContent",!1,e)},isDirty:function(){return!this.isNotDirty},setDirty:function(e){var t=!this.isNotDirty;this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},setMode:function(e){var t,n;(n=e)!==Dp(t=this)&&(t.initialized?Rp(t,"readonly"===n):t.on("init",function(){Rp(t,"readonly"===n)}),Sp(t,n))},getContainer:function(){return this.container||(this.container=Gw.get(this.editorContainer||this.id+"_parent")),this.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return this.targetElm||(this.targetElm=Gw.get(this.id)),this.targetElm},getWin:function(){var e;return this.contentWindow||(e=this.iframeElement)&&(this.contentWindow=e.contentWindow),this.contentWindow},getDoc:function(){var e;return this.contentDocument||(e=this.getWin())&&(this.contentDocument=e.document),this.contentDocument},getBody:function(){var e=this.getDoc();return this.bodyElement||(e?e.body:null)},convertURL:function(e,t,n){var r=this.settings;return r.urlconverter_callback?this.execCallback("urlconverter_callback",e,n,!0,t):!r.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:r.relative_urls?this.documentBaseURI.toRelative(e):e=this.documentBaseURI.toAbsolute(e,r.remove_script_host)},addVisual:function(e){var n,r=this,o=r.settings,i=r.dom;e=e||r.getBody(),r.hasVisual===undefined&&(r.hasVisual=o.visual),Qw(i.select("table,a",e),function(e){var t;switch(e.nodeName){case"TABLE":return n=o.visual_table_class||"mce-item-table",void((t=i.getAttrib(e,"border"))&&"0"!==t||!r.hasVisual?i.removeClass(e,n):i.addClass(e,n));case"A":return void(i.getAttrib(e,"href")||(t=i.getAttrib(e,"name")||e.id,n=o.visual_anchor_class||"mce-item-anchor",t&&r.hasVisual?i.addClass(e,n):i.removeClass(e,n)))}}),r.fire("VisualAid",{element:e,hasVisual:r.hasVisual})},remove:function(){Xw(this)},destroy:function(e){Yw(this,e)},uploadImages:function(e){return this.editorUpload.uploadImages(e)},_scanForImages:function(){return this.editorUpload.scanForImages()}},Fp);var nN,rN,oN,iN={isEditorUIElement:function(e){return-1!==e.className.toString().indexOf("mce-")}},aN=function(n,e){var t,r;or.detect().browser.isIE()?(r=n).on("focusout",function(){ip(r)}):(t=e,n.on("mouseup touchend",function(e){t.throttle()})),n.on("keyup nodechange",function(e){var t;"nodechange"===(t=e).type&&t.selectionChange||ip(n)})},uN=function(e){var t,n,r,o=Vi(function(){ip(e)},0);e.inline&&(t=e,n=o,r=function(){n.throttle()},Si.DOM.bind(V.document,"mouseup",r),t.on("remove",function(){Si.DOM.unbind(V.document,"mouseup",r)})),e.on("init",function(){aN(e,o)}),e.on("remove",function(){o.cancel()})},sN=Si.DOM,cN=function(e){return iN.isEditorUIElement(e)},lN=function(t,e){var n=t?t.settings.custom_ui_selector:"";return null!==sN.getParent(e,function(e){return cN(e)||!!n&&t.dom.is(e,n)})},fN=function(r,e){var t=e.editor;uN(t),t.on("focusin",function(){var e=r.focusedEditor;e!==this&&(e&&e.fire("blur",{focusedEditor:this}),r.setActive(this),(r.focusedEditor=this).fire("focus",{blurredEditor:e}),this.focus(!0))}),t.on("focusout",function(){var t=this;he.setEditorTimeout(t,function(){var e=r.focusedEditor;lN(t,function(){try{return V.document.activeElement}catch(e){return V.document.body}}())||e!==t||(t.fire("blur",{focusedEditor:null}),r.focusedEditor=null)})}),nN||(nN=function(e){var t,n=r.activeEditor;t=e.target,n&&t.ownerDocument===V.document&&(t===V.document.body||lN(n,t)||r.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),r.focusedEditor=null))},sN.bind(V.document,"focusin",nN))},dN=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(sN.unbind(V.document,"focusin",nN),nN=null)},mN=function(e){e.on("AddEditor",d(fN,e)),e.on("RemoveEditor",d(dN,e))},gN=Si.DOM,pN=Xt.explode,hN=Xt.each,vN=Xt.extend,yN=0,bN=!1,CN=[],xN=[],wN=function(t){var n=t.type;hN(oN.get(),function(e){switch(n){case"scroll":e.fire("ScrollWindow",t);break;case"resize":e.fire("ResizeWindow",t)}})},NN=function(e){e!==bN&&(e?gn(window).on("resize scroll",wN):gn(window).off("resize scroll",wN),bN=e)},EN=function(t){var e=xN;delete CN[t.id];for(var n=0;n<CN.length;n++)if(CN[n]===t){CN.splice(n,1);break}return xN=U(xN,function(e){return t!==e}),oN.activeEditor===t&&(oN.activeEditor=0<xN.length?xN[0]:null),oN.focusedEditor===t&&(oN.focusedEditor=null),e.length!==xN.length};vN(oN={defaultSettings:{},$:gn,majorVersion:"4",minorVersion:"9.11",releaseDate:"2020-07-13",editors:CN,i18n:xh,activeEditor:null,settings:{},setup:function(){var e,t,n="";t=zw.getDocumentBaseUrl(V.document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/"));var r=window.tinymce||window.tinyMCEPreInit;if(r)e=r.base||r.baseURL,n=r.suffix;else{for(var o=V.document.getElementsByTagName("script"),i=0;i<o.length;i++){var a;if(""!==(a=o[i].src||"")){var u=a.substring(a.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)){-1!==u.indexOf(".min")&&(n=".min"),e=a.substring(0,a.lastIndexOf("/"));break}}}!e&&V.document.currentScript&&(-1!==(a=V.document.currentScript.src).indexOf(".min")&&(n=".min"),e=a.substring(0,a.lastIndexOf("/")))}this.baseURL=new zw(t).toAbsolute(e),this.documentBaseURL=t,this.baseURI=new zw(this.baseURL),this.suffix=n,mN(this)},overrideDefaults:function(e){var t,n;(t=e.base_url)&&(this.baseURL=new zw(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,"")),this.baseURI=new zw(this.baseURL)),n=e.suffix,e.suffix&&(this.suffix=n);var r=(this.defaultSettings=e).plugin_base_urls;for(var o in r)Bi.PluginManager.urls[o]=r[o]},init:function(r){var n,u,s=this;u=Xt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu"," ");var c=function(e){var t=e.id;return t||(t=(t=e.name)&&!gN.get(t)?e.name:gN.uniqueId(),e.setAttribute("id",t)),t},l=function(e,t){return t.constructor===RegExp?t.test(e.className):gN.hasClass(e,t)},f=function(e){n=e},e=function(){var o,i=0,a=[],n=function(e,t,n){var r=new tN(e,t,s);a.push(r),r.on("init",function(){++i===o.length&&f(a)}),r.targetElm=r.targetElm||n,r.render()};gN.unbind(window,"ready",e),function(e){var t=r[e];t&&t.apply(s,Array.prototype.slice.call(arguments,2))}("onpageload"),o=gn.unique(function(t){var e,n=[];if(fe.ie&&fe.ie<11)return kh.initError("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[];if(t.types)return hN(t.types,function(e){n=n.concat(gN.select(e.selector))}),n;if(t.selector)return gN.select(t.selector);if(t.target)return[t.target];switch(t.mode){case"exact":0<(e=t.elements||"").length&&hN(pN(e),function(t){var e;(e=gN.get(t))?n.push(e):hN(V.document.forms,function(e){hN(e.elements,function(e){e.name===t&&(t="mce_editor_"+yN++,gN.setAttrib(e,"id",t),n.push(e))})})});break;case"textareas":case"specific_textareas":hN(gN.select("textarea"),function(e){t.editor_deselector&&l(e,t.editor_deselector)||t.editor_selector&&!l(e,t.editor_selector)||n.push(e)})}return n}(r)),r.types?hN(r.types,function(t){Xt.each(o,function(e){return!gN.is(e,t.selector)||(n(c(e),vN({},r,t),e),!1)})}):(Xt.each(o,function(e){var t;(t=s.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(EN(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)}),0===(o=Xt.grep(o,function(e){return!s.get(e.id)})).length?f([]):hN(o,function(e){var t;t=e,r.inline&&t.tagName.toLowerCase()in u?kh.initError("Could not initialize inline editor on invalid inline target element",e):n(c(e),r,e)}))};return s.settings=r,gN.bind(window,"ready",e),new de(function(t){n?t(n):f=function(e){t(e)}})},get:function(t){return 0===arguments.length?xN.slice(0):S(t)?X(xN,function(e){return e.id===t}).getOr(null):O(t)&&xN[t]?xN[t]:null},add:function(e){var t=this;return CN[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(CN[e.id]=e),CN.push(e),xN.push(e)),NN(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),rN||(rN=function(){t.fire("BeforeUnload")},gN.bind(window,"beforeunload",rN))),e},createEditor:function(e,t){return this.add(new tN(e,t,this))},remove:function(e){var t,n,r=this;if(e){if(!S(e))return n=e,A(r.get(n.id))?null:(EN(n)&&r.fire("RemoveEditor",{editor:n}),0===xN.length&&gN.unbind(window,"beforeunload",rN),n.remove(),NN(0<xN.length),n);hN(gN.select(e),function(e){(n=r.get(e.id))&&r.remove(n)})}else for(t=xN.length-1;0<=t;t--)r.remove(xN[t])},execCommand:function(e,t,n){var r=this.get(n);switch(e){case"mceAddEditor":return this.get(n)||new tN(n,this.settings,this).render(),!0;case"mceRemoveEditor":return r&&r.remove(),!0;case"mceToggleEditor":return r?r.isHidden()?r.show():r.hide():this.execCommand("mceAddEditor",0,n),!0}return!!this.activeEditor&&this.activeEditor.execCommand(e,t,n)},triggerSave:function(){hN(xN,function(e){e.save()})},addI18n:function(e,t){xh.add(e,t)},translate:function(e){return xh.translate(e)},setActive:function(e){var t=this.activeEditor;this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e}},Cp),oN.setup();var SN,TN=oN;function kN(n){return{walk:function(e,t){return Lc(n,e,t)},split:Um,normalize:function(t){return Dg(n,t).fold(q(!1),function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0})}}}(SN=kN||(kN={})).compareRanges=Eg,SN.getCaretRangeFromPoint=Bb,SN.getSelectedNode=Za,SN.getNode=eu;var _N,AN,RN=kN,DN=Math.min,ON=Math.max,BN=Math.round,PN=function(e,t,n){var r,o,i,a,u,s;return r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,s=t.h,"b"===(n=(n||"").split(""))[0]&&(o+=s),"r"===n[1]&&(r+=u),"c"===n[0]&&(o+=BN(s/2)),"c"===n[1]&&(r+=BN(u/2)),"b"===n[3]&&(o-=a),"r"===n[4]&&(r-=i),"c"===n[3]&&(o-=BN(a/2)),"c"===n[4]&&(r-=BN(i/2)),IN(r,o,i,a)},IN=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},LN={inflate:function(e,t,n){return IN(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:PN,findBestRelativePosition:function(e,t,n,r){var o,i;for(i=0;i<r.length;i++)if((o=PN(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i];return null},intersect:function(e,t){var n,r,o,i;return n=ON(e.x,t.x),r=ON(e.y,t.y),o=DN(e.x+e.w,t.x+t.w),i=DN(e.y+e.h,t.y+t.h),o-n<0||i-r<0?null:IN(n,r,o-n,i-r)},clamp:function(e,t,n){var r,o,i,a,u,s,c,l,f,d;return u=e.x,s=e.y,c=e.x+e.w,l=e.y+e.h,f=t.x+t.w,d=t.y+t.h,r=ON(0,t.x-u),o=ON(0,t.y-s),i=ON(0,c-f),a=ON(0,l-d),u+=r,s+=o,n&&(c+=r,l+=o,u-=i,s-=a),IN(u,s,(c-=i)-u,(l-=a)-s)},create:IN,fromClientRect:function(e){return IN(e.left,e.top,e.width,e.height)}},FN={},MN={add:function(e,t){FN[e.toLowerCase()]=t},has:function(e){return!!FN[e.toLowerCase()]},get:function(e){var t=e.toLowerCase(),n=FN.hasOwnProperty(t)?FN[t]:null;if(null===n)throw new Error("Could not find module for type: "+e);return n},create:function(e,t){var n;if("string"==typeof e?(t=t||{}).type=e:e=(t=e).type,e=e.toLowerCase(),!(n=FN[e]))throw new Error("Could not find control by type: "+e);return(n=new n(t)).type=e,n}},zN=Xt.each,UN=Xt.extend,jN=function(){};jN.extend=_N=function(n){var e,t,r,o=this.prototype,i=function(){var e,t,n;if(!AN&&(this.init&&this.init.apply(this,arguments),t=this.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(this,arguments)},a=function(){return this},u=function(n,r){return function(){var e,t=this._super;return this._super=o[n],e=r.apply(this,arguments),this._super=t,e}};for(t in AN=!0,e=new this,AN=!1,n.Mixins&&(zN(n.Mixins,function(e){for(var t in e)"init"!==t&&(n[t]=e[t])}),o.Mixins&&(n.Mixins=o.Mixins.concat(n.Mixins))),n.Methods&&zN(n.Methods.split(","),function(e){n[e]=a}),n.Properties&&zN(n.Properties.split(","),function(e){var t="_"+e;n[e]=function(e){return e!==undefined?(this[t]=e,this):this[t]}}),n.Statics&&zN(n.Statics,function(e,t){i[t]=e}),n.Defaults&&o.Defaults&&(n.Defaults=UN({},o.Defaults,n.Defaults)),n)"function"==typeof(r=n[t])&&o[t]?e[t]=u(t,r):e[t]=r;return i.prototype=e,(i.constructor=i).extend=_N,i};var VN=Math.min,HN=Math.max,qN=Math.round,$N=function(e,n){var r,o,t,i;if(n=n||'"',null===e)return"null";if("string"==(t=typeof e))return o="\bb\tt\nn\ff\rr\"\"''\\\\",n+e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,t){return'"'===n&&"'"===e?e:(r=o.indexOf(t))+1?"\\"+o.charAt(r+1):(e=t.charCodeAt().toString(16),"\\u"+"0000".substring(e.length)+e)})+n;if("object"===t){if(e.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(e)){for(r=0,o="[";r<e.length;r++)o+=(0<r?",":"")+$N(e[r],n);return o+"]"}for(i in o="{",e)e.hasOwnProperty(i)&&(o+="function"!=typeof e[i]?(1<o.length?","+n:n)+i+n+":"+$N(e[i],n):"");return o+"}"}return""+e},WN={serialize:$N,parse:function(e){try{return JSON.parse(e)}catch(t){}}},KN={callbacks:{},count:0,send:function(t){var n=this,r=Si.DOM,o=t.count!==undefined?t.count:n.count,i="tinymce_jsonp_"+o;n.callbacks[o]=function(e){r.remove(i),delete n.callbacks[o],t.callback(e)},r.add(r.doc.body,"script",{id:i,src:t.url,type:"text/javascript"}),n.count++}},XN={send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||1e4<n++?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,1e4<n?"TIMED_OUT":"GENERAL",t,e),t=null):setTimeout(r,10)};if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",XN.fire("beforeInitialize",{settings:e}),t=Rh()){if(t.overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&Xt.each(e.requestheaders,function(e){t.setRequestHeader(e.key,e.value)}),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=XN.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r();setTimeout(r,10)}}};Xt.extend(XN,Cp);var YN,GN,JN,QN,ZN=Xt.extend,eE=function(e){this.settings=ZN({},e),this.count=0};eE.sendRPC=function(e){return(new eE).send(e)},eE.prototype={send:function(n){var r=n.error,o=n.success;(n=ZN(this.settings,n)).success=function(e,t){void 0===(e=WN.parse(e))&&(e={error:"JSON Parse error."}),e.error?r.call(n.error_scope||n.scope,e.error,t):o.call(n.success_scope||n.scope,e.result)},n.error=function(e,t){r&&r.call(n.error_scope||n.scope,e,t)},n.data=WN.serialize({id:n.id||"c"+this.count++,method:n.method,params:n.params}),n.content_type="application/json",XN.send(n)}};try{YN=V.window.localStorage}catch(iE){GN={},JN=[],QN={getItem:function(e){var t=GN[e];return t||null},setItem:function(e,t){JN.push(e),GN[e]=String(t)},key:function(e){return JN[e]},removeItem:function(t){JN=JN.filter(function(e){return e===t}),delete GN[t]},clear:function(){JN=[],GN={}},length:0},Object.defineProperty(QN,"length",{get:function(){return JN.length},configurable:!1,enumerable:!1}),YN=QN}var tE,nE=TN,rE={geom:{Rect:LN},util:{Promise:de,Delay:he,Tools:Xt,VK:rv,URI:zw,Class:jN,EventDispatcher:vp,Observable:Cp,I18n:xh,XHR:XN,JSON:WN,JSONRequest:eE,JSONP:KN,LocalStorage:YN,Color:function(e){var n={},u=0,s=0,c=0,t=function(e){var t;return"object"==typeof e?"r"in e?(u=e.r,s=e.g,c=e.b):"v"in e&&function(e,t,n){var r,o,i,a;if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,n=parseInt(n,10)/100,t=HN(0,VN(t,1)),n=HN(0,VN(n,1)),0!==t){switch(r=e/60,i=(o=n*t)*(1-Math.abs(r%2-1)),a=n-o,Math.floor(r)){case 0:u=o,s=i,c=0;break;case 1:u=i,s=o,c=0;break;case 2:u=0,s=o,c=i;break;case 3:u=0,s=i,c=o;break;case 4:u=i,s=0,c=o;break;case 5:u=o,s=0,c=i;break;default:u=s=c=0}u=qN(255*(u+a)),s=qN(255*(s+a)),c=qN(255*(c+a))}else u=s=c=qN(255*n)}(e.h,e.s,e.v):(t=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(u=parseInt(t[1],10),s=parseInt(t[2],10),c=parseInt(t[3],10)):(t=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(u=parseInt(t[1],16),s=parseInt(t[2],16),c=parseInt(t[3],16)):(t=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(u=parseInt(t[1]+t[1],16),s=parseInt(t[2]+t[2],16),c=parseInt(t[3]+t[3],16)),u=u<0?0:255<u?255:u,s=s<0?0:255<s?255:s,c=c<0?0:255<c?255:c,n};return e&&t(e),n.toRgb=function(){return{r:u,g:s,b:c}},n.toHsv=function(){return e=u,t=s,n=c,o=0,(i=VN(e/=255,VN(t/=255,n/=255)))===(a=HN(e,HN(t,n)))?{h:0,s:0,v:100*(o=i)}:(r=(a-i)/a,{h:qN(60*((e===i?3:n===i?1:5)-(e===i?t-n:n===i?e-t:n-e)/((o=a)-i))),s:qN(100*r),v:qN(100*o)});var e,t,n,r,o,i,a},n.toHex=function(){var e=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e};return"#"+e(u)+e(s)+e(c)},n.parse=t,n}},dom:{EventUtils:Se,Sizzle:St,DomQuery:gn,TreeWalker:go,DOMUtils:Si,ScriptLoader:Ri,RangeUtils:RN,Serializer:Eb,ControlSelection:Db,BookmarkManager:_b,Selection:uC,Event:Se.Event},html:{Styles:gi,Entities:ti,Node:sb,Schema:di,SaxParser:Mv,DomParser:bb,Writer:il,Serializer:al},ui:{Factory:MN},Env:fe,AddOnManager:Bi,Annotator:Hc,Formatter:Gy,UndoManager:ry,EditorCommands:pp,WindowManager:yh,NotificationManager:vh,EditorObservable:Fp,Shortcuts:Qp,Editor:tN,FocusManager:iN,EditorManager:TN,DOM:Si.DOM,ScriptLoader:Ri.ScriptLoader,PluginManager:Bi.PluginManager,ThemeManager:Bi.ThemeManager,trim:Xt.trim,isArray:Xt.isArray,is:Xt.is,toArray:Xt.toArray,makeMap:Xt.makeMap,each:Xt.each,map:Xt.map,grep:Xt.grep,inArray:Xt.inArray,extend:Xt.extend,create:Xt.create,walk:Xt.walk,createNS:Xt.createNS,resolve:Xt.resolve,explode:Xt.explode,_addCacheSuffix:Xt._addCacheSuffix,isOpera:fe.opera,isWebKit:fe.webkit,isIE:fe.ie,isGecko:fe.gecko,isMac:fe.mac},oE=nE=Xt.extend(nE,rE);tE=oE,window.tinymce=tE,window.tinyMCE=tE,function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(oE)}(window);
!function(a){"use strict";var n,t,r,e,u=void 0!==a.window?a.window:Function("return this;")(),i=function(n,t){return{isRequired:n,applyPatch:t}},c=function(i,o){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=o.apply(this,n),e=void 0===r?n:r;return i.apply(this,e)}},o=function(n,t){if(n)for(var r=0;r<t.length;r++)t[r].isRequired(n)&&t[r].applyPatch(n);return n},f=function(){},l=function(n){return function(){return n}},s=l(!1),g=l(!0),p=function(){return d},d=(n=function(n){return n.isNone()},e={fold:function(n,t){return n()},is:s,isSome:s,isNone:g,getOr:r=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:l(null),getOrUndefined:l(void 0),or:r,orThunk:t,map:p,each:f,bind:p,exists:s,forall:g,filter:p,equals:n,equals_:n,toArray:function(){return[]},toString:l("none()")},Object.freeze&&Object.freeze(e),e),h=function(r){var n=l(r),t=function(){return i},e=function(n){return n(r)},i={fold:function(n,t){return t(r)},is:function(n){return r===n},isSome:g,isNone:s,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return h(n(r))},each:function(n){n(r)},bind:e,exists:e,forall:e,filter:function(n){return n(r)?i:d},toArray:function(){return[r]},toString:function(){return"some("+r+")"},equals:function(n){return n.is(r)},equals_:function(n,t){return n.fold(s,function(n){return t(r,n)})}};return i},v=p,y=function(n){return null==n?d:h(n)},m=function(t){return function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"===t&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":t}(n)===t}},w=m("object"),O=m("array"),b=m("undefined"),j=m("function"),A=(Array.prototype.slice,Array.prototype.indexOf),x=Array.prototype.push,E=function(n,t){return r=n,e=t,-1<A.call(r,e);var r,e},S=function(n,t){return function(n){for(var t=[],r=0,e=n.length;r<e;++r){if(!O(n[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+n);x.apply(t,n[r])}return t}(function(n,t){for(var r=n.length,e=new Array(r),i=0;i<r;i++){var o=n[i];e[i]=t(o,i)}return e}(n,t))},M=(j(Array.from)&&Array.from,Object.prototype.hasOwnProperty),_=function(u){return function(){for(var n=new Array(arguments.length),t=0;t<n.length;t++)n[t]=arguments[t];if(0===n.length)throw new Error("Can't merge zero objects");for(var r={},e=0;e<n.length;e++){var i=n[e];for(var o in i)M.call(i,o)&&(r[o]=u(r[o],i[o]))}return r}},D=_(function(n,t){return w(n)&&w(t)?D(n,t):t}),P=_(function(n,t){return t}),U=Object.keys,N=Object.hasOwnProperty,R=function(n,t){for(var r=U(n),e=0,i=r.length;e<i;e++){var o=r[e];t(n[o],o)}},T=function(n,t){return q(n,t)?y(n[t]):v()},q=function(n,t){return N.call(n,t)},C=function(n){if(b(n)||""===n)return[];var t=O(n)?S(n,function(n){return n.split(/[\s+,]/)}):n.split(/[\s+,]/);return S(t,function(n){return 0<n.length?[n.trim()]:[]})},I=function(n,t){var r,e,i,o=D(n,t),u=C(t.plugins),a=T(o,"custom_plugin_urls").getOr({}),c=(r=function(n,t){return E(u,t)},e={},i={},R(a,function(n,t){(r(n,t)?e:i)[t]=n}),{t:e,f:i}),f=T(o,"external_plugins").getOr({}),l={};R(c.t,function(n,t){l[t]=n});var s=P(l,f);return P(t,0===U(s).length?{}:{external_plugins:s})},k={getCustomPluginUrls:I,patch:i(function(){return!0},function(t){t.EditorManager.init=c(t.EditorManager.init,function(n){return[I(t.defaultSettings,n)]})})},L=function(n,t){return function(n,t){for(var r=null!=t?t:u,e=0;e<n.length&&null!=r;++e)r=r[n[e]];return r}(n.split("."),t)},z=function(n){return parseInt(n,10)},V=function(n,t){var r=n-t;return 0===r?0:0<r?1:-1},B=function(n,t,r){return{major:n,minor:t,patch:r}},F=function(n){var t=/([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);return t?B(z(t[1]),z(t[2]),z(t[3])):B(0,0,0)},$=function(n,t){return!!n&&-1===function(n,t){var r=V(n.major,t.major);if(0!==r)return r;var e=V(n.minor,t.minor);if(0!==e)return e;var i=V(n.patch,t.patch);return 0!==i?i:0}(F([(r=n).majorVersion,r.minorVersion].join(".").split(".").slice(0,3).join(".")),F(t));var r},G={patch:i(function(n){return $(n,"4.7.0")},function(n){var o;n.EditorManager.init=c(n.EditorManager.init,(o=n.EditorManager,function(n){var t=L("tinymce.util.Tools",u),r=C(n.plugins),e=o.defaultSettings.forced_plugins||[],i=0<e.length?r.concat(e):r;return[t.extend({},n,{plugins:i})]}))})},H=function(){return(new Date).getTime()},J=function(n,t,r,e,i){var o,u=H();o=a.setInterval(function(){n()&&(a.clearInterval(o),t()),H()-u>i&&(a.clearInterval(o),r())},e)},K=function(i){return function(){var n,t,r,e=(n=i,t="position",r=n.currentStyle?n.currentStyle[t]:a.window.getComputedStyle(n,null)[t],r||"").toLowerCase();return"absolute"===e||"fixed"===e}},Q=function(n){n.parentNode.removeChild(n)},W=function(n,t){var r,e=((r=a.document.createElement("div")).style.display="none",r.className="mce-floatpanel",r);a.document.body.appendChild(e),J(K(e),function(){Q(e),n()},function(){Q(e),t()},10,5e3)},X=function(n,t){n.notificationManager?n.notificationManager.open({text:t,type:"warning",timeout:0,icon:""}):n.windowManager.alert(t)},Y=function(n){n.EditorManager.on("AddEditor",function(n){var t=n.editor,r=t.settings.service_message;r&&W(function(){X(t,t.settings.service_message)},function(){a.alert(r)})})},Z=function(n){var t,r,e=L("tinymce.util.URI",u);(t=n.base_url)&&(this.baseURL=new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,"")),this.baseURI=new e(this.baseURL)),r=n.suffix,n.suffix&&(this.suffix=r),this.defaultSettings=n},nn=function(n){return[L("tinymce.util.Tools",u).extend({},this.defaultSettings,n)]},tn={patch:i(function(n){return"function"!=typeof n.overrideDefaults},function(n){Y(n),n.overrideDefaults=Z,n.EditorManager.init=c(n.EditorManager.init,nn)})},rn={patch:i(function(n){return $(n,"4.5.0")},function(n){var e;n.overrideDefaults=c(n.overrideDefaults,(e=n,function(n){var t=n.plugin_base_urls;for(var r in t)e.PluginManager.urls[r]=t[r]}))})},en=function(n){o(n,[tn.patch,rn.patch,G.patch,k.patch])};en(u.tinymce)}(window);
(function(cloudSettings) {
	tinymce.overrideDefaults(cloudSettings);})
({
    suffix: ".min",
    linkchecker_service_url: "https://hyperlinking.tiny.cloud",
    spellchecker_rpc_url: "https://spelling.tiny.cloud",
    spellchecker_api_key: "qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",
    tinydrive_service_url: "https://catalog.tiny.cloud",
    api_key: "qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",
    imagetools_api_key: "qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",
    tinydrive_api_key: "qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",
    forced_plugins: [""],
    referrer_policy: "origin",
    content_css_cors: true,
    custom_plugin_urls: {},
    chiffer_snowplow_service_url: "https://sp.tinymce.com/i",
});
tinymce.baseURL = "https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.11/"
$.getScript("https://unpkg.com/tinymce-emoji@0.1.4/dist/tinymce-emoji/plugin.min.js");

tinymce.init({
  selector: '#cs-motdtext',
  height: 700,
  theme: 'modern',
  plugins: 'save textcolor preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link template table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist charmap lists textcolor wordcount contextmenu colorpicker textpattern code',
  toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | fontselect fontsizeselect | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat ',
  setup: function (editor) {
        editor.on('change', function () {
            editor.save();
        });
    },
	content_css: [
    'https://fonts.googleapis.com/css?family=Barlow','https://fonts.googleapis.com/css?family=Roboto'
  ],
    font_formats: 'Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats; Roboto=roboto,sans-serif; Barlow=barlow,sans-serif',
    content_style: `
body {
    background-color: #151517;
    color: #dfe0e4;
}
  `
});

;
$(document).on('focusin', function(e) {
  if ($(e.target).closest(".tox-tinymce-aux, .moxman-window, .tam-assetmanager-root, .mce-textbox").length) {
    e.stopImmediatePropagation();
  }
});
$(document).on('focusin', function(e) {
    if ($(e.target).closest(" .tox-dialog").length) {
        e.stopImmediatePropagation();
    }

    });
  }
});

/***/ },
/* 50 */
/***/ function(module, exports) {

	window.cytubeEnhanced.addModule('Xaekai Addons', function (app, settings) {
	    'use strict';
	    var that = this;

	    var defaultSettings = {
	        turnedOn: true
	    };
	    settings = $.extend({}, defaultSettings, settings);


//Don't put these on github you asshats
//Original scripts by Xaekai and edited to work with the theme by bill
$.getScript("//dl.dropbox.com/s/180zfdo89c6hnxe/xaekaiscripts.js");
});

/***/ },
/* 51 */
/***/ function(module, exports) {

if (moviedbshow == "1") {

    (function() {
        $(".et-hero-tabs-container").append('<a class="et-hero-tab" href="javascript:void(0)" onclick="javascript:showSchedule()">GUIDE</a>');
     
        var useroptions = document.getElementById('useroptions');
        var schedule = document.createElement('div');
        schedule.setAttribute("class", "modal fade");
        schedule.setAttribute("id", "schedule");
        schedule.setAttribute("tabindex", "-1");
        schedule.setAttribute("role", "dialog");
        schedule.setAttribute("aria-hidden", "true");
        schedule.setAttribute("style", "display: none;");
        schedule.innerHTML = '    <div class="modal-dialog">' +
            '<div class="modal-content">' +
                '<div class="modal-header">' +
                    '<button class="close" data-dismiss="modal" aria-hidden="true">x</button>' +
                '</div>' +
                '<div class="modal-body" style="width:100%; height:100%;">' +
                    '<div class="tab-content" style="width:100%; height:100%;">' +
                        '<div class="tab-schedule active" id="cg-schedule" style="width:100%; height:100%;">' +
                            '<div class="movielist"><h1 class="heading">Movie List</h1><p class="description"></p></div>' +
                            '<button id="loadMoreBtn" style="left: 45%;position: absolute;margin-top: 45px;" class="load-more-btn btn btn-default">Load More</button>' + // Load More button added here
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="modal-footer">' +
                    '<button class="btn btn-default" type="button" data-dismiss="modal">Close</button>' +
                '</div>' +
            '</div>' +
        '</div>';
        document.body.insertBefore(schedule, useroptions);
    })();

    $('head').append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/BillTube/BillTube2/mlist.css' />"); 
    const URL_API_BASE = 'https://api.themoviedb.org/3/list/' + moviedblist + '?api_key=' + moviedbkey + '&language=en-US';
    let movieList = [];
    let page = 1; // Initialize the page number
    const card = document.querySelector('.movielist');
    const loadMoreBtn = document.getElementById('loadMoreBtn'); // Get the Load More button
    let loading = false; // Track loading state to prevent multiple calls

    function mapCards(movies){
        const html = movies.map(movie => {
            let poster = movie.poster_path;
            let title = movie.title || movie.name;
            let isMovieOrTv = (movie.title) ? 'movie' : 'tv';
            return `
            <a target="_blank" class="card" href="https://www.themoviedb.org/${isMovieOrTv}/${movie.id}">
                <div class="front lazyload" style="background-image: url(//image.tmdb.org/t/p/original${poster});"> 
                <p>${title}</p>
                </div>
                <div class="back">
                <div>
                    <p class="overview">${movie.overview}</p>
                    <button class="button">Details</button>
                </div>
                </div>
            </a>
            `;
        }).join('');
        card.innerHTML += html; // Append new cards instead of replacing
    }

    function fetchMovies() {
        if (loading) return; // Prevent multiple calls
        loading = true;

        fetch(`${URL_API_BASE}&page=${page}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        .then(resp => resp.json())
        .then(data => {
            const movies = ((data.items) || data.results);
            movieList = movieList.concat(movies); // Add new movies to the list
            mapCards(movies); // Append new movies to the DOM
            loading = false; // Reset loading state
            page++; // Increment the page number
        })
        .catch((err) => {
            console.log(err);
            loading = false; // Reset loading state on error
        });
    }

    // Initial fetch
    fetchMovies();

    // Event listener for the Load More button
    loadMoreBtn.addEventListener('click', function() {
        fetchMovies(); // Fetch more movies when the button is clicked
    });

    // Optionally keep infinite scroll if needed
    window.addEventListener('scroll', function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
            fetchMovies(); // Fetch more movies when near the bottom
        }
    });
}


/***/ },
/* 52 */
/***/ function(module, exports) {
window.cytubeEnhanced.addModule("favouritePictures",function(t){"use strict";var e=this,i=t.parseJSON(window.localStorage.getItem("favouritePictures"),[]);t.storage.setDefault("favouritePictures",_.isArray(i)?i:[]),0===$("#chat-panel").length&&$('<div id="chat-panel" class="row">').insertAfter("#messagebuffer"),0===$("#chat-controls").length&&$('<div id="chat-controls" class="btn-group">').appendTo("#chatwrap"),this.$toggleFavouritePicturesPanelBtn=$('<button id="favourite-pictures-btn" data-tooltip="Favorites" data-tooltip-pos="up" class="chatbtn" >').html('<i class="fa-solid fa-folder-heart"></i>'),0!==$("#smiles-btn").length?this.$toggleFavouritePicturesPanelBtn.insertAfter("#smiles-btn"):this.$toggleFavouritePicturesPanelBtn.prependTo("#chat-controls"),this.$favouritePicturesPanel=$('<div id="favourite-pictures-panel">').appendTo("#chat-panel").hide(),this.$favouritePicturesPanelRow=$('<div class="favourite-pictures-panel-row">').appendTo(this.$favouritePicturesPanel),this.$favouritePicturesTrash=$('<div id="pictures-trash" title="'+t.t("favPics[.]Drop the picture here to remove it")+'">').append('<i class="pictures-trash-icon glyphicon glyphicon-trash">').appendTo(this.$favouritePicturesPanelRow),this.$favouritePicturesBodyPanel=$('<div id="pictures-body-panel">').appendTo(this.$favouritePicturesPanelRow),this.$favouritePicturesControlPanel=$('<div id="pictures-control-panel" class="row">').appendTo(this.$favouritePicturesPanel),this.$favouritePicturesControlPanelForm=$('<div class="col-md-12 picmenu">').html('<div class="input-group-pic"><input type="text" id="picture-address" class="form-control input-sm" placeholder="'+t.t("favPics[.]Picture url")+'"><span class="input-group-btn"><button id="add-picture-btn" class="btn btn-sm btn-default fal fa-plus" style="border-radius:2rem;padding:10px;" type="button"></button></span><span class="input-group-btn"><button id="help-pictures-btn" class="btn btn-sm btn-default fas fa-question" style="border-radius:2rem;padding:10px;" type="button"></button></span></div>').appendTo(this.$favouritePicturesControlPanel),this.makeSmilesAndPicturesTogether=function(){e.smilesAndPicturesTogether=!0,e.$toggleFavouritePicturesPanelBtn.hide(),e.$favouritePicturesPanel.hide()},this.entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},this.replaceUnsafeSymbol=function(t){return e.entityMap[t]},this.renderFavouritePictures=function(){var e=t.storage.get("favouritePictures")||[];this.$favouritePicturesBodyPanel.empty();for(var i=0,a=e.length;i<a;i++){var r=e[i].replace(/[&<>"']/g,this.replaceUnsafeSymbol);$('<img class="favourite-picture-on-panel">').attr({src:r}).appendTo(this.$favouritePicturesBodyPanel)}},this.insertFavouritePicture=function(e){t.Helpers.addMessageToChatInput(" "+e+" ","end")},$(document.body).on("click",".favourite-picture-on-panel",function(){e.insertFavouritePicture($(this).attr("src"))}),this.handleFavouritePicturesPanel=function(t){var e=this.smilesAndPicturesTogether||!1;0===$("#smiles-panel").length||e||$("#smiles-panel").hide(),this.$favouritePicturesPanel.toggle(),e||(t.hasClass("btn-default")?(0!==$("#smiles-btn").length&&$("#smiles-btn").hasClass("btn-success")&&($("#smiles-btn").removeClass("btn-success"),$("#smiles-btn").addClass("btn-default")),t.removeClass("btn-default"),t.addClass("")):(t.removeClass("btn-success"),t.addClass("btn-default")))},this.$toggleFavouritePicturesPanelBtn.on("click",function(){e.handleFavouritePicturesPanel($(this))}),this.addFavouritePicture=function(e){if(""!==(e=_.trim(e))){var i=t.storage.get("favouritePictures")||[];if(-1!==i.indexOf(e))return window.makeAlert(t.t("favPics[.]The image already exists")).prependTo(this.$favouritePicturesBodyPanel),$("#picture-address").val(""),!1;""!==e&&i.push(e),$("#picture-address").val(""),t.storage.set("favouritePictures",i),this.renderFavouritePictures()}},$("#add-picture-btn").on("click",function(t){t.preventDefault(),e.addFavouritePicture($("#picture-address").val().trim())}),$("#picture-address").on("keypress",function(t){13==t.which&&e.addFavouritePicture($("#picture-address").val().trim())}),this.showHelp=function(){var e=$('<div class="modal-header__inner">');e.append($('<h3 class="modal-title">').text(t.t("Help")));var i=$('<div class="help-pictures-content">');i.append($("<p>"+t.t("favPics[.]<p>Favourite pictures feature if for saving favourite pictures like browser bookmarks.</p><p>Features:<ul><li><strong>Only links to images can be saved</strong>, so if image from link was removed, it also removes from your panel.</li><li>Image links are storing in browser.</li><li>Favorite images transfer over to other channels using this theme </li>")+"</p>"));var a=$('<button type="button" id="help-pictures-exit-btn" class="btn btn-info" data-dismiss="modal">'+t.t("favPics[.]Exit")+"</button>"),r=$('<div class="help-pictures-footer">');return r.append(a),t.UI.createModalWindow("chat-history",e,i,r)},$("#help-pictures-btn").on("click",function(t){t.preventDefault(),e.showHelp()}),this.exportPictures=function(){var e=$("<a>").attr({href:"data:text/plain;charset=utf-8,"+encodeURIComponent(t.toJSON(t.storage.get("favouritePictures")||[])),download:"pururin_favourite_images.txt"}).hide().appendTo($(document.body));e[0].click(),e.remove()},$("#export-pictures").on("click",function(){e.exportPictures()}),e.mistakeAjaxEnd=!0,$("#upload-pictures").on("click",function(i){i.preventDefault(),e.mistakeAjaxEnd&&(e.mistakeAjaxEnd=!1,$.ajax({type:$(this).attr("method"),url:$(this).attr("action"),dataType:"html",data:{userName:username,userRank:CLIENT.rank,userData:t.storage.get("favouritePictures")||[],g:CLIENT.guest,action:"upload"}}).done(function(i){e.mistakeAjaxEnd=!0,t.UI.createAlertWindow(t.t(`favPics[.]${i}`))}))}),$("#load-pictures").on("click",function(i){i.preventDefault(),e.mistakeAjaxEnd&&(e.mistakeAjaxEnd=!1,$.ajax({type:$(this).attr("method"),url:$(this).attr("action"),dataType:"html",data:{userName:username,userRank:CLIENT.rank,g:CLIENT.guest,action:"get"}}).done(function(i){e.mistakeAjaxEnd=!0;var a=t.parseJSON(i);_.isArray(a)?(t.storage.set("favouritePictures",t.parseJSON(i)),e.renderFavouritePictures()):t.UI.createAlertWindow(t.t(`favPics[.]${i}`))}))}),this.importPictures=function(i){var a=new FileReader;a.addEventListener("load",function(i){var a=t.parseJSON(i.target.result);_.isArray(a)?(t.storage.set("favouritePictures",t.parseJSON(i.target.result)),e.renderFavouritePictures()):t.UI.createAlertWindow(t.t("favPics[.]Can't detect any pictures in this file."))}),a.readAsText(i)},$("#import-pictures").on("change",function(){var i=$(this)[0].files[0];t.UI.createConfirmWindow(t.t("favPics[.]Your old pictures will be removed and replaced with the images from uploaded file (file must correspond to format of the file from export button of this panel).<br>Are you sure you want to continue?"),function(t){t&&i&&e.importPictures(i)})}),this.renderFavouritePictures(),this.$favouritePicturesBodyPanel.sortable({containment:this.$favouritePicturesPanelRow,revert:!0,update:function(e,i){var a,r=$(i.item).attr("src"),s=$(i.item).next().attr("src"),o=t.storage.get("favouritePictures");if(-1!==(a=o.indexOf(r))){var n;if(o.splice(a,1),void 0!==s)-1!==(n=o.indexOf(s))&&o.splice(n,0,r);else o.push(r);t.storage.set("favouritePictures",o)}}}),this.$favouritePicturesTrash.droppable({accept:".favourite-picture-on-panel",hoverClass:"favourite-picture-drop-hover",drop:function(e,i){var a,r=i.draggable.attr("src"),s=t.storage.get("favouritePictures");-1!==(a=s.indexOf(r))&&(s.splice(a,1),t.storage.set("favouritePictures",s)),i.draggable.remove()}})});
/***/ },
/* 53 */
/***/ function(module, exports) {
// Just adding some colors to the chat cus why not
var html = '<button id="colors-btn" class="btn btn-sm btn-default btn-chatctrl dropdown-toggle" '
 + '>Colors â–´</button>';
$colorsMenu = $('<div id="colors-menu" class="dropup btn-group" />').appendTo('.markdown-helper-templates-wrapper').html(html);
$('<ul id="colors-wrap" class="dropdown-menu-colors hidden"></ul>').appendTo('#chatwrap');
  $("#colors-btn").on("click", function(){
      $("#colors-wrap").toggleClass("hidden");
  });
$('body').on('click',function(event){
   if(!$(event.target).is('#colors-wrap')){
     $("#colors-wrap").addClass("hidden");
   }
});
if (ColorsArray.length < 1) $colorsMenu.hide()
else if (ColorsArray.length > 50) $colorsMenu.addClass('widecm');

for (i in ColorsArray) {
	var j = ColorsArray.length > 50 ? 8 : 5;
	if (i % j == 0) var colgroup = $('<li class="btn-group btn-colors" />').appendTo("#colors-wrap");
	$('<button class="btn btn-default btn-sm cbtn" onclick="insertText(\'col:' + ColorsArray[i] + ':\')" />')
	  .css('background-color', ColorsArray[i]).html('â– ').appendTo(colgroup);
}
var ul = $('#nav-collapsible a:contains("Account")').parent().find("ul");

// safeguard

const player = videojs('ytapiplayer');

        player.on('error', function() {
            const error = player.error();
            console.error('Video error detected:', error);

            // Attempt to reload the video
            const currentSrc = player.src();
            if (currentSrc) {
                console.log('Reloading video source:', currentSrc);
                player.src(currentSrc); // Reset the source
                player.load(); // Load the new source
                player.play(); // Attempt to play again
            } else {
                console.log('No source available to reload.');
            }
        });








/***/ }
/******/ ]);

//the script ends here