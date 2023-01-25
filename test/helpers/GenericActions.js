class GenericActions {
    async maximizeWindow() {
        await browser.maximizeWindow();
    }

    async waitForIsShown(element) {
        await element.waitForDisplayed();
    }

    async doClick(element) {   
        await element.waitForDisplayed();
        await element.waitForClickable();
        await element.click();
    }

    async sendKeys(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value);
    }

    async moveMouseOver(element) {
        await element.moveTo();
    }
}

module.exports = new GenericActions();