const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //  experimentalSessionAndOrigin:true
    baseUrl: "https://edge.k8s.g498.io/",
  },
  defaultCommandTimeout: 6000,
  requestTimeout: 6000,
  
  
});
