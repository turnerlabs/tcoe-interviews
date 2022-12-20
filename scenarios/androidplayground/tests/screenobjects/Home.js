module.exports = class AppScreen {
    async waitForIsShown(element) {
      return element.waitForDisplayed();
    }
  };