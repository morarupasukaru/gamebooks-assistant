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
			common.checkNoI18nElementText('.splash-head', 'Gamebooks Assistant');
		})
		
		it('Content - Splash-subhead', function() {
			common.checkI18nElementTextWithDataAttribute('.splash-subhead', 'facilite la résolution de livre-jeu', 'ease the resolution of gamebooks');
		})
		
		it('Content - Selectbook Button', function() {
			common.checkI18nElementTextWithDataAttribute('#home-selectbook-id', 'Sélection du livre-jeu', 'Select the gamebook');
			cy.get('#home-selectbook-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#gamebooks');
		})
	}),
	
	context('Footer', function () {
		beforeEach(function () {
			cy.visit('/');
		})
		
		it('Footer - GitHub Project Link', function() {
			common.checkI18nElementTextWithDataAttribute('#footer-github-id>span:last', 'Projet GitHub', 'GitHub Project');
		})
		
		it('Footer - Language Links', function() {
			common.testFooterLanguageLinks();
		})
	}),
	
	context("Show debug screen Button", function () {
		beforeEach(function () {
			cy.visit('/#');
		})
		
		it('Button hidden per default', function() {
			cy.get('#home-showdata-id').should('not.be.visible');
		})
		
		it('Button visible when debugEnabled', function() {
			cy.visit('/#?debugEnabled');
			common.checkI18nElementTextWithDataAttribute('#home-showdebug-id', "Ecran de débogage", "Debug screen");
			cy.get('#home-showdebug-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#debug');
			cy.get('#debug-back-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#');
			cy.get('#home-showdebug-id').should('be.visible');
		})
		
		it('Button hidden when debugDisabled', function() {
			cy.visit('/#?debugDisabled');
			cy.get('#home-showdebug-id').should('not.be.visible');
			cy.get('#home-selectbook-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#gamebooks');
			cy.visit('/');
			cy.get('#home-showdebug-id').should('not.be.visible');
		})
	}),
	
	context('No Webstorage screen', common.noWebstorageTests('/')),
	context('debugEnabled Settings', common.debugSettingTests('/'))
});