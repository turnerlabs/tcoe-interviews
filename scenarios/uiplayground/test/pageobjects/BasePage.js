
const  {config } = require('../../../../wdio.conf')

 class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   
    openPage (path) {
        return browser.url(config.baseUrl+path);
    }

    /* To open the Home Page of the Url
    */
    open() {
        return browser.url(config.baseUrl);
    }
}

module.exports = new BasePage();
