class CheckoutCompletePage {
  completeHeader = '.complete-header';

  getConfirmationTitle() {
    return cy.get(this.completeHeader);
  }
}

export default new CheckoutCompletePage();
