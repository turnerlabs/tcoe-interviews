const TabBar = require('../screenobjects/components/TabBar.js');

describe('WebdriverIO and Appium, when interacting with forms,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('should Validate the default selection of the tab', async () => {;
        await expect(await TabBar.isHomeSelected()).toEqual("true");
    });

});