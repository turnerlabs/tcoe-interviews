const NavigatePage = require('../pageobjects/navigate.page');

describe('UI Testing Play Ground', () => {
    
    it('Navigate to Dynamic ID page', async () => {
        await NavigatePage.open();

        await NavigatePage.clickDynamicId();
    });
});