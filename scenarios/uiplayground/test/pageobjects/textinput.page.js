
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class Textinput extends Page {
    /**
     * define selectors using getter methods
     */
    get textButton () {
        return $('.form-group input#newButtonName');
    }
   
    get valueButton() {
        return $('button#updatingButton');
    }
/**
     * a method to type the name button
     */
    async typeText () {
        await (await this.textButton).waitForDisplayed()
        await (await this.textButton).addValue('testingButton')
    }
/**
     * a method to click on button
     */
    async clickOnButton () {
        await (await this.valueButton).waitForClickable()
        await this.valueButton.click()
    }

   
   /**
     * overwrite specific options to adapt it to page object
     */
   open () {
    return super.open('textinput');
}
}
module.exports = new Textinput();
