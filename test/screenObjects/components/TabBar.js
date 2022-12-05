const FormsScreen = require("../FormsScreen.js");
const Utils = require("../../helpers/Utils.js");
const HomeScreen = require("../HomeScreen.js");
module.exports = class TabBar {
  static get formsTab() {
    return $("~Forms");
  }
  static get homeTab() {
    return $("~Home");
  }

   static get clickableFormsTab(){
    const selector = 'new UiSelector().description("Forms").clickable(true)';
    return $(`android=${selector}`);

  }
  static async isFormsTabClickable(){
    await Utils.waitForElementDisplayed(this.clickableFormsTab);
    return await this.clickableFormsTab.isDisplayed();

  }
  static async waitForTabBarDisplayed() {
    return await (this.homeTab).waitForDisplayed({ timeout: 20000 });
  }

  static async openForms() {
    await (this.formsTab).click();
    return new FormsScreen();
  }

  static async isFormsTabSelected() {
    return this.formsTab
  }
  static async formsOptionIsSelectable() {

    await expect(await expect(this.formsTab).toBeSelected());
  }

  static async formsOptionIsClickable() {

    await expect(this.formsTab.isClickable());
  }
  static async goHomeScreen() {
    await Utils.changeScreenTo(this.homeTab);
    return new HomeScreen();
  }

  static async goFormsScreen() {
    await Utils.changeScreenTo(this.formsTab);
    return new FormsScreen();
  }
};
