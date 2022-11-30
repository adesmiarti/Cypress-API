it('Create a User', () => {
   let body = {
            "id": 0,
            "username" : Cypress.env("username"),
            "firstName" : "anjar",
            "lastName" : "123",
            "email": "adesmiarti@gmail.com",
            "password": "12345",
            "phone" : "085758222222",
            "userStatus" : 0
}
console.log(body)
cy.request('POST', '/user', body).as('createUser');
cy.get('@createUser').then(createUser => {
    expect(createUser.status).to.eq(200);
});
});