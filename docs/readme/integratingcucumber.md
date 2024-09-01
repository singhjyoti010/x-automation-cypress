# Integrate Cucumber and Cypress (with TS) [[reference](https://github.com/singhjyoti010/cypress-ts-cucumber-a-demo-repo)]

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [node and npm](https://nodejs.org/en/download/package-manager) to install libraries.

```bash
npm install @badeball/cypress-cucumber-preprocessor --save-dev
```

## Example setup, cypress.config.ts
Configure specPattern with "**/*.feature" and setupNodeEvents with a bundler, using EG.

```typescript
const { defineConfig } = require("cypress");
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild"; 

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: 'https://www.duckduckgo.com',
    async setupNodeEvents (
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    }
  },
});
```

## tsconfig.json
Add "esModuleInterop": true and "moduleResolution": "node16"  (optional, incase esModuleInterop don't work standalone) to CompilerOptions in your tsconfig.json file

```json
"moduleResolution": "node16",
"module": "Node16",
"esModuleInterop": true,
```

## package.json
Add below to your package.json file

```json
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true
 }
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinations": true,
    "stepDefinitions": "cypress/e2e/step-definations/*.ts"
  },
```

## Dir structure
Create folder structure Cypress  ->  e2e -> .feature, and .cy.ts (step-definition) files 

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[singhjyoti010](https://github.com/singhjyoti010/)
