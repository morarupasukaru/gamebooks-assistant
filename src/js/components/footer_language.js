/**
 * Javascript function that will add for every supported language, an anchor html tag in the div with id 'footer.language'
 */
(function(globals, divId){
    "use strict";
    var addLanguageToFooter = function(language, languageText) {
        var footerDiv = document.getElementById(divId);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('id', 'footer-lang-' + language);
        linkElement.setAttribute('hreflang', language);
        linkElement.setAttribute('onClick', "_.i18n.setLanguage('" + language + "');");
        linkElement.innerHTML = '<span class="icon icon-globe"></span><span class="spanLang">&nbsp;' + languageText + '&nbsp;</span>';
        var existingLink = footerDiv.firstChild;
        footerDiv.insertBefore(linkElement, existingLink);
    };

    var supportedLanguages = globals._.config.languages.supported;
    for (var i = 0; i < supportedLanguages.length; i++) {
        addLanguageToFooter(supportedLanguages[i], globals._.config.texts[supportedLanguages[i]]);
    }
} (this, 'footer-language'));