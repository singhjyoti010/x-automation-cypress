import { LoginPage } from "./page-objects/login-helper";

const loginPage = new LoginPage();

describe("User login", () =>{
    // beforeEach(async() => {
    //     await cy.clearCookies();
    //     await cy.clearLocalStorage();
    //   });
    it("login user with valid credentials", async () =>{
      await loginPage.login();
    })
})