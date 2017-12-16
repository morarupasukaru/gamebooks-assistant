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
        reloadCSS();
    }
}

function reloadCSS() {
  $('#i18n-css').replaceWith('<link id="i18n-css" rel="stylesheet" href="assets/i18n.css?t=' + Date.now() + '">');
}
