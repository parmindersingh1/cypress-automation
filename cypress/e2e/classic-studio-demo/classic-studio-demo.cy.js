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

  it("should opens the user settings page", () => {
    cy.visit("/");

    classicStudio.getUserSettingsButton().click();

    classicStudio.getUserSettingsLink().click();

    cy.url().should("include", "/user/settings");
  });

  it("enable Zsl id demo switch", () => {
    classicStudio.getFeatureFlagListItem().click({ force: true });

    classicStudio.getZslToggleButton().check({ force: true });

    classicStudio.getZslToggleClass().should("have.class", "bg-green-500");
  });

  it("create an application", () => {
    classicStudio.getApplicationButton().click({ force: true });

    classicStudio.getAppicationExpandButton().click({ force: true });

    classicStudio.getNewAppicationButton().eq(1).click({ force: true });

    classicStudio.getSearchApplicationInput().type("contract-classification", {
      force: true,
    });

    classicStudio.getSearchedApplicationBox().click({ force: true });

    cy.wait(1000);

    classicStudio
      .getApplicationNameField()
      .type("-pankajQzzi-" + new Date().valueOf());

    cy.wait(1000);

    classicStudio
      .getDataSetNameField()
      .type("-pankajQzzi-" + new Date().valueOf());

    cy.wait(1000);
    classicStudio.getSaveButton().click({ force: true });
    cy.wait(60000);

    classicStudio
      .getApplicationHeaderText({ timeout: 15000 })
      .should("be.visible");

    classicStudio.getExpandNode().click();

    classicStudio.getModelDeploymentNode().should("be.visible");
    classicStudio.getModelDeploymentNode().eq(2).click();
    cy.wait(5000);
  });
});
