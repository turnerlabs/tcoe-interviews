const ProgressBarPage = require('../pageobjects/progressbar.page');

describe('Progress Bar', async () => {

    before(async function() {
        await ProgressBarPage.open();
      });
    
    it('should show result equals to 0 when 75% is selected', async () => {
        await ProgressBarPage.clickStart();
        await ProgressBarPage.stopAtPercentage('75%');
        await expect(ProgressBarPage.resultText).toHaveTextContaining(
            'Result: 0');
    });

    it('should show result equals to -45 when 30% is selected', async () => {
        await ProgressBarPage.clickStart();
        await ProgressBarPage.stopAtPercentage('30%');
        await expect(ProgressBarPage.resultText).toHaveTextContaining(
            'Result: -45');
    });

    it('should show result equals to 25 when 100% is selected', async () => {
        await ProgressBarPage.clickStart();
        await ProgressBarPage.stopAtPercentage('100%');
        await expect(ProgressBarPage.resultText).toHaveTextContaining(
            'Result: 25');
    });
});


