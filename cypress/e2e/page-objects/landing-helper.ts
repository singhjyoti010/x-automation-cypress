import { mainBlockHooks } from "../hooks/landingPageHooks";
import { type, clickWxPath, click } from "../page-objects/event-helpers";

export class LandingPage {
    createPost() {
        type(mainBlockHooks.txtFld, "Hi there people!");
        clickWxPath(mainBlockHooks.whoCanReply);
        clickWxPath(mainBlockHooks.accountsYouFollow);
        clickWxPath(mainBlockHooks.postBtn);
        // try{
        //     cy.get('[data-testid="sheetDialog"]')
        //         .then(($el) => {
        //         if($el.is(':visible')){ click('[data-testid="app-bar-close"]'); }
        //     })
        // } catch(e){
        //     console.log(`sheet not visible with error: ${e}`)
        // }
    }
};