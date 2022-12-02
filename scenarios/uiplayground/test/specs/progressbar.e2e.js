const ProgressbarPage = require('../pageobjects/Progressbar.page');

const {navigationSettings} = require('../dataProviders/navigation');
const {progressbarSettings} = require('../dataProviders/progressbarSettings');

describe('Testing progressBar start and stop buttons and a 5% of tolerance to stop at 75% of progress', () => {
    it('should navigate to the url and start progress', async () => {
        await ProgressbarPage.navigateToWebsite(navigationSettings.sites.progressBar);
        await ProgressbarPage.clickStartButton();
    });

    it ('should check progress uo to 75%', async () => {
        await ProgressbarPage.checkProgress(progressbarSettings.desiderableStopValue);
    });

    it('should stop progress and evaluate within tolerance is 5% or less', async () => {
        await ProgressbarPage.clickStopButton();
        await ProgressbarPage.evaluateTolerance(progressbarSettings.tolerance);
    });
});