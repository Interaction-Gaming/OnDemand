

/* BUILD NUMBER START */var HTML5GamesBuildNumber = "version";/* BUILD NUMBER END */
//parameter to prevent loading cashed resources
var CacheBusterID = "1";
var MobileWebGames = [412,250,200,344,384,273,278,270,275,261,266,474,390,303,467,570,495,413,457,58,359,292,360,371,138,345,228,294,491];
//need to initialize only after the page load, only after load we will have access to the page's parameters
if(window.EnvData != null)
{
	if(window.EnvData.MDSURL != null)
	{
		init();
	}
	else
	{
		window.addEventListener("load",init);
	}
}
else
{
	window.addEventListener("load",init);
}


function init()
{
	//load POC.css
	loadPOCcss();
   //load game.css
	loadGamecss();
			
	//load TweenMax.min.js
	loadLibrary('TweenMax.min.js');
		
	//load TweenMax.min.js
	loadLibrary('Tween.min.js');
		
	//load soundjs-0.5.1.min.js
	loadLibrary('soundjs-0.5.1.min.js');
	
	//load poc.nocache.js
	loadPOCScripts();	
}

function loadGamecss()
{
	var domain = getDomain();
	var gameID = window.GameData.GID;
	var isMobileForWebGame = MobileWebGames.indexOf(gameID) !== -1;
	
	//load game.css
	var env = window.gameConfiguration.ENVT;
	//set resolution according to environment
	var resolution = "640x834";
	scriptsUrl = domain + "Resources/" + resolution + "/Brands/General/games/" + gameID + "/game.css" + "?CBID=" + CacheBusterID;
	loadLink(scriptsUrl);
}

function loadPOCcss()
{
	var domain = getDomain();
	//load POC.css
	scriptsUrl = domain + "Scripts/games/POC.css" + "?CBID=" + CacheBusterID;
	loadLink(scriptsUrl);	
}

function loadLibrary(libraryFile)
{
	var domain = getDomain();

	//load TweenMax.min.js
	scriptsUrl = domain + "Scripts/games/" + libraryFile;
	loadScript(scriptsUrl);
}

function loadPOCScripts()
{
	var domain = getDomain();
	//load poc.nocache.js
	var gameID = window.GameData.GID;
	var scriptsUrl = domain + "Scripts/games/" + gameID + "/poc.nocache.js" + "?CBID=" + CacheBusterID;
	loadScript(scriptsUrl);
}

	
function loadScript(scriptUrl)
{
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = scriptUrl;
	// Fire the loading
	head.appendChild(script);

}
	
function loadLink(linkUrl)
{
	var head = document.getElementsByTagName('head')[0];
	var gameCss = document.createElement("link");
	gameCss.rel = 'stylesheet';
	gameCss.type = 'text/css';
	gameCss.href = linkUrl;
	
	head.appendChild(gameCss);
}

function getDomain()
{
	var domain = window.EnvData.MDSURL;
	domain = domain + "/secure/OP/" + HTML5GamesBuildNumber + "/";
	return domain;
}

function getPIXLauncherDomain()
{
	var url = window.location.href;
	console.log("getPixiLauncher ---> url: " + url);
	var index = url.indexOf("/MWC/");
	console.log("getPixiLauncher ---> index: " + index);
	var domain = url.substring(0, index);
	domain = domain + "/HTML5Games/";
	console.log("final domain: " + domain);
	return domain;
}
