const VisibilityPage = require('../pageobjects/visibility.page');

describe('Visibility test', () => {
    it('should show an unhide button after clicking the hide button', async () => {
        await VisibilityPage.open();
        await VisibilityPage.clickHideBtn();
        await expect(VisibilityPage.hideBtn).not.toBeDisplayed();
    });
});