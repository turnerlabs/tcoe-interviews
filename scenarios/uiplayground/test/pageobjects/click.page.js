
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Click extends Page  {
    /**
     * define selectors using getter methods
     */
    get blueButton () {
        return $('.btn.btn-primary');
    }
   
    get redButton () {
        return $('.btn.btn-success');
    }
 /**
     * a method to click on button
     */
    async clickOnColorButton () {
        await (await this.blueButton).isClickable()
        await this.blueButton.click()
     
    }
 /**
     * a method to get the background-colo 
     */
    async getTheNewColor () {
        await this.redButton.waitForEnabled()
        let colorRed =await this.redButton.getCSSProperty('background-color');
        return colorRed.value;
    }
  /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('click');
    }
 
}
module.exports = new Click();
