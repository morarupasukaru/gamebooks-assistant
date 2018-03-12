import * as common from '../sharedTests';

describe('01 - Homepage screen', function () {
	context('Content', function () {
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
	}),
	
	context('Footer', function () {
		beforeEach(function () {
			cy.visit('/');
		})
		
		it('Footer - GitHub Project Link', function() {
			common.checkI18nElementTextWithDataAttribute('#footer-githubLink>span:last', 'Projet GitHub', 'GitHub Project');
		})
		
		it('Footer - Language Links', function() {
			common.testFooterLanguageLinks();
		})
	}),
	
	context('Modal', common.modalTests('/')),
	
	context('adminEnabled Settings', common.adminSettingTests('/'))
});