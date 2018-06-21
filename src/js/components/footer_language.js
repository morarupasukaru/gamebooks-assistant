// TODO move to ..\application\components
/**
 * Javascript function that will add for every supported language, an anchor html tag in the div with id 'footer.language'
 */
(function(globals){
    "use strict";
	var __ = globals._;
	__.footer = __.footer || {};
    var api = __.footer;

    var addLanguageToFooter = function(language, languageText) {
        var footerDiv = document.getElementById('footer-lang-id');
        var linkElement = document.createElement('a');
        linkElement.setAttribute('id', 'footer-lang-' + language + '-id');
        linkElement.setAttribute('hreflang', language);
        linkElement.setAttribute('onClick', "_.i18n.setLanguage('" + language + "');");
        linkElement.innerHTML = '<span class="icon icon-globe"></span><span class="spanLang">&nbsp;' + languageText + '&nbsp;</span>';
        var existingLink = footerDiv.firstChild;
        footerDiv.insertBefore(linkElement, existingLink);
    };

    var supportedLanguages = __.i18n.languages.supported;
    for (var i = 0; i < supportedLanguages.length; i++) {
        addLanguageToFooter(supportedLanguages[i], __.i18n.texts[supportedLanguages[i]]);
    }
	
	api.displayHomepageFooter = function() {
		__.dom.display('footer-github-id');
		__.dom.hide('footer-left-id');
		__.dom.hide('footer-home-id');
	};
	
	api.displayChildFooter = function() {
		__.dom.display('footer-left-id');
		__.dom.display('footer-home-id');
		__.dom.hide('footer-github-id');
	};

    /**
     * Module initialisation method
     */
	var initialized = false;
    api.initialize = function() {
		if (!!initialized) {
			return ;
		}
		__.dom.setHrefOfScreen('footer-home-id', 'home');
		__.dom.display('footer-id');
		initialized = true;
    };
} (this));