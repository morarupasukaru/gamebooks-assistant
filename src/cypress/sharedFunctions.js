export function getBaseUrl() {
	return Cypress.config('baseUrl');
}

export function getLanguage() {
	return localStorage.getItem('savedLanguage');
}
	
export function getCssBeforeContentValue($el) {
	return getComputedStyle($el.get(0), ':before').getPropertyValue("content");
};

export function equalsCssBeforeContentValue(element, expectedCssBeforeContentValue) {
	element.should(function($el){
		expect(getCssBeforeContentValue($el)).to.eq('"' + expectedCssBeforeContentValue + '"');
	});
};

export function selectLanguage(language) {
	var langLinkId = '#footer-lang-' + language;
	cy.get(langLinkId).should('be.visible');
	cy.get(langLinkId).click().should(function () {
		expect(localStorage.getItem('savedLanguage')).to.eq(language);
	});
	cy.get(langLinkId).should('not.be.visible');
};

export function toogleLanguage() {
	if (getLanguage() === 'fr') {
		selectLanguage('en');
	} else {
		selectLanguage('fr');
	}
};

export function checkI18nElementTextWithDataAttribute(elementSelector, frText, enText) {
	cy.get(elementSelector).should('be.visible');
	if (getLanguage() === 'fr') {
		equalsCssBeforeContentValue(cy.get(elementSelector), frText);
		selectLanguage('en');
		equalsCssBeforeContentValue(cy.get(elementSelector), enText);
	} else {
		equalsCssBeforeContentValue(cy.get(elementSelector), enText);
		selectLanguage('fr');
		equalsCssBeforeContentValue(cy.get(elementSelector), frText);
	}
};

export function checkI18nElementText(elementSelector, frText, enText) {
	cy.get(elementSelector).should('be.visible');
	if (getLanguage() === 'fr') {
		cy.get(elementSelector).contains(frText);
		selectLanguage('en');
		cy.get(elementSelector).contains(enText);
	} else {
		cy.get(elementSelector).contains(enText);
		selectLanguage('fr');
		cy.get(elementSelector).contains(frText);
	}
};

export function checkNoI18nElementText(elementSelector, text) {
	cy.get(elementSelector).should('be.visible');
	cy.get(elementSelector).contains(text);
	toogleLanguage();
	// title does not change on language selection change
	cy.get(elementSelector).contains(text);
};

export function testFooterLanguageLinks() {
	if (getLanguage() === 'fr') {
		cy.get('#footer-lang-en').should('be.visible');
		cy.get('#footer-lang-en').should('contain', 'English');
		cy.get('#footer-lang-fr').should('not.be.visible');
		selectLanguage('en');
		cy.get('#footer-lang-fr').should('be.visible');
		cy.get('#footer-lang-fr').should('contain', 'Francais');
		cy.get('#footer-lang-en').should('not.be.visible');
	} else {
		cy.get('#footer-lang-fr').should('be.visible');
		cy.get('#footer-lang-fr').should('contain', 'Francais');
		cy.get('#footer-lang-en').should('not.be.visible');
		selectLanguage('fr');
		cy.get('#footer-lang-en').should('be.visible');
		cy.get('#footer-lang-en').should('contain', 'English');
		cy.get('#footer-lang-fr').should('not.be.visible');
	}
};

export function modalFeatureNotImplemented(lang) {
	cy.get('#modal').should('be.visible');
	if (lang === 'fr') {
		cy.get('#modal-title').contains("ERREUR");
		cy.get('#modal-text').contains("La fonctionnalité n'est pas encore implémentée");
	} else {
		cy.get('#modal-title').contains("ERROR");
		cy.get('#modal-text').contains("Functionality is not yet implemented");
	} 
	cy.get('#modal-closeBtn').click();
	cy.get('#modal').should('not.be.visible');
}