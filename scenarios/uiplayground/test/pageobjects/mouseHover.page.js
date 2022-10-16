
const Page = require('./page');

class MouseHouverPage extends Page {

    get clickmeButton() {
        return $('div.container>div>a');
    }

    async ClickOnClickmeButton() {
        await this.clickmeButton.click();
        await this.clickmeButton.click();
    }

    open() {
        return super.open('mouseover');
    }
}

module.exports = new MouseHouverPage();
