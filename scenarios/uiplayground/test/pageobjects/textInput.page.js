
const Page = require('./page');

class TextInputPage extends Page {

    get textInputField () {
        return $('input[id="newButtonName"]');
    }

    get buttonElement() {
        return $('#updatingButton')
    }

    async enterTextAndSubmit(text) {
        await this.textInputField.setValue(text)
        await this.buttonElement.click()
    }
    open () {
        return super.open('textinput');
    }
}
module.exports = new TextInputPage();