var HTML5GamesBuildNumber = HTML5GamesCacheBusterNumber = '';
var CACHE_BUSTER_PARAM = "CBID=";

var ERROR_CODES_LAUNCHER = '-1009';
var ERROR_MSG_LAUNCHER = 'Error initiate the game';
var failCallback = window.NotifyGameLoadFailed || function (){};

(function () {
 var hrefPath = window.location.href;
 window.EnvData.MDSURL = hrefPath.substring(0, hrefPath.lastIndexOf('/'));
 var domain = window.EnvData.MDSURL + '/secure/HTML5Games/' + window.GameData.GID + '/' ;
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = domain + 'index-launch.js';
 script.onerror = function(){ failCallback(ERROR_CODES_LAUNCHER, ERROR_MSG_LAUNCHER, window.GameData.GID)};
 document.getElementsByTagName('head')[0].appendChild(script);
 }) ();
