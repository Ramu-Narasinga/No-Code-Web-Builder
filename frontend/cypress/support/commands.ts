// https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/global.d.ts

Cypress.Commands.add('visitEmail', () => {
  cy.get('.email-module').click();
});

Cypress.Commands.add('visitWebsite', () => {
  cy.get('.website-module').click();
});

Cypress.Commands.add('visitVisitorActivity', () => {
  cy.get('.visitor-activity-module').click();
});

declare namespace Cypress {
  interface Chainable {
    createEntity(entityTitle: string, entityDescription: string): Chainable<void>;
    deleteEntity(entityTitle: string, entityDescription: string): Chainable<void>;
    login(): Chainable<void>;
    logout(): Chainable<void>;
    visitEntity(entityTitle: string): Chainable<void>;
    visitEmail(): Chainable<void>;
    visitWebsite(): Chainable<void>;
    visitVisitorActivity(): Chainable<void>;
    // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
    // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
  }
}
