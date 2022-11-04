const LoginPage = require('../pageobjects/login.page')
const LoginData = require('../data/loginData')

describe('Logout Test Cases', () => {
    it('Validate logout message', async () => {
        await browser.url(`${browser.options.baseUrl}/sampleapp`);
        await LoginPage.login(LoginData.username, LoginData.password);
        await LoginPage.clickLoginBtn();
        await expect(LoginPage.loginMsg).toHaveText('User logged out.' );
    });
})