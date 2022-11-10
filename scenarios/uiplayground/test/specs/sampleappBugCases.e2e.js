const SampleAppPage = require('../pageobjects/sampleapp.page');

describe('Test if the credentials are still showing up after a login', () => {
    it('should open the sampleapp page and login', async () => {
        await SampleAppPage.openAndLogin('test', 'pwd');
    });
    it('should check that the credentials are not visible anymore', async () => {
        await SampleAppPage.credentialsAreNotVisible();
    });
});
