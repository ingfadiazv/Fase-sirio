describe('Example to demo conditional testing in cypress', () => {
    beforeEach(() => {
        cy.visit('http://sirio-qa-frontend-alb-2046658817.us-east-1.elb.amazonaws.com/user/login')
    })

    it('Check that if you find WikiVoyage on the page, then click on it and validate (Go to If)', () => {

        cy.title().should('eq', 'Sirio | Un futuro financiero más inteligente by Novumideas');
        //cy.title().should('eq','Wikipedia')
        cy.get('body').then((body) => {
            if (body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
            }
            else {
                cy.get('[data-jsl10n="wiktionary.name"]').click()
            }
        })
        cy.title().should('eq', 'Wikipedia')
    })

})