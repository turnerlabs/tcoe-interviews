const ajaxPage = require("../pageobjects/ajax.page");

describe('Ajax request', () => {
    it('should verify multiple clicks does not trigger multiple requests on loading', async () => {
        await ajaxPage.open()
        await ajaxPage.ajaxRequest()
        await ajaxPage.waitingForResponse()
        await ajaxPage.ajaxRequest()
        await ajaxPage.waitingForResponse()
        await expect(await ajaxPage.responseData()).toBeElementsArrayOfSize(1)
    });
});
