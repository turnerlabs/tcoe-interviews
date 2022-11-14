

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VisibilityPage extends Page {
    /**
     * define selectors using getter methods
     */
    
     get unhideButton () {
        return $('#button*=unhide');
    }

    get hideButton () {
        return $('#hideButton');
    }

    get removedButton () {
        return $('#removedButton');
    }

    get zeroWidthButton () {
        return $('#zeroWidthButton');
    }

    get overlappedButton () {
        return $('overlappedButton');
    }

    get transparentButton () {
        return $('#transparentButton');
    }

    get invisibleButton () {
        return $('#invisibleButton');
    }

    get notdisplayedButton () {
        return $('#notdisplayedButton');
    }

    get offscreenButton () {
        return $('offscreenButton');
    }

    async clickButton (element) {
        await element.click();
    }

    async isButtonDisplayed (element) {
        await expect(element).toBeDisplayed()
    }

    async isButtonNotDisplayed (element) {
        await expect(element).not.toBeDisplayed()
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('visibility');
    }
}

module.exports = new VisibilityPage();
