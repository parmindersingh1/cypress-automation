/// <reference types="cypress" />
import "cypress-v10-preserve-cookie";
import 'cypress-wait-until';

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

    cy.get('[data-cy="user-settings-button"]').click();
    cy.get(".MuiPaper-root.MuiPopover-paper")
      .find("[href='/user/settings']")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(100);
    cy.url().should("include", "/user/settings");
  });

  it("enable Zsl id demo switch", () => {
    // cy.visit("/user/settings");
    cy.get("[data-cy='feature-flag-management-button']").click({ force: true });
    cy.get("span")
      .contains("Zsl lf demo")
      .closest("li")
      .find("#toggle")
      .check({ force: true });
  });

  it("create an application", () => {
    cy.get("#nav_ > a").click({ force: true });
    cy.wait(1000);
    cy.get('[data-cy="stacked-expand-button"]').click({ force: true });
    cy.get('li > [data-cy="new-application-button"]').click();
    cy.get("[data-cy='input-wrapper'] input").type("contract-classification", {
      force: true,
    });
    cy.get(
      '[data-cy="application-template-card-[demo]-snorkel-contract-classification"]'
    ).click();
    cy.get('.sc-c3d2f28a-0 > :nth-child(1) > [data-cy="input-wrapper"]').type(
      "-pankajNn-06-10-2022-7"
    );
    cy.get(':nth-child(2) > [data-cy="input-wrapper"]').type(
      "-pankajNn-06-010-2022-7"
    );
    cy.wait(500);
    cy.get('[data-cy="save-new-application"]').click({ force: true });
  });

  it("should visit created application", () => {
    cy.waitUntil(function () {
    //   return cy.get('[data-cy="button-loading-spinner"]').then($el => $el.length)
      return Cypress.$('[data-cy="button-loading-spinner"]').length;
    });
    // cy.contains("Application Studio").should("be.visible"); Populating new application
  });

  // it("should visit user settings page on click", () => {

  //     cy.get('[data-cy="user-settings-button"] > .gap-3').click()
  //     // change user setting
  //     cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .rounded > :nth-child(1) > .w-full').click()

  //     cy.visit("/user/settings").then(window => {
  //         cy.stub(window, 'open').as('open');
  //         cy.get('.MuiSvgIcon-root').click({ multiple: true })
  //         cy.get('span').contains('Zsl lf demo').closest('li').find('#toggle').check({ force: true })
  //     });

  // })
});
