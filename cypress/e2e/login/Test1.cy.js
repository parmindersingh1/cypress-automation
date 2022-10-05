/// <reference types="cypress" />
import 'cypress-v10-preserve-cookie'

describe("Login page", () => {
    before(() => {
        cy.login()
       
    });

    beforeEach(() => {
        const names = []
        Cypress.env("cookies").forEach(data => {
            names.push(data.name)
        })
        cy.preserveCookieOnce(...names)
        cy.visit("/")
    })

    it("should visit user settings page on click", () => {
   
        cy.get('[data-cy="user-settings-button"] > .gap-3').click()
        // change user setting
        cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded > :nth-child(1) > .w-full').click()
        // cy.wait(5000)
        cy.visit("/user/settings").then(window => {
            cy.stub(window, 'open').as('open');
            cy.get('.MuiSvgIcon-root').click({ multiple: true })
            // cy.wait(3000)
            // cy.get('#toggle').check({force:true})
            cy.get('span').contains('Zsl lf demo').closest('li').find('#toggle').check({ force: true })
        });

    })
})

