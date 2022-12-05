const TabBar = require('../screenobjects/components/TabBar.js');
const FormsScreen = require('../screenobjects/FormsScreen');

describe('WebdriverIO and Appium, when interacting with forms,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        
    });

    it('should fist test', async () => {
        await FormsScreen.waitForIsShown(true);
    });

});