/*
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});*/

describe ('ejercicio 1', () => {
    it('should do something', () =>{
    browser.url('http://uitestingplayground.com/');
    expect(browser).toHaveTitle('UI Test Automation Playground');
    });

