const CommonActions = require("../../helpers/CommonActions");
const Utils = require("../../helpers/Utils");

/**
 * Native Dropdown Class
 */
class NativeDropDown {
  /**
   * Mobile elements
   */
  get dropDownComponent() {
    return $("android.widget.ListView");
  }

  get dropDownOptionsList() {
    return $$("android.widget.CheckedTextView");
  }

  /**
   * Methods
   */
  async getDropdownListSize() {
    return (await this.dropDownOptionsList.length) - 1;
  }

  async selectListOptionRandomly() {
    const optionToSelect = Utils.getRandomNumber(
      await this.getDropdownListSize()
    );

    await CommonActions.doClickOn(this.dropDownOptionsList[optionToSelect]);
  }
}

module.exports = new NativeDropDown();
