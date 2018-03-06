var localMinifiedUrl = "http://localhost:9001";
var localNonMinifiedUrl = "http://localhost:9000";
var distribGithubUrl = 'http://morarupasukaru.github.io/gamebooks-assistant';
var baseUrl = localMinifiedUrl;

describe('Test Gamebooks Assistant Screens', function() {
	var getLanguage = function() {
		return localStorage.getItem('savedLanguage');
	}
		
	var getCssBeforeContentValue = function($el) {
		return getComputedStyle($el.get(0), ':before').getPropertyValue("content");
	};
	
	var equalsCssBeforeContentValue = function(element, expectedCssBeforeContentValue) {
		element.should(function($el){
			expect(getCssBeforeContentValue($el)).to.eq('"' + expectedCssBeforeContentValue + '"');
		});
	};
	
	var selectLanguage = function(lang) {
		var langLinkId = '#link_lang_' + lang;
		cy.get(langLinkId).should('be.visible');
		cy.get(langLinkId).click().should(function () {
			expect(localStorage.getItem('savedLanguage')).to.eq(lang);
		});
	};
	
	var toogleLanguage = function() {
		if (getLanguage() === 'fr') {
			selectLanguage('en');
		} else {
			selectLanguage('fr');
		}
	};
	
	var checkI18nElementText = function(elementSelector, frText, enText) {
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
	
	var checkElementText = function(elementSelector, text) {
		cy.get(elementSelector).should('be.visible');
		cy.get(elementSelector).contains(text);
		toogleLanguage();
		// title does not change on language selection change
		cy.get(elementSelector).contains(text);
	};
	
	var testFooterLanguageLinks = function() {
		if (getLanguage() === 'fr') {
			cy.get('#link_lang_en').should('be.visible');
			cy.get('#link_lang_en').should('contain', 'English');
			cy.get('#link_lang_fr').should('not.be.visible');
			selectLanguage('en');
			cy.get('#link_lang_fr').should('be.visible');
			cy.get('#link_lang_fr').should('contain', 'Francais');
			cy.get('#link_lang_en').should('not.be.visible');
		} else {
			cy.get('#link_lang_fr').should('be.visible');
			cy.get('#link_lang_fr').should('contain', 'Francais');
			cy.get('#link_lang_en').should('not.be.visible');
			selectLanguage('fr');
			cy.get('#link_lang_en').should('be.visible');
			cy.get('#link_lang_en').should('contain', 'English');
			cy.get('#link_lang_fr').should('not.be.visible');
		}
	};

	context('Tests Homepage screen', function () {
		beforeEach(function () {
			cy.visit(baseUrl);
		})
		
		it('Title', function() {
			cy.title().should('eq', 'Gamebooks Assistant');
			toogleLanguage();
			// title does not change on language selection change
			cy.title().should('eq', 'Gamebooks Assistant');
		})
		
		it('Content - Splash-head', function() {
			checkElementText('.splash-head', 'Gamebook assistant');
		})
		
		it('Content - Splash-subhead', function() {
			checkI18nElementText('.splash-subhead', 'facilite la résolution de livre-jeu', 'ease the resolution of gamebooks');
		})
		
		it('Content - Selectbook Button', function() {
			checkI18nElementText('#home_selectbook_btn', 'Sélection du livre-jeu', 'Select the gamebook');
			cy.get('#home_selectbook_btn').click();
			cy.url().should('eq', baseUrl + '/gamebooks/');
		})
		
		it('Footer - GitHub Project Link', function() {
			checkI18nElementText('#footer_github_link>span:last', 'Projet GitHub', 'GitHub Project');
		})
		
		it('Footer - Language Links', function() {
			testFooterLanguageLinks();
		})
	});

	context('Tests Gamebook Selection', function () {
		beforeEach(function () {
			cy.visit(baseUrl + '/gamebooks');
		})
		
		it('Title', function() {
			cy.title().should('eq', 'Gamebooks Assistant');
			toogleLanguage();
			// title does not change on language selection change
			cy.title().should('eq', 'Gamebooks Assistant');
		})
		
		// TODO ...
		
		it('Footer - GitHub Project Link', function() {
			cy.get('#footer_github_link').should('not.be.visible');
		})
		
		it('Footer - Left', function() {
			checkElementText('.footer-left', 'Gamebook assistant');
		})
		
		it('Footer - Home Link', function() {
			checkI18nElementText('#footer_home_link>span:last', 'Acceuil', 'Home');
			cy.get('#footer_home_link').click();
			cy.url().should('eq', baseUrl + '/');
		})
		
		it('Footer - Language Links', function() {
			testFooterLanguageLinks();
		})
	});
})
