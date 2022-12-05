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

    it('should validate the input behavior is working as intended', async () => {
        await FormsScreen.tapOnInput();
        await FormsScreen.setInputValue("Testing input behavior")
        const inputText = await FormsScreen.getInputText();
        const resultText = await FormsScreen.getInputResultText();
        expect(inputText).toEqual(resultText);
    });

    it('should Validate that picker element is working and it has 3 options to choose from', async () => {
        await FormsScreen.tapOnDropDown();
        await expect(await FormsScreen.dropDownContainer).toBeDisplayed();
        await expect(await FormsScreen.getDropdownSize()).toEqual(3);
        await FormsScreen.tapOnDropdownOptionRandomly();
        await expect(await FormsScreen.dropDownContainer).not.toBeDisplayed();
    });

    it('should Validate that Inactive button is not interactable', async () => {
        await FormsScreen.clickOnInactiveButton();
        await expect(await FormsScreen.isInactiveButtonSelected()).toEqual("false");
    });



});