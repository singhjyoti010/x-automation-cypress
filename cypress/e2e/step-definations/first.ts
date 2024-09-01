import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { click } from '../page-objects/event-helpers';
import { loginPageHooks } from '../hooks/loginPageHooks';

Given('user is at landing page of X', () => {
    cy.visit('/');
    click(loginPageHooks.XMigrationBottomBtn, 20000);
});

Given('user clicks on signin button', () => {
    click(loginPageHooks.signinBtn);
    cy.get(loginPageHooks.loginDialog, {timeout: 7000}).should('be.visible'); //waits for login dialog to show up
})

When('user enters <username/email> at email field', () => {
  // Your action
});

When('clicks Next button', () => {

})

Then('another dialog shows up', () => {
  // Your assertions
});