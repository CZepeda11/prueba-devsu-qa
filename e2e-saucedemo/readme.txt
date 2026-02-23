Instrucciones de ejecucion Prueba E2E (SauceDemo) ejercico 2

Automatizacion hecha con Cypress 13, Cucumber y JavaScript.


1 Prerequisitos
Tener Node.js v16 o superior y npm instalados.


2 Instalacion
Abrir la terminal, ir a la carpeta e2e-saucedemo y correr: npm install


3 Como ejecutar
Para correr las pruebas se abre Chrome automaticamente: npm  test


4 Reportes
Cuando terminan las pruebas se generan solos en cypress/reports.
Ahi queda el reporte HTML, el JSON y los videos de cada ejecucion.


5 Que se esta probando
Se automatiza el flujo de compra completo en https://www.saucedemo.com/

-Hacer login con standard_user / secret_sauce
- Agregar 2 productos al carrito
- Entrar al carrito y checar que esten los 2
- Llenar el formulario de checkout con datos del comprador
-Confirmar la compra
- Validar que salga el mensaje THANK YOU FOR YOUR ORDER


6 Estructura del proyecto

    cypress/e2e/features/              Escenarios en Gherkin (español)
    cypress/support/pages/             Page Objects de cada pantalla (POM)
    cypress/support/step_definitions/  Steps que conectan el feature con los page objects
    cypress/fixtures/                  Datos de prueba


7 Tecnologias
    Cypress 13
    @badeball/cypress-cucumber-preprocessor para  BDD con Cucumber
    Page Object Model
    Gherkin en español