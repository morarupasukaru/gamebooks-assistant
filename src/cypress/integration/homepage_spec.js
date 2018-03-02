describe('Tests Homepage screen', function() {
  it('Open screen', function() {
    cy.visit('http://localhost:9001');
    cy.title().should('eq', 'Gamebooks Assistant');
    cy.get('.splash-head').contains('Gamebook assistant');
  })
})
