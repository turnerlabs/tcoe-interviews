

const Input = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InputPage extends Input {
    /**
     * define selectors using getter methods
    */
     get btnTextInput () {
        return $('#overview > div > div:nth-child(2) > div:nth-child(4) > h3 > a');
    }

    get titleInput (){
        return $('body > section > div > h3')
    }

    get inputValue () {
        return $('#newButtonName');
    }

    get btnInputValue () {
        return $('#updatingButton');
    }
}

module.exports = new InputPage();
