/**
 * Initialise the functions to access information about current url into the global variable "_.route"
 */
(function(globals){
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
	
	var getFirstPathFromUrlWithHash = function(url) {
        var result = null;
        if (!!url && url.indexOf('#') !== -1) {
			if (url.startsWith('#')) {
				result = url.substring(1);
			} else {
				result = url.split('#')[1];
			}
			
			if (result.indexOf('?') !== -1) {
				if (result.startsWith('?')) {
					result = null;
				} else {
					result = result.split('?')[0];
				}
			}
			
			if (!!result && result.indexOf('/') !== -1) {
				if (result.startsWith('/')) {
					result = null;
				} else {
					result = result.split('/')[0];
				}
			}
        }
        return result;
	};
	
	var getFirstPathFromHash = function() {
        var result = null;
        if (!!globals.location && !!globals.location.hash) {
			result = getFirstPathFromUrlWithHash(globals.location.hash);
        }
        return result;
	};
	

    var changeElementVisibleOnlyToAdmin = function(adminEnabled) {
		var cssSelector = ".only-visible-by-admin";
        if (!!adminEnabled) {
			__.dom.displayAllByCssSelector(cssSelector);
        } else {
			__.dom.hideAllByCssSelector(cssSelector);
        }
    };
    
    var computeAdminMode = function(forceRefresh) {
        var keyValues = getSearchParams();
        var keys = Object.keys(keyValues);
		var wasAdminEnabled = !!__.data.isAdminEnabled();
		var adminEnabled;
		if (keys.indexOf('adminEnabled') !== -1) {
			adminEnabled = true;
			__.data.setAdminEnabled(adminEnabled);
		} else if (keys.indexOf('adminDisabled') !== -1) {
			adminEnabled = false;
			__.data.setAdminEnabled(adminEnabled);
		}
		if (!!forceRefresh || adminEnabled !== undefined) {
			if (adminEnabled !== undefined && wasAdminEnabled !== adminEnabled) {
				changeElementVisibleOnlyToAdmin(!!adminEnabled);
			} else {
				changeElementVisibleOnlyToAdmin(wasAdminEnabled);
			}
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
					screenUrl = homeUrl + screen.routeUrl;
					break;
				}
			}
		}
		return screenUrl;
	};
	
	var getScreenFromHash = function(firstPathFromHash) {
		if (!!__.screens) {
			for (var i = 0; i < __.screens.length; i++) {
				var screen = __.screens[i];
				if (screen.routeUrl === firstPathFromHash) {
					return screen;
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
	
	var pageNotFound = getScreenFromHash('404');
    
    var computeScreen = function() {
		var screen = getScreenFromHash(getFirstPathFromHash());
		if (!screen) {
			screen = pageNotFound;
		}
		var currentScreenId = __.data.getCurrentScreenId();
		var currentScreen;
		if (!!currentScreenId) {
			currentScreen = getScreenFromId(currentScreenId);
		}
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
	
	var computeHashChange = function(forceRefresh) {
		computeAdminMode(forceRefresh);
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