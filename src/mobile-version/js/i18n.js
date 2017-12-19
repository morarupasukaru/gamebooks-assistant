/**
 * Initialise the i18n functions into the global variable "_.i18n"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
    globals._.i18n = globals._.i18n || {};

    var i18n = globals._.i18n;
    /**
     * Change the language of the application
     */
    i18n.setLanguage = function(newLanguage) {
        var htmlElement = document.getElementsByTagName("html")[0];
        var currentLanguage = htmlElement.lang;
        if (!currentLanguage) {
            currentLanguage = "en";
        }
        if (currentLanguage !== newLanguage) {
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
    i18n._forceReloadStylesheetIfNeeded = function(newLanguage) {
        var element = document.getElementById("test-i18n");
        var text = window.getComputedStyle(element, ':before').getPropertyValue('content');
        if (!text || text !== '"' + newLanguage + '"') {
            this._forceReloadStylesheet(newLanguage);
        }
    };

    i18n._forceReloadStylesheet = function(newLanguage) {
        var dummyStylesheetId = "forceReloadStylesheets";
        var dummyStylesheetElement = document.getElementById(dummyStylesheetId);
        var hrefValue = dummyStylesheetId + '.css?' + newLanguage;
        if (!!dummyStylesheetElement) {
            dummyStylesheetElement.href = hrefValue;
        } else {
            this.appendHtml(document.getElementsByTagName('head')[0], '<link id="' + dummyStylesheetId + '" rel="stylesheet" href="' + hrefValue + '">');
        }
    };

    i18n.appendHtml = function(element, html) {
        // TODO move to common lib
        var div = document.createElement('div');
        div.innerHTML = html;
        while (div.children.length > 0) {
            element.appendChild(div.children[0]);
        }
    };
} (this));

/**
 * Initialise the language of the application based on the language configuration of the browser
 */
window.onload = function() {
    "use strict";
    var language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
    if (language === 'fr' || language.startsWith('fr-')) {
        _.i18n.setLanguage('fr');
    } else if (language === 'en' || language.startsWith('en-')) {
        _.i18n.setLanguage('en');
    }
};