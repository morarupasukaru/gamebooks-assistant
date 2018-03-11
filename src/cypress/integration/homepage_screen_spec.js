import * as common from '../sharedFunctions';

describe('Homepage screen', function () {
	beforeEach(function () {
		cy.visit('/');
	})
	
	it('Title', function() {
		cy.title().should('eq', 'Gamebooks Assistant');
		cy.toogleLanguage();
		// title does not change on language selection change
		cy.title().should('eq', 'Gamebooks Assistant');
	})
	
	it('Content - Splash-head', function() {
		common.checkNoI18nElementText('.splash-head', 'Gamebook assistant');
	})
	
	it('Content - Splash-subhead', function() {
		common.checkI18nElementTextWithDataAttribute('.splash-subhead', 'facilite la résolution de livre-jeu', 'ease the resolution of gamebooks');
	})
	
	it('Content - Selectbook Button', function() {
		common.checkI18nElementTextWithDataAttribute('#screen-home-selectbookBtn', 'Sélection du livre-jeu', 'Select the gamebook');
		cy.get('#screen-home-selectbookBtn').click();
		cy.url().should('eq', common.getBaseUrl() + '/gamebooks/');
	})
	
	it('Footer - GitHub Project Link', function() {
		common.checkI18nElementTextWithDataAttribute('#footer-githubLink>span:last', 'Projet GitHub', 'GitHub Project');
	})
	
	it('Footer - Language Links', function() {
		common.testFooterLanguageLinks();
	})
	
	it('Modal - Not visible', function() {
		cy.get('#modal').should('not.be.visible');
	})
});