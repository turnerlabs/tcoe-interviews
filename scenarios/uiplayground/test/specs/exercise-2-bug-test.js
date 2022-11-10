const LoginPage = require('../pageobjects/login.page');

describe('Bug test', () => {
    it('should not see username and password field', async () => {
        await LoginPage.open();
        await LoginPage.login('a','pwd');
        await LoginPage.verifyWelcomeText('a');
        await LoginPage.verifyUserCanLogOut();
        await LoginPage.verifyLoginFieldsAreHidden();
    });
});