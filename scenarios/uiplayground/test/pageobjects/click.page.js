const Page = require('./page');

class Click extends Page {
    get badButton () {
        return $('#badButton');
    }

    open () {
        return super.open('click');
    }
}

module.exports = new Click();