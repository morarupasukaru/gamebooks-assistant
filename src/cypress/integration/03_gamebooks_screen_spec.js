import * as common from '../sharedTests';
	
function testGamebookListContent(firstSerieName, serieCount, firstgamebookName, gamebooksCount) {
	expect(firstSerieName).not.to.be.undefined;
	expect(firstgamebookName).not.to.be.undefined;
	expect(gamebooksCount > 0).to.be.true;
	
	cy.get('.screen-gamebooks-serie').then(($series) => {
		var seriesName = $series.map((i, el) => {
			return Cypress.$(el).text()
		});
		var previous;
		expect(seriesName.length).to.equal(serieCount);
		
		if (!!firstSerieName) {
			expect(seriesName[0]).to.equal(firstSerieName);
		}
		for (var i = 0; i < seriesName.length; i++) {
			if (!!previous) {
				expect(previous <= seriesName[i]).to.be.true;
			} else {
			}
			previous = seriesName[i];
		}
	});
	
	cy.get('.screen-gamebooks-book').then(($gamebooks) => {
		var gamebooksStr = localStorage.getItem('gamebooksList');
		var gamebooksData = JSON.parse(gamebooksStr);
		var gamebooks = gamebooksData.gamebooks;
		gamebooks = gamebooks.sort(function(obj1, obj2) {
			if (obj1.serie < obj2.serie) {
				return -1;
			} else if (obj1.serie > obj2.serie) {
				return 1;
			} else {
				return obj1.order - obj2.order;
				if (obj1.order < obj2.order) {
					return -1;
				} else if (obj1.order > obj2.order) {
					return 1;
				} else {
					return 0;
				}
			}
		});
		
		var gamebooksName = $gamebooks.map((i, el) => {
			return Cypress.$(el).text()
		});
		expect(gamebooks.length).to.equal(gamebooksCount);
		expect(gamebooksName.length).to.equal(gamebooks.length);
		
		if (!!firstgamebookName) {
			expect(gamebooksName[0]).to.equal(firstgamebookName);
		}
		for (var i = 0; i < gamebooksName.length; i++) {
			expect(gamebooksName[i]).to.equal(gamebooks[i].name);
		}
	});
}

function testGamebookList(json, firstSerieName, serieCount, firstgamebookName, gamebooksCount) {
	return function() {
		if (!!json) {
			cy.fixture(json).then((json) => {
				localStorage.setItem('gamebooksList', JSON.stringify(json));
			});
		}
		cy.visit('/#gamebooks');
		
		if (serieCount == 0) {
			expect(firstSerieName).to.be.undefined;
			cy.get('.screen-gamebooks-serie').should('not.be.visible');
			cy.get('.screen-gamebooks-book').should('not.be.visible');
		} else {
			testGamebookListContent(firstSerieName, serieCount, firstgamebookName, gamebooksCount);
			
			var selectionFirstGamebook = '.screen-gamebooks-book:first';
			cy.get(selectionFirstGamebook).should('be.visible');
			cy.get(selectionFirstGamebook).contains(firstgamebookName);
			cy.get(selectionFirstGamebook).click();
			cy.url().should('eq', common.getBaseUrl() + '/#gamebook');
			
			cy.visit('/#gamebooks');
			testGamebookListContent(firstSerieName, serieCount, firstgamebookName, gamebooksCount);
		}
	};
}

describe('03 - Gamebook Selection screen', function () {
	context('Content', function () {
		beforeEach(function () {
			cy.visit('/#gamebooks');
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
			cy.visit('/#gamebooks');
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})
		
		it('Admin Button - hidden with /...?adminDisabled', function() {
			cy.visit('/#gamebooks?adminDisabled').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq('false');
			});
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})
		
		it('Admin Button - hidden with /...?adminEnabled', function() {
			cy.visit('/#gamebooks?adminEnabled').should(function () {
				expect(localStorage.getItem('adminEnabled')).to.eq('true');
			});
			cy.get('#screen-gamebooks-adminBtn').should('be.visible');
		})
		
		it('Admin Button - hidden with localStorage.adminEnabled = false', function() {
			cy.setLocalStorageItem('adminEnabled', 'false');
			cy.visit('/#gamebooks');
			cy.get('#screen-gamebooks-adminBtn').should('not.be.visible');
		})
		
		it('Admin Button - visible with localStorage.adminEnabled = true', function() {
			cy.setLocalStorageItem('adminEnabled', 'true');
			cy.visit('/#gamebooks');
			cy.get('#screen-gamebooks-adminBtn').should('be.visible');
		})
	}),

	context('Gamebooks list', function () {
		it('Typical Gamebookslist', testGamebookList('gamebooks-list-typical.json', 'Défis Fantastiques', 4, 'Le Sorcier de la Montagne de Feu', 30))
		
		it('Gamebooks list with only 1 book', testGamebookList('gamebooks-list-with-one-book.json', 'Défis Fantastiques', 1, 'Le Sorcier de la Montagne de Feu', 1))
		
		it('Gamebooks list empty', testGamebookList('gamebooks-list-empty.json', undefined, 0, undefined, 0))
		
		it('Gamebooks list undefined', testGamebookList(undefined, undefined, 0, undefined, 0))
		
		it('Gamebooks list unordered', testGamebookList('gamebooks-list-unordered.json', 'Défis Fantastiques', 2, 'Le Sorcier de la Montagne de Feu', 5))
	}),
	
	context('Footer', common.footerTests('/#gamebooks')),
	
	context('Modal', common.modalTests('/#gamebooks')),
	
	context('adminEnabled Settings', common.adminSettingTests('/#gamebooks'))
});

