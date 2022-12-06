const { textInput } = require('../../../data/formsData');

module.exports = class Input {

    static async checkCharacters() {
       const countCharacters = textInput.length;
       if (countCharacters > 30) {
        const expectedText = textInput.substring(0, 30);
        return  expectedText;
       }
    }
}