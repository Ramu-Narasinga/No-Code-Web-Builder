describe('Should create visitor activity', () => {
  it('Create Visitor Activity', () => {
    // test setup
    cy.visit('https://79t3rc.csb.app/')
    cy.get('#ncwb-recorder').scrollIntoView()
    cy.get('#headline').scrollIntoView()
    cy.get('#ncwb-recorder').scrollIntoView()

    cy.get('#headline').should('exist')
    cy.get('.rating').eq(4).click()
    cy.get('.ncwb-comment').type('Test Feedback')
    cy.get('.submit-btn').click()
  });
});
