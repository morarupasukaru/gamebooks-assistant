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

import * as common from '../sharedFunctions';

Cypress.Commands.add("toogleLanguage", () => { 
	if (common.getLanguage() === 'fr') {
		common.selectLanguage('en');
	} else {
		common.selectLanguage('fr');
	}
});

Cypress.Commands.add("modalFeatureNotImplemented", () => {
	var lang = common.getLanguage();
	cy.get('#modal').should('be.visible');
	if (lang === 'fr') {
		cy.get('#modal-title').contains("ERREUR");
		cy.get('#modal-text').contains("La fonctionnalité n'est pas encore implémentée.");
	} else {
		cy.get('#modal-title').contains("ERROR");
		cy.get('#modal-text').contains("Functionality is not yet implemented.");
	} 
	cy.get('#modal-closeBtn').click();
	cy.get('#modal').should('not.be.visible');
});