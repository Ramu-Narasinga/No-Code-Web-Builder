describe('Should login', () => {
  it('Login', () => {
    // test setup
    const userEmail = `tu@gmail.com`;
    const userPassword = 'test1234';
    cy.visit('http://localhost:4200/auth/login');
    cy.get('.email').type(userEmail);
    cy.get('.password').type(userPassword);
    cy.get('.register-btn').click();

    // test assert
    cy.url().should('include', '/dashboard/website');
    cy.get('.entity-title-label').should('contain', 'Website');
    cy.get('.entity-creaate-btn').should('contain', '+ Create');

    // test cleanup
    cy.logout();
  });
});
