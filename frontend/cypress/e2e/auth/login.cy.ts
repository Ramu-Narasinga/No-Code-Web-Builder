import { constants } from "cypress/constants";

describe('Should login', () => {
  it('Login', () => {
    // test setup
    cy.login();

    // test assert
    cy.url().should('include', '/dashboard/website');
    cy.get('.entity-title-label').should('contain', 'Website');
    cy.get('.entity-creaate-btn').should('contain', '+ Create');

    // test cleanup
    cy.logout();
  });
});
