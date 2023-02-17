Cypress.Commands.add('createEntity', (entityTitle: string, entityDescription: string) => {
  // setup
  cy.get('.entity-creaate-btn').click();
  cy.get('.em-mt').should('contain', 'Create');
  cy.get('.entity-title-label').should('contain', 'Title');
  cy.get('.em-ft > .entity-title-val').type(entityTitle);
  cy.get('.entity-description-label').should('contain', 'Description');
  cy.get('.em-fd > .entity-description-val').type(entityDescription);
  cy.get('.em-c-btn').click();
});

Cypress.Commands.add('deleteEntity', (entityTitle: string, entityDescription: string) => {
  cy.get('.eli-el-delete-btn').click();

  cy.contains(entityTitle).should('not.exist');
  cy.contains(entityDescription).should('not.exist');
});

Cypress.Commands.add('visitEntity', (entityTitle: string) => {
  cy.get('.eli-el-title').click();
});
