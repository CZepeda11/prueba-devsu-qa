class LoginPage {
  usernameField = '#user-name';
  passwordField = '#password';
  loginButton = '#login-button';

  visit() {
    cy.visit('/');
  }

  login(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginButton).click();
  }
}

export default new LoginPage();
