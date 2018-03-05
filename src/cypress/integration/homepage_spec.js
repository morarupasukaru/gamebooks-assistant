describe('Test Gamebooks Assistant Screens', function() {

	var getLanguage = function() {
		return localStorage.getItem('savedLanguage');
	}
		
	var getCssBeforeContentValue = function($el) {
		return getComputedStyle($el.get(0), ':before').getPropertyValue("content");
	};
	
	var equalsCssBeforeContentValue = function(element, expectedCssBeforeContentValue) {
		element.should(function($el){
			expect(getCssBeforeContentValue($el)).to.eq('"' + expectedCssBeforeContentValue + '"');
		});
	};
	
	var selectLanguage = function(lang) {
		var langLinkId = '#link_lang_' + lang;
		cy.get(langLinkId).should('be.visible');
		cy.get(langLinkId).click().should(function () {
			expect(localStorage.getItem('savedLanguage')).to.eq(lang);
		});
	};
	
	var toogleLanguage = function() {
		if (getLanguage() === 'fr') {
			selectLanguage('en');
		} else {
			selectLanguage('fr');
		}
	};
	
	var checkI18nElementText = function(elementSelector, frText, enText) {
		cy.get(elementSelector).should('be.visible');
		if (getLanguage() === 'fr') {
			equalsCssBeforeContentValue(cy.get(elementSelector), frText);
			selectLanguage('en');
			equalsCssBeforeContentValue(cy.get(elementSelector), enText);
		} else {
			equalsCssBeforeContentValue(cy.get(elementSelector), enText);
			selectLanguage('fr');
			equalsCssBeforeContentValue(cy.get(elementSelector), frText);
		}
	};

  context('Tests Homepage screen', function () {
    beforeEach(function () {
		cy.clearLocalStorage().should(function (ls) {
			expect(ls.getItem('savedLanguage')).to.be.null
		});
		cy.visit('http://localhost:9001');
    })
	
	it('Title', function() {
		cy.title().should('eq', 'Gamebooks Assistant');
		toogleLanguage();
		// title does not change on language selection change
		cy.title().should('eq', 'Gamebooks Assistant');
	})
	
	it('Content - Splash-head', function() {
		var elementSelector = '.splash-head';
		cy.get('.splash-head').should('be.visible');
		cy.get('.splash-head').contains('Gamebook assistant');
		toogleLanguage();
		// title does not change on language selection change
		cy.get('.splash-head').contains('Gamebook assistant');
	})
	
	it('Content - Splash-subhead', function() {
		checkI18nElementText('.splash-subhead', 'facilite la résolution de livre-jeu', 'ease the resolution of gamebooks');
	})
	
	it('Content - Selectbook Button', function() {
		checkI18nElementText('#home_selectbook_btn', 'Sélection du livre-jeu', 'Select the gamebook');
		cy.get('#home_selectbook_btn').click();
		cy.url().should('eq', 'http://localhost:9001/gamebooks/');
	})
	
	it('Footer - GitHub Project Link', function() {
		checkI18nElementText('#footer_github_link>span:last', 'Projet GitHub', 'GitHub Project');
	})
	
	it('Footer - Language', function() {
		if (getLanguage() === 'fr') {
			cy.get('#link_lang_en').should('be.visible');
			cy.get('#link_lang_en').should('contain', 'English');
			cy.get('#link_lang_fr').should('not.be.visible');
			selectLanguage('en');
			cy.get('#link_lang_fr').should('be.visible');
			cy.get('#link_lang_fr').should('contain', 'Francais');
			cy.get('#link_lang_en').should('not.be.visible');
		} else {
			cy.get('#link_lang_fr').should('be.visible');
			cy.get('#link_lang_fr').should('contain', 'Francais');
			cy.get('#link_lang_en').should('not.be.visible');
			selectLanguage('fr');
			cy.get('#link_lang_en').should('be.visible');
			cy.get('#link_lang_en').should('contain', 'English');
			cy.get('#link_lang_fr').should('not.be.visible');
		}
	})
  })
})
