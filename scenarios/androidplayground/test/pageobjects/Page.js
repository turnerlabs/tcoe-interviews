module.exports = class Page {

    async waitForIsShown(element) {
        return element.waitForDisplayed();
    };

    async changeViewTo(element) {
        await this.doTap(element);
    };

    async doTap(element) {
        await element.waitForDisplayed();
        await element.click();
    };
}
