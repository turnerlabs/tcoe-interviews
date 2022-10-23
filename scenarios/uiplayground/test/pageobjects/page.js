/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://uitestingplayground.com/${path}`)
    }
    
    async verifyUrl(pageLink) {
        await expect(browser).toHaveUrlContaining(pageLink)
      }

      async verifyTitle(title) {
        await expect(browser).toHaveTitle(title);
      }
}
