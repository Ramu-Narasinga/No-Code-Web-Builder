describe('Should edit website', () => {
  it('Edit Website', () => {
    // test setup
    const entityTitle = 'Test Website Title';
    const entityDescription = 'Test Wesbite Description';
    cy.login();
    cy.createEntity(entityTitle, entityDescription);
    cy.visitEntity(entityTitle);

    // assert
    cy.contains(entityTitle);
    cy.get('.edit-website-tabs').should('exist');
    cy.get('.configuration').should('contain', 'Configuration')
    cy.get('.edit-website').should('contain', 'Edit Website')
    cy.get('.script-container').should('exist');
    cy.get('.ctcbtn-container').should('exist');
    cy.get('.edit-website').click();
    cy.get('.gjs-editor').should('exist');
    cy.get('.we-back-btn').click();
    cy.get('.configuration').should('contain', 'Configuration')
    cy.get('.edit-website').should('contain', 'Edit Website')
    cy.get('.script-container').should('exist');
    cy.get('.ctcbtn-container').should('exist');
    cy.get('.we-back-btn').click();

    // clean up
    cy.deleteEntity(entityTitle, entityDescription);
    cy.logout();
  });
});
