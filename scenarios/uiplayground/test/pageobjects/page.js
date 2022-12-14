/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
     * Visits the baseUrl pointing to the path and to the subPath if provided
     * @param path path of the path page (e.g. example.com/path)
     * @param subPath path of the subPath (e.g. example.com/path/subPath)
    */
    visit(path, subPath) {
        return browser.url(`/${path}/${subPath || ''}`);
    }
 
    /**
      * Opens the baseUrl pointing to the path
      * @param path path of the path page (e.g. example.com/path)
    */
    open (path) {
         return browser.url(`/${path}`)
    }

    /**
      * Refreshes the browser
    */
    async refreshBrowser() {
      await browser.refresh();
    }
}
