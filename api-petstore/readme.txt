Instrucciones de ejecucion Prueba API (PetStore) ejercicio 3

Automatizacion hecha con Cypress 13, Cucumber y JavaScript.


1 Prerequisitos
Tener Node.js v16 o superior y npm.


2 Instalacion
Ir a la carpeta api-petstore desde la terminal y correr:

    npm install


3 Como ejecutar
Para correr las pruebas, se abre Chrome solo:
    npm test

4 Reportes
Se generan solos en cypress/reports cuando terminan las pruebas.
Queda el HTML, JSON y los videos.

5 Que se esta probando
Se hace un CRUD completo de usuarios contra la API de PetStore
(https://petstore.swagger.io/v2/user)

-Crear un usuario con POST /user
- Buscarlo con GET /user/{username} y verificar que los datos esten bien
- Actualizar nombre y correo con PUT /user/{username}
- Volver a consultar para confirmar que si se guardaron los cambios
- Eliminar el usuario con DELETE /user/{username}


6 Estructura
    cypress/e2e/features/              Escenario BDD en Gherkin
    cypress/support/services/       Clase que encapsula las llamadas HTTP
    cypress/support/step_definitions/   Steps que conectan el feature con el servicio


7 Tecnologias

    Cypress 13 (cy.request para las llamadas HTTP)
    @badeball/cypress-cucumber-preprocessor para BDD
    Service Object Pattern (como POM pero para APIs)
    Gherkin en español