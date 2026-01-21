describe('Invalid login', () => {
  it('shows error with wrong password', () => {
    cy.visit('/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });
});
