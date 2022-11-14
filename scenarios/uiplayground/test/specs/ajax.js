const AjaxPage = require('../pageobjects/ajax');

describe('Data loading scenarios', () => {
    // it('should ', async () => {
    //     await AjaxPage.open();
    //     await browser.setupInterceptor(); // capture ajax calls
    //     await AjaxPage.clickButton(AjaxPage.triggerButton)
    //     await browser.pause(20000);
    //     var request = browser.getRequest(0);
    //     console.log("*******")
    //     console.log(await request)
    //     // assert.equal(request.method, 'GET');
    // });

    it("should be clickable just once", async () => {
        await AjaxPage.open();
        await AjaxPage.clickButton(AjaxPage.triggerButton);
        await AjaxPage.clickButton(AjaxPage.triggerButton);
        // await expect(AjaxPage.triggerButton).not.toBeClickable()
    });

    it("should be displayed the data label just once", async () => {
        await AjaxPage.open();
        await AjaxPage.clickButton(AjaxPage.triggerButton);
        await AjaxPage.clickButton(AjaxPage.triggerButton);
        await browser.pause(350000);
        await expect(AjaxPage.content.$$("p")).toBeElementsArrayOfSize(2) 
    });
});
