import { loginPageHooks } from "../hooks/loginPageHook";
import { typeWxPath } from "./event-helpers";
import { click, clickWxPath, type } from "./event-helpers";

export class LoginPage {
    //****************************************login methods*****************************************
    login() {
        cy.visit('/');
        click(loginPageHooks.XMigrationBottomBtn, 20000);
        click(loginPageHooks.signinBtn);
        cy.get(loginPageHooks.loginDialog, {timeout: 7000}).should('be.visible'); //waits for login dialog to show up
        type(loginPageHooks.emailInput, Cypress.env('loginEmail'));
        clickWxPath(loginPageHooks.nextBtn);
        if(cy.get(loginPageHooks.confirmAccountPopUp)
                    .then(($el) => {
            Cypress.dom.isVisible($el) // true
          })){
            type(loginPageHooks.userNameInput, Cypress.env('loginUsername'));
            click('[data-testid="ocfEnterTextNextButton"]')
        }
        typeWxPath(loginPageHooks.passwordInput, Cypress.env('loginPassword'));
        click(loginPageHooks.loginBtn);
        cy.get('.public-DraftEditorPlaceholder-root', {timeout: 20000}).should('be.visible');
        cy.wait(50000);
    }
}