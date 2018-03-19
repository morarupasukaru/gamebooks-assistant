// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import * as common from '../sharedTests';

Cypress.Commands.add("toogleLanguage", () => { 
	if (common.getLanguage() === 'fr') {
		common.selectLanguage('en');
	} else {
		common.selectLanguage('fr');
	}
});

function testModalError(lang, fr, en) {
	if (!lang) {
		lang = common.getLanguage();
	}
	cy.get('#modal-id').should('be.visible');
	if (lang === 'fr') {
		cy.get('#modal-title-id').contains("ERREUR");
		cy.get('#modal-text-id').contains(fr);
	} else {
		cy.get('#modal-title-id').contains("ERROR");
		cy.get('#modal-text-id').contains(en);
	} 
	cy.get('#modal-close-id').click();
	cy.get('#modal-id').should('not.be.visible');
};

Cypress.Commands.add("modalWithErrorLocalstorageUnavailable", (lang) => { 
	testModalError(lang, "LocalStorage est requis à l'application mais n'est pas disponible.", 
		"LocalStorage is required by the application but is unavailable.");
});

Cypress.Commands.add("modalWithErrorFeatureNotImplemented", () => { 
	testModalError(undefined, "La fonctionnalité n'est pas encore implémentée.", 
		"Functionality is not yet implemented.");
});

Cypress.Commands.add("setLocalStorageItem", (key, value) => {
	localStorage.setItem(key, value);
});
