const LoginPage = require('../pageobjects/login.page');

describe('Login tests', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('a','pwd');
        await LoginPage.verifyWelcomeText('a');
        await LoginPage.verifyUserCanLogOut();
        await LoginPage.verifyStaticElementsType();
    });

    it('should throw an error message for invalid credential', async () => {
        await LoginPage.open();
        await LoginPage.login('abc','abc');
        await LoginPage.verifyInvalidCredentialText();
    });

    it('test empty credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('','');
        await LoginPage.verifyInvalidCredentialText();
    });

});