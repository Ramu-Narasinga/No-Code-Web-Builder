import { constants } from "cypress/constants";

describe('Should load visitor activity', () => {
  it('Load Visitor Activity', () => {
    // test setup
    const userEmail = 'tu@gmail.com';
    const userPassword = 'test1234';
    cy.visit(`${constants.frontendServer}/auth/login`);
    cy.get('.email').type(userEmail);
    cy.get('.password').type(userPassword);
    cy.get('.register-btn').click();

    // assert
    cy.url().should('include', '/dashboard/website');
    cy.get('.entity-title-label').should('contain', 'Website');
    cy.get('.entity-creaate-btn').should('contain', '+ Create');
    cy.visitVisitorActivity()
    cy.get('.va-title').should('exist');
    cy.get('.va-list').should('exist');
    cy.should('contain', 'London');

    // test clean up
    cy.logout()
  });
});
