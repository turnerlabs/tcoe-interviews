const HomePage = require('../pageobjects/home.page');
const ProgressBarPage = require('../pageobjects/progressbar.page');

describe('Home tests', () => {
    it('should have the Ajax Data link in the home page', async () => {
        await HomePage.open();
        await expect(HomePage.ajaxDataLink).toBeExisting();
    });
    it('should have the Visibility link in the home page', async () => {
        await expect(HomePage.visibilityLink).toBeExisting();
    });
    it('should have the Shadow Dom link in the home page', async () => {
        await expect(HomePage.shadowDomLink).toBeExisting();
    });
    it('should have the Click link in the home page', async () => {
        await expect(HomePage.clickLink).toBeExisting();
    });
    it('should have access to Progress Bar Section', async () => {
        await expect(HomePage.progressBarLink).toBeExisting();
        await HomePage.clickOnProgressBarLink();
        await expect(browser).toHaveUrl(
            'http://uitestingplayground.com/progressbar')
    });
});

describe('Progress Bar Test', () => {
    it('should stop the progress bar in 75% percentage', async () => {
        const percentage = '75'
        await ProgressBarPage.open();
        await ProgressBarPage.clickOnStartButton();
        await ProgressBarPage.waitProgressBarToPercentage(percentage);
        const currentPercentage = await ProgressBarPage.getCurrentProgressBarValue();
        const currentPercentageNumber = currentPercentage.slice(0, 2) * 1;
        console.log(currentPercentageNumber)
        await expect(currentPercentageNumber - 75).toBeLessThanOrEqual(2);
    });
});