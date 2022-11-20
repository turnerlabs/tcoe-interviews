const ProgressBarPage = require('../pageobjects/progressbar.page');

/*
    Create a test that clicks Start button and then waits for the progress bar to reach 75%.
    Then the test should click Stop
*/

describe('Progress Bar Test', () => {

    //Navigating to the URL Progressbar and waiting for the page load
    beforeEach(async () => {
        await browser.url('progressbar');
        await browser.setTimeout({ 'pageLoad': 10000 });
        await ProgressBarPage.progressBarTitle.isDisplayed;
    });

    // Test case to click start button wait until progress bar reaches to 75% and then click stop
    // Assertion to check the value is 75 or not
    it('should click start button and wait for the progress bar to reach 75% then click stop button', async () => {
        await ProgressBarPage.startButton.click();
        await ProgressBarPage.clickStopWhenProgressBarSeventyFivePercent();
        await browser.pause(2000);
        await expect(await ProgressBarPage.progressBar.getAttribute("aria-valuenow") <= 75);
    });

});