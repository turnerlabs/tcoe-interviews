const ClickPage = require('../pageobjects/Click.page');

describe('Click E2E tests', () => {
  before('Navigate to /click', async () => {
    await browser.maximizeWindow();
    await ClickPage.open();
  });

  // First approach: Assert Bootstrap class btn-danger is present at the element
  it('Should change button color to red after clicking it', async () => {
    await ClickPage.clickBadButton();
    await expect(await ClickPage.badButton).toHaveElementClass('btn-danger', {
      message: 'Class not found!',
    });
  });

  // Alternative approach: Assert if button's background-color CSS property matches pure red '#ff0000'
  it('Should change button color to red after clicking it', async () => {
    await ClickPage.clickBadButton();
    await expect(
      await ClickPage.badButton.getCSSProperty('background-color'),
    ).toHaveProperty('hex', '#ff0000');
  });
});
