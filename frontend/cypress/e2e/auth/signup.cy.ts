import { constants } from "cypress/constants";

describe('Should signup', () => {
  it('Signup', () => {
    // test setup
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const userEmail = `tu.${id}@gmail.com`;
    const userPassword = 'randompwd';
    cy.visit(`${constants.frontendServer}/auth/signup`)
    cy.get('.first-name').type('Test');
    cy.get('.last-name').type(`User ${id}`);
    cy.get('.email').type(userEmail);
    cy.get('.password').type(userPassword);
    cy.get('.confirm-password').type(userPassword);
    cy.get('.register-btn').click();

    // test assert
    cy.url().should('include', '/dashboard/website');
    cy.get('.entity-title-label').should('contain', 'Website');
    cy.get('.entity-creaate-btn').should('contain', '+ Create');

    // test cleanup
    cy.request('DELETE', `${constants.backendServer}/auth/delete`, {
      email: 'ramu.narasinga@gmail.com',
      password: 'test1234',
      userEmail
    }).then((response) => {
      console.log("response afyer deleting user:", response);
      // response.body is automatically serialized into JSON
      // expect(response.body).to.have.property('name', 'Jane'); // true
    });
    cy.logout();

  });
});
