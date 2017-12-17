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
        var currentLanguage = $("html").attr("lang");
        if (!currentLanguage) {
            currentLanguage = "en";
        }
        if (currentLanguage !== newLanguage) {
            $("html").attr("lang", newLanguage);
            $("#link_" + currentLanguage).toggleClass("hidden");
            $("#link_" + newLanguage).toggleClass("hidden");
            this._forceReloadStylesheetIfNeeded(newLanguage);
        }
    };

    /**
     * Hack for a bug android nexus browser to force a re-evaluation of the stylesheets after a change of "lang" attribute
     * value with i18n.js by reloading a non-existent stylesheet.
     */
    i18n._forceReloadStylesheetIfNeeded = function(newLanguage) {
        var element = $("#test-i18n")[0];
        var text = window.getComputedStyle(element, ':before').getPropertyValue('content');
        if (!text || text !== '"' + newLanguage + '"') {
            this._forceReloadStylesheet(newLanguage);
        }
    };

    i18n._forceReloadStylesheet = function(newLanguage) {
        var dummyStylesheetId = "forceReloadStylesheets";
        var dummyStylesheetElement = $("#" + dummyStylesheetId);
        var dummyStylesheet = '<link id="' + dummyStylesheetId + '" rel="stylesheet" href="' + dummyStylesheetId + '.css?' + newLanguage + '">';
        var elementExist = !!dummyStylesheetElement.length;
        if (elementExist) {
            dummyStylesheetElement.replaceWith(dummyStylesheet);
        } else {
            $('head').append(dummyStylesheet);
        }
    };
} (this));

/**
 * Initialise the language of the application based on the language configuration of the browser
 */
$(function() {
    "use strict";
    var language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
    if (language === 'fr' || language.startsWith('fr-')) {
        _.i18n.setLanguage('fr');
    } else if (language === 'en' || language.startsWith('en-')) {
        _.i18n.setLanguage('en');
    }
});