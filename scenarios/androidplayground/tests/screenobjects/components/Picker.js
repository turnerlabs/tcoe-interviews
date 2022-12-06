const { tapOn } = require('../../helpers/Utils');
const Utils = require('../../helpers/Utils');

const SELECTORS = {
    ANDROID_LISTVIEW: '//android.widget.ListView',
    OPTION_LISTVIEW: '//android.widget.CheckedTextView',
    DROPDOWN_OPTIONS: 'new UiSelector().className("android.widget.CheckedTextView").checked(false)',
    DEFAULT_OPTION: 'new UiSelector().className("android.widget.CheckedTextView").checked(true)'
}

module.exports = class Picker {
    
    static async dropDownToBeDisplayed() {
        await Utils.waitForIsShown($(SELECTORS.ANDROID_LISTVIEW));
        return await $(SELECTORS.ANDROID_LISTVIEW).isDisplayed();
    }

    static async getDropDownOptionsLenght() {
        const dropDownAvailableOptions = $$(`android=${SELECTORS.DROPDOWN_OPTIONS}`);
        return dropDownAvailableOptions.length;
    }

    
   static async tapOnDefaultOption() {
        const defaultOption = $(`android=${SELECTORS.DEFAULT_OPTION}`);
        await Utils.chooseOneOption(defaultOption);
    }

    static async tapRandomOption() {
        const random = Math.floor(Math.random() * 2);
        const dropDownAvailableOptions = $$(`android=${SELECTORS.DROPDOWN_OPTIONS}`);
        await tapOn(dropDownAvailableOptions[random])
    }
}