const Utils = require('../../helpers/Utils.js');
const GenericActions = require('../../helpers/GenericActions.js');

class Picker {

    get dropdown() {
        return $('android.widget.ListView');
    }

    get dropdownOptions() {
        return $$(`${Utils.findAndroidElementByResourceId("android:id/text1")}.checked(false)`);
    }
    
    get dropdownDefaultOption() {
        return $(`${Utils.findAndroidElementByResourceId("android:id/text1")}.text("Select an item...")`);
    }

    async pickerIsDisplayed() {
        await GenericActions.waitForIsShown(this.dropdown);
        return await this.dropdown.isDisplayed();
    }

    async getOptionsAmount() {
        return this.dropdownOptions.length;
    }

    async tapOnRandomOption(option) {
        await GenericActions.tapOn(this.dropdownOptions[option]);
    }

    async allOptionsAreDisplayed() {
        await GenericActions.waitForIsShown(this.dropdown);
        let elementIsDisplayed = [];
        await this.dropdownOptions.forEach(async(option) => {
            elementIsDisplayed.push(await option.isDisplayed());
        });
        return !elementIsDisplayed.includes(false);
    }

    async tapOnDefaultOption() {
        await GenericActions.tapOn(this.dropdownDefaultOption);
    } 
}

module.exports = new Picker();