import { mainBlockHooks } from "../hooks/landingPageHooks";

export class LandingPage {
    createPost() {
        cy.xpath(mainBlockHooks.txtFld).type("Hi there people!");
        cy.xpath(mainBlockHooks.whoCanReply).click();
        cy.xpath(mainBlockHooks.accountsYouFollow).click();
        cy.xpath(mainBlockHooks.postBtn).click();
    }
}