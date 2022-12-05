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

  async doClickOn(elementToClick) {
    await elementToClick.click();
  }
}

module.exports = new CommonActions();
