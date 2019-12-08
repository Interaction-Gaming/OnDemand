
function start()


var ENV_NOT_WORK = true;
alert('hello');
var queryParams = parseQueryString(location.search);
var languageCode = queryParams && queryParams.LanguageCode ? queryParams.LanguageCode : 'ENG';
window.EnvData = {
    "BAL":50,
    "BBR":1,
    "BD":"https:\/\/Info.qa.michiganlottery.com",
    "BDN":"michiganlottery.com",
    "BN":"Michigan Lottery",
    "BVER":"2017-04.134",
    "CARD":null,
    "DURL":"\/OP\/Resources\/",
    "GMM":null,
    "HURL":null,
    "IHM": false, // history mode
    "IHPE":false,
    "ITT":"-",
    "LNG":languageCode,
    "MDA":10,
    "MDSURL":"build",
    "MMA":false,"MTMP":"100","MURL":null,
    "PLID":0,"RGT":"MI",
    "SECUREURL":"https:\/\/localhost:4000",
    "SLOGN":"","SNO":"","T1MDA":"10","UDNL":0,"UL":false,
    "IEXG":true
};
window.PlayerData = {
    "AutoPlayMode":"N",
    "CLI":"",
    "CSI":113,
    "CURDECIMALSYM":".",
    "CURFCT":1,
    "CURSEPSYM":"",
    "CURSYM":"$",
    "CURSYMALGN":"L",
    "CurCode":"USD",
    "CurDigSymbol":",",
    "GenericUsername":"DemoMode",
    "HASDEPOSIT":false,
    "HASMONEYACCOUNT":0,
    "ISID":"0",
    "NotificationsEnabled":true,
    "PlayMode":"D",
    "PlayerIDForExternalSystem":"F80DA774072FCEEE",
    "PracticeBetsCount":0,"RCF":""
};
var GameDataSet = {
    "EGA":1,
    "AGP": null,
    "BETD": "0.25,0.50,1.00,2.00,5.00,10.00,20.00",
    "BType": 220,
    "DEFD": 0.5,
    "GID": 1107
    "GMN": "King",
    "GMT": "XOX",
    "ISDR": 0,
    "MPF": 10000,
    "MSG": 0,
    "PJPs": [],
    "SVE": "I",
    "FBETD": null,
    "FGLC": null,
    "IAQR": true,
    "PM": "D",
    "RFGC": null
};
var gameConfig = {
M: {"DisplayFGRibbon":true,"SOUND":true,"ENVT":"S","LOBBY":true, "CASHIER":true, "MONEY":true, "SETTINGS":true, "ISINPOP":true, "HIDEADRSBR":false, "ORNTS":true, "PadTop":0, "PadBottom":0, "PadLeft":0, "padRight":0, "NotifyGC":true},
W: {"SOUND":true,"ENVT":"W","LOBBY":false, "CASHIER":false, "MONEY":false, "SETTINGS":false, "ISINPOP":true, "HIDEADRSBR":false, "ORNTS":false, "PadTop":0, "PadBottom":0, "PadLeft":0, "padRight":0, "NotifyGC":true}
};
window.PJPData = [];

// --------------------
var ngtGID = queryParams && queryParams.GameID ? queryParams.GameID : '1107;
var ngtENV = queryParams && queryParams.env ? queryParams.env : 'W';

// --------------------

window.GameData = GameDataSet;
window.GameData.GMTCH = 'H_PIXI';
window.gameConfiguration = gameConfig[ngtENV];
window.initialParams = {
brandId: '4',
gameId: ngtGID,
sessionId: '70A463170607A36CF82A6C0BA3F1FC41',
languageCode: 'ENU',
platform: 'W',
width: '100%',
height: '100%',
playMode: 'D',
username: 'neomaster5',
password: '123456ng',
AllowQuickRound: 'true'
};

var game = document.createElement('script');
game.type = 'application/javascript';
game.src = './HTML5ScriptsLauncher.js';

var secureURL = 'https://qa.gameserver1-mt.com/scratchcards/sapi.aspx';


window.EnvData.MDSURL = 'https://download.qa.gamesrv1.com';
window.EnvData.SECUREURL = 'https://qa.gameserver1-mt.com';



if (ENV_NOT_WORK) {
    document.getElementsByTagName('head')[0].appendChild(game);
} else {
    
    var username = queryParams && queryParams.username ? queryParams.username : 'neomaster5@ng.com';
    var password = queryParams && queryParams.password ? queryParams.password : '123456ng';
    var _playMode = queryParams && queryParams.PlayMode ? queryParams.PlayMode : 'D';
    var _csi = queryParams && queryParams.CSI ? queryParams.CSI : 113;
    var _languageCode = queryParams && queryParams.LanguageCode ? queryParams.LanguageCode : 'ENU';
    
    
    var loginData = secureURL + '?AFI=0&CSI=' + _csi + '&IUA=neos&KA=1&LNG=' + _languageCode + '&LPR=Minisite&MMI=0&PlayMode=' + _playMode + '&cm=LOGN&rst=j';
    
    var req = new XMLHttpRequest();
    req.open('POST', loginData, true);
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
            var res = JSON.parse(req.responseText);
            PlayerData.ISID = res.S2C.PLAYER.ISID;
            PlayerData.GenericUsername = res.S2C.PLAYER.USERNAME;
            PlayerData.PlayMode = res.S2C.PLAYER.PLAYMODE;
            document.getElementsByTagName('head')[0].appendChild(game);
        }
    };
    
    var params = 'password=' + password + '&username=' + username + '&CurrencyCode=USD&ClientTimezone=180';
    
    req.send(params);
}
}

function parseQueryString(s) {
    s = s.substring(1);
    if (!s) return null;
    return s.split('&').reduce(function (acc, item) {
                               var kv = item.split('=');
                               acc[kv[0]] = kv[1];
                               return acc;
                               }, {});
}

