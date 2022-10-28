const AjaxPage = require('../pageobjects/ajaxData.page');

describe('Click Test', () => {
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