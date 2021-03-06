import * as common from '../sharedTests';

function testLocalStorageDataScreen(config) {
	return function() {
		context('Content', function () {
			beforeEach(function () {
				cy.visit(config.url);
			})
			
			it('Title', function() {
				cy.title().should('eq', 'Gamebooks Assistant');
				cy.toogleLanguage();
				// title does not change on language selection change
				cy.title().should('eq', 'Gamebooks Assistant');
			})
			
			it('h1 Title', function() {
				common.checkI18nElementTextWithDataAttribute(config.title.selector, config.title.fr, config.title.en);
			})
				
			it('Back Button', function() {
				var elementId = config.backBtn.selector;
				common.checkI18nElementTextWithDataAttribute(elementId, config.backBtn.fr, config.backBtn.en);
				cy.get(elementId).click();
				cy.url().should('eq', config.backBtn.urlAfterClick);
			})
		}),
		
		context('Footer', common.footerTests(config.url)),
		
		context('No Webstorage screen', common.noWebstorageTests(config.url)),
		
		context('debugEnabled Settings', common.debugSettingTests(config.url))
	};
}

describe("03.1 - LocalStorageData - Application's data", testLocalStorageDataScreen({
	url : '/#data-application',
	title: {
		selector : '#data-title-id',
		fr: "Données de l'application",
		en: "Data of the application"
	},
	backBtn: {
		selector : '#data-back-id',
		fr: "Retour à l'écran de débogage",
		en: 'Back to debug screen',
		urlAfterClick: common.getBaseUrl() + '/#debug'
	}
}));

describe("03.2 - LocalStorageData screen - Gamebooks's data", testLocalStorageDataScreen({
	url : '/#data-gamebooks',
	title: {
		selector : '#data-title-id',
		fr: "Données de la liste des livres-jeux",
		en: "Gamebooks list data"
	},
	backBtn: {
		selector : '#data-back-id',
		fr: "Retour à la liste des livres-jeux",
		en: 'Back to gamebooks list',
		urlAfterClick: common.getBaseUrl() + '/#gamebooks'
	}
}));
