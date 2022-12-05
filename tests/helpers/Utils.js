
class Utils {

    static async waitForIsShown(element) {
        return element.waitForDisplayed();
    }

    static async changeViewTo(element) {
        await this.tapOn(element);
    }

    static async tapOn(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    static async sendKeys(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value)
    }

    static async androidElementSelector(uiSelector) {
        return $(`android=${uiSelector}`);
    }
    static async androidElementsSelector(uiSelector) {
        return $$(`android=${uiSelector}`);
    }

}

module.exports = Utils;
