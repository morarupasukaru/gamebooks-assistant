/**
 * Initialise general application keys
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.config = __.config || {};
    var api = __.config;

    api.languages = {
		// TODO this variable will be removed as soon as i18n will be retrieved in external json file
        default : 'en',
        supported : ['fr', 'en']
    };

    api.texts = {
		// TODO no modal in the future (dedicated screen instead)
        errorFeatureNotImplemented : "error-feature-not-implemented",
        modalTitlePrefix : "modal-title-",
        modalTitleError : "modal-title-error",
        fr : 'Francais',
        en : 'English'
    };

    api.translatedTexts = {
		// TODO this variable will be removed as soon as i18n will be retrieved in external json file
        en: {},
        fr: {}
    };

    api.translatedTexts.en[api.texts.errorFeatureNotImplemented] = "Functionality is not yet implemented.";
    api.translatedTexts.fr[api.texts.errorFeatureNotImplemented] = "La fonctionnalité n'est pas encore implémentée.";
    api.translatedTexts.en[api.texts.modalTitleError] = "ERROR";
    api.translatedTexts.fr[api.texts.modalTitleError] = "ERREUR";
} (this));