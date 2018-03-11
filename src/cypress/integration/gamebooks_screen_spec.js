import * as common from '../sharedFunctions';

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
			cy.modalFeatureNotImplemented();
			cy.toogleLanguage();
			cy.get('#screen-gamebooks-addAdventureBtn').click();
			cy.modalFeatureNotImplemented();
		})
		
		it('Gamebooks Selection', function() {
			var selectionFirstGamebook = '.screen-gamebooks-book:first';
			cy.get(selectionFirstGamebook).should('be.visible');
			cy.get(selectionFirstGamebook).click();
			cy.url().should('eq', common.getBaseUrl() + '/gamebook/');
		})
		
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
	}),

	context('Tests with Admin Button', function () {
		it('Content - Admin Button - hidden per default', function() {
			cy.visit('/gamebooks');
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})
		
		it('Content - Admin Button - hidden with /gamebooks?adminx', function() {
			cy.visit('/gamebooks?adminx');
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})

		it('Content - Admin Button - hidden with /gamebooks#test?adminx', function() {
			cy.visit('/gamebooks#test?adminx');
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})

		it('Content - Admin Button - visible with /gamebooks?admin', function() {
			cy.visit('/gamebooks?admin');
			cy.get('#screen-gamebooks-adminBtn').should('be.visible');
		})

		it('Content - Admin Button - visible with /gamebooks#test?admin', function() {
			cy.visit('/gamebooks#test?admin');
			cy.get('#screen-gamebooks-adminBtn').should('be.visible');
		})
		
		it('Content - Admin Button - unsupported on click', function() {
			cy.visit('/gamebooks?admin');
			cy.get('#screen-gamebooks-adminBtn').click();
			cy.modalFeatureNotImplemented();
			cy.toogleLanguage();
			cy.get('#screen-gamebooks-adminBtn').click();
			cy.modalFeatureNotImplemented();
		})
	}),

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
	})
	
});

