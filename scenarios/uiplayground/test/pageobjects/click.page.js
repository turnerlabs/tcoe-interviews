class Click {

    get badButton() {
        return $('#badButton');
    }

    get getBadButtonColor() {
        return $('#badButton').getCSSProperty('background-color');
    }
}
module.exports = new Click();