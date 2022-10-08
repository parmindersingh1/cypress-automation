class ClassicStudio {
  getUserSettingsButton() {
    return cy.get('[data-cy="user-settings-button"]');
  }

  getUserSettingsLink() {
    return cy
      .get(".MuiPaper-root.MuiPopover-paper")
      .find("[href='/user/settings']")
      .invoke("removeAttr", "target");
  }

  getFeatureFlagListItem() {
    return cy.get("[data-cy='feature-flag-management-button']");
  }

  getZslToggleButton() {
    return cy.get("span").contains("Zsl lf demo").closest("li").find("#toggle");
  }

  getZslToggleClass() {
    return cy.get("span").contains("Zsl lf demo").closest("li").find(".track");
  }

  getApplicationButton() {
    return cy.get("#nav_ > a");
  }

  getAppicationExpandButton() {
    return cy.get('[data-cy="stacked-expand-button"]');
  }

  getNewAppicationButton() {
    return cy.get('[data-cy="new-application-button"]');
  }

  getSearchApplicationInput(options) {
    return cy.get("[placeholder='Search for preset applications']", options);
  }

  getSearchedApplicationBox(options) {
    return cy.get(
      '[data-cy="application-template-card-[demo]-snorkel-contract-classification"]',
      options
    );
  }

  getApplicationNameField(options) {
    return cy.get('[data-cy="application-name-input"]', options);
  }

  getDataSetNameField(options) {
    return cy.get('[data-cy="application-description-input"]', options);
  }

  getSaveButton(options) {
    return cy.get('[data-cy="save-new-application"]');
  }

  getApplicationHeaderText(options) {
    return cy.get("h1.text-xl", options);
  }

  getExpandNode(options) {
    return cy.get(".sc-fe09b31d-0");
  }

  getModelDeploymentNode(options) {
    return cy.get('[data-cy="operator-node"]');
  }
}

export default ClassicStudio;
