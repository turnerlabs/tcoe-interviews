/**
 * Common Actions Class
 */
class CommonActions {
  async waitForElementDisplayed(
    mobileElement,
    customTimeOut = 10000,
    customInterval = 5000
  ) {
    await mobileElement.waitForDisplayed({
      timeout: customTimeOut,
      interval: customInterval,
      timeoutMsg: "Element wasn't found",
    });
  }

  async waitForElementNotDisplayed(mobileElement, customTimeOut = 10000) {
    await mobileElement.waitForDisplayed({
      timeout: customTimeOut,
      interval: 5000,
      reverse: true,
      timeoutMsg: "Element still displayed",
    });
  }

  async isElementDisplayed(elementToCheck) {
    return await elementToCheck.isDisplayed();
  }

  async doClickOn(elementToClick) {
    await elementToClick.click();
  }

  async sendInputKeys(elementToFill, value) {
    await elementToFill.setValue(value);
  }

  findElementByDescriptionWithSelectProperty(description, selected) {
    return `new UiSelector().descriptionContains("${description}").selected(${selected})`;
  }
}

module.exports = new CommonActions();
