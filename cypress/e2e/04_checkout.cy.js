describe('Checkout', () => {
  it('completes checkout successfully', () => {
    cy.visit('/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    cy.get('[data-test="firstName"]').type('Adam');
    cy.get('[data-test="lastName"]').type('Horvath');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  });
});
