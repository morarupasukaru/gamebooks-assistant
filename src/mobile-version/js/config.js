/**
 * Initialise general application keys
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
    globals._.config = globals._.config || {};
    var api = globals._.config;

    api.storageKeys = {
        savedLanguage : 'savedLanguage'
    };

    api.languages = {
        default : 'en',
        supported : ['fr', 'en']
    };

    api.exceptions = {
        en : {
            "error-localstorage-unavailable" : "LocalStorage is required by the application but is unavailable",
            "modal-title-error" : "ERROR"
        },
        fr : {
            "error-localstorage-unavailable" : "LocalStorage est requis à l'application mais n'est pas disponible",
            "modal-title-error" : "ERREUR"
        }
    };

} (this));