# language: es

Característica: Flujo de compra en SauceDemo

  Escenario: Realizar una compra exitosa con dos productos
    Dado que el usuario ingresa a SauceDemo
    Cuando se autentica con usuario "standard_user" y password "secret_sauce"
    Y agrega 2 productos al carrito
    Y accede al carrito de compras
    Entonces el carrito debe mostrar 2 productos
    Cuando procede al checkout e ingresa sus datos
    Y confirma la compra
    Entonces se debe mostrar el mensaje "THANK YOU FOR YOUR ORDER"
