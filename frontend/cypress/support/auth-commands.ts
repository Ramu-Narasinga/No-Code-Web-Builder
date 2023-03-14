// https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/global.d.ts

import { constants } from "cypress/constants";


Cypress.Commands.add('login', () => {
  // setup
  const userEmail = constants.adminTestUser;
  const userPassword = constants.testPassword;
  cy.visit(`${constants.frontendServer}/auth/login`);
  cy.get('.email').type(userEmail);
  cy.get('.password').type(userPassword);
  cy.get('.register-btn').click();

  // assert
  cy.url().should('include', '/dashboard/website');
  cy.get('.entity-title-label').should('contain', 'Website');
  cy.get('.entity-creaate-btn').should('contain', '+ Create');
});


Cypress.Commands.add('logout', () => {
  cy.visit(`${constants.frontendServer}/auth/logout`);
});
