/**
 * Javascript function that will add for every supported language, an anchor html tag in the div with id 'footer.language'
 */
(function(globals, divId){
    "use strict";
	var __ = globals._;
	__.footer = __.footer || {};
    var api = __.footer;

    var addLanguageToFooter = function(language, languageText) {
        var footerDiv = document.getElementById(divId);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('id', 'footer-lang-' + language);
        linkElement.setAttribute('hreflang', language);
        linkElement.setAttribute('onClick', "_.i18n.setLanguage('" + language + "');");
        linkElement.innerHTML = '<span class="icon icon-globe"></span><span class="spanLang">&nbsp;' + languageText + '&nbsp;</span>';
        var existingLink = footerDiv.firstChild;
        footerDiv.insertBefore(linkElement, existingLink);
    };

    var supportedLanguages = __.config.languages.supported;
    for (var i = 0; i < supportedLanguages.length; i++) {
        addLanguageToFooter(supportedLanguages[i], __.config.texts[supportedLanguages[i]]);
    }
	
	
	api.displayHomepageFooter = function() {
		__.dom.display('footer-githubLink');
		__.dom.hide('footer-lefttext');
		__.dom.hide('footer-homeLink');
	};
	
	api.displayChildFooter = function() {
		__.dom.display('footer-lefttext');
		__.dom.display('footer-homeLink');
		__.dom.hide('footer-githubLink');
	};

    /**
     * Module initialisation method
     */
    api.initialize = function() {
		var homeLinkElement = document.getElementById('footer-homeLink');
		homeLinkElement.setAttribute('href', __.route.getHomeUrl());
    };
} (this, 'footer-language'));