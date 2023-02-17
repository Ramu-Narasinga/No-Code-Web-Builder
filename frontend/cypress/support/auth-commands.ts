// https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/global.d.ts

const feServerUrl = 'http://localhost:4200'

Cypress.Commands.add('login', () => {
  // setup
  const userEmail = `tu@gmail.com`;
  const userPassword = 'test1234';
  cy.visit(`${feServerUrl}/auth/login`);
  cy.get('.email').type(userEmail);
  cy.get('.password').type(userPassword);
  cy.get('.register-btn').click();

  // assert
  cy.url().should('include', '/dashboard/website');
  cy.get('.entity-title-label').should('contain', 'Website');
  cy.get('.entity-creaate-btn').should('contain', '+ Create');
});


Cypress.Commands.add('logout', () => {
  cy.visit(`${feServerUrl}/auth/logout`);
});
