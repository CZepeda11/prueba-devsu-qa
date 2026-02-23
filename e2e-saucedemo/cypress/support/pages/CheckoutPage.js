class CheckoutPage {
  firstNameInput = '#first-name';
  lastNameInput = '#last-name';
  postalCodeInput = '#postal-code';
  continueBtn = '#continue';

  fillInformation(firstName, lastName, postalCode) {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.postalCodeInput).type(postalCode);
  }

  clickContinue() {
    cy.get(this.continueBtn).click();
  }
}

export default new CheckoutPage();
