const VisibilityPage = require('../pageobjects/visibility.page');

describe('Visibility E2E tests', () => {
  before('Navigate to /visibility', async () => {
    await browser.maximizeWindow();
    await VisibilityPage.open();
  });

  it('Should show unhide button after clicking hide button', async () => {
    await VisibilityPage.clickHideButton();
    await expect(await VisibilityPage.hideButton).toHaveText('Unhide');
  });
});
