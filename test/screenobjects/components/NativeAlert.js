const CommonActions = require("../../helpers/CommonActions");

/**
 * Native Alert Class
 */
class NativeAlert {
  /**
   * Mobile elements
   */
  get alertTitle() {
    return $("id=android:id/alertTitle");
  }

  get okAlertButton() {
    return $("id=android:id/button1");
  }

  /**
   * Methods
   */
  async waitForAlertShown() {
    await CommonActions.waitForElementDisplayed(this.alertTitle);
  }

  async tapOnOkAlertButton() {
    await CommonActions.doClickOn(this.okAlertButton);
  }
}

module.exports = new NativeAlert();
