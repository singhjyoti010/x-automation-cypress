import { loginPageHooks } from "../hooks/loginPageHook";
import { click, type } from "./event-helpers";

export class LoginPage {
    //****************************************login methods*****************************************
    async login() {
        await cy.visit('/');
        await click(loginPageHooks.XMigrationBottomBtn);
        await click(loginPageHooks.signinBtn);
        await cy.get(loginPageHooks.loginDialog, {timeout: 7000}).should('be.visible'); //waits for login dialog to show up
        await type(loginPageHooks.emailInput, Cypress.env('loginEmail'));
        await cy.xpath(loginPageHooks.nextBtn).click();
        if( await cy.get(loginPageHooks.confirmAccountPopUp)
                    .then(($el) => {
            Cypress.dom.isVisible($el) // true
          })){
            await type(loginPageHooks.userNameInput, Cypress.env('loginUsername'));
            await cy.get('[data-testid="ocfEnterTextNextButton"]').click();
        }
        await cy.xpath(loginPageHooks.passwordInput).type(Cypress.env('loginPassword'));
        await click(loginPageHooks.loginBtn);
        await cy.wait(50000);
    }
}