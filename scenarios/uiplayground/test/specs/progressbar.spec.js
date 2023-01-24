const ProgressBarPage = require('../pageobjects/progressbar.page');

describe('Progress bar', () => {
    it('should stop near 75% progress', async () => {
        await ProgressBarPage.open();
        await ProgressBarPage.clickStart();
        await ProgressBarPage.waitForProgress75();
        await ProgressBarPage.clickStop();
        expect(await ProgressBarPage.progressInRange()).toBe(true);
    });
});