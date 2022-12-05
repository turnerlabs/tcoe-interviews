class GenericActions {

    async tapOn(element) {   
        await element.waitForDisplayed();
        await element.click();
    }

    async sendKeys(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value)
    }
    
    async waitForIsShown(element) {
        return await element.waitForDisplayed();
    }

    async waitForIsEnabled(element) {
        return await element.waitForEnabled();
    }

    async waisForIsClickable(element) {
        return await element.waitForClickable();
    }
}

module.exports = new GenericActions();