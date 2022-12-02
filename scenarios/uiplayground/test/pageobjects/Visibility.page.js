const Page = require('./page');

class VisibilityPage extends Page{
    get hideButton() {
        return $('#hideButton');
    }

    get hideBtnParent() {
        return this.hideButton.parentElement();
    }


    async clickHideButton() {
        await this.hideButton.waitForDisplayed();
        await this.hideButton.click();
    }

    async checkHideButtonDisappear() {
        await expect(this.hideButton).not.toBeDisplayed();
    }

    async checkUnhideButtonAppears(values) {
        const cellButton = await this.hideBtnParent.$('<button>');
        await cellButton.waitForDisplayed();
        await expect(cellButton).toHaveId(values.id);
        await expect(cellButton).toHaveTextContaining(values.text);
    }
}

module.exports = new VisibilityPage();