const Utils = require('../helpers/Utils');


class FormsScreen  {

    get formsContainer() {return $('~Forms-screen');}
    get input() { return $('~text-input'); }
    get inputTextResult() { return $('~input-text-result'); }
    get switch() { return $('~switch'); }
    get switchText() { return $('~switch-text'); }
    get pickerText() { return Utils.androidElementSelector('new UiSelector().className("android.widget.EditText").instance(1)'); }
    get dropdown() { return $('~Dropdown'); }
    get activeButton() { return $('~button-Active'); }
    get inactiveButton() { return $('~button-Inactive'); }
   

    async waitForFormsToBeDisplayed() {
        await Utils.waitForIsShown(this.formsContainer)
    }

    async tapOnInputText() {
        await Utils.tapOn(this.input);
    }
    async tapOnInputTextResult() {
        await Utils.tapOn(this.inputTextResult);
    }

    async tapOnSwitch() {
        await Utils.tapOn(this.switch);
    }

    async tapOnDropdown() {
        await Utils.tapOn(this.dropdown);
    }

    async tapOnActiveButton() {
        await Utils.tapOn(this.activeButton);
    }

    async tapOnInactiveButton() {
        await Utils.tapOn(this.inactiveButton);
    }

    async typeInInput(text) {
        await Utils.sendKeys(this.input, text);
    }
    async clearInput() {
        await Utils.sendKeys(this.input, "");
    }

    async isSwitchActive() {             
            const text = await this.switch.getText();
            return text.includes("ON");
         }  
}

module.exports = new FormsScreen();