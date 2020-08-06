export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  before(() => {
    cy.visit('/');
  });
  it('should offer to select an employee', () => {
    cy.get('.card-title').should('contain', 'Select Employee');
  });
  it('should navigate to Jose Jacobs', () => {
    cy.contains('a', 'Jose Jacobs').click();
    cy.get('.card-title').should('contain', 'Jose Jacobs');
  });
});
