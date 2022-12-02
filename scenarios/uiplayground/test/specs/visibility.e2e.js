const VisibilityPage = require('../pageobjects/Visibility.page');
const {navigationSettings} = require('../dataProviders/navigation');
const {visibilitySettings} = require('../dataProviders/visibilitySettings');

describe('Testing to click Hide button and then an Unhide button appears in place', () => {
    it('should navigate to the url and click the hide button', async () => {
        await VisibilityPage.navigateToWebsite(navigationSettings.sites.visibilityButtons);
        await VisibilityPage.clickHideButton();
    });

    it('should verify a hide button disappears', async () => {
        await VisibilityPage.checkHideButtonDisappear();
    });

    it('should verify an unhide button appears', async () => {
        await VisibilityPage.checkUnhideButtonAppears(visibilitySettings.searchValues);
    });
});