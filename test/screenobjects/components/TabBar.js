const CommonActions = require("../../helpers/CommonActions");

/**
 * TabBar Class
 */
class TabBar {
  /**
   * Mobile elements
   */
  get homeOption() {
    return $("~Home");
  }

  get formsOption() {
    return $("~Forms");
  }

  get homeScreenIconSelected() {
    const homeSelectedLocator =
      CommonActions.findElementByDescriptionWithSelectProperty("Home", true);
    return $(`android=${homeSelectedLocator}`);
  }

  /**
   * Methods
   */
  async waitForTabBarShown() {
    await CommonActions.waitForElementDisplayed(this.homeOption, 15000);
  }

  async openForms() {
    await CommonActions.doClickOn(this.formsOption);
  }
}

module.exports = new TabBar();
