import * as common from '../sharedTests';

describe('Gamebook Selection screen', function () {
	context('Content', function () {
		beforeEach(function () {
			cy.visit('/gamebooks');
		})
		
		it('Title', function() {
			cy.title().should('eq', 'Gamebooks Assistant');
			cy.toogleLanguage();
			// title does not change on language selection change
			cy.title().should('eq', 'Gamebooks Assistant');
		})
		
		it('Choose Adventure Title', function() {
			common.checkI18nElementTextWithDataAttribute('#screen-gamebooks-chooseAdventureDiv>h1:first', 'Choisissez une aventure', 'Choose an adventure');
		})
			
		it('Add Adventure Button', function() {
			var elementId = '#screen-gamebooks-addAdventureBtn';
			common.checkI18nElementTextWithDataAttribute(elementId, 'Ajout aventure', 'Add adventure');
			
			cy.get('#modal').should('not.be.visible');
			cy.get('#screen-gamebooks-addAdventureBtn').click();
			cy.modalWithErrorFeatureNotImplemented();
			cy.toogleLanguage();
			cy.get('#screen-gamebooks-addAdventureBtn').click();
			cy.modalWithErrorFeatureNotImplemented();
		})
	}),

	context('Admin Button', function () {
		it('Admin Button - hidden per default', function() {
			cy.visit('/gamebooks');
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})
		
		it('Admin Button - hidden with /...?adminDisabled', function() {
			cy.visit('/gamebooks?adminDisabled').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq('false');
			});
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})
		
		it('Admin Button - hidden with /...?adminEnabled', function() {
			cy.visit('/gamebooks?adminEnabled').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq('true');
			});
			cy.get('#screen-gamebooks-adminBtn').should('be.visible');
		})
		
		it('Admin Button - hidden with localStorage.adminEnabled = false', function() {
			cy.setLocalStorageItem('adminEnabled', 'false');
			cy.visit('/gamebooks');
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})
		
		it('Admin Button - visible with localStorage.adminEnabled = true', function() {
			cy.setLocalStorageItem('adminEnabled', 'true');
			cy.visit('/gamebooks');
			cy.get('#screen-gamebooks-adminBtn').should('be.visible');
		})
	}),
	
	context('Footer', common.footerTests('/gamebooks')),
	
	context('Modal', common.modalTests('/gamebooks')),
	
	context('adminEnabled Settings', common.adminSettingTests('/gamebooks'))

	/*
	context('Tests with data loading', function () {
		it('No popup message with offline & no data in localStorage & if not specified remote url for data', function() {
			// TODO
		}),
		
		it('No popup message with online & no data in localStorage & if not specified remote url for data', function() {
			// TODO
		}),
		
		it('Popup message with offline & no data in localStorage & specified remote url for data', function() {
			// TODO
		}),
		
		it('Display localStorage data if offline', function() {
			// TODO
		}),
		
		it('localStorage data = loaded data', function() {
			// TODO
		}),
		
		it('unmodified localStorage gamebooks deleted if not anymore in loaded data', function() {
			// TODO
		}),
		
		it('new gamebooks created by the application is never deleted if not found in loaded data', function() {
			// TODO
		}),
		
		it('popup to ask to delete modified localStorage gamebook deleted if not anymore in loaded data -> no choice', function() {
			// TODO with several deletion
		}),
		
		it('popup to ask to delete modified localStorage gamebook deleted if not anymore in loaded data -> yes choice', function() {
			// TODO
		}),
		
		it('unmodified localStorage gamebooks replaced by new version from loaded data', function() {
			// TODO
		}),
		
		it('popup to ask to replace the modified localStorage gamebook by the new version in loaded data -> no choice', function() {
			// TODO with several deletion
		}),
		
		it('popup to ask to replace the modified localStorage gamebook by the new version in loaded data -> yes choice', function() {
			// TODO
		}),
		
		it('add new gamebook from loaded data in localStorage', function() {
			// TODO
		})
		
		it('Gamebooks Selection', function() {
			var selectionFirstGamebook = '.screen-gamebooks-book:first';
			cy.get(selectionFirstGamebook).should('be.visible');
			cy.get(selectionFirstGamebook).click();
			cy.url().should('eq', common.getBaseUrl() + '/gamebook/');
		})
	})
	*/
});

