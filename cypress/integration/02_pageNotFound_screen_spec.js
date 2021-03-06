import * as common from '../sharedTests';
	
describe('02 - Page not found screen', function () {
	context('Content', function () {
		beforeEach(function () {
			cy.visit('/#404');
		})
		
		it('Title', function() {
			cy.title().should('eq', 'Gamebooks Assistant');
			cy.toogleLanguage();
			// title does not change on language selection change
			cy.title().should('eq', 'Gamebooks Assistant');
		})
		
		it('PageNotFound Title', function() {
			common.checkI18nElementTextWithDataAttribute('#404-title-id', 'Page introuvable', 'Page cannot be found');
		})
			
		it('Home Button', function() {
			var elementId = '#404-back-id';
			common.checkI18nElementTextWithDataAttribute(elementId, "Retour à l'acceuil", 'Back to home');
			cy.get('#modal-id').should('not.be.visible');
			cy.get(elementId).click();
			cy.url().should('eq', common.getBaseUrl() + '/#');
		})
	}),
	
	context('Unknown Page', function () {
		beforeEach(function () {
			cy.visit('/#test');
		})
		
		it('Unknown Page - with /#test', function() {
			common.checkI18nElementTextWithDataAttribute('#404-title-id', 'Page introuvable', 'Page cannot be found');
		})
	}),
	
	context('Footer', common.footerTests('/#404')),
	
	context('No Webstorage screen', common.noWebstorageTests('/#404')),
	
	context('debugEnabled Settings', common.debugSettingTests('/#404'))
});

