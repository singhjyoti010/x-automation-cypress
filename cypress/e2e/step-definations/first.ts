import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { click, clickWxPath, type, typeWxPath } from '../page-objects/event-helpers';
import { loginPageHooks } from '../hooks/loginPageHooks';

Given('user is at landing page of X', () => {
    cy.visit('/');
    click(loginPageHooks.XMigrationBottomBtn, 20000);
});

Given('user clicks on signin button', () => {
    click(loginPageHooks.signinBtn);
    cy.get(loginPageHooks.loginDialog, {timeout: 7000}).should('be.visible'); //waits for login dialog to show up
})

When('user enters username-email at email field', () => {
  type(loginPageHooks.emailInput, Cypress.env('loginEmail'));
});

When('user clicks Next button', () => {
  clickWxPath(loginPageHooks.nextBtn);
})

Then('another dialog shows up', () => {
  // Your assertions
  // try{
  //   if(cy.get(loginPageHooks.confirmAccountPopUp)
  //       .then(($el) => {
  //       Cypress.dom.isVisible($el) // true
  //   })){
  //       type(loginPageHooks.userNameInput, Cypress.env('loginUsername'));
  //       click('[data-testid="ocfEnterTextNextButton"]');
  //   }
  // } catch (e) {
  //     console.log(`confirm account popup with selector ${loginPageHooks.confirmAccountPopUp} is not visible`);
  // }
  typeWxPath(loginPageHooks.passwordInput, Cypress.env('loginPassword'));
  click(loginPageHooks.loginBtn);
  cy.get('.public-DraftEditorPlaceholder-root', {timeout: 20000}).should('be.visible');
});