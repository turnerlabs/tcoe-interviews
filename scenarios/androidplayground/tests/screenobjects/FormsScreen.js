const AppScreen = require('./AppScreen');
const {SELECTORS} = require('../../data/formsData');

class FormsScreen extends AppScreen {
  constructor() { super('~Forms-screen'); }

  get formsTitle() { return $('~Forms-screen'); }
  get input() { return $('~text-input'); }
  get inputTextResult() { return $('~input-text-result'); }
  get switch() { return $('~switch'); }
  get switchText() { return $('~switch-text'); }
  get dropDown() { return $('~Dropdown'); }
  get activeButton() { return $('~button-Active'); }
  get inActiveButton() { return $('~button-Inactive'); }
  get formsOptionOnTabBarSelected() { return $(SELECTORS.FORMBUTTON_SELECTED); }
  get okButton() { return $(SELECTORS.OK_BUTTON); }


  async isKeyboardProvider(){
    return await driver.isKeyboardShown()
  }

  async tapOnInput() {
    await this.input.click();
  }

  async tapOnInputTextResult() {
    await this.inputTextResult.click();
  }

  async tapOnDropDown() {
    await this.dropDown.click();
  }

  async tapOnDropDownTitle() {
    await this.dropDownTitle.click();
  }

  async tapOnActiveButton() {
    await this.activeButton.click();
  }

  async tapOnInactiveButton() {
    await this.inActiveButton.click();
  }

  async sendInputKeys(newText) {
    await this.input.setValue(newText);

    if (await driver.isKeyboardShown()) {
      await $('~Forms-screen').click();
    }
  }

    async tapOnOkBtn (){
    await this.okButton.click();
   }

  async getDropDownText(){
    return $(SELECTORS.DROPDOWN).getText();
  }


}

module.exports = FormsScreen;