describe('Cart', () => {
  it('adds item to cart and shows correct badge count', () => {
    cy.visit('/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 1);
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  });
});
