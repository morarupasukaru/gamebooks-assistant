/**
 * Application initialisation
 */
$(function() {
  initLanguage();
});

/**
 * Initialise the language of the application based on the language configuration of the browser
 */
function initLanguage() {
    var language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
    if (language === 'fr' || language.startsWith('fr-')) {
        setLanguage('fr');
    } else if (language === 'en' || language.startsWith('en-')) {
        setLanguage('en');
    }
}

/**
 * Change the language of the application
 */
function setLanguage(newLanguage) {
    var currentLanguage = $("html").attr("lang");
    if (!currentLanguage) {
        currentLanguage = "en";
    }
    if (currentLanguage !== newLanguage) {
        $("html").attr("lang", newLanguage);
        $("#link_" + currentLanguage).toggleClass("hidden");
        $("#link_" + newLanguage).toggleClass("hidden");
        forceReloadStylesheetIfNeeded(newLanguage);
    }
}

/**
 * Hack for a bug android nexus browser to force a re-evaluation of the stylesheets after a change of "lang" attribute
 * value with i18n.js by reloading a non-existent stylesheet.
 */
function forceReloadStylesheetIfNeeded(newLanguage) {
    var element = $("#test-i18n")[0];
    var text = window.getComputedStyle(element, ':before').getPropertyValue('content');
    if (!text || text !== '"' + newLanguage + '"') {
        forceReloadStylesheet(newLanguage);
    }
}

function forceReloadStylesheet(newLanguage) {
    var dummyStylesheetId = "forceReloadStylesheets";
    var dummyStylesheetElement = $("#" + dummyStylesheetId);
    var dummyStylesheet = '<link id="' + dummyStylesheetId + '" rel="stylesheet" href="' + dummyStylesheetId + '.css?' + newLanguage + '">';
    var elementExist = !!dummyStylesheetElement.length;
    if (elementExist) {
        dummyStylesheetElement.replaceWith(dummyStylesheet);
    } else {
        $('head').append(dummyStylesheet);
    }
}