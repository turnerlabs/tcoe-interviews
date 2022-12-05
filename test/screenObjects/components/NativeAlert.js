const Utils = require('../../helpers/Utils.js');

class NativeAlert {
static get alertScreen(){
  const selector =
      'new UiSelector().resourceId("android:id/alertTitle")';
  return $(`android=${selector}`);

}

  static get alertOptions() {
    const selector =
      'new UiSelector().className("android.widget.Button")';
    return $$(`android=${selector}`);
  }

  static async alertIsDisplayed() {
    await Utils.waitForElementDisplayed(this.alertScreen);
    await this.alertScreen.isDisplayed();
  }
  static async alertIsNotDisplayed() {
   return this.alertScreen
  }

  static async tapRandomOption() {
    let theRandomOption = Math.floor(Math.random() * 2);
    await Utils.tapOn(this.alertOptions[theRandomOption]);
  }

  
}

module.exports = NativeAlert;
