const AjaxRequestPage = require('../pageobjects/AjaxRequest.page');
const {navigationSettings} = require('../dataProviders/navigation');
const {ajaxRequestSettings} = require('../dataProviders/ajaxRequestSettings');

describe('Testing multiple AJAX requests and verifying the message is not displayed more than once', () => {
    it('should navigate to the url and click multiple times the request button', async () => {
        await AjaxRequestPage.navigateToWebsite(navigationSettings.sites.ajaxRequest);
        await AjaxRequestPage.clickRequestButton(ajaxRequestSettings.numberOfRequests);
    });

    it('should verify there is only one result message after loading spinner disappears', async () => {
        await AjaxRequestPage.checkSpinnerDisappear();
        await AjaxRequestPage.countResultsElements(ajaxRequestSettings.expectedResultMessages);
    })
});