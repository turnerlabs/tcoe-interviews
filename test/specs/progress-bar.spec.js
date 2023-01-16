const ProgressBar = require('../pageobjects/progress.page');
const Data = require('../data/data');

describe('Progress Test', () => {
    it('Should open url', async () => {
        await ProgressBar.open();
    });

    it('Should click on Start Button', async () => {
        await ProgressBar.clickOnStartButton();
    });

    it('Should wait for 75%', async () => {
        await ProgressBar.waitForProgressBar(Data.data.progress);
    });

    it('Should click on Stop Button', async () => {
        await ProgressBar.clickOnStopButton();
    });
});


