const ProgressBarPage = require('../pageobjects/Progressbar');
const Visibility = require("../pageobjects/Visibility");

/**
 * Positive Cases
 */
describe('Exercise 1', () => {
    beforeEach(async () => {
        await browser.url('progressbar');
        await browser.setTimeout({ 'pageLoad': 10000 });
        await ProgressBarPage.progressBarTitle.isDisplayed;
    });

    it('should clicks Start button and then waits for the progress bar to reach 75%', async () => {
        await ProgressBarPage.startButton.click();
        await ProgressBarPage.clickOnSeventyFivePercent();
        await browser.pause(2000);
        await expect(await ProgressBarPage.progressBar.getAttribute("aria-valuenow") <= 75);
    });

});