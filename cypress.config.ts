const { defineConfig } = require("cypress");


import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';


require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.loginUsername = process.env.USER_NAME;
      config.env.loginPassword = process.env.USER_PASSWORD;
      config.env.loginEmail = process.env.USER_EMAIL;

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    baseUrl: "https://x.com/",
    // specPattern: 'cypress/e2e/specs/*.cy.ts'
    specPattern: '**/*.feature',
    supportFile: false,
    cucumber: {
      stepDefinitions: 'cypress/e2e/features/step-defination/**/*.ts',
      //C:\Users\jyoti\Documents\Dev\x-automation-cypress\cypress\e2e\features\step-defination\first.ts
    }
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

