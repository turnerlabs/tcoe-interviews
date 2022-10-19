const homePage = require('../pageobjects/home/home.page');
const clientSideDelayPage = require('../pageobjects/clientSideDelay/clientSideDelay.page');


describe('Go to Verify Text section and record Text', () => {
    it('should go to the VerifyText Section and then validate the text value contain Welcome', async () => {
        await homePage.open('clientdelay');
        await clientSideDelayPage.clientSideBtn.click();
         await clientSideDelayPage.getClientSideText().then(value => expect(value).toEqual('Data calculated on the client side.'))
    });

    it('should go to the VerifyText Section and then validate the text value contain Welcome', async () => {
        await homePage.open('clientdelay');
        await clientSideDelayPage.clientSideBtn.click();
        await clientSideDelayPage.getClientSideText().then(value => expect(value).toEqual('data calculated on the client side.'))
    });
});