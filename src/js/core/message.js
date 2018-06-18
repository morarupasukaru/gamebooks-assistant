/**
 * Initialise the functions to inform to the user messages and make it available into the global variable "_.msg"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
	
	// TODO rename message to exception-handling
	// TODO add stacktrace to saved data in sessionStorage

    /**
     * Exception handling: uncatched exception are displayed in a modal view
     */
    if (!!globals.addEventListener) {
        globals.addEventListener('error', function (e) {
			__.data.addJavascriptError(e);
        });
    }
} (this));