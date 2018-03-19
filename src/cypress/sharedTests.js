export function getBaseUrl() {
	return Cypress.config('baseUrl');
};

export function getLanguage() {
	var lang = localStorage.getItem('savedLanguage');
	console.log(lang);
	return localStorage.getItem('savedLanguage');
};
	
export function getCssBeforeContentValue($el) {
	return getComputedStyle($el.get(0), ':before').getPropertyValue("content");
};

export function equalsCssBeforeContentValue(element, expectedCssBeforeContentValue) {
	element.should(function($el){
		expect(getCssBeforeContentValue($el)).to.eq('"' + expectedCssBeforeContentValue + '"');
	});
};

export function selectLanguage(language) {
	var langLinkId = '#footer-lang-' + language + '-id';
	cy.get(langLinkId).should('be.visible');
	cy.get(langLinkId).click().should(function () {
		expect(localStorage.getItem('savedLanguage')).to.eq(language);
	});
	cy.get(langLinkId).should('not.be.visible');
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
	cy.toogleLanguage();
	// title does not change on language selection change
	cy.get(elementSelector).contains(text);
};

export function testFooterLanguageLinks() {
	if (getLanguage() === 'fr') {
		cy.get('#footer-lang-en-id').should('be.visible');
		cy.get('#footer-lang-en-id').should('contain', 'English');
		cy.get('#footer-lang-fr-id').should('not.be.visible');
		selectLanguage('en');
		cy.get('#footer-lang-fr-id').should('be.visible');
		cy.get('#footer-lang-fr-id').should('contain', 'Francais');
		cy.get('#footer-lang-en-id').should('not.be.visible');
	} else {
		cy.get('#footer-lang-fr-id').should('be.visible');
		cy.get('#footer-lang-fr-id').should('contain', 'Francais');
		cy.get('#footer-lang-en-id').should('not.be.visible');
		selectLanguage('fr');
		cy.get('#footer-lang-en-id').should('be.visible');
		cy.get('#footer-lang-en-id').should('contain', 'English');
		cy.get('#footer-lang-fr-id').should('not.be.visible');
	}
};

export function footerTests(url) {
	return function() {
		beforeEach(function () {
			cy.visit(url);
		})
		
		it('Footer - GitHub Project Link', function() {
			cy.get('#footer-github-id').should('not.be.visible');
		})
		
		it('Footer - Left', function() {
			checkNoI18nElementText('.footer-left', 'Gamebook assistant');
		})
		
		it('Footer - Home Link', function() {
			checkI18nElementTextWithDataAttribute('#footer-home-id>span:last', 'Acceuil', 'Home');
			cy.get('#footer-home-id').click();
			cy.url().should('eq', getBaseUrl() + '/#');
		})
		
		it('Footer - Language Links', function() {
			testFooterLanguageLinks();
		})
	};
};

export function modalTests(url) {
	return function() {
		it('Modal - Not visible per default', function() {
			cy.visit(url);
			cy.get('#modal-id').should('not.be.visible');
		})

		it('Modal - display unsupported localStorage if localStorage unavailable', function() {
			cy.visit(url, {
				onBeforeLoad: (contentWindow) => {
					contentWindow._ = contentWindow._ || {};
					contentWindow._.data = contentWindow._.data || {};
					contentWindow._.data.isLocalStorageAvailable = false;
				}
			});
			cy.modalWithErrorLocalstorageUnavailable('fr');
		})
	};
};

export function adminSettingTests(url) {
	return function() {
		it('adminEnabled = null per default', function() {
			cy.visit(url).should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq(null);
			});
		})
		
		it('adminEnabled = null with .../?adminEnabled__wrong', function() {
			cy.visit(url + '?adminEnabled__wrong').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq(null);
			});
		})
		
		it('adminEnabled = true with .../?adminEnabled', function() {
			cy.visit(url + '?adminEnabled').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq('true');
			});
		})
		
		it('adminEnabled = false with .../?adminDisabled', function() {
			cy.visit(url + '?adminDisabled').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq('false');
			});
		})
		
		it('adminEnabled = null with .../#test?adminEnabled__wrong', function() {
			cy.visit(url + '#test?adminEnabled__wrong').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq(null);
			});
		})
		
		it('adminEnabled = true with .../#test?adminEnabled', function() {
			cy.visit(url + '#test?adminEnabled').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq('true');
			});
		})
		
		it('adminEnabled = false with .../#test?adminDisabled', function() {
			cy.visit(url + '#test?adminDisabled').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq('false');
			});
		})
	};
};
