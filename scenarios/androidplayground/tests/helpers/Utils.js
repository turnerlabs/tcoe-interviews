module.exports = {

    async chooseOneOption(locator) {
        await locator.waitForDisplayed();
        await locator.click();
    },

    async waitForIsShown(locator) {
        return await locator.waitForDisplayed();
    },

   async tapOn(element) {
    await element.waitForDisplayed();
    await element.click();
   }

}
