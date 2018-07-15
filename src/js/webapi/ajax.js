/**
 * Initialise the functions to load asynchronous data.
 */
(function(globals){
	// no dependency 
    "use strict";
	globals.gamebooksAssistant = globals.gamebooksAssistant || {};
	globals.gamebooksAssistant.webapi = globals.gamebooksAssistant.webapi || {};
	globals.gamebooksAssistant.webapi.ajax = globals.gamebooksAssistant.webapi.ajax || {};
	
	var api = globals.gamebooksAssistant.webapi.ajax;
	var READY_STATUS_COMPLETE = 4;
	var HTTP_STATUS_OK = 200;
	
	/**
	 * load a json file from given {url}; {callback} function will be called with loaded json as first parameter
	 */
    api.loadJson = function(url, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState === READY_STATUS_COMPLETE && this.status === HTTP_STATUS_OK) {
                var json = JSON.parse(this.responseText);
                callback(json);
            }
        };
        request.open("GET", url, true);
        request.send();
    };
} (this));


