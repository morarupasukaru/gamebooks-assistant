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
            globals._.data.setLanguage(newLanguage);
            var htmlElement = document.getElementsByTagName("html")[0];
            htmlElement.lang = newLanguage;
            document.getElementById("footer-lang-" + newLanguage).classList.add("hidden");
            for (var i = 0; i < globals._.config.languages.supported.length; i++) {
                if (newLanguage !== globals._.config.languages.supported[i]) {
                    document.getElementById("footer-lang-" + globals._.config.languages.supported[i]).classList.remove("hidden");
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
        var element = document.getElementById("i18n-testDiv");
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
            globals._.dom.appendHtml(document.getElementsByTagName('head')[0], '<link id="' + dummyStylesheetId + '" rel="stylesheet" href="' + hrefValue + '">');
        }
    };

    /**
     * Module initialisation method
     */
    api.initialize = function() {
        if (!globals._.config) {
            throw 'config is unavailable';
        }
        if (!globals._.data) {
            throw 'data is unavailable';
        }
        var savedLanguage = globals._.data.getLanguage();
        if (!!savedLanguage) {
            this.setLanguage(savedLanguage);
        } else {
            var newLanguage;
            var navigatorLanguage = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
            for (var i = 0; i < globals._.config.languages.supported.length; i++) {
                var language = globals._.config.languages.supported[i];
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