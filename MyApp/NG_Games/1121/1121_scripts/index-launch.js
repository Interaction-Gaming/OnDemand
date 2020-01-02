function getURLS() {
    var urls = {};
    
    urls.gameLauncherURL =  window.EnvData.MDSURL + '/secure/HTML5Games/1121/game/gameLauncher.bundle.js';
    urls.specificGameCoreScriptURL =  window.EnvData.MDSURL + '/GamesCoreLauncher.js';
    return urls;
}



var _URLS = getURLS();
var ERROR_CODES = '-1009';
var ERROR_MSG = 'Error initiate the game';

function loadScript(src, callback, onGameScriptsLoadError) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = callback;
    script.onerror = onGameScriptsLoadError;
    document.getElementsByTagName('head')[0].appendChild(script);
}








function onGameScriptsLoad()
{
    console.log = myConsoleLog;
    console.log('------>  GAME LAUNCHER SCRIPTS LOADED');
}

function onSpecificGameCoreScriptsLoad()
{
    console.log = myConsoleLog;
    console.log('------> CORE LAUNCHER SCRIPTS LOADED');
}


function onCoreScriptsLoadError()
{
    window.EnvData.specificGameCore = 0;
    loadScript( _URLS.coreScriptURL,onCoreScriptsLoad, onGameScriptsLoadError);
}

function onGameScriptsLoadError()
{
    var failCallback = window.NotifyGameLoadFailed || function (){};
    return failCallback(ERROR_CODES, ERROR_MSG, window.GameData.GID);
}

function onGameReady(event) {
    console.log('------> GAME READY EVENT');
    window.ngGame = event.detail;
    var cacheBaster = window.CACHE_BUSTER_PARAM + (window.HTML5GamesCacheBusterNumber || Date.now());
    if (window.ngCoreData)
        window.ngGame.initGameData(window.ngCoreData, cacheBaster);
    if(window.ngInitializationData) window.ngGame.setInitializationData(window.ngInitializationData);
}

function onAppReady(event) {
    console.log('------> API READY EVENT');
    window.ngCoreData = event.detail;
    var cacheBaster = window.CACHE_BUSTER_PARAM + (window.HTML5GamesCacheBusterNumber || Date.now());
    if (window.ngGame) window.ngGame.initGameData(event.detail, cacheBaster);

}

function onInitializationDataReady(event) {
    if (window.logger) {
        console.log('------> InitializationData ready EVENT');
    }
    window.ngInitializationData = event.detail;
    if (window.ngGame) {
        window.ngGame.setInitializationData(window.ngInitializationData);
    }
}

function onDataReady(){
    console.log('Data Ready');
    
}

(function init() {
 document.addEventListener('AppReady', onAppReady);
 document.addEventListener('GameReady', onGameReady);
 document.addEventListener('DataReady', onDataReady);
 document.addEventListener('initializationDataReady', onInitializationDataReady);
 

 loadScript(_URLS.specificGameCoreScriptURL, onSpecificGameCoreScriptsLoad, onCoreScriptsLoadError);

 
 loadScript( _URLS.gameLauncherURL,onGameScriptsLoad, onGameScriptsLoadError);
 }) ();
