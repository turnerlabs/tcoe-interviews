const SampleAppPage = require('../pageobjects/sampleapp.page');

describe('Login SampleApp', () => {
    it('should login with valid credentials', async () => {
        await SampleAppPage.open();

        await SampleAppPage.login('gime', 'pwd');
        await expect(SampleAppPage.alertMsg).toBeExisting();
        await expect(SampleAppPage.alertMsg).toHaveTextContaining('Welcome');
    });

    it('should login with invalid credentials', async () => {
        await SampleAppPage.open();

        await SampleAppPage.login('gime', 'xxx');
        await expect(SampleAppPage.alertMsg).toBeExisting();
        await expect(SampleAppPage.alertMsg).toHaveTextContaining('Invalid');
    });

    it('Test Failed', async () => {
        await SampleAppPage.open();

        await SampleAppPage.login(' ', 'xxx');
        await expect(SampleAppPage.alertMsg).toBeExisting();
        await expect(SampleAppPage.alertMsg).toHaveTextContaining('Error');
    });
});