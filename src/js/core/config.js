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

    api.texts = {
        errorLocalstorageUnavailable : "error-localstorage-unavailable",
        modalTitlePrefix : "modal-title-",
        modalTitleError : "modal-title-error",
        fr : 'Francais',
        en : 'English'
    };

    api.translatedTexts = {
        en: {},
        fr: {}
    };

    api.translatedTexts.en[api.texts.errorLocalstorageUnavailable] = "LocalStorage is required by the application but is unavailable";
    api.translatedTexts.fr[api.texts.errorLocalstorageUnavailable] = "LocalStorage est requis à l'application mais n'est pas disponible";
    api.translatedTexts.en[api.texts.modalTitleError] = "ERROR";
    api.translatedTexts.fr[api.texts.modalTitleError] = "ERREUR";
    api.translatedTexts.fr[api.texts.modalTitleError] = "ERREUR";
} (this));