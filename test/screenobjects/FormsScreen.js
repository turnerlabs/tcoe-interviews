const GenericActions = require('../helpers/GenericActions.js');
const Utils = require('../helpers/Utils.js');
const AppScreen = require('./AppScreen.js');

class FormsScreen extends AppScreen {
    
    get formsView() {
        return $('~Forms-screen');
    }

    get input() {
        return $('~text-input');
    }

    get reviewInput() {
        return $('~input-text-result');
    }

    get dropdown() {
        return $('~Dropdown');
    }

    get internalDropdown() {
        return $$(Utils.findAndroidElementByclassName("android.widget.EditText"))[1];
    }

    get activeButton() {
        return $('~button-Active');
    }

    get inactiveButton() {
        return $('~button-Inactive');
    }

    get viewTitle() {
        return $(`${Utils.findAndroidElementByclassName("android.widget.TextView")}.text("Form components")`);
    }

    constructor() {
        super('~Forms-screen');
    }

    async typeOnInput(text) {
        await GenericActions.sendKeys(this.input, text);

        if (await driver.isKeyboardShown()) {
            await GenericActions.tapOn(viewTitle);
        }
    }

    async getTextReviewInput() {
        await GenericActions.waitForIsShown(this.reviewInput);
        return await this.reviewInput.getText();
    }

    async clearInput() {
        return await this.input.clearValue();
    }

    async tapOnDropdown() {
        await GenericActions.tapOn(this.dropdown);
    }

    async getTextDropdown() {
        await GenericActions.waitForIsShown(this.internalDropdown);
        return await this.internalDropdown.getText();
    }

    async tapOnInactiveButton() {
        await GenericActions.tapOn(this.inactiveButton);
    }

    async tapOnActiveButton() {
        await GenericActions.tapOn(this.activeButton);
    }

    async formsViewIsDisplayed() {
        await GenericActions.waitForIsShown(this.formsView);
        return await this.formsView.isDisplayed();
    }

    async tapOnInput() {
        await GenericActions.tapOn(this.input);
    }

    async keyboardIsDisplayed() {
        return await driver.isKeyboardShown();
    }

    async goOutFromKeyboard() {
        await GenericActions.tapOn(this.viewTitle);
    }
}

module.exports = new FormsScreen();
