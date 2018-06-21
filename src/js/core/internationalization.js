// move to ..\application
/**
 * Initialise the i18n functions into the global variable "_.i18n"
 */
(function(globals){
	// depends on data.js, dom.js, route.js
    "use strict";
    globals._ = globals._ || {};
	var __ = globals._;
    __.i18n = __.i18n || {};
    var api = __.i18n;
	
    api.languages = {
		// TODO this variable will be removed as soon as i18n will be retrieved in external json file
        default : 'en',
        supported : ['fr', 'en']
    };
	
    api.texts = {
        fr : 'Francais',
        en : 'English'
    };
		
    /**
     * Change the language of the application
     */
    api.setLanguage = function(newLanguage) {
        if (this.currentLanguage !== newLanguage) {
            this.currentLanguage = newLanguage;
            __.data.setLanguage(newLanguage);
            var htmlElement = document.getElementsByTagName("html")[0];
            htmlElement.lang = newLanguage;
            __.dom.hide("footer-lang-" + newLanguage + "-id");
            for (var i = 0; i < api.languages.supported.length; i++) {
                if (newLanguage !== api.languages.supported[i]) {
					__.dom.display("footer-lang-" + api.languages.supported[i] + "-id");
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
        var savedLanguage = __.data.getLanguage();
        if (!!savedLanguage) {
            this.setLanguage(savedLanguage);
        } else {
            var newLanguage;
            var navigatorLanguage = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
            for (var i = 0; i < api.languages.supported.length; i++) {
                var language = api.languages.supported[i];
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