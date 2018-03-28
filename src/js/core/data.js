/**
 * Initialise the functions to access data of the application and be published in the global variable "_.data"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.data = __.data || {};
    var api = __.data;
	
	var fallbackLocalstorage = {
	};
	
    var testLocalStorageAvailable = function() {
        try {
            var storage = globals.localStorage;
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch(e) {
            return false;
        }
    };

    var lazyInitialisation = function() {
        if (api.isLocalStorageAvailable === undefined) {
            api.isLocalStorageAvailable = testLocalStorageAvailable();
        }
    };

	/**
	 * See "broofa" solution of uuid generator: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
	 */
	api.uuid = function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			/*jslint bitwise: true */
			var r = Math.random() * 16 | 0;
			var v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	};
	
    /**
     * Retrieve a data with given key in the localstorage
     */
    var get = function(key) {
		lazyInitialisation();
        if (!api.isLocalStorageAvailable) {
            return fallbackLocalstorage[key];
        } else {
			var value = localStorage.getItem(key);
			if (value === null || value === undefined || value === "undefined") {
				return null;
			} else {
				try {
					return JSON.parse(value);
				} catch (e) {
					// cannot be parsed, must be a string
					return value;
				}
			}
		}
    };
	
	var copyData = function(data) {
		var dump = {};
		var keys = Object.keys(data);
		keys = keys.sort();
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			dump[key] = get(key);
		}
		return dump;
	};
	
	api.getAllData = function() {
		lazyInitialisation();
        if (!api.isLocalStorageAvailable) {
            return copyData(fallbackLocalstorage);
		} else {
            return copyData(localStorage);
		}
	};

    /**
     * Save some data with given key in the localstorage
     */
    var set = function(key, value) {
		lazyInitialisation();
        if (!api.isLocalStorageAvailable) {
            fallbackLocalstorage[key] = value;
        } else {
			if (typeof value === 'string') {
				localStorage.setItem(key, value);
			} else {
				localStorage.setItem(key, JSON.stringify(value));
			}
		}
    };
	
	api.getLanguage = function() {
		return get(__.config.storageKeys.savedLanguage);
	};
	
	api.setLanguage = function(language) {
		set(__.config.storageKeys.savedLanguage, language);
	};
	
	api.getGamebooksList = function() {
		return get(__.config.storageKeys.gamebooksList);
	};
	
	api.setGamebooksList = function(gamebooksList) {
		set(__.config.storageKeys.gamebooksList, gamebooksList);
	};
	
	api.isDebugEnabled = function() {
		return get(__.config.storageKeys.debugEnabled);
	};
	
	api.setDebugEnabled = function(debugEnabled) {
		set(__.config.storageKeys.debugEnabled, debugEnabled);
	};
	
	api.getCurrentScreenId = function() {
		return get(__.config.storageKeys.currentScreenId);
	};
	
	api.setCurrentScreenId = function(screen) {
		set(__.config.storageKeys.currentScreenId, screen);
	};

    /**
     * Module initialisation method
     */
	var initialized = false;
    api.initialize = function() {
		if (!!initialized) {
			return ;
		}
        lazyInitialisation();
        if (!api.isLocalStorageAvailable) {
            __.msg.error(__.config.texts.errorLocalstorageUnavailable);
        }
		initialized = true;
    };

    // TODO load json data with an http get call
    // TODO get data from localstorage with given id
    // TODO save data to localstorage with given id
    // TODO delete data from localstorage
    // TODO retrieve a list of localstorage ids with a given prefix
    // TODO catch error if space in localstorage is no more available
    // TODO test performance of localstorage (is it better to store all gamebook data in a single variable or several, ones per paragraph?)

} (this));