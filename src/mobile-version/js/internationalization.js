/**
 * Initialise the i18n functions into the global variable "_.i18n"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
    globals._.i18n = globals._.i18n || {};

    var api = globals._.i18n;
    /**
     * Change the language of the application
     */
    api.setLanguage = function(newLanguage) {
        if (this.currentLanguage !== newLanguage) {
            this.currentLanguage = newLanguage;
            _.data.save(_.data.ids.language, newLanguage);
            var htmlElement = document.getElementsByTagName("html")[0];
            htmlElement.lang = newLanguage;
            document.getElementById("link_" + newLanguage).classList.add("hidden");
            for (var i = 0; i < api.supportedLanguages.length; i++) {
                if (newLanguage !== api.supportedLanguages[i]) {
                    document.getElementById("link_" + api.supportedLanguages[i]).classList.remove("hidden");
                }
            }
            this._forceReloadStylesheetIfNeeded(newLanguage);
        }
    };

    /**
     * Hack for a bug android nexus browser to force a re-evaluation of the stylesheets after a change of "lang" attribute
     * value with i18n.js by reloading a non-existent stylesheet.
     */
    api._forceReloadStylesheetIfNeeded = function(newLanguage) {
        var element = document.getElementById("test-i18n");
        var text = window.getComputedStyle(element, ':before').getPropertyValue('content');
        if (!text || text !== '"' + newLanguage + '"') {
            this._forceReloadStylesheet(newLanguage);
        }
    };

    api._forceReloadStylesheet = function(newLanguage) {
        var dummyStylesheetId = "forceReloadStylesheets";
        var dummyStylesheetElement = document.getElementById(dummyStylesheetId);
        var hrefValue = dummyStylesheetId + '.css?' + newLanguage;
        if (!!dummyStylesheetElement) {
            dummyStylesheetElement.href = hrefValue;
        } else {
            _.dom.appendHtml(document.getElementsByTagName('head')[0], '<link id="' + dummyStylesheetId + '" rel="stylesheet" href="' + hrefValue + '">');
        }
    };

    api.supportedLanguages = [
        'fr',
        'en'
    ];
    api.defaultLanguage = 'en';

    api.texts = {
        en : {
            "error-localstorage-unavailable" : "LocalStorage is required by the application but is unavailable",
            "modal-title-error" : "ERROR"
        },
        fr : {
            "error-localstorage-unavailable" : "LocalStorage est requis à l'application mais n'est pas disponible",
            "modal-title-error" : "ERREUR"
        }
    };

    /**
     * Module initialisation method
     */
    api.initialize = function() {
        if (!_.data) {
            throw 'data is unavailable';
        }
        var savedLanguage = _.data.get(_.data.ids.language);
        if (!!savedLanguage) {
            this.setLanguage(savedLanguage);
        } else {
            var newLanguage;
            var navigatorLanguage = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;

            for (var i = 0; i < api.supportedLanguages.length; i++) {
                var language = api.supportedLanguages[i];
                if (navigatorLanguage === language || navigatorLanguage.startsWith(language + '-')) {
                    newLanguage = language;
                    break;
                }
            }
            if (!newLanguage) {
                newLanguage = this.defaultLanguage;
            }
            this.setLanguage(newLanguage);
        }
    };
} (this));