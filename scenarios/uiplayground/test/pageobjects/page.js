/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`/${path}`);
  }

  /**
   * get visible element on the page
   * @param element web element on the page
   * @returns web element
   */
  async getVisibleElement(element) {
    await element.waitForDisplayed();
    return await element;
  }

  /**
   * click element
   * @param element web element on the page
   */
  async clickElement(element) {
    await element.waitForClickable();
    await element.click();
  }

  /**
   * input value to <select> or <input>
   * @param element web element on the page
   */
  async inputValue(element, value) {
    await element.waitForDisplayed();
    await element.setValue(value);
  }

  /**
   * get value of <textarea>, <select> or text <input>
   * @param element web element on the page
   * @returns text value
   */
  async getValue(element) {
    await element.waitForDisplayed();
    return await element.getValue();
  }

  /**
   * get text content from a DOM-element
   * @param element web element on the page
   * @returns text content
   */
  async getElementText(element) {
    await element.waitForDisplayed();
    return await element.getText();
  }

  /**
   * get element attribute value
   * @param element web element on the page
   * @param attrName attribute name
   * @returns attribute value
   */
  async getAttributeValue(element, attrName) {
    await element.waitForExist();
    return await element.getAttribute(attrName);
  }

  /**
   * get element count from a list of elements
   * @param element web element on the page
   * @returns elements list count
   */
  async getElementCount(elements) {
    return await elements.length;
  }

  /**
   * scroll element into view
   * @param element web element on the page
   */
  async scrollElIntoView(element) {
    await element.waitForDisplayed();
    await element.scrollIntoView();
  }

  /**
   * hover on an element
   * @param element web element on the page
   */
  async hoverOnElement(element) {
    await element.waitForExist();
    await element.moveTo();
  }

  /**
   * wait for certain element not to have certain attribute
   * @param element web element on the page
   * @param attrName attribute name
   * @param attrVlue attribute value
   */
  async waitForEleNotHaveAttr(element, attrName, attrVlue) {
    await element.waitForDisplayed();
    await browser.waitUntil(
      async () =>
        (await this.getAttributeValue(element, attrName)) !== attrVlue,
      {
        timeout: 25000,
      }
    );
  }
};
