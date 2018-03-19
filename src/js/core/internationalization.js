/**
 * Initialise the i18n functions into the global variable "_.i18n"
 */
(function(globals){
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.i18n = __.i18n || {};
    var api = __.i18n;
    /**
     * Change the language of the application
     */
    api.setLanguage = function(newLanguage) {
        if (this.currentLanguage !== newLanguage) {
            this.currentLanguage = newLanguage;
            __.data.setLanguage(newLanguage);
            var htmlElement = document.getElementsByTagName("html")[0];
            htmlElement.lang = newLanguage;
            document.getElementById("footer-lang-" + newLanguage + "-id").classList.add("hidden");
            for (var i = 0; i < __.config.languages.supported.length; i++) {
                if (newLanguage !== __.config.languages.supported[i]) {
                    document.getElementById("footer-lang-" + __.config.languages.supported[i] + "-id").classList.remove("hidden");
                }
            }
            this._forceReloadStylesheetIfNeeded(newLanguage);
			var currentScreen = __.route.getCurrentScreen();
			if (!!currentScreen && !!currentScreen.onLanguageChange) {
				currentScreen.onLanguageChange(newLanguage);
			}
        }
    };

    /**
     * Hack for a bug android nexus browser to force a re-evaluation of the stylesheets after a change of "lang" attribute
     * value with i18n.js by reloading a non-existent stylesheet.
     */
    api._forceReloadStylesheetIfNeeded = function(newLanguage) {
        var element = document.getElementById("i18n-test-id");
        var text = window.getComputedStyle(element, ':before').getPropertyValue('content');
        if (!text || text !== '"' + newLanguage + '"') {
            this._forceReloadStylesheet(newLanguage);
        }
    };

    api._forceReloadStylesheet = function(newLanguage) {
        var dummyStylesheetId = "i18n-forcecssreload-id";
        var dummyStylesheetElement = document.getElementById(dummyStylesheetId);
        var hrefValue = dummyStylesheetId + '.css?' + newLanguage;
        if (!!dummyStylesheetElement) {
            dummyStylesheetElement.href = hrefValue;
        } else {
            __.dom.appendHtml(document.getElementsByTagName('head')[0], '<link id="' + dummyStylesheetId + '" rel="stylesheet" href="' + hrefValue + '">');
        }
    };

    /**
     * Module initialisation method
     */
	var initialized = false;
    api.initialize = function() {
		if (!!initialized) {
			return ;
		}
        if (!__.config) {
            throw 'config is unavailable';
        }
        if (!__.data) {
            throw 'data is unavailable';
        }
        var savedLanguage = __.data.getLanguage();
        if (!!savedLanguage) {
            this.setLanguage(savedLanguage);
        } else {
            var newLanguage;
            var navigatorLanguage = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
            for (var i = 0; i < __.config.languages.supported.length; i++) {
                var language = __.config.languages.supported[i];
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
		initialized = true;
    };
} (this));