class CheckoutOverviewPage {
  clickFinish() {
    cy.get('#finish').click();
  }
}

export default new CheckoutOverviewPage();
