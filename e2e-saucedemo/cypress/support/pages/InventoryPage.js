class InventoryPage {
  inventoryItems = '.inventory_item';
  cartBadge = '.shopping_cart_badge';
  cartLink = '.shopping_cart_link';

  addProductByIndex(index) {
    cy.get(this.inventoryItems)
      .eq(index)
      .find('button[data-test^="add-to-cart"]')
      .click();
  }

  goToCart() {
    cy.get(this.cartLink).click();
  }
}

export default new InventoryPage();
