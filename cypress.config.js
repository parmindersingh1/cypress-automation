const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //  experimentalSessionAndOrigin:true
    baseUrl: "https://edge.k8s.g498.io/",
  },
  //  chromeWebSecurity: false 
  // env: {
  //   url: "https://google.com/",
  //   user_name: "admin",
  //   user_password: "s3creT-p@ssw0rd",
  // },
});
