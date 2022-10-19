const homePage= require('../pageobjects/home/home.page');
const dynamicIdPage = require('../pageobjects/dynamicID/dynamicID.page');


describe('Go to Dynamic ID section and validate button', () => {
    it('should go to the Dynamic ID section and then validate the text value', async () => {
        await homePage.open('dynamicid');
        await expect(dynamicIdPage.dynamicIdBtn).toHaveTextContaining('Button with Dynamic ID');
    });
});