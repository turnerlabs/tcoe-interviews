
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
    static async simulateTypingOnKeyboard() {
        const height = ((await Gestures.windowSize).height) * 5 / 6;

        driver.touchPerform([
            { action: 'press', options: { x: 400, y: height } },
            { action: 'release' },
            { action: 'press', options: { x: 1000, y: height } },
            { action: 'release' }
        ]);
    }
}

module.exports = Utils;
