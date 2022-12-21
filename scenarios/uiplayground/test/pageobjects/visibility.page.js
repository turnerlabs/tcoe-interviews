
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Visibility extends Page {
    /**
     * define selectors using getter methods
     */
    get hideButton () {
        return $('button#hideButton');
    }
   
    get unHideButton () {
        return $$('button#unhideButton');
    }
/**
     * a method to wait element and click on it
     */
    async clickOnHide () {
        await (await this.hideButton).waitForClickable()
        await this.hideButton.click()
    }
   /**
     * overwrite specific options to adapt it to page object
     */
   open () {
    return super.open('visibility');
}
}
module.exports = new Visibility();
