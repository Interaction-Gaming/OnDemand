/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
var de;
(function (de) {
    var rm;
    (function (rm) {
        var play;
        (function (play) {
            var Device = (function () {
                function Device() {
                    /*private*/ this.major = 0;
                    /*private*/ this.minor = 0;
                    if (this.androidVersion === undefined)
                        this.androidVersion = null;
                    if (this.iphoneVersion === undefined)
                        this.iphoneVersion = null;
                    if (this.deviceVendor === undefined)
                        this.deviceVendor = null;
                    if (this.deviceDPI === undefined)
                        this.deviceDPI = 0;
                    if (this.__isForceRefreshCanvasRequired === undefined)
                        this.__isForceRefreshCanvasRequired = false;
                    Device.deviceType = Device.identifyDeviceType();
                    this.androidVersion = Device.identifyAndroidVersion();
                    this.iphoneVersion = Device.identifyIphoneVersion();
                    this.deviceVendor = Device.identifyDeviceVendor();
                    this.deviceDPI = Device.identifyDeviceDPI();
                    this.__isForceRefreshCanvasRequired = false;
                    Device.scaleWidth = 1;
                    Device.scaleHeight = 1;
                    if (Device.isAndroid()) {
                        var arrAndroidVersion = this.androidVersion.split(".").join("_").split("_");
                        this.major = 0;
                        this.minor = 0;
                        try {
                            this.major = parseInt(arrAndroidVersion[0]);
                            this.minor = parseInt(arrAndroidVersion[1]);
                        }
                        catch (e) {
                        }
                        ;
                        if (this.major === 4 && this.minor > 0) {
                            this.__isForceRefreshCanvasRequired = true;
                        }
                    }
                }
                Device.NOT_SUPPORTED_SOUNDS_LIST_$LI$ = function () { if (Device.NOT_SUPPORTED_SOUNDS_LIST == null)
                    Device.NOT_SUPPORTED_SOUNDS_LIST = [Device.DeviceType.WINDOWS_PHONE, Device.DeviceType.LG]; return Device.NOT_SUPPORTED_SOUNDS_LIST; };
                /**
                 * checks if the device support the use 'requestFullscreen' from the page's document element.
                 * @return
                 * @return {boolean}
                 */
                Device.prototype.isDeviceSupportFullScreenRequest = function () {
                    return Device.isChrome() && !this.isWebViewApplication();
                };
                /**
                 * Check if the current browser is web view inside Android application
                 * @return {boolean}
                 * @private
                 */
                Device.prototype.isWebViewApplication = function () {
                    var userAgent = Device.getUserAgent().toLowerCase();
                    return Device.isAndroid() && (((userAgent.indexOf("wv") != -1) || (userAgent.indexOf("version") != -1)));
                };
                Device.prototype.isWebViewIOSApplication = function () {
                    var userAgent = Device.getUserAgent().toLowerCase();
                    return (((userAgent.indexOf("mac") != -1) && !(userAgent.indexOf("safari") != -1)));
                };
                Device.isAndroidDefaultBrowser = function () {
                    return (Device.isAndroid() && !Device.isChrome());
                };
                /**
                 * return if it's android Samsung device
                 * @return
                 * @return {boolean}
                 */
                Device.isSamsungDevice = function () {
                    var userAgent = Device.getUserAgent().toLowerCase();
                    return Device.isAndroid() && ((userAgent.indexOf("samsungbrowser") != -1) || (userAgent.indexOf("sm-") != -1) || ((userAgent.indexOf("samsung") != -1)));
                };
                Device.prototype.getAndroidMajorVersion = function () {
                    return this.major;
                };
                Device.prototype.getAndroidMinorVersion = function () {
                    return this.minor;
                };
                Device.getScaleWidth = function () {
                    return Device.scaleWidth;
                };
                Device.getScaleHeight = function () {
                    return Device.scaleHeight;
                };
                Device.getTransformScaleWidth = function () {
                    return Device.transformScaleWidth;
                };
                Device.getTransformScaleHeight = function () {
                    return Device.transformScaleHeight;
                };
                Device.setScale = function (_scaleWidht, _scaleHeight) {
                    Device.transformScaleHeight = _scaleHeight;
                    Device.transformScaleWidth = _scaleWidht;
                    Device.scaleWidth = _scaleWidht > 1 ? 1 : _scaleWidht;
                    Device.scaleHeight = _scaleHeight > 1 ? 1 : _scaleHeight;
                };
                Device.getInstance = function () {
                    if (Device.instance == null) {
                        Device.instance = new Device();
                    }
                    return Device.instance;
                };
                /**
                 * Indicate if we should prevent scaling for device that launch the game
                 * @return
                 * @return {boolean}
                 */
                Device.prototype.isPreventScalingRequired = function () {
                    return this.isiPhoneIOS8orHigher() || this.getDeviceType() === Device.DeviceType.IPAD;
                };
                /**
                 * Return is IPAD
                 * @return
                 * @return {boolean}
                 */
                Device.prototype.isIPAD = function () {
                    return this.getDeviceType() === Device.DeviceType.IPAD;
                };
                /**
                 * Is the device is iPhone with IOS 8 or higher
                 * @return
                 * @return {boolean}
                 */
                Device.prototype.isiPhoneIOS8orHigher = function () {
                    if ((this.getDeviceType() === Device.DeviceType.IPHONE)) {
                        var firstDigitStr = this.getIphoneVersion().substring(0, 1);
                        var secondDigitStr = this.getIphoneVersion().substring(1, 2);
                        var versionStr = "";
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(secondDigitStr, ".") || isNaN(secondDigitStr)) {
                            versionStr = firstDigitStr;
                        }
                        else {
                            versionStr = firstDigitStr + secondDigitStr;
                        }
                        var version = parseInt(versionStr);
                        if (version > 7) {
                            return true;
                        }
                    }
                    return false;
                };
                Device.prototype.isiPhoneIOS10 = function () {
                    if ((this.getDeviceType() === Device.DeviceType.IPHONE)) {
                        var firstDigitStr = this.getIphoneVersion().substring(0, 1);
                        var secondDigitStr = this.getIphoneVersion().substring(1, 2);
                        var versionStr = "";
                        if (!isNaN(secondDigitStr)) {
                            versionStr = firstDigitStr + secondDigitStr;
                            var version = parseInt(versionStr);
                            if (version === 10) {
                                return true;
                            }
                            return false;
                        }
                    }
                    return false;
                };
                /**
                 * this method returns if device is iphoneX type
                 * @return {boolean}
                 */
                Device.prototype.isIphoneX = function () {
                    var isIOS = Device.getInstance().isiPhoneIOS8orHigher();
                    var pixelRatio = this.getDevicePixelRatio();
                    var screenWidth = Device.getDeviceScreenWidth() * pixelRatio;
                    var screenHeight = Device.getDeviceScreenHeight() * pixelRatio;
                    if (isIOS && screenWidth === Device.IPHONE_X_SCREENWIDTH && screenHeight === Device.IPHONE_X_SCREENHEIGHT) {
                        return true;
                    }
                    return false;
                };
                /**
                 * Is the device is iPhone with IOS 7
                 * @return
                 * @return {boolean}
                 */
                Device.prototype.isiPhoneIOS7 = function () {
                    if ((this.getDeviceType() === Device.DeviceType.IPHONE) && this.getIphoneVersion().startsWith("7")){
                        return true;
                    }
                    return false;
                };
                /**
                 * Returns the DeviceType as recognized in the user agent.
                 *
                 * @return
                 * @return {de.rm.play.Device.DeviceType}
                 * @private
                 */
                Device.identifyDeviceType = function () {
                    try {
                        var userAgent = Device.getUserAgent().toLowerCase();
                        if ((userAgent.indexOf("windows nt") != -1)) {
                            return Device.DeviceType.WINDOWS_DESKTOP;
                        }
                        if ((userAgent.indexOf("windows phone") != -1)) {
                            return Device.DeviceType.WINDOWS_PHONE;
                        }
                        if ((userAgent.indexOf("lg-ms") != -1)) {
                            return Device.DeviceType.LG;
                        }
                        if ((userAgent.indexOf("lgms") != -1)) {
                            return Device.DeviceType.NEW_LG;
                        }
                        var userAgentUC = userAgent.toUpperCase();
                        if ((userAgentUC.indexOf("KINDLE") != -1) || (userAgentUC.indexOf("SILK") != -1) || (userAgentUC.indexOf("KFTT") != -1) || (userAgentUC.indexOf("KFOT") != -1) || (userAgentUC.indexOf("KFJWA") != -1) || (userAgentUC.indexOf("KFJWI") != -1) || (userAgentUC.indexOf("KFSOWI") != -1) || (userAgentUC.indexOf("KFTHWA") != -1) || (userAgentUC.indexOf("KFTHWI") != -1) || (userAgentUC.indexOf("KFAPWA") != -1) || (userAgentUC.indexOf("KFAPWI") != -1)) {
                            return Device.DeviceType.KINDLE;
                        }
                        if (userAgent.indexOf("android") !== -1) {
                            if (userAgent.indexOf("mobile") !== -1) {
                                return Device.DeviceType.ANDROID;
                            }
                            else {
                                return Device.DeviceType.ANDROID_TABLET;
                            }
                        }
                        if (userAgent.indexOf("ipad") !== -1) {
                            return Device.DeviceType.IPAD;
                        }
                        if (userAgent.indexOf("iphone") !== -1 || userAgent.indexOf("ipod") !== -1) {
                            return Device.DeviceType.IPHONE;
                        }
                        return Device.DeviceType.WINDOWS_DESKTOP;
                    }
                    catch (e) {
                    }
                    ;
                    return Device.DeviceType.FIREFOX;
                };
                Device.isDesktop = function () {
                    if (Device.deviceType === Device.DeviceType.WINDOWS_DESKTOP) {
                        return true;
                    }
                    var userAgent = Device.getUserAgent().toLowerCase();
                    if (userAgent.indexOf("android") !== -1 || userAgent.indexOf("ipad") !== -1 || userAgent.indexOf("iphone") !== -1 || userAgent.indexOf("ipod") !== -1) {
                        return false;
                    }
                    return true;
                };
                /**
                 * Detects IE version 9+ (GWT's Useragent check is not relevant for IE11)
                 * @return
                 * @return {boolean}
                 */
                Device.isNewIE = function () {
                    var userAgent = Device.getUserAgent().toLowerCase();
                    return (userAgent.indexOf("trident") != -1);
                };
                /**
                 * Detects if it's firefox browser
                 * @return
                 * @return {boolean}
                 */
                Device.isFireFox = function () {
                    if (Device.isDesktop()) {
                        var userAgent = Device.getUserAgent().toLowerCase();
                        return (userAgent.indexOf("firefox") != -1);
                    }
                    return false;
                };
                /**
                 * Is android device
                 *
                 * @return
                 * return true if android devise
                 * @return {boolean}
                 */
                Device.isAndroid = function () {
                    return Device.deviceType === Device.DeviceType.ANDROID || Device.deviceType === Device.DeviceType.ANDROID_TABLET || Device.deviceType === Device.DeviceType.LG || Device.deviceType === Device.DeviceType.KINDLE || Device.deviceType === Device.DeviceType.NEW_LG;
                };
                /**
                 * return true if the it's a tablet by Android
                 * @return
                 * @return {boolean}
                 */
                Device.isAndroidTablet = function () {
                    return Device.deviceType === Device.DeviceType.ANDROID_TABLET;
                };
                /**
                 * returns if it's a kindle device which is in desktop mode
                 * @return
                 * @return {boolean}
                 */
                Device.isKindleDesktopMode = function () {
                    return (Device.isDesktop() && Device.deviceType === Device.DeviceType.KINDLE);
                };
                /**
                 * The function return the style dependent name according to the device type
                 * @return
                 * @return {string}
                 */
                Device.getStyleSuffix = function () {
                    if (Device.deviceType == null) {
                        Device.deviceType = Device.identifyDeviceType();
                    }
                    if (Device.isAndroid()) {
                        return Device.STYLE_SUFFIX_ANDROID;
                    }
                    else if (Device.deviceType === Device.DeviceType.IPAD || Device.deviceType === Device.DeviceType.IPOD || Device.deviceType === Device.DeviceType.IPHONE) {
                        return Device.STYLE_SUFFIX_IPHONE;
                    }
                    else if (Device.deviceType === Device.DeviceType.WINDOWS_PHONE) {
                        return Device.STYLE_SUFFIX_IE;
                    }
                    return "";
                };
                /**
                 * Returns the android version as parsed from the UserAgent.
                 *
                 * @return
                 * @return {string}
                 * @private
                 */
                Device.identifyAndroidVersion = function () {
                    var userAgent = Device.getUserAgent();
                    if (Device.isAndroid()) {
                        var startIndex = userAgent.indexOf("android ");
                        var choppedUA = userAgent.substring(startIndex + "android ".length);
                        var endIndex = choppedUA.indexOf(";");
                        return choppedUA.substring(0, endIndex);
                    }
                    return "0";
                };
                /**
                 * Returns the iPhone version as parsed from the UserAgent.
                 * @return {string} the iPhone's version or "0" in case that it's not an iPhone device
                 * @private
                 */
                Device.identifyIphoneVersion = function () {
                    if (Device.deviceType === Device.DeviceType.IPHONE) {
                        var userAgent = Device.getUserAgent();
                        var iphonePrefix = Device.IPONE_VERSION_PREFIX;
                        var startIndex = userAgent.indexOf(Device.IPONE_VERSION_PREFIX);
                        if (startIndex === -1) {
                            iphonePrefix = Device.IPONE_OS_PREFIX;
                            startIndex = userAgent.indexOf(Device.IPONE_OS_PREFIX);
                            if (startIndex === -1) {
                                return "0";
                            }
                        }
                        var choppedUA = userAgent.substring(startIndex + iphonePrefix.length);
                        var endIndex = choppedUA.indexOf(" ");
                        var version = choppedUA.substring(0, endIndex);
                        return version;
                    }
                    return "0";
                };
                /**
                 * Returns the device vendor enum
                 *
                 * @return
                 * @return {de.rm.play.Device.DeviceVendor}
                 * @private
                 */
                Device.identifyDeviceVendor = function () {
                    var userAgent = Device.getUserAgent();
                    if ((userAgent.indexOf(de.rm.play.Device.DeviceVendor["_$wrappers"][Device.DeviceVendor.WEBKIT].getNavigatorIdentifier()) != -1)) {
                        return Device.DeviceVendor.WEBKIT;
                    }
                    if ((userAgent.indexOf(de.rm.play.Device.DeviceVendor["_$wrappers"][Device.DeviceVendor.MOZILLA].getNavigatorIdentifier()) != -1)) {
                        return Device.DeviceVendor.MOZILLA;
                    }
                    return Device.DeviceVendor.DEFAULT;
                };
                /**
                 * Returns the device inner height.
                 *
                 * @return
                 * @return {number}
                 */
                Device.getDeviceInnerHeight = function () {
                    var clientHeight = Device.getWindowClientHeight();
                    if (Device.getWindowClientWidth() < clientHeight && ((Device.getInstance().getDeviceType()) === (Device.DeviceType.IPHONE))) {
                        if ((function (str, searchString, position) {
                            if (position === void 0) { position = 0; }
                            return str.substr(position, searchString.length) === searchString;
                        })(Device.getInstance().getIphoneVersion(), "6")) {
                            return clientHeight + 60;
                        }
                        else {
                            return clientHeight;
                        }
                    }
                    if (Device.deviceType !== Device.DeviceType.WINDOWS_PHONE) {
                        var innerHeight_1 = Device.getDeviceInnerHeightNative();
                        if (innerHeight_1 !== 0) {
                            return innerHeight_1;
                        }
                    }
                    return clientHeight;
                };
                /**
                 * Returns the device inner width
                 *
                 * @return
                 * @return {number}
                 */
                Device.getDeviceInnerWidth = function () {
                    if (Device.deviceType !== Device.DeviceType.WINDOWS_PHONE) {
                        var innerWidth_1 = Device.getDeviceInnerWidthtNative();
                        if (innerWidth_1 !== 0) {
                            return innerWidth_1;
                        }
                    }
                    return Device.getWindowClientWidth();
                };
                /**
                 * get the device's width while considering the orientation mode, the device's type and if it's a vertical or horizontal game
                 * @param {boolean} isCorrectOrientation
                 * @param {boolean} isHorizontalGame
                 * @return
                 * @return {number}
                 */
                Device.prototype.getDeviceWidth = function (isCorrectOrientation, isHorizontalGame, isADAMode) {
                    var isScreenOrientationHorz = Device.getDeviceInnerWidth() > Device.getDeviceInnerHeight();
                    if ((isCorrectOrientation && isHorizontalGame) || (isADAMode && isScreenOrientationHorz)) {
                        if (this.isiPhoneIOS8orHigher() || this.isiPhoneIOS7()) {
                            return Device.getDeviceScreenHeight();
                        }
                    }
                    return Device.getDeviceInnerWidth();
                };
                /**
                 * get the device's height while considering the orientation mode, the device's type and if it's a vertical or horizontal game
                 * @param {boolean} isCorrectOrientation
                 * @param {boolean} isHorizontalGame
                 * @return
                 * @return {number}
                 */
                Device.prototype.getDeviceHeight = function (isCorrectOrientation, isHorizontalGame, isADAMode) {
                    var isScreenOrientationHorz = Device.getDeviceInnerWidth() > Device.getDeviceInnerHeight();
                    if ((isCorrectOrientation && isHorizontalGame) || (isADAMode && isScreenOrientationHorz)) {
                        if (this.isiPhoneIOS8orHigher() || this.isiPhoneIOS7()) {
                            return Device.getDeviceScreenWidth();
                        }
                    }
                    return Device.getDeviceInnerHeight();
                };
                /**
                 * Returns the device DPI.
                 *
                 * @return
                 * @return {number}
                 * @private
                 */
                Device.identifyDeviceDPI = function () {
                    try {
                        return parseFloat(Device.getDeviceDPInativeNative());
                    }
                    catch (e) {
                        return 1;
                    }
                    ;
                };
                /**
                 * Perform ScrollToView.
                 * @param {*} onWindowScrollCallback
                 */
                Device.scrollToView = function (onWindowScrollCallback) {

                    // we don't hide address bar on iPad
                    if(Device.deviceType === Device.DeviceType.IPAD){
                    	onWindowScrollCallback();
                    }

                    else if (Device.isAndroid() || Device.isIE())
                    {
                        window.setTimeout(function(){
                            window.scrollTo(0, 1);
                            onWindowScrollCallback();
                        }, 100);
                    }
                    else
                    {
                        window.setTimeout(function(){
                            window.scrollTo(0, 1);
                        }, 100);
                    }
                };
                /**
                 * The function calculate the device's width. It return the width while
                 * checking if the window is in scroll mode and returns the width in pixels,
                 * if not it returns '100%'
                 *
                 * @return
                 * @return {string}
                 */
                Device.getDeviceUnitWidth = function (isUsingNewScaleMechanism) {
                    var width;
                    if (isUsingNewScaleMechanism) {
                        width = "100%";
                    }
                    else {
                        var winWidth = Device.getWindowClientWidth();
                        var scrollWidth = Device.getDocScrollWidth();
                        if (scrollWidth > winWidth) {
                            width = scrollWidth + Device.PX;
                        }
                        else {
                            width = "100%";
                        }
                    }
                    return width;
                };
                /**
                 * The function calculate the device's height. It return the height while
                 * checking if the window is in scroll mode and returns the height in
                 * pixels, if not it returns '100%'
                 *
                 * @return
                 * @return {string}
                 */
                Device.getDeviceUnitHeight = function (isUsingNewScaleMechanism) {
                    var height;
                    if (isUsingNewScaleMechanism) {
                        height = "100%";
                    }
                    else {
                        var winHeight = Device.getWindowClientHeight();
                        var scrollHeight = Device.getDocScrollHeight();
                        if (scrollHeight > winHeight) {
                            height = scrollHeight + Device.PX;
                        }
                        else {
                            height = "100%";
                        }
                    }
                    return height;
                };
                /**
                 * Returns true if device support sound.
                 * @return {boolean}
                 */
                Device.isSupportSound = function () {
                    for (var index4227 = 0; index4227 < Device.NOT_SUPPORTED_SOUNDS_LIST_$LI$().length; index4227++) {
                        var dt = Device.NOT_SUPPORTED_SOUNDS_LIST_$LI$()[index4227];
                        {
                            if (Device.deviceType === dt) {
                                return false;
                            }
                        }
                    }
                    return true;
                };
                Device.prototype.getShortcutIcon = function () {
                    return Device.createStringwithImageUrl(this.getShortcutIconURL());
                };
                Device.createStringwithImageUrl = function (url) {
                    if (url != null && !(url.length === 0) && !(url.trim().length === 0)) {
                        return "<img src=\"" + url + "\" style=\"vertical-align: middle\">";
                    }
                    return "";
                };
                Device.prototype.getShortcutIconURL = function (DownloadServerGamesCommonURL, cacheBusterURLParam) {
                    var shortcutIconURL = "";
                    var cashBusterParam = "?" + cacheBusterURLParam;
                    if (((Device.DeviceType.IPHONE) === (Device.getInstance().getDeviceType()))) {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(((Device.getInstance().getIphoneVersion()).split("\\."))[0], "6")) {
                            shortcutIconURL = DownloadServerGamesCommonURL + Device.IMAGE_URL_HOME_SCREEN_IOS6_BUTTON + Device.FILE_EXT_PNG + cashBusterParam;
                        }
                        else if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(((Device.getInstance().getIphoneVersion()).split("\\."))[0], "7")) {
                            shortcutIconURL = DownloadServerGamesCommonURL + Device.IMAGE_URL_HOME_SCREEN_IOS7_BUTTON + Device.FILE_EXT_PNG + cashBusterParam;
                        }
                        else {
                            shortcutIconURL = DownloadServerGamesCommonURL + Device.IMAGE_URL_HOME_SCREEN_IOS7_BUTTON + Device.FILE_EXT_PNG + cashBusterParam;
                        }
                    }
                    return shortcutIconURL;
                };
                /**
                 * Set the root panel width and height pixel size while considering the device type, if it's the correct orientation
                 * and if it's an horizontal game.
                 * @param {boolean} isCorrectOrientation
                 * @param {boolean} isHorizontalGame
                 */
                Device.prototype.setRootPanelPixelSize = function (isCorrectOrientation, isHorizontalGame, isADAMode) {
                    var isScreenOrientationHorz = Device.getDeviceInnerWidth() > Device.getDeviceInnerHeight();
                    if ((isCorrectOrientation && isHorizontalGame) || (isADAMode && isScreenOrientationHorz)) {
                        if (this.isiPhoneIOS8orHigher() || this.isiPhoneIOS7()) {
                            Device.setRootPixelSize(Device.getDeviceScreenHeight(), Device.getDeviceScreenWidth() + Device.SCROLL_UP_EXTRA_PIXEL_HEIGHT);
                            return;
                        }
                    }
                    Device.setRootPixelSize(Device.getDeviceInnerWidth(), Device.getDeviceInnerHeight());
                };
                Device.prototype.isShortcutPopupActive = function () {
                    return ((Device.DeviceType.IPHONE) === (Device.getInstance().getDeviceType()));
                };
                /**
                 * check if game is open through shortcut
                 * @return
                 * @return {boolean}
                 */
                Device.prototype.isOpenThroughShortcut = function () {
                    if (((Device.DeviceType.IPHONE) === (Device.getInstance().getDeviceType()))) {
                        return this.isShortcutOpenning();
                    }
                    return false;
                };
                /**
                 * Check according to the device's type if we support the scroll up panel which tell the user to scroll up
                 * in case the device's bar appears in a horizontal game
                 * @return
                 * @return {boolean}
                 */
                Device.prototype.isScrollUpPanelActive = function () {
                    return (this.isiPhoneIOS7() || this.isiPhoneIOS8orHigher());
                };
                Device.prototype.getDeviceType = function () {
                    return Device.deviceType;
                };
                Device.prototype.getAndroidVersion = function () {
                    return this.androidVersion;
                };
                Device.prototype.getIphoneVersion = function () {
                    return this.iphoneVersion;
                };
                Device.prototype.getDeviceVendor = function () {
                    return this.deviceVendor;
                };
                Device.prototype.getDeviceDPI = function () {
                    return this.deviceDPI;
                };
                Device.prototype.isForceRefreshCanvasRequired = function () {
                    return this.__isForceRefreshCanvasRequired;
                };
                /**
                 * Check if game opened in chrome on IOS
                 * @return
                 * @return {boolean}
                 */
                Device.prototype.isChromeIOS = function () {
                    return this.isiPhoneIOS8orHigher() && (Device.getUserAgent().toLowerCase().indexOf("crios") != -1);
                };
                /**
                 * Additional data
                 * @return {boolean}
                 */
                Device.isOpera = function () {
                    Device.doInit();
                    return Device.fisOpera;
                };
                Device.isIE = function () {
                    Device.doInit();
                    return Device.fisIE;
                };
                Device.isIE6 = function () {
                    Device.doInit();
                    return Device.fisIE6;
                };
                Device.isIE7 = function () {
                    Device.doInit();
                    return Device.fisIE7;
                };
                Device.isIE8 = function () {
                    Device.doInit();
                    return Device.fisIE8;
                };
                Device.isChrome = function () {
                    Device.doInit();
                    return Device.fisChrome;
                };
                Device.isSafari = function () {
                    Device.doInit();
                    return Device.fisSafari;
                };
                Device.doInit = function () {
                    if (!Device.inited) {
                        Device.inited = true;
                        var userAgent = Device.getUserAgent();
                        Device.fisOpera = userAgent.indexOf("opera") > -1;
                        Device.fisChrome = userAgent.indexOf("chrome") > -1;
                        Device.fisSafari = !Device.fisChrome && (userAgent.indexOf("webkit") > -1 || userAgent.indexOf("khtml") > -1);
                        Device.fisIE = !Device.fisOpera && userAgent.indexOf("msie") > -1;
                        Device.fisIE7 = !Device.fisOpera && userAgent.indexOf("msie 7") > -1;
                        Device.fisIE8 = !Device.fisOpera && userAgent.indexOf("msie 8") > -1;
                        Device.fisIE6 = Device.fisIE && !Device.fisIE7 && !Device.fisIE8;
                    }
                };

                /**
                 * should be native
                 * @return {string}
                 * @private
                 */
                Device.getDeviceDPInativeNative = function () {
                    return window.devicePixelRatio;
                };
                Device.getDeviceInnerHeightNative = function () {
                    return window.innerHeight;
                };
                Device.getDeviceInnerWidthtNative = function () {
                    return window.innerWidth;
                };
                /**
                 * return the device's screen width regardless of the current device orientation
                 * @return
                 * @return {number}
                 */
                Device.getDeviceScreenWidth = function () {
                    return window.screen.width;
                };
                /**
                 * return the device's screen height regardless of the current device orientation
                 * @return
                 * @return {number}
                 */
                Device.getDeviceScreenHeight = function () {
                    return window.screen.height;
                };
                /**
                 * returns the devices orientatio value
                 * @return {number}
                 */
                Device.prototype.getDeviceOrientation = function () {
                    return window.orientation;
                };
                /**
                 * returns the devices pixel ration
                 * @return {number}
                 * @private
                 */
                Device.prototype.getDevicePixelRatio = function () {
                    return window.devicePixelRatio;
                };
                /**
                 *
                 * returns if shortcut webview
                 * @return {boolean}
                 * @private
                 */
                Device.prototype.isShortcutOpenning = function () {
                    return window.navigator.standalone;
                };
                /**
                 * additional functions
                 * @return {number}
                 * @private
                 */
                Device.getWindowClientHeight = function () {
                    var docElem = Device.getDocumentElement();
                    return docElem.clientHeight;
                };
                Device.getWindowClientWidth = function () {
                    var docElem = Device.getDocumentElement();
                    return docElem.clientWidth;
                };
                Device.setRootPixelSize = function (width, height) {
                    document.body.style.width = width + 'px';
                    document.body.style.height = height + 'px';
                };
                Device.getDocScrollHeight = function () {
                    var docElem = Device.getDocumentElement();
                    return docElem.scrollHeight || 0;
                };
                Device.getDocScrollWidth = function () {
                    var docElem = Device.getDocumentElement();
                    return docElem.scrollWidth || 0;
                };
                Device.getUserAgent = function () {
                    return window.navigator.userAgent.toLowerCase();
                };
                return Device;
            }());

            Device.getDocumentElement = function(){
                if(document.compatMode === "CSS1Compat"){
                    return document.documentElement;
                }
                document.body;
            }

            Device.instance = null;
            Device.deviceType = null;
            Device.scaleWidth = 0;
            Device.scaleHeight = 0;
            Device.transformScaleWidth = 0;
            Device.transformScaleHeight = 0;
            /**
             * Min scale percentage
             */
            Device.MIN_SCALE_PRECENTAGE = 0.35;
            /**
             * Max ratio (scaleWidth / heightScale) breakage
             */
            Device.MAX_RATIO_BREAKAGE = 100.0 / 108;
            Device.IPONE_VERSION_PREFIX = "version/";
            Device.IPONE_OS_PREFIX = "iphone os ";
            /**
             * Style Dependent Name for iPhone
             */
            Device.STYLE_SUFFIX_IPHONE = "Webkit";
            /**
             * Style Dependent Name for Android
             */
            Device.STYLE_SUFFIX_ANDROID = "Webkit";
            /**
             * Style Dependent Name for Window Phone
             */
            Device.STYLE_SUFFIX_IE = "IE";
            Device.SPECIAL_ASPECT_RATIO_ANDROID_KEYBOARD_ON = 1.4;
            /**
             * Special scale for samsung tab 2.
             * [25/8/14] - The special scale was 1.1 but now it looks it's not enough, should be 1 (no scale)
             */
            Device.ANDROID_TABLET_SPECIAL_HEIGHT_SCALE = 1;
            Device.SCROLL_UP_EXTRA_PIXEL_HEIGHT = 20;
            Device.PX = "px";
            Device.IMAGE_URL_HOME_SCREEN_IOS6_BUTTON = "/ShortImg_iOS6";
            Device.IMAGE_URL_HOME_SCREEN_IOS7_BUTTON = "/ShortImg_iOS7";
            Device.FILE_EXT_PNG = ".png";
            Device.IPHONE_X_SCREENWIDTH = 1125;
            Device.IPHONE_X_SCREENHEIGHT = 2436;
            Device.inited = false;
            Device.fisOpera = false;
            Device.fisIE = false;
            Device.fisIE6 = false;
            Device.fisIE7 = false;
            Device.fisIE8 = false;
            Device.fisChrome = false;
            Device.fisSafari = false;
            play.Device = Device;
            Device["__class"] = "de.rm.play.Device";
            (function (Device) {
                var DeviceVendor;
                (function (DeviceVendor) {
                    DeviceVendor[DeviceVendor["WEBKIT"] = 0] = "WEBKIT";
                    DeviceVendor[DeviceVendor["MOZILLA"] = 1] = "MOZILLA";
                    DeviceVendor[DeviceVendor["DEFAULT"] = 2] = "DEFAULT";
                })(DeviceVendor = Device.DeviceVendor || (Device.DeviceVendor = {}));
                /** @ignore */
                var DeviceVendor_$WRAPPER = (function () {
                    function DeviceVendor_$WRAPPER(_$ordinal, _$name, navigatorIdentifier, CSSPrefix) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.navigatorIdentifier === undefined)
                            this.navigatorIdentifier = null;
                        if (this.CSSPrefix === undefined)
                            this.CSSPrefix = null;
                        this.navigatorIdentifier = navigatorIdentifier;
                        this.CSSPrefix = CSSPrefix;
                    }
                    DeviceVendor_$WRAPPER.prototype.getNavigatorIdentifier = function () {
                        return this.navigatorIdentifier;
                    };
                    DeviceVendor_$WRAPPER.prototype.getCSSPrefix = function () {
                        return this.CSSPrefix;
                    };
                    DeviceVendor_$WRAPPER.prototype.name = function () { return this._$name; };
                    DeviceVendor_$WRAPPER.prototype.ordinal = function () { return this._$ordinal; };
                    return DeviceVendor_$WRAPPER;
                }());
                Device.DeviceVendor_$WRAPPER = DeviceVendor_$WRAPPER;
                DeviceVendor["__class"] = "de.rm.play.Device.DeviceVendor";
                DeviceVendor["__interfaces"] = ["java.lang.Comparable", "java.io.Serializable"];
                DeviceVendor["_$wrappers"] = [new DeviceVendor_$WRAPPER(0, "WEBKIT", "webkit", "webkit"), new DeviceVendor_$WRAPPER(1, "MOZILLA", "mozilla", "moz"), new DeviceVendor_$WRAPPER(2, "DEFAULT", "other", "")];
                /**
                 * Device Types
                 *
                 * @author yanivb
                 *
                 * @enum
                 * @property {de.rm.play.Device.DeviceType} ANDROID
                 * @property {de.rm.play.Device.DeviceType} ANDROID_TABLET
                 * @property {de.rm.play.Device.DeviceType} IPHONE
                 * @property {de.rm.play.Device.DeviceType} IPAD
                 * @property {de.rm.play.Device.DeviceType} IPOD
                 * @property {de.rm.play.Device.DeviceType} FIREFOX
                 * @property {de.rm.play.Device.DeviceType} WINDOWS_DESKTOP
                 * @property {de.rm.play.Device.DeviceType} WINDOWS_PHONE
                 * @property {de.rm.play.Device.DeviceType} LG
                 * @property {de.rm.play.Device.DeviceType} NEW_LG
                 * @property {de.rm.play.Device.DeviceType} KINDLE
                 * @class
                 */
                var DeviceType;
                (function (DeviceType) {
                    DeviceType[DeviceType["ANDROID"] = 0] = "ANDROID";
                    DeviceType[DeviceType["ANDROID_TABLET"] = 1] = "ANDROID_TABLET";
                    DeviceType[DeviceType["IPHONE"] = 2] = "IPHONE";
                    DeviceType[DeviceType["IPAD"] = 3] = "IPAD";
                    DeviceType[DeviceType["IPOD"] = 4] = "IPOD";
                    DeviceType[DeviceType["FIREFOX"] = 5] = "FIREFOX";
                    DeviceType[DeviceType["WINDOWS_DESKTOP"] = 6] = "WINDOWS_DESKTOP";
                    DeviceType[DeviceType["WINDOWS_PHONE"] = 7] = "WINDOWS_PHONE";
                    DeviceType[DeviceType["LG"] = 8] = "LG";
                    DeviceType[DeviceType["NEW_LG"] = 9] = "NEW_LG";
                    DeviceType[DeviceType["KINDLE"] = 10] = "KINDLE";
                })(DeviceType = Device.DeviceType || (Device.DeviceType = {}));
            })(Device = play.Device || (play.Device = {}));
        })(play = rm.play || (rm.play = {}));
    })(rm = de.rm || (de.rm = {}));



})(de || (de = {}));
de.rm.play.Device.NOT_SUPPORTED_SOUNDS_LIST_$LI$();
var Device = de.rm.play.Device;
