const LoginPage = require('../pageobjects/login.page');
const testData = require('../../testData/constants');

describe('Bug test', () => {
    it('should not see username and password field', async () => {
        await LoginPage.open();
        await LoginPage.login(`${testData.validUser.userName}`,`${testData.validUser.password}`);
        await LoginPage.verifyWelcomeText(`${testData.validUser.userName}`);
        await LoginPage.verifyUserCanLogOut();
        await LoginPage.verifyLoginFieldsAreHidden();
    });
});