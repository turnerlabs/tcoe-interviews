const Utils = require('../../helpers/Utils');

class Picker {

    static get pickerContainer() { return $('android.widget.ListView'); }
    static get pickerOptions() { return Utils.androidElementsSelector('new UiSelector().resourceId("android:id/text1").checked(false)'); }
    static get defaultPickerOption() { return Utils.androidElementSelector('new UiSelector().resourceId("android:id/text1").instance(0)'); }

    static async waitForPickerDisplay() {
        return this.pickerContainer.waitForDisplayed();
    }

    static async arePickerOptionsVisible() {
        let result = true;
        const pickerOptions = await this.pickerOptions;
        let pickerVisibletOptions = await Promise.all(pickerOptions.map(async (option) => { return await option.isDisplayed() }));
        if (pickerVisibletOptions.includes(false)) {
            result = false;
        }
        return result;
    }

    static async tapOnDefaultPickerOption() {
        await Utils.tapOn(await this.defaultPickerOption);
    }
}

module.exports = Picker;