const Ajax = require('../pageobjects/ajax.page');

/*
    bug scenario Navigate to the url - http://uitestingplayground.com/ajax then click on the button more than once and
    verify the message (Data loaded with AJAX get request) is not displayed more than once
*/

describe('Ajax Button Trigger', () => {

    //Navigating to the URL Ajax and waiting for the page load
    beforeEach(async () => {
        await browser.url('ajax');
        await browser.setTimeout({ 'pageLoad': 10000 });
        await Ajax.buttonTriggeringAjaxRequest.waitForDisplayed();
    });

    //Testcase to check the progress bar
    it('should display message only once by clicking Trigger button more than once', async () => {
        await Ajax.buttonTriggeringAjaxRequest.click();
        await Ajax.clickingMultipleTimes()
        await Ajax.resultField.waitForDisplayed();
        await expect(await Ajax.message.nextElement() != null);
    });

});