
require('cypress-xpath');
/// <reference types="Cypress" />

describe('Pruebas de login con fixtures', () => {
    beforeEach(() => {
      cy.visit('http://sirio-qa-frontend-alb-2046658817.us-east-1.elb.amazonaws.com/user/login') // Asegúrate de que esta ruta sea la correcta para tu aplicación
    });
  
  
  
    it('Debería iniciar sesión con un usuario válido', () => {
  
      
      cy.fixture('users').then((users) => {
        const validUser = users.validUser;
        cy.get('#mat-input-0').clear().should('be.visible').type(validUser.username);
        cy.get('#mat-input-1').clear().should('be.visible').type(validUser.password);
        cy.get('.mat-raised-button > .mat-button-wrapper').should('be.visible').click()  
        
        // Verifica que el login fue exitoso
  
        // Verificar que el login fue exitoso
        cy.url().should('include', '/sirio/welcome');
        // cy.contains('Bienvenido, validUser').should('be.visible');
  
      });
    });
  
    it('No debería iniciar sesión con un usuario inválido', () => {
      cy.fixture('users').then((users) => {
        const invalidUser = users.invalidUser;
  
        cy.get('#mat-input-0').clear().should('be.visible').type(invalidUser.username);
        cy.get('#mat-input-1').clear().should('be.visible').type(invalidUser.password);
        cy.get('.mat-raised-button > .mat-button-wrapper').should('be.visible').click()  
        
        // Verifica que el login falló
        cy.url().should('include', '/login');
        cy.contains('Verifica').should('be.visible');
     });
    });
  
    it('No debería iniciar sesión con un password inválido', () => {
      cy.fixture('users').then((users) => {
        const invalidPass = users.invalidPass;
        cy.get('#mat-input-0').clear().should('be.visible').type(invalidPass.username);
        cy.get('#mat-input-1').clear().should('be.visible').type(invalidPass.password);
        cy.get('.mat-raised-button > .mat-button-wrapper').should('be.visible').click()  
        
        // Verifica que el login falló
        cy.url().should('include', '/login');
        cy.contains('Verifica').should('be.visible');
      });
    });
  });
  