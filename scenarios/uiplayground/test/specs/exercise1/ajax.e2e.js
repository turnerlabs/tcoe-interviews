const AjaxPage = require('../../pageobjects/exercise1/ajax.page');

describe('Ajax Playground', () => {
    it('should displayed the message "Data loaded with AJAX get request" only once | Bug-Tag', async () => {
        await AjaxPage.openPlayground();
        await AjaxPage.triggerAjaxButtonTwice();
        await AjaxPage.waitForAjaxRequestToComplete();
        await expect(AjaxPage.messageContainer).toBeElementsArrayOfSize(
            1,
            { message: 'One Ajax Message was expected'
            }
        );
    });
});
