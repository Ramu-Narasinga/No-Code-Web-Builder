describe('Should create email', () => {
  it('Create Email', () => {
    // test setup
    const entityTitle = 'Test Email Title';
    const entityDescription = 'Test Email Description';
    cy.login();
    cy.visitEmail();
    cy.createEntity(entityTitle, entityDescription);

    // assert
    cy.contains(entityTitle)
    cy.contains(entityDescription)

    // clean up
    cy.deleteEntity(entityTitle, entityDescription);
    cy.logout();

  });
});
