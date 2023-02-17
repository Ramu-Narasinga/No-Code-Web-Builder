describe('Should edit email', () => {
  it('Edit Email', () => {
    // test setup
    const entityTitle = 'Test Email Title';
    const entityDescription = 'Test Email Description';
    cy.login();
    cy.visitEmail();
    cy.createEntity(entityTitle, entityDescription);
    cy.visitEntity(entityTitle);

    // assert
    cy.contains(entityTitle);
    cy.get('.edit-email-tabs').should('exist');
    cy.get('.send-email-label').should('contain', 'Send Email')
    cy.get('.edit-email-label').should('contain', 'Edit Email')
    cy.get('.subject-el').should('exist')
    cy.get('.from-email-el').should('exist')
    cy.get('.add-recipients-el').should('exist')
    cy.get('.send-email-el').should('exist')
    cy.get('.edit-email-label').click();
    cy.get('.gjs-editor').should('exist');
    cy.get('.ee-back-btn').click();
    cy.get('.send-email-label').should('contain', 'Send Email')
    cy.get('.edit-email-label').should('contain', 'Edit Email')
    cy.get('.subject-el').should('exist')
    cy.get('.from-email-el').should('exist')
    cy.get('.add-recipients-el').should('exist')
    cy.get('.send-email-el').should('exist')
    cy.get('.ee-back-btn').click();

    // clean up
    cy.deleteEntity(entityTitle, entityDescription);
    cy.logout();
  });
});
