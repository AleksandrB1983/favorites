const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl: "http://localhost:3000",

    retries: 2,

    viewportHeight: 800,
    viewportWidth: 1100,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
