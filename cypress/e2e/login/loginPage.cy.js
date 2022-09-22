describe("Login page", () => {
    it("should display populate username", () => {
        // cy.visit(Cypress.env('url'))
        // cy.get("#user_email").type(Cypress.env('user_name'), {force: true})
        Cypress.config('defaultCommandTimeout', 10000);
        cy.visit("https://edge.k8s.g498.io/admin/login")
     
         cy.wait(3000)
         cy.get('.text-xs').click() 
      //   cy.wait(6000)

         cy.origin('https://accounts.google.com', () => {
//   <// https://accounts.google.com go here>
cy.wait(5000)
})
        
        // cy.origin("https://google.com", () => {
            cy.wait(2000)
            cy.get("#identifierId").type("pankaj.narang@snorkel.ai")
 //})
        cy.wait(5000)
        
       cy.get('#identifierNext button').click();
            cy.wait(4000)
            cy.get('#okta-signin-username').type('pankaj.narang@snorkel.ai')
         cy.get('#okta-signin-password').type('Pankneer@2007')
         cy.get('#okta-signin-submit').click()
         cy.wait(4000)
         cy.get('.o-form-button-bar').click()
         cy.wait(5000)

         
    })
})