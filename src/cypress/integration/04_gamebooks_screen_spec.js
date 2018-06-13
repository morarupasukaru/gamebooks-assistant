import * as common from '../sharedTests';
	
function testGamebookListContent(firstSerieName, serieCount, firstgamebookName, gamebooksCount) {
	expect(firstSerieName).not.to.be.undefined;
	expect(firstgamebookName).not.to.be.undefined;
	expect(gamebooksCount > 0).to.be.true;
	
	cy.get('.books-serie').then(($series) => {
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
	
	cy.get('.books-book').then(($gamebooks) => {
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
			cy.get('.books-serie').should('not.be.visible');
			cy.get('.books-book').should('not.be.visible');
		} else {
			testGamebookListContent(firstSerieName, serieCount, firstgamebookName, gamebooksCount);
			
			var selectionFirstGamebook = '.books-book:first';
			cy.get(selectionFirstGamebook).should('be.visible');
			cy.get(selectionFirstGamebook).contains(firstgamebookName);
			cy.get(selectionFirstGamebook).click();
			cy.url().should('eq', common.getBaseUrl() + '/#gamebook');
			
			cy.visit('/#gamebooks');
			testGamebookListContent(firstSerieName, serieCount, firstgamebookName, gamebooksCount);
		}
	};
}

describe('04 - Gamebook Selection screen', function () {
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
			common.checkI18nElementTextWithDataAttribute('#books-choose-id>h1:first', 'Choisissez une aventure', 'Choose an adventure');
		})
			
		it('Add Adventure Button', function() {
			var elementId = '#books-add-id';
			common.checkI18nElementTextWithDataAttribute(elementId, "Ajout d'un livre-jeu", 'Add gamebook');
			
			cy.get('#modal-id').should('not.be.visible');
			cy.get('#books-add-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#gamebook/new');
			cy.get('#book-new-cancel-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#gamebooks');
		})
	}),
	
	context("Show application's data Button", function () {
		beforeEach(function () {
			cy.visit('/#gamebooks');
		})
		
		it('Button hidden per default', function() {
			cy.get('#books-showdata-id').should('not.be.visible');
		})
		
		it('Button visible when debugEnabled', function() {
			cy.visit('/#gamebooks?debugEnabled');
			common.checkI18nElementTextWithDataAttribute('#books-showdata-id', "Données de la liste des livres-jeux", "Gamebooks list data");
			cy.get('#books-showdata-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#data-gamebooks');
			cy.get('#data-back-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#gamebooks');
			cy.get('#books-showdata-id').should('be.visible');
		})
		
		it('Button hidden when debugDisabled', function() {
			cy.visit('/#gamebooks?debugDisabled');
			cy.get('#books-showdata-id').should('not.be.visible');
			cy.get('#footer-home-id').click();
			cy.url().should('eq', common.getBaseUrl() + '/#');
			cy.visit('/#gamebooks');
			cy.get('#books-showdata-id').should('not.be.visible');
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
	
	context('No Webstorage screen', common.noWebstorageTests('/#gamebooks')),
	
	context('debugEnabled Settings', common.debugSettingTests('/#gamebooks'))
});

