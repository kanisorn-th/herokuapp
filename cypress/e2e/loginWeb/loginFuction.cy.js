import dataTest from '../../fixtures/common/dataTest.json'
import commonPath from '../../fixtures/common/commonPath.json'

describe('Login success', () => {
  it('To verify that users can login successfully when input a correct username and password.', () => {
    cy.visit(commonPath.pathUrl.herokuapp);

    // Enter username
    cy.get('#username').type(dataTest.Success.username);

    // Enter password
    cy.get('#password').type(dataTest.Success.password);

    // Click login button
    cy.get('#login button[type="submit"]').click();

    // Verify successful login message
    cy.contains('You logged into a secure area!')

    // Click logout button
    cy.contains(' Logout').click();

    // Verify successful logout message
    cy.contains('You logged out of the secure area!')
  });
});

describe('Login failed - Password incorrect', () => {
  it('To verify that users can login unsuccessfully when they input a correct username but wrong password.', () => {
    cy.visit(commonPath.pathUrl.herokuapp);

    // Enter username
    cy.get('#username').type(dataTest.Success.username);

    // Enter password
    cy.get('#password').type(dataTest.Incorrect.password);

    // Click login button
    cy.get('#login button[type="submit"]').click();

    // Verify successful login message
    cy.contains('Your password is invalid!')
  });
});

describe('Login failed - Username not found', () => {
  it('To verify that users can login unsuccessfully when they input a username that did not exist.', () => {
    cy.visit(commonPath.pathUrl.herokuapp);

    // Enter username
    cy.get('#username').type(dataTest.Incorrect.username);

    // Enter password
    cy.get('#password').type(dataTest.Incorrect.password);

    // Click login button
    cy.get('#login button[type="submit"]').click();

    // Verify successful login message
    cy.contains('Your username is invalid!')
  });
});