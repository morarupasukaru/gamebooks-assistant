// TODO move to ..\application
/**
 * Initialise the functions to access information about current url into the global variable "_.route"
 */
(function(globals){
	// depends on dom.js, data.js, "screens"
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.route = __.route || {};
    var api = __.route;
	
    var extractKeyValues = function(search) {
        var result = {};
        if (!!search) {
            if (search.startsWith('?')) {
                search = search.substr(1, search.length);
            }
            var searchParams = search.split("&");
            if (!!searchParams) {
                var i;
                for (i = 0; i < searchParams.length; i++) {
                    var keyValue = searchParams[i];
                    var parts = keyValue.split("=");
                    var key = parts[0];
                    var value = null;
                    if (parts.length > 1) {
                        value = parts[1];
                    }
                    result[key] = value;
                }
            }
        }
        return result;
    };
    
    var getSearchParamsCommon = function() {
        var result = {};
        if (!!globals.location && !!globals.location.search) {
            result = extractKeyValues(globals.location.search);
        }
        return result;
    };
    
    var getSearchParamsFromHash = function() {
        var result = {};
        if (!!globals.location && !!globals.location.hash) {
            var hash = globals.location.hash;
            var parts = hash.split('?');
            if (parts.length > 1) {
                result = extractKeyValues(parts[1]);
            }
        }
        return result;
    };
    
    var merge = function(obj, src) {
        Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
        return obj;
    };
    
    var getSearchParams = function() {
        var keyValuesCommon = getSearchParamsCommon();
        var keyValuesFromHash = getSearchParamsFromHash();
        return merge(keyValuesCommon, keyValuesFromHash);
    };
	
	var getHashPathsFromUrl = function(url) {
        var result = [];
        if (!!url && url.indexOf('#') !== -1) {
			var urlAfterHash;
			if (url.startsWith('#')) {
				urlAfterHash = url.substring(1);
			} else {
				urlAfterHash = url.split('#')[1];
			}
			
			var urlAfterHashWithQueryParameters;
			if (urlAfterHash.indexOf('?') !== -1) {
				if (urlAfterHash.startsWith('?')) {
					urlAfterHashWithQueryParameters = null;
				} else {
					urlAfterHashWithQueryParameters = urlAfterHash.split('?')[0];
				}
			} else {
				urlAfterHashWithQueryParameters = urlAfterHash;
			}
			
			if (!!urlAfterHashWithQueryParameters) {
				result = urlAfterHashWithQueryParameters.split('/');
			}
        }
        return result;
	};
	
	var getPathsFromHash = function() {
        var result = [];
        if (!!globals.location && !!globals.location.hash) {
			result = getHashPathsFromUrl(globals.location.hash);
        }
        return result;
	};
	

    var changeElementVisibleOnlyToDebug = function(debugEnabled) {
		var cssSelector = ".only-visible-by-debug";
        if (!!debugEnabled) {
			__.dom.displayAllByCssSelector(cssSelector);
        } else {
			__.dom.hideAllByCssSelector(cssSelector);
        }
    };
    
    var computeDebugMode = function(forceRefresh) {
        var keyValues = getSearchParams();
        var keys = Object.keys(keyValues);
		var wasDebugEnabled = !!__.data.isDebugEnabled();
		var debugEnabled;
		if (keys.indexOf('debugEnabled') !== -1) {
			debugEnabled = true;
			__.data.setDebugEnabled(debugEnabled);
		} else if (keys.indexOf('debugDisabled') !== -1) {
			debugEnabled = false;
			__.data.setDebugEnabled(debugEnabled);
		}
		if (!!forceRefresh || debugEnabled !== undefined) {
			if (debugEnabled !== undefined && wasDebugEnabled !== debugEnabled) {
				changeElementVisibleOnlyToDebug(!!debugEnabled);
			} else {
				changeElementVisibleOnlyToDebug(wasDebugEnabled);
			}
		}
    };
    
	/**
	 * Throw an exception if url contains an "error" parameter; used to test bugReport.
	 */
    var throwExceptionOnRequest = function() {
        var keyValues = getSearchParams();
        var keys = Object.keys(keyValues);
		var debugEnabled = !!__.data.isDebugEnabled();
		if (!!debugEnabled && keys.indexOf('error') !== -1) {
			throw 'error_' + __.data.uuid();
		}
    };
	
	var baseUrlPrefix = {};
	baseUrlPrefix['http://morarupasukaru.github.io'] = '/gamebooks-assistant#';
	
	api.getHomeUrl = function() {
		var host = globals.location.host;
		var homeUrl = baseUrlPrefix[host];
		if (!homeUrl) {
			homeUrl = '#';
		}
		return homeUrl;
	};
	
	api.getScreenUrl = function(screenId) {
		var screenUrl;
		if (!!__.screens) {
			var homeUrl = api.getHomeUrl();
			for (var i = 0; i < __.screens.length; i++) {
				var screen = __.screens[i];
				if (screen.id === screenId) {
					screenUrl = homeUrl + screen.routeUrl.join('/');
					break;
				}
			}
		}
		return screenUrl;
	};
	
	var getScreenFromHash = function(partsOfHashWithoutQueryParameters) {
		if (!!__.screens) {
			for (var i = 0; i < __.screens.length; i++) {
				var screen = __.screens[i];
				var screenRouteUrlParts = screen.routeUrl;
				if (!Array.isArray(screenRouteUrlParts)) {
					screenRouteUrlParts = [ screenRouteUrlParts ];
				}
				if (screenRouteUrlParts.length === partsOfHashWithoutQueryParameters.length) {
					var sameParts = true;
					for (var j = 0; j < screenRouteUrlParts.length; j++) {
						if (screenRouteUrlParts[j] !== partsOfHashWithoutQueryParameters[j]) {
							sameParts = false;
							break;
						}
					}
					if (sameParts) {
						return screen;
					}
				}
			}
		}
		return null;
	};
	
	var getScreenFromId = function(screenId) {
		if (!!__.screens) {
			for (var i = 0; i < __.screens.length; i++) {
				var screen = __.screens[i];
				if (screen.id === screenId) {
					return screen;
				}
			}
		}
		return null;
	};
	
	api.getCurrentScreen = function() {
		var currentScreenId = __.data.getCurrentScreenId();
		var currentScreen;
		if (!!currentScreenId) {
			currentScreen = getScreenFromId(currentScreenId);
		}
		return currentScreen;
	};
	
	var pageNotFound = getScreenFromHash(['404']);
	
	api.setCurrentScreen = function(screen) {
		var currentScreen = api.getCurrentScreen();
		if (!!currentScreen && screen.id !== currentScreen.id) {
			screen.initialize();
			currentScreen.hide();
			screen.display();
		} else {
			screen.initialize();
			screen.display();
		}
		__.data.setCurrentScreenId(screen.id);
	};
	
	api.setCurrentScreenWithId = function(screenId) {
		var screen = getScreenFromId(screenId);
		if (!!screen) {
			window.location.assign(__.route.getScreenUrl(screenId));
			api.setCurrentScreen(screen);
		}
	};
    
    var computeScreen = function() {
		var screen = getScreenFromHash(getPathsFromHash());
		if (!screen) {
			screen = pageNotFound;
		}
		api.setCurrentScreen(screen);
    };
	
	var computeHashChange = function(forceRefresh) {
		computeDebugMode(forceRefresh);
		throwExceptionOnRequest();
		computeScreen();
	};
    
    globals.onhashchange = function() {
        computeHashChange();
    };

    /**
     * Module initialisation method
     */
	var initialized = false;
    api.initialize = function() {
		if (!!initialized) {
			return ;
		}
		computeHashChange(true);
		initialized = true;
    };
} (this));