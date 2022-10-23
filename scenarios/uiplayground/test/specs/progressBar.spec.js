const HomePage = require('../pageobjects/home.page');
const ProgressBarPage = require('../pageobjects/progressBar.page');

describe('Progress Bar Test', () => {
    it('Stop on 75% progress bar page', async () => {
        await HomePage.open('home');
        await HomePage.verifyPage('home');

        await ProgressBarPage.open('progressbar');
        await ProgressBarPage.verifyPage('progressbar');
        await ProgressBarPage.startStopBar();

    });
});