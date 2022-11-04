const VisibilityPage = require('../pageobjects/visibility.page');

describe('Visibility', async () => {

    before(async function() {
        await VisibilityPage.open();
      });

    /**
     * bug case
     */
     it('should show the unhide button after clicking on hide', async () => {
        await VisibilityPage.clickHideButton();
        await expect(VisibilityPage.unhideButton).toBeDisplayed();
    });
});