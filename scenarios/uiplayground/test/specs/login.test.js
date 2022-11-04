const LoginPage = require('../pageobjects/login.page')
const LoginData = require('../data/loginData');
const Utils = require('../utils');


describe('Login Test Cases', () => {
    it('Login with valid credentials', async () => {
        await browser.url(`${browser.options.baseUrl}/sampleapp`);
        await LoginPage.login(LoginData.username, LoginData.password);
        await expect(LoginPage.loginMsg).toBeExisting();
        await expect(LoginPage.loginMsg).toHaveText('Welcome, ' + LoginData.username + '!');
    });
    
    it('Login with invalid credentials', async () => {
        await browser.url(`${browser.options.baseUrl}/sampleapp`);
        await LoginPage.login(Utils.generateString(5), Utils.generateString(5));
        await expect(LoginPage.loginMsg).toBeExisting();
        await expect(LoginPage.loginMsg).toHaveText('Invalid username/password');
    });

    it('Login with empty credentials', async () => {
        await browser.url(`${browser.options.baseUrl}/sampleapp`);
        await LoginPage.clickLoginBtn();
        await expect(LoginPage.loginMsg).toBeExisting();
        await expect(LoginPage.usernameInput).toHaveValue('');
        await expect(LoginPage.passwordInput).toHaveValue('');
    });

    it('Validate welcome message', async () => {
        await browser.url(`${browser.options.baseUrl}/sampleapp`);
        await LoginPage.login(LoginData.username, LoginData.password);
        await expect(LoginPage.loginMsg).toBeExisting();
        await expect(LoginPage.loginMsg).toHaveText('Welcome, ' + LoginData.username + '!');
    });

    it('Validate type attributes', async () => {
        await browser.url(`${browser.options.baseUrl}/sampleapp`);
        await LoginPage.login(LoginData.username, LoginData.password);
        await expect(LoginPage.usernameInput).toHaveAttribute('type', 'text');
        await expect(LoginPage.passwordInput).toHaveAttribute('type', 'password');
    });

    it('Username and Password fields should not be visible after user has logged in', async () => {
        await browser.url(`${browser.options.baseUrl}/sampleapp`);
        await LoginPage.login(LoginData.username, LoginData.password);
        await expect(LoginPage.usernameInput).not.toBeDisplayed();
        await expect(LoginPage.passwordInput).not.toBeDisplayed();
    });

})