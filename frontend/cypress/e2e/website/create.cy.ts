describe('Should create website', () => {
  it('Create Website', () => {
    // test setup
    const entityTitle = 'Test Website Title';
    const entityDescription = 'Test Wesbite Description';
    cy.login();
    cy.createEntity(entityTitle, entityDescription);

    // assert
    cy.contains(entityTitle)
    cy.contains(entityDescription)

    // clean up
    cy.deleteEntity(entityTitle, entityDescription);
    cy.logout();

  });
});
