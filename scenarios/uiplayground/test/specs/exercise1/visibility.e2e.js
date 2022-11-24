const VisibilityPage = require('../../pageobjects/exercise1/visibility.page');

describe('Visibility Playground', () => {
    it('should displayed an unhidden button after clicking hide button | Bug-Tag', async () => {
        await VisibilityPage.openPlayground();
        await VisibilityPage.clickHide();
        await expect(VisibilityPage.invisibleButton).toBeDisplayed();
        await expect(VisibilityPage.hideButton).not.toBeDisplayed();
    });
});
