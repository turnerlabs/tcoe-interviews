const ShadowDomPage = require('../pageobjects/shadowdom.page');

describe('Shadow DOM E2E tests', () => {
  before('Navigate to /shadowdom', async () => {
    await browser.maximizeWindow();
    await ShadowDomPage.open();
  });

  it('Should copy value to the clipboard when Copy button is clicked', async () => {
    await ShadowDomPage.clickGenerateButton();
    await ShadowDomPage.clickCopyButton();
    await expect(await ShadowDomPage.getValueFromClipboard()).toEqual(
      await ShadowDomPage.getEditInputValue(),
    );
  });

  it('Should redirect to /shadowdom when Copy button is clicked', async () => {
    await expect(await ShadowDomPage.copyButton).toHaveAttr(
      'href',
      '/shadowdom',
    );
  });
});
