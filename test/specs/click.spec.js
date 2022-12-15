const ClickPage = require('../pageobjects/Click.page');

describe('Click E2E tests', () => {
  before('Navigate to /click', async () => {
    await browser.maximizeWindow();
    await ClickPage.open();
  });

  it('Should change button color to red after clicking it', async () => {
    await ClickPage.clickBadButton();
    await expect(await ClickPage.badButton).toHaveElementClass('btn-danger', {
      message: 'Class not found!',
    });
  });
});
