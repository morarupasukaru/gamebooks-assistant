// TODO split into two file, one "\webapi\data.js" with localStorage / sessionStorage abstraction, one "application\application-data.js" with get/set of application specific datas
/**
 * Initialise the functions to access data of the application and be published in the global variable "_.data"
 */
(function(globals){
	// no dependency 
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.data = __.data || {};
    var api = __.data;
	
    var testStorageAvailable = function(storage) {
        try {
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch(e) {
            return false;
        }
    };

    var lazyInitialisation = function() {
        if (api.isWebStorageAvailable === undefined) {
			try {
				api.isWebStorageAvailable = testStorageAvailable(globals.sessionStorage) && testStorageAvailable(globals.localStorage);
			} catch(e) {
				api.isWebStorageAvailable = false;
			}
        }
	};
	
    var getStorage = function(session) {
		lazyInitialisation();
		var storage;
		if (!!session) {
			storage = sessionStorage;
		} else {
			storage = localStorage;
		}
		return storage;
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
    var get = function(key, fromSessionStorage) {
		var storage = getStorage(fromSessionStorage);
		var value = storage.getItem(key);
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
	
	api.getAllData = function(fromSessionStorage) {
		var storage = getStorage(fromSessionStorage);
		return copyData(storage);
	};

    /**
     * Save some data with given key in the localstorage
     */
    var set = function(key, value, fromSessionStorage) {
		var storage = getStorage(fromSessionStorage);
		if (typeof value === 'string') {
			storage.setItem(key, value);
		} else {
			storage.setItem(key, JSON.stringify(value));
		}
    };
	
    var remove = function(key, fromSessionStorage) {
		var storage = getStorage(fromSessionStorage);
		storage.removeItem(key);
    };
	
	var savedLanguageKey = 'savedLanguage';
	api.getLanguage = function() {
		return get(savedLanguageKey);
	};
	
	api.setLanguage = function(language) {
		set(savedLanguageKey, language);
	};
	
	var gamebooksListKey = 'gamebooksList';
	api.getGamebooksList = function() {
		return get(gamebooksListKey);
	};
	
	api.setGamebooksList = function(gamebooksList) {
		set(gamebooksListKey, gamebooksList);
	};
	
	var debugEnabledKey = 'debugEnabled';
	api.isDebugEnabled = function() {
		return get(debugEnabledKey);
	};
	
	api.setDebugEnabled = function(debugEnabled) {
		set(debugEnabledKey, debugEnabled);
	};
	
	var currentScreenIdKey = 'currentScreenId';
	api.getCurrentScreenId = function() {
		return get(currentScreenIdKey);
	};
	
	api.setCurrentScreenId = function(screen) {
		set(currentScreenIdKey, screen);
	};
	
	var javascriptErrorsKey = 'javascript-errors';
	api.getJavascriptErrors = function() {
		var errors = get(javascriptErrorsKey, true);
		if (!!errors) {
			return errors;
		} else {
			return [];
		}
	};
	
	api.addJavascriptError = function(javascriptError) {
		var errors = api.getJavascriptErrors(true);
		var errorMessage = !!javascriptError && !!javascriptError.error ?  javascriptError.error.toString() : 'error without detail';
		errors.push({ 
			date: new Date(),
			url: globals.location.href,
			error: errorMessage 
		});
		set(javascriptErrorsKey, errors, true);
	};
	
	api.clearJavascriptErrors = function() {
		remove(javascriptErrorsKey, true);
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
		initialized = true;
    };

    // TODO load json data with an http get call
    // TODO get data from localstorage with given id
    // TODO save data to localstorage with given id
    // TODO delete data from localstorage
    // TODO retrieve a list of localstorage ids with a given prefix
    // TODO catch error if space in localstorage is no more available
} (this));