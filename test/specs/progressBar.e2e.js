const progressBarPage = require("../pageobjects/progressBar.page");

describe('Progress Bar', () => {

    before(async () => {
        await progressBarPage.open()
    });

    it('should stop progress bar at 75% with 5% tolerance limit ', async () => {
        await progressBarPage.start()
        await progressBarPage.progressBarLoadingTo("75%")
        await progressBarPage.stop()
        await expect(await progressBarPage.progressBarLimitAcceptable()).toBeTruthy()
    });

    // Extra
    it('should  progress bar start at 25%', async () => {
        await browser.refresh()
        await expect(await progressBarPage.progressBar).toHaveText("25%")
    });

    it('should return and start at 25% when the button is stop and started again', async () => {
        await progressBarPage.start()
        await progressBarPage.progressBarLoadingTo("30%")
        await progressBarPage.stop()
        await progressBarPage.start()
        await expect(progressBarPage.progressBar).toHaveText("25%")
    });
});