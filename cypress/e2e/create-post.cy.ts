import { LandingPage } from "./page-objects/landing-helper";
import { LoginPage } from "./page-objects/login-helper";

const landingPage = new LandingPage();
const loginPage = new LoginPage();

describe('create a new post',() => {
    beforeEach("loginn into x", () => {
        loginPage.login();
    })
    it('create first post', () => {
        landingPage.createPost();
    })
})