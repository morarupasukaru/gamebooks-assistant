/**
 * Initialise the functions to inform to the user messages and make it available into the global variable "_.msg"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
    globals._.msg = globals._.msg || {};

    var api = globals._.msg;

    api._displayMessage = function(severity, message) {
        // TODO i18n of message
        // TODO modal or other mechanismus
        alert(severity + ': ' + message);
    };

    /**
     * Display an error message
     */
    api.error = function(message) {
        this._displayMessage('error', message);
    };

} (this));