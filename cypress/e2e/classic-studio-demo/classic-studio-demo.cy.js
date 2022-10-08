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

      //cy.get('[data-cy="user-settings-button"]').click();
      classicStudio.getUserSettingsButton().click();

      // cy.get(".MuiPaper-root.MuiPopover-paper")
      //   .find("[href='/user/settings']")
      //   .invoke("removeAttr", "target")
      //   .click();

      classicStudio.getUserSettingsLink().click();

      cy.url().should("include", "/user/settings");
    }
  );

  it("enable Zsl id demo switch", () => {
    // cy.get("[data-cy='feature-flag-management-button']").click({ force: true });
    classicStudio.getFeatureFlagListItem().click({ force: true });

    // cy.get("span")
    //   .contains("Zsl lf demo")
    //   .closest("li")
    //   .find("#toggle")
    //   .check({ force: true });
    classicStudio.getZslToggleButton().check({ force: true });

    // cy.get("span")
    // .contains("Zsl lf demo")
    // .closest("li")
    // .find(".track").should("have.class", "bg-green-500")
    classicStudio.getZslToggleClass().should("have.class", "bg-green-500");
  });

  it("create an application", () => {
    // cy.get("#nav_ > a").click({ force: true });
    classicStudio.getApplicationButton().click({ force: true });

    // cy.get('[data-cy="stacked-expand-button"]').click({ force: true });
    classicStudio.getAppicationExpandButton().click({ force: true });

    // cy.get('[data-cy="new-application-button"]').eq(1).click({ force: true });
    classicStudio.getNewAppicationButton().eq(1).click({ force: true });

    // cy.get("[placeholder='Search for preset applications']", {timeout: 10000 })
    //   .type("contract-classification", {
    //     force: true,
    //   });

    classicStudio
      .getSearchApplicationInput()
      .type("contract-classification", {
        force: true,
      })

    // cy.get(
    //   '[data-cy="application-template-card-[demo]-snorkel-contract-classification"]',
    //   { timeout: 10000 }
    // ).click({ force: true });


    classicStudio
      .getSearchedApplicationBox()
      .click({ force: true });

    cy.wait(1000);

    // cy.get('[data-cy="application-name-input"]', { timeout: 10000 }).type(
    //   "-pankajQzz-" + new Date().valueOf()
    // );

    classicStudio
      .getApplicationNameField()
      .type("-pankajQzzi-" + new Date().valueOf());

    cy.wait(1000);

    // cy.get('[data-cy="application-description-input"]', {
    //   timeout: 10000,
    // }).type("-pankajQzz-" + new Date().valueOf());

   classicStudio.getDataSetNameField().type("-pankajQzzi-" + new Date().valueOf());

    // cy.get('[data-cy="save-new-application"]').click({ force: true });
    cy.wait(1000);
    classicStudio.getSaveButton().click({ force: true });
    cy.wait(60000);


    // cy.get("h1.text-xl", { timeout: 15000 }).should("be.visible");
    classicStudio.getApplicationHeaderText({ timeout: 15000 }).should("be.visible");
    // cy.get(".sc-fe09b31d-0").click();
    // cy.get('[data-cy="operator-node"]').eq(2).click();

    classicStudio.getExpandNode().click();

    classicStudio.getModelDeploymentNode().should("be.visible");
    classicStudio.getModelDeploymentNode().eq(2).click();
    cy.wait(5000);
  });
});
