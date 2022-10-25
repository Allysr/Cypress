// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const userData = require("../fixtures/example.json")
Cypress.Commands.add('fazerLogin', () => {
      cy.visit('/');

      cy.get('[data-test="username"]').clear().type(userData.username);

      cy.get('[data-test="password"]').clear().type(userData.password, {log: false});

      cy.get('[data-test="login-button"]').should("be.visible").click();

      cy.get(".app_logo").should("be.visible");
})