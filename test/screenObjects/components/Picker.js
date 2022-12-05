const Utils = require("../../helpers/Utils.js");

class Picker {


    static get pickerScreen() {
        return $("android.widget.ListView");
    }

     static get pickerOptions() {
        const selector =
            'new UiSelector().resourceId("android:id/text1").checked(false)';
        return $$(`android=${selector}`);
    }
    get pickerContainer() {
        return $("android.widget.ListView");
    }


    static async pickerIsDisplayed() {
        await Utils.waitForElementDisplayed(this.pickerScreen);
        return await this.pickerScreen.isDisplayed();
    }

    static async getOptionsAmount() {
        return this.pickerOptions.length;
    }
    static async tapOnRandomOption() {
        let theRandomOption = Math.floor(Math.random() * 2);
        await Utils.tapOn(this.pickerOptions[theRandomOption]);
    }

    static async pickerOptionsAreDisplayed() {
        await this.pickerOptions.map((element) => element.isDisplayed());
    }
}

module.exports = Picker;

