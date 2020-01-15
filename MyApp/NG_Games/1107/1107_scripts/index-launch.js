var _URLS = attachCacheBuster(getURLS(), window.HTML5GamesCacheBusterNumber);
const ERROR_CODES = '-1009';
const ERROR_MSG = 'Error initiate the game';


(function init() {
    document.addEventListener('AppReady', onAppReady);
    document.addEventListener('GameReady', onGameReady);
    document.addEventListener('initializationDataReady', onInitializationDataReady);

    if (window.EnvData.specificGameCore === 1)
    {
        loadScript(_URLS.specificGameCoreScriptURL, onSpecificGameCoreScriptsLoad, onCoreScriptsLoadError);
    }else
    {
        loadScript( _URLS.coreScriptURL, onCoreScriptsLoad, onGameScriptsLoadError);
    }

    loadScript( _URLS.gameLauncherURL,onGameScriptsLoad, onGameScriptsLoadError);
}) ();

function getURLS() {
    var gameVersion = window.HTML5GamesBuildNumber;
    var urls = {};
    var DownloadServerGamesPOC        = window.EnvData.MDSURL + '/secure/HTML5Games/' + window.GameData.GID + '/' + gameVersion;
    var DownloadServerGamesGameNumURL = DownloadServerGamesPOC + '/game';

    urls.gameLauncherURL    = DownloadServerGamesGameNumURL +'/gameLauncher.bundle.js';
   urls.specificGameCoreScriptURL =  window.EnvData.MDSURL + '/GamesCoreLauncher.js';
    urls.coreScriptURL = window.EnvData.MDSURL + '/GamesCoreLauncher.js';

    return urls;
}

function attachCacheBuster(obj, cacheBuster) {
    return Object.keys(obj).reduce(function(acc, key) {
        acc[key] = obj[key] + '?' + window.CACHE_BUSTER_PARAM + cacheBuster;
        return acc;
    }, {});
}


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
    logger.log('------>  GAME LAUNCHER SCRIPTS LOADED');
}

function onSpecificGameCoreScriptsLoad()
{
    logger.log('------>  SPECIFIC CORE LAUNCHER SCRIPTS LOADED');
}

function onCoreScriptsLoad()
{
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
    logger.log('------> GAME READY EVENT');
    window.ngGame = event.detail;
    var cacheBaster = window.CACHE_BUSTER_PARAM + (window.HTML5GamesCacheBusterNumber || Date.now());
    if (window.ngCoreData) window.ngGame.initGameData(window.ngCoreData, cacheBaster);
    if(window.ngInitializationData) window.ngGame.setInitializationData(window.ngInitializationData);
}

function onAppReady(event) {
    logger.log('------> API READY EVENT');
    window.ngCoreData = event.detail;
    var cacheBaster = window.CACHE_BUSTER_PARAM + (window.HTML5GamesCacheBusterNumber || Date.now());
    if (window.ngGame) window.ngGame.initGameData(event.detail, cacheBaster);

}

function onInitializationDataReady(event) {
    if (window.logger) {
        logger.log('------> InitializationData ready EVENT');
    }
    window.ngInitializationData = event.detail;
    if (window.ngGame) {
        window.ngGame.setInitializationData(window.ngInitializationData);
    }
}
