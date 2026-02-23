class PetStoreUserService {
  baseUrl = 'https://petstore.swagger.io/v2';

  createUser(body) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/user`,
      body,
      headers: { 'Content-Type': 'application/json' },
      failOnStatusCode: false
    });
  }

  getUser(username) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/user/${username}`,
      failOnStatusCode: false,
    });
  }

  updateUser(username, body) {
    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}/user/${username}`,
      body,
      headers: { 'Content-Type': 'application/json' },
      failOnStatusCode: false,
    });
  }

  deleteUser(username) {
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}/user/${username}`,
      failOnStatusCode: false
    });
  }
}

export default new PetStoreUserService();
