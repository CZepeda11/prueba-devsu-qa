# language: es

Característica: Gestion de usuarios en PetStore API

  Escenario: Flujo completo CRUD de un usuario
    Dado que tengo los datos de un nuevo usuario
    Cuando envio la solicitud para crear el usuario
    Entonces la API responde con codigo 200
    Cuando consulto el usuario creado por username
    Entonces los datos del usuario son correctos
    Cuando actualizo el nombre y correo del usuario
    Entonces la actualizacion responde con codigo 200
    Cuando consulto el usuario actualizado por username
    Entonces el nombre y correo deben estar actualizados
    Cuando elimino el usuario
    Entonces la eliminacion responde con codigo 200
