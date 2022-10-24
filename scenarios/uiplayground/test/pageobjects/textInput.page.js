const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TextInputPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputText () {return $('#newButtonName');}
    get buttonNewText () {return $('#updatingButton');}


    /**
     * a method to encapsule automation code to interact with the page
     */

    async sendTextInput(text){
        this.inputText.setValue(text)
    }

    async clickButtonNewText() {
        this.buttonNewText.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('textinput');
    }
}

module.exports = new TextInputPage();