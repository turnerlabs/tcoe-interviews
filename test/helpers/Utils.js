module.exports = class Utils {

    static async waitForElementDisplayed(element) {
        await element.waitForDisplayed({ timeout: 5000 });
    }

    static async changeScreenTo(element) {
        await this.waitForElementDisplayed(element);
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

}