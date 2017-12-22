/**
 * Initialise the functions to access data of the application and be published in the global variable "_.data"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
    globals._.data = globals._.data || {};
    var api = globals._.data;

    function testLocalStorageAvailable() {
        try {
            let storage = window['localStorage'];
            let x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch(e) {
            return false;
        }
    };
    api.isLocalStorageAvailable = testLocalStorageAvailable();
    if (!api.isLocalStorageAvailable) {
        _.msg.error('LocalStorage is required by the application but is unavailable');
    }

    api.get = function(key) {
        if (!this.isLocalStorageAvailable) {
            return null;
        }
        var value = localStorage.getItem(key);
        if (value === null || value === "undefined" || value === undefined) {
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

    api.save = function(key, value) {
        if (!this.isLocalStorageAvailable) {
            return ;
        }
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    var applicationDataPrefix = 'gamebooks-assistant';
    api.ids = {
        language : applicationDataPrefix + '.language'
    };

    // TODO load json data with an http get call
    // TODO get data from localstorage with given id
    // TODO save data to localstorage with given id
    // TODO delete data from localstorage
    // TODO retrieve a list of localstorage ids with a given prefix
    // TODO catch error if space in localstorage is no more available

    // TODO test performance of localstorage (is it better to store all gamebook data in a single variable or several, ones per paragraph?)

} (this));