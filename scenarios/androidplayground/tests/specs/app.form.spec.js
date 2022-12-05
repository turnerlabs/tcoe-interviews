const TabBar = require('../screenobjects/components/TabBar.js');
const FormsScreen = require('../screenobjects/FormsScreen');

describe('WebdriverIO and Appium, when interacting with forms,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormsScreen.waitForIsShown(true);
    });

    it('should validate that form tab is available for selection and is clickable', async () => {;
        await expect(await TabBar.isFormSelected()).toEqual("true");
        await expect(await TabBar.isFormclickable()).toEqual("true");
    });

});