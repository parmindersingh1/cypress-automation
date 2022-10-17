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
      '[data-cy="application-template-card-contract-classification"]',
      options
    );
  }

  gettingClickOnName(){
    return cy.get('[data-cy="input-wrapper"] input[data-cy="application-name-input"]')
  }

  gettingClickOnDataSetName(){
    return cy.get('[data-cy="input-wrapper"] input[data-cy="application-description-input"]')
  }

  getApplicationNameField(options) {
    return cy.get('input[data-cy="application-name-input"]', options);
  }

  getDataSetNameField(options) {
    return cy.get('input[data-cy="application-description-input"]', options);
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
  getbacktoclassicstudio(options){
    return cy.get('[data-cy="studio-version-toggle"]');
  }
  getclickontoggleforward(options){
   
   return cy.get('[data-cy="dataviewer-pagination"]').find('button').eq(1)
 
  }
  getclicktogglebackward(options){
    return cy.get('[data-cy="dataviewer-pagination"]').find('button').eq(0)
  }
  gethighlighttext(options){
    
    return cy.get("#data_item_16 span")
   
  }
  getcreateLF(options){
   // return cy.get('#doc-mode-createLF')

    return cy.get('[data-cy="popup-create-lf"]')

  }
  getLabel(options){
  
    return cy.get('[data-cy="dropdown-entry-button-label-select"]')
    
  }
  getLabelLoan(options){
     return cy.get('[class="hover:bg-blue-200 truncate first:rounded-t last:rounded-b px-3 py-2"]')

  }
  getthreedot(options){
    return cy.get('[data-cy="open-advanced-settings"]')
  
  }
  getcasesensitive(options){
    return cy.get('[class="h-10 flex justify-between items-center cursor-pointer"]')
  }
  getsaveandrun(options){
    return cy.get('[data-cy="save-lf-button"]')
  }
  getclosetab(options){
    return cy.get('#close-LF')
  }
  


}

export default ClassicStudio;
