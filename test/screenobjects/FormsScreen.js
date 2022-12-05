const CommonActions = require("../helpers/CommonActions");
const Gestures = require("../helpers/Gestures");

/**
 * Forms Screen Class
 */
class FormsScreen {
  /**
   * Mobile elements
   */
  get formsScreen() {
    return $("~Forms-screen");
  }

  get input() {
    return $("~text-input");
  }

  get textResultInput() {
    return $("~input-text-result");
  }

  get dropDownButton() {
    return $("~Dropdown");
  }

  get dropdownText() {
    return $(
      `android=new UiSelector().description("Dropdown").
        childSelector(new UiSelector().className("android.widget.EditText"))`
    );
  }

  get activeButton() {
    return $("~button-Active");
  }

  get inactiveButton() {
    return $("~button-Inactive");
  }

  /**
   * Methods
   */
  async tapOnInput() {
    await CommonActions.doClickOn(this.input);
  }

  async typeOnInput(newText) {
    await CommonActions.sendInputKeys(this.input, newText);

    if (driver.isKeyboardShown()) {
      await CommonActions.doClickOn(this.formsScreen);
    }
  }

  async tapOnDropDownButton() {
    await CommonActions.doClickOn(this.dropDownButton);
  }

  async tapOnInactiveButton() {
    await CommonActions.doClickOn(this.inactiveButton);
  }

  async tapOnActiveButton() {
    await CommonActions.doClickOn(this.activeButton);
  }

  async scrollToScreenEnd(maxSearchTries = 4) {
    let scrollCounting = 0;
    do {
      await Gestures.swipeVertical(-0.5);
      scrollCounting++;
    } while (
      !(await CommonActions.isElementDisplayed(this.activeButton)) &&
      scrollCounting < maxSearchTries
    );
  }
}

module.exports = new FormsScreen();
