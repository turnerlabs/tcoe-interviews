const ProgressBarPage = require('../pageobjects/ProgressBarPage.js');

describe('progress bar tests', () => {
    it('should stop progress bar at 75%', async () => {
        await ProgressBarPage.open();
        await ProgressBarPage.startProcesing();
        await ProgressBarPage.stopAfterSomeProgress();
        
        //await ProgressBarPage.getResultNumber();
        await expect(ProgressBarPage.stopingResult).toHaveTextContaining(['0','1']);

    });
});