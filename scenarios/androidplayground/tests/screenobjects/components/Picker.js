const { tapOn, chooseOneOption, waitForIsShown } = require('../../helpers/Utils');
const {SELECTORS} = require('../../../data/formsData');

module.exports = class Picker {
    
    static async dropDownToBeDisplayed() {
        await waitForIsShown($(SELECTORS.ANDROID_LISTVIEW));
        return await $(SELECTORS.ANDROID_LISTVIEW).isDisplayed();
    }

    static async getDropDownOptionsLenght() {
        const dropDownAvailableOptions = $$(`android=${SELECTORS.DROPDOWN_OPTIONS}`);
        return dropDownAvailableOptions.length;
    }

    
   static async tapOnDefaultOption() {
        const defaultOption = $(`android=${SELECTORS.DEFAULT_OPTION}`);
        await chooseOneOption(defaultOption);
    }

    static async tapRandomOption() {
        const random = Math.floor(Math.random() * 2);
        const dropDownAvailableOptions = $$(`android=${SELECTORS.DROPDOWN_OPTIONS}`);
        await tapOn(dropDownAvailableOptions[random])
    }
}