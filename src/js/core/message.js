/**
 * Initialise the functions to inform to the user messages and make it available into the global variable "_.msg"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.msg = __.msg || {};
    var api = __.msg;

	// TODO remove if unused
    api.ids = {
        modal: "modal-id",
        title: "modal-title-id",
        text: "modal-text-id"
    };
    
    api.errorUnsupportedFeature = function() {
        this._displayMessage('error', __.config.texts.errorFeatureNotImplemented);
    };

    /**
     * Display an error message
     */
    api.error = function(message) {
        this._displayMessage('error', message);
		throw message;
    };

    api._displayMessage = function(severity, message) {
        var language = __.i18n.currentLanguage;
        var displayedMessage = __.config.translatedTexts[language][message];
        if (!displayedMessage) {
            displayedMessage = message;
        }
        var i18nTitle = __.config.translatedTexts[language][__.config.texts.modalTitlePrefix + severity];

        var modalTitle = window.document.getElementById(this.ids.title);
        modalTitle.innerText = i18nTitle;
        var modalText = window.document.getElementById(this.ids.text);
        modalText.innerText = displayedMessage;

        var modalElement = window.document.getElementById(this.ids.modal);
        modalElement.style.display = "block";
    };

    api.closeModal = function() {
        var modalElement = window.document.getElementById(this.ids.modal);
        modalElement.style.display = "none";
    };

    /**
     * Exception handling: uncatched exception are displayed in a modal view
     */
    if (!!globals.addEventListener) {
        globals.addEventListener('error', function (e) {
			// TODO save errors for admin screen
			console.log(e.error.toString());
        });
    }
} (this));