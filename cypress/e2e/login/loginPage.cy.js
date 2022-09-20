describe("Login page", () => {
    it("should display populate username", () => {
        cy.visit(Cypress.env('url'))
        cy.get("#user_email").type(Cypress.env('user_name'), {force: true})
    })
})