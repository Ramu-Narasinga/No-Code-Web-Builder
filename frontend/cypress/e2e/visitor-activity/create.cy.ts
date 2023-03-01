import { constants } from "cypress/constants";

describe('Should create visitor activity', () => {
  it('Create Visitor Activity', () => {
    // test setup
    cy.visit(constants.exampleAppBuilt)
    cy.get('#ncwb-recorder').scrollIntoView()
    cy.get('#headline').scrollIntoView()
    cy.get('#ncwb-recorder').scrollIntoView()
    cy.get('#headline').should('exist')
    cy.get('.rating').eq(4).click()
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    let feedbackComment = `Test Feedback ${id}`;
    cy.get('.ncwb-comment').type(feedbackComment)
    cy.get('.submit-btn').click()

    // test assertions
    cy.login();
      // visit visitor activity section
    cy.visitVisitorActivity()
    cy.should('contain', feedbackComment);

    // test clean up
    cy.logout()
  });
});
