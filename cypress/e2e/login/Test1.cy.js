describe("Login page", () => {
    it("should display populate username", () => {
        // cy.visit(Cypress.env('url'))
        // cy.get("#user_email").type(Cypress.env('user_name'), {force: true})
      //  Cypress.config('defaultCommandTimeout', 10000);
      //  cy.visit("https://edge.k8s.g498.io/admin/login")
      const cookiesData=[
        {
            name:"refresh_token",
            value:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6InBhbmthai5uYXJhbmciLCJ1c2VyX3VpZCI6MTY4LCJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NTA1MTE2M30.kqxFv75F0xI2phzn9e8Oa3yvqG7T2i3FC44JD7P7FGAwx88df9VG77O_BxWWoN27-M-vgxLRyoa3t7wXwI4l5Yzfkv10bhVCADdwrwCxgn9MfisXzfhNkr_17DWh-mYbcpCtYtj36y1CzQYjgZNytOYbFOvFjNgQXrKgzEwJW5u4SrVNtRk4BUhvlapjKzc0ggO2AbtYdc_NNemW4_k0k6_tscHzvH_kvKqzkaiMuYDegQRP8R5f5h_CyE4AQcUkbBPkGbb7PFXVihI__vIMQg1mgKNfNqd9QsLxkRHGXEqIgHBXDXlY-xZ-5hsVH8nuUCELTXT4EEZIPGB-hPr2HDVY4B39G_r8SWc09NrF59_y7OG8r5NkdHQSUygvNiAmn-rbR4CsFRtz15U4p50TCy94FZ9CeAIHZFX1kRqY-VqelrNqzHeguNkXqA4ywc2Vdye9swESDGK7w5AbEowgBptGLYPm2TTH5nV1Qcox-qPNxWPxbCgcM15sYwyC7e1dWJV-hy8I4bpUUlMP9SPBft0DM1o26hZtvY0tLyak6fy_AUdq5HwpbLDjIu0I7TBVgHDTPRg8Q4rsbJW3idp6JmkVKUQEfxVPgjT2TPSGVMtZDMRL6ehgQElUXyPhANCUwYKH6epTyiWdFXojsgmFeLLJW5d-A1TE-0c7CAuZFgU",
            options:{
                domain:"edge.k8s.g498.io",
                httpOnly:false,
                path:"/",
                secure:false,
                sameSite:undefined,
    
            }
    
        },
        {
            name:"jupyterhub-user-pankaj.narang",
            value:"2|1:0|10:1664431883|29:jupyterhub-user-pankaj.narang|40:SkhEcmpJYkQ1SFZ6ZWtUS2NhbXpLRUhXdXV4dHdi|d95ed8cee657f35bedbc5b7de9e3cb085d3806c473957c35493db459f8c905f6",
            options:{
                domain:"edge.k8s.g498.io",
                httpOnly:true,
                path:"/jupyterhub/user/pankaj.narang/",
                secure:false,
                sameSite:undefined,
    
            }
    
        },
        {
            name:"jupyterhub-hub-login",
            value:"'2|1:0|10:1663828718|20:jupyterhub-hub-login|44:MDYxMWQ5N2I5N2M3NDFkM2EwYTkyMDdhODBiYjhlMDY=|5e15455fa4edb7c6096402c8d427f5372ed6d9421eef3ef191c59859e5efab15'",
            options:{
                domain:"edge.k8s.g498.io",
                httpOnly:true,
                path:"/jupyterhub/user/pankaj.narang/",
                secure:false,
                sameSite:undefined,
            }
    
        },
        {
            name:"fs_uid",
            value:"#17N11F#4737603415564288:5333465427185664:::#/1683012553",
            options:{
                domain:".g498.io",
                httpOnly:false,
                path:"/",
                secure:true,
                sameSite:"Strict",
            }
    
        },
        {
            name:"_xsrf",
            value:"2|2f293f58|09c5127821e5df87b25f493736d8ebff|1664431883",
            options:{
                domain:"edge.k8s.g498.io",
                httpOnly:false,
                path:"/",
                secure:false,
                sameSite:undefined,
            }
    
        },
    
    ]
    cookiesData.forEach(data =>{
        cy.setCookie(data.name,data.value,data.options)

    })
        
       cy.wait(3000)
       cy.visit("https://edge.k8s.g498.io")
       cy.wait(1000)
       cy.get('[data-cy="user-settings-button"] > .gap-3').click()
     // change user setting
     cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded > :nth-child(1) > .w-full').click()
    cy.wait(5000)
    cy.visit("https://edge.k8s.g498.io/user/settings").then(window => {
    cy.stub(window, 'open').as('open');
    cy.get('.MuiSvgIcon-root').click({ multiple: true })
    cy.wait(3000)
   // cy.get('#toggle').check({force:true})
    cy.get('span').contains('Zsl lf demo').closest('li').find('#toggle').check({force:true})
    //cy.get('#nav_ > .flex > .truncate').click()
    cy.wait(2000)
    cy.get('#nav_ > .flex').click({ force: true })
    cy.wait(5000)
    cy.get('[data-cy="stacked-expand-button"]').click()
    cy.wait(3000)
    cy.get('li > [data-cy="new-application-button"]').click()
    cy.wait(5000)
    cy.get("[data-cy='input-wrapper'] input").type('contract-classification',{force:true})
    cy.wait(5000)
    cy.get('[data-cy="application-template-card-[demo]-snorkel-contract-classification"]').click()
    cy.get('.sc-c3d2f28a-0 > :nth-child(1) > [data-cy="input-wrapper"]').type('-pankajNn-06-010-2022')
    cy.get(':nth-child(2) > [data-cy="input-wrapper"]').type('-pankajNn-06-10-2022')
    cy.get('[data-cy="save-new-application"]').click()
    // cy.wait(7000)
    // cy.get('.sc-fe09b31d-0').click()

       
    
    // cy.get('#toggle').next('.track').then(($toggle)=>{
    //     //cy.log($toggle)
    //     $toggle.removeClass('bg-gray-600').addClass('')
    // })
    //cy.get('.track rounded-full w-12 h-6 bg-gray-600')
    
    
});
         
        
    })
})

