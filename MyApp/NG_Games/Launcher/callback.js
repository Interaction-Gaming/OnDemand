function NGSystemError(errorCode, errorMsg){
    alert('NGSystemError: ' + errorCode + ' ' + errorMsg);
}
          
function NotifyGameInitError(errorCode, errorMsg, gameID){
    alert('NotifyGameInitError: ' + errorCode + ' ' + errorMsg);
}
          
function NotifyGameLoadFailed(errorCode, errorMsg, gameID){
    alert('NotifyGameLoadFailederrorCode: ' + errorCode + ' ' + errorMsg);
}
function Lobby(){
    window.location.href="http://backtoloby/Lobby.aspx";
}
