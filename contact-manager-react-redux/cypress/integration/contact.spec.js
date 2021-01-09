describe('Contact Manager E2e Test Case', () => {
  before(() => {
    // runs once before all tests in the block
    cy.visit('/');
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  it('should check for wrong username and password', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('12332');
    cy.get('.btn').click();
    cy.location('pathname').should('eq', '/login');
    cy.get('#username').clear();
    cy.get('#password').clear();
  });

  it('should check for right username and password and visit homepage if success', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('.btn').click();
    cy.location('pathname').should('eq', '/');
  });

  it('should have the exact number of cards as in the server', () => {
    cy.get('.contact-card').should('have.length', 2);
  });

  it('should be able to navigate to AddCOntact page', () => {
    cy.get('#addContactLink').click();
    cy.location('pathname').should('eq', '/addContact');
  });

  it('Should be able to submit a new contact from AddContact Form', () => {
    cy.get('#contactName').type('Ravi');
    cy.get('#contactEmail').type('ravi@gmail.com');
    cy.get('#contactPhoneNumber').type('229929929');
    cy.get('.btn').click();
    cy.location('pathname').should('eq', '/');
    cy.get('.contact-card').should('have.length', 3);
    cy.get('.contact-card')
      .last()
      .within(($contactCard) => {
        cy.get('.card-title').should('have.text', 'Ravi');
        cy.get('.card-email').should('have.text', 'ravi@gmail.com');
        cy.get('.card-phoneNumber').should('have.text', '229929929');
      });
  });

  it('Should be able to remove the card', () => {
    cy.get('.contact-card')
      .last()
      .within(($contactCard) => {
        cy.get('.fa-trash-alt').click();
      });
    cy.get('.contact-card').should('have.length', 2);
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
});
