module.exports  = {

    doClick: async function(element) {
        await element.waitForDisplayed();
        await element.waitForClickable();
        await element.click();
    },


    goToPage: async function(element) {
        await module.exports.doClick(element);
    }
}