import * as common from '../sharedFunctions';

describe('Gamebook Selection screen', function () {
	beforeEach(function () {
		cy.visit('/gamebooks');
	})
	
	it('Title', function() {
		cy.title().should('eq', 'Gamebooks Assistant');
		common.toogleLanguage();
		// title does not change on language selection change
		cy.title().should('eq', 'Gamebooks Assistant');
	})
		
	it('Content - Add Adventure Button', function() {
		var elementId = '#screen-gamebooks-addAdventureBtn';
		common.checkI18nElementTextWithDataAttribute(elementId, 'Ajout aventure', 'Add adventure');
	})
	
	it('Content - Add Adventure Button - Click', function() {
		cy.get('#modal').should('not.be.visible');
		cy.get('#screen-gamebooks-addAdventureBtn').click();
		var language = common.getLanguage();
		common.modalFeatureNotImplemented(language);
		common.toogleLanguage();
		// TODO why is localStorage not correctly updated
		if (language === 'fr') {
			language = 'en';
		} else {
			language = 'fr';
		}
		cy.get('#screen-gamebooks-addAdventureBtn').click();
		common.modalFeatureNotImplemented(language);
	})

	// TODO ...
	
	it('Footer - GitHub Project Link', function() {
		cy.get('#footer-githubLink').should('not.be.visible');
	})
	
	it('Footer - Left', function() {
		common.checkNoI18nElementText('.footer-left', 'Gamebook assistant');
	})
	
	it('Footer - Home Link', function() {
		common.checkI18nElementTextWithDataAttribute('#footer-homeLink>span:last', 'Acceuil', 'Home');
		cy.get('#footer-homeLink').click();
		cy.url().should('eq', common.getBaseUrl() + '/');
	})
	
	it('Footer - Language Links', function() {
		common.testFooterLanguageLinks();
	})
	
	it('Modal - Not visible', function() {
		cy.get('#modal').should('not.be.visible');
	})
});

