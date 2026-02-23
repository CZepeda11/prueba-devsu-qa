import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage';
import CheckoutCompletePage from '../pages/CheckoutCompletePage';

Given('que el usuario ingresa a SauceDemo', () => {
  LoginPage.visit();
});

When(
  'se autentica con usuario {string} y password {string}',
  (user, pass) => {
    LoginPage.login(user, pass);
  }
);

When('agrega {int} productos al carrito', (cantidad) => {
  for (let i = 0; i < cantidad; i++) {
    InventoryPage.addProductByIndex(i);
  }
});

When('accede al carrito de compras', () => {
  InventoryPage.goToCart();
});

Then('el carrito debe mostrar {int} productos', (cantidad) => {
  CartPage.getItemCount().should('eq', cantidad);
});

When('procede al checkout e ingresa sus datos', () => {
  CartPage.clickCheckout();
  cy.fixture('testdata').then((data) => {
    CheckoutPage.fillInformation(data.checkout.firstName, data.checkout.lastName, data.checkout.postalCode);
    CheckoutPage.clickContinue();
  });
});

When('confirma la compra', () => {
  CheckoutOverviewPage.clickFinish();
});

Then('se debe mostrar el mensaje {string}', (mensaje) => {
  CheckoutCompletePage.getConfirmationTitle()
    .invoke('text')
    .then((text) => {
      // comparar en mayusculas por si cambian el case en la pagina
      expect(text.trim().toUpperCase()).to.contain(mensaje.toUpperCase());
    });
});
