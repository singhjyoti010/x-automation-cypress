const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.loginUsername = process.env.USER_NAME;
      config.env.loginPassword = process.env.USER_PASSWORD;
      config.env.loginEmail = process.env.USER_EMAIL;
      return config;
    },
    baseUrl: "https://x.com/",
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: false,
    json: true,
  },
  // defaultCommandTimeout: 30000,
});
