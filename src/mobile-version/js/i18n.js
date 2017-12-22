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
        var htmlElement = document.getElementsByTagName("html")[0];
        var currentLanguage = htmlElement.lang;
        if (!currentLanguage) {
            currentLanguage = "en";
        }
        if (currentLanguage !== newLanguage) {
            _.data.save(_.data.ids.language, newLanguage);
            htmlElement.lang = newLanguage;
            document.getElementById("link_" + currentLanguage).classList.toggle("hidden");
            document.getElementById("link_" + newLanguage).classList.toggle("hidden");
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

    /**
     * Module initialisation method
     */
    api.init = function() {
        if (!_.data) {
            throw 'data is unavailable';
        }
        var savedLanguage = _.data.get(_.data.ids.language);
        if (!!savedLanguage) {
            this.setLanguage(savedLanguage);
        } else {
            var newLanguage;
            var navigatorLanguage = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
            if (navigatorLanguage === 'fr' || navigatorLanguage.startsWith('fr-')) {
                newLanguage = 'fr';
            } else {
                newLanguage = 'en';
            }
            this.setLanguage(newLanguage);
        }
    };
} (this));