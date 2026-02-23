import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PetStoreUserService from '../services/PetStoreUserService';

let userData;
let updatedData;
let response;

Given('que tengo los datos de un nuevo usuario', () => {
  // timestamp para que el username no se repita entre corridas
  const ts = Date.now();
  userData = {
    id: ts,
    username: `testuser${ts}`,
    firstName: 'Carlos',
    lastName: 'Mendez',
    email: `carlos${ts}@testmail.com`,
    password: 'Pass1234',
    phone: '0999999999',
    userStatus: 1,
  };
  updatedData = {
    ...userData,
    firstName: 'Roberto',
    email: `roberto${ts}@testmail.com`,
  };
});
 
When('envio la solicitud para crear el usuario', () => {
  PetStoreUserService.createUser(userData).then((res) => {
    response = res;
  });
});

Then('la API responde con codigo {int}', (code) => {
  expect(response.status).to.eq(code);
});

When('consulto el usuario creado por username', () => {
  PetStoreUserService.getUser(userData.username).then((res) => {
    response = res;
  });
});

Then('los datos del usuario son correctos', () => {
  expect(response.body.username).to.eq(userData.username);
  expect(response.body.firstName).to.eq(userData.firstName);
  expect(response.body.email).to.eq(userData.email);
});

When('actualizo el nombre y correo del usuario', () => {
  PetStoreUserService.updateUser(userData.username, updatedData).then((res) => {
    response = res;
  });
});

Then('la actualizacion responde con codigo {int}', (code) => {
  expect(response.status).to.eq(code);
});

When('consulto el usuario actualizado por username', () => {
  PetStoreUserService.getUser(userData.username).then((res) => {
    response = res;
  });
});

Then('el nombre y correo deben estar actualizados', () => {
  expect(response.body.firstName).to.eq(updatedData.firstName);
  expect(response.body.email).to.eq(updatedData.email);
});

When('elimino el usuario', () => {
  PetStoreUserService.deleteUser(userData.username).then((res) => {
    response = res;
  });
});

Then('la eliminacion responde con codigo {int}', (code) => {
  expect(response.status).to.eq(code);
});
