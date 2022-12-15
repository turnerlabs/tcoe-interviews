const AjaxPage = require('../pageobjects/ajax.page');

describe('Ajax E2E tests', () => {
  before('Navigate to /ajax', async () => {
    await browser.maximizeWindow();
    await AjaxPage.open();
  });

  it('Should not show success message more than once', async () => {
    await AjaxPage.open();
    await AjaxPage.clickAjaxButton();
    await AjaxPage.waitForContent();
    await expect(await AjaxPage.contentContainer).toHaveChildren(1);
    await AjaxPage.clickAjaxButton();
    await AjaxPage.waitForContent();
    await expect(await AjaxPage.contentContainer).toHaveChildren(1);
  });
});
