// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * 
             * @param input data test selector text value
             * 
             * @example
             * //this command
             * cy.getDataTest("data-test")
             * //will select this element
             * <tag data-test="data-test" />
             * 
             */
            getDataTest(input): Chainable<any>
        }
    }
}

Cypress.Commands.add('getDataTest', (dataTestSelector: string) => {
    return cy.get(`[data-test=${dataTestSelector}]`)
})