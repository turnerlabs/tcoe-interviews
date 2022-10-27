const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const ProgressBarPage = require('../pageobjects/progressbar.page');


describe.skip('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

describe('Progress Bar Test', () => {
    it('should stop the progress bar in 75% percentage', async () => {
        const percentage = '75'
        await ProgressBarPage.open();
        await ProgressBarPage.clickOnStartButton()
        await ProgressBarPage.waitProgressBarToPercentage(percentage)
        await expect(ProgressBarPage.progressBar).toHaveAttributeContaining('aria-valuenow', percentage)
    });
});