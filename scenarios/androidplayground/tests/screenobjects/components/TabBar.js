const FormsScreen = require("../FormsScreen.js");
const consoleLog = require('console');

module.exports = class TabBar {
  static async waitForTabBarShown() {
    return await $("~Home").waitForDisplayed({ timeout: 20000 });
  }

  static async validateDefault(){
    await $("~Forms")
  }

  static async openForms() {
    await $("~Forms").click();
    return new FormsScreen();
  }

};