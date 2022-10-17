/// <reference types="cypress" />
import "cypress-v10-preserve-cookie";
import "cypress-wait-until";
import ClassicStudio from "../../support/pages/ClassicStudio";

const classicStudio = new ClassicStudio();

describe("Classic Studio Demo", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    const names = [];
    Cypress.env("cookies").forEach((data) => {
      names.push(data.name);
    });
    cy.preserveCookieOnce(...names);
  });
  
  it("visit application studio",  { defaultCommandTimeout: 5000 },
  () => {
    cy.visit("https://edge.k8s.g498.io/applications/4427/nodes/22422/studio");

    // cy.visit("https://edge.k8s.g498.io/applications/4388/nodes/22271/studio");
    cy.wait(10000);
   
    for (let i = 1; i<3; i++) {   
     
      classicStudio.getclickontoggleforward({ timeout: 15000 }).click({ force: true })
    }
    cy.wait(5000);

    for (let i = 1; i<3; i++) {  
         
        classicStudio. getclicktogglebackward({ timeout: 15000 }).click({ force: true })
      }
      cy.wait(7000);
     classicStudio.gethighlighttext().trigger('mousedown')
    .then(($el) => {
     const el = $el[0]
     const document = el.ownerDocument
     let range = new Range();
     range.setStart(el.firstChild, 0);
     range.setEnd(el.firstChild, 27);
  
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    })
     .trigger('mouseup')
     cy.wait(3000)
     classicStudio.getcreateLF().click()
     cy.wait(3000)
     classicStudio.getLabel().click()
     cy.wait(3000)
     classicStudio.getLabelLoan().eq(1).click({force: true})
     cy.wait(1000)
     classicStudio.getthreedot().click()
     cy.wait(2000)
     classicStudio.getcasesensitive().click()
     cy.wait(2000)
     classicStudio.getsaveandrun().click({force:true})
     cy.wait(9000)
     classicStudio.getclosetab().click({force:true})
     

    })

});
