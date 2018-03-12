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
    
    var computeAdminMode = function() {
        var keyValues = getSearchParams();
        var keys = Object.keys(keyValues);
		if (keys.indexOf('adminEnabled') !== -1) {
			__.data.setAdminEnabled(true);
		} else if (keys.indexOf('adminDisabled') !== -1) {
			__.data.setAdminEnabled(false);
		}
    };
	
	var initializeScreen = function(screen) {
		if (!!__.screens[screen] && !!__.screens[screen].initialize) {
			__.screens[screen].initialize();
		}
	};
	
	var displayScreen = function(screen) {
		if (!!__.screens[screen] && !!__.screens[screen].display) {
			__.screens[screen].display();
		}
	};
	
	var hideScreen = function(screen) {
		if (!!__.screens[screen] && !!__.screens[screen].hide) {
			__.screens[screen].hide();
		}
	};
	
	var initializeAndDisplayScreen = function(screen) {
		initializeScreen(screen);
		displayScreen(screen);
	};
    
    var computeScreen = function() {
		var firstPathFromHash = getFirstPathFromHash();
		var screen = __.config.urlOfScreens[firstPathFromHash];
		if (!screen) {
			screen = __.config.screens.pageNotFound;
		}
		var currentScreen = __.data.getCurrentScreen();
		if (!!currentScreen && screen !== currentScreen) {
			initializeScreen(screen);
			hideScreen(currentScreen);
			displayScreen(screen);
		} else {
			initializeAndDisplayScreen(screen);
		}
		__.data.setCurrentScreen(screen);
    };
	
	var computeHashChange = function() {
		computeAdminMode();
		computeScreen();
	};
    
    globals.onhashchange = function() {
        computeHashChange();
        if (!!api.onhashchange) {
            api.onhashchange();
        }
    };

    /**
     * Module initialisation method
     */
    api.initialize = function() {
		computeHashChange();
    };
} (this));