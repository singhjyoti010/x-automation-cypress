import { mainBlockHooks } from "../hooks/landingPageHooks";
import { type, clickWxPath } from "../page-objects/event-helpers";

export class LandingPage {
    createPost() {
        type(mainBlockHooks.txtFld, "Hi there people!");
        clickWxPath(mainBlockHooks.whoCanReply);
        clickWxPath(mainBlockHooks.accountsYouFollow);
        clickWxPath(mainBlockHooks.postBtn);
    }
}