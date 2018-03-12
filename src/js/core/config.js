/**
 * Initialise general application keys
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.config = __.config || {};
    var api = __.config;

    api.storageKeys = {
        savedLanguage : 'savedLanguage',
		gamebooksList : 'gamebooksList',
		adminEnabled : 'adminEnabled',
		currentScreen: 'currentScreen'
    };

    api.languages = {
        default : 'en',
        supported : ['fr', 'en']
    };
	
	api.screens = {
		homepage: 'homepage',
		gamebooks: 'gamebooks',
		pageNotFound: 'pageNotFound'
	};
	
	api.urlOfScreens = {
		null: api.screens.homepage,
		'gamebooks': api.screens.gamebooks,
		'404': api.screens.pageNotFound
	};

    api.texts = {
        errorFeatureNotImplemented : "error-feature-not-implemented",
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

    api.translatedTexts.en[api.texts.errorLocalstorageUnavailable] = "LocalStorage is required by the application but is unavailable.";
    api.translatedTexts.fr[api.texts.errorLocalstorageUnavailable] = "LocalStorage est requis à l'application mais n'est pas disponible.";
    api.translatedTexts.en[api.texts.errorFeatureNotImplemented] = "Functionality is not yet implemented.";
    api.translatedTexts.fr[api.texts.errorFeatureNotImplemented] = "La fonctionnalité n'est pas encore implémentée.";
    api.translatedTexts.en[api.texts.modalTitleError] = "ERROR";
    api.translatedTexts.fr[api.texts.modalTitleError] = "ERREUR";
} (this));