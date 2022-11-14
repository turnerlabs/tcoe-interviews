const VisibilityPage = require('../pageobjects/visibilty');

describe('Visibility button scenarios', () => {
    it('should display unhide button after clicking on hide', async () => {
        await VisibilityPage.open();
        await VisibilityPage.clickButton(VisibilityPage.hideButton);
        await expect(VisibilityPage.unhideButton).toBeDisplayed();
    });
});
