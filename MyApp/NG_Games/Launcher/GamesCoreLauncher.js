
(function () {
 
 /* BUILD NUMBER START */var CoreBuildNumber= "1_0";/* BUILD NUMBER END */
 //all variables should be inside IIFE because they can override windows variables
 var HTML5GamesCacheBusterNumber = HTML5CoreBuildNumber = CoreBuildNumber;
 var CACHE_BUSTER_PARAM = "CBID=";
 var ERROR_CODES_LAUNCHER = '-1009';
 var ERROR_MSG_LAUNCHER = 'Error initiate the game';
 var failCallback = window.NotifyGameLoadFailed || function (){};
 var domain;
 var scriptsDomain;
 
 if(document.domain === 'localhost') {
 //domain = './local_server/core/'; we can use local core
 domain = 'https://download.qa.gamesrv1.com/secure/GamesCore/' + HTML5CoreBuildNumber + '/'; // this links to download server's latest core
 } else {
 if(window.EnvData.specificGameCore === 1)
 {
 domain = window.EnvData.MDSURL + '/secure/HTML5Games/' + window.GameData.GID+"/"+ HTML5GamesBuildNumber + '/GamesCore/';
 }
 else
 {
 domain = window.EnvData.MDSURL + '/secure/GamesCore/' + HTML5CoreBuildNumber + '/';
 }
 }
 
 scriptsDomain = domain + 'Scripts/';
 
 var script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = scriptsDomain + 'poc.nocache.js?' + CACHE_BUSTER_PARAM +  HTML5GamesCacheBusterNumber;
 script.onerror = function(){ failCallback(ERROR_CODES_LAUNCHER, ERROR_MSG_LAUNCHER, window.GameData.GID)};
 document.getElementsByTagName('head')[0].appendChild(script);
 
 //load common.css
 var head = document.getElementsByTagName('head')[0];
 var gameCss = document.createElement("link");
 gameCss.rel = 'stylesheet';
 gameCss.type = 'text/css';
 gameCss.href = domain + 'common/common.css?' + CACHE_BUSTER_PARAM +  HTML5GamesCacheBusterNumber;
 
 head.appendChild(gameCss);
 }) ();
