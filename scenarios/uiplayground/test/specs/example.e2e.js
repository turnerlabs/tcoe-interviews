const HomePage = require('../pageobjects/home.page');

describe('UI PlayGround Application', () => {

    it('should click resources link on header and validate url', async () => {
        await HomePage.open();   
        await HomePage.clickHamburgerLink();
        await HomePage.clickResourcesLink();
        await expect(browser).toHaveUrl('http://uitestingplayground.com/resources');
    });


    it('should click business link on header and validate url', async () => {
        await HomePage.open();   
        await HomePage.clickHamburgerLink();
        await HomePage.clickBusinessLink();
        await expect(browser).toHaveUrl('http://uitestingplayground.com/business');
    });

});