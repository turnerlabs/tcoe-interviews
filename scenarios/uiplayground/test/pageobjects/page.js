/**
* Main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

  /**
    * Opens a sub page of the page
    * @param path path of the sub page
  */
  openPage(path) {
    return browser.url(`http://uitestingplayground.com/${path}`)
  }

  /**
   * Verify that the url contains the sub page url
   * @param {String} pageUrl to validate
   */
  async verifyPageUrl(pageUrl) {
    await expect(browser).toHaveUrlContaining(pageUrl);
  }

  /**
   * Verify the page title
   * @param {String} pageTitle to validate
   */
  async verifyPageTittle(pageTitle) {
    await expect(browser).toHaveTitle(pageTitle);
  }

}