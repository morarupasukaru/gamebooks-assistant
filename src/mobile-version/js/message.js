/**
 * Initialise the functions to inform to the user messages and make it available into the global variable "_.msg"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
    globals._.msg = globals._.msg || {};

    var api = globals._.msg;

    api.ids = {
        modal: "modal",
        title: "modalTitle",
        text: "modalText"
    };

    /**
     * Display an error message
     */
    api.error = function(message) {
        this._displayMessage('error', message);
    };

    api._displayMessage = function(severity, message) {
        var language = _.i18n.currentLanguage;
        var displayedMessage = _.config.translatedTexts[language][message];
        if (!displayedMessage) {
            displayedMessage = message;
        }
        var i18nTitle = _.config.translatedTexts[language][_.config.texts.modalTitlePrefix + severity];

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
            _.msg.error(e.error.toString());
        });
    }
} (this));