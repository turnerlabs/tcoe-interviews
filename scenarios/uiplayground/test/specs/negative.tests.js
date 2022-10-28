const AjaxPage = require('../pageobjects/ajaxData.page');
const VisibilityPage = require('../pageobjects/visibility.page');
const HomePage = require("../pageobjects/home.page");

describe('Ajax Test', () => {
    it('should have a success message only after trigger the button more that once', async () => {
        await AjaxPage.open();
        await AjaxPage.clickOnAjaxTriggerButton();
        await AjaxPage.waitToJavaScriptProcessingFinished();
        await expect(AjaxPage.successMessage)
            .toHaveTextContaining('Data loaded with AJAX get request.');
        await expect(AjaxPage.successMessageList)
            .toBeElementsArrayOfSize(1)
        await AjaxPage.clickOnAjaxTriggerButton();
        await AjaxPage.waitToJavaScriptProcessingFinished();
        await expect(AjaxPage.successMessageList)
            .toBeElementsArrayOfSize(1)
    });
});

describe('Visibility Test', () => {
    it('should have the unhide button After click the hide button', async () => {
        await VisibilityPage.open();
        await expect(VisibilityPage.hideButton).toBeExisting();
        await VisibilityPage.clickOnHideButton();
        await expect(VisibilityPage.unHideButton).toBeExisting();
    });
});