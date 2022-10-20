const MainPage = require('../pageobjects/main.page');

describe('Playground application', () => {
    it('should navigate to resources', async () => {
       await MainPage.open();
       await MainPage.clickResourcesLink();
       await expect(MainPage.resourcesTitle).toBeExisting();  
    });

    it('should navigate to business', async () => {
        await MainPage.open();
        const isExisting = await MainPage.linkBusiness.isExisting()
        await expect(isExisting).toBeFalsy();  
     });

});