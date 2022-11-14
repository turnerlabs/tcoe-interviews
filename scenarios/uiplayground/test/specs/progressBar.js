const ProgressBarPage = require('../pageobjects/progressBar');

describe('Progress Bar scenarios', () => {
    it('should stop the progress bar at 75', async () => {
        await ProgressBarPage.open();
        await ProgressBarPage.clickButton(ProgressBarPage.startButton);
        await ProgressBarPage.stopProgressAt();
        await ProgressBarPage.clickButton(ProgressBarPage.stopButton);
        let result = await ProgressBarPage.result.getText();
        result = result.split(",");
        let value = result[0].match(/\d+/)[0];
        expect(parseInt(value)).toBeLessThanOrEqual(7);
    });
});
