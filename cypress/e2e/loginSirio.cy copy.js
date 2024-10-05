

require('cypress-xpath');

describe('Pruebas de login con fixtures', () => {
  beforeEach(() => {
    cy.visit('http://sirio-qa-frontend-alb-2046658817.us-east-1.elb.amazonaws.com/user/login')
   
      });



  it('Debería iniciar sesión con un usuario válido', () => {

    cy.title().should('eq', 'Sirio | Un futuro financiero más inteligente by Novumideas'); // Asegúrate de que esta ruta sea la correcta para tu aplicación
    cy.fixture('users').then((users) => {
      const validUser = users.validUser;
      cy.get('#mat-input-0').clear().should('be.visible').type(validUser.username);
      cy.get('#mat-input-1').clear().should('be.visible').type(validUser.password);
      cy.get('.mat-raised-button > .mat-button-wrapper').should('be.visible').click()  
      


      // Verificar que el login fue exitoso
      cy.url().should('include', '/sirio/welcome');

      cy.xpath('//span[contains(text(),"Personas")]').should('be.visible').click()
      //cy.get('.mat-ripple.ng-tns-c123-17 > .name').click()
      cy.get('.ng-tns-c123-43.ng-tns-c123-16 > .sidenav-item > .mat-ripple > .name').should('be.visible').click()
      cy.xpath('//span[contains(text(),"V - VENEZOLANO")]').should('be.visible').click()
      cy.get('#mat-option-2 > .mat-option-text > small').should('be.visible').contains('P - PASAPORTE').click()
      cy.get('#identificacion').should('be.visible').type('50000005{enter}') // Dato aqui
      cy.get('#mat-dialog-0').should('be.visible').contains('CARGAR DOCUMENTO DE IDENTIFICACIÓN')
      cy.get('.mat-dialog-actions > :nth-child(1) > .mat-button-wrapper').click()
      cy.get('#mat-error-2').contains('El cliente no existe')


      cy.get('.ng-tns-c123-47.ng-tns-c123-16 > .sidenav-item > .mat-ripple > .name').click()
      cy.get('.mat-select-value-text > .mat-select-min-line').click()
      cy.get('#mat-option-5 > .mat-option-text > small').should('be.visible').contains('V - VENEZOLANO').click()
      cy.get('#mat-input-6').clear().should('be.visible').type('50000005{enter}')  // Dato aqui
      cy.get('#mat-select-4 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click()
      cy.get('#mat-option-21 > .mat-pseudo-checkbox').click()

      cy.get('.cdk-overlay-backdrop').click()

      cy.get('.mat-raised-button > .mat-button-wrapper').contains('Guardar').click()
      cy.get('.mat-simple-snackbar > span').contains('¡Operación realizada satisfactoriamente!')
      //http://sirio-qa-frontend-alb-2046658817.us-east-1.elb.amazonaws.com/sirio/welcome
      cy.xpath("//mat-icon[contains(text(),'keyboard_arrow_down')]").click()
      cy.get('.list > :nth-child(3) > span').click()




  })
});

  it('Debería iniciar sesión con un usuario supervisor', () => {
    //cy.title().should('eq', 'Sirio | Un futuro financiero más inteligente by Novumideas'); // Asegúrate de que esta ruta sea la correcta para tu aplicación
    cy.fixture('users').then((users) => {
    const supervisor = users.userSuper;
    cy.get('#mat-input-0').clear().should('be.visible').type(supervisor.username);
    cy.get('#mat-input-1').clear().should('be.visible').type(supervisor.password);
    cy.get('.mat-raised-button > .mat-button-wrapper').should('be.visible').click()  
  })
})
});



