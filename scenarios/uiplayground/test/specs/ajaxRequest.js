import AjaxPage from "../pageobjects/ajax.page.js";

describe('Ajax data message', () => {

    before(() => {
        AjaxPage.open();
    });

    it('Should verify the AJAX message after clicking the request button', async () => {

        await AjaxPage.requestBtn.click();
        await AjaxPage.requestMessage.waitForDisplayed({ timeout: 16000 });
        await expect(AjaxPage.requestMessage).toHaveText('Data loaded with AJAX get request.');
        
    });

    xit('Should not duplicate the message after clicking the request button again', async () => {

        await AjaxPage.requestBtn.click();
        await browser.pause(16000);
        await expect(AjaxPage.contentMessages).toHaveChildren({ lte: 1 });
        
    });
    
    
});
