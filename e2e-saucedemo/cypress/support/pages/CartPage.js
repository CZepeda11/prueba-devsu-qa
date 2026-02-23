class CartPage {
  cartItems = '.cart_item';

  getItemCount() {
    return cy.get(this.cartItems).its('length');
  }

  clickCheckout() {
    cy.get('#checkout').click();
  }
}

export default new CartPage();
