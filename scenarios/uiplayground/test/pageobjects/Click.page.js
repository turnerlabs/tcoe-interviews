const Page = require('./page');

class ClickPage extends Page{
    get mainButton() {
        return $('#badButton');
    }

    get hideBtnParent() {
        return this.hideButton.parentElement();
    }


    async clickMainButton() {
        await this.mainButton.waitForDisplayed();
        await this.mainButton.click();
    }

    async checkButtonGetsClassDanger(className) {
        await this.mainButton.waitForClickable();
        await expect(this.mainButton).toHaveElementClassContaining(className, {wait: 2000});
    }
}

module.exports = new ClickPage();