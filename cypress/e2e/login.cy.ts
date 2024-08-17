import { LoginPage } from "./page-objects/login-helper";

const loginPage = new LoginPage();

describe("User login", () =>{
    it("login user with valid credentials", async () =>{
      await loginPage.login();
    })
})