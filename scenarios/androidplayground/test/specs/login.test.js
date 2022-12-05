const HomePage = require('../pageobjects/HomePage');

describe('Login test', () => {
    it('should be able login successfully', async () => {
        homePage = new HomePage();
        loginPage = await homePage.goToLogin();
        await expect(await loginPage.submitLoginForm('test@webdriver.io', 'Test1234!')).toEqual('Success');
    })
});
