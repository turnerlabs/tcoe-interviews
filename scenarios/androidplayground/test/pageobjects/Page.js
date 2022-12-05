module.exports = class Page {

    /**
     * Return the element once it has loaded
     */
    async waitForIsShown(element) {
        return element.waitForDisplayed();
    };

    /**
     * Tap on some element
     */
    async changeViewTo(element) {
        await this.doTap(element);
    };

    /**
     * Add text to an element
     */
    async sendKeys(element,value) {
        await element.waitForDisplayed();
        await element.setValue(value)
    };

    /**
     * Wait for an element to be displayed to tap on it
     */
    async doTap(element) {
        await element.waitForDisplayed();
        await element.click();
    };
}
