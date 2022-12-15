const ProgressBarPage = require('../pageobjects/progressbar.page');

describe('Progress bar E2E tests', () => {
  before('Navigate to /progressbar', async () => {
    await browser.maximizeWindow();
    await ProgressBarPage.open();
  });

  it('Should stop the progress bar at 75% with 5% tolerance', async () => {
    await ProgressBarPage.clickStartButton();
    await ProgressBarPage.waitUntilProgressIs(75);
    await ProgressBarPage.clickStopButton();
    await expect(
      await ProgressBarPage.getCurrentProgress(),
    ).toBeGreaterThanOrEqual(75);
    await expect(
      await ProgressBarPage.getCurrentProgress(),
    ).not.toBeGreaterThan(80);
  });
});
