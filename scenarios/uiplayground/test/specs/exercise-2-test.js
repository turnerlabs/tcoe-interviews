const LoginPage = require('../pageobjects/login.page');
const testData = require('../../testData/constants');

describe('Login tests', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(`${testData.validUser.userName}`,`${testData.validUser.password}`);
        await LoginPage.verifyWelcomeText(`${testData.validUser.userName}`);
        await LoginPage.verifyUserCanLogOut();
        await LoginPage.verifyStaticElementsType();
    });

    it('should throw an error message for invalid credential', async () => {
        await LoginPage.open();
        await LoginPage.login(`${testData.inValidUser.userName}`,`${testData.inValidUser.password}`);
        await LoginPage.verifyInvalidCredentialText();
    });

    it('should throw an error for empty credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('','');
        await LoginPage.verifyInvalidCredentialText();
    });

});