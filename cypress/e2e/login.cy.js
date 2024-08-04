describe("User login", () =>{
    // beforeEach(async() => {
    //     await cy.clearCookies();
    //     await cy.clearLocalStorage();
    //   });
    it("login user with valid credentials", async () =>{
        await cy.visit('https://x.com/');
        await console.log(Cypress.env('loginUsername'));
        await cy.get('[data-testid="xMigrationBottomBar"]',{ timeout: 20000 }).should('be.visible').click();
        await cy.get('[data-testid="loginButton"] > .css-146c3p1').click();
        await cy.get('.r-1roi411 > :nth-child(1) > .r-16y2uox', {timeout: 5000}).should('be.visible');  //wait for login page to load
        await cy.get('input[autocomplete="username"]').type(Cypress.env('loginEmail'));
        await cy.xpath('//*[text()="Next"]//ancestor::button').click();
        if( await cy.get('[data-testid="ocfEnterTextTextInput"]').then(($el) => {
            Cypress.dom.isVisible($el) // true
          })){
            await cy.get('[data-testid="ocfEnterTextTextInput"]').type(Cypress.env('loginUsername'));
            await cy.get('[data-testid="ocfEnterTextNextButton"]').click();
          }
        await cy.xpath('//*[contains(@name,"password")]').type(Cypress.env('loginPassword'));
        await cy.get('button[data-testid="LoginForm_Login_Button"]').click();
        await cy.wait(50000);
    })
})