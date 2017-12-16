$(function() {
  initLanguage();
});

function initLanguage() {
    var language = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
    if (language === 'fr' || language.startsWith('fr-')) {
        setLanguage('fr');
    } else if (language === 'en' || language.startsWith('en-')) {
        setLanguage('en');
    }
}

function setLanguage(language) {
    var currentLanguage = $("html").attr("lang");
    if (!currentLanguage) {
        currentLanguage = "en";
    }
    if (currentLanguage !== language) {
        $("html").attr("lang", language);
        $("#link_" + currentLanguage).toggleClass("hidden");
        $("#link_" + language).toggleClass("hidden");
    }
}
