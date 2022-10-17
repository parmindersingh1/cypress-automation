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

  it(
    "should opens the user settings page",
    { defaultCommandTimeout: 5000 },
    () => {
      cy.visit("/");

      
      classicStudio.getUserSettingsButton().click();
      classicStudio.getUserSettingsLink().click();
      cy.wait(1000)
      cy.url().should("include", "/user/settings");
    }
  );

   it("enable Zsl id demo switch", () => {
        classicStudio.getFeatureFlagListItem().click({ force: true });
        classicStudio.getZslToggleButton().check({ force: true });

        classicStudio.getZslToggleClass().should("have.class", "bg-green-500");
  });

  it("create an application", () => {
    
    classicStudio.getApplicationButton().click({ force: true });
    classicStudio.getAppicationExpandButton().click({ force: true });
    classicStudio.getNewAppicationButton().eq(1).click({ force: true });

    cy.wait(2000)
       classicStudio
      .getSearchApplicationInput()
      .type("contract-classification", {
        force: true,
      })

      cy.wait(2000)
      classicStudio.getSearchedApplicationBox().click({ force: true });

    cy.wait(5000);
    classicStudio
      .gettingClickOnName().click({force: true})

    classicStudio
      .getApplicationNameField()
      .type("-pankajQAutomationQAtest" + new Date().valueOf())
  

    cy.wait(1000);
    classicStudio.gettingClickOnDataSetName().click({force: true})
    classicStudio.getDataSetNameField().type("-pankajAutomationQAtest" + new Date().valueOf());

    cy.wait(1000);
    classicStudio.getSaveButton().click({ force: true });
    cy.wait(110000);
    classicStudio.getApplicationHeaderText({ timeout: 15000 }).should("be.visible");
    classicStudio.getExpandNode().click();
    classicStudio.getModelDeploymentNode().should("be.visible");
    classicStudio.getModelDeploymentNode().eq(2).click();
    cy.wait(5000);
  
    classicStudio.getbacktoclassicstudio().click()})
    it("visit application Page",  { defaultCommandTimeout: 5000 },
    () => {
      cy.wait(10000)
      for (let i = 1; i<3; i++)
      {  
        cy.wait(8000) 
     
        classicStudio.getclickontoggleforward({ timeout: 15000 }).click({ force: true })
      }
      cy.wait(5000);
  
      for (let i = 1; i<3; i++) {  
           cy.wait(5000)
          classicStudio. getclicktogglebackward({ timeout: 15000 }).click({ force: true })
        }
        cy.wait(8000);
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
      cy.wait(8000)
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
               
})
