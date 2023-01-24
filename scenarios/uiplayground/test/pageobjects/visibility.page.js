const Page = require('./page');

class VisibilityPage extends Page {

    get hideBtn() {
        return $('#hideButton');
    }

    open() {
        return super.open('visibility');
    }

    async clickHideBtn() {
        await this.hideBtn.click();
    }
}

module.exports = new VisibilityPage();