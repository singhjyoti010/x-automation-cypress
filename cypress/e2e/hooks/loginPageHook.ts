export const loginPageHooks = {
    XMigrationBottomBtn : '[data-testid="xMigrationBottomBar"]',        //welcome notification 'X' button
    signinBtn: '[data-testid="loginButton"]',       //signin Button
    loginDialog: '.r-1roi411 > :nth-child(1) > .r-16y2uox',     //login / signin dialog
    emailInput: 'input[autocomplete="username"]',       //email, phone or username text field
    nextBtn: '//*[text()="Next"]//ancestor::button',        //Next button
    confirmAccountPopUp: '[data-testid="ocfEnterTextTextInput"]',       //Intermittent, account confirmation pop-out
    userNameInput: '[data-testid="ocfEnterTextTextInput"]',     //username text field
    passwordInput: '//*[contains(@name,"password")]',       //passwrod text field
    loginBtn: 'button[data-testid="LoginForm_Login_Button"]'        //login button
}